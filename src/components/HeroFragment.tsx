import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../i18n';


// Image Imports
import islandImage from '../assets/fragmnt-island.jpg';
import islandeImage from '../assets/fragmnt-islande.jpg';
import desertImage from '../assets/fragmnt-desert.jpg';
import townImage from '../assets/fragmnt-town.jpg';
import europeImage from '../assets/fragmnt-europe.jpg';
import brutalismImage from '../assets/fragmnt-brutalism.jpg';
import jungleImage from '../assets/fragmnt-jungle.jpg';

const IMAGES = [
    { src: islandImage, alt: "Mysterious island landscape with fog" },
    { src: islandeImage, alt: "Cold icelandic coast landscape" },
    { src: desertImage, alt: "Warm desert dunes landscape" },
    { src: townImage, alt: "Quiet town street at dawn" },
    { src: europeImage, alt: "European city architecture details" },
    { src: brutalismImage, alt: "Abstract brutalist concrete structure" },
    { src: jungleImage, alt: "Deep green jungle vegetation" }
];

interface HeroProps {
    onStartAudio: () => void;
    isAudioStarted: boolean;
}

const HeroFragment: React.FC<HeroProps> = ({ onStartAudio, isAudioStarted }) => {
    const { t } = useTranslation();

    return (
        <section
            className="relative w-full bg-background-inverted text-text-inverted flex flex-col justify-between pt-12 overflow-hidden"
            style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
        >
            <div className="px-8 md:px-16 z-10 w-full flex flex-col items-center text-center mt-48 md:mt-32 pointer-events-none">
                <h1 className="text-2xl md:text-7xl font-bold max-w-5xl leading-tight mb-12 font-display">
                    {t('heroFragment.title')}<br />
                    <span className="text-text-inverted">{t('heroFragment.subtitle')}</span>
                </h1>
                <p className="text-base md:text-lg text-text-inverted font-display tracking-[0.2em] uppercase opacity-80">
                    {t('heroFragment.description')}
                </p>

                {/* Mobile CTA Button */}
                <AnimatePresence>
                    {!isAudioStarted && (
                        <motion.button
                            key="mobile-cta"
                            onClick={(e) => {
                                e.stopPropagation();
                                onStartAudio();
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: 10, transition: { duration: 0.5 } }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="md:hidden mt-16 
                                     px-6 py-3 border border-text-inverted/30 rounded-full
                                     text-text-inverted font-display 
                                     tracking-[0.15em] uppercase text-xs 
                                     pointer-events-auto
                                     hover:border-text-inverted hover:bg-text-inverted/5 
                                     transition-colors duration-300"
                        >
                            {t('heroFragment.tapForSound')}
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            <div className="relative w-full mt-auto hero-image-container" style={{ height: 'calc(var(--vh, 1vh) * 15)' }}>
                <style>{`
                    @media (min-width: 768px) {
                        .hero-image-container {
                            height: calc(var(--vh, 1vh) * 50) !important;
                        }
                    }
                `}</style>
                {/* 1. The Screen Mask: Turns background WHITE, leaves text as viewport to image */}
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 bg-white mix-blend-screen">
                    <h1 className="text-[18vw] leading-[0.8] font-black text-black tracking-tighter mb-4 font-display">FRAGMNT</h1>
                </div>

                {/* 2. The Tint Overlay: Turns the WHITE background into IVORY */}
                <div className="absolute inset-0 z-20 bg-background-inverted mix-blend-multiply pointer-events-none" />

                {/* Scroll Indicators - Corners */}
                <motion.div
                    className="absolute bottom-6 left-6 z-30 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-inverted">
                            <path d="M12 5L12 19M12 19L7 14M12 19L17 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute bottom-6 right-6 z-30 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-inverted">
                            <path d="M12 5L12 19M12 19L7 14M12 19L17 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                </motion.div>

                {/* 3. The Image layer (Bottom) */}
                <div className="absolute inset-0 flex items-end justify-center overflow-hidden z-0 pointer-events-none">
                    <motion.div
                        animate={{ x: [-50, 50, -50] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="w-[120%] h-full flex pt-0 md:pt-12"
                    >
                        {IMAGES.map((img, i) => (
                            <img
                                key={i}
                                src={img.src}
                                alt={img.alt}
                                fetchPriority="high"
                                loading="eager"
                                className="w-1/4 h-full object-cover grayscale contrast-125"
                            />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default HeroFragment;
