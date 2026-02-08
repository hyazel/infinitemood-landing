import React from 'react';
import { motion } from 'framer-motion';
import SubscriberStatBadge from './SubscriberStatBadge';

interface SuccessOverlayProps {
    count: number;
    t: (key: string) => string;
}

const SuccessOverlay: React.FC<SuccessOverlayProps> = ({ count, t }) => {
    return (
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

            {/* Animated Badge on Success Screen */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                className="mt-8"
            >
                <SubscriberStatBadge
                    count="1,235"
                    label={t('outro.youAreIn')}
                    withPlusOne={true}
                    className="bg-white/10 border-white/20"
                />
            </motion.div>
        </motion.div>
    );
};

export default SuccessOverlay;
