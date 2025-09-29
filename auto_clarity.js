/**
 * AutoClarity - Génération automatique de courbe de clarity basée sur le bruit de Perlin
 * Modifie automatiquement le paramètre FMOD progression-clarity selon une courbe naturelle
 * Compatible avec le système AutoParameters global
 */

class AutoClarity {
    constructor() {
        this.isActive = false;
        this.intervalId = null;
        this.updateInterval = 1000; // ms entre chaque mise à jour (1 seconde)
        this.speed = 0.02; // Vitesse de progression du bruit (plus doux)
        this.amplitude = 0.4; // Amplitude de variation (plus doux)
        this.center = 0.5; // Valeur centrale (0-1)
        this.time = 0;
        this.seedValue = 0.5; // Valeur de départ (seed) - sera mise à jour avec la valeur actuelle du slider
        
        // Paramètres de la courbe
        this.minValue = 0; // Valeur minimale
        this.maxValue = 1; // Valeur maximale
        
        console.log('AutoClarity initialisé');
    }
    
    /**
     * Génère un bruit de Perlin simplifié et plus doux
     * @param {number} x - Position x
     * @param {number} y - Position y (optionnel)
     * @returns {number} Valeur de bruit entre -1 et 1
     */
    perlinNoise(x, y = 0) {
        // Bruit de Perlin multi-octaves avec plus de variation
        // Augmenter les fréquences pour plus de variation
        const octave1 = Math.sin(x * 1.0 + y * 0.5) * 0.4;
        const octave2 = Math.sin(x * 2.0 + y * 1.0) * 0.3;
        const octave3 = Math.sin(x * 4.0 + y * 2.0) * 0.2;
        const octave4 = Math.sin(x * 8.0 + y * 4.0) * 0.1;
        
        // Combiner les octaves pour un bruit plus naturel et varié
        return (octave1 + octave2 + octave3 + octave4) / 1.0; // Normaliser
    }
    
    /**
     * Génère une valeur de clarity basée sur le bruit de Perlin
     * @returns {number} Valeur entre 0 et 1
     */
    generateClarityValue() {
        // Utiliser le temps comme position dans le bruit
        const noiseValue = this.perlinNoise(this.time);
        
        // Calculer l'amplitude adaptative basée sur la position du seed
        // Plus le seed est proche des bords (0 ou 1), plus l'amplitude est réduite
        // Mais on garantit une amplitude minimale pour éviter les plateaux
        const distanceFromCenter = Math.abs(this.seedValue - 0.5);
        const minAmplitude = 0.2; // Amplitude minimale garantie
        const adaptiveAmplitude = Math.max(minAmplitude, this.amplitude * (1 - distanceFromCenter));
        
        // Appliquer l'amplitude adaptative et centrer la valeur sur le seed
        // Permettre de parcourir tout le range 0-1 avec des variations plus douces
        // Si on est proche des bords, on force la variation vers le centre
        let scaledValue;
        if (this.seedValue >= 0.8) {
            // Si proche du maximum, on force la variation vers le bas
            scaledValue = this.seedValue - (Math.abs(noiseValue) * adaptiveAmplitude);
        } else if (this.seedValue <= 0.2) {
            // Si proche du minimum, on force la variation vers le haut
            scaledValue = this.seedValue + (Math.abs(noiseValue) * adaptiveAmplitude);
        } else {
            // Pour les valeurs centrales, on varie dans les deux directions
            scaledValue = this.seedValue + (noiseValue * adaptiveAmplitude);
        }
        
        // Clamper entre min et max
        const clampedValue = Math.max(this.minValue, Math.min(this.maxValue, scaledValue));
        
        // Arrondir à 3 décimales pour plus de fluidité (évite les plateaux)
        const finalValue = Math.round(clampedValue * 1000) / 1000;
        
        // Debug logs
        console.log('AutoClarity Debug - noiseValue:', noiseValue.toFixed(3), 'seedValue:', this.seedValue.toFixed(3), 'adaptiveAmplitude:', adaptiveAmplitude.toFixed(3), 'scaledValue:', scaledValue.toFixed(3), 'finalValue:', finalValue.toFixed(3));
        
        return finalValue;
    }
    
    /**
     * Met à jour la position visuelle du slider de clarity
     * @param {number} value - Valeur entre 0 et 1
     */
    updateSliderPosition(value) {
        const volumeThumb = document.getElementById('volume-thumb');
        if (volumeThumb) {
            const thumbWidth = 17;
            const trackWidth = 235;
            const maxPosition = trackWidth - thumbWidth;
            const position = maxPosition * value;
            volumeThumb.style.left = position + 'px';
            
            // Synchroniser la variable globale volumeValue
            if (typeof window !== 'undefined' && window.volumeValue !== undefined) {
                window.volumeValue = value;
            }
        }
    }
    
    /**
     * Met à jour le paramètre FMOD clarity
     */
    updateClarity() {
        if (!this.isActive) return;
        
        const clarityValue = this.generateClarityValue();
        
        // Envoyer à FMOD si la fonction est disponible
        if (typeof setProgressionClarity === 'function') {
            setProgressionClarity(clarityValue);
            console.log('AutoClarity - Valeur mise à jour:', clarityValue.toFixed(3));
        }
        
        // Mettre à jour la position visuelle du slider
        this.updateSliderPosition(clarityValue);
        
        // Incrémenter le temps pour la progression
        this.time += this.speed;
    }
    
    /**
     * Met à jour la valeur seed (point de départ) avec la valeur actuelle du slider
     * @param {number} currentValue - Valeur actuelle du slider (0-1)
     */
    updateSeed(currentValue) {
        this.seedValue = Math.max(0, Math.min(1, currentValue));
        console.log('AutoClarity - Seed mis à jour:', this.seedValue.toFixed(3));
    }
    
    /**
     * Démarre l'auto-clarity en utilisant la valeur actuelle du slider comme seed
     */
    start() {
        if (this.isActive) {
            console.log('AutoClarity déjà actif');
            return;
        }
        
        // Récupérer la valeur actuelle du slider comme seed
        if (typeof window !== 'undefined' && window.volumeValue !== undefined) {
            this.updateSeed(window.volumeValue);
        }
        
        this.isActive = true;
        this.time = 0; // Reset du temps
        
        // Démarrer l'intervalle de mise à jour
        this.intervalId = setInterval(() => {
            this.updateClarity();
        }, this.updateInterval);
        
        console.log('AutoClarity démarré avec seed:', this.seedValue.toFixed(3));
    }
    
    /**
     * Arrête l'auto-clarity
     */
    stop() {
        if (!this.isActive) {
            console.log('AutoClarity déjà arrêté');
            return;
        }
        
        this.isActive = false;
        
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        
        console.log('AutoClarity arrêté');
    }
    
    /**
     * Toggle l'état de l'auto-clarity
     */
    toggle() {
        if (this.isActive) {
            this.stop();
        } else {
            this.start();
        }
    }
    
    /**
     * Configure les paramètres de la courbe
     * @param {Object} config - Configuration
     * @param {number} config.speed - Vitesse de progression (défaut: 0.01)
     * @param {number} config.amplitude - Amplitude de variation (défaut: 0.3)
     * @param {number} config.center - Valeur centrale (défaut: 0.5)
     * @param {number} config.minValue - Valeur minimale (défaut: 0.1)
     * @param {number} config.maxValue - Valeur maximale (défaut: 0.9)
     * @param {number} config.updateInterval - Intervalle de mise à jour en ms (défaut: 100)
     */
    configure(config) {
        if (config.speed !== undefined) this.speed = config.speed;
        if (config.amplitude !== undefined) this.amplitude = config.amplitude;
        if (config.center !== undefined) this.center = config.center;
        if (config.minValue !== undefined) this.minValue = config.minValue;
        if (config.maxValue !== undefined) this.maxValue = config.maxValue;
        if (config.updateInterval !== undefined) {
            this.updateInterval = config.updateInterval;
            // Redémarrer l'intervalle si actif
            if (this.isActive) {
                this.stop();
                this.start();
            }
        }
        
        console.log('AutoClarity configuré:', {
            speed: this.speed,
            amplitude: this.amplitude,
            center: this.center,
            minValue: this.minValue,
            maxValue: this.maxValue,
            updateInterval: this.updateInterval
        });
    }
    
    /**
     * Obtient l'état actuel
     * @returns {Object} État de l'auto-clarity
     */
    getState() {
        return {
            isActive: this.isActive,
            speed: this.speed,
            amplitude: this.amplitude,
            center: this.center,
            minValue: this.minValue,
            maxValue: this.maxValue,
            updateInterval: this.updateInterval,
            time: this.time
        };
    }
}

// Instance globale
let autoClarity = null;

/**
 * Initialise l'auto-clarity
 */
function initAutoClarity() {
    if (!autoClarity) {
        autoClarity = new AutoClarity();
        console.log('AutoClarity initialisé globalement');
    }
    return autoClarity;
}

/**
 * Obtient l'instance globale d'auto-clarity
 */
function getAutoClarity() {
    if (!autoClarity) {
        return initAutoClarity();
    }
    return autoClarity;
}
