# Ali Bounor — Portfolio

Site de présentation d’**Ali Bounor**, consultant fonctionnel / technico-fonctionnel ERP & SI.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Déploiement Vercel

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Contenu

Le contenu éditorial est centralisé dans `src/content/` :

- `site.ts` — identité, tagline, navigation, contact
- `projects.ts` — réalisations et liens live
- `experience.ts` — parcours, formation, langues
- `skills.ts` — compétences groupées

Le CV PDF est servi depuis `public/CV_Ali_Bounor.pdf`.

## Build

```bash
npm run build
npm start
```

## Déploiement

Projet prévu pour **Vercel** (front-end uniquement, pas de backend Railway).
