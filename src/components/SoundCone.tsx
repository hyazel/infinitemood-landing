import { useRef, useEffect } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';

interface SoundConeProps {
    space: number; // 0 to 1 (Angle/Width)
    reverb: number; // 0 to 1 (Reach/Intensity)
    onChange: (val: { x: number; y: number }) => void;
}

const SoundCone = ({ space, reverb, onChange }: SoundConeProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    // Explicit MotionValues to guarantee updates
    const spaceMV = useMotionValue(space);
    const reverbMV = useMotionValue(reverb);

    // Sync MotionValues with Props
    useEffect(() => {
        spaceMV.set(space);
    }, [space, spaceMV]);

    useEffect(() => {
        reverbMV.set(reverb);
    }, [reverb, reverbMV]);

    // Interaction handling
    const updateValues = (clientX: number, clientY: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        // X: Space (Width of beam)
        const rawX = (clientX - rect.left) / width;
        const newSpace = Math.max(0, Math.min(1, rawX));

        // Y: Reverb (Reach of beam)
        const relY = clientY - rect.top;
        const rawY = 1 - (relY / height);
        const newReverb = Math.max(0, Math.min(1, rawY));

        onChange({ x: newSpace, y: newReverb });
    }

    const handlePointerDown = (e: React.PointerEvent) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        isDragging.current = true;
        updateValues(e.clientX, e.clientY);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current) return;
        updateValues(e.clientX, e.clientY);
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        isDragging.current = false;
        e.currentTarget.releasePointerCapture(e.pointerId);
    };

    // Smooth springs
    const smoothSpace = useSpring(spaceMV, { stiffness: 120, damping: 20 });
    const smoothReverb = useSpring(reverbMV, { stiffness: 120, damping: 20 });

    // --- Dynamic SVG Path for the Light Beam ---
    const pathD = useTransform([smoothSpace, smoothReverb], ([s, r]) => {
        const safeS = typeof s === 'number' ? s : 0;
        const safeR = typeof r === 'number' ? r : 0;

        const W = 300; // ViewBox Width
        const H = 300; // ViewBox Height
        const CX = W / 2;
        const CY = H;   // Bottom Center (Emitter Source)

        // Beam Logic
        // Reverb controls Length (Radius)
        const minR = H * 0.2;
        const maxR = H * 1.1; // Go slightly off top
        const radius = minR + safeR * (maxR - minR);

        // Space controls Angle Spread
        const minAngle = 0.1; // Very narrow (Laser)
        const maxAngle = Math.PI * 0.9; // Almost 180 degrees
        const spread = minAngle + safeS * (maxAngle - minAngle);

        const startAngle = -Math.PI / 2 - spread / 2;
        const endAngle = -Math.PI / 2 + spread / 2;

        const x1 = CX + radius * Math.cos(startAngle);
        const y1 = CY + radius * Math.sin(startAngle);
        const x2 = CX + radius * Math.cos(endAngle);
        const y2 = CY + radius * Math.sin(endAngle);

        // A quadratic curve at the top for a soft "light dome" look instead of a hard arc
        // Or standard arc. Standard arc is cleaner for a beam.

        return `M ${CX} ${CY} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;
    });

    // --- Dynamic Gradient Opacity ---
    // As reverb increases (beam gets longer), we want it to feel "stronger" but also fade out at the tip.
    // As space increases (beam gets wider), maybe it gets slightly more diffuse?
    // As space increases (beam gets wider), maybe it gets slightly more diffuse?

    return (
        <div className="flex flex-col items-center gap-2">

            {/* Interactive Zone */}
            <div
                ref={containerRef}
                className="relative w-72 h-72 cursor-crosshair touch-none select-none flex items-end justify-center z-50 bg-white/5 rounded-2xl"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
            >
                {/* 1. The Light Beam (SVG) - NO BLUR for visibility check */}
                <svg
                    viewBox="0 0 300 300"
                    className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                    style={{ filter: "none" }}
                >
                    <defs>
                        <linearGradient id="solidBeam" x1="0.5" y1="1" x2="0.5" y2="0">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0.5" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d={pathD}
                        fill="url(#solidBeam)"
                        stroke="white"
                        strokeWidth="2"
                    />
                </svg>

                {/* 2. Core/Emitter */}
                <div className="absolute bottom-4 w-4 h-4 bg-white rounded-full z-10" />

                {/* 3. Floating Particles (Optional, adds magic) */}
                {/* Can add a few motion divs drifting up if we want maximum 'wow', but let's keep it clean first. */}



            </div>

            {/* Labels */}
            <div className="flex justify-between w-full px-8 text-white/50">
                <span className="text-[10px] uppercase tracking-[0.2em]">Focus</span>
                <span className="text-[10px] uppercase tracking-[0.2em]">Large</span>
            </div>

        </div>
    );
};

export default SoundCone;
