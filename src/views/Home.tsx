import Header from '../components/Header';
// import HeroAlternativeJ from '../components/HeroAlternativeJ';
// import HeroAlternativeK from '../components/HeroAlternativeK';
// import HeroAlternativeF from '../components/HeroAlternativeF';
// import WhatIsIt from '../components/WhatIsIt';
import WhatIsItC from '../components/WhatIsItC';
import HowItWorkInteraction from '../components/HowItWorkInteraction';
import Influences from '../components/InfluencesB';
import Outro from '../components/Outro';
import AudioControl from '../components/AudioControl';

import Manifesto from '../components/Manifesto';
import AudioManager from '../utils/AudioManager';
import { useState, useEffect } from 'react';
// // import HeroAlternativeL from '../components/HeroAlternativeL';
// // import HeroAlternativeL from '../components/HeroAlternativeL';
// import HeroAlternativeM from '../components/HeroAlternativeM';
// import HeroAlternativeA from '../components/HeroAlternativeA';
import HeroFragment from '../components/HeroFragment';
// import HeroAlternativeE from '../components/HeroAlternativeE';
// import HeroAlternativeF from '../components/HeroAlternativeF';
// import HeroAlternativeH from '../components/HeroAlternativeH';

const Home = () => {
    const [hasExplored, setHasExplored] = useState(false);
    // Track if an ambiance is selected to unlock scrolling
    const [selectedFragment, setSelectedFragment] = useState<any | null>(null);

    // Weather & Nature State (Lifted for AudioControl)
    const [weatherLevel, setWeatherLevel] = useState(0); // 0=Calm
    const [natureLevel, setNatureLevel] = useState(0);   // 0=Pure Nature

    // Force start at top on mount to prevent browser scroll restoration logic
    useEffect(() => {
        window.scrollTo(0, 0);
        AudioManager.getInstance().loadMasterBank();

        // Also ensure Lenis knows we are at top
        // Use a small timeout to let Lenis initialize if needed
        setTimeout(() => {
            import('../components/SmoothScroll').then(mod => {
                const lenis = mod.getLenis();
                if (lenis) {
                    lenis.scrollTo(0, { immediate: true });
                }
            });
        }, 100);

        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    // Listen for hasExplored state change to trigger scroll
    useEffect(() => {
        if (hasExplored) {
            import('../components/SmoothScroll').then(mod => {
                const lenis = mod.getLenis();
                if (lenis) {
                    // Critical: Force Lenis to recalculate dimensions immediately because content just appeared
                    lenis.resize();

                    // Use double requestAnimationFrame to wait for layout/paint cycles
                    // This ensures the new height is fully registered before scrolling
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            lenis.scrollTo('#manifesto', {
                                duration: 2.0,
                                force: true // Force scroll even if it thinks it's at the limit (safety)
                            });
                        });
                    });
                }
            });
        }
    }, [hasExplored]);

    // Recalculate layout when selection changes (content appears/disappears)
    useEffect(() => {
        import('../components/SmoothScroll').then(mod => {
            const lenis = mod.getLenis();
            if (lenis) lenis.resize();
        });
    }, [selectedFragment]);


    const handleIntroComplete = () => {
        setHasExplored(true);
        AudioManager.getInstance().playHero();
    };

    return (
        <main className="w-full bg-background-primary">
            <Header />
            <HeroFragment onExplore={handleIntroComplete} />

            {hasExplored && (
                <>
                    <div id="manifesto">
                        <Manifesto />
                    </div>
                    <Influences />

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
                            <Outro />
                        </>
                    )}

                    {/* AudioControl always visible after exploration */}
                    <AudioControl
                        trackTitle={selectedFragment?.title}
                        weatherLevel={weatherLevel}
                        natureLevel={natureLevel}
                    />
                </>
            )}
        </main>
    );
};

export default Home;
