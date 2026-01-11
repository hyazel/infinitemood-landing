/**
 * RandomStrategy
 * Returns a random integer between min and max (inclusive).
 */
class RandomStrategy {
    /**
     * @param {Object} config - { min: number, max: number, isFloat: boolean }
     */
    constructor(config) {
        this.config = config || {};
    }

    /**
     * @returns {number}
     */
    getNextValue() {
        const min = this.config.min !== undefined ? this.config.min : 0;
        const max = this.config.max !== undefined ? this.config.max : 100;
        const isFloat = this.config.isFloat || false;

        if (isFloat) {
            return Math.random() * (max - min) + min;
        }

        let value = Math.floor(Math.random() * (max - min + 1)) + min;

        if (value % 10 === 0) {
            value += 1;
        }

        return value;
    }
}

// Export for browser (global scope for simplicity in this project structure)
window.RandomStrategy = RandomStrategy;
