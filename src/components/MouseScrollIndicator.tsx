import React from 'react';
import { motion } from 'framer-motion';

interface MouseScrollIndicatorProps {
    text?: string;
    className?: string;
}

const MouseScrollIndicator: React.FC<MouseScrollIndicatorProps> = ({
    text = "SCROLL",
    className = ""
}) => {
    return (
        <div className={`flex flex-col items-center gap-3 ${className}`}>
            {text && (
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">
                    {text}
                </span>
            )}
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                <motion.div
                    animate={{
                        y: [0, 12, 0],
                        opacity: [1, 0, 1]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-1 h-1.5 bg-white rounded-full bg-primitive-saffron-core"
                />
            </div>
        </div>
    );
};

export default MouseScrollIndicator;
