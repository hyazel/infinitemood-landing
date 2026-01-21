import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { LoadingVariantProps } from './types';

const textStyle = "text-accent-secondary font-display font-bold text-[12vw] md:text-[8rem] tracking-tighter leading-none";

// Variant 6: Cyber Glitch
export const VariantCyberGlitch: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <motion.div
                className={textStyle + " relative"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onAnimationComplete={onComplete}
            >
                <span className="relative z-10 mix-blend-screen">FRAGMNT</span>
                {/* Red Channel */}
                <motion.span
                    className="absolute top-0 left-0 z-0 text-red-500 opacity-70 mix-blend-screen"
                    animate={{ x: [-2, 2, -1, 3, 0], opacity: [0, 0.8, 0.4, 0.9, 0] }}
                    transition={{ duration: 0.4, repeat: 4, repeatType: "reverse" }}
                >
                    FRAGMNT
                </motion.span>
                {/* Blue Channel */}
                <motion.span
                    className="absolute top-0 left-0 z-0 text-cyan-500 opacity-70 mix-blend-screen"
                    animate={{ x: [2, -2, 1, -3, 0], opacity: [0, 0.8, 0.4, 0.9, 0] }}
                    transition={{ duration: 0.4, repeat: 4, repeatType: "reverse", delay: 0.1 }}
                >
                    FRAGMNT
                </motion.span>
            </motion.div>
        </div>
    );
};

// Variant 7: Console Terminal
export const VariantConsole: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    const fullText = "FRAGMNT";
    const [displayed, setDisplayed] = useState("");

    // Simulate typing
    React.useEffect(() => {
        let current = "";
        let i = 0;
        const interval = setInterval(() => {
            current += fullText[i];
            setDisplayed(current);
            i++;
            if (i >= fullText.length) {
                clearInterval(interval);
                if (onComplete) setTimeout(onComplete, 500);
            }
        }, 150);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <h1 className={textStyle}>
                <span className="font-mono">{displayed}</span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-[0.5em] h-[1em] bg-accent-secondary ml-1 align-middle"
                />
            </h1>
        </div>
    );
};

// Variant 8: Pixelate (Simulated with scaling/filter)
export const VariantPixelate: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <motion.h1
                className={textStyle}
                initial={{ filter: "blur(20px)", scale: 0.8, opacity: 0 }}
                animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "linear" }}
                onAnimationComplete={onComplete}
            >
                FRAGMNT
            </motion.h1>
            {/* Overlay grid to enhance pixel effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "4px 4px" }}
            />
        </div>
    );
};

// Variant 9: Scanline
export const VariantScanline: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
            <h1 className={textStyle + " opacity-20"}>FRAGMNT</h1>
            <motion.div
                className="absolute inset-0 flex items-center justify-center overflow-hidden"
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "linear" }}
                onAnimationComplete={onComplete}
            >
                <h1 className={textStyle}>FRAGMNT</h1>
                {/* Scanline bar */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-accent-secondary shadow-[0_0_20px_rgba(240,64,191,0.8)]" />
            </motion.div>
        </div>
    );
};

// Variant 10: Binary Decode
export const VariantBinaryDecode: React.FC<LoadingVariantProps> = ({ onComplete }) => {
    const target = "FRAGMNT";
    const [text, setText] = useState("0101010");

    React.useEffect(() => {
        let iterations = 0;
        const interval = setInterval(() => {
            setText(() =>
                target.split("").map((char, i) => {
                    if (i < iterations) return char;
                    return Math.random() > 0.5 ? "0" : "1";
                }).join("")
            );

            if (iterations >= target.length) {
                clearInterval(interval);
                if (onComplete) onComplete();
            }
            iterations += 1 / 3; // Slow down "locking" speed
        }, 50);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <h1 className={textStyle + " font-mono tracking-widest"}>
                {text}
            </h1>
        </div>
    );
};
