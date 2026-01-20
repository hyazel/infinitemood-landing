import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Smartphone, Star, Check, Bell, Mic, MoreHorizontal, Settings, Moon } from 'lucide-react';
import AudioManager from '../utils/AudioManager';
import { startScroll } from './SmoothScroll';

interface HeroProps {
    onExplore: () => void;
}

// ============================================================================
// PRODUCT & APP SHOWCASE SERIES (1-20)
// Theme: "The App is the Hero". Floating devices, UI interactions, SaaS vibes.
// ============================================================================

// 1. THE HERO DEVICE (Giant iPhone)
const V1: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F5F5F7] flex flex-col md:flex-row items-center justify-center overflow-hidden">
        <div className="w-full md:w-1/2 p-12 md:pl-24 z-10 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight">
                Your personal<br />soundscape.
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-md mx-auto md:mx-0">
                Fragmnt creates unique, human-composed ambiances that adapt to your mood. Available now on iOS.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
                <button onClick={onExplore} className="bg-black text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors">
                    <Download size={18} /> Download App
                </button>
                <div className="flex items-center gap-1 text-yellow-500 font-bold">
                    <Star fill="currentColor" size={18} />
                    <span className="text-black">4.9</span>
                </div>
            </div>
        </div>

        <div className="w-full md:w-1/2 h-full flex items-end justify-center relative">
            {/* Mockup */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[300px] h-[600px] bg-black rounded-[50px] border-[8px] border-gray-800 shadow-2xl overflow-hidden relative"
            >
                {/* Screen Content */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full mb-4 flex items-center justify-center">
                        <Play fill="white" size={24} />
                    </div>
                    <h3 className="font-bold text-xl">Deep Focus</h3>
                    <p className="text-white/60 text-sm">Playing • 12:04</p>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl" />
            </motion.div>
        </div>
    </section>
);

// 2. THE INTERFACE (Web as App)
const V2: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-white flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-[#1A1A1A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[70vh]">
            {/* Header */}
            <div className="h-16 border-b border-white/5 flex items-center justify-between px-6">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs font-mono opacity-50">Fragmnt Desktop</div>
                <Settings size={16} className="opacity-50" />
            </div>

            {/* Body */}
            <div className="flex-1 flex">
                <div className="w-64 border-r border-white/5 p-6 hidden md:block">
                    <div className="text-xs font-bold uppercase opacity-40 mb-4">Library</div>
                    <div className="space-y-4 text-sm font-medium">
                        <div className="text-white bg-white/10 p-2 rounded">Focus</div>
                        <div className="text-gray-400 p-2">Relaxation</div>
                        <div className="text-gray-400 p-2">Sleep</div>
                    </div>
                </div>
                <div className="flex-1 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black relative">
                    <h1 className="text-4xl font-bold mb-2">Morning Clarity</h1>
                    <p className="opacity-60 mb-8">Composed by Elena R.</p>

                    {/* Play Control */}
                    <button onClick={onExplore} className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        <Play fill="black" size={32} />
                    </button>
                </div>
            </div>
        </div>

        <p className="mt-8 text-gray-500 text-sm">Experience the web player.</p>
    </section>
);

// 3. THE FEATURES (Grid)
const V3: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black flex flex-col items-center justify-center p-8">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                More than just noise.
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Discover why Fragmnt is the #1 rated app for human-composed ambient music.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer group" onClick={onExplore}>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mic />
                </div>
                <h3 className="font-bold text-lg mb-2">Real Instruments</h3>
                <p className="text-gray-500 text-sm">Recorded in studios, not generated by servers.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer group" onClick={onExplore}>
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Smartphone />
                </div>
                <h3 className="font-bold text-lg mb-2">Adaptive Audio</h3>
                <p className="text-gray-500 text-sm">Music that evolves with your time of day.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer group" onClick={onExplore}>
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Moon />
                </div>
                <h3 className="font-bold text-lg mb-2">Dark Mode</h3>
                <p className="text-gray-500 text-sm">Designed for late nights and early mornings.</p>
            </div>
        </div>
    </section>
);

// 4. THE SLIDER (Interactive)
const V4: React.FC<HeroProps> = ({ onExplore }) => {
    const [value, setValue] = useState(50);

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center transition-colors duration-500" style={{ backgroundColor: `hsl(${200 + value}, 50%, ${90 - value / 4}%)` }}>
            <h1 className="text-4xl font-bold mb-12 text-[#333]">Set your mood.</h1>

            <div className="w-[80%] max-w-md relative">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-black/10"
                />
                <div className="flex justify-between mt-4 text-xs font-bold uppercase tracking-widest opacity-50 text-[#333]">
                    <span>Calm</span>
                    <span>Energy</span>
                </div>
            </div>

            <div className="mt-16">
                <button onClick={onExplore} className="bg-[#333] text-white px-8 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
                    Play "{value < 50 ? 'Serenity' : 'Focus'}" Mix
                </button>
            </div>
        </section>
    );
};

// 5. THE FLOATING UI (3D Cards)
const V5: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden flex items-center justify-center perspective-[1000px]">
        {/* Background Cards */}
        <motion.div
            animate={{ y: [-20, 20, -20], rotateX: 10, rotateY: -10 }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-64 h-40 bg-white rounded-xl shadow-xl p-4 z-0 opacity-50 blur-[2px]"
        >
            <div className="w-1/2 h-4 bg-gray-200 rounded mb-2" />
            <div className="w-3/4 h-4 bg-gray-100 rounded" />
        </motion.div>

        <motion.div
            animate={{ y: [30, -30, 30], rotateX: 5, rotateY: 10 }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 right-20 w-64 h-80 bg-white rounded-xl shadow-xl p-4 z-0 opacity-50 blur-[1px]"
        >
            <div className="w-12 h-12 bg-blue-100 rounded-full mb-4" />
            <div className="w-full h-4 bg-gray-200 rounded mb-2" />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
            <h1 className="text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-500">
                Interface<br />Invisible.
            </h1>
            <button onClick={onExplore} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors">
                Start Experience
            </button>
        </div>
    </section>
);

// 6. THE APP STORE (Download)
const V6: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" className="w-24 h-24 rounded-[22px] mx-auto mb-6 shadow-2xl border border-white/10" />
            <h1 className="text-3xl font-bold mb-2">Fragmnt</h1>
            <p className="text-gray-400 mb-6">Human Ambient Music</p>

            <div className="flex justify-center gap-8 mb-8 text-sm">
                <div className="text-center">
                    <div className="font-bold text-xl text-gray-200">4.9</div>
                    <div className="text-gray-500">★★★★★</div>
                </div>
                <div className="text-center border-l border-gray-800 pl-8">
                    <div className="font-bold text-xl text-gray-200">#1</div>
                    <div className="text-gray-500">Music</div>
                </div>
                <div className="text-center border-l border-gray-800 pl-8">
                    <div className="font-bold text-xl text-gray-200">4+</div>
                    <div className="text-gray-500">Age</div>
                </div>
            </div>

            <button onClick={onExplore} className="bg-[#007AFF] px-8 py-2 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-[#006ee6] transition-colors">
                GET
            </button>
            <p className="text-[10px] text-gray-600 mt-4">Offers In-App Purchases</p>
        </div>
    </section>
);

// 7. THE DARK MODE (Sleek)
const V7: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.4)_0%,transparent_70%)]" />

        <div className="relative z-10 w-[90%] max-w-xl bg-[#111] rounded-3xl border border-[#222] p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-12">
                <h2 className="font-bold text-lg">Now Playing</h2>
                <MoreHorizontal size={20} className="text-gray-500" />
            </div>

            <div className="w-full aspect-square bg-[#1A1A1A] rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden group cursor-pointer" onClick={onExplore}>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-blue-900/40 opacity-50" />
                <Play fill="white" size={48} className="relative z-10 group-hover:scale-110 transition-transform" />
            </div>

            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-1">Midnight Tokyo</h1>
                <p className="text-sm text-gray-500">Ambient City Works</p>
            </div>

            <div className="w-full bg-[#222] h-1 rounded-full overflow-hidden mb-2">
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 60, ease: "linear" }}
                    className="h-full bg-white"
                />
            </div>
            <div className="flex justify-between text-[10px] text-gray-600 font-mono">
                <span>0:00</span>
                <span>3:45</span>
            </div>
        </div>
    </section>
);

// 8. THE ONBOARDING (Steps)
const V8: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-blue-50/50">
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold mb-4">1</div>
            <h3 className="font-bold text-lg">Select Mood</h3>
            <p className="text-sm text-gray-500 text-center mt-2">Choose how you want to feel.</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-purple-50/50">
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold mb-4">2</div>
            <h3 className="font-bold text-lg">AI Composes</h3>
            <p className="text-sm text-gray-500 text-center mt-2">Wait... no AI. It's human.</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-green-50/50 group cursor-pointer hover:bg-green-100 transition-colors" onClick={onExplore}>
            <div className="w-12 h-12 bg-black text-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">3</div>
            <h3 className="font-bold text-lg">Listen</h3>
            <p className="text-sm text-gray-500 text-center mt-2">Click to start.</p>
        </div>
    </section>
);

// 9. THE TESTIMONIAL (Social Proof)
const V9: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#FDFDFD] flex items-center justify-center p-8">
        <div className="max-w-3xl text-center">
            <div className="flex justify-center mb-6 text-yellow-500">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
            </div>

            <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                "The only music app that actually helps me focus. It feels alive, not mechanical."
            </h1>

            <div className="flex items-center justify-center gap-4 mb-12">
                <div className="w-12 h-12 bg-gray-200 rounded-full" /> {/* Avatar placeholder */}
                <div className="text-left">
                    <div className="font-bold text-sm">Sarah J.</div>
                    <div className="text-xs text-gray-500">Creative Director</div>
                </div>
            </div>

            <button onClick={onExplore} className="bg-black text-white px-8 py-3 rounded hover:opacity-80 transition-opacity">
                Try it yourself
            </button>
        </div>
    </section>
);

// 10. THE SPLIT UI (Marketing + Demo)
const V10: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-12 md:pl-24 flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Audio for the<br />Human Mind.</h1>
            <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Focus deeper</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Sleep better</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Relax instantly</li>
            </ul>
            <button onClick={onExplore} className="bg-blue-600 text-white w-fit px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Start Free Trial
            </button>
        </div>
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-12">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 aspect-[9/16] relative border border-gray-100">
                {/* Simulated UI */}
                <div className="w-full h-40 bg-gray-200 rounded-lg mb-6" />
                <div className="space-y-3">
                    <div className="w-3/4 h-4 bg-gray-100 rounded" />
                    <div className="w-1/2 h-4 bg-gray-100 rounded" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-full h-12 bg-black rounded-lg flex items-center justify-center text-white cursor-pointer" onClick={onExplore}>Play</div>
                </div>
            </div>
        </div>
    </section>
);

// 11. THE NOTIFICATION (Push)
const V11: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-[350px] bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-4 cursor-pointer hover:scale-105 transition-transform"
            onClick={onExplore}
        >
            <div className="flex gap-3">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bell className="text-white" size={20} />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-sm">Fragmnt</h3>
                        <span className="text-[10px] text-gray-500">now</span>
                    </div>
                    <p className="text-sm font-semibold mt-1">Time to disconnect.</p>
                    <p className="text-sm text-gray-500">A new ambiance "Rainy Studio" is ready for you.</p>
                </div>
            </div>
        </motion.div>
    </section>
);

// 12. THE WAVEFORM (Visualizer)
const V12: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#111] text-green-500 flex flex-col items-center justify-center">
        <div className="flex items-center gap-1 h-24 md:h-48">
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 md:w-3 bg-green-500 rounded-full"
                    animate={{ height: ["10%", "100%", "30%", "80%", "10%"] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.05,
                        repeatType: "mirror"
                    }}
                />
            ))}
        </div>
        <h1 className="mt-8 text-white font-mono uppercase tracking-widest text-sm">Live Audio Synthesis</h1>
        <button onClick={onExplore} className="mt-8 border border-green-500 text-green-500 px-6 py-2 rounded uppercase text-xs hover:bg-green-500 hover:text-black transition-colors">
            Tap to listen
        </button>
    </section>
);

// 13. THE MINIMAL PLAYER (Clean)
const V13: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#F2F2F2] flex items-center justify-center">
        <div className="w-[300px] bg-white p-6 shadow-xl rounded-sm text-center">
            <div className="w-full aspect-square bg-gray-100 mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors" onClick={onExplore}>
                    <Play size={24} className="ml-1" />
                </div>
            </div>
            <h2 className="font-bold text-lg">Untitled Track 04</h2>
            <p className="text-xs uppercase text-gray-400 mt-1 mb-6">Human Composition</p>
            <div className="w-full bg-gray-200 h-[2px]">
                <div className="w-1/3 h-full bg-black" />
            </div>
        </div>
    </section>
);

// 14. THE PALETTE (Customization)
const V14: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Color your sound.</h1>
        <div className="flex gap-4">
            {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'].map((color, i) => (
                <div key={i} className={`w-16 h-16 rounded-full ${color} cursor-pointer hover:scale-110 transition-transform shadow-lg`} onClick={onExplore} />
            ))}
        </div>
        <p className="mt-8 text-gray-400 text-sm">Select a tone to start.</p>
    </section>
);

// 15. THE ECOSYSTEM (Multiple Devices)
const V15: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-[#E5E5E5] flex items-center justify-center overflow-hidden">
        {/* Abstract representations of devices */}
        <div className="relative w-[800px] h-[500px] flex items-end justify-center">
            {/* Laptop */}
            <div className="w-[500px] h-[350px] bg-white shadow-2xl rounded-t-xl z-20 flex items-center justify-center border-t-8 border-x-8 border-gray-800">
                <h1 className="text-2xl font-bold">In Sync.</h1>
            </div>
            {/* Phone */}
            <div className="absolute bottom-0 right-20 w-[100px] h-[200px] bg-black rounded-[20px] z-30 border-[4px] border-gray-700 shadow-2xl" />
            {/* Tablet */}
            <div className="absolute bottom-0 left-20 w-[250px] h-[300px] bg-white rounded-xl z-10 border-[6px] border-gray-300 shadow-xl" />
        </div>

        <div className="absolute bottom-12 text-center">
            <p className="font-bold mb-4">Everywhere you go.</p>
            <button onClick={onExplore} className="text-blue-600 font-bold underline">Get the suite</button>
        </div>
    </section>
);

// 16. THE HEADLINE (SaaS Big Type)
const V16: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-[12vw] font-bold leading-none tracking-tighter text-black mb-4">
            FOCUS.
        </h1>
        <p className="text-2xl md:text-3xl text-gray-500 max-w-2xl mb-12">
            The productivity app for your ears.
        </p>
        <button onClick={onExplore} className="bg-black text-white text-xl px-12 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            Start Focusing
        </button>
    </section>
);

// 17. THE VIDEO BG (Lifestyle placeholder)
const V17: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-900">
        <img src="https://images.unsplash.com/photo-1493225255756-d58d9860005f?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <div onClick={onExplore} className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mb-8 cursor-pointer hover:bg-white hover:text-black transition-colors">
                <Play fill="currentColor" />
            </div>
            <h1 className="text-4xl font-bold mb-2">See how it works</h1>
            <p className="opacity-80">Watch the film (2:03)</p>
        </div>
    </section>
);

// 18. THE QR (Download)
const V18: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-black text-white flex gap-12 items-center justify-center p-8">
        <div className="hidden md:block">
            <div className="bg-white p-4 rounded-xl">
                <div className="w-48 h-48 bg-black pattern-grid-lg" /> {/* Placeholder for actual QR */}
            </div>
            <p className="text-center mt-4 text-sm font-mono">Scan to install</p>
        </div>

        <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">Mobile First.</h1>
            <p className="text-gray-400 mb-8">Fragmnt is designed for the device in your pocket. Scan the code to take your ambiance with you.</p>
            <button onClick={onExplore} className="md:hidden bg-white text-black px-8 py-3 rounded font-bold w-full">
                Download App
            </button>
            <button onClick={onExplore} className="hidden md:inline-block text-gray-500 hover:text-white underline">
                Continue on Web
            </button>
        </div>
    </section>
);

// 19. THE WIDGET (iOS Style)
const V19: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
        <div className="scale-150 transform hover:scale-[1.6] transition-transform cursor-pointer" onClick={onExplore}>
            <div className="w-40 h-40 bg-black rounded-[22px] p-4 flex flex-col justify-between shadow-2xl text-white">
                <div className="flex justify-between items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <Play size={14} fill="white" />
                    </div>
                    <span className="text-[10px] text-gray-400 uppercase">Fragmnt</span>
                </div>

                <div>
                    <h3 className="font-bold text-sm">Deep Space</h3>
                    <p className="text-[10px] text-gray-400">By Human A.I.</p>
                </div>
            </div>
        </div>

        <p className="absolute bottom-12 text-gray-400 text-sm">Add to Home Screen</p>
    </section>
);

// 20. THE LAUNCH (Countdown)
const V20: React.FC<HeroProps> = ({ onExplore }) => (
    <section className="relative w-full h-screen bg-white text-black flex flex-col items-center justify-center">
        <div className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-blue-600">
            Coming Soon
        </div>

        <div className="flex gap-4 md:gap-12 text-5xl md:text-8xl font-black font-mono">
            <div>04<span className="text-sm font-sans font-normal block text-center mt-2 text-gray-400">DAYS</span></div>
            <div>:</div>
            <div>12<span className="text-sm font-sans font-normal block text-center mt-2 text-gray-400">HOURS</span></div>
            <div>:</div>
            <div>43<span className="text-sm font-sans font-normal block text-center mt-2 text-gray-400">MINS</span></div>
        </div>

        <div className="mt-16 text-center">
            <p className="mb-4">Get notified when we launch.</p>
            <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-gray-100 px-4 py-2 rounded outline-none w-64" />
                <button onClick={onExplore} className="bg-black text-white px-6 py-2 rounded font-bold">Notify Me</button>
            </div>
        </div>
    </section>
);


// ============================================================================
// MAIN COMPONENT & SWITCHER
// ============================================================================

const VARIATIONS = [
    V1, V2, V3, V4, V5, V6, V7, V8, V9, V10,
    V11, V12, V13, V14, V15, V16, V17, V18, V19, V20
];

interface HeroAlternativeKProps {
    onComplete?: () => void;
}

const HeroAlternativeK: React.FC<HeroAlternativeKProps> = ({ onComplete }) => {
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
                PRODUCT SHOWCASE :: STYLE {currentIndex + 1}
            </div>
        </div>
    );
};

export default HeroAlternativeK;
