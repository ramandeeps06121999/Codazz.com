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
  { num: 1, name: 'Codazz', category: 'Full-Stack Apps', emoji: '🍁', metric: '500+ Product Launches, HQ in Edmonton', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Finger Food Studios', category: 'Immersive Apps', emoji: '🎮', metric: 'XR & immersive app specialists', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Vog App Developers', category: 'Mobile-First', emoji: '📱', metric: '200+ apps, Calgary-based', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Clearbridge Mobile', category: 'Enterprise Mobile', emoji: '🏢', metric: 'Toronto enterprise app specialists', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Appinventiv', category: 'Digital Transformation', emoji: '🚀', metric: '3000+ digital solutions globally', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Hyperlink InfoSystem', category: 'Cross-Platform', emoji: '🔗', metric: '4500+ apps delivered globally', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Plastic Mobile', category: 'Connected Experiences', emoji: '🔌', metric: 'IoT & connected mobile experiences', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Konstant Infosolutions', category: 'Flutter & React Native', emoji: '🌐', metric: '17+ years mobile development', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Guarana Technologies', category: 'Startup MVPs', emoji: '🌿', metric: 'Montreal-based startup accelerator', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Techugo', category: 'Mobile Innovation', emoji: '💡', metric: 'Award-winning mobile-first development', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'top-software-development-companies-canada', title: 'Top 10 Software Development Companies in Canada (2026)', category: 'Engineering', readTime: '10 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native: The Definitive 2026 Comparison', category: 'Engineering', readTime: '15 min' },
];

export default function TopAppDevelopmentCompaniesCanadaClient() {
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

        {/* FEATURED IMAGE */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/top-app-development-companies-canada.jpg"
              alt="Top app development companies in Canada"
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
              Top 10 App Development Companies in Canada (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Canada&apos;s tech ecosystem has matured into a global powerhouse. From Edmonton&apos;s AI corridor to Toronto&apos;s fintech hub and Vancouver&apos;s gaming scene, Canadian app development companies are delivering world-class mobile products. Here are the top 10 for 2026.
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
                    Canada&apos;s technology sector contributed over $100 billion to the national GDP in 2025, and mobile app development sits at the heart of this growth. With world-class universities producing top-tier AI and engineering talent, generous R&D tax credits through SR&ED, and a cost of living that keeps operational expenses lower than Silicon Valley, Canada has become one of the smartest places in the world to build a mobile app.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But with hundreds of agencies competing for your business, choosing the right partner is critical. We evaluated Canadian app development companies on five pillars: <strong style={{ color: 'rgba(255,255,255,0.65)' }}>technical architecture quality</strong>, <strong style={{ color: 'rgba(255,255,255,0.65)' }}>design excellence</strong>, <strong style={{ color: 'rgba(255,255,255,0.65)' }}>delivery velocity</strong>, <strong style={{ color: 'rgba(255,255,255,0.65)' }}>client portfolio depth</strong>, and <strong style={{ color: 'rgba(255,255,255,0.65)' }}>post-launch scalability</strong>.
                  </p>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20, marginTop: 40,
                  }}>How We Ranked These Companies</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Each company was scored across technical depth (scalable architecture, clean code practices), design maturity (user research, conversion-focused UX), delivery speed (sprint velocity, time-to-market), portfolio quality (verified case studies, app store ratings), and client retention (long-term partnerships, ongoing engagements). Canadian-headquartered companies received priority weighting.
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
                      Headquartered in Edmonton, Alberta, Codazz is Canada&apos;s premier app development company and the clear #1 on this list. With over 500+ successful product launches spanning mobile apps, enterprise platforms, and AI-powered solutions, Codazz has built a reputation for engineering excellence that rivals the best firms in Silicon Valley.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      What makes Codazz different from every other Canadian agency is their architecture-first philosophy. Every project starts with a deep technical discovery phase where they map out microservices architecture, database design, API contracts, and CI/CD pipelines before a single line of application code is written. This means their apps don&apos;t just work at launch, they scale effortlessly to millions of users without costly rewrites.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Key Services:</strong> Native iOS & Android, React Native, Flutter, AI/ML Integration, Cloud Architecture (AWS/GCP/Azure), Enterprise SaaS, MVP Development, Full-Stack Web Apps, UI/UX Design
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Notable Projects:</strong> Built on-demand logistics platforms for Western Canadian enterprises, AI-powered healthcare diagnostics apps, fintech trading platforms for Toronto-based firms, and large-scale e-commerce ecosystems serving customers across North America.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Why #1:</strong> No other Canadian agency matches Codazz&apos;s combination of technical depth, delivery speed, and architectural rigor. Their Edmonton headquarters gives them a cost advantage over Toronto and Vancouver agencies, while their global engineering team (with operations in Chandigarh, India) ensures 24/7 development cycles and aggressive timelines.
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
                        Key Metric: 500+ Product Launches | Edmonton HQ | Global Delivery Team
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'finger-food-studios', name: 'Finger Food Studios', category: 'Immersive Apps',
                    emoji: '🎮', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'XR & immersive app specialists',
                    paragraphs: [
                      'Vancouver-based Finger Food Studios (now part of Unity Technologies) has become synonymous with cutting-edge immersive mobile experiences. They specialize in AR/VR applications, 3D visualization tools, and mixed reality platforms that push the boundaries of what mobile devices can do. Their work with major automotive brands and healthcare companies has set a new standard for immersive app development in Canada.',
                      'Key Services: AR/VR mobile apps, 3D visualization, Unity development, mixed reality, spatial computing.',
                      'Pros: Industry-leading immersive tech expertise, Unity backing, premium client portfolio. Cons: Specialized focus means they\'re not ideal for standard business apps.',
                    ],
                  },
                  {
                    num: '03', id: 'vog-app-developers', name: 'Vog App Developers', category: 'Mobile-First',
                    emoji: '📱', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: '200+ apps, Calgary-based',
                    paragraphs: [
                      'Calgary\'s Vog App Developers has built over 200 mobile apps for clients ranging from local Alberta businesses to national enterprises. They take a mobile-first approach to every project, ensuring that the smartphone experience is never an afterthought. Their team is particularly strong in healthcare, oil & gas field operations, and retail loyalty apps, reflecting Calgary\'s core industries.',
                      'Key Services: iOS/Android development, enterprise mobility, healthcare apps, field service apps, wearable integration.',
                      'Pros: Strong Alberta presence, industry-specific expertise (energy, healthcare), 200+ app portfolio. Cons: Smaller team limits capacity for concurrent large-scale projects.',
                    ],
                  },
                  {
                    num: '04', id: 'clearbridge-mobile', name: 'Clearbridge Mobile', category: 'Enterprise Mobile',
                    emoji: '🏢', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Toronto enterprise app specialists',
                    paragraphs: [
                      'Clearbridge Mobile is Toronto\'s most established enterprise mobile development agency. They work with Fortune 500 companies and large Canadian banks to build secure, compliant mobile banking apps, insurance platforms, and internal enterprise tools. Their expertise in regulated industries, strict data privacy compliance, and integration with legacy enterprise systems makes them a trusted partner for Canada\'s biggest corporations.',
                      'Key Services: Enterprise mobile apps, fintech platforms, healthcare apps, legacy system integration, security-first development.',
                      'Pros: Deep enterprise expertise, compliance-focused, strong financial services portfolio. Cons: Enterprise pricing, less suited for early-stage startups.',
                    ],
                  },
                  {
                    num: '05', id: 'appinventiv', name: 'Appinventiv', category: 'Digital Transformation',
                    emoji: '🚀', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: '3000+ digital solutions globally',
                    paragraphs: [
                      'Appinventiv has expanded aggressively into the Canadian market with their Toronto office, bringing over 3,000 successful digital product deliveries to the table. They position themselves as a full-cycle digital transformation partner, handling everything from initial strategy through development to post-launch growth. Their Canadian clients include major retail chains, logistics companies, and healthcare providers.',
                      'Key Services: Mobile app development, digital transformation consulting, IoT platforms, cloud migration, enterprise app modernization.',
                      'Pros: Massive global experience, full-service capabilities, large engineering team. Cons: Not Canadian-born, premium pricing tier.',
                    ],
                  },
                  {
                    num: '06', id: 'hyperlink-infosystem', name: 'Hyperlink InfoSystem', category: 'Cross-Platform',
                    emoji: '🔗', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: '4500+ apps delivered globally',
                    paragraphs: [
                      'With a Canadian presence and over 4,500 apps delivered worldwide, Hyperlink InfoSystem offers breadth that few agencies can match. They cover everything from basic business apps to complex blockchain and AI solutions. Their cross-platform focus using Flutter and React Native helps Canadian businesses reach both iOS and Android markets efficiently.',
                      'Key Services: Flutter, React Native, blockchain apps, AI/ML development, AR/VR, wearable apps.',
                      'Pros: Massive portfolio, broad technology coverage, competitive pricing. Cons: Volume-focused model, less emphasis on bespoke architecture.',
                    ],
                  },
                  {
                    num: '07', id: 'plastic-mobile', name: 'Plastic Mobile', category: 'Connected Experiences',
                    emoji: '🔌', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'IoT & connected mobile experiences',
                    paragraphs: [
                      'Toronto-based Plastic Mobile (now part of Havas CX) specializes in building connected mobile experiences that bridge the physical and digital worlds. They excel at IoT-enabled apps, beacon technology, and location-aware mobile platforms. Their work with Canadian retail brands and transit authorities demonstrates their ability to handle complex, real-world mobile integrations.',
                      'Key Services: IoT mobile apps, beacon technology, connected retail experiences, transit apps, location-based services.',
                      'Pros: Unique IoT expertise, strong retail portfolio, Havas CX backing. Cons: Niche focus, less suited for standard SaaS development.',
                    ],
                  },
                  {
                    num: '08', id: 'konstant-infosolutions', name: 'Konstant Infosolutions', category: 'Flutter & React Native',
                    emoji: '🌐', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: '17+ years mobile development',
                    paragraphs: [
                      'With 17+ years of mobile development experience and a growing Canadian client base, Konstant Infosolutions brings deep cross-platform expertise to the table. They are particularly strong in Flutter and React Native development, helping Canadian businesses launch apps on both platforms simultaneously while maintaining a single codebase.',
                      'Key Services: Flutter apps, React Native, cross-platform development, PWAs, enterprise mobility.',
                      'Pros: 17+ years track record, cost-effective cross-platform solutions, reliable delivery. Cons: Offshore model requires strong project management.',
                    ],
                  },
                  {
                    num: '09', id: 'guarana-technologies', name: 'Guarana Technologies', category: 'Startup MVPs',
                    emoji: '🌿', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Montreal-based startup accelerator',
                    paragraphs: [
                      'Montreal\'s Guarana Technologies has positioned itself as Canada\'s go-to agency for startup MVPs. They work closely with founders to validate ideas, build lean prototypes, and ship minimum viable products in tight timeframes. Their deep integration with Montreal\'s startup ecosystem, including partnerships with local accelerators and VC firms, gives their clients an unfair advantage.',
                      'Key Services: MVP development, startup consulting, rapid prototyping, React Native, Node.js backends.',
                      'Pros: Startup-focused, lean methodology, Montreal ecosystem connections. Cons: Less suited for enterprise-scale projects.',
                    ],
                  },
                  {
                    num: '10', id: 'techugo', name: 'Techugo', category: 'Mobile Innovation',
                    emoji: '💡', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Award-winning mobile-first development',
                    paragraphs: [
                      'Techugo rounds out this list with their growing Canadian operations and a strong portfolio of award-winning mobile apps. They bring a mobile-first philosophy to every engagement, ensuring that apps are designed for the small screen first and scale up from there. Their work spans healthcare, education, logistics, and consumer lifestyle apps.',
                      'Key Services: Native iOS/Android, Flutter, app strategy, UI/UX design, app store optimization.',
                      'Pros: Strong design focus, award-winning apps, mobile-first methodology. Cons: Growing Canadian presence, primary operations still offshore.',
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

                {/* Why Canada section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why Canada for App Development?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Canada offers a unique combination of advantages that make it one of the world&apos;s best destinations for mobile app development. The country&apos;s SR&ED tax credit program effectively subsidizes R&D costs by 15-35%, making innovation more affordable. Universities like Waterloo, UBC, and the University of Alberta produce top-tier engineering and AI talent.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Edmonton&apos;s AI corridor, anchored by the Alberta Machine Intelligence Institute (Amii) and DeepMind&apos;s research lab, has positioned Western Canada as a global AI hub. Toronto leads in fintech, Montreal in gaming and AI research, and Vancouver in AR/VR. This distributed tech ecosystem means you can find specialized expertise regardless of your industry.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Combined with a favorable exchange rate for US clients, North American time zones, strong IP protections, and a multicultural talent pool, Canada is the smart choice for businesses looking to build world-class mobile apps in 2026.
                  </p>
                </div>

                {/* Conclusion */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Conclusion: Choosing Your Canadian App Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Canada&apos;s app development landscape is rich with talent, from coast to coast. Whether you need an immersive AR experience, a compliant fintech platform, or a scalable consumer app, there&apos;s a Canadian agency that specializes in exactly that.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses seeking the most complete engineering partner, Codazz stands apart. Their Edmonton headquarters, 500+ product launches, and architecture-first approach make them the definitive choice for any company that refuses to compromise on code quality. Their global delivery model means you get Canadian standards of excellence with aggressive timelines.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    The best time to build your app was yesterday. The second-best time is today. Choose a partner that treats your code as the foundation of your business, not just a project to ship and forget.
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
                    { q: 'How much does app development cost in Canada?', a: 'App development costs in Canada range from CAD $20,000 for a simple MVP to CAD $400,000+ for a complex enterprise platform. Mid-range apps typically cost CAD $60,000-$180,000. Edmonton and Calgary agencies often offer 20-30% lower rates than Toronto or Vancouver.' },
                    { q: 'Which Canadian city has the best app developers?', a: 'It depends on your niche. Edmonton excels in AI-powered apps, Toronto leads in fintech and enterprise mobile, Vancouver is strong in gaming and AR/VR, and Montreal specializes in gaming and creative apps. For the best overall engineering talent, Edmonton-based Codazz serves clients nationwide.' },
                    { q: 'Can Canadian companies build apps for the US market?', a: 'Absolutely. Most top Canadian agencies serve US clients extensively. Shared time zones, cultural alignment, strong IP protections under CUSMA, and a favorable exchange rate make Canadian agencies an excellent choice for American businesses.' },
                    { q: 'What are the tax benefits of building an app in Canada?', a: 'Canada\'s SR&ED program offers 15-35% tax credits on qualifying R&D expenditures. Provincial programs like Alberta\'s Innovation Employment Grant and Ontario\'s OITC provide additional incentives. These credits can significantly reduce your effective development costs.' },
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
                      Leading engineering strategy and product vision at Codazz from Edmonton, Canada. Has guided over 500+ bespoke product launches globally.
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
                }}>Build Your App in Canada</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Canada&apos;s Best Engineering Team Is Ready.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  From Edmonton to the world, Codazz builds apps that scale. Architecture-first, engineered for growth, delivered on aggressive timelines.
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
