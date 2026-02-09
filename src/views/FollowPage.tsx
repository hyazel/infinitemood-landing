import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n';
import WeightScaleCTA from '../components/Newsletter/WeightScaleCTA';
import SEO from '../components/SEO';

const FollowPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen w-full bg-background-inverted flex flex-col items-center justify-start md:justify-center relative overflow-hidden">
            <SEO
                title={t('follow.title')}
                description={t('follow.subtitle')}
                canonical="/follow"
            />
            {/* Very subtle background gradient (Calm) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-4xl px-4 pt-40 md:pt-24 pb-16 md:pb-8">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center"
                >
                    <h1 className="font-display text-4xl md:text-6xl text-text-inverted tracking-wide mb-4">
                        {t('follow.title')}
                    </h1>
                    <p className="text-text-inverted text-lg font-light max-w-lg mx-auto opacity-80">
                        {t('follow.subtitle')}
                    </p>
                </motion.div>

                {/* Subscription Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <WeightScaleCTA t={t} />
                </motion.div>

                {/* Secondary Actions (Discord & Contact) */}
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-8 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {/* Discord Link */}
                    <a
                        href="https://discord.gg/QgHGhCCx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-text-secondary hover:text-white transition-colors"
                    >
                        <span className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                            </svg>
                        </span>
                        <span>{t('follow.discord')}</span>
                    </a>

                    {/* Email Link */}
                    <a
                        href="mailto:hello@fragmnt.app"
                        className="group flex items-center gap-3 text-text-secondary hover:text-white transition-colors"
                    >
                        <span className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </span>
                        <span>hello@fragmnt.app</span>
                    </a>

                </motion.div>
            </div>
        </div>
    );
};

export default FollowPage;
