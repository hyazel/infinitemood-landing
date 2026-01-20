import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';
import { startScroll } from './SmoothScroll';
import AudioManager from '../utils/AudioManager';

// Image Imports for Series U & V
import islandScene from '../assets/island_scene.png';
import diorama from '../assets/diorama.png';
import cristal from '../assets/cristal.png';
import cristal2 from '../assets/cristal2.png';
import cristalTemp from '../assets/cristal_temp.png';
import islandSceneTemp from '../assets/island_scene_temp.png';

interface HeroProps {
    onExplore: () => void;
}

// ============================================================================
// SERIES A: TYPOGRAPHY & STRUCTURE (1-10)
// ============================================================================

// 1. NEO-SWISS
const V1: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex flex-col justify-between p-4 md:p-12 font-display overflow-hidden">
        <div className="text-xs font-bold tracking-[0.2em] uppercase">No. 01 — Neo-Swiss</div>
        <div className="relative z-10 mix-blend-difference">
            <h1 className="text-[14vw] leading-[0.8] font-black tracking-tighter text-black">
                UNE MUSIQUE<br />COMPOSÉE.
            </h1>
        </div>
        <div className="flex justify-between items-end">
            <button onClick={onExplore} className="bg-black text-white px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-neutral-800 transition-colors">Start</button>
            <h2 className="text-[5vw] leading-none font-light italic tracking-tight text-right">Et Pas<br />Générée</h2>
        </div>
    </section>
);

// 2. EDITORIAL SERIF
const V2: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f0f0f0] text-[#1a1a1a] snap-start flex flex-col items-center justify-center p-8 font-serif">
        <div className="text-center space-y-8">
            <p className="font-sans text-xs uppercase tracking-[0.3em] opacity-50">Volume II</p>
            <h1 className="text-6xl md:text-9xl font-thin leading-tight">
                Une Musique<br />
                <span className="italic font-normal">Composée.</span>
            </h1>
            <div className="w-16 h-[1px] bg-black mx-auto" />
            <h2 className="text-3xl md:text-5xl font-light italic opacity-70">
                Et Pas Générée
            </h2>
            <button onClick={onExplore} className="mt-12 font-sans text-xs border-b border-black pb-1 hover:opacity-50 transition-opacity uppercase tracking-widest">
                Read Experience
            </button>
        </div>
    </section>
);

// 3. BRUTALIST GRID
const V3: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neon-green text-black snap-start grid grid-cols-2 grid-rows-2 font-mono uppercase">
        <div className="absolute inset-0 border-2 border-black m-4 pointer-events-none" />
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-4 pointer-events-none">
            <div className="border border-black/20" />
            <div className="border border-black/20" />
            <div className="border border-black/20" />
            <div className="border border-black/20" />
        </div>

        <div className="col-span-1 p-8 flex items-start flex-col justify-center border-r border-black z-10">
            <h1 className="text-6xl font-black break-words max-w-full">UNE MUSIQUE COMPOSÉE</h1>
        </div>
        <div className="col-span-1 p-8 flex items-end justify-end flex-col z-10">
            <h2 className="text-4xl font-bold bg-black text-neon-green p-2">ET PAS GÉNÉRÉE</h2>
            <button onClick={onExplore} className="mt-4 bg-white border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                [ INIT ]
            </button>
        </div>
    </section>
);

// 4. VERTICAL JAPANESE
const V4: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1c1c1c] text-[#e1e1e1] snap-start flex items-center justify-center font-display overflow-hidden">
        <div className="absolute top-8 right-8 text-xs writing-vertical-rl tracking-[0.5em] opacity-50 h-64">
            Nº. 04 — VERTICAL
        </div>
        <div className="flex gap-12 md:gap-24 h-[80vh]">
            <h1 className="text-[12vh] leading-none font-bold writing-vertical-rl rotate-180 border-l border-white/20 pl-8">
                UNE MUSIQUE
            </h1>
            <h1 className="text-[12vh] leading-none font-bold writing-vertical-rl rotate-180 text-accent-primary">
                COMPOSÉE.
            </h1>
            <div className="flex flex-col justify-end pb-8">
                <h2 className="text-2xl writing-vertical-rl rotate-180 font-light tracking-widest mb-8 text-white/60">
                    ET PAS GÉNÉRÉE
                </h2>
                <button onClick={onExplore} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <ArrowDown size={16} />
                </button>
            </div>
        </div>
    </section>
);

// 5. DECONSTRUCTED
const V5: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-200 text-neutral-900 snap-start flex items-center justify-center overflow-hidden font-black italic">
        <div className="absolute inset-0 flex flex-wrap content-center justify-center pointer-events-none select-none opacity-10 scale-150">
            COMPOSÉE COMPOSÉE
        </div>
        <div className="relative z-10 text-center">
            <motion.div
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-8xl md:text-[10rem] leading-[0.8]"
            >
                UNE MUSIQUE
            </motion.div>
            <motion.div
                animate={{ x: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-8xl md:text-[10rem] leading-[0.8] text-transparent stroke-text-black"
                style={{ WebkitTextStroke: '2px black' }}
            >
                COMPOSÉE.
            </motion.div>
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white p-4 text-2xl rotate-12"
                whileHover={{ rotate: 0, scale: 1.1 }}
            >
                ET PAS GÉNÉRÉE
            </motion.div>

            <button onClick={onExplore} className="absolute -bottom-32 left-1/2 -translate-x-1/2 mt-12 text-sm not-italic font-normal tracking-widest uppercase border-b border-black">
                Explore
            </button>
        </div>
    </section>
);

// 6. JUSTIFIED STACKS
const V6: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-blue-900 text-[#fff] snap-start flex flex-col justify-center p-8 font-display">
        <div className="border-t border-b border-white/30 py-12 flex flex-col gap-0">
            <div className="flex justify-between text-[6vw] leading-none font-bold uppercase tracking-tighter">
                <span>U</span><span>N</span><span>E</span>
                <span className="w-8" />
                <span>M</span><span>U</span><span>S</span><span>I</span><span>Q</span><span>U</span><span>E</span>
            </div>
            <div className="flex justify-between text-[13.5vw] leading-[0.85] font-black uppercase tracking-tighter text-accent-secondary">
                <span>C</span><span>O</span><span>M</span><span>P</span><span>O</span><span>S</span><span>É</span><span>E</span>
            </div>
            <div className="flex justify-between text-[4vw] leading-none font-medium uppercase tracking-widest mt-4 opacity-70">
                <span>E</span><span>T</span><span> </span><span>P</span><span>A</span><span>S</span><span> </span><span>G</span><span>É</span><span>N</span><span>É</span><span>R</span><span>É</span><span>E</span>
            </div>
        </div>
        <button onClick={onExplore} className="mt-8 self-center px-8 py-3 bg-white text-blue-900 font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Enter
        </button>
    </section>
);

// 7. DIAGONAL
const V7: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-purple-900 text-white snap-start overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />

        <div className="-rotate-45 transform origin-center text-center">
            <h2 className="text-4xl font-light tracking-[1em] mb-4 ml-8">UNE MUSIQUE</h2>
            <h1 className="text-9xl font-black tracking-tighter bg-white text-purple-900 px-8 py-2">COMPOSÉE.</h1>
            <h2 className="text-4xl font-light tracking-[1em] mt-4 mr-8 opacity-70">PAS GÉNÉRÉE</h2>
        </div>

        <button onClick={onExplore} className="absolute bottom-12 right-12 z-10 border border-white p-4 rounded-full hover:bg-white hover:text-purple-900 transition-colors">
            <Play size={24} />
        </button>
    </section>
);

// 8. OUTLINE
const V8: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-transparent snap-start flex items-center justify-center font-display">
        <div className="flex flex-col items-center">
            <h1 className="text-[8vw] font-bold stroke-text-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                UNE MUSIQUE
            </h1>
            <h1 className="text-[12vw] font-black text-white leading-[0.8]">
                COMPOSÉE.
            </h1>
            <h1 className="text-[8vw] font-bold stroke-text-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>
                ET PAS GÉNÉRÉE
            </h1>
        </div>
        <button onClick={onExplore} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full backdrop-blur-md bg-white/10 flex items-center justify-center text-white font-mono text-xs uppercase tracking-widest hover:bg-white/20 transition-colors border border-white/20">
            Click
        </button>
    </section>
);

// 9. LAYERS
const V9: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-rose-50 text-rose-900 snap-start flex items-center justify-center font-serif overflow-hidden">
        <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute text-[20vw] opacity-10 font-bold"
        >
            COMPOSÉE
        </motion.div>

        <div className="relative z-10 text-center mix-blend-multiply">
            <h1 className="text-8xl md:text-9xl mb-[-4rem] relative z-20 text-rose-600">Une Musique</h1>
            <h1 className="text-[12rem] md:text-[18rem] leading-none font-bold text-rose-950 opacity-90">Composée.</h1>
            <h2 className="text-4xl mt-[-2rem] relative z-20 italic">Et Pas Générée</h2>
        </div>

        <button onClick={onExplore} className="absolute bottom-12 border-b-2 border-rose-900 text-rose-900 font-bold uppercase hover:pb-2 transition-all">
            Découvrir
        </button>
    </section>
);

// 10. SCALE
const V10: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-slate-900 text-white snap-start flex flex-col justify-center items-center font-display p-4">
        <div className="w-full max-w-6xl">
            <div className="flex items-baseline gap-4 mb-4">
                <span className="text-xs uppercase tracking-[0.4em] text-cyan-400">Concept x10</span>
                <div className="h-[1px] bg-white/20 flex-grow" />
            </div>

            <h1 className="text-9xl font-black tracking-tighter mb-4">
                COMPOSÉE.
            </h1>

            <div className="flex justify-between items-start">
                <p className="max-w-xs text-sm text-slate-400 leading-relaxed">
                    Une musique composée. Et Pas Générée. Human touch in a digital world.
                </p>
                <div className="text-right">
                    <h2 className="text-6xl font-thin tracking-tighter opacity-50">PAS</h2>
                    <h2 className="text-6xl font-thin tracking-tighter">GÉNÉRÉE</h2>
                </div>
            </div>
            <button onClick={onExplore} className="mt-12 w-full py-6 border-t border-b border-white/10 hover:bg-white/5 transition-colors uppercase tracking-[0.5em] text-xs">
                Enter Experience
            </button>
        </div>
    </section>
);


// ============================================================================
// SERIES B: TEXTURE & ATMOSPHERE (11-20)
// ============================================================================

// 11. ETHEREAL BLUR
const V11: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center font-display overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-900/50 to-black" />
        <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-fuchsia-600 rounded-full blur-[150px] mix-blend-screen"
        />

        <div className="relative z-10 text-center backdrop-blur-[2px]">
            <h1 className="text-8xl font-thin tracking-[-0.05em] drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                Une Musique<br />Composée.
            </h1>
            <p className="mt-6 text-xl tracking-[0.5em] uppercase font-light text-fuchsia-200">
                Et Pas Générée
            </p>
            <button onClick={onExplore} className="mt-12 px-8 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all">
                Flow
            </button>
        </div>
    </section>
);

// 12. DARK MATTER
const V12: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#050505] text-[#333] snap-start flex items-center justify-center font-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200" />

        <h1 className="text-[15vw] leading-none text-center text-[#151515] tracking-tighter">
            COMP<br />OSÉE.
        </h1>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-color-dodge">
            <div className="text-white text-center">
                <h2 className="text-4xl font-light tracking-widest mb-4">UNE MUSIQUE</h2>
                <div className="w-1 h-24 bg-gradient-to-b from-white to-transparent mx-auto" />
                <h2 className="text-4xl font-light tracking-widest mt-4">PAS GÉNÉRÉE</h2>
            </div>
        </div>
        <button onClick={onExplore} className="absolute bottom-12 text-white/50 hover:text-white transition-colors uppercase tracking-widest text-xs z-20">
            Immerse
        </button>
    </section>
);

// 13. GRAIN & NOISE
const V13: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-stone-800 text-stone-200 snap-start flex flex-col justify-center items-center font-mono">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        <div className="relative z-10 border-4 border-stone-200 p-12 max-w-4xl w-full text-center">
            <h1 className="text-6xl md:text-8xl font-bold uppercase mb-4">Composée.</h1>
            <p className="text-xl border-t border-b border-stone-500 py-4 my-8">
                UNE MUSIQUE AUTHENTIQUE. ET PAS GÉNÉRÉE.
            </p>
            <div className="flex justify-between items-center text-xs uppercase">
                <span>Analog Soul</span>
                <button onClick={onExplore} className="bg-stone-200 text-stone-900 px-6 py-2 font-bold hover:bg-white">
                    Listen
                </button>
                <span>No AI</span>
            </div>
        </div>
    </section>
);

// 14. GLASSMORPHISM
const V14: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-br from-cyan-500 to-blue-700 snap-start flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute w-[80vh] h-[80vh] bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 w-[90%] md:w-[60%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl text-white text-center">
            <h2 className="text-xl uppercase tracking-widest mb-4 opacity-80">Une Musique</h2>
            <h1 className="text-7xl font-bold mb-8">COMPOSÉE.</h1>
            <div className="bg-black/20 rounded-xl p-6 mb-8 inline-block">
                <code>Et Pas Générée</code>
            </div>
            <br />
            <button onClick={onExplore} className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Begin
            </button>
        </div>
    </section>
);

// 15. NEON CYBER
const V15: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#09090b] text-white snap-start flex flex-col items-center justify-center font-display overflow-hidden">
        <div className="absolute w-full h-[1px] bg-cyan-500 shadow-[0_0_20px_#06b6d4] top-1/3" />
        <div className="absolute w-full h-[1px] bg-pink-500 shadow-[0_0_20px_#ec4899] bottom-1/3" />

        <h1 className="text-9xl font-black italic tracking-tighter relative z-10 mix-blend-lighten text-transparent stroke-text-white" style={{ WebkitTextStroke: '2px white' }}>
            COMPOSÉE.
        </h1>
        <h1 className="text-9xl font-black italic tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 text-cyan-500 blur-sm">
            COMPOSÉE.
        </h1>

        <div className="absolute top-1/3 mt-4 bg-black px-4 text-cyan-400 text-xs font-mono uppercase tracking-widest z-20">Une Musique</div>
        <div className="absolute bottom-1/3 mb-4 bg-black px-4 text-pink-500 text-xs font-mono uppercase tracking-widest z-20">Et Pas Générée</div>

        <button onClick={onExplore} className="absolute bottom-20 border border-white/20 px-8 py-2 text-xs uppercase hover:bg-white hover:text-black transition-colors">
            Initialize
        </button>
    </section>
);

// 16. GRADIENT MASK
const V16: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white snap-start flex items-center justify-center">
        <div className="relative font-black text-center">
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <h1 className="text-[12vw] leading-none">UNE MUSIQUE</h1>
                <h1 className="text-[12vw] leading-none">COMPOSÉE.</h1>
            </div>
            <p className="text-black text-2xl font-bold tracking-[1em] mt-8 uppercase">Et Pas Générée</p>
        </div>
        <button onClick={onExplore} className="absolute bottom-12 w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <ArrowDown size={20} />
        </button>
    </section>
);

// 17. ABSTRACT (Video placeholder)
const V17: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-900 snap-start overflow-hidden flex items-center justify-center">
        <motion.div
            animate={{ scale: [1.2, 1], rotate: [0, 5] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900 via-black to-black opacity-80"
        />
        <div className="relative z-10 text-center text-amber-50">
            <h1 className="text-8xl font-serif italic mb-4">Composée.</h1>
            <p className="font-sans text-xs uppercase tracking-[0.5em] mb-8">Une Musique &mdash; Et Pas Générée</p>
            <button onClick={onExplore} className="text-amber-500 border-b border-amber-500 pb-1 uppercase text-xs hover:text-white hover:border-white transition-colors">
                Discover
            </button>
        </div>
    </section>
);

// 18. INVERTED
const V18: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex flex-col">
        <div className="h-1/2 flex items-center justify-center bg-black text-white">
            <h1 className="text-[10vw] font-bold">UNE MUSIQUE</h1>
        </div>
        <div className="h-1/2 flex items-center justify-center bg-white text-black relative">
            <h1 className="text-[10vw] font-bold">COMPOSÉE.</h1>
            <div className="absolute bottom-8 text-sm uppercase tracking-widest font-mono">
                Et Pas Générée
            </div>
            <button onClick={onExplore} className="absolute top-0 -translate-y-1/2 bg-accent-primary text-black w-24 h-24 rounded-full flex items-center justify-center font-bold hover:scale-110 transition-transform">
                GO
            </button>
        </div>
    </section>
);

// 19. SPOTLIGHT
const V19: React.FC<HeroProps> = ({ onExplore }) => {
    // Simplified spotlight effect
    return (
        <section className="relative w-full h-screen bg-black text-neutral-800 snap-start flex items-center justify-center font-display cursor-none">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(300px_at_center,white,transparent)]">
                <div className="text-center">
                    <h1 className="text-9xl font-black text-black">COMPOSÉE.</h1>
                    <p className="text-2xl font-bold uppercase tracking-widest text-black">Une Musique. Pas Générée.</p>
                </div>
            </div>
            <div className="text-center opacity-20">
                <h1 className="text-9xl font-black text-white">COMPOSÉE.</h1>
                <p className="text-2xl font-bold uppercase tracking-widest text-white">Une Musique. Pas Générée.</p>
            </div>
            <button onClick={onExplore} className="absolute bottom-12 z-20 text-white border border-white px-6 py-2 rounded-full cursor-pointer">
                Reveal
            </button>
        </section>
    );
};

// 20. VIGNETTE
const V20: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-slate-200 text-slate-900 snap-start flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
        <div className="text-center z-10">
            <h1 className="text-6xl font-serif italic mb-4 text-slate-900">Une Musique Composée.</h1>
            <div className="w-12 h-1 bg-slate-900 mx-auto mb-4" />
            <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-slate-700">Et Pas Générée</h2>
            <button onClick={onExplore} className="mt-12 opacity-50 hover:opacity-100 transition-opacity">
                <ArrowDown />
            </button>
        </div>
    </section>
);

// ============================================================================
// SERIES C: MOTION & TECH (21-30)
// ============================================================================

// 21. KINETIC MARQUEE
const V21: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-yellow-400 text-black snap-start flex flex-col justify-center overflow-hidden">
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? '-20%' : '0%' }}
                animate={{ x: i % 2 === 0 ? '0%' : '-20%' }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="whitespace-nowrap text-8xl font-black uppercase tracking-tighter leading-none"
            >
                Une Musique Composée. Et Pas Générée. —
            </motion.div>
        ))}
        <button onClick={onExplore} className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors group">
            <span className="bg-black text-yellow-400 px-8 py-4 text-2xl font-bold uppercase group-hover:scale-125 transition-transform">Pause & Explore</span>
        </button>
    </section>
);

// 22. GLITCH
const V22: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#000] text-[#0f0] snap-start flex items-center justify-center font-mono">
        <div className="relative">
            <h1 className="text-8xl font-bold opacity-80 animate-pulse">COMPOSÉE_ERROR</h1>
            <h1 className="absolute top-0 left-[2px] text-8xl font-bold text-red-500 mix-blend-screen opacity-50 animate-pulse">COMPOSÉE_ERROR</h1>
            <h1 className="absolute top-0 left-[-2px] text-8xl font-bold text-blue-500 mix-blend-screen opacity-50 animate-pulse">COMPOSÉE_ERROR</h1>
        </div>
        <div className="absolute bottom-24 text-center">
            <p className="typewriter overflow-hidden whitespace-nowrap border-r-4 border-orange-500 pr-2">
                &gt; Executing: Une Musique... Success.
            </p>
            <p className="mt-2 text-xs text-gray-500">&gt; Generation: Disabled.</p>
        </div>
        <button onClick={onExplore} className="absolute bottom-8 border border-[#0f0] text-[#0f0] px-4 py-2 hover:bg-[#0f0] hover:text-black transition-colors">
            RUN_PROGRAM
        </button>
    </section>
);

// 23. PERSPECTIVE
const V23: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-100 text-neutral-900 snap-start flex items-center justify-center perspective-[1000px]">
        <motion.div
            animate={{ rotateX: [10, -10, 10], rotateY: [-10, 10, -10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="transform-style-3d text-center"
        >
            <h1 className="text-9xl font-black uppercase tracking-tighter" style={{ transform: 'translateZ(50px)' }}>COMPOSÉE.</h1>
            <h2 className="text-4xl font-light uppercase tracking-[0.5em] mt-8 text-neutral-500" style={{ transform: 'translateZ(20px)' }}>Une Musique</h2>
            <h2 className="text-4xl font-bold uppercase tracking-tight mt-2" style={{ transform: 'translateZ(80px)' }}>Et Pas Générée</h2>
        </motion.div>
        <button onClick={onExplore} className="absolute bottom-12 bg-black text-white px-8 py-3 rounded-lg hover:shadow-xl transition-shadow">
            Enter 3D
        </button>
    </section>
);

// 24. GRAVITY (Floating)
const V24: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-slate-800 text-white snap-start overflow-hidden flex items-center justify-center">
        <motion.div animate={{ y: [-20, 20, -20], rotate: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="text-6xl font-bold">
            UNE
        </motion.div>
        <motion.div animate={{ y: [30, -30, 30], rotate: [2, -2, 2] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="text-8xl font-black text-accent-primary mx-8">
            MUSIQUE
        </motion.div>
        <motion.div animate={{ y: [-15, 15, -15], rotate: [-1, 1, -1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="text-6xl font-light">
            COMPOSÉE
        </motion.div>

        <div className="absolute bottom-12 text-center">
            <p className="text-sm uppercase tracking-widest opacity-60 mb-4">Et Pas Générée</p>
            <button onClick={onExplore} className="w-12 h-12 bg-white text-slate-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform mx-auto">
                <ArrowDown />
            </button>
        </div>
    </section>
);

// 25. TYPEWRITER (Fast)
const V25: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center font-mono">
        <div className="text-4xl md:text-6xl max-w-4xl leading-relaxed">
            <span>&gt; </span>
            <span className="bg-black text-white px-2">Une Musique</span>
            <br />
            <span>&gt; </span>
            <span className="bg-black text-white px-2">Composée.</span>
            <br />
            <span>&gt; </span>
            <span className="bg-red-600 text-white px-2">Et Pas Générée_</span>
        </div>
        <button onClick={onExplore} className="absolute bottom-12 right-12 underline text-sm uppercase tracking-widest">
            Execute
        </button>
    </section>
);

// 26. VELOCITY
const V26: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-orange-600 text-orange-50 snap-start flex flex-col justify-center overflow-hidden">
        <div className="italic font-black text-9xl -ml-12 opacity-50">SPEED SPEED</div>
        <div className="italic font-black text-9xl ml-12 z-10">COMPOSÉE</div>
        <div className="italic font-black text-9xl -ml-24 opacity-50">NO GENERATION</div>

        <div className="absolute top-1/2 right-12 -translate-y-1/2 text-right">
            <h3 className="text-2xl font-bold uppercase mb-2">Une Musique</h3>
            <h3 className="text-2xl font-bold uppercase">Pas Générée</h3>
            <button onClick={onExplore} className="mt-8 border-2 border-white px-6 py-2 rounded-full font-bold uppercase hover:bg-white hover:text-orange-600 transition-colors">
                Go Fast
            </button>
        </div>
    </section>
);

// 27. DISTORTION
const V27: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-emerald-900 text-emerald-100 snap-start flex items-center justify-center overflow-hidden">
        <div className="text-[15vw] font-black leading-none tracking-tighter mix-blend-overlay opacity-50 absolute top-0 left-0 scale-y-150 origin-top">
            COMPOSÉE
        </div>
        <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-4">Une Musique</h1>
            <h2 className="text-4xl font-light italic opacity-80">Et pas générée</h2>
        </div>
        <div className="text-[15vw] font-black leading-none tracking-tighter mix-blend-overlay opacity-50 absolute bottom-0 right-0 scale-y-150 origin-bottom text-right">
            NATURELLE
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-20" />
    </section>
);

// 28. PARTICLES (Grid of dots)
const V28: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-900 text-gray-100 snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] gap-2 opacity-10">
            {[...Array(400)].map((_, i) => <div key={i} className="bg-white rounded-full w-1 h-1" />)}
        </div>

        <div className="bg-gray-900/80 backdrop-blur p-12 border border-gray-700 z-10 text-center">
            <h1 className="text-5xl font-mono mb-4 text-accent-primary">:: COMPOSÉE ::</h1>
            <p className="text-sm font-mono uppercase tracking-widest text-gray-400">Une Musique / Et Pas Générée</p>
            <button onClick={onExplore} className="mt-8 text-accent-primary hover:text-white transition-colors">
                [ Initialize ]
            </button>
        </div>
    </section>
);

// 29. TERMINAL
const V29: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-green-500 snap-start p-8 font-mono text-sm md:text-base cursor-text">
        <div className="max-w-3xl">
            <p className="mb-2">root@infinitemood:~$ load_experience</p>
            <p className="mb-2 text-white">Loading assets... OK</p>
            <p className="mb-2 text-white">Checking integrity... OK</p>
            <p className="mb-8 text-white">Validating source... HUMAN_CONFIRMED</p>

            <h1 className="text-6xl font-bold text-white mb-4">UNE MUSIQUE COMPOSÉE.</h1>
            <h2 className="text-4xl text-red-500 mb-8">ET PAS GÉNÉRÉE.</h2>

            <p className="mb-4 animate-pulse">_ Ready to start.</p>

            <button onClick={onExplore} className="bg-green-900/30 text-green-400 border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors">
                ./start.sh
            </button>
        </div>
    </section>
);

// 30. THE VOID (Finale)
const V30: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black snap-start flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-white text-[1px] md:text-xs uppercase tracking-[1em] opacity-0 animate-[fadeIn_4s_ease-in_forwards]">
                Une Musique Composée. Et Pas Générée.
            </h1>
            <button
                onClick={onExplore}
                className="mt-32 text-white/20 hover:text-white transition-colors uppercase text-[10px] tracking-[0.5em]"
            >
                ( Enter the Void )
            </button>
        </div>
    </section>
);

// ============================================================================
// SERIES D: EXPERIMENTAL & AVANT-GARDE (31-40)
// ============================================================================

// 31. ASCII ART
const V31: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-green-500 snap-start flex items-center justify-center font-mono text-[10px] md:text-xs overflow-hidden leading-none whitespace-pre">
        <div className="opacity-50 absolute inset-0 flex items-center justify-center select-none pointer-events-none">
            {`
             U   U  N   N  EEEEE      M   M  U   U  SSSSS  I   QQQ   U   U  EEEEE
             U   U  NN  N  E          MM MM  U   U  S      I  Q   Q  U   U  E
             U   U  N N N  EEE        M M M  U   U  SSSSS  I  Q   Q  U   U  EEE
             U   U  N  NN  E          M   M  U   U      S  I  Q Q Q  U   U  E
              UUU   N   N  EEEEE      M   M   UUU   SSSSS  I   QQ Q   UUU   EEEEE
            `}
        </div>
        <div className="z-10 bg-black/80 p-8 border border-green-500/50 backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">UNE MUSIQUE COMPOSÉE</h1>
            <p className="text-xl md:text-2xl border-t border-green-500 pt-4">ET PAS GÉNÉRÉE</p>
            <button onClick={onExplore} className="mt-8 uppercase hover:bg-green-500 hover:text-black px-4 py-2 transition-colors border border-green-500">
                [ INIT SYSTEM ]
            </button>
        </div>
    </section>
);

// 32. HEATMAP
const V32: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black snap-start overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-red-600 to-yellow-400 opacity-80 blur-[100px]" />
        <div className="relative z-10 mix-blend-overlay text-center">
            <h1 className="text-[12vw] font-black leading-none text-white blur-sm hover:blur-none transition-all duration-500">
                COMPOSÉE
            </h1>
        </div>
        <div className="absolute bottom-12 left-12 mix-blend-difference text-white">
            <h2 className="text-4xl font-bold uppercase">Une Musique</h2>
            <h2 className="text-4xl font-bold uppercase">Et Pas Générée</h2>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-20" />
    </section>
);

// 33. BLUEPRINT
const V33: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#003399] text-white snap-start overflow-hidden font-mono">
        {/* Grid */}
        <div className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="absolute inset-0 p-12 flex flex-col justify-center">
            <div className="border-2 border-dashed border-white/50 p-8 inline-block max-w-4xl relative">
                <div className="absolute -top-3 -left-3 bg-[#003399] px-2 text-xs">FIG A.1</div>
                <h1 className="text-8xl font-thin tracking-tighter">UNE MUSIQUE.</h1>
                <div className="flex items-center gap-4 my-4">
                    <div className="h-[1px] w-24 bg-white" />
                    <span className="text-xs">scale 1:1</span>
                </div>
                <h1 className="text-8xl font-thin tracking-tighter">COMPOSÉE.</h1>

                <div className="absolute -bottom-6 -right-6 border border-white/50 p-4 bg-[#003399]">
                    <h3 className="text-sm font-bold">SPECIFICATION:</h3>
                    <p className="text-xl">PAS GÉNÉRÉE</p>
                </div>
            </div>
        </div>
        <button onClick={onExplore} className="absolute bottom-12 right-12 border border-white px-6 py-2 hover:bg-white hover:text-[#003399] transition-colors">
            VIEW PROJECT
        </button>
    </section>
);

// 34. STICKER BOMB
const V34: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-yellow-300 snap-start overflow-hidden flex items-center justify-center">
        {/* Stickers BG */}
        <div className="absolute inset-0 opacity-20 rotate-12 scale-150 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 bg-black text-white p-4 rotate-12 font-black text-6xl">MUSIC</div>
            <div className="absolute top-1/2 right-1/4 bg-red-600 text-white p-8 -rotate-6 font-black text-8xl rounded-full">RAW</div>
            <div className="absolute bottom-1/4 left-1/3 bg-blue-600 text-white p-2 rotate-45 font-mono text-4xl">NO_AI</div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="bg-black text-white p-6 rotate-[-2deg] shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
                <h1 className="text-6xl font-black uppercase">Une Musique</h1>
            </div>
            <div className="bg-white text-black p-8 rotate-[3deg] shadow-[10px_10px_0px_rgba(0,0,0,0.2)] border-4 border-black">
                <h1 className="text-8xl font-black uppercase italic">COMPOSÉE</h1>
            </div>
            <div className="bg-red-500 text-white p-4 rotate-[-1deg] shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
                <h2 className="text-4xl font-black uppercase">Et Pas Générée</h2>
            </div>

            <button onClick={onExplore} className="mt-12 bg-black text-white px-8 py-3 font-bold uppercase skew-x-[-10deg] hover:scale-110 transition-transform">
                Start Here
            </button>
        </div>
    </section>
);

// 35. COLLAGE
const V35: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e8dcb5] text-black snap-start flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-5xl h-[80vh]">
            <motion.h1
                initial={{ rotate: -5 }}
                whileInView={{ rotate: 0 }}
                className="text-8xl font-serif absolute top-20 left-10 mix-blend-multiply"
            >
                Une
            </motion.h1>
            <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                className="absolute top-40 left-40"
            >
                <img src="https://images.unsplash.com/photo-1519681393798-3828fb4090bb?q=80&w=1000&auto=format&fit=crop" className="w-64 h-80 object-cover grayscale contrast-125 sepia" alt="" />
            </motion.div>
            <motion.h1
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                className="text-[12rem] font-sans font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 mix-blend-multiply z-10"
            >
                MUSIQUE
            </motion.h1>
            <h2 className="absolute bottom-20 right-20 text-6xl font-serif italic bg-black text-white px-4">
                Pas Générée
            </h2>
            <button onClick={onExplore} className="absolute bottom-10 left-1/2 -translate-x-1/2 border-b-2 border-black text-xl hover:text-red-600 transition-colors">
                ( Lire l'article )
            </button>
        </div>
    </section>
);


// 36. VHS
const V36: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-blue-900 text-white snap-start overflow-hidden font-mono flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-20" />
        <div className="absolute top-8 left-8 text-2xl animate-pulse z-20">PLAY ►</div>
        <div className="absolute top-8 right-8 text-2xl z-20">SP 0:00:01</div>

        <div className="relative z-10 mix-blend-screen skew-x-12 opacity-80 animate-pulse text-center">
            <h1 className="text-9xl font-bold text-red-500 absolute top-0 left-1">COMPOSÉE</h1>
            <h1 className="text-9xl font-bold text-cyan-500 absolute top-0 -left-1">COMPOSÉE</h1>
            <h1 className="text-9xl font-bold text-white relative">COMPOSÉE</h1>
        </div>

        <div className="mt-8 text-center z-20">
            <h2 className="text-4xl uppercase tracking-widest mb-4 blur-[1px]">Une Musique</h2>
            <h2 className="text-4xl uppercase tracking-widest bg-white text-blue-900 px-4">Pas Générée</h2>
        </div>

        <button onClick={onExplore} className="mt-12 border border-white px-8 py-2 z-30 hover:bg-white hover:text-blue-900">
            EJECT
        </button>
    </section>
);


// 37. SCANNER
const V37: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center overflow-hidden">
        <motion.div
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[10vh] bg-gradient-to-b from-transparent via-green-500/50 to-transparent blur-md z-20 pointer-events-none"
        />

        <div className="text-center">
            <h1 className="text-[10vw] font-bold text-neutral-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                COMPOSÉE
            </h1>
            <h1 className="text-[10vw] font-bold text-white relative z-10 clip-text-scanner mix-blend-overlay">
                COMPOSÉE
            </h1>

            <div className="mt-8 flex justify-between w-full max-w-xl mx-auto text-xs uppercase tracking-widest text-neutral-500">
                <span>Une Musique</span>
                <span>Et Pas Générée</span>
            </div>

            <button onClick={onExplore} className="mt-12 border-b border-white hover:opacity-50 transition-opacity">
                Scan Complete. Proceed.
            </button>
        </div>
    </section>
);

// 38. HALFTONE
const V38: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-cyan-300 snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

        <div className="relative z-10 text-center">
            <div className="bg-white border-4 border-black shado-[15px_15px_0px_black] p-12 -rotate-3 text-black">
                <h1 className="text-9xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-magenta-500 to-yellow-500" style={{ WebkitTextStroke: '4px black' }}>
                    POP!
                </h1>
                <h2 className="text-4xl font-bold uppercase mt-4">Une Musique Composée</h2>
            </div>
            <div className="bg-black text-white p-4 rotate-2 mt-4 inline-block">
                <h2 className="text-2xl font-bold uppercase">Et Pas Générée</h2>
            </div>

            <button onClick={onExplore} className="mt-12 bg-magenta-500 text-white font-bold px-8 py-4 border-4 border-black shadow-[8px_8px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                BOOM!
            </button>
        </div>
    </section>
);


// 39. PIXEL SORTING
const V39: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-900 text-white snap-start flex flex-col justify-center items-start p-12 overflow-hidden">
        <div className="text-[15vw] leading-[0.7] font-black tracking-tighter mix-blend-exclusion scale-y-[4.0] origin-top opacity-50 blur-sm">
            COMPOSÉE
        </div>
        <div className="text-[15vw] leading-[0.7] font-black tracking-tighter mix-blend-exclusion relative z-10 mt-[-5vw]">
            COMPOSÉE
        </div>

        <div className="absolute top-12 right-12 text-right">
            <h3 className="text-4xl font-bold uppercase mb-2">Une Musique</h3>
            <h3 className="text-4xl font-bold uppercase text-red-500">Pas Générée</h3>
        </div>

        <button onClick={onExplore} className="absolute bottom-12 left-12 w-full max-w-md h-2 bg-white hover:h-8 transition-all duration-300">
            <span className="opacity-0 hover:opacity-100 text-black font-bold p-1">DRAG TO SORT</span>
        </button>
    </section>
);

// 40. REDACTED
const V40: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#dcdcdc] text-black snap-start flex items-center justify-center font-mono p-8">
        <div className="max-w-2xl w-full text-justify text-xl leading-loose">
            <p>
                TOP SECRET // CLEARANCE LEVEL 5<br /><br />
                SUBJECT: <span className="bg-black text-white px-1">PROJECT INFINITY</span><br /><br />
                ANALYSIS CONFIRMS THAT THE AUDIO IS <span className="bg-black hover:bg-transparent hover:text-black transition-colors cursor-help select-none text-transparent">UNE MUSIQUE</span> AND NOT DERIVATIVE.
                FURTHERMORE, IT IS CONFIRMED TO BE <span className="bg-black hover:bg-transparent hover:text-black transition-colors cursor-help select-none text-transparent">COMPOSÉE</span> BY HUMANS.
                AI INVOLVEMENT IS <span className="bg-black hover:bg-transparent hover:text-black transition-colors cursor-help select-none text-transparent">PAS GÉNÉRÉE</span>.
                <br /><br />
                CONCLUSION: THE EXPERIENCE IS AUTHENTIC.
            </p>
            <button onClick={onExplore} className="mt-12 bg-red-700 text-white px-4 py-2 font-bold uppercase tracking-widest stamp rotate-[-5deg] opacity-80 hover:opacity-100">
                [ DECLASSIFY ]
            </button>
        </div>
    </section>
);

// ============================================================================
// SERIES E: NATURE & ORGANIC (41-50)
// ============================================================================

// 41. RIPPLE
const V41: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-teal-900 text-teal-50 snap-start flex items-center justify-center overflow-hidden">
        {/* Simplified ripple visual using radial gradients */}
        <motion.div
            animate={{ scale: [1, 5], opacity: [0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-teal-500 rounded-full"
        />
        <motion.div
            animate={{ scale: [1, 5], opacity: [0.5, 0] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-teal-500 rounded-full"
        />

        <div className="relative z-10 text-center mix-blend-overlay">
            <h1 className="text-9xl font-serif italic text-white/80">Composée.</h1>
            <p className="mt-8 text-xl uppercase tracking-widest font-light">Une Musique · Et Pas Générée</p>
            <button onClick={onExplore} className="mt-12 opacity-50 hover:opacity-100 transition-opacity">Dive In</button>
        </div>
    </section>
);

// 42. FOG
const V42: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-300 text-gray-800 snap-start flex items-center justify-center overflow-hidden">
        <motion.div
            animate={{ x: [-50, 50, -50] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-3xl z-10 pointer-events-none"
        />

        <div className="relative z-0 text-center">
            <h1 className="text-[12vw] font-black uppercase tracking-tighter text-gray-400">
                COMPOSÉE
            </h1>
        </div>

        <div className="absolute z-20 text-center">
            <h2 className="text-4xl font-light uppercase tracking-[0.5em] mb-4">Une Musique</h2>
            <h2 className="text-4xl font-bold uppercase tracking-tight">Et Pas Générée</h2>
            <button onClick={onExplore} className="mt-12 bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-black transition-colors">
                Piercier le brouillard
            </button>
        </div>
    </section>
);

// 43. CONSTELLATION
const V43: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0b1026] text-white snap-start flex items-center justify-center">
        {/* Simplified stars */}
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="relative z-10 text-center">
            <div className="relative inline-block">
                {/* Connection lines would go here in SVG */}
                <h1 className="text-8xl font-thin tracking-[0.2em] relative z-10">C O M P O S É E</h1>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/30 -z-0" />
            </div>
            <div className="flex justify-between w-full mt-8 px-12 opacity-70 font-mono text-xs">
                <span>STAR: Une Musique</span>
                <span>MAG: Pas Générée</span>
            </div>
            <button onClick={onExplore} className="mt-16 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto hover:bg-white/10 transition-colors">
                ✦
            </button>
        </div>
    </section>
);

// 44. AURORA
const V44: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center overflow-hidden">
        <motion.div
            animate={{ skewX: [-20, 20, -20], x: [-100, 100, -100] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 w-[200vw] h-full bg-gradient-to-r from-transparent via-green-500/20 to-transparent blur-[80px]"
        />
        <motion.div
            animate={{ skewX: [20, -20, 20], x: [100, -100, 100] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 w-[200vw] h-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-[80px]"
        />

        <div className="relative z-10 text-center">
            <h1 className="text-7xl font-light tracking-wide glow-text">Une Musique Composée.</h1>
            <h2 className="text-3xl font-thin tracking-widest mt-6 opacity-80">Et pas générée.</h2>
            <button onClick={onExplore} className="mt-12 text-sm uppercase tracking-[0.3em] border-b border-transparent hover:border-white transition-all pb-1">
                View Phenomenon
            </button>
        </div>
    </section>
);

// 45. EMBER
const V45: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1a0500] text-orange-500 snap-start flex items-center justify-center overflow-hidden">
        {/* Particles rising */}
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ y: '100vh', opacity: 0 }}
                animate={{ y: '-10vh', opacity: [0, 1, 0] }}
                transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5 }}
                className="absolute w-2 h-2 bg-orange-500 rounded-full blur-[2px]"
                style={{ left: `${Math.random() * 100}vw` }}
            />
        ))}

        <div className="relative z-10 text-center">
            <h1 className="text-[10vw] font-black uppercase text-transparent bg-clip-text bg-gradient-to-t from-orange-600 to-yellow-200">
                COMPOSÉE
            </h1>
            <p className="text-orange-200 text-xl font-medium tracking-[0.5em] uppercase mt-4">Une Musique / Pas Générée</p>
            <button onClick={onExplore} className="mt-12 bg-orange-600 text-[#1a0500] px-6 py-2 rounded font-bold hover:bg-orange-500 transition-colors">
                Ignite
            </button>
        </div>
    </section>
);


// 46. ECLIPSE
const V46: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-900 text-white snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute w-96 h-96 bg-white rounded-full shadow-[0_0_100px_rgba(255,255,255,0.5)]" />
        <motion.div
            animate={{ x: [-100, 0] }} // simplified movement
            className="absolute w-94 h-94 bg-black rounded-full z-10"
        />

        <div className="relative z-20 mix-blend-difference text-center">
            <h1 className="text-8xl font-serif italic text-white">Composée.</h1>
            <p className="text-sm font-sans uppercase tracking-[0.5em] mt-8 text-neutral-300">Totality: Une Musique Pas Générée</p>
            <button onClick={onExplore} className="mt-24 text-white hover:underline uppercase text-xs">
                Observation Mode
            </button>
        </div>
    </section>
);

// 47. FROST
const V47: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-slate-200 snap-start flex items-center justify-center">
        <div className="absolute inset-0 backdrop-blur-3xl bg-white/30" />
        <div className="bg-white/40 backdrop-blur-md border border-white/60 p-16 rounded-2xl shadow-xl text-slate-800 text-center max-w-2xl">
            <h1 className="text-6xl font-thin mb-4 tracking-tight">Une Musique<br /><span className="font-bold">Composée.</span></h1>
            <div className="h-[1px] w-1/2 bg-slate-400 mx-auto my-6" />
            <h2 className="text-2xl font-light italic">Et Pas Générée.</h2>
            <button onClick={onExplore} className="mt-8 px-6 py-2 bg-slate-800 text-white text-sm uppercase tracking-widest hover:bg-slate-700 transition-colors">
                Break Ice
            </button>
        </div>
    </section>
);

// 48. DAPPLED LIGHT
const V48: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#dedede] text-black snap-start flex items-center justify-center overflow-hidden">
        {/* Shadow Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply filter blur-sm">
            <svg width="100%" height="100%">
                <pattern id="leaf-shadow" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="40" fill="gray" />
                    <circle cx="150" cy="150" r="60" fill="gray" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#leaf-shadow)" />
            </svg>
        </div>

        <div className="relative z-10 font-serif text-center">
            <h1 className="text-9xl italic">Composée.</h1>
            <p className="font-sans text-sm uppercase tracking-widest mt-4">Une Musique (Naturelle) &mdash; Pas Générée</p>
            <button onClick={onExplore} className="mt-12 border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
                Relax
            </button>
        </div>
    </section>
);

// 49. SAND
const V49: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#d2b48c] text-[#5d4037] snap-start flex items-center justify-center">
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/sandpaper.png")' }} />

        <div className="relative z-10 text-center border-l-4 border-r-4 border-[#5d4037] px-12 py-4">
            <h1 className="text-8xl font-black uppercase tracking-tighter">Une Musique</h1>
            <h1 className="text-8xl font-black uppercase tracking-tighter mb-4">Composée.</h1>
            <p className="text-xl font-bold italic">Et Pas Générée.</p>
            <button onClick={onExplore} className="mt-8 bg-[#5d4037] text-[#d2b48c] px-8 py-3 font-bold hover:bg-[#3e2723] transition-colors">
                Unearth
            </button>
        </div>
    </section>
);


// 50. BLOOM
const V50: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center">
        <h1 className="text-[12vw] font-bold blur-[20px] absolute opacity-50 text-rose-500 animate-pulse">COMPOSÉE</h1>
        <h1 className="text-[12vw] font-bold blur-[40px] absolute opacity-30 text-white">COMPOSÉE</h1>
        <div className="relative z-10 text-center">
            <h1 className="text-[12vw] font-bold text-white mb-4 mix-blend-overlay">COMPOSÉE</h1>
            <div className="flex justify-between w-full max-w-4xl mx-auto px-4 uppercase font-bold tracking-widest text-rose-300">
                <span>Une Musique</span>
                <span>Pas Générée</span>
            </div>
            <button onClick={onExplore} className="mt-16 text-white/50 hover:text-white transition-colors uppercase border-b border-white/20 pb-1">
                Focus
            </button>
        </div>
    </section>
);

// ============================================================================
// SERIES F: MINIMALIST & CONCEPTUAL (51-60)
// ============================================================================

// 51. FOCUS
const V51: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-100 text-neutral-900 snap-start flex items-center justify-center">
        <div className="absolute top-12 left-12 text-6xl font-bold blur-sm opacity-20">UNE MUSIQUE</div>
        <h1 className="text-9xl font-black z-10">COMPOSÉE.</h1>
        <div className="absolute bottom-12 right-12 text-6xl font-bold blur-md opacity-20">PAS GÉNÉRÉE</div>
        <button onClick={onExplore} className="absolute inset-0 z-20" />
    </section>
);

// 52. SPLIT SCREEN
const V52: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen flex snap-start">
        <div className="w-1/2 bg-white text-black flex items-center justify-end pr-4">
            <h1 className="text-8xl font-black text-right">UNE<br />MUSIQUE<br />COMPOSÉE</h1>
        </div>
        <div className="w-1/2 bg-black text-white flex items-center justify-start pl-4">
            <h1 className="text-8xl font-black text-left opacity-0">...</h1>
            <div className="absolute">
                <h1 className="text-8xl font-black text-left">ET<br />PAS<br />GÉNÉRÉE</h1>
            </div>
        </div>
        <button onClick={onExplore} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent-primary rounded-full hover:scale-125 transition-transform" />
    </section>
);

// 53. INFINITE MIRROR (Recursion)
const V53: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center overflow-hidden">
        {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute border border-white p-12 flex items-center justify-center" style={{ width: `${100 - i * 15}%`, height: `${100 - i * 15}%`, opacity: 1 - i * 0.15 }}>
                <h1 className="text-2xl font-bold uppercase whitespace-nowrap">Une Musique Composée. Et Pas Générée.</h1>
            </div>
        ))}
        <button onClick={onExplore} className="relative z-10 bg-white text-black px-6 py-2 uppercase font-bold hover:bg-neutral-200">
            Break Loop
        </button>
    </section>
);


// 54. BARCODE
const V54: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex flex-col items-center justify-center">
        <div className="flex gap-1 h-64 items-end">
            {[...Array(50)].map((_, i) => (
                <div key={i} className="bg-black w-2" style={{ height: `${Math.random() * 100}%` }} />
            ))}
        </div>
        <h1 className="text-4xl font-mono mt-4 tracking-[1em] uppercase">Composée</h1>
        <p className="text-xs font-mono mt-2">ID: UNE_MUSIQUE_PAS_GENEREE_001</p>
        <button onClick={onExplore} className="mt-8 border border-black px-4 py-1 hover:bg-black hover:text-white transition-colors">
            SCAN
        </button>
    </section>
);

// 55. DICTIONARY
const V55: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#fffef0] text-black snap-start p-12 md:p-24 font-serif flex items-center">
        <div className="max-w-xl">
            <h1 className="text-6xl font-bold mb-4">Composée</h1>
            <p className="text-xl italic mb-2">/kɔ̃.po.ze/ • adjective</p>
            <ol className="list-decimal list-inside space-y-4 text-lg">
                <li>Create, forming a whole. <span className="text-gray-500">"Une musique composée avec soin."</span></li>
                <li>Calm, settled.</li>
                <li className="font-bold">Not generated by artificial intelligence.</li>
            </ol>
            <button onClick={onExplore} className="mt-12 text-sm font-sans uppercase font-bold text-gray-400 hover:text-black transition-colors">
                [ See Examples ]
            </button>
        </div>
    </section>
);

// 56. MORSE CODE
const V56: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex flex-col items-center justify-center font-mono">
        <div className="text-6xl md:text-8xl tracking-widest text-center leading-relaxed">
            ..- -. .<br />
            -- ..- ... .. --.- ..- .<br />
            -.-. --- -- .--. --- ... ..-.. .
        </div>
        <div className="mt-12 text-neutral-500 text-sm uppercase tracking-widest">
            ( Une Musique Composée. Et Pas Générée. )
        </div>
        <button onClick={onExplore} className="mt-8 w-4 h-4 rounded-full bg-white animate-pulse hover:scale-150 transition-transform" />
    </section>
);

// 57. COLOR THEORY (Mondrian)
const V57: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start grid grid-cols-4 grid-rows-4 gap-0 border-4 border-black">
        <div className="col-span-1 row-span-2 bg-red-600 border-r-4 border-b-4 border-black flex items-end p-4">
            <h1 className="font-bold text-white text-4xl">UNE</h1>
        </div>
        <div className="col-span-3 row-span-1 bg-white border-b-4 border-black p-8 flex items-center">
            <h1 className="font-black text-6xl uppercase tracking-tighter">Musique Composée.</h1>
        </div>
        <div className="col-span-2 row-span-2 bg-yellow-400 border-r-4 border-black p-8 flex items-center justify-center">
            <h2 className="font-bold text-2xl uppercase">Et Pas</h2>
        </div>
        <div className="col-span-1 row-span-1 bg-blue-600 border-b-4 border-black" />
        <div className="col-span-1 row-span-2 bg-white border-l-4 border-black flex items-center justify-center p-4 text-center">
            <h2 className="font-bold text-xl uppercase writing-vertical-rl">Générée</h2>
        </div>
        <button onClick={onExplore} className="absolute bottom-8 right-8 bg-black text-white px-6 py-3 font-bold uppercase hover:bg-gray-800">
            Start
        </button>
    </section>
);


// 58. NEGATIVE SPACE
const V58: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start">
        <div className="absolute bottom-8 right-8 text-right">
            <h1 className="text-xs font-bold uppercase tracking-widest mb-1">Une Musique Composée.</h1>
            <h1 className="text-xs font-bold uppercase tracking-widest">Et Pas Générée.</h1>
            <button onClick={onExplore} className="mt-4 border-b border-black text-xs hover:text-gray-500 transition-colors">
                Explore The Space
            </button>
        </div>
    </section>
);

// 59. SUBTITLE (Cinematic)
const V59: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black snap-start flex items-end justify-center pb-24">
        <div className="text-center">
            <h1 className="text-yellow-400 text-3xl md:text-5xl font-medium drop-shadow-md font-sans">
                Une musique composée, et pas générée.
            </h1>
            <button onClick={onExplore} className="mt-12 text-white/30 hover:text-white transition-colors text-xs uppercase tracking-widest">
                [ Continue ]
            </button>
        </div>
    </section>
);

// 60. THE END (Pixels)
const V60: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center font-mono">
        <h1 className="text-[8px] animate-pulse">UNE MUSIQUE COMPOSÉE. ET PAS GÉNÉRÉE.</h1>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// ============================================================================
// SERIES G: ART DIRECTION & EDITORIAL (61-70)
// ============================================================================

// 61. THE CLASSIC
const V61: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f8f5f2] text-[#1c1c1c] snap-start flex flex-col items-center justify-center font-serif">
        <div className="text-center space-y-8 max-w-4xl">
            <h1 className="text-7xl md:text-9xl leading-none tracking-tight">
                Une Musique<br />
                <span className="font-light italic">Composée.</span>
            </h1>
            <div className="w-16 h-[1px] bg-black mx-auto" />
            <p className="font-sans text-sm uppercase tracking-[0.3em] opacity-70">
                Pour se concentrer. S'inspirer. Librement.
            </p>
            <h2 className="text-2xl font-light italic mt-8">
                ( Et Pas Générée )
            </h2>
            <button onClick={onExplore} className="mt-12 font-sans text-xs border border-transparent border-b-black pb-1 hover:opacity-50 transition-opacity uppercase tracking-widest">
                Discover
            </button>
        </div>
    </section>
);

// 62. THE COLUMN
const V62: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center font-display">
        <div className="flex flex-col items-center gap-4 text-center">
            <div className="bg-black text-white px-6 py-2 rotate-[-2deg] mb-2">
                <span className="text-xs uppercase tracking-widest">Manifesto</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                UNE MUSIQUE
            </h1>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                COMPOSÉE
            </h1>
            <p className="text-xl max-w-md my-4 font-serif italic text-gray-600">
                "Pour se concentrer. S'inspirer. Librement."
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-tight border-b-4 border-black pb-1">
                Et Pas Générée
            </h2>
            <button onClick={onExplore} className="mt-8 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
                ↓
            </button>
        </div>
    </section>
);

// 63. OFF-GRID
const V63: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e6e6e6] text-[#222] snap-start flex items-center justify-center overflow-hidden">
        <motion.div
            className="absolute right-[10%] top-[20%] w-[30vw] h-[30vw] rounded-full bg-white mix-blend-overlay"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10 grid grid-cols-12 w-full max-w-6xl px-4">
            <div className="col-span-8 col-start-2">
                <h1 className="text-[8vw] font-bold leading-[0.85] tracking-tight text-black">
                    Une Musique<br />Composée.
                </h1>
            </div>
            <div className="col-span-4 col-start-8 mt-12">
                <p className="text-xl font-medium mb-4">Pour se concentrer. S'inspirer. Librement.</p>
                <h2 className="text-4xl font-light italic text-[#555]">Et Pas Générée.</h2>
                <button onClick={onExplore} className="mt-8 bg-[#222] text-white px-6 py-3 text-sm uppercase font-bold hover:bg-black transition-colors">
                    Explore
                </button>
            </div>
        </div>
    </section>
);

// 64. THE FRAME
const V64: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start p-8 md:p-12 box-border flex items-center justify-center">
        <div className="relative w-full h-full border-[1px] border-black flex flex-col justify-between p-8 md:p-16">
            <div className="flex justify-between items-start">
                <span className="text-xs uppercase tracking-widest">( 01 )</span>
                <span className="text-xs uppercase tracking-widest font-bold">Infinite Mood</span>
            </div>

            <div className="text-center self-center">
                <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-2">Une Musique Composée</h1>
                <p className="text-lg italic font-serif text-gray-500 mb-8">Pour se concentrer. S'inspirer. Librement.</p>
                <h2 className="text-4xl font-bold uppercase tracking-widest">Et Pas Générée</h2>
            </div>

            <div className="flex justify-between items-end">
                <button onClick={onExplore} className="uppercase text-xs font-bold border-b border-black hover:text-gray-500 transition-colors">Start Experience</button>
                <span className="text-xs uppercase tracking-widest">( 2026 )</span>
            </div>
        </div>
    </section>
);

// 65. OVERLAP
const V65: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f1f0eb] text-[#1a1a1a] snap-start flex items-center justify-center overflow-hidden">
        <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#d4d0c2] rounded-full mix-blend-multiply"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 text-center mix-blend-darken">
            <h1 className="text-[10vw] font-black leading-none tracking-tighter text-[#1a1a1a]">
                UNE MUSIQUE
            </h1>
            <h1 className="text-[10vw] font-black leading-none tracking-tighter text-[#1a1a1a] opacity-50">
                COMPOSÉE.
            </h1>
            <div className="mt-8 bg-white/80 p-6 backdrop-blur-sm inline-block rounded-xl">
                <p className="font-serif text-xl italic mb-2">"Pour se concentrer. S'inspirer. Librement."</p>
                <h2 className="text-sm font-bold uppercase tracking-widest">Et Pas Générée</h2>
            </div>
            <button onClick={onExplore} className="absolute bottom-12 left-1/2 -translate-x-1/2 px-8 py-3 bg-black text-white hover:bg-neutral-800 transition-colors uppercase text-xs tracking-widest">
                Enter
            </button>
        </div>
    </section>
);

// 66. JUSTIFIED PROSE
const V66: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center p-8">
        <div className="max-w-4xl text-justify">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                CECI EST <span className="bg-black text-white px-2">UNE MUSIQUE COMPOSÉE</span> AVEC SOIN,
                CONÇUE <span className="italic font-serif font-light">POUR SE CONCENTRER, S'INSPIRER, LIBREMENT.</span>
                ELLE N'EST <span className="underline decoration-2 underline-offset-4">PAS GÉNÉRÉE</span> PAR UN ALGORITHME.
            </h1>
            <button onClick={onExplore} className="mt-12 text-sm font-bold uppercase border-b-2 border-black hover:bg-black hover:text-white transition-all px-2">
                Découvrir l'expérience
            </button>
        </div>
    </section>
);


// 67. THE POSTCARD
const V67: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#fdfbf7] text-black snap-start flex items-center justify-center">
        <div className="w-[80vw] h-[60vh] bg-white shadow-2xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center justify-center transform rotate-1">
            <div className="flex-1 text-right border-r border-gray-200 pr-12 h-full flex flex-col justify-center">
                <h1 className="text-5xl font-serif italic mb-4">Une Musique Composée.</h1>
                <p className="text-gray-500 text-sm uppercase tracking-widest">Pour se concentrer.<br />S'inspirer. Librement.</p>
            </div>
            <div className="flex-1 text-left pl-4">
                <h2 className="text-4xl font-bold uppercase mb-8">Et Pas Générée</h2>
                <p className="font-mono text-xs text-gray-400 mb-8">
                    FROM: HUMAN<br />
                    TO: HUMAN<br />
                    DATE: NOW
                </p>
                <button onClick={onExplore} className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold hover:scale-110 transition-transform">
                    Go
                </button>
            </div>
        </div>
    </section>
);

// 68. COLOR BLOCK
const V68: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white snap-start flex flex-col md:flex-row">
        <div className="flex-1 bg-red-100 flex items-center justify-center p-8 text-red-900">
            <h1 className="text-6xl font-black uppercase text-center">Une<br />Musique<br />Composée.</h1>
        </div>
        <div className="flex-1 bg-blue-100 flex flex-col items-center justify-center p-8 text-blue-900 text-center">
            <p className="text-xl font-serif italic mb-8 max-w-xs">"Pour se concentrer. S'inspirer. Librement."</p>
            <h2 className="text-4xl font-bold uppercase mb-8">Et Pas<br />Générée.</h2>
            <button onClick={onExplore} className="px-8 py-3 bg-blue-900 text-white font-bold uppercase hover:bg-black transition-colors">
                Listen
            </button>
        </div>
    </section>
);

// 69. TYPOGRAPHY CIRCLE
const V69: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center overflow-hidden">
        <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
            <svg viewBox="0 0 100 100" className="w-[80vh] h-[80vh]">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[8px] uppercase font-bold tracking-[2px]">
                    <textPath href="#circlePath" startOffset="0%">
                        Une Musique Composée. Et Pas Générée. Une Musique Composée. Et Pas Générée.
                    </textPath>
                </text>
            </svg>
        </motion.div>

        <div className="z-10 text-center p-8 bg-white/90 backdrop-blur-sm rounded-full w-96 h-96 flex flex-col items-center justify-center shadow-lg border border-gray-100">
            <h1 className="text-4xl font-serif italic mb-2">Composée</h1>
            <div className="w-8 h-[2px] bg-black mb-2" />
            <p className="text-xs font-sans uppercase tracking-widest max-w-[200px] mb-4">Pour se concentrer. S'inspirer. Librement.</p>
            <h2 className="text-lg font-bold">Pas Générée</h2>
            <button onClick={onExplore} className="mt-6 text-2xl hover:scale-125 transition-transform">↓</button>
        </div>
    </section>
);

// 70. THE MONOGRAM
const V70: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f4f4f4] text-black snap-start flex items-center justify-center font-serif">
        <div className="relative">
            <h1 className="text-[25rem] leading-none font-bold opacity-10 font-sans absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">M</h1>
            <div className="relative z-10 text-center">
                <h1 className="text-6xl md:text-8xl italic font-light mb-4 text-gray-800">Une Musique</h1>
                <h1 className="text-6xl md:text-8xl font-light mb-8 text-black">Composée.</h1>
                <p className="text-sm font-sans uppercase tracking-[0.3em] bg-black text-white px-4 py-2 inline-block mb-4">
                    Pour se concentrer. S'inspirer. Librement.
                </p>
                <div className="block">
                    <span className="font-bold border-b border-black">ET PAS GÉNÉRÉE</span>
                </div>
                <button onClick={onExplore} className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-sm uppercase font-bold text-gray-400 hover:text-black transition-colors">
                    Begin
                </button>
            </div>
        </div>
    </section>
);


// ============================================================================
// SERIES H: ABSTRACT GEOMETRY (71-80)
// ============================================================================

// 71. THE ARCH
const V71: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#eeb4b4] text-[#4a1c1c] snap-start flex flex-col justify-end items-center pb-0 overflow-hidden">
        <div className="w-[80vw] h-[70vh] bg-[#4a1c1c] rounded-t-full flex items-center justify-center relative">
            <div className="text-center text-[#eeb4b4] p-8 -mt-20">
                <h1 className="text-6xl font-bold uppercase tracking-tight mb-4">Une Musique<br />Composée</h1>
                <p className="text-sm uppercase tracking-widest opacity-80 mb-8">Pour se concentrer. S'inspirer. Librement.</p>
                <button onClick={onExplore} className="bg-[#eeb4b4] text-[#4a1c1c] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                    Enter Arch
                </button>
            </div>
            <div className="absolute bottom-12 text-[#eeb4b4] text-xl font-serif italic text-center w-full">
                Et Pas Générée.
            </div>
        </div>
    </section>
);

// 72. FLOATING CUBE (Abstract 2D representation)
const V72: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-slate-100 text-slate-900 snap-start flex items-center justify-center">
        <div className="relative w-64 h-64 border-4 border-slate-900 transform rotate-45 flex items-center justify-center">
            <div className="w-48 h-48 bg-slate-900 transform -rotate-45 flex items-center justify-center text-center p-4">
                <h1 className="text-white text-xl font-bold uppercase">Une Musique<br />Composée</h1>
            </div>
        </div>
        <div className="absolute bottom-20 text-center">
            <p className="italic text-slate-500 mb-2">"Pour se concentrer. S'inspirer. Librement."</p>
            <h2 className="text-2xl font-bold uppercase tracking-widest">Et Pas Générée</h2>
            <button onClick={onExplore} className="mt-8 border-b border-slate-900 hover:text-slate-500 transition-colors uppercase text-xs font-bold">
                Interact
            </button>
        </div>
    </section>
);

// 73. PRISM
const V73: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full bg-black text-white flex items-center justify-end pr-12 clip-path-polygon" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}>
                <h1 className="text-6xl font-bold text-right">UNE<br />MUSIQUE<br />COMPOSÉE</h1>
            </div>
            <div className="w-1/2 h-full bg-white text-black flex items-center justify-start pl-12">
                <div>
                    <p className="italic text-gray-500 mb-4 w-64">Pour se concentrer. S'inspirer. Librement.</p>
                    <h2 className="text-4xl font-light uppercase">Et Pas<br />Générée</h2>
                    <button onClick={onExplore} className="mt-8 bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors">Start</button>
                </div>
            </div>
        </div>
    </section>
);

// 74. ORBIT
const V74: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1a1a1a] text-[#f0f0f0] snap-start flex items-center justify-center overflow-hidden">
        {/* Orbits */}
        <div className="absolute border border-white/20 rounded-full w-[40vw] h-[40vw]" />
        <div className="absolute border border-white/20 rounded-full w-[60vw] h-[60vw]" />

        <motion.div
            className="absolute w-4 h-4 bg-white rounded-full"
            animate={{ rotate: 360 }}
            style={{ translateX: '20vw' }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 text-center bg-[#1a1a1a] p-12 rounded-full shadow-2xl">
            <h1 className="text-5xl font-thin tracking-widest mb-4">COMPOSÉE</h1>
            <div className="w-24 h-[1px] bg-white mx-auto mb-4" />
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Pour se concentrer.<br />S'inspirer. Librement.</p>
            <h2 className="text-xl font-bold">PAS GÉNÉRÉE</h2>
            <button onClick={onExplore} className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest hover:text-white/50 transition-colors">
                Initialise Orbit
            </button>
        </div>
    </section>
);

// 75. LAYERS
const V75: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#ffecd1] text-[#00154f] snap-start flex items-center justify-center overflow-hidden">
        <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-[#ff7b54] rounded-full mix-blend-multiply opacity-80"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
            className="absolute bottom-10 left-10 w-96 h-96 bg-[#00154f] mix-blend-multiply opacity-20"
            animate={{ x: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />

        <div className="relative z-10 text-center">
            <h1 className="text-8xl font-black uppercase tracking-tighter mb-2">Une Musique</h1>
            <h1 className="text-8xl font-black uppercase tracking-tighter mb-8 text-[#ff7b54]">Composée.</h1>
            <p className="text-xl italic font-serif mb-2">"Pour se concentrer. S'inspirer. Librement."</p>
            <h2 className="text-2xl font-bold uppercase tracking-widest">Et Pas Générée</h2>
            <button onClick={onExplore} className="mt-8 border-2 border-[#00154f] px-8 py-2 font-bold hover:bg-[#00154f] hover:text-white transition-colors">
                View Layers
            </button>
        </div>
    </section>
);

// 76. GOLDEN RATIO
const V76: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex">
        <div className="w-[61.8%] h-full bg-[#f4f4f4] flex items-center justify-center p-12 border-r border-black">
            <div>
                <h1 className="text-7xl font-light mb-4">Une Musique<br /><span className="font-bold">Composée.</span></h1>
                <p className="text-lg font-serif italic text-gray-600">Pour se concentrer. S'inspirer. Librement.</p>
            </div>
        </div>
        <div className="w-[38.2%] h-full flex flex-col">
            <div className="h-[61.8%] bg-black text-white flex items-center justify-center p-8">
                <h2 className="text-4xl font-bold text-center uppercase">Et Pas<br />Générée</h2>
            </div>
            <div className="h-[38.2%] bg-accent-primary flex items-center justify-center">
                <button onClick={onExplore} className="w-full h-full text-black font-bold uppercase hover:bg-white transition-colors">Explore</button>
            </div>
        </div>
    </section>
);

// 77. BALANCE
const V77: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e8f1f2] text-[#1b263b] snap-start flex flex-col items-center justify-center">
        <div className="relative w-full max-w-4xl h-2 bg-[#1b263b] rounded-full mb-0" />
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-[#1b263b] transform -translate-y-2" />

        <div className="absolute top-[35%] left-[20%] text-center transform -translate-y-full">
            <h1 className="text-6xl font-black uppercase">Une Musique</h1>
            <p className="text-sm uppercase tracking-widest mt-2">Pour se concentrer.</p>
        </div>

        <div className="absolute top-[35%] right-[20%] text-center transform -translate-y-full">
            <h1 className="text-6xl font-light uppercase italic">Composée</h1>
            <p className="text-sm uppercase tracking-widest mt-2">S'inspirer. Librement.</p>
        </div>

        <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-[#1b263b]/50">Et Pas Générée</h2>
            <button onClick={onExplore} className="mt-8 px-6 py-2 border border-[#1b263b] rounded hover:bg-[#1b263b] hover:text-white transition-colors">
                Find Balance
            </button>
        </div>
    </section>
);

// 78. INTERSECTION
const V78: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white snap-start flex items-center justify-center isolate">
        <div className="absolute left-1/4 w-[40vw] h-[40vw] bg-cyan-400 rounded-full mix-blend-multiply opacity-80" />
        <div className="absolute right-1/4 w-[40vw] h-[40vw] bg-magenta-400 rounded-full mix-blend-multiply opacity-80" />

        <div className="relative z-10 text-center pointer-events-none">
            <h1 className="text-[8vw] font-black uppercase tracking-tighter text-black mix-blend-overlay">
                COMPOSÉE
            </h1>
            <div className="bg-black text-white p-4 inline-block mt-8 pointer-events-auto">
                <p className="text-sans text-sm uppercase tracking-widest mb-1">Une Musique. Pas Générée.</p>
                <p className="font-serif italic text-xs text-gray-300">"Pour se concentrer. S'inspirer. Librement."</p>
                <button onClick={onExplore} className="mt-4 border border-white px-4 py-1 hover:bg-white hover:text-black transition-colors w-full uppercase text-xs font-bold">
                    Start
                </button>
            </div>
        </div>
    </section>
);

// 79. GRID (Mondrian 2 - Complex)
const V79: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start grid grid-cols-6 grid-rows-6 gap-1 bg-black p-1">
        <div className="col-span-4 row-span-3 bg-white flex items-end p-8">
            <h1 className="text-8xl font-black uppercase leading-none">Une<br />Musique</h1>
        </div>
        <div className="col-span-2 row-span-2 bg-[#ff5733] flex items-center justify-center p-4">
            <p className="text-white font-bold uppercase text-center text-sm md:text-base">Pour se concentrer.<br />S'inspirer.<br />Librement.</p>
        </div>
        <div className="col-span-2 row-span-4 bg-white flex flex-col justify-between p-8">
            <div className="w-full h-1 bg-black" />
            <h1 className="text-6xl font-light italic text-right">Composée.</h1>
        </div>
        <div className="col-span-2 row-span-3 bg-[#33ff57] flex items-center justify-center">
            <h2 className="text-4xl font-black uppercase text-center">Et Pas<br />Générée</h2>
        </div>
        <div className="col-span-2 row-span-3 bg-white flex items-center justify-center">
            <button onClick={onExplore} className="w-32 h-32 rounded-full border-4 border-black flex items-center justify-center font-bold hover:bg-black hover:text-white transition-colors">
                GO
            </button>
        </div>
    </section>
);

// 80. PERSPECTIVE HALL
const V80: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start overflow-hidden flex items-center justify-center perspective-[500px]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] transform rotate-x-60 scale-150 origin-bottom opacity-50" />

        <div className="relative z-10 text-center transform-style-3d">
            <h1 className="text-8xl font-black uppercase tracking-tighter mb-4">Une Musique Composée</h1>
            <p className="text-xl text-gray-400 mb-8 font-serif italic">"Pour se concentrer. S'inspirer. Librement."</p>
            <h2 className="text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-black">Et Pas Générée.</h2>
            <button onClick={onExplore} className="mt-12 border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm">
                Enter Hall
            </button>
        </div>
    </section>
);

// ============================================================================
// SERIES I: ETHEREAL & ATMOSPHERIC (81-90)
// ============================================================================

// 81. MORNING LIGHT
const V81: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-b from-orange-100 to-sky-100 text-slate-800 snap-start flex items-center justify-center">
        <div className="text-center p-12">
            <h1 className="text-7xl font-thin tracking-tight mb-6 text-slate-900">
                Une Musique Composée.
            </h1>
            <p className="text-lg font-light uppercase tracking-[0.2em] mb-12 text-slate-600">
                Pour se concentrer. S'inspirer. Librement.
            </p>
            <h2 className="text-3xl font-serif italic text-slate-500">
                ( Et Pas Générée )
            </h2>
            <button onClick={onExplore} className="mt-16 text-slate-400 hover:text-slate-900 transition-colors">
                <ArrowDown size={32} />
            </button>
        </div>
    </section>
);

// 82. DEEP SEA
const V82: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#001e1d] text-[#e0f7fa] snap-start flex items-center justify-center overflow-hidden">
        <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#004d40]/30 to-transparent"
        />
        <div className="relative z-10 text-center">
            <h1 className="text-8xl font-serif italic opacity-90 mb-4 drop-shadow-[0_0_15px_rgba(224,247,250,0.3)]">
                Composée.
            </h1>
            <p className="text-sm font-sans uppercase tracking-[0.4em] opacity-70 mb-8">
                Une Musique · Pas Générée
            </p>
            <p className="text-xs font-sans tracking-wide opacity-50 mb-12">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="border border-[#e0f7fa]/30 px-8 py-3 rounded-full hover:bg-[#e0f7fa]/10 transition-colors uppercase text-xs tracking-widest">
                Immerse
            </button>
        </div>
    </section>
);

// 83. FROSTED GLASS
const V83: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center snap-start flex items-center justify-center">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
        <div className="relative z-10 bg-white/30 backdrop-blur-lg p-16 rounded-3xl border border-white/40 shadow-xl text-center max-w-2xl">
            <h1 className="text-6xl font-black text-white drop-shadow-lg mb-4">UNE MUSIQUE<br />COMPOSÉE.</h1>
            <p className="text-white font-bold text-lg uppercase tracking-widest mb-6">Et Pas Générée.</p>
            <div className="h-[1px] bg-white/50 w-full mb-6" />
            <p className="text-white font-serif italic text-xl">"Pour se concentrer. S'inspirer. Librement."</p>
            <button onClick={onExplore} className="mt-8 bg-white text-black px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                Start
            </button>
        </div>
    </section>
);

// 84. SOFT BLOOM
const V84: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#fff0f5] text-[#86198f] snap-start flex items-center justify-center">
        <h1 className="absolute text-[15vw] font-bold text-pink-300 blur-3xl opacity-50 select-none">COMPOSÉE</h1>
        <div className="relative z-10 text-center">
            <h1 className="text-7xl font-thin tracking-tighter mb-4">Une Musique Composée.</h1>
            <p className="text-sm font-bold uppercase tracking-[0.5em] text-pink-800 mb-8">Pour se concentrer. S'inspirer. Librement.</p>
            <h2 className="text-4xl font-serif italic text-pink-600">Et Pas Générée.</h2>
            <button onClick={onExplore} className="mt-12 text-pink-900 border-b border-pink-900 hover:text-pink-500 hover:border-pink-500 transition-colors uppercase text-xs font-bold pb-1">
                Dream
            </button>
        </div>
    </section>
);

// 85. GRAIN (Film)
const V85: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#2c1a1a] text-[#e8d5b5] snap-start flex items-center justify-center font-serif">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
        <div className="relative z-10 text-center p-8 border-y border-[#e8d5b5]/30">
            <p className="text-xs font-sans uppercase tracking-[0.3em] mb-4 opacity-70">Volume 85</p>
            <h1 className="text-6xl md:text-8xl italic mb-4">Une Musique Composée.</h1>
            <p className="text-lg mb-8 font-light">"Pour se concentrer. S'inspirer. Librement."</p>
            <h2 className="text-2xl font-sans uppercase font-bold tracking-widest text-[#e8d5b5]">Et Pas Générée</h2>
            <button onClick={onExplore} className="mt-12 opacity-50 hover:opacity-100 transition-opacity uppercase text-xs tracking-widest">
                Play Reel
            </button>
        </div>
    </section>
);

// 86. SHADOW PLAY
const V86: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f3f4f6] text-gray-400 snap-start flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center">
            <h1 className="text-[12vw] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-400 drop-shadow-2xl">
                COMPOSÉE.
            </h1>
            <div className="mt-[-2vw]">
                <h2 className="text-4xl font-light uppercase tracking-widest text-gray-800">Une Musique</h2>
                <p className="text-sm mt-4 text-gray-500 italic">Pour se concentrer. S'inspirer. Librement.</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
                <h1 className="text-[12vw] font-black leading-none text-black opacity-10 blur-sm transform translate-y-4 translate-x-4">
                    COMPOSÉE.
                </h1>
            </div>
            <button onClick={onExplore} className="absolute bottom-20 left-1/2 -translate-x-1/2 text-gray-800 hover:text-black uppercase font-bold tracking-widest text-xs">
                Explore Shadows
            </button>
        </div>
    </section>
);

// 87. FOCUS BREATH
const V87: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#121212] text-white snap-start flex items-center justify-center">
        <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.98, 1, 0.98] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="text-center"
        >
            <h1 className="text-6xl font-thin tracking-wide mb-6">Une Musique Composée.</h1>
            <p className="text-xl font-light opacity-80 mb-6">Pour se concentrer. S'inspirer. Librement.</p>
            <h2 className="text-3xl font-bold uppercase tracking-widest">Et Pas Générée.</h2>
        </motion.div>
        <button onClick={onExplore} className="absolute bottom-12 text-white/30 hover:text-white transition-colors uppercase text-xs tracking-[0.5em]">
            Breathe
        </button>
    </section>
);

// 88. PRISM REFLECTION
const V88: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 via-white to-blue-100 opacity-50" />
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/80 to-transparent rotate-45 blur-xl pointer-events-none" />

        <div className="relative z-10 text-center p-12">
            <h1 className="text-8xl font-serif italic text-slate-900 mb-2">Composée.</h1>
            <p className="text-sm font-sans uppercase tracking-[0.5em] text-slate-500 mb-8">Une Musique · Pas Générée</p>
            <div className="w-12 h-1 bg-gradient-to-r from-rose-400 to-blue-400 mx-auto mb-8" />
            <p className="text-slate-600 italic">"Pour se concentrer. S'inspirer. Librement."</p>
            <button onClick={onExplore} className="mt-12 text-slate-900 border border-slate-200 px-6 py-2 rounded-full hover:shadow-lg transition-shadow uppercase text-xs font-bold">
                Reflect
            </button>
        </div>
    </section>
);


// 89. GRADIENT MESH (Calm)
const V89: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e0e7ff] snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(at_top_left,_#c7d2fe_0%,_transparent_50%),radial-gradient(at_bottom_right,_#e9d5ff_0%,_transparent_50%)] opactiy-70" />

        <div className="relative z-10 text-center">
            <h1 className="text-7xl font-light text-slate-800 tracking-tight mb-4">Une Musique</h1>
            <h1 className="text-9xl font-bold text-indigo-900 tracking-tighter mb-8">Composée.</h1>
            <p className="text-xl font-serif italic text-slate-600 mb-4">Pour se concentrer. S'inspirer. Librement.</p>
            <h2 className="text-xl uppercase font-bold text-slate-800 tracking-widest">Et Pas Générée</h2>
            <button onClick={onExplore} className="mt-12 bg-white/50 backdrop-blur-sm text-indigo-900 px-8 py-3 rounded-xl hover:bg-white transition-colors font-bold shadow-sm">
                Float
            </button>
        </div>
    </section>
);

// 90. THE HORIZON
const V90: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen snap-start flex flex-col">
        <div className="h-1/2 bg-[#f0f9ff] flex items-end justify-center pb-0">
            <h1 className="text-[10vw] font-bold text-slate-900 leading-none translate-y-[1.5vw]">UNE MUSIQUE</h1>
        </div>
        <div className="h-1/2 bg-[#0f172a] flex items-start justify-center pt-0 relative overflow-hidden">
            <h1 className="text-[10vw] font-bold text-slate-600 leading-none -translate-y-[1.5vw] opacity-30 transform scale-y-[-1]">UNE MUSIQUE</h1>

            <div className="absolute top-12 text-center">
                <p className="text-slate-400 uppercase tracking-widest text-sm mb-2">Composée. Pas Générée.</p>
                <p className="text-slate-500 font-serif italic text-xs">Pour se concentrer. S'inspirer. Librement.</p>
            </div>

            <button onClick={onExplore} className="absolute bottom-12 text-white border-b border-white/30 hover:border-white transition-colors uppercase text-xs tracking-widest">
                Go to Horizon
            </button>
        </div>
    </section>
);

// ============================================================================
// SERIES J: KINETIC TYPOGRAPHY (91-100)
// ============================================================================

// 91. THE MARQUEE
const V91: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-white snap-start flex flex-col justify-center overflow-hidden font-bold uppercase leading-none">
        <div className="whitespace-nowrap animate-marquee">
            <span className="text-[15vw] mx-8">Une Musique Composée.</span>
            <span className="text-[15vw] mx-8">Une Musique Composée.</span>
        </div>
        <div className="whitespace-nowrap animate-marquee-reverse text-[#444]">
            <span className="text-[15vw] mx-8">Et Pas Générée.</span>
            <span className="text-[15vw] mx-8">Et Pas Générée.</span>
        </div>
        <div className="whitespace-nowrap animate-marquee text-white outline-text">
            <span className="text-[5vw] mx-8 font-serif italic normal-case tracking-widest">Pour se concentrer. S'inspirer. Librement.</span>
            <span className="text-[5vw] mx-8 font-serif italic normal-case tracking-widest">Pour se concentrer. S'inspirer. Librement.</span>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 92. WATERFALL
const V92: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center p-8">
        <div className="flex flex-col items-center">
            <motion.h1
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl md:text-8xl font-black text-center mb-4"
            >
                UNE MUSIQUE<br />COMPOSÉE.
            </motion.h1>
            <motion.h2
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="text-4xl text-center font-bold text-blue-600 mb-8"
            >
                ET PAS GÉNÉRÉE.
            </motion.h2>
            <motion.p
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="text-xl font-serif italic text-gray-500"
            >
                "Pour se concentrer. S'inspirer. Librement."
            </motion.p>
        </div>
        <button onClick={onExplore} className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
);

// 93. ELASTIC (CSS Hover approximation)
const V93: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#ffdd00] text-black snap-start flex items-center justify-center cursor-crosshair">
        <div className="text-center group">
            <h1 className="text-8xl font-black tracking-tighter transition-transform duration-300 group-hover:scale-y-150 group-hover:scale-x-75 origin-bottom">
                UNE MUSIQUE<br />COMPOSÉE
            </h1>
            <h2 className="text-4xl font-bold uppercase mt-4 transition-transform duration-300 group-hover:scale-y-75 group-hover:scale-x-125 group-hover:translate-y-4">
                ET PAS GÉNÉRÉE
            </h2>
            <p className="mt-8 text-xl font-serif italic transition-opacity duration-500 opacity-50 group-hover:opacity-100">
                Pour se concentrer. S'inspirer. Librement.
            </p>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 94. THE PATH (Simplified Curve)
const V94: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#222] text-[#eee] snap-start flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 1000 400" className="w-full max-w-5xl">
            <path id="curve" d="M 50 200 Q 500 50 950 200 T 950 200" fill="transparent" />
            <text className="text-4xl uppercase font-bold text-white fill-white">
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    Une Musique Composée
                </textPath>
            </text>
        </svg>
        <div className="absolute top-1/2 mt-12 text-center">
            <h2 className="text-2xl font-light tracking-[1em] mb-4">ET PAS GÉNÉRÉE</h2>
            <p className="text-sm font-serif italic text-gray-400">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <button onClick={onExplore} className="absolute bottom-12 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">Start</button>
    </section>
);

// 95. REVEAL
const V95: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center">
        <div className="relative overflow-hidden p-4">
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
            >
                <h1 className="text-7xl md:text-9xl font-black uppercase leading-none">Une Musique</h1>
            </motion.div>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut", delay: 0.1 }}
            >
                <h1 className="text-7xl md:text-9xl font-black uppercase leading-none text-outline-black text-transparent">Composée</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex justify-between items-end border-t border-black pt-4"
            >
                <h2 className="text-xl font-bold uppercase">Et Pas Générée.</h2>
                <p className="text-right text-gray-500 italic max-w-xs">Pour se concentrer. S'inspirer. Librement.</p>
            </motion.div>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 96. SCATTER
const V96: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f0f0f0] text-black snap-start p-12 flex flex-col justify-between">
        <div className="flex justify-between">
            <h1 className="text-6xl font-thin">Une</h1>
            <h1 className="text-6xl font-bold">Musique</h1>
        </div>
        <div className="flex justify-center my-auto">
            <h1 className="text-[12vw] font-black italic tracking-tighter">COMPOSÉE.</h1>
        </div>
        <div className="flex justify-between items-end">
            <div>
                <h2 className="text-2xl font-bold uppercase border bg-black text-white px-2">Et Pas Générée</h2>
            </div>
            <p className="text-xl font-serif italic w-64 text-right">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <button onClick={onExplore} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-black hover:scale-125 transition-transform" />
    </section>
);

// 97. TYPEWRITER (CSS Steps)
const V97: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#2b2b2b] text-[#00ff00] snap-start flex flex-col items-center justify-center font-mono">
        <div className="w-fit">
            <h1 className="text-3xl md:text-5xl border-r-2 border-[#00ff00] overflow-hidden whitespace-nowrap animate-typing">
                &gt; Une Musique Composée.
            </h1>
            <h2 className="text-xl md:text-3xl mt-4 opacity-80">
                &gt; Et Pas Générée.
            </h2>
            <p className="text-sm md:text-base mt-8 text-[#00ff00]/60 italic max-w-md">
                // Pour se concentrer. S'inspirer. Librement.
            </p>
        </div>
        <button onClick={onExplore} className="mt-16 animate-pulse text-xs uppercase tracking-widest hover:text-white transition-colors">
            [ Execute ]
        </button>
    </section>
);

// 98. FLIP (Minimal)
const V98: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-900 text-neutral-100 snap-start flex items-center justify-center">
        <div className="perspective-[1000px] group">
            <div className="relative transform-style-3d transition-transform duration-700 group-hover:rotate-x-180">
                <div className="text-center">
                    <h1 className="text-6xl font-bold uppercase mb-2">Une Musique</h1>
                    <h1 className="text-6xl font-light uppercase mb-8">Composée</h1>
                </div>
            </div>

            <div className="mt-12 text-center border-t border-neutral-700 pt-8">
                <h2 className="text-xl font-mono uppercase tracking-widest text-neutral-400 mb-2">Et Pas Générée</h2>
                <p className="text-neutral-500 italic">Pour se concentrer. S'inspirer. Librement.</p>
            </div>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 99. WAVE
const V99: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-blue-50 text-blue-900 snap-start flex flex-col items-center justify-center">
        <div className="flex gap-1 text-6xl md:text-8xl font-black uppercase overflow-hidden h-32">
            {[..."COMPOSÉE"].map((char, i) => (
                <motion.span
                    key={i}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
        <h1 className="text-4xl font-light uppercase tracking-widest -mt-4">Une Musique</h1>
        <h2 className="mt-12 text-xl font-bold bg-blue-900 text-white px-4 py-1">ET PAS GÉNÉRÉE</h2>
        <p className="mt-8 font-serif italic text-blue-800/60">Pour se concentrer. S'inspirer. Librement.</p>
        <button onClick={onExplore} className="mt-12 w-12 h-12 border-2 border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors">↓</button>
    </section>
);

// 100. FOCUS PULL
const V100: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center">
        <div className="text-center relative">
            <motion.h1
                animate={{ filter: ["blur(0px)", "blur(10px)", "blur(0px)"] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="text-7xl font-bold tracking-tight mb-4"
            >
                Une Musique Composée.
            </motion.h1>
            <motion.h2
                animate={{ filter: ["blur(10px)", "blur(0px)", "blur(10px)"] }}
                transition={{ duration: 6, repeat: Infinity, delay: 3 }}
                className="text-4xl font-light uppercase tracking-widest text-gray-400 mb-8"
            >
                Et Pas Générée.
            </motion.h2>
            <p className="text-sm font-serif italic text-gray-600">
                Pour se concentrer. S'inspirer. Librement.
            </p>
            <button onClick={onExplore} className="mt-12 text-xs uppercase border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors">Focus</button>
        </div>
    </section>
);

// ============================================================================
// SERIES K: SWISS & BRUTALIST (101-110)
// ============================================================================

// 101. THE GRID (Strict)
const V101: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f2f2f2] text-black snap-start grid grid-rows-3 border-4 border-black box-border m-4">
        <div className="border-b-4 border-black flex items-center px-8">
            <h1 className="text-8xl font-black uppercase tracking-tighter">Une Musique<br />Composée.</h1>
        </div>
        <div className="border-b-4 border-black flex items-center px-8 bg-black text-white">
            <h2 className="text-6xl font-bold uppercase tracking-tight">Et Pas Générée.</h2>
        </div>
        <div className="flex items-center px-8 justify-between">
            <p className="text-4xl font-medium tracking-tight">Pour se concentrer.<br />S'inspirer. Librement.</p>
            <button onClick={onExplore} className="w-32 h-32 bg-black text-white rounded-full font-bold text-xl hover:scale-95 transition-transform">→</button>
        </div>
    </section>
);

// 102. POSTER (Left Aligned)
const V102: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#ff4400] text-white snap-start flex flex-col justify-between p-8">
        <div>
            <h1 className="text-[14vw] leading-[0.85] font-black uppercase tracking-tighter">
                Une<br />Musique<br />Composée.
            </h1>
        </div>
        <div className="flex justify-between items-end border-t-4 border-white pt-4">
            <div>
                <h2 className="text-2xl font-bold uppercase mb-2">Et Pas Générée</h2>
                <p className="text-lg font-medium opacity-80 max-w-sm">Pour se concentrer. S'inspirer. Librement.</p>
            </div>
            <button onClick={onExplore} className="text-xl font-bold uppercase hover:bg-white hover:text-[#ff4400] px-4 py-1 transition-colors">Scroll Down</button>
        </div>
    </section>
);

// 103. VERTICAL TYPE
const V103: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex flex-row-reverse p-12">
        <div className="h-full flex flex-col items-center justify-start writing-vertical-rl text-orientation-upright">
            <h1 className="text-8xl font-black uppercase tracking-[-0.05em] leading-none mb-12">
                Une Musique Composée
            </h1>
            <h2 className="text-4xl font-bold uppercase text-red-600 mb-12">
                Et Pas Générée
            </h2>
            <p className="text-lg font-serif italic text-gray-500">
                Pour se concentrer. S'inspirer. Librement.
            </p>
        </div>
        <button onClick={onExplore} className="absolute bottom-12 left-12 w-24 h-24 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors flex items-center justify-center font-bold text-2xl">
            ↓
        </button>
    </section>
);

// 104. OVERPRINT
const V104: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#eaddcf] text-black snap-start flex items-center justify-center p-12 isolate">
        <div className="relative">
            <h1 className="text-9xl font-black uppercase text-cyan-600 mix-blend-multiply absolute top-0 left-0 -translate-x-8 -translate-y-8 opacity-80">
                Composée
            </h1>
            <h1 className="text-9xl font-black uppercase text-magenta-600 mix-blend-multiply relative z-10 opacity-80">
                Musique
            </h1>
            <h1 className="text-9xl font-black uppercase text-yellow-500 mix-blend-multiply absolute bottom-0 right-0 translate-x-8 translate-y-8 opacity-80">
                Une
            </h1>
        </div>

        <div className="absolute bottom-12 left-12">
            <h2 className="text-2xl font-bold uppercase tracking-widest bg-black text-white px-2 inline-block mb-2">Et Pas Générée</h2>
            <p className="text-xl font-serif italic">Pour se concentrer. S'inspirer. Librement.</p>
        </div>

        <button onClick={onExplore} className="absolute bottom-12 right-12 text-sm font-bold uppercase border-b-2 border-black">View</button>
    </section>
);

// 105. NEGATIVE
const V105: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex flex-col">
        <div className="flex-1 border-b border-white p-8 flex items-end">
            <h1 className="text-[10vw] leading-none font-bold uppercase">Une Musique<br />Composée.</h1>
        </div>
        <div className="flex-1 flex">
            <div className="w-1/2 border-r border-white p-8">
                <h2 className="text-4xl font-bold uppercase">Et Pas<br />Générée.</h2>
            </div>
            <div className="w-1/2 p-8 flex flex-col justify-between">
                <p className="text-2xl font-mono">Pour se concentrer.<br />S'inspirer.<br />Librement.</p>
                <button onClick={onExplore} className="self-end bg-white text-black w-20 h-20 flex items-center justify-center font-bold rounded-full hover:scale-110 transition-transform">GO</button>
            </div>
        </div>
    </section>
);

// 106. ASYMMETRY
const V106: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex">
        <div className="w-[20%] bg-gray-100 h-full p-4 writing-vertical-rl flex items-center justify-center border-r border-black">
            <p className="text-sm font-mono uppercase tracking-widest rotate-180">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <div className="w-[80%] h-full relative p-12">
            <h1 className="text-9xl font-black uppercase absolute bottom-12 left-[-10vw]">Composée</h1>
            <h1 className="text-6xl font-light uppercase absolute top-12 right-12">Une Musique</h1>

            <div className="absolute top-1/2 right-1/4 bg-red-600 text-white p-6 rotate-12">
                <h2 className="text-3xl font-bold uppercase">Et Pas Générée</h2>
            </div>

            <button onClick={onExplore} className="absolute bottom-12 right-12 underline font-bold uppercase">Begin</button>
        </div>
    </section>
);

// 107. SWISS STYLE (Helvetica)
const V107: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#eeeeee] text-[#111] snap-start grid grid-cols-2 p-12 gap-12">
        <div className="col-span-1 pt-24">
            <h1 className="text-7xl font-bold tracking-tight leading-tight mb-8">
                Une Musique<br />Composée.
            </h1>
            <div className="w-24 h-2 bg-[#ff3300] mb-8" />
            <h2 className="text-3xl font-medium mb-2">Et Pas Générée.</h2>
        </div>
        <div className="col-span-1 flex flex-col justify-end pb-24 border-l border-[#ccc] pl-12">
            <p className="text-2xl leading-relaxed mb-12">
                Pour se concentrer.<br />
                S'inspirer.<br />
                Librement.
            </p>
            <button onClick={onExplore} className="text-sm font-bold uppercase tracking-widest hover:text-[#ff3300] transition-colors text-left">
                Start Experience -&gt;
            </button>
        </div>
    </section>
);

// 108. DIAGONAL
const V108: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start overflow-hidden flex items-center justify-center">
        <div className="transform -rotate-45 w-[200vw] text-center border-y-4 border-white py-12 bg-white text-black">
            <h1 className="text-8xl font-black uppercase tracking-tighter">Une Musique Composée</h1>
        </div>

        <div className="absolute top-12 left-12 max-w-xs">
            <h2 className="text-4xl font-bold uppercase border-b-2 border-white pb-2 mb-2">Et Pas Générée</h2>
        </div>

        <div className="absolute bottom-12 right-12 text-right">
            <p className="text-xl italic font-serif opacity-80 mb-4">"Pour se concentrer. S'inspirer. Librement."</p>
            <button onClick={onExplore} className="bg-white text-black px-6 py-2 font-bold uppercase hover:bg-gray-200 transition-colors">Enter</button>
        </div>
    </section>
);

// 109. CORNER ANCHORS
const V109: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start p-12">
        <div className="absolute top-12 left-12">
            <h1 className="text-6xl font-black uppercase leading-none">Une<br />Musique<br />Composée.</h1>
        </div>

        <div className="absolute top-12 right-12 text-right">
            <h2 className="text-3xl font-bold uppercase bg-black text-white px-4 py-2">Et Pas Générée</h2>
        </div>

        <div className="absolute bottom-12 left-12">
            <p className="text-xl max-w-xs font-serif italic">"Pour se concentrer. S'inspirer. Librement."</p>
        </div>

        <div className="absolute bottom-12 right-12">
            <button onClick={onExplore} className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center font-bold hover:bg-black hover:text-white transition-colors">
                PLAY
            </button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <div className="w-[80%] h-[80%] border-2 border-black rounded-full" />
        </div>
    </section>
);

// 110. BARCODE
const V110: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex flex-col items-center justify-center">
        <div className="flex gap-1 h-64 items-stretch mb-8">
            {[...Array(20)].map((_, i) => (
                <div key={i} className={`w-${Math.random() > 0.5 ? '4' : '8'} bg-black`} />
            ))}
        </div>

        <h1 className="text-5xl font-mono font-bold uppercase tracking-tighter mb-2">Une Musique Composée</h1>
        <h2 className="text-2xl font-mono uppercase tracking-widest mb-4">Et Pas Générée</h2>
        <p className="font-mono text-sm text-gray-500">Pour se concentrer. S'inspirer. Librement.</p>

        <button onClick={onExplore} className="mt-12 font-mono text-xs uppercase border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
            Scan to Start
        </button>
    </section>
);

// ============================================================================
// SERIES L: PURE LIGHT & COLOR (111-120)
// ============================================================================

// 111. SUNRISE
const V111: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-t from-[rgb(255,81,47)] to-[rgb(221,36,118)] text-white snap-start flex flex-col items-center justify-center">
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h1 className="text-8xl font-black tracking-tight drop-shadow-lg text-center mb-4">Une Musique<br />Composée.</h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
        >
            <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-8">Et Pas Générée.</h2>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.0 }}
        >
            <p className="text-lg font-serif italic text-white/80">Pour se concentrer. S'inspirer. Librement.</p>
        </motion.div>

        <button onClick={onExplore} className="absolute bottom-12 bg-white/20 hover:bg-white/40 backdrop-blur-md px-6 py-2 rounded-full transition-colors uppercase text-xs font-bold">Rise</button>
    </section>
);

// 112. ECLIPSE
const V112: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute w-[40vh] h-[40vh] bg-white rounded-full shadow-[0_0_100px_rgba(255,255,255,0.5)]" />
        <div className="absolute w-[39vh] h-[39vh] bg-black rounded-full" />

        <div className="relative z-10 text-center">
            <h1 className="text-6xl font-light tracking-[0.1em] mb-4 text-gray-300">UNE MUSIQUE COMPOSÉE</h1>
            <h2 className="text-3xl font-bold uppercase mb-8 text-white">ET PAS GÉNÉRÉE</h2>
            <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-32">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-8 text-xs border-b border-gray-600 hover:border-white transition-colors uppercase pb-1">Begin Experience</button>
        </div>
    </section>
);

// 113. BIOLUMINESCENCE
const V113: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#02040a] text-[#4fffb0] snap-start flex items-center justify-center font-sans">
        <div className="text-center">
            <h1 className="text-7xl font-thin tracking-tighter mb-2 drop-shadow-[0_0_10px_rgba(79,255,176,0.5)]">
                Une Musique Composée.
            </h1>
            <h2 className="text-3xl font-bold uppercase tracking-widest text-[#2a8f6d] mb-8">
                Et Pas Générée.
            </h2>
            <p className="text-lg text-[#4fffb0]/60 font-light tracking-wide">
                Pour se concentrer. S'inspirer. Librement.
            </p>
            <button onClick={onExplore} className="mt-16 w-4 h-4 rounded-full bg-[#4fffb0] shadow-[0_0_20px_#4fffb0] animate-pulse hover:scale-150 transition-transform" />
        </div>
    </section>
);

// 114. PRISM 2 (Split RGB)
const V114: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] snap-start flex flex-col items-center justify-center mix-blend-screen">
        <div className="relative">
            <h1 className="text-9xl font-black uppercase text-red-600 absolute top-0 left-0 -translate-x-1 mix-blend-screen opacity-80">Une Musique</h1>
            <h1 className="text-9xl font-black uppercase text-blue-600 absolute top-0 left-0 translate-x-1 mix-blend-screen opacity-80">Une Musique</h1>
            <h1 className="text-9xl font-black uppercase text-green-600 relative z-10 mix-blend-screen opacity-80">Une Musique</h1>
            <h1 className="text-6xl font-thin uppercase text-white tracking-[0.5em] text-center mt-4">Composée</h1>
        </div>

        <div className="mt-12 text-center text-white">
            <h2 className="text-2xl font-bold uppercase mb-2 border border-white/30 px-4 py-1 inline-block">Et Pas Générée</h2>
            <p className="text-gray-400 italic">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-20" />
    </section>
);

// 115. SOFT FOCUS (Dreamy)
const V115: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f5f7fa] text-[#8e9eab] snap-start flex items-center justify-center">
        <div className="text-center blur-[1px] hover:blur-none transition-all duration-1000">
            <h1 className="text-8xl font-serif italic text-[#6f8291] mb-6">Une Musique Composée.</h1>
            <h2 className="text-2xl font-sans uppercase font-bold tracking-[0.3em] mb-6 text-[#aab7c4]">Et Pas Générée.</h2>
            <p className="text-lg font-light tracking-wide">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-12 text-3xl opacity-50 hover:opacity-100 transition-opacity">↓</button>
        </div>
    </section>
);

// 116. SPOTLIGHT (CSS Radial Gradient interaction)
const V116: React.FC<HeroProps> = ({ onExplore }) => {
    // Note: Simple CSS implementation without mouse tracking for performance/simplicity in this context, 
    // but styled to look like a spotlight in center.
    return (
        <section className="relative w-full h-screen bg-black text-gray-800 snap-start flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_black_60%)] z-10 pointer-events-none" />
            <div className="bg-white p-24 rounded-full text-center">
                <h1 className="text-5xl font-black uppercase mb-2">Une Musique Composée</h1>
                <h2 className="text-xl font-bold uppercase mb-4 text-red-600">Et Pas Générée</h2>
                <p className="text-sm font-serif italic">Pour se concentrer. S'inspirer. Librement.</p>
            </div>
            <button onClick={onExplore} className="absolute bottom-12 z-20 text-white uppercase text-xs font-bold tracking-widest border border-white px-6 py-2">Turn On</button>
        </section>
    )
};

// 117. AURORA
const V117: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#000000] text-white snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-purple-900 to-blue-900 opacity-40 filter blur-3xl animate-pulse" />

        <div className="relative z-10 text-center">
            <h1 className="text-7xl md:text-9xl font-thin tracking-tighter mb-0 text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-blue-200">
                Composée.
            </h1>
            <p className="text-xl font-light uppercase tracking-widest mb-8 -mt-2">Une Musique</p>

            <h2 className="text-3xl font-bold uppercase mb-8 border-t border-white/20 pt-8 inline-block">Et Pas Générée</h2>

            <p className="block font-serif italic text-white/70">Pour se concentrer. S'inspirer. Librement.</p>

            <button onClick={onExplore} className="mt-12 w-full text-xs uppercase opacity-50 hover:opacity-100">Click to Explore</button>
        </div>
    </section>
);

// 118. GOLDEN HOUR
const V118: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#ff9a3d] text-[#5e2d00] snap-start flex items-center justify-center">
        <div className="text-center transform skew-x-12">
            <h1 className="text-8xl font-black uppercase drop-shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">Une Musique<br />Composée.</h1>
            <h2 className="text-4xl font-bold uppercase mt-8 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.1)]">Et Pas Générée.</h2>
            <p className="text-xl mt-8 font-serif italic font-medium">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-12 bg-[#5e2d00] text-[#ff9a3d] px-8 py-3 font-bold uppercase shadow-lg hover:bg-black transition-colors">Bask</button>
        </div>
    </section>
);

// 119. NOIR (High Contrast)
const V119: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex flex-row">
        <div className="w-1/2 h-full bg-white text-black flex items-center justify-end p-8 border-r-4 border-black">
            <h1 className="text-right text-7xl font-bold uppercase leading-none">Une<br />Musique<br />Composée.</h1>
        </div>
        <div className="w-1/2 h-full bg-black text-white flex flex-col justify-center p-8 pl-12 shadow-[inset_20px_0_50px_rgba(0,0,0,1)]">
            <h2 className="text-4xl font-light uppercase tracking-[0.2em] mb-8 text-shadow">Et Pas Générée</h2>
            <p className="text-xl font-mono text-gray-400 border-l-2 border-gray-600 pl-4">Pour se concentrer.<br />S'inspirer.<br />Librement.</p>
            <button onClick={onExplore} className="mt-12 self-start text-xs font-bold uppercase tracking-widest bg-white text-black px-4 py-2 hover:bg-gray-200">Investigate</button>
        </div>
    </section>
);

// 120. ZEN
const V120: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f7f7f7] text-[#333] snap-start flex items-center justify-center">
        <div className="text-center">
            <div className="w-2 h-2 bg-[#333] rounded-full mx-auto mb-12" />
            <h1 className="text-4xl font-light tracking-[0.1em] lowercase mb-4">une musique composée.</h1>
            <h2 className="text-lg font-medium uppercase tracking-[0.2em] mb-8 text-gray-500">et pas générée.</h2>
            <p className="text-sm font-serif italic text-gray-400">pour se concentrer. s'inspirer. librement.</p>
            <button onClick={onExplore} className="mt-24 text-gray-300 hover:text-gray-800 transition-colors text-xs uppercase tracking-widest">
                Begin
            </button>
        </div>
    </section>
);

// 121. THE KNOB (Skeuomorphic 3D)
const V121: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1a1b1e] text-gray-200 snap-start flex flex-col items-center justify-center font-sans">

        <div className="mb-16 text-center z-10">
            <h1 className="text-5xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                Une Musique Composée.
            </h1>
            <h2 className="text-lg font-medium uppercase tracking-[0.3em] text-[#ff7e47] drop-shadow-[0_2px_10px_rgba(255,126,71,0.3)]">
                Et Pas Générée.
            </h2>
        </div>

        {/* 3D KNOB IMPLEMENTATION */}
        <div className="relative group cursor-pointer" onClick={onExplore}>
            {/* Outer Ring / Housing */}
            <div className="w-64 h-64 rounded-full bg-[#111] shadow-[-5px_-5px_15px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.8),inset_2px_2px_10px_rgba(0,0,0,0.9)] flex items-center justify-center border border-white/5">

                {/* The Orange Button */}
                <div className="w-48 h-48 rounded-full relative transition-transform active:scale-95 duration-200"
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, #ff9a76 0%, #ff512f 50%, #dd2476 100%)',
                        boxShadow: `
                            0px 10px 20px rgba(0,0,0,0.5),
                            inset 0px 5px 10px rgba(255,255,255,0.4),
                            inset 0px -5px 15px rgba(0,0,0,0.4)
                         `
                    }}
                >
                    {/* Top Highlight/Reflection */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-20 rounded-[50%] bg-gradient-to-b from-white/30 to-transparent blur-md" />

                    {/* Indicator Dot */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_5px_white]" />

                    {/* Inner Content (Subtle Text on button?? No, simple is better based on image, but maybe a faint icon) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white/50 fill-white/20" />
                    </div>
                </div>
            </div>

            {/* Glow/Reflection on surface underneath */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff512f] blur-[100px] opacity-10 pointer-events-none" />
        </div>

        <div className="mt-16 text-center z-10">
            <p className="text-gray-500 font-serif italic text-lg">
                Pour se concentrer. S'inspirer. Librement.
            </p>
        </div>

    </section>
);

// ============================================================================
// SERIES M: "THE NEW STANDARD" (SaaS/Dark/Linear) (122-131)
// ============================================================================

// 122. GLOW BORDER
const V122: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#050505] text-white snap-start flex items-center justify-center p-8">
        <div className="relative group p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent overflow-hidden">

            {/* Moving Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent translate-x-[-100%] animate-[shimmer_3s_infinite]" />

            <div className="relative bg-[#0a0a0a] rounded-2xl p-16 text-center border border-white/5">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    Une Musique<br />Composée.
                </h1>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />
                <h2 className="text-2xl font-medium text-indigo-400 mb-4 tracking-wide uppercase">Et Pas Générée.</h2>
                <p className="text-gray-500 font-normal">Pour se concentrer. S'inspirer. Librement.</p>
                <button onClick={onExplore} className="mt-12 bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors border border-white/5">
                    Start Now
                </button>
            </div>
        </div>
    </section>
);

// 123. THE BEAM
const V123: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex flex-col items-center justify-center overflow-hidden">
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-xl h-full w-[200%] animate-[scan_4s_ease-in-out_infinite_alternate]" />
            <h1 className="relative z-10 text-8xl font-bold tracking-tighter text-center mix-blend-overlay">
                UNE MUSIQUE<br />COMPOSÉE
            </h1>
        </div>
        <h2 className="mt-8 text-xl font-mono text-blue-400 uppercase tracking-widest border border-blue-900/50 bg-blue-900/10 px-4 py-1 rounded">
            Et Pas Générée
        </h2>
        <p className="mt-4 text-gray-500 text-sm">Pour se concentrer. S'inspirer. Librement.</p>
        <button onClick={onExplore} className="absolute inset-0 z-20" />
    </section>
);

// 124. STARFIELD (Subtle)
const V124: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#020204] text-white snap-start flex items-center justify-center overflow-hidden">
        {/* Simple CSS Stars */}
        {[...Array(50)].map((_, i) => (
            <div
                key={i}
                className="absolute bg-white rounded-full opacity-0 animate-pulse"
                style={{
                    width: Math.random() * 2 + 1 + 'px',
                    height: Math.random() * 2 + 1 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 3 + 2 + 's',
                    animationDelay: Math.random() * 5 + 's'
                }}
            />
        ))}

        <div className="text-center z-10 backdrop-blur-sm bg-black/30 p-12 rounded-3xl border border-white/5">
            <h1 className="text-6xl font-medium tracking-tight mb-2">Une Musique Composée.</h1>
            <h2 className="text-3xl font-light text-gray-400 mb-8">Et Pas Générée.</h2>
            <p className="font-serif italic text-gray-600">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-12 text-xs uppercase tracking-[0.2em] hover:text-white text-gray-500 transition-colors">Explore Universe</button>
        </div>
    </section>
);

// 125. AURORA BOREALIS (Linear Style)
const V125: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#000212] text-white snap-start flex items-center justify-center overflow-hidden">
        {/* Auroras */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/30 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/20 blur-[120px] rounded-full mix-blend-screen" />

        <div className="relative z-10 text-center">
            <h1 className="text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                Une Musique Composée.
            </h1>
            <div className="mt-8 flex justify-center gap-4">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-purple-300 uppercase tracking-wider">Et Pas Générée</span>
            </div>
            <p className="mt-8 text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
                Pour se concentrer. S'inspirer. Librement.
            </p>
            <button onClick={onExplore} className="mt-16 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors mx-auto">
                <ArrowDown className="w-4 h-4" />
            </button>
        </div>
    </section>
);

// 126. GLASS PANELS
const V126: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 to-black text-white snap-start flex items-center justify-center p-8">
        <div className="relative w-full max-w-4xl h-[60vh]">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transform -rotate-2 z-10 flex items-center justify-center">
                <h1 className="text-6xl font-bold text-white/10 select-none">BACKGROUND</h1>
            </div>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transform rotate-1 z-20 flex flex-col items-center justify-center shadow-2xl">
                <h1 className="text-7xl font-bold tracking-tighter mb-4 text-center">Une Musique<br />Composée.</h1>
                <h2 className="text-2xl font-light uppercase tracking-widest mb-12">Et Pas Générée.</h2>
                <p className="text-xl font-serif italic opacity-70">Pour se concentrer. S'inspirer. Librement.</p>
                <button onClick={onExplore} className="absolute bottom-8 right-8 text-xs font-bold uppercase border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">Enter</button>
            </div>
        </div>
    </section>
);

// 127. GRADIENT TEXT
const V127: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex flex-col items-center justify-center">
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-[gradient_8s_ease_infinite] bg-[length:200%_200%] text-center leading-none pb-4">
            Une Musique<br />Composée.
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-8 tracking-tight">
            Et Pas Générée.
        </h2>
        <p className="mt-6 text-gray-500 font-medium">Pour se concentrer. S'inspirer. Librement.</p>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 128. GRID REVEAL
const V128: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#050505] text-white snap-start flex items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold tracking-[-0.02em] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                Une Musique Composée.
            </h1>
            <h2 className="mt-4 text-neutral-500 text-2xl font-light uppercase">Et Pas Générée.</h2>
            <div className="mt-12 p-4 border border-neutral-800 bg-neutral-900/50 rounded-lg max-w-md mx-auto backdrop-blur-sm">
                <p className="text-neutral-400 font-mono text-xs">
                    $ init --mode="Pour se concentrer. S'inspirer. Librement."
                </p>
            </div>
            <button onClick={onExplore} className="mt-12 text-neutral-600 hover:text-white transition-colors uppercase text-xs tracking-widest">
                Initialize &gt;
            </button>
        </div>
    </section>
);

// 129. SPOTLIGHT TEXT
const V129: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-[#222] snap-start flex items-center justify-center select-none cursor-default">
        <div className="text-center group hover:text-white transition-colors duration-[2s]">
            <h1 className="text-8xl font-black uppercase tracking-tighter">Une Musique<br />Composée.</h1>
            <h2 className="text-4xl font-bold uppercase mt-4">Et Pas Générée.</h2>
            <p className="mt-8 font-serif italic text-lg">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <div className="absolute bottom-12 text-gray-500 text-xs uppercase animate-pulse">Hover to Illuminate</div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 130. REFRACTION
const V130: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center overflow-hidden">
        <h1 className="absolute text-[20vw] font-black opacity-5 select-none">MUSIC</h1>
        <div className="relative z-10 backdrop-blur-[2px] backdrop-brightness-110 border border-white/20 bg-white/30 p-12 rounded-xl shadow-xl">
            <h1 className="text-6xl font-bold tracking-tight mb-2">Une Musique Composée.</h1>
            <h2 className="text-2xl text-blue-600 font-bold uppercase mb-6">Et Pas Générée.</h2>
            <p className="text-lg text-gray-700 italic">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-8 bg-black text-white px-6 py-2 rounded hover:scale-105 transition-transform">Start</button>
        </div>
    </section>
);

// 131. ECHO
const V131: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-white snap-start flex flex-col items-center justify-center">
        {[1, 0.5, 0.25, 0.1].map((opacity, i) => (
            <h1 key={i} className="text-7xl font-bold uppercase tracking-tighter leading-none" style={{ opacity }}>
                Une Musique Composée
            </h1>
        ))}
        <h2 className="text-3xl font-bold uppercase text-red-500 mt-8 mb-4">Et Pas Générée</h2>
        <p className="text-gray-400 font-serif italic">Pour se concentrer. S'inspirer. Librement.</p>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// ============================================================================
// SERIES N: "HIGH-END EDITORIAL" (Studio Freight Style) (132-141)
// ============================================================================

// 132. BIG CASLON
const V132: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f3f3f3] text-[#1a1a1a] snap-start p-8 md:p-16 flex flex-col justify-between">
        <div className="border-b border-black pb-4">
            <h2 className="text-sm font-bold uppercase tracking-widest">Issue 01</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-end">
            <h1 className="text-7xl md:text-9xl font-serif leading-[0.9]">
                Une<br />Musique<br />Composée.
            </h1>
            <div className="pb-4">
                <h2 className="text-xl font-bold uppercase mb-4 decoration-current underline decoration-2 underline-offset-4">Et Pas Générée.</h2>
                <p className="text-xl max-w-xs leading-relaxed">
                    Pour se concentrer.<br />
                    S'inspirer.<br />
                    Librement.
                </p>
            </div>
        </div>
        <button onClick={onExplore} className="absolute bottom-8 right-8 w-16 h-16 border border-black rounded-full hover:bg-black hover:text-white transition-colors flex items-center justify-center">↓</button>
    </section>
);

// 133. THE PARAGRAPH
const V133: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e8e6e1] text-black snap-start flex items-center justify-center p-8">
        <div className="max-w-2xl text-justify">
            <span className="text-6xl font-serif font-bold float-left mr-4 mt-[-10px] leading-none">U</span>
            <p className="text-3xl md:text-4xl leading-tight font-serif">
                <span className="font-bold">ne Musique Composée.</span> C'est une approche fondamentale différente. <span className="italic bg-black text-white px-1">Et Pas Générée.</span> Nous croyons en l'artisanat sonore. <span className="text-gray-500">Pour se concentrer. S'inspirer. Librement.</span> Explorez la collection dès maintenant.
            </p>
            <button onClick={onExplore} className="mt-8 font-sans font-bold uppercase text-sm border-b-2 border-black">Read More</button>
        </div>
    </section>
);

// 134. HORIZONTAL SCROLL (Simulaed)
const V134: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-blue-600 text-white snap-start flex flex-col justify-center overflow-hidden">
        <div className="w-[200%] -translate-x-1/4">
            <h1 className="text-[20vw] font-black uppercase whitespace-nowrap leading-none tracking-tighter">
                Une Musique Composée.
            </h1>
        </div>
        <div className="flex justify-between px-12 mt-8 items-start">
            <h2 className="text-4xl font-bold uppercase max-w-md">Et Pas<br />Générée.</h2>
            <p className="text-xl text-blue-200 w-64 text-right">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 135. OVERLAP
const V135: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#dcdcdc] text-black snap-start flex items-center justify-center isolate">
        <div className="absolute w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply opacity-80 left-1/4 top-1/4" />
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply opacity-80 right-1/4 bottom-1/4" />

        <div className="relative z-10 text-center mix-blend-hard-light">
            <h1 className="text-8xl font-black uppercase tracking-tighter mb-4 text-white">Une Musique<br />Composée.</h1>
            <h2 className="text-4xl font-bold uppercase text-black">Et Pas Générée.</h2>
            <p className="mt-8 text-xl font-bold text-white">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-12 bg-black text-white px-8 py-3 font-bold uppercase rounded-full">Discover</button>
        </div>
    </section>
);

// 136. SPLIT SCREEN
const V136: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex">
        <div className="w-1/2 h-full bg-black text-white flex items-center justify-center p-8">
            <h1 className="text-6xl font-bold uppercase text-right leading-none">Une<br />Musique<br />Composée.</h1>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center p-8">
            <h2 className="text-6xl font-light uppercase leading-none mb-12 text-gray-400">Et Pas<br />Générée.</h2>
            <p className="font-serif italic text-lg max-w-sm">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-12 self-start border-b border-black text-sm uppercase font-bold pb-1">Enter</button>
        </div>
    </section>
);

// 137. THE MONOLITH
const V137: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#8c8c8c] text-[#111] snap-start flex items-center justify-center p-4">
        <div className="bg-black text-white w-full h-full max-w-[95%] max-h-[90%] flex flex-col justify-between p-8 md:p-12 shadow-2xl">
            <div className="flex justify-between items-start">
                <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none max-w-2xl">Une Musique<br />Composée.</h1>
                <ArrowDown className="w-12 h-12" />
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-white/20 pt-8">
                <h2 className="text-2xl font-mono uppercase">Et Pas Générée.</h2>
                <p className="text-right font-serif text-gray-400">Pour se concentrer. S'inspirer. Librement.</p>
            </div>
            <button onClick={onExplore} className="absolute inset-0 z-10" />
        </div>
    </section>
);

// 138. TYPE CIRCLE (Simulated)
const V138: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center overflow-hidden">
        <div className="relative w-[600px] h-[600px] animate-[spin_20s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[6px] font-bold uppercase tracking-[2px] fill-black">
                    <textPath href="#circlePath">
                        Une Musique Composée. Et Pas Générée. Une Musique Composée. Et Pas Générée.
                    </textPath>
                </text>
            </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-center font-serif italic max-w-xs text-xl">
                "Pour se concentrer.<br />S'inspirer.<br />Librement."
            </p>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 139. MARQUEE VERTICAL
const V139: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#c23b22] text-[#f0f0f0] snap-start flex overflow-hidden">
        <div className="flex-1 border-r border-white/20 relative">
            <div className="absolute inset-0 flex flex-col items-center justify-around font-black uppercase text-4xl opacity-50">
                <span>Musique</span><span>Composée</span><span>Musique</span><span>Composée</span><span>Musique</span><span>Composée</span>
            </div>
        </div>
        <div className="flex-[2] flex flex-col justify-center items-center p-12 text-center z-10">
            <h1 className="text-7xl font-bold mb-4">Une Musique Composée.</h1>
            <h2 className="text-2xl font-mono bg-white text-[#c23b22] px-4 py-1 mb-6">Et Pas Générée.</h2>
            <p className="text-lg opacity-80">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-12 border-2 border-white rounded-full px-8 py-3 uppercase font-bold hover:bg-white hover:text-[#c23b22] transition-colors">Start</button>
        </div>
        <div className="flex-1 border-l border-white/20 relative">
            <div className="absolute inset-0 flex flex-col items-center justify-around font-black uppercase text-4xl opacity-50">
                <span>Unique</span><span>Humaine</span><span>Unique</span><span>Humaine</span><span>Unique</span><span>Humaine</span>
            </div>
        </div>
    </section>
);

// 140. JUSTIFIED
const V140: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-[#fafafa] snap-start flex flex-col justify-center p-8 md:p-24">
        <h1 className="text-[12vw] leading-[0.75] font-black uppercase text-justify w-full flex justify-between">
            <span>U</span><span>N</span><span>E</span>
        </h1>
        <h1 className="text-[12vw] leading-[0.75] font-black uppercase text-justify w-full flex justify-between text-gray-500">
            <span>M</span><span>U</span><span>S</span><span>I</span><span>Q</span><span>U</span><span>E</span>
        </h1>
        <h1 className="text-[12vw] leading-[0.75] font-black uppercase text-justify w-full flex justify-between">
            <span>C</span><span>O</span><span>M</span><span>P</span><span>O</span><span>S</span><span>É</span><span>E</span>
        </h1>

        <div className="flex justify-between items-end mt-12 border-t border-gray-700 pt-6">
            <h2 className="text-2xl font-mono uppercase">Et Pas Générée</h2>
            <p className="text-right text-gray-400 font-serif italic max-w-xs">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 141. NEWSPAPER
const V141: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#fcfbf9] text-[#111] snap-start flex flex-col p-8">
        <div className="border-b-4 border-black mb-2 flex justify-between items-end pb-2">
            <span className="font-black uppercase text-4xl tracking-tighter">The Daily Sound</span>
            <span className="font-mono text-xs">Vol. 141 — Paris</span>
        </div>
        <div className="border-b border-black mb-12" />

        <h1 className="text-8xl md:text-9xl font-serif font-bold text-center leading-none mb-12 tracking-tight">
            Une Musique Composée.
        </h1>

        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1 border-r border-gray-300 pr-8">
                <h2 className="text-3xl font-bold uppercase mb-4">Et Pas Générée.</h2>
                <p className="text-sm font-serif leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>
            <div className="col-span-1 border-r border-gray-300 pr-8 flex flex-col justify-between">
                <p className="text-xl font-sans font-medium text-center italic my-auto">
                    "Pour se concentrer. S'inspirer. Librement."
                </p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <button onClick={onExplore} className="w-full h-full bg-black text-white font-bold uppercase text-2xl hover:scale-[0.98] transition-transform flex items-center justify-center">
                    Read Now
                </button>
            </div>
        </div>
    </section>
);

// ============================================================================
// SERIES O: "INTERACTIVE & IMMERSIVE" (142-151)
// ============================================================================

// 142. MAGNETIC
const V142: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center">
        {/* Simplified Magnetic Effect (CSS Hover) */}
        <div className="group">
            <h1 className="text-7xl font-bold uppercase transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4">
                Une Musique Composée.
            </h1>
            <h2 className="text-3xl font-light uppercase text-gray-400 mt-4 transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-2">
                Et Pas Générée.
            </h2>
            <p className="mt-8 text-center text-gray-600 transition-opacity duration-300 group-hover:text-white">
                Pour se concentrer. S'inspirer. Librement.
            </p>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 143. DISTANCE (Simple Opacity/Scale)
const V143: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-white snap-start flex items-center justify-center hover:bg-black transition-colors duration-1000">
        <div className="text-center group">
            <h1 className="text-6xl font-black uppercase mb-4 opacity-50 group-hover:opacity-100 group-hover:text-[5rem] transition-all">
                Une Musique
            </h1>
            <h1 className="text-6xl font-black uppercase mb-8 opacity-50 group-hover:opacity-100 group-hover:text-[5rem] transition-all delay-75">
                Composée
            </h1>
            <div className="w-16 h-1 bg-white mx-auto my-8 group-hover:w-64 transition-all duration-500" />
            <h2 className="text-2xl font-bold uppercase">Et Pas Générée.</h2>
            <p className="mt-4 text-gray-500 italic">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 144. TRAIL (CSS After Image)
const V144: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#2d3436] text-[#dfe6e9] snap-start flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center animate-bounce">
            <h1 className="text-8xl font-black uppercase drop-shadow-[5px_5px_0_rgba(0,0,0,0.5)]">Une Musique Composée.</h1>
        </div>
        {/* Echoes */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none pointer-events-none">
            <h1 className="text-8xl font-black uppercase transform scale-110 blur-sm">Une Musique Composée.</h1>
        </div>

        <div className="absolute bottom-24 text-center">
            <h2 className="text-3xl font-bold uppercase mb-2 text-[#fab1a0]">Et Pas Générée</h2>
            <p className="text-sm">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-20" />
    </section>
);

// 145. DISTORTION (CSS Skew)
const V145: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#636e72] text-white snap-start flex items-center justify-center overflow-hidden group">
        <div className="transform transition-transform duration-200 group-hover:skew-x-12 group-hover:scale-110 text-center">
            <h1 className="text-[10vw] leading-none font-bold uppercase mix-blend-overlay">Une Musique</h1>
            <h1 className="text-[10vw] leading-none font-bold uppercase text-white mix-blend-normal">Composée</h1>

            <h2 className="text-4xl font-mono bg-black text-white inline-block px-4 mt-8 transform -skew-x-12">Et Pas Générée</h2>
        </div>
        <div className="absolute bottom-12 right-12">
            <p className="text-xl font-serif italic text-white/80">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 146. FOCUS MAP (Blur Everything Else)
const V146: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-900 text-white snap-start flex items-center justify-center">
        <div className="absolute inset-0 bg-white/5 grid grid-cols-4 grid-rows-4 blur-sm opacity-20 pointer-events-none" />

        <div className="relative z-10 bg-black/80 p-12 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-md">
            <h1 className="text-5xl font-bold mb-4">Une Musique Composée.</h1>
            <h2 className="text-2xl font-light text-gray-300 mb-8 uppercase tracking-widest">Et Pas Générée.</h2>
            <p className="text-gray-400 font-serif italic mb-8">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="w-full bg-white text-black py-3 uppercase font-bold text-sm tracking-widest hover:bg-gray-200">Start Focus</button>
        </div>
    </section>
);

// 147. PARALLAX DEPTH (Simulated Layers)
const V147: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0984e3] text-white snap-start flex items-center justify-center overflow-hidden perspective-[1000px]">
        <div className="absolute inset-x-0 top-1/4 text-center transform translate-z-[-100px] opacity-50">
            <h1 className="text-[15vw] font-black uppercase text-blue-900">Musique</h1>
        </div>
        <div className="relative z-10 text-center transform translate-z-[0px]">
            <h1 className="text-8xl font-black uppercase text-white drop-shadow-xl">Composée.</h1>
            <h2 className="text-4xl font-bold uppercase text-blue-200 mt-4">Et Pas Générée.</h2>
        </div>
        <div className="absolute inset-x-0 bottom-1/4 text-center transform translate-z-[50px] z-20">
            <p className="text-xl font-serif italic text-white bg-blue-800/50 inline-block px-6 py-2 rounded-full">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-30" />
    </section>
);

// 148. TILT CARD
const V148: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#dfe6e9] text-[#2d3436] snap-start flex items-center justify-center perspective-[1000px]">
        <div className="w-[500px] h-[600px] bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center p-12 transform transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-6 hover:scale-105" style={{ transformStyle: 'preserve-3d' }}>
            <h1 className="text-5xl font-black uppercase text-center mb-8 transform translate-z-[40px]">Une Musique<br />Composée.</h1>
            <h2 className="text-xl font-bold uppercase text-red-500 mb-12 transform translate-z-[30px]">Et Pas Générée.</h2>
            <p className="text-center font-serif text-gray-500 transform translate-z-[20px]">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-12 px-8 py-3 bg-black text-white rounded font-bold uppercase transform translate-z-[50px] hover:bg-gray-800">Enter</button>
        </div>
    </section>
);

// 149. FLUID TEXT (Wavy Animation)
const V149: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#a29bfe] text-white snap-start flex flex-col items-center justify-center">
        <h1 className="text-7xl font-black uppercase animate-pulse">
            Une Musique
        </h1>
        <h1 className="text-7xl font-black uppercase animate-bounce mt-4">
            Composée
        </h1>

        <div className="mt-12 bg-white/20 backdrop-blur rounded-xl p-6">
            <h2 className="text-3xl font-bold uppercase mb-2">Et Pas Générée.</h2>
            <p className="text-white/80 italic">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 150. SCRATCH CARD (Hover Reveal)
const V150: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-300 snap-start flex items-center justify-center cursor-crosshair">
        {/* Hidden Content */}
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center text-white z-0">
            <h1 className="text-8xl font-black uppercase">Une Musique Composée</h1>
            <h2 className="text-4xl font-light uppercase mt-4 text-[#00cec9]">Et Pas Générée</h2>
            <p className="mt-8">Pour se concentrer. S'inspirer. Librement.</p>
        </div>

        {/* Scratch Surface (Simulated with opacity on hover) */}
        <div className="absolute inset-0 bg-gray-300 z-10 opacity-100 hover:opacity-0 transition-opacity duration-[2s] flex items-center justify-center">
            <p className="text-gray-500 uppercase tracking-widest font-bold">Rub to Reveal</p>
        </div>

        <button onClick={onExplore} className="absolute bottom-12 z-20 bg-white text-black px-6 py-2 rounded-full font-bold uppercase">Enter Anyway</button>
    </section>
);

// 151. THE PULSE
const V151: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#fab1a0] text-[#d63031] snap-start flex items-center justify-center">
        <div className="absolute inset-0 bg-red-500/10 animate-ping rounded-full scale-0" />

        <div className="relative z-10 text-center">
            <h1 className="text-[10vw] font-black uppercase tracking-tighter mix-blend-multiply opacity-80 animate-pulse">Une Musique</h1>
            <h1 className="text-[10vw] font-black uppercase tracking-tighter mix-blend-multiply opacity-80 animate-pulse delay-75">Composée.</h1>

            <h2 className="text-4xl font-bold uppercase mt-8 text-white bg-[#d63031] inline-block px-4 py-1 transform -rotate-2">Et Pas Générée.</h2>

            <p className="mt-8 font-medium text-xl">Pour se concentrer. S'inspirer. Librement.</p>

            <button onClick={onExplore} className="mt-12 bg-white text-[#d63031] w-20 h-20 rounded-full font-bold text-xl hover:scale-110 transition-transform shadow-xl">GO</button>
        </div>
    </section>
);

// ============================================================================
// SERIES P: "PRODUCT & HARDWARE" (Teenage Engineering/Dieter Rams) (152-161)
// ============================================================================

// 152. THE DEVICE
const V152: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e0e0e0] text-[#333] snap-start flex items-center justify-center font-mono">
        <div className="bg-[#dcdcdc] p-8 rounded-[4px] shadow-[inset_1px_1px_2px_white,inset_-1px_-1px_2px_rgba(0,0,0,0.2),5px_5px_15px_rgba(0,0,0,0.2)] border border-[#ccc]">
            <div className="flex justify-between items-center mb-12">
                <span className="uppercase text-[10px] tracking-widest text-[#666]">Model: IM-2024</span>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>

            <h1 className="text-4xl font-bold uppercase tracking-tight text-[#222] mb-2 mix-blend-multiply opacity-80" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.5)' }}>
                Une Musique<br />Composée.
            </h1>
            <h2 className="text-sm uppercase tracking-widest text-[#666] mb-8">
                Et Pas Générée.
            </h2>

            <div className="flex gap-4">
                <button onClick={onExplore} className="w-12 h-12 rounded-full bg-[#333] shadow-[0_4px_10px_rgba(0,0,0,0.3)] active:translate-y-[1px] active:shadow-none transition-all flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full" />
                </button>
                <div className="flex flex-col justify-center">
                    <span className="text-[9px] uppercase font-bold text-[#555]">Power</span>
                    <span className="text-[9px] uppercase text-[#888]">Push to Start</span>
                </div>
            </div>
        </div>
    </section>
);

// 153. SCHEMATIC
const V153: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0033cc] text-white snap-start flex items-center justify-center overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 border-2 border-white p-8 max-w-2xl w-full">
            <div className="absolute top-0 left-0 bg-white text-[#0033cc] px-2 py-1 text-xs font-bold font-mono">FIG. 1.0</div>

            <h1 className="text-6xl font-bold font-mono uppercase mt-8 mb-4">Une Musique Composée.</h1>

            {/* Lines pointing to text */}
            <div className="absolute top-1/2 right-[-50px] w-[50px] h-[2px] bg-white" />
            <div className="absolute top-1/2 right-[-140px] text-xs font-mono bg-white text-[#0033cc] px-1">Main Component</div>

            <h2 className="text-2xl font-mono uppercase border-b border-white pb-2 inline-block mb-8">Et Pas Générée.</h2>

            <div className="flex justify-between items-end">
                <p className="font-mono text-xs max-w-xs">
                    SPEC: HUMAN_COMPOSED<br />
                    TYPE: AUDIO/WAV<br />
                    STATUS: READY
                </p>
                <button onClick={onExplore} className="bg-white text-[#0033cc] font-mono font-bold px-6 py-2 hover:bg-opacity-90">
                    [ EXECUTE ]
                </button>
            </div>
        </div>
    </section>
);

// 154. LED MATRIX
const V154: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-[#ff3300] snap-start flex items-center justify-center font-mono">
        <div className="absolute inset-0 bg-[radial-gradient(#330000_20%,black_20%)] bg-[size:4px_4px]" />

        <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-widest animate-pulse" style={{ textShadow: '0 0 10px #ff3300' }}>
                UNE MUSIQUE
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-widest animate-pulse delay-75" style={{ textShadow: '0 0 10px #ff3300' }}>
                COMPOSÉE
            </h1>

            <div className="mt-12 border-2 border-[#ff3300] p-2 inline-block">
                <h2 className="text-2xl uppercase tracking-widest">Et Pas Générée</h2>
            </div>

            <p className="mt-8 text-sm opacity-70">/// POUR SE CONCENTRER. S'INSPIRER. LIBREMENT. ///</p>

            <button onClick={onExplore} className="mt-12 text-[#ff3300] border border-[#ff3300] px-8 py-2 hover:bg-[#ff3300] hover:text-black transition-colors uppercase text-sm tracking-widest">
                System Start
            </button>
        </div>
    </section>
);

// 155. THE DIAL
const V155: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#222] text-[#eee] snap-start flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 rounded-full bg-[#1a1a1a] shadow-[inset_0_5px_10px_black,0_5px_15px_rgba(0,0,0,0.5)] flex items-center justify-center border border-[#333] group cursor-pointer" onClick={onExplore}>
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#333] to-[#111] shadow-[0_10px_20px_black] flex items-center justify-center relative transform transition-transform group-hover:rotate-90 duration-500">
                <div className="absolute top-4 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_5px_orange]" />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-dotted border-[#444] opacity-50" />
        </div>

        <h1 className="mt-16 text-4xl font-bold hover:text-orange-500 transition-colors cursor-default">Une Musique Composée.</h1>
        <h2 className="text-xl uppercase tracking-widest text-[#666] mt-4">Et Pas Générée.</h2>
        <p className="mt-2 text-xs font-mono text-[#444] uppercase">Turn to Start</p>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 156. ANODIZED
const V156: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-300 to-gray-400 text-[#444] snap-start flex items-center justify-center">
        <div className="w-[80vw] h-[80vh] bg-gradient-to-br from-[#f0f0f0] to-[#d0d0d0] rounded-3xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-30 mix-blend-multiply" />

            <h1 className="relative z-10 text-6xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#666] to-[#888] drop-shadow-[1px_1px_1px_white]">
                Une Musique<br />Composée.
            </h1>

            <h2 className="relative z-10 mt-8 text-sm font-bold uppercase tracking-[0.3em] text-[#888]">
                Et Pas Générée.
            </h2>

            <button onClick={onExplore} className="relative z-10 mt-16 w-16 h-16 rounded-full bg-[#e0e0e0] shadow-[inset_2px_2px_5px_white,inset_-2px_-2px_5px_rgba(0,0,0,0.1),5px_5px_10px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#888] hover:text-[#333]">
                <Play className="w-6 h-6 fill-current" />
            </button>
        </div>
    </section>
);

// 157. SPEC SHEET
const V157: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center p-8 font-sans">
        <div className="w-full max-w-4xl grid grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            <div className="bg-white p-8 col-span-2">
                <h1 className="text-5xl font-bold tracking-tight">Une Musique Composée.</h1>
            </div>

            <div className="bg-white p-8">
                <h2 className="text-xs font-bold uppercase text-gray-400 mb-2">Category</h2>
                <p className="text-xl font-medium">Human Audio</p>
            </div>
            <div className="bg-white p-8">
                <h2 className="text-xs font-bold uppercase text-gray-400 mb-2">Restriction</h2>
                <p className="text-xl font-medium">Et Pas Générée</p>
            </div>

            <div className="bg-white p-8 col-span-2">
                <h2 className="text-xs font-bold uppercase text-gray-400 mb-2">Description</h2>
                <p className="text-lg leading-relaxed text-gray-600">
                    Pour se concentrer. S'inspirer. Librement. High fidelity audio components designed for maximum cognitive enhancement.
                </p>
            </div>

            <div className="bg-black text-white p-8 col-span-2 flex justify-between items-center cursor-pointer hover:bg-gray-900 transition-colors" onClick={onExplore}>
                <span className="font-bold uppercase tracking-widest">Initiate Sequence</span>
                <ArrowDown />
            </div>
        </div>
    </section>
);

// 158. PACKAGING
const V158: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f5f5f7] text-[#1d1d1f] snap-start flex items-center justify-center">
        <div className="bg-white px-16 py-24 rounded-[2em] shadow-xl text-center max-w-xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
            <img src="/assets/logo.png" alt="Logo" className="w-12 h-12 mx-auto mb-12 opacity-80" />

            <h1 className="text-5xl font-semibold tracking-tight mb-4">Une Musique Composée.</h1>
            <h2 className="text-2xl font-medium text-gray-500 mb-12">Et Pas Générée.</h2>

            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-16">Designed in Paris.</p>

            <button onClick={onExplore} className="bg-[#0071e3] text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[#0077ed] transition-colors">
                Open
            </button>
        </div>
    </section>
);

// 159. ISOMETRIC GRID
const V159: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e6e9f0] text-[#333] snap-start flex items-center justify-center overflow-hidden">
        <div className="transform rotate-x-60 rotate-z-45 perspective-[1000px] hover:rotate-z-0 transition-transform duration-[2s]">
            <div className="w-96 h-96 bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] rounded-3xl flex items-center justify-center p-8 text-center transform translate-z-12 hover:translate-z-24 transition-transform">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Une Musique<br />Composée.</h1>
                    <h2 className="text-sm uppercase font-bold text-blue-500 tracking-widest">Et Pas Générée.</h2>
                </div>
            </div>
        </div>
        <div className="absolute bottom-12 text-center text-gray-500">
            <p>Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-4 uppercase font-bold text-xs border-b border-gray-400">Explore</button>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// 160. CERAMIC
const V160: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#fafafa] text-[#aaa] snap-start flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-[120px] font-bold text-white shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),2px_2px_5px_rgba(0,0,0,0.05)] select-none">
                PURE
            </h1>
            <div className="relative mt-[-40px] z-10">
                <h1 className="text-4xl font-medium text-[#333]">Une Musique Composée.</h1>
                <h2 className="text-lg font-light uppercase tracking-widest mt-2">Et Pas Générée.</h2>
            </div>

            <div className="w-32 h-32 bg-white rounded-full mx-auto mt-16 shadow-[10px_10px_30px_#d9d9d9,-10px_-10px_30px_#ffffff] flex items-center justify-center cursor-pointer hover:shadow-[inset_5px_5px_15px_#d9d9d9,inset_-5px_-5px_15px_#ffffff] transition-shadow duration-300" onClick={onExplore}>
                <div className="w-3 h-3 bg-[#333] rounded-full" />
            </div>
        </div>
    </section>
);

// 161. DIETER RAMS
const V161: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f4f4f4] text-[#222] snap-start flex items-center justify-center">
        <div className="bg-[#e8e8e8] w-[350px] shadow-2xl rounded p-4 border-t-4 border-orange-500">
            <div className="bg-black h-32 mb-8 rounded-sm p-4 relative overflow-hidden">
                <p className="font-mono text-green-500 text-sm">Une Musique Composée.</p>
                <p className="font-mono text-green-500 text-sm mt-2">Et Pas Générée.</p>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="h-12 bg-[#d4d4d4] rounded-sm shadow-sm active:translate-y-px active:shadow-inner" />
                ))}
            </div>

            <div className="flex justify-end gap-4">
                <button onClick={onExplore} className="w-16 h-16 rounded-full bg-orange-500 shadow-md active:shadow-inner flex items-center justify-center text-white font-bold text-xs uppercase">
                    On
                </button>
            </div>

            <p className="mt-8 text-[10px] text-[#666] uppercase text-center font-bold">Braun Design • Type 1</p>
        </div>
    </section>
);

// ============================================================================
// SERIES Q: "LUXURY & FASHION" (Vogue/Gucci/Prada) (162-171)
// ============================================================================

// 162. MONOGRAM
const V162: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#4a2c2a] text-[#d4af37] snap-start flex items-center justify-center overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d4af37 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 border-[10px] border-[#d4af37] p-16 md:p-24 text-center bg-[#4a2c2a]/90 backdrop-blur-sm">
            <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tighter mb-4 text-[#e5cca9]">
                Une Musique<br />Composée.
            </h1>
            <h2 className="text-xl md:text-2xl font-serif italic tracking-widest text-[#d4af37]">Et Pas Générée.</h2>
            <p className="mt-8 font-sans text-xs uppercase tracking-[0.3em] text-[#e5cca9]">Collection N°1 — Paris</p>
            <button onClick={onExplore} className="absolute inset-0 z-20" />
        </div>
    </section>
);

// 163. GOLD FOIL
const V163: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center">
        <div className="text-center p-12 border border-yellow-200 shadow-[0_20px_50px_rgba(212,175,55,0.2)] max-w-2xl bg-white">
            <h1 className="text-6xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#bf953f] via-[#fcf6ba] to-[#b38728] mb-6 drop-shadow-sm">
                Une Musique<br />Composée.
            </h1>
            <div className="h-px w-24 bg-[#bf953f] mx-auto mb-6" />
            <h2 className="text-3xl font-light uppercase tracking-[0.2em]">Et Pas Générée.</h2>
            <p className="mt-8 text-gray-400 font-serif italic">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-12 text-xs font-bold uppercase tracking-widest text-[#b38728] border-b border-[#b38728] pb-1">Enter Experience</button>
        </div>
    </section>
);

// 164. THE RUNWAY
const V164: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex flex-col items-center overflow-hidden">
        {/* Spotlight Floor */}
        <div className="absolute inset-x-0 h-full w-1/3 mx-auto bg-gradient-to-b from-white/10 to-transparent transform perspective-[500px] rotate-x-60" />

        <div className="relative z-10 mt-[10vh] text-center">
            <img src={cristal2} className="w-[400px] h-auto mx-auto mb-[-50px] mix-blend-screen opacity-80" />
            <h1 className="text-8xl font-serif font-bold uppercase tracking-tighter mix-blend-difference relative z-20">Composée</h1>
            <h2 className="text-xl uppercase tracking-[0.5em] mt-8 text-gray-400">Et Pas Générée</h2>
        </div>

        <div className="absolute bottom-8 w-full text-center">
            <button onClick={onExplore} className="uppercase text-xs tracking-widest animate-bounce">Scroll</button>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-30" />
    </section>
);

// 165. SERIF & SPACE
const V165: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f0f0f0] text-black snap-start p-12 flex flex-col justify-between">
        <h2 className="text-xs uppercase tracking-[0.4em] text-gray-400">Pour se concentrer. S'inspirer. Librement.</h2>

        <div className="text-center">
            <h1 className="text-5xl font-serif font-normal italic mb-4">Une Musique Composée.</h1>
            <p className="text-[10px] font-sans uppercase tracking-widest text-gray-500">Et Pas Générée</p>
        </div>

        <div className="flex justify-center">
            <button onClick={onExplore} className="w-2 h-2 bg-black rounded-full" />
        </div>
    </section>
);

// 166. SILK
const V166: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-[#fff] snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-80" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20" />

        <div className="relative z-10 text-center mix-blend-overlay">
            <h1 className="text-9xl font-serif italic text-white opacity-90 blur-[1px]">Composée</h1>
            <h2 className="text-4xl font-sans font-light uppercase tracking-widest mt-[-20px] text-white">Et Pas Générée</h2>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-20" />
    </section>
);

// 167. DIAMOND
const V167: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
            <img src={cristal} className="w-[60vw] max-w-3xl opacity-30 animate-pulse" />
        </div>

        <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mix-blend-difference">Une Musique<br />Composée.</h1>
            <h2 className="text-2xl font-light uppercase tracking-[0.3em] mt-8 text-cyan-200">Et Pas Générée.</h2>
            <p className="mt-8 text-gray-400 font-serif italic">Pour se concentrer. S'inspirer. Librement.</p>
            <button onClick={onExplore} className="mt-12 border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition-colors uppercase text-sm">Shine</button>
        </div>
    </section>
);

// 168. THE BRAND
const V168: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center">
        <div className="flex flex-col items-center">
            <h1 className="text-8xl font-black uppercase tracking-[-0.05em]">Music©</h1>
            <div className="w-full flex justify-between mt-4 px-2">
                <span className="text-sm font-bold uppercase">Une Musique Composée.</span>
                <span className="text-sm font-bold uppercase">Et Pas Générée.</span>
            </div>
            <p className="mt-24 text-gray-400 font-serif italic max-w-xs text-center">
                Maison fondée en 2025. Pour se concentrer. S'inspirer. Librement.
            </p>
            <button onClick={onExplore} className="absolute inset-0 z-10" />
        </div>
    </section>
);

// 169. ATELIER
const V169: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#fcfcfc] text-[#222] snap-start flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full p-12">
            <div className="flex items-center">
                <h1 className="text-6xl font-serif italic leading-tight">
                    Une Musique<br />Composée.
                    <span className="block text-xl font-sans font-bold uppercase not-italic tracking-widest mt-8 text-red-600">
                        Et Pas Générée.
                    </span>
                </h1>
            </div>
            <div className="border-l border-gray-200 pl-12 flex flex-col justify-center">
                <img src={diorama} className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700 mb-8" />
                <p className="font-serif text-lg text-gray-600">"Pour se concentrer. S'inspirer. Librement."</p>
                <button onClick={onExplore} className="mt-8 self-start border-b-2 border-black text-sm uppercase font-bold hover:text-red-600 hover:border-red-600 transition-colors">
                    Discover Collection
                </button>
            </div>
        </div>
    </section>
);

// 170. MIDNIGHT
const V170: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0a0a2a] text-[#c0c0c0] snap-start flex items-center justify-center overflow-hidden">
        <h1 className="text-[12vw] font-serif font-normal italic opacity-20 absolute top-[-5vw] left-[-2vw]">Midnight</h1>

        <div className="relative z-10 text-center max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light font-serif tracking-wide text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                Une Musique Composée.
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent my-12" />
            <h2 className="text-2xl uppercase tracking-[0.25em] text-blue-200">Et Pas Générée.</h2>
            <button onClick={onExplore} className="mt-16 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors mx-auto">
                <ArrowDown className="text-white" />
            </button>
        </div>
    </section>
);

// 171. PERFUME
const V171: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center">
        <div className="border border-black p-2 md:p-4">
            <div className="border border-black px-12 py-24 md:px-24 md:py-32 text-center bg-[#fffcf5]">
                <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wide uppercase mb-4">Composée</h1>
                <h2 className="text-xs font-sans uppercase tracking-[0.3em] mb-12">Eau de Parfum</h2>

                <p className="font-serif italic text-gray-500 mb-4">Une Musique.</p>
                <p className="font-bold uppercase text-sm tracking-widest mb-8">Et Pas Générée.</p>

                <div className="text-[10px] uppercase text-gray-400 mt-12">
                    50ml • 1.7 FL.OZ
                </div>
                <button onClick={onExplore} className="absolute inset-0 z-10" />
            </div>
        </div>
    </section>
);

// ============================================================================
// SERIES R: "APP & INTERFACE" (Linear/Arc/Dashboard) (172-181)
// ============================================================================

// 172. THE DASHBOARD
const V172: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0f1115] text-white snap-start flex items-center justify-center font-sans">
        <div className="w-[90vw] max-w-5xl bg-[#161b22] border border-[#30363d] rounded-xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-8 border-b border-[#30363d] pb-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-gray-500 font-mono">dashboard.tsx</div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 bg-[#0d1117] rounded-lg p-6 border border-[#30363d]">
                    <h1 className="text-4xl font-bold mb-2">Une Musique Composée.</h1>
                    <div className="h-32 mt-8 flex items-end gap-1">
                        {[40, 60, 45, 70, 50, 80, 65, 90, 75, 55, 60, 50, 70, 80, 95, 85, 70, 60, 50, 40].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-blue-500/20 hover:bg-blue-500 transition-colors rounded-t-sm" />
                        ))}
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-6">
                    <div className="bg-[#0d1117] rounded-lg p-6 border border-[#30363d] flex-1">
                        <h2 className="text-xs uppercase text-gray-500 font-bold mb-2">Status</h2>
                        <div className="text-xl font-mono text-green-400">Et Pas Générée.</div>
                    </div>
                    <div className="bg-[#0d1117] rounded-lg p-6 border border-[#30363d] flex-1 flex items-center justify-center">
                        <button onClick={onExplore} className="bg-[#238636] text-white px-6 py-2 rounded-md font-bold hover:bg-[#2ea043] transition-colors w-full">
                            Deploy Effect
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// 173. NOTIFICATIONS
const V173: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-100 text-black snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover blur-md opacity-50" />

        <div className="relative z-10 flex flex-col gap-4 w-[350px]">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg transform translate-x-[-20px] hover:translate-x-0 transition-transform cursor-pointer">
                <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                        <div className="w-5 h-5 bg-black rounded-md flex items-center justify-center text-white text-xs font-bold">M</div>
                        <div>
                            <h3 className="font-bold text-sm">Music App</h3>
                            <p className="text-sm">Une Musique Composée.</p>
                        </div>
                    </div>
                    <span className="text-xs text-gray-500">now</span>
                </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg transform translate-x-[20px] hover:translate-x-0 transition-transform cursor-pointer delay-100">
                <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                        <div className="w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs font-bold">S</div>
                        <div>
                            <h3 className="font-bold text-sm">System</h3>
                            <p className="text-sm">Et Pas Générée.</p>
                        </div>
                    </div>
                    <span className="text-xs text-gray-500">1m ago</span>
                </div>
            </div>

            <button onClick={onExplore} className="mt-4 bg-black/80 backdrop-blur text-white py-3 rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-transform">
                Open Controls
            </button>
        </div>
    </section>
);

// 174. THE TOGGLE
const V174: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f2f2f7] text-black snap-start flex items-center justify-center">
        <div className="flex flex-col items-center gap-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Une Musique Composée.</h1>
                <p className="text-gray-500">Et Pas Générée.</p>
            </div>

            <div className="w-32 h-16 bg-[#34c759] rounded-full p-1 cursor-pointer shadow-inner transition-colors hover:bg-[#30b753]" onClick={onExplore}>
                <div className="w-14 h-14 bg-white rounded-full shadow-md transform translate-x-16 transition-transform" />
            </div>

            <p className="text-xs uppercase text-gray-400 tracking-widest font-bold">Enabled</p>
        </div>
    </section>
);

// 175. CHAT INTERFACE
const V175: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center">
        <div className="w-[350px] h-[600px] border border-gray-200 rounded-[3rem] shadow-2xl p-4 flex flex-col bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-24 bg-white/80 backdrop-blur z-10 border-b border-gray-100 flex items-end justify-center pb-4">
                <span className="font-bold">Composer</span>
            </div>

            <div className="flex-1 overflow-y-auto pt-24 pb-4 flex flex-col gap-4 px-2">
                <div className="self-end bg-blue-500 text-white rounded-2xl rounded-tr-sm py-2 px-4 max-w-[80%] shadow-sm">
                    Is this AI generated?
                </div>
                <div className="self-start bg-gray-200 text-black rounded-2xl rounded-tl-sm py-2 px-4 max-w-[80%] shadow-sm">
                    <span className="font-bold block mb-1">Une Musique Composée.</span>
                    Non, absolument pas.
                </div>
                <div className="self-start bg-gray-200 text-black rounded-2xl rounded-tl-sm py-2 px-4 max-w-[80%] shadow-sm">
                    Et Pas Générée.
                </div>
                <div className="self-end bg-blue-500 text-white rounded-2xl rounded-tr-sm py-2 px-4 max-w-[80%] shadow-sm">
                    <button onClick={onExplore} className="underline font-bold">Start Listening</button>
                </div>
            </div>
        </div>
    </section>
);

// 176. FILE SYSTEM
const V176: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#383a59] text-white snap-start flex items-center justify-center font-sans">
        <div className="w-[800px] bg-[#282a36] rounded-lg shadow-2xl overflow-hidden border border-[#44475a]">
            <div className="bg-[#44475a] p-3 flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#ff5555]" />
                <div className="w-3 h-3 rounded-full bg-[#f1fa8c]" />
                <div className="w-3 h-3 rounded-full bg-[#50fa7b]" />
                <div className="ml-4 text-xs font-mono text-[#f8f8f2] opacity-70">~/Music/Composed</div>
            </div>

            <div className="p-8 grid grid-cols-4 gap-4">
                <div className="col-span-1 border-r border-[#44475a] pr-4 flex flex-col gap-2 text-sm text-[#bd93f9]">
                    <div className="bg-[#44475a] rounded p-1">Downloads</div>
                    <div className="p-1 opacity-70">Documents</div>
                    <div className="p-1 opacity-70">Desktop</div>
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={onExplore}>
                            <div className="w-16 h-20 bg-[#f8f8f2] rounded flex items-center justify-center text-[#282a36] font-bold text-4xl shadow-lg group-hover:scale-105 transition-transform">♪</div>
                            <span className="text-xs text-center">Une Musique<br />Composée.wav</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group opacity-50">
                            <div className="w-16 h-20 bg-[#6272a4] rounded flex items-center justify-center text-[#f8f8f2] font-bold text-4xl shadow-lg">?</div>
                            <span className="text-xs text-center">Et Pas Générée.txt</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// 177. WIDGETS
const V177: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#000] text-white snap-start flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-4xl w-full">
            <div className="col-span-2 row-span-2 bg-[#1c1c1e] rounded-[2rem] p-8 flex flex-col justify-between hover:bg-[#2c2c2e] transition-colors">
                <h1 className="text-4xl font-bold">Une Musique<br />Composée.</h1>
                <p className="text-gray-400">Pour se concentrer. S'inspirer. Librement.</p>
            </div>
            <div className="col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-[2rem] p-6 flex items-center justify-center hover:scale-[1.02] transition-transform cursor-pointer" onClick={onExplore}>
                <span className="font-bold text-2xl">Play Now</span>
            </div>
            <div className="bg-[#1c1c1e] rounded-[2rem] p-6 flex flex-col justify-center items-center">
                <div className="text-4xl">🚫</div>
                <div className="text-xs mt-2 text-center text-gray-400">Pas Générée</div>
            </div>
            <div className="bg-[#1c1c1e] rounded-[2rem] p-6 flex flex-col justify-center items-center">
                <div className="w-12 h-12 rounded-full border-4 border-green-500 border-t-transparent animate-spin" />
            </div>
        </div>
    </section>
);

// 178. CODE EDITOR
const V178: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1e1e1e] text-[#d4d4d4] snap-start flex items-center justify-center font-mono text-sm sm:text-base">
        <div className="w-full max-w-3xl p-8">
            <div className="flex gap-4">
                <div className="text-[#858585] select-none text-right flex flex-col">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                </div>
                <div>
                    <div><span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">experience</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">AudioContext</span><span className="text-[#d4d4d4]">(</span><span className="text-[#d4d4d4]">)</span><span className="text-[#d4d4d4]">{';'}</span></div>
                    <div className="mt-2"><span className="text-[#6a9955]">// This is not AI generated.</span></div>
                    <div><span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">track</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#ce9178]">"Une Musique Composée."</span><span className="text-[#d4d4d4]">{';'}</span></div>
                    <div><span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">reality</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#ce9178]">"Et Pas Générée."</span><span className="text-[#d4d4d4]">{';'}</span></div>
                    <div className="mt-4">
                        <span className="text-[#c586c0]">if</span> <span className="text-[#ffd700]">(</span><span className="text-[#9cdcfe]">user</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">isReady</span><span className="text-[#ffd700]">)</span> <span className="text-[#ffd700]">{'{'}</span>
                    </div>
                    <div className="pl-4">
                        <button onClick={onExplore} className="bg-[#0e639c] text-white px-2 hover:bg-[#1177bb]">
                            <span className="text-[#dcdcaa]">startExperience</span><span className="text-[#d4d4d4]">(</span><span className="text-[#d4d4d4]">)</span><span className="text-[#d4d4d4]">{';'}</span>
                        </button>
                    </div>
                    <div><span className="text-[#ffd700]">{'}'}</span></div>
                </div>
            </div>
        </div>
    </section>
);

// 179. SEARCH BAR
const V179: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex flex-col items-center justify-center">
        <div className="text-6xl font-bold mb-8 tracking-tighter text-blue-600">
            M<span className="text-red-500">u</span><span className="text-yellow-500">s</span>i<span className="text-green-500">c</span><span className="text-red-500">a</span>
        </div>

        <div className="w-[90vw] max-w-xl border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-shadow px-6 py-3 flex items-center">
            <span className="text-gray-400 mr-4">🔍</span>
            <input type="text" readOnly value="Une Musique Composée" className="flex-1 outline-none text-lg" />
            <span className="text-blue-500 cursor-pointer font-bold" onClick={onExplore}>GO</span>
        </div>

        <div className="mt-6 flex gap-2 text-sm text-gray-600">
            <span>Did you mean:</span>
            <span className="text-blue-800 font-bold italic cursor-pointer">Et Pas Générée ?</span>
        </div>
    </section>
);

// 180. KANBAN
const V180: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f4f5f7] text-[#172b4d] snap-start flex items-center justify-center overflow-x-auto">
        <div className="flex gap-4 p-8 min-w-max">
            {/* Column 1 */}
            <div className="w-72 bg-[#ebecf0] rounded-lg p-2 flex flex-col gap-2">
                <h3 className="font-bold text-sm px-2 py-1 text-[#5e6c84]">TO DO</h3>
                <div className="bg-white p-3 rounded shadow-sm border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                    Générer avec l'IA
                </div>
                <div className="bg-white p-3 rounded shadow-sm border-b border-gray-200 cursor-pointer hover:bg-gray-50 opacity-50">
                    Utiliser des loops
                </div>
            </div>

            {/* Column 2 */}
            <div className="w-72 bg-[#ebecf0] rounded-lg p-2 flex flex-col gap-2">
                <h3 className="font-bold text-sm px-2 py-1 text-[#5e6c84]">DONE</h3>
                <div className="bg-white p-3 rounded shadow-sm border-b border-gray-200 cursor-pointer hover:bg-gray-50 border-l-4 border-green-500">
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-1 rounded mb-1 inline-block">COMPLETED</span>
                    <p className="font-medium">Une Musique Composée.</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm border-b border-gray-200 cursor-pointer hover:bg-gray-50 border-l-4 border-green-500">
                    <p className="font-medium">Et Pas Générée.</p>
                </div>
            </div>

            {/* Column 3 */}
            <div className="w-72 bg-[#ebecf0] rounded-lg p-2 flex flex-col gap-2">
                <h3 className="font-bold text-sm px-2 py-1 text-[#5e6c84]">NEXT</h3>
                <div className="bg-white p-3 rounded shadow-sm border-b border-gray-200 cursor-pointer hover:bg-gray-50" onClick={onExplore}>
                    <p>Listen Now</p>
                    <div className="mt-2 w-full h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="h-full bg-blue-500 w-2/3" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// 181. SETTINGS
const V181: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center font-sans">
        <div className="w-full max-w-md border border-gray-200 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gray-50 p-4 border-b border-gray-200 font-bold text-center">Settings</div>

            <div className="divide-y divide-gray-100">
                <div className="p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white">🎵</div>
                        <h3 className="font-medium">Sound Source</h3>
                    </div>
                    <span className="text-gray-500 text-sm">Human &gt;</span>
                </div>

                <div className="p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <div className="w-8 h-8 rounded bg-red-500 flex items-center justify-center text-white">🚫</div>
                        <h3 className="font-medium">AI Generation</h3>
                    </div>
                    <div className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                </div>

                <div className="p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer" onClick={onExplore}>
                    <h3 className="font-medium text-blue-600">Reset & Play</h3>
                </div>
            </div>

            <div className="bg-gray-50 p-4 text-xs text-gray-500 text-center">
                Une Musique Composée. Et Pas Générée.
            </div>
        </div>
    </section>
);

// ============================================================================
// SERIES S: "ECOMMERCE & RETAIL" (Shopify/SSENSE) (182-191)
// ============================================================================

// 182. THE PRODUCT
const V182: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex flex-col md:flex-row font-sans">
        <div className="flex-1 bg-gray-100 flex items-center justify-center p-8">
            <img src={cristal2} className="w-[80%] max-w-md object-contain mix-blend-multiply" />
        </div>
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-2">Une Musique Composée.</h1>
            <p className="text-2xl text-gray-500 mb-8">$0.00 <span className="text-sm line-through text-gray-300">$999.00</span></p>

            <div className="mb-8">
                <h3 className="font-bold text-sm uppercase mb-2">Description</h3>
                <p className="text-gray-600">Et Pas Générée. Experience pure soundscapes designed for focus and inspiration. No artificial ingredients.</p>
            </div>

            <button onClick={onExplore} className="w-full bg-black text-white py-4 font-bold uppercase hover:bg-gray-800 transition-colors sticky bottom-4 shadow-xl">
                Add to Cart
            </button>
        </div>
    </section>
);

// 183. TICKER
const V183: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#ff4d00] text-black snap-start flex flex-col justify-center overflow-hidden">
        <div className="transform -rotate-12 scale-110">
            <div className="whitespace-nowrap overflow-hidden bg-white text-black py-4 border-y-4 border-black mb-8">
                <div className="animate-[scroll_10s_linear_infinite] inline-block text-6xl font-black uppercase">
                    Une Musique Composée • Et Pas Générée • Pure Sound • No AI • New Drop •&nbsp;
                </div>
                <div className="animate-[scroll_10s_linear_infinite] inline-block text-6xl font-black uppercase" aria-hidden="true">
                    Une Musique Composée • Et Pas Générée • Pure Sound • No AI • New Drop •&nbsp;
                </div>
            </div>

            <div className="whitespace-nowrap overflow-hidden bg-black text-white py-4 border-y-4 border-white">
                <div className="animate-[scroll_15s_linear_infinite_reverse] inline-block text-6xl font-black uppercase">
                    Pour se concentrer • S'inspirer • Librement • Available Now •&nbsp;
                </div>
                <div className="animate-[scroll_15s_linear_infinite_reverse] inline-block text-6xl font-black uppercase" aria-hidden="true">
                    Pour se concentrer • S'inspirer • Librement • Available Now •&nbsp;
                </div>
            </div>
        </div>

        <button onClick={onExplore} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white text-black py-3 px-8 rounded-full font-bold uppercase hover:scale-110 transition-transform shadow-xl">
            Shop Now
        </button>
    </section>
);

// 184. RECEIPT
const V184: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#ddd] text-black snap-start flex items-center justify-center">
        <div className="bg-white w-[300px] p-6 shadow-2xl skew-y-1 relative" onClick={onExplore}>
            {/* Zigzag top/bottom (simplified with dotted border) */}
            <div className="text-center font-mono text-sm leading-relaxed pb-8 border-b-2 border-dashed border-gray-300">
                <h2 className="text-xl font-bold uppercase mb-4">Infinite Mood</h2>
                <p>Paris, France</p>
                <p>{new Date().toLocaleDateString()}</p>
                <p className="mb-4">Order #90210</p>

                <div className="flex justify-between font-bold border-b border-black pb-2 mb-2">
                    <span>ITEM</span>
                    <span>PRICE</span>
                </div>

                <div className="flex justify-between mb-1">
                    <span className="text-left">UNE MUSIQUE<br />COMPOSÉE</span>
                    <span>---</span>
                </div>
                <div className="flex justify-between mb-4 text-gray-500">
                    <span className="text-[10px] pl-2">* NO AI INCLUDED</span>
                </div>

                <div className="flex justify-between mb-1">
                    <span className="text-left">ET PAS<br />GÉNÉRÉE</span>
                    <span>---</span>
                </div>

                <div className="border-t-2 border-black border-dashed my-4 pt-2 flex justify-between font-bold text-lg">
                    <span>TOTAL</span>
                    <span>FREE</span>
                </div>

                <p className="mt-8 text-xs uppercase">Thank you for listening</p>
                <p className="mt-2 text-[10px] uppercase">Barcode: ||| || ||| |</p>
            </div>
        </div>
    </section>
);

// 185. CATALOG
const V185: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full h-full max-w-6xl">
            <div className="bg-gray-100 flex items-center justify-center relative group overflow-hidden cursor-pointer" onClick={onExplore}>
                <span className="absolute top-2 left-2 text-xs font-bold bg-white px-2 py-1">NEW</span>
                <img src={diorama} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                <div className="absolute bottom-0 inset-x-0 bg-white p-2">
                    <h3 className="font-bold text-sm truncate">Une Musique Composée.</h3>
                </div>
            </div>

            <div className="bg-gray-100 flex items-center justify-center p-8 text-center border-4 border-black">
                <h1 className="text-4xl font-black uppercase">Sale</h1>
                <p className="font-serif italic bg-yellow-200 inline-block px-1">No AI</p>
            </div>

            <div className="bg-gray-100 flex items-center justify-center relative group cursor-pointer" onClick={onExplore}>
                <img src={islandScene} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="bg-black text-white px-4 py-2 font-bold uppercase rotate-[-10deg]">Et Pas Générée</h3>
                </div>
            </div>

            {/* More grid items could act as filler or variations */}
            <div className="col-span-2 bg-[#f0f0f0] flex items-center justify-center p-12 text-center">
                <h2 className="text-2xl font-serif">"Pour se concentrer. S'inspirer. Librement."</h2>
                <button className="ml-4 underline font-bold" onClick={onExplore}>View Lookbook</button>
            </div>
        </div>
    </section>
);

// 186. LOOKBOOK
const V186: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e8e6e1] text-black snap-start flex items-center justify-center">
        <div className="w-[80vw] h-[80vh] flex shadow-2xl bg-white">
            {/* Left Page */}
            <div className="flex-1 p-12 flex flex-col justify-between border-r border-[#e8e6e1]">
                <div className="text-xs font-mono">PAGE 01</div>
                <h1 className="text-6xl font-serif leading-none text-red-700 mix-blend-multiply">Une<br />Musique<br />Composée.</h1>
                <p className="font-mono text-xs max-w-[150px]">
                    Photography by Human.<br />
                    Music by Human.<br />
                    Code by AI.
                </p>
            </div>
            {/* Right Page */}
            <div className="flex-1 relative">
                <img src={cristal} className="w-full h-full object-cover" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2">
                    <h2 className="font-bold uppercase tracking-widest text-sm">Et Pas Générée</h2>
                </div>
                <button onClick={onExplore} className="absolute bottom-8 right-8 text-xs font-bold border-b border-black">NEXT PAGE</button>
            </div>
        </div>
    </section>
);

// 187. SALE TAG
const V187: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-yellow-300 text-red-600 snap-start flex items-center justify-center overflow-hidden">
        {/* Repeating background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjIwIiBmaWxsPSJyZWQiIG9wYWNpdHk9IjAuMSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0FMRTwvdGV4dD48L3N2Zz4=')] opacity-20" />

        <div className="relative z-10 w-96 h-96 rounded-full bg-red-600 text-white flex flex-col items-center justify-center p-8 text-center animate-bounce shadow-2xl border-4 border-white border-dashed transform rotate-12 cursor-pointer" onClick={onExplore}>
            <h1 className="text-6xl font-black uppercase leading-none mb-2">100%</h1>
            <h2 className="text-2xl font-bold uppercase mb-4">Human</h2>
            <p className="text-yellow-300 font-bold text-xl bg-black px-2 -rotate-2">ET PAS GÉNÉRÉE</p>
            <p className="mt-6 text-xs uppercase opacity-80">Limited Time Only</p>
        </div>
    </section>
);

// 188. SIZE GUIDE
const V188: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center font-sans">
        <div className="max-w-2xl w-full">
            <h1 className="text-4xl font-bold mb-8 text-center">Size Guide</h1>

            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b-2 border-black">
                        <th className="py-4 font-bold uppercase">Metric</th>
                        <th className="py-4 font-bold uppercase">Value</th>
                        <th className="py-4 font-bold uppercase">Tolerance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200">
                        <td className="py-4 font-medium">Composition</td>
                        <td className="py-4 font-mono text-blue-600">Une Musique Composée</td>
                        <td className="py-4 text-gray-500">Exact</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="py-4 font-medium">Generation</td>
                        <td className="py-4 font-mono text-red-600">Et Pas Générée</td>
                        <td className="py-4 text-gray-500">0%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="py-4 font-medium">Usage</td>
                        <td className="py-4">Pour se concentrer</td>
                        <td className="py-4 text-gray-500">Unlimited</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-8 text-center">
                <button onClick={onExplore} className="underline uppercase font-bold text-sm">Find my Fit</button>
            </div>
        </div>
    </section>
);

// 189. REVIEW
const V189: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center">
        <div className="w-[400px] border border-gray-200 p-8 rounded-lg shadow-lg">
            <div className="flex gap-1 mb-4 text-yellow-400 text-2xl">
                ★ ★ ★ ★ ★
            </div>

            <h2 className="text-xl font-bold mb-2">"Absolutely Stunning"</h2>
            <p className="text-gray-600 italic mb-6">
                "Une Musique Composée. Et Pas Générée. It completely changed how I work. Highly recommended."
            </p>

            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                    <p className="font-bold text-sm">Verified Buyer</p>
                    <p className="text-xs text-gray-500">Purchased 2 minutes ago</p>
                </div>
            </div>

            <button onClick={onExplore} className="mt-8 w-full border border-black py-2 font-bold uppercase hover:bg-black hover:text-white transition-colors">
                Read More Reviews
            </button>
        </div>
    </section>
);

// 190. DROP
const V190: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white mb-8">
            DROP 01
        </h1>

        <div className="flex gap-4 font-mono text-4xl mb-12">
            <div className="flex flex-col"><span>00</span><span className="text-xs text-gray-500">DAYS</span></div>
            <span>:</span>
            <div className="flex flex-col"><span>00</span><span className="text-xs text-gray-500">HOURS</span></div>
            <span>:</span>
            <div className="flex flex-col"><span>00</span><span className="text-xs text-gray-500">MINS</span></div>
        </div>

        <div className="max-w-xl mx-auto border border-white/20 p-8 mb-8">
            <p className="text-2xl font-bold mb-2">Una Musique Composée.</p>
            <p className="text-gray-400 uppercase">Et Pas Générée.</p>
        </div>

        <button onClick={onExplore} className="bg-white text-black px-12 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors animate-pulse">
            Enter Raffle
        </button>
    </section>
);

// 191. CHECKOUT
const V191: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f9fafb] text-gray-900 snap-start flex items-center justify-center font-sans">
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row h-[500px]">
            <div className="flex-1 bg-gray-50 p-8 flex flex-col justify-center border-r border-gray-100">
                <h1 className="text-2xl font-bold mb-8">Order Summary</h1>
                <div className="flex gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-md" />
                    <div>
                        <p className="font-bold">Une Musique Composée.</p>
                        <p className="text-sm text-gray-500">Et Pas Générée.</p>
                    </div>
                    <span className="ml-auto font-medium">Free</span>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-4 flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>$0.00</span>
                </div>
            </div>

            <div className="flex-1 p-8 flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-6">Payment Details</h2>
                <div className="space-y-4">
                    <div className="border border-gray-300 rounded p-3 text-sm text-gray-400">Card number</div>
                    <div className="flex gap-4">
                        <div className="border border-gray-300 rounded p-3 text-sm text-gray-400 flex-1">MM / YY</div>
                        <div className="border border-gray-300 rounded p-3 text-sm text-gray-400 flex-1">CVC</div>
                    </div>
                </div>
                <button onClick={onExplore} className="mt-8 w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition-colors">
                    Pay Now
                </button>
            </div>
        </div>
    </section>
);

// ============================================================================
// SERIES T: "DESIGN SYSTEMS" (Figma/Pantone/Swiss) (192-201)
// ============================================================================

// 192. COLOR SWATCH
const V192: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center p-8">
        <div className="bg-white shadow-2xl w-[300px] h-[450px] transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 cursor-pointer p-4 pb-12 flex flex-col" onClick={onExplore}>
            <div className="bg-[#ff4757] flex-1 mb-4" />
            <h1 className="font-bold text-2xl mb-1">PANTONE®</h1>
            <p className="font-bold">18-1664 TCX</p>
            <p className="text-sm text-gray-500 mb-4">Une Musique Composée</p>
            <p className="text-xs uppercase font-bold text-gray-400">Et Pas Générée</p>
        </div>
    </section>
);

// 193. TYPOGRAPHY SCALE
const V193: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-rows-[repeat(20,1fr)] opacity-10 pointer-events-none">
            {[...Array(20)].map((_, i) => <div key={i} className="border-b border-blue-200" />)}
        </div>

        <div className="relative z-10 text-center">
            <p className="text-xs text-blue-500 font-mono mb-4">Display 2XL • 128px • Bold</p>
            <h1 className="text-8xl font-bold mb-8">Aa</h1>
            <p className="text-sm text-gray-500 font-mono mb-2">H1 • 48px • Semibold</p>
            <h2 className="text-5xl font-semibold mb-8">Une Musique Composée.</h2>
            <p className="text-sm text-gray-500 font-mono mb-2">H2 • 32px • Medium</p>
            <h3 className="text-3xl font-medium mb-12">Et Pas Générée.</h3>

            <button onClick={onExplore} className="px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition-colors uppercase text-sm font-bold">
                View Spec
            </button>
        </div>
    </section>
);

// 194. GRID GUIDE
const V194: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center">
        {/* Grid Overlay */}
        <div className="absolute inset-0 max-w-6xl mx-auto grid grid-cols-12 gap-4 px-4 pointer-events-none z-0 opacity-20">
            {[...Array(12)].map((_, i) => <div key={i} className="bg-red-500 h-full" />)}
        </div>

        <div className="relative z-10 grid grid-cols-12 gap-4 max-w-6xl w-full px-4">
            <div className="col-span-8 bg-gray-100 p-12 border border-red-200 relative">
                <span className="absolute top-0 left-0 text-[10px] text-red-500 bg-white px-1">Col-8</span>
                <h1 className="text-6xl font-black uppercase tracking-tighter">Une Musique<br />Composée.</h1>
            </div>
            <div className="col-span-4 bg-gray-900 text-white p-12 flex items-center justify-center border border-red-200 relative" onClick={onExplore}>
                <span className="absolute top-0 left-0 text-[10px] text-red-500 bg-white px-1">Col-4</span>
                <h2 className="text-2xl font-bold uppercase text-center">Et Pas<br />GÉNÉRÉE</h2>
            </div>
        </div>
    </section>
);

// 195. COMPONENT LIBRARY
const V195: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f5f5f5] text-[#333] snap-start flex items-center justify-center font-sans">
        <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-200 max-w-4xl w-full">
            <h2 className="text-xl font-bold mb-8 pb-4 border-b border-gray-100">Components / Buttons</h2>

            <div className="grid grid-cols-3 gap-12">
                <div className="space-y-4">
                    <p className="text-xs text-gray-400 uppercase font-bold">Primary / Default</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-sm">
                        Une Musique
                    </button>
                </div>
                <div className="space-y-4">
                    <p className="text-xs text-gray-400 uppercase font-bold">Primary / Hover</p>
                    <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md">
                        Composée.
                    </button>
                </div>
                <div className="space-y-4">
                    <p className="text-xs text-gray-400 uppercase font-bold">Primary / Disabled</p>
                    <button className="bg-gray-200 text-gray-400 px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                        Générée
                    </button>
                </div>

                <div className="col-span-3 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <div>
                        <p className="font-bold text-lg">Interaction State</p>
                        <p className="text-gray-500">Pour se concentrer. S'inspirer. Librement.</p>
                    </div>
                    <button onClick={onExplore} className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                        Initialize
                    </button>
                </div>
            </div>
        </div>
    </section>
);

// 196. LOREM IPSUM
const V196: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-gray-300 snap-start flex items-center justify-center p-8 overflow-hidden font-serif">
        <div className="max-w-4xl text-justify leading-relaxed text-sm md:text-base select-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span className="text-black font-bold text-4xl mx-2 bg-yellow-100 px-2 cursor-pointer hover:bg-yellow-200 transition-colors" onClick={onExplore}>Une Musique Composée.</span> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. <span className="text-black font-bold text-4xl mx-2 bg-yellow-100 px-2">Et Pas Générée.</span> Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </div>
    </section>
);

// 197. LAYERS PANEL
const V197: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#2c2c2c] text-[#f0f0f0] snap-start flex items-center justify-center overflow-hidden">
        <div className="w-[300px] bg-[#1e1e1e] border-r border-[#333] absolute left-0 top-0 bottom-0 p-2 flex flex-col font-sans text-xs select-none">
            <div className="px-2 py-3 font-bold border-b border-[#333] mb-2 flex justify-between">
                <span>Layers</span>
                <span className="text-gray-500">Assets</span>
            </div>

            <div className="flex items-center gap-2 px-2 py-1 bg-[#3794ff] text-white rounded mb-1">
                <span className="opacity-70">▼</span>
                <span className="opacity-70">📂</span>
                <span>Hero Section</span>
            </div>

            <div className="pl-6 flex flex-col gap-1">
                <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#333] rounded">
                    <span className="opacity-70">T</span>
                    <span>Title: Une Musique...</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#333] rounded">
                    <span className="opacity-70">T</span>
                    <span>Subtitle: Et Pas...</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#333] rounded">
                    <span className="opacity-70">#</span>
                    <span>Background</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#333] rounded cursor-pointer text-blue-300" onClick={onExplore}>
                    <span className="opacity-70">[]</span>
                    <span>Button: Explore</span>
                </div>
            </div>
        </div>

        <div className="ml-[300px] flex-1 flex items-center justify-center">
            <div className="border-2 border-blue-500 p-12 relative">
                <div className="absolute top-[-10px] left-[-10px] w-2 h-2 border border-blue-500 bg-white" />
                <div className="absolute top-[-10px] right-[-10px] w-2 h-2 border border-blue-500 bg-white" />
                <div className="absolute bottom-[-10px] left-[-10px] w-2 h-2 border border-blue-500 bg-white" />
                <div className="absolute bottom-[-10px] right-[-10px] w-2 h-2 border border-blue-500 bg-white" />
                <h1 className="text-6xl font-bold">Une Musique Composée.</h1>
                <span className="absolute top-[-25px] left-0 text-xs bg-blue-500 px-1 text-white">Hero Title</span>
            </div>
        </div>
    </section>
);

// 198. PIXEL PERFECT
const V198: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center overflow-hidden">
        {/* Pixel Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="relative z-10 text-center">
            <h1 className="text-9xl font-black tracking-tighter" style={{ imageRendering: 'pixelated' }}>
                PIXEL
            </h1>
            <h2 className="text-xl font-mono mt-4 bg-black text-white inline-block px-2">PERFECT AUDIO</h2>

            <div className="mt-12 flex justify-center gap-8">
                <div className="text-center">
                    <div className="w-4 h-4 bg-black mx-auto mb-2" />
                    <p className="text-[10px] uppercase font-bold">Une Musique</p>
                </div>
                <div className="text-center">
                    <div className="w-4 h-4 bg-gray-300 mx-auto mb-2 cursor-not-allowed" />
                    <p className="text-[10px] uppercase font-bold text-gray-400 line-through">Générée</p>
                </div>
            </div>

            <button onClick={onExplore} className="mt-16 border-2 border-black px-8 py-3 font-bold uppercase hover:bg-black hover:text-white transition-colors">
                Render
            </button>
        </div>
    </section>
);

// 199. A/B TEST
const V199: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex font-sans">
        {/* Variant A */}
        <div className="flex-1 bg-white flex flex-col items-center justify-center border-r-2 border-dashed border-gray-300 relative group">
            <div className="absolute top-4 left-4 bg-gray-200 text-gray-600 px-2 py-1 text-xs font-bold rounded">VARIANT A</div>
            <h1 className="text-5xl font-serif font-bold mb-4 text-center">Une Musique<br />Composée.</h1>
            <button className="bg-black text-white px-8 py-3 rounded-full mt-8 opacity-50 cursor-not-allowed">Test Control</button>
        </div>

        {/* Variant B */}
        <div className="flex-1 bg-[#f0f9ff] flex flex-col items-center justify-center relative cursor-pointer hover:bg-blue-50 transition-colors" onClick={onExplore}>
            <div className="absolute top-4 right-4 bg-green-100 text-green-700 px-2 py-1 text-xs font-bold rounded flex items-center gap-1">
                <span>VARIANT B</span>
                <span className="text-[10px] bg-green-500 text-white px-1 rounded">+42% Conv.</span>
            </div>
            <h1 className="text-5xl font-sans font-black uppercase tracking-tighter mb-4 text-center text-blue-600">Et Pas<br />Générée.</h1>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg mt-8 font-bold shadow-lg hover:bg-blue-700 transition-colors">
                Start Experience
            </button>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg px-3 py-1 rounded-full text-xs font-bold text-gray-400 z-10">
            VS
        </div>
    </section>
);

// 200. MEASUREMENTS
const V200: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1e1e1e] text-white snap-start flex items-center justify-center font-sans select-none">
        <div className="relative group p-12 border border-transparent hover:border-blue-500 transition-colors cursor-default">
            {/* Measurements (appear on hover) */}
            <div className="absolute top-0 inset-x-0 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-[10px] text-red-500 bg-[#1e1e1e] px-1">48px</span>
                <div className="absolute top-2 w-full h-px bg-red-500" />
            </div>
            <div className="absolute left-0 inset-y-0 w-4 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-[10px] text-red-500 bg-[#1e1e1e] py-1 rotate-90">48px</span>
                <div className="absolute left-2 h-full w-px bg-red-500" />
            </div>

            <h1 className="text-7xl font-bold mb-4 relative inline-block">
                Une Musique Composée.
                <div className="absolute -bottom-4 left-0 w-full text-center opacity-0 group-hover:opacity-100">
                    <span className="text-[10px] text-red-500">100% width</span>
                    <div className="w-full h-px bg-red-500" />
                </div>
            </h1>

            <div className="h-8" />

            <h2 className="text-4xl font-light text-gray-400 relative inline-block">
                Et Pas Générée.
                <div className="absolute -right-12 top-0 h-full flex items-center opacity-0 group-hover:opacity-100">
                    <div className="h-full w-px bg-red-500" />
                    <span className="text-[10px] text-red-500 ml-1">24px</span>
                </div>
            </h2>

            <button onClick={onExplore} className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 text-xs text-blue-400 border border-blue-400 px-4 py-1 rounded opacity-0 group-hover:opacity-100 hover:bg-blue-400 hover:text-white transition-all">
                Inspect Props
            </button>
        </div>
    </section>
);
// 201. THE FINAL
const V201: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center">
        <div className="relative">
            <img src={diorama} className="w-[600px] opacity-40 mix-blend-screen" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-6xl font-bold mb-2 tracking-tight">Une Musique Composée.</h1>
                <h2 className="text-2xl text-gray-400 mb-8 font-light">Et Pas Générée.</h2>

                <div className="flex gap-4 mb-12">
                    <span className="text-xs border border-white/20 px-2 py-1 rounded text-gray-500">FINAL_v3.jpg</span>
                    <span className="text-xs border border-white/20 px-2 py-1 rounded text-gray-500">APPROVED</span>
                </div>

                <button onClick={onExplore} className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                    View Project
                </button>
            </div>
        </div>
    </section>
);

// 202. THE SLIDER (Slide to Unlock style)
const V202: React.FC<HeroProps> = ({ onExplore }) => {
    const [sliderValue, setSliderValue] = React.useState(0);

    // Simulate slide effect on hover/click for the gallery preview
    const handleInteraction = () => {
        // Animate value to 100
        let val = 0;
        const interval = setInterval(() => {
            val += 2;
            setSliderValue(val);
            if (val >= 100) {
                clearInterval(interval);
                setTimeout(onExplore, 300);
            }
        }, 10);
    };

    return (
        <section className="relative w-full h-screen bg-[#f2f2f7] text-black snap-start flex items-center justify-center font-sans">
            <div className="flex flex-col items-center gap-12 w-full max-w-md px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-2 text-[#1c1c1e]">Une Musique Composée.</h1>
                    <p className="text-[#8e8e93]">Et Pas Générée.</p>
                </div>

                <div
                    className="relative w-full h-16 bg-white rounded-full shadow-sm border border-[#e5e5ea] flex items-center px-2 cursor-pointer overflow-hidden group"
                    onClick={handleInteraction}
                >
                    {/* Track Fill */}
                    <div
                        className="absolute left-0 top-0 bottom-0 bg-[#34c759] transition-all duration-75"
                        style={{ width: `${sliderValue}%` }}
                    />

                    {/* Text Shimmer */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none mix-blend-difference text-white/50">
                        <span className="font-medium tracking-wide animate-pulse">slide to listen</span>
                    </div>

                    {/* Handle */}
                    <div
                        className="w-12 h-12 bg-white rounded-full shadow-md z-20 flex items-center justify-center transform transition-all duration-75"
                        style={{ marginLeft: `calc(${sliderValue}% - ${sliderValue * 0.48}px)` }} // simple offset correction
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>
                </div>

                <p className="text-xs uppercase text-[#aeaeb2] tracking-widest font-bold">Swipe to unlock experience</p>
            </div>
        </section>
    );
};

// 203. THE MINIMIZED PLAYER (App aesthetic)
const V203: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-50 text-black snap-start flex flex-col items-center justify-center font-sans">

        {/* Main Content Area (Blurred/Passive) */}
        <div className="flex-1 flex flex-col items-center justify-center opacity-50 scale-95 blur-[2px] transition-all duration-700 hover:blur-none hover:opacity-100 hover:scale-100">
            <div className="w-64 h-64 bg-gray-200 rounded-2xl shadow-xl mb-8 flex items-center justify-center">
                <span className="text-6xl">🎵</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">Une Musique Composée.</h1>
            <p className="text-gray-500">Et Pas Générée.</p>
        </div>

        {/* The Interaction: Minimized Player Pill */}
        <div className="mb-12 w-full max-w-sm px-4">
            <div
                className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-3 flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300 ring-1 ring-black/5"
                onClick={onExplore}
            >
                {/* Album Art / Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-inner flex-shrink-0" />

                {/* Marquee Text Info */}
                <div className="flex-1 overflow-hidden">
                    <p className="font-bold text-sm truncate">Une Musique Composée.</p>
                    <p className="text-xs text-gray-500 truncate">Tap to expand player</p>
                </div>

                {/* Audio Visualizer (Animated) */}
                <div className="flex gap-1 items-end h-4 mr-2">
                    <div className="w-1 bg-green-500 rounded-full animate-[bounce_1s_infinite] h-[60%]" style={{ animationDelay: '0ms' }} />
                    <div className="w-1 bg-green-500 rounded-full animate-[bounce_1s_infinite] h-[100%]" style={{ animationDelay: '200ms' }} />
                    <div className="w-1 bg-green-500 rounded-full animate-[bounce_1s_infinite] h-[40%]" style={{ animationDelay: '400ms' }} />
                </div>
            </div>
        </div>
    </section>
);

// 204. THE FREQUENCY (Abstract String/Wave)
const V204: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-[#111] text-white snap-start flex items-center justify-center font-sans overflow-hidden">
            <div className="flex flex-col items-center gap-16 w-full max-w-2xl px-8 z-10">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white/90">Une Musique Composée.</h1>
                    <p className="text-white/50 font-mono text-sm">Et Pas Générée.</p>
                </div>

                {/* The Interactive frequency line */}
                <div
                    className="group relative w-full h-32 flex items-center justify-center cursor-pointer"
                    onClick={onExplore}
                >
                    {/* Base Line */}
                    <div className="absolute w-full h-px bg-white/20 group-hover:opacity-0 transition-opacity duration-300" />

                    {/* Hover Waveform (CSS Animated) */}
                    <div className="flex items-center justify-center gap-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                        {[...Array(40)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-[pulse_0.5s_ease-in-out_infinite]"
                                style={{
                                    height: `${Math.max(10, Math.random() * 100)}%`,
                                    animationDelay: `${i * 0.05}s`,
                                    animationDuration: `${0.5 + Math.random() * 0.5}s`
                                }}
                            />
                        ))}
                    </div>

                    {/* Interaction Hint */}
                    <div className="absolute -bottom-8 text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/80 transition-colors">
                        Click to resonate
                    </div>
                </div>
            </div>

            {/* Background ambiance */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none" />
        </section>
    );
};

// 205. THE BIG 3D BUTTON (Tactile)
const V205: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-[#f2f2f7] text-black snap-start flex items-center justify-center font-sans">
            <div className="flex flex-col items-center gap-12 w-full max-w-md px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-2 text-[#1c1c1e]">Une Musique Composée.</h1>
                    <p className="text-[#8e8e93]">Et Pas Générée.</p>
                </div>

                <button
                    onClick={onExplore}
                    className="group relative inline-block focus:outline-none"
                >
                    {/* Shadow Layer */}
                    <span className="absolute inset-0 translate-y-[8px] bg-[#2d8a4e] rounded-2xl group-active:translate-y-[2px] transition-transform duration-100 ease-in-out" />

                    {/* Button Surface */}
                    <span className="relative block px-12 py-4 bg-[#34c759] rounded-2xl border-2 border-[#2d8a4e] text-white font-bold text-xl tracking-wide shadow-xl -translate-y-[8px] group-hover:-translate-y-[10px] group-active:-translate-y-[2px] transition-all duration-100 ease-in-out flex items-center gap-3">
                        <span>START EXPERIENCING</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </button>

                <p className="text-xs uppercase text-[#aeaeb2] tracking-widest font-bold mt-4">Press to start</p>
            </div>
        </section>
    );
};

// 206. THE CLICK WHEEL (The Iconic Music Player)
const V206: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center font-sans">
            <div className="flex flex-col items-center gap-16 w-full max-w-md px-8">
                <div className="text-center space-y-1">
                    <h1 className="text-2xl font-semibold text-[#333]">Une Musique Composée.</h1>
                    <p className="text-[#888] text-sm">Et Pas Générée.</p>
                </div>

                {/* The Iconic Wheel */}
                <div className="relative w-64 h-64 rounded-full bg-[#f2f2f2] shadow-sm border border-[#e6e6e6] flex items-center justify-center cursor-pointer group select-none hover:shadow-md transition-shadow">

                    {/* Wheel Labels */}
                    <div className="absolute top-4 text-[10px] font-bold text-[#b3b3b3] tracking-widest uppercase">Menu</div>
                    <div className="absolute bottom-4 text-[18px] text-[#b3b3b3] flex items-center justify-center">
                        <span className="text-[10px] mr-1">▶</span> <span className="text-[10px]">||</span>
                    </div>
                    <div className="absolute left-4 text-[14px] text-[#b3b3b3] font-bold">|◀◀</div>
                    <div className="absolute right-4 text-[14px] text-[#b3b3b3] font-bold">▶▶|</div>

                    {/* Center Button */}
                    <button
                        onClick={onExplore}
                        className="relative w-24 h-24 rounded-full bg-white shadow-inner border border-[#e6e6e6] active:bg-[#f0f0f0] active:scale-95 transition-all flex items-center justify-center z-10"
                    >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-black font-medium">SELECT</span>
                    </button>

                    {/* Hover Overlay Hint (subtle) */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-black/5 transition-colors pointer-events-none" />
                </div>

                <p className="text-[10px] text-[#ccc] font-mono">SCROLL TO BROWSE • CLICK TO SELECT</p>
            </div>
        </section>
    );
};

// 207. THE SENTINEL (New Iconic Abstract)
const V207: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-[#0a0a0a] text-white snap-start flex items-center justify-center font-sans overflow-hidden">
            <div className="flex flex-col items-center gap-20 w-full max-w-md px-8 z-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-light tracking-tight mix-blend-difference">Une Musique Composée.</h1>
                    <p className="text-white/40 text-sm font-medium tracking-widest uppercase">Et Pas Générée.</p>
                </div>

                {/* The Sentinel Component */}
                <div
                    className="relative w-20 h-64 cursor-pointer group perspective-[1000px]"
                    onClick={onExplore}
                >
                    {/* Outer Glass Shell */}
                    <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_80px_-5px_rgba(255,255,255,0.2)] transition-all duration-500 overflow-hidden">

                        {/* Inner Core (The "Soul") */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-32 bg-gradient-to-bx from-transparent via-white/80 to-transparent opacity-50 blur-xl group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-[pulse_4s_ease-in-out_infinite]" />

                        {/* Standing Wave (Abstract Music) */}
                        <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-center gap-1 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-[2px] bg-white rounded-full animate-[bounce_2s_infinite]"
                                    style={{
                                        height: '40%',
                                        animationDelay: `${i * 0.2}s`,
                                        opacity: 1 - Math.abs(i - 2) * 0.3
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Reflection/Shine */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* "Activate" Ring */}
                    <div className="absolute -inset-4 border border-white/0 rounded-full group-hover:border-white/20 scale-90 group-hover:scale-100 transition-all duration-500 delay-75" />
                </div>

                <div className="h-4 flex items-center justify-center overflow-hidden">
                    <p className="text-[10px] tracking-[0.3em] text-white/30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 uppercase">
                        Initialize
                    </p>
                </div>
            </div>

            {/* Atmosphere */}
            {/* Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
        </section>
    );
};

// 208. THE HALO (Divine Circle)
const V208: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#050505] text-white snap-start flex items-center justify-center font-sans overflow-hidden">
        <div className="flex flex-col items-center gap-16 z-10 w-full max-w-2xl px-8">
            <h1 className="text-3xl font-light tracking-widest uppercase opacity-80">Une Musique Composée.</h1>

            {/* The Halo */}
            <div
                className="relative w-48 h-48 cursor-pointer group"
                onClick={onExplore}
            >
                {/* The Ring */}
                <div className="absolute inset-0 rounded-full border-[1px] border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] group-hover:border-white/80 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" />

                {/* Eclipse effect */}
                <div className="absolute inset-[2px] rounded-full bg-black z-10" />

                {/* Corona/Glow behind */}
                <div className="absolute -inset-4 rounded-full bg-white blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Center text */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <span className="text-xs tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Enter</span>
                </div>
            </div>

            <p className="text-xs text-white/30 tracking-widest uppercase">Et Pas Générée.</p>
        </div>
    </section>
);

// 209. THE PRISM (Refracting Light)
const V209: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#eeb] text-black snap-start flex items-center justify-center font-serif overflow-hidden">
        <div className="flex flex-col items-center gap-12 z-10 w-full max-w-2xl px-8 text-[#222]">
            <div className="text-center">
                <h1 className="text-5xl italic font-light mb-2">Une Musique Composée.</h1>
                <p className="text-sm font-sans uppercase tracking-widest text-black/50">Et Pas Générée.</p>
            </div>

            {/* The Prism Object */}
            <div
                className="relative w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-black/10 cursor-pointer group hover:scale-110 transition-transform duration-500"
                onClick={onExplore}
            >
                {/* Inner Glow */}
                <div className="absolute top-[30px] -left-[30px] w-[60px] h-[40px] bg-gradient-to-t from-black/5 to-transparent blur-md group-hover:opacity-0 transition-opacity" />

                {/* Spectral Bloom on Hover */}
                <div className="absolute -top-[20px] -left-[80px] w-[160px] h-[100px] bg-gradient-to-r from-red-500 via-green-500 to-blue-500 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay" />

                <div className="absolute top-[120px] left-[-60px] w-[120px] text-center text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Disperse
                </div>
            </div>
        </div>
    </section>
);

// 210. THE VOID (Absorbing Presence)
const V210: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#aaa] text-black snap-start flex items-center justify-center font-sans overflow-hidden">
        <div className="flex flex-col items-center gap-16 z-10 w-full max-w-2xl px-8">
            <h1 className="text-4xl font-bold tracking-tighter text-[#111]">Une Musique Composée.</h1>

            {/* The Void */}
            <div
                className="relative w-32 h-32 rounded-full bg-black cursor-none group transition-all duration-300 hover:scale-125 hover:rotate-180"
                onClick={onExplore}
            >
                {/* Event Horizon */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-2 rounded-full border border-white/10 animate-[spin_5s_linear_infinite_reverse]" />

                {/* Singularity Text */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    INIT()
                </div>
            </div>

            <p className="text-sm font-medium text-[#111]">Et Pas Générée.</p>
        </div>
    </section>
);

// 211. THE FLUX (Living Energy)
const V211: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1a0b2e] text-white snap-start flex items-center justify-center font-sans overflow-hidden">
        <div className="flex flex-col items-center gap-20 z-10 w-full max-w-2xl px-8">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-thin tracking-tight text-white">Une Musique Composée.</h1>
            </div>

            {/* The Flux Container */}
            <div
                className="relative w-64 h-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center px-6 cursor-pointer group overflow-hidden"
                onClick={onExplore}
            >
                <div className="flex-1 flex items-center gap-1 h-full opacity-50 group-hover:opacity-100 transition-opacity">
                    {/* Generative Bars */}
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1.5 bg-gradient-to-t from-pink-500 to-violet-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]"
                            style={{
                                height: '20%',
                                animationDelay: `${i * 0.1}s`, // Staggered
                                animationDuration: `${0.5 + Math.random()}s`
                            }}
                        />
                    ))}
                </div>

                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
            </div>

            <p className="text-xs text-white/50 tracking-[0.5em] uppercase">Et Pas Générée.</p>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/20 blur-[100px] rounded-full pointer-events-none" />
    </section>
);

// 212. THE ARTIFACT (Constructed Geometry)
const V212: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f0f0f0] text-black snap-start flex items-center justify-center font-mono overflow-hidden">
        <div className="flex flex-col items-center gap-12 z-10 w-full max-w-2xl px-8">
            <h1 className="text-2xl font-bold uppercase tracking-tighter">Une Musique Composée.</h1>

            {/* The Artifact */}
            <div
                className="relative w-40 h-40 flex items-center justify-center cursor-pointer group"
                onClick={onExplore}
            >
                {/* Rotating Squares */}
                <div className="absolute w-24 h-24 border-2 border-black/80 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-[135deg] group-hover:scale-110" />
                <div className="absolute w-24 h-24 border-2 border-black/40 rotate-45 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-[225deg] group-hover:scale-90" />
                <div className="absolute w-12 h-12 bg-black transition-all duration-500 group-hover:w-4 group-hover:h-4" />

                {/* Hover Lines */}
                <div className="absolute w-full h-px bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100" />
                <div className="absolute h-full w-px bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-100" />
            </div>

            <p className="text-xs text-black/50 uppercase tracking-widest">Et Pas Générée.</p>
        </div>
    </section>
);

// 213. THE INFINITY (Morphing Circle)
const V213: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-[#bfbfbf] text-black snap-start flex items-center justify-center font-sans overflow-hidden">
            <div className="flex flex-col items-center gap-16 z-10 w-full max-w-2xl px-8">
                <h1 className="text-4xl font-bold tracking-tighter text-[#111]">Une Musique Composée.</h1>

                {/* The Infinity Morph */}
                <div
                    className="relative w-32 h-32 flex items-center justify-center cursor-pointer group"
                    onClick={onExplore}
                >
                    {/* The Circle (Default State) */}
                    <div className="absolute w-24 h-24 bg-black rounded-full transition-all duration-500 ease-in-out group-hover:scale-0 group-hover:opacity-0" />

                    {/* The Infinity (Hover State) */}
                    <svg
                        viewBox="0 0 100 50"
                        className="w-32 h-16 absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    >
                        {/* Static Track */}
                        <path
                            d="M25,25 C25,38.8 13.8,50 0,50 C-13.8,50 -25,38.8 -25,25 C-25,11.2 -13.8,0 0,0 C13.8,0 25,11.2 25,25 Z"
                            className="hidden" // Reference for curve
                        />
                        <path
                            d="M50,25 C50,40 30,40 30,25 C30,10 50,10 50,25 C50,40 70,40 70,25 C70,10 50,10 50,25"
                            className="hidden" // Simpler reference
                        />

                        {/* The Infinity Path */}
                        <path
                            d="M50,25 C50,10 32,10 32,25 C32,38 50,38 50,25 C50,10 68,10 68,25 C68,38 50,38 50,25 Z"
                            fill="none"
                            stroke="black"
                            strokeWidth="8"
                            strokeLinecap="round"
                            className="origin-center"
                        />

                        {/* Animated Tracer */}
                        <path
                            d="M50,25 C50,10 32,10 32,25 C32,38 50,38 50,25 C50,10 68,10 68,25 C68,38 50,38 50,25 Z"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="120"
                            strokeDashoffset="120"
                            className="group-hover:animate-[dash_2s_linear_infinite]"
                        />
                    </svg>

                    {/* Glow */}
                    <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                </div>

                <p className="text-sm font-medium text-[#111]">Et Pas Générée.</p>

                <style>{`
                    @keyframes dash {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

// 214. THE INFINITY II (With Text)
const V214: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-[#bfbfbf] text-black snap-start flex items-center justify-center font-sans overflow-hidden">
            <div className="flex flex-col items-center gap-12 z-10 w-full max-w-2xl px-8">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter text-[#111]">Une Musique Composée.</h1>
                    <p className="text-sm font-medium text-[#111]/60">Et Pas Générée.</p>
                </div>

                {/* The Infinity Morph */}
                <div
                    className="relative w-40 h-40 flex items-center justify-center cursor-pointer group"
                    onClick={onExplore}
                >
                    {/* The Circle (Default State) */}
                    <div className="absolute w-24 h-24 bg-primitive-saffron-deep rounded-full transition-all duration-500 ease-in-out group-hover:scale-0 group-hover:opacity-0" />

                    {/* The Infinity (Hover State) */}
                    <svg
                        viewBox="0 0 100 50"
                        className="w-32 h-16 absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    >
                        {/* The Infinity Path */}
                        <path
                            d="M50,25 C50,10 32,10 32,25 C32,38 50,38 50,25 C50,10 68,10 68,25 C68,38 50,38 50,25 Z"
                            fill="none"
                            stroke="black"
                            strokeWidth="8"
                            strokeLinecap="round"
                            className="origin-center"
                        />

                        {/* Animated Tracer */}
                        <path
                            d="M50,25 C50,10 32,10 32,25 C32,38 50,38 50,25 C50,10 68,10 68,25 C68,38 50,38 50,25 Z"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="120"
                            strokeDashoffset="120"
                            className="group-hover:animate-[dash_2s_linear_infinite]"
                        />
                    </svg>

                    <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                </div>

                <p className="text-sm font-normal tracking-wide text-[#111] opacity-60">
                    Pour se concentrer. S'inspirer. Librement.
                </p>

                <style>{`
                    @keyframes dash {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};



// --- SERIES U: MODERN APP/SAAS AESTHETICS (V215-V224) ---

// 215. THE HERO SHOT (Classic SaaS)
const V215: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex flex-col pt-32 items-center font-sans overflow-hidden">
        <div className="flex flex-col items-center gap-8 w-full max-w-4xl px-8 z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#111]">Une Musique Composée.</h1>
            <p className="text-xl md:text-2xl text-gray-500">Et Pas Générée.</p>

            <div className="flex gap-4 mt-4">
                <button
                    onClick={onExplore}
                    className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                    Play
                </button>
                <button className="bg-gray-100 text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                    Learn more
                </button>
            </div>

            <p className="text-sm text-gray-400 mt-2">Pour se concentrer. S'inspirer. Librement.</p>
        </div>

        {/* Mockup */}
        <div className="relative w-full max-w-2xl mt-12 aspect-[16/9] rounded-t-3xl border-t-8 border-x-8 border-gray-900 bg-gray-100 overflow-hidden shadow-2xl">
            <img src={islandScene} className="w-full h-full object-cover" alt="App interface" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </div>
    </section>
);

// 216. THE FEATURE GRID (Bento Box)
const V216: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0f0f11] text-white snap-start flex items-center justify-center font-sans p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 w-full max-w-5xl h-full max-h-[800px]">
            {/* Title Block */}
            <div className="md:col-span-2 md:row-span-1 bg-[#1c1c1e] rounded-3xl p-8 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-2">Une Musique Composée.</h1>
                <p className="text-gray-400">Et Pas Générée.</p>
            </div>

            {/* Mockup Block */}
            <div className="md:col-span-1 md:row-span-2 bg-[#2c2c2e] rounded-3xl overflow-hidden relative group cursor-pointer" onClick={onExplore}>
                <img src={diorama} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Diorama" />
                <div className="absolute bottom-4 left-4 font-mono text-xs bg-black/50 px-2 py-1 rounded backdrop-blur">Featured</div>
            </div>

            {/* Description Block */}
            <div className="md:col-span-1 md:row-span-1 bg-primitive-saffron-deep rounded-3xl p-8 flex items-center justify-center text-center">
                <p className="text-black font-medium">Pour se concentrer. S'inspirer. Librement.</p>
            </div>

            {/* Interaction Block */}
            <div className="md:col-span-1 md:row-span-1 bg-[#1c1c1e] rounded-3xl flex items-center justify-center cursor-pointer hover:bg-[#2c2c2e] transition-colors" onClick={onExplore}>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </div>
            </div>

            {/* Wide Image Block */}
            <div className="md:col-span-3 md:row-span-1 bg-[#1c1c1e] rounded-3xl overflow-hidden relative">
                <img src={cristal} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Crystal" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-2xl font-light tracking-widest uppercase">Atmosphere</h2>
                </div>
            </div>
        </div>
    </section>
);

// 217. THE FLOATING UI (3D Floating)
const V217: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-slate-50 text-slate-900 snap-start flex items-center justify-center font-sans overflow-hidden perspective-[1000px]">
        <div className="z-10 text-center flex flex-col gap-6">
            <h1 className="text-5xl font-extrabold tracking-tight">Une Musique Composée.</h1>
            <p className="text-xl text-slate-500">Et Pas Générée.</p>
            <button
                onClick={onExplore}
                className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1"
            >
                Start Experience
            </button>
            <p className="text-xs text-slate-400">Pour se concentrer. S'inspirer. Librement.</p>
        </div>

        {/* Floating Elements */}
        {/* Left Card */}
        <div className="absolute left-[10%] top-[30%] w-48 h-64 bg-white rounded-xl shadow-2xl p-4 rotate-[-12deg] hover:rotate-[0deg] transition-transform duration-500 z-0">
            <div className="w-full h-32 bg-slate-100 rounded-lg mb-4 overflow-hidden">
                <img src={islandScene} className="w-full h-full object-cover" />
            </div>
            <div className="h-2 w-2/3 bg-slate-200 rounded mb-2" />
            <div className="h-2 w-1/2 bg-slate-200 rounded" />
        </div>

        {/* Right Card */}
        <div className="absolute right-[10%] bottom-[20%] w-64 h-48 bg-white rounded-xl shadow-2xl p-4 rotate-[12deg] hover:rotate-[0deg] transition-transform duration-500 z-0">
            <div className="flex gap-4 items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100" />
                <div className="flex-1">
                    <div className="h-2 w-full bg-slate-200 rounded mb-1" />
                    <div className="h-2 w-2/3 bg-slate-200 rounded" />
                </div>
            </div>
            <div className="w-full h-20 bg-slate-50 rounded-lg overflow-hidden">
                <img src={diorama} className="w-full h-full object-cover opacity-80" />
            </div>
        </div>
    </section>
);

// 218. THE MINIMALIST (Clean White)
const V218: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex flex-col items-center justify-center font-sans p-8">
        <h1 className="text-2xl font-semibold mb-2">Une Musique Composée.</h1>
        <p className="text-gray-500 mb-12">Et Pas Générée.</p>

        {/* Phone Mockup */}
        <div className="relative w-[300px] h-[600px] border-[8px] border-black rounded-[40px] overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-500" onClick={onExplore}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-gray-50 flex flex-col relative">
                <img src={cristal2} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute bottom-10 left-0 right-0 text-center">
                    <p className="text-white/80 text-xs font-medium uppercase tracking-widest backdrop-blur-sm py-2">Pour se concentrer</p>
                </div>
            </div>
        </div>

        <p className="mt-8 text-xs text-gray-400">Pour se concentrer. S'inspirer. Librement.</p>
    </section>
);

// 219. THE DARK MODE SAAS (Glassmorphism)
const V219: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#000] text-white snap-start flex items-center justify-center font-sans overflow-hidden">
        {/* Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/40 rounded-full blur-[120px]" />

        <div className="z-10 text-center max-w-2xl px-8 backdrop-blur-3xl bg-white/5 border border-white/10 p-12 rounded-3xl shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Une Musique Composée.</h1>
            <p className="text-lg text-white/60 mb-8">Et Pas Générée.</p>

            <div
                onClick={onExplore}
                className="group relative w-full h-48 rounded-2xl overflow-hidden cursor-pointer"
            >
                <img src={islandSceneTemp} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent translate-x-1" />
                    </div>
                </div>
            </div>

            <p className="text-xs text-white/30 mt-8 uppercase tracking-widest">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// 220. THE INTERACTIVITY (Expandable Player)
const V220: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f3f4f6] text-black snap-start flex flex-col items-center justify-center font-sans">
        <h1 className="text-3xl font-bold mb-2">Une Musique Composée.</h1>
        <p className="text-gray-500 mb-8">Et Pas Générée.</p>

        {/* Player Mockup */}
        <div
            className="w-[320px] bg-white rounded-2xl shadow-xl p-4 cursor-pointer hover:shadow-2xl transition-all duration-300"
            onClick={onExplore}
        >
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 relative group">
                <img src={diorama} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">Play</span>
                </div>
            </div>
            <div className="space-y-2">
                <div className="h-4 w-3/4 bg-gray-100 rounded" />
                <div className="h-3 w-1/2 bg-gray-100 rounded" />
            </div>
            <div className="mt-6 flex items-center gap-4 text-gray-400">
                <div className="text-xs">0:00</div>
                <div className="flex-1 h-1 bg-gray-100 rounded-full" />
                <div className="text-xs">-3:46</div>
            </div>
        </div>

        <p className="mt-12 text-sm text-gray-400">Pour se concentrer. S'inspirer. Librement.</p>
    </section>
);

// 221. THE SCROLL REVEAL (3D Phone Rotation)
const V221: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-white snap-start flex items-center justify-center font-sans perspective-[2000px] overflow-hidden">
        <div className="absolute top-20 text-center w-full z-10 pointer-events-none">
            <h1 className="text-4xl font-bold">Une Musique Composée.</h1>
        </div>

        <div
            className="relative w-[300px] h-[600px] transition-transform duration-700 ease-out transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 cursor-pointer"
            onClick={onExplore}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Phone Body */}
            <div className="absolute inset-0 bg-[#222] rounded-[40px] border-[4px] border-[#444] shadow-2xl overflow-hidden">
                <img src={cristalTemp} className="w-full h-full object-cover opacity-80" />
                <div className="absolute bottom-8 left-8 right-8 text-center">
                    <h2 className="text-xl font-bold mb-1">Influence</h2>
                    <p className="text-xs opacity-60">Et Pas Générée.</p>
                </div>
            </div>
            {/* Depth */}
            <div className="absolute inset-0 bg-black/50 rounded-[40px] translate-z-[-20px]" />
        </div>

        <div className="absolute bottom-20 text-center w-full z-10">
            <p className="text-sm opacity-50">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// 222. THE BLUR OVERLAY (Frosted Glass)
const V222: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen snap-start flex items-center justify-center font-sans overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
            <img src={islandScene} className="w-full h-full object-cover" />
        </div>

        {/* Frosted Overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/30" />

        <div className="z-10 max-w-xl text-center text-white px-8">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Une Musique Composée.</h1>
            <p className="text-xl mb-8 drop-shadow-md opacity-90">Et Pas Générée.</p>

            <div
                className="inline-block"
                onClick={onExplore}
            >
                <div className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                </div>
            </div>

            <p className="mt-8 font-medium drop-shadow">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// 223. THE TYPOGRAPHIC (Big Type & Small Phone)
const V223: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e5e5e5] text-black snap-start flex flex-col md:flex-row items-center justify-center font-sans p-8 overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-start pl-8 md:pl-20 z-10">
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-4">
                UNE<br />MUSIQUE<br />COMPOSÉE.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600 mb-8">Et Pas Générée.</p>
            <p className="text-sm font-mono text-gray-500 max-w-xs">
                Pour se concentrer. S'inspirer. Librement.
            </p>
        </div>

        <div className="flex-1 flex items-center justify-center relative">
            <div
                className="w-[280px] h-[560px] bg-black rounded-[40px] shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500 cursor-pointer overflow-hidden border-8 border-black"
                onClick={onExplore}
            >
                <img src={diorama} className="w-full h-full object-cover" />
            </div>
        </div>
    </section>
);

// 224. THE GRADIENT MESH (Soft Tech)
const V224: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center font-sans overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-pulse" />

        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col items-center gap-12 max-w-3xl text-center px-4">
            <h1 className="text-4xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 pb-2">
                Une Musique Composée.
            </h1>
            <p className="text-gray-500 text-lg">Et Pas Générée.</p>

            <div
                className="relative w-full max-w-md aspect-video bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-2 cursor-pointer group"
                onClick={onExplore}
            >
                <div className="w-full h-full bg-gray-50 rounded-lg overflow-hidden relative">
                    <img src={islandSceneTemp} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />

                    {/* Floating Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-black border-b-[8px] border-b-transparent ml-1" />
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// --- SERIES V: MOBILE-FIRST & INTERACTIVE (V225-V234) ---

// 225. THE SWIPE (Unlock Style)
const V225: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-white snap-start flex flex-col items-center justify-center font-sans">
        <div className="text-center mb-20 space-y-4">
            <p className="text-xs font-mono text-gray-400">Wednesday, January 24</p>
            <h1 className="text-6xl font-thin tracking-tighter">09:41</h1>
        </div>

        <div className="text-center space-y-2 mb-32">
            <h2 className="text-lg font-medium">Une Musique Composée.</h2>
            <p className="text-sm text-gray-400">Et Pas Générée.</p>
        </div>

        {/* Swipe Control */}
        <div
            className="w-64 h-16 bg-white/10 backdrop-blur-md rounded-full relative flex items-center px-2 cursor-pointer group overflow-hidden"
            onClick={onExplore}
        >
            <div className="w-12 h-12 bg-white rounded-full shadow-lg group-hover:translate-x-48 transition-transform duration-700 ease-in-out z-10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-medium opacity-50 group-hover:opacity-0 transition-opacity">
                slide to explore
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
    </section>
);

// 226. THE NOTIFICATION (Push Style)
const V226: React.FC<HeroProps> = ({ onExplore }) => (
    <section
        className="relative w-full h-screen bg-cover bg-center text-black snap-start flex flex-col items-center pt-32 font-sans"
        style={{ backgroundImage: `url(${cristalTemp})` }}
        onClick={onExplore}
    >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

        {/* Notification Card */}
        <div className="relative z-10 w-full max-w-sm mx-4 bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl cursor-pointer hover:bg-white/90 transition-colors border border-white/40 animate-[slideDown_0.5s_ease-out]">
            <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shrink-0">
                    <div className="w-5 h-5 bg-white rounded-full" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                        <h3 className="text-sm font-bold text-gray-900">Infinite Mood</h3>
                        <span className="text-xs text-gray-500">now</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Une Musique Composée.</p>
                    <p className="text-xs text-gray-600 truncate">Et Pas Générée. Pour se concentrer.</p>
                </div>
            </div>
        </div>

        <div className="absolute bottom-12 text-center text-white/50 text-xs">
            Tap to open
        </div>
    </section>
);

// 227. THE WIDGET (iOS Style)
const V227: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center font-sans">
        <div className="grid grid-cols-2 gap-6 p-8">
            {/* Main Widget */}
            <div
                className="col-span-2 aspect-[2/1] bg-[#1c1c1e] rounded-[30px] p-6 flex flex-col justify-between cursor-pointer hover:bg-[#2c2c2e] transition-colors relative overflow-hidden"
                onClick={onExplore}
            >
                <div className="flex justify-between items-start z-10">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Focus</span>
                        <span className="text-gray-400 text-sm">Une Musique Composée.</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                </div>

                <div className="flex gap-1 items-end h-16 opacity-50 z-10">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="flex-1 bg-white rounded-t-sm" style={{ height: `${Math.random() * 100}%` }} />
                    ))}
                </div>

                <img src={islandScene} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Background" />
            </div>

            {/* Small Widget 1 */}
            <div className="aspect-square bg-[#1c1c1e] rounded-[30px] p-4 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-[#2c2c2e] transition-colors" onClick={onExplore}>
                <div className="text-3xl font-bold mb-1">21°</div>
                <div className="text-xs text-gray-400">Clear Sky</div>
            </div>

            {/* Small Widget 2 */}
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-[30px] p-4 flex flex-col justify-center items-center text-center cursor-pointer hover:brightness-110 transition-all" onClick={onExplore}>
                <div className="text-white font-bold text-lg">Inspiration</div>
                <div className="text-white/60 text-xs mt-1">Ready</div>
            </div>
        </div>
    </section>
);

// 228. THE APP ICON (Pulsing Core)
const V228: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f2f2f7] text-black snap-start flex flex-col items-center justify-center font-sans">
        {/* App Icon */}
        <div
            className="w-40 h-40 bg-black rounded-[36px] shadow-2xl flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 relative overflow-hidden"
            onClick={onExplore}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
            <div className="w-20 h-20 bg-white rounded-full animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[36px]" />
        </div>

        <h1 className="mt-8 text-xl font-medium">Infinite Mood</h1>
        <p className="text-gray-400 text-sm mt-1">Une Musique Composée.</p>
    </section>
);

// 229. THE DYNAMIC ISLAND (Pill Interaction)
const V229: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex flex-col items-center pt-8 font-sans">
        {/* Dynamic Island */}
        <div
            className="h-10 bg-black border border-white/20 rounded-full flex items-center px-4 gap-4 cursor-pointer hover:scale-105 hover:w-auto hover:bg-[#1c1c1e] transition-all duration-300 group min-w-[120px]"
            onClick={onExplore}
        >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <div className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300 whitespace-nowrap opacity-0 group-hover:opacity-100 flex items-center gap-2">
                <span className="text-xs font-bold">Now Playing</span>
                <span className="w-px h-3 bg-white/20" />
                <span className="text-xs text-gray-400">Une Musique Composée.</span>
                <div className="flex gap-0.5 items-end h-3 ml-2">
                    <div className="w-0.5 bg-green-500 h-2 animate-[bounce_1s_infinite]" />
                    <div className="w-0.5 bg-green-500 h-3 animate-[bounce_1.2s_infinite]" />
                    <div className="w-0.5 bg-green-500 h-1.5 animate-[bounce_0.8s_infinite]" />
                </div>
            </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center opacity-30 pointer-events-none">
            <h1 className="text-4xl font-bold mb-4">Tap the island</h1>
            <p>To start your experience</p>
        </div>
    </section>
);

// 230. THE HAPTIC (Tactile Press)
const V230: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e5e5ea] text-black snap-start flex items-center justify-center font-sans">
        <div className="text-center w-full max-w-md">
            <h1 className="text-3xl font-bold mb-12">Press to Start</h1>

            <button
                className="w-64 h-64 rounded-[48px] bg-[#f2f2f7] shadow-[20px_20px_60px_#d1d1d6,-20px_-20px_60px_#ffffff] flex items-center justify-center active:shadow-[inset_20px_20px_60px_#d1d1d6,inset_-20px_-20px_60px_#ffffff] transition-shadow duration-150 group"
                onClick={onExplore}
            >
                <div className="text-center group-active:scale-95 transition-transform duration-150">
                    <div className="text-xl font-bold mb-2">Une Musique<br />Composée.</div>
                    <div className="text-xs text-gray-400">Et Pas Générée.</div>
                </div>
            </button>

            <p className="mt-12 text-gray-400 text-sm">Experience the feeling.</p>
        </div>
    </section>
);

// 231. THE CARD STACK (Shuffle)
const V231: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-white snap-start flex items-center justify-center font-sans overflow-hidden">
        <div className="relative w-72 h-96 group cursor-pointer" onClick={onExplore}>
            {/* Card 3 */}
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-4 -translate-y-4 rotate-6 group-hover:translate-x-12 group-hover:rotate-12 transition-all duration-500 border border-white/10" />
            {/* Card 2 */}
            <div className="absolute inset-0 bg-purple-600 rounded-2xl transform translate-x-2 -translate-y-2 rotate-3 group-hover:translate-x-6 group-hover:rotate-6 transition-all duration-500 border border-white/10" />
            {/* Card 1 (Top) */}
            <div className="absolute inset-0 bg-black rounded-2xl border border-white/20 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <img src={diorama} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Diorama" />
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold leading-tight">Une Musique<br />Composée.</h2>
                </div>
                <div className="relative z-10 flex justify-between items-end">
                    <span className="text-xs text-gray-300">Et Pas Générée.</span>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="black"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-12 text-center w-full">
            <p className="text-sm font-medium">Tap to shuffle mood</p>
        </div>
    </section>
);

// 232. THE CONTROL CENTER (Sliders)
const V232: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black/90 backdrop-blur-3xl text-white snap-start flex items-center justify-center font-sans">
        <div className="bg-black/40 p-6 rounded-[32px] backdrop-blur-xl border border-white/10 grid grid-cols-2 gap-4 w-80">
            {/* Main Play Toggle */}
            <div
                className="col-span-1 h-32 bg-white/10 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                onClick={onExplore}
            >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
            </div>

            {/* Volume Slider Style */}
            <div className="col-span-1 h-32 bg-white/10 rounded-2xl relative overflow-hidden flex items-end p-4 group cursor-pointer hover:bg-white/20 transition-colors" onClick={onExplore}>
                <div className="absolute inset-0 bg-white/10 h-[60%] bottom-0 w-full" />
                <span className="relative z-10 font-bold">Volume</span>
            </div>

            {/* Text Info */}
            <div className="col-span-2 bg-[#1c1c1e] rounded-2xl p-4 cursor-pointer hover:bg-[#2c2c2e] transition-colors" onClick={onExplore}>
                <div className="text-sm font-bold">Infinite Mood</div>
                <div className="text-xs text-gray-400 mt-1">Une Musique Composée.</div>
                <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-white/50" />
                </div>
            </div>
        </div>
    </section>
);

// 233. THE VOICE UI (Waveform)
const V233: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex flex-col items-center justify-end pb-32 font-sans overflow-hidden">
        {/* Abstract Siri Orb */}
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl animate-pulse opacity-50 hover:opacity-100 hover:scale-125 transition-all duration-500 cursor-pointer"
            onClick={onExplore}
        />

        <div className="text-center z-10">
            <h1 className="text-2xl font-bold mb-2">"Play some music."</h1>
            <p className="text-gray-400">Une Musique Composée. Et Pas Générée.</p>
        </div>

        {/* Waveform Animation */}
        <div className="absolute bottom-0 w-full h-32 flex items-end justify-center gap-1 opacity-20 pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="w-2 bg-white rounded-t-full animate-[bounce_1s_infinite]"
                    style={{
                        height: `${Math.random() * 50 + 10}%`,
                        animationDelay: `${i * 0.05}s`,
                        animationDuration: `${0.5 + Math.random()}s`
                    }}
                />
            ))}
        </div>
    </section>
);

// 234. THE LAUNCHPAD (App Grid)
const V234: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black/80 backdrop-blur-2xl text-white snap-start flex items-center justify-center font-sans">
        {/* Background Wallpaper */}
        <img src={diorama} className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30 blur-sm" alt="Background" />

        <div className="grid grid-cols-4 gap-8 md:gap-12 p-8">
            {/* App 1 (Target) */}
            <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={onExplore}>
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg border border-white/10 group-hover:scale-110 transition-transform"></div>
                <span className="text-xs font-medium">Music</span>
            </div>

            {/* Dummy Apps */}
            {[...Array(7)].map((_, i) => (
                <div key={i} className="flex-col items-center gap-2 hidden md:flex opacity-50 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl border border-white/5"></div>
                    <span className="text-xs font-medium">App {i + 1}</span>
                </div>
            ))}

            <div className="col-span-4 text-center mt-12">
                <h1 className="text-xl font-bold text-white shadow-black drop-shadow-md">Une Musique Composée.</h1>
            </div>
        </div>
    </section>
);


// --- SERIES W: CINEMATIC & ATMOSPHERIC (V235-V244) ---

// 235. THE SPOTLIGHT
const V235: React.FC<HeroProps> = ({ onExplore }) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <section
            className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center font-sans overflow-hidden cursor-none"
            onMouseMove={handleMouseMove}
            onClick={onExplore}
        >
            {/* The hidden content */}
            <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-300"
                style={{
                    backgroundImage: `url(${diorama})`,
                    clipPath: `circle(250px at ${mousePosition.x}px ${mousePosition.y}px)`
                }}
            />

            <div className="relative z-10 text-center mix-blend-difference pointer-events-none">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">Une Musique<br />Composée.</h1>
                <p className="text-2xl tracking-widest uppercase mt-4 text-gray-300">Et Pas Générée.</p>
                <p className="text-sm mt-8 opacity-70">Pour se concentrer. S'inspirer. Librement.</p>
            </div>

            {/* Flashlight Overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0,0,0,0.95) 100%)`
                }}
            />
        </section>
    );
};

// 236. THE ECLIPSE
const V236: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center font-sans overflow-hidden group" onClick={onExplore}>
        {/* Main Text hidden behind */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
            <h1 className="text-[8vw] font-bold text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600 opacity-20 group-hover:opacity-100 transition-opacity duration-1000">Une Musique<br />Composée.</h1>
        </div>

        {/* The Moon/Blocker */}
        <div className="relative z-10 w-96 h-96 bg-black rounded-full shadow-[0_0_100px_rgba(255,255,255,0.1)] group-hover:translate-x-32 group-hover:-translate-y-32 transition-transform duration-[2s] ease-in-out">
            <div className="absolute inset-0 rounded-full shadow-[inset_-20px_-20px_50px_rgba(255,255,255,0.2)]" />
        </div>

        {/* The Corona */}
        <div className="absolute z-0 w-96 h-96 bg-white rounded-full blur-[100px] opacity-20 group-hover:opacity-60 group-hover:scale-150 transition-all duration-[2s]" />

        <div className="absolute bottom-12 text-center w-full z-20 flex flex-col gap-2">
            <p className="text-xl tracking-[0.2em] font-medium text-white/90">Et Pas Générée.</p>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// 237. THE NEBULOUS
const V237: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#050510] text-white snap-start flex items-center justify-center font-serif overflow-hidden" onClick={onExplore}>
        {/* Animated Fog Layers */}
        <div className="absolute inset-0 opacity-50 animate-[pulse_8s_infinite] bg-gradient-to-tr from-purple-900/30 via-transparent to-blue-900/30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        <div className="relative z-10 text-center mix-blend-overlay max-w-4xl px-4">
            <h1 className="text-7xl md:text-9xl italic font-light tracking-wide blur-[2px] hover:blur-none transition-all duration-700 cursor-pointer">
                Une Musique<br />Composée.
            </h1>
            <p className="text-2xl mt-6 font-sans tracking-widest uppercase opacity-80">Et Pas Générée.</p>
            <div className="w-16 h-px bg-white/50 mx-auto my-6" />
            <p className="text-sm font-sans tracking-widest opacity-60">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// 238. THE REFLECTION
const V238: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex flex-col items-center justify-center font-sans perspective-[1000px]" onClick={onExplore}>
        <div className="relative group cursor-pointer text-center">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Une Musique<br />Composée.
            </h1>
            {/* Reflection */}
            <div className="scale-y-[-1] opacity-30 blur-sm mask-image-gradient-to-b group-hover:blur-md transition-all duration-500 select-none pointer-events-none" style={{ maskImage: 'linear-gradient(to top, transparent, black)' }}>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-800">
                    Une Musique<br />Composée.
                </h1>
            </div>
        </div>
        <div className="mt-12 text-center">
            <p className="text-xl text-white font-medium mb-2">Et Pas Générée.</p>
            <p className="text-gray-500 uppercase tracking-widest text-xs">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// 239. THE CINEMA
const V239: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black snap-start flex items-center justify-center font-sans overflow-hidden group" onClick={onExplore}>
        {/* Letterbox Bars */}
        <div className="absolute top-0 left-0 w-full h-[15vh] bg-black z-20 transition-all duration-700 group-hover:h-0" />
        <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-black z-20 transition-all duration-700 group-hover:h-0" />

        {/* Content */}
        <div className="absolute inset-0 w-full h-full">
            <img src={islandScene} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100 transform" />
        </div>

        <div className="relative z-30 text-center mix-blend-difference text-white">
            <h1 className="text-[8vw] font-black leading-none tracking-tighter uppercase">Une Musique<br />Composée.</h1>
            <p className="text-3xl font-medium tracking-widest uppercase mt-4">Et Pas Générée.</p>
            <p className="text-sm mt-8 tracking-widest opacity-80 border-t border-white/30 pt-4 inline-block">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// 240. THE NOIR
const V240: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center font-serif overflow-hidden grayscale contrast-125" onClick={onExplore}>
        {/* Grain */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-px h-32 bg-black mb-8" />
            <h1 className="text-7xl md:text-9xl font-bold italic tracking-tighter drop-shadow-[10px_10px_20px_rgba(0,0,0,0.5)] leading-[0.8]">Une Musique<br />Composée.</h1>
            <p className="mt-8 text-xl font-sans font-bold tracking-[0.2em] uppercase border-b-4 border-black pb-2">Et Pas Générée.</p>
            <p className="mt-4 text-xs font-mono tracking-widest text-gray-500">Pour se concentrer. S'inspirer. Librement.</p>
        </div>

        {/* Dramatic Shadow */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-black to-transparent opacity-30 pointer-events-none" />
    </section>
);

// 241. THE PRISM REFRACTION
const V241: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black snap-start flex items-center justify-center overflow-hidden" onClick={onExplore}>
        <div className="relative group text-center">
            {/* Red Channel */}
            <h1 className="absolute top-0 left-0 text-7xl md:text-9xl font-bold text-red-500 mix-blend-screen translate-x-1 group-hover:translate-x-3 transition-transform duration-200 whitespace-nowrap">Une Musique Composée.</h1>
            {/* Blue Channel */}
            <h1 className="absolute top-0 left-0 text-7xl md:text-9xl font-bold text-blue-500 mix-blend-screen -translate-x-1 group-hover:-translate-x-3 transition-transform duration-200 whitespace-nowrap">Une Musique Composée.</h1>
            {/* Green Channel (Main) */}
            <h1 className="relative text-7xl md:text-9xl font-bold text-green-500 mix-blend-screen z-10 text-white whitespace-nowrap">Une Musique Composée.</h1>

            <p className="text-2xl text-white/80 font-medium mt-8 tracking-widest">Et Pas Générée.</p>
            <p className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm tracking-widest whitespace-nowrap">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// 242. THE DEEP SEA
const V242: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-b from-[#001e36] to-[#000510] text-white snap-start flex items-center justify-center font-sans overflow-hidden" onClick={onExplore}>
        {/* Particles */}
        {[...Array(20)].map((_, i) => (
            <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-[float_10s_linear_infinite]"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`
                }}
            />
        ))}

        <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-light tracking-[0.05em] uppercase text-blue-100 drop-shadow-[0_0_20px_rgba(100,200,255,0.5)]">Une Musique<br />Composée.</h1>
            <p className="mt-8 text-blue-200 text-xl tracking-[0.2em] font-light">Et Pas Générée.</p>
            <div className="mt-12 w-24 h-px bg-blue-500/50 mx-auto"></div>
            <p className="mt-6 text-blue-300/60 font-mono text-xs tracking-widest">Pour se concentrer. S'inspirer. Librement.</p>
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000510_100%)] pointer-events-none" />
    </section>
);

// 243. THE GOLDEN HOUR
const V243: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-br from-amber-200 via-orange-400 to-rose-500 text-white snap-start flex items-center justify-center font-serif overflow-hidden" onClick={onExplore}>
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />

        <div className="relative z-10 text-center max-w-5xl">
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white drop-shadow-xl mix-blend-overlay opacity-90 leading-none">Une Musique<br />Composée.</h1>
            <p className="mt-6 text-3xl font-bold text-white mix-blend-overlay tracking-tight">Et Pas Générée.</p>
            <p className="mt-8 text-white/80 font-sans tracking-widest text-sm uppercase mix-blend-overlay font-bold">Pour se concentrer. S'inspirer. Librement.</p>
        </div>

        {/* Sun Flare */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-100 rounded-full blur-[80px] opacity-60 pointer-events-none mix-blend-screen" />
    </section>
);

// 244. THE WINDOW (Rain)
const V244: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-800 text-white snap-start flex items-center justify-center font-sans" onClick={onExplore}>
        <img src={islandScene} className="absolute inset-0 w-full h-full object-cover" />

        {/* Rain/Glass Overlay */}
        <div className="absolute inset-0 backdrop-blur-[4px] bg-white/5 group hover:backdrop-blur-none transition-all duration-1000 cursor-pointer flex items-center justify-center">
            <div className="bg-black/40 p-12 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Une Musique<br />Composée.</h1>
                <p className="text-xl text-white/90 font-medium mb-8">Et Pas Générée.</p>
                <p className="text-gray-400 text-sm tracking-widest uppercase">Pour se concentrer. S'inspirer. Librement.</p>
            </div>
        </div>
    </section>
);

// --- SERIES X: EXPERIMENTAL & GLITCH (V245-V254) ---

// 245. THE DATA STREAM (Matrix)
const V245: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-green-500 snap-start flex items-center justify-center font-mono overflow-hidden" onClick={onExplore}>
        <div className="absolute inset-0 opacity-20 text-[10px] break-all pointer-events-none">
            {Array(5000).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
        </div>

        <div className="relative z-10 bg-black/80 p-12 border border-green-500/50 backdrop-blur-sm text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-pulse">&lt;Une Musique /&gt;</h1>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter ml-12">&lt;Composée&gt;</h1>
            <p className="mt-6 text-green-400 text-xl font-bold uppercase tracking-widest">&gt; Et Pas Générée.</p>
            <div className="mt-8 border-t border-green-500/30 pt-4">
                <p className="text-green-700 text-xs uppercase tracking-widest">Pour se concentrer. S'inspirer. Librement.</p>
            </div>
        </div>
    </section>
);

// 246. THE GLITCH
const V246: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center font-sans overflow-hidden group" onClick={onExplore}>
            <div className="relative text-center">
                {/* Stacked Glitch Layers */}
                <div className="relative">
                    <h1 className="text-8xl font-black italic tracking-tighter absolute top-0 left-0 w-full text-red-500 opacity-50 mix-blend-screen animate-[pulse_0.1s_infinite] clip-path-polygon group-hover:translate-x-2">Une Musique<br />Composée.</h1>
                    <h1 className="text-8xl font-black italic tracking-tighter absolute top-0 left-0 w-full text-blue-500 opacity-50 mix-blend-screen animate-[pulse_0.2s_infinite] clip-path-polygon group-hover:-translate-x-2">Une Musique<br />Composée.</h1>
                    <h1 className="text-8xl font-black italic tracking-tighter relative z-10 bg-black">Une Musique<br />Composée.</h1>
                </div>

                <p className="mt-8 text-2xl font-mono text-red-500 bg-red-500/10 inline-block px-4 py-1">Et Pas Générée.</p>
            </div>
            <p className="absolute bottom-12 font-mono text-xs text-white/50 tracking-widest">Pour se concentrer. S'inspirer. Librement.</p>
        </section>
    );
};

// 247. THE TERMINAL
const V247: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1a1b26] text-[#a9b1d6] snap-start flex items-center justify-center font-mono" onClick={onExplore}>
        <div className="w-full max-w-3xl p-6 bg-[#24283b] rounded-lg shadow-2xl border border-[#414868]">
            <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="space-y-2 text-sm md:text-base">
                <p><span className="text-[#9ece6a]">user@fragmnt</span><span className="text-[#bb9af7]"> ~/music</span> <span className="text-[#7aa2f7]">λ</span> init sequence</p>
                <p className="text-gray-500">Compiling assets...</p>
                <p className="text-green-400">Done.</p>
                <br />
                <h1 className="text-4xl md:text-5xl font-bold text-white">Une Musique Composée.</h1>
                <p className="text-xl text-[#7aa2f7]">Et Pas Générée.</p>
                <br />
                <p className="text-gray-500">// Description</p>
                <p className="text-[#e0af68]">Pour se concentrer. S'inspirer. Librement.</p>
                <p className="animate-pulse">_</p>
            </div>
        </div>
    </section>
);

// 248. THE PIXELATE
const V248: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black snap-start flex items-center justify-center overflow-hidden image-pixelated cursor-pointer group" onClick={onExplore}>
        <img
            src={islandScene}
            className="absolute inset-0 w-full h-full object-cover scale-[0.1] group-hover:scale-100 transition-transform duration-1000 origin-center"
            style={{ imageRendering: 'pixelated' }}
        />
        <div className="relative z-10 bg-white/90 px-12 py-8 mix-blend-hard-light group-hover:mix-blend-normal transition-all text-center rounded-xl">
            <h1 className="text-5xl font-bold tracking-tighter uppercase text-black mb-2">Une Musique<br />Composée.</h1>
            <p className="text-xl text-black font-medium tracking-wide">Et Pas Générée.</p>
            <div className="w-full h-px bg-black/20 my-4" />
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-black/60">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// 249. THE DISTORTION
const V249: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-900 text-white snap-start flex items-center justify-center font-sans overflow-hidden" onClick={onExplore}>
        <svg className="hidden">
            <filter id="turbulence">
                <feTurbulence type="turbulence" baseFrequency="0.02 0.05" numOctaves="5" result="turbulence" />
                <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="30" xChannelSelector="R" yChannelSelector="G" />
            </filter>
        </svg>

        <div className="relative z-10 group text-center">
            <h1 className="text-8xl font-black tracking-tighter uppercase filter hover:url(#turbulence) transition-all duration-300 pointer-events-auto cursor-pointer" style={{ filter: 'url(#turbulence)' }}>
                Une Musique<br />Composée.
            </h1>
            <p className="mt-8 text-3xl font-light tracking-wide text-gray-300">Et Pas Générée.</p>
            <p className="mt-12 text-sm text-gray-500 uppercase tracking-[0.5em]">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// 250. THE RAW CODE
const V250: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1e1e1e] text-[#d4d4d4] snap-start flex items-center justify-center font-mono overflow-hidden" onClick={onExplore}>
        <div className="absolute inset-0 p-8 text-xs opacity-30 select-none overflow-hidden">
            <pre>{`const Hero = () => {
    return (
        <Experience>
             <Title>Une Musique Composée.</Title>
             <Subtitle>Et Pas Générée.</Subtitle>
             <Desc>Pour se concentrer. S'inspirer. Librement.</Desc>
        </Experience>
    )
}`.repeat(20)}</pre>
        </div>

        <div className="relative z-10 text-center bg-[#2d2d2d] p-10 rounded-lg shadow-2xl border border-[#3e3e3e]">
            <h1 className="text-4xl font-bold text-[#ce9178]">&lt;Une Musique<br />Composée /&gt;</h1>
            <p className="mt-4 text-[#9cdcfe] text-xl">Et Pas Générée.</p>
            <p className="mt-6 text-[#6a9955] text-sm italic">// Pour se concentrer. S'inspirer. Librement.</p>
            <button className="mt-8 bg-[#007acc] text-white px-6 py-2 rounded hover:bg-[#005a9e] transition-colors">{`{ start() }`}</button>
        </div>
    </section>
);

// 251. THE SCANNER
const V251: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center font-sans overflow-hidden" onClick={onExplore}>
        <img src={diorama} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" />

        <div className="absolute inset-0 bg-black/90" />

        <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl tracking-tighter font-bold uppercase opacity-80">Une Musique<br />Composée.</h1>
            <p className="mt-4 text-green-500 font-mono text-xl tracking-widest">Et Pas Générée.</p>
            <p className="mt-12 text-xs font-mono opacity-50">Pour se concentrer. S'inspirer. Librement.</p>
        </div>

        {/* Scanner Line */}
        <div className="absolute top-0 w-full h-2 bg-green-500 shadow-[0_0_100px_rgba(34,197,94,0.5)] animate-[scan_3s_linear_infinite] z-20 opacity-50" />
    </section>
);

// 252. THE ASCII ART
const V252: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white snap-start flex items-center justify-center font-mono text-[8px] leading-[8px] overflow-hidden whitespace-pre cursor-pointer hover:text-green-500 transition-colors" onClick={onExplore}>
        {`
           .:::.
         .:::::::.
       .:::::::::::.
      :::::::::::::::
     ::::::::::::::::
    :::::::::::::::::
    :::::::::::::::::
     ::::::::::::::::
      :::::::::::::::
       ':::::::::::'
         ':::::::'
           ':::'
        `
            .repeat(5).split('\n').map((line, i) => <div key={i}>{line}</div>)
        }
        <div className="absolute inset-0 flex flex-col items-center justify-center mix-blend-difference pointer-events-none text-center">
            <h1 className="text-7xl font-bold tracking-tighter bg-white text-black px-8 py-4">Une Musique<br />Composée.</h1>
            <p className="text-2xl mt-4 bg-black text-white px-4 py-1">Et Pas Générée.</p>
            <p className="text-xs mt-4 tracking-widest bg-white text-black px-2">Pour se concentrer. S'inspirer. Librement.</p>
        </div>
    </section>
);

// 253. THE BRUTALIST GRID
const V253: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-yellow-400 text-black snap-start flex flex-col font-mono" onClick={onExplore}>
        <div className="flex-1 border-b-8 border-black flex items-center justify-center relative overflow-hidden group">
            <h1 className="text-[12vw] font-bold leading-none translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-center">Une Musique<br />Composée.</h1>
            <div className="absolute top-4 left-4 text-xl font-bold">FIG. 01</div>
        </div>
        <div className="flex-1 flex border-black">
            <div className="flex-1 border-r-8 border-black flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-colors cursor-pointer p-4 text-center">
                <h2 className="text-4xl font-bold uppercase">Et Pas<br />Générée.</h2>
            </div>
            <div className="flex-1 flex items-center justify-center relative overflow-hidden p-8 text-center">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,black,black_10px,transparent_10px,transparent_20px)] opacity-10" />
                <h2 className="text-2xl font-bold uppercase">Pour se concentrer.<br />S'inspirer.<br />Librement.</h2>
            </div>
        </div>
    </section>
);

// 254. THE DECONSTRUCTED
const V254: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black snap-start flex items-center justify-center font-sans overflow-hidden cursor-pointer group" onClick={onExplore}>
        <motion.div
            initial={{ x: -100, y: -100, rotate: -45 }}
            whileInView={{ x: 0, y: 0, rotate: 0 }}
            className="absolute top-1/4 left-1/4"
        >
            <h1 className="text-7xl font-black">Une Musique</h1>
        </motion.div>

        <motion.div
            initial={{ x: 100, y: 100, rotate: 45 }}
            whileInView={{ x: 0, y: 0, rotate: 0 }}
            className="absolute bottom-1/4 right-1/4"
        >
            <h1 className="text-7xl font-black">Composée.</h1>
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xl font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-300">Et Pas Générée.</p>
            <p className="mt-2 text-gray-500 text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-500">Pour se concentrer. S'inspirer. Librement.</p>
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </section>
);


const HeroAlternativeF: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {

    useEffect(() => {
        AudioManager.getInstance().loadMasterBank();
    }, []);

    const handleExplore = () => {
        startScroll();
        if (onComplete) onComplete();
        AudioManager.getInstance().playHero();
    };

    // Components Array
    const Variants = [
        V1, V2, V3, V4, V5, V6, V7, V8, V9, V10,
        V11, V12, V13, V14, V15, V16, V17, V18, V19, V20,
        V21, V22, V23, V24, V25, V26, V27, V28, V29, V30,
        V31, V32, V33, V34, V35, V36, V37, V38, V39, V40,
        V41, V42, V43, V44, V45, V46, V47, V48, V49, V50,
        V51, V52, V53, V54, V55, V56, V57, V58, V59, V60,
        V61, V62, V63, V64, V65, V66, V67, V68, V69, V70,
        V71, V72, V73, V74, V75, V76, V77, V78, V79, V80,
        V81, V82, V83, V84, V85, V86, V87, V88, V89, V90,
        V91, V92, V93, V94, V95, V96, V97, V98, V99, V100,
        V101, V102, V103, V104, V105, V106, V107, V108, V109, V110,
        V111, V112, V113, V114, V115, V116, V117, V118, V119, V120,
        V121,
        V122, V123, V124, V125, V126, V127, V128, V129, V130, V131,
        V132, V133, V134, V135, V136, V137, V138, V139, V140, V141,
        V142, V143, V144, V145, V146, V147, V148, V149, V150, V151,
        V152, V153, V154, V155, V156, V157, V158, V159, V160, V161,
        V162, V163, V164, V165, V166, V167, V168, V169, V170, V171,
        V172, V173, V174, V175, V176, V177, V178, V179, V180, V181,
        V182, V183, V184, V185, V186, V187, V188, V189, V190, V191,
        V192, V193, V194, V195, V196, V197, V198, V199, V200, V201,
        V202, V203, V204, V205, V206, V207,
        V208, V209, V210, V211, V212, V213, V214,
        V215, V216, V217, V218, V219, V220, V221, V222, V223, V224,
        V225, V226, V227, V228, V229, V230, V231, V232, V233, V234,
        V235, V236, V237, V238, V239, V240, V241, V242, V243, V244,
        V245, V246, V247, V248, V249, V250, V251, V252, V253, V254
    ];

    return (
        <div
            data-lenis-prevent
            className="w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-black scroll-smooth relative z-50 selection:bg-accent-primary selection:text-white"
        >
            <div className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur text-white px-4 py-2 rounded-full text-xs font-mono pointer-events-none border border-white/10">
                Gallery: 254 Design Proposals
            </div>

            {Variants.map((Variant, index) => (
                <Variant key={index} onExplore={handleExplore} />
            ))}
        </div>
    );
};

export default HeroAlternativeF;
