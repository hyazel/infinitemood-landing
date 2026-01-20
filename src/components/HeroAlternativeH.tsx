import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import AudioManager from '../utils/AudioManager';
import { startScroll } from './SmoothScroll';

interface HeroProps {
    onExplore: () => void;
}

// ============================================================================
// AWWWARDS 2025 SERIES (1-20)
// Themes: Kinetic Typography, Spatial Design, Neo-Brutalism, Micro-Interactions, 
// Fluid Gradients, Digital Noise, Immersive Scrollytelling.
// ============================================================================

// Mandatories:
// Title: Une ambiance composée. Pas générée.
// Description: Pour se concentrer. Pour s’évader. Librement.
// Micro: Une app de musiques d'ambiances.

// 1. KINETIC SCROLL (Large typography moving horizontally on scroll)
const V1: React.FC<HeroProps> = ({ onExplore }) => {
    const { scrollYProgress } = useScroll();
    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

    return (
        <section className="relative w-full h-screen bg-[#050505] text-[#F0F0F0] overflow-hidden flex flex-col justify-center font-display">
            <div className="absolute top-8 left-8 text-xs uppercase tracking-widest opacity-50 border border-white/20 px-3 py-1 rounded-full">
                Une app de musiques d'ambiances.
            </div>

            <motion.div style={{ x: x1 }} className="whitespace-nowrap">
                <h1 className="text-[15vw] font-black leading-[0.85] tracking-tighter uppercase opacity-80">
                    Une Ambiance Composée <span className="text-accent-primary">Pas Générée</span>
                </h1>
            </motion.div>

            <motion.div style={{ x: x2 }} className="whitespace-nowrap">
                <h1 className="text-[15vw] font-black leading-[0.85] tracking-tighter uppercase opacity-40 stroke-text-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                    Pour se concentrer Pour s’évader Librement
                </h1>
            </motion.div>

            <button onClick={onExplore} className="absolute bottom-12 right-12 bg-white text-black w-32 h-32 rounded-full flex items-center justify-center font-bold text-xl hover:scale-110 transition-transform">
                EXPLORE
            </button>
        </section>
    );
};

// 2. FLUID GRADIENT (WebGL-like colored blobs)
const V2: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0a0a0a] text-white flex items-center justify-center overflow-hidden font-sans">
        <div className="absolute inset-0 opacity-50">
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-tr from-blue-600 via-purple-600 to-orange-500 rounded-full blur-[120px] mix-blend-screen"
            />
        </div>

        <div className="relative z-10 text-center backdrop-blur-sm bg-black/10 p-12 rounded-3xl border border-white/5 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.4em] mb-4 text-purple-200">Une app de musiques d'ambiances.</p>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                Composée.
            </h1>
            <h2 className="text-4xl md:text-6xl font-light italic opacity-80 mb-8">
                Pas générée.
            </h2>
            <div className="flex justify-center gap-8 text-xs font-mono uppercase tracking-widest opacity-60">
                <span>Concentration</span>
                <span>•</span>
                <span>Évasion</span>
                <span>•</span>
                <span>Liberté</span>
            </div>
            <button onClick={onExplore} className="mt-12 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-md transition-all">
                Start Experience
            </button>
        </div>
    </section>
);

// 3. NEO-BRUTALISM (High contrast, grid, distinct borders)
const V3: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#FF4D00] text-black font-mono grid grid-cols-2 grid-rows-2 p-4 gap-4">
        <div className="col-span-2 row-span-1 bg-white border-4 border-black p-8 flex flex-col justify-center relative shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs">STATUS: ORGANIC</div>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9]">
                Une Ambiance<br />Composée.
            </h1>
        </div>
        <div className="col-span-1 row-span-1 bg-[#BFFA00] border-4 border-black p-8 flex flex-col justify-between shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-crosshair">
            <h2 className="text-4xl font-bold">PAS<br />GÉNÉRÉE.</h2>
            <p className="text-xs">Une app de musiques d'ambiances.</p>
        </div>
        <div className="col-span-1 row-span-1 bg-black text-white border-4 border-black p-8 flex flex-col justify-center items-center shadow-[8px_8px_0px_rgba(255,255,255,1)]">
            <p className="text-center text-sm uppercase mb-4">Pour se concentrer.<br />Pour s’évader.<br />Librement.</p>
            <button onClick={onExplore} className="bg-white text-black px-6 py-2 font-bold uppercase hover:bg-[#FF4D00] transition-colors">
                ENTER
            </button>
        </div>
    </section>
);

// 4. SPATIAL CARDS (3D Transform perspective)
const V4: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-white flex items-center justify-center perspective-[2000px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#222_0%,#000_100%)]" />

        <motion.div
            initial={{ rotateX: 20, rotateY: -20, rotateZ: 5 }}
            animate={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative z-10 transform-style-3d text-center"
        >
            <h1 className="text-[8vw] font-black leading-none tracking-tighter mix-blend-difference relative z-20">
                COMPOSÉE.
            </h1>
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/30 blur-3xl -z-10"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-[1px] w-12 bg-white/50" />
                <h2 className="text-2xl font-light uppercase tracking-[0.3em]">Pas Générée</h2>
                <div className="h-[1px] w-12 bg-white/50" />
            </div>

            <p className="mt-12 text-xs font-mono opacity-60 max-w-sm mx-auto">
                UNE APP DE MUSIQUES D'AMBIANCES.<br />
                POUR SE CONCENTRER. POUR S’ÉVADER. LIBREMENT.
            </p>
        </motion.div>

        <button onClick={onExplore} className="absolute bottom-12 border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors text-xs uppercase tracking-widest">
            Dive In
        </button>
    </section>
);

// 5. MOUSE FOLLOWER (Spotlight effect)
const V5: React.FC<HeroProps> = ({ onExplore }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            x.set(e.clientX - rect.left);
            y.set(e.clientY - rect.top);
        }
    };

    return (
        <section ref={ref} onMouseMove={handleMouseMove} className="relative w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden cursor-none">
            <div className="absolute inset-0 bg-[#050505]" />

            {/* Spotlight */}
            <motion.div
                className="pointer-events-none absolute w-[400px] h-[400px] bg-white mix-blend-difference rounded-full blur-[80px]"
                style={{ x, y, translateX: '-50%', translateY: '-50%' }}
            />

            <div className="relative z-10 text-center mix-blend-difference pointer-events-none">
                <h1 className="text-9xl font-black tracking-tighter uppercase">Composée</h1>
                <h2 className="text-6xl font-thin tracking-widest uppercase mt-4">Pas Générée</h2>
                <p className="mt-8 text-lg font-bold">Une app de musiques d'ambiances.</p>
            </div>

            <div className="absolute bottom-12 text-xs uppercase tracking-[0.5em] text-white/50 pointer-events-none">
                Pour se concentrer. Pour s’évader. Librement.
            </div>

            {/* Clickable area overlay */}
            <div onClick={onExplore} className="absolute inset-0 z-20 cursor-none" />
        </section>
    );
};

// 6. GLITCH & CYBER (Digital distortion)
const V6: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#000] text-[#0f0] font-mono flex flex-col justify-center px-12 clip-path-polygon">
        <div className="absolute top-0 w-full h-1 bg-[#0f0] shadow-[0_0_20px_#0f0]" />

        <h1 className="text-8xl font-bold uppercase relative" style={{ textShadow: "4px 4px 0px #f00" }}>
            Une Ambiance<br />
            <span className="text-white mix-blend-difference">Composée.</span>
        </h1>

        <div className="mt-8 border-l-4 border-[#0f0] pl-6 py-2">
            <h2 className="text-4xl font-bold mb-2 text-[#0f0] bg-black inline-block">SYSTEM: PAS GÉNÉRÉE</h2>
            <p className="max-w-md text-sm leading-relaxed text-[#0f0]/80">
                &gt; TARGET: CONCENTRATION<br />
                &gt; TARGET: ESCAPE<br />
                &gt; MODE: FREEDOM
            </p>
        </div>

        <div className="absolute top-12 right-12 text-right">
            <p className="text-xs border border-[#0f0] px-2 py-1">V.2.0.25</p>
            <p className="text-[10px] mt-1 opacity-60">Une app de musiques d'ambiances.</p>
        </div>

        <button onClick={onExplore} className="absolute bottom-12 left-12 bg-[#0f0] text-black px-8 py-3 font-black text-xl hover:bg-white hover:text-black transition-colors uppercase">
            INITIALIZE
        </button>
    </section>
);

// 7. BENTO GRID (Grid Layout)
const V7: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F4F4F5] p-4 font-sans text-black">
        <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-4">
            {/* Title Block */}
            <div className="col-span-4 md:col-span-3 row-span-2 bg-white rounded-[2rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 rounded-full bg-black" />
                <h1 className="text-6xl md:text-8xl font-medium tracking-tight">Une Ambiance<br />Composée.</h1>
            </div>

            {/* Action Block */}
            <div onClick={onExplore} className="col-span-4 md:col-span-1 row-span-2 bg-black text-white rounded-[2rem] p-8 flex flex-col justify-between items-end cursor-pointer group">
                <ArrowRight className="w-12 h-12 group-hover:rotate-45 transition-transform duration-300" />
                <span className="text-2xl font-medium">Start</span>
            </div>

            {/* Tagline Block */}
            <div className="col-span-2 row-span-2 bg-[#E4E4E7] rounded-[2rem] p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-serif italic">Pas générée.</h2>
                <div className="w-full h-[1px] bg-black/10 my-4" />
                <p className="text-sm opacity-60">Une app de musiques d'ambiances.</p>
            </div>

            {/* Desc Block */}
            <div className="col-span-2 row-span-2 bg-white rounded-[2rem] p-8 flex items-center justify-center text-center">
                <p className="text-xl font-light leading-relaxed">
                    Pour se concentrer.<br />
                    Pour s’évader.<br />
                    <span className="font-bold">Librement.</span>
                </p>
            </div>
        </div>
    </section>
);

// 8. PARTICLE TEXT (Simulated)
const V8: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1a1a1a] text-white flex items-center justify-center overflow-hidden">
        <div className="text-center relative z-10">
            <h1 className="text-[10vw] font-black tracking-tighter opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
                COMPOSÉE
            </h1>
            <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay">
                <div className="w-[110%] h-[50%] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl animate-pulse" />
            </div>
            <h2 className="text-2xl uppercase tracking-[0.8em] font-light mt-4 animate-[fadeIn_1s_ease-out_0.5s_forwards] opacity-0">
                Pas Générée
            </h2>
            <p className="text-xs text-neutral-500 mt-8 font-mono animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0">
                [ Une app de musiques d'ambiances ]
            </p>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center animate-[fadeIn_1s_ease-out_1.5s_forwards] opacity-0">
            <p className="text-[10px] uppercase tracking-widest mb-2">Pour se concentrer. Pour s’évader. Librement.</p>
            <button onClick={onExplore} className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <ArrowDown size={14} />
            </button>
        </div>
    </section>
);

// 9. OVERLAPPING TILES (Scroll triggers parralax)
const V9: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#EBEBEB] text-black overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[50vh] bg-white shadow-2xl z-10 p-8 flex items-end">
            <h1 className="text-6xl font-bold">Une Ambiance</h1>
        </div>
        <div className="absolute top-1/3 left-1/3 w-[40vw] h-[50vh] bg-[#111] text-white shadow-2xl z-20 p-8 flex items-end">
            <h1 className="text-6xl font-bold italic">Composée.</h1>
        </div>
        <div className="absolute top-[45%] left-[45%] w-[30vw] h-[30vh] bg-[#FF3B30] text-white shadow-2xl z-30 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold uppercase mb-2">Pas Générée.</h2>
            <p className="text-xs opacity-90">Pour se concentrer. Pour s’évader. Librement.</p>
        </div>

        <div className="absolute bottom-8 left-8 z-40">
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Une app de musiques d'ambiances.</p>
        </div>

        <button onClick={onExplore} className="absolute bottom-8 right-8 z-40 bg-black text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
            EXPLORE
        </button>
    </section>
);

// 10. TYPOGRAPHIC VORTEX (Simplified concentric circles)
const V10: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#222] text-[#eee] flex items-center justify-center overflow-hidden font-display">
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute border border-white/10 rounded-full flex items-center justify-center"
                style={{ width: `${(i + 1) * 20}vw`, height: `${(i + 1) * 20}vw` }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 text-[1vw] uppercase tracking-[0.5em] bg-[#222] px-2">Une Ambiance Composée Pas Générée</div>
            </motion.div>
        ))}

        <div className="relative z-10 text-center bg-[#222]/80 backdrop-blur-md p-12 rounded-full border border-white/20">
            <h1 className="text-6xl font-black mb-2">COMPOSÉE</h1>
            <p className="text-xs uppercase tracking-widest text-[#888]">Une app de musiques d'ambiances.</p>
            <p className="text-xs uppercase tracking-widest text-[#666] mt-4">Pour se concentrer. Pour s’évader. Librement.</p>
            <button onClick={onExplore} className="mt-8 mx-auto w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowDown />
            </button>
        </div>
    </section>
);

// 11. HORIZONTAL SCROLL SIMULATION
const V11: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-900 text-white flex flex-col justify-center overflow-hidden">
        <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap items-center text-[20vh] font-black leading-none opacity-20"
        >
            COMPOSÉE PAS GÉNÉRÉE COMPOSÉE PAS GÉNÉRÉE COMPOSÉE PAS GÉNÉRÉE
        </motion.div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-12 md:px-24">
            <h1 className="text-6xl md:text-8xl font-bold bg-white text-black px-4 leading-tight mix-blend-screen">
                Une<br />Ambiance
            </h1>
            <div className="flex flex-col items-end justify-center">
                <p className="text-right text-xs uppercase tracking-widest mb-4 border-b border-white pb-2">Une app de musiques d'ambiances.</p>
                <p className="text-right text-sm font-light max-w-xs opacity-80">
                    Pour se concentrer.<br />Pour s’évader.<br />Librement.
                </p>
                <button onClick={onExplore} className="mt-8 text-xl font-serif italic border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black">
                    Découvrir
                </button>
            </div>
        </div>
    </section>
);

// 12. GLASS CARDS & NOISE
const V12: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-slate-900 text-white flex items-center justify-center">
        {/* Noise BG */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
            {/* Back Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl transform rotate-6 scale-95 opacity-60 blur-sm" />

            {/* Front Card */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
                <div>
                    <h2 className="text-xs uppercase tracking-widest opacity-60">Infinite Mood</h2>
                    <h1 className="text-5xl font-bold mt-4">Une<br />Ambiance<br />Composée.</h1>
                </div>

                <div>
                    <div className="bg-black/20 rounded-lg p-4 mb-6">
                        <p className="font-mono text-[10px] text-green-400 mb-1">&gt; STATUS_CHECK</p>
                        <p className="font-mono text-xs">AI GENERATION: FALSE</p>
                        <p className="font-mono text-xs text-white/60 mt-2">Pour se concentrer. Pour s’évader. Librement.</p>
                    </div>
                    <button onClick={onExplore} className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors">
                        START
                    </button>
                </div>
            </div>
        </div>
    </section>
);

// 13. CINEMATIC TITLE (Big bold center)
const V13: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center font-serif">
        <video
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
            // Placeholder visuals if no video.
            style={{ backgroundImage: 'linear-gradient(to bottom, #111, #333)' }}
        />

        <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-9xl font-thin tracking-tight">
                Une Ambiance
            </h1>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white animate-pulse">
                Composée.
            </h1>

            <div className="mt-12 flex flex-col items-center gap-4">
                <span className="text-xs uppercase tracking-[0.3em] font-sans opacity-70">
                    Pas générée.
                </span>
                <span className="w-1 h-12 bg-white/50" />
                <button onClick={onExplore} className="text-xs uppercase tracking-widest hover:text-accent-primary transition-colors">
                    Explore
                </button>
            </div>
        </div>

        <div className="absolute bottom-8 left-8 text-[10px] uppercase font-sans opacity-50">
            Une app de musiques d'ambiances.<br />
            Pour se concentrer. Pour s’évader. Librement.
        </div>
    </section>
);

// 14. SPLIT SCREEN (Asymmetric)
const V14: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 h-full bg-[#1C1C1C] text-[#F3F3F3] p-12 flex flex-col justify-center">
            <h1 className="text-7xl font-bold leading-none mb-6">
                Une<br />Ambiance<br />Composée.
            </h1>
            <p className="text-xl font-light opacity-60 max-w-md">
                Une app de musiques d'ambiances.
            </p>
        </div>
        <div className="w-full md:w-1/3 h-full bg-[#F3F3F3] text-[#1C1C1C] p-12 flex flex-col justify-between">
            <div className="text-right">
                <h2 className="text-4xl font-serif italic mb-4">Pas<br />Générée.</h2>
            </div>
            <div>
                <p className="text-sm font-medium mb-8 leading-loose uppercase tracking-wide">
                    Pour se concentrer.<br />
                    Pour s’évader.<br />
                    Librement.
                </p>
                <div onClick={onExplore} className="cursor-pointer group flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <ArrowRight />
                    </div>
                    <span className="font-bold text-xs uppercase">Begin</span>
                </div>
            </div>
        </div>
    </section>
);

// 15. INTERACTIVE VORTEX (Canvas Simulation)
const V15: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#050505] text-[#ccc] flex items-center justify-center overflow-hidden">
        {/* Animated background rings */}
        {[1, 2, 3].map((i) => (
            <motion.div
                key={i}
                className="absolute border border-white/5 rounded-full"
                style={{ width: `${i * 30}vw`, height: `${i * 30}vw` }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 5 * i, repeat: Infinity, ease: "easeInOut" }}
            />
        ))}

        <div className="relative z-10 p-12 text-center backdrop-blur-sm">
            <h1 className="text-6xl md:text-8xl font-thin tracking-tighter mb-4 mix-blend-difference">
                Une Ambiance
            </h1>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 mix-blend-difference">
                Composée.
            </h1>

            <div className="grid grid-cols-3 gap-8 text-xs font-mono uppercase tracking-widest text-[#666]">
                <div className="border-t border-[#333] pt-2">Pas générée</div>
                <div className="border-t border-[#333] pt-2">Concentration</div>
                <div className="border-t border-[#333] pt-2">Évasion</div>
            </div>
        </div>

        <button onClick={onExplore} className="absolute inset-0 z-20" />
    </section>
);

// 16. MASKED TEXT (Image inside text)
const V16: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white flex items-center justify-center">
        {/* We use background clip text for effect */}
        <div className="relative z-10 text-center font-black text-[12vw] leading-[0.85] tracking-tighter">
            <h1 className="text-transparent bg-clip-text bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center animate-[pulse_10s_ease-in-out_infinite]">
                AMBIANCE
            </h1>
            <h1 className="text-black">
                COMPOSÉE.
            </h1>
        </div>

        <div className="absolute bottom-12 flex items-center gap-8">
            <p className="text-xs font-bold uppercase tracking-widest">Une app de musiques d'ambiances.</p>
            <div className="h-4 w-[1px] bg-black" />
            <p className="text-xs font-serif italic">Pas générée.</p>
            <button onClick={onExplore} className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase hover:scale-105 transition-transform">
                Listen
            </button>
        </div>
    </section>
);

// 17. BIG STATS (Data viz style)
const V17: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F0F4F8] text-[#102A43] flex flex-col justify-center p-8 md:p-16 font-sans">
        <div className="border-b-2 border-[#102A43] pb-8 mb-8 flex justify-between items-end">
            <h1 className="text-6xl font-bold uppercase leading-none">
                Une Ambiance<br />Composée.
            </h1>
            <div className="text-right">
                <span className="text-6xl font-black text-[#334E68]">0%</span>
                <span className="block text-sm font-bold uppercase tracking-widest">AI Generated</span>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-sm font-bold uppercase opacity-50 mb-2">Philosophy</h3>
                <p className="text-lg font-serif italic">Pour se concentrer.</p>
            </div>
            <div>
                <h3 className="text-sm font-bold uppercase opacity-50 mb-2">Goal</h3>
                <p className="text-lg font-serif italic">Pour s’évader.</p>
            </div>
            <div>
                <h3 className="text-sm font-bold uppercase opacity-50 mb-2">Method</h3>
                <p className="text-lg font-serif italic">Librement.</p>
            </div>
            <div>
                <h3 className="text-sm font-bold uppercase opacity-50 mb-2">Product</h3>
                <p className="text-xs">Une app de musiques d'ambiances.</p>
            </div>
        </div>

        <button onClick={onExplore} className="absolute bottom-16 right-16 w-16 h-16 bg-[#102A43] text-white rounded-full flex items-center justify-center text-2xl hover:bg-[#334E68] transition-colors shadow-lg">
            &darr;
        </button>
    </section>
);

// 18. ELASTIC SCROLL (Typography stretches)
const V18: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#FF3366] text-white flex flex-col items-center justify-center overflow-hidden">
        <motion.div
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[12vw] font-black leading-none tracking-tighter origin-bottom"
        >
            COMPOSÉE
        </motion.div>
        <motion.div
            animate={{ scaleY: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="text-[8vw] font-light leading-none tracking-tight origin-top opacity-80"
        >
            PAS GÉNÉRÉE
        </motion.div>

        <div className="absolute bottom-12 flex flex-col items-center gap-4">
            <p className="text-sm font-bold uppercase tracking-widest border px-4 py-1 rounded-full">Une app de musiques d'ambiances</p>
            <p className="text-xs opacity-80">Pour se concentrer. Pour s’évader. Librement.</p>
            <button onClick={onExplore} className="mt-4 underline hover:no-underline">Begin Journey</button>
        </div>
    </section>
);

// 19. MONOCHROME TILES
const V19: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex flex-wrap">
        <div className="w-1/2 h-1/2 border-r border-b border-white/20 flex items-center justify-center p-8">
            <h1 className="text-5xl font-bold text-right">Une Ambiance<br />Composée.</h1>
        </div>
        <div className="w-1/2 h-1/2 border-b border-white/20 flex flex-col justify-end p-8 bg-neutral-900">
            <p className="text-[10px] uppercase tracking-widest mb-4">Une app de musiques d'ambiances.</p>
            <h2 className="text-4xl font-light opacity-60">Pas générée.</h2>
        </div>
        <div className="w-1/2 h-1/2 border-r border-white/20 flex flex-col justify-between p-8 bg-neutral-900">
            <button onClick={onExplore} className="self-start border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors text-xs uppercase">
                Explore
            </button>
        </div>
        <div className="w-1/2 h-1/2 flex items-center justify-center p-8">
            <p className="text-center font-serif italic text-2xl">
                Pour se concentrer.<br />
                Pour s’évader.<br />
                Librement.
            </p>
        </div>
    </section>
);

// 20. THE VOID V2 (Maximalist Minimalist)
const V20: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black flex items-center justify-center cursor-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ccc_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

        <div className="relative z-10 mix-blend-exclusion text-white text-center">
            <h1 className="text-[10vw] font-black leading-none tracking-tighter">
                COMPOSÉE.
            </h1>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-black rounded-full mix-blend-multiply flex items-center justify-center text-center p-8 pointer-events-none animate-[pulse_4s_infinite]">
            <div className="text-white">
                <h2 className="text-xl font-bold uppercase mb-2">Pas Générée</h2>
                <p className="text-[10px] uppercase tracking-widest leading-relaxed opacity-80">
                    Une app de musiques d'ambiances.<br />
                    Pour se concentrer.<br />
                    Pour s’évader.<br />
                    Librement.
                </p>
            </div>
        </div>

        <button onClick={onExplore} className="absolute bottom-12 w-full text-center text-xs font-bold uppercase hover:tracking-widest transition-all cursor-pointer">
            ( Click Anywhere to Start )
        </button>
        <div onClick={onExplore} className="absolute inset-0 z-20" />
    </section>
);


// ============================================================================
// MAIN COMPONENT & SWITCHER
// ============================================================================

const VARIATIONS = [
    V1, V2, V3, V4, V5, V6, V7, V8, V9, V10,
    V11, V12, V13, V14, V15, V16, V17, V18, V19, V20
];

interface HeroAlternativeHProps {
    onComplete?: () => void;
}

const HeroAlternativeH: React.FC<HeroAlternativeHProps> = ({ onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleExplore = () => {
        startScroll();
        if (onComplete) onComplete();
        AudioManager.getInstance().playHero();
    };

    const nextVariation = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % VARIATIONS.length);
    };

    const prevVariation = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + VARIATIONS.length) % VARIATIONS.length);
    };

    const CurrentHero = VARIATIONS[currentIndex];

    // Preload basic audio on mount
    useEffect(() => {
        AudioManager.getInstance().loadMasterBank();
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <CurrentHero onExplore={handleExplore} />

            {/* VARIATION SWITCHER - FOR REVIEW ONLY */}
            <div className="absolute bottom-4 right-4 z-[9999] flex items-center gap-2 bg-black/80 backdrop-blur-md p-2 rounded-lg text-white font-mono text-xs border border-white/10">
                <button onClick={prevVariation} className="hover:text-accent-primary px-2 py-1">&lt;</button>
                <span className="min-w-[50px] text-center">{currentIndex + 1} / {VARIATIONS.length}</span>
                <button onClick={nextVariation} className="hover:text-accent-primary px-2 py-1">&gt;</button>
            </div>
            <div className="absolute bottom-4 left-4 z-[9999] text-[10px] text-black/50 pointer-events-none mix-blend-difference font-mono bg-white/20 px-2 rounded">
                AWWWARDS 2025 :: STYLE {currentIndex + 1}
            </div>
        </div>
    );
};

export default HeroAlternativeH;
