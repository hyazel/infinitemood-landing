/**
 * EvolutionManager
 * Orchestrates the automated evolution of audio parameters based on configuration.
 */
class EvolutionManager {
    constructor() {
        this.activeTimers = [];
        this.isRunning = false;
    }

    /**
     * Start the evolution engine with a specific configuration.
     * @param {Object} config - The Track Configuration object
     */
    start(config) {
        this.stop(); // Clear existing timers
        this.isRunning = true;

        console.log(`[EvolutionManager] Starting evolution for: ${config.trackName}`);

        config.parameters.forEach(param => {
            const strategyInstance = param.strategy;

            if (!strategyInstance || typeof strategyInstance.getNextValue !== 'function') {
                console.warn(`[EvolutionManager] Invalid strategy for parameter '${param.name}'.`);
                return;
            }

            // Function to execute the update
            const updateParam = () => {
                const newValue = strategyInstance.getNextValue();
                //console.log(`[EvolutionManager] Updating ${param.name} -> ${newValue} (Strategy: ${strategyInstance.constructor.name}, Scope: ${param.scope || 'global'})`);

                // Dispatch to Local or Global FMOD Interface
                if (param.scope === 'local') {
                    if (typeof setEventParameter === 'function') {
                        setEventParameter(config.trackName, param.name, newValue);
                    }
                } else {
                    // Default to Global
                    if (typeof setGlobalParameter === 'function') {
                        setGlobalParameter(param.name, newValue);
                    }
                }
            };

            // Execute immediately? 
            // Often good to set an initial value, or wait for the first interval.
            // Let's execute immediately to ensure we aren't stuck on a static value for 1 minute.
            updateParam();

            // Set Interval
            const timerId = setInterval(updateParam, param.interval);
            this.activeTimers.push(timerId);
        });
    }

    /**
     * Stop all evolution
     */
    stop() {
        this.activeTimers.forEach(id => clearInterval(id));
        this.activeTimers = [];
        this.isRunning = false;
        console.log("[EvolutionManager] Stopped.");
    }
}

// Global Instance
window.EvolutionManager = new EvolutionManager();
