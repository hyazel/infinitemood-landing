/**
 * SineStrategy
 * Returns a value that oscillates between min and max over time based on a sine wave.
 */
class SineStrategy {
    /**
     * @param {Object} config - { min: number, max: number, period: number (ms), phase: number (0-1) }
     */
    constructor(config) {
        this.config = config || {};
        this.startTime = Date.now();
    }

    /**
     * @returns {number}
     */
    getNextValue() {
        const min = this.config.min !== undefined ? this.config.min : 0;
        const max = this.config.max !== undefined ? this.config.max : 1;
        const period = this.config.period || 10000; // Default 10s period
        const phase = this.config.phase || 0;

        const currentTime = Date.now();
        const elapsedTime = currentTime - this.startTime;

        // Calculate normalized sine value (-1 to 1)
        // 2 * PI * (t / T + phase)
        const sineValue = Math.sin(2 * Math.PI * (elapsedTime / period + phase));

        // Map (-1 to 1) to (min to max)
        // (val + 1) / 2 -> 0 to 1
        return min + (max - min) * ((sineValue + 1) / 2);
    }
}

// Export
window.SineStrategy = SineStrategy;
