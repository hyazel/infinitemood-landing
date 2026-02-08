import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticBadgeProps {
    children: React.ReactNode;
    strength?: number; // How far it moves (default: 30)
    range?: number;    // Detection radius (default: 100)
    className?: string;
}

const MagneticBadge: React.FC<MagneticBadgeProps> = ({
    children,
    strength = 15, // Much more subtle (was 40)
    range = 100,   // Smaller range (was 150)
    className = ""
}) => {
    const ref = useRef<HTMLDivElement>(null);

    // Motion values for the badge position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth movement
    // Stiffer and heavier feel
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (distance < range) {
            // Calculate attraction (stronger when closer)
            // We want it to move TOWARDS the mouse, so we use the distance vector
            const pull = 1 - (distance / range); // 1 at center, 0 at edge
            const moveX = distanceX * pull * (strength / (rect.width / 2));
            const moveY = distanceY * pull * (strength / (rect.height / 2));

            x.set(moveX);
            y.set(moveY);
        } else {
            x.set(0);
            y.set(0);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={`cursor-pointer ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default MagneticBadge;
