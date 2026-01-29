import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';


// Image Imports
import islandImage from '../assets/fragmnt-island.jpg';
import islandeImage from '../assets/fragmnt-islande.jpg';
import desertImage from '../assets/fragmnt-desert.jpg';
import townImage from '../assets/fragmnt-town.jpg';
import europeImage from '../assets/fragmnt-europe.jpg';
import brutalismImage from '../assets/fragmnt-brutalism.jpg';
import jungleImage from '../assets/fragmnt-jungle.jpg';

const IMAGES = [islandImage, islandeImage, desertImage, townImage, europeImage, brutalismImage, jungleImage];

interface HeroProps {
    onExplore: () => void;
}

const HeroFragment: React.FC<HeroProps> = ({ onExplore }) => {
    const { t } = useTranslation();

    return (
        <section className="relative w-full bg-background-inverted text-text-inverted flex flex-col justify-between pt-12 overflow-hidden" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
            <div className="px-8 md:px-16 z-10 w-full flex flex-col items-center text-center mt-24 md:mt-32">
                <h1 className="text-2xl md:text-7xl font-bold max-w-5xl leading-tight mb-12 font-display">
                    {t('heroFragment.title')}<br />
                    <span className="text-text-inverted">{t('heroFragment.subtitle')}</span>
                </h1>
                <p className="text-base md:text-lg text-text-inverted font-display tracking-[0.2em] uppercase opacity-80">
                    {t('heroFragment.description')}
                </p>
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

                {/* 3. The Image layer (Bottom) */}
                <div className="absolute inset-0 flex items-end justify-center overflow-hidden z-0">
                    <motion.div
                        animate={{ x: [-50, 50, -50] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="w-[120%] h-full flex pt-0 md:pt-12"
                    >
                        {IMAGES.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                className="w-1/4 h-full object-cover grayscale contrast-125"
                            />
                        ))}
                    </motion.div>
                </div>
                <button onClick={onExplore} className="absolute bottom-32 md:bottom-[18vw] left-1/2 -translate-x-1/2 z-20 bg-background-primary text-text-primary px-8 py-3 rounded-full uppercase text-xs font-bold hover:scale-105 hover:bg-primitive-saffron-core hover:text-text-inverted transition-all shadow-xl">
                    {t('heroFragment.exploreBtn')}
                </button>


            </div>
        </section>
    );
};

export default HeroFragment;
