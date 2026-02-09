import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';
import { useTranslation } from '../i18n';

interface DemoWidgetProps {
    isVisible: boolean;
}

const DemoWidget: React.FC<DemoWidgetProps> = ({ isVisible }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-16 md:bottom-8 left-1/2 z-50 cursor-pointer"
                    initial={{ opacity: 0, y: 50, x: "-50%", scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 50, x: "-50%", scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                    }}
                    onClick={() => navigate('/demo')}
                >
                    {/* The Pill Container */}
                    <div className="relative group">

                        {/* 1. Pulsing Glow (Background) */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-primitive-mint-deep via-primitive-neutral-orchid_ash_300 to-primitive-saffron-core opacity-50 blur-lg"
                            animate={{
                                opacity: [0.4, 0.7, 0.4],
                                scale: [0.95, 1.05, 0.95]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* 2. Glassmorphism Pill (Foreground) */}
                        <div className="relative px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-xl overflow-hidden flex items-center gap-3">

                            {/* Inner shimmering gradient */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />

                            {/* Icon */}
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Sparkles size={20} className="text-white fill-white/20" />
                            </motion.div>

                            {/* Text */}
                            <span className="font-display font-medium text-white tracking-wide text-sm md:text-base whitespace-nowrap">
                                {t('demo.createMood')}
                            </span>

                            {/* Chevron for affordance */}
                            <motion.div
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ChevronRight size={16} className="text-white/60" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DemoWidget;
