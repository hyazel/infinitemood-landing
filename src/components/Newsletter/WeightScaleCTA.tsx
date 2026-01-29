import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ===========================================
// WEIGHT SCALE NEWSLETTER CTA
// Balance micro-interaction effect
// ===========================================
interface SimpleNewsletterProps {
    t: (key: string) => string;
}

const WeightScaleCTA: React.FC<SimpleNewsletterProps> = ({ t }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'typing' | 'valid' | 'invalid' | 'submitting' | 'success'>('idle');
    const [isFocused, setIsFocused] = useState(false);

    // Email validation
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Calculate tilt based on email length (max 20 chars for full tilt)
    const getTiltAngle = () => {
        if (status === 'valid') return 0; // Perfectly balanced when valid
        if (status === 'invalid') return 0; // Use shake instead
        if (status === 'success') return 0;

        // Progressive tilt as user types (right side gets heavier)
        const maxTilt = 3;
        const normalizedLength = Math.min(email.length / 15, 1);
        return normalizedLength * maxTilt;
    };

    // Calculate vertical offset (heavier = lower)
    const getYOffset = () => {
        if (status === 'submitting') return 20; // Content "falls"
        if (!isFocused && email.length === 0) return 0;
        return 2 + Math.min(email.length * 0.3, 4); // Slight sink as it gets heavier
    };

    // Handle email change
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        if (value.length === 0) {
            setStatus('idle');
        } else if (isValidEmail(value)) {
            setStatus('valid');
        } else {
            setStatus('typing');
        }
    };

    // Handle submit
    const handleSubmit = () => {
        if (!isValidEmail(email)) {
            setStatus('invalid');
            setTimeout(() => setStatus(email.length > 0 ? 'typing' : 'idle'), 800);
            return;
        }

        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
        }, 1200);
    };

    // Get weight indicator fill percentage
    const getWeightFill = () => {
        if (status === 'valid' || status === 'submitting' || status === 'success') return 100;
        return Math.min((email.length / 15) * 100, 100);
    };

    return (
        <motion.div
            className="inline-block relative w-[340px] md:w-[440px]"
        >
            {/* Single card with tilt effect and aurora background */}
            <motion.div
                className="relative p-8 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden min-h-[280px] flex flex-col justify-center bg-black/40" // added default bg
                animate={{
                    rotateZ: getTiltAngle(),
                    y: getYOffset(),
                    x: status === 'invalid' ? [-4, 4, -3, 3, -2, 2, 0] : 0,
                    boxShadow: isFocused
                        ? '0 20px 40px rgba(0,0,0,0.3)'
                        : '0 10px 30px rgba(0,0,0,0.2)',
                }}
                transition={{
                    rotateZ: { type: 'spring', stiffness: 300, damping: 20 },
                    y: { type: 'spring', stiffness: 300, damping: 20 },
                    x: { duration: 0.5, ease: 'easeOut' },
                    boxShadow: { duration: 0.3 },
                }}
                style={{ transformOrigin: 'center bottom' }}
            >
                {/* Aurora gradient background - inside card so it tilts together */}
                <motion.div
                    className="absolute inset-0 -z-10"
                    style={{
                        background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe)',
                        backgroundSize: '400% 400%',
                    }}
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/40 -z-10" />

                {/* SUCCESS OVERLAY - RIPPLE EXPANSION */}
                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div
                            className="absolute inset-0 z-50 bg-gradient-to-br from-emerald-600 to-teal-800 flex flex-col items-center justify-center p-6 text-center"
                            initial={{ clipPath: 'circle(0% at 85% 75%)' }}
                            animate={{ clipPath: 'circle(150% at 85% 75%)' }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Big pulsing checkmark */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{
                                    scale: 1,
                                    rotate: 0,
                                }}
                                transition={{
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                className="w-20 h-20 bg-transparent flex items-center justify-center mb-6"
                            >
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM16.7682 9.64018C17.1218 9.23156 17.0724 8.6184 16.6638 8.26478C16.2552 7.91115 15.642 7.96057 15.2884 8.3692L10.9928 13.3331L8.82676 10.9392C8.45564 10.529 7.82865 10.4938 7.41844 10.8649C7.00823 11.2361 6.97304 11.8631 7.34416 12.2733L10.3706 15.6183C10.5694 15.838 10.85 15.9554 11.1447 15.9422C11.4395 15.929 11.7107 15.7869 11.8925 15.5539L16.7682 9.64018Z" fill="white" />
                                </svg>
                            </motion.div>

                            {/* Main Text */}
                            <motion.h3
                                className="text-3xl font-bold text-white mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                {t('outro.successTitle')}
                            </motion.h3>

                            {/* Sub Text */}
                            <motion.p
                                className="text-white/80 font-light"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                {t('outro.successSubtitle')}
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex flex-col items-center gap-5 relative z-10">
                    {/* Label */}
                    <motion.div animate={{ scale: 1.05 }}>
                        <span className="text-sm uppercase tracking-[0.25em] font-bold text-white">
                            {t('outro.ctaLabelHover')}
                        </span>
                    </motion.div>

                    {/* Sublabel */}
                    <p className="text-sm text-white/80 text-center font-light">
                        {t('outro.ctaSublabel')}
                    </p>

                    {/* Weight indicator bar */}
                    <div className="w-full max-w-[280px] h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            animate={{
                                width: `${getWeightFill()}%`,
                                backgroundColor: (status === 'valid' || status === 'submitting' || status === 'success')
                                    ? '#4ade80'
                                    : status === 'invalid'
                                        ? '#f87171'
                                        : '#667eea',
                            }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        />
                    </div>

                    {/* Input Container */}
                    <div className="relative mt-2">
                        <motion.div
                            className="flex gap-3"
                            animate={{
                                scale: status === 'submitting' ? 0.95 : 1,
                                opacity: status === 'success' ? 0 : 1,
                                y: status === 'submitting' ? 10 : 0,
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                placeholder={t('outro.emailPlaceholder')}
                                disabled={status === 'submitting' || status === 'success'}
                                className="bg-white/10 border text-white placeholder-white/40 outline-none w-56 text-sm px-5 py-3 rounded-full transition-colors"
                                animate={{
                                    borderColor: status === 'valid'
                                        ? 'rgba(74, 222, 128, 0.6)'
                                        : status === 'invalid'
                                            ? 'rgba(248, 113, 113, 0.8)'
                                            : isFocused
                                                ? 'rgba(255, 255, 255, 0.4)'
                                                : 'rgba(255, 255, 255, 0.2)',
                                }}
                                transition={{ duration: 0.2 }}
                            />

                            {/* Submit button */}
                            <motion.button
                                onClick={handleSubmit}
                                disabled={status === 'submitting' || status === 'success'}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold shadow-lg overflow-hidden"
                                animate={{
                                    boxShadow: status === 'valid'
                                        ? [
                                            '0 0 15px rgba(74, 222, 128, 0.4)',
                                            '0 0 30px rgba(74, 222, 128, 0.6)',
                                            '0 0 15px rgba(74, 222, 128, 0.4)',
                                        ]
                                        : '0 10px 30px rgba(255, 255, 255, 0.2)',
                                }}
                                transition={{
                                    boxShadow: status === 'valid'
                                        ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
                                        : { duration: 0.3 }
                                }}
                            >
                                {status === 'submitting' ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full"
                                    />
                                ) : (
                                    <motion.svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        animate={{
                                            x: status === 'valid' ? [0, 3, 0] : 0,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            repeat: status === 'valid' ? Infinity : 0,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </motion.svg>
                                )}
                            </motion.button>
                        </motion.div>

                        {/* Error message */}
                        {/* Error message removed */}
                    </div>
                </div>
            </motion.div>
        </motion.div >
    );
};

export default WeightScaleCTA;
