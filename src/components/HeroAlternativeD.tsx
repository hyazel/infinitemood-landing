import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { startScroll } from './SmoothScroll';
import AudioManager from '../utils/AudioManager';

interface HeroAlternativeDProps {
    onComplete?: () => void;
}

const HeroAlternativeD: React.FC<HeroAlternativeDProps> = ({ onComplete }) => {

    // --- Mouse Interaction ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        // Subtle normalized values
        mouseX.set((clientX / innerWidth) - 0.5);
        mouseY.set((clientY / innerHeight) - 0.5);
    };

    useEffect(() => {
        AudioManager.getInstance().loadMasterBank();
    }, []);

    const handleExplore = () => {
        startScroll();
        if (onComplete) onComplete();
        AudioManager.getInstance().playHero();
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen bg-background-primary text-text-primary overflow-hidden font-display selection:bg-accent-secondary/30"
        >
            {/* --- 1. THE FLUID ATMOSPHERE (Background) --- */}
            {/* A composite of moving gradient orbs that simulate an aurora/liquid */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Orb 1: Deep Orchid */}
                <motion.div
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -100, 50, 0],
                        scale: [1, 1.2, 0.9, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent-deep/20 rounded-full blur-[120px] mix-blend-screen"
                />
                {/* Orb 2: Bright Teal (Mist Aqua) - for contrast */}
                <motion.div
                    animate={{
                        x: [0, -80, 40, 0],
                        y: [0, 60, -30, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] bg-primitive-mist_aqua-core/10 rounded-full blur-[100px] mix-blend-screen"
                />
                {/* Orb 3: Saffron - Warmth */}
                <motion.div
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, 50, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 left-1/3 w-[50vw] h-[50vw] bg-primitive-saffron-core/10 rounded-full blur-[140px] mix-blend-screen"
                />

                {/* Noise Grain Overlay - Essential for texture */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            </div>


            {/* --- 2. THE MONOLITH (Center Composition) --- */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 md:p-12">

                {/* Decorative lines/UI elements for 'Tech' feel */}
                <div className="absolute top-12 left-12 right-12 flex justify-between items-center text-text-tertiary/50 uppercase tracking-[0.2em] text-[10px] md:text-xs">
                    <span>Figure 01.1 // Audio Genesis</span>
                    <div className="h-[1px] w-24 bg-white/10" />
                    <span>Infinite Mood</span>
                </div>

                {/* Main Content Group */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center text-center gap-2 md:gap-4 lg:gap-6 backdrop-blur-[2px]"
                >

                    {/* 'Une Musique' Tag */}
                    <div className="overflow-hidden mb-2">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="block text-sm md:text-lg text-accent-primary font-medium tracking-[0.4em] uppercase"
                        >
                            Une Musique
                        </motion.span>
                    </div>

                    {/* 'COMPOSÉE' - The Hero Word */}
                    {/* Using mix-blend to let the background gradients bleed through the text */}
                    <motion.h1
                        className="text-[12vw] md:text-[13vw] leading-[0.85] font-bold tracking-tighter text-white mix-blend-overlay cursor-default"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                    >
                        COMPOSÉE
                    </motion.h1>

                    {/* 'Et Pas Générée' - Styled Contrast */}
                    <div className="flex flex-col items-center gap-2">
                        {/* Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 1, delay: 1 }}
                            className="h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                        />

                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white/80 to-white/40"
                            >
                                <span className="italic mr-3 font-serif font-light text-text-secondary">Et pas</span>
                                Générée
                            </motion.h2>
                        </div>
                    </div>

                </motion.div>


                {/* --- 3. THE TRIGGER (Bottom) --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
                >
                    <button
                        onClick={handleExplore}
                        className="group relative flex items-center justify-center w-20 h-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:scale-110 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]"
                    >
                        <div className="absolute inset-0 rounded-full bg-accent-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 rounded-full border border-white/20 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                        <Play className="w-6 h-6 fill-white text-white ml-1 group-hover:scale-110 transition-transform" />
                    </button>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-text-tertiary/60">
                        Commencer l'expérience
                    </span>
                </motion.div>

            </div>
        </div>
    );
};

export default HeroAlternativeD;
