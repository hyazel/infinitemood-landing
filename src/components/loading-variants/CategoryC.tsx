import React from 'react';
import { motion } from 'framer-motion';
import type { LoadingVariantProps } from './types';

const textStyle = "text-accent-secondary font-display font-bold text-[12vw] md:text-[8rem] tracking-tighter leading-none";

// Variant 11: Blur Focus
export const VariantBlurFocus: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <motion.h1
                className={textStyle}
                initial={{ filter: "blur(40px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                onAnimationComplete={onComplete}
            >
                FRAGMNT
            </motion.h1>
        </div>
    );
};

// Variant 12: Liquid Morph (Simulated with distinct parts merging with blur)
export const VariantLiquidMorph: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full bg-background-primary contrast-[20]">
            <motion.div
                className="relative flex items-center justify-center blur-[15px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onAnimationComplete={() => { if (onComplete) setTimeout(onComplete, 1500) }}
            >
                <motion.div
                    className={textStyle}
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    FRA
                </motion.div>
                <div className={textStyle}>G</div>
                <motion.div
                    className={textStyle}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    MNT
                </motion.div>
            </motion.div>
        </div>
    );
};

// Variant 13: Ghosting
export const VariantGhosting: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <div className="relative">
                <motion.h1
                    className={textStyle}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    onAnimationComplete={onComplete}
                >
                    FRAGMNT
                </motion.h1>
                {/* Ghosts */}
                {[1, 2, 3].map((i) => (
                    <motion.h1
                        key={i}
                        className={textStyle + " absolute top-0 left-0 mix-blend-plus-lighter"}
                        initial={{ opacity: 0, scale: 1 + i * 0.2 }}
                        animate={{ opacity: 0, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.1 * i, ease: "easeOut" }}
                        style={{ opacity: 0.3 }}
                    >
                        FRAGMNT
                    </motion.h1>
                ))}
            </div>
        </div>
    );
};

// Variant 14: Gradient Flow
export const VariantGradientFlow: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <motion.h1
                className={textStyle + " text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary via-white to-accent-secondary"}
                style={{ backgroundSize: "200% auto" }}
                initial={{ backgroundPosition: "100% center", opacity: 0 }}
                animate={{ backgroundPosition: "0% center", opacity: 1 }}
                transition={{ duration: 2, ease: "linear" }}
                onAnimationComplete={onComplete}
            >
                FRAGMNT
            </motion.h1>
        </div>
    );
};

// Variant 15: Smoke/Vapor (Simulated with staggered upward fade)
export const VariantSmoke: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <h1 className={textStyle + " flex"}>
                {"FRAGMNT".split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                            delay: i * 0.1 + Math.random() * 0.5
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
