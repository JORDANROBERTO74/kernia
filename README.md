# Kernia

Marketing site for Kernia, an AI operations platform for IT support teams. One page, eleven sections, built with Next.js 14, TypeScript and Tailwind CSS.

Live: https://kernia.vercel.app

![Kernia marketing site](docs/screenshot.jpg)

## What it covers

- Hero with email capture
- Client strip and platform features
- Global scale metrics and security/compliance
- Enterprise case studies (fictional)
- Startup and developer sections with an API example
- No-code integrations directory
- Closing CTA and footer

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 14.1 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 + shadcn/ui (Radix) |
| Type | Manrope via `next/font` |
| Motion | Framer Motion |
| Icons | lucide-react |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev      # development server
npm run lint     # ESLint
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
src/
  app/                 # App Router entry, layout, metadata, icon, OG image
  components/
    landing/           # page sections (hero, features, enterprise, cta, footer…)
    commons/           # shared client logo
    ui/                # shadcn/ui primitives
  lib/                 # utilities and hooks
```

## Design tokens

Colours and type live in `src/app/globals.css` and `tailwind.config.ts`.

| Token | Value | Use |
| --- | --- | --- |
| ink | `#101418` | headings, dark surfaces |
| accent | `#00B37E` | primary actions, links |
| accent-2 | `#4CD7F6` | gradients, highlights |
| muted | `#495057` | body copy |
| surface | `#F5F7F8` | section backgrounds |

## Deployment

The site deploys to Vercel from `main`. Pushing to `main` triggers a production build.

## License

Proprietary. See `LICENSE`.
