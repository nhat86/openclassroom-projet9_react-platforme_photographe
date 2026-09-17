# FishEye — Plateforme de photographes

Application web présentant des photographes freelances et leurs galeries de médias (photos et vidéos). Projet réalisé dans le cadre de la formation OpenClassrooms, reconstruit en stack moderne full-stack.

## Fonctionnalités

- **Page d'accueil** : liste des photographes (portrait, ville, slogan, tarif)
- **Page photographe** : galerie d'images et de vidéos, tri par **popularité**, **date** ou **titre**
- **Lightbox** : navigation clavier entre les médias
- **Likes** : compteur par média + total des likes du photographe, persistés en base via une API REST (`POST /api/media/like`)
- **Modale de contact** : formulaire accessible (les données sont loguées en console, conformément au brief)
- **Page 404** personnalisée
- **Accessibilité** : rôles ARIA, navigation clavier, labels sur les éléments interactifs

## Stack technique

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Prisma 6** + **PostgreSQL** (Prisma Postgres)
- **Lucide React** (icônes)
- Déployé sur **Vercel**

## Démarrage en local

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer l'environnement
cp .env.example .env
# puis renseigner DATABASE_URL (connection string PostgreSQL)

# 3. Préparer la base de données
npx prisma migrate deploy   # crée les tables
npx prisma db seed          # charge les données depuis data/*.json

# 4. Lancer le serveur de dev
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande        | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Serveur de développement                 |
| `npm run build` | Build de production                      |
| `npm run start` | Serveur de production                    |
| `npm run lint`  | ESLint                                   |
| `npx prisma db seed` | Re-seed la base depuis `data/`      |

## Structure

```
app/
├── api/media/like/route.ts   # API REST : mise à jour des likes
├── components/               # Header, cartes, lightbox, modale contact...
├── lib/prisma-db.js          # Requêtes Prisma
├── page.tsx                  # Accueil (statique, prérendu)
└── photographer/[slug]/      # Page photographe (dynamique)
prisma/
├── schema.prisma             # Modèles Photographer / Media
├── migrations/               # Migrations SQL
└── seed.js                   # Seed depuis data/photographer.json + data/media.json
public/media/                 # Assets images/vidéos
```

## Déploiement

Le projet est déployé sur **Vercel**. Pour redéployer ailleurs :

1. `DATABASE_URL` doit pointer vers une base PostgreSQL accessible (Neon, Supabase, Prisma Postgres…)
2. Le `postinstall` exécute `prisma generate` automatiquement au build
3. La base doit être migrée (`prisma migrate deploy`) et seedée avant le premier build, car la page d'accueil est prérendue
