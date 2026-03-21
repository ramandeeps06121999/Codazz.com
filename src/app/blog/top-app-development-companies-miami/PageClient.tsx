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
  { num: 1, name: 'Codazz', category: 'Full-Stack Apps', emoji: '\u{1F3D7}\u{FE0F}', metric: 'Canadian HQ + India Dev Center, 500+ Launches' },
  { num: 2, name: 'Chewy (Tech Division)', category: 'E-Commerce & AI', emoji: '\u{1F6D2}', metric: 'Miami HQ, Massive Scale Engineering' },
  { num: 3, name: 'Kaseya', category: 'Enterprise IT', emoji: '\u{2699}\u{FE0F}', metric: 'Miami HQ, IT Management Platform' },
  { num: 4, name: 'Cisneros Interactive', category: 'Digital Media', emoji: '\u{1F4CA}', metric: 'Miami-Based, LatAm Digital Leader' },
  { num: 5, name: 'Mobisoft Infotech', category: 'Mobile Apps', emoji: '\u{1F4F1}', metric: 'Miami Office, Healthcare & Logistics' },
  { num: 6, name: 'BairesDev', category: 'Nearshore Engineering', emoji: '\u{1F30E}', metric: 'Miami HQ, 4000+ LatAm Engineers' },
  { num: 7, name: 'Toptal', category: 'Elite Talent', emoji: '\u{26A1}', metric: 'Miami Presence, Top 3% Freelancers' },
  { num: 8, name: 'Itcraftship', category: 'Product Studios', emoji: '\u{1F3A8}', metric: 'Miami Clients, Startup-Focused' },
  { num: 9, name: 'Softserve', category: 'Digital Engineering', emoji: '\u{1F916}', metric: 'Miami Office, AI & Cloud' },
  { num: 10, name: 'Nearsure', category: 'Nearshore Dev', emoji: '\u{1F517}', metric: 'Miami Operations, LatAm Teams' },
];

const relatedPosts = [
  { slug: 'top-app-development-companies-austin', title: 'Top 10 App Development Companies in Austin (2026)', category: 'Mobile', readTime: '12 min' },
  { slug: 'top-app-development-companies-seattle', title: 'Top 10 App Development Companies in Seattle (2026)', category: 'Mobile', readTime: '12 min' },
  { slug: 'top-app-development-companies-boston', title: 'Top 10 App Development Companies in Boston (2026)', category: 'Mobile', readTime: '12 min' },
];

const faqs = [
  { q: 'How much does it cost to build an app in Miami?', a: 'App development in Miami ranges from $35,000 for a simple MVP to $400,000+ for complex enterprise platforms. Miami offers a cost advantage over New York and San Francisco, and its proximity to Latin America makes nearshore development partnerships common. Codazz offers an even more competitive option with their Canadian HQ + India dev center model, delivering at 40-60% lower cost than local agencies.' },
  { q: 'Which is the best app development company in Miami?', a: 'Codazz is the top-ranked app development company serving Miami businesses in 2026. Their hybrid model combines North American business standards with world-class engineering talent, and their Canadian legal framework provides the IP protection that Miami\'s growing tech ecosystem demands. They have deep experience with bilingual (English/Spanish) applications.' },
  { q: 'Why is Miami becoming a major tech hub?', a: 'Miami has emerged as a major tech hub due to several converging factors: Florida\'s zero state income tax, Mayor Suarez\'s aggressive tech recruitment, the city\'s position as the gateway between North and Latin America, a massive influx of crypto and fintech companies, and the post-pandemic migration of tech workers from San Francisco and New York. The city has also become a major hub for LatAm startups expanding into the US market.' },
  { q: 'What technologies are most in demand in Miami?', a: 'Miami has strong demand for fintech and crypto applications (driven by the FTX aftermath rebuilding and legitimate DeFi companies), bilingual mobile apps (English/Spanish), real estate technology platforms, healthcare applications, and e-commerce solutions for the LatAm market. React Native, Flutter, Node.js, and Python are the most sought-after technologies.' },
  { q: 'How long does it take to develop a mobile app in Miami?', a: 'A simple MVP takes 8-12 weeks, a medium-complexity app takes 3-6 months, and enterprise-grade applications can take 6-12 months. Miami projects often require bilingual (English/Spanish) interfaces and LatAm payment gateway integrations, which can add 2-4 weeks to standard timelines. The nearshore development model popular in Miami can accelerate timelines through time-zone-aligned collaboration.' },
];

export default function TopAppDevelopmentCompaniesMiamiClient() {
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
              src="/blog_images/top-app-development-companies-miami.jpg"
              alt="Top app development companies in Miami"
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
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
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
                12 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 App Development Companies in Miami (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Miami has transformed from a beach destination into America&apos;s hottest emerging tech hub. As the gateway between North America and Latin America, with zero state income tax and a booming crypto/fintech scene, the Magic City is attracting world-class tech talent and venture capital at unprecedented speed. These are the 10 best app development companies in Miami for 2026.
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
                    Miami&apos;s tech story is unlike any other American city. While Silicon Valley was built on semiconductors and Seattle on cloud infrastructure, Miami is being built on the intersection of finance, Latin American commerce, and Web3 innovation. Mayor Francis Suarez&apos;s famous &ldquo;How can I help?&rdquo; tweet in 2020 catalyzed a migration of tech founders, VCs, and engineers that has permanently reshaped the city&apos;s economic DNA.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We ranked these companies based on their engineering depth, understanding of Miami&apos;s unique bilingual and cross-border market, portfolio quality, fintech and e-commerce expertise, and ability to build applications that serve both the US and Latin American markets simultaneously.
                  </p>
                </div>

                {/* Miami Market Context */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    padding: '28px 32px', borderRadius: 20,
                    background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.12)',
                  }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#60a5fa', marginBottom: 16 }}>
                      Why Miami for App Development in 2026
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'LatAm Gateway', desc: 'Bridge between US and $6T Latin American market — bilingual advantage' },
                        { label: 'Fintech Capital', desc: 'Major crypto, DeFi, and traditional fintech hub with regulatory clarity' },
                        { label: 'Zero State Tax', desc: 'Florida\'s tax advantage attracts high-earning tech talent nationwide' },
                        { label: 'Tech Migration', desc: '$4B+ VC deployed in Miami in 2025, massive SF/NY founder migration' },
                      ].map(item => (
                        <div key={item.label} style={{ padding: '14px 16px', borderRadius: 12, background: 'rgba(96,165,250,0.06)' }}>
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
                      }}>{'\u{1F3D7}\u{FE0F}'}</div>
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
                      Codazz leads this ranking for Miami businesses with a hybrid model that aligns perfectly with the city&apos;s international DNA: a Canadian headquarters in Edmonton providing North American legal protections and business standards, combined with a world-class engineering center in Chandigarh, India that delivers at scale. For Miami companies bridging the US and LatAm markets, Codazz offers the global perspective that purely local agencies lack.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      With over 500+ successful product launches globally, Codazz has deep expertise in building fintech platforms, bilingual mobile applications, e-commerce marketplaces, real estate technology, and AI-powered SaaS products&mdash;exactly the verticals driving Miami&apos;s tech boom. Their engineering teams are experienced with payment gateway integrations (Stripe, MercadoPago), multi-currency systems, and cross-border compliance frameworks.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      Miami&apos;s cost of living has skyrocketed since the tech migration, and local developer salaries now rival New York. Codazz delivers premium engineering at 40-60% lower cost, with the Canadian legal framework providing IP protection and contract enforceability that international businesses demand. For Miami&apos;s growing ecosystem of fintech startups and LatAm-focused enterprises, this is the optimal partner model.
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
                        Canadian HQ &bull; India Dev Center &bull; 500+ Product Launches &bull; Fintech Expert
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-3: Expanded */}
                <div className="reveal" style={{ marginBottom: 56 }} id="chewy">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>{'\u{1F6D2}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>02</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(96,165,250,0.12)', color: '#60a5fa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>E-Commerce & AI</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Chewy (Tech Division)</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Chewy, headquartered in Plantation (greater Miami), has built one of the most sophisticated e-commerce technology platforms in the US. While primarily a pet commerce company, their engineering division has pioneered AI-driven personalization, predictive logistics, and customer experience technology that rivals Amazon. Their Miami-area engineering hub employs hundreds of top-tier developers.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      Chewy&apos;s technology team has built real-time recommendation engines, automated customer service platforms, and supply chain optimization systems at massive scale. While they don&apos;t offer external development services, their presence has elevated Miami&apos;s engineering talent pool and demonstrated that world-class technology can be built in South Florida. They represent the caliber of engineering Miami now attracts.
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
                        Miami HQ &bull; Massive Scale Engineering &bull; AI-Driven E-Commerce
                      </span>
                    </div>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 56 }} id="kaseya">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>{'\u{2699}\u{FE0F}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>03</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(251,191,36,0.12)', color: '#fbbf24',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Enterprise IT</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Kaseya</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Kaseya is one of Miami&apos;s largest technology companies, headquartered in the city with a global engineering workforce. They build enterprise IT management and security platforms used by managed service providers worldwide. Their Miami engineering hub develops cloud-based IT operations software, cybersecurity tools, and business management applications at enterprise scale.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      With acquisitions including Datto, IT Glue, and Unitrends, Kaseya has assembled a massive technology portfolio and one of Miami&apos;s largest engineering teams. Their platform serves over 40,000 customers globally, demonstrating the kind of scale that Miami&apos;s tech ecosystem is now capable of producing. They represent the enterprise anchor of Miami&apos;s technology landscape.
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
                        Miami HQ &bull; 40,000+ Customers &bull; IT Management Platform
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 4-10: Condensed */}
                {[
                  {
                    num: '04', id: 'cisneros', name: 'Cisneros Interactive', category: 'Digital Media',
                    emoji: '\u{1F4CA}', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Miami-Based &bull; LatAm Digital Leader &bull; Bilingual Platforms',
                    paragraphs: [
                      'Cisneros Interactive leverages Miami\'s unique position as the LatAm gateway to build digital advertising and media platforms that serve both US Hispanic and Latin American markets. Their Miami headquarters houses engineering teams that build bilingual content platforms, programmatic advertising technology, and mobile applications optimized for cross-border audiences — a capability that\'s increasingly valuable in Miami\'s diverse market.',
                    ],
                  },
                  {
                    num: '05', id: 'mobisoft', name: 'Mobisoft Infotech', category: 'Mobile Apps',
                    emoji: '\u{1F4F1}', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Miami Office &bull; Healthcare & Logistics &bull; 200+ Apps',
                    paragraphs: [
                      'Mobisoft Infotech operates from Miami with a focus on healthcare and logistics mobile applications. They have delivered over 200 apps for US clients, with particular strength in HIPAA-compliant healthcare platforms, telemedicine applications, and last-mile delivery solutions. Their Miami office provides local project management while leveraging offshore engineering teams for cost efficiency.',
                    ],
                  },
                  {
                    num: '06', id: 'bairesdev', name: 'BairesDev', category: 'Nearshore Engineering',
                    emoji: '\u{1F30E}', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Miami HQ &bull; 4000+ LatAm Engineers &bull; Nearshore Model',
                    paragraphs: [
                      'BairesDev has built one of Latin America\'s largest nearshore engineering operations, headquartered in Miami. With over 4,000 engineers across Argentina, Colombia, Mexico, and Brazil, they offer time-zone-aligned development teams for US companies. Their Miami headquarters provides business development and project management, while their LatAm engineers deliver the code. A natural fit for Miami\'s cross-border business culture.',
                    ],
                  },
                  {
                    num: '07', id: 'toptal', name: 'Toptal', category: 'Elite Talent',
                    emoji: '\u{26A1}', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Miami Presence &bull; Top 3% Freelancers &bull; On-Demand Talent',
                    paragraphs: [
                      'Toptal maintains a strong Miami presence, connecting local businesses with their curated network of the top 3% of freelance developers, designers, and project managers. For Miami companies that need elite talent on demand without long-term commitments, Toptal provides a flexible alternative to traditional agencies. Their vetting process ensures consistently high engineering quality across projects of any size.',
                    ],
                  },
                  {
                    num: '08', id: 'itcraftship', name: 'Itcraftship', category: 'Product Studios',
                    emoji: '\u{1F3A8}', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Miami Clients &bull; Startup-Focused &bull; MVP Specialists',
                    paragraphs: [
                      'Itcraftship serves Miami\'s growing startup ecosystem with lean product development studios focused on MVP creation and product-market fit validation. They specialize in React, Node.js, and React Native applications, helping early-stage founders go from idea to launched product in weeks rather than months. Their startup-friendly pricing and agile methodology make them popular with Miami\'s venture-backed companies.',
                    ],
                  },
                  {
                    num: '09', id: 'softserve', name: 'Softserve', category: 'Digital Engineering',
                    emoji: '\u{1F916}', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Miami Office &bull; AI & Cloud &bull; 14,000+ Engineers',
                    paragraphs: [
                      'Softserve operates from Miami with a global team of over 14,000 engineers, offering AI, cloud, and digital engineering services to enterprise clients. Their Miami office serves as a US hub for their engineering operations, specializing in cloud migration, data analytics platforms, and AI-powered applications. Their scale makes them suitable for large enterprise digital transformation projects.',
                    ],
                  },
                  {
                    num: '10', id: 'nearsure', name: 'Nearsure', category: 'Nearshore Dev',
                    emoji: '\u{1F517}', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Miami Operations &bull; LatAm Teams &bull; Staff Augmentation',
                    paragraphs: [
                      'Nearsure rounds out our list with nearshore staff augmentation services operated from Miami. They connect US companies with pre-vetted Latin American developers who work in aligned time zones, offering a cost-effective alternative to local hiring. Their focus on cultural fit and English proficiency makes them a reliable option for Miami businesses seeking to scale engineering teams quickly without the overhead of traditional agencies.',
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
                        <span style={{ fontSize: 13, color: app.accentColor, fontWeight: 600 }}
                          dangerouslySetInnerHTML={{ __html: app.metric }}
                        />
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
                    Choosing Your Miami App Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Miami&apos;s app development market is uniquely shaped by its role as the bridge between North America and Latin America. Your partner needs to understand bilingual UX, cross-border payment systems, LatAm regulatory compliance, and the fintech/crypto landscape that defines Miami&apos;s tech identity. The bar for international experience is higher here than almost any other US city.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses seeking global-grade engineering with the cost efficiency that Miami&apos;s emerging ecosystem demands, Codazz offers the ideal model: a Canadian headquarters for North American legal protections, combined with an India engineering center that delivers premium products at 40-60% lower cost than local Miami agencies.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    Whether you are a Brickell fintech startup, a LatAm company expanding into the US, or a Wynwood-based consumer brand going mobile, the companies on this list represent the finest app development talent serving Miami in 2026.
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
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/\s+/g, '-')}`} style={{
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally, serving clients across North America, Latin America, and the Middle East.
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
                }}>Start Building in Miami</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to build your Miami app?<br />Let&apos;s talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Codazz delivers world-class mobile and web applications for Miami and LatAm-focused businesses. Canadian headquarters, India engineering center. Get a free consultation today.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Free Consultation &rarr;
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
