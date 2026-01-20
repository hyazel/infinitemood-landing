

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import fragmntAnimated from '../assets/fragmnt-animated.mp4';
import dioramaNature from '../assets/diorama-nature.jpg';
import dioramaBooknnok from '../assets/diorama-booknnok.jpg';

// --- INTERFACES ---
interface InfluencerPoint {
    id: number;
    x: number; // Percent 0-100
    y: number; // Percent 0-100
    label: string;
    description: string;
    image: string;
}

// --- DATA ---
const HOTSPOTS: InfluencerPoint[] = [
    {
        id: 1,
        x: 75,
        y: 45,
        label: "Lumières Volumétriques",
        description: "Rendu atmosphérique temps réel",
        image: dioramaNature
    },
    {
        id: 2,
        x: 35,
        y: 60,
        label: "Book Nook",
        description: "Création de mondes miniatures",
        image: dioramaBooknnok
    }
];

// --- SUB-COMPONENTS ---

const MiniPlayer: React.FC = () => {
    return (
        <div className="flex items-center gap-4 bg-white/50 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full shadow-lg">
            {/* Play Button Icon */}
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>

            {/* EQ Animation */}
            <div className="flex items-end gap-1 h-6">
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                        key={i}
                        className="w-1 bg-black rounded-full"
                        animate={{
                            height: ["40%", "100%", "30%", "80%", "40%"]
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.1,
                            repeatType: "mirror"
                        }}
                    />
                ))}
            </div>

            <div className="flex flex-col">
                <span className="text-[10px] font-display font-bold uppercase tracking-wider text-black/40">Now Playing</span>
                <span className="text-xs font-display font-medium text-black">Neo Classic</span>
            </div>
        </div>
    );
};

const InfluenceModal: React.FC<{ point: InfluencerPoint }> = ({ point }) => {
    return (
        <div
            className="absolute z-50 pointer-events-none"
            style={{
                left: `${point.x}%`,
                top: `${point.y}%`
            }}
        >
            <motion.div
                initial={{ opacity: 0, x: 20, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 20, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, y: 5, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-2xl w-48 flex flex-col gap-2"
            >
                <div className="w-full aspect-video rounded-lg overflow-hidden relative">
                    <img src={point.image} alt={point.label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div>
                    <h4 className="text-white text-xs font-medium font-display tracking-wide">{point.label}</h4>
                    <p className="text-white/60 text-[10px] leading-tight mt-0.5">{point.description}</p>
                </div>
            </motion.div>
        </div>
    );
};

const Hotspot: React.FC<{ point: InfluencerPoint; onHover: (p: InfluencerPoint | null) => void }> = ({ point, onHover }) => {
    return (
        <div
            className="absolute w-8 h-8 -ml-4 -mt-4 z-40 cursor-pointer group flex items-center justify-center"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            onMouseEnter={() => onHover(point)}
            onMouseLeave={() => onHover(null)}
        >
            {/* Pulse Ring */}
            <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border border-white/30"
            />

            {/* Core Dot (expands on hover) */}
            <motion.div
                className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
        </div>
    );
};

const InfluencesB: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const [activePoint, setActivePoint] = useState<InfluencerPoint | null>(null);

    // --- TIMELINE (0.00 - 1.00) ---
    // Total height: 550vh

    // STEP 1: "Des ambiances qui s'écoutent" (0.00 - 0.20)
    const text1Opacity = useTransform(scrollYProgress, [0.00, 0.08, 0.18, 0.22], [1, 1, 1, 0]);
    const text1Y = useTransform(scrollYProgress, [0.00, 0.22], ["20px", "-20px"]);

    // STEP 2: "Et se regardent" (0.25 - 0.45)
    // Background transition trigger around 0.25
    const text2Opacity = useTransform(scrollYProgress, [0.25, 0.30, 0.40, 0.45], [0, 1, 1, 0]);
    const text2Y = useTransform(scrollYProgress, [0.25, 0.45], ["20px", "-20px"]);

    // BACKGROUND COLOR CHANGE (0.20 - 0.90)
    const bgOpacity = useTransform(scrollYProgress, [0.20, 0.25, 0.90, 1.00], [0, 1, 1, 0]);

    // --- STEP 3 SPLIT NARRATIVE ---

    // BEAT 1: MUSIC (0.50 - 0.65)
    // Title: "Chaque Fragmnt associe une composition musicale"
    // Visual: MiniPlayer
    const musicBeatOpacity = useTransform(scrollYProgress, [0.50, 0.55, 0.65, 0.70], [0, 1, 1, 0]);
    const musicBeatY = useTransform(scrollYProgress, [0.50, 0.70], ["30px", "-30px"]);

    // BEAT 2: VISUAL (0.75 - 1.00)
    // Title: "à une scène 3D"
    // Visual: Full Screen Capsule

    // Title Animation
    const visualBeatOpacity = useTransform(scrollYProgress, [0.75, 0.80, 0.95, 1.00], [0, 1, 1, 0]);
    // Move slightly up as the capsule fills
    const visualBeatY = useTransform(scrollYProgress, [0.75, 1.00], ["20px", "-25vh"]);

    // Text Shadow: Standardize on 3 values (x, y, blur) + color
    const textColor = useTransform(scrollYProgress, [0.80, 0.87], ["#16131B", "#FFFFFF"]);
    const textShadow = useTransform(scrollYProgress, [0.80, 0.87], ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 6px rgba(0,0,0,0.5)"]);

    // CAPSULE ANIMATION
    // Rise from bottom (0.75 - 0.85) -> Locked 0.85-0.98
    const capsuleOpacity = useTransform(scrollYProgress, [0.75, 0.80, 0.98, 1.00], [0, 1, 1, 1]);
    const capsuleY = useTransform(scrollYProgress, [0.75, 0.85], ["100vh", "0vh"]);
    const capsuleWidth = useTransform(scrollYProgress, [0.75, 0.85], ["90vw", "100vw"]);
    const capsuleHeight = useTransform(scrollYProgress, [0.75, 0.85], ["60vh", "100vh"]);
    const capsuleRadius = useTransform(scrollYProgress, [0.75, 0.85], ["3rem", "0rem"]);

    // Capsule Shadow: Standardize on 4 values (x, y, blur, spread) + color to match end state
    const capsuleShadow = useTransform(scrollYProgress, [0.80, 0.85], ["0px 0px 0px 0px rgba(0,0,0,0)", "0px 25px 50px -12px rgba(0,0,0,0.5)"]);

    // HOTSPOT OPACITY
    const hotspotsOpacity = useTransform(scrollYProgress, [0.86, 0.89], [0, 1]);
    const hotspotsPointerEvents = useTransform(scrollYProgress, (v) => v > 0.87 ? "auto" : "none");

    // IMAGE PARALLAX
    const imageScale = useTransform(scrollYProgress, [0.75, 1.00], [1.3, 1.2]);
    const imageY = useTransform(scrollYProgress, [0.75, 1.00], ["-10%", "0%"]);

    return (
        <section ref={targetRef} className="relative h-[650vh] bg-background-inverted overflow-clip z-30">
            {/* STICKY CONTAINER */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* --- BACKGROUND INVERTED OVERLAY --- */}
                <motion.div
                    style={{ opacity: bgOpacity }}
                    className="absolute inset-0 bg-[#F4EFE6] z-0 pointer-events-none"
                />

                {/* --- STEP 1: TEXT --- */}
                <motion.div
                    style={{ opacity: text1Opacity, y: text1Y }}
                    className="absolute z-10 text-center px-4"
                >
                    <h2 className="text-4xl md:text-7xl font-display font-medium leading-[1.1] tracking-tighter text-text-inverted">
                        Des ambiances <br /> qui s'écoutent
                    </h2>
                </motion.div>

                {/* --- STEP 2: TEXT --- */}
                <motion.div
                    style={{ opacity: text2Opacity, y: text2Y }}
                    className="absolute z-10 text-center px-4"
                >
                    <h2 className="text-4xl md:text-7xl font-display italic font-light leading-[1.1] tracking-tighter text-text-inverted">
                        Et se regardent
                    </h2>
                </motion.div>

                {/* --- STEP 3 (BEAT 1): MUSIC --- */}
                <motion.div
                    style={{ opacity: musicBeatOpacity, y: musicBeatY }}
                    className="absolute z-10 text-center px-4 flex flex-col items-center gap-8"
                >
                    <h2 className="text-[28px] md:text-5xl font-display font-light leading-tight tracking-tight text-text-inverted max-w-2xl">
                        Chaque Fragmnt associe <br />
                        <span className="font-normal italic">une composition musicale</span>
                    </h2>

                    <MiniPlayer />
                </motion.div>

                {/* --- STEP 3 (BEAT 2): VISUAL --- */}
                {/* Text is z-20 to stay ON TOP of the full screen image (z-10) */}
                <motion.div
                    style={{
                        opacity: visualBeatOpacity,
                        y: visualBeatY
                    }}
                    className="absolute z-20 text-center px-4 w-full max-w-4xl flex flex-col items-center pointer-events-none"
                >
                    <motion.h2
                        style={{ color: textColor, textShadow: textShadow }}
                        className="text-[28px] md:text-6xl font-display font-light leading-tight tracking-tight text-text-inverted italic"
                    >
                        à une scène 3D animée
                    </motion.h2>
                </motion.div>

                {/* CAPSULE */}
                <motion.div
                    style={{
                        opacity: capsuleOpacity,
                        y: capsuleY,
                        width: capsuleWidth,
                        height: capsuleHeight,
                        borderRadius: capsuleRadius,
                        boxShadow: capsuleShadow
                    }}
                    className="absolute z-10 overflow-hidden bg-black shadow-2xl"
                >
                    <motion.div
                        style={{
                            scale: imageScale,
                            y: imageY
                        }}
                        className="w-full h-full relative"
                    >
                        <video
                            src={fragmntAnimated}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Glossy Overlay/Gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none z-10" />

                    {/* --- INTERACTIVE HOTSPOTS --- */}
                    <motion.div
                        style={{
                            opacity: hotspotsOpacity,
                            pointerEvents: hotspotsPointerEvents,
                            scale: imageScale,
                            y: imageY
                        }}
                        className="absolute inset-0 z-50"
                    >
                        <AnimatePresence>
                            {activePoint && (
                                <InfluenceModal point={activePoint} />
                            )}
                        </AnimatePresence>

                        {HOTSPOTS.map(point => (
                            <Hotspot
                                key={point.id}
                                point={point}
                                onHover={setActivePoint}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default InfluencesB;
