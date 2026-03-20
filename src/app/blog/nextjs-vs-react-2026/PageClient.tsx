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
  { id: 'quick-comparison', label: 'Quick Comparison', emoji: '⚡' },
  { id: 'ssr-vs-csr', label: 'SSR vs CSR', emoji: '🔄' },
  { id: 'seo', label: 'SEO Impact', emoji: '🔍' },
  { id: 'performance', label: 'Performance', emoji: '📊' },
  { id: 'developer-experience', label: 'Developer Experience', emoji: '💻' },
  { id: 'deployment', label: 'Deployment', emoji: '🚀' },
  { id: 'when-to-choose', label: 'When to Choose', emoji: '🎯' },
  { id: 'recommendation', label: 'Our Recommendation', emoji: '✅' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native: The Definitive 2026 Comparison', category: 'Engineering', readTime: '15 min' },
  { slug: 'website-cost-usa', title: 'How Much Does a Website Cost in the USA?', category: 'Business', readTime: '7 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top 10 Software Development Companies in the USA', category: 'Engineering', readTime: '10 min' },
];

export default function NextjsVsReactClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=675&fit=crop"
              alt="Code editor showing JavaScript and React code"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 8, textAlign: 'center' }}>
              Photo by <a href="https://unsplash.com/@bfrsa" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Ben Griffiths</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
            </p>
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
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

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Engineering</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
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

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Next.js vs React in 2026: Which Should You Choose?
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              React is a library. Next.js is a framework built on React. But in 2026, the decision between them is more nuanced than ever. Here&apos;s everything you need to know.
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
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(180,253,131,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
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
                    You&apos;re building a web application. You know you want to use React. But should you use React on its own (with Vite or Create React App) or go with Next.js?
                  </p>
                  <p>
                    This isn&apos;t just a tooling decision. It affects your <strong style={{ color: '#ffffff' }}>SEO rankings, page load speed, server costs, developer hiring,</strong> and how fast you can ship features.
                  </p>
                  <p>
                    In 2026, Next.js has become the de facto standard for production React applications. But that doesn&apos;t mean it&apos;s the right choice for every project.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we&apos;ve built 120+ web applications with both approaches. Here&apos;s our honest, data-backed breakdown.
                  </p>
                </div>

                {/* Quick Comparison */}
                <h2 id="quick-comparison" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Quick Comparison: At a Glance</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto'
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Factor</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Next.js</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#61dafb', fontSize: 14 }}>React (Vite/CRA)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Type</td>
                        <td style={{ padding: '12px 8px' }}>Full-stack Framework</td>
                        <td style={{ padding: '12px 8px' }}>UI Library</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Rendering</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>SSR, SSG, ISR, CSR</td>
                        <td style={{ padding: '12px 8px' }}>CSR only</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>SEO</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Excellent (built-in)</td>
                        <td style={{ padding: '12px 8px' }}>Poor (requires workarounds)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Routing</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>File-based (built-in)</td>
                        <td style={{ padding: '12px 8px' }}>Manual (React Router)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>API Routes</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Built-in</td>
                        <td style={{ padding: '12px 8px' }}>Separate backend needed</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Learning Curve</td>
                        <td style={{ padding: '12px 8px' }}>Moderate</td>
                        <td style={{ padding: '12px 8px', color: '#61dafb' }}>Easy</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>Best For</td>
                        <td style={{ padding: '12px 8px' }}>Production websites, SaaS</td>
                        <td style={{ padding: '12px 8px' }}>Internal tools, SPAs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* SSR vs CSR */}
                <h2 id="ssr-vs-csr" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>SSR vs CSR: The Core Difference</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop"
                    alt="Server infrastructure and network architecture"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@tvick" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Taylor Vick</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  This is the fundamental divide. It determines how your users experience your site and how search engines see it.
                </p>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  Client-Side Rendering (React SPA)
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}>Browser downloads a blank HTML file + JavaScript bundle</li>
                    <li style={{ marginBottom: 12 }}>JavaScript executes and renders the UI in the browser</li>
                    <li style={{ marginBottom: 12 }}>User sees a blank page until JS loads (1-3 seconds)</li>
                    <li>Search engine crawlers may not see your content</li>
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  Server-Side Rendering (Next.js)
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}>Server renders complete HTML before sending to the browser</li>
                    <li style={{ marginBottom: 12 }}>User sees content immediately (under 1 second)</li>
                    <li style={{ marginBottom: 12 }}>Search engines see fully rendered content</li>
                    <li>React hydrates on top for interactivity</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <p style={{ fontSize: 15, color: '#ffffff', margin: 0 }}>
                    <strong>Next.js in 2026 gives you all four options:</strong> SSR (server-side rendering), SSG (static site generation), ISR (incremental static regeneration), and CSR (client-side rendering). You can mix and match per page. React alone only gives you CSR.
                  </p>
                </div>

                {/* SEO */}
                <h2 id="seo" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>SEO: The Make-or-Break Factor</h2>

                <p className="reveal">
                  If your website needs to rank on Google, this section alone should decide your choice.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto'
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>SEO Factor</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Next.js</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#61dafb', fontSize: 14 }}>React SPA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Crawlability</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Instant (pre-rendered)</td>
                        <td style={{ padding: '12px 8px' }}>Delayed (JS required)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Meta Tags</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Dynamic per page</td>
                        <td style={{ padding: '12px 8px' }}>Same for all pages</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Core Web Vitals</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Excellent (LCP under 1.5s)</td>
                        <td style={{ padding: '12px 8px' }}>Poor (LCP 3-5s typical)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Sitemap</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Auto-generated</td>
                        <td style={{ padding: '12px 8px' }}>Manual setup</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>Structured Data</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Server-injected</td>
                        <td style={{ padding: '12px 8px' }}>Client-side (unreliable)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="reveal" style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                  Verdict: If SEO matters even slightly, Next.js is the clear winner. Google&apos;s crawler still struggles with heavy client-side JavaScript.
                </p>

                {/* Performance */}
                <h2 id="performance" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Performance: Real-World Numbers</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                    alt="Performance metrics dashboard with charts and analytics"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@lukechesser" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Luke Chesser</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  We benchmarked identical applications built with Next.js 15 and React + Vite on the same infrastructure:
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Metric</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Next.js 15</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#61dafb', fontSize: 14 }}>React + Vite</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>First Contentful Paint</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>0.8s</td>
                        <td style={{ padding: '12px 8px' }}>2.1s</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Largest Contentful Paint</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>1.2s</td>
                        <td style={{ padding: '12px 8px' }}>3.4s</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Time to Interactive</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>1.8s</td>
                        <td style={{ padding: '12px 8px' }}>2.5s</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>JS Bundle Size</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>87 KB (auto-split)</td>
                        <td style={{ padding: '12px 8px' }}>210 KB</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>Lighthouse Score</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>95-100</td>
                        <td style={{ padding: '12px 8px' }}>65-80</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="reveal" style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                  Bottom Line: Next.js delivers significantly better initial load performance. For apps behind authentication (dashboards, admin panels), the difference matters less.
                </p>

                {/* Developer Experience */}
                <h2 id="developer-experience" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Developer Experience</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
                    alt="Developer workspace with multiple monitors"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@cgower" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Christopher Gower</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Next.js Pros</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>File-based routing (zero config)</li>
                      <li style={{ marginBottom: 8 }}>Built-in API routes (no separate backend)</li>
                      <li style={{ marginBottom: 8 }}>Image optimization out of the box</li>
                      <li style={{ marginBottom: 8 }}>Server Components reduce client JS</li>
                      <li>Automatic code splitting</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(97,218,251,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(97,218,251,0.2)' }}>
                    <h4 style={{ color: '#61dafb', marginBottom: 8 }}>React (Vite) Pros</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Simpler mental model (just a library)</li>
                      <li style={{ marginBottom: 8 }}>Faster hot module replacement</li>
                      <li style={{ marginBottom: 8 }}>More control over architecture</li>
                      <li style={{ marginBottom: 8 }}>No server/client boundary confusion</li>
                      <li>Easier to integrate with any backend</li>
                    </ul>
                  </div>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(239,68,68,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(239,68,68,0.2)' }}>
                    <h4 style={{ color: '#ef4444', marginBottom: 8 }}>Next.js Cons</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Steeper learning curve</li>
                      <li style={{ marginBottom: 8 }}>Server vs client component complexity</li>
                      <li style={{ marginBottom: 8 }}>Vercel lock-in concerns</li>
                      <li>Frequent breaking changes between versions</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(239,68,68,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(239,68,68,0.2)' }}>
                    <h4 style={{ color: '#ef4444', marginBottom: 8 }}>React (Vite) Cons</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Must configure everything yourself</li>
                      <li style={{ marginBottom: 8 }}>No built-in SSR or SEO</li>
                      <li style={{ marginBottom: 8 }}>Separate backend required for APIs</li>
                      <li>Manual optimization needed</li>
                    </ul>
                  </div>
                </div>

                {/* Deployment */}
                <h2 id="deployment" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Deployment & Infrastructure</h2>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  Next.js Deployment
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Vercel:</strong> Zero-config, built by the same team. Best DX but can get expensive at scale ($20-500+/month).</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>AWS/GCP:</strong> Self-hosted with Docker. More work but full control. Cost-effective at scale.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Cloudflare Pages:</strong> Growing support, edge-first deployment.</li>
                    <li><strong style={{ color: '#ffffff' }}>Static export:</strong> Next.js can export as static HTML (losing SSR features).</li>
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#61dafb', marginTop: 32, marginBottom: 16 }}>
                  React SPA Deployment
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Any static host:</strong> Netlify, S3 + CloudFront, Firebase Hosting. Dead simple.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Cost:</strong> Often free or under $5/month for static hosting.</li>
                    <li><strong style={{ color: '#ffffff' }}>No server needed:</strong> Just upload HTML/JS/CSS files.</li>
                  </ul>
                </div>

                {/* When to Choose */}
                <h2 id="when-to-choose" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>When to Choose Each</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 24, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 12, fontSize: 18 }}>Choose Next.js When:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                      <li style={{ marginBottom: 10 }}>SEO matters (marketing sites, blogs, e-commerce)</li>
                      <li style={{ marginBottom: 10 }}>You need fast initial page loads</li>
                      <li style={{ marginBottom: 10 }}>Building a SaaS with public-facing pages</li>
                      <li style={{ marginBottom: 10 }}>You want API routes without a separate backend</li>
                      <li style={{ marginBottom: 10 }}>Image-heavy websites</li>
                      <li>Building a full-stack application</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(97,218,251,0.05)', padding: 24, borderRadius: 12, border: '1px solid rgba(97,218,251,0.2)' }}>
                    <h4 style={{ color: '#61dafb', marginBottom: 12, fontSize: 18 }}>Choose React SPA When:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                      <li style={{ marginBottom: 10 }}>Building internal dashboards or admin panels</li>
                      <li style={{ marginBottom: 10 }}>App is behind authentication (no SEO needed)</li>
                      <li style={{ marginBottom: 10 }}>You have a separate backend team/API</li>
                      <li style={{ marginBottom: 10 }}>Maximum flexibility is critical</li>
                      <li style={{ marginBottom: 10 }}>Embedding React in an existing app</li>
                      <li>Simple single-page applications</li>
                    </ul>
                  </div>
                </div>

                {/* Recommendation */}
                <h2 id="recommendation" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Our Recommendation at Codazz</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop"
                    alt="Team collaborating on technology decisions"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@clyders" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Clyde RS</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal" style={{ fontSize: 18, color: '#ffffff', fontWeight: 500 }}>
                  In 2026, <strong style={{ color: '#b4fd83' }}>Next.js is the default choice for 80% of new web projects</strong>. Here&apos;s our breakdown:
                </p>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#b4fd83' }}>For Startups:</strong> Next.js. You need SEO, fast pages, and the ability to ship a full-stack app with a small team.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#b4fd83' }}>For E-commerce:</strong> Next.js. SEO and Core Web Vitals directly impact revenue. Non-negotiable.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#b4fd83' }}>For SaaS:</strong> Next.js for marketing pages + dashboard. The App Router makes this seamless.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#61dafb' }}>For Internal Tools:</strong> React + Vite. No SEO needed, simpler architecture, faster development.</li>
                    <li><strong style={{ color: '#61dafb' }}>For Embedded Widgets:</strong> React. When you need a component library, not a framework.</li>
                  </ul>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'Is Next.js harder to learn than React?', a: 'Yes, slightly. Next.js adds concepts like Server Components, file-based routing, and data fetching patterns on top of React. If you know React, expect 1-2 weeks to become productive with Next.js.' },
                  { q: 'Can I use Next.js without SSR?', a: 'Absolutely. Next.js supports static export mode, which generates plain HTML/CSS/JS files just like a React SPA. You get the DX benefits without needing a server.' },
                  { q: 'Is Next.js only for Vercel?', a: 'No. While Vercel offers the best deployment experience for Next.js, you can self-host on AWS, GCP, Docker, or any Node.js server. Many enterprises run Next.js on their own infrastructure.' },
                  { q: 'Should I migrate my React SPA to Next.js?', a: 'Only if you need SEO or better performance. If your app is an internal tool behind login, a React SPA is perfectly fine. Migration can take 2-6 weeks depending on complexity.' },
                  { q: 'Does React team recommend Next.js?', a: 'Yes. The official React documentation recommends Next.js as the primary way to start a new React project. The React team has been collaborating closely with Vercel on features like Server Components.' },
                  { q: 'What about Remix vs Next.js?', a: 'Remix is excellent but has a smaller ecosystem. In 2026, Next.js has significantly more community support, documentation, and third-party integrations. For most projects, Next.js is the safer bet.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 16,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Need Help Choosing the Right Stack?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Your tech stack is the foundation of your product. We&apos;ll help you pick the right tools based on your specific requirements, team, and budget.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Book Free Tech Consultation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  {/* Table of Contents */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '8px 0', fontSize: 14,
                            color: activeSection === section.id ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #b4fd83' : '2px solid transparent',
                            paddingLeft: 12,
                          }}
                        >
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Related Posts */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
                          <span style={{ fontSize: 11, color: '#b4fd83', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
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
