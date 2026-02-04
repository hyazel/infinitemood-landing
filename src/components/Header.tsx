import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Invert header colors on demo page
    const isInverted = location.pathname === '/demo';

    return (
        <>
            <header className="absolute top-0 left-0 w-full flex items-start justify-between px-6 md:px-12 py-6 md:py-8 z-50">
                {/* Logo */}
                <NavLink to="/" data-no-cursor="true" className="flex items-center gap-2 hover:opacity-80 transition-opacity z-50">
                    <div className={`font-display font-bold text-xl tracking-wider transition-colors ${isInverted ? 'text-text-primary' : 'text-text-inverted'}`}>
                        {t('header.logo')}
                    </div>
                </NavLink>

                {/* Desktop Navigation - Hidden on mobile */}
                <div className="hidden md:flex items-start gap-6">
                    <nav data-no-cursor="true" className={`flex flex-col items-start gap-0 font-display font-medium text-lg transition-colors ${isInverted ? 'text-text-primary' : 'text-text-inverted'}`}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `hover:text-text-tertiary transition-colors ${isActive ? 'text-text-tertiary' : ''}`}
                        >
                            {t('header.nav.home')}
                        </NavLink>
                        <NavLink
                            to="/demo"
                            className={({ isActive }) => `hover:text-text-tertiary transition-colors ${isActive ? 'text-text-tertiary' : ''}`}
                        >
                            {t('header.nav.preview')}
                        </NavLink>
                        <NavLink
                            to="/follow"
                            className={({ isActive }) => `hover:text-text-tertiary transition-colors ${isActive ? 'text-text-tertiary' : ''}`}
                        >
                            {t('header.newsletter_cta')}
                        </NavLink>
                        <NavLink to="/project" className={({ isActive }) => `hover:text-text-tertiary transition-colors ${isActive ? 'text-text-tertiary' : ''}`}>
                            {t('header.nav.project')}
                        </NavLink>
                    </nav>
                </div>

                {/* Mobile Menu Button - Visible only on mobile */}
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="md:hidden px-4 py-2 rounded-full bg-background-primary text-text-primary font-display font-medium text-sm tracking-wider transition-opacity hover:opacity-80"
                >
                    Menu
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-background-inverted z-[100] md:hidden flex flex-col"
                    >
                        {/* Close button */}
                        <div className="absolute top-6 right-6">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-3 rounded-full bg-text-primary text-background-inverted hover:opacity-80 transition-opacity"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                            <NavLink
                                to="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) => `text-3xl font-display font-medium transition-colors ${isActive ? 'text-text-tertiary' : 'text-black hover:text-text-tertiary'}`}
                            >
                                {t('header.nav.home')}
                            </NavLink>
                            <NavLink
                                to="/demo"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) => `text-3xl font-display font-medium transition-colors ${isActive ? 'text-text-tertiary' : 'text-black hover:text-text-tertiary'}`}
                            >
                                {t('header.nav.preview')}
                            </NavLink>
                            <NavLink
                                to="/follow"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) => `text-3xl font-display font-medium transition-colors ${isActive ? 'text-text-tertiary' : 'text-black hover:text-text-tertiary'}`}
                            >
                                {t('header.newsletter_cta')}
                            </NavLink>
                            <NavLink
                                to="/project"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) => `text-3xl font-display font-medium transition-colors ${isActive ? 'text-text-tertiary' : 'text-black hover:text-text-tertiary'}`}
                            >
                                {t('header.nav.project')}
                            </NavLink>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
