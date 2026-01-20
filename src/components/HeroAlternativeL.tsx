import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MoveRight } from 'lucide-react';
import AudioManager from '../utils/AudioManager';
import { startScroll } from './SmoothScroll';

interface HeroProps {
    onExplore: () => void;
}

// ============================================================================
// SUBTLE NARRATIVE SERIES (1-20)
// Theme: "The Start of a Story". Atmospheric, Intimate, Evocative.
// Constraint: No book references. Focus on feeling and setting the scene.
// ============================================================================

// 1. THE PAUSE (Simple Statement)
const V1: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F5F5F0] text-[#333] flex flex-col items-center justify-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
        >
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                It’s been a long day.
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-gray-500 mb-12">
                Let’s slow it down.
            </p>
            <button onClick={onExplore} className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
                Start here
            </button>
        </motion.div>
    </section>
);

// 2. THE CHANGE (Gradient Shift)
const V2: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-b from-[#E6E9F0] to-[#EEF1F5] flex items-center justify-center">
        <motion.div
            animate={{ background: ["linear-gradient(to bottom, #E6E9F0, #EEF1F5)", "linear-gradient(to bottom, #cfd9df, #e2ebf0)"] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0"
        />
        <div className="relative z-10 text-center">
            <h1 className="text-5xl font-light text-slate-700 mb-4">The light is different here.</h1>
            <button onClick={onExplore} className="mt-8 w-12 h-12 rounded-full border border-slate-400 flex items-center justify-center text-slate-600 hover:bg-slate-400 hover:text-white transition-colors">
                <ArrowRight size={20} />
            </button>
        </div>
    </section>
);

// 3. THE QUESTION (Minimalist)
const V3: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-center">
        <div className="cursor-pointer group" onClick={onExplore}>
            <h1 className="text-3xl md:text-5xl font-light tracking-widest group-hover:tracking-[0.5em] transition-all duration-700">
                CAN YOU HEAR IT?
            </h1>
            <p className="text-center text-xs text-gray-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                ( Click to listen )
            </p>
        </div>
    </section>
);

// 4. THE INVITATION (Zoom)
const V4: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#343a40] text-[#f8f9fa] overflow-hidden flex items-center justify-center">
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative cursor-pointer"
            onClick={onExplore}
        >
            <h1 className="text-[15vw] font-bold leading-none opacity-10 select-none">
                CLOSE
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                <p className="text-4xl md:text-6xl font-serif italic">Come closer.</p>
            </div>
        </motion.div>
    </section>
);

// 5. THE SECRET (Corner Text)
const V5: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#FDFBF7] p-12 md:p-24 cursor-pointer" onClick={onExplore}>
        <div className="absolute bottom-12 right-12 text-right max-w-xs">
            <p className="text-sm font-serif italic leading-relaxed text-gray-600">
                We found something.<br />
                It’s not perfect.<br />
                But it’s real.
            </p>
            <div className="mt-4 flex justify-end">
                <ArrowRight size={16} className="text-black" />
            </div>
        </div>

        <div className="absolute top-12 left-12 text-xs font-bold uppercase tracking-widest opacity-20">
            Confidential
        </div>
    </section>
);

// 6. THE CONTRAST (Noise vs Calm)
const V6: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center text-gray-300 p-12">
            <h1 className="text-6xl font-black uppercase line-through decoration-red-500 decoration-4">NOISE</h1>
        </div>
        <div className="w-full md:w-1/2 bg-black text-white flex items-center justify-center p-12 cursor-pointer group" onClick={onExplore}>
            <h1 className="text-6xl font-light group-hover:text-blue-300 transition-colors">Clarité.</h1>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 text-black px-4 py-1 text-xs font-bold uppercase rounded-full">
            VS
        </div>
    </section>
);

// 7. THE WINDOW (Frame)
const V7: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#222] flex items-center justify-center p-8">
        <div className="w-full h-full border-[1px] border-white/20 flex items-center justify-center relative cursor-pointer hover:border-white/50 transition-colors duration-500" onClick={onExplore}>
            <div className="text-center text-white">
                <h1 className="text-2xl font-mono mb-2">Look out.</h1>
                <p className="text-white/40 text-sm">The view is better from here.</p>
            </div>

            {/* Window Shine */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
        </div>
    </section>
);

// 8. THE BREATH (Rhythmic)
const V8: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#8BC6EC] bg-gradient-to-br from-[#8BC6EC] to-[#9599E2] flex items-center justify-center">
        <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer"
            onClick={onExplore}
        >
            <span className="text-white font-bold tracking-widest text-lg">INHALE</span>
        </motion.div>

        <p className="absolute bottom-12 text-white/60 text-sm font-medium">Breathe with the music.</p>
    </section>
);

// 9. THE DETAIL (Texture Description)
const V9: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1a1a1a] text-[#e0e0e0] flex items-center justify-center font-mono">
        <div className="max-w-md p-8 border-l-2 border-white/20">
            <p className="text-sm mb-4 opacity-50">00:00:01</p>
            <p className="leading-relaxed mb-8">
                The sound of rain on a window pane.<br />
                A distant train.<br />
                The hum of a city that never stops.<br />
                <br />
                All captured. All yours.
            </p>
            <button onClick={onExplore} className="text-white hover:text-green-400 transition-colors">
                [ Play Recording ]
            </button>
        </div>
    </section>
);

// 10. THE ARRIVAL (Welcome)
const V10: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-7xl font-light mb-4 text-gray-900">You’ve arrived.</h1>
            <p className="text-gray-400 mb-8">Leave your bags at the door.</p>
            <div onClick={onExplore} className="mx-auto w-px h-16 bg-gray-300 hover:h-24 hover:bg-black transition-all cursor-pointer duration-500" />
        </div>
    </section>
);

// 11. THE CHOICE (Split V2)
const V11: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen flex">
        <div className="flex-1 bg-orange-50 hover:bg-orange-100 transition-colors flex items-center justify-center cursor-pointer border-r border-gray-200" onClick={onExplore}>
            <span className="text-orange-900 transform -rotate-90 md:rotate-0 tracking-widest uppercase text-sm font-bold">Energy</span>
        </div>
        <div className="flex-1 bg-blue-50 hover:bg-blue-100 transition-colors flex items-center justify-center cursor-pointer" onClick={onExplore}>
            <span className="text-blue-900 transform -rotate-90 md:rotate-0 tracking-widest uppercase text-sm font-bold">Calm</span>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-full shadow-lg text-xs font-bold pointer-events-none">
            FRAGMNT
        </div>
    </section>
);

// 12. THE WHISPER (Faint)
const V12: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F0F0F0] flex items-center justify-center overflow-hidden">
        <h1 className="text-[12vw] font-bold text-gray-200 select-none">
            LISTEN
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
            <button onClick={onExplore} className="bg-white px-6 py-2 rounded-full shadow-sm text-sm hover:shadow-md transition-shadow">
                What did it say?
            </button>
        </div>
    </section>
);

// 13. THE OBSERVATION (City Sleeps)
const V13: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0F2027] text-gray-400 flex items-end p-12 md:p-24">
        <div className="max-w-lg">
            <h1 className="text-3xl text-white font-light tracking-wide mb-4">
                The city sleeps.
            </h1>
            <p className="mb-8 font-light leading-relaxed">
                But the mind wanders. Give it a place to go.
            </p>
            <button onClick={onExplore} className="flex items-center gap-2 text-white text-sm uppercase tracking-widest hover:gap-4 transition-all">
                Wander <MoveRight size={16} />
            </button>
        </div>
    </section>
);

// 14. THE PROMISE (Flow)
const V14: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#2C3E50] text-[#BDC3C7] flex items-center justify-center">
        <div className="text-center space-y-8">
            <div className="text-xl line-through decoration-black/50 opacity-50">No loops.</div>
            <div className="text-xl line-through decoration-black/50 opacity-50">No algos.</div>
            <div className="text-4xl text-white font-bold">Just flow.</div>

            <button onClick={onExplore} className="mt-8 border border-white/20 px-8 py-3 rounded hover:bg-white hover:text-[#2C3E50] transition-colors">
                Experience it
            </button>
        </div>
    </section>
);

// 15. THE MEMORY (Nostalgia)
const V15: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#Eaddcf] text-[#5e4b35] flex items-center justify-center">
        <div className="max-w-xl text-center p-8">
            <h1 className="text-3xl md:text-4xl font-serif italic mb-6">
                "Like a memory you can't quite place."
            </h1>
            <p className="text-sm font-sans uppercase tracking-widest opacity-60 mb-12">
                Familiar yet new.
            </p>
            <div onClick={onExplore} className="w-12 h-12 border border-[#5e4b35] rounded-full flex items-center justify-center mx-auto hover:bg-[#5e4b35] hover:text-[#Eaddcf] transition-colors cursor-pointer">
                <Play size={16} fill="currentColor" />
            </div>
        </div>
    </section>
);

// 16. THE SHIFT (Drift)
const V16: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-blue-50 overflow-hidden">
        <motion.div
            animate={{ x: ["-10%", "10%"], y: ["-5%", "5%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_60%)] opacity-50"
        />

        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl md:text-8xl font-thin text-blue-900/20 mix-blend-multiply tracking-tighter" onClick={onExplore} style={{ cursor: 'pointer' }}>
                DRIFT AWAY
            </h1>
        </div>
    </section>
);

// 17. THE FOCUS (Blur to Sharp)
const V17: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
        <motion.div
            whileHover={{ filter: "blur(0px)", opacity: 1 }}
            className="text-center filter blur-sm opacity-50 transition-all duration-700 cursor-pointer"
            onClick={onExplore}
        >
            <h1 className="text-5xl font-bold mb-4">Clear your mind.</h1>
            <p className="text-gray-500">Focus comes from within.</p>
        </motion.div>

        <p className="absolute bottom-8 text-xs text-gray-400">Hover to focus</p>
    </section>
);

// 18. THE ESCAPE (Door)
const V18: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] flex items-center justify-center">
        <div className="w-[200px] h-[350px] bg-white shadow-[0_0_100px_rgba(255,255,255,0.2)] hover:shadow-[0_0_150px_rgba(255,255,255,0.5)] transition-shadow duration-700 cursor-pointer flex items-center justify-center group" onClick={onExplore}>
            <div className="text-black font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Enter
            </div>
        </div>

        <div className="absolute bottom-12 text-white/30 text-xs">
            A door to elsewhere.
        </div>
    </section>
);

// 19. THE FEELING (Weightless)
const V19: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-t from-[#cfd9df] to-[#e2ebf0] flex items-center justify-center">
        <motion.div
            animate={{ y: [-20, 20] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
            <h1 className="text-5xl font-thin tracking-[0.2em] text-slate-500">WEIGHTLESS</h1>
        </motion.div>

        <button onClick={onExplore} className="absolute bottom-20 bg-white/50 backdrop-blur px-8 py-2 rounded-full text-slate-600 text-sm font-medium hover:bg-white transition-colors">
            Let go
        </button>
    </section>
);

// 20. THE START (Sound)
const V20: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center">
        <div className="flex items-end gap-1 mb-8 h-16">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 bg-white"
                    animate={{ height: ["20%", "100%", "20%"] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                />
            ))}
        </div>

        <h1 className="text-2xl font-light mb-2">It begins with a sound.</h1>
        <p className="text-gray-500 text-sm mb-12">Everything else follows.</p>

        <button onClick={onExplore} className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <Play fill="currentColor" size={20} />
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

interface HeroAlternativeLProps {
    onComplete?: () => void;
}

const HeroAlternativeL: React.FC<HeroAlternativeLProps> = ({ onComplete }) => {
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
                SUBTLE NARRATIVE :: STYLE {currentIndex + 1}
            </div>
        </div>
    );
};

export default HeroAlternativeL;
