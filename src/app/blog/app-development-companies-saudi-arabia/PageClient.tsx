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
  { num: 1, name: 'Codazz', category: 'Full-Stack Apps', emoji: '🏗️', metric: 'Gulf Presence + Global Dev Centers, 500+ Launches' },
  { num: 2, name: 'Elm Company', category: 'GovTech', emoji: '🏛️', metric: 'Saudi Government Digital Services Leader' },
  { num: 3, name: 'SDAIA Partners', category: 'AI & Data', emoji: '🤖', metric: 'Aligned with Saudi Data & AI Authority' },
  { num: 4, name: 'Lucidya', category: 'SaaS', emoji: '📊', metric: 'Riyadh-Born AI Analytics Platform' },
  { num: 5, name: 'Jeeny (formerly Easy Taxi)', category: 'Super App', emoji: '🚗', metric: 'Saudi-Built Ride-Hailing Platform' },
  { num: 6, name: 'Mozn', category: 'AI Solutions', emoji: '🧠', metric: 'Saudi AI Compliance & Analytics' },
  { num: 7, name: 'Unifonic', category: 'CommTech', emoji: '💬', metric: 'Riyadh-Based Communication Platform' },
  { num: 8, name: 'Lean Technologies', category: 'Open Banking', emoji: '🏦', metric: 'SAMA-Licensed Open Banking' },
  { num: 9, name: 'Tamara', category: 'Fintech', emoji: '💳', metric: 'Saudi BNPL Unicorn' },
  { num: 10, name: 'Foodics', category: 'Restaurant Tech', emoji: '🍽️', metric: 'Riyadh-Based F&B SaaS Platform' },
];

const relatedPosts = [
  { slug: 'app-development-companies-dubai', title: 'Top 10 App Development Companies in Dubai (2026)', category: 'Mobile', readTime: '12 min' },
  { slug: 'app-development-cost-dubai', title: 'How Much Does App Development Cost in Dubai? (2026)', category: 'Business', readTime: '10 min' },
  { slug: 'software-development-companies-dubai', title: 'Top Software Development Companies in Dubai (2026)', category: 'Engineering', readTime: '10 min' },
];

const faqs = [
  { q: 'How much does app development cost in Saudi Arabia?', a: 'App development in Saudi Arabia ranges from SAR 75,000 for a simple MVP to SAR 2,000,000+ for complex enterprise platforms. Vision 2030 projects and government apps typically fall in the SAR 500,000-1,500,000 range due to strict compliance and security requirements.' },
  { q: 'Which is the best app development company in Saudi Arabia?', a: 'Codazz leads the ranking for businesses seeking world-class engineering with Gulf market expertise. For government-specific projects, Elm Company is the established leader. The best choice depends on your project type, budget, and whether you need a local-only or hybrid delivery model.' },
  { q: 'Do I need a Saudi office to build apps for the KSA market?', a: 'Not necessarily. You need a partner who understands Saudi regulations (SAMA, CITC, NCA), Arabic-first UX, and local payment systems. Codazz serves Saudi clients through their Gulf presence with engineering delivered from global centers, providing the compliance expertise without the full local overhead.' },
  { q: 'What are the regulatory requirements for apps in Saudi Arabia?', a: 'Key requirements include CITC (Communications and IT Commission) compliance, SAMA regulations for fintech apps, NCA (National Cybersecurity Authority) security standards, Saudi data localization requirements, and Sharia compliance for financial products. Arabic language support is mandatory for consumer apps.' },
  { q: 'How does Vision 2030 impact app development in Saudi Arabia?', a: 'Vision 2030 has created massive demand for digital solutions across healthcare (Seha), education (Madrasati), fintech, entertainment, tourism (AlUla, Red Sea), and smart city (NEOM) applications. The Saudi government has invested over $6.4 billion in digital transformation, creating opportunities for app developers at an unprecedented scale.' },
];

export default function AppDevelopmentCompaniesSaudiArabiaClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              src="/blog_images/app-development-companies-saudi-arabia.jpg"
              alt="Top app development companies in Saudi Arabia"
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

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Mobile</span>
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
                12 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 App Development Companies in Saudi Arabia (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Saudi Arabia&apos;s Vision 2030 has ignited the largest digital transformation in the Middle East. With $6.4 billion invested in digital infrastructure, NEOM rising from the desert, and a young population demanding world-class mobile experiences, the Kingdom is the Gulf&apos;s most exciting app development market. These are the top 10 companies building its digital future.
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
                    Saudi Arabia is undergoing the most ambitious national digital transformation on the planet. Vision 2030, Crown Prince Mohammed bin Salman&apos;s sweeping economic diversification plan, has positioned technology as the backbone of the Kingdom&apos;s post-oil future. The Saudi app economy is exploding&mdash;with over 35 million smartphone users, 98% internet penetration among youth, and government mandates to digitize everything from healthcare to entertainment.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    From NEOM&apos;s smart city ambitions to Riyadh&apos;s bid to become the Middle East&apos;s Silicon Valley, the demand for world-class app development has never been higher. We ranked these companies based on their engineering capability, Vision 2030 alignment, Saudi market expertise, and track record of delivering scalable mobile products for the Kingdom.
                  </p>
                </div>

                {/* Vision 2030 Context */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    padding: '28px 32px', borderRadius: 20,
                    background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)',
                  }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#34d399', marginBottom: 16 }}>
                      Vision 2030: The Driving Force Behind Saudi App Development
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'NEOM ($500B)', desc: 'The world\'s most ambitious smart city project' },
                        { label: 'SDAIA', desc: 'Saudi Data & AI Authority driving AI-first government' },
                        { label: '$6.4B Digital Fund', desc: 'Massive investment in digital infrastructure' },
                        { label: '35M+ Smartphones', desc: 'Young, tech-savvy population demanding apps' },
                        { label: 'Saudization', desc: 'Mandating local tech talent and partnerships' },
                        { label: 'Fintech Revolution', desc: 'SAMA open banking driving financial innovation' },
                      ].map(item => (
                        <div key={item.label} style={{ padding: '14px 16px', borderRadius: 12, background: 'rgba(52,211,153,0.06)' }}>
                          <p style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{item.label}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
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
                      }}>🏗️</div>
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
                      Codazz takes the number one position for Saudi Arabia-focused app development thanks to their unique ability to combine Gulf market expertise with world-class engineering at scale. With a dedicated presence serving the Gulf region and engineering powerhouses in India and Canada, they deliver exactly what Vision 2030 demands: cutting-edge technology with deep cultural understanding.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz has delivered Arabic-first mobile applications for Saudi fintech startups, e-commerce platforms compliant with SAMA regulations, healthcare apps aligned with Seha Digital Health standards, and AI-powered enterprise solutions. Their engineering teams are experts in building for the Saudi market&mdash;full RTL support, Arabic-first UX, Mada and SADAD payment integration, Absher and Nafath authentication, and compliance with NCA cybersecurity frameworks.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      For Saudi businesses and government entities looking for a partner that can deliver NEOM-grade engineering without the budget of a Big Four consultancy, Codazz is the definitive choice. Their 500+ product launches globally include significant Gulf-region deployments across fintech, logistics, healthcare, and e-government verticals.
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
                        Gulf Presence &bull; 500+ Launches &bull; Vision 2030 Aligned &bull; SAMA Compliant
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company 2: Elm */}
                <div className="reveal" style={{ marginBottom: 56 }} id="elm-company">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🏛️</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>02</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(96,165,250,0.12)', color: '#60a5fa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>GovTech</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Elm Company</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Elm is the undisputed leader in Saudi government digital services. A PIF (Public Investment Fund) portfolio company, Elm has built the digital backbone of Saudi Arabia&mdash;from Absher (the national services platform used by millions) to Muqeem (immigration management) and Masarat (career guidance). They are the trusted technology partner of the Saudi government.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      For government and semi-government projects in KSA, Elm is often the default choice due to their security clearances, sovereign data handling capabilities, and deep integration with national infrastructure. However, they primarily serve government clients and may not be the best fit for private sector startups.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#60a5fa', fontWeight: 600 }}>
                        PIF Portfolio &bull; Absher &bull; Government Digital Services Leader
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company 3: SDAIA Partners */}
                <div className="reveal" style={{ marginBottom: 56 }} id="sdaia-partners">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🤖</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>03</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(251,191,36,0.12)', color: '#fbbf24',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>AI & Data</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>SDAIA Partners</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      The Saudi Data and Artificial Intelligence Authority (SDAIA) has cultivated an ecosystem of technology partners building AI-first applications for the Kingdom. Their partner network includes companies that built Tawakkalna (the national health app used during COVID and now expanded into a comprehensive digital identity platform) and other AI-powered government services.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      For projects requiring deep AI integration, machine learning, computer vision, or natural language processing in Arabic, SDAIA-aligned partners have unmatched capabilities in the Saudi market. They set the standard for responsible AI deployment in the Kingdom.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#fbbf24', fontWeight: 600 }}>
                        AI-First &bull; Tawakkalna &bull; National Data Strategy
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 4-10: Condensed */}
                {[
                  {
                    num: '04', id: 'lucidya', name: 'Lucidya', category: 'SaaS',
                    emoji: '📊', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Riyadh-Born AI Analytics Platform',
                    paragraphs: [
                      'Lucidya is a Riyadh-born SaaS success story, building AI-powered social listening and customer experience analytics specifically designed for Arabic-speaking markets. Their platform processes millions of Arabic social media posts and customer interactions daily, providing insights that Western analytics tools simply cannot match for the GCC market.',
                    ],
                  },
                  {
                    num: '05', id: 'jeeny', name: 'Jeeny', category: 'Super App',
                    emoji: '🚗', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Saudi-Built Ride-Hailing Platform',
                    paragraphs: [
                      'Formerly Easy Taxi, Jeeny is a Saudi-built ride-hailing super app that has expanded into delivery and payments. Their engineering team has built one of the most complex real-time mobile platforms in the Kingdom, handling millions of rides across Saudi Arabia and Jordan. A testament to what Saudi tech talent can achieve.',
                    ],
                  },
                  {
                    num: '06', id: 'mozn', name: 'Mozn', category: 'AI Solutions',
                    emoji: '🧠', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Saudi AI Compliance & Analytics',
                    paragraphs: [
                      'Mozn builds AI-powered compliance and risk management solutions for Saudi banks and financial institutions. Their FOCAL platform is used by major Saudi banks for AML (Anti-Money Laundering) compliance, making them the leading AI company in the Kingdom\'s rapidly evolving fintech regulatory landscape.',
                    ],
                  },
                  {
                    num: '07', id: 'unifonic', name: 'Unifonic', category: 'CommTech',
                    emoji: '💬', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Riyadh-Based Communication Platform',
                    paragraphs: [
                      'Unifonic is a Riyadh-based cloud communication platform that enables businesses across KSA to engage customers through SMS, WhatsApp, voice, and chatbots. Their APIs power communications for thousands of Saudi businesses, from banking notifications to e-commerce order updates.',
                    ],
                  },
                  {
                    num: '08', id: 'lean-technologies', name: 'Lean Technologies', category: 'Open Banking',
                    emoji: '🏦', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'SAMA-Licensed Open Banking',
                    paragraphs: [
                      'Lean Technologies is a SAMA-licensed open banking platform enabling fintech innovation across Saudi Arabia. Their APIs connect to Saudi banks, allowing developers to build financial applications with account aggregation, payment initiation, and identity verification. They are essential infrastructure for the Saudi fintech ecosystem.',
                    ],
                  },
                  {
                    num: '09', id: 'tamara', name: 'Tamara', category: 'Fintech',
                    emoji: '💳', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Saudi BNPL Unicorn',
                    paragraphs: [
                      'Tamara is Saudi Arabia\'s first fintech unicorn, building a buy-now-pay-later platform that has transformed retail payments across the Kingdom. Their engineering team has built a Sharia-compliant BNPL platform processing billions of SAR in transactions, integrated with thousands of Saudi merchants. A showcase of Saudi engineering excellence.',
                    ],
                  },
                  {
                    num: '10', id: 'foodics', name: 'Foodics', category: 'Restaurant Tech',
                    emoji: '🍽️', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Riyadh-Based F&B SaaS Platform',
                    paragraphs: [
                      'Foodics has built the leading restaurant technology platform in the Middle East, powering over 40,000 restaurants across Saudi Arabia and the GCC. Their cloud-based POS, inventory management, and analytics platform is purpose-built for the Gulf\'s booming food and beverage industry. A true Saudi tech success story.',
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

                {/* Conclusion */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Choosing Your Saudi App Development Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Saudi Arabia&apos;s app development landscape is unlike any other market. Vision 2030 has created unprecedented demand, but the regulatory environment&mdash;SAMA for fintech, NCA for cybersecurity, CITC for telecom, and SDAIA for data&mdash;requires partners with deep local knowledge. Arabic-first UX is not optional; it is mandatory.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses seeking a partner that combines Vision 2030 understanding with Silicon Valley engineering standards, Codazz delivers an unmatched value proposition. Their hybrid model&mdash;Gulf presence for strategy and compliance, global engineering for development&mdash;gives Saudi businesses premium products at 40-60% lower cost than Big Four consultancies.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    Whether you are a Riyadh-based startup riding the SAMA open banking wave, a government entity building smart city infrastructure for NEOM, or an enterprise pursuing digital transformation under Vision 2030, the companies on this list represent the finest app development talent serving the Kingdom in 2026.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 32,
                  }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, overflow: 'hidden',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px', background: 'none', border: 'none',
                            color: '#ffffff', fontSize: 16, fontWeight: 600, textAlign: 'left',
                            cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', gap: 16,
                          }}
                        >
                          {faq.q}
                          <span style={{
                            fontSize: 20, color: 'rgba(255,255,255,0.3)', flexShrink: 0,
                            transform: openFaq === i ? 'rotate(45deg)' : 'none',
                            transition: 'transform 0.2s',
                          }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
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
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s()]+/g, '-')}`} style={{
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally, with significant Gulf and Saudi deployments.
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
                }}>Build for Vision 2030</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to build for Saudi Arabia?<br />Let&apos;s talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Codazz delivers world-class mobile applications for the Saudi market. Vision 2030 aligned, SAMA compliant, Arabic-first. Get a free consultation today.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your Saudi Project →
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
