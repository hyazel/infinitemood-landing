import React from 'react';
import { NavLink } from 'react-router-dom';
import redditIcon from '../assets/reddit-icon.png';

const Header: React.FC = () => {
    return (
        <header className="absolute top-0 left-0 w-full flex items-start justify-between px-12 py-8 z-50">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="font-display font-bold text-xl tracking-wider text-text-primary">
                    FRAGMNT
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide text-text-primary opacity-50">
                    <span>•</span>
                    <span>Chapitre 1</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col items-start gap-2 font-display font-medium text-lg text-text-secondary">
                <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src={redditIcon} alt="Reddit" className="w-8 h-8 object-contain" />
                </a>
                <NavLink to="/blog" className={({ isActive }) => `relative hover:text-text-primary transition-colors ${isActive ? 'text-text-primary' : ''}`}>
                    Blog
                    <span className="absolute -top-0.5 -right-2 w-1.5 h-1.5 rounded-full bg-primitive-mint-deep shadow-[0_0_8px_rgba(102,230,178,0.6)] animate-pulse"></span>
                </NavLink>
                <NavLink to="/project" className={({ isActive }) => `hover:text-text-primary transition-colors ${isActive ? 'text-text-primary' : ''}`}>
                    Project
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
