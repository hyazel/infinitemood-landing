import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../i18n';

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header className="absolute top-0 left-0 w-full flex items-start justify-between px-12 py-8 z-50">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity z-50">
                <div className="font-display font-bold text-xl tracking-wider text-text-inverted">
                    {t('header.logo')}
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide text-text-inverted opacity-50">
                    <span>•</span>
                    <span>{t('header.chapter')}</span>
                </div>
            </NavLink>

            {/* Navigation */}
            <div className="flex items-start gap-6">
                <nav className="flex flex-col items-start gap-2 font-display font-medium text-lg text-text-inverted">
                    {/* Follow Page Link */}
                    <NavLink
                        to="/follow"
                        className={({ isActive }) => `hover:text-text-tertiary transition-colors ${isActive ? 'text-text-tertiary' : ''}`}
                    >
                        {t('header.newsletter_cta')}
                    </NavLink>

                    <NavLink to="/project" className={({ isActive }) => `hover:text-text-tertiary transition-colors ${isActive ? 'text-text-tertiary' : ''}`}>
                        {t('header.nav.project')}
                    </NavLink>
                    {/*
                    <NavLink to="/blog" className={({ isActive }) => `relative hover:text-text-tertiary transition-colors ${isActive ? 'text-text-tertiary' : ''}`}>
                        Blog
                        <span className="absolute -top-0.5 -right-2 w-1.5 h-1.5 rounded-full bg-primitive-mint-deep shadow-[0_0_8px_rgba(102,230,178,0.6)] animate-pulse"></span>
                    </NavLink>
                    */ }
                </nav>
            </div>

        </header >
    );
};

export default Header;
