import React, { useEffect } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { startScroll } from './SmoothScroll';
import AudioManager from '../utils/AudioManager';

interface HeroAlternativeCProps {
    onComplete?: () => void;
}

const HeroAlternativeC: React.FC<HeroAlternativeCProps> = ({ onComplete }) => {

    // --- Mouse Parallax State ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth smooth spring physics for the parallax
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Transforms for different layers (depth effect)
    const layer1X = useTransform(springX, [-0.5, 0.5], ["-2%", "2%"]);
    const layer1Y = useTransform(springY, [-0.5, 0.5], ["-2%", "2%"]);

    const layer2X = useTransform(springX, [-0.5, 0.5], ["3%", "-3%"]); // Opposite direction
    const layer2Y = useTransform(springY, [-0.5, 0.5], ["3%", "-3%"]);

    const layer3X = useTransform(springX, [-0.5, 0.5], ["-5px", "5px"]); // Subtle
    const layer3Y = useTransform(springY, [-0.5, 0.5], ["-5px", "5px"]);


    useEffect(() => {
        AudioManager.getInstance().loadMasterBank();

        const handleMouseMove = (e: MouseEvent) => {
            // Normalize coordinates between -0.5 and 0.5
            const { innerWidth, innerHeight } = window;
            mouseX.set((e.clientX / innerWidth) - 0.5);
            mouseY.set((e.clientY / innerHeight) - 0.5);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);


    const handleExplore = () => {
        startScroll();
        if (onComplete) onComplete();
        AudioManager.getInstance().playHero();
    };


    return (
        <div className="relative w-full h-screen bg-background-primary text-text-primary font-display overflow-hidden cursor-default selection:bg-accent-primary/20">

            {/* 1. Grain Texture Overlay using SVG filter for performance and look */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay">
                <svg className='w-full h-full'>
                    <filter id='noiseFilter'>
                        <feTurbulence
                            type='fractalNoise'
                            baseFrequency='0.8'
                            numOctaves='3'
                            stitchTiles='stitch' />
                    </filter>
                    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
                </svg>
            </div>

            {/* 2. Abstract Gradient Blobs (Animated) */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 0.9, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-accent-deep/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
            />
            <motion.div
                animate={{ rotate: -360, scale: [1, 1.3, 0.8, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
            />

            {/* 3. Main Content Container - Grid Layout */}
            <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto p-8 md:p-16 grid grid-cols-12 grid-rows-6">

                {/* Top Left Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="col-span-12 md:col-span-4 row-start-1 flex items-start"
                >
                    <div className="flex flex-col gap-2">
                        <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-text-secondary/60">
                            Chapitre 01
                        </span>
                        <div className="w-8 h-[1px] bg-accent-primary/50" />
                    </div>
                </motion.div>


                {/* CENTRAL TYPOGRAPHY - MASSIVE */}
                {/* Need to position this absolutely creatively or span rows */}

                <div className="col-span-12 row-start-2 row-span-4 flex flex-col justify-center items-center md:items-start relative">

                    {/* "Une Musique" - Small, elegant, off-axis */}
                    <motion.div
                        style={{ x: layer2X, y: layer2Y }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="pl-2 md:pl-24 mb-2 z-20 relative"
                    >
                        <h2 className="font-display font-light text-4xl md:text-6xl lg:text-7xl italic text-text-secondary mix-blend-plus-lighter">
                            Une Musique
                        </h2>
                    </motion.div>

                    {/* "COMPOSÉE" - THE GIANT */}
                    <motion.div
                        style={{ x: layer1X, y: layer1Y }}
                        initial={{ opacity: 0, scale: 1.1, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="relative z-10"
                    >
                        <h1 className="font-display font-bold text-[13vw] md:text-[14vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl text-center md:text-left">
                            COMPOSÉE
                        </h1>
                    </motion.div>

                    {/* "Et Pas Générée" - Overlapping, stylized */}
                    <motion.div
                        style={{ x: layer3X, y: layer3Y }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="self-end md:mr-32 mt-[-1vw] z-30 relative"
                    >
                        <div className="relative inline-block">
                            <h2 className="font-display font-medium text-4xl md:text-6xl lg:text-7xl tracking-tight text-accent-primary mix-blend-normal">
                                Et Pas Générée
                            </h2>
                            {/* Stylish underline / accent */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                                className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-primary to-transparent origin-left"
                            />
                        </div>
                    </motion.div>

                </div>


                {/* Bottom Left - Description & Action - Moved for balance */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="col-span-12 md:col-start-2 md:col-span-5 row-start-6 flex flex-col items-start justify-end gap-6"
                >
                    <p className="font-sans text-sm md:text-base leading-relaxed text-text-tertiary max-w-md">
                        Une expérience sonore pensée pour <span className="text-text-primary border-b border-text-tertiary/30 pb-0.5">se concentrer</span>, <span className="text-text-primary border-b border-text-tertiary/30 pb-0.5">s'évader</span> et créer librement.
                    </p>

                    <button
                        onClick={handleExplore}
                        className="group flex items-center gap-4 text-text-primary hover:text-accent-primary transition-colors duration-300 pointer-events-auto"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent-primary/50 group-hover:bg-accent-primary/10 transition-all duration-300">
                            <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300 ease-out" />
                        </div>
                        <span className="font-sans text-xs uppercase tracking-[0.2em] font-medium">Commencer l'expérience</span>
                    </button>
                </motion.div>

            </div>

            {/* Decorative Elements - "Specs" style lines */}
            <div className="absolute top-0 right-0 w-[1px] h-32 bg-gradient-to-b from-white/20 to-transparent" />
            <div className="absolute bottom-0 left-8 w-[1px] h-32 bg-gradient-to-t from-white/20 to-transparent" />
            <div className="absolute top-1/2 left-0 w-16 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />

        </div>
    );
};

// Add local typeface style override if needed for super sized text 
// (Tailwind arbitrary values handled most, but `text-[18vw]` explains the scale)

export default HeroAlternativeC;
