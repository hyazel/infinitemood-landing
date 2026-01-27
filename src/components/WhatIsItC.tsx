import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue, AnimatePresence, useMotionValueEvent, useInView, useSpring, useMotionValue } from 'framer-motion';
import { FRAGMENTS } from '../data/fragments';
import AudioManager from '../utils/AudioManager';
import MouseScrollIndicator from './MouseScrollIndicator';
import { useTranslation } from '../i18n';

// Import images


interface AmbianceCard {
    id: string;
    title: string;
    image: string;
    color: string;
    event?: string;
    subtitle?: string;
    wip?: boolean;
}

// ============================================
// COMPONENT: TITLE SECTION
// ============================================
// ============================================
// COMPONENT: TITLE SECTION
// ============================================
const TitleSection: React.FC<{ scrollYProgress: MotionValue<number> }> = ({ scrollYProgress }) => {
    const { t } = useTranslation();

    // Opacity: Fade out 0.15-0.25 (Keep visible longer before fading)
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    // Scale: Minimal change
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
    // Y: Move UP to make room for growing capsule
    const y = useTransform(scrollYProgress, [0, 0.2], ["-5vh", "-40vh"]);

    return (
        <motion.div
            style={{ opacity, scale, y }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4"
        >
            <h2 className="text-6xl md:text-9xl font-display font-bold text-white text-center mb-6 drop-shadow-2xl tracking-tighter">
                {t('whatIsItC.title')} <span className="text-primitive-saffron-core">{t('whatIsItC.titleHighlight')}</span>
            </h2>
            <p className="text-2xl md:text-4xl text-white font-medium text-center max-w-4xl drop-shadow-xl tracking-wide">
                {t('whatIsItC.subtitle')}
            </p>
        </motion.div>
    );
};

// ============================================
// COMPONENT: CAPSULE STACK
// ============================================
// ============================================
// COMPONENT: CAPSULE STACK
// ============================================
const CapsuleStack: React.FC<{
    scrollYProgress: MotionValue<number>;
    ambiances: AmbianceCard[];
    onPlayClick: (card: AmbianceCard) => void;
}> = ({ scrollYProgress, ambiances, onPlayClick }) => {
    const { t } = useTranslation();

    // Total items
    const count = ambiances.length;

    // Timeline configuration
    // 0.00 -> 0.20: Intro (Title moves UP, Capsule 0 moves UP from bottom half)
    // 0.20 -> 0.95: Remaining 6 capsules enter sequentially

    const introEnd = 0.20;
    const stackStart = introEnd;
    const stackEnd = 0.95;

    const segmentDuration = (stackEnd - stackStart) / (count - 1);

    return (
        <>
            {ambiances.map((item, index) => {
                let opacity: MotionValue<number> | number = 1;
                let scale: MotionValue<number> | number = 1;
                let y: MotionValue<string> | string = "0%";

                // Z-index increases with index so new ones cover old ones
                const zIndex = 20 + index;

                if (index === 0) {
                    // First capsule: Starts lower (half visible), moves to center
                    y = useTransform(scrollYProgress, [0, introEnd], ["80vh", "0vh"]);
                    // Scale: Start slightly smaller to give depth
                    scale = useTransform(scrollYProgress, [0, introEnd], [0.5, 1]);
                    // Opacity: Fully visible from start
                    opacity = 1;
                } else {
                    // Subsequent capsules: Enter from bottom
                    const myStart = stackStart + (index - 1) * segmentDuration;
                    const myEnd = myStart + segmentDuration;

                    // Logic: Before myStart, y is 100vh (offscreen bottom). At myEnd, y is 0 (centered).
                    y = useTransform(scrollYProgress, [myStart, myEnd], ["120vh", "0vh"]);

                    // Add a little scale effect on entry for flair? 
                    scale = useTransform(scrollYProgress, [myStart, myEnd], [0.9, 1]);
                }

                return (
                    <motion.div
                        key={item.id}
                        style={{ zIndex, y, scale, opacity }}
                        className={`absolute inset-0 flex items-center justify-center pointer-events-auto cursor-pointer group ${item.wip ? 'grayscale cursor-not-allowed' : ''}`}
                        onClick={() => !item.wip && onPlayClick(item)}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative w-[92vw] md:w-[90vw] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl bg-black transition-transform duration-500" style={{ height: 'calc(var(--vh, 1vh) * 85)', maxHeight: 'calc(var(--vh, 1vh) * 85)' }}>
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                            {/* Now Playing Badge for Neo Classic (index 1) */}
                            {index === 1 && (
                                <div className="absolute top-8 left-8 md:top-12 md:left-12">
                                    <div className="bg-primitive-saffron-core/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3 border border-primitive-saffron-core shadow-lg shadow-primitive-saffron-core/30">
                                        <div className="flex gap-1 h-4 items-end">
                                            <motion.div
                                                animate={{ height: [8, 16, 8] }}
                                                transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
                                                className="w-1 bg-black rounded-full"
                                            />
                                            <motion.div
                                                animate={{ height: [12, 20, 12] }}
                                                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                                                className="w-1 bg-black rounded-full"
                                            />
                                            <motion.div
                                                animate={{ height: [8, 14, 8] }}
                                                transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                                                className="w-1 bg-black rounded-full"
                                            />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-black">
                                            {t('whatIsItC.nowPlaying')}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div className="absolute bottom-0 left-0 w-full p-12 md:p-20 flex flex-col items-start">
                                {item.wip && (
                                    <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-4 border border-white/10">
                                        {t('whatIsItC.comingSoon')}
                                    </span>
                                )}
                                <span className={`text-base md:text-lg font-sans uppercase tracking-[0.2em] mb-4 ${item.color}`}>
                                    {t('whatIsItC.ambiance')} {index + 1}
                                </span>
                                <h3 className="text-5xl md:text-8xl font-display font-bold text-white leading-none mb-6">
                                    {item.title}
                                </h3>
                                {!item.wip && (
                                    <div
                                        className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg shadow-white/20"
                                    >
                                        <svg width="24" height="28" viewBox="0 0 14 16" fill="currentColor" className="ml-1">
                                            <path d="M12.5 6.70096C13.1667 7.08586 13.1667 8.04811 12.5 8.43301L2.75 14.0622C2.08333 14.4471 1.25 13.966 1.25 13.1961L1.25 1.93782C1.25 1.16795 2.08333 0.686824 2.75 1.07172L12.5 6.70096Z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </>
    );
};

// ============================================
// COMPONENT: MOUSE FOLLOWER
// ============================================
const MouseFollower: React.FC<{
    isVisible: boolean;
}> = ({ isVisible }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for the follower
    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.5
            }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 z-[60] pointer-events-none mix-blend-difference"
        >
            <div className="relative -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                </div>
            </div>
        </motion.div>
    );
};

// ============================================
// COMPONENT: SCROLL PROMPT NOTIFICATION
// ============================================
const ScrollPrompt: React.FC<{
    scrollYProgress: MotionValue<number>;
    targetRef: React.RefObject<HTMLDivElement | null>;
    ambiances: AmbianceCard[];
    onPlayClick: (card: AmbianceCard) => void;
}> = ({ scrollYProgress, targetRef, ambiances, onPlayClick }) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.98) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    const handleExplore = () => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleContinue = () => {
        const neoClassic = ambiances[1];
        if (neoClassic) {
            onPlayClick(neoClassic);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-10 left-4 right-4 z-[100] flex justify-center px-4"
                >
                    <div className="flex flex-col md:flex-row gap-3 w-full max-w-4xl">
                        {/* Primary Button: Continue with Neo Classic */}
                        <motion.button
                            onClick={handleContinue}
                            className="flex-[7] bg-primitive-saffron-core text-black px-6 py-4 md:px-8 md:py-5 rounded-full shadow-2xl flex items-center justify-center gap-3 font-bold text-base md:text-lg cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg width="20" height="24" viewBox="0 0 14 16" fill="currentColor" className="flex-shrink-0">
                                <path d="M12.5 6.70096C13.1667 7.08586 13.1667 8.04811 12.5 8.43301L2.75 14.0622C2.08333 14.4471 1.25 13.966 1.25 13.1961L1.25 1.93782C1.25 1.16795 2.08333 0.686824 2.75 1.07172L12.5 6.70096Z" />
                            </svg>
                            <span className="whitespace-nowrap">{t('whatIsItC.continueWith')}</span>
                        </motion.button>

                        {/* Secondary Button: Explore */}
                        <motion.button
                            onClick={handleExplore}
                            className="flex-[3] bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-4 md:px-8 md:py-5 rounded-full shadow-xl flex items-center justify-center gap-3 font-bold text-base md:text-lg cursor-pointer"
                            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="whitespace-nowrap">{t('whatIsItC.exploreOthers')}</span>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


// ============================================
// VIEW: MOCKUP (Reused for consistent transition)
// ============================================
const MockupView: React.FC<{
    localProgress: MotionValue<number>;
    selectedCard: AmbianceCard;
    windowSize: { width: number; height: number };
}> = ({ localProgress, selectedCard, windowSize }) => {
    const { t } = useTranslation();

    const xShift = windowSize.width * 0.25;
    const finalWidth = windowSize.width || 1000;
    const finalHeight = windowSize.height || 1000;

    // --- TIMELINE CONFIGURATION ---
    // 0.00 -> 0.60: Text Sequence (Side Text)
    // 0.60 -> 0.80: Expansion to Full Screen
    // 0.80 -> 1.00: Full Screen "Lock" & Final Title Sequence

    // Mockup Transforms
    // Mobile: smaller mockup (200x440), Desktop: original (300x660)
    const isMobile = windowSize.width < 768;
    const initialWidth = isMobile ? windowSize.width * 0.5 : 300;
    const initialHeight = isMobile ? windowSize.height * 0.6 : 660;
    const mockupWidth = useTransform(localProgress, [0, 0.1, 0.60, 0.80], [initialWidth, initialWidth, initialWidth, finalWidth + 10]);
    const mockupHeight = useTransform(localProgress, [0, 0.1, 0.60, 0.80], [initialHeight, initialHeight, initialHeight, finalHeight + (isMobile ? 60 : 200)]);
    // Mobile: no horizontal shift (centered), Desktop: original (25%)
    const xShiftAmount = isMobile ? 0 : xShift;
    const mockupX = useTransform(localProgress, [0, 0.05, 0.60, 0.80], [0, xShiftAmount, xShiftAmount, 0]);
    const mockupY = useTransform(localProgress, [0.80, 0.90], [0, isMobile ? 0 : 30]);

    // Aesthetic morphs
    const mockupBorderRadius = useTransform(localProgress, [0, 0.05, 0.60, 0.80], ["48px", "48px", "48px", "0px"]);
    const mockupBezelWidth = useTransform(localProgress, [0, 0.05, 0.60, 0.80], ["12px", "12px", "12px", "0px"]);
    const mockupShadow = useTransform(localProgress, [0, 0.05, 0.55, 0.70],
        ["0px 20px 50px rgba(234,179,8,0.3)", "0px 20px 50px rgba(234,179,8,0.3)", "0px 20px 50px rgba(234,179,8,0.3)", "0px 0px 0px rgba(0,0,0,0)"]);
    const notchOpacity = useTransform(localProgress, [0, 0.05, 0.60, 0.80], [1, 1, 1, 0]);

    // Expanded state to toggle minor layout class (helps center-to-fullscreen transition)
    const [expanded, setExpanded] = useState(false);
    useMotionValueEvent(localProgress, "change", (latest) => {
        if (latest >= 0.6 && !expanded) setExpanded(true);
        if (latest < 0.6 && expanded) setExpanded(false);
    });

    // Audio hint fades out
    const audioHintOpacity = useTransform(localProgress, [0, 0.1, 0.60], [1, 1, 0]);

    // Side Text Sequence
    const text1Opacity = useTransform(localProgress, [0.0, 0.05, 0.15, 0.20], [0, 1, 1, 0]);
    const text1Blur = useTransform(localProgress, [0.15, 0.20], ["blur(0px)", "blur(10px)"]);
    const text1X = useTransform(localProgress, [0.0, 0.05], ["-10%", "0%"]);

    const text2Opacity = useTransform(localProgress, [0.20, 0.25, 0.35, 0.40], [0, 1, 1, 0]);
    const text2Blur = useTransform(localProgress, [0.20, 0.25, 0.35, 0.40], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
    const text2Y = useTransform(localProgress, [0.20, 0.25], ["20px", "0px"]);

    const text3Opacity = useTransform(localProgress, [0.40, 0.45, 0.55, 0.60], [0, 1, 1, 0]);
    const text3Blur = useTransform(localProgress, [0.40, 0.45, 0.55, 0.60], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
    const text3Y = useTransform(localProgress, [0.40, 0.45], ["20px", "0px"]);

    // Title: "Vous restez dans votre experience"
    const finalTitleOpacity = useTransform(localProgress, [0.82, 0.86, 0.92, 0.96], [0, 1, 1, 0]);
    const finalTitleScale = useTransform(localProgress, [0.82, 0.96], [0.95, 1]);
    const finalOverlayOpacity = useTransform(localProgress, [0.82, 0.86, 0.92, 0.96], [0, 1, 1, 0]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
        >
            {/* Mouse Scroll Indicator - Visible on mobile too */}
            <motion.div
                style={{ opacity: useTransform(localProgress, [0, 0.2], [1, 0]) }}
                className="absolute right-4 md:right-8 top-1/2 z-40"
            >
                <MouseScrollIndicator text={t('whatIsItC.scroll')} />
            </motion.div>

            {/* Text Area - Bottom on mobile, Left on desktop */}
            <div className="absolute left-0 right-0 bottom-24 md:right-auto md:top-0 md:bottom-auto h-auto md:h-full w-full md:w-[55%] flex flex-col justify-center items-center md:items-end z-20 pointer-events-none px-6 md:px-8 md:pl-8 md:pr-8">
                <motion.div style={{ opacity: text1Opacity, filter: text1Blur, x: text1X }} className="absolute text-center md:text-left max-w-sm md:max-w-lg">
                    <h2 className="text-3xl md:text-6xl font-display font-bold text-white leading-tight drop-shadow-2xl">
                        {t('whatIsItC.mockup.text1.part1')} <span className="text-primitive-saffron-core">{t('whatIsItC.mockup.text1.highlight')}</span> {t('whatIsItC.mockup.text1.part2')}
                    </h2>
                </motion.div>

                <motion.div style={{ opacity: text2Opacity, filter: text2Blur, y: text2Y }} className="absolute text-center md:text-left max-w-sm md:max-w-lg">
                    <h2 className="text-3xl md:text-6xl font-display font-bold text-white leading-tight drop-shadow-2xl">
                        {t('whatIsItC.mockup.text2.part1')} <span className="text-primitive-saffron-core">{t('whatIsItC.mockup.text2.highlight')}</span>.
                    </h2>
                </motion.div>

                <motion.div style={{ opacity: text3Opacity, filter: text3Blur, y: text3Y }} className="absolute text-center md:text-left max-w-sm md:max-w-lg">
                    <h2 className="text-3xl md:text-6xl font-display font-bold text-white leading-tight drop-shadow-2xl">
                        {t('whatIsItC.mockup.text3.part1')} <span className="text-primitive-saffron-core">{t('whatIsItC.mockup.text3.highlight')}</span> {t('whatIsItC.mockup.text3.part2')}.
                    </h2>
                </motion.div>
            </div>

            {/* iPhone Mockup */}
            <div className={`absolute left-0 right-0 ${expanded ? 'top-0' : 'top-16'} md:inset-0 flex items-center justify-center pointer-events-none transition-all duration-500`}>
                <motion.div style={{ x: mockupX, y: mockupY, zIndex: 35 }} className="flex items-center justify-center">
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
                        <motion.div style={{ opacity: notchOpacity }} className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-20 h-5 md:w-28 md:h-7 bg-black rounded-full z-50 flex items-center justify-center gap-1 md:gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                            <div className="w-3/4 h-3/4 flex items-center justify-end pr-1">
                                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                            </div>
                        </motion.div>

                        <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-full object-cover" />

                        {/* Overlay & Title */}
                        <motion.div style={{ opacity: finalOverlayOpacity, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 40%)' }} className="absolute inset-0 z-20 pointer-events-none" />
                        <motion.div style={{ opacity: finalTitleOpacity, scale: finalTitleScale }} className="absolute inset-0 flex items-end justify-center z-50 pointer-events-none pb-32 md:pb-32">
                            <h2 className="text-2xl md:text-7xl font-display font-bold text-white text-center px-4 leading-tight drop-shadow-2xl">
                                {t('whatIsItC.mockup.finalTitle.part1')}<br />{t('whatIsItC.mockup.finalTitle.part2')} <span className="text-primitive-saffron-core">{t('whatIsItC.mockup.finalTitle.highlight')}</span>
                            </h2>
                        </motion.div>

                        {/* Audio Hint */}
                        <motion.div style={{ opacity: audioHintOpacity }} className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center z-40">
                            <div className="flex items-center gap-1 md:gap-2 bg-black/40 backdrop-blur-md px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/10 shadow-lg">
                                <div className="flex gap-1 h-3 items-end">
                                    <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-accent-primary rounded-full" />
                                    <motion.div animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }} className="w-1 bg-accent-primary rounded-full" />
                                    <motion.div animate={{ height: [4, 10, 4] }} transition={{ repeat: Infinity, duration: 0.9, delay: 0.2 }} className="w-1 bg-accent-primary rounded-full" />
                                </div>
                                <span className="text-[8px] md:text-xs uppercase tracking-widest text-white/90 font-bold">{t('whatIsItC.mockup.audioActive')}</span>
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
const WhatIsItC: React.FC<{
    onSelectionChange?: (fragment: any | null) => void;
}> = ({ onSelectionChange }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [selectedCard, setSelectedCard] = useState<AmbianceCard | null>(null);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const clickScrollPositionRef = useRef<number>(0);

    const [fragments] = useState(FRAGMENTS);
    const currentAudioEvent = useRef<string | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Proxy value for background elements (Title, Capsules).
    // We freeze this when a card is selected to prevent "jumps" when the section height changes.
    const visualProgress = useMotionValue(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!selectedCard) {
            visualProgress.set(latest);
        }
    });

    // Notify parent on selection change
    useEffect(() => {
        if (onSelectionChange) {
            onSelectionChange(selectedCard);
        }
    }, [selectedCard, onSelectionChange]);

    // Use global scrollY for absolute pixel tracking
    const { scrollY } = useScroll();

    // Create local progress based on PIXELS, not percentage. This prevents jumps when height changes.
    // 3.5vh * 100 = 350vh of scroll distance for the animation
    const ANIMATION_SCROLL_DISTANCE_VH = 350;

    const localProgress = useTransform(scrollY, (currentY) => {
        if (!selectedCard) return 0;
        const startY = clickScrollPositionRef.current;
        const endY = startY + (windowSize.height * (ANIMATION_SCROLL_DISTANCE_VH / 100));

        if (currentY < startY) return 0;
        if (currentY > endY) return 1;
        return (currentY - startY) / (endY - startY);
    });

    const [extraHeight, setExtraHeight] = useState(0);

    // Auto-play progress for when we click "Continue" at the bottom
    // Removed auto-play in favor of dynamic scroll extension

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Return to capsules when scrolling back before click position - using Absolute Y
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (selectedCard !== null && latest < clickScrollPositionRef.current - 100) { // 100px buffer zone
            setSelectedCard(null);
            setExtraHeight(0); // Reset height when backing out
        }
    });

    const isInView = useInView(targetRef, { amount: 0.1 });

    // Audio / Snapshot Management
    useEffect(() => {
        const audioMgr = AudioManager.getInstance();
        if (isInView && !selectedCard) {
            audioMgr.playMusicMenuSelection();
        } else {
            audioMgr.stopMusicMenuSelection();
        }
        return () => {
            audioMgr.stopMusicMenuSelection();
        }
    }, [isInView, selectedCard]);

    const handlePlayClick = (card: any) => {
        const audioMgr = AudioManager.getInstance();
        audioMgr.stopHero();
        if (currentAudioEvent.current) {
            audioMgr.stop(currentAudioEvent.current);
        }
        if (card.event) {
            audioMgr.play(card.event);
            currentAudioEvent.current = card.event;
        }

        // Capture current absolute scroll position
        const currentScrollY = scrollY.get();
        clickScrollPositionRef.current = currentScrollY;

        // Calculate if we need more height
        if (targetRef.current) {
            const sectionTop = targetRef.current.offsetTop || 0;
            const currentSectionHeight = targetRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;

            // Where we are relative to the section top
            // const relativeScroll = currentScrollY - sectionTop; // Unused

            // How much space is physically left in the section?
            // "Sticky" logic: The section stays pinned. The physical end of scrolling is when the bottom of the section hits the bottom of viewport.
            // Max scrollable Y = sectionTop + sectionHeight - viewportHeight.
            const maxScrollY = sectionTop + currentSectionHeight - viewportHeight;
            const remainingScroll = maxScrollY - currentScrollY;

            const neededScroll = viewportHeight * (ANIMATION_SCROLL_DISTANCE_VH / 100);

            if (remainingScroll < neededScroll) {
                // We need to extend the section
                const addedHeight = neededScroll - remainingScroll;
                setExtraHeight(addedHeight);
            } else {
                setExtraHeight(0);
            }
        }

        setSelectedCard(card);
    };

    // Mouse Follower Visibility Logic
    const [showMouseFollower, setShowMouseFollower] = useState(false);
    const isMobile = windowSize.width < 768;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Show after intro (capsules visible) and hide if fully scrolled or card selected
        if (latest > 0.15 && latest < 0.95 && !selectedCard && isMobile === false) {
            setShowMouseFollower(true);
        } else {
            setShowMouseFollower(false);
        }
    });

    // Also hide if selectedCard becomes true (handled by check above but good to be explicit in effect if needed)
    useEffect(() => {
        if (selectedCard) setShowMouseFollower(false);
    }, [selectedCard]);

    return (
        <section ref={targetRef} className="relative bg-background-primary overflow-clip" style={{ height: `calc((var(--vh, 1vh) * 800) + ${extraHeight}px)` }}>
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">

                <AnimatePresence mode="wait">
                    {!selectedCard ? (
                        <motion.div
                            key="selection-view"
                            className="absolute inset-0"
                            exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        >
                            <TitleSection key="title" scrollYProgress={visualProgress} />
                            <CapsuleStack
                                key="capsules"
                                scrollYProgress={visualProgress}
                                ambiances={fragments}
                                onPlayClick={handlePlayClick}
                            />
                        </motion.div>
                    ) : (
                        <MockupView
                            key="mockup"
                            localProgress={localProgress}
                            selectedCard={selectedCard}
                            windowSize={windowSize}
                        />
                    )}
                </AnimatePresence>

                {!selectedCard && <ScrollPrompt scrollYProgress={scrollYProgress} targetRef={targetRef} ambiances={fragments} onPlayClick={handlePlayClick} />}

                <MouseFollower isVisible={showMouseFollower} />

            </div>
        </section>
    );
};

export default WhatIsItC;
