// import Header from '../components/Header';
// import HeroAlternativeJ from '../components/HeroAlternativeJ';
// import HeroAlternativeK from '../components/HeroAlternativeK';
// import HeroAlternativeF from '../components/HeroAlternativeF';
// import WhatIsIt from '../components/WhatIsIt';
import AudioManager from '../utils/AudioManager';
import { useState, useEffect } from 'react';
import { useTranslation } from '../i18n';
import CursorPrompt from '../components/CursorPrompt';
import Manifesto from '../components/Manifesto';
import Influences from '../components/InfluencesB';
import Outro from '../components/Outro';
import DemoWidget from '../components/DemoWidget';
import AudioControl from '../components/AudioControl';
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
    const [showDemoWidget, setShowDemoWidget] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);

    // Audio control state (unused for hero track, but AudioControl expects them)
    const [weatherLevel] = useState(0);
    const [natureLevel] = useState(0);

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

    // Track scroll position to restore cursor after hero
    useEffect(() => {
        const handleScroll = () => {
            setIsPastHero(window.scrollY > window.innerHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);




    const handleStartAudio = () => {
        if (!isAudioStarted) {
            setIsAudioStarted(true);
            AudioManager.getInstance().playHero();
        }
    };

    return (
        <main
            onClick={handleStartAudio}
            className={`w-full bg-background-primary transition-cursor duration-300 ${!isAudioStarted && !isPastHero ? 'cursor-none' : ''}`}
        >
            <CursorPrompt active={!isAudioStarted} label={t('heroFragment.clickForSound')} />

            <HeroFragment onStartAudio={handleStartAudio} isAudioStarted={isAudioStarted} />

            <div id="manifesto">
                <Manifesto />
            </div>
            <div id="influences-section">
                <Influences onWidgetTrigger={setShowDemoWidget} />
            </div>
            <Outro />

            <DemoWidget isVisible={showDemoWidget} />

            {/* Audio Control - appears when audio is started */}
            {isAudioStarted && (
                <AudioControl
                    trackTitle={t('influencesB.track')}
                    weatherLevel={weatherLevel}
                    natureLevel={natureLevel}
                />
            )}

        </main>
    );
};

export default Home;
