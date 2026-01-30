import React, { useEffect, useState } from 'react';

interface CursorPromptProps {
    label: string;
    active: boolean;
}

const CursorPrompt: React.FC<CursorPromptProps> = ({ label, active }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!active) return;

        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, [active, isVisible]);

    if (!active || !isVisible) return null;

    return (
        <div
            className="fixed pointer-events-none z-[100] flex items-center justify-center mix-blend-difference"
            style={{
                left: pos.x,
                top: pos.y,
                transform: 'translate(-50%, -50%)',
                willChange: 'left, top'
            }}
        >
            <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-lg">
                {label}
            </div>
        </div>
    );
};

export default CursorPrompt;
