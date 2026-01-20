import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Compass, Cloud, Sun, Radio, Wifi } from 'lucide-react';
import AudioManager from '../utils/AudioManager';
import { startScroll } from './SmoothScroll';

interface HeroProps {
    onExplore: () => void;
}

// ============================================================================
// EXTENDED NARRATIVE SERIES (1-30)
// Theme: Sensory, Temporal, Abstract, Spatial. 
// Expands on the "Subtle Story" concept with more range.
// ============================================================================

// 1. THE BEAT (Heartsync)
const V1: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-rose-50 flex items-center justify-center">
        <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-rose-900 cursor-pointer"
            onClick={onExplore}
        >
            <Heart fill="currentColor" size={64} opacity={0.2} />
        </motion.div>
        <p className="absolute bottom-24 text-rose-900/50 text-xs tracking-widest uppercase">Sync your pulse</p>
    </section>
);

// 2. THE HORIZON (Looking Forward)
const V2: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-50 flex flex-col justify-center items-center overflow-hidden cursor-pointer" onClick={onExplore}>
        <div className="w-full h-px bg-black/10 absolute top-1/2 left-0 right-0 transform scale-x-0 animate-expand-width" style={{ animation: 'expand 1s forwards' }} />
        <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-px bg-black absolute"
        />
        <h1 className="mt-8 text-xs font-mono uppercase text-gray-400">The horizon is waiting</h1>
    </section>
);

// 3. THE SCALE (Small Moments)
const V3: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white flex items-center justify-center text-center p-8">
        <div className="max-w-xs cursor-pointer hover:opacity-50 transition-opacity" onClick={onExplore}>
            <p className="text-[10px] leading-loose text-gray-500 font-serif">
                It's the small moments.<br />
                Between the noise.<br />
                Where life happens.
            </p>
        </div>
    </section>
);

// 4. THE DEPTH (Layers)
const V4: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden text-white" onClick={onExplore}>
        <motion.div className="absolute text-[20vw] font-bold text-[#111] select-none pointer-events-none">DEEP</motion.div>
        <motion.div className="absolute text-[10vw] font-bold text-[#222] select-none pointer-events-none">DEEPER</motion.div>
        <h1 className="relative z-10 text-4xl font-light tracking-widest mix-blend-difference cursor-pointer">GO DEEPER</h1>
    </section>
);

// 5. THE ECHO (Repetition)
const V5: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f0f0f0] flex flex-col items-center justify-center overflow-hidden">
        {[1, 0.5, 0.2, 0.1].map((opacity, i) => (
            <h1 key={i} className="text-6xl md:text-8xl font-black text-black tracking-tighter" style={{ opacity }}>
                CLARITY
            </h1>
        ))}
        <button onClick={onExplore} className="mt-8 text-xs font-bold underline">Find it here</button>
    </section>
);

// 6. THE BLUR (Fade Out)
const V6: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-200 flex items-center justify-center">
        <div className="relative group cursor-pointer" onClick={onExplore}>
            <h1 className="text-5xl font-bold text-gray-400 filter blur-md group-hover:blur-0 transition-all duration-700">NOISE</h1>
            <h1 className="absolute top-0 left-0 text-5xl font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700">MUSIC</h1>
        </div>
        <p className="absolute bottom-10 text-gray-500 text-xs">Fade out the noise.</p>
    </section>
);

// 7. THE BLINK (Strobe - Slow)
const V7: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-center">
        <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-center"
        >
            <h1 className="text-4xl font-light">In the blink<br />of an eye.</h1>
        </motion.div>
        <button onClick={onExplore} className="absolute bottom-20 border border-white/20 px-6 py-2 rounded-full text-xs hover:bg-white hover:text-black transition-colors">
            Open
        </button>
    </section>
);

// 8. THE STATIC (Tuning In)
const V8: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] flex items-center justify-center overflow-hidden">
        {/* Simple CSS Grain simulation using patterns could be complex, sticking to simple visual */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse pointer-events-none" />
        <div className="z-10 text-center text-white" onClick={onExplore}>
            <Radio size={48} className="mb-6 mx-auto opacity-50" />
            <h1 className="text-2xl font-mono">Tuning In...</h1>
            <p className="text-green-500 font-mono text-xs mt-2">Signal Connected</p>
        </div>
    </section>
);

// 9. THE DAWN (Morning)
const V9: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-t from-orange-100 to-blue-200 flex items-center justify-center">
        <div className="text-center cursor-pointer" onClick={onExplore}>
            <Sun className="mx-auto mb-4 text-orange-400" size={64} />
            <h1 className="text-4xl font-serif text-slate-700">Morning Light</h1>
            <p className="text-slate-500 mt-2">Start your day.</p>
        </div>
    </section>
);

// 10. THE DUSK (Evening)
const V10: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black flex items-end justify-center pb-24">
        <div className="text-center cursor-pointer" onClick={onExplore}>
            <div className="w-64 h-64 rounded-full bg-gradient-to-t from-orange-500 to-transparent opacity-20 blur-3xl absolute bottom-0 left-1/2 -translate-x-1/2" />
            <h1 className="text-3xl text-white font-light relative z-10">Evening Shadow</h1>
            <p className="text-white/50 text-sm mt-2 relative z-10">Unwind.</p>
        </div>
    </section>
);

// 11. THE CODE (Digital)
const V11: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-green-500 font-mono flex items-center justify-center p-8">
        <div className="max-w-2xl break-all opacity-20 text-[10px] absolute inset-0 p-8 overflow-hidden select-none pointer-events-none">
            01010101010010101010101010111010101010100101010101010100101010101
            10101010010100101010101010010101010010101010100101010100101010101
            01010101010010101010101010111010101010100101010101010100101010101
            {/* ... repeated pattern ... */}
        </div>
        <div className="relative z-10 bg-black p-4 border border-green-900 shadow-[0_0_20px_rgba(0,255,0,0.1)] cursor-pointer hover:border-green-500 transition-colors" onClick={onExplore}>
            <p>{'>'} Initialize_Sequence</p>
            <p className="animate-pulse mt-2 is-typing">_</p>
        </div>
    </section>
);

// 12. THE NATURE (Organic)
const V12: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F1F8E9] text-[#33691E] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
            {/* Abstract organic shapes using border radius */}
            <div className="w-96 h-96 bg-green-500 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-spin-slow" style={{ animationDuration: '20s' }} />
        </div>
        <div className="relative z-10 text-center cursor-pointer" onClick={onExplore}>
            <h1 className="text-4xl font-serif italic mb-2">Organic Flow</h1>
            <p className="text-sm font-sans tracking-widest uppercase">Reconnect</p>
        </div>
    </section>
);

// 13. THE URBAN (Concrete)
const V13: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#ddd] flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-10 absolute inset-0 p-4 pointer-events-none">
            {[...Array(16)].map((_, i) => <div key={i} className="bg-black/20 w-full h-full" />)}
        </div>
        <div className="bg-white p-8 shadow-2xl z-10 cursor-pointer" onClick={onExplore}>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Concrete<br />Dreams</h1>
        </div>
    </section>
);

// 14. THE SILENCE (Minimalism)
const V14: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white flex items-center justify-center cursor-pointer" onClick={onExplore}>
        <div className="w-2 h-2 bg-black rounded-full" />
    </section>
);

// 15. THE DIALOG (Chat)
const V15: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="space-y-4 max-w-sm w-full font-sans text-sm">
            <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
                className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm self-start mr-auto"
            >
                Ready to focus?
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }}
                className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm self-end ml-auto cursor-pointer hover:bg-blue-700"
                onClick={onExplore}
            >
                Always.
            </motion.div>
        </div>
    </section>
);

// 16. THE NOTE (Handwritten)
const V16: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#FFF9C4] flex items-center justify-center text-[#5D4037]">
        <div className="transform -rotate-2 cursor-pointer transition-transform hover:rotate-0 hover:scale-105" onClick={onExplore}>
            <h1 className="text-4xl md:text-6xl font-serif italic">Remember to breathe.</h1>
            <p className="text-right mt-4 text-sm opacity-60">— Fragmnt</p>
        </div>
    </section>
);

// 17. THE COMPASS (North)
const V17: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-slate-900 text-slate-300 flex items-center justify-center">
        <div className="text-center cursor-pointer group" onClick={onExplore}>
            <Compass size={80} strokeWidth={1} className="mx-auto mb-8 group-hover:rotate-45 transition-transform duration-700" />
            <h1 className="text-2xl font-light tracking-[0.3em]">FIND YOUR NORTH</h1>
        </div>
    </section>
);

// 18. THE CLOCK (Time)
const V18: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-100 text-gray-800 flex items-center justify-center">
        <div className="relative w-64 h-64 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors" onClick={onExplore}>
            <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-red-500 origin-left animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 w-24 h-[1px] bg-black origin-left rotate-45" />
            <h1 className="mt-96 font-mono text-xs uppercase">Time is relative</h1>
        </div>
    </section>
);

// 19. THE MIRROR (Reflect)
const V19: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-neutral-100 flex flex-col items-center justify-center gap-0 cursor-pointer" onClick={onExplore}>
        <h1 className="text-6xl font-bold text-black tracking-tight">REFLECT</h1>
        <h1 className="text-6xl font-bold text-black/10 tracking-tight transform rotate-180 scale-x-[-1] blur-sm">REFLECT</h1>
    </section>
);

// 20. THE DOORWAY (Perspective)
const V20: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black flex items-center justify-center perspective-[1000px]">
        <motion.div
            whileHover={{ scale: 1.1, rotateY: 15 }}
            className="w-48 h-80 bg-white shadow-[0_0_50px_rgba(255,255,255,0.5)] cursor-pointer flex items-center justify-center"
            onClick={onExplore}
        >
            <span className="text-black font-bold uppercase tracking-widest text-xs">Step Through</span>
        </motion.div>
    </section>
);

// 21. THE CLOUD (Head in Clouds)
const V21: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-sky-100 flex items-center justify-center text-sky-900">
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <Cloud size={120} fill="white" className="text-white drop-shadow-lg cursor-pointer hover:scale-110 transition-transform" onClick={onExplore} />
        </motion.div>
        <h1 className="absolute bottom-20 font-serif italic text-2xl">Head in the clouds.</h1>
    </section>
);

// 22. THE RAIN (Wash Away)
const V22: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#2c3e50] flex items-center justify-center overflow-hidden">
        {/* Simplified CSS Rain */}
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute top-0 w-[1px] bg-blue-400/30"
                style={{ left: `${Math.random() * 100}%`, height: `${Math.random() * 100 + 50}px` }}
                animate={{ y: ['-100%', '1000%'] }}
                transition={{ duration: Math.random() * 0.5 + 0.5, repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
            />
        ))}

        <h1 className="relative z-10 text-white font-light text-4xl cursor-pointer hover:opacity-50 transition-opacity" onClick={onExplore}>
            Wash it away.
        </h1>
    </section>
);

// 23. THE SIGNAL (Searching)
const V23: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black flex items-center justify-center text-green-500 font-mono">
        <div className="text-center cursor-pointer" onClick={onExplore}>
            <div className="w-64 h-64 border border-green-900 rounded-full flex items-center justify-center relative mb-8">
                <div className="w-full h-[1px] bg-green-900 absolute top-1/2 -translate-y-1/2" />
                <div className="h-full w-[1px] bg-green-900 absolute left-1/2 -translate-x-1/2" />
                <motion.div
                    className="w-full h-full rounded-full border border-green-500/50 absolute"
                    animate={{ scale: [0, 1], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <Wifi size={32} />
            </div>
            <p className="animate-pulse">Searching for signal...</p>
        </div>
    </section>
);

// 24. THE TOUCH (Tangible)
const V24: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#d7ccc8] flex items-center justify-center">
        <div className="w-64 h-64 bg-[#efebe9] shadow-inner rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-transform" onClick={onExplore}>
            <span className="text-[#8d6e63] font-bold tracking-widest uppercase">Tangible</span>
        </div>
    </section>
);

// 25. THE VOID (Negative Space)
const V25: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white flex items-end justify-end p-24 cursor-pointer" onClick={onExplore}>
        <div className="text-right">
            <div className="w-4 h-4 bg-black mb-4 ml-auto" />
            <h1 className="text-xl font-bold uppercase">Embrace<br />Space.</h1>
        </div>
    </section>
);

// 26. THE ORBIT (Gravitate)
const V26: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1a237e] text-white flex items-center justify-center">
        <div className="relative w-96 h-96 cursor-pointer" onClick={onExplore}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]" />

            <motion.div
                className="absolute top-0 left-0 w-full h-full border border-white/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-3 h-3 bg-blue-300 rounded-full absolute -top-1.5 left-1/2" />
            </motion.div>
        </div>
        <p className="absolute bottom-12 uppercase tracking-[0.5em] text-xs">Gravitate</p>
    </section>
);

// 27. THE GLITCH (Reality)
const V27: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-center cursor-pointer" onClick={onExplore}>
        <h1 className="text-8xl font-black uppercase relative hover:text-red-500 transition-colors">
            <span className="absolute top-0 left-0 -ml-1 text-red-500 opacity-70 animate-pulse">REALITY</span>
            <span className="absolute top-0 left-0 -ml-2 text-blue-500 opacity-70 animate-pulse" style={{ animationDelay: '0.1s' }}>REALITY</span>
            REALITY
        </h1>
        <p className="absolute bottom-20 font-mono text-xs opacity-50">System Check: OK</p>
    </section>
);

// 28. THE BLOOM (Growth)
const V28: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#fce4ec] flex items-center justify-center overflow-hidden">
        <motion.div
            className="w-4 h-4 bg-pink-500 rounded-full mix-blend-multiply opacity-50 absolute"
            animate={{ scale: [1, 50], opacity: [0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
            className="w-4 h-4 bg-purple-500 rounded-full mix-blend-multiply opacity-50 absolute"
            animate={{ scale: [1, 40], opacity: [0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />
        <div className="relative z-10 cursor-pointer text-pink-900 font-serif italic text-3xl" onClick={onExplore}>
            Let it grow.
        </div>
    </section>
);

// 29. THE PATH (Follow)
const V29: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#f3e5f5] flex items-center justify-center">
        <svg className="absolute w-full h-full pointer-events-none">
            <path d="M0,500 Q400,300 800,500 T1600,500" fill="none" stroke="#ab47bc" strokeWidth="2" strokeDasharray="10 10" className="opacity-30" />
        </svg>

        <button onClick={onExplore} className="bg-white text-purple-700 px-8 py-3 rounded-full shadow-lg font-bold hover:shadow-xl transition-shadow z-10">
            Follow the line
        </button>
    </section>
);

// 30. THE END (Beginning)
const V30: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center cursor-pointer" onClick={onExplore}>
        <h1 className="text-4xl md:text-6xl font-light mb-8">
            Or just the beginning.
        </h1>
        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <Play fill="currentColor" className="ml-1" />
        </div>
    </section>
);


// ============================================================================
// MAIN COMPONENT & SWITCHER
// ============================================================================

const VARIATIONS = [
    V1, V2, V3, V4, V5, V6, V7, V8, V9, V10,
    V11, V12, V13, V14, V15, V16, V17, V18, V19, V20,
    V21, V22, V23, V24, V25, V26, V27, V28, V29, V30
];

interface HeroAlternativeMProps {
    onComplete?: () => void;
}

const HeroAlternativeM: React.FC<HeroAlternativeMProps> = ({ onComplete }) => {
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
                EXTENDED NARRATIVE :: STYLE {currentIndex + 1}
            </div>
        </div>
    );
};

export default HeroAlternativeM;
