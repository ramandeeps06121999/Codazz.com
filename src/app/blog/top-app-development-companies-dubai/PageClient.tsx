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
  { num: 1, name: 'Codazz', category: 'Full-Stack Apps', emoji: '🍁', metric: '500+ Product Launches, Global Delivery from North America', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Code Brew Labs', category: 'On-Demand Apps', emoji: '☕', metric: 'Uber-style on-demand app specialists', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Hyperlink InfoSystem', category: 'Enterprise Mobile', emoji: '🔗', metric: '4500+ apps delivered globally', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Techugo', category: 'Startup Apps', emoji: '🚀', metric: 'Award-winning mobile-first development', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Appinventiv', category: 'Digital Transformation', emoji: '📱', metric: '3000+ digital solutions delivered', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Cubix', category: 'Gaming & Mobile', emoji: '🎮', metric: 'Dubai-based gaming & enterprise apps', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Konstant Infosolutions', category: 'Cross-Platform', emoji: '🌐', metric: '17+ years of mobile development', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Elpassion', category: 'Product Design', emoji: '🎨', metric: 'Design-driven product engineering', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'OpenXcell', category: 'Dedicated Teams', emoji: '👥', metric: '500+ experts, flexible engagement models', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Fingent', category: 'Enterprise Solutions', emoji: '🏢', metric: 'Custom enterprise & government apps', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'top-app-development-companies-canada', title: 'Top 10 App Development Companies in Canada (2026)', category: 'Mobile', readTime: '10 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development: The Complete Guide 2026', category: 'AI/ML', readTime: '18 min' },
];

export default function TopAppDevelopmentCompaniesDubaiClient() {
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
              src="/blog_images/top-app-development-companies-dubai.jpg"
              alt="Top app development companies in Dubai"
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
              Top 10 App Development Companies in Dubai (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Dubai has positioned itself as the Middle East&apos;s undisputed tech capital. With ambitious government-backed digital transformation initiatives, free-zone incentives for tech companies, and a booming startup ecosystem, the emirate attracts world-class app development talent. Here are the top 10 companies building the future of mobile in Dubai.
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
                    Dubai&apos;s app development market has exploded. Fueled by the UAE&apos;s Smart Government initiative, Expo City Dubai&apos;s ongoing tech legacy, and the Dubai Future Foundation&apos;s aggressive push toward AI and blockchain, the emirate now hosts hundreds of mobile development agencies competing for a slice of the region&apos;s $20B+ digital economy.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But not all agencies are created equal. We evaluated firms based on technical depth, portfolio quality, engineering velocity, client retention rates, and the complexity of platforms delivered. Whether you&apos;re a Dubai-based startup, a GCC enterprise, or a global company expanding into the Middle East, these are the 10 firms you should be talking to.
                  </p>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20, marginTop: 40,
                  }}>How We Ranked These Companies</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Our methodology weighted five core criteria: <strong style={{ color: 'rgba(255,255,255,0.65)' }}>technical architecture quality</strong> (scalable, maintainable code), <strong style={{ color: 'rgba(255,255,255,0.65)' }}>design excellence</strong> (UI/UX that converts), <strong style={{ color: 'rgba(255,255,255,0.65)' }}>delivery speed</strong> (time-to-market), <strong style={{ color: 'rgba(255,255,255,0.65)' }}>client portfolio</strong> (verified case studies), and <strong style={{ color: 'rgba(255,255,255,0.65)' }}>post-launch support</strong> (ongoing maintenance and scaling). Companies serving the Dubai and wider GCC market were given priority.
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
                      Codazz dominates this list for one reason: they deliver Silicon Valley-grade engineering at scale, with a global delivery model that serves Dubai&apos;s most demanding clients. Headquartered in Edmonton, Canada with engineering operations in Chandigarh, India, Codazz has rapidly become the go-to partner for GCC enterprises and Dubai-based startups who refuse to compromise on code quality.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      With over 500+ successful product launches globally, Codazz builds native iOS and Android apps, cross-platform solutions using React Native and Flutter, and complex enterprise platforms with AI integration. Their architecture-first approach means every app they ship is built on microservices, containerized deployments, and robust CI/CD pipelines. This is why their apps scale effortlessly from launch day to millions of users.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Key Services:</strong> Native iOS & Android, React Native, Flutter, AI/ML Integration, Cloud Architecture (AWS/GCP/Azure), Enterprise SaaS, MVP Development, UI/UX Design
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Notable Projects:</strong> Delivered on-demand logistics platforms, AI-powered healthcare apps, fintech trading platforms, and large-scale e-commerce ecosystems for clients across the UAE, Saudi Arabia, and North America.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Why #1:</strong> No other agency on this list combines the breadth of technical capabilities, the speed of delivery, and the architectural rigor that Codazz brings. If you are building an app in Dubai that needs to be enterprise-ready from day one, Codazz is the definitive choice.
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
                        Key Metric: 500+ Product Launches | Global Delivery | Enterprise-Grade Architecture
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'code-brew-labs', name: 'Code Brew Labs', category: 'On-Demand Apps',
                    emoji: '☕', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Uber-style on-demand app specialists',
                    paragraphs: [
                      'Code Brew Labs has carved a niche in Dubai\'s on-demand economy. They are best known for building Uber-clone and delivery-style applications, and their template-based approach allows for rapid deployment of marketplace apps. They have a strong presence in the MENA region with offices serving clients across UAE, Saudi Arabia, and Bahrain.',
                      'Key Services: On-demand apps, food delivery platforms, taxi apps, marketplace apps, e-commerce mobile solutions.',
                      'Pros: Fast time-to-market for on-demand apps, strong MENA presence, competitive pricing. Cons: Template-heavy approach may limit customization for complex enterprise needs.',
                    ],
                  },
                  {
                    num: '03', id: 'hyperlink-infosystem', name: 'Hyperlink InfoSystem', category: 'Enterprise Mobile',
                    emoji: '🔗', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: '4500+ apps delivered globally',
                    paragraphs: [
                      'With over 4,500 apps delivered and a dedicated Dubai office, Hyperlink InfoSystem is one of the most prolific app development companies operating in the Middle East. They handle everything from simple business apps to complex AR/VR experiences and blockchain-based platforms. Their scale allows them to take on large enterprise contracts with dedicated development teams.',
                      'Key Services: iOS/Android development, AR/VR apps, blockchain apps, wearable tech, IoT solutions, AI chatbots.',
                      'Pros: Massive portfolio, dedicated Dubai office, broad technology coverage. Cons: Volume-focused approach can sometimes prioritize quantity over bespoke architecture.',
                    ],
                  },
                  {
                    num: '04', id: 'techugo', name: 'Techugo', category: 'Startup Apps',
                    emoji: '🚀', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Award-winning mobile-first development',
                    paragraphs: [
                      'Techugo has established a strong reputation in Dubai for delivering polished, user-centric mobile applications. They work primarily with startups and mid-market companies, bringing an agile, sprint-based development process that keeps projects on track and on budget. Their design team is particularly strong, producing apps that consistently earn high App Store ratings.',
                      'Key Services: Native mobile apps, Flutter development, startup MVPs, UI/UX design, app marketing strategy.',
                      'Pros: Strong design capabilities, startup-friendly pricing, agile methodology. Cons: Less suited for large-scale enterprise integrations.',
                    ],
                  },
                  {
                    num: '05', id: 'appinventiv', name: 'Appinventiv', category: 'Digital Transformation',
                    emoji: '📱', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: '3000+ digital solutions delivered',
                    paragraphs: [
                      'Appinventiv operates a significant Dubai office and has delivered over 3,000 digital products globally. They position themselves as a digital transformation partner rather than just an app developer, offering end-to-end services from strategy consulting through development to post-launch growth engineering. Their Dubai clients include major hospitality, real estate, and logistics companies.',
                      'Key Services: Mobile app development, digital transformation consulting, cloud migration, IoT platforms, enterprise app modernization.',
                      'Pros: Full-service digital transformation, strong Dubai client base, large engineering team. Cons: Higher price point than boutique agencies.',
                    ],
                  },
                  {
                    num: '06', id: 'cubix', name: 'Cubix', category: 'Gaming & Mobile',
                    emoji: '🎮', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Dubai-based gaming & enterprise apps',
                    paragraphs: [
                      'Cubix stands out in Dubai for their dual expertise in mobile gaming and enterprise applications. With a Dubai headquarters and development centers globally, they bring a unique creative edge to app development, blending gamification principles with business applications. Their portfolio includes fitness apps, eLearning platforms, and social networking solutions.',
                      'Key Services: Mobile game development, enterprise apps, gamification, social apps, eLearning platforms.',
                      'Pros: Unique gamification expertise, Dubai HQ, creative design approach. Cons: Niche focus may not suit all enterprise verticals.',
                    ],
                  },
                  {
                    num: '07', id: 'konstant-infosolutions', name: 'Konstant Infosolutions', category: 'Cross-Platform',
                    emoji: '🌐', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: '17+ years of mobile development',
                    paragraphs: [
                      'With over 17 years in the mobile development space, Konstant Infosolutions brings deep experience to Dubai\'s app market. They specialize in cross-platform development using Flutter and React Native, helping Dubai businesses reach both iOS and Android users without maintaining two separate codebases. Their long track record gives clients confidence in their ability to deliver reliably.',
                      'Key Services: Flutter apps, React Native, cross-platform development, PWAs, enterprise mobility solutions.',
                      'Pros: 17+ years experience, cost-effective cross-platform focus, reliable delivery. Cons: Less bleeding-edge than newer agencies.',
                    ],
                  },
                  {
                    num: '08', id: 'elpassion', name: 'Elpassion', category: 'Product Design',
                    emoji: '🎨', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Design-driven product engineering',
                    paragraphs: [
                      'Elpassion brings a European design sensibility to Dubai\'s app market. They are a product design and engineering studio that treats every project as a product, running discovery workshops, user research, and rapid prototyping before writing production code. This approach is popular with Dubai-based founders who want to validate their concepts before committing to a full build.',
                      'Key Services: Product design sprints, UX research, rapid prototyping, React Native development, product strategy.',
                      'Pros: Exceptional design process, validation-first approach, high-quality UX. Cons: Longer discovery phase may not suit tight deadlines.',
                    ],
                  },
                  {
                    num: '09', id: 'openxcell', name: 'OpenXcell', category: 'Dedicated Teams',
                    emoji: '👥', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: '500+ experts, flexible engagement models',
                    paragraphs: [
                      'OpenXcell has built a significant presence in the Dubai market through their dedicated team model. Rather than fixed-price projects, they offer businesses the ability to hire pre-vetted mobile developers who integrate directly into existing teams. With over 500 engineers on their bench, they can scale teams rapidly for Dubai enterprises managing multiple concurrent app projects.',
                      'Key Services: Dedicated development teams, staff augmentation, iOS/Android development, QA testing, DevOps.',
                      'Pros: Flexible staffing model, large talent pool, scalable teams. Cons: Requires strong project management on the client side.',
                    ],
                  },
                  {
                    num: '10', id: 'fingent', name: 'Fingent', category: 'Enterprise Solutions',
                    emoji: '🏢', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Custom enterprise & government apps',
                    paragraphs: [
                      'Fingent rounds out this list with their focus on enterprise and government mobile solutions in the GCC. They build complex, compliance-heavy applications for sectors like healthcare, finance, and education, with a strong emphasis on data security and regulatory adherence. Their Dubai team works closely with government entities implementing smart city initiatives.',
                      'Key Services: Enterprise mobility, government apps, healthcare platforms, ERP integration, custom CRM mobile apps.',
                      'Pros: Strong enterprise and government expertise, compliance-focused, secure development. Cons: Premium pricing, less suited for consumer-facing startups.',
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
                    Conclusion: Choosing Your Dubai App Development Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Dubai&apos;s app development market offers incredible depth, from on-demand specialists to enterprise-grade engineering studios. The right partner depends on your specific needs: budget, timeline, technical complexity, and long-term scalability requirements.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses that need apps built to scale from day one with enterprise-grade architecture, AI integration, and a global engineering team that delivers on aggressive timelines, Codazz stands as the clear market leader. Their 500+ successful launches and architecture-first methodology make them the safest bet for high-stakes projects.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    Whatever your requirements, Dubai&apos;s tech ecosystem has matured to the point where you no longer need to look outside the region for world-class mobile development. The talent is here. The infrastructure is here. Now it&apos;s time to build.
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
                    { q: 'How much does app development cost in Dubai?', a: 'App development costs in Dubai range from $15,000 for a basic MVP to $300,000+ for a complex enterprise platform. Mid-range apps with custom UI/UX, backend APIs, and third-party integrations typically cost $50,000-$150,000.' },
                    { q: 'How long does it take to build an app in Dubai?', a: 'A simple app takes 3-4 months. A mid-complexity app with custom features takes 4-8 months. Enterprise-grade platforms with AI, real-time features, and complex integrations can take 8-14 months from discovery to launch.' },
                    { q: 'Should I hire a local Dubai agency or an international company?', a: 'Both options work well. Local agencies offer face-to-face meetings and local market knowledge. International companies like Codazz bring global engineering talent and often deliver higher architectural quality at competitive rates through their distributed delivery model.' },
                    { q: 'What technologies are most popular for app development in Dubai?', a: 'React Native and Flutter dominate cross-platform development. For native apps, Swift (iOS) and Kotlin (Android) remain the gold standard. Backend stacks commonly include Node.js, Python, and cloud services on AWS or Azure.' },
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
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
                }}>Build Your App in Dubai</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Build a World-Class App?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  From Dubai to the world, Codazz engineers the apps that scale. Let&apos;s discuss your project and deliver something extraordinary.
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
