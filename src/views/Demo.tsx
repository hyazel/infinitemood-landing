import React, { useState, useEffect } from 'react';
import WhatIsItC from '../components/WhatIsItC';
import HowItWorkInteraction from '../components/HowItWorkInteraction';
import AudioControl from '../components/AudioControl';
import AudioManager from '../utils/AudioManager';
import { useAudio } from '../contexts/AudioContext';
import DemoOutroCTA from '../components/DemoOutroCTA';

const Demo: React.FC = () => {
    // Track if an ambiance is selected to unlock scrolling
    const [selectedFragment, setSelectedFragment] = useState<any | null>(null);

    // Use global weather & nature state from AudioContext
    const { weatherLevel, setWeatherLevel, natureLevel, setNatureLevel } = useAudio();

    // Ensure audio banks are loaded if landing here directly
    useEffect(() => {
        AudioManager.getInstance().loadMasterBank();

        // Scroll to top when arriving on Demo page
        window.scrollTo(0, 0);
        import('../components/SmoothScroll').then(mod => {
            const lenis = mod.getLenis();
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            }
        });
    }, []);

    // Recalculate layout when selection changes (content appears/disappears)
    useEffect(() => {
        import('../components/SmoothScroll').then(mod => {
            const lenis = mod.getLenis();
            if (lenis) lenis.resize();
        });
    }, [selectedFragment]);

    return (
        <main className="w-full bg-background-primary min-h-screen pt-24 md:pt-32">

            {/* WhatIsItC controls the flow. It notifies when an ambiance is selected. */}
            <WhatIsItC onSelectionChange={setSelectedFragment} />

            {/* Only show the rest of the page if an ambiance is selected */}
            {selectedFragment && (
                <>
                    <div id="how-it-works">
                        <HowItWorkInteraction
                            selectedFragment={selectedFragment}
                            weatherLevel={weatherLevel}
                            setWeatherLevel={setWeatherLevel}
                            natureLevel={natureLevel}
                            setNatureLevel={setNatureLevel}
                        />
                    </div>

                    {/* CTA to Follow page */}
                    <DemoOutroCTA />
                </>
            )}

            <AudioControl
                trackTitle={selectedFragment?.title}
                weatherLevel={weatherLevel}
                natureLevel={natureLevel}
            />
        </main>
    );
};

export default Demo;
