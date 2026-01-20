import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Maximize2, MoveRight } from 'lucide-react';
import AudioManager from '../utils/AudioManager';
import { startScroll } from './SmoothScroll';

interface HeroProps {
    onExplore: () => void;
}

// ============================================================================
// CINEMATIC & EDITORAL SERIES (1-20)
// Themes: Visualization, Photography, Magazine Layouts, High-End Feel.
// ============================================================================

// Images
const IMG_FOREST = "https://images.unsplash.com/photo-1448375240586-dfd8d3cd0674?q=80&w=2670&auto=format&fit=crop";
const IMG_WATER = "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2574&auto=format&fit=crop";
const IMG_ABSTRACT = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop";
const IMG_CITY = "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2670&auto=format&fit=crop";
const IMG_PORTRAIT = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop";
const IMG_DESERT = "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2670&auto=format&fit=crop";
const IMG_RAIN = "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=2574&auto=format&fit=crop";
const IMG_HANDS = "https://images.unsplash.com/photo-1620310860368-6c8430b0e504?q=80&w=2670&auto=format&fit=crop"; // Piano hands

// 1. THE CINEMATIC (Full Screen Video Vibe)
const V1: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white">
        <div className="absolute inset-0">
            <img src={IMG_FOREST} alt="Forest" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        <div className="absolute bottom-16 left-8 md:left-16 max-w-2xl">
            <div className="bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest px-3 py-1 inline-block rounded-sm mb-4">
                Now Playing
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4">
                Nature's<br />Symphony
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg leading-relaxed">
                Immerse yourself in ambiances composed by humans, not algorithms.
                Feel the difference of a soul behind the sound.
            </p>
            <div className="flex items-center gap-4">
                <button onClick={onExplore} className="bg-white text-black px-8 py-3 font-bold rounded flex items-center gap-2 hover:bg-gray-200 transition-colors">
                    <Play size={20} fill="currentColor" /> Play Now
                </button>
                <button className="px-6 py-3 font-bold border border-white/30 rounded hover:bg-white/10 transition-colors">
                    More Info
                </button>
            </div>
        </div>
    </section>
);

// 2. THE EDITORIAL (Split Screen)
const V2: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F3F3F3] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Issue 01 — The Beginning</h2>
            <h1 className="text-6xl font-serif italic mb-6 text-black">
                Composed.<br />Not Generated.
            </h1>
            <div className="w-12 h-1 bg-black mb-8" />
            <p className="text-gray-600 leading-loose mb-12 max-w-md">
                In an era of artificial perfection, we choose the raw, emotional power of human composition.
                Fragmnt is a new way to experience ambient music.
            </p>
            <button onClick={onExplore} className="self-start flex items-center gap-2 text-black font-bold uppercase border-b-2 border-black pb-1 hover:gap-4 transition-all">
                Read the story <ArrowRight size={18} />
            </button>
        </div>
        <div className="w-full md:w-1/2 h-full relative">
            <img src={IMG_HANDS} alt="Hands playing piano" className="w-full h-full object-cover" />
            <div className="absolute bottom-8 right-8 text-white text-right">
                <p className="font-bold">The Human Touch</p>
                <p className="text-xs opacity-70">Photography by Unsplash</p>
            </div>
        </div>
    </section>
);

// 3. THE STREAM (Netflix Style)
const V3: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#141414] text-white overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0">
            <img src={IMG_City} alt="City Night" className="w-full h-full object-cover opacity-50 mask-image-gradient-b" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }} />
            {/* Note: mask-image usually needs prefix or class */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 pt-32">
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4 drop-shadow-2xl">
                FRAGMNT
            </h1>

            <div className="flex items-center gap-4 text-sm font-bold text-gray-300 mb-6">
                <span className="text-green-500">98% Match</span>
                <span>2025</span>
                <span className="border border-gray-500 px-1 text-xs">HD</span>
                <span>Ambient</span>
            </div>

            <p className="max-w-xl text-lg text-shadow-sm mb-8">
                Currently featuring: "The City Sleeps". A deep dive into urban solitude, composed entirely by human musicians.
            </p>

            <div className="flex gap-4">
                <button onClick={onExplore} className="bg-white text-black px-8 py-3 rounded font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors">
                    <Play fill="black" size={24} /> Play
                </button>
                <button className="bg-[rgba(109,109,110,0.7)] text-white px-8 py-3 rounded font-bold flex items-center gap-2 hover:bg-[rgba(109,109,110,0.4)] transition-colors">
                    <Maximize2 size={24} /> More Info
                </button>
            </div>
        </div>
    </section>
);
// Fix image variable for V3
const IMG_City = IMG_CITY;


// 4. THE MAGAZINE (Vogue Style)
const V4: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#EAEAEA] text-[#111] overflow-hidden flex items-center justify-center">
        {/* Big Background Text */}
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif font-black text-white leading-none z-0 tracking-tighter">
            MOOD
        </h1>

        {/* Central Image */}
        <div className="relative z-10 w-[30vw] h-[70vh] shadow-2xl">
            <img src={IMG_PORTRAIT} alt="Portrait" className="w-full h-full object-cover" />
            <div className="absolute -bottom-16 -right-16 bg-black text-white p-6 z-20 max-w-xs">
                <p className="font-serif italic text-2xl mb-2">"Silence is a luxury."</p>
                <p className="text-xs uppercase tracking-widest opacity-70 mb-4">— The Composer</p>
                <button onClick={onExplore} className="text-xs font-bold underline">READ ARTICLE</button>
            </div>
        </div>

        {/* Floating details */}
        <div className="absolute top-12 left-12 z-20">
            <h2 className="text-4xl font-bold uppercase tracking-tighter">Fragmnt<br />Magazine</h2>
            <p className="text-xs mt-2 border-t border-black pt-1 inline-block">JAN 2026 • VOL 1</p>
        </div>
    </section>
);

// 5. THE GALLERY (Horizontal Strip)
const V5: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex flex-col justify-center">
        <h1 className="absolute top-12 left-12 text-xl font-bold uppercase tracking-widest">Select your mood</h1>

        <div className="flex gap-4 overflow-x-hidden px-12 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-[30vw] h-[60vh] flex-shrink-0 relative group cursor-pointer" onClick={onExplore}>
                <img src={IMG_FOREST} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 font-bold text-2xl">FOREST</div>
            </div>
            <div className="w-[30vw] h-[60vh] flex-shrink-0 relative group cursor-pointer" onClick={onExplore}>
                <img src={IMG_DESERT} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 font-bold text-2xl">DUNE</div>
            </div>
            <div className="w-[30vw] h-[60vh] flex-shrink-0 relative group cursor-pointer" onClick={onExplore}>
                <img src={IMG_WATER} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 font-bold text-2xl">OCEAN</div>
            </div>
            <div className="w-[30vw] h-[60vh] flex-shrink-0 relative group cursor-pointer" onClick={onExplore}>
                <img src={IMG_CITY} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 font-bold text-2xl">METRO</div>
            </div>
        </div>

        <div className="absolute bottom-12 left-12 flex items-center gap-2">
            <MoveRight size={24} className="animate-pulse" />
            <span className="text-xs uppercase">Scroll or Click to Explore</span>
        </div>
    </section>
);

// 6. THE WINDOW (Masked Image)
const V6: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#EOD8CC] flex items-center justify-center p-12">
        <motion.div
            initial={{ borderRadius: "50%" }}
            whileHover={{ borderRadius: "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-[500px] h-[600px] overflow-hidden shadow-2xl relative cursor-pointer"
            onClick={onExplore}
        >
            <img src={IMG_ABSTRACT} className="w-full h-full object-cover transform scale-110 hover:scale-100 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center pointer-events-none">
                <h1 className="text-6xl font-black uppercase tracking-tighter">Reflect</h1>
                <p className="text-sm mt-2 font-serif italic">Tap to open</p>
            </div>
        </motion.div>
    </section>
);

// 7. THE DUO (Contrast)
const V7: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative group cursor-pointer" onClick={onExplore}>
            <img src={IMG_CITY} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold uppercase tracking-widest">Chaos</h1>
            </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative group cursor-pointer" onClick={onExplore}>
            <img src={IMG_WATER} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/50 group-hover:bg-white/20 transition-colors flex items-center justify-center">
                <h1 className="text-black text-5xl font-bold uppercase tracking-widest">Calm</h1>
            </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full font-bold uppercase text-xs z-10 shadow-xl pointer-events-none">
            Choose your side
        </div>
    </section>
);

// 8. THE ALBUM (Cover Art)
const V8: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-white flex items-center justify-center">
        {/* Blurry BG */}
        <div className="absolute inset-0 overflow-hidden">
            <img src={IMG_ABSTRACT} className="w-full h-full object-cover blur-3xl opacity-30 scale-150" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-4xl">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] shadow-2xl relative group cursor-pointer" onClick={onExplore}>
                <img src={IMG_ABSTRACT} className="w-full h-full object-cover rounded-sm" />
                {/* Vinyl shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            <div className="text-center md:text-left">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">New Release</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Liquid Dreams</h1>
                <p className="text-xl text-gray-300 mb-8 font-serif italic">By The Fragmnt Ensemble</p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <button onClick={onExplore} className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                        Listen now
                    </button>
                    <button className="border border-white/20 px-4 py-3 rounded-full hover:bg-white/10">
                        +
                    </button>
                </div>
            </div>
        </div>
    </section>
);

// 9. THE VIGNETTE (Soft Focus)
const V9: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0">
            <img src={IMG_RAIN} className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,black_100%)]" />
        </div>

        <div className="relative z-10 text-center text-white/90">
            <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4" style={{ textShadow: "0 0 20px black" }}>
                Sometimes, it rains.
            </h1>
            <p className="text-lg opacity-80 mb-8 font-light">And that's okay. Let the music wash it away.</p>
            <button onClick={onExplore} className="text-xs uppercase tracking-[0.3em] hover:text-blue-300 transition-colors">
                Enter the mood
            </button>
        </div>
    </section>
);

// 10. THE COLLAGE (Artistic)
const V10: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#E5DACE] overflow-hidden p-8 flex items-center justify-center">
        {/* Images placed randomly */}
        <div className="absolute top-12 left-12 w-48 h-64 rotate-[-6deg] shadow-lg grayscale hover:grayscale-0 transition-all z-0">
            <img src={IMG_FOREST} className="w-full h-full object-cover p-2 bg-white" />
        </div>
        <div className="absolute bottom-24 right-24 w-64 h-48 rotate-[3deg] shadow-lg grayscale hover:grayscale-0 transition-all z-0">
            <img src={IMG_WATER} className="w-full h-full object-cover p-2 bg-white" />
        </div>
        <div className="absolute top-1/4 right-1/3 w-40 h-40 rotate-[12deg] shadow-lg z-0">
            <img src={IMG_ABSTRACT} className="w-full h-full object-cover rounded-full border-4 border-white" />
        </div>

        {/* Text over top */}
        <div className="relative z-10 text-center mix-blend-multiply text-[#333]">
            <h1 className="text-[12vw] font-black leading-[0.8]">
                HUMAN<br />MADE.
            </h1>
            <p className="text-xl font-bold uppercase tracking-widest mt-4">
                Collage of Sounds
            </p>
            <button onClick={onExplore} className="mt-8 bg-[#333] text-white px-8 py-3 font-bold uppercase text-sm hover:bg-black transition-colors shadow-xl">
                Start Listening
            </button>
        </div>
    </section>
);

// 11. THE NOIR (B&W)
const V11: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white">
        <img src={IMG_PORTRAIT} className="w-full h-full object-cover grayscale opacity-50 contrast-125" />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-12">
            <div className="flex justify-between items-start">
                <h1 className="text-6xl font-bold tracking-tighter">MOOD<br />NOIR.</h1>
                <div className="text-right hidden md:block">
                    <p className="font-mono text-xs">LOC: PARIS</p>
                    <p className="font-mono text-xs">TIME: 02:00</p>
                </div>
            </div>

            <div className="flex justify-between items-end">
                <p className="max-w-sm text-sm font-mono leading-relaxed">
                    Shadows define the light. <br />
                    Silence defines the sound.<br />
                    Explore the darker side of ambiance.
                </p>
                <button onClick={onExplore} className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center font-bold hover:scale-110 transition-transform">
                    <ArrowRight />
                </button>
            </div>
        </div>
    </section>
);

// 12. THE LANDSCAPE (Wide)
const V12: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex flex-col">
        <div className="h-[70%] w-full relative">
            <img src={IMG_DESERT} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
            <h1 className="absolute bottom-8 left-8 text-[10vw] font-bold leading-none tracking-tighter text-transparent stroke-text-white opacity-50" style={{ WebkitTextStroke: '1px white' }}>
                EXPANSE
            </h1>
        </div>
        <div className="h-[30%] w-full flex items-center justify-between px-12 md:px-24">
            <div>
                <h2 className="text-2xl font-bold mb-2">The Dune Collection</h2>
                <p className="text-sm opacity-60">Dry, warm, and vast soundscapes.</p>
            </div>
            <button onClick={onExplore} className="border-b border-white pb-1 hover:opacity-50 transition-opacity">
                Start Journey
            </button>
        </div>
    </section>
);

// 13. THE CARD (Glassmorphism V2)
const V13: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-900 flex items-center justify-center">
        <img src={IMG_CITY} className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50" />

        <div className="relative w-[320px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
            <div className="w-full h-64 rounded-lg overflow-hidden mb-6 relative">
                <img src={IMG_CITY} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                <div onClick={onExplore} className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center pl-1 text-black shadow-lg">
                        <Play size={20} fill="currentColor" />
                    </div>
                </div>
            </div>
            <h2 className="text-white text-2xl font-bold mb-1">Night Lights</h2>
            <p className="text-gray-300 text-sm mb-6">Ambience for late night work.</p>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-white rounded-full" />
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-mono">
                <span>1:20</span>
                <span>-4:12</span>
            </div>
        </div>
    </section>
);

// 14. THE TEXTURE (Macro)
const V14: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#333] flex items-center justify-center">
        <img src={IMG_ABSTRACT} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40" />
        <div className="absolute inset-0 bg-[#34495e] opacity-80 mix-blend-multiply" />

        <div className="relative z-10 text-center text-[#ecf0f1]">
            <h1 className="text-6xl md:text-9xl font-black mb-4">TEXTURE.</h1>
            <p className="text-xl font-light mb-8 max-w-lg mx-auto">
                Sound has a surface. Feel the grain. <br />
                Every track is a tactile experience.
            </p>
            <button onClick={onExplore} className="border-2 border-[#ecf0f1] px-8 py-3 font-bold uppercase hover:bg-[#ecf0f1] hover:text-[#2c3e50] transition-colors">
                Touch
            </button>
        </div>
    </section>
);

// 15. THE SLIDE (Carousel)
const V15: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black">
        <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.2, 1] }}
            className="absolute inset-0"
        >
            <img src={IMG_FOREST} className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2.5, times: [0, 0.2, 1] }}
            className="absolute inset-0"
        >
            <img src={IMG_WATER} className="w-full h-full object-cover" />
        </motion.div>

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Ever-Changing.</h1>
                <button onClick={onExplore} className="bg-white text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
                    Enter
                </button>
            </div>
        </div>
    </section>
);

// 16. THE POLAROID (Retro)
const V16: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F0F0F0] flex items-center justify-center">
        <div className="bg-white p-4 pb-16 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer" onClick={onExplore}>
            <div className="w-[300px] h-[300px] bg-gray-200 overflow-hidden mb-4">
                <img src={IMG_HANDS} className="w-full h-full object-cover sepia-[0.3]" />
            </div>
            <p className="font-handwritten text-center text-2xl text-gray-600" style={{ fontFamily: 'cursive' }}>
                Studio Session, 2025
            </p>
        </div>

        <div className="absolute bottom-12 text-gray-400 text-sm">
            Captured moments in sound.
        </div>
    </section>
);

// 17. THE OVERLAY (Text behind)
const V17: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
        <h1 className="absolute text-[20vw] font-black text-white z-0">
            DEEP
        </h1>
        <div className="relative z-10 w-[40vw] h-[60vh] shadow-2xl">
            <img src={IMG_WATER} className="w-full h-full object-cover" />
        </div>
        {/* Simulating text 'behind' by careful layering or just composition */}
        <h1 className="absolute text-[20vw] font-black text-transparent stroke-text-white z-20 pointer-events-none" style={{ WebkitTextStroke: '2px white' }}>
            DEEP
        </h1>

        <button onClick={onExplore} className="absolute bottom-12 z-30 bg-white text-black px-8 py-3 font-bold uppercase">
            Dive In
        </button>
    </section>
);

// 18. THE GRID (Masonry)
const V18: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2 bg-black text-white p-8 flex flex-col justify-between">
            <h1 className="text-6xl font-black">MOOD<br />BOARD.</h1>
            <p className="text-xl">Curate your sonic environment.</p>
        </div>
        <div className="col-span-1 row-span-2 relative group cursor-pointer" onClick={onExplore}>
            <img src={IMG_FOREST} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        </div>
        <div className="col-span-1 row-span-1 relative">
            <img src={IMG_ABSTRACT} className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 row-span-1 bg-[#F3F3F3] flex items-center justify-center">
            <button onClick={onExplore} className="rounded-full bg-black text-white w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowRight />
            </button>
        </div>
    </section>
);

// 19. THE GATEWAY (Arch)
const V19: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#222] flex items-center justify-center">
        <div className="w-[400px] h-[600px] rounded-t-full overflow-hidden border-[20px] border-[#333] shadow-2xl relative group cursor-pointer" onClick={onExplore}>
            <img src={IMG_PORTRAIT} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-8">
                <p className="text-white text-xl font-serif italic opacity-0 group-hover:opacity-100 transition-opacity">
                    Step inside
                </p>
            </div>
        </div>
    </section>
);

// 20. THE SHADOW (Minimalist Photo)
const V20: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#FDFDFD] flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2670&auto=format&fit=crop" className="w-[300px] md:w-[400px] shadow-2xl grayscale contrast-125" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-difference text-white text-center pointer-events-none">
            <h1 className="text-9xl font-black tracking-tighter">LIGHT</h1>
            <h1 className="text-9xl font-black tracking-tighter">SOUND</h1>
        </div>

        <button onClick={onExplore} className="absolute bottom-12 border-b-2 border-black pb-1 uppercase font-bold tracking-widest hover:border-transparent transition-colors">
            Begin Experience
        </button>
    </section>
);


// ============================================================================
// MAIN COMPONENT & SWITCHER
// ============================================================================

const VARIATIONS = [
    V1, V2, V3, V4, V5, V6, V7, V8, V9, V10,
    V11, V12, V13, V14, V15, V16, V17, V18, V19, V20
];

interface HeroAlternativeJProps {
    onComplete?: () => void;
}

const HeroAlternativeJ: React.FC<HeroAlternativeJProps> = ({ onComplete }) => {
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
                CINEMATIC :: STYLE {currentIndex + 1}
            </div>
        </div>
    );
};

export default HeroAlternativeJ;
