import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="absolute top-0 left-0 w-full flex items-start justify-between px-12 py-8 z-50">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="font-display font-bold text-xl tracking-wider text-text-inverted">
                    FRAGMNT
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide text-text-inverted opacity-50">
                    <span>•</span>
                    <span>Chapitre 1</span>
                </div>
            </Link>

            {/* Navigation */}
            {
            <nav className="flex flex-col items-start gap-2 font-display font-medium text-lg text-text-inverted">
                {/*
                <NavLink to="/blog" className={({ isActive }) => `relative hover:text-text-tertiary transition-colors ${isActive ? 'text-text-tertiary' : ''}`}>
                    Blog
                    <span className="absolute -top-0.5 -right-2 w-1.5 h-1.5 rounded-full bg-primitive-mint-deep shadow-[0_0_8px_rgba(102,230,178,0.6)] animate-pulse"></span>
                </NavLink>
                */}
                <NavLink to="/project" className={({ isActive }) => `hover:text-text-tertiary transition-colors ${isActive ? 'text-text-tertiary' : ''}`}>
                    Project
                </NavLink>
            </nav>
            }
            
        </header>
    );
};

export default Header;
