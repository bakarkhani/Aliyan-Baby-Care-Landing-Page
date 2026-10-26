# AGENTS.md — Persistent Instructions for Coding Agents

Welcome to the **Aliyan Baby Care** codebase. This repository contains the landing page for Aliyan Baby Care, a neighbourhood baby- and mother-care shop in Lahore, Pakistan.

Follow these persistent instructions across all development sessions.

---

## 1. Operating Principles & Golden Rules

1. **Read Before Acting:**
   - Always read [`IMPLEMENTATION.md`](./IMPLEMENTATION.md) and [`PROGRESS.md`](./PROGRESS.md) before writing any code or running commands.
   - Inspect the current filesystem state rather than assuming details from previous conversation history.

2. **Preserve the Reference Application:**
   - The original Vite prototype lives in `artifacts/aliyan-baby-care/`.
   - **Do not modify, move, rename, or delete the existing Vite application.**
   - It is the golden reference for visual design, CSS styling, responsive breakpoints, and behavior.

3. **Follow the Approved Next.js Strategy:**
   - The production Next.js application lives in `aliyan-next/`.
   - Use Next.js App Router, React 19, TypeScript, and Tailwind CSS v4.
   - Do not merge `aliyan-next/` into the parent Replit pnpm workspace. Keep `aliyan-next/` as a standalone, clean npm application to prevent Windows platform conflicts.

4. **Never Invent Data:**
   - **Do not invent** product names, fake prices, unverified TazzBazar product URLs, customer reviews, social counts, or business legal policies.
   - If an asset or detail is unconfirmed by the client, use an explicit, clearly labeled development placeholder (e.g. "Pending review", "Mascot artwork to be supplied").

5. **Respect the Approved Brand Palette:**
   - Primary mint: `#80C9C5`
   - Dark teal: `#286F70`
   - Main background: `#FAF8F3`
   - Alternate background: `#F3EFE6`
   - White surface: `#FFFFFF`
   - Soft mint: `#DCEFE8`
   - Peach accent: `#F2D5C7`
   - Primary text: `#354544`
   - Secondary text: `#586966`
   - Border: `#E5E5D9`
   - Display font: `Fraunces` (serif)
   - Body font: `DM Sans` (sans-serif)

6. **Verify Every Change:**
   - Do not declare a milestone or task completed merely because files were created.
   - Run `npm --prefix aliyan-next run typecheck` (`tsc --noEmit`).
   - Run `npm --prefix aliyan-next run build` (`next build`).
   - Only mark tasks `COMPLETED` when verification passes.

7. **Maintain Project Documentation:**
   - Record every command run, result, dependency change, and decision in [`PROGRESS.md`](./PROGRESS.md).
   - Update milestone status in [`IMPLEMENTATION.md`](./IMPLEMENTATION.md).
   - Update the quick-start handover section at the top of [`PROGRESS.md`](./PROGRESS.md) before concluding your session.

8. **Safety & Cleanliness:**
   - Avoid destructive commands (`rm -rf`, `git reset --hard`, `npm audit fix --force`).
   - Keep background processes tidy; do not leave orphaned dev servers running when completing your turn.
   - Keep all scripts Windows PowerShell compatible.
