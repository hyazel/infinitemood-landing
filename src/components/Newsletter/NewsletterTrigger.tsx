import React from 'react';
import { useTranslation } from '../../i18n';

interface NewsletterTriggerProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NewsletterTrigger: React.FC<NewsletterTriggerProps> = ({ onClick }) => {
    const { t } = useTranslation();

    return (
        <button
            onClick={onClick}
            className="group relative flex items-center justify-center px-4 py-1.5 rounded-full 
                       border border-primitive-mist_aqua-core/60 bg-transparent
                       hover:border-primitive-mist_aqua-core
                       hover:bg-primitive-mist_aqua-core/10 
                       transition-colors duration-300 ease-out"
        >
            <span
                className="font-display font-medium text-xs tracking-widest uppercase 
                           text-primitive-mist_aqua-deep group-hover:text-primitive-mist_aqua-deep/80
                           transition-colors"
            >
                {t('header.newsletter_cta')}
            </span>
        </button>
    );
};

export default NewsletterTrigger;
