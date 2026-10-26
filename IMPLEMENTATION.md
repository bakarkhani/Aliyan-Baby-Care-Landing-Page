# Aliyan Baby Care — Implementation Roadmap & Milestone Tracker

**Authoritative Project Status & Roadmap**  
*Last updated: Milestone M1.3 completed (Landing Page Component Migration to Next.js)*

---

## 1. Project Objective & Scope

Migrate the existing **Aliyan Baby Care** landing page from an initial prototype built with React 19 + Vite 7 (scaffolded via Replit AI in a pnpm monorepo) into a modern, production-grade **Next.js App Router** application.

### Key Goals & Constraints
- **Preserve Visual Identity:** Soft watercolor nursery aesthetic, approved color tokens, custom typography (`Fraunces` serif + `DM Sans`), and peaceful brand tone ("Everything Your Little One Needs").
- **Zero Layout or Interactive Regression:** Retain the nursery shelf hero, swaying leaf "Shop" link, swinging star "Contact" link, 3-category product slider with touch swiping, and expandable policy accordion.
- **Client Framework Requirement:** Next.js App Router (React 19, TypeScript, Tailwind CSS v4, PostCSS, npm).
- **Safety & Reference Preservation:** The original Vite application under `artifacts/aliyan-baby-care/` remains untouched as a reference and fallback.
- **Content Integrity:** Never fabricate product names, prices, product URLs, social testimonials, reviews, or legal policies. Maintain clear pending placeholders for unconfirmed assets.

---

## 2. Milestone Overview

| Milestone | Description | Status | Next Action / Blocker |
|---|---|---|---|
| **M1.1** | Codebase Audit & Migration Assessment | `COMPLETED` | Verified existing codebase & migration path. |
| **M1.2** | Next.js Foundation & Agent Handover | `COMPLETED` | Foundation built, verified, and documented. |
| **M1.3** | Landing Page Component Migration | `COMPLETED` | All 6 sections migrated, tested, and serving HTTP 200. |
| **M1.4** | Real Content, Assets & TazzBazar Integration | `BLOCKED` | Awaiting client-supplied mascot artwork, real product catalog & links. |
| **M1.5** | Production Hardening, SEO & Quality Assurance | `NOT STARTED` | Next recommended step while awaiting client assets. |

---

## 3. Detailed Milestone Status & Tasks

### Milestone M1.1 — Codebase Audit & Migration Assessment
- **Status:** `COMPLETED`
- **Completed Tasks:**
  - Audited existing Vite 7 + React 19 + Tailwind v4 landing page in `artifacts/aliyan-baby-care/`.
  - Identified all 10 key audit areas (framework versions, dependencies, entry points, layout, assets, responsive breakpoints, technical risks).
  - Formulated an exact Next.js App Router migration plan.

---

### Milestone M1.2 — Next.js Foundation & Agent Handover
- **Status:** `COMPLETED`
- **Completed Tasks:**
  - Created isolated Next.js application directory `aliyan-next/` with npm.
  - Configured `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, and `.gitignore`.
  - Configured `aliyan-next/src/app/globals.css` with the 11 approved brand color tokens.
  - Configured `aliyan-next/src/app/layout.tsx` with native `next/font/google` for `DM Sans` and `Fraunces`, plus metadata.
  - Established project documentation: `IMPLEMENTATION.md`, `PROGRESS.md`, `AGENTS.md`.
- **Verification:** `npm run typecheck` and `npm run build` passed with zero errors.

---

### Milestone M1.3 — Landing Page Component Migration
- **Status:** `COMPLETED`
- **Completed Tasks:**
  - [x] Migrated complete styles, custom classes, keyframe animations, and media queries from `artifacts/aliyan-baby-care/src/index.css` to `aliyan-next/src/app/globals.css`.
  - [x] Created `aliyan-next/src/config/site.ts` with typed business data, social profiles, category lists, policy items, and placeholders.
  - [x] Created `aliyan-next/src/components/ui/SocialMark.tsx` (SVG social badges) and `ExternalLink.tsx` (secure target blank wrapper).
  - [x] Created `aliyan-next/src/components/sections/Hero.tsx` (Server Component with nursery shelf, hanging leaf Shop link, hanging star Contact link, scroll cue).
  - [x] Created `aliyan-next/src/components/sections/FeaturedProducts.tsx` (`'use client'` with ARIA tabs, keyboard arrow navigation, 5-slot slider, touch swipe, direction animation, disabled Shop Now CTA).
  - [x] Created `aliyan-next/src/components/sections/SocialShowcase.tsx` (Server Component with brand copy, 4 social profile links, 6 placeholder cards).
  - [x] Created `aliyan-next/src/components/sections/CustomerInformation.tsx` (`'use client'` with interactive policy accordion, policy icons, and pending tags).
  - [x] Created `aliyan-next/src/components/sections/Contact.tsx` (Server Component with phone, WhatsApp, email, hours, and address cards).
  - [x] Created `aliyan-next/src/components/sections/Footer.tsx` (Server Component with 4-column layout, social links, farewell mascot placeholder, sweet dreams tagline, copyright).
  - [x] Assembled single-page landing shell in `aliyan-next/src/app/page.tsx` with keyboard skip link (`#featured`).
  - [x] Enhanced `aliyan-next/src/app/layout.tsx` with complete OpenGraph, Twitter, and Viewport metadata.
  - [x] Created `aliyan-next/public/robots.txt`.
- **Verification Run & Passed:**
  - `npm run typecheck` (`tsc --noEmit`): Exited with code 0 (0 errors).
  - `npm run build` (`next build`): Exited with code 0 (prerendered 4 static pages, 0 errors, 0 warnings).
  - Prerendered HTML verified (`.next/server/app/index.html` contains all sections and semantic markup).
  - Local HTTP server test: Successfully served HTTP 200 on `http://localhost:3005`.

---

### Milestone M1.4 — Real Content, Assets & TazzBazar Integration
- **Status:** `BLOCKED` *(Pending client business assets)*
- **Blockers & Missing Information:**
  - Hero watercolor mascot (sleeping baby on crescent moon illustration).
  - Footer farewell watercolor mascot (waving baby on crescent moon illustration).
  - 15 real product photos, titles, and verified TazzBazar product destination URLs.
  - 6 real social showcase images / post links.
  - Final business confirmation on unconfirmed policies (returns/exchanges window, warranty scope, privacy policy).
- **Planned Tasks:**
  - [ ] Place mascot images in `aliyan-next/public/images/`.
  - [ ] Replace placeholder containers with Next.js `<Image />` components.
  - [ ] Populate verified TazzBazar product links and remove disabled state from "Shop Now" buttons.
  - [ ] Update pending policy tags once client provides legal/return text.

---

### Milestone M1.5 — Production Hardening, SEO & Quality Assurance
- **Status:** `NOT STARTED` *(Next Recommended Milestone while awaiting client assets)*
- **Planned Tasks:**
  - [ ] Structured data (`LocalBusiness` JSON-LD schema).
  - [ ] Production build and asset compression validation.
  - [ ] Mobile/tablet/desktop visual verification.
  - [ ] Accessibility (WCAG 2.1 AA) and keyboard navigation audit.
  - [ ] Verification of production indexing headers (ensuring absence of Replit-specific `noindex`).

---

## 4. Dependencies Between Milestones

```
M1.1 (Audit) [COMPLETED]
   └──> M1.2 (Next.js Foundation) [COMPLETED]
           └──> M1.3 (Landing Page Migration) [COMPLETED]
                   ├──> M1.4 (Real Assets & Content) [BLOCKED on Client]
                   └──> M1.5 (Production Hardening & QA) [READY TO START]
```

---

## 5. Next Recommended Action

Because Milestone **M1.4** is blocked awaiting client assets (mascot artwork, product photography, TazzBazar URLs), proceed to **Milestone M1.5: Production Hardening, SEO & Quality Assurance** to add JSON-LD structured data, conduct accessibility checks, and prepare the site for deployment.
