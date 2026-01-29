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

                {/* Following Content */}
                <motion.div
                    className="flex flex-col items-center gap-24 pb-20 pt-20"
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
                        {t('outro.hook')}
                    </motion.h2>

                    {/* Weight Scale Newsletter CTA */}
                    <WeightScaleCTA t={t} />
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
