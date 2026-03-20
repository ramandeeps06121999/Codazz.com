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
  { num: 1, name: 'Codazz', category: 'Full-Stack Apps', emoji: '🍁', metric: 'Native, Cross-Platform & Enterprise App Development', accentColor: '#22c55e', bgColor: 'rgba(17,24,39,' },
  { num: 2, name: 'Grubhub', category: 'Marketplace Apps', emoji: '🍔', metric: 'Chicago-born food delivery, 33M+ users', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Avant', category: 'FinTech', emoji: '💰', metric: 'AI-driven consumer lending platform', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Tempus', category: 'HealthTech AI', emoji: '🧬', metric: 'AI-powered precision medicine platform', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'ActiveCampaign', category: 'MarTech', emoji: '📧', metric: 'Marketing automation for 180K+ businesses', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'project44', category: 'Supply Chain', emoji: '📦', metric: 'Real-time supply chain visibility platform', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Uptake', category: 'Industrial IoT', emoji: '⚙️', metric: 'Predictive analytics for industrial assets', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Relativity', category: 'LegalTech', emoji: '⚖️', metric: 'E-discovery & legal analytics platform', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Halo Investing', category: 'WealthTech', emoji: '📊', metric: 'Structured notes & protective investing', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'SpotHero', category: 'Mobility Tech', emoji: '🅿️', metric: 'Smart parking marketplace platform', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026)', category: 'Business', readTime: '8 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top 10 Software Development Companies in the USA (2026)', category: 'Engineering', readTime: '10 min' },
];

const faqs = [
  {
    q: 'How much does app development cost in Chicago?',
    a: 'App development in Chicago typically ranges from $35,000 for a basic MVP to $350,000+ for enterprise-grade applications. Chicago offers a significant cost advantage over San Francisco and New York while providing access to strong engineering talent, particularly in fintech, logistics, and enterprise SaaS domains.',
  },
  {
    q: 'Why is Chicago a strong city for app development?',
    a: 'Chicago is America\'s fintech capital, home to the CME Group, major banks, and a thriving ecosystem of financial technology startups. The city also leads in logistics tech (given its status as the nation\'s transportation hub), enterprise SaaS, and healthtech. Northwestern, University of Chicago, and Illinois Tech provide a steady pipeline of engineering talent.',
  },
  {
    q: 'What industries do Chicago app developers specialize in?',
    a: 'Chicago developers excel in fintech and financial services, supply chain and logistics, enterprise SaaS, healthtech and precision medicine, marketing automation, legal technology, and industrial IoT. The city\'s deep ties to traditional industries like commodities trading, insurance, and manufacturing create unique domain expertise.',
  },
  {
    q: 'How does Chicago compare to San Francisco for app development?',
    a: 'Chicago offers 30-40% lower development costs compared to San Francisco while providing strong domain expertise in fintech, logistics, and enterprise software. SF has an edge in consumer apps and AI research, but Chicago\'s enterprise focus, Midwest work ethic, and lower cost of living make it an excellent choice for B2B and fintech applications.',
  },
  {
    q: 'What is the tech talent market like in Chicago?',
    a: 'Chicago has one of America\'s strongest tech talent markets, with over 300,000 tech workers. Northwestern, UChicago, UIUC, and Illinois Tech produce top-tier computer science graduates. The city\'s lower cost of living compared to coastal cities helps retain talent, and major tech employers like Google, Salesforce, and Meta all have significant Chicago offices.',
  },
];

export default function TopAppDevelopmentCompaniesChicagoClient() {
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
              src="/blog_images/top-app-development-companies-chicago.jpg"
              alt="Top app development companies in Chicago"
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
                10 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 App Development Companies in Chicago (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Chicago is America&apos;s fintech capital and a powerhouse in logistics, enterprise SaaS, and healthtech. The Windy City&apos;s pragmatic engineering culture produces apps that solve real business problems at massive scale. Here are the top 10 companies leading Chicago&apos;s app development scene.
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
                  { label: 'Twitter', icon: '\u{1d54f}' },
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
                    Chicago has long been America&apos;s second city for business, and in 2026, it&apos;s rapidly becoming one of the nation&apos;s most important technology hubs. The city&apos;s deep roots in finance, commodities trading, logistics, and manufacturing have created a tech ecosystem that excels at building enterprise-grade applications that solve complex, real-world business problems.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    With the CME Group, major banks, and trading firms providing a constant demand for financial technology, and the city&apos;s position as America&apos;s transportation hub driving logistics innovation, Chicago developers have built domain expertise that Silicon Valley companies often lack. The result is a pragmatic, results-oriented engineering culture that prioritizes reliability, performance, and measurable business outcomes.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated the most impactful app development companies in the Chicago market to compile this ranking of the <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Top 10 App Development Companies in Chicago</strong> for 2026.
                  </p>
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
                      Codazz leads the Chicago app development market with a powerful combination of enterprise-grade engineering and startup-speed execution. With over 500+ successful product launches globally, their teams have deep experience building the kinds of complex, data-heavy applications that Chicago businesses demand: fintech platforms, logistics dashboards, and enterprise SaaS products.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Their engineering teams specialize in React Native, Flutter, and native iOS/Android development, backed by robust backend architectures built on Node.js, Python, and Go. For Chicago&apos;s financial services companies, Codazz brings critical expertise in PCI compliance, real-time data processing, and secure API architectures that handle millions of transactions per day.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      For enterprises, fintech startups, and logistics companies looking to build mission-critical mobile applications, Codazz is the premier engineering partner in the Chicago market.
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
                        Key Metric: 500+ Product Launches | FinTech & Enterprise Expertise
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'grubhub', name: 'Grubhub', category: 'Marketplace Apps',
                    emoji: '🍔', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Chicago-born food delivery, 33M+ users',
                    paragraphs: [
                      'Grubhub was born in Chicago and grew into one of America\'s largest food delivery platforms with over 33 million active users. Their engineering team solved some of the hardest problems in real-time marketplace technology: matching delivery drivers with orders, optimizing routes across complex urban grids, and processing thousands of concurrent transactions during peak dinner hours.',
                      'Grubhub\'s Chicago engineering legacy has spawned dozens of talented engineers who now lead development teams across the city\'s startup ecosystem, making it a foundational company in Chicago\'s app development story.',
                    ],
                  },
                  {
                    num: '03', id: 'avant', name: 'Avant', category: 'FinTech',
                    emoji: '💰', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'AI-driven consumer lending platform',
                    paragraphs: [
                      'Avant represents Chicago\'s strength in fintech with its AI-driven consumer lending platform that has originated over $8 billion in loans. Their mobile engineering team has built sophisticated credit decisioning systems, identity verification flows, and real-time loan management interfaces that process sensitive financial data with bank-level security.',
                      'For anyone building a fintech app in Chicago, Avant\'s engineering practices set the standard for what\'s possible in regulated financial technology.',
                    ],
                  },
                  {
                    num: '04', id: 'tempus', name: 'Tempus', category: 'HealthTech AI',
                    emoji: '🧬', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'AI-powered precision medicine platform',
                    paragraphs: [
                      'Founded by Groupon co-founder Eric Lefkofsky, Tempus is one of Chicago\'s most ambitious tech companies. Their platform uses AI and machine learning to analyze clinical and molecular data, helping physicians make more informed treatment decisions for cancer patients. Their mobile apps deliver complex genomic data in accessible, actionable formats to doctors at the point of care.',
                    ],
                  },
                  {
                    num: '05', id: 'activecampaign', name: 'ActiveCampaign', category: 'MarTech',
                    emoji: '📧', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Marketing automation for 180K+ businesses',
                    paragraphs: [
                      'ActiveCampaign has grown from a Chicago startup to a marketing automation powerhouse serving over 180,000 businesses globally. Their mobile app engineering enables business owners to manage email campaigns, CRM pipelines, and customer automations from anywhere. Their engineering team excels at building responsive, data-rich mobile interfaces that simplify complex marketing workflows.',
                    ],
                  },
                  {
                    num: '06', id: 'project44', name: 'project44', category: 'Supply Chain',
                    emoji: '📦', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Real-time supply chain visibility platform',
                    paragraphs: [
                      'project44 leverages Chicago\'s position as America\'s transportation hub to build the leading supply chain visibility platform. Their mobile applications provide real-time tracking of shipments across ocean, air, rail, and truck, processing data from over 175,000 carriers. Their engineering team handles the extraordinary complexity of integrating with legacy logistics systems while delivering a modern, real-time mobile experience.',
                    ],
                  },
                  {
                    num: '07', id: 'uptake', name: 'Uptake', category: 'Industrial IoT',
                    emoji: '⚙️', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Predictive analytics for industrial assets',
                    paragraphs: [
                      'Uptake builds predictive analytics software for industrial assets, connecting Chicago\'s manufacturing heritage with cutting-edge AI. Their mobile apps allow field engineers to monitor equipment health, predict failures, and schedule maintenance from their phones, reducing downtime for major industrial operations. A perfect example of Chicago\'s ability to bring AI to traditional industries.',
                    ],
                  },
                  {
                    num: '08', id: 'relativity', name: 'Relativity', category: 'LegalTech',
                    emoji: '⚖️', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'E-discovery & legal analytics platform',
                    paragraphs: [
                      'Relativity is Chicago\'s legal technology giant, providing e-discovery software used by major law firms and corporations worldwide. Their mobile applications allow legal teams to review documents, manage cases, and collaborate on litigation strategies from anywhere. Their engineering team processes petabytes of legal data while maintaining the strict security and compliance standards the legal industry demands.',
                    ],
                  },
                  {
                    num: '09', id: 'halo-investing', name: 'Halo Investing', category: 'WealthTech',
                    emoji: '📊', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Structured notes & protective investing',
                    paragraphs: [
                      'Halo Investing has built a sophisticated wealth technology platform that brings structured notes and protective investing strategies to a broader audience. Their mobile app engineering combines complex financial modeling with clean, intuitive interfaces that make sophisticated investment products accessible to everyday investors. A standout example of Chicago fintech innovation.',
                    ],
                  },
                  {
                    num: '10', id: 'spothero', name: 'SpotHero', category: 'Mobility Tech',
                    emoji: '🅿️', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Smart parking marketplace platform',
                    paragraphs: [
                      'SpotHero turned the pain of parking in Chicago into a seamless mobile experience. Their app connects drivers with available parking spots across major US cities, handling real-time inventory management, dynamic pricing, and mobile payments. Their engineering team has solved complex geolocation and mapping challenges that make urban mobility smoother for millions of drivers.',
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

                {/* Why Chicago section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why Chicago for App Development?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Chicago&apos;s app development ecosystem is built on decades of financial services, logistics, and enterprise software expertise. The city is home to the CME Group (the world&apos;s largest derivatives exchange), major insurance companies, and a thriving ecosystem of fintech startups that have collectively raised billions in venture funding.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    As America&apos;s rail and air transportation hub, Chicago has also become the epicenter of logistics technology. Companies like project44, FourKites, and Echo Global Logistics have built their platforms here, creating a deep talent pool of engineers experienced in real-time tracking, supply chain optimization, and industrial IoT.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    The cost advantages are significant too. Chicago developers command 30-40% lower rates than their Bay Area counterparts while offering comparable technical skills, particularly in enterprise and fintech domains. Combined with a strong quality of life that helps attract and retain talent, Chicago is an increasingly compelling choice for companies building serious business applications.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, overflow: 'hidden',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px', border: 'none', background: 'transparent',
                            color: '#ffffff', fontSize: 16, fontWeight: 600, textAlign: 'left',
                            cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          }}
                        >
                          {faq.q}
                          <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Conclusion: Choosing Your Chicago Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Chicago&apos;s app development ecosystem is purpose-built for enterprise excellence. The companies on this list represent the best of Midwest engineering: pragmatic, reliable, and laser-focused on delivering business results.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For fintech companies, logistics firms, and enterprises looking to build mission-critical applications, Codazz leads this list by combining deep enterprise expertise with the agility and modern tech stacks that Chicago&apos;s fastest-growing companies demand.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    When choosing your Chicago development partner, look for teams that understand regulated industries, can handle complex data architectures, and deliver with the reliability that enterprise clients require.
                  </p>
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
                }}>Build Your App in Chicago</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Enterprise-Grade Apps. Midwest Reliability.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Build mission-critical applications with the engineering rigor Chicago businesses demand. Codazz delivers fintech, logistics, and enterprise apps that scale.
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
