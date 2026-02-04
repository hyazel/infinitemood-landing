import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AudioManager from '../utils/AudioManager';
import { VariantSmoke } from './loading-variants/CategoryC';
import { preloadImages } from '../utils/imagePreloader';

// Image Imports - same as HeroFragment
import islandImage from '../assets/fragmnt-island.jpg';
import islandeImage from '../assets/fragmnt-islande.jpg';
import desertImage from '../assets/fragmnt-desert.jpg';
import townImage from '../assets/fragmnt-town.jpg';
import europeImage from '../assets/fragmnt-europe.jpg';
import brutalismImage from '../assets/fragmnt-brutalism.jpg';
import jungleImage from '../assets/fragmnt-jungle.jpg';

const HERO_IMAGES = [islandImage, islandeImage, desertImage, townImage, europeImage, brutalismImage, jungleImage];

interface LoadingViewProps {
    onComplete?: () => void;
}

const LoadingView: React.FC<LoadingViewProps> = ({ onComplete }) => {
    const [isAudioReady, setIsAudioReady] = useState(false);
    const [isImagesReady, setIsImagesReady] = useState(false);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    // Preload audio assets
    useEffect(() => {
        if (AudioManager.getInstance().checkReady()) {
            setIsAudioReady(true);
        } else {
            AudioManager.getInstance().waitForReady().then(() => {
                setIsAudioReady(true);
            });
        }
    }, []);

    // Preload hero images
    useEffect(() => {
        preloadImages(HERO_IMAGES).then(() => {
            setIsImagesReady(true);
        });
    }, []);

    // Check if all conditions are met
    useEffect(() => {
        if (isAudioReady && isImagesReady && isAnimationComplete) {
            // Add a small delay after everything is ready
            const timer = setTimeout(() => {
                if (onComplete) onComplete();
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [isAudioReady, isImagesReady, isAnimationComplete, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background-primary overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }} // Custom ease for heavy curtain feel
        >
            {/* Render the selected variant: Smoke/Vapor */}
            <div className="w-full h-full">
                <VariantSmoke onComplete={() => setIsAnimationComplete(true)} />
            </div>

            {/* Platform Icons */}
            <motion.div
                className="absolute bottom-28 md:bottom-40 flex items-center gap-8 opacity-80"
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 0.8, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
            >
                {/* Apple Icon */}
                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white/80" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg>

                {/* Android Icon */}
                <svg viewBox="0 0 576 512" className="w-6 h-6 fill-white/80" xmlns="http://www.w3.org/2000/svg"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" /></svg>
            </motion.div>

            {/* Loading Indicator: Dot Grid (2x2) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 3 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 grid grid-cols-2 gap-1 pointer-events-none"
            >
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                            duration: 1.5 + Math.random(), // Random duration for each
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 0.5 // Random start delay
                        }}
                        className="w-2 h-2 flex items-center justify-center relative"
                    >
                        <div className="w-1 h-1 rounded-full bg-white/80" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default LoadingView;
