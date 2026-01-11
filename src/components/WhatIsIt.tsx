import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import animatedVideo from '../assets/fragmnt-animated.mp4';
import AudioManager from '../utils/AudioManager';
import desertImage from '../assets/fragmnt-desert.jpg';
import townImage from '../assets/fragmnt-town.png';
import europeImage from '../assets/fragmnt-europe.jpg';
import islandImage from '../assets/fragmnt-island.jpg';
import islandeImage from '../assets/fragmnt-islande.jpg';



// Helper for word animation
const WordBlur = ({ word, index, scrollYProgress }: { word: string, index: number, scrollYProgress: any }) => {
    // Reveal (0 -> 0.15)
    // Stable (0.15 -> 0.25)
    // Fade Out (0.25 -> 0.30)
    const start = index * 0.03;
    const end = start + 0.1;
    const blur = useTransform(scrollYProgress, [start, end], ["blur(10px)", "blur(0px)"]);
    const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
    const y = useTransform(scrollYProgress, [start, end], [10, 0]);

    // Global fade out as we move to State 2
    const globalOpacity = useTransform(scrollYProgress, [0.25, 0.3], [1, 0]);

    return (
        <motion.span
            style={{ filter: blur, opacity: useTransform(scrollYProgress, (v: number) => v > 0.2 ? globalOpacity.get() : opacity.get()), y }}
            className="inline-block"
        >
            {word}
        </motion.span>
    );
};


// Helper for subtitle word animation (Start at 0.55, word by word)
const SubtitleWordReveal = ({ word, index, totalWords, scrollYProgress }: { word: string, index: number, totalWords: number, scrollYProgress: any }) => {
    // Start revealing AFTER title is fully visible (Title ends fade-in at 0.58)
    const startOffset = 0.59;
    const duration = 0.07; // Total duration for the whole sentence to reveal

    // Stagger each word within the duration
    const wordStart = startOffset + (index / totalWords) * duration;
    // Each word takes a tiny bit to fade in
    const wordEnd = wordStart + 0.01;

    const opacity = useTransform(scrollYProgress, [wordStart, wordEnd], [0.1, 1]);
    const blur = useTransform(scrollYProgress, [wordStart, wordEnd], ["blur(4px)", "blur(0px)"]);
    const y = useTransform(scrollYProgress, [wordStart, wordEnd], [5, 0]);

    return (
        <motion.span
            style={{ opacity, filter: blur, y }}
            className="inline-block mr-1"
        >
            {word}
        </motion.span>
    );
};
const WhatIsIt: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const hasTriggeredMusic = useRef(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Audio Trigger: 
    // 1. "Choisis ton Fragmnt" (0.05) -> Play Music Menu Snapshot (Low Pass Filter) - Don't stop music yet.
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.05 && !hasTriggeredMusic.current) {
            // Note: Re-using hasTriggeredMusic slightly differently or need new ref? 
            // Let's check refs: hasStoppedHero, hasTriggeredMusic.
            // We need a ref for the snapshot trigger to avoid spamming.
        }
    });

    const hasTriggeredSnapshot = useRef(false);

    // Audio Trigger Logic
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // --- SNAPSHOT LOGIC (Zone: 0.05 to 0.3) ---
        // Active only while "Choisis ton Fragmnt" is visible
        const inSnapshotZone = latest > 0.05 && latest < 0.3;

        // Enter Zone: Activate
        if (inSnapshotZone && !hasTriggeredSnapshot.current) {
            AudioManager.getInstance().playMusicMenuSelection();
            hasTriggeredSnapshot.current = true;
        }
        // Exit Zone: Deactivate (Top or Bottom exit)
        else if (!inSnapshotZone && hasTriggeredSnapshot.current) {
            AudioManager.getInstance().stopMusicMenuSelection();
            hasTriggeredSnapshot.current = false;
        }

        // --- TRACK LOGIC ---
        // Start Lofi AND Stop Hero when "La musique se lance" appears (approx 0.55)
        if (latest > 0.55 && !hasTriggeredMusic.current) {
            AudioManager.getInstance().stopHero();
            AudioManager.getInstance().playLofi();
            hasTriggeredMusic.current = true;
        }
    });

    // Cleanup: Ensure snapshot is deactivated if component unmounts
    useEffect(() => {
        return () => {
            AudioManager.getInstance().stopMusicMenuSelection();
        };
    }, []);

    // --- TIMELINE: LOCKED STATES ---
    // 0.00 - 0.20: State 0 (Grid Arrives & Stabilizes).
    // 0.20 - 0.35: Transition -> State 1 (Focus).
    // 0.35 - 0.50: State 1 (Selection Locked).
    // 0.50 - 0.70: Transition -> State 2 (App Mode - Move Right).
    // 0.70 - 0.90: State 2 (App Mode Locked).
    // 0.90 - 1.00: End.

    // --- State 0 -> 1: Selection ---
    // Side cards disappear
    const sideCardsOpacity = useTransform(scrollYProgress, [0.20, 0.35], [1, 0]);
    const sideCardsBlur = useTransform(scrollYProgress, [0.20, 0.35], ["blur(0px)", "blur(10px)"]);
    const sideCardsScale = useTransform(scrollYProgress, [0.20, 0.35], [1, 0.8]);

    // Island Glows (State 1 Lock: 0.35 - 0.50)
    // Updated: Fade out shadow during expansion (0.85 - 0.95)
    const islandHighlight = useTransform(scrollYProgress,
        [0.20, 0.35, 0.50, 0.85, 0.95],
        ["0px 0px 0px rgba(0,0,0,0)", "0px 20px 50px rgba(234,179,8,0.3)", "0px 20px 50px rgba(234,179,8,0.3)", "0px 20px 50px rgba(234,179,8,0.3)", "0px 0px 0px rgba(0,0,0,0)"]
    );

    // --- TEXT SEQUENCE IN APP MODE (0.55 - 0.85) ---
    // Compressed slightly to allow room for State 4 (Expansion) at the end.

    // 1. "La musique se lance..." - Extended visibility for reading
    // Was: [0.55, 0.58, 0.65, 0.68] -> New: [0.55, 0.58, 0.70, 0.73]
    const text2Opacity = useTransform(scrollYProgress, [0.55, 0.58, 0.70, 0.73], [0, 1, 1, 0]);
    const text2Blur = useTransform(scrollYProgress, [0.70, 0.73], ["blur(0px)", "blur(10px)"]);
    const text2X = useTransform(scrollYProgress, [0.55, 0.58], ["-10%", "0%"]);

    // 2. "Aucune coupure" - Shifted later
    // Was: [0.68, 0.71, 0.76, 0.79] -> New: [0.73, 0.76, 0.81, 0.84]
    const text3aOpacity = useTransform(scrollYProgress, [0.73, 0.76, 0.81, 0.84], [0, 1, 1, 0]);
    const text3aBlur = useTransform(scrollYProgress, [0.73, 0.76, 0.81, 0.84], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
    const text3aY = useTransform(scrollYProgress, [0.73, 0.76], ["20px", "0px"]);

    // 3. "Aucune transition brutale" - Shifted later
    // Was: [0.79, 0.82, 0.85, 0.88] -> New: [0.84, 0.87, 0.91, 0.94]
    // Fades out at 0.94 to clear stage for expansion (which now starts ~0.93)
    const text3bOpacity = useTransform(scrollYProgress, [0.84, 0.87, 0.91, 0.94], [0, 1, 1, 0]);
    const text3bBlur = useTransform(scrollYProgress, [0.84, 0.87, 0.91, 0.94], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
    const text3bY = useTransform(scrollYProgress, [0.84, 0.87], ["20px", "0px"]);


    // State for dynamic full-screen expansion (px units everywhere avoids jumps)
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        // Set initial
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fallback for SSR/First render
    const finalWidth = windowSize.width || 1000;
    const finalHeight = windowSize.height || 1000;


    // --- MAIN ISLAND TRANSFORMS ---
    // GOAL: Start matching the CSS size (w-80 = 320px, h-96 = 384px).
    // Lock into Phone Mode (State 2): Slimmer 300px width.
    // Expand to Fullscreen (State 4): Dynamic Window Pixels.
    // ALL UNITS MUST BE NUMBERS (Pixels) FOR SMOOTH INTERPOLATION.

    // Width: 320 -> 300 -> Full Screen Width
    // Added +10 buffer to ensure no gaps at edges
    // Expansion delayed to 0.93 to match text shifts
    const islandWidth = useTransform(scrollYProgress,
        [0.35, 0.50, 0.70, 0.93, 0.98],
        [320, 300, 300, 300, finalWidth + 10]
    );

    // Height: 384 -> 660 -> Full Screen Height
    // Added generous buffer to allow vertical shifting without gaps
    const islandHeight = useTransform(scrollYProgress,
        [0.35, 0.50, 0.70, 0.93, 0.98],
        [384, 660, 660, 660, finalHeight + 200]
    );

    // X Position: Center(0) -> Right (25% of viewport) -> Center(0)
    // Using pixels derived from window width to ensure significant movement.
    const xShift = windowSize.width * 0.25; // 25vw equivalent in px

    const islandX = useTransform(scrollYProgress,
        [0.35, 0.50, 0.70, 0.93, 0.98],
        [0, xShift, xShift, xShift, 0]
    );

    // Y Position: Shift down slightly at the end to center better
    const islandY = useTransform(scrollYProgress,
        [0.93, 0.98],
        [0, 30] // Shift down by 30px
    );

    // Bezel: 12px -> 0px
    const bezelWidth = useTransform(scrollYProgress,
        [0.35, 0.50, 0.70, 0.93, 0.98],
        ["0px", "12px", "12px", "12px", "0px"]
    );

    // Corners: 48px -> 0px
    const borderRadius = useTransform(scrollYProgress,
        [0.35, 0.50, 0.70, 0.93, 0.98],
        ["32px", "48px", "48px", "48px", "0px"]
    );

    // Notch: Fade out
    const notchOpacity = useTransform(scrollYProgress,
        [0.45, 0.50, 0.70, 0.93, 0.98],
        [0, 1, 1, 1, 0]
    );

    // Final Title: "Vous restez dans votre experience"
    // Sequence: Appear (0.94-0.96) -> Lock/Read (0.96-0.98) -> Disappear for Pure Video (0.98-1.0)
    const text4Opacity = useTransform(scrollYProgress, [0.94, 0.96, 0.99, 1.0], [0, 1, 1, 0]);
    const text4Scale = useTransform(scrollYProgress, [0.94, 1.0], [0.95, 1]); // Subtle scaling

    // Video Opacity: Fade in during State 4 expansion (0.93 -> 0.98)
    // Replaces static image for immersion. Stays visible till end.
    const videoOpacity = useTransform(scrollYProgress, [0.93, 0.98], [0, 1]);

    // Overlay Opacity: Syncs with text (Appear -> Lock -> Disappear)
    // We want the shadow to vanish when text vanishes to leave the video pristine.
    const overlayOpacity = useTransform(scrollYProgress, [0.94, 0.96, 0.99, 1.0], [0, 1, 1, 0]);


    // Audio Hint Opacity (Only State 2 - App Mode)
    // Appear as phone morphs (0.50), stay visible (1).
    const audioHintOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.98], [0, 1, 1]);


    return (
        <section
            id="what-is-it"
            ref={containerRef}
            className="relative h-[600vh] bg-background-primary"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center z-10 pt-20 overflow-hidden">

                {/* --- TITLE LAYER (State 0) --- */}
                <div className="absolute top-12 md:top-16 w-full flex justify-center z-10">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-text-primary text-center flex gap-4">
                        {"Choisis ton Fragmnt".split(" ").map((word, i) => (
                            <WordBlur key={i} word={word} index={i} scrollYProgress={scrollYProgress} />
                        ))}
                    </h2>
                </div>


                {/* --- LEFT TEXT AREA (State 2 Sequence) --- */}
                {/* Fixed container for stable alignment */}
                <div className="absolute left-0 top-0 h-full w-[55%] flex flex-col justify-center items-end z-20 pointer-events-none pl-8 pr-4 md:pr-8">

                    {/* Text 1: La musique se lance */}
                    <motion.div
                        style={{ opacity: text2Opacity, filter: text2Blur, x: text2X }}
                        className="absolute text-left max-w-lg"
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            La <span className="text-primitive-saffron-core">musique</span> se lance<br />et évolue.
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed font-light">
                            {/* Scroll-driven Word Reveal */}
                            {"Chaque fragmnt contient de la musique originale pensée pour être modulée et recombinées dans l’application, afin de créer des variations infinies.".split(" ").map((word, i, arr) => (
                                <SubtitleWordReveal
                                    key={i}
                                    word={word}
                                    index={i}
                                    totalWords={arr.length}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}
                        </p>
                    </motion.div>

                    {/* Text 2: Aucune coupure */}
                    <motion.div
                        style={{ opacity: text3aOpacity, filter: text3aBlur, y: text3aY }}
                        className="absolute text-left max-w-lg"
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Aucune <span className="text-primitive-saffron-core">coupure</span>.
                        </h2>
                    </motion.div>

                    {/* Text 3: Aucune transition brutale */}
                    <motion.div
                        style={{ opacity: text3bOpacity, filter: text3bBlur, y: text3bY }}
                        className="absolute text-left max-w-lg"
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Aucune <span className="text-primitive-saffron-core">transition</span><br />brutale.
                        </h2>
                    </motion.div>

                </div>

                {/* --- CARDS LAYER --- */}
                {/* Fullscreen container to allow State 4 expansion */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
                    {/* Inner wrapper for side cards spacing - gap-4 is fine but we need to ensure center card can grow */}
                    {/* Actually, we can keep the flex structure but remove size constraints */}
                    <div className="flex items-center justify-center gap-4 w-full h-full">

                        {/* Card 1 (Left Outer) - Desert */}
                        <motion.div
                            style={{ opacity: sideCardsOpacity, filter: sideCardsBlur, scale: sideCardsScale }}
                            className="hidden xl:flex flex-col gap-4 items-start shrink-0"
                        >
                            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden glass-panel border border-white/10">
                                <img src={desertImage} alt="Desert" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-text-secondary font-medium tracking-wide text-lg">Acoustic Guitar</span>
                        </motion.div>

                        {/* Card 2 (Left Inner) - Europe */}
                        <motion.div
                            style={{ opacity: sideCardsOpacity, filter: sideCardsBlur, scale: sideCardsScale }}
                            className="flex flex-col gap-4 items-start shrink-0"
                        >
                            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden glass-panel border border-white/10">
                                <img src={europeImage} alt="Europe" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-text-secondary font-medium tracking-wide text-lg">Neo Classic</span>
                        </motion.div>

                        {/* Island (Center - Active) */}
                        <motion.div
                            style={{ x: islandX, y: islandY, zIndex: 30 }}
                            className="flex flex-col gap-4 items-start shrink-0 relative"
                        >
                            <motion.div
                                style={{
                                    width: islandWidth,
                                    height: islandHeight,
                                    // x: islandX, // Moved to wrapper
                                    boxShadow: islandHighlight,
                                    borderWidth: bezelWidth,
                                    borderRadius: borderRadius,
                                    borderColor: '#111', // Dark bezel
                                    // zIndex: 30 // Moved to wrapper
                                }}
                                className="relative w-64 h-80 md:w-80 md:h-96 rounded-[32px] overflow-hidden shrink-0 origin-center bg-black"
                            >
                                {/* Dynamic Island / Notch */}
                                <motion.div
                                    style={{ opacity: notchOpacity }}
                                    className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-center gap-2"
                                >
                                    {/* Tiny Camera dot/reflection */}
                                    <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                                    <div className="w-3/4 h-3/4 flex items-center justify-end pr-1">
                                        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                                    </div>
                                </motion.div>

                                <img src={islandImage} alt="Island" className="w-full h-full object-cover" />

                                {/* Animated Video (State 4) */}
                                <motion.video
                                    src={animatedVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ opacity: videoOpacity }}
                                    className="absolute inset-0 w-full h-full object-cover z-10"
                                />

                                {/* Cinematic Overlay for Text Contrast */}
                                <motion.div
                                    style={{
                                        opacity: overlayOpacity,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 40%)'
                                    }}
                                    className="absolute inset-0 z-20 pointer-events-none"
                                />

                                {/* State 2 Audio Hint (EQ) */}
                                <motion.div
                                    style={{ opacity: audioHintOpacity }}
                                    className="absolute bottom-8 left-0 right-0 flex justify-center"
                                >
                                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
                                        <div className="flex gap-1 h-3 items-end">
                                            <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-accent-primary rounded-full" />
                                            <motion.div animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }} className="w-1 bg-accent-primary rounded-full" />
                                            <motion.div animate={{ height: [4, 10, 4] }} transition={{ repeat: Infinity, duration: 0.9, delay: 0.2 }} className="w-1 bg-accent-primary rounded-full" />
                                        </div>
                                        <span className="text-xs uppercase tracking-widest text-white/90 font-bold">Audio Actif</span>
                                    </div>
                                </motion.div>

                                {/* State 4 Final Title */}
                                <motion.div
                                    style={{ opacity: text4Opacity, scale: text4Scale }}
                                    className="absolute inset-0 flex items-end justify-center z-50 pointer-events-none pb-32"
                                >
                                    <h2 className="text-4xl md:text-7xl font-display font-bold text-white text-center px-4 leading-tight drop-shadow-2xl">
                                        Vous restez dans<br />votre <span className="text-primitive-saffron-core">expérience</span>
                                    </h2>
                                </motion.div>

                            </motion.div>
                            <motion.span style={{ opacity: sideCardsOpacity }} className="text-text-secondary font-medium tracking-wide text-lg">Lofi</motion.span>
                        </motion.div>


                        {/* Town (Right Inner) */}
                        <motion.div
                            style={{ opacity: sideCardsOpacity, filter: sideCardsBlur, scale: sideCardsScale }}
                            className="flex flex-col gap-4 items-start shrink-0"
                        >
                            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden glass-   panel border border-white/10">
                                <img src={townImage} alt="Town" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-text-secondary font-medium tracking-wide text-lg">Chill Beats</span>
                        </motion.div>

                        {/* Island (Right Outer) */}
                        <motion.div
                            style={{ opacity: sideCardsOpacity, filter: sideCardsBlur, scale: sideCardsScale }}
                            className="hidden xl:flex flex-col gap-4 items-start shrink-0"
                        >
                            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden glass-panel border border-white/10">
                                <img src={islandeImage} alt="Islande" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-text-secondary font-medium tracking-wide text-lg">Ambient</span>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsIt;
