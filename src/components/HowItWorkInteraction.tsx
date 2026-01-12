import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import interactionImage from '../assets/fragmnt-interaction-full.jpg';
import AudioManager from '../utils/AudioManager';

const steps = [
    {
        id: 'intro',
        title: "Modifiez l’ambiance sonore, c'est personnalisable",
        subtitle: "",
        highlight: "personnalisable",
        slider: null
    },
    {
        id: 'weather',
        title: "Changez la météo.",
        subtitle: "Calme, pluie, orage… la météo s’adapte en temps réel.",
        highlight: "météo",
        slider: { label: "Intensité", left: "Calme", right: "Tempête" }
    },
    {
        id: 'space',
        title: "Ouvrez l’espace sonore.",
        subtitle: "Plus proche ou plus lointain: la réverbération et l’espace changent en direct.",
        highlight: "l’espace",
        slider: { label: "Espace", left: "Intime", right: "Vaste" }
    },
    {
        id: 'environment',
        title: "Ajustez le monde autour.",
        subtitle: "Plus ou moins de sons environnents, instantanément.",
        highlight: "monde",
        slider: { label: "Balance", left: "Nature", right: "Urbain" }
    }
];

// Recreated locally to match visual style but specialized usage
const WeatherSlider = ({ level, onChange }: { level: number, onChange: (val: number) => void }) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleTrackClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const height = rect.height;
        const clickY = e.clientY - rect.top; // Y relative to top

        // Invert: Bottom is 0.
        // 0-25% -> 3 (Top)
        const pct = clickY / height;
        let newLevel = 0;
        if (pct < 0.25) newLevel = 3;
        else if (pct < 0.50) newLevel = 2;
        else if (pct < 0.75) newLevel = 1;
        else newLevel = 0;

        onChange(newLevel);
    };

    return (
        <div
            ref={sliderRef}
            className="relative w-16 h-64 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl cursor-pointer overflow-hidden"
            onClick={handleTrackClick}
        >
            {/* Steps Indicators */}
            <div className="absolute inset-0 flex flex-col items-center justify-between py-8 pointer-events-none">
                {[3, 2, 1, 0].map((s) => (
                    <div key={s} className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${s <= level ? 'bg-white' : 'bg-white/20'}`} />
                ))}
            </div>

            {/* Active Thumb (Crystal Glow) */}
            <motion.div
                className="absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center p-1"
                animate={{
                    top: `${(3 - level) * 25 + 10}%` // Matches logic: 3->10% (near top), 0->85% (near bottom)
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
                <div className="w-full h-full bg-slate-200 rounded-full blur-[2px]" />
            </motion.div>
        </div>
    );
};


// Nature Slider - Clone of WeatherSlider but with nature assets
const NatureSlider = ({ level, onChange }: { level: number, onChange: (val: number) => void }) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleTrackClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const height = rect.height;
        const clickY = e.clientY - rect.top; // Y relative to top

        // Invert: Bottom is 0.
        // 0-25% -> 3 (Top)
        const pct = clickY / height;
        let newLevel = 0;
        if (pct < 0.25) newLevel = 3;
        else if (pct < 0.50) newLevel = 2;
        else if (pct < 0.75) newLevel = 1;
        else newLevel = 0;

        onChange(newLevel);
    };

    return (
        <div
            ref={sliderRef}
            className="relative w-16 h-64 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl cursor-pointer overflow-hidden"
            onClick={handleTrackClick}
        >
            {/* Steps Indicators */}
            <div className="absolute inset-0 flex flex-col items-center justify-between py-8 pointer-events-none">
                {[3, 2, 1, 0].map((s) => (
                    <div key={s} className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${s <= level ? 'bg-white' : 'bg-white/20'}`} />
                ))}
            </div>

            {/* Active Thumb (Crystal Glow) */}
            <motion.div
                className="absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center p-1"
                animate={{
                    top: `${(3 - level) * 25 + 10}%` // Matches logic: 3->10% (near top), 0->85% (near bottom)
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
                <div className="w-full h-full bg-slate-200 rounded-full blur-[2px]" />
            </motion.div>
        </div>
    );
};
const XYPad = ({ value, onChange }: { value: { x: number, y: number }, onChange: (val: { x: number, y: number }) => void }) => {
    const padRef = useRef<HTMLDivElement>(null);

    const handleTrackInteraction = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!padRef.current) return;
        const rect = padRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        // X: 0 (Left) -> 1 (Right)
        let newX = clickX / width;
        // Y: 0 (Bottom) -> 1 (Top) => Inverted Y because screen Y grows downwards
        let newY = 1 - (clickY / height);

        // Clamp
        newX = Math.max(0, Math.min(1, newX));
        newY = Math.max(0, Math.min(1, newY));

        onChange({ x: newX, y: newY });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (e.buttons !== 1) return; // Only if dragging
        handleTrackInteraction(e);
    };

    // Calculate rotation based on value (0..1)
    // X axis (Profondeur): 0 -> -rotateY, 1 -> +rotateY
    // Y axis (Immersion): 0 -> -rotateX (tilt towards), 1 -> +rotateX (tilt away)
    const rotateY = (value.x - 0.5) * 15; // Max 7.5deg tilt (subtle)
    const rotateX = (value.y - 0.5) * 15; // Max 7.5deg tilt

    return (
        <div className="flex items-center gap-4 perspective-[1000px]">
            {/* Y Axis Label Container */}
            <div className="h-48 flex items-center justify-center -mr-2">
                <span className="text-[10px] uppercase tracking-widest text-text-secondary -rotate-90 whitespace-nowrap">
                    Immersion
                </span>
            </div>

            <div className="flex flex-col items-center gap-3">
                <motion.div
                    ref={padRef}
                    className="relative w-48 h-48 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl cursor-pointer overflow-hidden touch-none"
                    onMouseDown={handleTrackInteraction}
                    onMouseMove={handleMouseMove}
                    animate={{ rotateX, rotateY }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Grid / Visual Guidelines */}
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                            backgroundSize: '20% 20%'
                        }}
                    />

                    {/* Active Thumb (Crystal Glow) */}
                    <motion.div
                        className="absolute w-8 h-8 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center p-1 pointer-events-none"
                        style={{
                            left: `${value.x * 100}%`,
                            top: `${(1 - value.y) * 100}%`,
                            x: '-50%',
                            y: '-50%'
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                        <div className="w-full h-full bg-slate-200 rounded-full blur-[2px]" />
                    </motion.div>
                </motion.div>

                {/* X Axis Label */}
                <span className="text-[10px] uppercase tracking-widest text-text-secondary">
                    Profondeur
                </span>
            </div>
        </div>
    );
};

const HowItWorkInteraction = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);
    const [weatherStep, setWeatherStep] = useState(0); // Default to level 0 (Calm)
    const [natureStep, setNatureStep] = useState(0); // Default to level 0
    const [spaceValues, setSpaceValues] = useState({ x: 0.5, y: 0.5 }); // X: Profondeur, Y: Immersion

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const weatherStepRef = useRef(weatherStep);
    weatherStepRef.current = weatherStep;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Map scroll progress to steps (0 to 3)
        // 4 steps over the scroll range.
        const stepIndex = Math.min(Math.floor(latest * steps.length), steps.length - 1);

        if (stepIndex !== activeStep) {
            setActiveStep(stepIndex);

            // Trigger Meteo Snapshot when on Weather step (index 1)
            if (stepIndex === 1) {
                AudioManager.getInstance().activateMeteoSnapshot();
                AudioManager.getInstance().playMeteo();
                // Ensure audio level matches visual state on entry
                AudioManager.getInstance().setMeteoLevel(weatherStepRef.current);
            } else {
                AudioManager.getInstance().deactivateMeteoSnapshot();
                AudioManager.getInstance().stopMeteo();
            }
        }
    });

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-background-primary">

            <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 h-full">

                    {/* --- LEFT: PHONE MOCKUP (Fixed) --- */}
                    <div className="relative w-[300px] h-[660px] shrink-0">
                        {/* Phone Bezel */}
                        <div
                            style={{
                                borderColor: '#111',
                                boxShadow: '0px 0px 50px rgba(255,179,92,0.3)' // Saffron glow
                            }}
                            className="absolute inset-0 border-[12px] rounded-[48px] z-20 pointer-events-none"
                        ></div>

                        {/* Dynamic Island */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                            <div className="w-3/4 h-3/4 flex items-center justify-end pr-1">
                                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="absolute top-[120px] -left-[16px] w-[4px] h-[40px] bg-primitive-neutral-orchid-ash-600 rounded-l-md"></div>
                        <div className="absolute top-[170px] -left-[16px] w-[4px] h-[40px] bg-primitive-neutral-orchid-ash-600 rounded-l-md"></div>
                        <div className="absolute top-[140px] -right-[16px] w-[4px] h-[60px] bg-primitive-neutral-orchid-ash-600 rounded-r-md"></div>

                        {/* Screen Content */}
                        <div className="absolute inset-0 rounded-[48px] overflow-hidden bg-black z-10 transition-all duration-500">
                            {/* Base Image with Pan & Zoom */}
                            <img
                                src={interactionImage}
                                alt="Interaction"
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${activeStep === 1 ? 'scale-[1.5] origin-top-left' : // Weather: Top Left
                                    activeStep === 2 ? 'scale-[1.5] origin-bottom' : // Space: Bottom
                                        activeStep === 3 ? 'scale-[1.5] origin-top-right' : // Environment: Top Right
                                            'scale-100 origin-center' // Default
                                    }`}
                            />

                            {/* Persistent Audio Badge */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 bg-primitive-neutral-orchid-ash-900/80 backdrop-blur-md rounded-full border border-white/5 shadow-xl z-20">
                                <div className="flex items-end gap-[3px] h-3">
                                    <motion.div animate={{ height: [4, 12, 6, 12] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1 bg-primitive-orchid-bloom rounded-full" />
                                    <motion.div animate={{ height: [8, 4, 12, 6] }} transition={{ duration: 0.9, repeat: Infinity, delay: 0.1 }} className="w-1 bg-primitive-orchid-core rounded-full" />
                                    <motion.div animate={{ height: [6, 12, 4, 10] }} transition={{ duration: 0.7, repeat: Infinity, delay: 0.2 }} className="w-1 bg-primitive-orchid-deep rounded-full" />
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-white font-bold">Audio Actif</span>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: TEXT CONTENT (Dynamic) --- */}
                    <div className="w-full max-w-xl h-[300px] flex items-center justify-center relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={steps[activeStep].id}
                                className="flex flex-col justify-center text-center md:text-left absolute inset-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                    {steps[activeStep].highlight && steps[activeStep].title.includes(steps[activeStep].highlight) ? (
                                        steps[activeStep].title.split(steps[activeStep].highlight).map((part, i, arr) => (
                                            <span key={i}>
                                                {part}
                                                {i < arr.length - 1 && (
                                                    <span className="text-primitive-saffron-core">{steps[activeStep].highlight}</span>
                                                )}
                                            </span>
                                        ))
                                    ) : (
                                        steps[activeStep].title
                                    )}
                                </h2>
                                {steps[activeStep].subtitle && (
                                    <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed mb-8">
                                        {steps[activeStep].subtitle}
                                    </p>
                                )}

                                {/* Interaction Component */}
                                {steps[activeStep].id === 'weather' ? (
                                    <div className="mt-8 flex flex-col items-center gap-6">
                                        <WeatherSlider
                                            level={weatherStep}
                                            onChange={(val) => {
                                                setWeatherStep(val);
                                                AudioManager.getInstance().setMeteoLevel(val);
                                            }}
                                        />

                                        {/* Active Icon Indicator */}
                                        <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                                            <img
                                                src={`${import.meta.env.BASE_URL}assets/meteo_parameter/level_${weatherStep}.png`}
                                                alt={`Weather Level ${weatherStep}`}
                                                className="w-10 h-10 object-contain drop-shadow-md"
                                            />
                                        </div>
                                    </div>
                                ) : steps[activeStep].id === 'space' ? (
                                    <div className="mt-8 flex flex-col items-center gap-6">
                                        <XYPad
                                            value={spaceValues}
                                            onChange={(val) => setSpaceValues(val)}
                                        />
                                    </div>

                                ) : steps[activeStep].id === 'environment' ? (
                                    <div className="mt-8 flex flex-col items-center gap-6">
                                        <NatureSlider
                                            level={natureStep}
                                            onChange={(val) => setNatureStep(val)}
                                        />

                                        {/* Active Icon Indicator */}
                                        <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                                            <img
                                                src={`${import.meta.env.BASE_URL}assets/nature_parameter/level_${natureStep}.png`}
                                                alt={`Nature Level ${natureStep}`}
                                                className="w-10 h-10 object-contain drop-shadow-md"
                                                onError={(e) => {
                                                    // Fallback if image not found to avoid broken icon
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    </div>
                                ) : steps[activeStep].slider && (
                                    <div className="w-full max-w-sm mt-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-text-secondary mb-3">
                                            <span>{steps[activeStep].slider.left}</span>
                                            <span className="text-white">{steps[activeStep].slider.label}</span>
                                            <span>{steps[activeStep].slider.right}</span>
                                        </div>
                                        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div className="absolute top-0 left-0 bottom-0 bg-primitive-saffron-core w-1/2 rounded-full" />
                                            {/* Draggable Thumb Simulation */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

        </section >
    );
};

export default HowItWorkInteraction;
