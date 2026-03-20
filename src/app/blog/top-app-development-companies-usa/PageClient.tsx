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
  { num: 1, name: 'Codazz', category: 'Cross-Platform', emoji: '📱', metric: '500+ Apps Launched Globally', accentColor: '#22c55e', bgColor: 'rgba(17,24,39,' },
  { num: 2, name: 'Mapletechlabs', category: 'AI-Powered', emoji: '🤖', metric: 'ML-driven native mobile apps', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'TML (Tech Media Labs)', category: 'Enterprise', emoji: '🏢', metric: 'White-label & B2B mobile platforms', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Townmedialabs', category: 'Consumer Apps', emoji: '🛒', metric: 'On-demand & marketplace apps', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Fueled', category: 'Consumer Apps', emoji: '🚀', metric: 'Award-winning consumer experiences', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'WillowTree', category: 'Enterprise Mobile', emoji: '🌳', metric: 'Fortune 500 mobile solutions', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Savvy Apps', category: 'Strategy-First', emoji: '🎯', metric: 'Research-driven development', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Rightpoint', category: 'Experience-Driven', emoji: '💡', metric: 'UX-centered mobile platforms', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Mutual Mobile', category: 'IoT & Mobile', emoji: '📡', metric: 'Connected device ecosystems', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Rocket Farm Studios', category: 'Rapid Prototyping', emoji: '🔬', metric: 'MVP to market in weeks', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'top-10-unicorn-apps-2026', title: 'Top 10 Unicorn Apps of 2026', category: 'Business', readTime: '8 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top 10 Software Development Companies in the USA', category: 'Business', readTime: '10 min' },
  { slug: 'top-seo-companies-usa', title: 'Top 10 SEO Companies in the USA (2026)', category: 'Digital Marketing', readTime: '9 min' },
];

export default function TopAppDevelopmentCompaniesUSAClient() {
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

        {/* -- FEATURED IMAGE -- */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=675&fit=crop"
              alt="Top app development companies in USA 2026"
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

        {/* -- ARTICLE HERO -- */}
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
              }}>App Development</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
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
              Top 10 App Development Companies in the USA (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A data-driven ranking of the best mobile app development companies in the USA for 2026 — from iOS and Android specialists to cross-platform powerhouses.
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

        {/* -- ARTICLE BODY + SIDEBAR -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    The mobile app economy is projected to generate over $935 billion in revenue by 2026. But here is the brutal truth: 80% of apps are abandoned within 90 days of download. The difference between an app that thrives and one that dies is the development team behind it.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Whether you need a native iOS masterpiece, a cross-platform Flutter build, or an enterprise-grade Android solution, choosing the wrong development partner can cost you six figures and a year of lost time.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated over 150 mobile app development studios across New York, San Francisco, Austin, Chicago, and beyond to deliver this definitive ranking of the <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Top 10 App Development Companies in the USA</strong> for 2026. These are not reskin factories. These are the teams building the apps that people actually use.
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
                        'Cross-platform frameworks (Flutter, React Native) now dominate, reducing dev costs by 40-60%.',
                        'Codazz leads the pack with 500+ apps shipped and consistent 5-star App Store ratings.',
                        'AI/ML integration is no longer a "nice-to-have" — it\'s a baseline expectation for competitive apps.',
                        'Enterprise mobile is booming: B2B apps now account for 35% of total app development spend.',
                        'The best studios own the full lifecycle — from UX research to post-launch ASO and analytics.',
                      ].map((item, i) => (
                        <li key={i} style={{
                          fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: i < 4 ? 12 : 0,
                        }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>2026 Comparison Table</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Rank', 'Company', 'Platform', 'Key Clients', 'Best For', 'Rating'].map(h => (
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
                          { rank: '#1', company: 'Codazz', platform: 'Flutter, React Native, iOS, Android', clients: 'Startups, Enterprise, SaaS', bestFor: 'Full-cycle cross-platform', rating: '4.9' },
                          { rank: '#2', company: 'Mapletechlabs', platform: 'Native iOS, Android, ML', clients: 'Fintech, Healthtech', bestFor: 'AI-powered mobile apps', rating: '4.8' },
                          { rank: '#3', company: 'TML', platform: 'iOS, Android, White-label', clients: 'B2B Enterprise', bestFor: 'Enterprise & white-label', rating: '4.8' },
                          { rank: '#4', company: 'Townmedialabs', platform: 'React Native, Flutter', clients: 'Consumer, Marketplaces', bestFor: 'Consumer & on-demand', rating: '4.7' },
                          { rank: '#5', company: 'Fueled', platform: 'iOS, Android, React Native', clients: 'Consumer Brands', bestFor: 'Award-winning consumer', rating: '4.7' },
                          { rank: '#6', company: 'WillowTree', platform: 'iOS, Android, Flutter', clients: 'Fortune 500', bestFor: 'Enterprise mobile', rating: '4.7' },
                          { rank: '#7', company: 'Savvy Apps', platform: 'iOS, Android', clients: 'Startups, Government', bestFor: 'Strategy-first builds', rating: '4.6' },
                          { rank: '#8', company: 'Rightpoint', platform: 'iOS, Android, Xamarin', clients: 'Healthcare, Finance', bestFor: 'Experience-driven UX', rating: '4.6' },
                          { rank: '#9', company: 'Mutual Mobile', platform: 'iOS, Android, IoT', clients: 'IoT, Automotive', bestFor: 'IoT & connected devices', rating: '4.5' },
                          { rank: '#10', company: 'Rocket Farm', platform: 'iOS, Android', clients: 'Startups, SMBs', bestFor: 'Rapid prototyping', rating: '4.5' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{row.rank}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.company}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.platform}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.clients}</td>
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
                      Our methodology is transparent and data-driven. We evaluated each company across five weighted criteria:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Portfolio Quality', weight: '30%', desc: 'Live apps, App Store ratings, design quality' },
                        { label: 'Technical Depth', weight: '25%', desc: 'Platform expertise, architecture, scalability' },
                        { label: 'Client Outcomes', weight: '20%', desc: 'Revenue impact, downloads, retention metrics' },
                        { label: 'Innovation', weight: '15%', desc: 'AI/ML, IoT, AR/VR, emerging tech adoption' },
                        { label: 'Process & Support', weight: '10%', desc: 'Communication, post-launch support, agile maturity' },
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

                {/* Company 1: Codazz (Featured) */}
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
                      }}>📱</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Cross-Platform</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Premium mobile app development studio. Codazz has launched over 500 apps globally across Flutter, React Native, native iOS, and native Android — and it shows. Their obsession with pixel-perfect design and performance optimization has earned them a reputation for consistent 5-star App Store ratings that few studios can match.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      What sets Codazz apart is their full-lifecycle approach. They don't just write code — they conduct deep UX research, architect scalable backends, implement CI/CD pipelines for rapid iteration, and handle App Store Optimization (ASO) post-launch. From a solo founder's MVP to an enterprise platform serving millions, Codazz treats every project like a product, not a contract.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      Their cross-platform expertise in Flutter and React Native means clients get native-quality apps on both iOS and Android at a fraction of the cost and timeline of building two separate codebases. This is engineering efficiency without compromise.
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
                        Key Metric: 500+ Apps Launched | 5-Star App Store Ratings | Flutter & React Native Leaders
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'mapletechlabs', name: 'Mapletechlabs', category: 'AI-Powered',
                    emoji: '🤖', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'ML-driven native mobile apps',
                    paragraphs: [
                      'Mapletechlabs is pioneering the intersection of artificial intelligence and mobile development. Their custom native apps come baked with machine learning features — from predictive analytics dashboards to intelligent recommendation engines — that give their clients a serious competitive edge.',
                      'Specialists in fintech, healthtech, and logistics apps, Mapletechlabs has built platforms that process millions of transactions and handle complex real-time data pipelines. If your app needs to be smart on day one, this is the team to call.',
                    ],
                  },
                  {
                    num: '03', id: 'tml', name: 'TML (Tech Media Labs)', category: 'Enterprise',
                    emoji: '🏢', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'White-label & B2B mobile platforms',
                    paragraphs: [
                      'TML (Tech Media Labs) dominates the enterprise mobile space with white-label app platforms, B2B mobile tools, and complex system integrations that connect mobile experiences to legacy infrastructure without missing a beat.',
                      'Their deep expertise in enterprise security, compliance, and multi-tenant architectures makes them the go-to partner for organizations that cannot afford downtime or data breaches. TML builds mobile at enterprise scale.',
                    ],
                  },
                  {
                    num: '04', id: 'townmedialabs', name: 'Townmedialabs', category: 'Consumer Apps',
                    emoji: '🛒', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'On-demand & marketplace apps',
                    paragraphs: [
                      'Townmedialabs is a consumer-focused app studio that thrives on building the apps people use every day. Social apps, on-demand service platforms, and marketplace mobile experiences are their bread and butter.',
                      'Their understanding of consumer psychology, viral loops, and retention mechanics means the apps they build don\'t just get downloaded — they get used. If you are building a consumer-facing product that needs to compete with the big names, Townmedialabs delivers.',
                    ],
                  },
                  {
                    num: '05', id: 'fueled', name: 'Fueled', category: 'Consumer Apps',
                    emoji: '🚀', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Award-winning consumer experiences',
                    paragraphs: [
                      'Based in New York City, Fueled has earned a reputation for designing and building beautiful, award-winning consumer apps. Their portfolio includes work for major brands and high-growth startups alike. Their design-forward philosophy means every interaction is crafted with intention.',
                      'Fueled excels at turning ambitious product visions into polished App Store realities. Their team of designers and engineers work in tight loops, ensuring that UX and engineering are never at odds.',
                    ],
                  },
                  {
                    num: '06', id: 'willowtree', name: 'WillowTree', category: 'Enterprise Mobile',
                    emoji: '🌳', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Fortune 500 mobile solutions',
                    paragraphs: [
                      'Based in Virginia, WillowTree is the enterprise mobile specialist. They have built apps for some of the largest companies in the world, including Fortune 500 brands that demand flawless performance, accessibility compliance, and airtight security.',
                      'Their strength lies in large-scale mobile transformations — migrating legacy systems to modern mobile platforms, building internal tools that thousands of employees rely on, and creating customer-facing apps that handle millions of daily active users.',
                    ],
                  },
                  {
                    num: '07', id: 'savvy-apps', name: 'Savvy Apps', category: 'Strategy-First',
                    emoji: '🎯', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Research-driven development',
                    paragraphs: [
                      'Washington DC-based Savvy Apps takes a strategy-first approach to mobile development. Before a single line of code is written, their team conducts deep market research, competitive analysis, and user testing to validate the product concept.',
                      'This research-driven methodology means fewer pivots, less wasted budget, and a higher probability of market success. They are particularly strong in government and civic-tech applications where user adoption can make or break a project.',
                    ],
                  },
                  {
                    num: '08', id: 'rightpoint', name: 'Rightpoint', category: 'Experience-Driven',
                    emoji: '💡', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'UX-centered mobile platforms',
                    paragraphs: [
                      'Chicago-based Rightpoint (a Genpact company) brings an experience-driven philosophy to mobile development. They believe that the best apps are not just functional — they are delightful. Their UX research teams work alongside developers to ensure every screen, animation, and micro-interaction serves a purpose.',
                      'Rightpoint is a strong choice for healthcare, financial services, and enterprise clients who need mobile apps that simplify complexity without sacrificing depth.',
                    ],
                  },
                  {
                    num: '09', id: 'mutual-mobile', name: 'Mutual Mobile', category: 'IoT & Mobile',
                    emoji: '📡', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Connected device ecosystems',
                    paragraphs: [
                      'Austin-based Mutual Mobile specializes in the intersection of IoT and mobile. When your app needs to communicate with hardware — smart home devices, wearables, industrial sensors, or connected vehicles — Mutual Mobile is the team with the deepest expertise.',
                      'Their work in automotive, smart home, and industrial IoT has positioned them as the premier choice for companies building connected ecosystems where the mobile app is the command center.',
                    ],
                  },
                  {
                    num: '10', id: 'rocket-farm', name: 'Rocket Farm Studios', category: 'Rapid Prototyping',
                    emoji: '🔬', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'MVP to market in weeks',
                    paragraphs: [
                      'San Francisco-based Rocket Farm Studios is the rapid prototyping expert. When you have a concept that needs to get to market fast — whether for investor demos, beta testing, or first-mover advantage — Rocket Farm delivers functional MVPs in weeks, not months.',
                      'Their lean process strips away unnecessary overhead and focuses on shipping the core experience. Once validated, they scale the codebase into a production-ready application. Speed without sacrificing quality is their defining trait.',
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

              </article>

              {/* -- SIDEBAR -- */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {/* Table of Contents */}
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

                  {/* Author card */}
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
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

        {/* -- BOTTOM CTA -- */}
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
                }}>Build Your App</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Your App Idea Deserves Better Than a Template.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop burning budget on agencies that ship mediocre code. Let Codazz engineer a mobile experience that users actually love — and investors actually fund.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get a Free App Consultation →
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
