import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import SEO from '../components/SEO';

const Section: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => (
  <section className={`py-16 md:py-24 border-b border-primitive-neutral-warm_ivory_400/10 ${className}`}>
    {children}
  </section>
);

const SectionTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 md:mb-12">{children}</h2>
);

const Project: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-inverted text-text-inverted">
      <SEO
        title={t('project.title')}
        description={t('project.about')}
        canonical="/project"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Fragmnt",
          "applicationCategory": "MultimediaApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR"
          },
          "description": t('project.about')
        }}
      />

      <article className="pt-32 md:pt-48 pb-24 px-6 max-w-5xl mx-auto">

        {/* Hero */}
        <header className="mb-24 md:mb-32">
          <h1 className="font-display font-bold text-6xl md:text-8xl mb-6 tracking-tight">
            {t('project.title')}
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-primitive-neutral-warm_ivory_400/20 pt-8">
            <p className="text-xl md:text-2xl text-primitive-neutral-warm_ivory_600 max-w-xl leading-relaxed">
              {t('project.about')}
            </p>
            <p className="text-sm font-mono text-primitive-neutral-warm_ivory_400 uppercase tracking-widest">
              {t('project.release')}
            </p>
          </div>
        </header>

        {/* Concept */}
        <Section>
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="font-mono text-xs text-primitive-neutral-warm_ivory_400 uppercase tracking-widest">01. Concept</span>
            </div>
            <div className="md:col-span-8 space-y-6 text-xl md:text-2xl leading-relaxed font-light">
              <p className="text-text-inverted">
                {t('project.concept.p1')}
              </p>
              <p className="text-primitive-neutral-warm_ivory_600">
                {t('project.concept.p2')}
              </p>
              <p className="pt-4 font-display text-2xl md:text-3xl font-medium text-text-inverted">
                {t('project.concept.objective')}
              </p>
            </div>
          </div>
        </Section>

        {/* Comment ça marche */}
        <Section>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs text-primitive-neutral-warm_ivory_400 uppercase tracking-widest mb-4 block">02. Workflow</span>
              <SectionTitle>{t('project.howItWorks.title')}</SectionTitle>
            </div>
            <div className="md:col-span-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((step, index) => (
                <div key={index} className="relative pl-6 border-l border-primitive-neutral-warm_ivory_400/30">
                  <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-background-inverted border border-primitive-neutral-warm_ivory_400 flex items-center justify-center text-[10px] font-mono text-primitive-neutral-warm_ivory_600">
                    {step}
                  </span>
                  <p className="text-lg text-primitive-neutral-warm_ivory_600 group-hover:text-text-inverted transition-colors">
                    {t(`project.howItWorks.step${step}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Ce que ça change */}
        <Section>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs text-primitive-neutral-warm_ivory_400 uppercase tracking-widest mb-4 block">03. Impact</span>
              <SectionTitle>{t('project.whatChanges.title')}</SectionTitle>
            </div>
            <div className="md:col-span-8 grid gap-8 md:grid-cols-2">
              <div className="p-6 bg-primitive-neutral-warm_ivory_50 rounded-lg border border-primitive-neutral-warm_ivory_200/50">
                <h3 className="font-display font-semibold text-xl mb-3 text-text-inverted">
                  {t('project.whatChanges.noLoop.title')}
                </h3>
                <p className="text-primitive-neutral-warm_ivory_600 leading-relaxed">
                  {t('project.whatChanges.noLoop.text')}
                </p>
              </div>

              <div className="p-6 bg-primitive-neutral-warm_ivory_50 rounded-lg border border-primitive-neutral-warm_ivory_200/50">
                <h3 className="font-display font-semibold text-xl mb-3 text-text-inverted">
                  {t('project.whatChanges.discrete.title')}
                </h3>
                <p className="text-primitive-neutral-warm_ivory_600 leading-relaxed">
                  {t('project.whatChanges.discrete.text')}
                </p>
              </div>

              <div className="p-6 bg-primitive-neutral-warm_ivory_50 rounded-lg border border-primitive-neutral-warm_ivory_200/50 md:col-span-2">
                <h3 className="font-display font-semibold text-xl mb-3 text-text-inverted">
                  {t('project.whatChanges.composed.title')}
                </h3>
                <p className="text-primitive-neutral-warm_ivory_600 leading-relaxed">
                  {t('project.whatChanges.composed.text')}
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Scènes visuelles */}
        <Section>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs text-primitive-neutral-warm_ivory_400 uppercase tracking-widest mb-4 block">04. Visuals</span>
              <SectionTitle>{t('project.visuals.title')}</SectionTitle>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg md:text-xl text-primitive-neutral-warm_ivory_600 leading-relaxed">
              <p>
                {t('project.visuals.p1')}
              </p>
              <p>
                {t('project.visuals.p2')}
              </p>
            </div>
          </div>
        </Section>

        {/* Influences */}
        <Section>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs text-primitive-neutral-warm_ivory_400 uppercase tracking-widest mb-4 block">05. Roots</span>
              <SectionTitle>{t('project.influences.title')}</SectionTitle>
            </div>
            <div className="md:col-span-8 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-mono text-sm uppercase tracking-widest text-primitive-neutral-warm_ivory_400 mb-4">M U S I C</h4>
                <p className="text-lg text-text-inverted leading-relaxed">
                  {t('project.influences.music')}
                </p>
              </div>
              <div>
                <h4 className="font-mono text-sm uppercase tracking-widest text-primitive-neutral-warm_ivory_400 mb-4">U N I V E R S E</h4>
                <p className="text-lg text-text-inverted leading-relaxed">
                  {t('project.influences.universe')}
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Accès */}
        <section className="pt-24 pb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">{t('project.access.title')}</h2>
            <div className="space-y-6 text-xl leading-relaxed text-primitive-neutral-warm_ivory_600">
              <p>
                Sign up for the{' '}
                <Link
                  to="/follow"
                  className="text-text-inverted underline decoration-1 underline-offset-4 hover:decoration-2 transition-all"
                >
                  waiting list
                </Link>{' '}
                to be informed of the next steps and the beta.
              </p>
              <p className="">
                A preview is available{' '}
                <Link
                  to="/demo"
                  className="text-text-inverted underline decoration-1 underline-offset-4 hover:decoration-2 transition-all"
                >
                  here
                </Link>.
              </p>
            </div>
          </div>
        </section>

      </article>
    </div>
  );
};

export default Project;
