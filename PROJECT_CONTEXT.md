# Codazz Website — Project Context

> **Read this first before touching any code.**
> This file exists so any AI model (Claude, GPT, Gemini, etc.) can immediately understand where the project stands and what to do next.

---

## What Is This Project?

A **Next.js 16 + Tailwind CSS v4 + Poppins** website for **Codazz**, a Toronto-based software development agency.

**Current State:** Phase 1 complete — full structural replica of [code-brew.com](https://www.code-brew.com/) built with Codazz placeholder content. Phase 2 is branding/content customization.

---

## Tech Stack

| Tool | Version | Notes |
|------|---------|-------|
| Next.js | 16.1.6 | App Router, no pages dir |
| React | 19.2.3 | |
| Tailwind CSS | v4 | `@import "tailwindcss"` — **do NOT use dynamic class names** |
| GSAP | 3.14.2 | Available but not currently used (removed in rewrite) |
| Poppins | via next/font | Weights 200–900 |
| Lenis | 1.x | Available but not currently used |
| split-type | 0.3.x | Available but not currently used |

---

## CRITICAL: Tailwind v4 Rule

**NEVER use dynamic Tailwind class names via template literals or variables.**

```tsx
// ❌ WRONG — Tailwind v4 won't generate these
<div className={`col-span-${n}`} />
<div className={card.colorClass} />

// ✅ CORRECT — always use static, complete class names
<div className="col-span-2" />
```

For dynamic colors/styles, use **inline styles** or **CSS variables**.

---

## File Structure

```
src/
  app/
    globals.css          ← Design system (colors, buttons, cards, animations)
    layout.tsx           ← Poppins font, metadata
    page.tsx             ← Assembles all sections
  components/
    Navbar.tsx           ← Fixed nav, mega-menu (Services + Industries dropdowns)
    Hero.tsx             ← Dark grid bg, animated bouncing avatars, stats
    ServicesSection.tsx  ← 7 service cards (dark bg)
    SuccessMetrics.tsx   ← Animated stat counters (teal bg)
    PortfolioSection.tsx ← 4 case studies with tab switcher
    IndustriesSection.tsx← 12 industry cards (dark bg)
    TestimonialsSection.tsx ← 6 testimonial cards (teal bg)
    PartnersMarquee.tsx  ← Infinite scrolling client logos
    FAQSection.tsx       ← Accordion with sticky CTA (light bg)
    CTASection.tsx       ← Contact form (dark gradient bg)
    Footer.tsx           ← Multi-column links + social (black bg)
```

**Old files still in `/components/` (unused — can delete):**
- `About.tsx`, `Contact.tsx`, `FAQ.tsx`, `Industries.tsx`, `Services.tsx`,
  `MarqueeSection.tsx`, `CaseStudies.tsx`, `Process.tsx`, `Testimonials.tsx`,
  `Preloader.tsx`, `Cursor.tsx`, `SmoothScroll.tsx`

---

## Design System (globals.css)

### CSS Variables
```css
--primary:      #b4fd83   /* lime green — CTAs, accents */
--primary-hover: #6dc134  /* darker green on hover */
--secondary:    #08323d   /* dark teal — secondary BG, text */
--black:        #000000
--white:        #ffffff
--dark:         #282828   /* body text */
--muted:        #636363   /* secondary text */
--light-bg:     #f4f8fb   /* light section BG */
--card-dark:    #1e1e1e   /* dark card BG */
--card-dark-2:  #2d373c   /* alt dark card BG */
--border-light: #eef3f7
--border-dark:  rgba(225,225,225,0.15)
```

### Utility Classes
- `.btn-primary` — lime green button with shine animation
- `.btn-outline` — transparent white border button
- `.btn-lg` — larger button variant
- `.service-card` — dark glassmorphism card with hover lift
- `.testimonial-card` — teal glassmorphism card
- `.stat-value` — large green number
- `.faq-item`, `.faq-question`, `.faq-answer` — accordion
- `.marquee-inner` — infinite scroll animation
- `.hero-grid-bg` — black + CSS grid lines background
- `.section` — base padding
- `.section--dark`, `.section--teal`, `.section--light` — section themes
- `.section-tag`, `.section-heading`, `.section-subtext` — headings
- `.cb-container` — max-width 1200px centered container

---

## Page Section Order

1. `<Navbar />` — fixed top
2. `<Hero />` — full viewport, dark grid bg
3. `<PartnersMarquee />` — thin dark strip
4. `<ServicesSection />` — 7 service cards
5. `<SuccessMetrics />` — animated counters
6. `<PortfolioSection />` — case studies
7. `<IndustriesSection />` — 12 industry cards
8. `<TestimonialsSection />` — client reviews
9. `<FAQSection />` — accordion + sticky CTA
10. `<CTASection />` — contact form
11. `<Footer />` — multi-column

---

## Phase 2: What Needs To Be Done

These are the changes still pending (user will direct which to tackle first):

### Branding Changes
- [ ] Replace "MapletechLabs" name/logo with final brand assets
- [ ] Replace placeholder client names (FinanceHub, MediCore, etc.) with real clients or keep as social proof
- [ ] Update email, phone, address in Footer and CTASection
- [ ] Add real social media links (Twitter, LinkedIn, GitHub)
- [ ] Update hero headline from "AI-Driven Digital Transformation Company" to brand-specific copy
- [ ] Update hero subtext and CTA copy

### Content Changes
- [ ] Replace avatar emojis with real team photos or brand illustrations
- [ ] Replace stats (500+ apps, 150+ clients) with actual numbers
- [ ] Add real case study content / portfolio images
- [ ] Add real blog posts or remove blog section
- [ ] Write real FAQ answers in brand voice
- [ ] Update meta title/description in `layout.tsx`

### Visual Changes
- [ ] Swap logo "M" placeholder with real logo SVG/image
- [ ] Add Open Graph image
- [ ] Possibly add GSAP scroll animations (Lenis + GSAP already installed)
- [ ] Add blog/resources section (code-brew has one, not built yet)
- [ ] Add "Why Choose Us" section
- [ ] Make FAQ fully responsive on mobile (grid currently 2-col on mobile)
- [ ] Make CTASection form actually send emails (Resend / EmailJS / API route)

### Technical
- [ ] Set up real contact form backend (suggested: Next.js API route + Resend)
- [ ] Add Google Analytics / GTM
- [ ] Add robots.txt and sitemap
- [ ] Deploy to Vercel or Netlify

---

## How To Run

```bash
npm install        # install deps
npm run dev        # http://localhost:3000
npm run build      # production build check
```

---

## Reference Website

**https://www.code-brew.com/** — The design this site is based on.

Key elements replicated:
- Poppins font, same weights
- Color palette: #b4fd83 (primary), #08323d (secondary)
- Dark hero with grid background and bouncing role avatars
- Mega-menu navigation
- Dark service cards with hover rotation effect on icons
- Teal testimonials with glassmorphism
- FAQ with sticky CTA sidebar
- Infinite marquee for partners/clients
- Dark/teal/light alternating section pattern

---

## Notes For AI Models

1. **Don't touch globals.css structure** — it's the foundation. Add to it but don't reorganize.
2. **Don't introduce dynamic Tailwind classes** — use inline styles for anything dynamic.
3. **Components use plain React** — no GSAP currently. Add GSAP only if user asks for animations.
4. **All components are `'use client'`** — this is intentional since the site is fully interactive.
5. **page.tsx is a server component** — don't add `'use client'` to it.
6. **For adding sections** — follow the pattern: plain inline styles for layout, CSS classes for reusable design tokens.
