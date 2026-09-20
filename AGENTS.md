<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Jehan Zaib Portfolio — Agent Context

## Project overview
Fiverr Pro portfolio for **Jehan Zaib** — WordPress designer & developer. Top Rated on Fiverr since 2020, 3,300+ projects, 5.0 rating. The site's sole CTA is Fiverr: `https://www.fiverr.com/jehanzaib_007`. No contact form, no email, no LinkedIn. English only.

## Tech stack
- **Framework**: Next.js App Router, `output: "export"` (static export), Turbopack dev server
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` in globals.css) + inline styles
- **Animation**: Framer Motion (`motion`, `AnimatePresence`, `whileInView`, `motion.path`)
- **Icons**: Lucide React
- **Images**: `next/image` with `fill` prop for responsive images
- **Deploy**: Vercel (static export)
- **Dev port**: runs on a random port (check `preview_start` output)

## Critical conventions

### "use client" directive
Any component using hooks (`useState`, `useRef`, `useEffect`), event handlers (`onMouseEnter`, `onClick`), or Framer Motion animations **must** have `"use client"` at the top. Missing this causes a runtime error: "Event handlers cannot be passed to Client Component props."

### Container standard (1280px)
Every section follows the same container pattern — **do not deviate**:
```tsx
// Outer section: full width, vertical padding only
<section style={{ width: "100%", paddingTop: "clamp(60px,7vw,100px)", paddingBottom: "clamp(60px,7vw,100px)" }}>
  // Inner container: 1280px centered, horizontal padding inside
  <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
    {/* content */}
  </div>
</section>
```
Nav inner div: `maxWidth: 1280px, margin: 0 auto, padding: 0 clamp(20px,4vw,40px), height: 60px`
Footer: outer = full width with borderTop, inner div = `maxWidth: 1280px, margin: 0 auto, padding: 0 clamp(20px,4vw,40px)`

**Never** add a second inner wrapper with `max-w-content mx-auto` — this causes double-centering and misalignment.

### Tailwind config (`tailwind.config.ts`)
Custom breakpoints: `tablet: 810px`, `desktop: 1280px`
Custom maxWidth: `section: 1600px`, `wide: 1280px`, `content: 1200px`, `text: 720px`
Custom spacing: non-standard scale (1=4px, 2=6px, 3=8px, 4=10px, 5=12px, 6=16px, etc.)

### CSS variables (globals.css)
Use `var(--color-bg)`, `var(--color-text-heading)`, `var(--color-text)`, `var(--color-text-muted)`, `var(--font-display)`, `var(--font-sans)`, `var(--text-h1)` through `var(--text-h6)`.

### Animation performance
- **Hero background**: Pure CSS `@keyframes` in `HeroBg.tsx` — NOT a JS RAF loop. Stripe colors: `#6ec3f4`, `#3a3aff`, `#ff61ab`, `#E63946`. CSS `transform: skewY(-12deg)` on bg div.
- Never use `requestAnimationFrame` to update `backgroundImage` — it forces main-thread style recalculation every 16ms and makes the page lag.
- Use Framer Motion `whileInView` with `viewport={{ once: true, margin: "-80px" }}` for scroll animations.

### Turbopack cache
If components render stale code after edits: stop the server → `rm -rf .next` → restart. The browser pane screenshot goes black when scrolled — use `javascript_exec` to verify DOM state instead.

## File structure
```
src/
  app/
    layout.tsx          — root layout, font imports, metadata
    page.tsx            — assembles all section components in order
    globals.css         — CSS variables, base styles, Tailwind v4 import
  components/
    Nav.tsx             — fixed header, 1280px container, "use client"
    Hero.tsx            — full-bleed gradient hero, profile card right side, "use client"
    ui/
      HeroBg.tsx        — CSS-only animated Stripe gradient background (no "use client" needed)
      PrimaryButton.tsx — white filled button
      GhostButton.tsx   — ghost/outline button
      Reveal.tsx        — scroll-reveal wrapper (Framer Motion), "use client"
    Numbers.tsx         — 4-stat strip (3,300+ projects, 5.0, 6+ yrs, ~1hr)
    About.tsx           — two-column: story + milestones left, profile photo right
    SelectedWork.tsx    — 4 case study cards in 2-col grid, "use client"
    Services.tsx        — 5 service cards in auto-fill grid, "use client"
    Process.tsx         — zigzag animated roadmap (5 steps), "use client"
    Packages.tsx        — 3 pricing cards in connected panel, "use client"
    Reviews.tsx         — 6 client review cards
    FAQ.tsx             — two-column accordion (left heading, right accordion), "use client"
    CTA.tsx             — dark card with headline left + Fiverr profile stats right
    Footer.tsx          — brand block + nav links + Fiverr links + copyright, "use client"
```

## Page section order (`page.tsx`)
Hero → Numbers → SelectedWork → Services → Process → Reviews → About → Packages → FAQ → CTA → Footer

## Profile & project images
All in `public/images/`:
- `profile.png` — passport-style photo with white background. Use light container (`background: #f0ece8`) + dark gradient overlay at bottom to blend into dark page. Do NOT use `mix-blend-mode: multiply` with dark container — it makes the photo invisible.
- `projects/blissthaispa-mockup.png` — Bliss Thai Spa (wellness)
- `projects/penguinkeys-mockup.png` — Penguin Keys (WooCommerce e-commerce)
- `projects/neptune-mockup.png` — 21 Neptune Apartments (real estate)
- `projects/panelparamedics-mockup.png` — Panel Paramedics (solar services)

## Design system
- **Background**: `#060606` near-black
- **Surface cards**: `#0a0a0a`, `#0d0d0d`, `#141414`
- **Text heading**: `rgba(255,255,255,0.92)`
- **Text body**: `rgba(255,255,255,0.55)` to `rgba(255,255,255,0.6)`
- **Text muted**: `rgba(255,255,255,0.25)` to `rgba(255,255,255,0.4)`
- **Borders**: `rgba(255,255,255,0.07)` to `rgba(255,255,255,0.12)`
- **Available dot**: `#4ade80` with `box-shadow: 0 0 6px rgba(74,222,128,0.6)`
- **Star color**: `#d39794`
- **Letter spacing**: always negative on headings (`-0.04em` h1/h2, `-0.03em` h3/h4)
- **Border radius**: cards `16px`–`20px`, buttons `8px`–`10px`, pills `999px`

## Stripe hero colors
`#6ec3f4` (cyan) · `#3a3aff` (electric blue) · `#ff61ab` (hot pink) · `#E63946` (red)
Animation: `background-size: 400% 400%`, `animation: stripe-flow 10s ease infinite`, `transform: skewY(-12deg)`, `opacity: 0.88`

## Fiverr URLs (all CTAs point to these — no other contact)
- Profile: `https://www.fiverr.com/jehanzaib_007`
- Main gig: `https://www.fiverr.com/jehanzaib_007/design-and-develop-a-professional-wordpress-website-and-blog`

## Build & deploy
```bash
# Dev
cd "jehan-portfolio" && npm run dev

# Production build
cd "jehan-portfolio" && npm run build

# Deploy to Vercel (from project root)
vercel --prod
```

## Known issues / gotchas
- Browser pane screenshot goes black when page is scrolled — use `javascript_exec` to check DOM state
- Turbopack sometimes serves stale JS — clear `.next` cache and restart server
- `next/image` with `fill` requires the parent to have `position: relative` and explicit dimensions
- All event handlers (`onMouseEnter`, etc.) require `"use client"` on the component
- `motion` from Framer Motion cannot be used in Server Components — always add `"use client"`
