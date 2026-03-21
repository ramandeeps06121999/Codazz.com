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
  { num: 1, name: 'Infosys', category: 'Enterprise IT', emoji: '🏢', metric: 'Bangalore HQ | 300K+ Engineers | Fortune 500 Clients', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 2, name: 'Wipro Digital', category: 'Digital Services', emoji: '🌐', metric: 'Bangalore-born global IT leader, $11B+ Revenue', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 3, name: 'Mphasis', category: 'Cloud & Cognitive AI', emoji: '☁️', metric: 'Blackstone-backed, AI-first development', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 4, name: 'Thoughtworks', category: 'Agile Consulting', emoji: '🔄', metric: 'Tech strategy + custom software, global delivery', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 5, name: 'Freshworks', category: 'SaaS Products', emoji: '💼', metric: 'NASDAQ-listed, $500M+ ARR CRM/helpdesk SaaS', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 6, name: 'Flipkart Tech', category: 'Product Engineering', emoji: '🛒', metric: 'India\'s largest e-commerce, Walmart-backed', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 7, name: 'Razorpay', category: 'Fintech Engineering', emoji: '💳', metric: '$7.5B valuation, India\'s leading payment infrastructure', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 8, name: 'EPAM Systems', category: 'Custom Development', emoji: '⚙️', metric: 'Top global engineering services firm', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 9, name: 'Swiggy Tech', category: 'On-Demand Platform', emoji: '🍕', metric: '10M+ daily orders, hyper-scale logistics platform', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
  { num: 10, name: 'Codazz (Chandigarh)', category: 'Full-Stack / Global', emoji: '🍁', metric: 'Canadian HQ + India Dev Center | Same quality, lower risk', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
];

const relatedPosts = [
  { slug: 'app-development-companies-dubai', title: 'Top App Development Companies in Dubai (2026)', category: 'Mobile', readTime: '9 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Cost Guide', readTime: '12 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native (2026): Which Should You Choose?', category: 'Engineering', readTime: '10 min' },
];

export default function AppDevelopmentCompaniesBangaloreClient() {
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
              src="/blog_images/app-development-companies-bangalore.jpg"
              alt="Top app development companies in Bangalore 2026"
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
                11 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 860,
            }}>
              Top App Development Companies in Bangalore (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Bangalore — India&apos;s Silicon Valley — houses over 7,000 tech companies and one of the densest concentrations of software engineering talent on Earth. This is the definitive 2026 guide to the top app development companies in Bangalore: rates, quality, what to watch for, and how to hire remotely.
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
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz — Edmonton, Canada</p>
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

        {/* ARTICLE BODY */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Bangalore (officially Bengaluru) is India&apos;s undisputed technology capital. The city is home to the Indian operations of Amazon, Google, Microsoft, Apple, and Samsung — and has spawned unicorns including Flipkart, Swiggy, Razorpay, Byju&apos;s, and Ola. With over 1.1 million software engineers working across neighborhoods including Electronic City, Whitefield, Koramangala, and the outer ring road, Bangalore produces more software engineers annually than any city outside the United States.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    For global businesses seeking affordable, high-quality app development, Bangalore is a compelling option. Rates range from $20–$60/hr USD depending on the company size, specialization, and team seniority — a fraction of equivalent US or Canadian rates. But as with any offshore engagement, the quality variance is enormous. The difference between a top Bangalore development firm and a bottom-rung vendor can mean the difference between a product that wins and one that is abandoned after six months.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide ranks the top 10 app development companies operating in or from Bangalore, covers the quality vs. cost tradeoffs you need to understand, and explains how to hire a remote Bangalore team effectively — or whether a nearshore alternative like Codazz&apos;s Chandigarh engineering center might be a better fit for your project.
                  </p>
                </div>

                {/* Bangalore Tech Map */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Bangalore&apos;s Tech Districts: Where the Development Happens</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    {[
                      { district: 'Electronic City', icon: '🔌', desc: 'Home to Infosys HQ, Wipro, TCS. Traditional IT campus zone.', type: 'Enterprise IT' },
                      { district: 'Whitefield', icon: '🏗️', desc: 'Intel, SAP, Oracle, Mphasis. MNC-heavy suburb.', type: 'MNC Operations' },
                      { district: 'Koramangala', icon: '🚀', desc: 'Startup epicentre. Flipkart, Swiggy, Razorpay origins.', type: 'Startup Hub' },
                      { district: 'Indiranagar', icon: '🎨', desc: 'Design studios, product agencies, boutique dev firms.', type: 'Product Studios' },
                      { district: 'Outer Ring Road', icon: '🌐', desc: 'Major tech parks. Accenture, Cognizant, Capgemini.', type: 'Services Giants' },
                    ].map((d, i) => (
                      <div key={i} style={{
                        padding: 20, borderRadius: 16,
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <div style={{ fontSize: 28, marginBottom: 10 }}>{d.icon}</div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{d.district}</p>
                        <p style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{d.type}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
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
                        'Bangalore rates ($20–$60/hr USD) make it among the most cost-effective development markets globally, but quality variance is massive.',
                        'The top Bangalore firms — Infosys, Wipro, Thoughtworks, Mphasis — are world-class but primarily serve enterprise clients with large contracts.',
                        'Boutique product studios in Koramangala and Indiranagar offer startup-friendly terms and strong mobile-first capabilities.',
                        'Timezone gap (10.5–13.5 hrs from North America) is the most common friction point in Bangalore offshore engagements.',
                        'Codazz\'s Chandigarh engineering center offers comparable Indian engineering talent quality with a Canadian management layer, IP protection, and a client-first accountability model.',
                      ].map((item, i) => (
                        <li key={i} style={{
                          fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: i < 4 ? 12 : 0,
                        }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Rates Table */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Bangalore App Development Rates (2026)</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Company Type', 'Rate (USD/hr)', 'Min Project', 'Team Size', 'Best For'].map(h => (
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
                          { type: 'IT Services Giants (Infosys, Wipro)', rate: '$45–$60/hr', min: '$500K+', team: '50–500+', bestFor: 'Enterprise transformation' },
                          { type: 'Mid-Tier Consulting (Mphasis, Mindtree)', rate: '$35–$55/hr', min: '$100K+', team: '20–100', bestFor: 'Digital & cloud projects' },
                          { type: 'Boutique Product Studios', rate: '$25–$45/hr', min: '$30K+', team: '5–30', bestFor: 'Startups, MVPs, product builds' },
                          { type: 'Freelance Aggregators (Toptal, Upwork)', rate: '$20–$40/hr', min: '$5K+', team: '1–10', bestFor: 'Specific features, augmentation' },
                          { type: 'Codazz (Chandigarh + Canadian HQ)', rate: '$35–$65/hr', min: '$25K+', team: '3–50', bestFor: 'Full-lifecycle product development' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i === 4 ? 'rgba(34,197,94,0.03)' : 'transparent' }}>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: i === 4 ? '#22c55e' : 'rgba(255,255,255,0.7)', fontWeight: i === 4 ? 600 : 400 }}>{row.type}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: i === 4 ? '#22c55e' : 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{row.rate}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.min}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.team}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.bestFor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Company 1–10 */}
                {[
                  {
                    num: '01', id: 'infosys', name: 'Infosys', category: 'Enterprise IT',
                    emoji: '🏢', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    hq: 'Electronic City, Bangalore',
                    metric: '300,000+ engineers | Bangalore HQ | NYSE-listed',
                    paragraphs: [
                      'Infosys is the crown jewel of Bangalore\'s tech sector and one of the world\'s largest IT services companies, with over $18 billion in annual revenue and engineering teams spread across Electronic City\'s iconic glass campus and 200+ global locations. Their mobile and digital engineering divisions build large-scale enterprise apps, digital transformation programs, and AI-powered mobile platforms for Fortune 500 clients across banking, insurance, manufacturing, and retail.',
                      'Key Services: Enterprise mobile app development, digital transformation, cloud migration, AI and ML integration, ERP implementation, managed application services, DevOps at scale. Best For: Large enterprises requiring a highly accountable, globally scalable partner for complex multi-year engagements. Minimum contracts typically $500K+ and scope is enterprise-grade.',
                      'Strengths: Unmatched engineering scale, SOC 2 and ISO-certified processes, Bangalore proximity to IISc and IIT talent pipelines. Limitations: Bureaucratic at smaller scales, not suitable for startup MVPs or fast-cycle product builds.',
                    ],
                  },
                  {
                    num: '02', id: 'wipro-digital', name: 'Wipro Digital', category: 'Digital Services',
                    emoji: '🌐', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    hq: 'Sarjapur Road, Bangalore',
                    metric: 'Bangalore-born global IT giant | $11B+ revenue',
                    paragraphs: [
                      'Wipro was founded in Bangalore and remains one of the city\'s most iconic technology companies. Their digital engineering arm — Wipro Digital — specializes in mobile application development, cloud-native platforms, UX transformation, and AI-powered digital experiences for global enterprises. With over 250,000 employees and operations in 50+ countries, Wipro handles projects at a scale few firms can match.',
                      'Key Services: Mobile app development (iOS, Android, cross-platform), cloud-native engineering, digital experience platforms, AI/ML integration, enterprise agile transformation, product engineering. Best For: Mid-to-large enterprise clients in financial services, healthcare, energy, and retail needing a proven global delivery partner.',
                      'Strengths: Deep Bangalore engineering talent pool, strong vertical expertise in banking and financial services, robust compliance and security posture. Limitations: Large firm overhead means slower time-to-market than boutique studios; smaller projects may not receive senior attention.',
                    ],
                  },
                  {
                    num: '03', id: 'mphasis', name: 'Mphasis', category: 'Cloud & Cognitive AI',
                    emoji: '☁️', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    hq: 'Bagmane Tech Park, Bangalore',
                    metric: 'Blackstone-backed | AI-first mobile development',
                    paragraphs: [
                      'Mphasis is a Bangalore-based digital services firm backed by Blackstone that has carved a distinct niche in cloud and cognitive AI-powered application development. Unlike the broader IT services giants, Mphasis focuses specifically on hyper-personalization and next-generation digital experiences — building apps that learn, adapt, and predict user behavior using machine learning models trained on real production data.',
                      'Key Services: AI-powered mobile app development, cloud-native platforms, cognitive automation, digital banking solutions, insurance tech, mortgage technology. Best For: Financial services companies — particularly banking, insurance, and mortgage — seeking AI-enhanced digital products and cognitive automation at scale.',
                      'Strengths: AI-first engineering philosophy, strong financial services domain expertise, proven Blackstone-backed scale. Limitations: Highly specialized in financial services — not a generalist mobile development partner for other industries.',
                    ],
                  },
                  {
                    num: '04', id: 'thoughtworks', name: 'Thoughtworks', category: 'Agile Consulting',
                    emoji: '🔄', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    hq: 'Domlur, Bangalore',
                    metric: 'Global tech consultancy | NASDAQ-listed | Agile pioneers',
                    paragraphs: [
                      'Thoughtworks is arguably the most intellectually rigorous software development consultancy operating from Bangalore. Famous for originating many of the agile and XP practices that modern software engineering is built on, Thoughtworks combines deep technical thinking with a genuine product mindset. Their Bangalore office is among their largest globally and attracts elite engineering talent who want to work on hard, meaningful problems.',
                      'Key Services: Mobile app strategy and development, software architecture consulting, agile transformation, data engineering, platform modernization, digital product innovation, tech strategy advisory. Best For: Companies that need both strategic thinking and high-quality engineering execution — particularly for complex digital transformation or greenfield product development.',
                      'Strengths: Elite engineering culture, rigorous technical practices, genuine product thinking beyond just delivery. Limitations: Premium pricing (higher than many Bangalore alternatives), better suited for sophisticated clients with clear product vision than early-stage startups.',
                    ],
                  },
                  {
                    num: '05', id: 'freshworks', name: 'Freshworks', category: 'SaaS Products',
                    emoji: '💼', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    hq: 'Koramangala, Bangalore',
                    metric: 'NASDAQ-listed | $500M+ ARR | CRM & helpdesk SaaS',
                    paragraphs: [
                      'Freshworks is one of the most remarkable Bangalore software product success stories of the last decade. Founded in Chennai but headquartered in Bangalore and listed on NASDAQ, Freshworks has built a portfolio of enterprise SaaS products including Freshdesk (customer support), Freshsales (CRM), and Freshservice (IT service management) that compete directly with Salesforce, Zendesk, and ServiceNow at a fraction of the price. Their engineering team is among the best product builders in India.',
                      'Key Services: CRM, customer support software, IT service management, marketing automation, HR software. Best For: Companies evaluating best-in-class affordable SaaS alternatives for support, sales, and IT operations. Not a custom development partner — a product company.',
                      'Strengths: Exceptional product quality at competitive pricing, strong enterprise feature set, continuous innovation pace. Limitations: A product company, not available for custom development engagements.',
                    ],
                  },
                  {
                    num: '06', id: 'flipkart-tech', name: 'Flipkart Tech', category: 'Product Engineering',
                    emoji: '🛒', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    hq: 'Koramangala, Bangalore',
                    metric: 'India\'s largest e-commerce | Walmart-backed | 400M+ users',
                    paragraphs: [
                      'Flipkart, headquartered in Koramangala, Bangalore, is India\'s largest e-commerce company and one of the most technically sophisticated product engineering organizations in Asia. Acquired by Walmart for $16 billion, Flipkart\'s engineering team has solved some of the hardest infrastructure challenges in the world — handling billions in GMV, peak traffic during Big Billion Days surges that make Black Friday look modest, and building supply chain and logistics systems that cover every pin code in India.',
                      'Key Services (Internal Only): Mobile e-commerce platform engineering, supply chain technology, payment systems, recommendation engines, real-time bidding for advertising. Not a development partner — Flipkart\'s engineering exists for their own platform.',
                      'Why We Include Them: Flipkart is proof of what Bangalore engineering talent can build at the highest possible bar. Their open-source contributions (Fk-DB, Iris, etc.) and engineering blog are invaluable references for anyone evaluating the market.',
                    ],
                  },
                  {
                    num: '07', id: 'razorpay', name: 'Razorpay', category: 'Fintech Engineering',
                    emoji: '💳', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    hq: 'Domlur, Bangalore',
                    metric: '$7.5B valuation | India\'s leading payment gateway',
                    paragraphs: [
                      'Razorpay is Bangalore\'s fintech crown jewel — a $7.5 billion payment infrastructure company that processes payments for over eight million businesses across India. Founded by two IIT Roorkee graduates, Razorpay has built the most developer-friendly payment gateway in India and expanded into payroll (Opfin), banking (RazorpayX), and capital products. Their engineering team is among the most technically sophisticated fintech builders in Asia.',
                      'Key Services (Platform/Product): Payment gateway, payment links, recurring billing, payroll management, corporate banking, working capital loans. Not available as a development partner.',
                      'Why We Include Them: Razorpay demonstrates the depth of fintech engineering capability that exists in Bangalore. Their developer documentation and API design are referenced globally as best-in-class examples of fintech product engineering from India.',
                    ],
                  },
                  {
                    num: '08', id: 'epam-systems', name: 'EPAM Systems', category: 'Custom Development',
                    emoji: '⚙️', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    hq: 'Multiple Bangalore Offices',
                    metric: 'Top global engineering services | NYSE-listed | 60,000+ engineers',
                    paragraphs: [
                      'EPAM Systems is one of the world\'s top engineering services companies, with a significant presence in Bangalore that serves Asia-Pacific clients. Unlike traditional IT services firms, EPAM is engineering-led — their delivery model focuses on software craftsmanship, clean architecture, and long-term code quality rather than body-shop volume metrics. They serve major technology companies, financial institutions, and media businesses globally.',
                      'Key Services: Mobile app development, cloud-native platform engineering, data engineering and analytics, AI/ML integration, digital experience platforms, software testing and QA. Best For: Technology companies and enterprises needing high-quality engineering delivery for complex digital products, particularly in media, financial services, and healthcare.',
                      'Strengths: Engineering-first culture uncommon among IT services firms, strong quality standards, good communication practices. Limitations: Premium pricing relative to the Bangalore market; minimum project sizes favor mid-to-large enterprise clients.',
                    ],
                  },
                  {
                    num: '09', id: 'swiggy-tech', name: 'Swiggy Tech', category: 'On-Demand Platform',
                    emoji: '🍕', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    hq: 'Koramangala, Bangalore',
                    metric: '10M+ daily orders | Real-time logistics engineering at scale',
                    paragraphs: [
                      'Swiggy is the most technically impressive on-demand platform built in Bangalore. Delivering over 10 million food orders daily across 500+ Indian cities, Swiggy\'s engineering team has solved some of the hardest real-time logistics optimization problems in the world — matching delivery partners to orders within seconds, rerouting in real time based on traffic conditions, and running a hyperlocal supply chain across thousands of restaurant partners simultaneously.',
                      'Key Services (Internal Only): Mobile app engineering, real-time logistics platform, hyperlocal supply chain systems, recommendation engines, payment infrastructure. Not available as a development partner.',
                      'Why We Include Them: Swiggy\'s engineering blog and technical architecture decisions are among the most referenced in the Indian startup ecosystem. They are evidence of the mobile and backend engineering capabilities that Bangalore can produce at the highest scale.',
                    ],
                  },
                  {
                    num: '10', id: 'codazz-chandigarh', name: 'Codazz (Chandigarh Centre)', category: 'Full-Stack / Global',
                    emoji: '🍁', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,',
                    hq: 'HQ: Edmonton, Canada | Dev Centre: Chandigarh, India',
                    metric: '500+ Launches | Canadian Management | Indian Engineering Talent',
                    paragraphs: [
                      'Codazz is not a Bangalore company — but it belongs on this list because it offers North American businesses the best of both worlds: the engineering talent depth and cost advantages of Indian development, wrapped in a Canadian management structure with strong IP protections, North American timezone overlap for key meetings, and a client-first accountability model that is rare in pure offshore engagements.',
                      'Codazz\'s Chandigarh engineering center draws from the same North Indian tech talent pool that powers many of India\'s elite firms. Chandigarh graduates from Panjab University, Chandigarh University, and NITTTR consistently rank among India\'s best engineering talent outside the IIT system — and they command lower salaries than Bangalore-equivalent developers, meaning Codazz can pass meaningful cost advantages to clients without sacrificing quality.',
                      'Key Services: Mobile App Development (iOS, Android, Flutter, React Native), Custom Software, SaaS Platforms, AI/ML Engineering, Web Applications (Next.js/React), UI/UX Design, Cloud Infrastructure. Why Choose Codazz Over a Pure Bangalore Firm: IP stays protected under Canadian law and CUSMA, timezone gap is managed by the Canadian HQ layer, project management is North American-style, and accountability standards match Western client expectations without requiring you to navigate offshore management yourself.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: app.id === 'codazz-chandigarh'
                        ? 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(255,255,255,0.015) 100%)'
                        : 'rgba(255,255,255,0.015)',
                      border: app.id === 'codazz-chandigarh'
                        ? '1px solid rgba(34,197,94,0.25)'
                        : '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 28, padding: 36, position: 'relative', overflow: 'hidden',
                    }}>
                      {app.id === 'codazz-chandigarh' && (
                        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                      )}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
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
                          position: 'relative', zIndex: 1,
                        }}>{para}</p>
                      ))}
                      <div style={{
                        padding: '14px 20px', borderRadius: 12,
                        background: `${app.bgColor}0.06)`, border: `1px solid ${app.bgColor}0.12)`,
                        display: 'flex', alignItems: 'center', gap: 10,
                        position: 'relative', zIndex: 1,
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

                {/* How to Hire a Bangalore Dev Team */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>How to Hire a Bangalore Development Team Remotely (Without Getting Burned)</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {[
                      { step: '01', title: 'Define Scope Before You Contact Anyone', desc: 'The single biggest mistake in offshore hiring is starting conversations before you have a Product Requirements Document (PRD) or even a clear scope of work. Without this, every vendor will overpromise and underscope. Define your core user stories, technology preferences, and success metrics before your first call.' },
                      { step: '02', title: 'Ask for Architecture, Not Just Portfolios', desc: 'Any vendor can show you a polished app screenshot. What you want to see is the system design behind the project — the database schema, the API architecture, the CI/CD setup. This immediately separates engineering-serious firms from reskin factories.' },
                      { step: '03', title: 'Test Communication on Day Zero', desc: 'The timezone gap between North America and Bangalore is 10.5–13.5 hours. During the evaluation phase, send an email at 8am your time. If you don\'t get a response within 2 hours (during their working day), that\'s a preview of your entire engagement. Communication responsiveness is non-negotiable.' },
                      { step: '04', title: 'Insist on Weekly Code Demos, Not Status Reports', desc: 'Status reports are theatre. Running software is evidence. Structure contracts to require weekly demo sessions where you see working functionality in a staging environment. This forces accountability and surfaces problems early, before they compound.' },
                      { step: '05', title: 'Nail Down IP Ownership in Writing Before Day One', desc: 'India\'s IP law is robust but enforcement of contract terms on foreign clients can be complex. Ensure your development agreement explicitly assigns all IP, source code, and work product to you — and consider a Canadian or US governing law clause to ensure enforceability.' },
                      { step: '06', title: 'Consider a Managed India Dev Centre as an Alternative', desc: 'If the management overhead of a direct Bangalore engagement feels risky, Codazz\'s model — where you get Indian engineering talent managed by a Canadian team under Canadian law — eliminates most offshore risks while preserving the cost advantage.' },
                    ].map((s, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: 24, padding: 28, borderRadius: 20,
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

                {/* Quality vs Cost */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>The Quality vs. Cost Reality of Bangalore Development</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 580 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Factor', 'Top Bangalore Firms', 'Avg Bangalore Firms', 'Codazz (Canada+India)'].map(h => (
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
                          { factor: 'Rate (USD/hr)', top: '$45–$60', avg: '$20–$35', codazz: '$35–$65' },
                          { factor: 'Engineering Quality', top: 'World-class', avg: 'Variable', codazz: 'World-class' },
                          { factor: 'Communication', top: 'Strong', avg: 'Moderate', codazz: 'Excellent' },
                          { factor: 'Timezone Overlap (NA)', top: 'Limited', avg: 'Limited', codazz: 'Managed' },
                          { factor: 'IP Protection', top: 'Strong', avg: 'Risky', codazz: 'Canadian Law' },
                          { factor: 'Min Engagement', top: '$500K+', avg: '$10K+', codazz: '$25K+' },
                          { factor: 'Startup-Friendly', top: 'Rarely', avg: 'Sometimes', codazz: 'Yes' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{row.factor}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.top}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.avg}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: '#22c55e', fontWeight: 600 }}>{row.codazz}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>
                  {[
                    { q: 'How much does app development cost in Bangalore?', a: 'App development in Bangalore ranges from $20,000–$150,000 USD for a standard mobile app depending on complexity, features, and the development partner you choose. Simple apps with 5–10 screens cost $20,000–$40,000. Feature-rich platforms with backend APIs, payment integration, and admin dashboards typically cost $60,000–$150,000. Enterprise-grade apps with real-time features, AI integration, and complex infrastructure run $150,000+.' },
                    { q: 'Is Bangalore app development good quality?', a: 'At the top tier — Infosys, Wipro, Thoughtworks, Mphasis, EPAM — the quality is genuinely world-class. At the middle and lower tiers, quality variance is enormous. The key differentiators to look for are: system architecture documentation, test coverage standards, code review processes, and whether the team has shipped to production at scale. Insist on technical interviews with the actual team who will build your product, not the sales team.' },
                    { q: 'What are the biggest risks of hiring a Bangalore dev firm?', a: 'The four main risks are: (1) timezone friction — a 10.5–13.5 hour gap means real-time collaboration is difficult; (2) IP protection — ensuring your code and data are protected requires careful contract drafting; (3) team continuity — high developer churn in Bangalore\'s competitive market means the team that starts your project may not finish it; and (4) quality at the lower end — many firms overpromise and underdeliver. Thorough vetting and structured contracts mitigate most of these risks.' },
                    { q: 'What is the best alternative to hiring directly in Bangalore?', a: 'For North American companies, a managed India development centre model — like what Codazz offers with their Chandigarh engineering centre under Canadian management — eliminates the timezone management burden, IP risk, and quality uncertainty of direct offshore hiring. You get comparable engineering talent at similar rates, with a Canadian management layer that aligns with Western client expectations and operating under Canadian IP and contract law.' },
                    { q: 'How long does it take to build an app with a Bangalore company?', a: 'A simple MVP (3–5 features, mobile app with API backend) typically takes 3–4 months with a dedicated Bangalore team. A standard app (10–15 features, admin dashboard, integrations) takes 4–7 months. Complex platforms with real-time features, AI components, or multi-platform delivery take 7–12 months. These timelines assume a well-scoped project from day one — poorly scoped projects routinely run 50–100% over initial estimates.' },
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
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>

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
                      {companies.map(c => (
                        <a key={c.name} href={`#${c.name.toLowerCase().replace(/[\s\(\)\/]+/g, '-').replace(/-$/, '')}`} style={{
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
                          <span style={{ fontSize: 14 }}>{c.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
                          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto', flexShrink: 0 }}>#{c.num}</span>
                        </a>
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
                    }}>Bangalore Rate Reference</p>
                    {[
                      { label: 'IT Giants (Infosys/Wipro)', rate: '$45–$60/hr' },
                      { label: 'Mid-Tier Consulting', rate: '$35–$55/hr' },
                      { label: 'Boutique Studios', rate: '$25–$45/hr' },
                      { label: 'Freelancers', rate: '$20–$35/hr' },
                      { label: 'Codazz (Managed India)', rate: '$35–$65/hr' },
                    ].map((r, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        paddingBottom: i < 4 ? 10 : 0, marginBottom: i < 4 ? 10 : 0,
                        borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}>
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{r.label}</span>
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
                      Runs Codazz from Edmonton with an engineering centre in Chandigarh, India. Has guided 500+ global product launches across mobile, web, SaaS, and AI.
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
                  color: '#22c55e', marginBottom: 12,
                }}>The Smarter India Option</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Indian Engineering Quality. Canadian Accountability.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 500, lineHeight: 1.7 }}>
                  Codazz gives you the cost advantage of India with the management structure, IP protections, and communication standards of a Canadian firm. 500+ launches. Zero offshore horror stories.
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
