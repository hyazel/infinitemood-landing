import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useMotionValueEvent, useMotionTemplate, animate } from 'framer-motion';
import AudioManager from '../utils/AudioManager';

interface HeroAlternativeAProps {
    onComplete?: () => void;
}

const HeroAlternativeA: React.FC<HeroAlternativeAProps> = ({ onComplete }) => {
    const [hasEntered, setHasEntered] = useState(false);

    // Virtual scroll state
    const scrollY = useMotionValue(0);
    const maxScroll = 600; // Increased virtual scroll height for better control

    // Transforms
    const progress = useTransform(scrollY, [0, maxScroll], [0, 1]);

    // Title animations (fade out early)
    const titleOpacity = useTransform(progress, [0, 0.4], [1, 0]);
    const titleBlur = useTransform(progress, [0, 0.4], ["0px", "10px"]);
    const titleScale = useTransform(progress, [0, 0.4], [1, 0.95]);

    // Strapline animations
    // Initial: bottom of screen. Target: roughly centered.
    // We use explicit `top` interpolation to move it up.
    // Start: Centered at 92% down (Lower). End: Centered at 50% (Middle).
    const straplineTop = useTransform(progress, [0, 1], ["92%", "50%"]);
    const straplineY = useTransform(progress, [0, 1], ["-50%", "-50%"]);
    // Start smaller (0.8) to grow more significantly
    const straplineScale = useTransform(progress, [0, 1], [0.8, 1.2]);

    // Word Opacity Stagger
    // Range 0.4 to 0.9
    const line1Words = ["Pour", "se", "concentrer.", "S’évader."];
    const line2Words = ["Librement"]; // New line for emphasis

    // Constant opacity 1 (using transform to maintain type compatibility)
    // User Update: "trop visible, descend l'opacité et anime là ensuite"
    // Start at 0.3, fade to 1 quickly.
    const line1Opacities = line1Words.map(() => useTransform(progress, [0, 0.3], [0.3, 1]));
    const line2Opacities = line2Words.map(() => useTransform(progress, [0, 0.3], [0.3, 1]));

    // Icons & Button Opacity (Appear at very end)
    const buttonOpacity = useTransform(progress, [0.9, 1], [0, 1]);
    const buttonY = useTransform(progress, [0.9, 1], [20, 0]);

    const [canExplore, setCanExplore] = useState(false);

    // Monitor progress to enable interaction
    useMotionValueEvent(progress, "change", (latest) => {
        if (!hasEntered) {
            setCanExplore(latest > 0.95);
        }
    });

    // Lock scroll on mount
    useEffect(() => {
        if (!hasEntered) {
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'hidden';
        };
    }, [hasEntered]);

    // Progressive Scroll Handler
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!hasEntered) {
                const current = scrollY.get();
                // Accumulate scroll with clamping. 
                // Sensitivity: deltaY can be fast, let's just add it directly but clamped.
                const newPos = Math.min(Math.max(current + e.deltaY, 0), maxScroll);
                scrollY.set(newPos);
            }
        };

        // Basic Touch support for mobile (swipe up to scroll forward)
        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            if (!hasEntered) {
                const currentY = e.touches[0].clientY;
                const delta = touchStartY - currentY; // Up is positive delta
                const currentScroll = scrollY.get();
                // Touch sensitivity multiplier
                const newPos = Math.min(Math.max(currentScroll + (delta * 1.5), 0), maxScroll);
                scrollY.set(newPos);
                touchStartY = currentY; // Reset for continuous drag
            }
        };

        window.addEventListener('wheel', handleWheel);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [hasEntered, scrollY]);

    const handleExplore = () => {
        setHasEntered(true);
        if (onComplete) onComplete();
        AudioManager.getInstance().playHero();

        setTimeout(() => {
            const nextSection = document.getElementById('manifesto');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="relative w-full h-screen bg-background-primary text-text-primary font-sans flex items-center justify-center overflow-hidden">

            <AnimatePresence>
                {!hasEntered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 container mx-auto px-6 h-full flex flex-col justify-center"
                    >
                        {/* Main Title */}
                        <motion.div
                            className="flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-12 md:gap-0 mt-[-5vh]"
                            style={{
                                opacity: titleOpacity,
                                filter: titleBlur,
                                scale: titleScale
                            }}
                        >
                            {/* Left Block - Centered vertically */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex flex-col items-start relative z-10"
                            >
                                {/* Multiple Small Glass Shards - Left */}
                                {/* Shard 1 - Top Left */}
                                <motion.div
                                    animate={{
                                        y: [0, -8, 0],
                                        rotate: [-5, -2, -5],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] rounded-[2rem] rounded-tr-md backdrop-blur-md border border-white/20 -z-10 opacity-10 pointer-events-none overflow-hidden bg-accent-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 to-transparent mix-blend-overlay" />
                                    <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                                </motion.div>

                                {/* Shard 2 - Behind 'Musique' */}
                                <motion.div
                                    animate={{
                                        y: [0, 10, 0],
                                        x: [0, 5, 0],
                                        rotate: [3, -5, 3]
                                    }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-[30%] left-[10%] w-[60%] h-[50%] rounded-[1.5rem] rounded-bl-sm backdrop-blur-md border border-white/20 -z-20 opacity-15 pointer-events-none overflow-hidden bg-accent-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-transparent mix-blend-overlay" />
                                    <motion.div animate={{ x: ["100%", "-100%"] }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent -skew-x-12" />
                                </motion.div>

                                {/* Shard 3 - Behind 'Composée' */}
                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                        rotate: [10, 12, 10]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute bottom-[-10%] left-[-5%] w-[45%] h-[40%] rounded-[2rem] rounded-tl-none backdrop-blur-md border border-white/20 -z-10 opacity-10 pointer-events-none overflow-hidden bg-accent-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/20 to-transparent mix-blend-overlay" />
                                    <motion.div animate={{ y: ["100%", "-100%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent" />
                                </motion.div>

                                {/* [NEW] Shard 4 - Small sharp one strictly below "Composée" */}
                                <motion.div
                                    animate={{
                                        x: [0, -4, 0],
                                        rotate: [15, 18, 15]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                                    className="absolute top-[95%] right-[10%] w-[30%] h-[25%] rounded-[1rem] rounded-bl-none backdrop-blur-md border border-white/20 -z-10 opacity-10 pointer-events-none overflow-hidden bg-accent-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/40 to-transparent mix-blend-overlay" />
                                </motion.div>

                                {/* [NEW] Shard 5 - Below left */}
                                <motion.div
                                    animate={{
                                        y: [0, 6, 0],
                                        rotate: [-2, 2, -2]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                                    className="absolute top-[100%] left-[10%] w-[40%] h-[20%] rounded-[3rem] backdrop-blur-md border border-white/10 -z-30 opacity-10 pointer-events-none overflow-hidden bg-accent-primary/5"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                                </motion.div>

                                {/* [NEW] Shard 6 - Further down right */}
                                <motion.div
                                    animate={{
                                        y: [0, -8, 0],
                                        rotate: [3, 6, 3]
                                    }}
                                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                                    className="absolute top-[120%] right-[5%] w-[25%] h-[35%] rounded-[1rem] rounded-tr-none backdrop-blur-md border border-white/10 -z-40 opacity-10 pointer-events-none overflow-hidden bg-accent-primary/5 shadow-sm"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent" />
                                </motion.div>

                                {/* [NEW] Shard 7 - Deep bottom left */}
                                <motion.div
                                    animate={{
                                        x: [0, 5, 0],
                                        rotate: [-5, -2, -5]
                                    }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
                                    className="absolute top-[130%] left-[20%] w-[30%] h-[15%] rounded-[4rem] backdrop-blur-md border border-white/10 -z-40 opacity-5 pointer-events-none overflow-hidden bg-accent-primary/5"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                                </motion.div>

                                <h1 className="font-sans font-bold text-[3.5rem] md:text-[5rem] lg:text-[7rem] leading-[0.9] tracking-tight text-white text-left mix-blend-overlay">
                                    Une <br />
                                    Musique <br />
                                    <span className="text-accent-primary underline decoration-4 underline-offset-8 mix-blend-normal">Composée.</span>
                                </h1>
                            </motion.div>

                            {/* Right Block - Pushed down slightly */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="flex flex-col items-end self-end md:self-auto md:mt-32 relative z-10"
                            >
                                {/* Multiple Small Glass Shards - Right */}
                                {/* Shard 1 - Top Right */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [5, 2, 5]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                    className="absolute top-[-15%] right-[-5%] w-[40%] h-[40%] rounded-[2rem] rounded-bl-md backdrop-blur-md border border-white/20 -z-10 opacity-10 pointer-events-none overflow-hidden bg-[#D9943F]/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-bl from-[#D9943F]/30 to-transparent mix-blend-overlay" />
                                    <motion.div animate={{ x: ["100%", "-100%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent -skew-x-12" />
                                </motion.div>

                                {/* Shard 2 - Behind 'Pas' */}
                                <motion.div
                                    animate={{
                                        y: [0, 8, 0],
                                        x: [0, -5, 0],
                                        rotate: [-2, 0, -2]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-[35%] right-[10%] w-[55%] h-[35%] rounded-[1.5rem] rounded-tr-sm backdrop-blur-md border border-white/20 -z-20 opacity-10 pointer-events-none overflow-hidden bg-[#D9943F]/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tl from-[#D9943F]/20 to-transparent mix-blend-overlay" />
                                    <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                                </motion.div>

                                {/* Shard 3 - Bottom Right */}
                                <motion.div
                                    animate={{
                                        y: [0, -6, 0],
                                        rotate: [-8, -10, -8]
                                    }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                    className="absolute bottom-[-5%] right-[-10%] w-[35%] h-[45%] rounded-[2rem] rounded-tl-xl backdrop-blur-md border border-white/20 -z-10 opacity-10 pointer-events-none overflow-hidden bg-[#D9943F]/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#D9943F]/20 to-transparent mix-blend-overlay" />
                                    <motion.div animate={{ y: ["-100%", "100%"] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                                </motion.div>

                                {/* [NEW] Shard 4 - Below left of "Et Pas" */}
                                <motion.div
                                    animate={{
                                        y: [0, -12, 0],
                                        rotate: [5, 0, 5]
                                    }}
                                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                                    className="absolute top-[100%] left-[0%] w-[25%] h-[30%] rounded-[1rem] rounded-tr-none backdrop-blur-md border border-white/20 -z-20 opacity-10 pointer-events-none overflow-hidden bg-[#D9943F]/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#D9943F]/30 to-transparent mix-blend-overlay" />
                                </motion.div>

                                {/* [NEW] Shard 5 - Below right of "Générée" */}
                                <motion.div
                                    animate={{
                                        x: [0, 5, 0],
                                        rotate: [-15, -12, -15]
                                    }}
                                    transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                                    className="absolute top-[90%] right-[5%] w-[35%] h-[25%] rounded-[2rem] rounded-br-none backdrop-blur-md border border-white/20 -z-30 opacity-10 pointer-events-none overflow-hidden bg-[#D9943F]/5"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                                </motion.div>

                                {/* [NEW] Shard 6 - Further down left */}
                                <motion.div
                                    animate={{
                                        y: [0, 10, 0],
                                        rotate: [2, 5, 2]
                                    }}
                                    transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
                                    className="absolute top-[125%] left-[-10%] w-[25%] h-[30%] rounded-[1.5rem] rounded-bl-none backdrop-blur-md border border-white/10 -z-40 opacity-10 pointer-events-none overflow-hidden bg-[#D9943F]/5 shadow-sm"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                                </motion.div>

                                {/* [NEW] Shard 7 - Deep bottom center/right */}
                                <motion.div
                                    animate={{
                                        x: [0, -6, 0],
                                        rotate: [-8, -5, -8]
                                    }}
                                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3.8 }}
                                    className="absolute top-[135%] right-[15%] w-[40%] h-[18%] rounded-[5rem] backdrop-blur-md border border-white/10 -z-40 opacity-5 pointer-events-none overflow-hidden bg-[#D9943F]/5"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent" />
                                </motion.div>

                                <h1 className="font-sans font-bold text-[3.5rem] md:text-[5rem] lg:text-[7rem] leading-[0.9] tracking-tight text-text-secondary text-right mix-blend-overlay">
                                    Et <br />
                                    Pas <br />
                                    <span className="blur-[1px]">Générée</span>
                                </h1>
                            </motion.div>
                        </motion.div>

                        {/* Centered Container: Icons -> Strapline -> Button */}
                        <motion.div
                            className="absolute left-0 right-0 flex flex-col items-center justify-center gap-12 z-30 pointer-events-none"
                            style={{
                                top: straplineTop,
                                y: straplineY
                            }}
                        >
                            {/* Platform Icons (Always visible or fade in?) - User said "au dessus de pour se concent..." */}
                            {/* We'll make them fade in with opacity linked to progress or just exist? 
                                 User said "Icons... au dessus du bouton" previously, now "au dessus de pour se concent...".
                                 Let's make them part of the main flow. 
                             */}
                            <motion.div
                                className="flex items-center gap-8 opacity-80"
                                style={{ opacity: buttonOpacity }} // Reuse fade in or maybe keep them visible? User said "appearing with button" before. Let's keep consistency.
                            >
                                {/* Apple Icon */}
                                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg>

                                {/* Android Icon */}
                                <svg viewBox="0 0 576 512" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" /></svg>
                            </motion.div>

                            <motion.div
                                className="flex flex-col items-center gap-4 text-center max-w-2xl px-4"
                                style={{ scale: straplineScale }}
                            >
                                {/* Line 1: Bigger Text */}
                                <div className="flex flex-wrap justify-center gap-x-[0.3em] text-lg md:text-2xl text-text-primary font-sans font-medium tracking-[0.2em] uppercase">
                                    {line1Words.map((word, i) => (
                                        <motion.span
                                            key={`l1-${i}`}
                                            style={{ opacity: line1Opacities[i] }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </div>
                                {/* Line 2: Librement */}
                                <div className="flex flex-wrap justify-center gap-x-[0.3em] text-lg md:text-2xl text-text-primary font-sans font-medium tracking-[0.2em] uppercase">
                                    {line2Words.map((word, i) => (
                                        <motion.span
                                            key={`l2-${i}`}
                                            style={{ opacity: line2Opacities[i] }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Button appears after scroll */}
                            <motion.div
                                style={{
                                    opacity: buttonOpacity,
                                    y: buttonY
                                }}
                                className={`flex flex-col items-center gap-4 transition-all duration-300 ${canExplore ? 'pointer-events-auto' : 'pointer-events-none'}`}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleExplore}
                                    className="px-8 py-3 bg-accent-primary text-white font-bold rounded-full text-sm uppercase tracking-wider hover:bg-accent-secondary transition-colors"
                                >
                                    Explorer
                                </motion.button>
                            </motion.div>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
            {/* Radial Blur Reveal Overlay */}
            <RevealOverlay />
        </div>
    );
};

const RevealOverlay = () => {
    const progress = useMotionValue(0);
    const maskImage = useMotionTemplate`radial-gradient(circle at center, transparent ${progress}%, black ${useTransform(progress, p => p + 20)}%)`;

    useEffect(() => {
        animate(progress, 150, { duration: 2.5, ease: "easeOut", delay: 0.2 });
    }, []);

    return (
        <motion.div
            className="absolute inset-0 z-[60] pointer-events-none"
            style={{
                backdropFilter: "blur(20px)",
                maskImage,
                WebkitMaskImage: maskImage
            }}
        />
    );
};

export default HeroAlternativeA;
