import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useInView } from 'framer-motion';
import interactionImage from '../assets/fragmnt-interaction-full.jpg';
import AudioManager from '../utils/AudioManager';
import SoundCone from './SoundCone';
import MouseScrollIndicator from './MouseScrollIndicator';

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
    }
];

// Icons
// import { Sun, CloudLightning, TreeDeciduous, Building2 } from 'lucide-react'; // REMOVED



// Recreated locally to match visual style but specialized usage
const WeatherSlider = ({ level, onChange }: { level: number, onChange: (val: number) => void }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    // State for ghost preview
    const [hoverLevel, setHoverLevel] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    // Levels: 0=Calme, 1=Pluie, 2=Orage, 3=Tempête
    // Levels: 0=Calme, 1=Pluie, 2=Orage, 3=Tempête
    // Colors are defined in segmentColors


    // Segment colors for gauge effect
    const segmentColors = [
        "bg-sky-400/20",   // 0: Calme (Clear/Light Blue)
        "bg-blue-500/30",  // 1: Pluie (Rain/Blue)
        "bg-indigo-500/40",// 2: Orage (Storm/Indigo)
        "bg-violet-600/50" // 3: Tempête (Deep Storm/Violet)
    ];

    const calculateLevel = (clientY: number) => {
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const height = rect.height;
        const relativeY = clientY - rect.top;

        // Clamp relativeY
        const clampedY = Math.max(0, Math.min(height, relativeY));

        // Invert: Bottom is 0.
        // 0-25% -> 3 (Top)
        const pct = clampedY / height;
        let newLevel = 0;
        if (pct < 0.25) newLevel = 3;
        else if (pct < 0.50) newLevel = 2;
        else if (pct < 0.75) newLevel = 1;
        else newLevel = 0;

        return newLevel;
    };

    const handlePointerDown = (e: React.PointerEvent) => {
        e.preventDefault();
        setIsDragging(true);
        (e.target as Element).setPointerCapture(e.pointerId);

        const newLevel = calculateLevel(e.clientY);
        if (newLevel !== undefined && newLevel !== level) {
            onChange(newLevel);
        }
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        e.preventDefault();
        const navLevel = calculateLevel(e.clientY);

        // Always update ghost preview
        if (navLevel !== undefined) {
            setHoverLevel(navLevel);
        }

        if (isDragging && navLevel !== undefined && navLevel !== level) {
            onChange(navLevel);
        }
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        setIsDragging(false);
        (e.target as Element).releasePointerCapture(e.pointerId);
    };

    const handlePointerLeave = (e: React.PointerEvent) => {
        if (isDragging) {
            setIsDragging(false);
            (e.target as Element).releasePointerCapture(e.pointerId);
        }
        setHoverLevel(null);
    };

    return (
        <motion.div
            ref={sliderRef}
            className="relative w-16 h-64 rounded-2xl touch-none cursor-pointer"
            whileHover={{ scale: 1.0 }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
        >
            {/* Segmented Gauge Track */}
            <div className="absolute inset-0 flex flex-col gap-1.5 p-1.5 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl">
                {[3, 2, 1, 0].map((s) => {
                    const isActive = s <= level;
                    const isCurrent = s === level;
                    const isHovered = s === hoverLevel;
                    const isPreview = !isActive && isHovered;

                    return (
                        <div
                            key={s}
                            className={`flex-1 w-full rounded-lg transition-all duration-200 border border-transparent flex items-center justify-center relative
                                ${isActive ? segmentColors[s] : 'bg-white/5'}
                                ${isPreview ? 'bg-white/10 border-white/20' : ''}
                                ${s === level ? 'shadow-[0_0_15px_rgba(255,255,255,0.3)] ring-1 ring-white/50 z-10' : ''}
                            `}
                        >
                            <motion.img
                                key={`icon-${s}`}
                                src={`${import.meta.env.BASE_URL}assets/meteo_parameter/level_${s}.png`}
                                alt=""
                                animate={{
                                    scale: isCurrent ? 1.4 : (isActive ? 1 : 0.9),
                                    opacity: isCurrent ? 1 : 0.5,
                                    filter: isCurrent
                                        ? 'brightness(1.5) drop-shadow(0 0 8px rgba(255,255,255,0.8)) grayscale(0%)'
                                        : 'brightness(0.5) drop-shadow(0 0 0px transparent) grayscale(100%)'
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="w-8 h-8 object-contain"
                            />
                        </div>
                    );
                })}
            </div>

        </motion.div>
    );
};


// Nature Slider - Clone of WeatherSlider but with nature assets
const NatureSlider = ({ level, onChange }: { level: number, onChange: (val: number) => void }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [hoverLevel, setHoverLevel] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Auto-hide confirmation after 2s
    useEffect(() => {
        if (showConfirmation) {
            const timer = setTimeout(() => setShowConfirmation(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [showConfirmation]);

    const labels = ["PURE NATURE", "JARDIN", "PARC", "URBAIN"];
    const textColors = ["text-emerald-300", "text-emerald-100", "text-amber-200", "text-orange-200"];

    // Segment colors for gauge effect
    const segmentColors = [
        "bg-emerald-400/20",  // 0: Nature
        "bg-emerald-500/30",  // 1: Jardin
        "bg-amber-500/30",    // 2: Parc
        "bg-orange-600/40"    // 3: Urbain
    ];

    const calculateLevel = (clientY: number) => {
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const height = rect.height;
        const relativeY = clientY - rect.top;

        // Clamp relativeY
        const clampedY = Math.max(0, Math.min(height, relativeY));

        // Invert: Bottom is 0.
        // 0-25% -> 3 (Top)
        const pct = clampedY / height;
        let newLevel = 0;
        if (pct < 0.25) newLevel = 3;
        else if (pct < 0.50) newLevel = 2;
        else if (pct < 0.75) newLevel = 1;
        else newLevel = 0;

        return newLevel;
    };

    const handlePointerDown = (e: React.PointerEvent) => {
        e.preventDefault();
        setIsDragging(true);
        (e.target as Element).setPointerCapture(e.pointerId);

        const newLevel = calculateLevel(e.clientY);
        if (newLevel !== undefined && newLevel !== level) {
            onChange(newLevel);
        }
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        e.preventDefault();
        const navLevel = calculateLevel(e.clientY);

        // Always update ghost preview
        if (navLevel !== undefined) {
            setHoverLevel(navLevel);
        }

        if (isDragging && navLevel !== undefined && navLevel !== level) {
            onChange(navLevel);
        }
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        setIsDragging(false);
        (e.target as Element).releasePointerCapture(e.pointerId);
    };

    const handlePointerLeave = (e: React.PointerEvent) => {
        if (isDragging) {
            setIsDragging(false);
            (e.target as Element).releasePointerCapture(e.pointerId);
        }
        setHoverLevel(null);
    };

    return (
        <motion.div
            ref={sliderRef}
            className="relative w-16 h-64 rounded-2xl touch-none cursor-pointer"
            whileHover={{ scale: 1.00 }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
        >
            {/* Segmented Gauge Track */}
            <div className="absolute inset-0 flex flex-col gap-1.5 p-1.5 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl">
                {[3, 2, 1, 0].map((s) => {
                    const isActive = s <= level;
                    const isCurrent = s === level;
                    const isHovered = s === hoverLevel;
                    const isPreview = !isActive && isHovered; // Preview only blank segments

                    return (
                        <div
                            key={s}
                            className={`flex-1 w-full rounded-lg transition-all duration-200 border border-transparent flex items-center justify-center relative
                                ${isActive ? segmentColors[s] : 'bg-white/5'}
                                ${isPreview ? 'bg-white/10 border-white/20' : ''}
                                ${s === level ? 'shadow-[0_0_15px_rgba(255,255,255,0.3)] ring-1 ring-white/50 z-10' : ''}
                            `}
                        >
                            <motion.img
                                key={`icon-${s}`}
                                src={`${import.meta.env.BASE_URL}assets/nature_parameter/level_${s}.png`}
                                alt=""
                                animate={{
                                    scale: isCurrent ? 1.4 : (isActive ? 1 : 0.9),
                                    opacity: isCurrent ? 1 : 0.5,
                                    filter: isCurrent
                                        ? 'brightness(1.5) drop-shadow(0 0 8px rgba(255,255,255,0.8)) grayscale(0%)'
                                        : 'brightness(0.5) drop-shadow(0 0 0px transparent) grayscale(100%)'
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="w-8 h-8 object-contain"
                            />
                        </div>
                    );
                })}
            </div>



        </motion.div>
    );
};


// ============================================
// COMPONENT: MORPHING LABEL (PROGRESS)
// ============================================
// ============================================
// COMPONENT: STEP INDICATOR (Kicker)
// ============================================
const StepIndicator: React.FC<{ activeStep: number }> = ({ activeStep }) => {
    const config = {
        1: "MÉTÉO",
        2: "ESPACE",
        3: "MONDE",
    } as const;

    const label = config[activeStep as keyof typeof config];

    if (!label) return null;

    return (
        <div className="inline-flex items-center gap-3 font-mono text-sm">
            <AnimatePresence mode="wait">
                <motion.span
                    key={activeStep}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-primitive-saffron-core font-bold"
                >
                    0{activeStep}
                </motion.span>
            </AnimatePresence>

            <span className="text-white/20">—</span>

            <AnimatePresence mode="wait">
                <motion.span
                    key={label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }} // Exit left for text to feel like a sliding tape
                    transition={{ duration: 0.2 }}
                    className="uppercase tracking-[0.2em] text-text-tertiary"
                >
                    {label}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

// ============================================
// COMPONENT: ARIANE THREAD (SIDE LINE)
// ============================================


const HowItWorkInteraction = ({
    selectedFragment,
    weatherLevel,
    setWeatherLevel,
    natureLevel,
    setNatureLevel
}: {
    selectedFragment?: any,
    weatherLevel: number,
    setWeatherLevel: (val: number) => void,
    natureLevel: number,
    setNatureLevel: (val: number) => void
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);
    // Removed local weather/nature state
    // Space/Reverb remains local as it's not requested in player yet
    const [spaceValues, setSpaceValues] = useState({ x: 1, y: 0 }); // Default: Space=1 (Wide), Reverb=0 (Short)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const weatherStepRef = useRef(weatherLevel);
    weatherStepRef.current = weatherLevel;

    const natureStepRef = useRef(natureLevel);
    natureStepRef.current = natureLevel;

    const isInView = useInView(containerRef, { amount: 0.1 });

    // Handle view entry/exit for audio management
    useEffect(() => {
        const audio = AudioManager.getInstance();
        if (!isInView) {
            // Stop everything when leaving view
            console.log("[HowItWork] Left View - Stopping Audio");
            audio.deactivateSnapshot('snapshot:/nature_interaction');
            //audio.stopMeteo();
            if (selectedFragment && selectedFragment.eventNature) {
                //audio.stopNatureEvent(selectedFragment.eventNature);
            }
        } else {
            // Re-entering view - Restore based on activeStep
            // Only restore if we are "just" entering view? 
            // The dependency on [isInView, activeStep] means this runs on Step Change too if we are in view.
            // But useMotionValueEvent ALSO runs on step change.
            // To avoid double triggers, ideally this effect only handles View Entry.
            // But React useEffect runs if any dep changes.
            // If activeStep changes, this runs.
            // Let's assume double play is handled by FMOD or check if playing?
            // For now, removing natureStep fixes the immediate issue.

            console.log("[HowItWork] View Effect - Restoring Audio for Step", activeStep);

            if (activeStep === 1) { // Weather
                audio.activateMeteoSnapshot();
                audio.playMeteo();
                audio.setMeteoLevel(weatherStepRef.current);
            } else if (activeStep === 3) { // Environment
                audio.activateSnapshot('snapshot:/nature_interaction');
                audio.setNatureType(natureStepRef.current);
                if (selectedFragment && selectedFragment.eventNature) {
                    audio.playNatureEvent(selectedFragment.eventNature);
                }
            }
        }
    }, [isInView, activeStep, selectedFragment]); // Removed natureStep from dependencies

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Map scroll progress to steps (0 to 3)
        // 4 steps over the scroll range.
        const stepIndex = Math.min(Math.floor(latest * steps.length), steps.length - 1);

        if (stepIndex !== activeStep) {
            const prevStep = activeStep;
            setActiveStep(stepIndex);

            const audio = AudioManager.getInstance();

            // Weather Step (1)
            if (stepIndex === 1) {
                audio.activateMeteoSnapshot();
                audio.playMeteo();
                audio.setMeteoLevel(weatherStepRef.current);
            } else if (prevStep === 1) {
                audio.deactivateMeteoSnapshot();
                // User requested to keep meteo event active
                // audio.stopMeteo(); 
            }

            // Space Step (2)
            if (stepIndex === 2) {
                console.log("[HowItWork] Entering Space Step. Playing Lofi.");
                // Ensure no conflicting snapshots/tracks (Except Meteo as requested)
                audio.stopAllSnapshots();
                // audio.stopMeteo(); // REMOVED: Keep meteo playing

                // Initialize parameters
                audio.setMusicSpace(1);
                audio.setMusicReverb(0);
            } else if (prevStep === 2) {
                console.log("[HowItWork] Leaving Space Step.");
                //audio.stop('demoLofi');
            }

            // Environment Step (3)
            if (stepIndex === 3) {
                console.log("[HowItWork] Entering Environment Step.");
                audio.stopAllSnapshots();

                // Activate Nature Snapshot
                audio.activateSnapshot('snapshot:/nature_interaction');

                // Set initial nature type
                audio.setNatureType(natureLevel);

                // Play Nature Event from Selected Fragment
                if (selectedFragment && selectedFragment.eventNature) {
                    const eventName = selectedFragment.eventNature;
                    // Full path provided by user: event:/Nature/Tokyo/Tokyo-nature
                    // We assume simple_event.js needs full path or a registered key. 
                    // Let's use a new helper method in AudioManager to handle raw paths or dynamic registration
                    audio.playNatureEvent(eventName);
                }

            } else if (prevStep === 3) {
                console.log("[HowItWork] Leaving Environment Step.");
                audio.deactivateSnapshot('snapshot:/nature_interaction');
                if (selectedFragment && selectedFragment.eventNature) {
                    //audio.stopNatureEvent(selectedFragment.eventNature);
                }
            }
        }



    });

    return (
        <section ref={containerRef} className="relative h-[600vh] bg-background-primary z-10">

            <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 h-full">

                    {/* --- LEFT: PHONE MOCKUP (Fixed) --- */}
                    <div className="relative w-[300px] h-[660px] shrink-0">
                        {/* Progress Label Positioned Relative to this column or floating? 
                            Let's float it relative to the mockup wrapper as it's sticky 
                        */}
                        {/* Progress Label moved to Right Column */}

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
                    <div className="w-full max-w-xl h-[600px] flex items-center justify-center relative">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={steps[activeStep].id}
                                className="flex flex-col justify-center text-center md:text-left absolute inset-0"
                                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -20, filter: 'blur(10px)', transition: { duration: 0.2 } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                {/* Step Indicator Kicker */}
                                {steps[activeStep].id !== 'intro' && (
                                    <div className="mb-4 flex justify-center md:justify-start">
                                        <StepIndicator activeStep={activeStep} />
                                    </div>
                                )}

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
                                            level={weatherLevel}
                                            onChange={(val) => {
                                                setWeatherLevel(val);
                                                AudioManager.getInstance().setMeteoLevel(val);
                                            }}
                                        />
                                    </div>
                                ) : steps[activeStep].id === 'space' ? (
                                    <div className="mt-8 flex flex-col items-center gap-6">
                                        <SoundCone
                                            space={spaceValues.x}
                                            reverb={spaceValues.y}
                                            onChange={(val) => {
                                                setSpaceValues(val);
                                                AudioManager.getInstance().setMusicSpace(val.x);
                                                AudioManager.getInstance().setMusicReverb(val.y);
                                            }}
                                        />
                                    </div>
                                ) : steps[activeStep].id === 'environment' ? (
                                    <div className="mt-8 flex flex-col items-center gap-6">
                                        <NatureSlider
                                            level={natureLevel}
                                            onChange={(val) => {
                                                setNatureLevel(val);
                                                AudioManager.getInstance().setNatureType(val);
                                            }}
                                        />
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
                            {/* Intro Step Specific: Scroll Indicator */}
                            {steps[activeStep].id === 'intro' && (
                                <motion.div
                                    key="scroll-indicator"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                    className="absolute bottom-4 left-1/2 -translate-x-1/2" // Centered
                                >
                                    <MouseScrollIndicator text="SCROLLEZ" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>

                </div>
            </div>

        </section >
    );
};

export default HowItWorkInteraction;
