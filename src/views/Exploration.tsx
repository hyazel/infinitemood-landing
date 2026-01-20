import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import InteractionZone from '../components/InteractionZone';
import ParameterSlider from '../components/ParameterSlider';
import islandScene from '../assets/island_scene.png';
import { useAudioLogic } from '../hooks/useAudioLogic';

const Exploration: React.FC = () => {
    const { isPlaying, togglePlay, setMeteo, startSnapshot, stopSnapshot } = useAudioLogic();
    const [sliderOpen, setSliderOpen] = React.useState(false);

    const toggleSlider = () => {
        if (sliderOpen) {
            setSliderOpen(false);
            stopSnapshot();
        } else {
            setSliderOpen(true);
            startSnapshot();
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden text-text-primary flex items-center justify-center bg-background-primary">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primitive-neutral-orchid_ash_900 via-primitive-orchid-deep/20 to-primitive-saffron-core/10 -z-10" />

            {/* Floating Title (Absolute) */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
                <h1 className="text-xl tracking-[0.2em] font-bold opacity-80 uppercase">Fragmnt</h1>
            </div>

            {/* Main Scene (Island) */}
            <motion.div
                className="relative z-10 w-full max-w-full md:max-w-xl lg:max-w-2xl px-4"
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Shadow */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[60%] h-12 bg-black/40 blur-2xl rounded-[100%] pointer-events-none" />

                <img
                    src={islandScene}
                    alt="Island"
                    className="w-full h-auto drop-shadow-2xl relative z-10"
                />

                {/* Interaction Zones */}
                <div className="absolute top-[10%] right-[15%] md:top-[12%] md:right-[18%] z-20">
                    <InteractionZone onClick={toggleSlider} />

                    {/* Slider Component (Positioned relative to zone) */}
                    <ParameterSlider
                        isOpen={sliderOpen}
                        onValueChange={setMeteo}
                        onClose={() => { setSliderOpen(false); stopSnapshot(); }}
                    />
                </div>

            </motion.div>


            {/* Play/Pause Button */}
            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-30 w-16 h-16 rounded-full 
                   flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg
                   transition-colors duration-300 ${isPlaying ? 'bg-white/20 border-accent-primary/50' : 'bg-white/5 hover:bg-white/10'}`}
            >
                {isPlaying ? <Pause className="fill-current" /> : <Play className="fill-current ml-1" />}

                {/* Ping animation when playing */}
                {isPlaying && (
                    <motion.div
                        className="absolute inset-0 rounded-full border border-white/30"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                )}
            </motion.button>

        </div>
    );
};

export default Exploration;
