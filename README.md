# Dini Fishing — Site vitrine V2

Site vitrine pour **Dini Fishing**, guide de pêche aux carnassiers et à la mouche en Extremadura, Espagne.

## Stack technique

| Technologie | Rôle | Pourquoi |
|---|---|---|
| **Astro 6** | Framework SSG | Zéro JS par défaut, HTML pur en sortie, Lighthouse 100 out-of-the-box |
| **TypeScript** | Typage | Sécurité sur les traductions, données espèces/séjours, props de composants |
| **Tailwind CSS v4** | Styles | Utility-first, pas de CSS mort, responsive trivial, co-location composants |
| **@astrojs/netlify** | Adapter | Déploiement statique, Netlify Forms natif |

### Pourquoi Astro ?
- **Next.js** = sur-dimensionné pour un site vitrine sans API
- **Vite+React** = tout à câbler manuellement (routing, SEO, SSG)
- **Astro** = HTML statique + zéro JS par défaut + TypeScript first-class + DX excellent

## Dev local

```bash
npm install && npm run dev   # http://localhost:4321
npm run build && npm run preview
```

## Ajouter un article

Dans `src/lib/articles.ts`, ajouter un objet dans `ARTICLES[]`. La page `/blog/mon-slug` est générée automatiquement.

## Infos client

- Lieu : Valdecaballeros, Extremadura, Espagne
- WhatsApp : +33 6 68 17 87 43 | Email : dini.extremadura@hotmail.com
- Domaine cible : dinifishing.com

---

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
