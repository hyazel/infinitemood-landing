import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '../i18n';

const Manifesto: React.FC = () => {
    const { t } = useTranslation();
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // --- SEQUENCE DEFINITIONS ---
    // Total Scroll Height: 300vh or 400vh
    // Segments:
    // 0.0 - 0.2: Intro ("Fragmnt est...")
    // 0.25 - 0.4: "Sans playlists."
    // 0.45 - 0.6: "Sans streaming."
    // 0.65 - 0.8: "Sans IA."
    // 0.85 - 1.0: Hold / Fade out for next section

    // Text 1: Intro
    // Text 1: Intro - Visible immediately from start
    const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.2, 0.25], [1, 1, 1, 0]);
    const text1Y = useTransform(scrollYProgress, [0, 0.25], [0, -20]);

    // Text 2: Sans playlists
    const text2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.4, 0.45], [0, 1, 1, 0]);
    const text2Scale = useTransform(scrollYProgress, [0.25, 0.45], [0.9, 1.1]);

    // Text 3: Sans streaming
    const text3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.6, 0.65], [0, 1, 1, 0]);
    const text3Scale = useTransform(scrollYProgress, [0.45, 0.65], [0.9, 1.1]);

    // Text 4: Sans IA
    // Stays visible longer or fades out right before the white section overlaps
    const text4Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 0.95], [0, 1, 1, 0]);
    const text4Scale = useTransform(scrollYProgress, [0.65, 0.95], [0.9, 1.2]);
    const text4Color = useTransform(scrollYProgress, [0.75, 0.95], ["#F4EFE6", "#E35AB8"]); // Fade to accent?

    return (
        <section ref={targetRef} className="relative h-[350vh] bg-background-primary z-20">
            <div className="sticky top-0 h-[100dvh] flex items-center justify-center overflow-hidden px-6">

                {/* Text 1 */}
                <motion.div
                    style={{ opacity: text1Opacity, y: text1Y }}
                    className="absolute text-center max-w-4xl"
                >
                    <p className="text-3xl md:text-5xl font-display font-light text-text-primary leading-tight">
                        {t('manifesto.intro')}
                    </p>
                </motion.div>

                {/* Text 2 */}
                <motion.div
                    style={{ opacity: text2Opacity, scale: text2Scale }}
                    className="absolute text-center"
                >
                    <p className="text-4xl md:text-7xl font-display font-bold text-text-primary tracking-tight">
                        {t('manifesto.noPlaylists')}
                    </p>
                </motion.div>

                {/* Text 3 */}
                <motion.div
                    style={{ opacity: text3Opacity, scale: text3Scale }}
                    className="absolute text-center"
                >
                    <p className="text-4xl md:text-7xl font-display font-bold text-text-primary tracking-tight">
                        {t('manifesto.noStreaming')}
                    </p>
                </motion.div>

                {/* Text 4 */}
                <motion.div
                    style={{ opacity: text4Opacity, scale: text4Scale, color: text4Color }}
                    className="absolute text-center"
                >
                    <p className="text-5xl md:text-9xl font-display font-bold tracking-tighter">
                        {t('manifesto.noAI')}
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Manifesto;
