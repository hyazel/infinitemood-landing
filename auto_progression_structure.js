/**
 * AutoProgressionStructure - Auto-génération de progression structure
 * Simule les clics sur les crans du slider selon une matrice de probabilités
 * Compatible avec le système AutoParameters global
 */

class AutoProgressionStructure {
    constructor() {
        this.isActive = false;
        this.intervalId = null;
        this.updateInterval = 60000; // 1 minute par défaut
        this.currentCranIndex = 0; // Index du cran actuel (0-6)
        this.seedCranIndex = 0; // Index de départ (seed) - sera mis à jour avec la valeur actuelle du slider
        this.time = 0;
        
        // Configuration des crans (valeurs du slider)
        this.crans = [0, 0.15, 0.25, 0.35, 0.45, 0.75, 0.95]; // Valeurs des crans
        
        // Matrice de probabilités de transition (par défaut: toujours au cran suivant)
        this.transitionMatrix = [
            [0, 1, 0, 0, 0, 0, 0], // Cran 0 -> Cran 1 (100%)
            [0, 0, 1, 0, 0, 0, 0], // Cran 1 -> Cran 2 (100%)
            [0, 0, 0, 1, 0, 0, 0], // Cran 2 -> Cran 3 (100%)
            [0, 0, 0, 0, 1, 0, 0], // Cran 3 -> Cran 4 (100%)
            [0, 0, 0, 0, 0, 1, 0], // Cran 4 -> Cran 5 (100%)
            [0, 0, 0, 0, 0, 0, 1], // Cran 5 -> Cran 6 (100%)
            [1, 0, 0, 0, 0, 0, 0]  // Cran 6 -> Cran 0 (100% - retour au début)
        ];
        
        console.log('AutoProgressionStructure initialisé');
    }
    
    /**
     * Obtient la valeur du cran actuel
     * @returns {number} Valeur du cran (0-1)
     */
    getCurrentCranValue() {
        return this.crans[this.currentCranIndex];
    }
    
    /**
     * Trouve l'index du cran le plus proche d'une valeur donnée
     * @param {number} value - Valeur à rechercher (0-1)
     * @returns {number} Index du cran le plus proche
     */
    findClosestCranIndex(value) {
        let closestIndex = 0;
        let minDistance = Math.abs(this.crans[0] - value);
        
        for (let i = 1; i < this.crans.length; i++) {
            const distance = Math.abs(this.crans[i] - value);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }
        
        return closestIndex;
    }
    
    /**
     * Met à jour la valeur seed (point de départ) avec la valeur actuelle du slider
     * @param {number} currentValue - Valeur actuelle du slider (0-1)
     */
    updateSeed(currentValue) {
        this.seedCranIndex = this.findClosestCranIndex(currentValue);
        this.currentCranIndex = this.seedCranIndex;
        console.log('AutoProgressionStructure - Seed mis à jour:', this.seedCranIndex, '(valeur:', this.crans[this.seedCranIndex].toFixed(2) + ')');
    }
    
    /**
     * Sélectionne le prochain cran selon la matrice de probabilités
     */
    selectNextCran() {
        const currentRow = this.transitionMatrix[this.currentCranIndex];
        const random = Math.random();
        let cumulativeProbability = 0;
        
        // Trouver le prochain cran selon les probabilités
        for (let i = 0; i < currentRow.length; i++) {
            cumulativeProbability += currentRow[i];
            if (random <= cumulativeProbability) {
                this.currentCranIndex = i;
                break;
            }
        }
        
        console.log(`AutoProgressionStructure - Transition vers cran ${this.currentCranIndex} (valeur: ${this.getCurrentCranValue()})`);
    }
    
    /**
     * Met à jour le paramètre FMOD progression-structure
     */
    updateProgressionStructure() {
        if (!this.isActive) return;
        
        const cranValue = this.getCurrentCranValue();
        
        // Envoyer à FMOD si la fonction est disponible
        if (typeof setProgressionStructure === 'function') {
            setProgressionStructure(cranValue * 100); // Convertir en 0-100 pour FMOD
            console.log('AutoProgressionStructure - Valeur mise à jour:', cranValue, '(FMOD:', cranValue * 100 + ')');
        }
        
        // Mettre à jour la position visuelle du slider (si nécessaire)
        this.updateSliderNotches();
        
        // Incrémenter le temps
        this.time += 1;
    }
    
    /**
     * Met à jour l'affichage des crans du slider
     */
    updateSliderNotches() {
        const notches = document.querySelectorAll('#slider-notches > div');
        
        notches.forEach(notch => {
            const value = parseFloat(notch.getAttribute('data-value'));
            const currentValue = this.getCurrentCranValue();
            
            if (Math.abs(value - currentValue) < 0.001) { // Tolérance pour les comparaisons flottantes
                // Cran actuel : orange avec animation
                notch.className = 'absolute w-3 h-3 bg-[#FD9F29] rounded-full shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-300 ease-in-out transform scale-110';
            } else {
                // Cran inactif : gris
                notch.className = 'absolute w-3 h-3 bg-[#292525] rounded-full shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-300 ease-in-out';
            }
        });
    }
    
    /**
     * Démarre l'auto-progression-structure en utilisant la valeur actuelle du slider comme seed
     */
    start() {
        if (this.isActive) {
            console.log('AutoProgressionStructure déjà actif');
            return;
        }
        
        // Récupérer la valeur actuelle du slider comme seed
        if (typeof window !== 'undefined' && window.currentValue !== undefined) {
            this.updateSeed(window.currentValue);
        }
        
        this.isActive = true;
        
        // Démarrer l'intervalle de mise à jour
        this.intervalId = setInterval(() => {
            this.selectNextCran();
            this.updateProgressionStructure();
        }, this.updateInterval);
        
        console.log('AutoProgressionStructure démarré avec seed cran:', this.seedCranIndex, '- intervalle:', this.updateInterval + 'ms');
    }
    
    /**
     * Arrête l'auto-progression-structure
     */
    stop() {
        if (!this.isActive) {
            console.log('AutoProgressionStructure déjà arrêté');
            return;
        }
        
        this.isActive = false;
        
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        
        console.log('AutoProgressionStructure arrêté');
    }
    
    /**
     * Toggle l'état de l'auto-progression-structure
     */
    toggle() {
        if (this.isActive) {
            this.stop();
        } else {
            this.start();
        }
    }
    
    /**
     * Configure les paramètres
     * @param {Object} config - Configuration
     * @param {number} config.updateInterval - Intervalle en ms (défaut: 60000)
     * @param {Array} config.transitionMatrix - Matrice de probabilités
     * @param {number} config.currentCranIndex - Index du cran initial
     */
    configure(config) {
        if (config.updateInterval !== undefined) {
            this.updateInterval = config.updateInterval;
            // Redémarrer l'intervalle si actif
            if (this.isActive) {
                this.stop();
                this.start();
            }
        }
        
        if (config.transitionMatrix !== undefined) {
            this.transitionMatrix = config.transitionMatrix;
        }
        
        if (config.currentCranIndex !== undefined) {
            this.currentCranIndex = config.currentCranIndex;
        }
        
        console.log('AutoProgressionStructure configuré:', {
            updateInterval: this.updateInterval,
            currentCranIndex: this.currentCranIndex,
            transitionMatrix: this.transitionMatrix
        });
    }
    
    /**
     * Définit une matrice de probabilités personnalisée
     * @param {Array} matrix - Matrice 7x7 de probabilités
     */
    setTransitionMatrix(matrix) {
        if (matrix.length === 7 && matrix.every(row => row.length === 7)) {
            this.transitionMatrix = matrix;
            console.log('Matrice de transition mise à jour');
        } else {
            console.error('Matrice de transition invalide - doit être 7x7');
        }
    }
    
    /**
     * Obtient l'état actuel
     * @returns {Object} État de l'auto-progression-structure
     */
    getState() {
        return {
            isActive: this.isActive,
            updateInterval: this.updateInterval,
            currentCranIndex: this.currentCranIndex,
            currentCranValue: this.getCurrentCranValue(),
            crans: this.crans,
            transitionMatrix: this.transitionMatrix,
            time: this.time
        };
    }
}

// Instance globale
let autoProgressionStructure = null;

/**
 * Initialise l'auto-progression-structure
 */
function initAutoProgressionStructure() {
    if (!autoProgressionStructure) {
        autoProgressionStructure = new AutoProgressionStructure();
        console.log('AutoProgressionStructure initialisé globalement');
    }
    return autoProgressionStructure;
}

/**
 * Obtient l'instance globale d'auto-progression-structure
 */
function getAutoProgressionStructure() {
    if (!autoProgressionStructure) {
        return initAutoProgressionStructure();
    }
    return autoProgressionStructure;
}
