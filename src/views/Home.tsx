// import Header from '../components/Header';
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
import { useTranslation } from '../i18n';
import CursorPrompt from '../components/CursorPrompt';
// // import HeroAlternativeL from '../components/HeroAlternativeL';
// // import HeroAlternativeL from '../components/HeroAlternativeL';
// import HeroAlternativeM from '../components/HeroAlternativeM';
// import HeroAlternativeA from '../components/HeroAlternativeA';
import HeroFragment from '../components/HeroFragment';
// import HeroAlternativeE from '../components/HeroAlternativeE';
// import HeroAlternativeF from '../components/HeroAlternativeF';
// import HeroAlternativeH from '../components/HeroAlternativeH';

const Home = () => {
    const { t } = useTranslation();
    const [isAudioStarted, setIsAudioStarted] = useState(false);
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

    // Recalculate layout when selection changes (content appears/disappears)
    useEffect(() => {
        import('../components/SmoothScroll').then(mod => {
            const lenis = mod.getLenis();
            if (lenis) lenis.resize();
        });
    }, [selectedFragment]);


    const handleStartAudio = () => {
        if (!isAudioStarted) {
            setIsAudioStarted(true);
            AudioManager.getInstance().playHero();
        }
    };

    return (
        <main
            onClick={handleStartAudio}
            className={`w-full bg-background-primary transition-cursor duration-300 ${!isAudioStarted ? 'cursor-none' : ''}`}
        >
            <CursorPrompt active={!isAudioStarted} label={t('heroFragment.clickForSound')} />

            <HeroFragment onStartAudio={handleStartAudio} isAudioStarted={isAudioStarted} />

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
            {isAudioStarted && (
                <AudioControl
                    trackTitle={selectedFragment?.title}
                    weatherLevel={weatherLevel}
                    natureLevel={natureLevel}
                />
            )}
        </main>
    );
};

export default Home;
