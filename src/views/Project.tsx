import React, { useEffect } from 'react';
import Header from '../components/Header';

const Project: React.FC = () => {
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
            FRAGMNT
          </h1>
          <p className="text-xl text-primitive-neutral-warm_ivory_600">
            Scènes musicales interactives pour focus créatif.
          </p>
          <p className="text-sm text-primitive-neutral-warm_ivory_600 mt-3">
            Sortie prévue fin 2026
          </p>
        </header>

        {/* Pitch */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">Pitch</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Fragmnt est une application mobile d'ambiances musicales interactives.
            </p>
            <p>
              On y explore des scènes sonores animées qui évoluent avec le temps via quelques paramètres simples, 
              pour accompagner le focus et la création sans tourner en rond.
            </p>
          </div>
        </section>

        {/* Problème */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">Contexte</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Environ 60 % des professionnels écoutent de la musique en travaillant. Des millions d’utilisateurs diffusent en continu des ambiances pour étudier, travailler, méditer…
            </p>
          </div>
        </section>

        {/* Solutions existantes */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">Solutions existantes</h2>
          <div className="space-y-8">
            
            <div>
              <h3 className="font-semibold text-lg mb-3">
                Playlists de concentration (Spotify, YouTube)
              </h3>
              <p className="leading-relaxed">
                Des solutions populaires pour se mettre en ambiance (ex : playlists "Deep Focus", radios lofi). 
                Elles apportent une musique d'accompagnement facile d'accès, mais sans personnalisation ni interactivité. 
                L'écoute y reste figée (morceaux prédéfinis) et souvent passive ; les transitions ou 
                la publicité peuvent rompre le flow du travail.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">
                Applications de sons génératifs (Endel, Brain.fm)
              </h3>
              <p className="leading-relaxed">
                Des apps qui génèrent des paysages sonores en temps réel, avec une approche très utilitaire 
                (augmenter la productivité, réduire le stress, etc.). Ces solutions fournissent une diffusion continue 
                sans rupture, efficace pour éviter les distractions classiques. Cependant, la musique y est pensée 
                pour être « à peine entendue » : des sons très neutres, sans mélodie marquante, que l'on subit en 
                tâche de fond plus qu'on ne les écoute activement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">
                Apps de méditation/relaxation
              </h3>
              <p className="leading-relaxed">
                Des services comme Headspace ou Calm proposent des ambiances apaisantes (musique douce, bruits blancs) 
                pour aider à se concentrer ou à déstresser. On reste toutefois dans une logique de bien-être généraliste, 
                avec une dimension artistique et interactive quasi nulle.
              </p>
            </div>

            <p className="font-medium pt-4">
              Il manque un format premium entre musique et outil de focus.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">Solution</h2>
          <div className="space-y-6 leading-relaxed">
            <p>
              Fragmnt se distingue en combinant le meilleur de ces approches tout en suivant sa propre voie : 
              une dimension artistique et interactive absente des playlists classiques, une richesse musical 
              que n'offrent pas les générateurs automatiques.
            </p>
            <p className="italic font-medium">
              Fragmnt apporte une réponse innovante avec ses scènes musicales personnalisables : 
              de véritables environnements sonores conçus pour le focus et l'évasion.
            </p>
            
            <div className="space-y-6 mt-8">
              <div>
                <h3 className="font-semibold mb-2">Immersion cohérente</h3>
                <p>
                  Chaque scène est un univers musical complet, avec une esthétique cohérente et une identité forte 
                  (ex. house minimaliste, piano ambient contemplatif). Ce n'est pas une suite aléatoire de morceaux, 
                  mais une composition continue pensée pour soutenir l'attention.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Interactivité discrète</h3>
                <p>
                  L'utilisateur peut interagir subtilement avec la scène – par exemple en ajustant un paramètre 
                  ou en déclenchant une légère variation. Ces interactions 
                  offrent un sentiment d'implication et de contrôle sans jamais casser le flow du travail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu musical */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">Contenu musical</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Fragmnt ne repose pas sur un catalogue de streaming ni sur des playlists.
            </p>
            <p>
              Chaque pack contient de la musique originale (motifs, textures, boucles sonores) pensée pour être 
              modulée et recombinées dans l'application, afin de créer des variations infinies tout en gardant 
              une identité musicale forte.
            </p>
          </div>
        </section>

        {/* Positionnement */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">Positionnement</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Fragmnt assume une approche à contre-courant: ralentir et privilégier la qualité musicale et 
              l'expérience plutôt que l'optimisation de l'attention.
            </p>
            <p>
              Les ambiances sont créées avec des musiciens et sound designers, afin de garantir une production premium.
            </p>
            <p>
              Côté interface, Fragmnt emprunte certains codes du jeu vidéo (scènes vivantes, animation, 
              micro-interactions) pour rendre l'audio plus "présent", sans imposer une interaction permanente.
            </p>
          </div>
        </section>

        {/* Cible prioritaire */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">Cible prioritaire</h2>
          <p className="leading-relaxed">
            Créatifs et travailleurs (dev, design, écriture, étude) qui écoutent déjà de l'audio 
            pour se concentrer et créer, et recherchent une alternative plus vivante qu'une playlist.
          </p>
        </section>

        {/* Alternatives & Différenciation */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">Alternatives & comparables</h2>
          <p className="mb-8 leading-relaxed">
            Playlists focus (streaming), mixes YouTube, générateurs d'ambiances, apps de focus audio, 
            jeux contemplatifs "chill".
          </p>

          <h3 className="font-display text-xl font-semibold mb-4">Différenciation</h3>
          <ul className="space-y-3 list-disc list-inside leading-relaxed">
            <li>
              Contenu musical original conçu pour l'interactivité, produit avec des artistes 
              (cohérence et identité par scène)
            </li>
            <li>
              Scènes vivantes inspirées du jeu vidéo (présence, attention douce)
            </li>
            <li>
              Interactivité légère: on influence l'ambiance, sans contrainte d'usage
            </li>
          </ul>
        </section>

        {/* État du projet */}
        <section className="mb-16 pb-16 border-b border-primitive-neutral-warm_ivory_400/20">
          <h2 className="font-display text-2xl font-semibold mb-6">État du projet</h2>
          <p className="leading-relaxed">
            Prototype fonctionnel existant. Demande via waiting list.
          </p>
        </section>

        {/* Roadmap */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold mb-6">
            Roadmap <span className="text-base font-normal text-primitive-neutral-warm_ivory_600">(6–12 mois)</span>
          </h2>
          <ol className="space-y-3 list-decimal list-inside leading-relaxed">
            <li>Finaliser le contenu musical.</li>
            <li>Designer et animer les scènes visuelles.</li>
            <li>Itérer sur onboarding, catalogue et économie, puis bêta élargie.</li>
          </ol>
        </section>

      </article>
    </div>
  );
};

export default Project;
