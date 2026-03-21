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
  { num: 1, name: 'Codazz', category: 'Mobile / AI / SaaS', emoji: '🍁', metric: 'Edmonton HQ | 500+ Apps | $85–$145 CAD/hr | Founded by Raman Makkar', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Jobber', category: 'Field Service SaaS', emoji: '🔧', metric: 'Edmonton-grown | 250K+ service businesses | Acquired clients globally', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 3, name: 'Benevity', category: 'Corporate Giving', emoji: '❤️', metric: 'Calgary HQ, Edmonton presence | $10B+ in donations processed', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Trimble', category: 'AgriTech / Construction', emoji: '🌾', metric: 'Agriculture & construction technology | Edmonton operations', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 5, name: 'ATB Financial Digital', category: 'Banking Tech', emoji: '🏦', metric: 'Alberta\'s bank | Digital banking platform for 800K+ Albertans', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 6, name: 'Gov Alberta Digital Services', category: 'GovTech', emoji: '🏛️', metric: 'Province-wide digital transformation | Open-source delivery', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 7, name: 'Stollery Digital Health', category: 'HealthTech', emoji: '🏥', metric: 'Pediatric digital health innovation | Edmonton-based research', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 8, name: 'Olds College of Technology', category: 'AgriTech', emoji: '🌱', metric: 'Smart farm research | Alberta precision agriculture hub', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'NovaBay Pharmaceuticals', category: 'Life Science Tech', emoji: '🔬', metric: 'Bioscience software & data platforms | Healthcare innovation', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 10, name: 'Northforge Innovations', category: 'Boutique Dev Agency', emoji: '⚙️', metric: 'Edmonton-based custom software | Oil & gas and enterprise clients', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'top-app-development-companies-canada', title: 'Top App Development Companies in Canada (2026)', category: 'Rankings', readTime: '10 min' },
  { slug: 'app-development-companies-toronto', title: 'Top App Development Companies in Toronto (2026)', category: 'Rankings', readTime: '12 min' },
  { slug: 'app-development-cost-canada', title: 'How Much Does App Development Cost in Canada (2026)?', category: 'Cost Guide', readTime: '9 min' },
];

export default function SoftwareDevelopmentCompaniesEdmontonClient() {
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
              }}>Software Development</span>
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
                11 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 860,
            }}>
              Top Software Development Companies in Edmonton, Alberta (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Edmonton is Canada&apos;s hidden tech hub — with AI research at the University of Alberta, oil and gas digital transformation driving massive software investment, and dev rates 20–30% below Toronto. This is the definitive 2026 guide to the top software development companies calling Edmonton home.
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
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz — Edmonton, Alberta</p>
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
                    Edmonton doesn&apos;t make headlines the way Toronto and Vancouver do. But if you look past the oil sands narrative, you&apos;ll find a city that has been quietly building one of Canada&apos;s most compelling technology ecosystems — anchored by the University of Alberta&apos;s globally ranked AI and machine learning research, a provincial government investing heavily in digital transformation, and a resource-sector client base with some of the deepest software development budgets in the country.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Edmonton&apos;s software development market has two distinct advantages that buyers consistently underestimate. First, developer rates run 20–30% below Toronto and Vancouver for equivalent seniority — a meaningful savings on any serious project. Second, because Edmonton-based firms primarily serve oil and gas, agriculture, government, and healthcare clients, they have developed deep domain expertise in exactly the sectors that are now undergoing the most dramatic digital transformation.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide ranks the top 10 software development companies in Edmonton for 2026. We start with the clear market leader — Codazz, which is headquartered here — and cover the full ecosystem from enterprise SaaS success stories to government digital teams and agritech innovators.
                  </p>
                </div>

                {/* Edmonton Ecosystem */}
                <div className="reveal" id="edmonton-ecosystem" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Edmonton Tech Ecosystem Overview</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>
                    Six market statistics that explain why Edmonton is Canada&apos;s most underestimated tech city.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 32 }}>
                    {[
                      { stat: '55,000+', label: 'Tech workers in the Edmonton metro area (2026)', icon: '👥' },
                      { stat: '$2.4B+', label: 'Government of Alberta digital transformation investment (2024–2027)', icon: '🏛️' },
                      { stat: '20–30%', label: 'Lower developer rates vs Toronto / Vancouver for equivalent talent', icon: '💵' },
                      { stat: '#6', label: 'University of Alberta AI research ranking globally (2026)', icon: '🤖' },
                      { stat: '$180B+', label: 'Oil & gas sector driving software investment across Alberta', icon: '⛽' },
                      { stat: '3,400+', label: 'Registered tech companies in the Edmonton Economic Region', icon: '🏢' },
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
                      { name: 'University of Alberta', icon: '🎓', desc: 'Produces 2,000+ CS and engineering graduates annually. Home to the Alberta Machine Intelligence Institute (Amii), one of Canada\'s three national AI institutes.', type: 'AI Research Hub' },
                      { name: 'NAIT & MacEwan', icon: '🏫', desc: 'NAIT\'s technology programs and MacEwan\'s computing science department are key pipelines for mid-level developer talent in Edmonton.', type: 'Talent Pipeline' },
                      { name: 'Edmonton Economic Development', icon: '📊', desc: 'Actively supports tech sector growth through the Edmonton Innovation Corridor and partnerships with Startup Edmonton and the Business Link.', type: 'Ecosystem Support' },
                      { name: 'Startup Edmonton', icon: '🚀', desc: 'A thriving startup community with 200+ active tech companies, accelerator programs, and connections to the Prairies tech investor network.', type: 'Startup Hub' },
                    ].map((d, i) => (
                      <div key={i} style={{
                        padding: 20, borderRadius: 16,
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <div style={{ fontSize: 26, marginBottom: 8 }}>{d.icon}</div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{d.name}</p>
                        <p style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{d.type}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rates Table */}
                <div className="reveal" id="edmonton-rates" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Edmonton Software Development Rates (2026)</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
                    All rates in CAD per hour. Edmonton rates are consistently 20–30% below Toronto and 15–25% below Vancouver for equivalent seniority — without any quality compromise.
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
                          { role: 'iOS Developer', junior: '$70–$85/hr', mid: '$90–$115/hr', senior: '$125–$160/hr' },
                          { role: 'Android Developer', junior: '$70–$85/hr', mid: '$90–$115/hr', senior: '$125–$165/hr' },
                          { role: 'React Native / Flutter', junior: '$72–$90/hr', mid: '$92–$120/hr', senior: '$128–$170/hr' },
                          { role: 'Full-Stack (Node/React)', junior: '$70–$90/hr', mid: '$92–$120/hr', senior: '$128–$175/hr' },
                          { role: 'Backend / Cloud', junior: '$75–$90/hr', mid: '$95–$125/hr', senior: '$130–$175/hr' },
                          { role: 'UI/UX Designer', junior: '$65–$80/hr', mid: '$80–$110/hr', senior: '$115–$150/hr' },
                          { role: 'AI / ML Engineer', junior: '$80–$100/hr', mid: '$105–$135/hr', senior: '$140–$185/hr' },
                          { role: 'Codazz (All Roles)', junior: '—', mid: '$85–$115/hr', senior: '$115–$145/hr' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i === 7 ? 'rgba(34,197,94,0.03)' : 'transparent' }}>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: i === 7 ? '#22c55e' : 'rgba(255,255,255,0.8)', fontWeight: i === 7 ? 700 : 600 }}>{row.role}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.junior}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: i === 7 ? '#22c55e' : 'rgba(255,255,255,0.6)', fontWeight: i === 7 ? 700 : 500 }}>{row.mid}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: i === 7 ? '#22c55e' : '#22c55e', fontWeight: 700 }}>{row.senior}</td>
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
                        'Edmonton dev rates ($70–$175 CAD/hr) run 20–30% below Toronto for equivalent talent — making it Canada\'s best value market for high-quality software development.',
                        'Codazz, headquartered in Edmonton, is the market\'s standout choice: 500+ apps launched, 100+ engineers, and a service model that scales from startup MVP to enterprise platform.',
                        'Edmonton has unique domain depth in oil & gas software, government digital transformation, agriculture technology, and healthcare — sectors that most tech cities cannot match.',
                        'University of Alberta\'s Amii (Alberta Machine Intelligence Institute) gives Edmonton-based firms access to world-class AI research talent, making the city a legitimate AI development hub.',
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
                  }}>Top 10 Software Development Companies in Edmonton (2026)</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                    Ranked by delivery capability, domain expertise, client reach, and value for money. Codazz is ranked #1 — not as a formality, but because no other Edmonton firm matches its combination of scale, specialization, and track record.
                  </p>
                </div>

                {/* Company 1 - Codazz FEATURED */}
                <div className="reveal" id="codazz" style={{ marginBottom: 40 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '2px solid rgba(34,197,94,0.35)',
                    borderRadius: 28, padding: 44, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, background: 'radial-gradient(circle, rgba(34,197,94,0.16) 0%, transparent 70%)', filter: 'blur(50px)' }} />
                    <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
                        <div style={{
                          padding: '5px 16px', borderRadius: 100,
                          background: 'rgba(34,197,94,0.18)', border: '1px solid rgba(34,197,94,0.4)',
                          fontSize: 11, fontWeight: 800, color: '#22c55e', letterSpacing: '0.12em', textTransform: 'uppercase',
                        }}>#1 Edmonton&apos;s Top Dev Company</div>
                        <div style={{
                          padding: '5px 14px', borderRadius: 100,
                          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                          fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)',
                        }}>500+ Apps Launched</div>
                        <div style={{
                          padding: '5px 14px', borderRadius: 100,
                          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                          fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)',
                        }}>100+ Engineers</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24 }}>
                        <div style={{
                          width: 72, height: 72, borderRadius: 20, flexShrink: 0,
                          background: 'rgba(34,197,94,0.14)', border: '2px solid rgba(34,197,94,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36,
                        }}>🍁</div>
                        <div>
                          <h2 style={{
                            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#ffffff',
                            letterSpacing: '-0.04em', margin: 0,
                          }}>Codazz</h2>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', margin: '6px 0 0' }}>
                            HQ: Edmonton, Alberta · Dev Centre: Chandigarh, India · Offices: New York, Dubai · Founded by Raman Makkar
                          </p>
                        </div>
                      </div>

                      {/* Why We're #1 card */}
                      <div style={{
                        background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.18)',
                        borderRadius: 18, padding: 24, marginBottom: 24,
                      }}>
                        <p style={{ fontSize: 12, fontWeight: 800, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Why Codazz is Edmonton&apos;s #1</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                          {[
                            { icon: '📱', point: '500+ apps launched across mobile, SaaS, AI, and web — more than any other Edmonton firm' },
                            { icon: '👥', point: '100+ engineers across Edmonton and Chandigarh, managed by Canadian leadership' },
                            { icon: '🌎', point: 'Serving clients in Canada, USA, UAE, and UK with North American delivery standards' },
                            { icon: '🔒', point: 'IP protected under Canadian law. PIPEDA-compliant. SR&ED-eligible projects supported' },
                          ].map((p, i) => (
                            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                              <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{p.icon}</span>
                              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0 }}>{p.point}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, marginBottom: 16 }}>
                        Codazz is Edmonton&apos;s most prolific software development company and the clear first choice for businesses across Canada, the United States, and the UAE seeking world-class mobile, SaaS, and AI development. Founded by Raman Makkar, Codazz has built 500+ products ranging from startup MVPs to enterprise-scale platforms — with a team of 100+ engineers operating from Edmonton and Chandigarh under Canadian management oversight.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, marginBottom: 16 }}>
                        What sets Codazz apart in the Edmonton market is the combination of local knowledge and global reach. Edmonton-based clients benefit from face-to-face discovery sessions, Alberta market context, and rates that make serious software investment viable without the Toronto or Vancouver overhead. International clients benefit from a North American time zone, Canadian law, and an engineering operation that runs with the precision of a top-tier US development firm at a fraction of the cost.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, marginBottom: 28 }}>
                        Core capabilities include native mobile development (Swift, Kotlin), cross-platform (Flutter, React Native), full-stack web (Next.js, Node.js, Python), AI and ML engineering (LLM integration, RAG pipelines, custom models), cloud infrastructure (AWS, GCP, Azure), and UI/UX design. Codazz has delivered for clients in oil and gas, government, healthcare, fintech, logistics, ecommerce, and SaaS — the exact industries that dominate Edmonton&apos;s economy.
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: 28 }}>
                        {[
                          { label: 'Rate Range', value: '$85–$145 CAD/hr' },
                          { label: 'Min Project', value: '$25K CAD' },
                          { label: 'Team Size', value: '100+ Engineers' },
                          { label: 'Apps Launched', value: '500+' },
                          { label: 'HQ', value: 'Edmonton, AB' },
                          { label: 'Clients In', value: 'CA / US / UAE / UK' },
                        ].map((m, i) => (
                          <div key={i} style={{
                            padding: '14px 16px', borderRadius: 14,
                            background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)',
                          }}>
                            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>{m.label}</p>
                            <p style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', margin: 0 }}>{m.value}</p>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        {['iOS & Android', 'Flutter / React Native', 'SaaS Platforms', 'AI / ML', 'Next.js', 'Cloud (AWS/GCP)', 'UI/UX', 'Oil & Gas Tech'].map((tag, i) => (
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
                    num: '02', id: 'jobber', name: 'Jobber', category: 'Field Service SaaS',
                    emoji: '🔧', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    hq: 'Edmonton, Alberta',
                    metric: '250,000+ service businesses | $100M+ raised | Edmonton-grown SaaS success',
                    paragraphs: [
                      'Jobber is Edmonton\'s most prominent global SaaS success story. Founded in 2011, Jobber built a field service management platform that serves over 250,000 home service businesses — plumbers, electricians, landscapers, cleaners — across North America, the UK, and Australia. With over $100M in funding and a team that grew from a small Edmonton team to a 1,000+ person distributed company, Jobber is proof of what Edmonton can produce at the highest level of software product excellence.',
                      'Jobber\'s engineering team has solved some of the hardest problems in small business software: scheduling optimization, real-time dispatch, offline-capable mobile apps, payment processing, and client communication systems — all built to serve businesses that often operate entirely from a phone. Their architecture handles millions of job transactions daily and integrates with QuickBooks, Stripe, and dozens of other small business tools.',
                      'Jobber is a product company, not a development agency — but their presence in Edmonton\'s tech ecosystem is significant. They attract top engineering talent to the city, participate in the Startup Edmonton community, and are proof to global investors that Edmonton can produce enterprise-grade SaaS at scale.',
                    ],
                  },
                  {
                    num: '03', id: 'benevity', name: 'Benevity', category: 'Corporate Giving Platform',
                    emoji: '❤️', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    hq: 'Calgary HQ, significant Edmonton presence',
                    metric: '$10B+ in donations processed | 1,000+ enterprise clients | Purpose-driven tech',
                    paragraphs: [
                      'Benevity is the world\'s leading corporate giving and employee engagement platform — a Calgary-headquartered company with meaningful engineering presence in Edmonton. Their platform has processed over $10 billion in charitable donations and volunteer hours for over 1,000 enterprise clients including Google, Microsoft, Apple, and Nike. Benevity\'s engineering team handles a remarkably complex technical challenge: real-time charitable donation routing to 2 million+ nonprofits across 130+ countries, with full tax compliance in each jurisdiction.',
                      'For Edmonton\'s tech ecosystem, Benevity represents the premium end of the Alberta SaaS market — demonstrating that purpose-driven enterprise software built from the Prairies can compete globally with US and European incumbents. Their Edmonton-based engineers work on mission-critical financial infrastructure and compliance systems.',
                      'Benevity is not a development partner — they are a platform company. But their technical standards and hiring practices set a benchmark for engineering quality in the Alberta market. Companies evaluating Edmonton-based dev firms should know that Benevity alumni represent some of the best senior engineering talent available locally.',
                    ],
                  },
                  {
                    num: '04', id: 'trimble', name: 'Trimble', category: 'AgriTech & Construction Tech',
                    emoji: '🌾', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    hq: 'Sunnyvale, CA (Edmonton operations)',
                    metric: 'Precision agriculture & construction technology | NASDAQ-listed | $3.7B revenue',
                    paragraphs: [
                      'Trimble is a global technology company with significant operations in Edmonton, serving the agriculture and construction sectors with positioning, sensing, and workflow software that makes physical work more precise and efficient. Their agriculture division — which includes GPS-guided farming equipment, precision irrigation systems, and field management software — is heavily present in Alberta given the province\'s massive agricultural output.',
                      'Trimble\'s Edmonton operations focus on developing and supporting software for Western Canadian agricultural clients: precision seeding and harvest management, field data platforms, and connectivity solutions that allow farmers to manage thousands of acres of crops from a tablet. Their presence anchors Edmonton\'s agritech ecosystem alongside Olds College and the Alberta government\'s Smart Farm initiative.',
                      'Key Services: Precision agriculture software, GPS-guided farming systems, construction technology, asset tracking, field management platforms. Best For: Agricultural operations and construction companies in Western Canada seeking precision technology and workflow optimization.',
                    ],
                  },
                  {
                    num: '05', id: 'atb-digital', name: 'ATB Financial Digital', category: 'Banking Technology',
                    emoji: '🏦', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    hq: 'Edmonton, Alberta',
                    metric: '800K+ Albertans served | Digital-first banking platform | $55B assets under management',
                    paragraphs: [
                      'ATB Financial is Alberta\'s bank — a Crown corporation serving over 800,000 Albertans and 55,000 businesses with $55 billion in assets under management. ATB\'s digital team, headquartered in Edmonton, has been one of the most progressive in Canadian banking — building mobile banking apps, AI-powered financial advice tools, and open banking APIs years ahead of the major chartered banks.',
                      'ATB\'s investment in digital engineering has produced some of the most thoughtful banking software in Canada: their mobile app is consistently among the highest-rated banking apps on Canadian app stores, and their internal data platform powers personalized financial coaching features that the big banks are still trying to replicate. ATB is also notable for publishing open-source tools and participating in Canadian open banking standards development.',
                      'ATB is not a development agency — they are Alberta\'s bank. But their engineering team is a significant talent anchor for Edmonton\'s tech ecosystem, and their digital products define the quality standard for fintech in the Alberta market.',
                    ],
                  },
                  {
                    num: '06', id: 'gov-alberta-digital', name: 'Government of Alberta Digital Services', category: 'Government Technology',
                    emoji: '🏛️', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    hq: 'Edmonton (Legislature Grounds)',
                    metric: '$2.4B digital transformation budget | 4.5M Albertans served | Open-source delivery',
                    paragraphs: [
                      'The Government of Alberta\'s Digital Services division is one of the largest technology employers in Edmonton and one of the most ambitious government digital transformation programs in Canada. With a $2.4 billion investment in digital infrastructure from 2024–2027, the GoA Digital Services team is rebuilding dozens of government services — from driver\'s licence renewals to business registration, social services applications, and health benefit systems — for online delivery.',
                      'Alberta\'s government technology team has adopted modern delivery practices including agile development, open-source software, and design thinking — methods that are still uncommon in most provincial governments. They publish code on GitHub, follow Government of Canada Digital Standards, and have built some of the cleanest government digital products in Canada, including the AlbertaCOVID app (built rapidly in 2020) and the MyAlberta Digital ID system.',
                      'For Edmonton\'s tech ecosystem, the GoA Digital Services team is a significant employer of engineers, UX designers, and product managers. They also contract extensively with local development partners, including Edmonton-based firms with government security clearances and domain expertise in public sector software delivery.',
                    ],
                  },
                  {
                    num: '07', id: 'stollery-digital', name: 'Stollery Children\'s Hospital Digital Health', category: 'Healthcare Technology',
                    emoji: '🏥', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    hq: 'Edmonton, Alberta (University of Alberta Hospital Campus)',
                    metric: 'Pediatric digital health innovation | Research-to-clinical technology transfer',
                    paragraphs: [
                      'The Stollery Children\'s Hospital, part of the University of Alberta Hospital complex in Edmonton, has developed a notable digital health innovation program that bridges research-grade healthcare technology and clinical application. Their digital health team works on mobile health tools, patient monitoring platforms, telehealth applications, and clinical decision support systems that serve pediatric patients across Northern Alberta and rural communities.',
                      'Stollery\'s digital work is significant in the Edmonton tech context because it demonstrates the depth of healthcare technology development happening in the city — not just for Alberta, but as a model for other pediatric centres across Canada. Their work on remote patient monitoring and AI-assisted clinical tools puts Edmonton at the forefront of Canadian healthcare innovation.',
                      'For software companies looking to enter the digital health space, Stollery and the broader University of Alberta health research network represent a significant partnership opportunity. Edmonton-based firms with healthcare domain expertise — particularly HIPAA/PIPEDA-compliant development capability — have access to a healthcare research ecosystem that few cities outside Toronto can match.',
                    ],
                  },
                  {
                    num: '08', id: 'olds-college', name: 'Olds College of Technology', category: 'AgriTech Innovation',
                    emoji: '🌱', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    hq: 'Olds, Alberta (90 min from Edmonton)',
                    metric: 'Smart Farm research hub | Precision agriculture innovation | Federal AgriTech funding',
                    paragraphs: [
                      'Olds College of Technology, located 90 minutes south of Edmonton, operates one of Canada\'s most advanced agricultural technology research programs — the Olds College Smart Farm. This 2,700-acre research facility serves as a living laboratory for precision agriculture software, autonomous farming systems, IoT sensor networks, drone-based crop monitoring, and AI-powered agronomic advisory tools.',
                      'Olds College is not a software development company in the traditional sense, but it is a critical anchor in Alberta\'s agritech innovation ecosystem and a key research partner for Edmonton-based software companies building agricultural technology. Their Smart Farm generates real-world data and testing environments for precision agriculture applications — a resource that gives Alberta-based agritech developers a significant advantage over out-of-province competitors.',
                      'For software companies building in the agriculture technology space, the Olds College Smart Farm represents access to large-scale field testing, agronomic expertise, and federal research partnerships that can accelerate product development and SR&ED eligibility documentation.',
                    ],
                  },
                  {
                    num: '09', id: 'novabay', name: 'NovaBay Pharmaceuticals (Alberta)', category: 'Life Science Tech',
                    emoji: '🔬', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    hq: 'Edmonton research operations',
                    metric: 'Bioscience software & clinical data platforms | Healthcare innovation',
                    paragraphs: [
                      'Edmonton\'s life sciences sector — anchored by the University of Alberta\'s Faculty of Medicine, the Cross Cancer Institute, and Alberta Health Services — has been growing rapidly, and with it comes demand for clinical data platforms, regulatory compliance software, and research informatics tools. NovaBay Pharmaceuticals\' Alberta research operations are part of this broader life sciences software ecosystem.',
                      'Life science software in Edmonton covers clinical trial management systems, electronic health records integration, laboratory information systems, and bioinformatics tools — all requiring the combination of healthcare domain expertise, regulatory compliance knowledge, and strong software engineering that Edmonton\'s developer community is well-positioned to provide.',
                      'Key Services (Ecosystem): Clinical data management, regulatory submission software, laboratory information systems, healthcare analytics, bioinformatics platforms. Best For: Life science companies and research institutions in Alberta seeking compliant healthcare software with domain-specific expertise.',
                    ],
                  },
                  {
                    num: '10', id: 'northforge', name: 'Northforge Innovations', category: 'Boutique Agency',
                    emoji: '⚙️', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    hq: 'Edmonton, Alberta',
                    metric: 'Custom software for oil & gas and enterprise | Edmonton-born boutique studio',
                    paragraphs: [
                      'Northforge Innovations represents the boutique end of Edmonton\'s software development market — a smaller, specialist agency with deep expertise in custom software for the oil and gas, utilities, and enterprise sectors that dominate Alberta\'s economy. Boutique Edmonton agencies like Northforge often serve clients that require on-site consulting, provincial regulatory knowledge, and long-term support relationships that larger national firms are less equipped to provide.',
                      'Edmonton\'s boutique agency ecosystem serves a specific need: local clients with complex, industry-specific requirements who need a team that understands Alberta\'s regulatory environment, can attend site visits at industrial facilities, and will be present over the multi-year lifecycle of a business-critical system. For these engagements, local boutique firms offer relationship depth that remote teams cannot easily replicate.',
                      'Key Services: Custom ERP integrations, field operations software, industrial IoT dashboards, compliance reporting systems, legacy system modernization. Best For: Alberta-based oil and gas, utilities, and enterprise organizations that need local software partners with provincial industry knowledge and on-site availability.',
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

                {/* Industry Cards */}
                <div className="reveal" id="industries" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Edmonton Industries Leading Digital Transformation</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>
                    Four sectors where Edmonton-based software companies have built world-class domain expertise.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                    {[
                      {
                        icon: '⛽',
                        title: 'Oil & Gas',
                        accentColor: '#fbbf24',
                        desc: 'Field operations software, pipeline monitoring, SCADA integration, environmental compliance tracking, and asset management systems. Alberta\'s $180B+ oil and gas industry creates one of the largest industrial software markets in Canada.',
                        tags: ['Field Ops', 'SCADA', 'Pipeline Tech', 'Asset Management'],
                      },
                      {
                        icon: '🏛️',
                        title: 'Government Services',
                        accentColor: '#a78bfa',
                        desc: 'Digital identity, citizen service portals, case management systems, open data platforms, and regulatory compliance tools. The GoA\'s $2.4B digital transformation is creating a sustained demand pipeline for local developers.',
                        tags: ['Digital ID', 'Citizen Portals', 'Case Management', 'Open Data'],
                      },
                      {
                        icon: '🌾',
                        title: 'Agriculture / AgriTech',
                        accentColor: '#4ade80',
                        desc: 'Precision farming software, crop management platforms, IoT sensor integration, drone data processing, and agricultural AI tools. Alberta\'s 50M+ acres of farmland create massive demand for technology that makes farming more efficient and sustainable.',
                        tags: ['Precision Farming', 'Crop AI', 'IoT Sensors', 'Drone Data'],
                      },
                      {
                        icon: '🏥',
                        title: 'Healthcare',
                        accentColor: '#f87171',
                        desc: 'Electronic health records, telehealth platforms, clinical decision support, patient monitoring apps, and healthcare analytics. Edmonton\'s University of Alberta Hospital, Cross Cancer Institute, and Stollery Children\'s Hospital anchor a deep healthcare technology ecosystem.',
                        tags: ['EHR Systems', 'Telehealth', 'Clinical AI', 'Patient Apps'],
                      },
                    ].map((ind, i) => (
                      <div key={i} style={{
                        padding: 28, borderRadius: 24,
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <div style={{ fontSize: 36, marginBottom: 14 }}>{ind.icon}</div>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{ind.title}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16 }}>{ind.desc}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {ind.tags.map((tag, j) => (
                            <span key={j} style={{
                              fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 100,
                              background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)',
                              border: '1px solid rgba(255,255,255,0.06)',
                            }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* City Comparison */}
                <div className="reveal" id="city-comparison" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Edmonton vs Calgary vs Toronto: Cost &amp; Value Comparison</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
                    All rates in CAD per hour for mid-level developers. Edmonton consistently wins on value without sacrificing quality.
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Factor', 'Edmonton', 'Calgary', 'Toronto'].map(h => (
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
                          { factor: 'Mid Developer Rate', edmonton: '$90–$120/hr', calgary: '$95–$125/hr', toronto: '$110–$150/hr' },
                          { factor: 'Senior Developer Rate', edmonton: '$120–$175/hr', calgary: '$125–$180/hr', toronto: '$150–$200+/hr' },
                          { factor: 'Cost of Living', edmonton: 'Low (No prov. income tax)', calgary: 'Low (No prov. income tax)', toronto: 'High' },
                          { factor: 'Developer Retention', edmonton: 'High (lower cost of living)', calgary: 'High', toronto: 'Moderate (high COL churn)' },
                          { factor: 'AI Research', edmonton: 'World-class (Amii/UAlberta)', calgary: 'Strong (MILA presence)', toronto: 'Exceptional (Vector Inst.)' },
                          { factor: 'Oil & Gas Domain', edmonton: 'Canada\'s best', calgary: 'Excellent', toronto: 'Limited' },
                          { factor: 'Government Projects', edmonton: 'Provincial capital (prime)', calgary: 'Strong', toronto: 'Federal / Ontario focus' },
                          { factor: 'AgriTech', edmonton: 'Leading (Olds / UAlberta)', calgary: 'Good', toronto: 'Limited' },
                          { factor: 'SR&ED Credits', edmonton: 'Yes + AB 10% extra', calgary: 'Yes + AB 10% extra', toronto: 'Yes + ON 8% extra' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{row.factor}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: '#22c55e', fontWeight: 600 }}>{row.edmonton}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{row.calgary}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{row.toronto}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Why Edmonton is Hidden Tech Hub */}
                <div className="reveal" id="why-edmonton" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Why Edmonton is Canada&apos;s Hidden Tech Hub: 5 Reasons</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>
                    The reasons Toronto and Vancouver get more headlines — but Edmonton increasingly wins on substance.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {[
                      {
                        num: '01',
                        title: 'Lower Cost of Living Means Better Talent Retention',
                        desc: 'Edmonton has no provincial income tax and a cost of living 35–45% lower than Vancouver and 25–35% lower than Toronto. A senior developer earning $130K in Edmonton has more purchasing power than one earning $175K in Vancouver. This means Edmonton firms retain talent far longer — building institutional knowledge and senior team depth that high-churn Toronto agencies often lack.',
                      },
                      {
                        num: '02',
                        title: 'University of Alberta AI Research — World Top 10',
                        desc: 'The University of Alberta\'s machine learning research program is ranked among the world\'s top 10 — ahead of most universities in the US. The Alberta Machine Intelligence Institute (Amii), one of Canada\'s three Pan-Canadian AI Institutes, is headquartered in Edmonton and gives local firms direct access to AI researchers, graduate talent, and research partnerships that most cities cannot replicate.',
                      },
                      {
                        num: '03',
                        title: 'Growing Startup Ecosystem with Lower Burn Rates',
                        desc: 'Edmonton\'s startup ecosystem — anchored by Startup Edmonton, the Edmonton Unlimited accelerator, and University of Alberta entrepreneurship programs — is producing tech companies with meaningfully lower burn rates than Toronto or Vancouver equivalents. Lower office costs, lower developer salaries, and a growing investor community mean Edmonton startups reach product-market fit with less capital. Jobber built its first product in Edmonton for a fraction of what it would have cost in Toronto.',
                      },
                      {
                        num: '04',
                        title: 'Government Contracts — Provincial Capital Advantage',
                        desc: 'Edmonton is Alberta\'s provincial capital and the seat of the Legislature, which means that the Government of Alberta\'s $2.4B digital transformation program primarily benefits Edmonton-based firms. Government technology contracts — which are long-term, stable, and increasingly sophisticated — give Edmonton\'s development ecosystem a reliable revenue base that Vancouver and Toronto firms compete for from a distance.',
                      },
                      {
                        num: '05',
                        title: 'Proximity to Resource Industries Driving Software Investment',
                        desc: 'The oil and gas, agriculture, and mining sectors — all concentrated in Alberta — are undergoing the most significant digital transformation of any industries in Canada. Oil sands operators are deploying AI for predictive maintenance. Farmers are implementing precision agriculture platforms. Mining companies are digitalizing their safety and compliance systems. Edmonton-based firms are the natural first call for all of these engagements — giving them access to project budgets that dwarf what most consumer-tech firms encounter.',
                      },
                    ].map((r, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: 24, padding: 28, borderRadius: 20,
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <div style={{
                          width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                          background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 14, fontWeight: 800, color: '#22c55e',
                        }}>{r.num}</div>
                        <div>
                          <p style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{r.title}</p>
                          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>{r.desc}</p>
                        </div>
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
                    Common questions from businesses considering Edmonton-based software development.
                  </p>
                  {[
                    {
                      q: 'What does software development cost in Edmonton in 2026?',
                      a: 'An MVP (5–8 features, one platform) built by an Edmonton development firm typically costs $40,000–$80,000 CAD. A mid-complexity app (10–15 features, backend API, admin dashboard) runs $80,000–$180,000 CAD. Enterprise-grade platforms with AI, real-time features, and multi-platform delivery start at $200,000 CAD. Codazz, Edmonton\'s leading development firm, charges $85–$145 CAD/hr — 20–35% below comparable Toronto agencies for equivalent quality.',
                    },
                    {
                      q: 'Why choose an Edmonton software company over a Toronto one?',
                      a: 'Three concrete advantages: (1) Cost — Edmonton rates are 20–30% lower than Toronto for equivalent seniority, with no provincial income tax increasing take-home pay for talent, which means better retention and more senior teams. (2) Domain expertise — if your project touches oil and gas, agriculture, government, or Alberta healthcare, no Toronto firm can match the domain depth of Edmonton-based teams. (3) Relationships — Edmonton firms build longer, more accountable client relationships because they operate in a market that rewards referrals and reputation over volume.',
                    },
                    {
                      q: 'Does Codazz work with clients outside Edmonton and Alberta?',
                      a: 'Yes — Codazz serves clients across Canada, the United States, the UAE, and the United Kingdom. Approximately 60% of Codazz\'s client base is outside Alberta. The Edmonton HQ provides cost-competitive rates and Canadian management standards; the Chandigarh engineering centre provides engineering depth and around-the-clock development capacity. International clients get the full benefit of this model with North American communication standards and IP protected under Canadian law.',
                    },
                    {
                      q: 'What industries do Edmonton software companies specialize in?',
                      a: 'Edmonton has particular depth in oil and gas software (field operations, SCADA, pipeline monitoring, environmental compliance), government digital services (Alberta is Canada\'s most ambitious province for digital government investment), agriculture technology (precision farming, crop management, IoT), and healthcare (clinical systems, telehealth, research informatics). Codazz additionally serves fintech, ecommerce, logistics, SaaS, and AI/ML clients globally.',
                    },
                    {
                      q: 'How does Edmonton compare to Toronto for AI and ML development?',
                      a: 'For AI and ML specifically, Edmonton punches above its weight dramatically. The University of Alberta\'s machine learning research program is world-ranked, and the Alberta Machine Intelligence Institute (Amii) in Edmonton is one of Canada\'s three national AI institutes. Codazz leverages this ecosystem directly — with AI/ML engineers trained in Edmonton and Chandigarh working on LLM integration, RAG pipelines, computer vision, and predictive analytics for North American and UAE clients. Toronto has the Vector Institute (also world-class), but Edmonton\'s AI talent is often available at rates 25–35% lower.',
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
                        { href: '#edmonton-ecosystem', label: 'Edmonton Tech Ecosystem' },
                        { href: '#edmonton-rates', label: 'Edmonton Dev Rates' },
                        { href: '#key-takeaways', label: 'Key Takeaways' },
                        { href: '#top-companies', label: 'Top 10 Companies' },
                        { href: '#codazz', label: '#1 Codazz (Edmonton HQ)' },
                        { href: '#industries', label: 'Industries Leading Digital Transformation' },
                        { href: '#city-comparison', label: 'Edmonton vs Calgary vs Toronto' },
                        { href: '#why-edmonton', label: 'Why Edmonton is Canada\'s Hidden Hub' },
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
                    }}>Edmonton Rate Reference (CAD/hr)</p>
                    {[
                      { label: 'Junior Developer', rate: '$70–$90' },
                      { label: 'Mid-Level Developer', rate: '$90–$120' },
                      { label: 'Senior Developer', rate: '$120–$175' },
                      { label: 'AI / ML Engineer', rate: '$105–$185' },
                      { label: 'Codazz (All roles)', rate: '$85–$145' },
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
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz — Edmonton, AB</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Raman Makkar is the founder and CEO of Codazz, headquartered in Edmonton, Alberta. He has guided 500+ product launches across mobile, SaaS, AI, and web for clients across Canada, the US, and the UAE.
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
                }}>Edmonton&apos;s Top Development Team</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Work with Edmonton&apos;s Top Development Team
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 520, lineHeight: 1.7 }}>
                  Codazz is Edmonton&apos;s most prolific app and software development company. 500+ launches. 100+ engineers. Serving clients across Canada, the US, and the UAE with Canadian management standards and competitive Alberta rates.
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
