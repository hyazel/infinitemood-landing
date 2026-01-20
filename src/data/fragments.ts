import desertImage from '../assets/fragmnt-desert.jpg';
import townImage from '../assets/fragmnt-town.jpg';
import islandImage from '../assets/fragmnt-island.jpg';
import europeImage from '../assets/fragmnt-europe.jpg';
import islandeImage from '../assets/fragmnt-islande.jpg';
import brutalismImage from '../assets/fragmnt-brutalism.jpg';
import jungleImage from '../assets/fragmnt-jungle.jpg';

export interface Fragment {
    id: string; // Using string ID for flexibility
    title: string;
    subtitle: string;
    image: string;
    event: string;
    color: string; // Keeping color for UI consistency
    eventNature: string;
    wip?: boolean;
}

export const FRAGMENTS: Fragment[] = [
    {
        id: 'chill-beats',
        title: 'Chill beats',
        subtitle: 'Chill beats',
        image: islandImage,
        event: 'demoLofi', // Mapping to property name in AudioEngine.events (camelsCase) or raw event name? 
        // Plan said: event: demo-lofi. 
        // simple_event.js uses keys like 'demoLofi'. 
        // I will use the key name for easier lookup in AudioManager.
        // Wait, User said "event : demo-lofi". 
        // I should probably support the exact string user gave if possible, but mapping to AudioEngine keys is safer for code. 
        // I'll stick to AudioEngine keys for now: demoLofi
        color: 'text-purple-400',
        eventNature: 'Tokyo/Tokyo-nature'
    },
    {
        id: 'neo-classic',
        title: 'Neo Classic',
        subtitle: 'Neo Classic',
        image: europeImage,
        event: 'demoNeoclassic',
        color: 'text-blue-300',
        eventNature: 'Tokyo/Tokyo-nature'
    },
    {
        id: 'progressive-house',
        title: 'Progressive House',
        subtitle: 'Progressive House',
        image: townImage,
        event: 'demoHouse',
        color: 'text-amber-400',
        eventNature: 'Tokyo/Tokyo-nature'
    },
    {
        id: 'acoustic',
        title: 'Acoustic',
        subtitle: 'Acoustic',
        image: desertImage,
        event: 'demoAcoustic',
        color: 'text-orange-300',
        eventNature: 'Tokyo/Tokyo-nature'
    },
    {
        id: 'ambient',
        title: 'Ambient',
        subtitle: 'Ambient',
        image: islandeImage,
        event: 'demoAmbient',
        color: 'text-cyan-200',
        eventNature: 'Tokyo/Tokyo-nature'
    },
    {
        id: 'soft-piano',
        title: 'Soft Piano',
        subtitle: 'Soft Piano',
        image: brutalismImage,
        event: 'demoPiano',
        color: 'text-gray-300',
        eventNature: 'Tokyo/Tokyo-nature',
        wip: true
    },
    {
        id: 'soundfield',
        title: 'Soundfield',
        subtitle: 'Soundfield',
        image: jungleImage,
        event: 'demoJungle',
        color: 'text-green-300',
        eventNature: 'Tokyo/Tokyo-nature',
        wip: true
    }
];
