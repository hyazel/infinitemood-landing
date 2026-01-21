import React from 'react';
import { motion } from 'framer-motion';
import type { LoadingVariantProps } from './types';

const textStyle = "text-accent-secondary font-display font-bold text-[12vw] md:text-[8rem] tracking-tighter leading-none";

// Variant 1: Original Tri-Split
export const VariantTriSplit: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <motion.span
                className={textStyle}
                initial={{ x: "-40vw", y: "-35vh", rotate: -10, opacity: 0 }}
                animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
                FRA
            </motion.span>
            <motion.span
                className={textStyle}
                initial={{ scale: 1.5, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
                GM
            </motion.span>
            <motion.span
                className={textStyle}
                initial={{ x: "40vw", y: "35vh", rotate: 10, opacity: 0 }}
                animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                onAnimationComplete={onComplete}
            >
                NT
            </motion.span>
        </div>
    );
};

// Variant 2: Vertical Slice
export const VariantVerticalSlice: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
            <div className="relative">
                {/* Top Half */}
                <div className="overflow-hidden h-[0.55em]">
                    <motion.div
                        className={textStyle}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        FRAGMNT
                    </motion.div>
                </div>
                {/* Bottom Half */}
                <div className="overflow-hidden h-[0.55em] -mt-[0.05em]">
                    <motion.div
                        className={textStyle}
                        style={{ marginTop: "-0.54em" }}
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        onAnimationComplete={onComplete}
                    >
                        FRAGMNT
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Variant 3: Typewriter (Random Order)
export const VariantTypewriter: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    const text = "FRAGMNT";
    const indices = [0, 6, 3, 1, 5, 2, 4]; // Random appearance order

    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <h1 className={textStyle + " flex"}>
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: indices.indexOf(i) * 0.15 }}
                        onAnimationComplete={i === 4 ? onComplete : undefined} // 4 is the last index in my random array
                    >
                        {char}
                    </motion.span>
                ))}
            </h1>
        </div>
    );
};

// Variant 4: Explosion (Z-space scale)
export const VariantExplosion: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full perspective-1000">
            <h1 className={textStyle + " flex"}>
                {"FRAGMNT".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 10, filter: "blur(10px)", z: 500 }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)", z: 0 }}
                        transition={{
                            duration: 1.5,
                            ease: [0.22, 1, 0.36, 1],
                            delay: i * 0.05
                        }}
                        onAnimationComplete={i === 6 ? onComplete : undefined}
                    >
                        {char}
                    </motion.span>
                ))}
            </h1>
        </div>
    );
};

// Variant 5: Kerning Stretch
export const VariantKerningStretch: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <motion.h1
                className={textStyle + " whitespace-nowrap"}
                initial={{ letterSpacing: "2em", opacity: 0, filter: "blur(10px)" }}
                animate={{ letterSpacing: "-0.05em", opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                onAnimationComplete={onComplete}
            >
                FRAGMNT
            </motion.h1>
        </div>
    );
};
