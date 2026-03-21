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
  { num: 1, name: 'Codazz', category: 'Full-Cycle Apps', emoji: '🏙️', metric: '500+ Global Launches, Arabic Localization, GCC-Ready', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'G42', category: 'AI & Cloud', emoji: '🤖', metric: 'Abu Dhabi AI Powerhouse, Government Partnerships', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Injazat', category: 'GovTech & Enterprise', emoji: '🏛️', metric: 'Mubadala-Backed, Smart City Infrastructure', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Appinventiv', category: 'Mobile Apps', emoji: '📱', metric: '3000+ Engineers, MENA Presence', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Hyperlink InfoSystem', category: 'Cross-Platform', emoji: '🔗', metric: '4500+ Apps, UAE Office', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Techugo', category: 'Mobile-First', emoji: '🚀', metric: 'Award-Winning, GCC-Focused Development', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Brain Inventory', category: 'Digital Products', emoji: '🧠', metric: 'Full-Cycle Development, Abu Dhabi Clients', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Chetu', category: 'Custom Software', emoji: '⚙️', metric: '2700+ Developers, MENA Delivery', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'OpenXcell', category: 'FinTech Apps', emoji: '💳', metric: 'ADGM Fintech, Digital Payments Expert', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Algoworks', category: 'Enterprise Mobile', emoji: '🏢', metric: 'Salesforce Partner, Enterprise Mobility', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'app-development-companies-dubai', title: 'Top App Development Companies in Dubai (2026)', category: 'Business', readTime: '10 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development: The Complete 2026 Guide', category: 'Technology', readTime: '14 min' },
];

export default function AppDevelopmentCompaniesAbuDhabiClient() {
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
              src="/blog_images/app-development-companies-abu-dhabi.jpg"
              alt="Top app development companies in Abu Dhabi 2026"
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
                12 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top App Development Companies in Abu Dhabi (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Abu Dhabi is investing billions in digital transformation through Hub71, ADGM, and Masdar City. This is the definitive ranking of the top 10 app development companies serving Abu Dhabi&apos;s booming tech ecosystem in 2026.
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
                    Abu Dhabi is no longer just an oil capital. The UAE&apos;s capital city has emerged as one of the Middle East&apos;s most ambitious technology hubs, driven by government initiatives that are rewriting the rules of digital transformation in the Arab world. With Hub71 attracting global startups, ADGM creating a world-class financial and tech regulatory framework, and Masdar City pioneering clean-tech innovation, Abu Dhabi is betting big on digital infrastructure.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The Abu Dhabi government&apos;s TAMM platform — a unified digital services portal — and ADDA&apos;s smart city initiatives have created massive demand for world-class app development expertise. Government entities, financial institutions, and startups alike are racing to build mobile-first products that serve Arabic-speaking populations while meeting international standards.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated over 80 app development firms operating in and around Abu Dhabi to build this definitive ranking. These companies were assessed on Arabic localization capabilities, GovTech experience, fintech compliance, mobile architecture quality, and track record in the GCC market.
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
                        'Abu Dhabi\'s app development market is projected to grow 34% by 2027, fueled by government digitization programs.',
                        'Arabic RTL (right-to-left) localization is a mandatory requirement for any app targeting UAE residents.',
                        'GovTech is the fastest-growing app category in Abu Dhabi — TAMM, ADDED, and ADNOC lead demand.',
                        'Codazz leads this list with 500+ global launches and dedicated GCC delivery capabilities.',
                        'ADGM-regulated fintech apps require specialized compliance knowledge that only a few agencies possess.',
                        'Hub71 startups are generating a new wave of consumer app demand in AI, healthtech, and edtech sectors.',
                      ].map((item, i) => (
                        <li key={i} style={{
                          fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: i < 5 ? 12 : 0,
                        }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Abu Dhabi Tech Ecosystem */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Abu Dhabi&apos;s Tech Ecosystem in 2026</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 32 }}>
                    {[
                      { label: 'Hub71', icon: '🚀', desc: 'Abu Dhabi\'s global tech hub, backed by Mubadala and SoftBank Vision Fund. Over 200 startups and $1.7B in capital deployed.', color: '#22c55e' },
                      { label: 'ADGM', icon: '🏛️', desc: 'Abu Dhabi Global Market — a world-class international financial centre with a progressive fintech regulatory sandbox.', color: '#60a5fa' },
                      { label: 'Masdar City', icon: '🌱', desc: 'The world\'s first planned sustainable city and a global hub for clean energy technology and innovation companies.', color: '#34d399' },
                      { label: 'TAMM', icon: '📱', desc: 'Abu Dhabi\'s unified digital government platform — the gold standard for GovTech app development in the region.', color: '#fbbf24' },
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
                  }}>2026 Comparison Table</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Rank', 'Company', 'Specialty', 'Arabic RTL', 'Best For', 'Rating'].map(h => (
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
                          { rank: '#1', company: 'Codazz', specialty: 'Full-Cycle, Flutter, AI', arabic: 'Yes', bestFor: 'End-to-end product development', rating: '4.9' },
                          { rank: '#2', company: 'G42', specialty: 'AI, Cloud, GovTech', arabic: 'Yes', bestFor: 'AI-powered government apps', rating: '4.8' },
                          { rank: '#3', company: 'Injazat', specialty: 'Enterprise, GovTech', arabic: 'Yes', bestFor: 'Smart city infrastructure', rating: '4.8' },
                          { rank: '#4', company: 'Appinventiv', specialty: 'Mobile, Enterprise', arabic: 'Yes', bestFor: 'Enterprise mobile platforms', rating: '4.7' },
                          { rank: '#5', company: 'Hyperlink InfoSystem', specialty: 'Cross-Platform', arabic: 'Yes', bestFor: 'Cross-platform apps at scale', rating: '4.7' },
                          { rank: '#6', company: 'Techugo', specialty: 'Mobile-First', arabic: 'Yes', bestFor: 'Consumer mobile apps', rating: '4.6' },
                          { rank: '#7', company: 'Brain Inventory', specialty: 'Custom Digital', arabic: 'Partial', bestFor: 'Custom web & mobile', rating: '4.5' },
                          { rank: '#8', company: 'Chetu', specialty: 'Custom Software', arabic: 'Partial', bestFor: 'Large custom software projects', rating: '4.5' },
                          { rank: '#9', company: 'OpenXcell', specialty: 'FinTech, Payments', arabic: 'Yes', bestFor: 'ADGM fintech apps', rating: '4.5' },
                          { rank: '#10', company: 'Algoworks', specialty: 'Salesforce, Enterprise', arabic: 'Partial', bestFor: 'Salesforce mobile & enterprise', rating: '4.4' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{row.rank}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.company}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.specialty}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: row.arabic === 'Yes' ? '#22c55e' : 'rgba(255,255,255,0.4)' }}>{row.arabic}</td>
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
                      Our methodology evaluated each company across six criteria specific to the Abu Dhabi market:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Arabic Localization', weight: '25%', desc: 'RTL layouts, Arabic typography, cultural UX design' },
                        { label: 'GCC Portfolio', weight: '25%', desc: 'Live apps, UAE clients, GovTech experience' },
                        { label: 'Technical Depth', weight: '20%', desc: 'Architecture, scalability, cloud-native builds' },
                        { label: 'Compliance Expertise', weight: '15%', desc: 'ADGM, TDRA, UAE data protection law' },
                        { label: 'Delivery Speed', weight: '10%', desc: 'Time-to-market, sprint velocity, agile maturity' },
                        { label: 'Post-Launch Support', weight: '5%', desc: 'Maintenance, ASO, analytics in the GCC market' },
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
                      }}>🏙️</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#ffffff',
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
                      Codazz is the premier choice for businesses targeting the Abu Dhabi and wider GCC market. With over 500 successful product launches globally, Codazz brings a level of engineering depth and product sophistication that is unmatched in the region. Their team handles complete Arabic RTL localization — not just text translation, but full interface mirroring, culturally appropriate UI patterns, and right-to-left typography that actually looks native, not bolted on.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      What makes Codazz the standout choice for the Abu Dhabi market is their understanding of the intersection between government digital services, fintech compliance, and consumer mobile expectations in the UAE. They have built fintech platforms that meet ADGM regulatory requirements, GovTech apps that integrate with UAE PASS authentication, and enterprise solutions that connect seamlessly to Abu Dhabi government APIs.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Their cross-platform expertise in Flutter and React Native delivers native-quality Arabic and English bilingual apps on both iOS and Android simultaneously — critical for a UAE market where both platforms command significant user bases. With a development center in Chandigarh and leadership in Edmonton, Codazz offers 24/7 development cycles that keep Abu Dhabi clients moving at pace with the city&apos;s ambitious digital transformation goals.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Key Services:</strong> Native iOS & Android, Flutter & React Native, Arabic RTL Localization, AI/ML Integration, GovTech App Development, FinTech Platforms, ADGM Compliance-Ready Apps, UI/UX Design, Cloud Architecture (AWS/GCP/Azure), Post-Launch Analytics
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
                        Key Metric: 500+ Global Launches | Arabic RTL Localization | GCC-Ready Delivery
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'g42', name: 'G42', category: 'AI & Cloud',
                    emoji: '🤖', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Abu Dhabi AI Powerhouse, Government Partnerships',
                    paragraphs: [
                      'G42 is Abu Dhabi\'s homegrown AI and cloud computing giant, backed by the Abu Dhabi government and positioned as a strategic partner for the UAE\'s broader digital ambitions. Their Falcon language model — built in Abu Dhabi — became one of the world\'s most downloaded open-source AI models, signaling the depth of AI engineering capability sitting within the organization.',
                      'For enterprise clients and government entities in Abu Dhabi looking to build AI-native applications, G42 offers unmatched local context, regulatory alignment, and cloud infrastructure. They have built platforms for ADNOC, healthcare systems for Abu Dhabi\'s Department of Health, and smart city applications that feed into the TAMM ecosystem. If your project is AI-heavy and your client is a government entity, G42 belongs on your shortlist.',
                    ],
                  },
                  {
                    num: '03', id: 'injazat', name: 'Injazat', category: 'GovTech & Enterprise',
                    emoji: '🏛️', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Mubadala-Backed, Smart City Infrastructure',
                    paragraphs: [
                      'Injazat is a Mubadala Investment Company-backed technology firm that has become the backbone of Abu Dhabi\'s smart city infrastructure. They designed and built critical digital infrastructure for Abu Dhabi\'s government, including enterprise resource planning systems, citizen-facing digital services, and cloud migration projects for federal entities.',
                      'Their deep integration with the Abu Dhabi government ecosystem makes them an invaluable partner for any project that needs to interface with government APIs, comply with UAE cybersecurity laws, or leverage Abu Dhabi\'s national data infrastructure. Injazat is not a consumer app shop — they operate at the institutional scale that defines Abu Dhabi\'s most ambitious digitization programs.',
                    ],
                  },
                  {
                    num: '04', id: 'appinventiv', name: 'Appinventiv', category: 'Mobile Apps',
                    emoji: '📱', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: '3000+ Engineers, MENA Presence',
                    paragraphs: [
                      'Appinventiv has established a strong presence in the Middle East with their UAE office, bringing over 3,000 global engineers and a portfolio of 3,000+ digital products to the Abu Dhabi market. They serve clients across fintech, healthcare, retail, and logistics — industries that are all experiencing massive growth in the UAE capital.',
                      'Their experience building apps for MENA clients gives Appinventiv a practical understanding of Arabic localization requirements, local payment gateway integrations (like Apple Pay, BENEFIT, and local UAE gateways), and the consumer behavior differences between GCC users and Western markets. A strong choice for mid-to-large enterprise mobile projects.',
                    ],
                  },
                  {
                    num: '05', id: 'hyperlink-infosystem', name: 'Hyperlink InfoSystem', category: 'Cross-Platform',
                    emoji: '🔗', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: '4500+ Apps, UAE Office',
                    paragraphs: [
                      'Hyperlink InfoSystem operates from a UAE office and brings an enormous portfolio of 4,500+ delivered applications to the Abu Dhabi market. Their breadth of technology coverage — spanning Flutter, React Native, blockchain, AI/ML, and wearable integration — makes them a one-stop shop for businesses that want multiple digital products from a single vendor.',
                      'They are particularly effective for SMEs and startups in the Hub71 ecosystem that need to launch quickly with cross-platform apps. Their process is efficient and their pricing competitive for the Abu Dhabi market, though bespoke architectural projects benefit from a more specialized partner.',
                    ],
                  },
                  {
                    num: '06', id: 'techugo', name: 'Techugo', category: 'Mobile-First',
                    emoji: '🚀', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Award-Winning, GCC-Focused Development',
                    paragraphs: [
                      'Techugo has built a strong reputation across GCC markets with award-winning mobile apps that prioritize user experience and market-specific design. Their team understands the nuances of building for Arab users — from color psychology in Islamic design traditions to the specific interaction patterns preferred by UAE consumers.',
                      'They have delivered consumer apps, e-commerce platforms, and loyalty programs for clients across the UAE and Saudi Arabia. Techugo&apos;s strength lies in their mobile-first philosophy and their ability to ship visually polished, high-performance apps that compete on aesthetics as much as function.',
                    ],
                  },
                  {
                    num: '07', id: 'brain-inventory', name: 'Brain Inventory', category: 'Digital Products',
                    emoji: '🧠', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Full-Cycle Development, Abu Dhabi Clients',
                    paragraphs: [
                      'Brain Inventory is a full-cycle digital product studio with an expanding client base in Abu Dhabi. They cover the complete development lifecycle — from UX wireframing through to backend architecture, mobile development, and cloud deployment — making them a practical choice for businesses that want a single partner to own the entire product journey.',
                      'Their team is experienced in building apps with Arabic localization and has delivered projects for real estate, logistics, and retail clients in the UAE. Brain Inventory is a solid mid-tier choice for companies that need reliable delivery and transparent communication without enterprise-level price tags.',
                    ],
                  },
                  {
                    num: '08', id: 'chetu', name: 'Chetu', category: 'Custom Software',
                    emoji: '⚙️', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: '2700+ Developers, MENA Delivery',
                    paragraphs: [
                      'Chetu is a large-scale custom software development firm with over 2,700 developers and a growing MENA client base. They specialize in complex integrations, legacy system modernization, and custom ERP/CRM development — capabilities that are increasingly in demand as Abu Dhabi enterprises modernize their technology stacks.',
                      'While not exclusively a mobile-first agency, Chetu&apos;s mobile development practice is capable and well-resourced. They are best suited for organizations that need custom enterprise software with mobile frontends, rather than consumer apps that prioritize cutting-edge UX.',
                    ],
                  },
                  {
                    num: '09', id: 'openxcell', name: 'OpenXcell', category: 'FinTech Apps',
                    emoji: '💳', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'ADGM Fintech, Digital Payments Expert',
                    paragraphs: [
                      'OpenXcell has carved out a niche in MENA fintech app development, with particular strength in payment platforms, digital wallets, and wealth management apps that meet ADGM regulatory requirements. As Abu Dhabi positions ADGM as a global fintech hub with progressive licensing frameworks, demand for compliant fintech apps is surging.',
                      'Their experience with payment gateway integrations, KYC/AML workflows, and real-time transaction processing makes them a credible choice for financial services companies launching digital products in Abu Dhabi and across the broader GCC market.',
                    ],
                  },
                  {
                    num: '10', id: 'algoworks', name: 'Algoworks', category: 'Enterprise Mobile',
                    emoji: '🏢', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Salesforce Partner, Enterprise Mobility',
                    paragraphs: [
                      'Algoworks is a Salesforce consulting and enterprise mobility firm with a growing presence in the Abu Dhabi enterprise market. They specialize in Salesforce CRM customization, Salesforce mobile app development, and enterprise mobility solutions that give large organizations a unified view of their operations across devices.',
                      'For Abu Dhabi enterprises that have invested in Salesforce or Oracle ERP systems, Algoworks offers specialized expertise in building mobile interfaces and companion apps that maximize the value of existing enterprise platforms. Less suited for consumer apps, but a strong choice for internal enterprise mobility.',
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

                {/* Arabic Localization Section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Arabic Localization: The Non-Negotiable for Abu Dhabi Apps</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Building an app for Abu Dhabi without proper Arabic localization is like launching a US app without English support. It signals to local users that their language and culture are an afterthought. True Arabic localization goes far beyond switching text direction — it requires rethinking entire UI layouts for right-to-left flow, adapting icon placement, number formatting, calendar systems (Hijri alongside Gregorian), and culturally appropriate visual design.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The UAE government mandates Arabic support for all public-facing digital services through the TDRA (Telecommunications and Digital Government Regulatory Authority). This means GovTech apps, apps integrating with TAMM, and any app seeking government procurement must meet strict Arabic language requirements.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {[
                      { label: 'RTL Interface Layout', desc: 'Full right-to-left mirroring of navigation, content, and UI components' },
                      { label: 'Arabic Typography', desc: 'Native Arabic fonts (Noto Sans Arabic, Cairo) with proper shaping and kerning' },
                      { label: 'Hijri Calendar', desc: 'Dual calendar support — Islamic Hijri and Gregorian — for date pickers and scheduling' },
                      { label: 'Local Payment Methods', desc: 'Integration with Payit, BENEFIT Pay, Apple Pay UAE, and local bank gateways' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(34,197,94,0.03)', border: '1px solid rgba(34,197,94,0.1)',
                        borderRadius: 14, padding: '20px',
                      }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>{item.label}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
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
                    Choosing Your Abu Dhabi App Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Abu Dhabi&apos;s digital transformation is accelerating at a pace few global cities can match. The ADGM fintech sandbox, Hub71&apos;s startup ecosystem, and the government&apos;s TAMM digitization program are all generating enormous demand for world-class mobile and web applications. The agencies on this list represent the best options for capturing that opportunity.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses that need a partner who can handle the full complexity of building for Abu Dhabi — Arabic localization, GCC regulatory compliance, fintech-grade security, and consumer-quality UX — Codazz is the clear choice. Their global portfolio and dedicated GCC delivery capabilities mean you get international engineering standards with genuine regional market understanding.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    The window to capture Abu Dhabi&apos;s digital moment is open right now. The businesses that move fastest with the best technology partners will own the market for the next decade.
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
                    { q: 'How much does app development cost in Abu Dhabi?', a: 'App development costs in Abu Dhabi typically range from AED 50,000 for a simple MVP to AED 1,500,000+ for complex enterprise platforms. Mid-market apps with Arabic localization and UAE payment gateway integrations typically run AED 150,000–450,000. International agencies like Codazz often deliver the same quality at 30-40% lower cost due to their offshore development model.' },
                    { q: 'Do all apps in Abu Dhabi need Arabic support?', a: 'Government-facing apps and apps seeking TDRA approval legally require Arabic language support. For commercial consumer apps, Arabic localization is not strictly mandated but is strongly recommended — UAE residents expect it, and apps without Arabic consistently see lower adoption rates in the local market.' },
                    { q: 'What are the most in-demand app categories in Abu Dhabi?', a: 'GovTech (government service apps), fintech (ADGM-regulated digital banking and payment apps), healthtech (apps integrating with Abu Dhabi\'s DOH digital health infrastructure), real estate tech, and logistics/on-demand service apps are the highest-demand categories in Abu Dhabi\'s 2026 app market.' },
                    { q: 'How do Hub71 startups choose their app development partners?', a: 'Hub71 startups typically prioritize speed-to-market, cross-platform capability (to serve both iOS and Android), Arabic localization from day one, and integration with UAE authentication systems like UAE PASS. Most Hub71 companies work with international agencies that have GCC market experience rather than purely local firms.' },
                    { q: 'What compliance requirements do fintech apps face in Abu Dhabi?', a: 'Fintech apps operating under ADGM must comply with ADGM\'s Financial Services Regulatory Authority (FSRA) framework, which includes KYC/AML procedures, data residency requirements, and cybersecurity standards. Apps accessing UAE banking infrastructure must also meet Central Bank of UAE technical and security requirements.' },
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
                      Leading engineering strategy and product vision at Codazz. Has guided 500+ bespoke product launches globally, including GCC-market projects.
                    </p>
                  </div>

                  {/* Abu Dhabi Dev Stats */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>Abu Dhabi Dev Rates</p>
                    {[
                      { label: 'Simple MVP', range: 'AED 50K–120K' },
                      { label: 'Standard App', range: 'AED 150K–350K' },
                      { label: 'Enterprise Platform', range: 'AED 500K–1.5M+' },
                      { label: 'GovTech Project', range: 'AED 300K–2M+' },
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
                }}>Build for Abu Dhabi</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Your Abu Dhabi App, Built to GCC Standards.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Arabic RTL, ADGM-compliant, UAE PASS-integrated, and designed for a market that expects excellence. Codazz delivers apps that win in Abu Dhabi.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get a Free GCC App Consultation →
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
