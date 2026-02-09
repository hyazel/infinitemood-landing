// import Header from '../components/Header';
// import HeroAlternativeJ from '../components/HeroAlternativeJ';
// import HeroAlternativeK from '../components/HeroAlternativeK';
// import HeroAlternativeF from '../components/HeroAlternativeF';
// import WhatIsIt from '../components/WhatIsIt';
import AudioManager from '../utils/AudioManager';
import { useState, useEffect } from 'react';
import { useTranslation } from '../i18n';
import { useAudio } from '../contexts/AudioContext';
import CursorPrompt from '../components/CursorPrompt';
import Manifesto from '../components/Manifesto';
import Influences from '../components/InfluencesB';
import Outro from '../components/Outro';
import DemoWidget from '../components/DemoWidget';
import HeroFragment from '../components/HeroFragment';
import SEO from '../components/SEO';

const Home = () => {
    const { t } = useTranslation();
    const { isAudioStarted, startAudio } = useAudio();
    const [showDemoWidget, setShowDemoWidget] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);

    // Force start at top on mount to prevent browser scroll restoration logic
    useEffect(() => {
        AudioManager.getInstance().loadMasterBank();

        // Ensure Lenis knows we are at top after loading animation
        setTimeout(() => {
            import('../components/SmoothScroll').then(mod => {
                const lenis = mod.getLenis();
                if (lenis) {
                    lenis.scrollTo(0, { immediate: true });
                }
            });
        }, 100);
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
        // Only allow audio start when in hero section
        if (!isPastHero) {
            startAudio();
        }
    };

    return (
        <main
            className={`w-full bg-background-primary transition-cursor duration-300 ${!isAudioStarted && !isPastHero ? 'md:cursor-none' : ''}`}
        >
            <SEO
                title="Générateur d'ambiances sonores évolutives"
                description="Découvrez Fragmnt, une application de musiques d'ambiances composées par des musiciens et modifiées par le temps qu'il fait chez vous."
                canonical="/"
            />
            {/* Desktop: Cursor prompt that follows mouse */}
            <div className="hidden md:block">
                <CursorPrompt active={!isAudioStarted} label={t('heroFragment.clickForSound')} />
            </div>

            <HeroFragment onStartAudio={handleStartAudio} isAudioStarted={isAudioStarted} />

            <div id="manifesto">
                <Manifesto />
            </div>
            <div id="influences-section">
                <Influences onWidgetTrigger={setShowDemoWidget} />
            </div>
            <Outro />

            <DemoWidget isVisible={showDemoWidget} />

        </main>
    );
};

export default Home;
