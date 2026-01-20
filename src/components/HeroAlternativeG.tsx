import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import AudioManager from '../utils/AudioManager';
import { startScroll } from './SmoothScroll';

interface HeroProps {
    onExplore: () => void;
}

// ============================================================================
// WABI SABI SERIES (1-20)
// Theme: Impermanence, Imperfection, Incompleteness.
// Aesthetic: Asymmetry, Roughness, Simplicity, Economy, Austerity, Modesty, Intimacy.
// Colors: Earth tones, Stone, Paper, Ink, Muted Greens/Blues.
// ============================================================================

// Mandatories:
// Title: Une ambiance composée. Pas générée.
// Description: Pour se concentrer. Pour s’évader. Librement.
// Micro: Une app de musiques d'ambiances.

// 1. THE STONE GARDEN (Minimalist, Balanced, Stone colors)
const V1: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#E6E5E3] text-[#2C2C2C] flex flex-col items-center justify-center font-serif overflow-hidden">
        <div className="absolute top-8 left-8 text-[10px] uppercase tracking-[0.3em] font-sans opacity-40">
            Une app de musiques d'ambiances.
        </div>
        <div className="text-center z-10">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                Une ambiance composée.
                <br />
                <span className="italic font-normal opacity-60">Pas générée.</span>
            </h1>
            <div className="w-8 h-[1px] bg-[#2C2C2C] mx-auto my-8 opacity-20" />
            <p className="font-sans text-xs uppercase tracking-[0.2em] opacity-60">
                Pour se concentrer. Pour s’évader. Librement.
            </p>
        </div>
        <button onClick={onExplore} className="absolute bottom-12 opacity-40 hover:opacity-100 transition-opacity">
            <ArrowDown className="w-4 h-4" />
        </button>
    </section>
);

// 2. KINTSUGI (Gold crack logic, imperfection)
const V2: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1a1a1a] text-[#e0e0e0] flex items-center justify-center font-display overflow-hidden">
        {/* Gold crack line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,30 Q40,40 50,50 T100,70" fill="none" stroke="#D4AF37" strokeWidth="0.2" />
        </svg>

        <div className="relative z-10 max-w-4xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-right">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Une ambiance<br />composée.
                </h1>
            </div>
            <div className="text-left pt-12 md:pt-24">
                <h2 className="text-3xl md:text-5xl font-serif italic text-[#D4AF37]">
                    Pas générée.
                </h2>
                <p className="mt-8 text-xs font-mono uppercase tracking-widest opacity-60">
                    Pour se concentrer. Pour s’évader. Librement.
                </p>
                <div className="mt-2 text-[10px] font-mono opacity-40">Une app de musiques d'ambiances.</div>
            </div>
        </div>
        <button onClick={onExplore} className="absolute bottom-12 right-12 text-[#D4AF37] text-xs uppercase tracking-widest hover:text-white transition-colors">
            Discover
        </button>
    </section>
);

// 3. WASHI PAPER (Texture, black ink on white)
const V3: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#Fdfdfd] text-black flex flex-col justify-between p-8 md:p-16">
        {/* Noise texture simulation */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="font-mono text-[10px] uppercase tracking-widest">
            Une app de musiques d'ambiances.
        </div>

        <div className="flex flex-col items-start space-y-4">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8]">
                UNE AMBIANCE<br />COMPOSÉE.
            </h1>
            <div className="bg-black text-white px-2 py-1 text-xl md:text-3xl font-serif italic">
                Pas générée.
            </div>
        </div>

        <div className="flex justify-between items-end">
            <p className="max-w-xs text-sm leading-relaxed font-medium">
                Pour se concentrer. Pour s’évader. Librement.
            </p>
            <button onClick={onExplore} className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                <ArrowDown size={16} />
            </button>
        </div>
    </section>
);

// 4. MA (Negative Space - Asymmetric)
const V4: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F0F2F0] text-[#2F3E46] flex flex-col">
        <div className="flex-1 relative">
            <div className="absolute top-[20%] right-[15%] text-right">
                <h1 className="text-5xl font-light tracking-wide mb-2">Une ambiance composée.</h1>
                <p className="text-xs uppercase tracking-[0.3em] opacity-50">Une app de musiques d'ambiances.</p>
            </div>

            <div className="absolute bottom-[20%] left-[10%]">
                <h2 className="text-6xl font-serif italic opacity-80">Pas générée.</h2>
                <div className="w-16 h-[2px] bg-[#2F3E46] mt-6 mb-4" />
                <p className="text-sm font-light">
                    Pour se concentrer.<br />Pour s’évader.<br />Librement.
                </p>
                <button onClick={onExplore} className="mt-8 text-xs font-bold uppercase tracking-widest border-b border-[#2F3E46] pb-1 hover:opacity-50 transition-opacity">
                    Explore
                </button>
            </div>
        </div>
    </section>
);

// 5. MOSS (Organic, muted green)
const V5: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#3A403A] text-[#D8DCD8] flex items-center justify-center font-sans">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full bg-[#464D46] blur-[80px]" />

        <div className="relative z-10 text-center tracking-widest">
            <div className="mb-8 text-[9px] uppercase opacity-40">Une app de musiques d'ambiances.</div>
            <h1 className="text-4xl md:text-6xl font-thin uppercase leading-tight mb-8">
                Une Ambiance<br />
                <span className="font-serif normal-case italic">Composée.</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light opacity-60 mb-12">
                Pas générée.
            </h2>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-50 max-w-md mx-auto leading-loose">
                Pour se concentrer. Pour s’évader. Librement.
            </p>

            <div onClick={onExplore} className="mt-16 w-[1px] h-16 bg-[#D8DCD8]/30 mx-auto cursor-pointer hover:bg-[#D8DCD8] transition-colors" />
        </div>
    </section>
);

// 6. ENSO (Circular, imperfection)
const V6: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F5F5F0] text-[#111] flex items-center justify-center overflow-hidden">
        {/* Abstract Circle */}
        <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute w-[80vh] h-[80vh] border-[1px] border-black/10 rounded-[45%] rounded-tr-[55%] animate-blob"
        />

        <div className="relative z-10 text-center p-8 backdrop-blur-[1px]">
            <h1 className="text-5xl font-bold tracking-tight mb-2">Une ambiance composée.</h1>
            <h2 className="text-5xl font-serif italic text-neutral-500 mb-8">Pas générée.</h2>

            <div className="flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-60">
                <span>Pour se concentrer</span>
                <span>Pour s’évader</span>
                <span>Librement</span>
            </div>
            <div className="mt-12 text-[9px] opacity-30">Une app de musiques d'ambiances.</div>
        </div>

        <button onClick={onExplore} className="absolute bottom-8 text-2xl hover:scale-110 transition-transform text-black/20 hover:text-black">
            &darr;
        </button>
    </section>
);

// 7. BAMBOO (Vertical layout)
const V7: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#EBE9E4] text-[#283028] flex flex-row items-center justify-around font-serif px-4">
        <div className="h-[60vh] w-[1px] bg-[#283028]/10 hidden md:block" />

        <div className="flex flex-col h-full justify-center md:writing-vertical-rl md:rotate-180 items-center gap-8">
            <h1 className="text-4xl md:text-8xl font-light whitespace-nowrap">
                Une ambiance composée.
            </h1>
            <h2 className="text-2xl md:text-6xl italic whitespace-nowrap opacity-60">
                Pas générée.
            </h2>
        </div>

        <div className="absolute md:static bottom-8 left-0 w-full md:w-auto text-center md:text-left flex flex-col justify-end h-full py-12 gap-6">
            <p className="text-xs font-sans uppercase tracking-[0.2em]">Pour se concentrer. Pour s’évader. Librement.</p>
            <p className="text-[10px] font-sans opacity-50">Une app de musiques d'ambiances.</p>
            <button onClick={onExplore} className="w-12 h-12 border border-[#283028]/20 rounded-full flex items-center justify-center mx-auto md:mx-0 hover:bg-[#283028] hover:text-white transition-colors">
                <ArrowRight className="md:rotate-90" size={16} />
            </button>
        </div>
    </section>
);

// 8. TEABOWL (Ceramic aesthetic)
const V8: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#A89F91] text-[#2A2622] flex items-center justify-center">
        <div className="absolute inset-4 border border-[#2A2622]/20" />

        <div className="max-w-xl text-center z-10">
            <p className="mb-6 font-mono text-xs opacity-60">:: Une app de musiques d'ambiances.</p>
            <h1 className="text-6xl font-black mb-0 leading-[0.85] tracking-tighter mix-blend-color-burn">
                UNE AMBIANCE<br />COMPOSÉE.
            </h1>
            <p className="mt-4 text-3xl italic font-serif font-light opacity-80">
                Pas générée.
            </p>
            <div className="h-[2px] w-24 bg-[#2A2622] mx-auto my-8 opacity-40" />
            <p className="font-sans font-bold text-xs uppercase tracking-[0.3em]">
                Pour se concentrer. Pour s’évader. Librement.
            </p>
        </div>

        <div onClick={onExplore} className="absolute inset-0 cursor-pointer" title="Tap to explore" />
    </section>
);

// 9. SHADOWS (Dark, moody, subtle)
const V9: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0F0F10] text-[#555] flex items-center justify-center overflow-hidden">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
        />

        <div className="text-center z-10">
            <h1 className="text-[#333] text-[15vw] font-black leading-none opacity-20 select-none">
                SILENCE
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#E0E0E0] mix-blend-screen w-full">
                <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4">Une ambiance composée.</h2>
                <h3 className="text-xl md:text-3xl font-serif italic text-neutral-500 mb-8">Pas générée.</h3>
                <p className="text-[10px] uppercase tracking-[0.5em] opacity-80">
                    Pour se concentrer. Pour s’évader. Librement.
                </p>
                <div className="mt-4 text-[9px] opacity-30">Une app de musiques d'ambiances.</div>
            </div>
        </div>
        <button onClick={onExplore} className="absolute bottom-16 text-neutral-700 hover:text-white transition-colors uppercase text-xs tracking-widest">
            Commencer
        </button>
    </section>
);

// 10. HAIKU (Typographic structure)
const V10: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F7F7F7] text-black flex flex-col items-start justify-center pl-[15vw]">
        <div className="flex flex-col gap-12 border-l border-black/10 pl-8 font-serif">
            <div>
                <h1 className="text-xl opacity-40 mb-2 font-sans font-normal uppercase tracking-widest text-[10px]">Une app de musiques d'ambiances.</h1>
                <h1 className="text-5xl md:text-7xl leading-tight">
                    Une ambiance<br />composée.
                </h1>
            </div>

            <div>
                <h2 className="text-4xl md:text-5xl italic text-neutral-400">
                    Pas générée.
                </h2>
            </div>

            <div>
                <p className="text-sm font-sans uppercase tracking-[0.1em] text-neutral-600 max-w-xs leading-relaxed">
                    Pour se concentrer.<br />
                    Pour s’évader.<br />
                    Librement.
                </p>
            </div>
        </div>
        <button onClick={onExplore} className="absolute bottom-12 left-[15vw] ml-8 px-6 py-2 border border-black/10 hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest">
            Entrer
        </button>
    </section>
);

// 11. FOG (Blurry, mysterious)
const V11: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#B0B8C0] text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl" />

        <div className="relative z-10 text-center mix-blend-overlay text-[#1F2937]">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight opacity-80 blur-[1px] hover:blur-none transition-all duration-700">
                Une Ambiance<br />Composée.
            </h1>
            <div className="my-8 h-[1px] bg-current w-1/3 mx-auto" />
            <h2 className="text-3xl font-light uppercase tracking-widest">Pas générée.</h2>
            <p className="mt-4 text-xs font-bold tracking-[0.3em] opacity-60">Une app de musiques d'ambiances.</p>
        </div>

        <div className="absolute bottom-12 text-[#1F2937] opacity-60 text-xs font-sans text-center">
            Pour se concentrer. Pour s’évader. Librement.
            <div onClick={onExplore} className="mt-4 cursor-pointer hover:scale-125 transition-transform inline-block">
                <ArrowDown size={20} />
            </div>
        </div>
    </section>
);

// 12. RUST (Wabi sabi decay)
const V12: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#523A28] text-[#E0C097] flex flex-col justify-center items-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <div className="border border-[#E0C097]/30 p-12 md:p-20 relative before:content-[''] before:absolute before:top-[-10px] before:left-[-10px] before:w-10 before:h-10 before:border-t before:border-l before:border-[#E0C097]/60 after:content-[''] after:absolute after:bottom-[-10px] after:right-[-10px] after:w-10 after:h-10 after:border-b after:border-r after:border-[#E0C097]/60">
            <h1 className="text-4xl md:text-6xl font-mono mb-4 text-center">
                UNE AMBIANCE<br />COMPOSÉE.
            </h1>
            <p className="text-center font-serif italic text-2xl opacity-70 mb-8 max-w-lg mx-auto">
                "Pas générée."
            </p>
            <div className="flex justify-between items-center text-[9px] uppercase tracking-widest border-t border-[#E0C097]/20 pt-4">
                <span>Une app de musiques d'ambiances.</span>
                <span>Librement.</span>
            </div>
            <div className="text-center mt-8 text-xs opacity-50">Pour se concentrer. Pour s’évader.</div>
        </div>
        <button onClick={onExplore} className="mt-12 text-[#E0C097] border-b border-transparent hover:border-[#E0C097] transition-all pb-1 text-sm uppercase tracking-wide">
            Découvrir
        </button>
    </section>
);

// 13. INK DROP (Fluid)
const V13: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#EAEAEA] text-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-[40vw] h-[40vw] bg-black rounded-full opacity-5 blur-3xl"
        />

        <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-[4rem] md:text-[6rem] leading-none font-black tracking-tighter">
                UNE AMBIANCE
            </h1>
            <h1 className="text-[4rem] md:text-[6rem] leading-none font-serif italic font-thin z-20">
                COMPOSÉE.
            </h1>
            <h1 className="text-[2rem] md:text-[3rem] font-medium mt-4 tracking-wide opacity-80">
                PAS GÉNÉRÉE.
            </h1>

            <p className="mt-12 font-mono text-xs text-neutral-500 uppercase tracking-widest text-center">
                Pour se concentrer. Pour s’évader. Librement.<br />
                <span className="opacity-50 text-[10px]">Une app de musiques d'ambiances.</span>
            </p>
        </div>
        <button onClick={onExplore} className="absolute bottom-12 w-16 h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
            <Play size={20} fill="currentColor" />
        </button>
    </section>
);

// 14. MONOSPACE (Technical yet simple)
const V14: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black font-mono flex flex-col p-6 md:p-12 justify-between">
        <div className="flex justify-between items-start text-xs uppercase tracking-tight">
            <div>FIG 14.</div>
            <div>Une app de musiques d'ambiances.</div>
            <div>REF: WABI-SABI</div>
        </div>

        <div className="self-center text-center">
            <h1 className="text-4xl md:text-6xl font-normal leading-snug">
                ( UNE AMBIANCE )<br />
                {'{'} COMPOSÉE {'}'}
            </h1>
            <div className="my-6">
                <span className="bg-black text-white px-3 py-1 text-sm">NOT GENERATED</span>
                <span className="ml-4 text-lg italic">Pas générée.</span>
            </div>
        </div>

        <div className="flex justify-between items-end border-t border-black pt-4">
            <p className="max-w-md text-xs leading-relaxed uppercase">
                Pour se concentrer.<br />Pour s’évader.<br />Librement.
            </p>
            <button onClick={onExplore} className="uppercase text-xs font-bold hover:underline">
                [ START ]
            </button>
        </div>
    </section>
);

// 15. ASYMMETRIC GRID
const V15: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F2EFE9] text-[#1c1c1c] grid grid-cols-12 grid-rows-6">
        <div className="col-span-12 row-span-4 flex items-end p-8 md:p-16">
            <h1 className="text-7xl md:text-9xl font-thin tracking-tighter">
                Une Ambiance<br />
                <span className="font-bold">Composée.</span>
            </h1>
        </div>
        <div className="col-span-8 md:col-span-4 row-span-2 border-t border-black/10 p-8">
            <h2 className="text-2xl italic font-serif mb-4">Pas générée.</h2>
            <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">Une app de musiques d'ambiances.</p>
        </div>
        <div className="col-span-4 md:col-span-8 row-span-2 border-t border-l border-black/10 p-8 flex flex-col justify-between items-start">
            <p className="text-sm font-medium opacity-80 max-w-xs">
                Pour se concentrer. Pour s’évader. Librement.
            </p>
            <button onClick={onExplore} className="self-end bg-[#1c1c1c] text-[#F2EFE9] w-12 h-12 flex items-center justify-center rounded-full hover:scale-105 transition-transform">
                <ArrowDown />
            </button>
        </div>
    </section>
);

// 16. GRAIN FIELD
const V16: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#8C867D] text-white flex items-center justify-center overflow-hidden">
        {/* SVG Grain */}
        <div className="absolute inset-0 opacity-40 mix-blend-soft-light filter contrast-150 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="relative z-10 text-center">
            <div className="inline-block border border-white/30 px-6 py-2 rounded-full text-[10px] uppercase mb-8 backdrop-blur-sm">
                Une app de musiques d'ambiances.
            </div>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-4">
                Une Ambiance
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
                Composée.
            </h1>
            <h2 className="text-2xl font-light opacity-80">
                Pas générée.
            </h2>
            <div className="mt-12 text-xs font-mono uppercase tracking-[0.2em] opacity-60">
                Pour se concentrer / Pour s’évader / Librement
            </div>
        </div>
        <button onClick={onExplore} className="absolute bottom-12 border-b border-white pb-1 font-serif italic text-lg hover:opacity-50 transition-opacity z-20">
            Explorer
        </button>
    </section>
);

// 17. OFFSET TYPOGRAPHY
const V17: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-[#eee] flex flex-col justify-center px-4 md:px-20 overflow-hidden">
        <h1 className="text-[12vw] font-bold leading-[0.8]">UNE</h1>
        <h1 className="text-[12vw] font-normal italic leading-[0.8] ml-[15vw] text-[#888]">AMBIANCE</h1>
        <h1 className="text-[12vw] font-bold leading-[0.8]">COMPOSÉE.</h1>

        <div className="absolute top-1/2 right-4 md:right-20 -translate-y-1/2 text-right">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Pas générée.</h2>
            <p className="text-[10px] uppercase tracking-widest text-[#666] mb-8">
                Pour se concentrer.<br />Pour s’évader.<br />Librement.
            </p>
            <div className="text-[9px] text-[#444] mb-8">Une app de musiques d'ambiances.</div>

            <button onClick={onExplore} className="w-16 h-16 border border-[#333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors ml-auto">
                <ArrowDown />
            </button>
        </div>
    </section>
);

// 18. ROTATED
const V18: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#D6D3CD] text-[#222] overflow-hidden flex items-center justify-center">
        <div className="rotate-[-5deg] text-center p-12 border border-black/10 bg-[#E6E4E0] shadow-xl max-w-2xl">
            <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-6 border-b border-black/10 pb-4">
                Une app de musiques d'ambiances.
            </p>
            <h1 className="text-5xl md:text-7xl font-serif mb-4 text-[#1a1a1a]">
                Une ambiance<br />composée.
            </h1>
            <h2 className="text-2xl font-light italic text-[#555] mb-8">
                Pas générée.
            </h2>
            <p className="font-sans text-xs uppercase tracking-[0.2em] mb-4">
                Pour se concentrer. Pour s’évader. Librement.
            </p>
        </div>
        <button onClick={onExplore} className="absolute bottom-8 right-8 mix-blend-multiply opacity-50 hover:opacity-100 transition-opacity font-bold">
            SCROLL
        </button>
    </section>
);

// 19. VERTICAL STRIPES
const V19: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black flex">
        <div className="w-1/3 h-full border-r border-black/10 flex items-center justify-center p-8">
            <h1 className="text-5xl font-bold rotate-[-90deg] whitespace-nowrap opacity-10">COMPOSÉE</h1>
        </div>
        <div className="w-1/3 h-full border-r border-black/10 flex flex-col justify-center items-center p-8 text-center bg-[#F9F9F9]">
            <p className="absolute top-12 text-[10px] uppercase tracking-widest text-neutral-400">Une app de musiques d'ambiances.</p>
            <h1 className="text-4xl font-serif italic mb-4">Une Ambiance Composée.</h1>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-12">Pas générée.</h2>
            <button onClick={onExplore} className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-neutral-700">
                <ArrowDown size={14} />
            </button>
        </div>
        <div className="w-1/3 h-full flex items-end justify-center p-12">
            <p className="writing-vertical-rl text-xs uppercase tracking-[0.3em] opacity-60">
                Pour se concentrer. Pour s’évader. Librement.
            </p>
        </div>
    </section>
);

// 20. THE END (Minimalist finale)
const V20: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-[#fff] flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-light tracking-[0.5em] uppercase text-center leading-relaxed">
            Une Ambiance<br />
            Composée.<br />
            <span className="text-neutral-600">Pas générée.</span>
        </h1>

        <div className="absolute bottom-20 text-center opacity-40">
            <div className="text-[10px] mb-2 uppercase tracking-widest">Une app de musiques d'ambiances.</div>
            <p className="text-[10px] uppercase tracking-widest">Pour se concentrer. Pour s’évader. Librement.</p>
        </div>

        <button onClick={onExplore} className="mt-16 px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-xs uppercase tracking-widest">
            Entrer
        </button>
    </section>
);


// ============================================================================
// MAIN COMPONENT & SWITCHER logic
// ============================================================================

const VARIATIONS = [
    V1, V2, V3, V4, V5, V6, V7, V8, V9, V10,
    V11, V12, V13, V14, V15, V16, V17, V18, V19, V20
];

interface HeroAlternativeGProps {
    onComplete?: () => void;
}

const HeroAlternativeG: React.FC<HeroAlternativeGProps> = ({ onComplete }) => {
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
            <div className="absolute bottom-4 right-4 z-[9999] flex items-center gap-2 bg-black/80 backdrop-blur-md p-2 rounded-lg text-white font-mono text-xs">
                <button onClick={prevVariation} className="hover:text-accent-primary px-2">&lt;</button>
                <span>{currentIndex + 1} / {VARIATIONS.length}</span>
                <button onClick={nextVariation} className="hover:text-accent-primary px-2">&gt;</button>
            </div>
            <div className="absolute bottom-4 left-4 z-[9999] text-[10px] text-black/50 pointer-events-none mix-blend-difference font-mono">
                WABI-SABI :: {CurrentHero.name || `V${currentIndex + 1}`}
            </div>
        </div>
    );
};

export default HeroAlternativeG;
