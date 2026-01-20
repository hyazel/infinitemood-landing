import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Assets for Influences
import dioramaArchitecture from '../assets/diorama-architecture.jpg';
import dioramaNature from '../assets/diorama-nature.jpg';
import dioramaScene from '../assets/diorama-booknnok.jpg';
import dioramaImmersion from '../assets/diorama-3DIllustration.jpg';
import dioramaGraphisme from '../assets/diorama-graphisme.jpg';

const Influences: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // --- DATA ---
    const influenceSteps = [
        { id: 'nature', word: "LA NATURE", image: dioramaNature },
        { id: 'arch', word: "L'ARCHITECTURE", image: dioramaArchitecture },
        { id: 'game', word: "LE JEU VIDÉO", image: dioramaImmersion },
        { id: 'booknook', word: "LES BOOK NOOKS", image: dioramaScene },
        { id: 'illus', word: "L'ILLUSTRATION", image: dioramaGraphisme },
    ];

    // =========================================================================
    // ANIMATION TIMELINE (0.00 - 1.00)
    // Height maintained at 800vh
    // =========================================================================

    // --- 1. INTRO (0.00 - 0.20) ---
    const text1Opacity = useTransform(scrollYProgress, [0.02, 0.12], [1, 0]);
    const spotlightScale = useTransform(scrollYProgress, [0.02, 0.20], [1, 200]);
    const spotlightOpacity = useTransform(scrollYProgress, [0.02, 0.08, 0.20], [0, 1, 1]);

    const text2Opacity = useTransform(scrollYProgress, [0.12, 0.16, 0.20, 0.24], [0, 1, 1, 0]);
    const text2Blur = useTransform(scrollYProgress, [0.12, 0.16, 0.20, 0.24], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

    // --- 2. SEQUENCE (0.20 - 0.60) --- 
    const sequenceStart = 0.20;
    const sequenceEnd = 0.60; // Adjusted mainly for spacing
    const stepSize = (sequenceEnd - sequenceStart) / 5;

    // --- 3. CAPSULE VISIBILITY (0.20 - 0.65) ---
    const capsuleOpacity = useTransform(scrollYProgress, [0.20, 0.24, 0.60, 0.65], [0, 1, 1, 0]);
    const containerOpacity = useTransform(scrollYProgress, [0.20, 0.24, 0.60, 0.65], [0, 1, 1, 0]);
    const capsuleScale = useTransform(scrollYProgress, [0.20, 0.24, 0.60, 0.65], [0.8, 1, 1, 0.8]);
    const capsuleY = useTransform(scrollYProgress, [0.20, 0.30], ["20vh", "0vh"]);

    // --- 4. READING PHASE (0.65 - 0.90) ---
    // Transition to text reading
    const readingStart = 0.65;
    const readingEnd = 0.90;
    const sentence1 = "Nous croyons que la musique n'est pas juste un fond sonore,".split(" ");
    const sentence2 = "mais un espace où l'on peut rester, se promener, contempler.".split(" ");

    const getWordOpacity = (index: number, total: number, baseStart: number, baseEnd: number) => {
        const step = (baseEnd - baseStart) / total;
        const start = baseStart + step * index;
        return useTransform(scrollYProgress, [start, start + step / 2], [0, 1]);
    };

    // Text Visibility: 
    // 0.00 - 0.65: hidden
    // 0.65 - 0.90: Visible (reading)
    // 0.90 - 1.00: Fades out as background darkens
    const conclusionTextOpacity = useTransform(scrollYProgress, [0.00, 0.60, 0.65, 0.90, 0.95], [0, 0, 1, 1, 0]);

    // --- 5. END TRANSITION (0.90 - 1.00) ---
    // "Passage du white au dark"
    // We animate a dark overlay opacity to seamless transition to WhatIsItB (which is dark)
    const darkOverlayOpacity = useTransform(scrollYProgress, [0.90, 1.00], [0, 1]);

    return (
        <section ref={targetRef} className="relative h-[800vh] bg-background-primary overflow-clip z-30 -mt-[30vh]">
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
                        <h2 className="text-4xl md:text-8xl font-display italic font-light leading-[1] tracking-tighter text-text-inverted text-center">
                            Et se regardent
                        </h2>
                    </motion.div>
                </div>

                {/* --- MAIN SEQUENCE CAPSULE --- */}
                <motion.div
                    style={{
                        opacity: containerOpacity,
                        scale: capsuleScale,
                        y: capsuleY,
                    }}
                    className="relative w-[95vw] h-[90vh] max-w-[1800px] z-10 rounded-[4rem] overflow-hidden shadow-2xl bg-black"
                >
                    {/* IMAGES STACK (Intro Content) */}
                    <motion.div style={{ opacity: capsuleOpacity }} className="absolute inset-0 w-full h-full">
                        {influenceSteps.map((step, index) => {
                            const start = sequenceStart + (stepSize * index);
                            const nextStart = index < influenceSteps.length - 1 ? (sequenceStart + (stepSize * (index + 1))) : 1.0;

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
                                    const opacity = useTransform(scrollYProgress, [start, start + 0.02, nextStart, nextStart + 0.02], [0, 1, 1, 0]);
                                    const blur = useTransform(scrollYProgress, [start, start + 0.02, nextStart, nextStart + 0.02], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

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

                {/* --- CONCLUSION TEXT (Behind Caps) --- */}
                <motion.div
                    style={{ opacity: conclusionTextOpacity }}
                    className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-6 text-center"
                >
                    <div className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-display font-light leading-snug text-text-inverted flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                        {sentence1.map((word, i) => (
                            <motion.span
                                key={`s1-${i}`}
                                style={{ opacity: getWordOpacity(i, sentence1.length, readingStart, readingStart + 0.06) }}
                            >
                                {word}
                            </motion.span>
                        ))}
                        <br />
                        <span className="font-regular text-text-inverted/60 flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                            {sentence2.map((word, i) => (
                                <motion.span
                                    key={`s2-${i}`}
                                    style={{ opacity: getWordOpacity(i, sentence2.length, readingStart + 0.06, readingEnd) }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </span>
                    </div>
                </motion.div>

                {/* --- DARK TRANSITION OVERLAY --- */}
                {/* Covers everything at the end to match WhatIsItB background */}
                <motion.div
                    style={{ opacity: darkOverlayOpacity }}
                    className="absolute inset-0 z-40 bg-[#16131B] pointer-events-none"
                />

            </div>
        </section>
    );
};

export default Influences;
