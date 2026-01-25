import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from '../i18n';

const Outro = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const textWrapperRef = useRef<HTMLDivElement>(null);

    // isInView was removed as it is no longer used for the initial reveal logic which is now scroll-driven


    // Main section scroll - general use


    // Reveal scroll - specific to the text wrapper
    const { scrollYProgress: revealProgress } = useScroll({
        target: textWrapperRef,
        offset: ["start start", "end end"]
    });

    // Parallax for footer text (driven by main section scroll)



    const blurVariants: Variants = {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    return (
        // REMOVED overflow-hidden from section to allow sticky to work relative to window
        // min-h reduced as we have internal height providers now
        <section
            ref={containerRef}
            className="w-full bg-background-primary relative flex flex-col items-center pt-40 pb-20 px-6"
        >
            {/* Background Elements Container - now handles the overflow clipping */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Ambient Background Gradient */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#16131B] via-transparent to-transparent z-10" style={{ height: 'calc(var(--vh, 1vh) * 60)' }} />
                <div className="absolute left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-accent-primary/5 blur-[120px] rounded-full mix-blend-screen opacity-60" style={{ bottom: 'calc(var(--vh, 1vh) * -20)' }} />
            </div>


            {/* Content Container */}
            <div className="flex-1 flex flex-col items-center justify-center text-center max-w-6xl w-full z-20">

                {/* Sticky Text Wrapper - Tall container to drive the reveal */}
                {/* Height: 150vh ensures enough scroll distance for the lock without being excessive */}
                <div ref={textWrapperRef} className="w-full relative" style={{ height: 'calc(var(--vh, 1vh) * 150)' }}>
                    <div className="sticky -translate-y-1/2 flex justify-center" style={{ top: 'calc(var(--vh, 1vh) * 45)' }}>
                        <div className="max-w-4xl px-4">
                            <p className="text-2xl md:text-4xl font-light leading-relaxed text-center flex flex-wrap justify-center gap-y-2 font-display tracking-wide">
                                {(() => {
                                    const text = t('outro.text');
                                    const words = text.split(" ");
                                    let globalCharIndex = 0;
                                    const totalChars = text.length;

                                    return words.map((word, wordIndex) => {
                                        const wordEl = (
                                            <React.Fragment key={wordIndex}>
                                                <span className="whitespace-nowrap inline-flex">
                                                    {word.split("").map((char, charIndex) => {
                                                        const currentIndex = globalCharIndex;
                                                        globalCharIndex++;
                                                        return (
                                                            <ScrollRevealChar
                                                                key={`${wordIndex}-${charIndex}`}
                                                                char={char}
                                                                index={currentIndex}
                                                                total={totalChars}
                                                                scrollYProgress={revealProgress}
                                                            />
                                                        );
                                                    })}
                                                </span>
                                                {/* Add explicit space between words */}
                                                {wordIndex < words.length - 1 && (
                                                    <>
                                                        <span className="inline-block w-[0.35em]">{/* Space */}</span>
                                                        <span className="hidden"> </span>
                                                    </>
                                                )}
                                            </React.Fragment>
                                        );
                                        if (wordIndex < words.length - 1) globalCharIndex++;
                                        return wordEl;
                                    });
                                })()}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Following Content - Appears after the 150vh wrapper ends */}
                <motion.div
                    className="flex flex-col items-center gap-24 pb-20 pt-20" // Reduced top padding
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Hook */}
                    <motion.h2
                        variants={blurVariants}
                        className="text-5xl md:text-7xl font-display font-medium text-accent-primary leading-relaxed py-4"
                    >
                        Et ça s'entend.
                    </motion.h2>

                    {/* Glass Interaction Box */}
                    <motion.div
                        variants={blurVariants}
                        className="mt-12 p-5 md:p-4 md:pl-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] md:rounded-full flex flex-col md:flex-row items-center gap-4 md:gap-8 shadow-2xl hover:bg-white/10 transition-colors duration-500 group w-auto max-w-[85vw] md:max-w-none"
                    >
                        <div className="flex flex-col items-center md:items-start gap-1 w-full md:w-auto">
                            <span className="text-[9px] uppercase tracking-widest text-text-secondary font-bold group-hover:text-white transition-colors">{t('outro.stayInformed')}</span>
                            <input
                                type="email"
                                placeholder={t('outro.emailPlaceholder')}
                                className="bg-transparent border-none text-white placeholder-white/30 outline-none w-full md:w-64 text-base md:text-lg font-light text-center md:text-left py-1"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300 transform hover:rotate-45">
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="currentColor md:w-4 md:h-4">
                                    <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>


                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Outro;

interface ScrollRevealCharProps {
    char: string;
    index: number;
    total: number;
    scrollYProgress: any;
}

const ScrollRevealChar: React.FC<ScrollRevealCharProps> = ({ char, index, total, scrollYProgress }) => {
    // Reveal text across the wrapper's scroll (0 to 0.8 leaves 0.2 buffer at end)
    const startRange = 0.0;
    const endRange = 0.8;
    const step = (endRange - startRange) / total;

    const charStart = startRange + (index * step);
    const charEnd = charStart + step * 5; // Slight overlap for smoother feel

    // Opacity 0.1 -> 1
    const opacity = useTransform(scrollYProgress, [charStart, charEnd], [0.1, 1]);

    // Color: start transparent/dim, go to white/primary.
    // User asked for "text-primary" (white). 
    // Hero logic went from tertiary to primary. Let's do similar for elegance.
    // Assuming text-tertiary is #B2AA9F and text-primary is #F4EFE6 (or utilize CSS variables if preferred, but motion handles hex better)
    // Actually simpler: just opacity is enough for "appear", but user said "lettre par lettre son opacité".
    // I will keep color constant "text-text-primary" (via class) and just animate opacity 0.2->1

    return (
        <motion.span style={{ opacity }} className="text-white">
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
};
