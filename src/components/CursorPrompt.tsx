import React, { useEffect, useState } from 'react';

interface CursorPromptProps {
    label: string;
    active: boolean;
}

const CursorPrompt: React.FC<CursorPromptProps> = ({ label, active }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    const [rects, setRects] = useState<DOMRect[]>([]);

    // Cache the exclusion zones on mount and resizing/scroll
    useEffect(() => {
        if (!active) return;

        const updateRects = () => {
            const elements = document.querySelectorAll('[data-no-cursor="true"]');
            const newRects: DOMRect[] = [];
            for (let i = 0; i < elements.length; i++) {
                newRects.push(elements[i].getBoundingClientRect());
            }
            setRects(newRects);
        };

        // Initial update
        updateRects();

        // Update on resize or scroll as these change layouts
        window.addEventListener('resize', updateRects);
        window.addEventListener('scroll', updateRects);

        return () => {
            window.removeEventListener('resize', updateRects);
            window.removeEventListener('scroll', updateRects);
        };
    }, [active]);

    useEffect(() => {
        if (!active) return;

        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });

            // Check if hovering over or NEAR an excluded element
            const target = e.target as HTMLElement;
            const isDirectlyOver = target.closest('[data-no-cursor="true"]');

            if (isDirectlyOver) {
                if (isVisible) setIsVisible(false);
                return;
            }

            // Proximity check using CACHED rects
            let isNear = false;
            const threshold = 100; // px
            const mx = e.clientX;
            const my = e.clientY;

            for (const rect of rects) {
                // If inside (should be caught by isDirectlyOver, but for safety)
                if (mx >= rect.left && mx <= rect.right && my >= rect.top && my <= rect.bottom) {
                    isNear = true;
                    break;
                }

                // Distance to edges
                const dx = Math.max(rect.left - mx, 0, mx - rect.right);
                const dy = Math.max(rect.top - my, 0, my - rect.bottom);
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < threshold) {
                    isNear = true;
                    break;
                }
            }

            if (isNear) {
                if (isVisible) setIsVisible(false);
            } else {
                if (!isVisible) setIsVisible(true);
            }
        };

        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, [active, isVisible, rects]);

    if (!active) return null;

    return (
        <div
            className="fixed pointer-events-none z-[100] flex items-center justify-center mix-blend-difference transition-opacity duration-300 ease-out"
            style={{
                left: pos.x,
                top: pos.y,
                transform: 'translate(-50%, -50%)',
                opacity: isVisible ? 1 : 0,
                willChange: 'left, top, opacity'
            }}
        >
            <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-lg">
                {label}
            </div>
        </div>
    );
};

export default CursorPrompt;
