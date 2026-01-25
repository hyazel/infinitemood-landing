import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useTranslation } from '../i18n';

const Project: React.FC = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-inverted text-text-inverted">
      <Header />
      
      <article className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        
        {/* Hero */}
        <header className="mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4">
            {t('project.title')}
          </h1>
          <p className="text-xl text-primitive-neutral-warm_ivory_600">
            {t('project.tagline')}
          </p>
          <p className="text-sm text-primitive-neutral-warm_ivory_600 mt-3">
            {t('project.release')}
          </p>
        </header>

        {/* Pitch */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.pitch.title')}</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              {t('project.pitch.p1')}
            </p>
            <p>
              {t('project.pitch.p2')}
            </p>
          </div>
        </section>

        {/* Problème */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.context.title')}</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              {t('project.context.p1')}
            </p>
          </div>
        </section>

        {/* Solutions existantes */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.existing.title')}</h2>
          <div className="space-y-8">
            
            <div>
              <h3 className="font-semibold text-lg mb-3">
                {t('project.existing.playlists.title')}
              </h3>
              <p className="leading-relaxed">
                {t('project.existing.playlists.text')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">
                {t('project.existing.generative.title')}
              </h3>
              <p className="leading-relaxed">
                {t('project.existing.generative.text')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">
                {t('project.existing.meditation.title')}
              </h3>
              <p className="leading-relaxed">
                {t('project.existing.meditation.text')}
              </p>
            </div>

            <p className="font-medium pt-4">
              {t('project.existing.conclusion')}
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.solution.title')}</h2>
          <div className="space-y-6 leading-relaxed">
            <p>
              {t('project.solution.p1')}
            </p>
            <p className="italic font-medium">
              {t('project.solution.p2')}
            </p>
            
            <div className="space-y-6 mt-8">
              <div>
                <h3 className="font-semibold mb-2">{t('project.solution.immersion.title')}</h3>
                <p>
                  {t('project.solution.immersion.text')}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">{t('project.solution.interactivity.title')}</h3>
                <p>
                  {t('project.solution.interactivity.text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu musical */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.musicalContent.title')}</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              {t('project.musicalContent.p1')}
            </p>
            <p>
              {t('project.musicalContent.p2')}
            </p>
          </div>
        </section>

        {/* Positionnement */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.positioning.title')}</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              {t('project.positioning.p1')}
            </p>
            <p>
              {t('project.positioning.p2')}
            </p>
            <p>
              {t('project.positioning.p3')}
            </p>
          </div>
        </section>

        {/* Cible prioritaire */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.target.title')}</h2>
          <p className="leading-relaxed">
            {t('project.target.text')}
          </p>
        </section>

        {/* Alternatives & Différenciation */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.alternatives.title')}</h2>
          <p className="mb-8 leading-relaxed">
            {t('project.alternatives.text')}
          </p>

          <h3 className="font-display text-xl font-semibold mb-4">{t('project.alternatives.differentiation.title')}</h3>
          <ul className="space-y-3 list-disc list-inside leading-relaxed">
            <li>
              {t('project.alternatives.differentiation.item1')}
            </li>
            <li>
              {t('project.alternatives.differentiation.item2')}
            </li>
            <li>
              {t('project.alternatives.differentiation.item3')}
            </li>
          </ul>
        </section>

        {/* État du projet */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.status.title')}</h2>
          <p className="leading-relaxed">
            {t('project.status.text')}
          </p>
        </section>

        {/* Roadmap */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold mb-6">
            {t('project.roadmap.title')} <span className="text-base font-normal text-primitive-neutral-warm_ivory_600">{t('project.roadmap.subtitle')}</span>
          </h2>
          <ol className="space-y-3 list-decimal list-inside leading-relaxed">
            <li>{t('project.roadmap.step1')}</li>
            <li>{t('project.roadmap.step2')}</li>
            <li>{t('project.roadmap.step3')}</li>
          </ol>
        </section>

      </article>
    </div>
  );
};

export default Project;
