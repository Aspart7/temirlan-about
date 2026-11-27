# CLAUDE.md — temirlan-about

## Overview
Personal multilingual developer & AI product portfolio page built with Next.js (App Router), TypeScript, Tailwind CSS, and Lucide icons for the SkyWhisper & MonoLotus AI Developer Intern application.

## Structure
- `src/app/layout.tsx` — Root HTML layout, fonts, and metadata
- `src/app/page.tsx` — Entry page wrapping interactive multilingual portfolio client view
- `src/components/` — Modular UI sections (`PortfolioClient.tsx`, `CommandPalette.tsx`)
- `src/data/profile.ts` — Verified multilingual content (`en`, `ru`, `kk`, `zh`) with strict TypeScript interfaces
- `public/avatar.jpg` — Portrait image

## Engineering Rules
1. Strict TypeScript (`noImplicitAny`, no `any`, no `@ts-ignore`).
2. Keep every factual claim accurate to verified education, projects, and certificates.
3. All user-facing strings must be localized across all 4 languages (`en`, `ru`, `kk`, `zh`).
4. Run verification before every commit/PR:
   - `npm run typecheck`
   - `npm run lint`
   - `npm run build`
