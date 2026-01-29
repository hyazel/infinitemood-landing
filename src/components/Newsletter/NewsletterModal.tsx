import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../i18n';
import WeightScaleCTA from './WeightScaleCTA';

interface NewsletterModalProps {
    isOpen: boolean;
    onClose: () => void;
    triggerRect?: DOMRect | null;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose, triggerRect }) => {
    const { t } = useTranslation();

    // Default to center if no trigger rect (fallback)
    // NOTE: right calculation assumes the button is right-aligned.
    // We position the modal's top right corner relative to the trigger's bottom right.
    const style: React.CSSProperties = triggerRect
        ? {
            position: 'fixed', // Use fixed since triggerRect is viewport relative
            top: triggerRect.bottom + 12, // 12px gap
            right: window.innerWidth - triggerRect.right,
            width: '400px', // Standard width for the newsletter card
            maxWidth: 'calc(100vw - 24px)', // Responsive safeguard
            zIndex: 101 // Ensure it's above backdrop
        }
        : {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            maxWidth: '90vw',
            zIndex: 101
        };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop - Transparent to handle click-outside, but covers screen */}
                    <div
                        onClick={onClose}
                        className="fixed inset-0 bg-transparent z-[100]"
                    />

                    {/* Modal Content - Positioned based on style */}
                    <motion.div
                        style={style}
                        initial={{
                            opacity: 0,
                            scaleY: 0,
                            scaleX: 0.9,
                            transformOrigin: 'top right'
                        }}
                        animate={{
                            opacity: 1,
                            scaleY: 1,
                            scaleX: 1,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }
                        }}
                        exit={{
                            opacity: 0,
                            scaleY: 0,
                            scaleX: 0.9,
                            transition: {
                                duration: 0.2
                            }
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Card Content - Wrapped in a clean container */}
                        <div className="relative"> {/* Removed bg-black/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden */}
                            <WeightScaleCTA t={t} />


                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default NewsletterModal;
