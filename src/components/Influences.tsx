import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from 'framer-motion';
import dioramaArchitecture from '../assets/diorama-architecture.jpg';
import dioramaNature from '../assets/diorama-nature.jpg';
import dioramaScene from '../assets/diorama-booknnok.jpg'; // Assuming this is Scène de vie
import dioramaImmersion from '../assets/diorama-3DIllustration.jpg';
import dioramaGraphisme from '../assets/diorama-graphisme.jpg';

const InfluenceWordReveal = ({ word, index, totalWords, scrollYProgress, isHighlight = false }: { word: string, index: number, totalWords: number, scrollYProgress: any, isHighlight?: boolean }) => {
    // Range calculation:
    // Text enters viewport ~0.28, centers ~0.44.
    // We want animation to complete by 0.45.
    // Start slightly after entry: 0.32.
    // Duration per word stagger.

    // Range calculation:
    // Text enters viewport ~0.23, centers ~0.36.
    // We want animation to complete by 0.35/0.36 so it's fully clear at center.
    // Start animation around 0.25 (just after entry).

    // Global sequence range: 0.25 to 0.36 (0.11 spread)
    const sequenceStart = 0.25;
    const sequenceDuration = 0.11;

    const step = sequenceDuration / totalWords;
    const start = sequenceStart + (index * step);
    const end = start + (step * 2); // Quick fade per word

    const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]); // Start at 0.2 as requested
    const blur = useTransform(scrollYProgress, [start, end], ["blur(4px)", "blur(0px)"]);
    const y = useTransform(scrollYProgress, [start, end], [10, 0]);

    return (
        <motion.span
            style={{ opacity, filter: blur, y }}
            className={`inline-block mr-[0.25em] ${isHighlight ? "text-primitive-mint-core" : ""}`}
        >
            {word}
        </motion.span>
    );
};

const ManifestoWordReveal = ({ word, index, totalWords, scrollYProgress, isHighlight = false }: { word: string, index: number, totalWords: number, scrollYProgress: any, isHighlight?: boolean }) => {
    // Range calculation:
    // Locked phase starts at 0.8.
    // Animation range: 0.82 to 0.98.
    const sequenceStart = 0.82;
    const sequenceDuration = 0.16;

    const step = sequenceDuration / totalWords;
    const start = sequenceStart + (index * step);
    const end = start + (step * 2); // Quick fade per word

    const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]); // Opacity only, no blur

    return (
        <motion.span
            style={{ opacity }}
            className={`inline-block mr-[0.25em] ${isHighlight ? "text-primitive-mint-core" : ""}`}
        >
            {word}
        </motion.span>
    );
};

const Influences: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Move horizontally to showing all slides.
    // Container is now wider (210vw) to accommodate text insert.
    // Total Width: 100vw (Title) + 210vw (Gallery) + 100vw (Quote) = 410vw
    // Scroll Distance: 410vw - 100vw = 310vw
    // Ratio: 310 / 410 = ~75.6%
    // Update: Lock movement at 0.8 to allow for text animation at the end.
    const x = useTransform(scrollYProgress, [0, 0.8], ["0%", "-75.6%"]);

    // Curve Drawing Animation
    // Draw from 0 to 1 as we scroll.
    const drawProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section ref={targetRef} className="relative h-[450vh] bg-background-primary">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                <motion.div style={{ x }} className="flex h-full items-center">

                    {/* --- SLIDE 1: Title --- */}
                    <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-12 md:px-24">
                        <div className="max-w-4xl">
                            <h2 className="text-5xl md:text-8xl font-display font-medium text-text-primary leading-[1.05] tracking-tight">
                                Des ambiances qui <br />
                                <span className="text-primitive-mint-core italic font-light ">se regardent aussi</span>
                            </h2>
                        </div>
                    </div>

                    {/* --- SLIDE 2: Image Stream ("Mind Map") --- */}
                    {/* Width 210vw. Using coordinate system 0-100 for perfect alignment. */}
                    <div className="w-[210vw] h-screen flex-shrink-0 relative flex items-center justify-center">
                        {/* Decorative Line: Defined in 0-100 coordinate space to match image centers */}
                        {/* Decorative Line: Defined in 400x100 coordinate space to match aspect ratio */}
                        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 400 100" preserveAspectRatio="none" style={{ zIndex: 0 }}>
                            {/* Animate stroke drawing */}
                            <motion.path
                                d="M 0,50 C 20,50 20,30 40,30 C 72,30 72,70 104,70 C 136,70 136,50 168,50 C 200,50 200,30 232,30 C 264,30 264,70 296,70 C 328,70 328,30 360,30 C 380,30 380,50 400,50"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.4"
                                className="text-text-tertiary opacity-50"
                                style={{ pathLength: drawProgress }}
                            />
                        </svg>

                        {/* 1. Architecture: Center at (10%, 30%) */}
                        <InfluenceImage src={dioramaArchitecture} className="absolute top-[30%] left-[10%] -translate-x-1/2 -translate-y-1/2 w-48 md:w-64" rotation={-5} label="Architecture" scrollYProgress={scrollYProgress} />

                        {/* 2. Nature: Center at (26%, 70%) */}
                        <InfluenceImage src={dioramaNature} className="absolute top-[70%] left-[26%] -translate-x-1/2 -translate-y-1/2 w-40 md:w-56" rotation={5} label="Nature" scrollYProgress={scrollYProgress} />

                        {/* --- TEXT INSERTION: Center at (42%, 50%) --- */}
                        <div className="absolute top-[50%] left-[42%] -translate-x-1/2 -translate-y-1/2 max-w-sm text-center z-10">
                            <p className="text-2xl md:text-4xl font-display font-light text-text-primary leading-tight">
                                {"Fragmnt s’inspire de ces univers pour associer musique et".split(" ").map((word, i, arr) => (
                                    <InfluenceWordReveal
                                        key={i}
                                        word={word}
                                        index={i}
                                        totalWords={arr.length + 4} // Add buffer for the highlighted part
                                        scrollYProgress={scrollYProgress}
                                    />
                                ))}
                                {" "}
                                <span className="text-primitive-mint-core inline-block">
                                    {"scènes imaginaires en 3D.".split(" ").map((word, i) => (
                                        <InfluenceWordReveal
                                            key={`highlight-${i}`}
                                            word={word}
                                            index={i + 9} // Offset by previous words count (approx)
                                            totalWords={13}
                                            scrollYProgress={scrollYProgress}
                                            isHighlight
                                        />
                                    ))}
                                </span>
                            </p>
                        </div>

                        {/* 3. Scène de vie: Center at (58%, 30%) */}
                        <InfluenceImage src={dioramaScene} className="absolute top-[30%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 z-20" rotation={-3} label="Book Nook" scrollYProgress={scrollYProgress} />

                        {/* 4. Immersion: Center at (74%, 70%) */}
                        <InfluenceImage src={dioramaImmersion} className="absolute top-[70%] left-[74%] -translate-x-1/2 -translate-y-1/2 w-60 md:w-80" rotation={6} label="Illustration 3D" scrollYProgress={scrollYProgress} />

                        {/* 5. Graphisme: Center at (90%, 30%) */}
                        <InfluenceImage src={dioramaGraphisme} className="absolute top-[30%] left-[90%] -translate-x-1/2 -translate-y-1/2 w-48 md:w-64" rotation={-4} label="Graphisme" scrollYProgress={scrollYProgress} />
                    </div>

                    {/* --- SLIDE 3: Conclusion --- */}
                    <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-12 md:px-24 bg-background-primary relative z-10">
                        <div className="max-w-4xl space-y-8 text-center md:text-left">
                            <h3 className="text-3xl md:text-5xl font-display font-light text-text-primary leading-snug">
                                {"Nous croyons que la musique n'est pas juste un fond sonore, mais un".split(" ").map((word, i, arr) => (
                                    <ManifestoWordReveal
                                        key={i}
                                        word={word}
                                        index={i}
                                        totalWords={arr.length + 8} // Add buffer
                                        scrollYProgress={scrollYProgress}
                                    />
                                ))}
                                {" "}
                                <span className="text-primitive-mint-core inline-block">
                                    {"espace".split(" ").map((word, i) => (
                                        <ManifestoWordReveal
                                            key={`highlight-${i}`}
                                            word={word}
                                            index={i + 14}
                                            totalWords={22}
                                            scrollYProgress={scrollYProgress}
                                            isHighlight
                                        />
                                    ))}
                                </span>
                                {" "}
                                {"où l'on peut rester, se promener, contempler.".split(" ").map((word, i) => (
                                    <ManifestoWordReveal
                                        key={`end-${i}`}
                                        word={word}
                                        index={i + 15}
                                        totalWords={22}
                                        scrollYProgress={scrollYProgress}
                                    />
                                ))}
                            </h3>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Influences;

// Helper Component for consistency
const InfluenceImage = ({ src, className, rotation, label, scrollYProgress }: { src: string, className?: string, rotation: number, label?: string, scrollYProgress: any }) => {
    const ref = useRef<HTMLDivElement>(null);
    const blur = useMotionValue("blur(10px)");
    const opacity = useMotionValue(0.4);
    const zIndex = useMotionValue(10);

    // Dynamic focus calculation
    useMotionValueEvent(scrollYProgress, "change", () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            // Focus point: Right third of the screen (approx 66%)
            const focusPoint = window.innerWidth * 0.66;
            const elementCenter = rect.left + rect.width / 2;

            // Calculate signed distance
            // Positive: Element is to the right of focus point (coming in)
            // Negative: Element is to the left of focus point (in focus zone)
            const offset = elementCenter - focusPoint;

            // User request: Keep images deblurred once they pass the focus point.
            // So if offset is negative (passed), we treat distance as 0 (full focus).
            const effectiveDistance = Math.max(0, offset);

            // Logic:
            // < 200px from center (or passed): Perfect focus
            // > 800px from center (incoming): Full blur/low opacity

            // Map distance [0, 800] to blur [0, 10]
            const blurVal = Math.min(Math.max((effectiveDistance / 500) * 10, 0), 10);

            // Map distance [0, 800] to opacity [1, 0.4]
            const opVal = Math.min(Math.max(1 - (effectiveDistance / 800) * 0.6, 0.4), 1);

            blur.set(`blur(${blurVal}px)`);
            opacity.set(opVal);
        }
    });

    return (
        <div className={`flex flex-col gap-3 ${className}`} ref={ref}>
            {label && (
                <motion.span
                    style={{ opacity }}
                    className="text-xs font-mono tracking-widest uppercase text-text-tertiary/70 ml-2 transition-opacity duration-300"
                >
                    {label}
                </motion.span>
            )}
            <motion.div
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                style={{ rotate: rotation, filter: blur, opacity, zIndex }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer"
            >
                <div className="overflow-hidden rounded-sm shadow-xl bg-black/50">
                    <img
                        src={src}
                        alt={label || "Inspiration"}
                        className="w-full h-auto object-cover transition-all duration-500 grayscale-[20%] group-hover:grayscale-0"
                    />
                </div>
            </motion.div>
        </div>
    );
};

