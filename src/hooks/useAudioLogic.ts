import { useState } from 'react';

declare global {
    interface Window {
        playEvent: (id: number) => void;
        EvolutionManager: {
            start: (config: any) => void;
            stop: () => void;
        };
        LofiConfig: any;
        setMeteoLevel: (level: number) => void;
        startMeteoSnapshot: () => void;
        stopMeteoSnapshot: () => void;
    }
}

export const useAudioLogic = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!isPlaying) {
            // Play
            if (window.playEvent) {
                window.playEvent(1);
                setIsPlaying(true);
                // Start Evolution
                if (window.EvolutionManager && window.LofiConfig) {
                    window.EvolutionManager.start(window.LofiConfig);
                }
            } else {
                console.warn("playEvent not found on window");
            }
        } else {
            // Stop
            if (window.playEvent) {
                window.playEvent(2);
                setIsPlaying(false);
                // Stop Evolution
                if (window.EvolutionManager) {
                    window.EvolutionManager.stop();
                }
            }
        }
    };

    const setMeteo = (level: number) => {
        if (window.setMeteoLevel) {
            window.setMeteoLevel(level);
        }
    };

    const startSnapshot = () => {
        if (window.startMeteoSnapshot) window.startMeteoSnapshot();
    };

    const stopSnapshot = () => {
        if (window.stopMeteoSnapshot) window.stopMeteoSnapshot();
    };

    return {
        isPlaying,
        togglePlay,
        setMeteo,
        startSnapshot,
        stopSnapshot
    };
};
