import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';

const Project: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background-inverted text-text-inverted">

      <article className="pt-40 md:pt-32 pb-24 px-6 max-w-3xl mx-auto">

        {/* Hero */}
        <header className="mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4">
            {t('project.title')}
          </h1>
          <p className="text-xl text-primitive-neutral-warm_ivory_600 max-w-xl">
            {t('project.about')}
          </p>
          <p className="text-sm text-primitive-neutral-warm_ivory_600 mt-2">
            {t('project.release')}
          </p>
        </header>

        {/* Concept */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <div className="space-y-4 text-lg leading-relaxed">
            <p className="font-medium">
              {t('project.concept.p1')}
            </p>
            <p>
              {t('project.concept.p2')}
            </p>
            <p className="pt-2 font-display text-xl">
              {t('project.concept.objective')}
            </p>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.howItWorks.title')}</h2>
          <ul className="space-y-3 list-disc list-inside leading-relaxed text-lg">
            <li>{t('project.howItWorks.step1')}</li>
            <li>{t('project.howItWorks.step2')}</li>
            <li>{t('project.howItWorks.step3')}</li>
          </ul>
        </section>

        {/* Ce que ça change */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-8">{t('project.whatChanges.title')}</h2>
          <div className="space-y-8">

            <div>
              <h3 className="font-semibold text-lg mb-2">
                {t('project.whatChanges.noLoop.title')}
              </h3>
              <p className="leading-relaxed text-primitive-neutral-warm_ivory_600">
                {t('project.whatChanges.noLoop.text')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                {t('project.whatChanges.discrete.title')}
              </h3>
              <p className="leading-relaxed text-primitive-neutral-warm_ivory_600">
                {t('project.whatChanges.discrete.text')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                {t('project.whatChanges.composed.title')}
              </h3>
              <div className="space-y-1 text-primitive-neutral-warm_ivory_600">
                <p>{t('project.whatChanges.composed.text')}</p>
              </div>
            </div>

          </div>
        </section>

        {/* Scènes visuelles */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.visuals.title')}</h2>
          <div className="space-y-4 leading-relaxed text-lg">
            <p>
              {t('project.visuals.p1')}
            </p>
            <p>
              {t('project.visuals.p2')}
            </p>
          </div>
        </section>

        {/* Influences */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.influences.title')}</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              {t('project.influences.music')}
            </p>
            <p>
              {t('project.influences.universe')}
            </p>
          </div>
        </section>

        {/* Accès */}
        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-6">{t('project.access.title')}</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Sign up for the{' '}
              <Link
                to="/follow"
                className="text-text-tertiary hover:underline"
              >
                waiting list
              </Link>{' '}
              to be informed of the next steps and the beta.
            </p>
            <p className="font-medium">
              A preview is available{' '}
              <Link
                to="/demo"
                className="text-text-tertiary hover:underline"
              >
                here
              </Link>.
            </p>
          </div>
        </section>

      </article>
    </div>
  );
};

export default Project;
