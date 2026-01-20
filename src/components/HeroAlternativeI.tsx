import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, Fingerprint, Construction, Heart } from 'lucide-react';
import AudioManager from '../utils/AudioManager';
import { startScroll } from './SmoothScroll';

interface HeroProps {
    onExplore: () => void;
}

// ============================================================================
// STORYTELLING SERIES (1-20)
// Theme: "Fragmnt: Human Composed Ambient Music" & "Under Construction"
// Concepts: Human vs Machine, Hand-crafted, Work in Progress, Manifesto.
// ============================================================================

// 1. THE STATEMENT (Bold Manifesto)
const V1: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F3F3F3] text-black flex flex-col justify-center px-8 md:px-24">
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
            Machines<br />
            Generate.<br />
            <span className="text-accent-primary">Humans<br />Compose.</span>
        </h1>
        <div className="max-w-xl">
            <p className="text-lg font-medium leading-relaxed mb-8">
                In a world of infinite algorithmic noise, Fragmnt brings you back to the source.
                Real emotions. Real instruments. Real humans.
            </p>
            <button onClick={onExplore} className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-accent-primary transition-colors">
                Listen to the difference
            </button>
        </div>
        <div className="absolute top-8 right-8 rotate-12 bg-yellow-300 text-black font-bold px-4 py-2 shadow-lg">
            ALPHA VERSION
        </div>
    </section>
);

// 2. THE BLUEPRINT (Under Construction)
const V2: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#0047AB] text-white font-mono p-8 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-20 pointer-events-none">
            {[...Array(400)].map((_, i) => <div key={i} className="border-[0.5px] border-white/30" />)}
        </div>

        <div className="relative z-10 flex justify-between items-start">
            <div>
                <h2 className="text-xs border border-white px-2 py-1 inline-block mb-2">PROJECT: FRAGMNT</h2>
                <h1 className="text-4xl md:text-6xl font-bold">BUILDING<br />THE FUTURE<br />OF CALM.</h1>
            </div>
            <Construction className="w-12 h-12 animate-pulse" />
        </div>

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-white pt-4">
                <h3 className="text-xs uppercase opacity-60 mb-2">Status</h3>
                <p>Work in Progress</p>
            </div>
            <div className="border-t border-white pt-4">
                <h3 className="text-xs uppercase opacity-60 mb-2">Core</h3>
                <p>Human Emotion Engine</p>
            </div>
            <div className="border-t border-white pt-4">
                <h3 className="text-xs uppercase opacity-60 mb-2">AI Level</h3>
                <p>0% Detected</p>
            </div>
            <div className="border-t border-white pt-4">
                <button onClick={onExplore} className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span>Inspect Prototype</span> <ArrowRight size={16} />
                </button>
            </div>
        </div>
    </section>
);

// 3. THE HANDWRITTEN (The Artisan)
const V3: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#FFF8E7] text-[#2C2C2C] flex items-center justify-center text-center">
        <div className="max-w-3xl px-6">
            <p className="font-serif italic text-2xl mb-6 text-[#8B4513]">Draft #1</p>
            <h1 className="text-6xl md:text-7xl font-light handwritten-font mb-8 leading-tight" style={{ fontFamily: '"Zapfino", cursive' }}>
                Hand-crafted ambiances for digital souls.
            </h1>
            <p className="font-sans text-sm uppercase tracking-[0.2em] opacity-60 mb-12">
                No loops. No algorithms. Just music.
            </p>
            <div onClick={onExplore} className="cursor-pointer inline-block border-b-2 border-black pb-1 hover:border-[#8B4513] hover:text-[#8B4513] transition-colors">
                Discover the craft
            </div>
        </div>

        {/* Coffee stain decoration */}
        <div className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full border-[10px] border-[#8B4513]/10 opacity-60 transform rotate-45 pointer-events-none filter blur-sm" />
    </section>
);

// 4. THE TERMINAL (Code vs Humanity)
const V4: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#1E1E1E] text-[#00FF41] font-mono p-12 flex flex-col justify-center">
        <div className="max-w-2xl bg-black/50 p-8 rounded-lg border border-[#00FF41]/30 shadow-2xl backdrop-blur-sm">
            <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-2 text-sm md:text-base">
                <p><span className="text-blue-400">const</span> <span className="text-yellow-300">music</span> = <span className="text-blue-400">new</span> <span className="text-green-300">Ambiance</span>();</p>
                <p><span className="text-purple-400">if</span> (music.isGeneratedByAI()) &#123;</p>
                <p className="pl-4 text-red-400">throw new Error("Soul missing");</p>
                <p>&#125; <span className="text-purple-400">else</span> &#123;</p>
                <p className="pl-4">music.play(<span className="text-orange-300">"FRAGMNT"</span>);</p>
                <p>&#125;</p>
                <p className="animate-pulse mt-4">_</p>
            </div>
        </div>

        <button onClick={onExplore} className="mt-8 self-start border border-[#00FF41] text-[#00FF41] px-6 py-2 hover:bg-[#00FF41] hover:text-black transition-colors uppercase text-xs tracking-widest">
            &gt; Execute Sequence
        </button>
    </section>
);

// 5. THE RESISTANCE (Punk / Raw)
const V5: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-overlay" />

        <div className="relative z-10 transform -rotate-2">
            <h1 className="text-8xl md:text-[12rem] font-black leading-none bg-white text-black px-6 inline-block">
                RECLAIM
            </h1>
            <br />
            <h1 className="text-8xl md:text-[12rem] font-black leading-none text-transparent stroke-text-white inline-block" style={{ WebkitTextStroke: '2px white' }}>
                MUSIC.
            </h1>
        </div>

        <div className="absolute bottom-12 left-0 w-full text-center">
            <p className="text-xl font-bold uppercase bg-red-600 text-white inline-block px-4 py-1 transform rotate-1">
                Warning: 100% Human Content
            </p>
            <div className="mt-6">
                <button onClick={onExplore} className="underline text-lg hover:text-red-500 transition-colors">
                    Join the movement
                </button>
            </div>
        </div>
    </section>
);

// 6. THE FINGERPRINT (Identity)
const V6: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black flex flex-col items-center justify-center">
        <Fingerprint size={300} strokeWidth={0.5} className="opacity-5 animate-pulse absolute" />

        <div className="relative z-10 text-center">
            <h1 className="text-5xl font-light tracking-tight mb-2">Unique.</h1>
            <h1 className="text-5xl font-light tracking-tight mb-2">Imperfect.</h1>
            <h1 className="text-5xl font-bold tracking-tight mb-8">Yours.</h1>

            <p className="max-w-md mx-auto text-gray-500 mb-8 font-serif italic">
                Our ambiances have quirks. They breathe. They change. Because they are made by people, not processors.
            </p>

            <button onClick={onExplore} className="border border-black px-8 py-3 rounded-full text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors">
                Feel the touch
            </button>
        </div>
    </section>
);

// 7. THE STUDIO (Atmospheric)
const V7: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex items-end p-8 md:p-16">
        {/* Placeholder for Studio Image */}
        <div className="absolute inset-0 bg-neutral-900 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end">
            <div>
                <div className="flex items-center gap-2 mb-4 text-red-500 animate-pulse">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-widest">Recording Now</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold leading-none mb-4">
                    The Session<br />Never Ends.
                </h1>
            </div>
            <div className="md:text-right mt-8 md:mt-0">
                <p className="text-lg opacity-80 mb-8 max-w-sm ml-auto">
                    Infinite soundscapes, recorded live, evolving forever in your browser.
                </p>
                <button onClick={onExplore} className="bg-white text-black px-8 py-3 font-bold rounded hover:bg-neutral-300 transition-colors flex items-center gap-2 ml-auto">
                    <Mic size={18} /> Enter Studio
                </button>
            </div>
        </div>
    </section>
);

// 8. THE DOCTOR/SCIENCE (Clean Lab)
const V8: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F0F2F5] text-[#333] font-sans flex items-center justify-center">
        <div className="bg-white p-12 shadow-xl rounded-2xl max-w-2xl text-center border border-gray-100">
            <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Prescription for Chaos.</h1>
            <p className="text-gray-600 leading-relaxed mb-8">
                Daily life is noisy. Algorithms are demanding. <br />
                We prescribe 20 minutes of <strong>Fragmnt</strong> daily. <br />
                Side effects: Creativity, Calm, Clarity.
            </p>
            <div className="flex justify-center gap-4">
                <button onClick={onExplore} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Start Treatment
                </button>
                <button className="text-gray-400 text-sm underline hover:text-gray-600">Read the label</button>
            </div>
        </div>
    </section>
);

// 9. THE POST-IT (Work in Progress)
const V9: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#333] text-black flex items-center justify-center overflow-hidden">
        {/* Cork board effect implied */}
        <div className="bg-yellow-200 w-[300px] h-[300px] shadow-2xl transform -rotate-3 p-8 flex flex-col justify-between font-handwritten relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-red-400/50 transform rotate-1" />

            <h1 className="text-3xl font-bold font-serif">To Do:</h1>
            <ul className="list-disc pl-5 space-y-2 text-lg font-medium">
                <li className="line-through opacity-50">Build Audio Engine</li>
                <li className="line-through opacity-50">Hire Musicians</li>
                <li className="font-bold">Launch Fragmnt</li>
                <li>Change the World</li>
            </ul>
            <p className="text-xs text-right mt-4 opacity-60">
                (Almost there...)
            </p>
        </div>

        <button onClick={onExplore} className="absolute bottom-12 text-white border-b border-white/50 pb-1 hover:border-white transition-colors">
            Sneak Peek
        </button>
    </section>
);

// 10. THE UNBOXING (Mystery)
const V10: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black flex items-center justify-center">
        <div onClick={onExplore} className="group cursor-pointer relative">
            <div className="w-64 h-64 border border-white/20 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-white/50 font-mono text-xs tracking-widest text-center">
                    CLASSIFIED<br />
                    MATERIAL<br />
                    <br />
                    [ CLICK TO OPEN ]
                </div>
            </div>
            {/* Glow */}
            <div className="absolute inset-0 bg-white/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        <div className="absolute bottom-8 text-white/30 text-xs">
            Fragmnt / Project X
        </div>
    </section>
);

// 11. THE TYPEWRITER (Storyteller)
const V11: React.FC<HeroProps> = ({ onExplore }) => {
    const text = "Every note you hear was played by a human hand.     Every silence was intentional.     Welcome to Fragmnt.";
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayed((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-screen bg-white text-black font-mono flex items-center justify-center p-12">
            <div className="max-w-2xl text-2xl md:text-3xl leading-relaxed">
                {displayed}
                <span className="animate-blink">|</span>
            </div>
            <button onClick={onExplore} className="absolute bottom-12 text-xs uppercase tracking-widest hover:bg-black hover:text-white px-4 py-2 transition-colors">
                Continue Reading
            </button>
        </section>
    );
};

// 12. THE VINYL (Retro)
const V12: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F5F5DC] text-[#4A4A4A] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] rounded-full bg-black border-[20px] border-[#333] flex items-center justify-center shadow-2xl"
        >
            <div className="w-1/3 h-1/3 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-[1vw] text-center p-2">
                FRAGMNT<br />LP
            </div>
        </motion.div>

        <div className="absolute bottom-12 text-center">
            <h1 className="text-3xl font-bold mb-2">Slow Down.</h1>
            <p className="text-sm opacity-80 mb-6">Analog warmth in a digital age.</p>
            <div onClick={onExplore} className="w-12 h-12 bg-[#333] text-white rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform cursor-pointer">
                <PlayIcon />
            </div>
        </div>
    </section>
);

// 13. THE VOID (Minimalist)
const V13: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F0F0F0] flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-xs font-bold uppercase tracking-[1em] opacity-30 mb-8">
                Space to think
            </h1>
            <div
                onClick={onExplore}
                className="w-4 h-4 bg-black rounded-full mx-auto cursor-pointer hover:scale-[5] transition-transform duration-700 ease-in-out"
            />
            <p className="text-[10px] mt-8 opacity-20">Click the dot</p>
        </div>
    </section>
);

// 14. THE SIGNAL (Waveform)
const V14: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-green-500 font-mono flex flex-col justify-end p-8">
        <div className="flex-1 flex items-center justify-center">
            <div className="flex items-end gap-1 h-32">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-2 bg-green-500"
                        animate={{ height: ["10%", "100%", "10%"] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                    />
                ))}
            </div>
        </div>

        <div className="border-t border-green-900 pt-4 flex justify-between items-end">
            <div>
                <h1 className="text-2xl font-bold">SIGNAL RECEIVED</h1>
                <p className="text-xs opacity-60">Source: Human Composer</p>
            </div>
            <button onClick={onExplore} className="bg-green-500 text-black px-6 py-2 font-bold hover:bg-white transition-colors">
                DECODE
            </button>
        </div>
    </section>
);

// 15. THE CLOUD (Soft)
const V15: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-b from-[#E0F7FA] to-[#FFFFFF] text-[#006064] flex items-center justify-center">
        <div className="text-center">
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-xl" style={{ textShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                    Head in<br />the clouds.
                </h1>
            </motion.div>
            <p className="mt-8 text-xl font-light opacity-80">
                Music that lifts you up.
            </p>
            <button onClick={onExplore} className="mt-8 bg-white/50 backdrop-blur px-8 py-3 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow">
                Float away
            </button>
        </div>
    </section>
);

// 16. THE REBEL (Sticker Bomb)
const V16: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-yellow-400 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-20" />

        <motion.div
            drag
            className="absolute top-1/4 left-1/4 bg-black text-white p-4 font-bold text-2xl transform -rotate-12 cursor-move shadow-xl"
        >
            NO AI
        </motion.div>

        <motion.div
            drag
            className="absolute bottom-1/3 right-1/4 bg-white text-black p-6 font-black text-4xl transform rotate-6 cursor-move shadow-xl border-4 border-black"
        >
            FRAGMNT
        </motion.div>

        <motion.div
            drag
            className="absolute top-1/2 left-1/2 bg-red-600 text-white rounded-full w-32 h-32 flex items-center justify-center font-bold text-xl transform -translate-x-1/2 -rotate-3 cursor-move shadow-xl"
        >
            REAL!
        </motion.div>

        <button onClick={onExplore} className="absolute bottom-12 bg-black text-white px-12 py-4 font-black uppercase text-2xl hover:scale-105 transition-transform">
            Start the Noise
        </button>
    </section>
);

// 17. THE ARCHITECT (Geometric)
const V17: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#222] text-white flex items-center justify-center overflow-hidden font-sans">
        <div className="absolute w-[80vw] h-[80vw] border border-white/10 rounded-full" />
        <div className="absolute w-[60vw] h-[60vw] border border-white/10 rounded-full" />
        <div className="absolute w-[40vw] h-[40vw] border border-white/10 rounded-full" />

        <div className="relative z-10 bg-[#222] p-8">
            <h1 className="text-4xl font-light tracking-[0.2em] mb-2 text-center">STRUCTURED</h1>
            <h1 className="text-4xl font-bold tracking-[0.2em] mb-8 text-center">SERENITY</h1>

            <div className="flex justify-center">
                <div onClick={onExplore} className="w-px h-16 bg-white hover:h-32 transition-all cursor-pointer" />
            </div>
        </div>
    </section>
);

// 18. THE HORIZON (Infinite)
const V18: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364] flex flex-col items-center justify-end pb-32">
        <h1 className="text-white text-6xl md:text-8xl font-thin tracking-tighter opacity-80 mb-4 mix-blend-overlay">
            INFINITE
        </h1>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        <p className="text-white/50 text-sm mt-4 tracking-widest uppercase">
            Beyond the algorithm
        </p>
        <button onClick={onExplore} className="mt-12 text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors font-light text-xs uppercase">
            Enter the horizon
        </button>
    </section>
);

// 19. THE COMPOSER (Sheet Music)
const V19: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black flex items-center justify-center overflow-hidden">
        {/* Background lines */}
        <div className="absolute inset-0 flex flex-col justify-center space-y-8 opacity-10 pointer-events-none">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-px bg-black" />
            ))}
        </div>

        <div className="relative z-10 text-center">
            <div className="text-6xl mb-4">&#119070;</div> {/* Treble clef roughly */}
            <h1 className="text-4xl font-serif italic mb-2">The Composer is In.</h1>
            <p className="text-sm text-gray-500 mb-8">AI is on a break.</p>
            <button onClick={onExplore} className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 font-serif">
                Listen
            </button>
        </div>
    </section>
);

// 20. THE OPENING (Curtain)
const V20: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-white flex items-center justify-center">
        <motion.div
            initial={{ width: "50%" }}
            whileHover={{ width: "10%" }}
            className="absolute left-0 h-full bg-[#222] z-10 border-r border-white/10"
        />
        <motion.div
            initial={{ width: "50%" }}
            whileHover={{ width: "10%" }}
            className="absolute right-0 h-full bg-[#222] z-10 border-l border-white/10"
        />

        <div className="relative z-0 text-center">
            <h1 className="text-5xl font-bold mb-4 text-accent-primary">You found it.</h1>
            <p className="text-xl mb-8">The soul of the machine is missing.<br />We put it back.</p>
            <button onClick={onExplore} className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors uppercase tracking-widest font-bold">
                Start
            </button>
        </div>

        <div className="absolute bottom-12 z-20 text-xs text-white/30 pointer-events-none">
            Hover sides to open curtains
        </div>
    </section>
);

// Helper Icon
const PlayIcon = () => (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
        <path d="M13 7.13397C14.3333 7.90377 14.3333 9.82942 13 10.5992L2.5 16.6614C1.16667 17.4312 -0.500001 16.4684 -0.500001 14.9282L-0.500002 2.80511C-0.500002 1.26491 1.16667 0.302086 2.5 1.07189L13 7.13397Z" />
    </svg>
);


// ============================================================================
// MAIN COMPONENT & SWITCHER
// ============================================================================

const VARIATIONS = [
    V1, V2, V3, V4, V5, V6, V7, V8, V9, V10,
    V11, V12, V13, V14, V15, V16, V17, V18, V19, V20
];

interface HeroAlternativeIProps {
    onComplete?: () => void;
}

const HeroAlternativeI: React.FC<HeroAlternativeIProps> = ({ onComplete }) => {
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
                STORYTELLING :: STYLE {currentIndex + 1}
            </div>
        </div>
    );
};

export default HeroAlternativeI;
