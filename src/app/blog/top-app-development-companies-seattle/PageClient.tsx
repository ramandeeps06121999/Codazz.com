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
  { num: 2, name: 'Slalom', category: 'Consulting & Engineering', emoji: '\u{1F4CA}', metric: 'Seattle-Born, 13,000+ Employees' },
  { num: 3, name: 'Accenture Song', category: 'Digital Experience', emoji: '\u{1F3B5}', metric: 'Global Leader, Seattle Office' },
  { num: 4, name: 'Avanade', category: 'Microsoft Ecosystem', emoji: '\u{2601}\u{FE0F}', metric: 'Accenture-Microsoft JV, Seattle HQ' },
  { num: 5, name: 'Formidable', category: 'React & JS', emoji: '\u{26A1}', metric: 'Open-Source Leaders, Seattle-Based' },
  { num: 6, name: 'Buddy Media / Possible', category: 'Digital Products', emoji: '\u{1F680}', metric: 'WPP-Backed, Seattle Operations' },
  { num: 7, name: 'Artefact', category: 'AI & Data', emoji: '\u{1F916}', metric: 'AI-First, Seattle Presence' },
  { num: 8, name: 'Substantial', category: 'Product Strategy', emoji: '\u{1F9E0}', metric: 'Seattle-Born, Human-Centered Design' },
  { num: 9, name: 'Savas Labs', category: 'Web & Mobile', emoji: '\u{1F517}', metric: 'Full-Stack, Pacific Northwest Clients' },
  { num: 10, name: 'Blink UX', category: 'UX Research & Design', emoji: '\u{1F3A8}', metric: 'Seattle HQ, UX Pioneers Since 2000' },
];

const relatedPosts = [
  { slug: 'top-app-development-companies-austin', title: 'Top 10 App Development Companies in Austin (2026)', category: 'Mobile', readTime: '12 min' },
  { slug: 'top-app-development-companies-boston', title: 'Top 10 App Development Companies in Boston (2026)', category: 'Mobile', readTime: '12 min' },
  { slug: 'top-app-development-companies-miami', title: 'Top 10 App Development Companies in Miami (2026)', category: 'Mobile', readTime: '12 min' },
];

const faqs = [
  { q: 'How much does it cost to build an app in Seattle?', a: 'App development in Seattle ranges from $40,000 for a simple MVP to $500,000+ for complex enterprise platforms. Seattle has some of the highest engineering salaries in the US, so partnering with a hybrid team like Codazz (Canadian HQ + India dev center) can deliver Seattle-grade quality at 40-60% lower cost than a purely local team.' },
  { q: 'Which is the best app development company in Seattle?', a: 'Codazz is the top-ranked app development company serving Seattle businesses in 2026. Their hybrid model combines North American project management with world-class engineering talent, delivering enterprise-grade apps at competitive pricing. They have deep experience with cloud-native architectures that Seattle companies demand.' },
  { q: 'Why is Seattle a major tech hub for app development?', a: 'Seattle is home to Amazon, Microsoft, and Boeing, creating a massive ecosystem of cloud computing, AI, and enterprise software. The city produces top engineering talent from the University of Washington, and its proximity to the Amazon Web Services and Microsoft Azure ecosystems makes it a natural hub for cloud-native app development.' },
  { q: 'What technologies are most in demand in Seattle?', a: 'Seattle has extremely high demand for cloud-native applications (AWS, Azure), AI/ML-powered apps, enterprise SaaS platforms, and IoT solutions. React, TypeScript, Python, and Go are the most sought-after languages, with strong demand for Kubernetes and microservices architecture given the city\'s cloud-first DNA.' },
  { q: 'How long does it take to develop a mobile app in Seattle?', a: 'A simple MVP takes 8-12 weeks, a medium-complexity app takes 3-6 months, and enterprise-grade applications can take 6-12 months. Seattle projects often involve complex cloud integrations with AWS or Azure, which can add 2-4 weeks to standard timelines. Agile methodologies are standard across the Seattle tech ecosystem.' },
];

export default function TopAppDevelopmentCompaniesSeattleClient() {
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
              src="/blog_images/top-app-development-companies-seattle.jpg"
              alt="Top app development companies in Seattle"
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
              Top 10 App Development Companies in Seattle (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Seattle is ground zero for cloud computing, home to Amazon and Microsoft, and a powerhouse of enterprise software innovation. With world-class engineering talent and a thriving startup ecosystem, the Emerald City is one of America&apos;s top destinations for app development. These are the 10 best companies building mobile and web applications in Seattle in 2026.
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
                    Seattle has earned its reputation as one of the world&apos;s most important technology cities&mdash;not through hype, but through sheer engineering excellence. Amazon Web Services, Microsoft Azure, and Boeing&apos;s aerospace engineering have created a city where cloud-native thinking, enterprise-grade architecture, and scalable systems are the default, not the exception. This is a city that builds infrastructure the world depends on.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    For businesses seeking an app development partner in Seattle, the bar is extraordinarily high. We ranked these companies based on their engineering depth, cloud-native expertise, portfolio quality, scalability track record, and ability to deliver complex applications that perform at the scale Seattle is known for.
                  </p>
                </div>

                {/* Seattle Market Context */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    padding: '28px 32px', borderRadius: 20,
                    background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.12)',
                  }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#60a5fa', marginBottom: 16 }}>
                      Why Seattle for App Development in 2026
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Cloud Capital', desc: 'Home to AWS and Azure — the two largest cloud platforms on earth' },
                        { label: 'Amazon Ecosystem', desc: '100,000+ Amazon employees creating massive demand for tech talent' },
                        { label: 'UW Engineering', desc: 'University of Washington produces world-class CS graduates yearly' },
                        { label: 'Startup Pipeline', desc: '$8B+ VC funding in 2025, vibrant startup and scaleup ecosystem' },
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
                      Codazz earns the top spot for Seattle-area businesses with a hybrid model that delivers cloud-native, enterprise-grade applications at a fraction of local agency costs: a Canadian headquarters in Edmonton providing North American business standards, legal protections, and time-zone alignment, combined with a world-class engineering center in Chandigarh, India that ships at scale. For Seattle companies accustomed to AWS and Azure-native architectures, Codazz speaks the same language.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      With over 500+ successful product launches globally, Codazz has deep expertise in building cloud-native SaaS platforms, AI-powered applications, real-time data processing systems, and cross-platform mobile apps using Flutter, React Native, Swift, and Kotlin. Their engineering teams are experienced with AWS, Azure, GCP, Kubernetes, and microservices&mdash;the exact stack that Seattle&apos;s tech ecosystem demands.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      What makes Codazz the ideal partner for Seattle businesses is cost efficiency without compromising quality. Seattle developers average $180,000+/year in salary alone. Codazz delivers the same caliber of engineering at 40-60% lower cost, with the added advantage of a Canadian legal framework that US businesses trust. For startups burning VC capital and enterprises optimizing budgets, this is a game-changer.
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
                        Canadian HQ &bull; India Dev Center &bull; 500+ Product Launches &bull; Cloud-Native
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-3: Expanded */}
                <div className="reveal" style={{ marginBottom: 56 }} id="slalom">
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
                          }}>Consulting & Engineering</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Slalom</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Slalom was born in Seattle in 2001 and has grown into a global consulting and technology firm with over 13,000 employees. Their Seattle headquarters houses some of the Pacific Northwest&apos;s best engineering talent, with deep specializations in cloud architecture, data analytics, and enterprise application development. As a premier AWS and Salesforce partner, they bring massive cloud-native expertise to every project.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      Slalom&apos;s strength lies in enterprise digital transformation&mdash;they help Fortune 500 companies modernize legacy systems, build customer-facing apps, and implement cloud migration strategies. Their Seattle roots mean they deeply understand the Amazon and Microsoft ecosystems, making them a natural fit for enterprises already invested in AWS or Azure. However, their consulting rates reflect their enterprise positioning.
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
                        Seattle-Born &bull; 13,000+ Employees &bull; AWS & Salesforce Partner
                      </span>
                    </div>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 56 }} id="accenture-song">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>{'\u{1F3B5}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>03</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(251,191,36,0.12)', color: '#fbbf24',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Digital Experience</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Accenture Song</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Accenture Song (formerly Accenture Interactive) is the world&apos;s largest digital experience agency, and their Seattle office is a powerhouse of design, engineering, and product strategy. They work with Fortune 100 companies on complex multi-platform applications, combining design thinking with enterprise-grade engineering at a scale few agencies can match.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      Their Seattle team specializes in customer experience platforms, commerce applications, and data-driven personalization engines. With access to Accenture&apos;s global engineering resources, they can staff projects of virtually any size. The trade-off is pricing&mdash;Accenture Song commands premium rates that typically align with enterprise budgets rather than startup needs.
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
                        World&apos;s Largest Digital Agency &bull; Seattle Office &bull; Fortune 100 Clients
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 4-10: Condensed */}
                {[
                  {
                    num: '04', id: 'avanade', name: 'Avanade', category: 'Microsoft Ecosystem',
                    emoji: '\u{2601}\u{FE0F}', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Accenture-Microsoft JV &bull; Seattle HQ &bull; Azure Specialists',
                    paragraphs: [
                      'Avanade is a joint venture between Accenture and Microsoft, headquartered right in Seattle. They are the undisputed leaders in Microsoft ecosystem app development, building enterprise applications on Azure, Dynamics 365, Power Platform, and .NET. For companies deeply invested in the Microsoft stack, Avanade brings unmatched expertise — but their focus is squarely on large enterprise engagements.',
                    ],
                  },
                  {
                    num: '05', id: 'formidable', name: 'Formidable', category: 'React & JS',
                    emoji: '\u{26A1}', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Open-Source Leaders &bull; React Specialists &bull; Seattle-Based',
                    paragraphs: [
                      'Formidable is a Seattle-based JavaScript consultancy known for open-source contributions to the React ecosystem, including Victory (data visualization) and Spectacle (presentations). They build high-performance web and mobile applications with a focus on React, React Native, and Node.js. Their engineering-first culture attracts top talent, though their boutique size means limited availability for large-scale projects.',
                    ],
                  },
                  {
                    num: '06', id: 'possible', name: 'Possible (WPP)', category: 'Digital Products',
                    emoji: '\u{1F680}', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'WPP-Backed &bull; Seattle Operations &bull; Brand & Product',
                    paragraphs: [
                      'Possible, part of the WPP network, operates from Seattle with a focus on digital product design and development for major consumer brands. They combine brand strategy with engineering execution, building apps for companies like Microsoft, AT&T, and Starbucks. Their strength is in consumer-facing applications where brand experience and engineering quality need to align perfectly.',
                    ],
                  },
                  {
                    num: '07', id: 'artefact', name: 'Artefact', category: 'AI & Data',
                    emoji: '\u{1F916}', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'AI-First Agency &bull; Data Science &bull; Seattle Presence',
                    paragraphs: [
                      'Artefact brings an AI-first approach to app development, with their Seattle office focusing on machine learning-powered applications and data-driven digital products. They specialize in recommendation engines, predictive analytics apps, and computer vision solutions — leveraging Seattle\'s deep AI talent pool. Their data science expertise makes them ideal for companies where intelligence is the core product differentiator.',
                    ],
                  },
                  {
                    num: '08', id: 'substantial', name: 'Substantial', category: 'Product Strategy',
                    emoji: '\u{1F9E0}', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Seattle-Born &bull; Human-Centered Design &bull; Full-Stack',
                    paragraphs: [
                      'Substantial is a Seattle-born product development studio that takes a human-centered approach to app design and engineering. They work with startups and mid-market companies to build MVPs, validate product-market fit, and scale applications. Their collaborative process and Pacific Northwest design sensibility make them a strong choice for companies that value design thinking alongside solid engineering.',
                    ],
                  },
                  {
                    num: '09', id: 'savas-labs', name: 'Savas Labs', category: 'Web & Mobile',
                    emoji: '\u{1F517}', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Full-Stack Development &bull; Pacific Northwest Clients',
                    paragraphs: [
                      'Savas Labs delivers full-stack web and mobile development with a growing client base across the Pacific Northwest. They specialize in Drupal, React, and custom web applications, serving higher education institutions, nonprofits, and mid-market businesses in the Seattle area. Their attention to accessibility and performance standards makes them a reliable choice for organizations with strict compliance requirements.',
                    ],
                  },
                  {
                    num: '10', id: 'blink-ux', name: 'Blink UX', category: 'UX Research & Design',
                    emoji: '\u{1F3A8}', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Seattle HQ &bull; UX Pioneers Since 2000 &bull; Research-Driven',
                    paragraphs: [
                      'Blink UX rounds out our list as Seattle\'s premier UX research and design firm, operating since 2000. While not a full-stack development shop, their research-driven design process has shaped products for Amazon, Microsoft, Facebook, and dozens of Seattle-area companies. They pair seamlessly with development teams to ensure apps are built on validated user research and world-class interaction design.',
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
                    Choosing Your Seattle App Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Seattle&apos;s app development market is defined by cloud-native excellence and enterprise-grade engineering standards. The city&apos;s proximity to Amazon and Microsoft means that even smaller agencies here operate at a higher technical bar than most US markets. Your partner needs to understand AWS/Azure architectures, microservices, and the scaling challenges that come with building products for millions of users.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses seeking Seattle-grade engineering without Seattle-grade pricing, Codazz offers a compelling proposition: a Canadian headquarters for legal certainty and North American project management, combined with an India engineering center that delivers premium products at 40-60% lower cost. The same cloud-native architectures, the same agile processes, at a fraction of the burn rate.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    Whether you are a Puget Sound startup building your first MVP, an enterprise modernizing legacy systems, or a scaleup preparing for your next funding round, the companies on this list represent the finest app development talent serving Seattle in 2026.
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally, including enterprise deployments for US and Canadian markets.
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
                }}>Start Building in Seattle</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to build your Seattle app?<br />Let&apos;s talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Codazz delivers cloud-native, enterprise-grade applications for Seattle businesses. Canadian headquarters, India engineering center. Get a free consultation today.
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
