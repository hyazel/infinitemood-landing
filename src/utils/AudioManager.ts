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
            play: (eventName: string) => void;
            stop: (eventName: string, allowFadeOut?: boolean) => void;
            setVolume: (eventName: string, volume: number) => void;

            // Specifics
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
}

export default AudioManager;
