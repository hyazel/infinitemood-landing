import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const Hero: React.FC = () => {
    const navigate = useNavigate();
    const words = ["se concentrer", "s'évader", "s'inspirer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 5000); // Change every 3 seconds - comment says 3 but 5000 is 5s. Keeping original logic.
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen bg-background-primary flex flex-col justify-start pt-48 overflow-hidden text-text-primary font-sans">

            {/* Hero Content */}
            <div className="z-10 w-full max-w-7xl mx-auto px-12 md:px-24 flex flex-col items-center gap-12">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-display font-bold leading-[1.1] text-center"
                >
                    <span className="text-text-primary">FRAGMNT</span>
                    <span className="text-text-primary font-normal"> est une app </span>
                    <br className="hidden md:block" />
                    <span className="text-text-primary">d’ambiances musicales</span>
                    <span className="text-text-secondary font-normal"> pour </span>
                    <br />
                    <div className="inline-flex items-center align-bottom relative mt-2 md:mt-4">
                        <AnimatePresence mode='wait'>
                            <motion.span
                                key={index}
                                className="relative block text-accent-primary"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: {
                                        transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                    },
                                    visible: {
                                        transition: { staggerChildren: 0.05, delayChildren: 0.2 }
                                    }
                                }}
                            >
                                {words[index].split('').map((char, i) => (
                                    <motion.span
                                        key={`${index}-${i}`}
                                        className="inline-block"
                                        variants={{
                                            hidden: {
                                                y: 20,
                                                opacity: 0,
                                                filter: 'blur(10px)',
                                                transition: { duration: 0.4 }
                                            },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                filter: 'blur(0px)',
                                                transition: { duration: 0.6, ease: "easeOut" }
                                            }
                                        }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </motion.span>
                                ))}
                            </motion.span>
                            <span className="opacity-0 whitespace-nowrap absolute top-0 left-0 -z-10">{words[index]}</span>
                        </AnimatePresence>
                    </div>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 0.8 }}
                >
                    <GlassExploreButton onClick={() => navigate('/exploration')}>
                        DEMO
                    </GlassExploreButton>
                </motion.div>

            </div>



        </div>
    );
};

export default Hero;

function GlassExploreButton({
    children = "Explore",
    className = "",
    ...props
}: React.ComponentProps<'button'>) {
    return (
        <button
            {...props}
            className={[
                "group relative px-10 py-3 rounded-full overflow-hidden",
                "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_80%)] backdrop-blur-md",
                "text-lg font-display font-medium text-white/90 tracking-wide",
                "shadow-[inset_2px_0_4px_rgba(255,255,255,0.05),inset_-2px_0_4px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.2)]",
                "hover:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]",
                "hover:shadow-[inset_3px_0_6px_rgba(255,255,255,0.3),inset_-3px_0_6px_rgba(255,255,255,0.3),0_15px_40px_rgba(0,0,0,0.4)]",
                "transition-all duration-300 active:scale-[0.98]",
                className,
            ].join(" ")}
        >
            <span className="relative z-10 uppercase tracking-widest text-sm font-bold">{children}</span>
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
    );
}
