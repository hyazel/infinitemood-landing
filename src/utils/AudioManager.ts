// import musicSelect from '../assets/music-select.wav';

// Declare global FMOD functions
declare global {
    interface Window {
        playDemoNeoclassic: () => void;
        stopDemoNeoclassic: (allowFadeOut?: boolean) => void;
        setDemoNeoclassicVolume: (volume: number) => void;
        playDemoLofi: () => void;
        stopDemoLofi: (allowFadeOut?: boolean) => void;
        setDemoLofiVolume: (volume: number) => void;
        activateSnapshot: (name: string) => void;
        deactivateSnapshot: (name: string) => void;
        playMeteo: () => void;
        stopMeteo: (allowFadeOut?: boolean) => void;
        setMeteoLevel: (level: number) => void;
    }
}

class AudioManager {
    private static instance: AudioManager;

    // heroTrack removed in favor of FMOD event
    // private selectTrack: HTMLAudioElement;

    // Max volume for background music
    private readonly MAX_VOLUME = 0.5;
    private readonly FADE_DURATION = 2000; // ms

    private constructor() {
        // this.selectTrack = new Audio(musicSelect);
        // this.selectTrack.loop = true;

        // Initial volumes
        // this.selectTrack.volume = 0;
    }

    public static getInstance(): AudioManager {
        if (!AudioManager.instance) {
            AudioManager.instance = new AudioManager();
        }
        return AudioManager.instance;
    }

    public playHero() {
        // Force reset state to ensure it starts even if previously faded or paused
        // this.selectTrack.volume = 0;
        // this.selectTrack.pause();
        // this.selectTrack.currentTime = 0;

        // Play FMOD Event
        if (window.playDemoNeoclassic) {
            window.setDemoNeoclassicVolume?.(this.MAX_VOLUME); // Ensure volume is up
            window.playDemoNeoclassic();
        } else {
            console.warn("window.playDemoNeoclassic not found. Is FMOD initialized?");
        }
    }

    public fadeOutHero() {
        // FMOD handles fading usually, or we can just stop it with fadeout
        if (window.stopDemoNeoclassic) {
            window.stopDemoNeoclassic(true); // true = allowFadeOut
        }
    }

    public transitionToSelect() {
        // Prevent re-trigger if already playing select
        // if (!this.selectTrack.paused && this.selectTrack.volume > 0) return;

        // Start Select (silent)
        // this.selectTrack.volume = 0;
        // this.selectTrack.play().catch(e => console.error("Select play failed", e));

        const fadeSteps = 50; // number of steps
        const stepTime = this.FADE_DURATION / fadeSteps;
        const volStep = this.MAX_VOLUME / fadeSteps;

        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;

            // Fade OUT Hero (FMOD)
            // We can lower volume manually if we want a custom crossfade, 
            // or just rely on stop(allowFadeOut) at the end or start.
            // Since FMOD events have their own behavior, let's try to mimic the previous logic
            // by lowering volume if possible, OR just stop it at the end.
            // But `demo-neoclassic` might be a long track.
            // Let's use setDemoNeoclassicVolume if available to crossfade.

            if (window.setDemoNeoclassicVolume) {
                const newHeroVol = Math.max(0, this.MAX_VOLUME - (currentStep * volStep));
                window.setDemoNeoclassicVolume(newHeroVol);
            }

            // Fade IN Select
            // const newSelectVol = Math.min(this.MAX_VOLUME, currentStep * volStep);
            // this.selectTrack.volume = newSelectVol;

            if (currentStep >= fadeSteps) {
                clearInterval(interval);
                if (window.stopDemoNeoclassic) {
                    window.stopDemoNeoclassic(true);
                }
            }
        }, stepTime);
    }

    public stopHero() {
        if (window.stopDemoNeoclassic) {
            window.stopDemoNeoclassic(true);
        }
    }

    public playLofi() {
        if (window.playDemoLofi) {
            window.setDemoLofiVolume?.(this.MAX_VOLUME);
            window.playDemoLofi();
        }
    }

    public activateMeteoSnapshot() {
        if (window.activateSnapshot) {
            window.activateSnapshot("snapshot:/meteo_interaction");
        }
    }

    public deactivateMeteoSnapshot() {
        if (window.deactivateSnapshot) {
            window.deactivateSnapshot("snapshot:/meteo_interaction");
        }
    }

    public playMeteo() {
        if (window.playMeteo) {
            window.playMeteo();
        }
    }

    public stopMeteo() {
        if (window.stopMeteo) {
            window.stopMeteo(true);
        }
    }

    public setMeteoLevel(level: number) {
        if (window.setMeteoLevel) {
            window.setMeteoLevel(level);
        }
    }
}

export default AudioManager;
