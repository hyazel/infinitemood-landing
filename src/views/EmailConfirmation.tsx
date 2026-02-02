import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../i18n';

const EmailConfirmation: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-background-inverted flex flex-col items-center justify-center relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-2xl px-4">

                {/* Checkmark Icon with Animation */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15,
                        duration: 0.6 
                    }}
                    className="relative"
                >
                    <div className="w-24 h-24 rounded-full bg-primitive-saffron-deep backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <motion.svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <motion.polyline points="20 6 9 17 4 12" />
                        </motion.svg>
                    </div>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-center"
                >
                    <h1 className="font-display text-4xl md:text-5xl text-text-inverted tracking-wide mb-4">
                        {t('confirmation.title')}
                    </h1>
                    <p className="text-text-inverted/80 text-lg font-light max-w-md mx-auto leading-relaxed">
                        {t('confirmation.message')}
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {/* Primary CTA */}
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-light tracking-wide transition-all hover:scale-105 backdrop-blur-sm"
                    >
                        {t('confirmation.backHome')}
                    </button>   
                </motion.div>

                {/* Footer Note */}
                <motion.p
                    className="text-text-secondary text-sm text-center mt-8 max-w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    {t('confirmation.footer')}
                </motion.p>
            </div>
        </div>
    );
};

export default EmailConfirmation;
