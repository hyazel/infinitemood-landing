
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AudioManager from '../utils/AudioManager';

interface HeroAlternativeBProps {
    onComplete?: () => void;
}

const HeroAlternativeB: React.FC<HeroAlternativeBProps> = ({ onComplete }) => {
    const [hasEntered, setHasEntered] = useState(false);

    // Lock scroll on mount
    useEffect(() => {
        if (!hasEntered) {
            document.body.style.overflow = 'hidden';
            // Also ensure we are at the top
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'hidden'; // Keep horizontal lock
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'hidden';
        };
    }, [hasEntered]);

    const handleExplore = () => {
        // Unlock
        setHasEntered(true);
        if (onComplete) onComplete();

        // Play Audio via Manager to ensure persistence across component unmount
        AudioManager.getInstance().playHero();

        // Scroll to next section
        // Little delay to allow state unlock to process style changes if needed
        setTimeout(() => {
            const nextSection = document.getElementById('manifesto');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const straplineText = "Pour se concentrer. S’évader. Librement.";

    return (
        <div className="relative w-full h-screen bg-background-primary text-text-primary font-sans selection:bg-accent-primary/30 flex items-center justify-center overflow-hidden">

            <AnimatePresence>
                {!hasEntered && (
                    <>
                        {/* Title 1: "Une Musique Composée" */}
                        {/* Shows 0s -> 2.5s */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute z-10 text-center"
                        >
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{ delay: 2.5, duration: 0.8 }}
                            >
                                <h1 className="font-display font-light text-[3.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.9] tracking-tight text-white/90">
                                    Une <br />
                                    <span className="font-normal italic text-white mix-blend-overlay">Musique</span> <br />
                                    <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary opacity-90">Composée.</span>
                                </h1>
                            </motion.div>
                        </motion.div>

                        {/* Title 2: "Et Pas Générée" */}
                        {/* Shows 3s -> 5.5s */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: 3, duration: 1, ease: "easeOut" }}
                            className="absolute z-10 text-center"
                        >
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{ delay: 5.5, duration: 0.8 }}
                            >
                                <h1 className="font-display font-light text-[3.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.9] tracking-tight text-text-secondary">
                                    Et <br />
                                    <span className="">Pas</span> <br />
                                    <span className="relative inline-block">Générée.</span>
                                </h1>
                            </motion.div>
                        </motion.div>

                        {/* Strapline + Button */}
                        {/* Shows 6s -> Forever */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 6.5, duration: 1.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-12"
                        >
                            {/* Strapline Text */}
                            <p className="text-sm md:text-xl text-text-tertiary font-sans font-medium tracking-[0.3em] uppercase flex flex-wrap justify-center gap-[0.2em] max-w-2xl text-center px-4">
                                {straplineText.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, color: "#B2AA9F" }} // tertiary
                                        animate={{ opacity: 1, color: "#F4EFE6" }} // primary
                                        transition={{
                                            delay: 6.5 + (index * 0.03),
                                            duration: 0.5
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </p>

                            {/* Explorer Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 8, duration: 1 }}
                                onClick={handleExplore}
                                className="group relative px-8 py-4 bg-accent-primary border border-transparent rounded-full hover:bg-accent-secondary transition-all duration-500 overflow-hidden shadow-lg shadow-accent-primary/20"
                            >
                                <span className="relative z-10 font-sans text-xs md:text-sm tracking-[0.2em] upercase text-white font-medium transition-colors">
                                    EXPLORER
                                </span>
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HeroAlternativeB;
