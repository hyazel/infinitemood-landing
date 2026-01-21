import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioControlProps {
    trackTitle?: string;
    weatherLevel: number;
    natureLevel: number;
}

const AudioControl: React.FC<AudioControlProps> = ({ trackTitle, weatherLevel, natureLevel }) => {
    const [isMuted, setIsMuted] = useState(false);

    // State for temporary notification override
    const [notification, setNotification] = useState<string | null>(null);
    const notificationTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    // Track previous values to detect changes
    const prevWeather = React.useRef(weatherLevel);
    const prevNature = React.useRef(natureLevel);

    // Mapping helper
    const getWeatherLabel = (level: number) => {
        if (level === 0) return 'Météo : Calme';
        if (level === 1) return 'Météo : Fine pluie';
        if (level === 2) return 'Météo : Pluie';
        if (level === 3) return 'Météo : Orage';
        return '';
    };

    const getNatureLabel = (level: number) => {
        if (level === 0) return 'Nature : Calme';
        if (level === 1) return 'Nature : Léger';
        if (level === 2) return 'Nature : Intense';
        if (level === 3) return 'Nature : Sauvage';
        return '';
    };

    const showNotification = (text: string) => {
        setNotification(text);
        if (notificationTimeoutRef.current) {
            clearTimeout(notificationTimeoutRef.current);
        }
        notificationTimeoutRef.current = setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    // Effect: Detect Weather Change
    useEffect(() => {
        if (prevWeather.current !== weatherLevel) {
            const label = getWeatherLabel(weatherLevel);
            if (label) showNotification(label);
            prevWeather.current = weatherLevel;
        }
    }, [weatherLevel]);

    // Effect: Detect Nature Change
    useEffect(() => {
        if (prevNature.current !== natureLevel) {
            const label = getNatureLabel(natureLevel);
            if (label) showNotification(label);
            prevNature.current = natureLevel;
        }
    }, [natureLevel]);

    const toggleMute = () => {
        const newState = !isMuted;
        setIsMuted(newState);
        if (window.AudioEngine?.setMute) {
            window.AudioEngine.setMute(newState);
        }
    };

    const displayedText = isMuted ? 'Muted' : (notification || trackTitle || 'Sound On');

    return (
        <motion.div
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <button
                onClick={toggleMute}
                className="group flex items-center gap-2 md:gap-3 px-2 py-1.5 md:px-4 md:py-2.5 rounded-full
                           backdrop-blur-md bg-white/10 hover:bg-white/20
                           border border-white/10 hover:border-white/20
                           shadow-lg hover:shadow-xl transition-colors relative overflow-hidden"
            >
                <motion.div
                    layout="position"
                    className="flex items-center gap-2 md:gap-3"
                >
                    {/* Animated Text Container */}
                    <div className="relative flex flex-col justify-center items-end h-[20px] md:h-[24px]">
                        <AnimatePresence mode="popLayout" initial={false}>
                            <motion.span
                                key={displayedText}
                                initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
                                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
                                transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.8 }}
                                className={`text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] whitespace-nowrap ${notification ? 'text-primitive-saffron-core font-bold' : 'text-white/70 group-hover:text-white'}`}
                            >
                                {displayedText}
                            </motion.span>
                        </AnimatePresence>

                        {/* Hidden text to force Minimum height/width if needed, but here we rely on popLayout */}
                    </div>

                    {/* Icon */}
                    <div className="text-white/80 group-hover:text-white transition-colors relative z-10">
                        {isMuted ? (
                            <VolumeX size={14} className="md:w-4 md:h-4" strokeWidth={1.5} />
                        ) : (
                            <Volume2 size={14} className="md:w-4 md:h-4" strokeWidth={1.5} />
                        )}
                    </div>
                </motion.div>
            </button>
        </motion.div>
    );
};

export default AudioControl;
