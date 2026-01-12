import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import animatedVideo from '../assets/fragmnt-animated.mp4';

// Import images
import desertImage from '../assets/fragmnt-desert.jpg';
import townImage from '../assets/fragmnt-town.png';
import europeImage from '../assets/fragmnt-europe.jpg';
import islandImage from '../assets/fragmnt-island.jpg';
import islandeImage from '../assets/fragmnt-islande.jpg';
import dioramaNature from '../assets/diorama-nature.jpg';
import dioramaArchitecture from '../assets/diorama-architecture.jpg';
import musicAndVisual from '../assets/musicandvisual.png';

// Helper for subtitle word animation
const SubtitleWordReveal = ({ word, index, totalWords, scrollYProgress, startOffset }: { word: string, index: number, totalWords: number, scrollYProgress: any, startOffset: number }) => {
    const duration = 0.07;
    const wordStart = startOffset + (index / totalWords) * duration;
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

const WhatIsItB: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [selectedCard, setSelectedCard] = useState<{ id: number; title: string; image: string } | null>(null);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const finalWidth = windowSize.width || 1000;
    const finalHeight = windowSize.height || 1000;

    // 7 Ambiances
    const ambiances = [
        { id: 1, title: "Lofi Study", image: islandImage, color: "text-amber-400" },
        { id: 2, title: "Neo Classic", image: europeImage, color: "text-blue-300" },
        { id: 3, title: "Chill Beats", image: townImage, color: "text-purple-400" },
        { id: 4, title: "Acoustic", image: desertImage, color: "text-orange-300" },
        { id: 5, title: "Ambient", image: islandeImage, color: "text-cyan-200" },
        { id: 6, title: "Nature", image: dioramaNature, color: "text-green-300" },
        { id: 7, title: "Architecture", image: dioramaArchitecture, color: "text-gray-300" },
    ];

    // --- TIMELINE ---
    // 0.00 - 0.05: Title "Choisis ton Fragmnt" fades in
    // 0.05 - 0.15: Title visible
    // 0.15 - 0.20: Cards start stacking in
    // 0.20 - 0.90: Ambiance cards stack (7 cards × 0.10 each)
    // --- AFTER PLAY CLICK (auto-scroll to 0.55) ---
    // 0.55 - 0.60: Transition to iPhone mockup (card shrinks, moves right)
    // 0.60 - 0.72: Text 1 "La musique se lance et évolue"
    // 0.72 - 0.82: Text 2 "Aucune coupure"
    // 0.82 - 0.92: Text 3 "Aucune transition brutale"
    // 0.92 - 1.00: Fullscreen expansion with video

    // --- TITLE --- (only on first capsule, fades when cards arrive)
    const titleOpacity = useTransform(scrollYProgress, [0.02, 0.08, 0.12, 0.18], [0, 1, 1, 0]);

    // --- CARD STACKING ---
    const useCardTransform = (index: number) => {
        const startOffset = 0.15;
        const durationPerCard = 0.10;
        const start = startOffset + (index * durationPerCard);
        const end = start + durationPerCard;

        const x = useTransform(scrollYProgress, [start, end], ["100vw", "0vw"]);
        // Fade out all cards when transitioning to iPhone mockup (after 0.55)
        const opacity = useTransform(scrollYProgress, [0.55, 0.60], [1, 0]);

        return { x, opacity };
    };

    // --- START CAPSULE (Base layer) ---
    const baseCapsuleOpacity = useTransform(scrollYProgress, [0.55, 0.60], [1, 0]);

    // --- IPHONE MOCKUP (Appears after 0.55) ---
    const mockupOpacity = useTransform(scrollYProgress, [0.55, 0.60], [0, 1]);

    // iPhone dimensions and position
    const xShift = windowSize.width * 0.25;
    const islandWidth = useTransform(scrollYProgress,
        [0.55, 0.60, 0.92, 0.98],
        [320, 300, 300, finalWidth + 10]
    );
    const islandHeight = useTransform(scrollYProgress,
        [0.55, 0.60, 0.92, 0.98],
        [384, 660, 660, finalHeight + 200]
    );
    const islandX = useTransform(scrollYProgress,
        [0.55, 0.60, 0.92, 0.98],
        [0, xShift, xShift, 0]
    );
    const islandY = useTransform(scrollYProgress, [0.92, 0.98], [0, 30]);
    const islandHighlight = useTransform(scrollYProgress,
        [0.55, 0.60, 0.90, 0.95],
        ["0px 0px 0px rgba(0,0,0,0)", "0px 20px 50px rgba(234,179,8,0.3)", "0px 20px 50px rgba(234,179,8,0.3)", "0px 0px 0px rgba(0,0,0,0)"]
    );
    const bezelWidth = useTransform(scrollYProgress, [0.55, 0.60, 0.92, 0.98], ["0px", "12px", "12px", "0px"]);
    const borderRadius = useTransform(scrollYProgress, [0.55, 0.60, 0.92, 0.98], ["32px", "48px", "48px", "0px"]);
    const notchOpacity = useTransform(scrollYProgress, [0.55, 0.60, 0.92, 0.98], [0, 1, 1, 0]);

    // --- TEXT SEQUENCE ---
    // Text 1: "La musique se lance..."
    const text1Opacity = useTransform(scrollYProgress, [0.60, 0.64, 0.70, 0.74], [0, 1, 1, 0]);
    const text1Blur = useTransform(scrollYProgress, [0.70, 0.74], ["blur(0px)", "blur(10px)"]);
    const text1X = useTransform(scrollYProgress, [0.60, 0.64], ["-10%", "0%"]);

    // Text 2: "Aucune coupure"
    const text2Opacity = useTransform(scrollYProgress, [0.72, 0.76, 0.80, 0.84], [0, 1, 1, 0]);
    const text2Blur = useTransform(scrollYProgress, [0.72, 0.76, 0.80, 0.84], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
    const text2Y = useTransform(scrollYProgress, [0.72, 0.76], ["20px", "0px"]);

    // Text 3: "Aucune transition brutale"
    const text3Opacity = useTransform(scrollYProgress, [0.82, 0.86, 0.90, 0.94], [0, 1, 1, 0]);
    const text3Blur = useTransform(scrollYProgress, [0.82, 0.86, 0.90, 0.94], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
    const text3Y = useTransform(scrollYProgress, [0.82, 0.86], ["20px", "0px"]);

    // Video & Final
    const videoOpacity = useTransform(scrollYProgress, [0.92, 0.98], [0, 1]);
    const text4Opacity = useTransform(scrollYProgress, [0.94, 0.96, 0.99, 1.0], [0, 1, 1, 0]);
    const text4Scale = useTransform(scrollYProgress, [0.94, 1.0], [0.95, 1]);
    const overlayOpacity = useTransform(scrollYProgress, [0.94, 0.96, 0.99, 1.0], [0, 1, 1, 0]);
    const audioHintOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.98], [0, 1, 1]);

    // --- PLAY CLICK HANDLER ---
    const handlePlayClick = (item: { id: number; title: string; image: string }) => {
        setSelectedCard(item);
        if (targetRef.current) {
            const containerHeight = targetRef.current.offsetHeight;
            const targetScroll = targetRef.current.offsetTop + (containerHeight * 0.55);
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }
    };

    return (
        <section ref={targetRef} className="relative h-[800vh] bg-background-primary overflow-clip">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">

                {/* --- TITLE LAYER --- */}
                <motion.div
                    style={{ opacity: titleOpacity }}
                    className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none"
                >
                    <h2 className="text-5xl md:text-8xl font-display font-bold text-white text-center mb-6 drop-shadow-2xl">
                        Choisis ton <span className="text-primitive-saffron-core">Fragmnt</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 font-light text-center max-w-2xl px-4 drop-shadow-md">
                        Parmi nos 7 ambiances composées avec soin.
                    </p>
                </motion.div>

                {/* --- START CAPSULE (Base Layer) --- */}
                <motion.div
                    style={{ opacity: baseCapsuleOpacity }}
                    className="absolute inset-0 flex items-center justify-center z-10"
                >
                    <div className="relative w-[95vw] h-[90vh] rounded-[4rem] overflow-hidden shadow-2xl bg-black">
                        <img
                            src={musicAndVisual}
                            alt="Result"
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                        {/* Player (Visual Only) */}
                        <div className="absolute bottom-12 md:bottom-24 left-1/2 -translate-x-1/2 w-auto min-w-[300px]">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full py-4 px-8 flex items-center gap-6 shadow-xl">
                                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center gap-[3px] overflow-hidden">
                                    <div className="w-[3px] h-[80%] bg-black rounded-full" />
                                    <div className="w-[3px] h-[40%] bg-black rounded-full" />
                                    <div className="w-[3px] h-[90%] bg-black rounded-full" />
                                    <div className="w-[3px] h-[30%] bg-black rounded-full" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-white font-display text-lg tracking-tight leading-tight">Chill beats</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* --- STACKED AMBIANCE CARDS --- */}
                {ambiances.map((item, index) => {
                    const { x, opacity } = useCardTransform(index);

                    return (
                        <motion.div
                            key={item.id}
                            style={{ x, opacity, zIndex: 20 + index }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-auto"
                        >
                            <div className="relative w-[95vw] h-[90vh] rounded-[4rem] overflow-hidden shadow-2xl bg-black">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                <div className="absolute bottom-0 left-0 w-full p-12 md:p-20 flex flex-col items-start">
                                    <span className={`text-base md:text-lg font-sans uppercase tracking-[0.2em] mb-4 ${item.color}`}>
                                        Ambiance {index + 1}
                                    </span>
                                    <h3 className="text-5xl md:text-8xl font-display font-bold text-white leading-none mb-6">
                                        {item.title}
                                    </h3>

                                    {/* Play Button */}
                                    <button
                                        onClick={() => handlePlayClick(item)}
                                        className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white cursor-pointer group"
                                    >
                                        <svg width="20" height="24" viewBox="0 0 14 16" fill="currentColor" className="ml-1">
                                            <path d="M12.5 6.70096C13.1667 7.08586 13.1667 8.04811 12.5 8.43301L2.75 14.0622C2.08333 14.4471 1.25 13.966 1.25 13.1961L1.25 1.93782C1.25 1.16795 2.08333 0.686824 2.75 1.07172L12.5 6.70096Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}

                {/* --- LEFT TEXT AREA (State 2 Sequence) --- */}
                <div className="absolute left-0 top-0 h-full w-[55%] flex flex-col justify-center items-end z-40 pointer-events-none pl-8 pr-4 md:pr-8">

                    {/* Text 1: La musique se lance */}
                    <motion.div
                        style={{ opacity: text1Opacity, filter: text1Blur, x: text1X }}
                        className="absolute text-left max-w-lg"
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            La <span className="text-primitive-saffron-core">musique</span> se lance<br />et évolue.
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed font-light">
                            {"Chaque fragmnt contient de la musique originale pensée pour être modulée et recombinée dans l'application, afin de créer des variations infinies.".split(" ").map((word, i, arr) => (
                                <SubtitleWordReveal
                                    key={i}
                                    word={word}
                                    index={i}
                                    totalWords={arr.length}
                                    scrollYProgress={scrollYProgress}
                                    startOffset={0.65}
                                />
                            ))}
                        </p>
                    </motion.div>

                    {/* Text 2: Aucune coupure */}
                    <motion.div
                        style={{ opacity: text2Opacity, filter: text2Blur, y: text2Y }}
                        className="absolute text-left max-w-lg"
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Aucune <span className="text-primitive-saffron-core">coupure</span>.
                        </h2>
                    </motion.div>

                    {/* Text 3: Aucune transition brutale */}
                    <motion.div
                        style={{ opacity: text3Opacity, filter: text3Blur, y: text3Y }}
                        className="absolute text-left max-w-lg"
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Aucune <span className="text-primitive-saffron-core">transition</span><br />brutale.
                        </h2>
                    </motion.div>

                </div>

                {/* --- IPHONE MOCKUP (State 2) --- */}
                <motion.div
                    style={{ opacity: mockupOpacity, x: islandX, y: islandY, zIndex: 35 }}
                    className="absolute flex items-center justify-center pointer-events-none"
                >
                    <motion.div
                        style={{
                            width: islandWidth,
                            height: islandHeight,
                            boxShadow: islandHighlight,
                            borderWidth: bezelWidth,
                            borderRadius: borderRadius,
                            borderColor: '#111',
                        }}
                        className="relative rounded-[32px] overflow-hidden shrink-0 origin-center bg-black"
                    >
                        {/* Dynamic Island / Notch */}
                        <motion.div
                            style={{ opacity: notchOpacity }}
                            className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-center gap-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                            <div className="w-3/4 h-3/4 flex items-center justify-end pr-1">
                                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                            </div>
                        </motion.div>

                        {/* Image - use selected card image or default */}
                        <img
                            src={selectedCard?.image || islandImage}
                            alt={selectedCard?.title || "Lofi"}
                            className="w-full h-full object-cover"
                        />

                        {/* Animated Video (Fullscreen) */}
                        <motion.video
                            src={animatedVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ opacity: videoOpacity }}
                            className="absolute inset-0 w-full h-full object-cover z-10"
                        />

                        {/* Overlay */}
                        <motion.div
                            style={{
                                opacity: overlayOpacity,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 40%)'
                            }}
                            className="absolute inset-0 z-20 pointer-events-none"
                        />

                        {/* Audio Hint (EQ) */}
                        <motion.div
                            style={{ opacity: audioHintOpacity }}
                            className="absolute bottom-8 left-0 right-0 flex justify-center z-30"
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

                        {/* Final Title */}
                        <motion.div
                            style={{ opacity: text4Opacity, scale: text4Scale }}
                            className="absolute inset-0 flex items-end justify-center z-50 pointer-events-none pb-32"
                        >
                            <h2 className="text-4xl md:text-7xl font-display font-bold text-white text-center px-4 leading-tight drop-shadow-2xl">
                                Vous restez dans<br />votre <span className="text-primitive-saffron-core">expérience</span>
                            </h2>
                        </motion.div>

                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhatIsItB;
