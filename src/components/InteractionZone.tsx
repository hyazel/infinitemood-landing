import React from 'react';
import { motion } from 'framer-motion';

interface InteractionZoneProps {
    onClick?: () => void;
    size?: 'small' | 'large';
    className?: string;
}

const InteractionZone: React.FC<InteractionZoneProps> = ({ onClick, size = 'large', className = '' }) => {
    const sizeClass = size === 'large' ? 'w-20 h-20' : 'w-12 h-12';

    return (
        <motion.div
            className={`relative flex items-center justify-center cursor-pointer ${sizeClass} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Outer Glow / Pulse */}
            <motion.div
                className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm border border-white/20"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Inner Core */}
            <div className="absolute inset-3 rounded-full bg-white/20 backdrop-blur-md" />

            {/* Center Dot */}
            <motion.div
                className="absolute inset-7 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                animate={{
                    opacity: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
};

export default InteractionZone;
