import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

                {/* Combined Sticky Wrapper - Initial Text + Hook */}
                <div ref={textWrapperRef} className="w-full relative" style={{ height: 'calc(var(--vh, 1vh) * 700)' }}>
                    <div className="sticky -translate-y-1/2 flex justify-center" style={{ top: 'calc(var(--vh, 1vh) * 45)' }}>

                        {/* Initial Text - Fades out */}
                        <ScrollFadeText scrollYProgress={revealProgress}>
                            <p className="text-2xl md:text-4xl font-light leading-relaxed font-display tracking-wide inline-block">
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

                        {/* Hook - Fades in after initial text fades out */}
                        <StickyHook scrollYProgress={revealProgress}>
                            <h2 className="text-5xl md:text-7xl font-display font-medium text-accent-primary leading-relaxed">
                                {t('outro.hook')}
                            </h2>
                        </StickyHook>
                    </div>
                </div>

                {/* Parallax CTA */}
                <ParallaxCTA scrollYProgress={revealProgress}>
                    <WeightScaleCTA t={t} />
                </ParallaxCTA>

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
    const endRange = 0.6;  // Finish reveal earlier so fade-out can happen after
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
// SCROLL FADE TEXT (Initial text that fades out)
// ===========================================
interface ScrollFadeTextProps {
    children: React.ReactNode;
    scrollYProgress: any;
}

const ScrollFadeText: React.FC<ScrollFadeTextProps> = ({ children, scrollYProgress }) => {
    // Fade out after text is fully revealed (60-75%)
    const opacity = useTransform(scrollYProgress, [0.6, 0.75], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.6, 0.75], [1, 0.95]);

    return (
        <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center w-full">
            <div className="max-w-4xl px-4 w-full">
                {children}
            </div>
        </motion.div>
    );
};

// ===========================================
// STICKY HOOK (Fades in after initial text)
// ===========================================
interface StickyHookProps {
    children: React.ReactNode;
    scrollYProgress: any;
}

const StickyHook: React.FC<StickyHookProps> = ({ children, scrollYProgress }) => {
    // Fade in AFTER initial text is completely gone (78-85%), then fade out before CTA arrives
    const opacity = useTransform(scrollYProgress, [0.78, 0.85, 0.94, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0.78, 0.85], [0.95, 1]);
    const y = useTransform(scrollYProgress, [0.9, 0.95], [0, -50]);

    return (
        <motion.div style={{ opacity, scale, y }} className="absolute inset-0 flex items-center justify-center">
            {children}
        </motion.div>
    );
};

// ===========================================
// PARALLAX CTA (Enters from below)
// ===========================================
interface ParallaxCTAProps {
    children: React.ReactNode;
    scrollYProgress: any;
}

const ParallaxCTA: React.FC<ParallaxCTAProps> = ({ children, scrollYProgress }) => {
    // Parallax effect - comes up from below
    const y = useTransform(scrollYProgress, [0.75, 1], [400, 0]);
    const opacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

    return (
        <motion.div style={{ y, opacity }} className="pb-20">
            {children}
        </motion.div>
    );
};

