import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const AudioControl: React.FC = () => {
    const [isMuted, setIsMuted] = useState(false);

    const toggleMute = () => {
        const newState = !isMuted;
        setIsMuted(newState);

        if (window.AudioEngine && window.AudioEngine.setMute) {
            window.AudioEngine.setMute(newState);
        } else {
            console.warn("AudioEngine not ready or setMute missing");
        }
    };

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }} // Fade in late
        >
            <button
                onClick={toggleMute}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-full
                           backdrop-blur-md bg-white/10 hover:bg-white/20
                           border border-white/10 hover:border-white/20
                           transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                {/* Text Label */}
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
                    {isMuted ? 'UNMUTE' : 'AUDIO'}
                </span>

                {/* Icon */}
                <div className="text-white/80 group-hover:text-white transition-colors">
                    {isMuted ? (
                        <VolumeX size={16} strokeWidth={1.5} />
                    ) : (
                        <Volume2 size={16} strokeWidth={1.5} />
                    )}
                </div>
            </button>
        </motion.div>
    );
};

export default AudioControl;
