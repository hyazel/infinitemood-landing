/**
 * RandomStrategy
 * Returns a random integer between min and max (inclusive).
 */
class RandomStrategy {
    constructor() {}

    /**
     * @param {Object} params - { min: number, max: number }
     * @returns {number}
     */
    getNextValue(params) {
        const min = params.min !== undefined ? params.min : 0;
        const max = params.max !== undefined ? params.max : 100;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Export for browser (global scope for simplicity in this project structure)
window.RandomStrategy = RandomStrategy;
