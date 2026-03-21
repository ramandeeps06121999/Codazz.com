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
  { id: 'core-web-vitals',      label: 'Core Web Vitals',         emoji: '📊' },
  { id: 'rendering-strategies', label: 'SSR vs SSG vs ISR',        emoji: '🔄' },
  { id: 'image-optimization',   label: 'Image Optimization',       emoji: '🖼️' },
  { id: 'code-splitting',       label: 'Code Splitting & Bundles', emoji: '📦' },
  { id: 'font-optimization',    label: 'Font Optimization',        emoji: '🔤' },
  { id: 'caching-strategies',   label: 'Caching Strategies',       emoji: '⚡' },
  { id: 'database-queries',     label: 'Database Optimization',    emoji: '🗄️' },
  { id: 'edge-runtime',         label: 'Edge Runtime',             emoji: '🌐' },
  { id: 'server-components',    label: 'Server Components',        emoji: '🖥️' },
  { id: 'measuring-perf',       label: 'Measuring Performance',    emoji: '🔬' },
  { id: 'checklist',            label: 'Lighthouse 95+ Checklist', emoji: '✅' },
  { id: 'faq',                  label: 'FAQ',                      emoji: '❓' },
];

const relatedPosts = [
  { slug: 'nextjs-vs-react-2026',           title: 'Next.js vs React in 2026: Which Should You Choose?',          category: 'Engineering', readTime: '14 min' },
  { slug: 'aws-vs-gcp-vs-azure-2026',       title: 'AWS vs GCP vs Azure 2026: Cloud Platform Comparison',         category: 'Engineering', readTime: '13 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?',        category: 'Business',    readTime: '12 min' },
];

// ── tiny reusable sub-components ────────────────────────────────────────────

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  const style: React.CSSProperties = {
    fontSize: 'clamp(1.6rem, 3vw, 2rem)',
    fontWeight: 700,
    color: '#ffffff',
    marginTop: 64,
    marginBottom: 24,
    letterSpacing: '-0.02em',
    scrollMarginTop: 100,
  };
  return <h2 id={id} className="reveal" style={style}>{children}</h2>;
}

function SubHeading({ color = '#22c55e', children }: { color?: string; children: React.ReactNode }) {
  return (
    <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color, marginTop: 32, marginBottom: 16 }}>
      {children}
    </h3>
  );
}

function CodeBlock({ title, code }: { title?: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="reveal" style={{
      background: '#0d1117',
      borderRadius: 12,
      border: '1px solid rgba(255,255,255,0.08)',
      overflow: 'hidden',
      margin: '24px 0',
    }}>
      {title && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 16px',
          background: 'rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>{title}</span>
          <button
            onClick={handleCopy}
            style={{
              fontSize: 11, color: copied ? '#22c55e' : 'rgba(255,255,255,0.35)',
              background: 'none', border: 'none', cursor: 'pointer', padding: '2px 8px',
              borderRadius: 4, transition: 'color 0.2s',
            }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
      <pre style={{
        margin: 0, padding: '20px 20px',
        fontSize: 13, lineHeight: 1.65,
        color: '#e6edf3',
        overflowX: 'auto',
        fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
        whiteSpace: 'pre',
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function InfoBox({ children, accent = '#22c55e' }: { children: React.ReactNode; accent?: string }) {
  return (
    <div className="reveal" style={{
      background: `rgba(${accent === '#22c55e' ? '34,197,94' : '239,68,68'},0.06)`,
      borderRadius: 16,
      padding: 24,
      margin: '24px 0',
      border: `1px solid ${accent}33`,
    }}>
      <p style={{ fontSize: 15, color: '#ffffff', margin: 0, lineHeight: 1.75 }}>{children}</p>
    </div>
  );
}

function MetricBadge({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      borderRadius: 12,
      padding: '20px 24px',
      border: '1px solid rgba(255,255,255,0.06)',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: '#22c55e', letterSpacing: '-0.03em', marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{sub}</div>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────

export default function NextjsPerformanceClient() {
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

  const faqs = [
    {
      q: 'What is a good Lighthouse performance score for a Next.js app?',
      a: 'Aim for 90+ on desktop and 80+ on mobile. A score of 95+ on desktop is achievable with proper image optimization, font loading, and ISR/SSG for content pages. Scores below 70 on desktop typically indicate unoptimized images, render-blocking resources, or large JavaScript bundles.',
    },
    {
      q: 'Does using React Server Components always improve performance?',
      a: 'RSCs reduce client-side JavaScript by keeping data-fetching and rendering logic on the server, which directly improves Time to Interactive and bundle size. However, they are not a silver bullet — components that require interactivity (onClick, useState) still need the "use client" directive. The performance gain is most pronounced in data-heavy pages.',
    },
    {
      q: 'When should I use ISR instead of SSG?',
      a: 'Use SSG for pages that rarely change (pricing, about, blog posts older than a week). Use ISR when content changes semi-regularly — e-commerce product pages, news articles, or user profiles — because ISR lets you serve a cached static page while regenerating it in the background on a schedule (e.g. every 60 seconds). SSR should be reserved for pages that must always show real-time data.',
    },
    {
      q: 'How much does Redis caching actually help in Next.js?',
      a: 'For database-backed pages, Redis can reduce response times from 200-800ms to under 10ms. The impact is largest on high-traffic routes that run expensive queries. At Codazz we typically see 60-80% reduction in p95 server response time after adding a cache layer with appropriate TTLs. The key is cache invalidation — use event-driven invalidation rather than time-only expiry for mutable data.',
    },
    {
      q: 'Is the Next.js Edge Runtime worth the migration effort?',
      a: 'For latency-sensitive endpoints (auth checks, personalisation, A/B testing, geo-routing) yes — Edge functions run in under 5ms globally versus 50-200ms for a Node.js Lambda in a single region. The trade-off is a restricted runtime (no Node.js built-ins, limited npm packages). For the majority of API routes that need the full Node.js API surface, stay on the standard runtime.',
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
              alt="Next.js performance optimization — code editor with Lighthouse score overlay"
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

            {/* Back link */}
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
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                14 min read
              </span>
            </div>

            {/* Title */}
            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Next.js Performance Optimization Guide 2026: Speed Up Your App
            </h1>

            {/* Standfirst */}
            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 740, marginBottom: 48, fontWeight: 400,
            }}>
              From Core Web Vitals and rendering strategies to Edge Runtime, Redis caching, and React Server Components — everything you need to hit Lighthouse 95+ in production.
            </p>

            {/* Author + Share */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.25) 0%, rgba(34,197,94,0.05) 100%)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700, color: '#22c55e',
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>

              {/* ════════════════════════════════════════
                  MAIN ARTICLE
              ════════════════════════════════════════ */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* ── Intro ── */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    A slow website is a business problem. A one-second delay in page load time reduces conversions by 7%, and Google&apos;s ranking algorithm now penalises pages with poor Core Web Vitals scores.
                  </p>
                  <p>
                    Next.js ships with the building blocks for exceptional performance — but they only work if you know how and when to use them. This guide walks through every major lever: rendering strategies, image and font pipelines, bundle analysis, caching, database query patterns, Edge Runtime, and React Server Components.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz we&apos;ve optimised 60+ Next.js apps to Lighthouse 95+. Here&apos;s the playbook we follow every time.
                  </p>
                </div>

                {/* ── Snapshot metrics ── */}
                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 48,
                }}>
                  <MetricBadge label="LCP target"  value="≤2.5s"  sub="Good — green zone" />
                  <MetricBadge label="INP target"  value="≤200ms" sub="Good — green zone" />
                  <MetricBadge label="CLS target"  value="≤0.1"   sub="Good — green zone" />
                  <MetricBadge label="Lighthouse"  value="95+"    sub="Achievable in production" />
                </div>

                {/* ════════ 1. CORE WEB VITALS ════════ */}
                <SectionHeading id="core-web-vitals">Core Web Vitals: What Google Actually Measures</SectionHeading>

                <p className="reveal">
                  Core Web Vitals (CWV) are a set of real-user metrics that Google uses as a ranking signal. They replaced the older Lab-only metrics in 2021 and have grown in weight every year since. In 2026, pages in the bottom quartile of CWV scores can lose up to 15% of organic ranking positions compared to equivalent competitors.
                </p>

                <SubHeading>Largest Contentful Paint (LCP)</SubHeading>
                <p className="reveal">
                  LCP measures the time from navigation start until the largest visible content element (usually a hero image or H1) is rendered. <strong style={{ color: '#ffffff' }}>Target: under 2.5 seconds.</strong> The single biggest cause of poor LCP is an unoptimised hero image — either too large, wrong format, or not prioritised.
                </p>
                <div className="reveal" style={{ marginBottom: 24 }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}>Always add <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>priority</code> prop on the hero <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>{'<Image>'}</code> so Next.js injects a <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>{'<link rel="preload">'}</code></li>
                    <li style={{ marginBottom: 10 }}>Use <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>fetchpriority="high"</code> on images above the fold</li>
                    <li style={{ marginBottom: 10 }}>Serve images from a CDN with global edge caching</li>
                    <li>Avoid render-blocking CSS or fonts in the <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>{'<head>'}</code></li>
                  </ul>
                </div>

                <SubHeading>Interaction to Next Paint (INP)</SubHeading>
                <p className="reveal">
                  INP replaced First Input Delay (FID) as the interactivity metric in 2024. It measures the latency of <em>all</em> interactions (clicks, taps, key presses) throughout the page lifetime, not just the first. <strong style={{ color: '#ffffff' }}>Target: under 200ms.</strong>
                </p>
                <div className="reveal" style={{ marginBottom: 24 }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}>Move heavy computations off the main thread with Web Workers</li>
                    <li style={{ marginBottom: 10 }}>Break up long tasks using <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>scheduler.yield()</code> or <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>setTimeout(fn, 0)</code></li>
                    <li style={{ marginBottom: 10 }}>Avoid excessive React re-renders with <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>useMemo</code> / <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>useCallback</code> where profiling shows a real cost</li>
                    <li>Use React 19&apos;s <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>useTransition</code> to keep interactions responsive during state updates</li>
                  </ul>
                </div>

                <SubHeading>Cumulative Layout Shift (CLS)</SubHeading>
                <p className="reveal">
                  CLS measures how much content jumps around as the page loads. A score above 0.1 is noticeable to users and penalised by Google. Common culprits: images without explicit <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>width</code>/<code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>height</code>, late-loading fonts (FOUT), and dynamically injected banners.
                </p>
                <InfoBox>
                  <strong>Quick win:</strong> Always pass explicit <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>width</code> and <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>height</code> to Next.js <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>{'<Image>'}</code> (or use <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>fill</code> with a sized wrapper) so the browser reserves space before the image loads. This alone can drop CLS from 0.3 to 0.0.
                </InfoBox>

                {/* ════════ 2. RENDERING STRATEGIES ════════ */}
                <SectionHeading id="rendering-strategies">SSR vs SSG vs ISR: Choosing the Right Rendering Strategy</SectionHeading>

                <p className="reveal">
                  Next.js supports four rendering modes. The right choice per page has a larger impact on performance than almost any other decision.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#ffffff', fontSize: 14 }}>Mode</th>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#22c55e', fontSize: 14 }}>When</th>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>TTFB</th>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Use cases</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontSize: 14 }}>
                      {[
                        ['SSG', 'Build time', '~5ms', 'Blog posts, docs, marketing landing pages'],
                        ['ISR', 'Build + re-validate', '~5ms (cached)', 'Product pages, news, listings'],
                        ['SSR', 'Each request', '50–300ms', 'Dashboards, real-time data, personalised pages'],
                        ['CSR', 'Client only', '~5ms (shell)', 'Heavy interactive widgets, behind-auth tools'],
                      ].map(([mode, when, ttfb, useCases], i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 10px', color: '#22c55e', fontWeight: 700 }}>{mode}</td>
                          <td style={{ padding: '12px 10px' }}>{when}</td>
                          <td style={{ padding: '12px 10px' }}>{ttfb}</td>
                          <td style={{ padding: '12px 10px', color: 'rgba(255,255,255,0.55)' }}>{useCases}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <SubHeading>SSG — Static Site Generation</SubHeading>
                <p className="reveal">
                  Pages generated at build time are served directly from a CDN with near-zero TTFB. Use SSG for any page whose data does not change between deployments. In the Next.js App Router, any async Server Component that does not opt into dynamic rendering is automatically statically generated.
                </p>
                <CodeBlock
                  title="app/blog/[slug]/page.tsx — SSG with generateStaticParams"
                  code={`// Next.js 15 App Router — statically generated at build time
export async function generateStaticParams() {
  const posts = await fetchAllPosts();           // runs once at build
  return posts.map(p => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);     // cached indefinitely
  return <article>{post.content}</article>;
}`}
                />

                <SubHeading>ISR — Incremental Static Regeneration</SubHeading>
                <p className="reveal">
                  ISR serves a cached static page instantly, then regenerates it in the background when a request comes in after the revalidation window. This is the sweet spot for content that changes a few times a day.
                </p>
                <CodeBlock
                  title="app/products/[id]/page.tsx — ISR with revalidate"
                  code={`// Revalidate every 60 seconds
export const revalidate = 60;

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetch(\`/api/products/\${params.id}\`, {
    next: { revalidate: 60 },  // per-fetch granularity
  }).then(r => r.json());

  return <ProductView product={product} />;
}

// On-demand revalidation via API route
// POST /api/revalidate  →  revalidateTag('products')`}
                />

                <SubHeading>SSR — Server-Side Rendering</SubHeading>
                <p className="reveal">
                  Use SSR only when the page must reflect real-time or user-specific data on every request. Keep SSR pages lean — offload heavy computation to background jobs or a caching layer.
                </p>
                <CodeBlock
                  title="app/dashboard/page.tsx — SSR (dynamic)"
                  code={`import { cookies } from 'next/headers';

// 'force-dynamic' opts the entire page out of caching
export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const token = cookies().get('session')?.value;
  const data  = await fetchUserData(token);       // fresh on every request
  return <DashboardView data={data} />;
}`}
                />

                {/* ════════ 3. IMAGE OPTIMIZATION ════════ */}
                <SectionHeading id="image-optimization">Image Optimization with next/image</SectionHeading>

                <p className="reveal">
                  Images account for 50-70% of page weight on most marketing sites. Next.js&apos;s built-in <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>{'<Image>'}</code> component automates the most impactful optimisations.
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  {[
                    { label: 'Format conversion', desc: 'Serves AVIF first, WebP as fallback, JPEG as last resort. AVIF is 40-50% smaller than JPEG at the same quality.' },
                    { label: 'Responsive sizing', desc: 'Generates multiple srcSet breakpoints so mobile users never download a 2000px image.' },
                    { label: 'Lazy loading', desc: 'Off-screen images are deferred by default using native loading="lazy", saving bandwidth and improving LCP.' },
                    { label: 'CLS prevention', desc: 'Reserves layout space via aspect-ratio box so the page does not shift when the image loads.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 20,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>

                <CodeBlock
                  title="Correct next/image usage for hero, thumbnail, and fill patterns"
                  code={`import Image from 'next/image';

// ✅ Hero image — LCP element, always prioritise
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={630}
  priority                  // generates <link rel="preload">
  quality={85}              // 75 default; raise for photographic content
  sizes="100vw"
/>

// ✅ Card thumbnail — lazy by default, hint responsive sizes
<Image
  src={product.image}
  alt={product.name}
  width={400}
  height={300}
  sizes="(max-width: 768px) 100vw, 400px"
/>

// ✅ Fill pattern for unknown aspect ratios (use a sized wrapper)
<div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
  <Image
    src={post.cover}
    alt={post.title}
    fill
    style={{ objectFit: 'cover' }}
    sizes="(max-width: 1024px) 100vw, 800px"
  />
</div>`}
                />

                <SubHeading>External Images & Remote Patterns</SubHeading>
                <p className="reveal">
                  To optimise images from third-party domains, whitelist them in <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>next.config.ts</code>. Use exact domain allowlists in production — never use wildcard hostnames.
                </p>
                <CodeBlock
                  title="next.config.ts — remote image patterns"
                  code={`import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.yourdomain.com',     pathname: '/uploads/**' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],   // prefer AVIF
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default config;`}
                />

                {/* ════════ 4. CODE SPLITTING ════════ */}
                <SectionHeading id="code-splitting">Code Splitting &amp; Bundle Size Reduction</SectionHeading>

                <p className="reveal">
                  JavaScript is the most expensive resource on the web — byte for byte it takes longer to parse and execute than equivalent HTML or CSS. Next.js splits bundles automatically per route, but there are still common pitfalls that bloat the client bundle.
                </p>

                <SubHeading>Analysing Your Bundle</SubHeading>
                <p className="reveal">
                  Before optimising, measure. Install <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>@next/bundle-analyzer</code> and run a production build to visualise what is eating your JS budget.
                </p>
                <CodeBlock
                  title="next.config.ts — bundle analyzer setup"
                  code={`import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  // ... your config
});

// Run: ANALYZE=true npm run build
// Opens an interactive treemap in your browser`}
                />

                <SubHeading>Dynamic Imports for Heavy Components</SubHeading>
                <p className="reveal">
                  Any component not needed for the initial render should be dynamically imported. This defers the parse cost until the user actually needs it.
                </p>
                <CodeBlock
                  title="Lazy-loading a heavy chart library"
                  code={`import dynamic from 'next/dynamic';

// This entire chunk (~140 KB) loads only when the component mounts
const RevenueChart = dynamic(() => import('@/components/RevenueChart'), {
  loading: () => <div style={{ height: 300, background: 'rgba(255,255,255,0.03)', borderRadius: 12 }} />,
  ssr: false,   // charts often rely on window — skip SSR
});

// Use it like a normal component
export default function Dashboard() {
  return <RevenueChart data={data} />;
}`}
                />

                <SubHeading>Common Bundle Bloat Culprits</SubHeading>
                <div className="reveal" style={{ marginBottom: 32 }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>moment.js</strong> — 300 KB. Replace with <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>date-fns</code> (tree-shakable) or native Intl API</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>lodash</strong> — import only what you use: <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>{'import debounce from "lodash/debounce"'}</code></li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Full icon libraries</strong> — import individual icons, not entire packs</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Client-only data fetching</strong> — move to Server Components so fetch code never ships to the browser</li>
                    <li><strong style={{ color: '#ffffff' }}>Barrel files (index.ts)</strong> — can prevent tree-shaking; import directly from the module file</li>
                  </ul>
                </div>

                <InfoBox>
                  Enabling <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>optimizePackageImports</code> in Next.js 15 automatically tree-shakes popular packages like <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>lucide-react</code>, <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>@heroicons/react</code>, and <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>react-icons</code> without any config changes in your components.
                </InfoBox>

                {/* ════════ 5. FONT OPTIMIZATION ════════ */}
                <SectionHeading id="font-optimization">Font Optimization with next/font</SectionHeading>

                <p className="reveal">
                  Fonts are a silent CLS and LCP killer. The browser must download the font before text can render (FOUT/FOIT), causing a visible flash or blank text. <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>next/font</code> solves this at the framework level.
                </p>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}>Downloads and self-hosts Google Fonts at build time — zero network request to Google at runtime</li>
                    <li style={{ marginBottom: 10 }}>Inlines a <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>size-adjust</code> CSS descriptor so the fallback system font matches the web font metrics exactly, eliminating FOUT CLS</li>
                    <li style={{ marginBottom: 10 }}>Automatically adds <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>{'<link rel="preload">'}</code> for the correct font files</li>
                    <li>Respects <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>display: swap</code> by default to keep text visible during load</li>
                  </ul>
                </div>

                <CodeBlock
                  title="app/layout.tsx — next/font setup"
                  code={`import { Inter, Syne } from 'next/font/google';
import localFont from 'next/font/local';

// Google Font — self-hosted, zero runtime DNS lookup
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

// Heading font — subset to only the weights you use
const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

// Local variable font (best performance)
const brandFont = localFont({
  src: [
    { path: '../public/fonts/Brand-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Brand-Bold.woff2',    weight: '700', style: 'normal' },
  ],
  variable: '--font-brand',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={\`\${inter.variable} \${syne.variable} \${brandFont.variable}\`}>
      <body style={{ fontFamily: 'var(--font-inter)' }}>{children}</body>
    </html>
  );
}`}
                />

                {/* ════════ 6. CACHING STRATEGIES ════════ */}
                <SectionHeading id="caching-strategies">Caching Strategies: HTTP, ISR &amp; Redis</SectionHeading>

                <p className="reveal">
                  Caching is the highest-leverage performance optimisation. A cache hit can reduce TTFB from 200ms to under 5ms. Next.js provides several caching layers; understanding which one to use where is key.
                </p>

                <SubHeading>HTTP Cache Headers</SubHeading>
                <p className="reveal">
                  For static assets and ISR pages, set aggressive <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>Cache-Control</code> headers. The CDN in front of your app (Vercel Edge, CloudFront, Cloudflare) will serve subsequent requests without hitting your origin.
                </p>
                <CodeBlock
                  title="Setting cache headers in a Route Handler"
                  code={`import { NextResponse } from 'next/server';

export async function GET() {
  const data = await fetchPublicData();

  return NextResponse.json(data, {
    headers: {
      // CDN caches for 1 hour, allows stale for 24h while revalidating
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      // Allow Vercel Edge Cache to store the response
      'CDN-Cache-Control': 'public, max-age=3600',
    },
  });
}`}
                />

                <SubHeading>ISR On-Demand Revalidation</SubHeading>
                <p className="reveal">
                  Tag your data fetches with cache tags, then invalidate them precisely when your CMS or database changes. This replaces time-based ISR for data that changes unpredictably.
                </p>
                <CodeBlock
                  title="On-demand revalidation via webhook"
                  code={`// app/api/revalidate/route.ts  — called by your CMS webhook
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-webhook-secret');
  if (secret !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { tag } = await req.json();  // e.g. { tag: 'products' }
  revalidateTag(tag);

  return NextResponse.json({ revalidated: true, tag });
}

// In your data fetch, attach the tag:
const products = await fetch('/api/products', {
  next: { tags: ['products'] },
}).then(r => r.json());`}
                />

                <SubHeading>Redis for Database Query Caching</SubHeading>
                <p className="reveal">
                  For SSR pages or API routes that run expensive database queries, Redis is the standard caching layer. Cache query results with a TTL and invalidate on write operations.
                </p>
                <CodeBlock
                  title="Redis caching wrapper for Prisma queries"
                  code={`import { createClient } from 'redis';

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

export async function cachedQuery<T>(
  key: string,
  ttl: number,
  fetcher: () => Promise<T>
): Promise<T> {
  // 1. Try cache
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached) as T;

  // 2. Cache miss — run the query
  const data = await fetcher();

  // 3. Store in Redis with expiry
  await redis.setEx(key, ttl, JSON.stringify(data));
  return data;
}

// Usage
const products = await cachedQuery(
  'products:featured',
  300,   // 5-minute TTL
  () => prisma.product.findMany({ where: { featured: true }, take: 12 })
);`}
                />

                {/* ════════ 7. DATABASE QUERY OPTIMIZATION ════════ */}
                <SectionHeading id="database-queries">Database Query Optimization</SectionHeading>

                <p className="reveal">
                  Server response time (TTFB) is dominated by database query time. Even a perfectly optimised Next.js app will feel slow if the underlying queries are inefficient.
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  {[
                    { title: 'Select only needed columns', desc: 'Never SELECT * in production. Fetching unused columns wastes bandwidth and prevents index-only scans.' },
                    { title: 'Add indexes on filter columns', desc: 'Any column in a WHERE, ORDER BY, or JOIN ON clause should be indexed. Use EXPLAIN ANALYZE to verify.' },
                    { title: 'Avoid N+1 queries', desc: 'Use Prisma\'s include/select nesting or DataLoader batching. N+1 patterns are the #1 cause of slow SSR pages.' },
                    { title: 'Paginate large result sets', desc: 'Never fetch unbounded lists. Use cursor-based pagination for infinite scroll — offset pagination degrades with large offsets.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 20,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>

                <CodeBlock
                  title="Fixing an N+1 with Prisma's include"
                  code={`// ❌ N+1 — fires 1 query for orders + 1 per order for the user
const orders = await prisma.order.findMany();
const enriched = await Promise.all(
  orders.map(o => prisma.user.findUnique({ where: { id: o.userId } }))
);

// ✅ Single JOIN query
const orders = await prisma.order.findMany({
  include: { user: { select: { id: true, name: true, email: true } } },
  where: { status: 'PENDING' },
  orderBy: { createdAt: 'desc' },
  take: 50,
});`}
                />

                <SubHeading>Connection Pooling in Serverless Environments</SubHeading>
                <p className="reveal">
                  Serverless functions (Vercel, AWS Lambda) create a new database connection on each cold start. Without connection pooling, your database hits its connection limit under load. Use PgBouncer, Prisma Accelerate, or Neon&apos;s built-in pooling.
                </p>
                <CodeBlock
                  title="Prisma singleton for connection reuse"
                  code={`// lib/prisma.ts — prevents multiple instances in dev HMR
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ log: process.env.NODE_ENV === 'development' ? ['query'] : [] });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;`}
                />

                {/* ════════ 8. EDGE RUNTIME ════════ */}
                <SectionHeading id="edge-runtime">Edge Runtime: Ultra-Low Latency at Scale</SectionHeading>

                <p className="reveal">
                  The Edge Runtime runs your code in lightweight V8 isolates at CDN points-of-presence worldwide — often within 10ms of the user — rather than in a single Node.js server region. This is transformative for latency-sensitive logic.
                </p>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#22c55e' }}>Best for:</strong> Authentication middleware, geo-routing, A/B testing, personalised redirects, rate limiting, feature flags</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ef4444' }}>Not suitable for:</strong> Node.js built-ins (fs, crypto), most native npm packages, long-running operations</li>
                    <li><strong style={{ color: '#ffffff' }}>Cold starts:</strong> Under 1ms (vs 100-400ms for Lambda cold starts)</li>
                  </ul>
                </div>

                <CodeBlock
                  title="middleware.ts — geo-personalisation at the edge"
                  code={`import { NextRequest, NextResponse } from 'next/server';

export const config = { matcher: ['/', '/pricing', '/products/:path*'] };

export function middleware(req: NextRequest) {
  const country = req.geo?.country ?? 'US';
  const url     = req.nextUrl.clone();

  // Redirect CA users to localised pricing without hitting origin
  if (country === 'CA' && !url.pathname.startsWith('/ca')) {
    url.pathname = \`/ca\${url.pathname}\`;
    return NextResponse.redirect(url);
  }

  // A/B test — assign bucket at edge, cookie for consistency
  const bucket = req.cookies.get('ab-bucket')?.value
    ?? (Math.random() < 0.5 ? 'control' : 'variant');

  const res = NextResponse.next();
  res.headers.set('x-ab-bucket', bucket);
  res.cookies.set('ab-bucket', bucket, { maxAge: 86400 * 30 });
  return res;
}`}
                />

                {/* ════════ 9. SERVER COMPONENTS ════════ */}
                <SectionHeading id="server-components">React Server Components: Reducing Client JavaScript</SectionHeading>

                <p className="reveal">
                  React Server Components (RSC) are the most significant architectural shift in Next.js since the App Router launched. They allow entire component trees to render on the server without shipping any of their code to the browser.
                </p>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}>The component itself — including its imports (ORM, SDK, utilities) — never enters the client bundle</li>
                    <li style={{ marginBottom: 12 }}>Data fetching happens on the server, co-located with the component, with no waterfall round-trips</li>
                    <li style={{ marginBottom: 12 }}>Secrets (API keys, DB credentials) stay server-side by default</li>
                    <li>Only add <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>&apos;use client&apos;</code> at the boundary where interactivity starts — not at the top of every file</li>
                  </ul>
                </div>

                <CodeBlock
                  title="Splitting server and client components correctly"
                  code={`// ✅ Server Component — fetches data, renders static shell
// No 'use client' → runs only on the server
import { prisma } from '@/lib/prisma';
import ProductCard from './ProductCard';     // also a Server Component
import AddToCartButton from './AddToCartButton'; // Client Component

export default async function ProductGrid() {
  // This Prisma call never touches the client bundle
  const products = await prisma.product.findMany({
    where: { published: true },
    select: { id: true, name: true, price: true, image: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
      {products.map(p => (
        <li key={p.id}>
          <ProductCard product={p} />
          {/* 👇 Only this leaf component ships client JS */}
          <AddToCartButton productId={p.id} />
        </li>
      ))}
    </ul>
  );
}

// ✅ Client Component — only the interactive leaf
// AddToCartButton.tsx
'use client';
import { useState } from 'react';
export function AddToCartButton({ productId }: { productId: string }) {
  const [added, setAdded] = useState(false);
  return (
    <button onClick={() => setAdded(true)}>
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}`}
                />

                <InfoBox>
                  The &quot;client component boundary&quot; concept is the most common source of RSC confusion. A component with <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: 14 }}>&apos;use client&apos;</code> can still <em>render</em> Server Component children passed as props — those children still execute on the server. This pattern lets you keep interactive wrappers thin.
                </InfoBox>

                {/* ════════ 10. MEASURING PERFORMANCE ════════ */}
                <SectionHeading id="measuring-perf">Measuring Performance: Lighthouse, PageSpeed &amp; Vercel Analytics</SectionHeading>

                <p className="reveal">
                  You cannot optimise what you do not measure. Each tool gives you a different view of your application&apos;s performance.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#ffffff', fontSize: 14 }}>Tool</th>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: '#22c55e', fontSize: 14 }}>Data type</th>
                        <th style={{ textAlign: 'left', padding: '12px 10px', color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Best for</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontSize: 14 }}>
                      {[
                        ['Lighthouse (DevTools)', 'Synthetic lab data', 'Pre-deploy checks, identifying regressions locally'],
                        ['PageSpeed Insights', 'Lab + field (CrUX) data', 'Real-world CWV from Google\'s dataset of actual users'],
                        ['Vercel Analytics', 'Real user monitoring (RUM)', 'Production CWV per route, p75/p99 breakdowns'],
                        ['WebPageTest', 'Synthetic + filmstrip', 'Waterfall analysis, third-party impact, TTFB debugging'],
                        ['Chrome UX Report (CrUX)', 'Field data (28-day rolling)', 'Checking Google\'s ranking signal data for your domain'],
                      ].map(([tool, type, best], i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 10px', color: '#ffffff', fontWeight: 600 }}>{tool}</td>
                          <td style={{ padding: '12px 10px', color: '#22c55e' }}>{type}</td>
                          <td style={{ padding: '12px 10px', color: 'rgba(255,255,255,0.55)' }}>{best}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <SubHeading>Vercel Speed Insights Integration</SubHeading>
                <CodeBlock
                  title="app/layout.tsx — Real User Monitoring setup"
                  code={`import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics }    from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Sends CWV data from real users to your Vercel dashboard */}
        <SpeedInsights />
        {/* Page view analytics — no cookies, privacy-friendly */}
        <Analytics />
      </body>
    </html>
  );
}`}
                />

                <SubHeading>CI Performance Budgets</SubHeading>
                <p className="reveal">
                  Prevent regressions by enforcing a performance budget in CI. Lighthouse CI can fail a pull request if the score drops below a threshold.
                </p>
                <CodeBlock
                  title=".lighthouserc.js — CI performance budget"
                  code={`module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000/', 'http://localhost:3000/pricing'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance':   ['error', { minScore: 0.90 }],
        'categories:accessibility': ['warn',  { minScore: 0.95 }],
        'first-contentful-paint':   ['error', { maxNumericValue: 1800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift':  ['error', { maxNumericValue: 0.1  }],
        'total-blocking-time':      ['warn',  { maxNumericValue: 300  }],
      },
    },
    upload: { target: 'temporary-public-storage' },
  },
};`}
                />

                {/* ════════ 11. CHECKLIST ════════ */}
                <SectionHeading id="checklist">Lighthouse 95+ Checklist</SectionHeading>

                <p className="reveal">
                  This is the checklist we run on every Codazz project before launch. Complete all items on the High priority column and you will reliably hit 90+ on desktop; complete the full list and 95+ is achievable on most pages.
                </p>

                {[
                  {
                    priority: 'Critical',
                    color: '#ef4444',
                    items: [
                      'hero <Image> has priority prop',
                      'All <Image> components have explicit width + height or fill',
                      'next/font used for all custom fonts (zero FOUT)',
                      'No render-blocking scripts in <head> without defer/async',
                      'HTTP/2 or HTTP/3 enabled on your host',
                    ],
                  },
                  {
                    priority: 'High',
                    color: '#f97316',
                    items: [
                      'Bundle analyzer run — no single chunk over 150 KB',
                      'Heavy libraries (charts, editors) are dynamic imports',
                      'ISR or SSG used for all public content pages',
                      'CDN caching headers set (s-maxage) on static responses',
                      'Redis or ISR cache in front of expensive DB queries',
                    ],
                  },
                  {
                    priority: 'Medium',
                    color: '#eab308',
                    items: [
                      'Lighthouse CI integrated in GitHub Actions / CI pipeline',
                      'Vercel Speed Insights (or equivalent RUM) installed',
                      'Edge Middleware used for auth and geo-routing (not SSR)',
                      'Prisma (or ORM) singleton to prevent connection pool exhaustion',
                      'N+1 queries eliminated — verify with ORM logging in dev',
                    ],
                  },
                  {
                    priority: 'Good to have',
                    color: '#22c55e',
                    items: [
                      'Critical CSS inlined (Next.js does this for small pages automatically)',
                      'Preconnect hints for third-party origins (fonts, analytics, CDN)',
                      'Web Workers for heavy client-side computations (parsing, sorting)',
                      'Service Worker + offline fallback for PWA use cases',
                      'useTransition for non-urgent state updates that affect many components',
                    ],
                  },
                ].map((group) => (
                  <div key={group.priority} className="reveal" style={{ marginBottom: 24 }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: group.color,
                      marginBottom: 12,
                    }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: group.color, display: 'inline-block' }} />
                      {group.priority}
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 20,
                      border: `1px solid ${group.color}22`,
                    }}>
                      {group.items.map((item, j) => (
                        <div key={j} style={{
                          display: 'flex', alignItems: 'center', gap: 12,
                          padding: '10px 0',
                          borderBottom: j < group.items.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                        }}>
                          <div style={{
                            width: 20, height: 20, borderRadius: 6, flexShrink: 0,
                            border: `1.5px solid ${group.color}66`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            <svg width="10" height="10" viewBox="0 0 12 10" fill="none" stroke={group.color} strokeWidth="2">
                              <polyline points="1,5 4.5,9 11,1"/>
                            </svg>
                          </div>
                          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* ════════ 12. FAQ ════════ */}
                <SectionHeading id="faq">Frequently Asked Questions</SectionHeading>

                <div style={{ marginBottom: 48 }}>
                  {faqs.map((faq, i) => (
                    <div key={i} className="reveal" style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.06)', marginBottom: 12,
                      overflow: 'hidden',
                    }}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{
                          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer',
                          textAlign: 'left', gap: 16,
                        }}
                      >
                        <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                        <svg
                          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"
                          style={{ flexShrink: 0, transition: 'transform 0.25s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        >
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </button>
                      {openFaq === i && (
                        <div style={{ padding: '0 24px 20px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: '16px 0 0', lineHeight: 1.75 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* ── CTA ── */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,30,0.3) 100%)',
                  borderRadius: 28, padding: 'clamp(32px, 5vw, 48px)', textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>
                    Get Expert Help
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>
                    Want a Lighthouse 95+ Score on Your Next.js App?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', fontSize: 16, lineHeight: 1.65 }}>
                    We run a full performance audit, fix the bottlenecks, and document every change so your team can maintain the gains. Typical turnaround: two weeks.
                  </p>
                  <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: '#22c55e', color: '#000000',
                      padding: '15px 32px', borderRadius: 10,
                      fontWeight: 700, textDecoration: 'none', fontSize: 15,
                      transition: 'opacity 0.2s',
                    }}>
                      Book a Free Performance Audit
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link href="/services/web-development" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'rgba(255,255,255,0.06)', color: '#ffffff',
                      padding: '15px 28px', borderRadius: 10,
                      fontWeight: 600, textDecoration: 'none', fontSize: 15,
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'background 0.2s',
                    }}>
                      Our Web Dev Services
                    </Link>
                  </div>
                </div>

              </article>

              {/* ════════════════════════════════════════
                  SIDEBAR
              ════════════════════════════════════════ */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  {/* Table of Contents */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '7px 0 7px 12px', fontSize: 13,
                            color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.55)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author Card */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Written By
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                        background: 'linear-gradient(135deg, rgba(34,197,94,0.25) 0%, rgba(34,197,94,0.05) 100%)',
                        border: '1.5px solid rgba(34,197,94,0.35)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 13, fontWeight: 700, color: '#22c55e',
                      }}>CE</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: 0 }}>Codazz Engineering</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Engineering Team, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0 }}>
                      Our engineering team builds and ships 20+ Next.js applications a year from our offices in Edmonton and Chandigarh. We obsess over performance metrics.
                    </p>
                  </div>

                  {/* Related Posts */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 700 }}>{post.category}</span>
                          <h4 style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', margin: '6px 0', lineHeight: 1.45 }}>{post.title}</h4>
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
