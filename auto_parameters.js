/**
 * AutoParameters - Système global d'auto-génération de paramètres
 * Contrôle l'activation/désactivation de tous les paramètres automatiques
 */

class AutoParameters {
    constructor() {
        this.isActive = false;
        this.autoModules = new Map(); // Stockage des modules auto (clarity, nature, rain, etc.)
        
        console.log('AutoParameters initialisé');
    }
    
    /**
     * Enregistre un module d'auto-génération
     * @param {string} name - Nom du module (ex: 'clarity', 'nature', 'rain')
     * @param {Object} module - Instance du module auto
     */
    registerModule(name, module) {
        this.autoModules.set(name, module);
        console.log(`Module auto '${name}' enregistré`);
    }
    
    /**
     * Démarre tous les modules auto
     */
    start() {
        if (this.isActive) {
            console.log('AutoParameters déjà actif');
            return;
        }
        
        this.isActive = true;
        
        // Démarrer tous les modules enregistrés
        this.autoModules.forEach((module, name) => {
            if (module && typeof module.start === 'function') {
                module.start();
                console.log(`Module auto '${name}' démarré`);
            }
        });
        
        console.log('AutoParameters démarré - tous les modules actifs');
    }
    
    /**
     * Arrête tous les modules auto
     */
    stop() {
        if (!this.isActive) {
            console.log('AutoParameters déjà arrêté');
            return;
        }
        
        this.isActive = false;
        
        // Arrêter tous les modules enregistrés
        this.autoModules.forEach((module, name) => {
            if (module && typeof module.stop === 'function') {
                module.stop();
                console.log(`Module auto '${name}' arrêté`);
            }
        });
        
        console.log('AutoParameters arrêté - tous les modules inactifs');
    }
    
    /**
     * Toggle l'état global
     */
    toggle() {
        if (this.isActive) {
            this.stop();
        } else {
            this.start();
        }
    }
    
    /**
     * Obtient l'état d'un module spécifique
     * @param {string} name - Nom du module
     * @returns {boolean} État du module
     */
    getModuleState(name) {
        const module = this.autoModules.get(name);
        return module ? module.isActive : false;
    }
    
    /**
     * Obtient l'état global
     * @returns {Object} État complet
     */
    getState() {
        const moduleStates = {};
        this.autoModules.forEach((module, name) => {
            moduleStates[name] = module ? module.isActive : false;
        });
        
        return {
            isActive: this.isActive,
            modules: moduleStates
        };
    }
}

// Instance globale
let autoParameters = null;

/**
 * Initialise le système AutoParameters
 */
function initAutoParameters() {
    if (!autoParameters) {
        autoParameters = new AutoParameters();
        console.log('AutoParameters initialisé globalement');
    }
    return autoParameters;
}

/**
 * Obtient l'instance globale d'AutoParameters
 */
function getAutoParameters() {
    if (!autoParameters) {
        return initAutoParameters();
    }
    return autoParameters;
}
