# Guide Pratique : Pré-rendu (Prerendering) et Hydratation React

Ce document synthétise les défis rencontrés lors de la mise en place du pré-rendu statique sur l'application Fragmnt, les solutions apportées, et la méthode infaillible pour tester que tout fonctionne correctement (localement et en production).

## 1. Comprendre les concepts

### Qu'est-ce que le Pré-rendu (Prerendering) ?
Au lieu de servir un fichier HTML "vide" contenant juste des balises `<script>` (comportement par défaut des Single Page Applications / SPA comme Vite), nous utilisons un script (Puppeteer) pour simuler la visite d'un robot, extraire le HTML complété, et le sauvegarder "en dur" dans le dossier `dist`.
* **But :** Permettre aux moteurs de recherche (Google) de lire immédiatement le texte de la page sans avoir à exécuter de JavaScript.

### Qu'est-ce que l'Hydratation React ?
Quand un vrai utilisateur visite une page pré-rendue, il reçoit le HTML instantanément. Ensuite, React se charge en tâche de fond et "attrape" le HTML existant pour y brancher son interaction (les clics, les animations).
* **Le piège :** Si React (et ses bibliothèques comme Framer Motion) considère que l'état initial doit être différent de ce qui est dans le HTML (par exemple, commencer une animation avec `opacity: 0`), il va brutalement remplacer le contenu HTML visible par un contenu invisible.

---

## 2. L'historique des 3 pièges résolus

Pendant le développement, nous avons dû contourner trois problèmes majeurs où le texte pré-rendu devenait "invisible" :

1. **Le "Faux Robot" (Framer Motion s'animait dans Puppeteer)**
   * **Le bug :** Puppeteer (notre outil de pré-rendu) est un vrai navigateur. Il exécutait le JS, donc Framer Motion cachait avec `opacity: 0` les pages avant de faire son animation. Puppeteer sauvegardait donc un `<div style="opacity: 0">`.
   * **La solution :** Injection d'une variable globale `window.__PRERENDER_INJECTED = true;` dans le script `generate-prerender.js`. Les composants réagissent à ce flag en désactivant toute mécanique d'animation et en forçant un simple `opacity: 1` dans le rendu.

2. **Le Masquage par l'Hydratation (Le bug de `PageTransition`)**
   * **Le bug :** Même avec un HTML parfait (`opacity: 1`), lorsqu'un vrai visiteur (avec JS activé) chargeait la page `/project` directement, l'hydratation React écrasait immédiatement l'opacité à 0 parce que Framer Motion calculait sa variante d'entrée (`initial: { opacity: 0 }`).
   * **La solution :** Un hook `Tracking` custom (`globalHasHydrated`) dans `PageTransition.tsx`. Nous disons explicitement à Framer Motion : *"Si c'est le TOUT PREMIER montage de la session utilisateur, ne force aucune animation d'entrée (utilise `initial={false}`). Laisse le HTML géré par le serveur tranquille."*

3. **La Boucle de Chargement en Pré-rendu (La Home vide)**
   * **Le bug :** Le composant `<App />` forçait l'affichage du `<LoadingView />` sur la route `/` en attente des musiques et images. Le robot de pré-rendu sauvegardait le `<LoadingView />` à l'infini et ne voyait jamais le texte réel de la page d'accueil (HeroFragment).
   * **La solution :** Ajout d'une condition dans `App.tsx` : si l'application détecte le flag `isPrerender`, elle passe l'état `isLoading` directement à `false` et annule son affichage, permettant au robot de "prendre la photo" de la vraie page `Home`.

---

## 3. Comment tester (Méthodologie stricte)

### A. Tester en local (le piège vite)
**NE JAMAIS TESTER LE PRÉ-RENDU AVEC `npm run preview`.**
`vite preview` intercepte les requêtes (comportement Single Page Application) et vous sert continuellement la racine `index.html` non pré-rendue. Il ment sur ce qui se passe vraiment.

**La vraie méthode locale :**
1. Re-builder le projet : 
   `npm run build && npm run prerender`
2. Lancer un serveur de fichiers statiques pur sur le dossier `dist` (par exemple via `serve`) :
   `npx serve dist -p 5000`
3. Ouvrir `http://localhost:5000/project`
4. **Désactiver Javascript** dans l'inspecteur du navigateur, et faire `Ctrl+R` ou `Cmd+R`.
5. Si le texte de la page s'affiche et que vous pouvez le lire tranquillement : ça marche !

### B. Vérifier que ça marche une fois déployé sur Cloudflare

1. Allez sur l'URL publique, par exemple : **`https://www.fragmnt.app/project`**
2. N'utilisez **PAS** l'inspecteur d'élément classique pour chercher (car il affiche le DOM hydraté ou modifié par le navigateur).
3. Faites un **Clic-Droit** au milieu de la page, puis choisissez **"Afficher le code source de la page"** (View Page Source).
4. Un onglet de code brut `view-source:https://www.fragmnt.app/project` va s'ouvrir.
5. Faites <kbd>Cmd</kbd> + <kbd>F</kbd> et cherchez votre texte. Par exemple : *"Une composition continue"*.
6. Vous devez trouver la phrase "en clair" entourée de ses balises (`<p class="...">Une composition continue...</p>`), coincée au milieu des centaines de caractères. 
7. Si la phrase est là en clair dans ce fichier : **Félicitations, Google a officiellement accès au texte de votre site** car c'est exactement ce fichier texte brut qu'il a "aspiré" lorsqu'il a visité votre site.

Pour tester l'hydratation (vrai visiteur direct), essayez simplement de visiter l'URL sur votre téléphone en 4G, sans historique local, ou de la recharger. Le texte doit rester visible immédiatement, sans qu'un écran blanc ou vide ne coupe l'animation initialementisée au chargement de la page.
