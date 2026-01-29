import React from 'react';
import { createPortal } from 'react-dom';
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

    // Use a portal to render outside the header's stacking context
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop - Transparent to handle click-outside, but covers screen */}
                    <div
                        onClick={onClose}
                        className="fixed inset-0 bg-transparent z-[100]"
                    />

                    {/* Modal Content - Clean Popover (Nominal but Cool) */}
                    <motion.div
                        style={{
                            position: 'fixed',
                            zIndex: 101,
                            top: triggerRect ? triggerRect.bottom + 12 : '50%',
                            right: triggerRect ? window.innerWidth - triggerRect.right : 'auto',
                            left: triggerRect ? 'auto' : '50%',
                            transform: triggerRect ? 'none' : 'translate(-50%, -50%)',
                            width: '400px',
                            maxWidth: 'calc(100vw - 24px)',
                            transformOrigin: 'top right'
                        }}
                        initial={{
                            opacity: 0,
                            y: -10,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 30
                            }
                        }}
                        exit={{
                            opacity: 0,
                            y: -10,
                            scale: 0.96,
                            transition: {
                                duration: 0.2
                            }
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Card Content - Wrapped in a clean container */}
                        <div className="relative">
                            <WeightScaleCTA t={t} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default NewsletterModal;
