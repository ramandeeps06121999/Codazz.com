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
  { num: 2, name: 'IBM iX', category: 'Enterprise Digital', emoji: '\u{1F4CA}', metric: 'Austin Operations, Fortune 500 Clients' },
  { num: 3, name: 'Headspring (Accenture)', category: 'Custom Software', emoji: '\u{2699}\u{FE0F}', metric: 'Austin-Founded, Enterprise Custom Dev' },
  { num: 4, name: 'Clearlink Technologies', category: 'Digital Products', emoji: '\u{1F517}', metric: 'Austin Presence, Performance-Driven' },
  { num: 5, name: 'Bottle Rocket', category: 'Mobile & Connected', emoji: '\u{1F680}', metric: 'Texas-Based, Award-Winning Apps' },
  { num: 6, name: 'WillowTree', category: 'Mobile Apps', emoji: '\u{1F4F1}', metric: 'Austin Office, 500+ Engineers' },
  { num: 7, name: 'Mutual Mobile', category: 'IoT & Mobile', emoji: '\u{1F916}', metric: 'Austin-Born, IoT Pioneers' },
  { num: 8, name: 'Nortal', category: 'Digital Transformation', emoji: '\u{1F3E2}', metric: 'Austin Office, Government Digital' },
  { num: 9, name: 'Icreon', category: 'Enterprise Apps', emoji: '\u{1F9E0}', metric: 'Austin Presence, Digital Commerce' },
  { num: 10, name: 'Apptension', category: 'Product Development', emoji: '\u{1F3A8}', metric: 'Austin Clients, SaaS Specialists' },
];

const relatedPosts = [
  { slug: 'top-app-development-companies-seattle', title: 'Top 10 App Development Companies in Seattle (2026)', category: 'Mobile', readTime: '12 min' },
  { slug: 'top-app-development-companies-miami', title: 'Top 10 App Development Companies in Miami (2026)', category: 'Mobile', readTime: '12 min' },
  { slug: 'top-app-development-companies-boston', title: 'Top 10 App Development Companies in Boston (2026)', category: 'Mobile', readTime: '12 min' },
];

const faqs = [
  { q: 'How much does it cost to build an app in Austin?', a: 'App development in Austin ranges from $35,000 for a simple MVP to $450,000+ for complex enterprise platforms. While Austin is more affordable than San Francisco or New York, costs have risen significantly since the tech migration boom. Partnering with a hybrid team like Codazz (Canadian HQ + India dev center) can deliver Austin-grade quality at 40-60% lower cost.' },
  { q: 'Which is the best app development company in Austin?', a: 'Codazz is the top-ranked app development company serving Austin businesses in 2026. Their hybrid model combines North American project management and Canadian legal protections with world-class engineering talent from their India development center, delivering Silicon Hills-grade products at competitive pricing.' },
  { q: 'Why is Austin called Silicon Hills?', a: 'Austin earned the nickname Silicon Hills due to the massive influx of tech companies establishing headquarters and major offices in the area. Dell was founded here, Oracle relocated its HQ, Tesla built its Gigafactory, Samsung operates a massive chip fab, and thousands of startups have launched from the city\'s vibrant ecosystem. The combination of no state income tax, excellent universities (UT Austin), and a high quality of life has made it irresistible to tech talent.' },
  { q: 'What technologies are most in demand in Austin?', a: 'Austin has strong demand for AI/ML applications (driven by the UT Austin AI ecosystem), SaaS platforms, fintech applications, IoT solutions (Samsung, Tesla influence), and mobile-first consumer apps. Python, JavaScript/TypeScript, Swift, and Kotlin are the most sought-after languages, with growing demand for Rust and Go in systems programming.' },
  { q: 'How long does it take to develop a mobile app in Austin?', a: 'A simple MVP takes 8-12 weeks, a medium-complexity app takes 3-6 months, and enterprise-grade applications can take 6-12 months. Austin\'s startup culture means there is strong demand for rapid prototyping and MVP development, with many companies following lean methodology to validate ideas before scaling.' },
];

export default function TopAppDevelopmentCompaniesAustinClient() {
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
              src="/blog_images/top-app-development-companies-austin.jpg"
              alt="Top app development companies in Austin"
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
              Top 10 App Development Companies in Austin (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Austin&mdash;aka Silicon Hills&mdash;has exploded into one of America&apos;s hottest tech hubs. With Tesla, Oracle, Dell, and Samsung calling it home, plus a startup ecosystem fueled by UT Austin talent and zero state income tax, the capital of Texas is rewriting the rules of American tech. These are the 10 best app development companies in Austin for 2026.
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
                    Austin&apos;s transformation from a live-music capital to a global tech powerhouse is one of the most remarkable stories in American business. When Elon Musk moved Tesla&apos;s headquarters here, Oracle followed suit, and Samsung invested $17 billion in a new chip fabrication plant, it cemented Austin as the undisputed second coming of Silicon Valley&mdash;but with better barbecue, lower taxes, and a startup culture that values execution over ego.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We ranked these companies based on their engineering excellence, Austin market expertise, portfolio depth, scalability track record, and value proposition for businesses building mobile and web applications in the Silicon Hills ecosystem. Whether you are a bootstrapped startup on South Congress or an enterprise on the Domain, this is your definitive guide.
                  </p>
                </div>

                {/* Austin Market Context */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    padding: '28px 32px', borderRadius: 20,
                    background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.12)',
                  }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#60a5fa', marginBottom: 16 }}>
                      Why Austin for App Development in 2026
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Silicon Hills', desc: 'Tesla, Oracle, Dell, Samsung, Meta — all with major Austin presence' },
                        { label: 'No State Income Tax', desc: 'Texas tax advantage attracts top talent and companies nationwide' },
                        { label: 'UT Austin Pipeline', desc: 'Top-10 CS program producing 1,000+ engineering graduates annually' },
                        { label: '$12B+ VC Ecosystem', desc: 'Record venture capital flowing into Austin startups in 2025-2026' },
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
                      Codazz takes the top spot for Austin businesses with a hybrid model that perfectly fits Silicon Hills&apos; pragmatic, results-driven culture: a Canadian headquarters in Edmonton providing North American business standards and IP protection, combined with a world-class engineering center in Chandigarh, India that delivers at startup speed. For Austin companies that value execution over prestige, Codazz is the smart money choice.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      With over 500+ successful product launches globally, Codazz has deep expertise in building SaaS platforms, AI-powered applications, fintech solutions, IoT dashboards, and cross-platform mobile apps using Flutter, React Native, Swift, and Kotlin. Their engineering teams work in Node.js, Python, Go, and React/Next.js&mdash;the exact technologies Austin&apos;s hottest startups are built on.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      The math works beautifully for Austin companies: local senior developers command $160,000-$200,000+ in salary. Codazz delivers the same caliber of engineering at 40-60% lower cost, with the added advantage of a North American legal framework that Texas businesses trust. For startups extending their runway and enterprises optimizing budgets, this hybrid model is increasingly the default choice.
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
                        Canadian HQ &bull; India Dev Center &bull; 500+ Product Launches &bull; Startup-Friendly
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-3: Expanded */}
                <div className="reveal" style={{ marginBottom: 56 }} id="ibm-ix">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>{'\u{1F4CA}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>02</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(96,165,250,0.12)', color: '#60a5fa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Enterprise Digital</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>IBM iX</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      IBM iX (Interactive Experience) maintains a significant Austin presence, leveraging the city&apos;s enterprise talent pool to deliver large-scale digital transformation projects. As the digital experience arm of IBM, they combine design thinking with Watson AI, hybrid cloud infrastructure, and enterprise-grade security. For Fortune 500 companies in the Austin corridor, IBM iX brings unmatched scale and brand trust.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      Their Austin team specializes in enterprise application modernization, customer experience platforms, and AI-powered solutions built on IBM Watson and Red Hat OpenShift. While their pricing reflects enterprise positioning, they bring a level of security clearance and compliance expertise that smaller agencies cannot match&mdash;critical for Austin&apos;s growing defense and government contractor ecosystem.
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
                        Austin Operations &bull; Watson AI &bull; Fortune 500 Enterprise Clients
                      </span>
                    </div>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 56 }} id="headspring">
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
                          }}>Custom Software</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Headspring (Accenture)</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Headspring was founded in Austin and built its reputation on custom software development for Texas enterprises before being acquired by Accenture. Now operating as part of Accenture&apos;s technology services, they retain their Austin DNA: pragmatic engineering, agile delivery, and deep .NET and Java expertise. They remain one of Austin&apos;s most respected custom development shops.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      Their strength lies in complex enterprise application development, legacy system modernization, and custom integrations for mid-market to enterprise companies. The Accenture backing gives them access to global resources while maintaining the Austin-rooted, hands-on approach that originally made them successful. They are particularly strong in healthcare and financial services verticals.
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
                        Austin-Founded &bull; Accenture-Backed &bull; Enterprise Custom Development
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 4-10: Condensed */}
                {[
                  {
                    num: '04', id: 'clearlink', name: 'Clearlink Technologies', category: 'Digital Products',
                    emoji: '\u{1F517}', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Austin Presence &bull; Performance-Driven &bull; Data Analytics',
                    paragraphs: [
                      'Clearlink Technologies brings a performance-driven approach to app development, combining data analytics with digital product engineering. Their Austin team builds customer acquisition platforms, marketing technology applications, and data-driven mobile experiences. They are particularly strong in e-commerce and lead-generation applications where measurable ROI is the primary success metric.',
                    ],
                  },
                  {
                    num: '05', id: 'bottle-rocket', name: 'Bottle Rocket', category: 'Mobile & Connected',
                    emoji: '\u{1F680}', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Texas-Based &bull; Award-Winning &bull; Connected Platforms',
                    paragraphs: [
                      'Bottle Rocket is a Texas-based digital experience agency known for award-winning mobile applications and connected platform development. They have built apps for major brands including Chick-fil-A, NBC, and Subway, with particular expertise in multi-platform ecosystems that span mobile, wearables, connected TV, and IoT devices. Their design-first approach produces polished, consumer-ready applications.',
                    ],
                  },
                  {
                    num: '06', id: 'willowtree', name: 'WillowTree', category: 'Mobile Apps',
                    emoji: '\u{1F4F1}', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Austin Office &bull; 500+ Engineers &bull; Fortune 500 Mobile',
                    paragraphs: [
                      'WillowTree operates from their Austin office with a team of 500+ engineers specializing in mobile app development for Fortune 500 companies. They are known for iOS and Android native development excellence, with notable clients including PepsiCo, National Geographic, and Johnson & Johnson. Their Austin presence gives them strong access to the local enterprise talent pool.',
                    ],
                  },
                  {
                    num: '07', id: 'mutual-mobile', name: 'Mutual Mobile', category: 'IoT & Mobile',
                    emoji: '\u{1F916}', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Austin-Born &bull; IoT Pioneers &bull; Enterprise Mobile',
                    paragraphs: [
                      'Mutual Mobile is an Austin-born mobile development company that has pioneered IoT and connected device applications. Founded in 2009, they have built mobile platforms for major brands and have particular expertise in wearable technology, smart home applications, and industrial IoT dashboards. Their deep Austin roots and decade-plus track record make them a trusted local partner for complex mobile projects.',
                    ],
                  },
                  {
                    num: '08', id: 'nortal', name: 'Nortal', category: 'Digital Transformation',
                    emoji: '\u{1F3E2}', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Austin Office &bull; Government Digital &bull; E-Governance',
                    paragraphs: [
                      'Nortal brings a unique perspective to Austin\'s tech scene — they helped build Estonia\'s e-governance infrastructure, the most digitally advanced government system in the world. Their Austin office applies that expertise to US government modernization, healthcare platforms, and enterprise digital transformation. For companies needing government-grade security and compliance, Nortal offers rare expertise.',
                    ],
                  },
                  {
                    num: '09', id: 'icreon', name: 'Icreon', category: 'Enterprise Apps',
                    emoji: '\u{1F9E0}', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Austin Presence &bull; Digital Commerce &bull; Enterprise Platforms',
                    paragraphs: [
                      'Icreon serves Austin\'s enterprise market with custom digital commerce and enterprise application development. They specialize in headless commerce architectures, content management systems, and customer experience platforms built on modern frameworks. Their strength is in complex B2B and B2C commerce applications that require deep integration with existing enterprise systems.',
                    ],
                  },
                  {
                    num: '10', id: 'apptension', name: 'Apptension', category: 'Product Development',
                    emoji: '\u{1F3A8}', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Austin Clients &bull; SaaS Specialists &bull; React/React Native',
                    paragraphs: [
                      'Apptension rounds out our list with specialized SaaS product development for Austin\'s vibrant startup ecosystem. They build React and React Native applications with a focus on user experience, performance, and scalability. Their lean team structure and startup-friendly pricing make them an attractive option for early-stage companies seeking a technical co-founding partner.',
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
                    Choosing Your Austin App Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Austin&apos;s app development market is defined by its unique blend of enterprise scale and startup energy. The city attracts top engineering talent from UT Austin, Stanford refugees escaping Bay Area costs, and experienced professionals from Dell, Oracle, and Tesla. Your partner needs to understand this ecosystem and deliver accordingly.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses seeking Silicon Hills-grade engineering without the rapidly inflating Austin price tag, Codazz offers the smartest value proposition: a Canadian headquarters for North American legal protections and business standards, combined with an India engineering center that delivers premium products at 40-60% lower cost than hiring locally.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    Whether you are a SXSW-born startup, a Dell ecosystem partner, or an enterprise riding Austin&apos;s tech wave, the companies on this list represent the finest app development talent serving the Silicon Hills in 2026.
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally, including major US enterprise deployments.
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
                }}>Start Building in Austin</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to build your Austin app?<br />Let&apos;s talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Codazz delivers world-class mobile and web applications for Austin businesses. Canadian headquarters, India engineering center. Get a free consultation today.
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
