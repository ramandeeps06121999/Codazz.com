'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const tocSections = [
  { id: 'quick-comparison',   label: 'Quick Comparison',       emoji: '⚡' },
  { id: 'react-overview',     label: 'React Overview',          emoji: '⚛️' },
  { id: 'angular-overview',   label: 'Angular Overview',        emoji: '🔺' },
  { id: 'performance',        label: 'Performance',             emoji: '📊' },
  { id: 'learning-curve',     label: 'Learning Curve',          emoji: '📈' },
  { id: 'when-to-choose',     label: 'When to Choose',          emoji: '🎯' },
  { id: 'job-market',         label: 'Job Market & Salaries',   emoji: '💼' },
  { id: 'ecosystem',          label: 'Ecosystem & Tools',       emoji: '🛠️' },
  { id: 'trends-2026',        label: '2026 Trends',             emoji: '🚀' },
  { id: 'faq',                label: 'FAQ',                     emoji: '❓' },
];

const relatedPosts = [
  { slug: 'nextjs-vs-react-2026',         title: 'Next.js vs React in 2026: Which Should You Choose?',        category: 'Engineering', readTime: '14 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native: The Definitive 2026 Comparison',   category: 'Engineering', readTime: '15 min' },
  { slug: 'python-vs-nodejs-backend-2026',title: 'Python vs Node.js for Backend in 2026',                      category: 'Engineering', readTime: '11 min' },
];

export default function ReactVsAngularClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs: { q: string; a: string }[] = [
    {
      q: 'Is React or Angular better for large enterprise applications?',
      a: 'Angular has traditionally been the enterprise favorite because its opinionated structure, built-in dependency injection, and strict TypeScript enforcement make large codebases easier to maintain across big teams. That said, in 2026 many large enterprises (Facebook, Netflix, Airbnb) run React at massive scale with equal success. The real deciding factor is team familiarity and the conventions your organization enforces.',
    },
    {
      q: 'Which framework has a better job market in 2026?',
      a: 'React leads by a wide margin. Stack Overflow\'s 2025 Developer Survey shows React used by 43% of developers versus Angular\'s 17%. React job listings outnumber Angular roughly 3-to-1 on LinkedIn and Indeed. However, Angular roles typically command a premium salary ($10,000–$20,000 more) because the pool of experienced Angular developers is smaller.',
    },
    {
      q: 'Can I use React and Angular in the same project?',
      a: 'Technically yes — you can embed either as a micro-frontend using Module Federation or Web Components — but it\'s a complexity you should only take on if you\'re migrating a large Angular app to React (or vice versa) incrementally. For new projects, pick one.',
    },
    {
      q: 'How long does it take to learn Angular coming from React?',
      a: 'Plan for 4–8 weeks of focused learning to become productive. Angular introduces RxJS observables, decorators, NgModules (or standalone components in Angular 17+), dependency injection, and Angular-specific CLI conventions. The concepts are powerful but dense. Coming from React, the mental model shift from functional to class-based (or reactive) thinking is the biggest hurdle.',
    },
    {
      q: 'Is Angular dying in 2026?',
      a: 'No — Angular is not dying. Adoption has plateaued compared to React, but Angular 17/18 introduced major improvements: Signals for reactive state, standalone components, deferrable views, and a much faster build pipeline via esbuild. Google continues to invest heavily, and Angular dominates in regulated industries (finance, government, healthcare) where its opinions are an asset, not a burden.',
    },
  ];

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="/blog_images/nextjs-vs-react-2026.jpg"
              alt="React and Angular logos side by side on a dark code editor background"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 28px)',
              }}
            />
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">

            {/* Breadcrumb */}
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            {/* Meta row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(34,197,94,0.12)', color: '#22c55e',
                padding: '5px 14px', borderRadius: 100,
              }}>Engineering</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>&middot;</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                12 min read
              </span>
            </div>

            {/* Title */}
            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              React vs Angular in 2026: Which Framework Should You Choose?
            </h1>

            {/* Subtitle */}
            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Two frameworks. Two philosophies. One decision that will shape your product for years. We break down React and Angular across performance, developer experience, hiring, and long-term maintainability so you can choose with confidence.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#22c55e',
                }}>CE</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Codazz Engineering</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Engineering Team, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ── CONTENT GRID ── */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* ── MAIN ARTICLE ── */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    React and Angular are the two most battle-tested frontend frameworks in production today. Both power billion-dollar products. Both have massive ecosystems. Both are hiring signals on a resume. So why do developers argue about them endlessly?
                  </p>
                  <p>
                    Because the choice genuinely matters. It affects your <strong style={{ color: '#ffffff' }}>team velocity, hiring pool, bundle size, long-term maintenance cost,</strong> and how fast you can deliver features to customers.
                  </p>
                  <p>
                    React is a flexible, minimalist UI library. Angular is an opinionated, batteries-included framework. In 2026, both have matured enormously — React with Server Components and Signals, Angular with standalone components and its esbuild-powered build pipeline.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we have shipped production apps in both frameworks for clients ranging from early-stage startups to Fortune 500 enterprises. Here is our honest breakdown.
                  </p>
                </div>

                {/* ── QUICK COMPARISON ── */}
                <h2 id="quick-comparison" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Quick Comparison: React vs Angular at a Glance</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 28, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 540 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#ffffff', fontSize: 14, fontWeight: 700 }}>Dimension</th>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#61dafb', fontSize: 14, fontWeight: 700 }}>React 19</th>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#dd0031', fontSize: 14, fontWeight: 700 }}>Angular 18</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Type',               'UI Library',               'Full Framework'],
                        ['Language',           'JavaScript / TypeScript',   'TypeScript (required)'],
                        ['State Management',   'useState, Redux, Zustand',  'Signals, NgRx, Services'],
                        ['Routing',            'React Router (external)',   'Built-in Angular Router'],
                        ['Forms',              'Formik / React Hook Form',  'Reactive Forms (built-in)'],
                        ['HTTP Client',        'fetch / Axios / TanStack',  'HttpClient (built-in)'],
                        ['DI Container',       'Context API / libraries',   'Built-in DI (robust)'],
                        ['Testing',            'Jest + RTL',                'Jasmine + Karma / Jest'],
                        ['Bundle Size (Hello World)', '~42 KB',             '~130 KB'],
                        ['Learning Curve',     'Moderate',                  'Steep'],
                        ['Opinionation',       'Low (flexible)',            'High (structured)'],
                        ['Best For',           'SPAs, SaaS, startups',     'Enterprise, regulated industries'],
                      ].map(([dim, react, angular], i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <td style={{ padding: '11px 10px', color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{dim}</td>
                          <td style={{ padding: '11px 10px', color: '#61dafb', fontSize: 14 }}>{react}</td>
                          <td style={{ padding: '11px 10px', color: '#dd0031', fontSize: 14 }}>{angular}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* ── REACT OVERVIEW ── */}
                <h2 id="react-overview" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>React Overview: Ecosystem, Hooks & Component Model</h2>

                <p className="reveal">
                  React was open-sourced by Facebook (now Meta) in 2013. Rather than prescribing an entire application architecture, React focuses on one thing: <strong style={{ color: '#ffffff' }}>building declarative UI through components</strong>. Everything else — routing, state management, data fetching — is your choice.
                </p>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#22c55e', marginTop: 36, marginBottom: 16 }}>
                  The Component Model
                </h3>
                <p className="reveal">
                  React components are plain JavaScript functions that return JSX. The virtual DOM diffs changes and applies minimal updates to the real DOM. In React 19, the Compiler (previously React Forget) automatically memoizes components, eliminating most manual <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>useMemo</code> and <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>useCallback</code> calls.
                </p>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#22c55e', marginTop: 36, marginBottom: 16 }}>
                  Hooks: The Backbone of Modern React
                </h3>
                <div className="reveal" style={{ margin: '16px 0 32px' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    {[
                      ['useState', 'Local component state — the building block of interactivity.'],
                      ['useEffect', 'Side effects: data fetching, subscriptions, DOM mutations.'],
                      ['useContext', 'Share state across components without prop drilling.'],
                      ['useReducer', 'Complex state logic — the built-in Redux pattern.'],
                      ['useRef', 'Mutable values and direct DOM access without re-renders.'],
                      ['use (React 19)', 'Suspend data-fetching Promises directly inside components.'],
                    ].map(([name, desc]) => (
                      <li key={name as string} style={{ marginBottom: 12 }}>
                        <code style={{ background: 'rgba(97,218,251,0.1)', color: '#61dafb', padding: '2px 8px', borderRadius: 4, fontSize: 14, marginRight: 8 }}>{name}</code>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#22c55e', marginTop: 36, marginBottom: 16 }}>
                  The React Ecosystem in 2026
                </h3>
                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 32,
                }}>
                  {[
                    { area: 'Framework',         tools: 'Next.js, Remix, Astro' },
                    { area: 'State',             tools: 'Zustand, Jotai, Redux Toolkit' },
                    { area: 'Data Fetching',     tools: 'TanStack Query, SWR, tRPC' },
                    { area: 'Styling',           tools: 'Tailwind, CSS Modules, styled-components' },
                    { area: 'Forms',             tools: 'React Hook Form, Formik, Zod' },
                    { area: 'Animation',         tools: 'Framer Motion, React Spring, GSAP' },
                  ].map(item => (
                    <div key={item.area} style={{
                      background: 'rgba(97,218,251,0.05)', padding: 16, borderRadius: 12,
                      border: '1px solid rgba(97,218,251,0.15)',
                    }}>
                      <p style={{ fontSize: 12, fontWeight: 700, color: '#61dafb', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.area}</p>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: 0 }}>{item.tools}</p>
                    </div>
                  ))}
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.05)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <p style={{ fontSize: 15, color: '#ffffff', margin: 0 }}>
                    <strong style={{ color: '#22c55e' }}>React in 2026:</strong> React Server Components are now stable and widely adopted. The React Compiler removes the need for manual memoization. The npm ecosystem has over 4 million packages, and React is the most downloaded frontend framework by a factor of 3.
                  </p>
                </div>

                {/* ── ANGULAR OVERVIEW ── */}
                <h2 id="angular-overview" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Angular Overview: TypeScript-First, CLI & Module System</h2>

                <p className="reveal">
                  Angular (not AngularJS) was released by Google in 2016 as a complete rewrite. It ships as a full-stack framework: routing, HTTP client, forms, dependency injection, animation, internationalization — all first-party, all integrated. The philosophy is <strong style={{ color: '#ffffff' }}>opinionated consistency over flexibility</strong>.
                </p>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#22c55e', marginTop: 36, marginBottom: 16 }}>
                  TypeScript as a First-Class Citizen
                </h3>
                <p className="reveal">
                  Angular requires TypeScript — it is not optional. This was controversial in 2016 but is now widely seen as a strength. Strict typing, decorators, and Angular&apos;s own type-checking layer catch entire categories of bugs at compile time before they ever reach production.
                </p>
                <p className="reveal">
                  Angular 18 introduces <strong style={{ color: '#ffffff' }}>Signals</strong> as a stable reactive primitive, replacing the complexity of RxJS for most component-level reactivity — the biggest ergonomic improvement since Angular 2.
                </p>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#22c55e', marginTop: 36, marginBottom: 16 }}>
                  The Angular CLI
                </h3>
                <p className="reveal">
                  The Angular CLI is arguably the best developer CLI of any frontend framework. It scaffolds components, services, pipes, guards, and modules with a single command, enforces consistent file structure, runs tests, manages builds, and ships with code migration schematics that automate breaking-change upgrades.
                </p>
                <div className="reveal" style={{ margin: '16px 0 32px' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    {[
                      'ng generate component my-feature — scaffolds component, template, styles, spec',
                      'ng generate service api — creates an injectable service',
                      'ng update @angular/core — auto-migrates code to new Angular version',
                      'ng build --configuration production — optimised, tree-shaken build via esbuild',
                      'ng test — headless unit tests via Karma or Jest',
                      'ng e2e — runs Playwright / Cypress end-to-end tests',
                    ].map((cmd, i) => (
                      <li key={i} style={{ marginBottom: 10, fontSize: 15 }}>
                        <code style={{ background: 'rgba(221,0,49,0.1)', color: '#ff6b81', padding: '2px 8px', borderRadius: 4, fontSize: 13, marginRight: 8 }}>{cmd.split(' — ')[0]}</code>
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>{cmd.split(' — ')[1]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#22c55e', marginTop: 36, marginBottom: 16 }}>
                  NgModules vs Standalone Components
                </h3>
                <p className="reveal">
                  Angular 14 introduced standalone components — you can now build Angular apps without NgModules entirely. In 2026, this is the recommended approach for all new projects, dramatically reducing boilerplate and bringing Angular closer to React&apos;s file-per-component model while retaining the structured dependency injection system.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(221,0,49,0.04)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(221,0,49,0.2)',
                }}>
                  <p style={{ fontSize: 15, color: '#ffffff', margin: 0 }}>
                    <strong style={{ color: '#ff6b81' }}>Angular in 2026:</strong> Angular 18 ships with Signals stable, esbuild by default (3x faster builds), partial hydration via deferrable views, and improved SSR via Angular Universal. Google runs Angular on Search, Gmail, and Google Cloud Console.
                  </p>
                </div>

                {/* ── PERFORMANCE ── */}
                <h2 id="performance" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Performance Comparison: Bundle Size, Hydration & Rendering</h2>

                <p className="reveal">
                  Performance is nuanced. A well-optimised Angular app will outperform a poorly written React app and vice versa. But starting points matter — here is what you get out of the box.
                </p>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#22c55e', marginTop: 36, marginBottom: 16 }}>
                  Bundle Size
                </h3>
                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '16px 0 32px',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#ffffff', fontSize: 14 }}>Scenario</th>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#61dafb', fontSize: 14 }}>React</th>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#dd0031', fontSize: 14 }}>Angular</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Hello World (gzipped)',  '~42 KB',   '~130 KB'],
                        ['Medium SPA (gzipped)',   '~180 KB',  '~280 KB'],
                        ['Large app — initial load','120–250 KB', '200–400 KB'],
                        ['Tree-shaking effectiveness', 'Excellent', 'Very Good (Ivy)'],
                        ['Code splitting',         'Manual / Next.js auto', 'Lazy-loaded modules auto'],
                      ].map(([dim, react, angular], i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <td style={{ padding: '11px 10px', fontSize: 14 }}>{dim}</td>
                          <td style={{ padding: '11px 10px', color: '#61dafb', fontSize: 14 }}>{react}</td>
                          <td style={{ padding: '11px 10px', color: '#dd0031', fontSize: 14 }}>{angular}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#22c55e', marginTop: 36, marginBottom: 16 }}>
                  Rendering Strategies
                </h3>
                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 32,
                }}>
                  {[
                    { title: 'React CSR',    desc: 'Client-side rendering via Vite. Fast dev, slower initial paint. Best for authenticated dashboards.' },
                    { title: 'React SSR',    desc: 'Server rendering via Next.js. Excellent Core Web Vitals. Required for SEO-driven products.' },
                    { title: 'React RSC',    desc: 'Server Components stream HTML+data from the server. Zero hydration cost for non-interactive parts.' },
                    { title: 'Angular CSR',  desc: 'Default mode. Angular renders in the browser. Good DX but not SEO-friendly out of the box.' },
                    { title: 'Angular SSR',  desc: 'Angular Universal adds server rendering. Significantly improved in Angular 17+ with partial hydration.' },
                    { title: 'Angular SSG',  desc: 'Analog.js (community) adds static generation. Native SSG not built-in like Next.js.' },
                  ].map(item => (
                    <div key={item.title} style={{
                      background: 'rgba(255,255,255,0.03)', padding: 18, borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: item.title.startsWith('React') ? '#61dafb' : '#dd0031', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.title}</p>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.05)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <p style={{ fontSize: 15, color: '#ffffff', margin: 0 }}>
                    <strong style={{ color: '#22c55e' }}>Performance verdict:</strong> React (via Next.js) delivers better out-of-the-box performance for public-facing websites. For fully authenticated SPAs, Angular and React are essentially tied — both achieve similar Lighthouse scores with proper lazy loading.
                  </p>
                </div>

                {/* ── LEARNING CURVE ── */}
                <h2 id="learning-curve" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Learning Curve: From Zero to Productive</h2>

                <p className="reveal">
                  The learning curve difference between React and Angular is real and significant. Here is what a new developer needs to master for each:
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, margin: '24px 0 32px',
                }}>
                  <div style={{ background: 'rgba(97,218,251,0.05)', padding: 24, borderRadius: 16, border: '1px solid rgba(97,218,251,0.2)' }}>
                    <h4 style={{ color: '#61dafb', marginBottom: 16, fontSize: 17 }}>To Be Productive in React</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      {[
                        'JavaScript (ES6+)',
                        'JSX syntax',
                        'useState + useEffect',
                        'Component props & composition',
                        'React Router (1 library)',
                        'Any state manager (optional)',
                      ].map((item, i) => (
                        <li key={i} style={{ marginBottom: 10 }}>{item}</li>
                      ))}
                    </ul>
                    <p style={{ marginTop: 20, fontSize: 13, color: '#61dafb', fontWeight: 600 }}>Timeline: 2–4 weeks</p>
                  </div>
                  <div style={{ background: 'rgba(221,0,49,0.05)', padding: 24, borderRadius: 16, border: '1px solid rgba(221,0,49,0.2)' }}>
                    <h4 style={{ color: '#ff6b81', marginBottom: 16, fontSize: 17 }}>To Be Productive in Angular</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      {[
                        'TypeScript (required)',
                        'Angular CLI conventions',
                        'Components, services, pipes, directives',
                        'Dependency injection system',
                        'Angular Router (built-in)',
                        'Reactive Forms',
                        'RxJS Observables (or Signals)',
                        'NgModules (legacy) or standalone',
                      ].map((item, i) => (
                        <li key={i} style={{ marginBottom: 10 }}>{item}</li>
                      ))}
                    </ul>
                    <p style={{ marginTop: 20, fontSize: 13, color: '#ff6b81', fontWeight: 600 }}>Timeline: 6–12 weeks</p>
                  </div>
                </div>

                <p className="reveal">
                  Angular&apos;s concepts are not harder in isolation — TypeScript is excellent, RxJS is powerful, DI is elegant — but there are simply <strong style={{ color: '#ffffff' }}>more concepts to internalise before you can contribute effectively</strong>. For a team of senior developers, this is a 4-week ramp. For junior developers, expect 3 months.
                </p>
                <p className="reveal">
                  React&apos;s flexibility is a double-edged sword: you can get productive fast, but you also have to make more architectural decisions yourself (which router? which state manager? which data fetching strategy?). Angular makes those decisions for you, which pays dividends at enterprise scale.
                </p>

                {/* ── WHEN TO CHOOSE ── */}
                <h2 id="when-to-choose" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>When to Choose React vs Angular</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(97,218,251,0.05)', padding: 24, borderRadius: 16, border: '1px solid rgba(97,218,251,0.2)' }}>
                    <h4 style={{ color: '#61dafb', marginBottom: 16, fontSize: 18 }}>Choose React When:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                      {[
                        'SEO matters (marketing sites, e-commerce)',
                        'You want maximum hiring flexibility',
                        'Your team has strong JS/TS fundamentals',
                        'Building a startup MVP — ship fast',
                        'Content-heavy or public-facing web app',
                        'You need React Native for mobile later',
                        'You prefer choosing your own libraries',
                        'Building a design-system-heavy product',
                      ].map((item, i) => (
                        <li key={i} style={{ marginBottom: 10 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(221,0,49,0.05)', padding: 24, borderRadius: 16, border: '1px solid rgba(221,0,49,0.2)' }}>
                    <h4 style={{ color: '#ff6b81', marginBottom: 16, fontSize: 18 }}>Choose Angular When:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                      {[
                        'Large enterprise with 10+ frontend devs',
                        'Codebase needs strict consistency',
                        'Your domain is fintech, healthcare, gov',
                        'Long-term maintenance is a primary concern',
                        'You have Java/.NET backend devs joining frontend',
                        'Built-in i18n, forms, and testing matter',
                        'Your existing stack is already Angular',
                        'Team is comfortable with TypeScript & OOP',
                      ].map((item, i) => (
                        <li key={i} style={{ marginBottom: 10 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.05)', borderRadius: 16, padding: 24, margin: '24px 0 40px',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <p style={{ fontSize: 15, color: '#ffffff', margin: 0 }}>
                    <strong style={{ color: '#22c55e' }}>Codazz Rule of Thumb:</strong> If you are unsure, default to React + Next.js. It is the more versatile choice for the majority of modern web products. Choose Angular only when the project&apos;s scale, team size, or regulatory environment makes its opinions an advantage rather than a constraint.
                  </p>
                </div>

                {/* ── JOB MARKET ── */}
                <h2 id="job-market" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Job Market & Developer Salaries in 2026</h2>

                <p className="reveal">
                  Your framework choice directly affects hiring speed, salary costs, and how easily you can find contractors when you need to scale. Here is what the data shows in 2026:
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#ffffff', fontSize: 14 }}>Metric</th>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#61dafb', fontSize: 14 }}>React Developers</th>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#dd0031', fontSize: 14 }}>Angular Developers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Global usage (SO Survey 2025)',  '43% of developers',             '17% of developers'],
                        ['LinkedIn job postings (US)',     '~85,000 active listings',       '~28,000 active listings'],
                        ['Avg salary — Mid-level (US)',    '$130,000 – $155,000',           '$140,000 – $165,000'],
                        ['Avg salary — Senior (US)',       '$155,000 – $195,000',           '$170,000 – $210,000'],
                        ['Avg salary — Mid-level (Canada)','CAD $100,000 – $130,000',       'CAD $110,000 – $140,000'],
                        ['Avg salary — Mid-level (India)', '₹18L – ₹32L',                  '₹20L – ₹36L'],
                        ['Contractor rates (US/hr)',       '$80 – $140',                    '$90 – $160'],
                        ['Hiring difficulty',              'Lower (larger pool)',            'Higher (smaller, premium pool)'],
                      ].map(([dim, react, angular], i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <td style={{ padding: '11px 10px', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>{dim}</td>
                          <td style={{ padding: '11px 10px', color: '#61dafb', fontSize: 14 }}>{react}</td>
                          <td style={{ padding: '11px 10px', color: '#dd0031', fontSize: 14 }}>{angular}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="reveal" style={{ marginTop: 24 }}>
                  Angular developers command a salary premium because the pool is smaller relative to demand. However, React gives you access to a far larger talent pipeline — critical if you need to hire fast or scale a team from 2 to 20 engineers quickly.
                </p>

                {/* ── ECOSYSTEM ── */}
                <h2 id="ecosystem" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Ecosystem Comparison: Libraries, Tools & Integrations</h2>

                <p className="reveal">
                  The ecosystem around a framework is often what makes or breaks productivity on a real project. Here is how they compare across key categories:
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  {[
                    {
                      category: 'UI Component Libraries',
                      react:    'shadcn/ui, Radix UI, MUI, Ant Design, Chakra UI — enormous choice',
                      angular:  'Angular Material (official), PrimeNG, NgBootstrap — fewer but solid',
                    },
                    {
                      category: 'State Management',
                      react:    'Zustand, Jotai, Valtio, Redux Toolkit, Recoil — community spoilt for choice',
                      angular:  'NgRx (Redux for Angular), Signals (v18+), Akita — more opinionated',
                    },
                    {
                      category: 'Testing',
                      react:    'Jest + React Testing Library — the gold standard; Vitest for Vite projects',
                      angular:  'Jasmine + Karma (default) or Jest; Angular CDK harnesses for integration tests',
                    },
                    {
                      category: 'Dev Tools',
                      react:    'React DevTools (Chrome/Firefox), React Scan (v2026), Storybook',
                      angular:  'Angular DevTools (Chrome), Nx for monorepos, Storybook',
                    },
                    {
                      category: 'Meta-Frameworks',
                      react:    'Next.js, Remix, Astro — robust, production-grade options',
                      angular:  'Angular Universal (SSR), Analog.js (SSG/SSR) — improving but newer',
                    },
                    {
                      category: 'Mobile',
                      react:    'React Native — massive ecosystem, shared component logic',
                      angular:  'NativeScript — smaller ecosystem, functional but less popular',
                    },
                  ].map(item => (
                    <div key={item.category} style={{
                      background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 14,
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.category}</p>
                      <p style={{ fontSize: 13, color: '#61dafb', margin: '0 0 6px' }}>
                        <strong style={{ color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>React:</strong>{item.react}
                      </p>
                      <p style={{ fontSize: 13, color: '#ff6b81', margin: 0 }}>
                        <strong style={{ color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Angular:</strong>{item.angular}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="reveal">
                  React&apos;s ecosystem is overwhelmingly larger by volume. The downside: choice paralysis is real. With Angular, the &quot;official&quot; answer to most questions is built-in, which keeps teams aligned without architecture debates every sprint.
                </p>

                {/* ── 2026 TRENDS ── */}
                <h2 id="trends-2026" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>2026 Trends: Where Each Framework Is Heading</h2>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#22c55e', marginTop: 32, marginBottom: 16 }}>
                  React 2026 Trends
                </h3>
                <div className="reveal" style={{ margin: '16px 0 32px' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    {[
                      'React Compiler (stable) eliminates manual memoization — massive DX win.',
                      'React Server Components and Server Actions are the new paradigm for data-fetching.',
                      'use() hook replaces useEffect for async data in concurrent mode.',
                      'Form Actions bring progressive enhancement without JavaScript.',
                      'React Native\'s New Architecture (Fabric + JSI) is fully stable — one codebase for web and mobile is increasingly viable.',
                      'AI-assisted React development: tools like v0.dev generate production-quality components from prompts.',
                    ].map((item, i) => (
                      <li key={i} style={{ marginBottom: 14, lineHeight: 1.65 }}>{item}</li>
                    ))}
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#22c55e', marginTop: 32, marginBottom: 16 }}>
                  Angular 2026 Trends
                </h3>
                <div className="reveal" style={{ margin: '16px 0 32px' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    {[
                      'Signals are now stable and the recommended reactive pattern — dramatically simpler than RxJS for state.',
                      'Deferrable views (@defer) enable fine-grained partial hydration, closing the SSR performance gap with Next.js.',
                      'esbuild replaces Webpack — build times are 3-5x faster in Angular 18.',
                      'Standalone components are the default — NgModules are now legacy.',
                      'Angular is betting on Zoneless change detection (no more Zone.js) for major performance gains.',
                      'Analog.js matures as Angular\'s answer to Next.js — full-stack Angular with file-based routing and SSG.',
                    ].map((item, i) => (
                      <li key={i} style={{ marginBottom: 14, lineHeight: 1.65 }}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '32px 0',
                }}>
                  <div style={{ background: 'rgba(97,218,251,0.06)', padding: 22, borderRadius: 16, border: '1px solid rgba(97,218,251,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 32, fontWeight: 800, color: '#61dafb', margin: '0 0 6px' }}>43%</p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0 }}>of developers use React globally (SO Survey 2025)</p>
                  </div>
                  <div style={{ background: 'rgba(221,0,49,0.06)', padding: 22, borderRadius: 16, border: '1px solid rgba(221,0,49,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 32, fontWeight: 800, color: '#ff6b81', margin: '0 0 6px' }}>17%</p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0 }}>of developers use Angular globally (SO Survey 2025)</p>
                  </div>
                  <div style={{ background: 'rgba(34,197,94,0.06)', padding: 22, borderRadius: 16, border: '1px solid rgba(34,197,94,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 32, fontWeight: 800, color: '#22c55e', margin: '0 0 6px' }}>3x</p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0 }}>more React job listings vs Angular on LinkedIn</p>
                  </div>
                </div>

                {/* ── FAQ ── */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                <div style={{ marginBottom: 8 }}>
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="reveal"
                      style={{
                        background: 'rgba(255,255,255,0.03)', borderRadius: 14, marginBottom: 12,
                        border: openFaq === i ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,255,255,0.06)',
                        overflow: 'hidden', transition: 'border-color 0.2s',
                      }}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{
                          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '20px 24px', background: 'transparent', border: 'none',
                          cursor: 'pointer', textAlign: 'left', gap: 16,
                        }}
                      >
                        <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                        <span style={{
                          flexShrink: 0, width: 24, height: 24, borderRadius: '50%',
                          background: openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.08)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 14, color: openFaq === i ? '#000' : 'rgba(255,255,255,0.6)',
                          transition: 'all 0.2s',
                        }}>
                          {openFaq === i ? '−' : '+'}
                        </span>
                      </button>
                      {openFaq === i && (
                        <div style={{ padding: '0 24px 20px' }}>
                          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.75 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* ── CTA ── */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(8,50,30,0.4) 100%)',
                  borderRadius: 28, padding: 40, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 26, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Not Sure Which Framework Fits Your Project?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7, fontSize: 16 }}>
                    Our engineering team has shipped production apps in both React and Angular. We will help you pick the right framework based on your team, product, and growth trajectory — no sales pitch, just honest advice.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    background: '#22c55e', color: '#000000',
                    padding: '15px 30px', borderRadius: 10,
                    fontWeight: 700, fontSize: 15, textDecoration: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 0 24px rgba(34,197,94,0.3)',
                  }}>
                    Book a Free Tech Consultation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
                    Free 30-min call &middot; No commitment required
                  </p>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  {/* Table of Contents */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{
                      fontSize: 13, fontWeight: 700, color: '#ffffff', marginBottom: 18,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '8px 12px', fontSize: 13, borderRadius: 8,
                            color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.55)',
                            textDecoration: 'none', transition: 'all 0.2s',
                            background: activeSection === section.id ? 'rgba(34,197,94,0.08)' : 'transparent',
                            borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
                            fontWeight: activeSection === section.id ? 600 : 400,
                          }}
                        >
                          <span style={{ fontSize: 12 }}>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author Card */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{
                      fontSize: 13, fontWeight: 700, color: '#ffffff', marginBottom: 16,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>Written By</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#22c55e', flexShrink: 0,
                      }}>CE</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Codazz Engineering</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Engineering Team</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.65 }}>
                      The Codazz Engineering team has shipped 120+ production applications across React, Angular, Vue, and Next.js for clients from seed-stage startups to Fortune 500 enterprises.
                    </p>
                  </div>

                  {/* Related Posts */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{
                      fontSize: 13, fontWeight: 700, color: '#ffffff', marginBottom: 16,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>Related Articles</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          style={{
                            display: 'block', padding: 16,
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 12, textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '6px 0 6px', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
