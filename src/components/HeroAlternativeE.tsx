import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Disc, ShieldCheck } from 'lucide-react';
import { startScroll } from './SmoothScroll';
import AudioManager from '../utils/AudioManager';
// import videoSrc from '../assets/fragmnt-animated.mp4'; // Unused


interface HeroAlternativeEProps {
    onComplete?: () => void;
}

const HeroAlternativeE: React.FC<HeroAlternativeEProps> = ({ onComplete }) => {

    // --- Mouse Grid Interaction ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        // relative to window center
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth);
        mouseY.set(clientY / innerHeight);
    };

    // Parallax for the video background to give it depth behind the mask
    const springConfig = { damping: 30, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const videoX = useTransform(springX, [0, 1], ["-2%", "2%"]);
    const videoY = useTransform(springY, [0, 1], ["-2%", "2%"]);

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
            className="relative w-full h-screen bg-black overflow-hidden font-display cursor-default selection:bg-white/20"
        >
            {/* LAYER 1: The Gradient World (Base) */}
            <motion.div
                className="absolute inset-[-20%] w-[140%] h-[140%] z-0 bg-black" // oversized to avoid edge clipping
                style={{ x: videoX, y: videoY }}
            >
                {/* Gradient Blob 1: Orchid/Pink */}
                <motion.div
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -100, 50, 0],
                        scale: [1, 1.2, 0.9, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent-primary rounded-full blur-[100px] opacity-80"
                />

                {/* Gradient Blob 2: Cyan/Mist */}
                <motion.div
                    animate={{
                        x: [0, -80, 40, 0],
                        y: [0, 60, -30, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] bg-teal-400 rounded-full blur-[100px] opacity-80"
                />

                {/* Gradient Blob 3: Saffron/Orange */}
                <motion.div
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, 50, -50, 0],
                    }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear", delay: 5 }}
                    className="absolute bottom-1/4 left-1/3 w-[50vw] h-[50vw] bg-orange-400 rounded-full blur-[120px] opacity-70"
                />
            </motion.div>


            {/* LAYER 2: The Mask (Multiply) */}
            {/* 
                Trick: bg-black with mix-blend-mode: multiply. 
                - Black areas stay BLACK (covering video). 
                - White areas become TRANSPARENT (revealing video).
            */}
            <div className="absolute inset-0 z-10 bg-background-primary mix-blend-multiply flex flex-col items-center justify-center">

                {/* Structure Grid - Subtle lines that persist */}
                <div className="absolute inset-0 w-full h-full border-[0.5px] border-white/5 grid grid-cols-6 grid-rows-6 pointer-events-none">
                    {/* Horizontal Lines */}
                    {[...Array(5)].map((_, i) => (
                        <div key={`h-${i}`} className="absolute w-full h-[0.5px] bg-white/5 left-0" style={{ top: `${(i + 1) * 16.66}%` }} />
                    ))}
                    {/* Vertical Lines */}
                    {[...Array(5)].map((_, i) => (
                        <div key={`v-${i}`} className="absolute h-full w-[0.5px] bg-white/5 top-0" style={{ left: `${(i + 1) * 16.66}%` }} />
                    ))}
                </div>

                {/* --- TYPOGRAPHY MASK --- */}
                {/* Everything here must be WHITE to show the video */}
                <div className="relative flex flex-col items-center gap-0 mix-blend-normal"> {/* Ensure no accidental blending here */}

                    {/* TOP TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex items-center gap-6 mb-4"
                    >
                        <span className="text-white text-lg md:text-xl tracking-[0.4em] uppercase font-light">
                            Une Musique
                        </span>
                    </motion.div>

                    {/* MAIN TITLE (VIDEO REVEAL) */}
                    <div className="relative">
                        <motion.h1
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-white origin-bottom"
                        >
                            COMPOSÉE
                        </motion.h1>

                        {/* Cutout line animation for effect */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                        />
                    </div>

                    {/* SUB TITLE (VIDEO REVEAL) */}
                    <div className="relative flex items-center justify-between w-full mt-2 px-1">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-2xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white"
                        >
                            <span className="font-light italic opacity-80 mr-4">Et pas</span>
                            Générée
                        </motion.h2>

                        {/* Small tech badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="hidden md:flex items-center gap-2 border border-white px-3 py-1 rounded-full"
                        >
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            <span className="text-white text-[10px] uppercase tracking-widest">Live Signal</span>
                        </motion.div>
                    </div>

                </div>

            </div>


            {/* LAYER 3: UI OVERLAYS (White/Grey interactions on top of the black mask) */}
            {/* These sit ON TOP of the black mix-blend layer, so they render normally (White on Black) */}
            <div className="absolute inset-0 z-20 pointer-events-none">

                {/* Corners Specs */}
                <div className="absolute top-8 left-8 flex flex-col gap-1 text-[10px] font-mono text-text-tertiary">
                    <span>LAT 48.8566° N</span>
                    <span>LON 2.3522° E</span>
                </div>
                <div className="absolute top-8 right-8 flex flex-col items-end gap-1 text-[10px] font-mono text-text-tertiary">
                    <span className="flex items-center gap-2"><Globe className="w-3 h-3" /> SYSTEM READY</span>
                    <span className="opacity-50">V.2.0.4</span>
                </div>

                {/* Bottom Area */}
                <div className="absolute bottom-12 left-0 w-full flex flex-col md:flex-row items-end md:items-center justify-between px-8 md:px-16">

                    <div className="flex flex-col gap-4 max-w-sm mb-8 md:mb-0">
                        <h3 className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            Authenticité Garantie
                        </h3>
                        <p className="text-text-secondary text-xs leading-relaxed opacity-70">
                            Une approche radicale de la composition sonore.
                            Ni algorithmes, ni prompts. Juste de la musique.
                        </p>
                    </div>

                    <div className="pointer-events-auto">
                        <button
                            onClick={handleExplore}
                            className="group relative px-8 py-4 bg-transparent overflow-hidden"
                        >
                            {/* Hover BG slide */}
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                            {/* Border */}
                            <div className="absolute inset-0 border border-white/30" />

                            <span className="relative z-10 font-mono text-sm uppercase tracking-widest flex items-center gap-4 text-white group-hover:text-black transition-colors duration-300">
                                <Disc className="w-4 h-4 animate-spin-slow" />
                                Initialiser
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HeroAlternativeE;
