import Header from '../components/Header';
import HeroAlternativeA from '../components/HeroAlternativeA';
import WhatIsIt from '../components/WhatIsIt';
import HowItWorkInteraction from '../components/HowItWorkInteraction';
import Influences from '../components/Influences';
import Outro from '../components/Outro';

import Manifesto from '../components/Manifesto';
import { useState } from 'react';

const Home = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleIntroComplete = () => {
        setIsUnlocked(true);
    };

    return (
        <main className="w-full bg-background-primary">
            <Header />
            <HeroAlternativeA onComplete={handleIntroComplete} />

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
