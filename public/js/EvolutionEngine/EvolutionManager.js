/**
 * EvolutionManager
 * Orchestrates the automated evolution of audio parameters based on configuration.
 */
class EvolutionManager {
    constructor() {
        this.strategies = {
            'Random': new window.RandomStrategy()
            // Add other strategies here (Linear, Sine, etc.)
        };
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
            const strategy = this.strategies[param.strategy];
            if (!strategy) {
                console.warn(`[EvolutionManager] Strategy '${param.strategy}' not found.`);
                return;
            }

            // Function to execute the update
            const updateParam = () => {
                const newValue = strategy.getNextValue(param.config);
                console.log(`[EvolutionManager] Updating ${param.name} -> ${newValue} (Strategy: ${param.strategy})`);
                
                // Call the global FMOD interface
                if (typeof setGlobalParameter === 'function') {
                    setGlobalParameter(param.name, newValue);
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
