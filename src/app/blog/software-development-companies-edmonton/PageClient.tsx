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

const tocSections = [
  { id: 'edmonton-tech-scene', label: "Edmonton's Tech Scene", emoji: '🏙️' },
  { id: 'top-companies', label: 'Top 10 Companies', emoji: '🏆' },
  { id: 'why-edmonton', label: 'Why Build in Edmonton', emoji: '🍁' },
  { id: 'cost-guide', label: 'Cost Guide (CAD Rates)', emoji: '💰' },
  { id: 'how-to-choose', label: 'How to Choose a Partner', emoji: '🔍' },
  { id: 'tech-stack', label: 'Popular Tech Stacks', emoji: '⚙️' },
  { id: 'talent-pool', label: 'Edmonton Talent Pool', emoji: '🎓' },
  { id: 'industries', label: 'Key Industry Verticals', emoji: '🏗️' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const companies = [
  {
    num: 1,
    name: 'Codazz',
    category: 'Mobile / AI / SaaS / Web',
    emoji: '🍁',
    accentColor: '#22c55e',
    bgColor: 'rgba(34,197,94,',
    hq: 'Edmonton, AB (HQ) + Chandigarh, India',
    founded: '2018',
    team: '45+ engineers',
    rates: '$85–$145 CAD/hr',
    highlight: 'Codazz is Edmonton\'s leading product-focused software studio, founded by Raman Makkar. Specialists in mobile apps (iOS/Android/React Native/Flutter), AI/ML-powered SaaS platforms, web applications, and full-stack custom software. 500+ apps shipped for clients across Canada, the US, UAE, and Australia. The go-to partner for startups and scale-ups that need a senior engineering team without the overhead of building in-house.',
    badges: ['React Native', 'Flutter', 'Node.js', 'Next.js', 'AI/ML', 'AWS', 'SaaS'],
  },
  {
    num: 2,
    name: 'Jobber',
    category: 'Field Service SaaS Platform',
    emoji: '🔧',
    accentColor: '#60a5fa',
    bgColor: 'rgba(96,165,250,',
    hq: 'Edmonton, AB',
    founded: '2011',
    team: '900+ employees',
    rates: 'Product company (not for hire)',
    highlight: "Edmonton's greatest tech success story. Jobber's field service management platform is used by 250,000+ service businesses globally (landscapers, plumbers, HVAC, cleaning). Raised $370M CAD total, including a $100M USD Series C led by Summit Partners. Consistently rated #1 field service software on G2. Headquarters on Jasper Avenue employs 700+ Edmontonians.",
    badges: ['SaaS', 'Field Service', 'B2B', 'Edmonton-Born'],
  },
  {
    num: 3,
    name: 'Benevity',
    category: 'Corporate Social Responsibility Tech',
    emoji: '❤️',
    accentColor: '#f472b6',
    bgColor: 'rgba(244,114,182,',
    hq: 'Calgary HQ, Edmonton engineering presence',
    founded: '2008',
    team: '850+ employees',
    rates: 'Product company (not for hire)',
    highlight: 'The global leader in corporate giving and employee volunteering software. $10B+ in charitable donations processed through the platform. Clients include Apple, Google, Microsoft, Coca-Cola, and 1,000+ Fortune 500 companies. Acquired by Vista Equity Partners in 2021 at a reported $1.1B+ valuation. Significant engineering presence in Edmonton.',
    badges: ['CSR Tech', 'Enterprise SaaS', 'Non-Profit', 'B Corp'],
  },
  {
    num: 4,
    name: 'Arcurve',
    category: 'Custom Software & Consulting',
    emoji: '⚙️',
    accentColor: '#fbbf24',
    bgColor: 'rgba(251,191,36,',
    hq: 'Edmonton, AB',
    founded: '2010',
    team: '200+ consultants',
    rates: '$120–$200 CAD/hr',
    highlight: 'Arcurve is one of Edmonton\'s largest independently owned software consulting firms. Specializes in enterprise application modernization, cloud migrations, and custom software for energy, government, and financial services clients. Strong Microsoft Azure and .NET expertise. Notable projects include digital transformation work for Alberta government ministries and major energy sector companies.',
    badges: ['Enterprise', 'Azure', '.NET', 'Energy Sector', 'Gov Tech'],
  },
  {
    num: 5,
    name: 'ATB Financial Digital',
    category: 'Banking Technology',
    emoji: '🏦',
    accentColor: '#34d399',
    bgColor: 'rgba(52,211,153,',
    hq: 'Edmonton, AB',
    founded: '1938 (Digital division: 2015)',
    team: '400+ in digital/tech roles',
    rates: 'Internal team (not for hire)',
    highlight: "Alberta's largest financial institution with $60B+ in assets and 800,000+ Albertan customers. ATB Financial's digital team has been recognized as one of Canada's most innovative banking technology groups, winning multiple FinTech innovation awards. Built a proprietary digital banking platform and launched ATB Ventures, which invests in Canadian FinTech startups. A major employer of Edmonton software engineers.",
    badges: ['FinTech', 'Banking', 'Mobile Banking', 'AI', 'Alberta-Owned'],
  },
  {
    num: 6,
    name: 'Trimble',
    category: 'AgriTech / Construction Tech',
    emoji: '🌾',
    accentColor: '#fb923c',
    bgColor: 'rgba(251,146,60,',
    hq: 'Sunnyvale CA (Edmonton office)',
    founded: '1978',
    team: '50+ in Edmonton',
    rates: 'Product company (not for hire)',
    highlight: "Trimble's Edmonton engineering team works on precision agriculture technology, GPS-guided construction equipment software, and fleet telematics. The Edmonton office focuses on agricultural mapping, variable rate application software, and autonomous machinery guidance systems serving Western Canada's $50B+ agriculture sector. Key employer for embedded systems and GIS engineers.",
    badges: ['AgriTech', 'GPS/GIS', 'Construction Tech', 'IoT', 'Precision Ag'],
  },
  {
    num: 7,
    name: 'Infosys Edmonton',
    category: 'IT Consulting & Outsourcing',
    emoji: '🌐',
    accentColor: '#a78bfa',
    bgColor: 'rgba(167,139,250,',
    hq: 'Bangalore (Edmonton delivery centre)',
    founded: '1981 (Edmonton: 2017)',
    team: '300+ in Edmonton',
    rates: '$95–$160 CAD/hr',
    highlight: "Infosys opened an Edmonton Technology Hub in 2017 as part of its US/Canada hiring commitment. The centre delivers enterprise digital transformation, SAP implementations, cloud migrations, and AI/analytics projects for Canadian government and energy clients. Part of Infosys's global delivery model — Canadian team leads, global execution. Notable client: Alberta government IT modernization contracts.",
    badges: ['Enterprise IT', 'SAP', 'Cloud', 'Government', 'Global Delivery'],
  },
  {
    num: 8,
    name: 'Granify',
    category: 'AI / E-Commerce Optimization',
    emoji: '📊',
    accentColor: '#22d3ee',
    bgColor: 'rgba(34,211,238,',
    hq: 'Edmonton, AB',
    founded: '2012',
    team: '80+ employees',
    rates: 'Product company (not for hire)',
    highlight: "An Edmonton-born AI company that uses machine learning to optimize e-commerce conversion rates in real time. Granify's platform analyzes millions of behavioral signals per second to serve the right message at the right moment, increasing revenue for large online retailers. Clients include Best Buy Canada, Mark's, and Sport Chek. Raised $10M+ and remains independent and profitable.",
    badges: ['AI/ML', 'E-Commerce', 'Behavioral Analytics', 'SaaS', 'Edmonton-Founded'],
  },
  {
    num: 9,
    name: 'Nexen / CNOOC Digital',
    category: 'Energy Tech / Digital Oilfield',
    emoji: '⚡',
    accentColor: '#f87171',
    bgColor: 'rgba(248,113,113,',
    hq: 'Calgary HQ, Edmonton operations',
    founded: 'Nexen 1971, CNOOC acquisition 2013',
    team: '150+ in digital roles',
    rates: 'Internal team (not for hire)',
    highlight: "The digital oilfield technology division of CNOOC-owned Nexen operates significant software development out of Edmonton, focused on upstream production optimization, SCADA/OT system modernization, and AI-driven predictive maintenance for oil sands operations. A major source of specialized industrial software engineering experience unique to the Edmonton market.",
    badges: ['Energy Tech', 'SCADA', 'IoT', 'AI/ML', 'Digital Oilfield'],
  },
  {
    num: 10,
    name: 'Booster Media / Symend',
    category: 'AI-Driven Collections SaaS',
    emoji: '🤖',
    accentColor: '#4ade80',
    bgColor: 'rgba(74,222,128,',
    hq: 'Calgary HQ, Edmonton engineering',
    founded: '2016',
    team: '200+ employees',
    rates: 'Product company (not for hire)',
    highlight: "Symend is an AI-powered customer engagement platform for collections — helping telcos, utilities, and financial services companies resolve past-due accounts through personalized, empathetic digital outreach rather than aggressive collections calls. Clients include Telus, Rogers, and major US carriers. Raised $160M+ CAD. Significant engineering presence in Edmonton focused on NLP/ML and real-time personalization.",
    badges: ['AI/ML', 'NLP', 'FinTech', 'Telco', 'Collections Tech'],
  },
];

const G = '#22c55e';

const relatedPosts = [
  { slug: 'app-development-companies-toronto', title: 'Top App Development Companies in Toronto 2026', category: 'Canada', readTime: '14 min' },
  { slug: 'app-development-cost-canada', title: 'App Development Cost in Canada 2026', category: 'Cost Guide', readTime: '14 min' },
  { slug: 'how-to-hire-remote-developers', title: 'How to Hire Remote Developers: Complete Guide', category: 'Hiring', readTime: '12 min' },
];

export default function PageClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('edmonton-tech-scene');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handler = () => {
      const sections = tocSections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY >= sections[i].offsetTop - 120) { setActiveSection(sections[i].id); break; }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(34,197,94,0.12); }
        @media (max-width: 900px) { .blog-layout { flex-direction: column !important; } .toc-sidebar { display: none !important; } }
        .cb-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
      `}</style>
      <div style={{ background: '#000', minHeight: '100vh' }}>
        <HeroBackground />
        <Navbar />
        <main ref={pageRef} style={{ paddingTop: 100 }}>

          {/* ── HERO ── */}
          <section style={{ paddingTop: 40, paddingBottom: 64 }}>
            <div className="cb-container">
              <div className="reveal" style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 20 }}>
                <Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 14 }}>Blog</Link>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
                <span style={{ color: G, fontSize: 14, fontWeight: 600 }}>Canada Tech</span>
              </div>
              <div className="reveal" style={{ display: 'inline-flex', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 20, padding: '6px 16px', marginBottom: 24 }}>
                <span style={{ fontSize: 14, color: G, fontWeight: 600 }}>Edmonton Software Companies 2026</span>
              </div>
              <h1 className="reveal" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24, maxWidth: 900 }}>
                Top Software Development Companies<br /><span style={{ color: G }}>in Edmonton 2026</span>
              </h1>
              <p className="reveal" style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 700, marginBottom: 32 }}>
                Edmonton has quietly become one of Canada's most competitive tech markets — home to Jobber (250K+ global clients), Benevity ($1B+ valuation), Granify, and a growing cluster of AI startups fueled by University of Alberta's world-class machine learning research. Here are the top 10 software development companies in Edmonton for 2026, with real rates, team sizes, and specializations.
              </p>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 48 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#22c55e,#16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: 14 }}>C</div>
                  <div>
                    <div style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Codazz Engineering — Edmonton, AB</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>March 21, 2026</div>
                  </div>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>16 min read</span>
                <button onClick={handleCopy} style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 16px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 13 }}>{copied ? '✓ Copied' : '🔗 Share'}</button>
              </div>
              <div className="reveal" style={{ width: '100%', aspectRatio: '16/7', background: 'linear-gradient(135deg,rgba(34,197,94,0.08),rgba(0,0,0,0.5))', borderRadius: 24, marginBottom: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(34,197,94,0.1)' }}>
                <span style={{ fontSize: 72 }}>🏙️</span>
              </div>

              {/* Stats */}
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 16, marginBottom: 64 }}>
                {[
                  ['$8.4B+', 'Alberta tech sector GDP'],
                  ['28,000+', 'Tech workers in Edmonton'],
                  ['#4', 'Canadian city for tech talent growth'],
                  ['30–40%', 'Lower dev costs vs Toronto/Vancouver'],
                  ['$85–$200', 'CAD/hr developer rate range'],
                  ['U of A', 'Top-5 CS program in Canada'],
                  ['7,500+', 'CS graduates per year (AB)'],
                  ['Jobber', '$370M CAD raised — Edmonton-born'],
                ].map(([v, l], i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '20px 16px', textAlign: 'center' }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: G, marginBottom: 6 }}>{v}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── BODY ── */}
          <section>
            <div className="cb-container">
              <div className="blog-layout" style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
                <article style={{ flex: 1, minWidth: 0 }}>

                  {/* 1. Tech Scene */}
                  <section id="edmonton-tech-scene" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Edmonton's Tech Scene in 2026</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 20, fontSize: 16, lineHeight: 1.8 }}>
                      Edmonton is no longer a quiet energy-sector city with a small tech scene. It is a legitimate Canadian technology hub experiencing the fastest tech employment growth of any major Canadian city for three consecutive years. The combination of University of Alberta's globally recognized AI research program, competitive labour costs relative to Toronto and Vancouver, and a growing ecosystem of success stories (Jobber, Benevity, Granify) is attracting both venture capital and enterprise development mandates.
                    </p>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, fontSize: 16, lineHeight: 1.8 }}>
                      The Alberta Advantage in 2026 is primarily economic: no provincial income tax on personal income below $148,269, the lowest corporate tax rate among Canadian provinces (8%), and developer salaries that run 30–40% below Toronto and Vancouver market rates for equivalent skill levels. For startups and scale-ups building software products, Edmonton offers a compelling combination of top-tier engineering talent at a significant cost advantage.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { icon: '🎓', title: 'University of Alberta', desc: "UofA's CS department is consistently ranked top-5 in Canada and top-50 globally. The Amii (Alberta Machine Intelligence Institute) has produced research cited by Google, Meta, and OpenAI. 3,500+ CS students graduate annually from UofA alone." },
                        { icon: '💼', title: 'Talent Pipeline', desc: "NAIT and MacEwan produce 2,000+ tech graduates annually. NORCAT (Northern Alberta Institute of Technology) launched a Digital Technology program in 2023. Combined with UofA, Edmonton produces more engineering graduates per capita than any Canadian city except Waterloo." },
                        { icon: '🏗️', title: 'Tech Ecosystem', desc: "Startup Edmonton (pre-seed accelerator), TEC Edmonton (university commercialization), and Startup TNT (angel investment network) provide the full stack of startup support infrastructure. The Ice District's WeWork hosts 40+ Edmonton tech startups." },
                        { icon: '🌐', title: 'Remote-First Adoption', desc: "Edmonton companies were early adopters of remote-first culture, giving them access to global talent while retaining local team culture. Codazz, Jobber, and Granify all operate hybrid/remote models, attracting senior engineers from across Canada and internationally." },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: 22 }}>
                          <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 2. Top Companies */}
                  <section id="top-companies" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 8 }}>Top 10 Software Development Companies in Edmonton (2026)</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 40, fontSize: 16, lineHeight: 1.8 }}>
                      This list covers both software development firms available for hire and notable product companies headquartered in Edmonton that define the city's tech reputation. Rankings for development firms prioritize portfolio quality, client retention, and domain expertise over raw size.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      {companies.map((co, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${co.accentColor}22`, borderRadius: 24, padding: 28, position: 'relative', overflow: 'hidden' }}>
                          {/* Number badge */}
                          <div style={{ position: 'absolute', top: 24, right: 24, width: 40, height: 40, borderRadius: '50%', background: `${co.bgColor}0.12)`, border: `1px solid ${co.accentColor}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: co.accentColor }}>
                            {co.num}
                          </div>

                          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 16 }}>
                            <div style={{ fontSize: 36 }}>{co.emoji}</div>
                            <div style={{ flex: 1, minWidth: 0, paddingRight: 56 }}>
                              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '0 0 4px' }}>{co.name}</h3>
                              <div style={{ fontSize: 13, color: co.accentColor, fontWeight: 600 }}>{co.category}</div>
                            </div>
                          </div>

                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 20 }}>{co.highlight}</p>

                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12, marginBottom: 20 }}>
                            {[
                              { label: 'Headquarters', value: co.hq },
                              { label: 'Founded', value: co.founded },
                              { label: 'Team Size', value: co.team },
                              { label: 'Rate Range', value: co.rates },
                            ].map((stat, j) => (
                              <div key={j} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: '10px 14px' }}>
                                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{stat.label}</div>
                                <div style={{ fontSize: 13, color: '#fff', fontWeight: 600, lineHeight: 1.3 }}>{stat.value}</div>
                              </div>
                            ))}
                          </div>

                          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {co.badges.map((badge, j) => (
                              <span key={j} style={{ fontSize: 11, fontWeight: 600, color: co.accentColor, background: `${co.bgColor}0.1)`, border: `1px solid ${co.accentColor}25`, padding: '4px 12px', borderRadius: 20 }}>{badge}</span>
                            ))}
                          </div>

                          {co.num === 1 && (
                            <div style={{ marginTop: 20, padding: '12px 16px', background: 'rgba(34,197,94,0.08)', borderRadius: 12, border: '1px solid rgba(34,197,94,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Edmonton HQ — available for new projects</span>
                              <Link href="/contact" style={{ fontSize: 13, fontWeight: 700, color: '#000', background: G, padding: '8px 20px', borderRadius: 8, textDecoration: 'none' }}>Get a Quote</Link>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 3. Why Edmonton */}
                  <section id="why-edmonton" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Why Build Software in Edmonton?</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, fontSize: 16, lineHeight: 1.8 }}>
                      When sourcing a software development partner, location matters for timezone alignment, legal jurisdiction, IP ownership, and cultural fit. Edmonton checks every box for North American clients — with the added advantage of Alberta's unique economic structure.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        {
                          icon: '💵',
                          title: 'The Cost Advantage',
                          color: G,
                          points: [
                            'Senior developers: $95–$130K CAD/yr vs $140–$180K in Toronto',
                            'No provincial sales tax (PST) on business services',
                            'Alberta corporate tax: 8% (lowest in Canada)',
                            'Office space 45% cheaper than Toronto/Vancouver',
                            'CAD/USD exchange delivers additional 25–30% cost benefit for US clients',
                          ]
                        },
                        {
                          icon: '⏰',
                          title: 'Timezone & Collaboration',
                          color: '#3b82f6',
                          points: [
                            'Mountain Time (UTC-7) — overlaps US Pacific and Central',
                            'Daily overlap with US East Coast (5–6 hours)',
                            'European clients: 8am Edmonton = 3pm London',
                            'Same legal/regulatory framework as all Canadian provinces',
                            'English-first communication, no translation friction',
                          ]
                        },
                        {
                          icon: '🔒',
                          title: 'IP & Legal Protections',
                          color: '#f59e0b',
                          points: [
                            'Canadian IP law strongly protects client ownership',
                            'PIPEDA/CPPA data privacy compliance built-in',
                            'No GDPR exposure for pure North American data',
                            'Canadian courts enforce IP agreements reliably',
                            'US-Canada USMCA covers software services and IP',
                          ]
                        },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${item.color}22`, borderRadius: 20, padding: 26 }}>
                          <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 16 }}>{item.title}</h3>
                          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
                            {item.points.map((p, j) => (
                              <li key={j} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                                <span style={{ color: item.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.18)', borderRadius: 16, padding: 20 }}>
                      <strong style={{ color: G, display: 'block', marginBottom: 8 }}>Edmonton vs Toronto vs Vancouver</strong>
                      <p style={{ color: 'rgba(255,255,255,0.65)', margin: 0, fontSize: 14, lineHeight: 1.7 }}>
                        Toronto dominates Canadian tech by headcount but not by value per dollar. For equivalent senior engineering quality, Edmonton firms typically charge 30–40% less than Toronto counterparts — primarily because Edmonton engineers earn less (lower cost of living) and Edmonton firms have lower overhead (office, payroll taxes, etc.). Vancouver sits between the two. For US clients comparing nearshore options, Edmonton often outperforms Mexico City or Medellin on IP protection and timezone alignment.
                      </p>
                    </div>
                  </section>

                  {/* 4. Cost Guide */}
                  <section id="cost-guide" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Software Development Cost Guide — Edmonton Market (2026)</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, fontSize: 16, lineHeight: 1.8 }}>
                      Edmonton development rates vary significantly by company type (product studio vs IT consulting firm vs freelancer) and engagement model (fixed-price project vs time-and-materials vs dedicated team). Here is a comprehensive breakdown of what you should expect to pay in 2026.
                    </p>

                    {/* Hourly Rates Table */}
                    <h3 className="reveal" style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Hourly Rates by Role & Experience</h3>
                    <div className="reveal" style={{ overflowX: 'auto', marginBottom: 40 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 560 }}>
                        <thead>
                          <tr style={{ background: 'rgba(34,197,94,0.08)', borderBottom: '1px solid rgba(34,197,94,0.2)' }}>
                            {['Role', 'Junior (0–3 yrs)', 'Mid (3–6 yrs)', 'Senior (6+ yrs)', 'Lead/Architect'].map(h => (
                              <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['Full-Stack Developer', '$65–$85', '$90–$115', '$120–$150', '$145–$185'],
                            ['Mobile (iOS/Android)', '$70–$90', '$95–$125', '$125–$155', '$150–$200'],
                            ['React Native / Flutter', '$65–$85', '$90–$120', '$120–$150', '$145–$185'],
                            ['DevOps / Cloud Architect', '$75–$95', '$100–$130', '$130–$165', '$165–$210'],
                            ['AI/ML Engineer', '$90–$110', '$115–$145', '$145–$185', '$185–$240'],
                            ['UI/UX Designer', '$55–$75', '$80–$105', '$105–$135', '$130–$170'],
                            ['QA / Test Automation', '$55–$70', '$75–$95', '$95–$120', '$115–$145'],
                            ['Product Manager', '$70–$90', '$95–$125', '$125–$160', '$155–$200'],
                          ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                              {row.map((cell, j) => (
                                <td key={j} style={{ padding: '11px 14px', color: j === 0 ? G : 'rgba(255,255,255,0.7)', fontWeight: j === 0 ? 700 : 400 }}>{cell} CAD</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Project Cost Tiers */}
                    <h3 className="reveal" style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Project Cost Tiers</h3>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        {
                          tier: 'MVP / Prototype',
                          range: '$35K – $85K CAD',
                          timeline: '6–14 weeks',
                          color: G,
                          includes: ['Single platform (web or mobile)', '3–5 core features', 'Basic admin dashboard', 'Stripe payment integration', 'User auth + profiles', 'App Store / web deployment']
                        },
                        {
                          tier: 'Full Product Build',
                          range: '$85K – $250K CAD',
                          timeline: '3–8 months',
                          color: '#3b82f6',
                          popular: true,
                          includes: ['iOS + Android + Web', 'Full feature set', 'API integrations (3rd party)', 'Push notifications', 'Analytics dashboard', 'DevOps / CI-CD pipeline', '3 months post-launch support']
                        },
                        {
                          tier: 'Enterprise Platform',
                          range: '$250K – $1M+ CAD',
                          timeline: '8–18 months',
                          color: '#8b5cf6',
                          includes: ['Multi-tenant SaaS architecture', 'Role-based access control', 'Advanced AI/ML features', 'High-availability infrastructure', 'SOC 2 / security review', 'Custom integrations', 'Dedicated team model']
                        },
                      ].map((tier, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${tier.color}33`, borderRadius: 22, padding: 26, position: 'relative' }}>
                          {tier.popular && (
                            <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 20, whiteSpace: 'nowrap' }}>Most Common</div>
                          )}
                          <div style={{ fontSize: 11, fontWeight: 700, color: tier.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{tier.tier}</div>
                          <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', marginBottom: 4 }}>{tier.range}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>{tier.timeline}</div>
                          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
                            {tier.includes.map((f, j) => (
                              <li key={j} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                                <span style={{ color: tier.color, fontWeight: 700 }}>✓</span>
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Engagement Models */}
                    <h3 className="reveal" style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Engagement Models Compared</h3>
                    <div className="reveal" style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 560 }}>
                        <thead>
                          <tr style={{ background: 'rgba(34,197,94,0.08)', borderBottom: '1px solid rgba(34,197,94,0.2)' }}>
                            {['Model', 'Best For', 'Budget Control', 'Flexibility', 'Risk'].map(h => (
                              <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['Fixed Price', 'Well-defined MVP', 'High — capped budget', 'Low — scope locked', 'Scope creep risk'],
                            ['Time & Materials', 'Evolving product roadmap', 'Medium — monthly billing', 'High — pivot freely', 'Budget overrun risk'],
                            ['Dedicated Team', 'Long-term product build', 'Predictable monthly', 'Very high', 'Low if managed well'],
                            ['Staff Augmentation', 'Filling skill gaps', 'Variable', 'High', 'Management overhead'],
                          ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                              {row.map((cell, j) => (
                                <td key={j} style={{ padding: '11px 14px', color: j === 0 ? G : 'rgba(255,255,255,0.7)', fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* 5. How to Choose */}
                  <section id="how-to-choose" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>How to Choose a Software Development Company in Edmonton</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, fontSize: 16, lineHeight: 1.8 }}>
                      Selecting a development partner is one of the highest-leverage decisions a startup or growth company makes. The wrong choice costs 6–18 months and $50K–$500K in rework. The right criteria filter out 90% of unsuitable vendors before a single proposal is written.
                    </p>
                    <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {[
                        {
                          num: '01',
                          title: 'Verify relevant portfolio — not just case studies',
                          desc: "Ask for GitHub repos, live app links, or direct references from 2–3 clients in your industry vertical. Case studies on a website are marketing. Code quality and shipped product is reality. If a firm won't share a live product reference, walk away."
                        },
                        {
                          num: '02',
                          title: 'Meet the actual developers, not just the sales team',
                          desc: "Many Edmonton consulting firms use senior engineers for pitches and junior engineers for delivery. Request a technical discovery call with the specific developers who will work on your project. Assess their English communication, problem-solving approach, and technology opinions."
                        },
                        {
                          num: '03',
                          title: 'Clarify IP ownership in writing before signing',
                          desc: "Every software development contract must explicitly state that all code, designs, and intellectual property transfer to the client upon payment. Without this clause, the development firm may technically retain ownership of your product. Standard in reputable Edmonton firms — a red flag if they resist it."
                        },
                        {
                          num: '04',
                          title: 'Require agile delivery with fortnightly demos',
                          desc: "Avoid firms that propose a 6-month waterfall build with a single delivery at the end. Insist on 2-week sprint cycles with demo calls, access to a staging environment, and the ability to reprioritize features between sprints. This is the single biggest predictor of project success."
                        },
                        {
                          num: '05',
                          title: 'Clarify post-launch support and knowledge transfer',
                          desc: "A product at launch is 30% of the work. What happens when you need a bug fix 8 months later? Ensure your contract includes a minimum 3-month post-launch support period, access to all code repositories, full documentation, and clear knowledge transfer to your internal team."
                        },
                        {
                          num: '06',
                          title: 'Request a fixed-price discovery sprint first',
                          desc: "Before committing to a $100K+ build, ask for a 2-week paid discovery sprint ($5K–$15K) where the team produces a detailed technical specification, architecture diagram, and refined project estimate. This reveals team quality before major commitment and reduces estimate error by 60%."
                        },
                      ].map((item, i) => (
                        <div key={i} className="reveal" style={{ display: 'flex', gap: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: 24 }}>
                          <div style={{ fontSize: 28, fontWeight: 900, color: G, opacity: 0.4, flexShrink: 0, lineHeight: 1 }}>{item.num}</div>
                          <div>
                            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 6. Tech Stacks */}
                  <section id="tech-stack" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Popular Tech Stacks Used by Edmonton Companies</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, fontSize: 16, lineHeight: 1.8 }}>
                      Edmonton's software development ecosystem covers the full stack of modern technologies. Here are the most commonly deployed stacks by project type in 2026.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
                      {[
                        {
                          type: 'Mobile Apps',
                          color: G,
                          stacks: [
                            { name: 'React Native', desc: 'Cross-platform iOS + Android — 85% of new mobile builds at Codazz' },
                            { name: 'Flutter', desc: "Google's Dart-based cross-platform framework — fast growing in 2025–2026" },
                            { name: 'Swift / Kotlin', desc: 'Native iOS and Android for performance-critical applications' },
                          ]
                        },
                        {
                          type: 'Web Applications',
                          color: '#3b82f6',
                          stacks: [
                            { name: 'Next.js / React', desc: 'Default stack for SaaS web apps — SSR, SEO-friendly, Vercel-deployable' },
                            { name: 'Node.js + TypeScript', desc: 'API and backend services — used in 70% of Edmonton web projects' },
                            { name: 'Laravel / PHP', desc: 'Mature ecosystem for content-heavy and ecommerce platforms' },
                          ]
                        },
                        {
                          type: 'Cloud & Infrastructure',
                          color: '#f59e0b',
                          stacks: [
                            { name: 'AWS', desc: 'Preferred cloud for most Edmonton startups and scale-ups' },
                            { name: 'Azure', desc: 'Dominant in enterprise and government contracts (Arcurve, Infosys)' },
                            { name: 'Terraform + Docker + K8s', desc: 'Infrastructure-as-code standard for production Edmonton builds' },
                          ]
                        },
                        {
                          type: 'AI & Data',
                          color: '#8b5cf6',
                          stacks: [
                            { name: 'Python + FastAPI', desc: 'ML model serving and AI API layer — Codazz and Granify stack' },
                            { name: 'OpenAI / Claude APIs', desc: 'LLM integration for product AI features (chat, summarization, agents)' },
                            { name: 'PostgreSQL + Supabase', desc: 'Vector-capable relational database for AI-augmented SaaS products' },
                          ]
                        },
                      ].map((group, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${group.color}20`, borderRadius: 20, padding: 24 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: group.color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>{group.type}</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {group.stacks.map((s, j) => (
                              <div key={j} style={{ borderBottom: j < group.stacks.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingBottom: j < group.stacks.length - 1 ? 12 : 0 }}>
                                <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{s.name}</div>
                                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{s.desc}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 7. Talent Pool */}
                  <section id="talent-pool" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Edmonton Software Engineering Talent Pool</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, fontSize: 16, lineHeight: 1.8 }}>
                      Edmonton's engineering talent pool is deep relative to the city's size, driven by three university engineering programs, two polytechnic institutions, and significant immigration of senior engineers from India, Ukraine, and Southeast Asia who settle in Alberta for its quality of life and immigration pathways.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { institution: 'University of Alberta', program: 'Computing Science (BSc/MSc/PhD)', graduates: '1,200+ per year', strength: '#1 in Canada for AI/ML research' },
                        { institution: 'NAIT', program: 'Computer Engineering Technology', graduates: '800+ per year', strength: 'Strongest industry placement in AB' },
                        { institution: 'MacEwan University', program: 'Computer Science (BSc)', graduates: '300+ per year', strength: 'Strong co-op placement program' },
                        { institution: 'Athabasca University', program: 'Computing & Info Systems (online)', graduates: '600+ per year', strength: 'Canada largest online CS program' },
                      ].map((inst, i) => (
                        <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: 22 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: G, marginBottom: 8 }}>{inst.institution}</div>
                          <div style={{ fontSize: 13, color: '#fff', fontWeight: 500, marginBottom: 8 }}>{inst.program}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>{inst.graduates}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>{inst.strength}</div>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
                      {[
                        { icon: '🌍', title: 'Immigration & International Talent', desc: 'Alberta Advantage Immigration Program (AAIP) fast-tracks tech workers. Edmonton has the highest per-capita immigration of software engineers outside of Toronto and Vancouver. Indian, Ukrainian, and Filipino engineering communities are strong and well-established.' },
                        { icon: '💼', title: 'Salary Benchmarks 2026', desc: 'Junior developer: $65–$80K CAD. Mid-level: $90–$115K CAD. Senior: $120–$155K CAD. Staff engineer: $150–$185K CAD. ML/AI engineer premium: +20–30% over equivalent backend role. All figures 25–35% below Toronto equivalent.' },
                        { icon: '🤝', title: 'Developer Communities', desc: 'Edmonton JS (JavaScript meetup, 800+ members), Edmonton Python User Group, Edmonton .NET, and AI Edmonton run active monthly events. FounderCity connects Edmonton startup builders. HackerNest Edmonton runs quarterly tech social events.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: 22 }}>
                          <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 8. Industries */}
                  <section id="industries" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Key Industry Verticals in Edmonton Tech</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, fontSize: 16, lineHeight: 1.8 }}>
                      Edmonton's software development ecosystem has deep expertise in specific industry verticals driven by the local economy. These verticals represent where Edmonton firms have domain knowledge competitors in Toronto or Vancouver typically lack.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
                      {[
                        {
                          icon: '⚡',
                          title: 'Energy & Oil Sands Tech',
                          color: '#fbbf24',
                          desc: "Edmonton is the operational hub of Canada's oil sands industry. Local firms have deep expertise in SCADA systems, digital oilfield software, pipeline monitoring, and upstream production optimization. A differentiator unmatched by any other Canadian tech city.",
                          companies: 'Nexen Digital, Encana (Ovintiv), Pembina Pipeline'
                        },
                        {
                          icon: '🏥',
                          title: 'Health Tech & MedTech',
                          color: '#f472b6',
                          desc: "Alberta Health Services (AHS) is one of Canada's largest healthcare organizations with an ambitious digital health agenda. Edmonton firms build EMR integrations, patient portal software, clinical decision support tools, and telehealth platforms with AHS compliance built in.",
                          companies: 'Vivante Health, Symplr, DragonWave (legacy)'
                        },
                        {
                          icon: '🌾',
                          title: 'AgriTech',
                          color: G,
                          desc: "Western Canada's $50B+ agriculture sector is one of Edmonton's most underappreciated tech markets. Precision agriculture software, crop management platforms, grain trading apps, and farm equipment telematics are all active development categories with strong local clients.",
                          companies: 'Trimble Agriculture, Decisive Farming, Farmers Edge'
                        },
                        {
                          icon: '🏛️',
                          title: 'Government & Public Sector',
                          color: '#60a5fa',
                          desc: "Alberta's provincial government and City of Edmonton are major software procurement clients. Arcurve and Infosys Edmonton hold significant government contracts. New procurement reform initiatives in 2024–2026 have opened contracts to smaller Edmonton-based vendors.",
                          companies: 'Service Alberta, City of Edmonton IT, AHS Digital'
                        },
                        {
                          icon: '📦',
                          title: 'Logistics & Supply Chain',
                          color: '#fb923c',
                          desc: "Edmonton's position as the gateway to Northern Canada creates a natural logistics tech cluster. Trucking management software, freight brokerage platforms, cold-chain monitoring, and last-mile delivery optimization are active development categories with local operators as clients.",
                          companies: 'Day & Ross, TransX, Bison Transport (IT divisions)'
                        },
                        {
                          icon: '🛍️',
                          title: 'Retail & E-Commerce',
                          color: '#a78bfa',
                          desc: "West Edmonton Mall — the largest mall in North America — anchors a retail tech cluster. Omnichannel retail platforms, loyalty program apps, inventory management SaaS, and retail analytics tools have a natural client base and pilot market in Edmonton's retail ecosystem.",
                          companies: 'Triple Five Group, The Brick, SportChek (FGL Sports)'
                        },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${item.color}20`, borderRadius: 20, padding: 24 }}>
                          <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 12, lineHeight: 1.6 }}>{item.desc}</p>
                          <div style={{ fontSize: 11, color: item.color, fontWeight: 600 }}>Key players: {item.companies}</div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 9. FAQ */}
                  <section id="faq" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 32 }}>Frequently Asked Questions</h2>
                    {[
                      {
                        q: 'Who is the #1 software development company in Edmonton in 2026?',
                        a: "Codazz is Edmonton's top-rated product-focused software development studio for startups and growth-stage companies needing mobile apps, AI-powered SaaS platforms, and custom web applications. Founded by Raman Makkar, Codazz operates from its Edmonton headquarters with an engineering delivery centre in Chandigarh, India. For enterprise IT consulting, Arcurve and Infosys Edmonton are the dominant players. For internal product company quality, Jobber is Edmonton's most impressive software organization."
                      },
                      {
                        q: 'How much does software development cost in Edmonton vs Toronto?',
                        a: "Edmonton development rates typically run 30–40% below Toronto equivalents for the same engineering quality level. A senior full-stack developer in Edmonton costs $120–$150 CAD/hr vs $155–$200 CAD/hr in Toronto. On a $300K project, this difference is $60K–$90K in savings. The gap is driven by Edmonton's lower cost of living, no provincial income tax, and a less competitive tech labour market than the Toronto-Waterloo corridor."
                      },
                      {
                        q: 'Is Edmonton a good place to hire software engineers?',
                        a: "Yes — Edmonton is one of Canada's best-value markets for software engineering talent in 2026. The University of Alberta produces 1,200+ CS graduates annually, NAIT and MacEwan add another 1,100+, and Alberta's immigration programs attract experienced engineers internationally. Developer salaries run 30–35% below Toronto/Vancouver, and Edmonton's quality of life (affordable housing, short commutes, strong communities) produces high retention rates compared to hyper-competitive markets."
                      },
                      {
                        q: 'What technology specialties is Edmonton known for?',
                        a: "Edmonton has particular depth in: (1) AI/ML — driven by University of Alberta's Amii institute; (2) Energy tech / industrial IoT — driven by the oil sands industry cluster; (3) AgriTech — driven by Western Canada's agriculture sector; (4) Government IT — driven by Alberta Health Services and provincial government contracts; and (5) Field service software — driven by Jobber's presence and alumni network. For general web, mobile, and SaaS development, Edmonton is competitive with any major Canadian city."
                      },
                      {
                        q: 'Does Codazz only serve Edmonton clients?',
                        a: "No. Codazz operates from Edmonton, Alberta as its headquarters but serves clients across Canada, the United States, UAE, Australia, and the UK. The majority of our projects are for clients outside Edmonton — we are a remote-first studio that happens to be headquartered in Edmonton for talent access and cost structure reasons. We have delivered over 500 apps for US startups, Canadian scale-ups, UAE real estate companies, and Australian e-commerce businesses."
                      },
                      {
                        q: 'What is the best way to hire a software development company in Edmonton?',
                        a: "Start with referrals from your network, then verify portfolio quality (live apps, not just case studies), request a 2-week paid discovery sprint before committing to a full build, meet the specific developers who will work on your project, and insist on a contract that gives you full IP ownership and access to all code repositories from day one. Avoid firms that require long upfront payments before delivering any working software. At Codazz, we offer a free 30-minute technical consultation before any engagement begins."
                      },
                      {
                        q: 'How does Edmonton compare to offshore development for cost and quality?',
                        a: "Edmonton offers a compelling middle ground: significantly cheaper than San Francisco or New York ($120–$150 CAD/hr vs $200–$350 USD/hr), meaningfully cheaper than Toronto (30–40%), with the IP protection, timezone alignment, English-first communication, and regulatory compatibility of a Canadian partner. Offshore teams in India or Eastern Europe are cheaper ($25–$60 USD/hr) but introduce timezone friction (8–10 hours), communication overhead, IP risk in some jurisdictions, and no Canadian regulatory familiarity. For most North American startups, Edmonton nearshore offers the best risk-adjusted cost of the available options."
                      },
                    ].map((faq, i) => (
                      <div key={i} className="reveal" style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, marginBottom: 12, overflow: 'hidden' }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{ width: '100%', padding: '18px 24px', background: openFaq === i ? 'rgba(34,197,94,0.06)' : 'rgba(255,255,255,0.02)', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
                        >
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{faq.q}</span>
                          <span style={{ color: G, fontSize: 20, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px', color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
                        )}
                      </div>
                    ))}
                  </section>

                  {/* CTA */}
                  <div className="reveal" style={{ background: 'linear-gradient(135deg,rgba(34,197,94,0.1),rgba(8,50,30,0.3))', borderRadius: 28, padding: 48, textAlign: 'center', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 64 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Edmonton-Headquartered</div>
                    <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Work with Codazz — Edmonton's Top Software Studio</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 540, margin: '0 auto 28px', fontSize: 15, lineHeight: 1.6 }}>
                      Mobile apps, AI-powered SaaS platforms, web applications, and custom software. 500+ apps shipped. Edmonton HQ, global client base. Free 30-minute technical consultation — no pitch, just honest advice.
                    </p>
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
                      {['React Native', 'Flutter', 'Node.js', 'Next.js', 'AI/ML', 'AWS', 'SaaS'].map(tag => (
                        <span key={tag} style={{ fontSize: 12, fontWeight: 600, color: G, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', padding: '4px 12px', borderRadius: 20 }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Link href="/contact" style={{ background: G, color: '#000', padding: '14px 32px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Book Free Consultation</Link>
                      <Link href="/services/react-native-development" style={{ border: '1px solid rgba(34,197,94,0.4)', color: G, padding: '14px 32px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>View Our Services</Link>
                    </div>
                  </div>

                </article>

                {/* Sidebar */}
                <aside className="toc-sidebar" style={{ width: 280, flexShrink: 0 }}>
                  <div style={{ position: 'sticky', top: 120, display: 'flex', flexDirection: 'column', gap: 20 }}>

                    {/* TOC */}
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Table of Contents</div>
                      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {tocSections.map(s => (
                          <a key={s.id} href={`#${s.id}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 8, fontSize: 13, textDecoration: 'none', color: activeSection === s.id ? G : 'rgba(255,255,255,0.55)', background: activeSection === s.id ? 'rgba(34,197,94,0.08)' : 'transparent', fontWeight: activeSection === s.id ? 600 : 400 }}>
                            <span>{s.emoji}</span><span>{s.label}</span>
                          </a>
                        ))}
                      </nav>
                    </div>

                    {/* Codazz Highlight Card */}
                    <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Ranked #1 in Edmonton</div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Codazz</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginBottom: 16 }}>Edmonton HQ · 500+ apps shipped · Mobile / AI / SaaS specialist · $85–$145 CAD/hr</div>
                      {[
                        ['Specialization', 'Mobile, AI, SaaS, Web'],
                        ['Rate', '$85–$145 CAD/hr'],
                        ['HQ', 'Edmonton, Alberta'],
                        ['Dev Centre', 'Chandigarh, India'],
                      ].map(([l, v], i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{l}</span>
                          <span style={{ fontSize: 11, color: '#fff', fontWeight: 600 }}>{v}</span>
                        </div>
                      ))}
                    </div>

                    {/* Rate Card */}
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Edmonton Rate Ranges</div>
                      {[
                        ['Junior Developer', '$65–$85/hr'],
                        ['Mid-Level Dev', '$90–$120/hr'],
                        ['Senior Developer', '$120–$155/hr'],
                        ['AI/ML Engineer', '$145–$185/hr'],
                        ['Full Project MVP', '$35K–$85K'],
                        ['Full Product Build', '$85K–$250K'],
                      ].map(([l, v], i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{l}</span>
                          <span style={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>{v} CAD</span>
                        </div>
                      ))}
                    </div>

                    {/* Related Articles */}
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Related Articles</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {relatedPosts.map(post => (
                          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '12px 14px', background: 'rgba(255,255,255,0.02)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ fontSize: 10, color: G, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{post.category}</div>
                            <div style={{ fontSize: 13, color: '#fff', fontWeight: 500, lineHeight: 1.4, marginBottom: 4 }}>{post.title}</div>
                            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" style={{ display: 'block', background: G, color: '#000', textAlign: 'center', padding: '14px 24px', borderRadius: 14, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>Get Free Consultation</Link>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
