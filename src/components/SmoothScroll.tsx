import { useEffect } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProps {
    children: React.ReactNode;
}

// Global Lenis instance for scroll control
let lenisInstance: Lenis | null = null;

// Function to stop scrolling (lock)
export const stopScroll = () => {
    if (lenisInstance) {
        lenisInstance.stop();
    }
};

// Function to start scrolling (unlock)
export const startScroll = () => {
    if (lenisInstance) {
        lenisInstance.start();
    }
};

// Getter for direct Lenis access if needed
export const getLenis = () => lenisInstance;

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.0, // Increased for "premium" smooth feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Store the instance globally
        lenisInstance = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
