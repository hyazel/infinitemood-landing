import React from 'react';
import { motion } from 'framer-motion';
import type { LoadingVariantProps } from './types';

const textStyle = "text-accent-secondary font-display font-bold text-[12vw] md:text-[8rem] tracking-tighter leading-none";

// Variant 16: Mask Reveal
export const VariantMaskReveal: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <div className="relative overflow-hidden p-4">
                <motion.h1
                    className={textStyle}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    onAnimationComplete={onComplete}
                >
                    FRAGMNT
                </motion.h1>
            </div>
        </div>
    );
};

// Variant 17: Line Draw (SVG Stroke)
export const VariantLineDraw: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <svg className="w-[80vw] md:w-[60vw]" viewBox="0 0 400 100">
                <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-display font-bold text-6xl tracking-tighter fill-transparent stroke-accent-secondary stroke-2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    onAnimationComplete={onComplete}
                >
                    FRAGMNT
                </motion.text>
                <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-display font-bold text-6xl tracking-tighter fill-accent-secondary stroke-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                />
            </svg>
        </div>
    );
};

// Variant 18: Flip Card
export const VariantFlipCard: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full perspective-1000">
            <h1 className={textStyle + " flex"}>
                {"FRAGMNT".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ rotateX: 180, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: i * 0.1, type: "spring", stiffness: 100 }}
                        onAnimationComplete={i === 6 ? onComplete : undefined}
                    >
                        {char}
                    </motion.span>
                ))}
            </h1>
        </div>
    );
};

// Variant 19: Elastic Snap
export const VariantElasticSnap: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <motion.h1
                className={textStyle}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    mass: 1.2
                }}
                onAnimationComplete={onComplete}
            >
                FRAGMNT
            </motion.h1>
        </div>
    );
};

// Variant 20: Negative Space
export const VariantNegativeSpace: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <motion.div
                className="bg-accent-secondary flex items-center justify-center overflow-hidden"
                initial={{ width: "0px", height: "4px" }}
                animate={{ width: "100%", height: "100%" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                onAnimationComplete={() => { if (onComplete) setTimeout(onComplete, 500) }}
            >
                <motion.h1
                    className="font-display font-bold text-[12vw] md:text-[8rem] tracking-tighter leading-none text-background-primary"
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    FRAGMNT
                </motion.h1>
            </motion.div>
        </div>
    );
};
