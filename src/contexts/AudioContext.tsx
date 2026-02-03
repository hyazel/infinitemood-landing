import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import AudioManager from '../utils/AudioManager';

interface AudioContextType {
    isAudioStarted: boolean;
    startAudio: () => void;
    stopAudio: () => void;
    currentAudioEvent: string | null;
    setCurrentAudioEvent: (event: string | null) => void;
    weatherLevel: number;
    setWeatherLevel: (level: number) => void;
    natureLevel: number;
    setNatureLevel: (level: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAudioStarted, setIsAudioStarted] = useState(false);
    const [currentAudioEvent, setCurrentAudioEvent] = useState<string | null>(null);
    const [weatherLevel, setWeatherLevel] = useState(0);
    const [natureLevel, setNatureLevel] = useState(0);

    const startAudio = () => {
        if (!isAudioStarted) {
            setIsAudioStarted(true);
            setCurrentAudioEvent('demoNeoclassic'); // Hero music is neo classic
            AudioManager.getInstance().playHero();
        }
    };

    const stopAudio = () => {
        setIsAudioStarted(false);
        setCurrentAudioEvent(null);
        AudioManager.getInstance().stopHero();
    };

    return (
        <AudioContext.Provider value={{ isAudioStarted, startAudio, stopAudio, currentAudioEvent, setCurrentAudioEvent, weatherLevel, setWeatherLevel, natureLevel, setNatureLevel }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};
