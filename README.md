# Billal Hossain · Developer Portfolio

A premium, responsive, dark/light **Next.js App Router + TypeScript + Tailwind CSS v4 + shadcn/ui-compatible components** portfolio starter. Built from the details provided by Billal Hossain. Intentionally avoids invented employment history, numerical accomplishments, or unverifiable project features.

## Quick start

Requirements: **Node.js 20.9+** and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before publishing, run:

```bash
npm run typecheck
npm run lint
npm run build
```

> Note: The ZIP deliberately contains source files only. `node_modules` and a lockfile are not bundled. Your first `npm install` needs an internet connection.

## Use with your **existing Next.js project**

1. Back up/commit your current work. This zip is a **separate reference project**, not a blind overwrite patch.
2. Confirm App Router, TypeScript, Tailwind CSS v4 and `@/*` path alias are configured. Check your Next.js / Tailwind versions before copying configuration files.
3. Install needed dependencies: `npm i @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react motion next-themes`.
4. Copy the relevant `src/components`, `src/data`, and `src/lib` files into your existing app; merge `src/app/page.tsx`, `src/app/globals.css`, and `src/app/layout.tsx` carefully (do not discard existing providers/routes).
5. For shadcn/ui, use `npx shadcn@latest init` **only if you haven't initialized it already**, then use `npx shadcn@latest add <component>` for additional UI parts. This package includes locally authored shadcn-style Button/Card/Badge components and `components.json`, so the included UI works without fetching registry files; the visual design is customized.
6. Set `NEXT_PUBLIC_SITE_URL` to your final domain for canonical/sitemap metadata. Example in `.env.example`.
7. **Do not copy** the example `package.json`, `tsconfig.json`, or `postcss.config.mjs` over your existing equivalents without reviewing differences.

If you want an exact merge-ready patch, upload your existing project ZIP (without `node_modules` and `.next`).

## Content updates (single source of truth)

- `src/data/profile.ts`: name, bio, skills, education, external links, project descriptions and GitHub repo links.
- `src/components/sections/hero.tsx`: hero layout and decorative developer scene.
- `src/components/sections/projects.tsx`: project cards. Abstract initials artwork is **illustrative**, not a real screenshot. Replace with `next/image` screenshot components once you have permission / actual screenshots.
- `src/app/layout.tsx`: SEO metadata.
- `src/app/globals.css`: design tokens, typography, illustration and visual style. Dark/light palettes live at the top.

## Important verification before publication

- User-provided GitHub URLs could not be read from the environment. The three cards are linked by their **provided names and URL only**. Specific features, precise stacks, dates, outcomes and screenshots are intentionally **not claimed**. Review each README and update `profile.ts` with verified specifics.
- Google Doc requirements and the instruction video were not readable in this environment. This is a **professional first implementation**, not a certified match to those external instructions. Upload the files or grant access before final sign-off.
- No résumé PDF or headshot was supplied, so neither is fabricated. Later add `public/resume.pdf` and a real user-approved photo if desired.
- Domain is not assumed; configure `NEXT_PUBLIC_SITE_URL` before deployment.

## Architecture

```text
src/
  app/
    globals.css
    icon.svg
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
    not-found.tsx
  components/
    sections/       # Hero, About, Projects, Stack, Contact
    ui/             # shadcn-style Button, Card, Badge
    navbar.tsx
    reveal.tsx
    theme-provider.tsx
    theme-switch.tsx
    copy-email.tsx
    section-heading.tsx
  data/profile.ts   # All user content and selected project metadata
  lib/utils.ts      # cn() utility
```

## What it includes

- Accessible responsive navigation, mobile menu and skip link
- Working theme switch (persisted via `next-themes`)
- Motion scroll reveals, respecting reduced-motion preferences
- Bento layout and CSS-only illustrations (no fake product screenshots)
- GitHub/LinkedIn/email actions and copy email interaction
- Metadata, Open Graph basics, robots and sitemap, favicon, 404
- Semantic heading hierarchy and mobile-first styling

## Roadmap

1. Review user's requirements document and instruction video.
2. Audit all 3 GitHub projects; write accurate case studies; insert screenshots and live URLs where genuinely available.
3. Add genuine résumé link when CV is supplied.
4. Run `npm run lint`, `npm run typecheck`, `npm run build` on a machine with dependencies installed; manually test desktop/mobile and accessibility.
5. Deploy to Vercel or preferred compatible Next.js hosting; add custom domain and check SEO.
