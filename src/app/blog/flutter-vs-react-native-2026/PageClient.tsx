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
  { id: 'how-they-work', label: 'How They Work', emoji: '⚙️' },
  { id: 'performance', label: 'Performance', emoji: '📊' },
  { id: 'ui-ux', label: 'UI/UX Comparison', emoji: '🎨' },
  { id: 'developer-experience', label: 'Developer Experience', emoji: '💻' },
  { id: 'ecosystem', label: 'Ecosystem', emoji: '📦' },
  { id: 'case-studies', label: 'Case Studies', emoji: '📱' },
  { id: 'recommendation', label: 'Our Recommendation', emoji: '✅' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026', category: 'Engineering', readTime: '18 min' },
];

export default function FlutterVsReactNativeClient() {
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
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=675&fit=crop"
              alt="Developer coding on laptop with code on screen"
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
              Photo by <a href="https://unsplash.com/@ilyapavlov" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Ilya Pavlov</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
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
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 18, 2026</span>
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
                15 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Flutter vs React Native: The Definitive 2026 Comparison
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A data-driven comparison of the two dominant cross-platform frameworks. Performance benchmarks, real case studies, and expert recommendations to help you choose the right technology for your mobile app.
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
                    You&apos;re building a mobile app. You want iOS and Android users. But you don&apos;t want to pay for two separate development teams.
                  </p>
                  <p>
                    <strong style={{ color: '#ffffff' }}>Cross-platform development is the answer.</strong> But which framework?
                  </p>
                  <p>
                    In 2026, two frameworks dominate: <strong style={{ color: '#b4fd83' }}>Flutter</strong> (Google) and <strong style={{ color: '#b4fd83' }}>React Native</strong> (Meta). Both promise &ldquo;write once, run anywhere.&rdquo; Both have massive communities. Both power apps used by millions.
                  </p>
                  <p>
                    But they&apos;re fundamentally different. And choosing wrong can cost you months and tens of thousands of dollars.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we&apos;ve built 80+ apps with these frameworks. Here&apos;s what we&apos;ve learned—and what nobody else is telling you.
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
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Flutter</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#61dafb', fontSize: 14 }}>React Native</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Created By</td>
                        <td style={{ padding: '12px 8px' }}>Google (2017)</td>
                        <td style={{ padding: '12px 8px' }}>Meta (2015)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Language</td>
                        <td style={{ padding: '12px 8px' }}>Dart</td>
                        <td style={{ padding: '12px 8px' }}>JavaScript</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Performance</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Excellent (60-120 FPS)</td>
                        <td style={{ padding: '12px 8px' }}>Very Good (60 FPS)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>GitHub Stars</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>165,000+</td>
                        <td style={{ padding: '12px 8px' }}>120,000+</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>Best For</td>
                        <td style={{ padding: '12px 8px' }}>Custom UI, high performance</td>
                        <td style={{ padding: '12px 8px' }}>Native look, large teams</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* How They Work */}
                <h2 id="how-they-work" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Deep Dive: How They Actually Work</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop"
                    alt="System architecture and technology infrastructure"
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

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  Flutter: The Compiled Approach
                </h3>
                <p className="reveal">
                  Flutter doesn&apos;t use native platform widgets. Instead, it <strong style={{ color: '#ffffff' }}>draws every pixel</strong> using Google&apos;s Skia graphics engine.
                </p>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}>Your app looks identical on iOS and Android</li>
                    <li style={{ marginBottom: 12 }}>No dependency on native UI updates</li>
                    <li style={{ marginBottom: 12 }}>Smoother animations (up to 120 FPS)</li>
                    <li>Larger app size (includes rendering engine)</li>
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#61dafb', marginTop: 32, marginBottom: 16 }}>
                  React Native: The Bridge Approach
                </h3>
                <p className="reveal">
                  React Native uses a <strong style={{ color: '#ffffff' }}>JavaScript bridge</strong> to communicate with native platform components.
                </p>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}>Your app uses real native iOS/Android UI elements</li>
                    <li style={{ marginBottom: 12 }}>Automatic platform-specific look and feel</li>
                    <li style={{ marginBottom: 12 }}>Slightly slower performance (bridge overhead)</li>
                    <li>Smaller app size (uses native components)</li>
                  </ul>
                </div>

                {/* Performance */}
                <h2 id="performance" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Performance: The Real Numbers</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                    alt="Performance dashboard with analytics and metrics"
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
                  We tested identical apps on iPhone 15 Pro and Samsung Galaxy S24:
                </p>

                <div className="reveal" style={{ 
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Metric</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Flutter</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#61dafb', fontSize: 14 }}>React Native</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Animation FPS</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>120 FPS</td>
                        <td style={{ padding: '12px 8px' }}>60 FPS</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Startup Time</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>1.2s</td>
                        <td style={{ padding: '12px 8px' }}>1.8s</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Memory Usage</td>
                        <td style={{ padding: '12px 8px' }}>145 MB</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>128 MB</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>App Size</td>
                        <td style={{ padding: '12px 8px' }}>18 MB</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>12 MB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="reveal" style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                  Bottom Line: Flutter wins on raw performance. React Native wins on app size. For most apps, the difference is negligible to users.
                </p>

                {/* UI/UX */}
                <h2 id="ui-ux" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>UI/UX: Custom vs Native</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=500&fit=crop"
                    alt="Mobile app UI design and interface mockups"
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
                    Photo by <a href="https://unsplash.com/@kellysikkema" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Kelly Sikkema</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{ 
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Flutter: Pixel-Perfect</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Identical UI on both platforms</li>
                      <li style={{ marginBottom: 8 }}>Complex animations are easier</li>
                      <li style={{ marginBottom: 8 }}>Custom designs without limits</li>
                      <li>Hot reload is instantaneous</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(97,218,251,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(97,218,251,0.2)' }}>
                    <h4 style={{ color: '#61dafb', marginBottom: 8 }}>React Native: Platform-Native</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Uses real iOS/Android components</li>
                      <li style={{ marginBottom: 8 }}>Automatic platform conventions</li>
                      <li style={{ marginBottom: 8 }}>Better accessibility out of box</li>
                      <li>Matches platform design guidelines</li>
                    </ul>
                  </div>
                </div>

                {/* Developer Experience */}
                <h2 id="developer-experience" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Developer Experience</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
                    alt="Developer workspace with multiple monitors coding"
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

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginTop: 32, marginBottom: 16 }}>
                  Learning Curve
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#b4fd83' }}>Flutter/Dart:</strong> 2-4 weeks for experienced developers. Dart is easy to learn (similar to Java/Kotlin/Swift).</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#61dafb' }}>React Native/JavaScript:</strong> 1-3 weeks for React developers. JavaScript is ubiquitous.</li>
                  </ul>
                </div>

                {/* Ecosystem */}
                <h2 id="ecosystem" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Ecosystem & Packages</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop"
                    alt="Technology network and connected ecosystem"
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
                    Photo by <a href="https://unsplash.com/@nasa" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>NASA</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{ 
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Flutter (pub.dev)</h4>
                    <p style={{ fontSize: 14, margin: '8px 0' }}><strong>25,000+</strong> packages</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>Official Google packages are excellent. Growing 40% year-over-year.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#61dafb', marginBottom: 8 }}>React Native (npm)</h4>
                    <p style={{ fontSize: 14, margin: '8px 0' }}><strong>1M+</strong> packages</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>Massive ecosystem. Quality varies wildly. More enterprise integrations.</p>
                  </div>
                </div>

                {/* Case Studies */}
                <h2 id="case-studies" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Real-World Case Studies</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=500&fit=crop"
                    alt="Mobile phones showcasing different app interfaces"
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
                    Photo by <a href="https://unsplash.com/@rob_hampson" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Rob Hampson</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{ 
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12 }}>Case Study: Fintech App (Flutter)</h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Client:</strong> Investment platform, Dubai</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Why Flutter:</strong> Needed 60fps chart animations, custom design system, complex calculations</p>
                  <p style={{ fontSize: 14, margin: 0 }}><strong>Results:</strong> Launched in 4 months, 4.8★ rating, 120 FPS smooth charts, 40% faster development vs native</p>
                </div>

                <div className="reveal" style={{ 
                  background: 'rgba(97,218,251,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(97,218,251,0.2)',
                }}>
                  <h4 style={{ color: '#61dafb', marginBottom: 12 }}>Case Study: E-commerce App (React Native)</h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Client:</strong> Retail brand, New York</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Why React Native:</strong> Team had React web experience, needed native shopping flows, Shopify integration</p>
                  <p style={{ fontSize: 14, margin: 0 }}><strong>Results:</strong> Launched in 3.5 months, seamless Shopify integration, team productive from day 1</p>
                </div>

                {/* Recommendation */}
                <h2 id="recommendation" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Our Recommendation at Codazz</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop"
                    alt="Decision making and choice crossroads"
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

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#b4fd83' }}>For Startups & MVPs:</strong> Choose Flutter. Faster to market, better performance out of the box, one beautiful UI everywhere.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#61dafb' }}>For Enterprise with React Team:</strong> Choose React Native. Easier onboarding, extensive ecosystem, native compliance.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#b4fd83' }}>For Fintech/Healthcare:</strong> Choose Flutter. Performance critical, custom UI requirements.</li>
                    <li><strong style={{ color: '#61dafb' }}>For E-commerce:</strong> Choose React Native. Better Shopify/native payment integration.</li>
                  </ul>
                </div>

                {/* CTA Section */}
                <div className="reveal" style={{ 
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Still Not Sure? Let&apos;s Talk
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Choosing a framework is a strategic decision. Get it wrong, and you&apos;re looking at expensive rewrites. Get it right, and you move fast for years.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Book Free Framework Consultation
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
