import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import AudioManager from '../utils/AudioManager';

interface AudioContextType {
    isAudioStarted: boolean;
    startAudio: () => void;
    stopAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAudioStarted, setIsAudioStarted] = useState(false);

    const startAudio = () => {
        if (!isAudioStarted) {
            setIsAudioStarted(true);
            AudioManager.getInstance().playHero();
        }
    };

    const stopAudio = () => {
        setIsAudioStarted(false);
        AudioManager.getInstance().stopHero();
    };

    return (
        <AudioContext.Provider value={{ isAudioStarted, startAudio, stopAudio }}>
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
