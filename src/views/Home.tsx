import Header from '../components/Header';
import HeroAlternativeA from '../components/HeroAlternativeA';
import HeroAlternativeB from '../components/HeroAlternativeB';
import WhatIsIt from '../components/WhatIsIt';
import HowItWorkInteraction from '../components/HowItWorkInteraction';
import Influences from '../components/Influences';
import Outro from '../components/Outro';

import Manifesto from '../components/Manifesto';
import { useEffect, useState } from 'react';

const Home = () => {
    const [showIntro, setShowIntro] = useState<boolean | null>(null); // null = loading

    const [isUnlocked, setIsUnlocked] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('fragmnt_visited');
        setShowIntro(!hasVisited);
    }, []);

    const handleIntroComplete = () => {
        localStorage.setItem('fragmnt_visited', 'true');
        setIsUnlocked(true);
    };

    if (showIntro === null) return null; // Prevent flash

    return (
        <main className="w-full bg-background-primary">
            <Header />
            {showIntro ? (
                <HeroAlternativeB onComplete={handleIntroComplete} />
            ) : (
                <HeroAlternativeA onComplete={handleIntroComplete} />
            )}

            {isUnlocked && (
                <>
                    <div id="manifesto">
                        <Manifesto />
                    </div>
                    <Influences />
                    <WhatIsIt />
                    <HowItWorkInteraction />
                    <Outro />
                </>
            )}
        </main>
    );
};

export default Home;
