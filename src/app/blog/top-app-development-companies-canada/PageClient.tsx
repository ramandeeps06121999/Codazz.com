'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

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

const companies = [
  { num: 1, name: 'Codazz', category: 'Full-Stack Apps', emoji: '🍁', metric: '500+ Product Launches, HQ in Edmonton', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Finger Food Studios', category: 'Immersive Apps', emoji: '🎮', metric: 'XR & immersive app specialists', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Vog App Developers', category: 'Mobile-First', emoji: '📱', metric: '200+ apps, Calgary-based', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Clearbridge Mobile', category: 'Enterprise Mobile', emoji: '🏢', metric: 'Toronto enterprise app specialists', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Appinventiv', category: 'Digital Transformation', emoji: '🚀', metric: '3000+ digital solutions globally', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Hyperlink InfoSystem', category: 'Cross-Platform', emoji: '🔗', metric: '4500+ apps delivered globally', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Plastic Mobile', category: 'Connected Experiences', emoji: '🔌', metric: 'IoT & connected mobile experiences', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Konstant Infosolutions', category: 'Flutter & React Native', emoji: '🌐', metric: '17+ years mobile development', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Guarana Technologies', category: 'Startup MVPs', emoji: '🌿', metric: 'Montreal-based startup accelerator', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Techugo', category: 'Mobile Innovation', emoji: '💡', metric: 'Award-winning mobile-first development', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'top-software-development-companies-canada', title: 'Top 10 Software Development Companies in Canada (2026)', category: 'Engineering', readTime: '10 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native: The Definitive 2026 Comparison', category: 'Engineering', readTime: '15 min' },
];

export default function TopAppDevelopmentCompaniesCanadaClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* FEATURED IMAGE */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/top-app-development-companies-canada.jpg"
              alt="Top app development companies in Canada 2026"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
          </div>
        </div>

        {/* ARTICLE HERO */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
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
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                11 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top App Development Companies in Canada (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Canada&apos;s tech ecosystem has matured into a global powerhouse. From Edmonton&apos;s AI corridor to Toronto&apos;s fintech hub and Vancouver&apos;s gaming scene, Canadian app development companies are delivering world-class mobile products. Here are the top 10 for 2026.
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
                {[
                  { label: 'Twitter', icon: '\u{1D54F}' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)',
                  background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE BODY + SIDEBAR */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* MAIN ARTICLE */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Canada&apos;s technology sector contributed over $100 billion to the national GDP in 2025, and mobile app development sits at the heart of this growth. With world-class universities producing top-tier AI and engineering talent, generous R&D tax credits through SR&ED, and a cost of living that keeps operational expenses lower than Silicon Valley, Canada has become one of the smartest places in the world to build a mobile app.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But with hundreds of agencies competing for your business, choosing the right partner is critical. We evaluated Canadian app development companies on five pillars: <strong style={{ color: 'rgba(255,255,255,0.65)' }}>technical architecture quality</strong>, <strong style={{ color: 'rgba(255,255,255,0.65)' }}>design excellence</strong>, <strong style={{ color: 'rgba(255,255,255,0.65)' }}>delivery velocity</strong>, <strong style={{ color: 'rgba(255,255,255,0.65)' }}>client portfolio depth</strong>, and <strong style={{ color: 'rgba(255,255,255,0.65)' }}>post-launch scalability</strong>.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Canadian app development rates are typically 30-50% lower than comparable US firms in New York or San Francisco, while operating on the same time zones, under the same CUSMA trade framework, and with the same cultural alignment. For American businesses, this makes Canada one of the most compelling nearshore options in the world.
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 20,
                    }}>Key Takeaways</p>
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      {[
                        'Codazz, headquartered in Edmonton, Alberta, is Canada\'s #1 app development company by portfolio depth and engineering quality.',
                        'SR&ED tax credits provide 15-35% effective cost reduction on qualifying R&D — making Canada one of the most cost-efficient places to innovate.',
                        'Edmonton\'s AI corridor, Toronto\'s fintech hub, Vancouver\'s gaming scene, and Montreal\'s AI research cluster create distinct specializations by city.',
                        'Quebec projects often require French/English bilingual apps — agencies must have genuine French localization capability, not just translation plugins.',
                        'Canadian dev rates ($80-$180/hr CAD) are 30-50% lower than equivalent NYC or SF firms while sharing North American time zones.',
                        'The Waterloo corridor remains Canada\'s most concentrated engineering talent pool, feeding companies coast to coast.',
                      ].map((item, i) => (
                        <li key={i} style={{
                          fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: i < 5 ? 12 : 0,
                        }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Canadian Tech Hubs */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Canada&apos;s Tech Ecosystem by City</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
                    {[
                      { label: 'Edmonton', icon: '🍁', desc: 'AI corridor anchored by Amii and DeepMind research. Growing startup scene and lower operational costs than Toronto/Vancouver.', color: '#22c55e' },
                      { label: 'Toronto', icon: '🏙️', desc: 'Canada\'s fintech and enterprise mobile capital. MaRS Discovery District, largest concentration of Canadian tech headquarters.', color: '#60a5fa' },
                      { label: 'Vancouver', icon: '🎮', desc: 'Gaming and AR/VR hub. Home to EA, Unity, and dozens of immersive experience studios. Strong blockchain presence.', color: '#f472b6' },
                      { label: 'Waterloo', icon: '🎓', desc: 'The Waterloo corridor: University of Waterloo, Canada\'s MIT, produces more engineering co-op talent than anywhere else in North America.', color: '#fbbf24' },
                      { label: 'Montreal', icon: '🎨', desc: 'AI research hub (Mila, Element AI). Gaming capital of Canada. Quebec\'s bilingual French/English requirements create unique localization demand.', color: '#a78bfa' },
                      { label: 'Calgary', icon: '⚡', desc: 'Energy tech and field operations apps. Oil & gas digital transformation driving strong enterprise mobile demand.', color: '#34d399' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, padding: 24,
                      }}>
                        <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: item.color, marginBottom: 8 }}>{item.label}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>2026 Canada Comparison Table</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Rank', 'Company', 'HQ City', 'Platform', 'Best For', 'Rating'].map(h => (
                            <th key={h} style={{
                              padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700,
                              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                              background: 'rgba(255,255,255,0.02)',
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { rank: '#1', company: 'Codazz', city: 'Edmonton, AB', platform: 'Flutter, React Native, iOS, Android', bestFor: 'Full-cycle cross-platform', rating: '4.9' },
                          { rank: '#2', company: 'Finger Food Studios', city: 'Vancouver, BC', platform: 'Unity, AR/VR, iOS, Android', bestFor: 'Immersive & XR apps', rating: '4.8' },
                          { rank: '#3', company: 'Vog App Developers', city: 'Calgary, AB', platform: 'iOS, Android, React Native', bestFor: 'Healthcare & field ops', rating: '4.7' },
                          { rank: '#4', company: 'Clearbridge Mobile', city: 'Toronto, ON', platform: 'iOS, Android, enterprise', bestFor: 'Enterprise & fintech apps', rating: '4.7' },
                          { rank: '#5', company: 'Appinventiv', city: 'Toronto, ON', platform: 'Full-stack mobile', bestFor: 'Digital transformation', rating: '4.7' },
                          { rank: '#6', company: 'Hyperlink InfoSystem', city: 'Canada (remote)', platform: 'Flutter, React Native, Blockchain', bestFor: 'Cross-platform at scale', rating: '4.6' },
                          { rank: '#7', company: 'Plastic Mobile', city: 'Toronto, ON', platform: 'iOS, Android, IoT', bestFor: 'IoT & connected retail', rating: '4.6' },
                          { rank: '#8', company: 'Konstant Infosolutions', city: 'Canada (remote)', platform: 'Flutter, React Native, PWA', bestFor: 'Cost-effective cross-platform', rating: '4.5' },
                          { rank: '#9', company: 'Guarana Technologies', city: 'Montreal, QC', platform: 'React Native, Node.js', bestFor: 'Startup MVPs', rating: '4.5' },
                          { rank: '#10', company: 'Techugo', city: 'Canada (remote)', platform: 'iOS, Android, Flutter', bestFor: 'Design-led consumer apps', rating: '4.4' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{row.rank}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.company}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.city}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.platform}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.bestFor}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{row.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* How We Ranked */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 20,
                    }}>How We Ranked These Companies</h2>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      Each company was scored across technical depth (scalable architecture, clean code practices), design maturity (user research, conversion-focused UX), delivery speed (sprint velocity, time-to-market), portfolio quality (verified case studies, app store ratings), and client retention (long-term partnerships, ongoing engagements). Canadian-headquartered companies received priority weighting.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Portfolio Quality', weight: '30%', desc: 'Live apps, App Store ratings, verified case studies' },
                        { label: 'Technical Depth', weight: '25%', desc: 'Architecture, scalability, DevOps maturity' },
                        { label: 'Canadian HQ', weight: '20%', desc: 'Priority for Canadian-headquartered agencies' },
                        { label: 'Client Outcomes', weight: '15%', desc: 'Revenue impact, retention metrics, repeat clients' },
                        { label: 'Process & Support', weight: '10%', desc: 'Agile maturity, communication, post-launch support' },
                      ].map((c, i) => (
                        <div key={i} style={{
                          padding: '16px', borderRadius: 12,
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                            <span style={{ fontSize: 13, fontWeight: 600, color: '#ffffff' }}>{c.label}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e' }}>{c.weight}</span>
                          </div>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Company 1: Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 0, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🍁</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Full-Stack Apps</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Headquartered in Edmonton, Alberta, Codazz is Canada&apos;s premier app development company and the clear #1 on this list. With over 500+ successful product launches spanning mobile apps, enterprise platforms, and AI-powered solutions, Codazz has built a reputation for engineering excellence that rivals the best firms in Silicon Valley — at Canadian operating costs.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      What makes Codazz different from every other Canadian agency is their architecture-first philosophy. Every project starts with a deep technical discovery phase where they map out microservices architecture, database design, API contracts, and CI/CD pipelines before a single line of application code is written. This means their apps don&apos;t just work at launch, they scale effortlessly to millions of users without costly rewrites.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Key Services:</strong> Native iOS & Android, React Native, Flutter, AI/ML Integration, Cloud Architecture (AWS/GCP/Azure), Enterprise SaaS, MVP Development, Full-Stack Web Apps, UI/UX Design, French/English Bilingual Localization
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Notable Projects:</strong> On-demand logistics platforms for Western Canadian enterprises, AI-powered healthcare diagnostics apps, fintech trading platforms for Toronto-based firms, and large-scale e-commerce ecosystems serving customers across North America.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Why #1:</strong> No other Canadian agency matches Codazz&apos;s combination of technical depth, delivery speed, and architectural rigor. Their Edmonton headquarters gives them a cost advantage over Toronto and Vancouver agencies, while their global engineering team (with operations in Chandigarh, India) ensures 24/7 development cycles and aggressive timelines.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                        Key Metric: 500+ Product Launches | Edmonton HQ | Global Delivery Team
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'finger-food-studios', name: 'Finger Food Studios', category: 'Immersive Apps',
                    emoji: '🎮', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'XR & immersive app specialists',
                    paragraphs: [
                      'Vancouver-based Finger Food Studios (now part of Unity Technologies) has become synonymous with cutting-edge immersive mobile experiences. They specialize in AR/VR applications, 3D visualization tools, and mixed reality platforms that push the boundaries of what mobile devices can do. Their work with major automotive brands and healthcare companies has set a new standard for immersive app development in Canada.',
                      'Key Services: AR/VR mobile apps, 3D visualization, Unity development, mixed reality, spatial computing. Pros: Industry-leading immersive tech expertise, Unity backing, premium client portfolio. Cons: Specialized focus means they&apos;re not ideal for standard business apps or consumer apps that prioritize simplicity over innovation.',
                    ],
                  },
                  {
                    num: '03', id: 'vog-app-developers', name: 'Vog App Developers', category: 'Mobile-First',
                    emoji: '📱', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: '200+ apps, Calgary-based',
                    paragraphs: [
                      'Calgary&apos;s Vog App Developers has built over 200 mobile apps for clients ranging from local Alberta businesses to national enterprises. They take a mobile-first approach to every project, ensuring that the smartphone experience is never an afterthought. Their team is particularly strong in healthcare, oil & gas field operations, and retail loyalty apps — reflecting Calgary&apos;s core industries.',
                      'Key Services: iOS/Android development, enterprise mobility, healthcare apps, field service apps, wearable integration. Pros: Strong Alberta presence, industry-specific expertise (energy, healthcare), 200+ app portfolio. Cons: Smaller team limits capacity for concurrent large-scale projects, so enterprise clients with complex multi-stream requirements may find capacity constraints.',
                    ],
                  },
                  {
                    num: '04', id: 'clearbridge-mobile', name: 'Clearbridge Mobile', category: 'Enterprise Mobile',
                    emoji: '🏢', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Toronto enterprise app specialists',
                    paragraphs: [
                      'Clearbridge Mobile is Toronto&apos;s most established enterprise mobile development agency. They work with Fortune 500 companies and large Canadian banks to build secure, compliant mobile banking apps, insurance platforms, and internal enterprise tools. Their expertise in regulated industries, strict data privacy compliance, and integration with legacy enterprise systems makes them a trusted partner for Canada&apos;s biggest corporations.',
                      'Key Services: Enterprise mobile apps, fintech platforms, healthcare apps, legacy system integration, security-first development. Pros: Deep enterprise expertise, compliance-focused, strong financial services portfolio. Cons: Enterprise pricing places them out of reach for early-stage startups; minimum engagement sizes reflect their enterprise focus.',
                    ],
                  },
                  {
                    num: '05', id: 'appinventiv', name: 'Appinventiv', category: 'Digital Transformation',
                    emoji: '🚀', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: '3000+ digital solutions globally',
                    paragraphs: [
                      'Appinventiv has expanded aggressively into the Canadian market with their Toronto office, bringing over 3,000 successful digital product deliveries to the table. They position themselves as a full-cycle digital transformation partner, handling everything from initial strategy through development to post-launch growth. Their Canadian clients include major retail chains, logistics companies, and healthcare providers.',
                      'Key Services: Mobile app development, digital transformation consulting, IoT platforms, cloud migration, enterprise app modernization. Pros: Massive global experience, full-service capabilities, large engineering team. Cons: Not Canadian-born — primary operations are offshore, and the Toronto office primarily serves as a client-facing delivery hub rather than a primary engineering center.',
                    ],
                  },
                  {
                    num: '06', id: 'hyperlink-infosystem', name: 'Hyperlink InfoSystem', category: 'Cross-Platform',
                    emoji: '🔗', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: '4500+ apps delivered globally',
                    paragraphs: [
                      'With a Canadian presence and over 4,500 apps delivered worldwide, Hyperlink InfoSystem offers breadth that few agencies can match. They cover everything from basic business apps to complex blockchain and AI solutions. Their cross-platform focus using Flutter and React Native helps Canadian businesses reach both iOS and Android markets efficiently without maintaining two separate codebases.',
                      'Key Services: Flutter, React Native, blockchain apps, AI/ML development, AR/VR, wearable apps. Pros: Massive portfolio, broad technology coverage, competitive pricing relative to other Canadian agencies. Cons: Volume-focused delivery model means bespoke architectural projects benefit more from specialized boutique firms.',
                    ],
                  },
                  {
                    num: '07', id: 'plastic-mobile', name: 'Plastic Mobile', category: 'Connected Experiences',
                    emoji: '🔌', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'IoT & connected mobile experiences',
                    paragraphs: [
                      'Toronto-based Plastic Mobile (now part of Havas CX) specializes in building connected mobile experiences that bridge the physical and digital worlds. They excel at IoT-enabled apps, beacon technology, and location-aware mobile platforms. Their work with Canadian retail brands and transit authorities demonstrates their ability to handle complex, real-world mobile integrations.',
                      'Key Services: IoT mobile apps, beacon technology, connected retail experiences, transit apps, location-based services. Pros: Unique IoT expertise, strong retail portfolio, Havas CX backing provides additional service breadth. Cons: Niche focus limits suitability for standard SaaS or consumer app development outside of their connected-experience specialty.',
                    ],
                  },
                  {
                    num: '08', id: 'konstant-infosolutions', name: 'Konstant Infosolutions', category: 'Flutter & React Native',
                    emoji: '🌐', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: '17+ years mobile development',
                    paragraphs: [
                      'With 17+ years of mobile development experience and a growing Canadian client base, Konstant Infosolutions brings deep cross-platform expertise to the table. They are particularly strong in Flutter and React Native development, helping Canadian businesses launch apps on both platforms simultaneously while maintaining a single codebase and streamlined QA process.',
                      'Key Services: Flutter apps, React Native, cross-platform development, PWAs, enterprise mobility. Pros: 17+ years track record, cost-effective cross-platform solutions, reliable delivery on defined-scope projects. Cons: Offshore model requires strong project management discipline on the client side to maintain alignment across time zones.',
                    ],
                  },
                  {
                    num: '09', id: 'guarana-technologies', name: 'Guarana Technologies', category: 'Startup MVPs',
                    emoji: '🌿', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Montreal-based startup accelerator',
                    paragraphs: [
                      'Montreal&apos;s Guarana Technologies has positioned itself as Canada&apos;s go-to agency for startup MVPs, with a particular strength in bilingual French/English app development that satisfies Quebec&apos;s Charter of the French Language requirements. They work closely with founders to validate ideas, build lean prototypes, and ship minimum viable products in tight timeframes.',
                      'Key Services: MVP development, startup consulting, rapid prototyping, React Native, Node.js backends, French/English bilingual apps. Pros: Startup-focused lean methodology, genuine French localization capability, Montreal ecosystem connections with local accelerators and VC firms. Cons: Less suited for enterprise-scale projects requiring complex system integrations.',
                    ],
                  },
                  {
                    num: '10', id: 'techugo', name: 'Techugo', category: 'Mobile Innovation',
                    emoji: '💡', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Award-winning mobile-first development',
                    paragraphs: [
                      'Techugo rounds out this list with their growing Canadian operations and a strong portfolio of award-winning mobile apps. They bring a mobile-first philosophy to every engagement, ensuring that apps are designed for the small screen first and scale up from there. Their work spans healthcare, education, logistics, and consumer lifestyle apps.',
                      'Key Services: Native iOS/Android, Flutter, app strategy, UI/UX design, app store optimization. Pros: Strong design focus, award-winning aesthetic quality, mobile-first methodology ensures polished user experiences. Cons: Growing Canadian presence means primary engineering operations remain offshore, requiring proactive timezone coordination.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 24, padding: 36,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                          background: `${app.bgColor}0.1)`, border: `1px solid ${app.bgColor}0.2)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                        }}>{app.emoji}</div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}0.12)`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                          </div>
                          <h2 style={{
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                            letterSpacing: '-0.03em', margin: 0,
                          }}>{app.name}</h2>
                        </div>
                      </div>
                      {app.paragraphs.map((para, pi) => (
                        <p key={pi} style={{
                          fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                          marginBottom: pi < app.paragraphs.length - 1 ? 16 : 20,
                        }}>{para}</p>
                      ))}
                      <div style={{
                        padding: '14px 20px', borderRadius: 12,
                        background: `${app.bgColor}0.06)`, border: `1px solid ${app.bgColor}0.12)`,
                        display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={app.accentColor} strokeWidth="2">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                        </svg>
                        <span style={{ fontSize: 13, color: app.accentColor, fontWeight: 600 }}>
                          {app.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* SR&ED & Tax Credits Section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>SR&ED Tax Credits: Canada&apos;s Hidden Cost Advantage</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Canada&apos;s Scientific Research and Experimental Development (SR&ED) program is one of the most generous R&D tax incentive programs in the world. For Canadian companies that qualify, SR&ED provides a 15% federal tax credit on eligible R&D expenditures, with additional provincial credits ranging from 10-20% depending on the province.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    For app development projects that involve genuine technological advancement — which includes many AI/ML features, novel architecture patterns, and innovative UX solutions — a significant portion of development costs may qualify for SR&ED credits. This effectively reduces the net cost of Canadian app development by 15-35%.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    {[
                      { label: 'Federal SR&ED Credit', value: '15%', desc: 'On qualified R&D expenditures across Canada' },
                      { label: 'Alberta AITF', value: '20%', desc: 'Alberta Innovates Technology Futures additional support' },
                      { label: 'Ontario OITC', value: '10%', desc: 'Ontario Innovation Tax Credit for qualifying companies' },
                      { label: 'BC Interactive Digital', value: '17.5%', desc: 'BC Interactive Digital Media Tax Credit for qualifying media apps' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(34,197,94,0.03)', border: '1px solid rgba(34,197,94,0.1)',
                        borderRadius: 14, padding: '20px',
                      }}>
                        <p style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', marginBottom: 4 }}>{item.value}</p>
                        <p style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.label}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* French/English Bilingual Section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Quebec French/English Bilingual Requirements</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Building an app for the Quebec market involves more than adding a language toggle. Quebec&apos;s Charter of the French Language (Bill 101, significantly expanded by Bill 96 in 2022) requires that consumer-facing software and digital products be available in French. Apps targeting Quebec consumers or government organizations must provide a French-language experience that is at least equivalent in quality and completeness to the English version.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This means French localization must be native and complete — not machine-translated, not a secondary feature. UI text, app store listings, push notification templates, error messages, onboarding flows, and customer support touchpoints all need professional French Canadian (fr-CA) localization. Agencies like Guarana Technologies in Montreal have this built into their standard process; agencies without genuine Quebec experience often underestimate the scope and get it wrong.
                  </p>
                </div>

                {/* Why Canada section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why Canada for App Development in 2026?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Canada offers a unique combination of advantages that make it one of the world&apos;s best destinations for mobile app development. Universities like Waterloo, UBC, and the University of Alberta produce top-tier engineering and AI talent. Edmonton&apos;s AI corridor, anchored by the Alberta Machine Intelligence Institute (Amii) and DeepMind&apos;s research lab, has positioned Western Canada as a global AI hub.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Toronto leads in fintech, Montreal in gaming and AI research, and Vancouver in AR/VR. This distributed tech ecosystem means you can find specialized expertise regardless of your industry. Combined with a favorable exchange rate for US clients, North American time zones, strong IP protections under CUSMA, and a multicultural talent pool, Canada is the smart choice for 2026.
                  </p>
                </div>

                {/* Conclusion */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Conclusion: Choosing Your Canadian App Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Canada&apos;s app development landscape is rich with talent from coast to coast. Whether you need an immersive AR experience from Vancouver, a compliant fintech platform from Toronto, a bilingual French/English app from Montreal, or a high-performance AI-native product from Edmonton, there&apos;s a Canadian agency that specializes in exactly that.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses seeking the most complete engineering partner, Codazz stands apart. Their Edmonton headquarters, 500+ product launches, and architecture-first approach make them the definitive choice for any company that refuses to compromise on code quality. Their global delivery model means you get Canadian standards of excellence with aggressive timelines.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    The best time to build your app was yesterday. The second-best time is today. Choose a partner that treats your code as the foundation of your business, not just a project to ship and forget.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Frequently Asked Questions
                  </h2>
                  {[
                    { q: 'How much does app development cost in Canada?', a: 'App development costs in Canada range from CAD $20,000 for a simple MVP to CAD $400,000+ for a complex enterprise platform. Mid-range apps typically cost CAD $60,000–$180,000. Edmonton and Calgary agencies often offer 20-30% lower rates than Toronto or Vancouver. US clients benefit from the CAD/USD exchange rate, reducing effective costs by another 25-30%.' },
                    { q: 'Which Canadian city has the best app developers?', a: 'It depends on your niche. Edmonton excels in AI-powered apps and offers the best cost-to-quality ratio nationally. Toronto leads in fintech and enterprise mobile. Vancouver is strong in gaming, AR/VR, and immersive experiences. Montreal specializes in gaming, AI research, and bilingual apps. For the best overall engineering talent with full-cycle capabilities, Edmonton-based Codazz serves clients nationwide.' },
                    { q: 'Can Canadian companies build apps for the US market?', a: 'Absolutely. Most top Canadian agencies serve US clients extensively. Shared time zones, cultural alignment, strong IP protections under CUSMA, and a favorable exchange rate (US clients pay roughly 25-30% less in USD terms) make Canadian agencies an excellent nearshore choice for American businesses seeking quality at competitive rates.' },
                    { q: 'What are the tax benefits of building an app in Canada?', a: 'Canada&apos;s SR&ED program offers 15-35% tax credits on qualifying R&D expenditures. Provincial programs like Alberta&apos;s AITF, Ontario&apos;s OITC, and BC&apos;s Interactive Digital Media Tax Credit provide additional incentives. These credits can significantly reduce your effective development costs, particularly for projects that involve genuine technological innovation.' },
                    { q: 'Do apps sold in Quebec need to be in French?', a: 'Yes. Quebec&apos;s Charter of the French Language (Bill 101, expanded by Bill 96) requires consumer-facing software to be available in French. This means genuine French Canadian (fr-CA) localization, not machine translation. App store listings, UI text, push notifications, onboarding flows, and support touchpoints all require professional French language treatment. Apps ignoring this requirement face legal risk and poor adoption in the Quebec market.' },
                  ].map((faq, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 16, padding: '24px 28px', marginBottom: 16,
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>{faq.q}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>

              </article>

              {/* SIDEBAR */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {companies.map(app => (
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s\(\)]+/g, '-').replace(/-$/, '')}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{app.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{app.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{app.category}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>Canadian Dev Rates</p>
                    {[
                      { label: 'Simple MVP', range: 'CAD $20K–$60K' },
                      { label: 'Standard App', range: 'CAD $60K–$180K' },
                      { label: 'Enterprise Platform', range: 'CAD $200K–$500K+' },
                      { label: 'AI-Native App', range: 'CAD $150K–$400K+' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '10px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#22c55e' }}>{item.range}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz from Edmonton, Canada. Has guided over 500+ bespoke product launches globally.
                    </p>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: 0 }}>{post.readTime} read</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#ffffff', marginBottom: 12,
                }}>Build Your App in Canada</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Canada&apos;s Best Engineering Team Is Ready.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  From Edmonton to the world, Codazz builds apps that scale. Architecture-first, engineered for growth, delivered on aggressive timelines. French/English bilingual available.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your App Project →
                </button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
