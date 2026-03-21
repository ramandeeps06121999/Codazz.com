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
  { num: 1, name: 'Codazz', category: 'Full-Cycle Apps', emoji: '📱', metric: 'Saudi & GCC App Projects | Arabic Localization Specialists', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'STC Pay Tech', category: 'Fintech Apps', emoji: '💳', metric: 'Largest fintech app ecosystem in Saudi Arabia', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Elm Company', category: 'Gov Tech', emoji: '🏛️', metric: 'Government digital services for Saudi ministries', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 4, name: 'Solutions by STC', category: 'Enterprise Apps', emoji: '🏢', metric: 'B2B enterprise platforms for Saudi corporations', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 5, name: 'Codelab Arabia', category: 'Consumer Apps', emoji: '🛒', metric: 'Consumer & marketplace apps for Saudi market', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 6, name: 'IntelliSoft KSA', category: 'Enterprise Mobile', emoji: '⚙️', metric: 'Custom enterprise mobile for Saudi conglomerates', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 7, name: 'Appitizers', category: 'Startup Apps', emoji: '🚀', metric: 'MVP and startup app launches in Riyadh', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 8, name: 'Digitech Arabia', category: 'E-Commerce Apps', emoji: '🛍️', metric: 'Arabic e-commerce and marketplace applications', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 9, name: 'Webdew KSA', category: 'Cross-Platform', emoji: '🌐', metric: 'Cross-platform apps for Saudi SMBs', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 10, name: 'Alef Digital', category: 'EdTech Apps', emoji: '📚', metric: 'Education technology apps aligned with Vision 2030', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'app-development-companies-saudi-arabia', title: 'Top App Development Companies in Saudi Arabia', category: 'Geo Guide', readTime: '9 min' },
  { slug: 'top-ai-development-companies-dubai', title: 'Top AI Development Companies in Dubai & UAE', category: 'Geo Guide', readTime: '12 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Costs', readTime: '10 min' },
];

const faqItems = [
  {
    q: 'How big is the app development market in Saudi Arabia?',
    a: "Saudi Arabia's digital economy is expanding rapidly under Vision 2030. The Kingdom's mobile app market is projected to grow at 15%+ annually through 2030, driven by government digital transformation initiatives, NEOM smart city infrastructure, and a young, mobile-first population of 36 million. Riyadh is the commercial hub and home to the majority of Saudi Arabia's tech investment.",
  },
  {
    q: 'Do app development companies in Riyadh support Arabic localization?',
    a: "Arabic localization is non-negotiable for the Saudi market. This includes right-to-left (RTL) UI layouts, Arabic font rendering, Hijri calendar support, and culturally appropriate design. The best companies — including Codazz — have deep Arabic localization experience and understand that a direct English-to-Arabic translation is never sufficient for a product that will resonate with Saudi users.",
  },
  {
    q: 'What does app development cost in Saudi Arabia vs. international partners?',
    a: 'Local Riyadh app development studios typically charge SAR 200–450 per hour ($53–$120). International partners like Codazz deliver equivalent or superior quality at $40–$90/hr, with project-based pricing also available. For a full-featured app, expect SAR 150,000–600,000 ($40,000–$160,000) depending on complexity and platform requirements.',
  },
  {
    q: 'What are the top app categories in demand in Saudi Arabia?',
    a: "E-commerce and delivery apps (Saudi e-commerce grew 25% in 2025), fintech and digital payments (driven by Vision 2030's cashless economy target), government services apps (Absher, Tawakkalna model), real estate apps for NEOM and giga-projects, and education technology apps aligned with the national curriculum digitization program.",
  },
  {
    q: 'Do NEOM project apps need special development considerations?',
    a: "NEOM and associated giga-projects (The Line, Trojena, Sindalah) are building entirely new smart city infrastructure, which means app development for NEOM-adjacent services requires deep integration with IoT systems, smart city APIs, and sustainability-focused data platforms. Companies working on NEOM-related digital products also need to satisfy Saudi national data residency requirements.",
  },
];

export default function AppDevelopmentCompaniesRiyadhClient() {
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

        {/* -- FEATURED IMAGE -- */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/app-development-companies-riyadh.jpg"
              alt="Top app development companies in Riyadh and Saudi Arabia 2026"
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
                background: 'rgba(34,197,94,0.12)', color: '#22c55e',
                padding: '5px 14px', borderRadius: 100,
              }}>App Development</span>
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
              Top App Development Companies in Riyadh &amp; Saudi Arabia (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A definitive ranking of the best mobile app development companies serving Riyadh and the Saudi Arabian market in 2026 — covering Vision 2030 tech initiatives, NEOM opportunities, Arabic localization, and cost benchmarks.
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
                  { label: 'Twitter', icon: '𝕏' },
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Saudi Arabia is undergoing the most ambitious digital transformation in its history. Vision 2030 — the Kingdom&apos;s economic reform blueprint — has committed hundreds of billions of dollars to technology infrastructure, smart cities, and digital services. At the center of this transformation is Riyadh, which is rapidly maturing from a regional financial center into one of the Middle East&apos;s most consequential technology hubs.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    For app developers, Saudi Arabia represents one of the highest-potential emerging markets on the planet. A population of 36 million — 70% under the age of 35 — combined with one of the world&apos;s highest smartphone penetration rates and a government actively incentivizing digital adoption creates extraordinary demand for well-built mobile applications.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    But building for Saudi Arabia is not the same as building for Western markets. Arabic localization, RTL UI design, Hijri calendar integration, and compliance with Saudi data localization laws are all non-negotiable requirements. We evaluated 70+ companies to identify the best app development partners for businesses targeting Riyadh and the broader Saudi market.
                  </p>
                </div>

                {/* Saudi Tech Market Stats */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Saudi Arabia Tech Market: The Numbers</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { stat: '$500B+', label: 'Saudi Vision 2030 total investment commitment' },
                      { stat: '96%', label: 'Saudi smartphone penetration rate (2026)' },
                      { stat: '15%', label: 'Annual growth of Saudi mobile app market' },
                      { stat: '$5.2B', label: 'NEOM giga-project tech budget allocation' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: 24, borderRadius: 16,
                        background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                        textAlign: 'center',
                      }}>
                        <div style={{ fontSize: 28, fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>{item.stat}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{item.label}</div>
                      </div>
                    ))}
                  </div>
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
                        'Codazz ranks #1 for Arabic localization expertise combined with modern cross-platform development and verified Saudi/GCC project experience.',
                        'Vision 2030 is the single biggest driver of app demand — from government digital services to private sector modernization across all industries.',
                        'NEOM and other giga-projects are creating an entirely new category of smart city app development that requires specialized IoT and data integration skills.',
                        'Arabic RTL design, Hijri calendar support, and Saudi data residency compliance are mandatory — not optional — for any app targeting the Saudi market.',
                        'International app studios with Arabic localization experience consistently outperform local studios on technical depth, timeline, and cost for complex products.',
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
                          {['Rank', 'Company', 'Specialty', 'Key Clients', 'Best For', 'Rating'].map(h => (
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
                          { rank: '#1', company: 'Codazz', specialty: 'Flutter, RN, Native iOS/Android', clients: 'Startups, Enterprise, GCC', bestFor: 'Full-cycle Arabic-first apps', rating: '4.9' },
                          { rank: '#2', company: 'STC Pay Tech', specialty: 'Fintech, Payments, Wallets', clients: 'STC Group, Saudi banks', bestFor: 'Saudi fintech & payments', rating: '4.8' },
                          { rank: '#3', company: 'Elm Company', specialty: 'Gov Digital Services', clients: 'Saudi ministries', bestFor: 'Government & public sector apps', rating: '4.8' },
                          { rank: '#4', company: 'Solutions by STC', specialty: 'Enterprise B2B Platforms', clients: 'Saudi corporates', bestFor: 'Enterprise mobile platforms', rating: '4.7' },
                          { rank: '#5', company: 'Codelab Arabia', specialty: 'Consumer, Marketplace Apps', clients: 'Retail, E-commerce', bestFor: 'Consumer-facing Saudi apps', rating: '4.7' },
                          { rank: '#6', company: 'IntelliSoft KSA', specialty: 'Custom Enterprise Mobile', clients: 'Saudi conglomerates', bestFor: 'Complex enterprise mobile', rating: '4.6' },
                          { rank: '#7', company: 'Appitizers', specialty: 'MVP, Startup Apps', clients: 'Riyadh startups', bestFor: 'Fast MVP development', rating: '4.6' },
                          { rank: '#8', company: 'Digitech Arabia', specialty: 'E-commerce, Retail Apps', clients: 'Saudi retailers', bestFor: 'Arabic e-commerce platforms', rating: '4.5' },
                          { rank: '#9', company: 'Webdew KSA', specialty: 'Cross-Platform, SMB', clients: 'Saudi SMBs', bestFor: 'Budget-conscious cross-platform', rating: '4.5' },
                          { rank: '#10', company: 'Alef Digital', specialty: 'EdTech, Learning Apps', clients: 'Saudi MOE, schools', bestFor: 'Vision 2030 education apps', rating: '4.4' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{row.rank}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.company}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.specialty}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.clients}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.bestFor}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{row.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Vision 2030 Opportunities */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 20,
                    }}>Vision 2030: The App Opportunities No One Is Talking About</h2>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                      Vision 2030 is creating specific app development opportunities across six sectors that are massively underserved by existing Saudi digital products:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                      {[
                        { sector: 'NEOM Smart City', icon: '🌆', desc: 'The Line, Trojena and Sindalah need mobility apps, smart home control, city services, and resident experience platforms built from scratch.' },
                        { sector: 'Entertainment & Tourism', icon: '🎭', desc: 'Saudi is opening to tourism — requiring booking apps, guide apps, and entertainment venue platforms to support 150M visitor target by 2030.' },
                        { sector: 'Healthcare Digitization', icon: '🏥', desc: 'The Ministry of Health is digitizing all patient records and services. Telemedicine, appointment booking, and health monitoring apps are in high demand.' },
                        { sector: 'Education Technology', icon: '📚', desc: 'Saudi national curriculum is going digital. Learning management systems, student apps, and teacher tools are being developed at scale across the Kingdom.' },
                        { sector: 'Logistics & Supply Chain', icon: '🚛', desc: 'As Saudi non-oil trade grows, demand for logistics tracking, warehouse management, and last-mile delivery apps is surging across all regions.' },
                        { sector: 'Financial Inclusion', icon: '🏦', desc: "Saudi Arabia's cashless economy push means fintech apps, digital wallets, BNPL platforms, and SMB banking tools are among the fastest-growing categories." },
                      ].map((item, i) => (
                        <div key={i} style={{
                          padding: 20, borderRadius: 14,
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.sector}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ranking Methodology */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 20,
                    }}>How We Ranked These Companies</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Saudi Market Experience', weight: '30%', desc: 'Verified Saudi/GCC clients, Vision 2030 project involvement, Riyadh presence' },
                        { label: 'Arabic Localization', weight: '25%', desc: 'RTL UI, Arabic NLP, Hijri calendar, Arabic font rendering quality' },
                        { label: 'Technical Depth', weight: '20%', desc: 'Platform expertise, architecture quality, scalability, AI/ML integration' },
                        { label: 'Client Outcomes', weight: '15%', desc: 'App Store ratings, user retention, business impact metrics' },
                        { label: 'Compliance & Security', weight: '10%', desc: 'Saudi data residency, PDPL, NCA cybersecurity framework compliance' },
                      ].map((c, i) => (
                        <div key={i} style={{
                          padding: 16, borderRadius: 12,
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
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 28, padding: 36, position: 'relative', overflow: 'hidden',
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
                            background: 'rgba(34,197,94,0.15)', color: '#22c55e',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Full-Cycle Apps</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz is our top-ranked app development company for Riyadh and Saudi Arabia in 2026. Their combination of deep cross-platform expertise (Flutter, React Native, native iOS, native Android) with verified Saudi and GCC project experience makes them the strongest choice for businesses targeting the Kingdom — whether that is a fintech app for the Riyadh financial district, a logistics platform for a Saudi 3PL operator, or a consumer marketplace aligned with Vision 2030 digital commerce goals.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Arabic localization is where many international studios stumble — and where Codazz genuinely excels. Their engineering team builds RTL interfaces natively, handles Arabic font rendering and typography with precision, integrates Hijri calendar support correctly, and designs product flows that account for how Arabic-speaking users actually navigate applications. This is not an afterthought or a translation service — it is built into their development process from sprint one.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      Headquartered in Edmonton (Canada) with an engineering center in Chandigarh (India), Codazz operates as a truly timezone-agnostic development partner — which is a critical operational advantage for Saudi businesses that need to iterate quickly without waiting for a local office to open. Their project management process is built around async-first communication, detailed sprint documentation, and weekly stakeholder video calls that keep Saudi clients fully in the loop.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                        Key Metric: Saudi & GCC App Projects Delivered | Arabic Localization Specialists | RTL-Native
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-10 */}
                {[
                  {
                    num: '02', id: 'stc-pay-tech', name: 'STC Pay Tech', category: 'Fintech Apps',
                    emoji: '💳', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Largest fintech app ecosystem in Saudi Arabia',
                    paragraphs: [
                      "STC Pay Tech is the technology arm behind Saudi Arabia's dominant digital payments ecosystem. Their engineering team has built the infrastructure powering millions of Saudi payment transactions — including STC Pay (one of the Kingdom's most downloaded apps), merchant payment systems, and embedded fintech tools for Saudi businesses.",
                      "For companies that need fintech-specific app development in Saudi Arabia — particularly anything touching payments, digital wallets, or financial data — STC Pay Tech's deep understanding of SAMA (Saudi Central Bank) regulations and Saudi payment infrastructure makes them an invaluable technical partner.",
                    ],
                  },
                  {
                    num: '03', id: 'elm-company', name: 'Elm Company', category: 'Gov Tech',
                    emoji: '🏛️', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Government digital services for Saudi ministries',
                    paragraphs: [
                      "Elm is Saudi Arabia's premier government technology company, operating as the digital backbone of dozens of government services. Their engineering teams build and maintain the digital services that Saudi citizens interact with daily — from vehicle registration to business licensing to health services — making them the de facto experts in Saudi government app development.",
                      "For companies bidding on Saudi government digital transformation contracts or building B2G (business-to-government) apps, Elm's understanding of ministry procurement processes, government UX standards, and Arabic accessibility requirements is unmatched in the market.",
                    ],
                  },
                  {
                    num: '04', id: 'solutions-by-stc', name: 'Solutions by STC', category: 'Enterprise Apps',
                    emoji: '🏢', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'B2B enterprise platforms for Saudi corporations',
                    paragraphs: [
                      "Solutions by STC (the enterprise IT arm of Saudi Telecom Company) builds large-scale enterprise applications, workforce management systems, and B2B platforms for Saudi Arabia's largest corporations. Their integration capabilities — connecting ERP systems, SAP environments, and legacy infrastructure with modern mobile frontends — make them a strong choice for enterprise digital transformation.",
                      "Their scale and Saudi government relationships mean they can navigate complex procurement processes and security certifications that smaller studios cannot access. For enterprise-grade Saudi apps requiring deep system integration, Solutions by STC delivers proven capability.",
                    ],
                  },
                  {
                    num: '05', id: 'codelab-arabia', name: 'Codelab Arabia', category: 'Consumer Apps',
                    emoji: '🛒', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Consumer & marketplace apps for Saudi market',
                    paragraphs: [
                      "Codelab Arabia specializes in consumer-facing application development for the Saudi market — e-commerce platforms, delivery apps, social applications, and marketplace products that compete with the likes of Noon, Careem, and Jarir in the Saudi consumer digital ecosystem.",
                      "Their strength is understanding Saudi consumer behavior: the role of WhatsApp in customer communication, preference for COD (cash on delivery) payment flows, Arabic-first content consumption patterns, and the specific trust signals that drive conversion for Saudi shoppers. If you are building a consumer app for the Saudi market, Codelab Arabia brings cultural intelligence that matters.",
                    ],
                  },
                  {
                    num: '06', id: 'intellisoft-ksa', name: 'IntelliSoft KSA', category: 'Enterprise Mobile',
                    emoji: '⚙️', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Custom enterprise mobile for Saudi conglomerates',
                    paragraphs: [
                      "IntelliSoft KSA has carved a niche in building bespoke enterprise mobile applications for Saudi Arabia's largest family-owned conglomerates and publicly listed companies. Their work spans field force management tools for industrial companies, inventory management apps for retail groups, and HR self-service platforms for organizations with thousands of employees across the Kingdom.",
                      "Their project methodology includes detailed Arabic-language requirements documentation and stakeholder workshops conducted in both Arabic and English — a seemingly small detail that eliminates a significant source of miscommunication in Saudi enterprise app projects.",
                    ],
                  },
                  {
                    num: '07', id: 'appitizers', name: 'Appitizers', category: 'Startup Apps',
                    emoji: '🚀', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'MVP and startup app launches in Riyadh',
                    paragraphs: [
                      "Appitizers has become a go-to studio for Riyadh's growing startup ecosystem — particularly companies coming out of the Monsha'at (SMEA) startup support programs, KACST-backed incubators, and the Diriyah tech ecosystem. They specialize in fast, lean MVP development that gets Saudi startups to testable product within 8–12 weeks.",
                      "Their pricing is designed for Saudi seed-stage companies, and their knowledge of Arabic App Store optimization (ASO) means their clients launch with discoverability already built in. For Saudi founders who need to ship fast and validate before a Series A, Appitizers is a reliable partner.",
                    ],
                  },
                  {
                    num: '08', id: 'digitech-arabia', name: 'Digitech Arabia', category: 'E-Commerce Apps',
                    emoji: '🛍️', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Arabic e-commerce and marketplace applications',
                    paragraphs: [
                      "Digitech Arabia focuses on the e-commerce and marketplace segment of the Saudi app market — building Magento, Shopify, and custom-built Arabic e-commerce apps for retailers expanding their digital commerce presence in line with Vision 2030's non-oil revenue diversification goals.",
                      "They are particularly strong in Arabic product catalog management, Saudi payment gateway integration (STC Pay, Mada, Apple Pay KSA), and building the right trust signals — Arabic product descriptions, local customer reviews, and Saudi-standard return policies — that convert Saudi online shoppers.",
                    ],
                  },
                  {
                    num: '09', id: 'webdew-ksa', name: 'Webdew KSA', category: 'Cross-Platform',
                    emoji: '🌐', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Cross-platform apps for Saudi SMBs',
                    paragraphs: [
                      "Webdew KSA serves the large and growing Saudi SMB segment with cost-effective cross-platform app development using React Native and Flutter. Their focus on Saudi small and medium businesses — restaurants, clinics, retail shops, service businesses — that need professional apps without enterprise-level budgets fills an important market gap.",
                      "Their templated Arabic app frameworks allow them to deliver market-ready apps faster and at lower cost than fully custom development, making them the practical choice for Saudi SMBs that need a solid mobile presence without a six-figure development budget.",
                    ],
                  },
                  {
                    num: '10', id: 'alef-digital', name: 'Alef Digital', category: 'EdTech Apps',
                    emoji: '📚', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Education technology apps aligned with Vision 2030',
                    paragraphs: [
                      "Alef Digital has built a deep specialization in educational technology for the Saudi market, working directly with the Ministry of Education on digital curriculum delivery platforms and learning management systems used in thousands of Saudi schools. Their understanding of the Saudi national curriculum, Arabic pedagogical approaches, and student UX in an Arabic-first context is unmatched.",
                      "With Vision 2030 driving a massive push toward digital education — including the digitization of all Saudi school content — Alef Digital is well-positioned to continue dominating this category for years to come.",
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 28, padding: 36,
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

                {/* Cost Comparison */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>App Development Costs in Saudi Arabia: What to Expect</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['App Type', 'Local Riyadh Studio', 'International Partner', 'Timeline'].map(h => (
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
                          { type: 'MVP / Simple App', local: 'SAR 75K–150K', intl: '$15K–$40K', timeline: '6–10 weeks' },
                          { type: 'Consumer App (mid)', local: 'SAR 150K–350K', intl: '$40K–$90K', timeline: '10–18 weeks' },
                          { type: 'Marketplace / Platform', local: 'SAR 350K–700K', intl: '$80K–$200K', timeline: '18–32 weeks' },
                          { type: 'Enterprise App', local: 'SAR 700K+', intl: '$150K+', timeline: '24–48 weeks' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.type}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.local}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: '#22c55e', fontWeight: 600 }}>{row.intl}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.timeline}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                    Note: International partner pricing reflects Codazz-tier quality. All estimates include design, development, QA, and App Store submission. Arabic localization adds approximately 15–20% to base development costs regardless of studio location.
                  </p>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 32,
                  }}>Frequently Asked Questions</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {faqItems.map((item, i) => (
                      <div key={i} style={{
                        borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)',
                        background: 'rgba(255,255,255,0.015)', overflow: 'hidden',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer',
                            textAlign: 'left', gap: 16,
                          }}
                        >
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{item.q}</span>
                          <span style={{
                            fontSize: 20, color: '#22c55e', flexShrink: 0,
                            transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s',
                          }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0 }}>{item.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </article>

              {/* -- SIDEBAR -- */}
              <aside>
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {companies.map(company => (
                        <a key={company.name} href={`#${company.name.toLowerCase().replace(/[\s\(\)&+\/]+/g, '-').replace(/-+/g, '-').replace(/-$/, '')}`} style={{
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
                          <span style={{ fontSize: 14 }}>{company.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{company.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{company.category}</span>
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
                        background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading mobile engineering strategy at Codazz. Has overseen app development projects for clients across Saudi Arabia, UAE, and the broader GCC region.
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
                          textDecoration: 'none', display: 'block', padding: 14,
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
                          <p style={{ fontSize: 11, color: '#22c55e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
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
                  color: '#22c55e', marginBottom: 12,
                }}>Build for Saudi Arabia</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Your Vision 2030 App Starts Here.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Codazz builds Arabic-first, mobile-first apps for Saudi Arabia&apos;s most ambitious businesses. Whether you&apos;re a Riyadh startup or a global enterprise entering the Saudi market — we deliver.
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
