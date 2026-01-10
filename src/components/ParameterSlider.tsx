import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Droplets, CloudRain, CloudLightning } from 'lucide-react';

interface ParameterSliderProps {
    initialValue?: number;
    onValueChange?: (level: number) => void;
    isOpen?: boolean;
    onClose?: () => void;
}

const ParameterSlider: React.FC<ParameterSliderProps> = ({
    initialValue = 0,
    onValueChange,
    isOpen = false
}) => {
    const [level, setLevel] = useState(initialValue);
    const sliderRef = useRef<HTMLDivElement>(null);

    // Level 0 (Bottom) -> Level 3 (Top)
    // We map pixels or just use clickable areas.
    // 4 Steps.

    const handleTrackClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const height = rect.height;
        const clickY = e.clientY - rect.top; // Y relative to top

        // Invert: Bottom is 0.
        // 0-25% -> 3 (Top)
        const pct = clickY / height;
        let newLevel = 0;
        if (pct < 0.25) newLevel = 3;
        else if (pct < 0.50) newLevel = 2;
        else if (pct < 0.75) newLevel = 1;
        else newLevel = 0;

        setLevel(newLevel);
        if (onValueChange) onValueChange(newLevel);
    };

    // Icon Logic
    const getIcon = () => {
        switch (level) {
            case 3: return <CloudLightning className="w-6 h-6 text-white" />;
            case 2: return <CloudRain className="w-6 h-6 text-white" />;
            case 1: return <Cloud className="w-6 h-6 text-white" />;
            default: return <Droplets className="w-6 h-6 text-white" />; // Fallback or "Calm"
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute z-50 flex flex-col items-center gap-4"
                    style={{
                        top: '50%',
                        left: '100%',
                        marginLeft: '24px',
                        transform: 'translateY(-50%)' // Handled by motion, but we need base position
                    }}
                // Note: Framer motion transform overrides, so we should wrap in a positioned div or use `y` in spring correctly.
                // Better: Use className for positioning, Framer for entry.
                >
                    {/* Slider Track (Glassmorphism) */}
                    <div
                        ref={sliderRef}
                        className="relative w-16 h-64 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl cursor-pointer overflow-hidden"
                        onClick={handleTrackClick}
                    >
                        {/* Steps Indicators */}
                        <div className="absolute inset-0 flex flex-col items-center justify-between py-8 pointer-events-none">
                            {[3, 2, 1, 0].map((s) => (
                                <div key={s} className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            ))}
                        </div>

                        {/* Active Thumb (Crystal Glow) */}
                        <motion.div
                            className="absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center p-1"
                            animate={{
                                top: `${(3 - level) * 25 + 10}%` // Approx positioning: 0->85%, 3->10%
                                // Precision: 
                                // 3 -> 12.5% (Center of top segment)
                                // 2 -> 37.5%
                                // 1 -> 62.5%
                                // 0 -> 87.5%
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        >
                            <div className="w-full h-full bg-slate-200 rounded-full blur-[2px]" />
                        </motion.div>
                    </div>

                    {/* Icon Badge */}
                    <motion.div
                        key={level}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg"
                    >
                        {getIcon()}
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ParameterSlider;
