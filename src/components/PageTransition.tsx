import { motion, type Easing } from 'framer-motion';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

interface PageTransitionProps {
    children: ReactNode;
    className?: string;
    variant?: 'ember_fade' | 'orchid_curtain' | 'dreamy_blur' | 'column_fracture' | 'parallax_slide';
}

const PageTransition = ({ children, className, variant = 'column_fracture' }: PageTransitionProps) => {

    const columns = useMemo(() => {
        // Create 5 columns for the fracture effect
        return [...Array(5)].map((_, i) => i);
    }, []);

    const easeOut: Easing = "easeOut";
    const easeIn: Easing = "easeIn";

    // Variant A: Ember Fade
    const emberFade = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: easeIn } }
    };


    // We render the content and the overlay separately
    // The trick for Variant D is:
    // EXIT: content stays, columns slide in from bottom to cover screen (y: 100% -> 0%)
    // ENTER: columns start covering screen (y: 0%), content is behind (or ready), columns slide up (y: 0% -> -100%)

    // Actually, simple way for current layout:
    // We wrap the children in a div that handles its own basic opacity/scale if needed
    // And independent columns that animate based on the parent's lifecycle?

    // Let's use a simpler approach where the columns are part of the page component's motion

    return (
        <div className={`relative w-full min-h-screen ${className || ''}`}>
            {variant === 'column_fracture' && (
                <div className="fixed inset-0 z-50 pointer-events-none flex flex-row">
                    {columns.map((i) => (
                        <motion.div
                            key={i}
                            className="bg-background-primary h-full w-[20.2%] flex-shrink-0 relative border-r border-primitive-neutral-orchid_ash_800/30 -ml-[1px] first:ml-0"
                            initial={{ y: "0%" }} // Starts covering (for entry)
                            animate={{
                                y: "-100%", // Slides UP to reveal
                                transition: {
                                    duration: 0.8,
                                    ease: [0.76, 0, 0.24, 1], // Custom heavy ease
                                    delay: i * 0.05 // Staggered reveal
                                }
                            }}
                            exit={{
                                y: ["100%", "0%"], // Slides IN from bottom to cover
                                transition: {
                                    duration: 0.5,
                                    ease: [0.76, 0, 0.24, 1],
                                    delay: i * 0.05
                                }
                            }}
                        />
                    ))}
                </div>
            )}

            {/* 
               Content Animation ensures the content itself is distinct 
               Wait for columns to reveal 
            */}
            <motion.div
                className="w-full h-full"
                initial={variant === 'column_fracture' ? { opacity: 0 } : emberFade.initial}
                animate={variant === 'column_fracture' ? {
                    opacity: 1,
                    transition: { delay: 0.4, duration: 0.4 }
                } : emberFade.animate}
                exit={variant === 'column_fracture' ? {
                    opacity: 1,
                    transition: { duration: 0.1 }
                } : emberFade.exit}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default PageTransition;
