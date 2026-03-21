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
  { num: 1, name: 'Codazz', category: 'Mobile / AI / SaaS', emoji: '🍁', metric: 'National Canadian Team | 500+ Apps | $95–$145 CAD/hr', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Pivotal (Broadcom)', category: 'Enterprise Engineering', emoji: '🔧', metric: 'Acquired by VMware/Broadcom | Agile at enterprise scale', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 3, name: 'Myplanet', category: 'Enterprise UX', emoji: '🌐', metric: 'Digital transformation & UX for Fortune 500', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 4, name: 'MaRS Ecosystem', category: 'Innovation Hub', emoji: '🔬', metric: 'Canada\'s largest urban innovation hub | 5,000+ startups', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 5, name: 'Mattr', category: 'Identity / Web3', emoji: '🔐', metric: 'Verifiable credentials & decentralized identity platform', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 6, name: 'Tulip Retail', category: 'Retail Tech', emoji: '🛍️', metric: 'Mobile-first retail associate platform, 60+ global brands', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'TouchBistro', category: 'Restaurant Tech', emoji: '🍽️', metric: 'iPad POS & restaurant management, 29,000+ restaurants', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 8, name: 'Wave Financial', category: 'SMB Fintech', emoji: '💰', metric: 'Free accounting & invoicing SaaS for 500K+ SMBs', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
  { num: 9, name: 'Ideon Technologies', category: 'Deep Tech', emoji: '📡', metric: 'Subsurface sensing & muon tomography platform', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 10, name: 'Float', category: 'Fintech / Corporate Spend', emoji: '💳', metric: 'Canadian corporate card & spend management, 2,000+ clients', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
];

const relatedPosts = [
  { slug: 'top-app-development-companies-canada', title: 'Top App Development Companies in Canada (2026)', category: 'Rankings', readTime: '10 min' },
  { slug: 'app-development-cost-canada', title: 'How Much Does App Development Cost in Canada (2026)?', category: 'Cost Guide', readTime: '9 min' },
  { slug: 'software-development-companies-edmonton', title: 'Top Software Development Companies in Edmonton (2026)', category: 'Rankings', readTime: '11 min' },
];

export default function AppDevelopmentCompaniesTorontoClient() {
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
                background: 'rgba(34,197,94,0.12)', color: '#22c55e',
                padding: '5px 14px', borderRadius: 100,
              }}>App Development</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 21, 2026</span>
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
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 860,
            }}>
              Top App Development Companies in Toronto (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Toronto is Canada&apos;s largest tech market and one of North America&apos;s fastest-growing innovation hubs. This definitive 2026 guide ranks the top app development companies serving Toronto businesses — with real rates in CAD, a city comparison table, and an honest take on who delivers.
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
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#22c55e',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz — Edmonton, Canada</p>
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

        {/* ARTICLE BODY */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 320px', gap: 80, alignItems: 'start' }}>

              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Toronto has quietly become one of the most important tech cities in North America. What was once seen primarily as a financial services capital has transformed into a full-spectrum innovation hub — with world-class AI research at the Vector Institute, a thriving fintech corridor along Bay Street, the MaRS Discovery District anchoring one of the continent&apos;s most ambitious innovation campuses, and a direct pipeline from the Waterloo tech corridor that produces more software engineers per capita than almost anywhere in the world.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses looking to build mobile apps, SaaS platforms, or custom software, Toronto offers a compelling value proposition: North American talent standards, significantly lower rates than comparable US cities, and a legal and regulatory environment aligned with global enterprise requirements. But the market is not uniform. Rates range from $85 to over $200 CAD/hr depending on firm size, specialization, and seniority — and as with any market, the best companies are usually booked out well in advance.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide cuts through the noise. We rank the top 10 app and software development companies serving Toronto — including one Edmonton-headquartered firm that consistently outperforms purely local competitors for Canadian clients nationwide — and give you everything you need to make the right hiring decision.
                  </p>
                </div>

                {/* Toronto Tech Ecosystem */}
                <div className="reveal" id="toronto-ecosystem" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Toronto Tech Ecosystem Overview</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>
                    Six market statistics every buyer should know before engaging a Toronto development firm.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 32 }}>
                    {[
                      { stat: '340,000+', label: 'Tech workers in Greater Toronto Area', icon: '👥' },
                      { stat: '#3', label: 'North American city for tech job growth (2024–2026)', icon: '📈' },
                      { stat: '$8.2B+', label: 'VC invested in Toronto startups (2024)', icon: '💰' },
                      { stat: '6,200+', label: 'Tech companies in the Greater Toronto Area', icon: '🏢' },
                      { stat: '40+', label: 'Active AI labs and research centres in Toronto', icon: '🤖' },
                      { stat: '$95–$200', label: 'CAD/hr range for senior development talent', icon: '💵' },
                    ].map((s, i) => (
                      <div key={i} style={{
                        padding: 24, borderRadius: 20,
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                        <p style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 800, color: '#22c55e', marginBottom: 6, letterSpacing: '-0.03em' }}>{s.stat}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
                    {[
                      { district: 'MaRS Discovery District', icon: '🔬', desc: 'Canada\'s largest urban innovation hub. Home to 1,000+ tech and life sciences companies with $1.7B in combined revenue.', type: 'Innovation Campus' },
                      { district: 'Bay Street Fintech', icon: '🏦', desc: 'Canada\'s financial capital spawning fintech unicorns including Wealthsimple, Borrowell, and Koho.', type: 'Fintech Corridor' },
                      { district: 'Waterloo Corridor', icon: '🎓', desc: 'UWaterloo and Shopify ecosystem producing 7,000+ CS graduates annually. 90-minute drive from Toronto.', type: 'Talent Pipeline' },
                      { district: 'Shopify Ecosystem', icon: '🛒', desc: 'Shopify\'s platform has spawned 200+ Toronto-area SaaS and plugin businesses, creating a dense developer community.', type: 'SaaS Ecosystem' },
                    ].map((d, i) => (
                      <div key={i} style={{
                        padding: 20, borderRadius: 16,
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <div style={{ fontSize: 26, marginBottom: 8 }}>{d.icon}</div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{d.district}</p>
                        <p style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{d.type}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rates Table */}
                <div className="reveal" id="toronto-rates" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Toronto App Development Rates (2026)</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
                    All rates in CAD per hour. Toronto rates are higher than Edmonton and Calgary but 30–45% lower than equivalent US cities.
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 580 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Role', 'Junior', 'Mid-Level', 'Senior / Lead'].map(h => (
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
                          { role: 'iOS Developer', junior: '$85–$100/hr', mid: '$110–$140/hr', senior: '$150–$185/hr' },
                          { role: 'Android Developer', junior: '$85–$105/hr', mid: '$110–$145/hr', senior: '$150–$190/hr' },
                          { role: 'React Native / Flutter', junior: '$90–$110/hr', mid: '$115–$150/hr', senior: '$155–$200/hr' },
                          { role: 'Full-Stack (Node/React)', junior: '$85–$110/hr', mid: '$115–$150/hr', senior: '$155–$200+/hr' },
                          { role: 'Backend / Cloud', junior: '$90–$110/hr', mid: '$120–$155/hr', senior: '$160–$210+/hr' },
                          { role: 'UI/UX Designer', junior: '$75–$95/hr', mid: '$95–$130/hr', senior: '$135–$175/hr' },
                          { role: 'AI / ML Engineer', junior: '$95–$120/hr', mid: '$125–$165/hr', senior: '$170–$220+/hr' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{row.role}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.junior}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{row.mid}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: '#22c55e', fontWeight: 700 }}>{row.senior}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="reveal" id="key-takeaways" style={{ marginBottom: 56 }}>
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
                        'Toronto development rates run $85–$200+ CAD/hr — competitive for North America, but 20–35% higher than Edmonton or Calgary for equivalent talent.',
                        'The best Toronto-serving firms are often distributed across Canada — Codazz (Edmonton-HQ) leads this guide because it delivers Canadian management standards at rates that beat pure Toronto firms.',
                        'Toronto\'s fintech, retail tech, and AI ecosystems are world-class. If your product touches payments, POS, or ML, you\'ll find deep domain expertise here.',
                        'Canada\'s SR&ED (Scientific Research and Experimental Development) tax credit program can offset 15–35% of your eligible software development costs — a significant financial advantage over US-only vendors.',
                      ].map((item, i) => (
                        <li key={i} style={{
                          fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: i < 3 ? 12 : 0,
                        }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Top 10 Companies heading */}
                <div className="reveal" id="top-companies" style={{ marginBottom: 40 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Top 10 App Development Companies Serving Toronto (2026)</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                    Ranked by quality of delivery, Canadian market expertise, client references, and value for money. Note that the top choice is Edmonton-headquartered — a deliberate decision based on demonstrated national delivery capability and superior rate competitiveness.
                  </p>
                </div>

                {/* Company 1 - Codazz FEATURED */}
                <div className="reveal" id="codazz" style={{ marginBottom: 40 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 28, padding: 40, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -50, right: -50, width: 250, height: 250, background: 'radial-gradient(circle, rgba(34,197,94,0.14) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
                        <div style={{
                          padding: '4px 14px', borderRadius: 100,
                          background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                          fontSize: 11, fontWeight: 800, color: '#22c55e', letterSpacing: '0.1em', textTransform: 'uppercase',
                        }}>#1 Top Choice for Toronto</div>
                        <div style={{
                          padding: '4px 14px', borderRadius: 100,
                          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                          fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em',
                        }}>Canadian Management</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                        <div style={{
                          width: 64, height: 64, borderRadius: 18, flexShrink: 0,
                          background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32,
                        }}>🍁</div>
                        <div>
                          <h2 style={{
                            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#ffffff',
                            letterSpacing: '-0.04em', margin: 0,
                          }}>Codazz</h2>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: '4px 0 0' }}>HQ: Edmonton, Alberta, Canada · Offices: Chandigarh, New York, Dubai</p>
                        </div>
                      </div>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, marginBottom: 16 }}>
                        Codazz is Canada&apos;s top choice for mobile app and software development — and the clear #1 recommendation for Toronto businesses that need Canadian management standards without paying premium Bay Street agency rates. Founded by CEO Raman Makkar and headquartered in Edmonton, Alberta, Codazz has delivered 500+ apps across mobile (iOS, Android, Flutter, React Native), SaaS platforms, AI/ML products, and custom web applications for clients across North America, the UAE, and the United Kingdom.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, marginBottom: 16 }}>
                        The reason Codazz tops this Toronto list: distributed Canadian delivery done right. Codazz operates with 100+ engineers across Edmonton and Chandigarh, managed by a senior Canadian leadership team. Toronto businesses get the full benefit of North American-aligned project management, IP protection under Canadian law, and English-first communication — with rates that run $20–$40 CAD/hr below what comparable Toronto-based agencies charge. That delta adds up fast on a $200K+ project.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, marginBottom: 24 }}>
                        <strong style={{ color: '#ffffff' }}>Why Toronto clients choose Codazz over local firms:</strong> SR&amp;ED-eligible projects managed end-to-end, no Toronto overhead markup, same-timezone collaboration, dedicated Slack channels, weekly demo calls, and a track record across fintech, retail, healthcare, logistics, and SaaS that few agencies of any size can match.
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 28 }}>
                        {[
                          { label: 'Rate', value: '$95–$145 CAD/hr' },
                          { label: 'Min Project', value: '$30K CAD' },
                          { label: 'Team Size', value: '100+ Engineers' },
                          { label: 'Apps Launched', value: '500+' },
                        ].map((m, i) => (
                          <div key={i} style={{
                            padding: '14px 18px', borderRadius: 14,
                            background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)',
                          }}>
                            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>{m.label}</p>
                            <p style={{ fontSize: 15, fontWeight: 700, color: '#22c55e', margin: 0 }}>{m.value}</p>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        {['Mobile (iOS/Android)', 'Flutter & React Native', 'SaaS Platforms', 'AI/ML Engineering', 'Next.js / React', 'Cloud & DevOps'].map((tag, i) => (
                          <span key={i} style={{
                            padding: '6px 14px', borderRadius: 100, fontSize: 12, fontWeight: 600,
                            background: 'rgba(34,197,94,0.08)', color: 'rgba(255,255,255,0.6)',
                            border: '1px solid rgba(34,197,94,0.15)',
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Companies 2-10 */}
                {[
                  {
                    num: '02', id: 'pivotal', name: 'Pivotal (Broadcom Ecosystem)', category: 'Enterprise Engineering',
                    emoji: '🔧', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    hq: 'Originally Toronto / San Francisco — now part of Broadcom',
                    metric: 'Enterprise agile transformation | Cloud Foundry platform',
                    paragraphs: [
                      'Pivotal was one of the most respected enterprise software consulting firms operating in the Toronto market before its acquisition by VMware (subsequently acquired by Broadcom). Pivotal pioneered extreme programming and pair programming methodologies that influenced how enterprise software is built globally. Their Canadian client base included major financial institutions, government agencies, and large retail groups seeking agile transformation and cloud-native platform development.',
                      'Under the Broadcom umbrella, Pivotal\'s methodologies live on through VMware Tanzu — a cloud-native platform for enterprise application development. For Toronto enterprises already embedded in the Broadcom/VMware stack seeking platform engineering, Tanzu Labs (formerly Pivotal Labs) remains a relevant option. However, minimum engagement sizes are large and the firm is not suited to startup or mid-market product development.',
                      'Key Services: Cloud-native platform engineering, enterprise agile transformation, VMware Tanzu implementation, product management coaching, software modernization. Best For: Large enterprises modernizing legacy Java or .NET systems onto cloud-native platforms within Broadcom/VMware infrastructure stacks.',
                    ],
                  },
                  {
                    num: '03', id: 'myplanet', name: 'Myplanet', category: 'Enterprise UX & Digital',
                    emoji: '🌐', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    hq: 'Toronto, Ontario',
                    metric: 'Enterprise digital transformation | UX-led product development',
                    paragraphs: [
                      'Myplanet is a Toronto-based digital experience agency that has carved a strong niche in enterprise UX strategy and digital transformation for large organizations. Their work spans progressive web apps, employee experience platforms, digital commerce, and connected workplace tools for brands including IKEA, PepsiCo, and Walmart Canada. They bring a human-centred design methodology to projects that most dev agencies approach purely technically.',
                      'Founded in 2009 and B-Corp certified, Myplanet is particularly strong for organizations undergoing digital transformation who need both strategic UX thinking and development execution under one roof. Their process-oriented approach and emphasis on design systems makes them well-suited for clients building multi-platform digital ecosystems rather than single apps.',
                      'Key Services: Enterprise UX strategy, progressive web apps, digital experience platforms, employee portals, design systems, headless commerce. Best For: Mid-to-large enterprises in retail, CPG, and professional services that need design-led digital transformation with a Toronto-based team.',
                    ],
                  },
                  {
                    num: '04', id: 'mars-ecosystem', name: 'MaRS Ecosystem Companies', category: 'Innovation Hub',
                    emoji: '🔬', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    hq: 'College Street, Toronto (MaRS Discovery District)',
                    metric: '5,000+ startups | $1.7B+ combined revenue | 6,000+ jobs',
                    paragraphs: [
                      'MaRS Discovery District is not a single company — it is Canada\'s largest innovation hub, housing over 5,000 startups and scale-ups across health, cleantech, finance, and enterprise software. MaRS-resident companies include some of Toronto\'s most technically sophisticated product builders: Wello (digital health), Tulip Retail (retail technology), and dozens of B2B SaaS companies building the next generation of Canadian software.',
                      'For businesses seeking development partners, MaRS is relevant as a talent pipeline and ecosystem signal. Companies with MaRS affiliations have access to vetted mentors, CFC (Creative Destruction Lab) exposure, and peer networks that tend to elevate their engineering and product standards above the average. When evaluating Toronto dev firms, MaRS alumni status is a positive signal.',
                      'If you are a startup yourself, MaRS programs like JLABS, the MaRS IAF (Investment Accelerator Fund) portfolio, and CDL cohorts represent access to some of the best early-stage product development talent in Canada.',
                    ],
                  },
                  {
                    num: '05', id: 'mattr', name: 'Mattr', category: 'Identity / Web3',
                    emoji: '🔐', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    hq: 'Toronto, Ontario',
                    metric: 'W3C verifiable credentials | DID infrastructure | Open-source',
                    paragraphs: [
                      'Mattr is a highly specialized Toronto-origin company building infrastructure for verifiable credentials, decentralized identifiers (DIDs), and next-generation digital identity systems. Their work is at the cutting edge of the W3C standards ecosystem — building the protocols that underpin privacy-preserving digital credentials for governments, financial institutions, and healthcare organizations globally.',
                      'Mattr is not a general-purpose development agency — they are a product company with deep expertise in cryptographic identity primitives, zero-knowledge proofs, and decentralized trust networks. If your project involves digital identity verification, government credential issuance, or privacy-preserving data exchange, Mattr represents some of the deepest technical expertise available in Canada.',
                      'Key Services: Verifiable credential platform, DID infrastructure, OpenID Connect extensions, digital wallet integration, decentralized identity consulting. Best For: Government agencies, regulated financial institutions, and healthcare organizations building compliant digital identity systems.',
                    ],
                  },
                  {
                    num: '06', id: 'tulip-retail', name: 'Tulip Retail', category: 'Retail Tech',
                    emoji: '🛍️', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    hq: 'Toronto, Ontario',
                    metric: 'Mobile retail associate platform | 60+ global brands',
                    paragraphs: [
                      'Tulip Retail is one of Toronto\'s most successful retail technology product companies, building a mobile-first platform that empowers in-store retail associates with clienteling, task management, inventory lookup, and customer communication tools. With 60+ enterprise retail brands on their platform including Kate Spade, Mulberry, and Pandora, Tulip has become the de facto associate productivity platform for luxury and specialty retail.',
                      'While Tulip is a product company rather than a development agency, their work represents the quality bar that Toronto\'s retail tech ecosystem can achieve. For retailers seeking a ready-built associate platform, Tulip is a direct solution. For retailers needing custom retail tech development, Tulip\'s existence signals that Toronto has the domain expertise to build at this level.',
                      'Key Services (Platform): Mobile associate apps, clienteling tools, task management, omnichannel inventory, customer communications, store analytics. Best For: Mid-to-large specialty and luxury retailers seeking to modernize their in-store associate experience without custom software development.',
                    ],
                  },
                  {
                    num: '07', id: 'touchbistro', name: 'TouchBistro', category: 'Restaurant Tech',
                    emoji: '🍽️', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    hq: 'Toronto, Ontario',
                    metric: '29,000+ restaurants | iPad POS | $158M raised',
                    paragraphs: [
                      'TouchBistro is one of Toronto\'s standout SaaS success stories — a purpose-built restaurant management platform serving over 29,000 restaurants across 100+ countries. Built from the ground up for the iPad, TouchBistro covers POS, inventory management, staff scheduling, customer loyalty, and business reporting in a single integrated platform. Their engineering team has solved the particularly hard problems of offline-first mobile software and real-time sync in high-transaction environments.',
                      'Like Tulip, TouchBistro is a product company rather than a development partner. But for anyone in the hospitality tech space, TouchBistro demonstrates what Toronto engineering teams can build and sustain at scale. They are also proof that the Toronto market has deep domain expertise in vertically integrated mobile SaaS — a capability profile that matters when evaluating which local firms can build comparable products.',
                      'Key Services (Platform): Restaurant POS, table management, inventory, staff scheduling, menu engineering, reporting, loyalty. Best For: Independent restaurants and restaurant groups seeking a fully integrated iPad-based management platform. Not available for custom development.',
                    ],
                  },
                  {
                    num: '08', id: 'wave-financial', name: 'Wave Financial', category: 'SMB Fintech',
                    emoji: '💰', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    hq: 'Toronto, Ontario (Acquired by H&R Block)',
                    metric: 'Free accounting SaaS | 500K+ SMB customers | Acquired for $405M',
                    paragraphs: [
                      'Wave Financial is Toronto\'s best example of freemium fintech at scale. The company built a full-featured accounting, invoicing, and payroll platform available for free to small businesses — monetizing through payment processing and premium payroll features. Acquired by H&R Block for $405 million, Wave represents a product and engineering execution standard that defines what Toronto fintech teams are capable of.',
                      'For SMBs seeking accounting software, Wave remains one of the best free options available. For fintech founders, Wave\'s architecture — handling real-time bank reconciliation, double-entry bookkeeping, and payment processing for 500,000+ users — is a reference point for what Toronto engineering can build in the financial services space.',
                      'Key Services (Platform): Invoicing, accounting, payroll, payment processing, receipt scanning, financial reporting. Best For: Freelancers and small businesses seeking free accounting software. Not a development agency.',
                    ],
                  },
                  {
                    num: '09', id: 'ideon-technologies', name: 'Ideon Technologies', category: 'Deep Tech',
                    emoji: '📡', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    hq: 'Vancouver / Toronto presence',
                    metric: 'Muon tomography | Subsurface sensing | Mining & infrastructure',
                    paragraphs: [
                      'Ideon Technologies is one of Canada\'s most technically ambitious deep tech companies, using cosmic-ray muon tomography to create 3D images of what lies beneath the surface. Originally founded in Vancouver and expanding into the Toronto tech investor ecosystem, Ideon serves mining companies, civil infrastructure engineers, and oil and gas operators.',
                      'Ideon\'s inclusion in this list signals something important about the Toronto-adjacent tech ecosystem: it is not only consumer apps and fintech. Canada has world-class engineering capability in deep tech, geoscience software, and industrial AI — domains where Toronto-area firms are increasingly competitive globally.',
                      'Key Services: Subsurface muon detection systems, 3D geological mapping software, mining exploration data platforms, infrastructure scanning. Best For: Mining companies, civil engineering firms, and infrastructure operators requiring non-invasive subsurface imaging.',
                    ],
                  },
                  {
                    num: '10', id: 'float', name: 'Float', category: 'Corporate Spend',
                    emoji: '💳', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    hq: 'Toronto, Ontario',
                    metric: 'Canadian corporate card & spend management | 2,000+ clients',
                    paragraphs: [
                      'Float is Toronto\'s answer to Brex and Ramp — a Canadian-built corporate card and spend management platform purpose-built for the Canadian market. Unlike US competitors, Float integrates natively with Canadian banking rails, supports CAD-denominated spending limits, and complies with Canadian financial regulations out of the box. With 2,000+ Canadian businesses on the platform and $50M+ raised, Float is one of Toronto\'s most impressive recent fintech product launches.',
                      'Float\'s engineering team has built a platform that handles real-time card issuance, spend controls, receipt management, and accounting system sync (QuickBooks, Xero, NetSuite) — all solving specifically Canadian problems that US fintech products handle poorly. They are proof that the Toronto fintech ecosystem is producing world-class financial infrastructure products tailored to the Canadian business context.',
                      'Key Services (Platform): Corporate cards, spend management, expense tracking, receipt capture, accounting integrations, team spend policies. Best For: Canadian businesses with 10–500 employees seeking to modernize corporate expense management. Not a development agency.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 36 }} id={app.id}>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 28, padding: 36,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                          background: `${app.bgColor}0.1)`, border: `1px solid ${app.bgColor}0.2)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                        }}>{app.emoji}</div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}0.12)`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{app.hq}</span>
                          </div>
                          <h3 style={{
                            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 700, color: '#ffffff',
                            letterSpacing: '-0.03em', margin: 0,
                          }}>{app.name}</h3>
                        </div>
                      </div>
                      {app.paragraphs.map((para, pi) => (
                        <p key={pi} style={{
                          fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: pi < app.paragraphs.length - 1 ? 14 : 18,
                        }}>{para}</p>
                      ))}
                      <div style={{
                        padding: '12px 18px', borderRadius: 12,
                        background: `${app.bgColor}0.06)`, border: `1px solid ${app.bgColor}0.12)`,
                        display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={app.accentColor} strokeWidth="2">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                        </svg>
                        <span style={{ fontSize: 13, color: app.accentColor, fontWeight: 600 }}>{app.metric}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* City Comparison Table */}
                <div className="reveal" id="city-comparison" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Toronto vs Vancouver vs Edmonton: Cost &amp; Talent Comparison</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
                    All rates in CAD per hour for mid-level developers. Data reflects 2026 market conditions.
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Factor', 'Toronto', 'Vancouver', 'Edmonton'].map(h => (
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
                          { factor: 'Mid Developer Rate', toronto: '$110–$150/hr', vancouver: '$105–$145/hr', edmonton: '$90–$120/hr' },
                          { factor: 'Senior Developer Rate', toronto: '$150–$200+/hr', vancouver: '$145–$190+/hr', edmonton: '$120–$175/hr' },
                          { factor: 'Tech Talent Pool', toronto: 'Largest (340K+)', vancouver: 'Large (180K+)', edmonton: 'Growing (55K+)' },
                          { factor: 'Cost of Living Index', toronto: 'High', vancouver: 'Very High', edmonton: 'Moderate' },
                          { factor: 'AI / ML Expertise', toronto: 'Exceptional (Vector Inst.)', vancouver: 'Strong', edmonton: 'Growing (UAlberta)' },
                          { factor: 'Fintech Ecosystem', toronto: 'Canada\'s best', vancouver: 'Strong', edmonton: 'Emerging' },
                          { factor: 'SR&ED Eligible', toronto: 'Yes', vancouver: 'Yes', edmonton: 'Yes' },
                          { factor: 'Best Value For', toronto: 'Enterprise / Fintech', vancouver: 'Gaming / Media', edmonton: 'Gov / Oil & Gas / SaaS' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{row.factor}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{row.toronto}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{row.vancouver}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: '#22c55e', fontWeight: 600 }}>{row.edmonton}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* How to Hire */}
                <div className="reveal" id="how-to-hire" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>How to Hire a Toronto App Development Team: 6-Step Guide</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {[
                      { step: '01', title: 'Write a Scope Before You Talk to Anyone', desc: 'Toronto development firms receive hundreds of inquiries monthly. The fastest way to move to the front of the queue — and get accurate quotes — is to arrive with a clear product brief: core user journeys, key integrations, platform targets (iOS/Android/web), and a realistic budget range. Without this, any quote you receive is a guess.' },
                      { step: '02', title: 'Request Canadian Case Studies, Not Just Logos', desc: 'Any development firm can display client logos. Ask specifically for Canadian client case studies — projects where they dealt with Canadian payment systems (Interac, Stripe Canada), provincial privacy laws (PIPEDA, Quebec Law 25), or Canadian App Store/Google Play distribution. This separates firms with genuine Canadian market knowledge from those who serve US clients exclusively.' },
                      { step: '03', title: 'Verify SR&ED Eligibility Early', desc: 'Canada\'s Scientific Research and Experimental Development (SR&ED) tax credit program can recover 15–35% of eligible software development costs. Ask any development firm whether your project qualifies and whether they have experience preparing or supporting SR&ED claims. Firms like Codazz that work with Canadian clients regularly understand this process.' },
                      { step: '04', title: 'Insist on Weekly Demos, Not Status Emails', desc: 'Running software in a staging environment is the only honest progress signal. Structure your contract to require weekly demo sessions — not status reports. Any firm that resists this clause is telling you something important about their delivery confidence.' },
                      { step: '05', title: 'Clarify IP Ownership Before Day One', desc: 'Ensure your development agreement explicitly assigns all IP, source code, and work product to you. Canadian development contracts should include clear IP assignment language. Ask for a contract review from your lawyer before signing.' },
                      { step: '06', title: 'Consider Distributed Canadian Teams for Better Value', desc: 'The best value in Canadian software development is often not a Toronto-HQ firm. Codazz (Edmonton HQ) charges $95–$145 CAD/hr for work that comparable Toronto agencies quote at $130–$175 CAD/hr. Same Canadian law, same timezone, meaningfully lower total project cost.' },
                    ].map((s, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: 24, padding: 26, borderRadius: 20,
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <div style={{
                          width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                          background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 14, fontWeight: 800, color: '#22c55e',
                        }}>{s.step}</div>
                        <div>
                          <p style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{s.title}</p>
                          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SR&ED */}
                <div className="reveal" id="sred" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>SR&amp;ED Tax Credits: Canada&apos;s R&amp;D Advantage</h2>
                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                    borderRadius: 20, padding: 32, marginBottom: 24,
                  }}>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Canada&apos;s Scientific Research and Experimental Development (SR&amp;ED) program is one of the most generous R&amp;D incentive programs in the world — and it applies directly to innovative software development. If your app involves novel AI algorithms, new protocol development, or solving a technological uncertainty, your project may qualify for SR&amp;ED credits worth 15–35% of eligible expenditures.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                      For Canadian-controlled private corporations (CCPCs), the enhanced SR&amp;ED credit rate is 35% on the first $3 million of eligible expenditures — potentially returning $1.05 million on a $3M software project. For larger corporations, the base federal rate is 15%, with additional provincial credits available in Ontario (8%), Alberta (10%), and other provinces.
                    </p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
                    {[
                      { title: 'CCPC Rate', value: 'Up to 35%', desc: 'Enhanced rate for Canadian-controlled private corporations' },
                      { title: 'Federal Base Rate', value: '15%', desc: 'For non-CCPCs on qualifying R&D expenditures' },
                      { title: 'Ontario Provincial', value: '+8%', desc: 'Additional provincial credit stacked on federal' },
                      { title: 'Alberta Provincial', value: '+10%', desc: 'Additional provincial credit stacked on federal' },
                    ].map((s, i) => (
                      <div key={i} style={{
                        padding: 20, borderRadius: 16,
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>{s.title}</p>
                        <p style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 800, color: '#22c55e', margin: '0 0 8px', letterSpacing: '-0.03em' }}>{s.value}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" id="faq" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Frequently Asked Questions</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', marginBottom: 28 }}>
                    Common questions from Toronto businesses evaluating development partners.
                  </p>
                  {[
                    {
                      q: 'How much does app development cost in Toronto in 2026?',
                      a: 'A basic mobile app with 5–8 screens and a simple backend typically costs $60,000–$120,000 CAD with a Toronto-market development firm. A mid-complexity app (10–15 features, payment integration, admin dashboard, real-time elements) runs $120,000–$250,000 CAD. Enterprise-grade platforms with AI, complex APIs, and multi-platform delivery start at $300,000 CAD and up. Choosing a distributed Canadian firm like Codazz (Edmonton HQ) can reduce total project cost by 20–35% compared to a pure Toronto agency at equivalent quality.',
                    },
                    {
                      q: 'Is it better to hire a Toronto dev firm or a distributed Canadian team?',
                      a: 'For most projects, a distributed Canadian team with strong remote delivery practices delivers equal or better value. The key requirement is Canadian management standards — same-timezone availability, PIPEDA-compliant data handling, Canadian IP law, and SR&ED familiarity. Codazz operates from Edmonton with these standards built in, at rates 20–30% below equivalent Toronto firms. The in-person office advantage of a Toronto firm is real but rarely justifies the premium for software development work.',
                    },
                    {
                      q: 'Do Toronto development companies qualify for SR&ED tax credits?',
                      a: 'Yes — any Canadian-registered corporation doing qualifying software R&D can apply for SR&ED credits, regardless of city. The key is that the work must involve technological uncertainty. Your development firm should be able to advise on SR&ED eligibility and help you document qualifying work. This is one area where working with an experienced Canadian firm pays for itself.',
                    },
                    {
                      q: 'What technologies do Toronto development companies specialize in?',
                      a: 'Toronto has particular depth in fintech (Interac integrations, Canadian banking APIs, FINTRAC compliance), enterprise SaaS, AI/ML (proximity to the Vector Institute), and retail tech (Shopify ecosystem, TouchBistro, Tulip). Cross-platform mobile (React Native, Flutter) is strong across all Canadian cities. Codazz specifically covers mobile/iOS/Android, Next.js/React, Node.js, Python/AI, Flutter, and cloud (AWS/GCP/Azure).',
                    },
                    {
                      q: 'How long does app development take with a Toronto company?',
                      a: 'An MVP (3–5 core features, one platform) takes 10–16 weeks with a dedicated team. A full-featured app (8–12 features, two platforms, admin dashboard) typically takes 4–7 months. Complex enterprise platforms with AI, real-time features, and multi-region infrastructure take 8–14 months. These timelines assume a well-scoped project from day one — projects without clear requirements routinely run 40–80% over initial estimates.',
                    },
                  ].map((faq, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.015)', border: openFaq === i ? '1px solid rgba(34,197,94,0.2)' : '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 16, marginBottom: 12, overflow: 'hidden', transition: 'border-color 0.2s',
                    }}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{
                          width: '100%', padding: '20px 24px', background: 'transparent', border: 'none',
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          cursor: 'pointer', gap: 16, textAlign: 'left',
                        }}
                      >
                        <span style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                        <span style={{
                          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                          background: openFaq === i ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.05)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 16, color: openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.4)',
                          transition: 'all 0.2s',
                        }}>{openFaq === i ? '−' : '+'}</span>
                      </button>
                      {openFaq === i && (
                        <div style={{ padding: '0 24px 20px' }}>
                          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </article>

              {/* SIDEBAR */}
              <aside>
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>

                  {/* TOC */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {[
                        { href: '#toronto-ecosystem', label: 'Toronto Tech Ecosystem' },
                        { href: '#toronto-rates', label: 'Toronto Dev Rates' },
                        { href: '#key-takeaways', label: 'Key Takeaways' },
                        { href: '#top-companies', label: 'Top 10 Companies' },
                        { href: '#codazz', label: '#1 Codazz' },
                        { href: '#city-comparison', label: 'Toronto vs Vancouver vs Edmonton' },
                        { href: '#how-to-hire', label: 'How to Hire a Dev Team' },
                        { href: '#sred', label: 'SR&ED Tax Credits' },
                        { href: '#faq', label: 'FAQ' },
                      ].map((item) => (
                        <a key={item.href} href={item.href} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '7px 10px', borderRadius: 8,
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
                        >{item.label}</a>
                      ))}
                    </nav>
                  </div>

                  {/* Rate Reference */}
                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 16,
                    }}>Toronto Rate Reference (CAD/hr)</p>
                    {[
                      { label: 'Junior Developer', rate: '$85–$110' },
                      { label: 'Mid-Level Developer', rate: '$110–$150' },
                      { label: 'Senior Developer', rate: '$150–$200+' },
                      { label: 'AI / ML Engineer', rate: '$125–$220+' },
                      { label: 'Codazz (Edmonton)', rate: '$95–$145' },
                    ].map((r, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        paddingBottom: i < 4 ? 10 : 0, marginBottom: i < 4 ? 10 : 0,
                        borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}>
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{r.label}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: i === 4 ? '#22c55e' : 'rgba(255,255,255,0.7)' }}>{r.rate}</span>
                      </div>
                    ))}
                  </div>

                  {/* Author */}
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
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#22c55e', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Runs Codazz from Edmonton, Alberta with offices in Chandigarh, New York, and Dubai. Has guided 500+ product launches across mobile, SaaS, AI, and web for clients across Canada, the US, and the UAE.
                    </p>
                  </div>

                  {/* Related Posts */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
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

        {/* BOTTOM CTA */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80, paddingBottom: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: 'clamp(40px, 6vw, 64px) clamp(32px, 5vw, 56px)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#22c55e', marginBottom: 12,
                }}>Canada&apos;s Top Dev Team</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Work with Canada&apos;s Top Dev Team
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 520, lineHeight: 1.7 }}>
                  Codazz delivers Canadian-standard mobile, web, and AI development from Edmonton — at rates 20–30% below Toronto market pricing. 500+ launches. SR&amp;ED-eligible. No surprises.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Talk to Codazz →
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
