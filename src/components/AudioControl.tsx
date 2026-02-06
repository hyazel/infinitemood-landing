import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useTranslation } from '../i18n';

interface AudioControlProps {
    trackTitle?: string;
    weatherLevel: number;
    natureLevel: number;
}

const AudioControl: React.FC<AudioControlProps> = ({ trackTitle, weatherLevel, natureLevel }) => {
    const { t } = useTranslation();
    const [isMuted, setIsMuted] = useState(false);

    // State for temporary notification override
    const [notification, setNotification] = useState<string | null>(null);
    const notificationTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    // Track previous values to detect changes
    const prevWeather = React.useRef(weatherLevel);
    const prevNature = React.useRef(natureLevel);

    // Mapping helper
    const getWeatherLabel = (level: number) => {
        const prefix = t('audioControl.weather.prefix');
        if (level === 0) return `${prefix} ${t('audioControl.weather.level0')}`;
        if (level === 1) return `${prefix} ${t('audioControl.weather.level1')}`;
        if (level === 2) return `${prefix} ${t('audioControl.weather.level2')}`;
        if (level === 3) return `${prefix} ${t('audioControl.weather.level3')}`;
        return '';
    };

    const getNatureLabel = (level: number) => {
        const prefix = t('audioControl.nature.prefix');
        if (level === 0) return `${prefix} ${t('audioControl.nature.level0')}`;
        if (level === 1) return `${prefix} ${t('audioControl.nature.level1')}`;
        if (level === 2) return `${prefix} ${t('audioControl.nature.level2')}`;
        if (level === 3) return `${prefix} ${t('audioControl.nature.level3')}`;
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

    const displayedText = isMuted ? t('audioControl.muted') : (notification || trackTitle || '');


    return (
        <motion.div
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 pointer-events-auto mix-blend-difference"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <button
                onClick={toggleMute}
                className="group flex items-center gap-2 md:gap-3 px-2 py-1.5 md:px-4 md:py-2.5 rounded-full
                           backdrop-blur-md bg-white/90 text-black
                           hover:bg-white
                           border border-white/20
                           shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
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
                                className={`text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] whitespace-nowrap ${notification ? 'font-bold' : ''}`}
                            >
                                {displayedText}
                            </motion.span>
                        </AnimatePresence>

                        {/* Hidden text to force Minimum height/width if needed, but here we rely on popLayout */}
                    </div>

                    {/* Icon */}
                    <div className="transition-opacity relative z-10">
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
