import React, { useState, useEffect } from 'react';
import WhatIsItC from '../components/WhatIsItC';
import HowItWorkInteraction from '../components/HowItWorkInteraction';
import Outro from '../components/Outro';
import AudioControl from '../components/AudioControl';
import AudioManager from '../utils/AudioManager';

const Demo: React.FC = () => {
    // Track if an ambiance is selected to unlock scrolling
    const [selectedFragment, setSelectedFragment] = useState<any | null>(null);

    // Weather & Nature State (Lifted for AudioControl)
    const [weatherLevel, setWeatherLevel] = useState(0); // 0=Calm
    const [natureLevel, setNatureLevel] = useState(0);   // 0=Pure Nature

    // Ensure audio banks are loaded if landing here directly
    useEffect(() => {
        AudioManager.getInstance().loadMasterBank();
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
