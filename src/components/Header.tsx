import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import NewsletterTrigger from './Newsletter/NewsletterTrigger';
import NewsletterModal from './Newsletter/NewsletterModal';

const Header: React.FC = () => {
    const { t } = useTranslation();
    const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
    const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);

    return (
        <header className="absolute top-0 left-0 w-full flex items-start justify-between px-12 py-8 z-50">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="font-display font-bold text-xl tracking-wider text-text-inverted">
                    {t('header.logo')}
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide text-text-inverted opacity-50">
                    <span>•</span>
                    <span>{t('header.chapter')}</span>
                </div>
            </Link>

            {/* Navigation */}
            <div className="flex items-start gap-6">
                <nav className="flex flex-col items-end gap-2 font-display font-medium text-lg text-text-inverted">
                    {/* Newsletter CTA */}
                    {/*
                    <div className="mb-2">
                        <NewsletterTrigger
                            onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                setTriggerRect(rect);
                                setIsNewsletterOpen(true);
                            }}
                        />
                    </div>
                    */}
                    <NavLink to="/project" className={({ isActive }) => `hover:text-text-tertiary transition-colors ${isActive ? 'text-text-tertiary' : ''}`}>
                        {t('header.nav.project')}
                    </NavLink>
                    {/*
                    <NavLink to="/blog" className={({ isActive }) => `relative hover:text-text-tertiary transition-colors ${isActive ? 'text-text-tertiary' : ''}`}>
                        Blog
                        <span className="absolute -top-0.5 -right-2 w-1.5 h-1.5 rounded-full bg-primitive-mint-deep shadow-[0_0_8px_rgba(102,230,178,0.6)] animate-pulse"></span>
                    </NavLink>
                    */}
                </nav>
            </div>

            {/* Note: Portal logic is implicit in fixed positioning of Modal */}
            <NewsletterModal
                isOpen={isNewsletterOpen}
                onClose={() => setIsNewsletterOpen(false)}
                triggerRect={triggerRect}
            />

        </header>
    );
};

export default Header;
