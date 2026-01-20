// import musicSelect from '../assets/music-select.wav';

// Declare global FMOD functions and AudioEngine
declare global {
    interface Window {
        // Legacy shims
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
        loadMasterBank: () => void;

        // New Robust API
        AudioEngine: {
            init: (system: any, core: any) => void;
            loadBanks: () => void;
            loadMasterBank: () => void;

            // Generic Playback
            play: (eventName: string) => void;
            stop: (eventName: string, allowFadeOut?: boolean) => void;
            setVolume: (eventName: string, volume: number) => void;

            // Specifics (Legacy/Convenience)
            playDemoNeoclassic: () => void;
            stopDemoNeoclassic: (f?: boolean) => void;
            setDemoNeoclassicVolume: (v: number) => void;
            playDemoLofi: () => void;
            stopDemoLofi: (f?: boolean) => void;
            setDemoLofiVolume: (v: number) => void;
            playMeteo: () => void;
            stopMeteo: (f?: boolean) => void;
            setMeteoLevel: (level: number) => void;
            activateSnapshot: (name: string) => void;
            deactivateSnapshot: (name: string) => void;
            setMute: (isMuted: boolean) => void;
            setGlobalParameter: (name: string, value: number) => void;
        }
    }
}

class AudioManager {
    private static instance: AudioManager;
    private isReady: boolean = false;
    private readyListeners: (() => void)[] = [];

    // Max volume for background music
    private readonly MAX_VOLUME = 0.5;
    private readonly FADE_DURATION = 2000; // ms

    private constructor() {
        // Listen for FMOD ready event
        window.addEventListener('fmod-ready', () => {
            console.log("AudioManager: FMOD Ready signal received.");
            this.isReady = true;
            this.notifyReady();
        });
    }

    public static getInstance(): AudioManager {
        if (!AudioManager.instance) {
            AudioManager.instance = new AudioManager();
        }
        return AudioManager.instance;
    }

    private notifyReady() {
        this.readyListeners.forEach(cb => cb());
        this.readyListeners = [];
    }

    public waitForReady(): Promise<void> {
        if (this.isReady) return Promise.resolve();
        return new Promise((resolve) => {
            this.readyListeners.push(resolve);
        });
    }

    public checkReady(): boolean {
        return this.isReady;
    }

    // Load Master Bank manually
    public loadMasterBank() {
        if (window.AudioEngine) {
            window.AudioEngine.loadMasterBank();
        } else {
            console.warn("AudioEngine not available");
        }
    }

    public playHero() {
        if (window.AudioEngine) {
            window.AudioEngine.setDemoNeoclassicVolume(this.MAX_VOLUME);
            window.AudioEngine.playDemoNeoclassic();
        }
    }

    public fadeOutHero() {
        if (window.AudioEngine) {
            window.AudioEngine.stopDemoNeoclassic(true);
        }
    }

    public transitionToSelect() {
        const fadeSteps = 50; // number of steps
        const stepTime = this.FADE_DURATION / fadeSteps;
        const volStep = this.MAX_VOLUME / fadeSteps;

        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;

            if (window.AudioEngine) {
                const newHeroVol = Math.max(0, this.MAX_VOLUME - (currentStep * volStep));
                window.AudioEngine.setDemoNeoclassicVolume(newHeroVol);
            }

            if (currentStep >= fadeSteps) {
                clearInterval(interval);
                if (window.AudioEngine) {
                    window.AudioEngine.stopDemoNeoclassic(true);
                }
            }
        }, stepTime);
    }

    public stopHero() {
        if (window.AudioEngine) {
            window.AudioEngine.stopDemoNeoclassic(true);
        }
    }

    public playLofi() {
        if (window.AudioEngine) {
            window.AudioEngine.setDemoLofiVolume(this.MAX_VOLUME);
            window.AudioEngine.playDemoLofi();
        }
    }

    public activateMeteoSnapshot() {
        if (window.AudioEngine) {
            window.AudioEngine.activateSnapshot("snapshot:/meteo_interaction");
        }
    }

    public deactivateMeteoSnapshot() {
        if (window.AudioEngine) {
            window.AudioEngine.deactivateSnapshot("snapshot:/meteo_interaction");
        }
    }

    public playMeteo() {
        if (window.AudioEngine) {
            window.AudioEngine.playMeteo();
        }
    }

    public stopMeteo() {
        if (window.AudioEngine) {
            window.AudioEngine.stopMeteo(true);
        }
    }

    public setMeteoLevel(level: number) {
        if (window.AudioEngine) {
            window.AudioEngine.setMeteoLevel(level);
        }
    }

    private currentNatureEventFullPath: string | null = null;

    public setNatureType(level: number) {
        if (window.AudioEngine) {
            console.log("[AudioManager] setNatureType called with:", level);

            // Set Global parameter "nature_type" which is expected to exist (like "meteo_type")
            // Levels: 0=Calm, 1=Light, 2=Alive, 3=Wild
            window.AudioEngine.setGlobalParameter("nature_type", level);
        }
    }

    public playMusicMenuSelection() {
        if (window.AudioEngine) {
            window.AudioEngine.activateSnapshot("snapshot:/music_menu_selection");
        }
    }
    public stopMusicMenuSelection() {
        if (window.AudioEngine) {
            window.AudioEngine.deactivateSnapshot("snapshot:/music_menu_selection");
        }
    }

    public activateSnapshot(name: string) {
        if (window.AudioEngine) {
            window.AudioEngine.activateSnapshot(name);
        }
    }

    public deactivateSnapshot(name: string) {
        if (window.AudioEngine) {
            window.AudioEngine.deactivateSnapshot(name);
        }
    }

    // --- Dynamic Parameters (SoundCone) ---
    public setMusicSpace(value: number) {
        if (window.AudioEngine) {
            // Try Global
            window.AudioEngine.setGlobalParameter("music-space", value);
            // Try Local on current track (demoLofi)
            if ((window.AudioEngine as any).setEventParameter) {
                (window.AudioEngine as any).setEventParameter('demoLofi', "music-space", value);
            }
        }
    }

    public setMusicReverb(value: number) {
        if (window.AudioEngine) {
            window.AudioEngine.setGlobalParameter("music-reverb", value);
            if ((window.AudioEngine as any).setEventParameter) {
                (window.AudioEngine as any).setEventParameter('demoLofi', "music-reverb", value);
            }
        }
    }

    public stopAllSnapshots() {
        if (window.AudioEngine && (window.AudioEngine as any).stopAllSnapshots) {
            (window.AudioEngine as any).stopAllSnapshots();
        }
    }

    // Generic Methods for Fragments
    public play(eventName: string) {
        if (window.AudioEngine) {
            window.AudioEngine.play(eventName);
        }
    }

    public stop(eventName: string, fadeOut: boolean = true) {
        if (window.AudioEngine) {
            window.AudioEngine.stop(eventName, fadeOut);
        }
    }

    // Dynamic Nature Event Handling
    public playNatureEvent(partialPath: string) {
        if (window.AudioEngine) {
            // Constuct full path: event:/Nature/{partialPath}
            const fullPath = `event:/Nature/${partialPath}`;
            this.currentNatureEventFullPath = fullPath;

            if ((window.AudioEngine as any).playDynamicEvent) {
                (window.AudioEngine as any).playDynamicEvent(fullPath);
            } else {
                console.warn("AudioEngine.playDynamicEvent not found");
            }
        }
    }

    public stopNatureEvent(partialPath: string) {
        if (window.AudioEngine) {
            const fullPath = `event:/Nature/${partialPath}`;
            if (this.currentNatureEventFullPath === fullPath) {
                this.currentNatureEventFullPath = null;
            }
            if ((window.AudioEngine as any).stopDynamicEvent) {
                (window.AudioEngine as any).stopDynamicEvent(fullPath);
            }
        }
    }
}

export default AudioManager;
