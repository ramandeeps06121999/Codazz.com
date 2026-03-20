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
  { id: 'performance', label: 'Performance', emoji: '📊' },
  { id: 'cost', label: 'Development Cost', emoji: '💰' },
  { id: 'time-to-market', label: 'Time to Market', emoji: '⏱️' },
  { id: 'ux', label: 'User Experience', emoji: '🎨' },
  { id: 'maintenance', label: 'Maintenance', emoji: '🔧' },
  { id: 'decision-framework', label: 'Decision Framework', emoji: '🎯' },
  { id: 'recommendation', label: 'Our Recommendation', emoji: '✅' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native: The Definitive 2026 Comparison', category: 'Engineering', readTime: '15 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
];

export default function NativeVsCrossPlatformClient() {
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
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=675&fit=crop"
              alt="Mobile app development on multiple devices"
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
              Photo by <a href="https://unsplash.com/@williamhook" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>William Hook</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
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
              }}>Mobile</span>
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
                16 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Native vs Cross-Platform App Development in 2026: Complete Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Swift and Kotlin deliver maximum performance. Flutter and React Native save you 40-60% on development costs. Here&apos;s how to decide which approach is right for your app.
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
                    You want to build a mobile app. iOS and Android. But should you build two separate native apps or one cross-platform app?
                  </p>
                  <p>
                    This decision will determine your <strong style={{ color: '#ffffff' }}>development cost, timeline, app quality, and long-term maintenance burden</strong>. Get it wrong, and you&apos;re looking at a costly rewrite within 18 months.
                  </p>
                  <p>
                    In 2026, cross-platform frameworks have closed the performance gap dramatically. But native development still has clear advantages in specific scenarios.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we&apos;ve built 80+ mobile apps across both approaches. Here&apos;s the real story that vendors won&apos;t tell you.
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
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#f97316', fontSize: 14 }}>Native (Swift/Kotlin)</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Cross-Platform</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Performance</td>
                        <td style={{ padding: '12px 8px', color: '#f97316' }}>Maximum (100%)</td>
                        <td style={{ padding: '12px 8px' }}>Near-native (90-98%)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Development Cost</td>
                        <td style={{ padding: '12px 8px' }}>$100K-500K (2 teams)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>$50K-250K (1 team)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Time to Market</td>
                        <td style={{ padding: '12px 8px' }}>6-12 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>3-6 months</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Code Sharing</td>
                        <td style={{ padding: '12px 8px' }}>0% between platforms</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>80-95% shared</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Platform APIs</td>
                        <td style={{ padding: '12px 8px', color: '#f97316' }}>Full access (day 1)</td>
                        <td style={{ padding: '12px 8px' }}>Good (slight delay)</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>Team Size Needed</td>
                        <td style={{ padding: '12px 8px' }}>4-8 developers</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>2-4 developers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Performance */}
                <h2 id="performance" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Performance: How Big Is the Gap in 2026?</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                    alt="Performance metrics dashboard"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@lukechesser" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Luke Chesser</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  The performance gap has shrunk dramatically. Here are real benchmarks from identical apps we built:
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Metric</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#f97316', fontSize: 14 }}>Native</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Flutter</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#61dafb', fontSize: 14 }}>React Native</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>App Startup</td>
                        <td style={{ padding: '12px 8px', color: '#f97316' }}>0.8s</td>
                        <td style={{ padding: '12px 8px' }}>1.2s</td>
                        <td style={{ padding: '12px 8px' }}>1.8s</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Animation FPS</td>
                        <td style={{ padding: '12px 8px', color: '#f97316' }}>120 FPS</td>
                        <td style={{ padding: '12px 8px' }}>120 FPS</td>
                        <td style={{ padding: '12px 8px' }}>60 FPS</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Memory Usage</td>
                        <td style={{ padding: '12px 8px', color: '#f97316' }}>95 MB</td>
                        <td style={{ padding: '12px 8px' }}>145 MB</td>
                        <td style={{ padding: '12px 8px' }}>128 MB</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>App Size</td>
                        <td style={{ padding: '12px 8px', color: '#f97316' }}>8 MB</td>
                        <td style={{ padding: '12px 8px' }}>18 MB</td>
                        <td style={{ padding: '12px 8px' }}>12 MB</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>Battery Impact</td>
                        <td style={{ padding: '12px 8px', color: '#f97316' }}>Low</td>
                        <td style={{ padding: '12px 8px' }}>Medium</td>
                        <td style={{ padding: '12px 8px' }}>Medium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="reveal" style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                  Reality Check: For 90% of apps (social, e-commerce, productivity), users cannot tell the difference. The gap only matters for games, AR/VR, heavy video processing, or apps pushing hardware limits.
                </p>

                {/* Cost */}
                <h2 id="cost" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Development Cost: The Numbers</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(249,115,22,0.05)', padding: 24, borderRadius: 12, border: '1px solid rgba(249,115,22,0.2)' }}>
                    <h4 style={{ color: '#f97316', marginBottom: 12, fontSize: 18 }}>Native (Two Apps)</h4>
                    <p style={{ fontSize: 28, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>$100K - $500K+</p>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>iOS team: 2-4 Swift developers</li>
                      <li style={{ marginBottom: 8 }}>Android team: 2-4 Kotlin developers</li>
                      <li style={{ marginBottom: 8 }}>Double the QA testing</li>
                      <li>2x design reviews</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 24, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 12, fontSize: 18 }}>Cross-Platform (One App)</h4>
                    <p style={{ fontSize: 28, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>$50K - $250K</p>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>One team: 2-4 Flutter/RN developers</li>
                      <li style={{ marginBottom: 8 }}>80-95% shared codebase</li>
                      <li style={{ marginBottom: 8 }}>Unified QA process</li>
                      <li>Single design system</li>
                    </ul>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <p style={{ fontSize: 15, color: '#ffffff', margin: 0 }}>
                    <strong>The math is simple:</strong> Cross-platform saves you 40-60% on initial development and 30-50% on ongoing maintenance. For a startup with a $150K budget, that&apos;s the difference between shipping both platforms or only one.
                  </p>
                </div>

                {/* Time to Market */}
                <h2 id="time-to-market" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Time to Market</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto'
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>App Complexity</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#f97316', fontSize: 14 }}>Native (Both)</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Cross-Platform</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Simple MVP</td>
                        <td style={{ padding: '12px 8px' }}>3-4 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>6-8 weeks</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Mid-complexity App</td>
                        <td style={{ padding: '12px 8px' }}>6-9 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>3-5 months</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>Enterprise App</td>
                        <td style={{ padding: '12px 8px' }}>9-18 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>6-10 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* UX */}
                <h2 id="ux" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>User Experience</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=500&fit=crop"
                    alt="Mobile app interface design"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@kellysikkema" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Kelly Sikkema</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(249,115,22,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(249,115,22,0.2)' }}>
                    <h4 style={{ color: '#f97316', marginBottom: 8 }}>Native UX Advantages</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>100% platform-native interactions</li>
                      <li style={{ marginBottom: 8 }}>Immediate access to new OS features</li>
                      <li style={{ marginBottom: 8 }}>Perfect gesture handling</li>
                      <li>Native accessibility support</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Cross-Platform UX in 2026</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Flutter: Pixel-perfect custom UI on both</li>
                      <li style={{ marginBottom: 8 }}>React Native: Real native components</li>
                      <li style={{ marginBottom: 8 }}>Consistent brand experience</li>
                      <li>Users can&apos;t tell the difference for most apps</li>
                    </ul>
                  </div>
                </div>

                {/* Maintenance */}
                <h2 id="maintenance" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Long-Term Maintenance</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto'
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Maintenance Factor</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#f97316', fontSize: 14 }}>Native</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Cross-Platform</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Annual Cost</td>
                        <td style={{ padding: '12px 8px' }}>$30K-80K/year</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>$15K-40K/year</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Bug Fixes</td>
                        <td style={{ padding: '12px 8px' }}>Fix twice (per platform)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Fix once (mostly)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Feature Releases</td>
                        <td style={{ padding: '12px 8px' }}>Staggered rollouts</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Simultaneous on both</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>OS Updates</td>
                        <td style={{ padding: '12px 8px', color: '#f97316' }}>Immediate support</td>
                        <td style={{ padding: '12px 8px' }}>1-4 week delay</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Decision Framework */}
                <h2 id="decision-framework" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Decision Framework: 5 Questions to Ask</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop"
                    alt="Strategic decision-making and planning"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@clyders" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Clyde RS</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                {[
                  { num: '1', q: 'What is your budget?', a: 'Under $150K for both platforms? Cross-platform is your only realistic option. Above $300K? Native becomes viable.' },
                  { num: '2', q: 'How quickly do you need to launch?', a: 'If speed-to-market is critical (startup, seasonal product), cross-platform gets you there 40-50% faster.' },
                  { num: '3', q: 'Does your app push hardware limits?', a: 'AR/VR, real-time video processing, AAA games, or complex 3D rendering? Go native. Everything else? Cross-platform handles it.' },
                  { num: '4', q: 'What does your team know?', a: 'Existing Swift/Kotlin team? Native. JavaScript/Dart developers? Cross-platform. Don\'t hire against your team\'s strengths.' },
                  { num: '5', q: 'How important is platform-specific UX?', a: 'Banking/health apps with strict platform compliance? Consider native. Consumer apps with custom branding? Cross-platform excels.' },
                ].map((item, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 16,
                    borderLeft: '3px solid #b4fd83',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>
                      <span style={{ color: '#b4fd83' }}>Q{item.num}:</span> {item.q}
                    </h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
                  </div>
                ))}

                {/* Recommendation */}
                <h2 id="recommendation" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Our Recommendation at Codazz</h2>

                <p className="reveal" style={{ fontSize: 18, color: '#ffffff', fontWeight: 500 }}>
                  In 2026, <strong style={{ color: '#b4fd83' }}>cross-platform is the right choice for 75% of mobile app projects</strong>. Here&apos;s our breakdown:
                </p>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#b4fd83' }}>For Startups & MVPs:</strong> Cross-platform (Flutter). Ship fast, validate, iterate. You can always go native later if needed.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#b4fd83' }}>For E-commerce & Social:</strong> Cross-platform. Performance is more than enough, and you save 40-60% on costs.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#f97316' }}>For AR/VR & Gaming:</strong> Native. You need direct hardware access and maximum performance.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#f97316' }}>For Enterprise with Compliance:</strong> Native if budget allows and platform-specific features are critical.</li>
                    <li><strong style={{ color: '#b4fd83' }}>For SaaS Mobile Apps:</strong> Cross-platform. Consistency across platforms is more important than platform-native feel.</li>
                  </ul>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'Can users tell the difference between native and cross-platform?', a: 'For the vast majority of apps, no. Apps like Google Pay (Flutter), Shopify (React Native), and BMW (Flutter) prove that cross-platform can deliver excellent UX.' },
                  { q: 'Is cross-platform cheaper in the long run too?', a: 'Yes. You maintain one codebase instead of two. Bug fixes, feature updates, and OS compatibility updates all happen once instead of twice. Annual maintenance costs are typically 30-50% lower.' },
                  { q: 'What if I start cross-platform and need to go native later?', a: 'This is rare but possible. You can selectively rewrite performance-critical modules in native code while keeping the rest cross-platform. Both Flutter and React Native support this hybrid approach.' },
                  { q: 'Which cross-platform framework should I choose?', a: 'Flutter for custom UI, performance-critical apps, and startups. React Native if your team knows JavaScript or you need deep integration with native ecosystems. Read our Flutter vs React Native comparison for details.' },
                  { q: 'Do big companies use cross-platform?', a: 'Absolutely. Google (Flutter), Meta (React Native), BMW, Alibaba, eBay, and hundreds of Fortune 500 companies ship cross-platform apps to millions of users.' },
                  { q: 'What about PWAs as an alternative?', a: 'PWAs are good for content-heavy apps but lack access to device features like Bluetooth, NFC, and advanced camera APIs. For a true mobile experience, native or cross-platform is still superior.' },
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
                    Not Sure Which Approach Fits Your App?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    We&apos;ll analyze your requirements, budget, and timeline to recommend the best development approach. No pressure, no sales pitch.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Book Free App Strategy Call
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '8px 0', fontSize: 14,
                          color: activeSection === section.id ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === section.id ? '2px solid #b4fd83' : '2px solid transparent',
                          paddingLeft: 12,
                        }}>
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          display: 'block', padding: 16,
                          background: 'rgba(255,255,255,0.03)',
                          borderRadius: 12, textDecoration: 'none',
                          border: '1px solid rgba(255,255,255,0.06)',
                          transition: 'all 0.2s',
                        }}>
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
