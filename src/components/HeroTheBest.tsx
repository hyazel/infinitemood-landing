import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';

// Image Imports
import islandImage from '../assets/fragmnt-island.jpg';
import islandeImage from '../assets/fragmnt-islande.jpg';
import desertImage from '../assets/fragmnt-desert.jpg';
import townImage from '../assets/fragmnt-town.jpg';
import europeImage from '../assets/fragmnt-europe.jpg';
import brutalismImage from '../assets/fragmnt-brutalism.jpg';
import jungleImage from '../assets/fragmnt-jungle.jpg';

interface HeroProps {
    onExplore: () => void;
}

const IMAGES = [islandImage, islandeImage, desertImage, townImage, europeImage, brutalismImage, jungleImage];

// ============================================================================
// STYLE 1: "Mist & Peaks" - Minimalist, ethereal bottom row
// ============================================================================
const V1: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-neutral-900 text-white overflow-hidden flex flex-col items-center justify-start pt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="z-10 text-center space-y-6"
            >
                <h1 className="text-5xl md:text-7xl font-light tracking-tight">
                    Des paysages sonores.<br />
                    <span className="font-serif italic">Composées pour durer.</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-neutral-400 tracking-wide">
                    Pour se concentrer. S’évader. <span className="text-white">Librement</span>
                </p>
                <button
                    onClick={onExplore}
                    className="mt-8 px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors uppercase text-sm tracking-widest"
                >
                    Explorer
                </button>
            </motion.div>

            {/* Blurred Images at Bottom */}
            <div className="absolute bottom-0 w-full h-[40vh] flex items-end justify-center gap-4 px-4 overflow-hidden mask-image-linear-to-t">
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10" />
                {IMAGES.slice(0, 5).map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 0.6 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 1.5, type: 'spring' }}
                        className="w-[15vw] h-[30vh] md:h-[40vh] relative origin-bottom rounded-t-2xl overflow-hidden filter blur-[4px] hover:blur-0 transition-all duration-700"
                        style={{ y: i % 2 === 0 ? 0 : 40 }}
                    >
                        <img src={img} alt="" className="w-full h-full object-cover opacity-80" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// ============================================================================
// STYLE 2: "Deep Focus" - Depth of Field, darker, cinematic
// ============================================================================
const V2: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-[#050505] text-neutral-200 overflow-hidden flex flex-col justify-center items-center">

            {/* Background Fragments - Floating Down */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {IMAGES.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{
                            y: [0, 20, 0],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
                            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i }
                        }}
                        className={`absolute w-64 h-96 rounded-xl overflow-hidden opacity-30 blur-sm`}
                        style={{
                            left: `${15 + (i * 12)}%`,
                            bottom: `${-10 + (i % 3) * 5}%`,
                            filter: `blur(${2 + (i % 3)}px)`,
                            zIndex: 1
                        }}
                    >
                        <img src={img} alt="" className="w-full h-full object-cover grayscale mix-blend-screen" />
                    </motion.div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-1 bg-blend-multiply" />
            </div>

            <div className="relative z-10 text-center space-y-8 mix-blend-color-dodge">
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                    Paysages<br /><span className="text-stroke text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>Sonores.</span>
                </h1>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-lg uppercase tracking-[0.5em] text-neutral-500">Composées pour durer</p>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-500 to-transparent" />
                    <p className="font-serif italic text-2xl text-neutral-300">"Pour se concentrer. S’évader. Librement"</p>
                </div>

                <button onClick={onExplore} className="mt-12 group flex items-center gap-2 mx-auto text-sm uppercase tracking-widest hover:text-white transition-colors">
                    Explorer <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
            </div>
        </section>
    );
};

// ============================================================================
// STYLE 3: "Glass Gallery" - Clean, modern, glassmorphism bottom
// ============================================================================
const V3: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-slate-100 text-slate-900 overflow-hidden flex flex-col justify-between pt-24 pb-0">
            <div className="container mx-auto px-8 z-10 flex flex-col items-center text-center">
                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-7xl md:text-8xl font-serif tracking-tight leading-none mb-6"
                >
                    Des paysages sonores.<br />
                    <i className="font-thin text-slate-400">Composées pour durer.</i>
                </motion.h1>
                <div className="flex items-center gap-4">
                    <span className="h-[1px] w-12 bg-slate-300"></span>
                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Pour se concentrer. S’évader. Librement</p>
                    <span className="h-[1px] w-12 bg-slate-300"></span>
                </div>
                <button onClick={onExplore} className="mt-8 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                    EXPLORER
                </button>
            </div>

            {/* Glassy Cards at bottom */}
            <div className="relative w-full h-[35vh] flex items-end justify-center gap-2 pb-[-5vh]">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-20 pointer-events-none" />
                {IMAGES.map((img, i) => (
                    <motion.div
                        key={i}
                        className="relative w-32 md:w-48 h-64 md:h-80 bg-white shadow-2xl rounded-t-xl overflow-hidden transform-gpu"
                        initial={{ y: 200 }}
                        animate={{ y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.8, type: 'spring' }}
                        style={{
                            marginBottom: -40,
                            rotate: (i - 3) * 2,
                            scale: 1 - Math.abs(i - 3) * 0.05
                        }}
                    >
                        <img src={img} alt="" className="w-full h-full object-cover filter blur-[2px] opacity-80 hover:blur-0 transition-all duration-500" />
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// ============================================================================
// STYLE 4: "Vignette Fragment" - Central focus, blurred edges
// ============================================================================
const V4: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-[#1a1a1a] text-white overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 z-0">
                {/* Tiled blurred background */}
                <div className="grid grid-cols-4 h-full opacity-20 mask-image-gradient-b">
                    {IMAGES.slice(0, 4).map((img, i) => (
                        <div key={i} className="h-full relative overflow-hidden">
                            <img src={img} className="object-cover h-full w-full blur-md scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-transparent" />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a] to-transparent z-10" />
            </div>

            <div className="relative z-20 text-center space-y-12">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-bold tracking-tight"
                    >
                        Des paysages sonores.
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl font-serif italic text-neutral-400"
                    >
                        Composées pour durer.
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    <p className="uppercase tracking-[0.3em] font-light text-sm text-neutral-500">Pour se concentrer. S’évader. Librement</p>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <button onClick={onExplore} className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                            <span className="flex items-center space-x-5">
                                <span className="pr-6 text-gray-100">Explorer les Fragmnts</span>
                            </span>
                            <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">&rarr;</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom peek images */}
            <div className="absolute -bottom-20 left-0 w-full flex justify-between gap-4 px-8 opacity-40 blur-sm mix-blend-screen pointer-events-none">
                {IMAGES.slice(0, 5).map((img, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                        className="w-48 h-48 rounded-full overflow-hidden"
                    >
                        <img src={img} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// ============================================================================
// STYLE 5: "Horizon Lines" - Horizontal strips, architectural
// ============================================================================
const V5: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-[#FDFBF7] text-[#2C2C2C] overflow-hidden flex flex-col">
            <div className="flex-grow flex flex-col justify-center items-start px-8 md:px-24 z-10">
                <div className="space-y-2">
                    <motion.div initial={{ width: 0 }} animate={{ width: 100 }} className="h-1 bg-[#2C2C2C] mb-8" />
                    <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
                        Paysages<br />Sonores.
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight opacity-70">
                        Composées pour durer.
                    </h2>
                </div>
                <div className="mt-12 flex items-center justify-between w-full max-w-xl border-t border-[#2C2C2C]/20 pt-6">
                    <p className="font-mono text-sm uppercase">Pour se concentrer. S’évader. Librement</p>
                    <button onClick={onExplore} className="underline font-bold uppercase hover:text-orange-600 transition-colors">Explorer</button>
                </div>
            </div>

            {/* Bottom Strips */}
            <div className="h-[25vh] w-full flex items-end">
                {IMAGES.map((img, i) => (
                    <motion.div
                        key={i}
                        className="h-full flex-grow relative overflow-hidden group border-r border-white/20"
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ delay: i * 0.1, duration: 0.8, ease: "circOut" }}
                    >
                        <img src={img} className="absolute inset-0 w-full h-full object-cover filter grayscale blur-[3px] group-hover:grayscale-0 group-hover:blur-0 transition-all duration-500" />
                        <div className="absolute inset-0 bg-[#FDFBF7] opacity-20 group-hover:opacity-0 transition-opacity" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// ============================================================================
// STYLE 6: "The Dock" - Mac OS style, floating glassy bottom
// ============================================================================
const V6: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-900 text-white flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black" />
        <div className="z-10 text-center mb-32">
            <h1 className="text-6xl font-thin tracking-tight mb-4">Paysages Sonores</h1>
            <h2 className="text-6xl font-serif italic text-neutral-400">Composées pour durer</h2>
            <button onClick={onExplore} className="mt-12 text-xs uppercase tracking-[0.3em] border-b border-white/30 pb-2 hover:border-white transition-colors">Explorer</button>
        </div>
        <div className="absolute bottom-12 flex gap-4 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/5 shadow-2xl items-end">
            {IMAGES.slice(0, 6).map((img, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.5, y: -20, margin: "0 10px" }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden cursor-pointer shadow-lg origin-bottom transition-all duration-300"
                >
                    <img src={img} className="w-full h-full object-cover" />
                </motion.div>
            ))}
        </div>
    </section>
);

// ============================================================================
// STYLE 7: "Kinetic Marquee" - Big text, bottom slider
// ============================================================================
const V7: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#E0E0E0] text-black overflow-hidden flex flex-col justify-between pt-20">
        <div className="relative z-10 px-8">
            <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter mix-blend-multiply opacity-90">
                PAYSAGES<br />SONORES.
            </h1>
            <p className="mt-8 text-xl font-medium tracking-wide max-w-md">
                Une collection d&apos;ambiances composées pour durer. Pour se concentrer, s&apos;évader, librement.
            </p>
        </div>
        <div className="w-full overflow-hidden whitespace-nowrap pb-12">
            <motion.div
                animate={{ x: "-50%" }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                className="flex gap-8 items-end"
            >
                {[...IMAGES, ...IMAGES].map((img, i) => (
                    <div key={i} className="w-[300px] h-[200px] md:w-[400px] md:h-[250px] shrink-0 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                        <img src={img} className="w-full h-full object-cover" />
                    </div>
                ))}
            </motion.div>
        </div>
        <button onClick={onExplore} className="absolute top-8 right-8 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <ArrowDown />
        </button>
    </section>
);

// ============================================================================
// STYLE 8: "Fan Deck" - Cards fanned out
// ============================================================================
const V8: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-stone-900 text-stone-100 flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-widest text-center z-20 mix-blend-difference">
            Paysages Sonores
        </h1>
        <div className="mt-4 text-center z-20 h-8">
            <p className="text-sm font-mono opacity-60">Composées pour durer</p>
        </div>
        <div className="absolute bottom-[-10vh] w-full flex justify-center items-end h-[60vh]">
            {IMAGES.slice(0, 5).map((img, i) => (
                <motion.div
                    key={i}
                    initial={{ rotate: 0, y: 100 }}
                    animate={{ rotate: (i - 2) * 10, y: Math.abs(i - 2) * 10 }}
                    whileHover={{ y: -50, rotate: 0, scale: 1.1, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="w-[20vw] h-[30vw] md:h-[40vh] bg-stone-800 border-4 border-stone-100 shadow-2xl relative -ml-[10vw] first:ml-0 overflow-hidden origin-bottom"
                >
                    <img src={img} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors" />
                </motion.div>
            ))}
        </div>
        <button onClick={onExplore} className="absolute bottom-12 z-30 bg-stone-100 text-stone-900 px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors">
            Explorer
        </button>
    </section>
);

// ============================================================================
// STYLE 9: "Noir Cinema" - B&W, elegant serif
// ============================================================================
const V9: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

        <div className="z-10 text-center space-y-2">
            <h1 className="text-6xl md:text-9xl font-serif italic tracking-tighter">
                Paysages.
            </h1>
            <p className="text-sm md:text-base font-sans uppercase tracking-[0.4em] text-neutral-500">
                Sonores &bull; Composées &bull; Durables
            </p>
        </div>

        <div className="absolute bottom-0 w-full h-1/3 flex border-t border-white/10">
            {IMAGES.slice(0, 4).map((img, i) => (
                <div key={i} className="flex-1 relative group overflow-hidden border-r border-white/10 last:border-r-0">
                    <img src={img} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-110" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-white text-black px-4 py-1 text-xs uppercase font-bold transform rotate-[-90deg]">View</span>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={onExplore} className="absolute top-1/2 mt-32 border border-white/30 px-6 py-2 rounded-full text-xs uppercase hover:bg-white hover:text-black transition-all">
            Start Experience
        </button>
    </section>
);

// ============================================================================
// STYLE 10: "Perspective Plane" - 3D floor
// ============================================================================
const V10: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-slate-900 text-white overflow-hidden perspective-[1000px] flex flex-col items-center">
        <div className="mt-32 text-center z-10 relative">
            <div className="text-[10px] uppercase tracking-[1em] text-cyan-400 mb-4">Volume 01</div>
            <h1 className="text-7xl md:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-600">
                PAYSAGES<br />SONORES
            </h1>
            <button onClick={onExplore} className="mt-8 text-cyan-400 border-b border-cyan-400 pb-1 text-sm uppercase tracking-widest hover:text-white hover:border-white transition-colors">Explorer</button>
        </div>

        <motion.div
            initial={{ rotateX: 45, y: 100, opacity: 0 }}
            animate={{ rotateX: 20, y: 50, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute bottom-[-10%] w-[120%] h-[60%] flex gap-8 justify-center transform-style-3d opacity-80"
        >
            {IMAGES.map((img, i) => (
                <div key={i} className="w-64 h-96 shrink-0 bg-slate-800 rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 hover:-translate-y-8 transition-transform duration-500">
                    <img src={img} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
                </div>
            ))}
        </motion.div>
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none z-20" />
    </section>
);

// ============================================================================
// STYLE 11: "Text Mask" - Image inside huge text at bottom
// ============================================================================
const V11: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black flex flex-col justify-between pt-12">
        <div className="px-8 md:px-16">
            <p className="text-sm font-mono overflow-hidden whitespace-nowrap border-b border-black pb-4 mb-8">
                Infinite Mood // Audio Spatial System // v2.0
            </p>
            <h1 className="text-6xl font-bold max-w-2xl leading-tight">
                Des paysages sonores.<br />
                <span className="text-gray-400">Composées pour durer.</span>
            </h1>
        </div>

        <div className="relative w-full h-[40vh]">
            {/* The Text Mask */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 bg-white mix-blend-screen">
                <h1 className="text-[25vw] leading-none font-black text-black">FRAGMNT</h1>
            </div>
            {/* The Image layer behind text */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <motion.div animate={{ x: [-50, 50, -50] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-[120%] h-full flex pt-12">
                    {IMAGES.map((img, i) => (
                        <img key={i} src={img} className="w-1/4 h-full object-cover grayscale contrast-125" />
                    ))}
                </motion.div>
            </div>
            <button onClick={onExplore} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-black text-white px-8 py-2 rounded-full uppercase text-xs font-bold hover:scale-105 transition-transform">
                Explorer
            </button>
        </div>
    </section>
);

// ============================================================================
// STYLE 12: "Focus Trap" - Dark with spotlight text
// ============================================================================
const V12: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-950 text-neutral-200 flex flex-col items-center justify-center font-serif">
        <div className="z-10 text-center mix-blend-difference">
            <h1 className="text-8xl italic mb-6">Paysages.</h1>
            <p className="font-sans text-xs uppercase tracking-[0.5em] text-neutral-400">Pour se concentrer. S'évader.</p>
        </div>

        <div className="absolute bottom-0 w-full h-[25vh] overflow-hidden opacity-50 hover:opacity-100 transition-opacity duration-700">
            <div className="flex w-full h-full">
                {IMAGES.slice(0, 5).map((img, i) => (
                    <div key={i} className="flex-1 relative overflow-hidden">
                        <img src={img} className="w-full h-full object-cover blur-[2px] transition-all duration-500 hover:blur-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                    </div>
                ))}
            </div>
        </div>

        <button onClick={onExplore} className="absolute bottom-4 z-20 text-neutral-500 hover:text-white transition-colors">
            <ArrowDown className="animate-bounce" />
        </button>
    </section>
);

// ============================================================================
// STYLE 13: "Floating Dust" - Small particle images
// ============================================================================
const V13: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-white overflow-hidden flex flex-col items-center pt-32">
        <h1 className="text-6xl font-light tracking-tighter">Paysages Sonores</h1>
        <h2 className="text-xl mt-4 font-mono text-green-400">:: Composées pour durer</h2>

        <div className="absolute bottom-0 w-full h-1/2 pointer-events-none">
            {IMAGES.map((img, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute rounded-full overflow-hidden border border-white/20"
                    style={{
                        width: Math.random() * 80 + 40 + 'px',
                        height: Math.random() * 80 + 40 + 'px',
                        left: (i + 1) * 12 + '%',
                        bottom: Math.random() * 20 + '%',
                        filter: 'blur(1px)'
                    }}
                >
                    <img src={img} className="w-full h-full object-cover" />
                </motion.div>
            ))}
        </div>
        <button onClick={onExplore} className="mt-8 border border-green-400/50 text-green-400 px-6 py-2 uppercase text-xs hover:bg-green-400 hover:text-black transition-colors z-20">
            Initialiser
        </button>
    </section>
);

// ============================================================================
// STYLE 14: "Minimal Stack" - Swiss design
// ============================================================================
const V14: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f2f2f2] text-black p-8 flex flex-col justify-between border-8 border-white">
        <div className="flex justify-between items-start">
            <h1 className="text-8xl font-black tracking-[-0.05em] leading-[0.8]">
                PAYSAGES<br />SONORES.
            </h1>
            <div className="w-32 h-32 rounded-full bg-black text-white flex items-center justify-center text-xs text-center p-4 rotate-12">
                POUR SE<br />CONCENTRER
            </div>
        </div>

        <div className="flex items-end justify-between">
            <div className="space-y-4">
                <button onClick={onExplore} className="text-xl font-bold underline hover:no-underline">EXPLORER &rarr;</button>
                <div className="text-sm max-w-xs font-medium text-gray-500">
                    Des compositions originales. Pas d'IA. Juste de l'émotion pure et durable.
                </div>
            </div>

            <div className="flex -space-x-12">
                {IMAGES.slice(0, 4).map((img, i) => (
                    <div key={i} className="w-40 h-56 bg-white p-2 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
                        <img src={img} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 15: "Glitch Strip" - Hacked feel
// ============================================================================
const V15: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-900 text-white flex flex-col justify-center items-center font-mono">
        <div className="relative z-10 mix-blend-exclusion">
            <h1 className="text-6xl md:text-8xl font-bold uppercase italic -skew-x-12">Paysages</h1>
            <h1 className="text-6xl md:text-8xl font-bold uppercase italic -skew-x-12 ml-16 text-red-500 absolute top-0 left-0 opacity-50 animate-pulse">Paysages</h1>
            <h2 className="text-2xl mt-4 text-center">/// Composées pour durer</h2>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 flex gap-[2px]">
            {IMAGES.map((img, i) => (
                <div key={i} className="flex-1 relative overflow-hidden group">
                    <img src={img} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-red-500 mix-blend-overlay opacity-0 group-hover:opacity-100" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white opacity-20" />
                </div>
            ))}
        </div>

        <button onClick={onExplore} className="mt-12 bg-white text-black px-6 py-2 uppercase font-bold hover:bg-red-500 hover:text-white transition-colors skew-x-[-12deg]">
            Access System
        </button>
    </section>
);

// ============================================================================
// STYLE 16: "Vertical Slices" - Curtain effect
// ============================================================================
const V16: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section className="relative w-full h-screen bg-slate-50 text-slate-800 overflow-hidden">
            <div className="absolute inset-0 flex">
                {IMAGES.map((img, i) => (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "70%" }}
                        whileHover={{ y: "60%" }}
                        transition={{ duration: 1, delay: i * 0.1, ease: 'circOut' }}
                        key={i}
                        className="flex-1 h-full relative border-r border-white"
                    >
                        <img src={img} className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all" />
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold uppercase tracking-vertical writing-mode-vertical">Frag.0{i + 1}</div>
                    </motion.div>
                ))}
            </div>

            <div className="absolute top-0 w-full h-[70%] flex flex-col items-center justify-center pointer-events-none z-10 bg-gradient-to-b from-slate-50 via-slate-50 to-transparent">
                <h1 className="text-7xl font-light tracking-wide mb-4 text-center">Paysages<br /><span className="font-serif italic font-bold">Sonores</span></h1>
                <p className="text-xl tracking-widest uppercase">Composées pour durer</p>
                <div className="mt-8 pointer-events-auto">
                    <button onClick={onExplore} className="border-b-2 border-slate-800 pb-1 uppercase font-bold hover:text-orange-500 hover:border-orange-500 transition-colors">Explorer</button>
                </div>
            </div>
        </section>
    );
}

// ============================================================================
// STYLE 17: "The Eye" - Circular mask at bottom
// ============================================================================
const V17: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#191919] text-[#e5e5e5] flex flex-col items-center justify-center">
        <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight">Des paysages sonores.</h1>
            <h2 className="text-2xl mt-4 font-light opacity-50">Composées pour durer.</h2>
        </div>

        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#e5e5e5]/10">
            <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
                <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                    <img src={IMAGES[0]} className="w-full h-full object-cover" />
                    <img src={IMAGES[1]} className="w-full h-full object-cover" />
                    <img src={IMAGES[2]} className="w-full h-full object-cover" />
                    <img src={IMAGES[3]} className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity">
                <button onClick={onExplore} className="bg-white text-black px-6 py-2 rounded-full uppercase text-xs font-bold">Explorer</button>
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 18: "Split Typography" - Left text, right bottom image
// ============================================================================
const V18: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-rose-50 text-rose-950 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center p-12 md:p-24 relative">
            <div className="relative z-10">
                <h1 className="text-8xl font-black leading-none mb-6">PAYS-<br />AGES.</h1>
                <p className="border-l-4 border-rose-950 pl-6 py-2 text-xl max-w-xs font-serif italic">
                    Pour se concentrer. S’évader. Librement.
                </p>
                <button onClick={onExplore} className="mt-12 px-8 py-4 bg-rose-950 text-rose-50 font-bold uppercase hover:bg-rose-800 transition-colors">
                    Explorer
                </button>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-10" />
        </div>

        <div className="flex-1 relative bg-rose-100 flex items-end justify-center overflow-hidden">
            <div className="relative w-full max-w-md h-[50vh] mb-[-5vh]">
                <motion.div
                    className="w-full h-full relative"
                >
                    <img src={IMAGES[2]} className="absolute bottom-0 left-0 w-3/4 h-3/4 object-cover shadow-2xl z-10 outline outline-4 outline-rose-50" />
                    <img src={IMAGES[4]} className="absolute bottom-12 right-0 w-2/3 h-2/3 object-cover shadow-2xl z-0 filter sepia brightness-90" />
                </motion.div>
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 19: "Film Strip" - Continuous scroll at bottom
// ============================================================================
const V19: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-zinc-900 text-zinc-100 overflow-hidden flex flex-col justify-center items-center">
        <div className="text-center z-10 mb-32 mix-blend-exclusion">
            <h1 className="text-[10vw] font-bold leading-none tracking-tighter">INFINITE.</h1>
            <p className="text-xl uppercase tracking-[0.5em] text-zinc-400">Paysages Sonores</p>
        </div>

        <div className="absolute bottom-12 w-[200%] flex gap-4 overflow-hidden -rotate-2 opacity-80">
            <motion.div animate={{ x: "-50%" }} transition={{ duration: 20, ease: "linear", repeat: Infinity }} className="flex gap-4">
                {[...IMAGES, ...IMAGES, ...IMAGES].map((img, i) => (
                    <div key={i} className="w-56 h-32 bg-zinc-800 rounded-lg overflow-hidden relative">
                        <div className="absolute top-2 bottom-2 left-2 border-l-2 border-dashed border-white/20" />
                        <div className="absolute top-2 bottom-2 right-2 border-r-2 border-dashed border-white/20" />
                        <img src={img} className="w-full h-full object-cover mx-auto" style={{ width: 'calc(100% - 24px)' }} />
                    </div>
                ))}
            </motion.div>
        </div>

        <button onClick={onExplore} className="absolute bottom-4 z-20 text-xs text-zinc-500 uppercase hover:text-white transition-colors">Start Navigation</button>
    </section>
);

// ============================================================================
// STYLE 20: "The Void" - Minimalist dark gradients
// ============================================================================
const V20: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-end pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-blue-900/20" />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center w-full">
            <h1 className="text-6xl font-thin tracking-[0.2em] blur-[1px] hover:blur-none transition-all duration-1000">PAYSAGES</h1>
            <div className="w-[1px] h-32 bg-gradient-to-b from-white to-transparent mx-auto mt-8 opacity-20" />
        </div>

        <div className="relative z-10 flex gap-2 items-end opacity-60 hover:opacity-100 transition-opacity">
            {IMAGES.slice(0, 3).map((img, i) => (
                <div key={i} className="w-32 h-40 bg-gray-900 rounded-t-full overflow-hidden filter blur-sm hover:blur-none transition-all duration-500">
                    <img src={img} className="w-full h-full object-cover grayscale" />
                </div>
            ))}
        </div>

        <button onClick={onExplore} className="mt-8 border border-white/10 bg-white/5 backdrop-blur px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all">
            EXPLORER
        </button>
    </section>
);

// ============================================================================
// STYLE 21: "Scatter" - Polaroids scattered at bottom
// ============================================================================
const V21: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#FFFDF5] text-[#333] overflow-hidden flex flex-col justify-center items-center">
        <div className="z-10 text-center">
            <h1 className="text-8xl font-serif italic mb-2">Souvenirs.</h1>
            <p className="font-sans text-sm uppercase tracking-widest bg-black text-white px-2 py-1 inline-block transform -rotate-2">
                Paysages Sonores Composées
            </p>
        </div>

        <div className="absolute bottom-[-10%] w-full h-[40vh] flex justify-center items-center">
            {IMAGES.slice(0, 5).map((img, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 200, rotate: 0 }}
                    animate={{ y: 0, rotate: (i - 2) * 15 + Math.random() * 10 }}
                    whileHover={{ y: -50, rotate: 0, zIndex: 10, scale: 1.1 }}
                    className="w-48 h-60 bg-white p-3 shadow-xl absolute transition-all duration-300 transform origin-bottom"
                    style={{ left: `calc(50% + ${(i - 2) * 120}px)` }}
                >
                    <div className="w-full h-[85%] overflow-hidden bg-gray-100">
                        <img src={img} className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-2 text-[10px] font-handwriting text-gray-400 text-center">Fragmnt #{i + 1}</div>
                </motion.div>
            ))}
        </div>
        <button onClick={onExplore} className="absolute bottom-8 right-8 text-lg font-bold hover:translate-x-2 transition-transform">&rarr; Explore</button>
    </section>
);

// ============================================================================
// STYLE 22: "Gradient Mesh" - Colorful bottom haze
// ============================================================================
const V22: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black overflow-hidden flex flex-col justify-center items-center">
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            VIBRATIONS
        </h1>
        <p className="text-2xl font-light text-gray-500">Paysages Sonores. Composées pour durer.</p>

        <div className="absolute bottom-0 w-full h-[50vh] flex items-end opacity-80 mix-blend-multiply filter blur-xl">
            {IMAGES.slice(0, 4).map((img, i) => (
                <div key={i} className="flex-1 h-full bg-cover bg-center" style={{ backgroundImage: `url(${img})`, opacity: 0.5 + Math.random() * 0.5 }} />
            ))}
        </div>
        <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-white via-transparent to-transparent z-10" />

        <button onClick={onExplore} className="relative z-20 mt-12 px-12 py-4 shadow-[8px_8px_0px_#000] border-2 border-black bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold uppercase">
            Explorer
        </button>
    </section>
);

// ============================================================================
// STYLE 23: "Typographic Wall" - Text texture
// ============================================================================
const V23: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-orange-600 text-orange-100 overflow-hidden flex flex-col">
        <div className="absolute inset-0 opacity-10 break-words leading-[0.8] font-black text-9xl pointer-events-none select-none">
            {Array(20).fill("PAYSAGES SONORES ").join("")}
        </div>

        <div className="flex-grow flex items-center justify-center z-10">
            <div className="bg-orange-700/80 p-12 backdrop-blur-sm border border-orange-500 shadow-2xl max-w-2xl text-center">
                <h1 className="text-5xl font-bold mb-6">UNE EXPÉRIENCE AUDIO</h1>
                <p className="text-xl mb-8">Composée pour durer. Et s'évader.</p>
                <div className="flex gap-2 justify-center h-24">
                    {IMAGES.slice(0, 3).map((img, i) => (
                        <div key={i} className="w-24 h-full overflow-hidden grayscale hover:grayscale-0 transition-all">
                            <img src={img} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <button onClick={onExplore} className="absolute inset-x-0 bottom-0 bg-black text-white py-6 uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-colors">
            Commencer l'immersion
        </button>
    </section>
);

// ============================================================================
// STYLE 24: "Grid Reveal" - Layout based
// ============================================================================
const V24: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-100 text-black grid grid-rows-[1fr_auto] p-8 gap-8">
        <div className="bg-white rounded-3xl p-12 flex flex-col justify-center items-start shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-black rounded-full mb-8" />
            <h1 className="text-7xl font-medium tracking-tight mb-4">Des Paysages Sonores</h1>
            <p className="text-2xl text-gray-500">Pour se concentrer. S'évader. Librement.</p>
        </div>

        <div className="grid grid-cols-4 gap-4 h-48">
            <div className="col-span-1 bg-black rounded-2xl flex items-center justify-center p-8 cursor-pointer hover:bg-neutral-800 transition-colors" onClick={onExplore}>
                <span className="text-white text-xl font-bold flex items-center gap-2">Explore <ArrowDown className="rotate-[-45deg]" /></span>
            </div>
            {IMAGES.slice(0, 3).map((img, i) => (
                <div key={i} className="col-span-1 rounded-2xl overflow-hidden relative group">
                    <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-white/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">0{i + 1}</div>
                </div>
            ))}
        </div>
    </section>
);

// ============================================================================
// STYLE 25: "Pure & blur" - Simplicity
// ============================================================================
const V25: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black flex flex-col items-center justify-between pb-12 pt-12">
        <h1 className="text-[12vw] font-bold leading-none tracking-tighter mix-blend-multiply opacity-5">BACKGROUND</h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-4xl font-serif italic mb-2">Collection</h2>
            <h1 className="text-6xl font-bold uppercase tracking-widest mb-8">Paysages</h1>
            <button onClick={onExplore} className="border border-black px-12 py-3 uppercase text-xs tracking-[0.2em] hover:bg-black hover:text-white transition-colors">
                Open
            </button>
        </div>

        <div className="w-full px-4 flex justify-between items-end">
            <span className="text-xs font-mono">EST. 2024</span>
            <div className="flex gap-1" >
                {IMAGES.map((img, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ height: 100 }}
                        className="w-8 h-12 bg-gray-200 overflow-hidden rounded-sm transition-all duration-300 hover:w-24"
                    >
                        <img src={img} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </div>
            <span className="text-xs font-mono">SCROLL &darr;</span>
        </div>
    </section>
);


// ============================================================================
// STYLE 26: "Stacked Cards" - Material depth
// ============================================================================
const V26: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-stone-100 overflow-hidden flex flex-col items-center pt-20">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-stone-800 mb-8 z-20">Collection Sonore</h1>
        <div className="relative w-full max-w-md h-[60vh] flex items-center justify-center">
            {IMAGES.slice(0, 5).reverse().map((img, i) => (
                <motion.div
                    key={i}
                    initial={{ y: -50 * i, scale: 1 - (i * 0.05) }}
                    className="absolute w-64 h-96 bg-white p-2 rounded-xl shadow-xl border border-stone-200"
                    style={{
                        zIndex: i,
                        top: i * 40,
                        rotate: (i % 2 === 0 ? 3 : -3)
                    }}
                    whileHover={{ y: i * 10, rotate: 0 }}
                >
                    <img src={img} className="w-full h-full object-cover rounded-lg" />
                </motion.div>
            ))}
        </div>
        <button onClick={onExplore} className="z-20 mt-8 bg-black text-white px-8 py-3 rounded-full font-bold uppercase hover:scale-105 transition-transform">Découvrir</button>
    </section>
);

// ============================================================================
// STYLE 27: "Split Screen Interactive" - Mouse move interaction
// ============================================================================
const V27: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen flex">
        <div className="w-1/2 bg-black text-white flex items-center justify-center p-12 border-r border-white/20">
            <div className="space-y-6">
                <h1 className="text-7xl font-bold">L'ESPRIT.</h1>
                <p className="text-xl font-mono text-gray-500">POUR SE CONCENTRER</p>
                <button onClick={onExplore} className="border border-white px-6 py-2 uppercase hover:bg-white hover:text-black transition-colors">Entrer</button>
            </div>
        </div>
        <div className="w-1/2 bg-white text-black flex items-center justify-center p-12 group">
            <div className="space-y-6 text-right w-full">
                <h1 className="text-7xl font-bold">LE CORPS.</h1>
                <p className="text-xl font-mono text-gray-400 group-hover:text-black transition-colors">POUR S'ÉVADER</p>
            </div>
            <div className="absolute inset-0 bg-black/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <motion.img
                src={IMAGES[0]}
                className="absolute w-64 h-80 object-cover shadow-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ rotate: -10, scale: 0.8 }}
                whileHover={{ rotate: 0, scale: 1 }}
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
        </div>
    </section>
);

// ============================================================================
// STYLE 28: "Marquee Tape" - Industrial look
// ============================================================================
const V28: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#ffcc00] text-black overflow-hidden flex flex-col justify-center">
        <div className="transform -rotate-6 scale-110 space-y-4">
            <div className="bg-black text-[#ffcc00] py-4 overflow-hidden whitespace-nowrap border-y-4 border-white">
                <motion.div animate={{ x: "-50%" }} transition={{ duration: 10, ease: "linear", repeat: Infinity }} className="text-8xl font-black uppercase flex gap-8">
                    <span>Attention &bull; Paysages Sonores &bull; Composées pour durer &bull;</span>
                    <span>Attention &bull; Paysages Sonores &bull; Composées pour durer &bull;</span>
                </motion.div>
            </div>
            <div className="flex justify-center gap-4 mix-blend-multiply opacity-80">
                {IMAGES.slice(0, 4).map((img, i) => (
                    <img key={i} src={img} className="w-48 h-32 object-cover grayscale contrast-150 border-4 border-black" />
                ))}
            </div>
            <div className="bg-black text-[#ffcc00] py-4 overflow-hidden whitespace-nowrap border-y-4 border-white">
                <motion.div animate={{ x: "0%" }} initial={{ x: "-50%" }} transition={{ duration: 10, ease: "linear", repeat: Infinity }} className="text-8xl font-black uppercase flex gap-8">
                    <span>Pas d'IA &bull; 100% Humain &bull; Émotion Pure &bull;</span>
                    <span>Pas d'IA &bull; 100% Humain &bull; Émotion Pure &bull;</span>
                </motion.div>
            </div>
        </div>
        <button onClick={onExplore} className="absolute inset-0 z-10" />
    </section>
);

// ============================================================================
// STYLE 29: "Brutalist List" - Database style
// ============================================================================
const V29: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-200 font-mono text-sm p-4">
        <div className="border border-black h-full flex flex-col">
            <div className="border-b border-black p-4 flex justify-between items-center bg-white">
                <span className="bg-black text-white px-2">SYS.AUDIO.24</span>
                <span className="animate-pulse">● LIVE</span>
            </div>
            <div className="flex-grow p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                    <h1 className="text-6xl font-black leading-[0.8]">INDEX<br />SONORE</h1>
                    <p className="max-w-xs border-l-2 border-black pl-4">Base de données d'ambiances composées pour la concentration et l'évasion.</p>
                    <button onClick={onExplore} className="bg-black text-white px-8 py-4 hover:bg-neutral-800 uppercase font-bold">&gt; Accéder</button>
                </div>
                <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-[60vh] border border-black p-2 bg-white">
                    {IMAGES.map((img, i) => (
                        <div key={i} className="aspect-square bg-gray-100 relative group border border-black">
                            <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                            <div className="absolute top-1 left-1 bg-white px-1 text-[10px] border border-black">IMG_0{i + 1}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-black p-2 flex justify-between bg-white text-xs">
                <span>TOTAL: {IMAGES.length} FRAGMENTS</span>
                <span>STATUS: READY</span>
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 30: "Neon Grid" - Synthwave
// ============================================================================
const V30: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#050011] overflow-hidden flex flex-col items-center justify-start perspective-[500px]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(189,0,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(189,0,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px] transform-style-3d rotate-x-[60deg] origin-top h-[200vh] -mt-[50vh]" />

        <h1 className="z-10 mt-32 text-8xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-purple-600 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
            INFINITE
        </h1>
        <h2 className="z-10 text-4xl text-pink-500 font-bold tracking-widest uppercase mb-12 drop-shadow-[0_0_5px_#ff00ff]">Mood</h2>

        <div className="z-10 flex gap-4 perspective-[1000px]">
            {IMAGES.slice(0, 3).map((img, i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className="w-40 h-40 border-2 border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.3)] rounded-lg overflow-hidden bg-black/50"
                >
                    <img src={img} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                </motion.div>
            ))}
        </div>
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#050011] to-transparent z-20" />
        <button onClick={onExplore} className="z-30 absolute bottom-12 border border-pink-500 text-pink-500 px-8 py-2 hover:bg-pink-500 hover:text-white transition-all shadow-[0_0_15px_#ff00ff]">START</button>
    </section>
);

// ============================================================================
// STYLE 31: "Circular Text" - Rotating Badge
// ============================================================================
const V31: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <h1 className="text-[40vw] font-bold">●</h1>
        </div>

        <div className="relative w-96 h-96 flex items-center justify-center">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-black/10"
            >
                {/* Simulated text on path with just characters for visuals */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-white px-2 font-mono text-xs">PAYSAGES SONORES • COMPOSÉES POUR DURER •</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-white px-2 font-mono text-xs">POUR SE CONCENTRER • S'ÉVADER LIBREMENT •</div>
            </motion.div>

            <div className="w-64 h-64 rounded-full overflow-hidden relative z-10 group">
                <img src={IMAGES[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <button onClick={onExplore} className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center font-bold uppercase tracking-widest transition-opacity cursor-pointer">
                    Explorer
                </button>
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 32: "Horizontal Scroll Hints" - Side gallery
// ============================================================================
const V32: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-slate-50 overflow-hidden flex flex-col justify-center pl-12">
        <div className="z-10 max-w-xl">
            <div className="w-12 h-1 bg-black mb-6" />
            <h1 className="text-6xl font-light tracking-tight text-slate-900 mb-6">
                La collection<br />essentielle.
            </h1>
            <p className="text-slate-500 mb-8">Découvrez des paysages sonores d'une qualité inégalée.</p>
            <button onClick={onExplore} className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">Commencer</button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-[-10%] w-[50%] h-[70vh] flex gap-4 opacity-50 hover:opacity-100 transition-opacity hover:right-0 duration-500">
            {IMAGES.slice(0, 3).map((img, i) => (
                <div key={i} className="flex-shrink-0 w-80 h-full bg-slate-200">
                    <img src={img} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    </section>
);

// ============================================================================
// STYLE 33: "Pixel Art" - Retro vibes
// ============================================================================
const V33: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#2c2c2c] image-pixelated flex flex-col items-center justify-center font-mono text-white">
        <div className="border-4 border-white p-2">
            <div className="border-2 border-white p-8 text-center bg-blue-900">
                <h1 className="text-4xl mb-4 font-bold tracking-widest text-yellow-300 shadow-[2px_2px_0px_#000]">START GAME</h1>
                <p className="text-xs mb-8 text-blue-200">INSERT COIN TO LISTEN</p>
                <div className="flex gap-2 justify-center mb-8">
                    {IMAGES.slice(0, 3).map((img, i) => (
                        <div key={i} className="w-16 h-16 border-2 border-white bg-black">
                            <img src={img} className="w-full h-full object-cover opacity-70" style={{ imageRendering: 'pixelated' }} />
                        </div>
                    ))}
                </div>
                <button onClick={onExplore} className="animate-pulse text-xl uppercase font-bold text-white hover:text-yellow-300">
                    &gt; PRESS START &lt;
                </button>
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 34: "Collage Rip" - Paper tear effect
// ============================================================================
const V34: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f3e5d8] overflow-hidden flex items-center justify-center">
        <div className="relative w-[80vw] max-w-4xl bg-white p-8 shadow-2xl rotate-1">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#e5cca9]/50 rotate-2 backdrop-blur-sm" />
            <h1 className="text-center text-5xl font-serif text-[#4a3b2a] mb-8 mt-4 border-b-2 border-[#4a3b2a] pb-4 border-dashed">
                L'Album Sonore
            </h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 relative">
                    <img src={IMAGES[0]} className="w-full h-64 object-cover sepia-[.3]" />
                    <div className="absolute bottom-2 right-2 bg-white px-2 font-handwriting text-sm rotate-[-2deg]">Interaction 01</div>
                </div>
                <div className="col-span-1 flex flex-col justify-between">
                    <img src={IMAGES[1]} className="w-full h-32 object-cover grayscale" />
                    <button onClick={onExplore} className="w-full py-4 bg-[#4a3b2a] text-[#f3e5d8] font-bold uppercase hover:bg-[#2c2319]">Ouvrir</button>
                </div>
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 35: "Minimal Sidebar" - Content on left
// ============================================================================
const V35: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen flex">
        <div className="w-1/3 min-w-[300px] h-full bg-white p-12 flex flex-col justify-between border-r border-gray-100 z-10">
            <h1 className="text-4xl font-bold tracking-tighter">Infinite.<br />Mood.</h1>
            <div className="space-y-6">
                <p className="text-gray-500 text-sm leading-relaxed">
                    Une expérience sonore générative mais composée. Conçue pour accompagner vos moments de concentration et d'évasion.
                </p>
                <div className="flex gap-2">
                    <button onClick={onExplore} className="bg-black text-white px-6 py-2 rounded-lg text-sm font-bold hover:shadow-lg transition-shadow">Explorer</button>
                    <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">Info</button>
                </div>
            </div>
            <div className="text-xs text-gray-400">© 2024 V2.5.0</div>
        </div>
        <div className="flex-grow h-full bg-gray-50 relative overflow-hidden">
            <motion.img
                src={IMAGES[4]}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10 }}
            />
            <div className="absolute inset-0 bg-black/10" />
        </div>
    </section>
);

// ============================================================================
// STYLE 36: "Terminal Code" - Matrix style
// ============================================================================
const V36: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-green-500 font-mono p-8 overflow-hidden">
        <div className="max-w-3xl z-10 relative">
            <p className="mb-4 text-xs opacity-50">// initializing audio engine...</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                &gt; LOAD_ENV: <span className="text-green-400 animate-pulse">SUCCESS</span>
            </h1>

            <div className="grid grid-cols-2 gap-8 mb-8 border-l-2 border-green-900 pl-4">
                <div>
                    <p className="text-sm text-gray-400 mb-1">MODULE.01</p>
                    <p className="text-xl">CONCENTRATION</p>
                </div>
                <div>
                    <p className="text-sm text-gray-400 mb-1">MODULE.02</p>
                    <p className="text-xl">ÉVASION</p>
                </div>
            </div>

            <pre className="text-xs text-green-800 mb-8 whitespace-pre-wrap">
                {`
  import { Focus } from 'infinite-mood';
  
  const session = new Session({
    mode: 'deep_work',
    duration: 'infinite'
  });
                `}
            </pre>

            <button onClick={onExplore} className="border border-green-500 text-green-500 px-6 py-2 hover:bg-green-500 hover:text-black transition-colors uppercase text-sm">
                [ Execute Session ]
            </button>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            {IMAGES.map((img, i) => (
                <img key={i} src={img} className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-50" style={{ clipPath: `inset(${i * 10}% 0 ${100 - (i + 1) * 20}% 0)` }} />
            ))}
        </div>
    </section>
);

// ============================================================================
// STYLE 37: "Liquid Bubble" - Organic shapes
// ============================================================================
const V37: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-slate-50 flex items-center justify-center overflow-hidden">
        <motion.div
            animate={{
                borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-[500px] h-[500px] bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden flex items-center justify-center shadow-2xl"
        >
            <div className="absolute inset-0 bg-white/10" />
            <div className="relative z-10 text-center text-white p-8">
                <h1 className="text-5xl font-black mb-2">FLUIDE.</h1>
                <p className="uppercase tracking-widest text-sm mb-6">Paysages Sonores</p>
                <button onClick={onExplore} className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold hover:scale-110 transition-transform">Plonger</button>
            </div>
        </motion.div>

        {/* Floating small bubbles with images */}
        {IMAGES.slice(0, 4).map((img, i) => (
            <motion.div
                key={i}
                className="absolute w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg"
                animate={{
                    x: [0, Math.random() * 100 - 50, 0],
                    y: [0, Math.random() * 100 - 50, 0]
                }}
                transition={{ duration: 10 + i, repeat: Infinity, ease: 'easeInOut' }}
                style={{ top: `${20 + i * 20}%`, left: `${10 + i * 20}%` }}
            >
                <img src={img} className="w-full h-full object-cover" />
            </motion.div>
        ))}
    </section>
);

// ============================================================================
// STYLE 38: "Full Video BG" - (Simulated with image)
// ============================================================================
const V38: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex items-end justify-start p-12">
        <div className="absolute inset-0 opacity-60">
            <motion.img
                src={IMAGES[3]}
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.1] }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
                <span className="bg-red-600 text-xs px-2 py-1 font-bold rounded uppercase">Nouveau</span>
                <span className="text-sm uppercase tracking-wide opacity-80">Collection 2024</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
                Redécouvrez le silence et le son.
            </h1>
            <div className="flex gap-4">
                <button onClick={onExplore} className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                    <Play className="w-4 h-4 fill-current" /> Écouter
                </button>
                <button className="bg-white/20 backdrop-blur text-white px-8 py-3 rounded font-bold hover:bg-white/30 transition-colors">
                    En savoir plus
                </button>
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 39: "Newspaper" - Classic grid layout
// ============================================================================
const V39: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f0f0f0] text-black overflow-y-auto p-8 font-serif">
        <div className="max-w-6xl mx-auto bg-white p-8 shadow-sm border border-gray-300 min-h-full">
            <div className="border-b-4 border-black pb-4 mb-8 flex justify-between items-end">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">THE DAILY SOUND</h1>
                <div className="text-right text-xs font-sans mb-1">
                    <p>VOL. 12</p>
                    <p>FREE EDITION</p>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-8">
                    <div className="w-full h-96 bg-gray-200 mb-4 relative group cursor-pointer" onClick={onExplore}>
                        <img src={IMAGES[2]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 font-sans font-bold text-xs uppercase">Featured Story</div>
                    </div>
                    <h2 className="text-4xl font-bold mb-4 leading-tight">Une nouvelle façon d'écouter le monde qui nous entoure.</h2>
                    <div className="columns-2 gap-8 text-justify text-sm leading-relaxed font-sans text-gray-600">
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-4 border-l border-gray-200 pl-8 flex flex-col gap-6">
                    <div className="border-b border-black pb-2">
                        <h3 className="font-sans font-bold uppercase text-xs mb-2 text-red-600">Top Picks</h3>
                    </div>
                    {IMAGES.slice(0, 3).map((img, i) => (
                        <div key={i} className="flex gap-4 items-start group cursor-pointer">
                            <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                                <img src={img} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm leading-tight mb-1 group-hover:underline">Ambient texture pack #{i + 1}</h4>
                                <p className="text-xs text-gray-500">3 min read</p>
                            </div>
                        </div>
                    ))}
                    <button onClick={onExplore} className="mt-auto bg-black text-white w-full py-3 font-sans font-bold uppercase text-xs hover:opacity-80">Subscribe to Listen</button>
                </div>
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 40: "Soft Gradient" - Apple Music style
// ============================================================================
const V40: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white overflow-hidden flex flex-col justify-center px-12 md:px-24">
        <motion.div
            className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-2xl">
            <h2 className="text-pink-600 font-bold uppercase tracking-wide mb-4">Mood Infinite</h2>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight">
                Le son.<br />Réinventé.
            </h1>
            <p className="text-2xl text-slate-600 font-light mb-12 max-w-lg leading-relaxed">
                Des milliers de combinaisons possibles pour créer votre atmosphère parfaite. Sans effort.
            </p>
            <div className="flex gap-4">
                <button onClick={onExplore} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all">
                    Essayer Gratuitement
                </button>
            </div>
        </div>

        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-64 md:w-96 perspective-[1000px] hidden md:block">
            <motion.div
                className="w-full aspect-square bg-white rounded-3xl shadow-2xl p-4 rotate-y-[-12deg] rotate-x-[5deg]"
                whileHover={{ rotateY: 0, rotateX: 0 }}
            >
                <img src={IMAGES[0]} className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
        </div>
    </section>
);

// ============================================================================
// STYLE 41: "Vertical Marquee" - Fashion style
// ============================================================================
const V41: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F5F5DC] flex overflow-hidden">
        <div className="w-1/2 h-full relative border-r border-black/10 flex items-center justify-center p-12">
            <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-8 border-2 border-black">
                    <img src={IMAGES[1]} className="w-full h-full object-cover" />
                </div>
                <h1 className="text-4xl font-serif italic mb-4">La Sélection</h1>
                <p className="max-w-xs mx-auto text-sm text-gray-600 mb-8">Une curation méticuleuse de textures sonores pour l'esprit moderne.</p>
                <button onClick={onExplore} className="underline uppercase tracking-widest font-bold">Explorer</button>
            </div>
        </div>

        <div className="w-1/2 h-full bg-black text-[#F5F5DC] overflow-hidden relative flex justify-center">
            <div className="absolute inset-y-0 flex flex-col items-center justify-center writing-vertical-rl text-[15vh] font-black leading-none opacity-20 select-none">
                <motion.div animate={{ y: "0%" }} initial={{ y: "-50%" }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    INFINITE MOOD INFINITE MOOD INFINITE MOOD
                </motion.div>
            </div>
            <div className="relative z-10 h-full flex items-center">
                <motion.div
                    className="w-48 h-[60vh] bg-white opacity-80 mix-blend-overlay"
                    animate={{ scaleY: [1, 1.2, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 42: "Scanner" - Tech scan effect
// ============================================================================
const V42: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
            <img src={IMAGES[0]} className="w-full h-full object-cover opacity-30 grayscale" />
        </div>

        {/* Scanner Bar */}
        <motion.div
            className="absolute w-full h-2 bg-green-500 shadow-[0_0_50px_rgba(0,255,0,0.8)] z-20"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-30 bg-black/80 backdrop-blur border border-green-500/30 p-8 rounded text-center">
            <div className="text-green-500 font-mono text-xs mb-4 animate-pulse">Scanning frequencies...</div>
            <h1 className="text-white text-5xl font-bold mb-2 tracking-tight">ANALYSIS COMPLETE</h1>
            <p className="text-gray-400 mb-8">Harmonic resonance found.</p>
            <button onClick={onExplore} className="w-full bg-green-900/30 text-green-400 border border-green-500 py-3 uppercase text-xs hover:bg-green-500 hover:text-black transition-colors">
                Initialize
            </button>
        </div>
    </section>
);

// ============================================================================
// STYLE 43: "Sticky Scroll" - Parallax Feel (Simulated)
// ============================================================================
const V43: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row bg-white">
        <div className="flex-1 p-12 flex flex-col justify-center z-10 bg-white">
            <h1 className="text-8xl font-black mb-6 transform -ml-1">01.</h1>
            <h2 className="text-4xl font-bold mb-4">Concentration</h2>
            <p className="text-gray-500 max-w-sm mb-8">Un flux audio continu optimisé pour le travail profond et la créativité.</p>
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-black" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
            </div>
        </div>
        <div className="flex-1 relative h-full bg-gray-100">
            <div className="absolute inset-0 flex flex-col">
                <motion.div
                    className="h-full w-full"
                    animate={{ y: ["0%", "-33.33%", "-66.66%"] }}
                    transition={{ duration: 9, repeat: Infinity, times: [0, 0.45, 0.9], ease: "easeInOut" }}
                >
                    <img src={IMAGES[0]} className="w-full h-full object-cover" />
                    <img src={IMAGES[1]} className="w-full h-full object-cover" />
                    <img src={IMAGES[2]} className="w-full h-full object-cover" />
                </motion.div>
            </div>
            <button onClick={onExplore} className="absolute bottom-8 right-8 bg-black text-white px-8 py-3 rounded-full z-20 hover:scale-110 transition-transform">
                Voir tout
            </button>
        </div>
    </section>
);

// ============================================================================
// STYLE 44: "Dark Cards" - Elegant dark mode cards
// ============================================================================
const V44: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-light tracking-widest uppercase mb-2 text-gray-400">Atmosphères</h1>
            <h2 className="text-5xl font-bold">Sélectionnez votre humeur</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto max-w-full pb-8 px-8 items-center snap-x">
            {IMAGES.slice(0, 5).map((img, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden relative cursor-pointer group snap-center"
                    onClick={onExplore}
                >
                    <img src={img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black to-transparent">
                        <p className="font-bold text-lg">Ambiance 0{i + 1}</p>
                        <p className="text-xs text-gray-400">Durée infinie</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

// ============================================================================
// STYLE 45: "Abstract Shapes" - Geometry
// ============================================================================
const V45: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e0e5ec] text-slate-700 flex items-center justify-center overflow-hidden">
        {/* Neumorphic Circles */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]" />
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]" />

        <div className="z-10 bg-[#e0e5ec] p-12 rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center max-w-lg">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#e0e5ec] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
                <img src={IMAGES[0]} className="w-full h-full object-cover opacity-80" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-slate-700">Zone de focus.</h1>
            <p className="text-slate-500 mb-8">Une interface douce pour des sons profonds.</p>
            <button onClick={onExplore} className="px-8 py-3 rounded-full bg-[#e0e5ec] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] text-slate-700 font-bold hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-shadow active:scale-95">
                ACTIVER
            </button>
        </div>
    </section>
);


// ============================================================================
// STYLE 46: "Floating Islands" - Neumorphism with elevation
// ============================================================================
const V46: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e0e5ec] text-slate-700 flex items-center justify-center overflow-hidden">
        {/* Abstract Background Shapes */}
        <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[20%] w-40 h-40 rounded-3xl bg-[#e0e5ec] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] -rotate-12 z-0"
        />
        <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 right-[20%] w-56 h-56 rounded-full bg-[#e0e5ec] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] z-0"
        />

        <div className="z-10 flex flex-col md:flex-row gap-12 items-center">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-80 h-96 bg-[#e0e5ec] rounded-[2rem] p-6 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center justify-between"
            >
                <div className="w-full h-48 rounded-2xl overflow-hidden shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] p-2">
                    <img src={IMAGES[2]} className="w-full h-full object-cover rounded-xl opacity-80" />
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-700">Exploration</h3>
                    <p className="text-sm text-slate-500">Mode Focus</p>
                </div>
                <button onClick={onExplore} className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-slate-700 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-shadow">
                    <ArrowDown size={20} />
                </button>
            </motion.div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-64 h-64 bg-[#e0e5ec] rounded-full shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center justify-center p-8 text-center"
            >
                <h1 className="text-3xl font-black text-slate-700 mb-2">PURE<br />SOUND</h1>
                <p className="text-xs text-slate-500">Génératif & Organique</p>
            </motion.div>
        </div>
    </section>
);

// ============================================================================
// STYLE 47: "Inset Depth" - Pressed look
// ============================================================================
const V47: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e0e5ec] flex flex-col items-center justify-center overflow-hidden">
        <div className="w-[80vw] h-[70vh] rounded-[3rem] bg-[#e0e5ec] shadow-[inset_20px_20px_60px_#bebebe,inset_-20px_-20px_60px_#ffffff] flex flex-col items-center justify-center relative p-8">
            <h1 className="text-[12vw] font-black text-[#e0e5ec] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] tracking-tighter opacity-50 select-none">
                DEPTH
            </h1>

            <div className="z-10 bg-[#e0e5ec] p-8 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Interface</span>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-300 shadow-[inset_1px_1px_2px_#bebebe,inset_-1px_-1px_2px_#ffffff]" />
                        <div className="w-3 h-3 rounded-full bg-slate-300 shadow-[inset_1px_1px_2px_#bebebe,inset_-1px_-1px_2px_#ffffff]" />
                    </div>
                </div>
                <div className="w-full h-2 bg-[#e0e5ec] rounded-full shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] mb-6">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "70%" }}
                        transition={{ duration: 2 }}
                        className="h-full bg-slate-400 rounded-full shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]"
                    />
                </div>
                <h2 className="text-2xl font-bold text-slate-700 mb-2">Chargement de l'ambiance...</h2>
                <p className="text-slate-500 text-sm mb-6">Préparez-vous à une immersion totale.</p>

                <button onClick={onExplore} className="w-full py-4 rounded-xl bg-[#e0e5ec] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] text-slate-700 font-bold uppercase tracking-widest hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-all transform active:scale-[0.98]">
                    Initialiser
                </button>
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 48: "Soft Waves" - Organic curves
// ============================================================================
const V48: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e0e5ec] overflow-hidden flex items-center justify-center">
        {/* Background Waves */}
        <div className="absolute inset-0 flex flex-col justify-between">
            <img src={IMAGES[0]} className="w-full h-1/2 object-cover opacity-10 mix-blend-overlay" />
            <img src={IMAGES[1]} className="w-full h-1/2 object-cover opacity-10 mix-blend-overlay" />
        </div>

        <svg className="absolute w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="neumorph-shadow">
                    <feDropShadow dx="10" dy="10" stdDeviation="15" floodColor="#bebebe" floodOpacity="0.8" />
                    <feDropShadow dx="-10" dy="-10" stdDeviation="15" floodColor="#ffffff" floodOpacity="1" />
                </filter>
            </defs>
            <path fill="#e0e5ec" filter="url(#neumorph-shadow)" d="M0,120 C180,180 320,0 520,100 C720,200 820,150 1000,100 C1200,50 1320,150 1440,100 V1000 H0 Z" style={{ transform: 'translateY(20%)' }} />
        </svg>

        <div className="z-20 text-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-block p-12 rounded-[3.5rem] bg-[#e0e5ec] shadow-[25px_25px_50px_#bebebe,-25px_-25px_50px_#ffffff]"
            >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] flex items-center justify-center">
                    <Play className="w-12 h-12 text-slate-400 fill-current ml-2" />
                </div>
                <h1 className="text-4xl font-bold text-slate-700 mb-2">Respiration.</h1>
                <p className="text-slate-500 mb-8">Inspirez. Expirez. Écoutez.</p>
                <button onClick={onExplore} className="px-10 py-4 rounded-full bg-slate-700 text-white font-bold shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:scale-105 transition-transform">
                    Commencer
                </button>
            </motion.div>
        </div>
    </section>
);

// ============================================================================
// STYLE 49: "Minimal Player" - Functional UI
// ============================================================================
const V49: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#e0e5ec] flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-[#e0e5ec] rounded-[2.5rem] p-8 shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] border border-white/20">
            <div className="flex justify-between items-center mb-8 px-2">
                <div className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-slate-500 cursor-pointer hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-shadow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </div>
                <span className="text-slate-400 font-bold tracking-wider text-xs">NOW PLAYING</span>
                <div className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-slate-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </div>
            </div>

            <div className="w-full aspect-square rounded-[2rem] bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] p-6 mb-8 relative overflow-hidden group">
                <img src={IMAGES[3]} className="w-full h-full object-cover rounded-[1.5rem] opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#e0e5ec]/80 backdrop-blur shadow-xl flex items-center justify-center cursor-pointer" onClick={onExplore}>
                    <Play className="w-8 h-8 text-slate-700 fill-current ml-1" />
                </div>
            </div>

            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-700 mb-1">Infinite Mood</h2>
                <p className="text-slate-500 text-sm">Session Générative #001</p>
            </div>

            <div className="flex justify-center gap-8">
                <button className="w-16 h-16 rounded-full bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] flex items-center justify-center text-slate-600 hover:text-slate-800 active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                </button>
                <button onClick={onExplore} className="w-16 h-16 rounded-full bg-slate-700 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] flex items-center justify-center text-white hover:bg-slate-800 active:scale-95 transition-all">
                    <Play className="fill-current w-6 h-6" />
                </button>
                <button className="w-16 h-16 rounded-full bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] flex items-center justify-center text-slate-600 hover:text-slate-800 active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
                </button>
            </div>
        </div>
    </section>
);

// ============================================================================
// STYLE 50: "Claymorphism" - Softer, inflated look
// ============================================================================
const V50: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f0f4f8] flex items-center justify-center overflow-hidden">
        {/* Floating background elements */}
        <motion.div
            animate={{
                y: [0, -30, 0],
                rotate: [0, 10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-32 h-32 rounded-[2rem] bg-white shadow-[20px_20px_40px_rgba(150,160,180,0.1),-20px_-20px_40px_rgba(255,255,255,1)] skew-y-6"
        />
        <motion.div
            animate={{
                y: [0, 40, 0],
                rotate: [0, -10, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white shadow-[20px_20px_40px_rgba(150,160,180,0.1),-20px_-20px_40px_rgba(255,255,255,1)]"
        />

        <div className="z-10 relative">
            <div className="bg-white/50 backdrop-blur-xl p-12 rounded-[3.5rem] shadow-[30px_30px_60px_rgba(150,160,180,0.2),-30px_-30px_60px_rgba(255,255,255,1)] text-center max-w-lg border border-white/50">
                <div className="relative w-40 h-40 mx-auto mb-8">
                    <motion.div
                        className="absolute inset-0 bg-blue-100 rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="absolute inset-2 bg-white rounded-full shadow-[10px_10px_20px_rgba(150,160,180,0.1),-10px_-10px_20px_rgba(255,255,255,1)] flex items-center justify-center overflow-hidden">
                        <img src={IMAGES[4]} className="w-full h-full object-cover opacity-90" />
                    </div>
                </div>

                <h1 className="text-5xl font-black text-slate-800 mb-3 tracking-tight">CLAY.</h1>
                <p className="text-slate-500 font-medium mb-8">Une douceur visuelle pour vos oreilles.</p>

                <button onClick={onExplore} className="w-full py-4 rounded-2xl bg-slate-800 text-white font-bold shadow-[0_10px_20px_rgba(30,41,59,0.3)] hover:translate-y-[-2px] hover:shadow-[0_15px_30px_rgba(30,41,59,0.4)] transition-all active:translate-y-[1px]">
                    LANCER L'EXPÉRIENCE
                </button>
            </div>
        </div>
    </section>
);


// ============================================================================
// MAIN COMPONENT - TOGGLE
// ============================================================================

const HeroTheBest: React.FC<HeroProps> = (props) => {
    const [currentStyle, setCurrentStyle] = useState(0);
    const styles = [
        V1, V2, V3, V4, V5,
        V6, V7, V8, V9, V10,
        V11, V12, V13, V14, V15,
        V16, V17, V18, V19, V20,
        V21, V22, V23, V24, V25,
        V26, V27, V28, V29, V30,
        V31, V32, V33, V34, V35,
        V36, V37, V38, V39, V40,
        V41, V42, V43, V44, V45,
        V46, V47, V48, V49, V50
    ];
    const CurrentHero = styles[currentStyle];

    return (
        <>
            <CurrentHero {...props} />

            {/* Style Switcher UI */}
            <div className="fixed bottom-4 right-4 z-50 flex flex-wrap gap-1 bg-black/80 backdrop-blur-md p-2 rounded-xl max-w-[300px] justify-center shadow-2xl border border-white/10 max-h-[40vh] overflow-y-auto">
                {styles.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentStyle(i)}
                        className={`w-6 h-6 rounded-md text-[10px] font-bold flex items-center justify-center transition-all ${currentStyle === i
                            ? 'bg-white text-black scale-110'
                            : 'bg-white/10 text-white hover:bg-white/30'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </>
    );
};

export default HeroTheBest;
