import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../i18n';

const DemoOutroCTA: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Text animation - fade in + move up
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const textY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

    // CTA button animation - fade in + move up (delayed)
    const ctaOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
    const ctaY = useTransform(scrollYProgress, [0.2, 0.6], [30, 0]);

    const handleCTAClick = () => {
        navigate('/follow');
    };

    return (
        <section
            ref={containerRef}
            className="w-full bg-background-primary relative flex items-center justify-center py-32 px-6"
        >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl text-center">
                {/* Text */}
                <motion.p
                    style={{ opacity: textOpacity, y: textY }}
                    className="text-2xl md:text-3xl font-light text-text-primary leading-relaxed tracking-wide"
                >
                    {t('demo.outro.text')}
                </motion.p>

                {/* CTA Button */}
                <motion.button
                    style={{ opacity: ctaOpacity, y: ctaY }}
                    onClick={handleCTAClick}
                    className="group relative px-8 py-4 border border-white/20 rounded-full bg-transparent hover:bg-white/5 transition-all duration-300 overflow-hidden"
                >
                    {/* Button glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/0 via-accent-primary/10 to-accent-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <span className="relative flex items-center gap-3 text-text-primary font-medium text-lg tracking-wide">
                        {t('demo.outro.cta')}
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </motion.button>
            </div>
        </section>
    );
};

export default DemoOutroCTA;
