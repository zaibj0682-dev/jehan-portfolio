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
- **Hero background**: `HeroBg.tsx` is now a looping `<video>` (`/videos/hero-bg.webm` + `.mp4` fallback, `preload="none"`, poster `/images/hero-poster.jpg`) with `mixBlendMode: screen` and a slow CSS `cinematic-zoom` keyframe — **not** the earlier CSS Stripe-gradient animation. `preload="none"` was chosen deliberately to fix a slow-LCP regression (commit `f1e6c0e`); don't switch it to `auto`/`metadata` without checking load performance.
- Never use `requestAnimationFrame` to update `backgroundImage` — it forces main-thread style recalculation every 16ms and makes the page lag.
- Use Framer Motion `whileInView` with `viewport={{ once: true, margin: "-80px" }}` for scroll animations.

### Turbopack cache
If components render stale code after edits: stop the server → `rm -rf .next` → restart. The browser pane screenshot goes black when scrolled — use `javascript_exec` to verify DOM state instead.

## File structure
```
src/
  app/
    layout.tsx          — root layout: Inter font, JSON-LD (Person/ProfessionalService schema),
                           PreloaderProvider > SoundProvider > LenisProvider > FilmGrain/CustomCursor > children
                           (Preloader is NOT rendered here anymore — removed in commit `efa325a`)
    page.tsx            — assembles all section components in order
    globals.css         — CSS variables, base styles, Tailwind v4 import, Lenis smooth-scroll CSS
    work/
      fashionablyfab/page.tsx — dedicated case study page
      landbeagle/page.tsx     — dedicated case study page
      cognitrex/page.tsx      — dedicated case study page
      velisse/page.tsx        — dedicated case study page
      lotusledger/page.tsx    — dedicated case study page
  context/
    PreloaderContext.tsx — now a **stub**: always returns `isReadyToAnimate: true` / `isVideoReady: true` immediately (no real gating). Still wraps children with a `beforeunload`/`pagehide` black-screen blocker to avoid iOS paint-hold flicker on navigation.
    SoundContext.tsx     — `soundEnabled`, `toggleSound`, `playHover` — UI hover/click sound effects
  components/
    LenisProvider.tsx   — wraps app in Lenis smooth-scroll, "use client"
    Nav.tsx             — fixed header, 1280px container, scroll-driven blur/bg via useScroll, sound toggle, "use client"
    Hero.tsx            — video-bg hero, profile card right side (uses TiltCard, AnimatedText, SplitText), "use client"
    Intro.tsx           — "The story" scroll-revealed narrative (15 lines), 1280px container, "use client"
    ui/
      HeroBg.tsx         — looping background `<video>` (webm+mp4, `preload="none"`), NOT the old CSS Stripe gradient — see Animation performance below
      DynamicBackground.tsx — fixed full-viewport bg, scroll-interpolates #060606 → #040b16 → #060606, "use client"
      Marquee.tsx        — two velocity-based infinite scroll rows of tech-stack keywords, "use client"
      ScrollProgress.tsx — fixed bottom-right scroll-to-top button with circular progress ring, "use client"
      Preloader.tsx      — DEAD CODE: file still exists, full-screen loading-counter UI, but no longer imported by layout.tsx
      PreloaderReady.tsx — DEAD CODE: not imported anywhere in `src/`
      FilmGrain.tsx      — subtle fixed grain overlay texture
      CustomCursor.tsx   — custom cursor replacement, desktop only
      Magnetic.tsx       — wraps a child, applies magnetic cursor-attraction hover effect
      TiltCard.tsx       — 3D tilt-on-hover wrapper (used by Hero profile card)
      Parallax.tsx       — scroll-linked parallax translate wrapper
      ParallaxImage.tsx  — parallax wrapper specifically for `next/image`, used on case study pages
      AnimatedText.tsx   — word/line reveal-on-scroll text wrapper
      SplitText.tsx      — per-character/word staggered entrance text animation
      LiveStatus.tsx     — live local-timezone/availability indicator
      Accordion.tsx      — generic accordion used by FAQ
      PrimaryButton.tsx  — white filled button
      GhostButton.tsx    — ghost/outline button
      Reveal.tsx         — scroll-reveal wrapper (Framer Motion), "use client"
    Services.tsx        — 5 service cards in auto-fill grid, "use client"
    SelectedWork.tsx    — 9 case study cards, 16:10 image ratio, parallax image pan on scroll, industry tag + result + delivery time; first 5 link out to `/work/<slug>` case study pages, "use client"
    Process.tsx         — zigzag animated roadmap (5 steps), "use client"
    Reviews.tsx         — 6 client review cards
    About.tsx           — two-column: story + milestones left, profile photo right (light container blend fix)
    Packages.tsx        — 3 pricing cards in connected panel, "use client"
    FAQ.tsx             — two-column accordion (left heading, right accordion), "use client"
    CTA.tsx             — dark card with headline left + Fiverr profile stats right
    Footer.tsx          — brand block + nav links + Fiverr links + copyright, "use client"
    ContactForm.tsx     — present in repo but NOT used in page.tsx (site has no contact form — Fiverr-only CTA policy)
    Numbers.tsx         — present in repo but NOT rendered in page.tsx (removed from page flow)
```

## Page section order (`page.tsx`, current)
```
DynamicBackground (fixed bg layer, renders behind everything)
Nav
Hero
Intro
Services
Marquee
SelectedWork
Process
Reviews
About
Packages
FAQ
[CTA + Footer — wrapped together in a relative div with an absolute
 /images/new-cta-bg.jpg background image (opacity 0.45, saturate/contrast filter)
 and a top-to-bottom gradient blending var(--color-bg) into the image]
ScrollProgress (fixed, renders last)
```

## Case studies (`SelectedWork.tsx`, 9 total — first 5 have full `/work/<slug>` pages)
1. FashionablyFab — Lifestyle & Editorial — `/work/fashionablyfab`
2. Land Beagle — Marketplace Platform — `/work/landbeagle`
3. Cognitrex & Hana Dhanji — Enterprise SaaS — `/work/cognitrex`
4. Velisse Labs — Research Products (WooCommerce) — `/work/velisse`
5. Lotus Ledger — SaaS / POS — `/work/lotusledger`
6. Bliss Thai Spa — Wellness & Beauty (external link only, no case study page)
7. Panel Paramedics — Solar & Home Services (external link only)
8. 21 Neptune Apartments — Real Estate (external link only)
9. Penguin Keys — E-commerce, WooCommerce (external link only)

## Profile & project images
Project media now lives under `public/images/projects/<client>/` as `.webp` (site assets) with matching `.png`/`.mp4` originals kept alongside for some clients (e.g. `cognitrex/hero.png` + `hero.webp`, `landbeagle/demo.mp4`). Always reference the `.webp` in components — the `.png`/`.mp4` are source masters, not meant to be served directly except `demo.mp4` files used intentionally in case study pages.
- `profile.jpg` (was `profile.png`) — passport-style photo with white background. Use light container (`background: #f0ece8`) + dark gradient overlay at bottom to blend into dark page. Do NOT use `mix-blend-mode: multiply` with dark container — it makes the photo invisible.
- Simpler 4 legacy projects (no case study page) use flat mockup files: `projects/blissthaispa-mockup.webp`, `projects/penguinkeys-mockup.webp`, `projects/neptune-mockup.webp`, `projects/panelparamedics-mockup.webp`.

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

## Brand gradient colors (used in accents, not the hero anymore)
`#6ec3f4` (cyan) · `#3a3aff` (electric blue) · `#ff61ab` (hot pink) · `#E63946` (red)
Still shows up as the Nav scroll-progress bar gradient and the Preloader's dead-code divider — the Hero itself now uses the `HeroBg.tsx` video, not this gradient.

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
