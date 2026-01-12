import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Assets for Influences
// Assets for Influences
import dioramaArchitecture from '../assets/diorama-architecture.jpg';
import dioramaNature from '../assets/diorama-nature.jpg';
import dioramaScene from '../assets/diorama-booknnok.jpg';
import dioramaImmersion from '../assets/diorama-3DIllustration.jpg';
import dioramaGraphisme from '../assets/diorama-graphisme.jpg';
// Assets for Ambiances
import desertImage from '../assets/fragmnt-desert.jpg';
import townImage from '../assets/fragmnt-town.png';
import europeImage from '../assets/fragmnt-europe.jpg';
import islandImage from '../assets/fragmnt-island.jpg';
import islandeImage from '../assets/fragmnt-islande.jpg';
import musicAndVisual from '../assets/musicandvisual.png';

const Influences: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const [activeCardId, setActiveCardId] = useState<number | null>(null);

    // --- DATA ---
    const influenceSteps = [
        { id: 'nature', word: "LA NATURE", image: dioramaNature },
        { id: 'arch', word: "L'ARCHITECTURE", image: dioramaArchitecture },
        { id: 'game', word: "LE JEU VIDÉO", image: dioramaImmersion },
        { id: 'booknook', word: "LES BOOK NOOKS", image: dioramaScene },
        { id: 'illus', word: "L'ILLUSTRATION", image: dioramaGraphisme },
    ];
    const filmStripImages = [...influenceSteps, ...influenceSteps, ...influenceSteps, ...influenceSteps];

    const ambiances = [
        { id: 1, title: "Lofi Study", image: islandImage, color: "text-amber-400" },
        { id: 2, title: "Neo Classic", image: europeImage, color: "text-blue-300" },
        { id: 3, title: "Chill Beats", image: townImage, color: "text-purple-400" },
        { id: 4, title: "Acoustic", image: desertImage, color: "text-orange-300" },
        { id: 5, title: "Ambient", image: islandeImage, color: "text-cyan-200" },
        { id: 6, title: "Nature", image: dioramaNature, color: "text-green-300" },
        { id: 7, title: "Architecture", image: dioramaArchitecture, color: "text-gray-300" },
    ];


    // =========================================================================
    // PART 1: INFLUENCES NARRATIVE (0.00 - 0.40)
    // =========================================================================

    // --- 1. INTRO (0.00 - 0.08) ---
    const text1Opacity = useTransform(scrollYProgress, [0.01, 0.06], [1, 0]);
    const spotlightScale = useTransform(scrollYProgress, [0.01, 0.10], [1, 200]);
    const spotlightOpacity = useTransform(scrollYProgress, [0.01, 0.04, 0.10], [0, 1, 1]);

    const text2Opacity = useTransform(scrollYProgress, [0.06, 0.08, 0.10, 0.12], [0, 1, 1, 0]);
    const text2Blur = useTransform(scrollYProgress, [0.06, 0.08, 0.10, 0.12], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

    // --- 2. SEQUENCE (0.12 - 0.35) --- SLOWED DOWN
    const sequenceStart = 0.12;
    const sequenceEnd = 0.35;
    const stepSize = (sequenceEnd - sequenceStart) / 5;

    // --- 3. CAPSULE VISIBILITY (0.10 - 0.38) ---
    // --- 3. CAPSULE VISIBILITY (0.10 - 0.38) ---
    // --- 3. CAPSULE VISIBILITY (0.10 - 0.38) ---
    // Reverted to fade out at 0.38 to prevent overlap with Reading Phase
    const capsuleOpacity = useTransform(scrollYProgress, [0.10, 0.12, 0.35, 0.38], [0, 1, 1, 0]);

    // CONTAINER VISIBILITY: Shows for Intro, Hides for Reading, Shows for Deck
    // Intro: 0.10->0.12 (In), 0.35->0.38 (Out)
    // Deck: 0.48->0.50 (In)
    const containerOpacity = useTransform(scrollYProgress, [0.10, 0.12, 0.35, 0.38, 0.48, 0.50], [0, 1, 1, 0, 0, 1]);

    const capsuleScale = useTransform(scrollYProgress, [0.10, 0.12, 0.35, 0.38], [0.8, 1, 1, 0.8]);

    // --- 4. READING PHASE & COLUMNS (0.38 - 0.45) ---
    const readingStart = 0.38;
    const readingEnd = 0.45;
    const sentence1 = "Nous croyons que la musique n'est pas juste un fond sonore,".split(" ");
    const sentence2 = "mais un espace où l'on peut rester, se promener, contempler.".split(" ");

    const getWordOpacity = (index: number, total: number, baseStart: number, baseEnd: number) => {
        const step = (baseEnd - baseStart) / total;
        const start = baseStart + step * index;
        return useTransform(scrollYProgress, [start, start + step / 2], [0, 1]);
    };

    // STRIPS (Converge for Formation)
    // Appear just before reading starts (0.37)
    const stripsOpacity = useTransform(scrollYProgress, [0.36, 0.38, 0.48, 0.50], [0, 0.8, 1, 1]);
    const stripScrollYLeft = useTransform(scrollYProgress, [0.38, 0.50], ["0%", "-30%"]);
    const stripScrollYRight = useTransform(scrollYProgress, [0.38, 0.50], ["-30%", "0%"]);

    // --- 5. CAPSULE FORMATION (0.45 - 0.47) ---
    const stripWidth = useTransform(scrollYProgress, [0.45, 0.47], ["20vw", "47.5vw"]);
    const stripXLeft = useTransform(scrollYProgress, [0.45, 0.47], ["0vw", "2.5vw"]);
    const stripXRight = useTransform(scrollYProgress, [0.45, 0.47], ["0vw", "-2.5vw"]);

    const radiusLeft = useTransform(scrollYProgress, [0.45, 0.47], ["0rem 0rem 0rem 0rem", "4rem 0rem 0rem 4rem"]);
    const radiusRight = useTransform(scrollYProgress, [0.45, 0.47], ["0rem 0rem 0rem 0rem", "0rem 4rem 4rem 0rem"]);

    // --- 6. FINAL REVEAL (0.48 - 0.50) ---
    // --- BACKGROUND COLOR: Black -> Primary at 0.50 ---
    const backgroundColor = useTransform(scrollYProgress, [0.48, 0.50], ["#000000", "#16131B"]); // #16131B is background-primary

    const finalContentOpacity = useTransform(scrollYProgress, [0.48, 0.49], [0, 1]);
    const conclusionTextOpacity = useTransform(scrollYProgress, [0, 0.35, 0.38, 0.45, 0.46], [0, 0, 1, 1, 0]);


    // =========================================================================
    // PART 2: THE SELECTION STACK (0.40 - 1.00)
    // =========================================================================

    // --- 7. TITLE REVEAL --- 
    // Revealed with DECK start
    const selectionTitleOpacity = useTransform(scrollYProgress, [0.50, 0.55], [0, 1]);

    // --- 8. CARD STACKING ---
    const stackStart = 0.55;
    const stackStep = 0.08; // Slightly larger step for better separation

    const useCardTransform = (index: number) => {
        const start = stackStart + (index * stackStep);
        const end = start + stackStep;
        // Slide in from Right
        const x = useTransform(scrollYProgress, [start, end], ["100vw", "0vw"]);
        return x;
    };


    return (
        <section ref={targetRef} className="relative h-[1400vh] bg-background-primary overflow-clip">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center p-0">

                {/* --- Spotlight Layer --- */}
                <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
                    <motion.div
                        style={{ scale: spotlightScale, opacity: spotlightOpacity }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primitive-saffron-blossom via-background-inverted to-background-inverted blur-xl z-0"
                    />
                </div>

                {/* --- INTRO OVERLAY --- */}
                <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
                    <motion.div style={{ opacity: text1Opacity }} className="absolute">
                        <h2 className="text-4xl md:text-8xl font-display font-medium leading-[1] tracking-tighter text-text-primary text-center">
                            Des ambiances <br /> qui s'écoutent
                        </h2>
                    </motion.div>

                    <motion.div
                        style={{ opacity: text2Opacity, filter: text2Blur }}
                        className="absolute flex flex-row items-center gap-6"
                    >
                        <div className="w-4 h-4 rounded-full bg-primitive-saffron-core shadow-[0_0_20px_rgba(255,179,92,0.8)]" />
                        <h2 className="text-4xl md:text-8xl font-display italic font-light leading-[1] tracking-tighter text-text-inverted text-center">
                            Et se regardent
                        </h2>
                    </motion.div>
                </div>


                {/* --- MAIN SEQUENCE CAPSULE --- */}
                {/* Always rendered, z-index managed */}
                {/* Always rendered, z-index managed */}
                <motion.div
                    style={{
                        opacity: containerOpacity, // Controlled visibility (Intro & Deck, Gap for Reading)
                        scale: capsuleScale,
                        backgroundColor // Dynamic background
                    }}
                    className="relative w-[95vw] h-[90vh] max-w-[1800px] z-10 rounded-[4rem] overflow-hidden shadow-2xl transition-colors duration-700"
                >
                    {/* IMAGES STACK (Intro Content) */}
                    <motion.div style={{ opacity: capsuleOpacity }} className="absolute inset-0 w-full h-full">
                        {influenceSteps.map((step, index) => {
                            const start = sequenceStart + (stepSize * index);
                            const nextStart = index < influenceSteps.length - 1 ? (sequenceStart + (stepSize * (index + 1))) : 1.0;

                            // OVERLAP EFFECT: Cross-fade to prevent blink. 
                            // Fade In: [start, start + 0.02]
                            // Fade Out: [nextStart, nextStart + 0.02] (Overlaps with next image's fade in)
                            const opacity = useTransform(scrollYProgress, [start, start + 0.02, nextStart, nextStart + 0.02], [0, 1, 1, 0]);
                            const blur = useTransform(scrollYProgress, [start, start + 0.02, nextStart, nextStart + 0.02], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
                            const scale = useTransform(scrollYProgress, [start, nextStart + 0.02], [1.1, 1]);

                            return (
                                <motion.div
                                    key={step.id}
                                    style={{ opacity, filter: blur, zIndex: 1 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <motion.img
                                        style={{ scale }}
                                        src={step.image}
                                        alt={step.word}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60" />
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* TEXT OVERLAY */}
                    <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end z-20 pointer-events-none">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm md:text-lg font-sans font-medium tracking-[0.25em] uppercase text-white/70">
                                FRAGMNT PUISE DANS
                            </h3>

                            <div className="relative h-[80px] md:h-[9vw] w-full flex items-center justify-start overflow-hidden">
                                {influenceSteps.map((step, index) => {
                                    const start = sequenceStart + (stepSize * index);
                                    const nextStart = index < influenceSteps.length - 1 ? (sequenceStart + (stepSize * (index + 1))) : 1.0;

                                    // TITLE CROSS-FADE: Matching the images for consistency
                                    const opacity = useTransform(scrollYProgress, [start, start + 0.02, nextStart, nextStart + 0.02], [0, 1, 1, 0]);
                                    const blur = useTransform(scrollYProgress, [start, start + 0.02, nextStart, nextStart + 0.02], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
                                    // Removed vertical drift (y) as requested

                                    return (
                                        <motion.h2
                                            key={step.id}
                                            style={{ opacity, filter: blur }}
                                            className="absolute text-6xl md:text-[8vw] font-display font-bold text-white leading-none tracking-tighter left-0"
                                        >
                                            {step.word}
                                        </motion.h2>
                                    );
                                })}
                            </div>

                            <h3 className="text-sm md:text-lg font-sans font-medium tracking-[0.25em] uppercase text-white/70 mt-2">
                                POUR METTRE LA MUSIQUE EN SCÈNE
                            </h3>
                        </div>
                        <div className="w-[100px] h-[1px] bg-white/50 mt-8" />
                    </div>
                </motion.div>


                {/* --- CONCLUSION TEXT (Behind Formation) --- */}
                <motion.div
                    style={{ opacity: conclusionTextOpacity }}
                    className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-6 text-center"
                >
                    <div className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-display font-light leading-snug text-text-inverted flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                        {sentence1.map((word, i) => (
                            <motion.span
                                key={`s1-${i}`}
                                style={{ opacity: getWordOpacity(i, sentence1.length, readingStart, readingStart + 0.03) }}
                            >
                                {word}
                            </motion.span>
                        ))}
                        <br />
                        <span className="font-regular text-text-inverted/60 flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                            {sentence2.map((word, i) => (
                                <motion.span
                                    key={`s2-${i}`}
                                    style={{ opacity: getWordOpacity(i, sentence2.length, readingStart + 0.03, readingEnd) }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </span>
                    </div>
                </motion.div>


                {/* --- FORMATION COLUMNS (Left & Right) --- */}
                <motion.div
                    style={{
                        opacity: activeCardId ? 0 : stripsOpacity,
                        width: stripWidth,
                        x: stripXLeft,
                        borderRadius: radiusLeft
                    }}
                    className="absolute left-0 top-0 bottom-0 overflow-hidden z-20 h-[90vh] my-auto"
                >
                    <div className="w-full h-[90vh] absolute top-1/2 -translate-y-1/2 left-0 shadow-2xl">
                        <div className="w-full h-full relative overflow-hidden bg-black">
                            <motion.div style={{ y: stripScrollYLeft }} className="flex flex-col gap-0">
                                {filmStripImages.map((step, i) => (
                                    <img key={`l-${i}`} src={step.image} className="w-full aspect-[3/4] object-cover opacity-80" />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    style={{
                        opacity: activeCardId ? 0 : stripsOpacity,
                        width: stripWidth,
                        x: stripXRight,
                        borderRadius: radiusRight
                    }}
                    className="absolute right-0 top-0 bottom-0 overflow-hidden z-20 h-screen flex items-center"
                >
                    <div className="w-full h-[90vh] relative shadow-2xl">
                        <div className="w-full h-full relative overflow-hidden bg-black">
                            <motion.div style={{ y: stripScrollYRight }} className="flex flex-col gap-0">
                                {filmStripImages.map((step, i) => (
                                    <img key={`r-${i}`} src={step.image} className="w-full aspect-[3/4] object-cover opacity-80" />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>


                {/* --- FINAL RESULT LAYER (Base Layer) --- */}
                <motion.div
                    style={{ opacity: activeCardId ? 0 : finalContentOpacity }} // Fade out on selection
                    className="absolute z-30 w-[95vw] h-[90vh] max-w-[1800px] rounded-[4rem] overflow-hidden shadow-2xl pointer-events-none"
                >
                    <img
                        src={musicAndVisual}
                        alt="Visual and Musical Scene"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80" />




                    {/* AUDIO HINT PILL (Restored "Minimalist EQ" from WhatIsIt) */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center pointer-events-none z-40">
                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
                            <div className="flex gap-1 h-3 items-end">
                                <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-primitive-orchid-bloom rounded-full" />
                                <motion.div animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }} className="w-1 bg-primitive-orchid-core rounded-full" />
                                <motion.div animate={{ height: [4, 10, 4] }} transition={{ repeat: Infinity, duration: 0.9, delay: 0.2 }} className="w-1 bg-primitive-orchid-deep rounded-full" />
                            </div>
                            <span className="text-xs uppercase tracking-widest text-white/90 font-bold">Audio Actif</span>
                        </div>
                    </div>

                    {/* CHOICE TITLE */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-50">
                        <motion.h2
                            style={{ opacity: selectionTitleOpacity }}
                            className="text-5xl md:text-8xl font-display font-bold text-white text-center mb-6 drop-shadow-2xl"
                        >
                            Choisis ton <span className="text-primitive-saffron-core">Fragmnt</span>
                        </motion.h2>

                        <motion.p
                            style={{ opacity: selectionTitleOpacity }}
                            className="text-xl md:text-2xl text-white/80 font-light text-center max-w-2xl px-4 drop-shadow-md"
                        >
                            Parmi nos 6 ambiances composées avec soin.
                        </motion.p>
                    </div>
                </motion.div>


                {/* --- STACKED AMBIANCE CARDS --- */}
                {/* GLOBAL VISIBILITY GATE: Only show deck after 0.50 (new Deck Start) */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.50, 0.52], [0, 1]) }}
                    className="absolute inset-0 pointer-events-none"
                >
                    <AnimatePresence>
                        {ambiances.map((item, index) => {
                            const x = useCardTransform(index);
                            const zIndex = 40 + index;
                            const isSelected = activeCardId === item.id;

                            // If activeCardId is set AND this is not the selected one, unmount.
                            if (activeCardId && !isSelected) return null;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ x: "100vw" }}
                                    style={{
                                        x: isSelected ? 0 : x,
                                        zIndex: isSelected ? 100 : zIndex,
                                    }}
                                    animate={isSelected ? {
                                        width: "100%",
                                        height: "100%",
                                        x: 0,
                                        transition: { duration: 0.8, ease: "anticipate" }
                                    } : {}}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-auto"
                                >
                                    {/* THE CARD ITSELF - MORPHING TARGET */}
                                    <motion.div
                                        className="relative overflow-hidden shadow-2xl bg-black"
                                        animate={isSelected ? {
                                            width: "300px",
                                            height: "660px",
                                            borderRadius: "48px",
                                            x: "25vw", // Shift to right like WhatIsIt
                                            transition: { duration: 0.8, ease: "circOut" }
                                        } : {
                                            width: "95vw",
                                            height: "90vh",
                                            borderRadius: "4rem",
                                            x: 0
                                        }}
                                    >
                                        {/* Image */}
                                        <motion.img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                        {/* Notch (Visible only when selected) */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isSelected ? 1 : 0 }}
                                            className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-center gap-2"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                                            <div className="w-3/4 h-3/4 flex items-center justify-end pr-1">
                                                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                                            </div>
                                        </motion.div>


                                        {/* Content (Title/Play) - Fade out on Selection */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 w-full p-12 md:p-20 flex flex-col items-start"
                                            animate={{ opacity: isSelected ? 0 : 1 }}
                                        >
                                            <span className={`text-base md:text-lg font-sans uppercase tracking-[0.2em] mb-4 ${item.color}`}>
                                                Ambiance {index + 1}
                                            </span>
                                            <h3 className="text-5xl md:text-8xl font-display font-bold text-white leading-none mb-6">
                                                {item.title}
                                            </h3>

                                            {/* Play/Equalizer Button - CLICK HANDLER */}
                                            {/* Play Button - CLICK HANDLER */}
                                            <div
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveCardId(item.id);
                                                    // Auto-scroll to start of sequence (0.55) so user sees Step 1
                                                    if (targetRef.current) {
                                                        const rect = targetRef.current.getBoundingClientRect();
                                                        const absoluteTop = rect.top + window.scrollY;
                                                        const height = rect.height;
                                                        // Target: 0.55 progress
                                                        const targetY = absoluteTop + (height * 0.55);
                                                        window.scrollTo({ top: targetY, behavior: 'smooth' });
                                                    }
                                                }}
                                                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white cursor-pointer group"
                                            >
                                                <svg width="20" height="24" viewBox="0 0 14 16" fill="currentColor" className="ml-1 transition-transform group-hover:scale-110">
                                                    <path d="M12.5 6.70096C13.1667 7.08586 13.1667 8.04811 12.5 8.43301L2.75 14.0622C2.08333 14.4471 1.25 13.966 1.25 13.1961L1.25 1.93782C1.25 1.16795 2.08333 0.686824 2.75 1.07172L12.5 6.70096Z" />
                                                </svg>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* --- MOCKUP TEXT OVERLAY (Appears on Selection) --- */}
                <AnimatePresence>
                    {activeCardId && (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute left-[10vw] flex flex-col justify-center z-50 pointer-events-none"
                        >

                            {/* STEP 1: La musique se lance (0.55 - 0.70) */}
                            <motion.div
                                style={{
                                    opacity: useTransform(scrollYProgress, [0.55, 0.58, 0.70, 0.73], [0, 1, 1, 0]),
                                    filter: useTransform(scrollYProgress, [0.70, 0.73], ["blur(0px)", "blur(10px)"])
                                }}
                                className="absolute top-[35%] left-[10vw] max-w-xl z-50 pointer-events-none"
                            >
                                <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                                    La <span className="text-primitive-saffron-core">musique</span> se lance<br />et évolue.
                                </h2>
                                <p className="text-xl text-text-secondary leading-relaxed font-light">
                                    Chaque fragmnt contient de la musique originale pensée pour être modulée.
                                </p>
                            </motion.div>

                            {/* STEP 2: Aucune coupure (0.73 - 0.81) */}
                            <motion.div
                                style={{
                                    opacity: useTransform(scrollYProgress, [0.73, 0.76, 0.81, 0.84], [0, 1, 1, 0]),
                                    filter: useTransform(scrollYProgress, [0.73, 0.76, 0.81, 0.84], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"])
                                }}
                                className="absolute top-[40%] left-[10vw] max-w-xl z-50 pointer-events-none"
                            >
                                <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                                    Aucune <span className="text-primitive-orchid-core">coupure</span>.
                                </h2>
                                <p className="text-xl text-text-secondary leading-relaxed font-light">
                                    Ni silence. L'expérience est continue et fluide.
                                </p>
                            </motion.div>

                            {/* STEP 3: Aucune transition brutale (0.84 - 0.94) */}
                            <motion.div
                                style={{
                                    opacity: useTransform(scrollYProgress, [0.84, 0.87, 0.94, 0.97], [0, 1, 1, 0]),
                                    filter: useTransform(scrollYProgress, [0.84, 0.87, 0.94, 0.97], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"])
                                }}
                                className="absolute top-[45%] left-[10vw] max-w-xl z-50 pointer-events-none"
                            >
                                <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                                    Aucune <span className="text-primitive-mint-core">transition</span> brutale.
                                </h2>
                                <p className="text-xl text-text-secondary leading-relaxed font-light">
                                    Tout s'enchaine naturellement.
                                </p>
                            </motion.div>


                            {/* ACTION BUTTONS */}
                            <div className="flex gap-4 mt-8 pointer-events-auto">
                                <button
                                    onClick={() => setActiveCardId(null)}
                                    className="px-6 py-2 border border-white/20 rounded-full text-sm uppercase tracking-widest text-white/60 hover:text-white hover:border-white/60 transition-colors w-fit"
                                >
                                    Fermer
                                </button>

                                <a
                                    href="#how-it-works"
                                    className="px-6 py-2 bg-white text-black rounded-full text-sm uppercase tracking-widest hover:bg-white/90 transition-colors w-fit font-bold shadow-lg flex items-center gap-2"
                                >
                                    Découvrir
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L10.5 4.5L9.42857 3.42857L6 6.85714L2.57143 3.42857L1.5 4.5L6 9Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Influences;
