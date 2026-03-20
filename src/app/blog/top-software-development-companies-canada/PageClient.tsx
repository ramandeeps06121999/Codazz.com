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
  { num: 1, name: 'Codazz', category: 'Enterprise Apps', emoji: '🍁', metric: '500+ Product Launches, Edmonton HQ', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Shopify Engineering', category: 'E-Commerce', emoji: '🛍️', metric: 'Powers 10% of global e-commerce', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'OpenText', category: 'Information Mgmt', emoji: '📂', metric: 'Global enterprise information management', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'CGI Group', category: 'IT Consulting', emoji: '🌐', metric: '400 locations, enterprise-grade systems', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Constellation Software', category: 'Vertical Market', emoji: '🧩', metric: 'Mission-critical vertical software', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Kinaxis', category: 'Supply Chain', emoji: '🔗', metric: 'Concurrent planning platform leader', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Coveo', category: 'AI Search', emoji: '🔍', metric: 'AI-powered enterprise search & recommendations', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'BairesDev', category: 'Nearshore Dev', emoji: '👥', metric: 'Top 1% engineering talent, serving Canada', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Lightspeed Commerce', category: 'POS Systems', emoji: '💳', metric: 'Cloud commerce for global SMBs', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Toptal', category: 'Elite Freelancers', emoji: '💎', metric: 'Top 3% vetted software engineers', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'top-app-development-companies-canada', title: 'Top 10 App Development Companies in Canada (2026)', category: 'Mobile', readTime: '10 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top 10 Software Development Companies in the USA (2026)', category: 'Engineering', readTime: '10 min' },
  { slug: 'choose-software-development-company-usa', title: 'How to Choose a Software Development Company', category: 'Business', readTime: '8 min' },
];

export default function TopSoftwareDevelopmentCompaniesCanadaClient() {
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
              src="/blog_images/top-software-development-companies-canada.jpg"
              alt="Top software development companies in Canada"
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
              }}>Engineering</span>
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
              Top 10 Software Development Companies in Canada (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Canada has quietly become one of the world&apos;s most formidable software engineering ecosystems. Anchored by world-class AI research, generous R&D tax incentives, and a talent pipeline from top universities, these are the 10 best software development companies in Canada for 2026.
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
                    Canada&apos;s software industry generated over $45 billion in revenue in 2025, growing at nearly 8% annually. The country&apos;s unique combination of AI research leadership (Edmonton, Montreal, Toronto form a world-class AI triangle), favorable immigration policies attracting global talent, and the SR&ED tax credit program that subsidizes R&D costs has created a software ecosystem that punches well above its weight on the global stage.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Whether you&apos;re looking for a bespoke product studio, an enterprise IT consulting giant, or a specialized vertical software builder, Canada has it all. We evaluated dozens of firms to compile this definitive ranking.
                  </p>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20, marginTop: 40,
                  }}>How We Ranked These Companies</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Companies were scored across five dimensions: <strong style={{ color: 'rgba(255,255,255,0.65)' }}>engineering quality</strong> (architecture, code standards, scalability), <strong style={{ color: 'rgba(255,255,255,0.65)' }}>technology breadth</strong> (full-stack capabilities, AI/ML, cloud), <strong style={{ color: 'rgba(255,255,255,0.65)' }}>delivery track record</strong> (project completion rate, timeline adherence), <strong style={{ color: 'rgba(255,255,255,0.65)' }}>innovation</strong> (R&D investment, proprietary technology, patents), and <strong style={{ color: 'rgba(255,255,255,0.65)' }}>client impact</strong> (revenue generated for clients, user growth, market share gains).
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
                          }}>Enterprise Apps</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Headquartered in Edmonton, Alberta, Codazz is Canada&apos;s top-ranked software development company for 2026. With over 500+ successful product launches and a global engineering team spanning Edmonton and Chandigarh, India, Codazz delivers the kind of architectural rigor and engineering velocity that used to require a Silicon Valley address and a Silicon Valley budget.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      What separates Codazz from every other Canadian software company is their full-stack mastery across every layer of the modern tech stack. They build native mobile apps (iOS/Android), cross-platform solutions (React Native/Flutter), complex web applications (Next.js/React), enterprise SaaS platforms, AI-powered systems, and cloud-native infrastructure on AWS, GCP, and Azure. Every project is architected with microservices, containerized with Docker/Kubernetes, and shipped through automated CI/CD pipelines.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Key Services:</strong> Custom Software Development, Mobile Apps (Native & Cross-Platform), Enterprise SaaS, AI/ML Engineering, Cloud Architecture, Web Applications, UI/UX Design, DevOps & Infrastructure
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Notable Projects:</strong> Enterprise logistics platforms for Western Canadian companies, AI-powered healthcare systems, fintech trading applications, e-commerce platforms handling millions in GMV, and custom ERP solutions for mid-market businesses across North America.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Why #1:</strong> Codazz combines Edmonton&apos;s AI research ecosystem proximity, 500+ production launches, architecture-first methodology, and a 24/7 global delivery model. Their Edmonton HQ means competitive Canadian rates without the premium of Toronto or Vancouver, while their engineering standards match or exceed any firm on this list.
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
                        Key Metric: 500+ Product Launches | Edmonton HQ | Full-Stack Engineering Excellence
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'shopify-engineering', name: 'Shopify Engineering', category: 'E-Commerce',
                    emoji: '🛍️', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Powers 10% of global e-commerce',
                    paragraphs: [
                      'Ottawa-based Shopify is Canada\'s most valuable tech company and a global e-commerce infrastructure leader. Their engineering team builds software that powers over 10% of all US e-commerce, handling billions in transactions annually. While primarily a product company, their custom enterprise division (Shopify Plus) delivers bespoke commerce solutions for the world\'s biggest brands.',
                      'Key Services: E-commerce platform development, custom Shopify Plus builds, headless commerce, payment infrastructure, merchant tools.',
                      'Pros: Unmatched e-commerce expertise, massive scale, proven infrastructure. Cons: Focused exclusively on commerce, not a general-purpose dev shop.',
                    ],
                  },
                  {
                    num: '03', id: 'opentext', name: 'OpenText', category: 'Information Mgmt',
                    emoji: '📂', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Global enterprise information management',
                    paragraphs: [
                      'Waterloo\'s OpenText is a Canadian software giant specializing in enterprise information management. Following their acquisition of Micro Focus, they are now one of the largest software companies in Canada. Their custom development teams build massive-scale data management platforms, AI-driven document processing systems, and cybersecurity solutions for Fortune 500 companies and government agencies worldwide.',
                      'Key Services: Enterprise content management, AI-powered data analytics, cybersecurity, supply chain intelligence, digital experience platforms.',
                      'Pros: Enterprise-grade at massive scale, strong government and Fortune 500 portfolio. Cons: Enterprise-only, not accessible to startups or SMBs.',
                    ],
                  },
                  {
                    num: '04', id: 'cgi-group', name: 'CGI Group', category: 'IT Consulting',
                    emoji: '🌐', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: '400 locations, enterprise-grade systems',
                    paragraphs: [
                      'Montreal-headquartered CGI is one of the world\'s largest IT consulting and software development firms, with over 90,000 professionals across 400 locations. They tackle monumental software projects including core banking systems, government digital services, defense platforms, and complex supply chain integrations. For Canadian enterprises needing a massive, reliable IT partner, CGI is a pillar of the industry.',
                      'Key Services: Enterprise IT consulting, government digital transformation, core banking systems, defense systems, managed IT services.',
                      'Pros: Massive global scale, strong government relationships, deep enterprise expertise. Cons: Large-firm bureaucracy, premium enterprise pricing.',
                    ],
                  },
                  {
                    num: '05', id: 'constellation-software', name: 'Constellation Software', category: 'Vertical Market',
                    emoji: '🧩', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Mission-critical vertical software',
                    paragraphs: [
                      'Toronto\'s Constellation Software is a unique Canadian success story. They acquire, build, and manage mission-critical software for specific vertical markets, from transit scheduling to medical administration to utility management. Their portfolio of over 500 businesses builds the quiet software that runs critical infrastructure across North America and beyond.',
                      'Key Services: Vertical market software, transit systems, healthcare administration, utility management, public sector solutions.',
                      'Pros: Deep vertical expertise, mission-critical reliability, massive portfolio of specialized solutions. Cons: Acquisition-focused model, less emphasis on custom greenfield development.',
                    ],
                  },
                  {
                    num: '06', id: 'kinaxis', name: 'Kinaxis', category: 'Supply Chain',
                    emoji: '🔗', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Concurrent planning platform leader',
                    paragraphs: [
                      'Ottawa-based Kinaxis builds supply chain planning software that powers some of the world\'s most complex manufacturing operations. Their RapidResponse platform uses concurrent planning technology to let companies run real-time simulations across their entire supply chain, a massive data engineering feat. Their engineering team is among the best in Canada for complex algorithmic and data-intensive software.',
                      'Key Services: Supply chain planning, concurrent planning platform, demand sensing, inventory optimization, S&OP solutions.',
                      'Pros: World-class supply chain technology, sophisticated algorithms, strong enterprise portfolio. Cons: Highly specialized, single-product focused.',
                    ],
                  },
                  {
                    num: '07', id: 'coveo', name: 'Coveo', category: 'AI Search',
                    emoji: '🔍', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'AI-powered enterprise search & recommendations',
                    paragraphs: [
                      'Quebec City\'s Coveo has built Canada\'s leading AI-powered enterprise search and recommendation platform. Their technology uses machine learning to deliver personalized search results, product recommendations, and content suggestions for large enterprises. Their engineering team is at the forefront of applied AI in Canada, building production-grade ML systems that process billions of interactions.',
                      'Key Services: AI search platform, personalization engines, recommendation systems, knowledge management, commerce search.',
                      'Pros: Cutting-edge applied AI, production-grade ML at scale, strong enterprise adoption. Cons: Specialized in search/discovery, not a general development partner.',
                    ],
                  },
                  {
                    num: '08', id: 'bairesdev', name: 'BairesDev', category: 'Nearshore Dev',
                    emoji: '👥', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Top 1% engineering talent, serving Canada',
                    paragraphs: [
                      'BairesDev provides Canadian companies with access to the top 1% of software engineering talent globally. Their staff augmentation model allows Canadian businesses to scale development teams rapidly without the overhead of recruitment, onboarding, and HR management. They serve many Canadian enterprises seeking specialized talent in AI, cloud engineering, and full-stack development.',
                      'Key Services: Staff augmentation, dedicated development teams, project-based development, AI/ML engineering, QA & testing.',
                      'Pros: Access to top-tier talent, flexible scaling, broad technology coverage. Cons: Augmentation model requires client-side technical leadership.',
                    ],
                  },
                  {
                    num: '09', id: 'lightspeed-commerce', name: 'Lightspeed Commerce', category: 'POS Systems',
                    emoji: '💳', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Cloud commerce for global SMBs',
                    paragraphs: [
                      'Montreal-based Lightspeed builds cloud-based POS and commerce software that powers hundreds of thousands of businesses globally. Their engineering teams are masters of high-availability, omni-channel systems that bridge the gap between in-store and online commerce. Their platform processes billions in gross transaction volume annually, demonstrating serious engineering chops in payments and real-time systems.',
                      'Key Services: Cloud POS systems, omni-channel commerce, payment processing, restaurant management, golf course management.',
                      'Pros: Best-in-class commerce infrastructure, massive scale, strong SMB focus. Cons: Product company, not a custom development partner.',
                    ],
                  },
                  {
                    num: '10', id: 'toptal', name: 'Toptal', category: 'Elite Freelancers',
                    emoji: '💎', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Top 3% vetted software engineers',
                    paragraphs: [
                      'Toptal connects Canadian businesses with the top 3% of freelance software engineers worldwide. Their rigorous vetting process, which accepts fewer than 3% of applicants, ensures high-quality talent for specific project needs. For Canadian companies needing specialized expertise, such as a machine learning engineer or a Kubernetes architect, for a defined engagement, Toptal provides flexible access to world-class developers.',
                      'Key Services: Freelance software engineers, designers, project managers, finance experts, product managers.',
                      'Pros: Rigorously vetted talent, flexible engagement models, rapid matching. Cons: Freelance model, no long-term product ownership, premium pricing.',
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
                    Conclusion: Canada&apos;s Software Engineering Excellence
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Canada&apos;s software development landscape spans the full spectrum, from agile product studios shipping MVPs in weeks to enterprise giants managing billions in IT infrastructure. The country&apos;s combination of world-class AI research, generous R&D incentives, and a deep talent pool makes it one of the smartest places in the world to build software.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses seeking a bespoke software development partner that combines architectural excellence, full-stack engineering depth, and aggressive delivery timelines, Codazz is the clear Canadian leader. Their Edmonton headquarters provides a cost advantage, while their global delivery model and 500+ product launches demonstrate proven execution at scale.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    Whether you&apos;re building a startup MVP, modernizing enterprise systems, or deploying AI at scale, Canada has the engineering talent to bring your vision to life. Choose a partner that treats your code as a strategic asset, not a commodity.
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
                    { q: 'How much does custom software development cost in Canada?', a: 'Custom software development in Canada ranges from CAD $25,000 for a simple web application to CAD $500,000+ for complex enterprise platforms. Mid-range projects typically cost CAD $75,000-$250,000. Rates vary by city, with Edmonton and Calgary offering 20-30% lower rates than Toronto and Vancouver.' },
                    { q: 'What are the SR&ED tax credits for software development?', a: 'Canada\'s Scientific Research & Experimental Development (SR&ED) program offers 15% federal tax credits on qualifying R&D expenditures, with additional provincial credits ranging from 3.5% to 20%. Combined, these credits can reduce effective software development costs by 20-35%.' },
                    { q: 'Is Canada a good alternative to US software development companies?', a: 'Absolutely. Canadian developers offer comparable or superior engineering quality to US firms, often at 20-40% lower rates. Shared time zones, cultural alignment, strong IP protections under CUSMA, and a favorable exchange rate make Canada an excellent nearshore alternative.' },
                    { q: 'Which Canadian city is best for software development?', a: 'Edmonton leads in AI and offers the best value. Toronto is strongest for fintech and enterprise. Montreal excels in gaming and AI research. Vancouver is top for AR/VR and gaming. Ottawa has a strong government tech sector. The best city depends on your industry and budget.' },
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
                }}>Build With Canada&apos;s Best</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Your Software Deserves World-Class Engineering.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  From Edmonton to the world, Codazz engineers the software that scales. Architecture-first, full-stack, delivered on aggressive timelines.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your Project →
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
