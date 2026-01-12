import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AudioManager from '../utils/AudioManager';

interface LoadingViewProps {
    onComplete?: () => void;
}

const LoadingView: React.FC<LoadingViewProps> = ({ onComplete }) => {
    const [isAudioReady, setIsAudioReady] = useState(false);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    // Initial check and listener for audio status
    useEffect(() => {
        // If ready immediately
        if (AudioManager.getInstance().checkReady()) {
            setIsAudioReady(true);
        } else {
            // Wait for it
            AudioManager.getInstance().waitForReady().then(() => {
                setIsAudioReady(true);
            });
        }
    }, []);

    // Check if both conditions are met
    useEffect(() => {
        if (isAudioReady && isAnimationComplete) {
            if (onComplete) onComplete();
        }
    }, [isAudioReady, isAnimationComplete, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background-primary"
            initial={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => setIsAnimationComplete(true)}
        >
            <div className="flex flex-col items-center gap-8 mb-20">
                {/* Platform Icons */}
                <motion.div
                    className="flex items-center gap-8 opacity-80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Apple Icon */}
                    <svg viewBox="0 0 384 512" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg>

                    {/* Android Icon */}
                    <svg viewBox="0 0 576 512" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" /></svg>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    className="text-white font-sans font-bold text-[4rem] md:text-[6rem] tracking-tighter leading-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    FRAGMNT
                </motion.h1>

                {/* Optional Loading Indicator if animation done but audio not ready */}
                <AnimatePresence>
                    {isAnimationComplete && !isAudioReady && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute -bottom-16"
                        >
                            <p className="text-white/50 text-sm font-light tracking-widest uppercase">Chargement...</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default LoadingView;
