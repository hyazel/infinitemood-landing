# AI Skills & Rules

Ce document explique comment gérer les skills et les rules pour l'agent AI via `npx skills` et liste ceux actuellement utilisés dans le projet.

## Comment ajouter des skills/rules avec `npx skills`

La commande `npx skills` est l'outil principal pour gérer les capacités de l'agent.

### Commandes Principales

- **Ajouter un skill** :
  ```bash
  npx skills add <nom-du-skill>
  # Options :
  # -g, --global      Installer globalement (par défaut : projet actuel)
  # -a, --agent       Cibler des agents spécifiques (ex: claude-code, cursor)
  
  # Exemple :
  npx skills add vercel-labs/agent-skills
  ```

- **Lister les skills installés** :
  ```bash
  npx skills list
  # ou
  npx skills ls
  ```

- **Rechercher un skill** :
  ```bash
  npx skills find <mot-clé>
  # Exemple :
  npx skills find typescript
  ```

- **Supprimer un skill** :
  ```bash
  npx skills remove <nom-du-skill>
  ```

---

## Skills et Rules Actuellement Utilisées

### Skills Installés (`.agent/skills`)

Actuellement, les skills suivants sont configurés dans le projet :

1.  **`vercel-react-best-practices`**
    -   *Description* : Guide complet d'optimisation des performances pour React et Next.js maintenu par Vercel Engineering. Contient 57 règles réparties en 8 catégories (élimination des waterfalls, optimisation de la taille du bundle, performance serveur, etc.). Priorisé par impact.
    -   *Usage* : Utilisé lors de l'écriture, la revue ou le refactoring de code React/Next.js.
    -   *Chemin* : `.agent/skills/vercel-react-best-practices`

2.  **`web-design-guidelines`**
    -   *Description* : Revue du code UI pour la conformité avec les Web Interface Guidelines. Couvre l'audit de design, le check d'accessibilité et les bonnes pratiques UX/UI.
    -   *Usage* : Utilisé pour les requêtes de type "review my UI", "audit design", "check accessibility".
    -   *Chemin* : `.agent/skills/web-design-guidelines`

3.  **`marketing-ideas`**
    -   *Description* : Stratège marketing avec une bibliothèque de 139 idées éprouvées. Aide à trouver des stratégies adaptées à la situation, au stade et aux ressources du produit.
    -   *Usage* : Utiliser pour demander des "marketing ideas", "growth strategies", "tactics", etc.
    -   *Chemin* : `.agent/skills/marketing-ideas` (situé dans le cache `.agents`)

4.  **`seo-audit`**
    -   *Description* : Expert SEO pour identifier les problèmes (techniques, on-page, contenu) et fournir des recommandations actionnables.
    -   *Usage* : Utiliser pour "SEO audit", "technical SEO", "why am I not ranking", etc.
    -   *Chemin* : `.agent/skills/seo-audit` (situé dans le cache `.agents`)

### Rules Installées (`.agent/rules`)

*Aucune rule n'est actuellement installée spécifiquement dans le dossier `.agent/rules`.*

---

## Structure des Dossiers `.agent` et `.agents`

Vous remarquerez peut-être deux dossiers cachés liés à l'agent :

1.  **`.agents`** :
    -   Ce dossier sert de **stockage local** (cache) pour les skills et rules téléchargés ou clonés.
    -   C'est ici que réside le code source réel des skills.

2.  **`.agent`** :
    -   Ce dossier contient la **configuration active** pour votre projet courant.
    -   Les dossiers à l'intérieur (comme `.agent/skills`) contiennent généralement des **liens symboliques** (symlinks) pointant vers les versions stockées dans `.agents`.
    -   C'est ce dossier que l'agent consulte pour savoir quels outils sont activés pour ce projet spécifique.
