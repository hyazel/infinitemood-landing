import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EmailSignup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Mock API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            <AnimatePresence mode='wait'>
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 text-center rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-green-300 font-display text-lg"
                    >
                        Merci ! Vous êtes bien inscrit.
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        onSubmit={handleSubmit}
                        className="relative flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1 focus-within:bg-white/10 focus-within:border-white/20 transition-all duration-300 min-h-[44px]"
                    >
                        <input
                            type="email"
                            placeholder="Restez informé..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none px-3 py-1.5 text-text-primary placeholder:text-text-secondary/50 font-sans text-sm min-w-0 w-48"
                            required
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="bg-accent-primary hover:bg-accent-secondary text-background-primary px-4 py-1.5 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? '...' : 'OK'}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EmailSignup;
