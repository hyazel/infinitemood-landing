import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue, AnimatePresence, useMotionValueEvent, useInView } from 'framer-motion';
import animatedVideo from '../assets/fragmnt-animated.mp4';
import { FRAGMENTS } from '../data/fragments';
import AudioManager from '../utils/AudioManager';

// Import images
import musicAndVisual from '../assets/musicandvisual.png';

interface AmbianceCard {
    id: string;
    title: string;
    image: string;
    color: string;
    event?: string;
    subtitle?: string;
}

// Helper for subtitle word animation
const SubtitleWordReveal: React.FC<{
    word: string;
    index: number;
    totalWords: number;
    localProgress: MotionValue<number>;
    startOffset: number;
}> = ({ word, index, totalWords, localProgress, startOffset }) => {
    const duration = 0.15;
    const wordStart = startOffset + (index / totalWords) * duration;
    const wordEnd = wordStart + 0.02;

    const opacity = useTransform(localProgress, [wordStart, wordEnd], [0.1, 1]);
    const blur = useTransform(localProgress, [wordStart, wordEnd], ["blur(4px)", "blur(0px)"]);
    const y = useTransform(localProgress, [wordStart, wordEnd], [5, 0]);

    return (
        <motion.span style={{ opacity, filter: blur, y }} className="inline-block mr-1">
            {word}
        </motion.span>
    );
};

// ============================================
// VIEW 1: CAPSULES
// ============================================
const CapsulesView: React.FC<{
    scrollYProgress: MotionValue<number>;
    ambiances: AmbianceCard[];
    cardTransforms: MotionValue<string>[];
    onPlayClick: (card: AmbianceCard) => void;
}> = ({ scrollYProgress, ambiances, cardTransforms, onPlayClick }) => {

    const titleOpacity = useTransform(scrollYProgress, [0.02, 0.08, 0.12, 0.18], [0, 1, 1, 0]);
    const startCapsuleFadeOut = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
        >
            <motion.div
                style={{ opacity: titleOpacity }}
                className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none"
            >
                <h2 className="text-6xl md:text-9xl font-display font-bold text-white text-center mb-10 drop-shadow-2xl tracking-tighter">
                    Choisis ton <span className="text-primitive-saffron-core">Fragmnt</span>
                </h2>
                <p className="text-2xl md:text-4xl text-white font-medium text-center max-w-4xl px-4 drop-shadow-xl mb-6 tracking-wide">
                    7 packs d’ambiances, composés avec soin.
                </p>
                <p className="text-lg md:text-xl text-white/70 font-light text-center max-w-xl px-4 drop-shadow-md leading-relaxed">
                    Chaque fragmnt contient de la musique originale pensée pour être modulée et recombinée.
                </p>
            </motion.div>

            <motion.div
                style={{ opacity: startCapsuleFadeOut }}
                className="absolute inset-0 flex items-center justify-center z-10"
            >
                <div className="relative w-[95vw] h-[90vh] rounded-[4rem] overflow-hidden shadow-2xl bg-black">
                    <img src={musicAndVisual} alt="Result" className="w-full h-full object-cover opacity-60" />
                </div>
            </motion.div>

            {ambiances.map((item, index) => (
                <motion.div
                    key={item.id}
                    style={{ x: cardTransforms[index], zIndex: 20 + index }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-auto"
                >
                    <div className="relative w-[95vw] h-[90vh] rounded-[4rem] overflow-hidden shadow-2xl bg-black">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full p-12 md:p-20 flex flex-col items-start">
                            <span className={`text-base md:text-lg font-sans uppercase tracking-[0.2em] mb-4 ${item.color}`}>
                                Ambiance {index + 1}
                            </span>
                            <h3 className="text-5xl md:text-8xl font-display font-bold text-white leading-none mb-6">
                                {item.title}
                            </h3>
                            <button
                                onClick={() => onPlayClick(item)}
                                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white cursor-pointer"
                            >
                                <svg width="20" height="24" viewBox="0 0 14 16" fill="currentColor" className="ml-1">
                                    <path d="M12.5 6.70096C13.1667 7.08586 13.1667 8.04811 12.5 8.43301L2.75 14.0622C2.08333 14.4471 1.25 13.966 1.25 13.1961L1.25 1.93782C1.25 1.16795 2.08333 0.686824 2.75 1.07172L12.5 6.70096Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

// ============================================
// VIEW 2: MOCKUP - scroll-driven from click position
// ============================================
const MockupView: React.FC<{
    localProgress: MotionValue<number>;
    selectedCard: AmbianceCard;
    windowSize: { width: number; height: number };
}> = ({ localProgress, selectedCard, windowSize }) => {

    const xShift = windowSize.width * 0.25;
    const finalWidth = windowSize.width || 1000;
    const finalHeight = windowSize.height || 1000;

    // --- TIMELINE CONFIGURATION ---
    // 0.00 -> 0.60: Text Sequence (Side Text)
    // 0.60 -> 0.80: Expansion to Full Screen
    // 0.80 -> 1.00: Full Screen "Lock" & Final Title Sequence

    // Mockup Transforms
    // Start expansion at 0.60, finish at 0.80.
    const mockupWidth = useTransform(localProgress, [0, 0.1, 0.60, 0.80], [300, 300, 300, finalWidth + 10]);
    const mockupHeight = useTransform(localProgress, [0, 0.1, 0.60, 0.80], [660, 660, 660, finalHeight + 200]);
    const mockupX = useTransform(localProgress, [0, 0.05, 0.60, 0.80], [0, xShift, xShift, 0]);
    const mockupY = useTransform(localProgress, [0.80, 0.90], [0, 30]); // Slight settle down after expansion

    // Aesthetic morphs
    const mockupBorderRadius = useTransform(localProgress, [0, 0.05, 0.60, 0.80], ["48px", "48px", "48px", "0px"]);
    const mockupBezelWidth = useTransform(localProgress, [0, 0.05, 0.60, 0.80], ["12px", "12px", "12px", "0px"]);
    const mockupShadow = useTransform(localProgress, [0, 0.05, 0.55, 0.70],
        ["0px 20px 50px rgba(234,179,8,0.3)", "0px 20px 50px rgba(234,179,8,0.3)", "0px 20px 50px rgba(234,179,8,0.3)", "0px 0px 0px rgba(0,0,0,0)"]);
    const notchOpacity = useTransform(localProgress, [0, 0.05, 0.60, 0.80], [1, 1, 1, 0]);

    // Video fades in relative to expansion (0.65 -> 0.80) to be fully visible when fullscreen
    const videoOpacity = useTransform(localProgress, [0.65, 0.80], [0, 1]);

    // Audio hint fades out as we go full screen
    const audioHintOpacity = useTransform(localProgress, [0, 0.1, 0.60], [1, 1, 0]);

    // Side Text Sequence (Compressed to fit 0 -> 0.60)
    // Text 1
    const text1Opacity = useTransform(localProgress, [0.0, 0.05, 0.15, 0.20], [0, 1, 1, 0]);
    const text1Blur = useTransform(localProgress, [0.15, 0.20], ["blur(0px)", "blur(10px)"]);
    const text1X = useTransform(localProgress, [0.0, 0.05], ["-10%", "0%"]);

    // Text 2
    const text2Opacity = useTransform(localProgress, [0.20, 0.25, 0.35, 0.40], [0, 1, 1, 0]);
    const text2Blur = useTransform(localProgress, [0.20, 0.25, 0.35, 0.40], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
    const text2Y = useTransform(localProgress, [0.20, 0.25], ["20px", "0px"]);

    // Text 3
    const text3Opacity = useTransform(localProgress, [0.40, 0.45, 0.55, 0.60], [0, 1, 1, 0]);
    const text3Blur = useTransform(localProgress, [0.40, 0.45, 0.55, 0.60], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
    const text3Y = useTransform(localProgress, [0.40, 0.45], ["20px", "0px"]);

    // --- FINAL TITLE SEQUENCE (0.82 -> 1.0) ---
    // Title: "Vous restez dans votre experience"
    // Appear: 0.82 -> 0.86
    // Lock/Read: 0.86 -> 0.92
    // Disappear: 0.92 -> 0.96
    // Hold video: 0.96 -> 1.0
    const finalTitleOpacity = useTransform(localProgress, [0.82, 0.86, 0.92, 0.96], [0, 1, 1, 0]);
    const finalTitleScale = useTransform(localProgress, [0.82, 0.96], [0.95, 1]);
    const finalOverlayOpacity = useTransform(localProgress, [0.82, 0.86, 0.92, 0.96], [0, 1, 1, 0]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
        >
            {/* Left Text Area */}
            <div className="absolute left-0 top-0 h-full w-[55%] flex flex-col justify-center items-end z-20 pointer-events-none pl-8 pr-4 md:pr-8">
                <motion.div
                    style={{ opacity: text1Opacity, filter: text1Blur, x: text1X }}
                    className="absolute text-left max-w-lg"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        La <span className="text-primitive-saffron-core">musique</span> se lance<br />et évolue.
                    </h2>
                </motion.div>

                <motion.div
                    style={{ opacity: text2Opacity, filter: text2Blur, y: text2Y }}
                    className="absolute text-left max-w-lg"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        Aucune <span className="text-primitive-saffron-core">coupure</span>.
                    </h2>
                </motion.div>

                <motion.div
                    style={{ opacity: text3Opacity, filter: text3Blur, y: text3Y }}
                    className="absolute text-left max-w-lg"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        Aucune <span className="text-primitive-saffron-core">transition</span><br />brutale.
                    </h2>
                </motion.div>
            </div>

            {/* iPhone Mockup */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    style={{ x: mockupX, y: mockupY, zIndex: 35 }}
                    className="flex items-center justify-center"
                >
                    <motion.div
                        style={{
                            width: mockupWidth,
                            height: mockupHeight,
                            borderRadius: mockupBorderRadius,
                            borderWidth: mockupBezelWidth,
                            borderColor: '#111',
                            boxShadow: mockupShadow,
                        }}
                        className="relative overflow-hidden bg-black border-solid"
                    >
                        <motion.div
                            style={{ opacity: notchOpacity }}
                            className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-center gap-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                            <div className="w-3/4 h-3/4 flex items-center justify-end pr-1">
                                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                            </div>
                        </motion.div>

                        <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-full object-cover" />

                        <motion.video
                            src={animatedVideo}
                            autoPlay loop muted playsInline
                            style={{ opacity: videoOpacity }}
                            className="absolute inset-0 w-full h-full object-cover z-10"
                        />

                        {/* Cinematic Overlay for Title */}
                        <motion.div
                            style={{
                                opacity: finalOverlayOpacity,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 40%)'
                            }}
                            className="absolute inset-0 z-20 pointer-events-none"
                        />

                        {/* Final Title */}
                        <motion.div
                            style={{ opacity: finalTitleOpacity, scale: finalTitleScale }}
                            className="absolute inset-0 flex items-end justify-center z-50 pointer-events-none pb-32"
                        >
                            <h2 className="text-4xl md:text-7xl font-display font-bold text-white text-center px-4 leading-tight drop-shadow-2xl">
                                Vous restez dans<br />votre <span className="text-primitive-saffron-core">expérience</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            style={{ opacity: audioHintOpacity }}
                            className="absolute bottom-8 left-0 right-0 flex justify-center z-40"
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
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

// ============================================
// MAIN COMPONENT
// ============================================
const WhatIsItB: React.FC<{
    onSelectionChange?: (fragment: any | null) => void;
}> = ({ onSelectionChange }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [selectedCard, setSelectedCard] = useState<AmbianceCard | null>(null);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const clickScrollPositionRef = useRef<number>(0);

    // Fragments State (for reordering support)
    // Mapping Fragment to AmbianceCard interface if needed, or just using FRAGMENTS.
    // The Fragment interface (id, title, subtitle, image, event, color) is compatible with AmbianceCard (id, title, image, color) 
    // but ID is string vs number. Let's update AmbianceCard to use string ID or cast.
    // AmbianceCard defined locally: id: number. Fragment: id: string.
    // I will refactor AmbianceCard interface to match Fragment or just use Fragment.
    const [fragments, setFragments] = useState(FRAGMENTS);
    const currentAudioEvent = useRef<string | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Notify parent on selection change
    useEffect(() => {
        if (onSelectionChange) {
            onSelectionChange(selectedCard);
        }
    }, [selectedCard, onSelectionChange]);

    // Create local progress: 0 at click position, 1 at end
    const localProgress = useTransform(scrollYProgress, (v) => {
        if (!selectedCard) return 0;
        const clickPos = clickScrollPositionRef.current;
        const remaining = 1 - clickPos;
        if (remaining <= 0) return 1;
        return Math.max(0, Math.min(1, (v - clickPos) / remaining));
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Return to capsules when scrolling back before click position
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (selectedCard !== null && latest < clickScrollPositionRef.current - 0.05) {
            setSelectedCard(null);
            // Optionally stop audio here if we want silence when going back?
            // User didn't specify, but usually "back" implies "stop focus".
            // However, "play" was explicit. I'll leave it playing for seamlessness unless requested otherwise.
        }
    });

    // Card X transforms - Dynamic based on count? 
    // Hardcoded for 7 slots as per user request (7 fragments).
    const startOffset = 0.15;
    const dur = 0.10;

    // We have 7 fragments now.
    const cardX0 = useTransform(scrollYProgress, [startOffset, startOffset + dur], ["100vw", "0vw"]);
    const cardX1 = useTransform(scrollYProgress, [startOffset + dur, startOffset + 2 * dur], ["100vw", "0vw"]);
    const cardX2 = useTransform(scrollYProgress, [startOffset + 2 * dur, startOffset + 3 * dur], ["100vw", "0vw"]);
    const cardX3 = useTransform(scrollYProgress, [startOffset + 3 * dur, startOffset + 4 * dur], ["100vw", "0vw"]);
    const cardX4 = useTransform(scrollYProgress, [startOffset + 4 * dur, startOffset + 5 * dur], ["100vw", "0vw"]);
    const cardX5 = useTransform(scrollYProgress, [startOffset + 5 * dur, startOffset + 6 * dur], ["100vw", "0vw"]);
    const cardX6 = useTransform(scrollYProgress, [startOffset + 6 * dur, startOffset + 7 * dur], ["100vw", "0vw"]);

    // If we have more or less, this logic needs to be dynamic, but for 7 fixed slots this is fine.
    const cardTransforms = [cardX0, cardX1, cardX2, cardX3, cardX4, cardX5, cardX6];

    const isInView = useInView(targetRef, { amount: 0.1 });

    // Manage Snapshot: Active when in view AND no card selected (Selection Mode)
    useEffect(() => {
        const audioMgr = AudioManager.getInstance();
        if (isInView && !selectedCard) {
            audioMgr.playMusicMenuSelection();
        } else {
            audioMgr.stopMusicMenuSelection();
        }

        // Cleanup on unmount
        return () => {
            audioMgr.stopMusicMenuSelection();
        }
    }, [isInView, selectedCard]);

    const handlePlayClick = (card: any) => { // Type as any for now to ease transition or Fragment
        const audioMgr = AudioManager.getInstance();

        // Stop Hero Music (NeoClassic) explicitly
        audioMgr.stopHero();

        // Audio Logic for Fragment
        if (currentAudioEvent.current) {
            audioMgr.stop(currentAudioEvent.current);
        }

        if (card.event) {
            audioMgr.play(card.event);
            currentAudioEvent.current = card.event;
        }

        // Store current scroll position as the starting point for mockup animations
        clickScrollPositionRef.current = scrollYProgress.get();
        setSelectedCard(card);
    };

    return (
        <section ref={targetRef} className="relative h-[800vh] bg-background-primary overflow-clip">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">

                <AnimatePresence mode="wait">
                    {!selectedCard ? (
                        <CapsulesView
                            key="capsules"
                            scrollYProgress={scrollYProgress}
                            ambiances={fragments} // Passing fragments directly
                            cardTransforms={cardTransforms}
                            onPlayClick={handlePlayClick}
                        />
                    ) : (
                        <MockupView
                            key="mockup"
                            localProgress={localProgress}
                            selectedCard={selectedCard}
                            windowSize={windowSize}
                        />
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default WhatIsItB;
