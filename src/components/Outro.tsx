import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from '../i18n';
import WeightScaleCTA from './Newsletter/WeightScaleCTA';

const Outro = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const textWrapperRef = useRef<HTMLDivElement>(null);

    // Reveal scroll - specific to the text wrapper
    const { scrollYProgress: revealProgress } = useScroll({
        target: textWrapperRef,
        offset: ["start start", "end end"]
    });

    const zoomInVariants: Variants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5, ease: "easeOut" }
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section
            ref={containerRef}
            className="w-full bg-background-primary relative flex flex-col items-center pt-40 pb-20 px-6"
        >
            {/* Background Elements Container */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#16131B] via-transparent to-transparent z-10" style={{ height: 'calc(var(--vh, 1vh) * 60)' }} />
                <div className="absolute left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-accent-primary/5 blur-[120px] rounded-full mix-blend-screen opacity-60" style={{ bottom: 'calc(var(--vh, 1vh) * -20)' }} />
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col items-center justify-center text-center max-w-6xl w-full z-20">

                {/* Sticky Text Wrapper */}
                <div ref={textWrapperRef} className="w-full relative" style={{ height: 'calc(var(--vh, 1vh) *500)' }}>
                    <div className="sticky -translate-y-1/2 flex justify-center" style={{ top: 'calc(var(--vh, 1vh) * 45)' }}>
                        <ScrollFadeText scrollYProgress={revealProgress}>
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
                        </ScrollFadeText>
                    </div>
                </div>

                {/* Following Content */}
                <motion.div
                    className="flex flex-col items-center gap-96 pb-20 pt-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                >
                    {/* Hook */}
                    <motion.h2
                        variants={zoomInVariants}
                        className="text-5xl md:text-7xl font-display font-medium text-accent-primary leading-relaxed py-4"
                    >
                        {t('outro.hook')}
                    </motion.h2>

                    {/* Weight Scale Newsletter CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    >
                        <WeightScaleCTA t={t} />
                    </motion.div>
                </motion.div>

            </div>

        </section>
    );
};

export default Outro;

// ===========================================
// SCROLL REVEAL CHAR
// ===========================================
interface ScrollRevealCharProps {
    char: string;
    index: number;
    total: number;
    scrollYProgress: any;
}

const ScrollRevealChar: React.FC<ScrollRevealCharProps> = ({ char, index, total, scrollYProgress }) => {
    const startRange = 0.0;
    const endRange = 0.8;
    const step = (endRange - startRange) / total;

    const charStart = startRange + (index * step);
    const charEnd = charStart + step * 5;

    const opacity = useTransform(scrollYProgress, [charStart, charEnd], [0.1, 1]);

    return (
        <motion.span style={{ opacity }} className="text-white">
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
};

// ===========================================
// SCROLL FADE TEXT (Zoom Out)
// ===========================================
interface ScrollFadeTextProps {
    children: React.ReactNode;
    scrollYProgress: any;
}

const ScrollFadeText: React.FC<ScrollFadeTextProps> = ({ children, scrollYProgress }) => {
    // Fade out and zoom at the end of scroll
    const opacity = useTransform(scrollYProgress, [0.7, 0.95], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.7, 0.95], [1, 1.05]);

    return (
        <motion.div style={{ opacity, scale }} className="max-w-4xl px-4">
            {children}
        </motion.div>
    );
};
