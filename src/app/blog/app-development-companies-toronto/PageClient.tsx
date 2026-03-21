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
  { num: 1, name: 'Codazz', category: 'Mobile / AI / SaaS', emoji: '🍁', metric: 'Canadian HQ | 500+ Apps | $95–$145 CAD/hr | Edmonton + Chandigarh', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Shopify', category: 'Commerce Platform', emoji: '🛒', metric: 'Ottawa-HQ | $6B+ revenue | 2M+ merchants globally', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 3, name: 'Aislelabs', category: 'Retail Analytics', emoji: '📍', metric: 'Wi-Fi analytics & foot traffic intelligence | 1B+ data points', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 4, name: 'Tulip Retail', category: 'Retail Tech', emoji: '🛍️', metric: 'Mobile associate platform | 60+ global luxury brands', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 5, name: 'Top Hat', category: 'EdTech SaaS', emoji: '🎓', metric: 'Interactive learning platform | 750+ universities globally', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 6, name: 'Hootsuite', category: 'Social Media SaaS', emoji: '🦉', metric: 'Vancouver HQ | 200K+ customers | $300M+ ARR', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Wattpad', category: 'Content Platform', emoji: '📖', metric: 'Toronto HQ | 90M+ users | Acquired by Naver for $600M', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 8, name: 'Veeva Systems', category: 'Life Sciences Cloud', emoji: '🧬', metric: 'Life sciences SaaS | $2.3B revenue | 1,000+ biopharma clients', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
  { num: 9, name: 'ThoughtWire', category: 'Digital Twins / IoT', emoji: '🏗️', metric: 'Smart building & hospital digital twin platform | Toronto HQ', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 10, name: 'StackAdapt', category: 'AdTech / DSP', emoji: '📊', metric: 'Toronto HQ | Programmatic DSP | G2 #1 DSP 2023–2026', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
];

const relatedPosts = [
  { slug: 'app-development-cost-australia', title: 'How Much Does App Development Cost in 2026?', category: 'Cost Guide', readTime: '9 min' },
  { slug: 'software-development-companies-edmonton', title: 'Top Software Development Companies in Edmonton (2026)', category: 'Rankings', readTime: '11 min' },
  { slug: 'how-to-hire-remote-developers', title: 'How to Hire Remote Developers in 2026', category: 'Hiring Guide', readTime: '8 min' },
];

const faqItems = [
  {
    q: 'How much does app development cost in Toronto in 2026?',
    a: 'A basic mobile app with 5–8 screens and a simple backend typically costs $60,000–$120,000 CAD with a Toronto-market firm. A mid-complexity app (10–15 features, payment integration, admin dashboard, real-time features) runs $120,000–$250,000 CAD. Enterprise-grade platforms with AI, complex APIs, and multi-platform delivery start at $300,000 CAD and up. Choosing a distributed Canadian firm like Codazz (Edmonton HQ) can reduce total project cost by 20–35% compared to a pure Toronto agency at equivalent quality.',
  },
  {
    q: 'Is it better to hire a Toronto dev firm or a distributed Canadian team?',
    a: 'For most projects, a distributed Canadian team with strong remote delivery practices delivers equal or better value. The key requirements are Canadian management standards — same-timezone availability, PIPEDA-compliant data handling, Canadian IP law, and SR&ED familiarity. Codazz operates from Edmonton with these standards built in, at rates 20–30% below equivalent Toronto firms. The in-person office advantage of a Toronto firm is real but rarely justifies the premium for software development work.',
  },
  {
    q: 'Do Toronto development companies qualify for SR&ED tax credits?',
    a: "Yes — any Canadian-registered corporation doing qualifying software R&D can apply for SR&ED credits, regardless of city. The key is that the work must involve technological uncertainty. Your development firm should be able to advise on SR&ED eligibility and help you document qualifying work. This is one area where working with an experienced Canadian firm pays for itself.",
  },
  {
    q: 'What technologies do Toronto development companies specialize in?',
    a: "Toronto has particular depth in fintech (Interac integrations, Canadian banking APIs, FINTRAC compliance), enterprise SaaS, AI/ML (proximity to the Vector Institute), and retail tech (Shopify ecosystem, Tulip Retail, TouchBistro). Cross-platform mobile (React Native, Flutter) is strong across all Canadian cities. Codazz specifically covers mobile iOS/Android, Next.js/React, Node.js, Python/AI, Flutter, and cloud (AWS/GCP/Azure).",
  },
  {
    q: 'How long does app development take with a Toronto company?',
    a: 'An MVP (3–5 core features, one platform) takes 10–16 weeks with a dedicated team. A full-featured app (8–12 features, two platforms, admin dashboard) typically takes 4–7 months. Complex enterprise platforms with AI, real-time features, and multi-region infrastructure take 8–14 months. These timelines assume a well-scoped project from day one — projects without clear requirements routinely run 40–80% over initial estimates.',
  },
  {
    q: 'Why is Codazz ranked #1 if it is based in Edmonton, not Toronto?',
    a: "Because this guide ranks companies by delivery quality and value for Toronto clients — not by office location. Codazz is headquartered in Edmonton with a dev centre in Chandigarh, India, and serves clients across all Canadian provinces including a significant Toronto client base. Canadian law, Canadian time zones, Canadian IP protection, and rates 20–30% below Toronto market pricing make Codazz the best overall choice for Toronto businesses that care about outcomes over postal codes.",
  },
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
                13 min read
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
              Toronto is Canada&apos;s largest tech market and one of North America&apos;s fastest-growing innovation hubs. This definitive 2026 guide ranks the top 10 app development companies serving Toronto businesses — with real rates in CAD, a city comparison table, SR&amp;ED tax credit breakdown, and an honest take on who actually delivers.
            </p>

            {/* Author + Share */}
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

        {/* ARTICLE BODY + SIDEBAR */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 320px', gap: 80, alignItems: 'start' }}>

              <article>

                {/* Introduction */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Toronto has quietly become one of the most consequential tech cities in North America. What was once seen primarily as a financial services capital has transformed into a full-spectrum innovation hub — home to world-class AI research at the Vector Institute, a thriving fintech corridor along Bay Street, the MaRS Discovery District anchoring one of the continent&apos;s most ambitious innovation campuses, and a direct talent pipeline from the Waterloo corridor that produces more software engineers per capita than almost anywhere in the world.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses looking to build mobile apps, SaaS platforms, or custom software, Toronto offers a compelling value proposition: North American talent standards, significantly lower rates than comparable US cities, and a legal and regulatory environment aligned with global enterprise requirements. But the market is not uniform. Rates range from $85 to over $200 CAD/hr depending on firm size, specialization, and seniority — and the best companies are typically booked out well in advance.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide cuts through the noise. We rank the top 10 app and software development companies serving Toronto — including one Edmonton-headquartered firm that consistently outperforms purely local competitors for Canadian clients nationwide — and give you everything you need to make the right hiring decision in 2026.
                  </p>
                </div>

                {/* Why Toronto is a Tech Hub */}
                <div className="reveal" id="toronto-hub" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Why Toronto Is a North American Tech Hub</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>
                    Six market statistics every software buyer should understand before engaging a Toronto development firm.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 32 }}>
                    {[
                      { stat: '340,000+', label: 'Tech workers in the Greater Toronto Area', icon: '👥' },
                      { stat: '#3', label: 'North American city for tech job growth (2024–2026)', icon: '📈' },
                      { stat: '$8.2B+', label: 'VC invested in Toronto startups in 2024', icon: '💰' },
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
                      { district: 'MaRS Discovery District', icon: '🔬', desc: "Canada's largest urban innovation hub. Home to 1,000+ tech and life sciences companies with $1.7B in combined annual revenue.", type: 'Innovation Campus' },
                      { district: 'Bay Street Fintech', icon: '🏦', desc: "Canada's financial capital spawning fintech unicorns including Wealthsimple, Borrowell, Koho, and Float. Deep financial API expertise.", type: 'Fintech Corridor' },
                      { district: 'Waterloo Corridor', icon: '🎓', desc: 'UWaterloo and the Shopify ecosystem producing 7,000+ CS graduates annually. 90-minute drive from downtown Toronto.', type: 'Talent Pipeline' },
                      { district: 'Shopify Ecosystem', icon: '🛒', desc: "Shopify's platform has spawned 200+ Toronto-area SaaS and plugin businesses, creating one of Canada's densest developer networks.", type: 'SaaS Ecosystem' },
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
                    All rates in CAD per hour. Toronto rates are higher than Edmonton and Calgary but 30–45% lower than equivalent US cities — a meaningful cost advantage for Canadian clients.
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
                          { role: 'DevOps / Cloud Architect', junior: '$90–$115/hr', mid: '$120–$160/hr', senior: '$165–$215+/hr' },
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
                        "The best Toronto-serving firms are often distributed across Canada. Codazz (Edmonton-HQ) leads this guide because it delivers Canadian management standards at rates that consistently beat pure Toronto firms.",
                        "Toronto's fintech, retail tech, and AI ecosystems are world-class. If your product touches payments, POS, or ML, you will find deep domain expertise here.",
                        "Canada's SR&ED (Scientific Research and Experimental Development) tax credit program can offset 15–35% of your eligible software development costs — a significant financial advantage over US-only vendors.",
                        "Toronto is home to globally successful product companies (Shopify, Wattpad, Hootsuite, StackAdapt) that define the quality bar for Canadian software engineering.",
                      ].map((item, i) => (
                        <li key={i} style={{
                          fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: i < 4 ? 12 : 0,
                        }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ranking Methodology */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 20,
                    }}>How We Ranked These Companies</h2>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 20 }}>
                      We evaluated companies across five weighted criteria. Note that this ranking includes both development agencies and highly successful product companies — the latter are included because they set the quality benchmark for the Toronto tech market and some offer development services or partnerships.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Canadian Market Expertise', weight: '30%', desc: 'Canadian client portfolio, PIPEDA compliance, SR&ED experience, domestic API knowledge' },
                        { label: 'Technical Architecture', weight: '25%', desc: 'Code quality, scalability, DevOps maturity, security posture, mobile and cloud capability' },
                        { label: 'Industry Specialization', weight: '20%', desc: 'Domain depth in fintech, retail, edtech, healthtech, or enterprise SaaS' },
                        { label: 'Client Outcomes', weight: '15%', desc: 'Business impact, ROI delivered, system uptime, user adoption metrics, verified references' },
                        { label: 'Post-Launch Support', weight: '10%', desc: 'SLA commitments, ongoing maintenance capability, response time, and escalation protocols' },
                      ].map((c, i) => (
                        <div key={i} style={{
                          padding: 16, borderRadius: 12,
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                            <span style={{ fontSize: 13, fontWeight: 600, color: '#ffffff' }}>{c.label}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e' }}>{c.weight}</span>
                          </div>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top 10 Companies Heading */}
                <div className="reveal" id="top-companies" style={{ marginBottom: 40 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Top 10 App Development Companies Serving Toronto (2026)</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                    Ranked by quality of delivery, Canadian market expertise, client references, and value for money. Note that the top choice is Edmonton-headquartered — a deliberate ranking decision based on demonstrated national delivery capability and superior rate competitiveness for Canadian clients.
                  </p>
                </div>

                {/* Company 1 — Codazz (FEATURED) */}
                <div className="reveal" id="codazz" style={{ marginBottom: 48 }}>
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
                        }}>Canadian Management Standards</div>
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
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: '4px 0 0' }}>HQ: Edmonton, Alberta, Canada · Dev Centre: Chandigarh, India · Serves Toronto &amp; nationwide</p>
                        </div>
                      </div>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, marginBottom: 16 }}>
                        Codazz is our clear #1 recommendation for Toronto businesses seeking mobile app and software development in 2026. Founded by CEO Raman Makkar and headquartered in Edmonton, Alberta, Codazz has delivered 500+ apps across mobile (iOS, Android, Flutter, React Native), SaaS platforms, AI/ML products, and custom web applications for clients across Canada, the United States, the UAE, and the United Kingdom.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, marginBottom: 16 }}>
                        The reason Codazz leads this Toronto ranking: distributed Canadian delivery done right. Codazz operates with 100+ engineers across Edmonton and a development centre in Chandigarh, India — managed by a senior Canadian leadership team that delivers North American-aligned project management, IP protection under Canadian law, and English-first communication. Toronto businesses get all of that at rates $20–$40 CAD/hr below comparable Toronto-based agencies. On a $200K+ project, that delta is not trivial.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, marginBottom: 24 }}>
                        <strong style={{ color: '#ffffff' }}>Why Toronto clients choose Codazz over local firms:</strong> SR&amp;ED-eligible projects managed end-to-end, no Toronto overhead markup, same-timezone collaboration across Canada, dedicated Slack channels with named developers, weekly demo calls, and a deep track record across fintech, retail tech, healthcare, logistics, and SaaS that few agencies of any size can match.
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
                        {['Mobile (iOS/Android)', 'Flutter & React Native', 'SaaS Platforms', 'AI/ML Engineering', 'Next.js / React', 'Cloud & DevOps', 'Node.js Backend'].map((tag, i) => (
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

                {/* Companies 2–10 */}
                {[
                  {
                    num: '02', id: 'shopify', name: 'Shopify', category: 'Commerce Platform',
                    emoji: '🛒', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    hq: 'Ottawa, Ontario (Canada-wide presence, Toronto office)',
                    metric: '$6B+ annual revenue | 2M+ merchants | 10,000+ employees globally',
                    paragraphs: [
                      "Shopify is Canada's most valuable technology company and the undisputed king of global commerce infrastructure. Headquartered in Ottawa with a major Toronto engineering hub, Shopify powers over two million merchants across 175 countries, processing hundreds of billions in gross merchandise value annually. Their platform underpins everything from solo entrepreneurs to enterprise brands including Allbirds, Gymshark, and Heinz.",
                      "While Shopify is primarily a product platform rather than a development agency, their Toronto ecosystem is enormously influential for anyone building e-commerce software in Canada. The Shopify Partner program has spawned hundreds of Toronto-area app developers, theme agencies, and custom integration shops — creating a dense cluster of commerce engineering talent that sets a high benchmark for Canadian software quality.",
                      "For businesses building on top of Shopify's platform — custom Shopify apps, storefront customizations, headless commerce with Hydrogen, or Shopify Plus implementations — the Toronto-area Shopify partner ecosystem is where the best talent lives. Key capabilities include Shopify App development (public and private), Liquid theme development, GraphQL Admin API integrations, Shopify Plus scripts, and headless commerce with custom React/Next.js storefronts.",
                    ],
                  },
                  {
                    num: '03', id: 'aislelabs', name: 'Aislelabs', category: 'Retail Analytics',
                    emoji: '📍', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    hq: 'Toronto, Ontario',
                    metric: 'Wi-Fi analytics, proximity marketing | Retail, malls, airports | 1B+ data points processed',
                    paragraphs: [
                      "Aislelabs is a Toronto-based analytics and engagement platform specializing in location intelligence for physical spaces — malls, airports, retail stores, and sports venues. Using Wi-Fi, Bluetooth, and sensor data, Aislelabs captures foot traffic patterns, dwell times, and cross-zone visitor journeys to give operators unprecedented visibility into how people move through their space.",
                      "Their platform serves some of the largest shopping centres and airports in North America, processing over a billion data points annually. For retail clients building location-aware apps, proximity marketing tools, or customer journey analytics, Aislelabs represents the gold standard for Canadian location intelligence engineering.",
                      "Key platform capabilities include Wi-Fi marketing and guest engagement, foot traffic analytics, visitor journey mapping, CRM integration, proximity notification systems, and airport or venue analytics dashboards. Best For: Shopping malls, airports, transit hubs, large-format retail, and sports venues seeking to transform physical visitor data into actionable business intelligence.",
                    ],
                  },
                  {
                    num: '04', id: 'tulip-retail', name: 'Tulip Retail', category: 'Retail Tech',
                    emoji: '🛍️', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    hq: 'Toronto, Ontario',
                    metric: 'Mobile associate platform | 60+ global luxury brands | Clienteling & task management',
                    paragraphs: [
                      "Tulip Retail is one of Toronto's most successful retail technology product companies, building a mobile-first platform that empowers in-store retail associates with clienteling, task management, inventory lookup, product knowledge, and customer communication tools. With 60+ enterprise retail brands on their platform — including Kate Spade, Mulberry, Coach, and Pandora — Tulip has become the de facto associate productivity platform for luxury and specialty retail globally.",
                      "Tulip's engineering team has solved the genuinely hard problems of mobile retail: offline-first operation in environments where Wi-Fi connectivity is unreliable, real-time inventory sync across distributed point-of-sale systems, and user experience design for front-line retail staff who need fast, intuitive workflows in high-pressure retail environments.",
                      "For retailers seeking a proven associate experience platform rather than custom development, Tulip is the clear choice. For retailers evaluating what Toronto-standard engineering can achieve in retail mobile, Tulip sets the benchmark. Key Services: Mobile associate apps, clienteling tools, task management, omnichannel inventory lookup, customer communication, and in-store analytics.",
                    ],
                  },
                  {
                    num: '05', id: 'top-hat', name: 'Top Hat', category: 'EdTech SaaS',
                    emoji: '🎓', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    hq: 'Toronto, Ontario',
                    metric: '750+ universities | 3M+ students | $130M+ raised | Interactive courseware platform',
                    paragraphs: [
                      "Top Hat is Toronto's most prominent edtech success story — a cloud-based interactive learning platform used by over 750 universities and three million students across North America. Their platform replaces traditional static textbooks with interactive, instructor-controlled digital courseware that combines real-time classroom engagement tools (polls, quizzes, discussions) with dynamic, updateable course content.",
                      "Founded in 2009 and having raised over $130 million in venture funding, Top Hat's engineering team has built a platform that handles the genuinely difficult problems of education technology: real-time multi-user interaction in large lecture halls, content rights management, LMS integration with systems like Blackboard and Canvas, and accessibility compliance across diverse student devices.",
                      "Top Hat demonstrates that Toronto has deep engineering capability in the education technology sector — relevant for any edtech company evaluating local development talent or seeking to hire from Toronto's well-developed learning technology engineer pool. Key Services: Interactive digital textbooks, classroom engagement tools, course management, assessment authoring, LMS integration, and publisher partnerships.",
                    ],
                  },
                  {
                    num: '06', id: 'hootsuite', name: 'Hootsuite', category: 'Social Media SaaS',
                    emoji: '🦉', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    hq: 'Vancouver, BC (significant Toronto presence)',
                    metric: '200,000+ customers | $300M+ ARR | Social media management market leader',
                    paragraphs: [
                      "Hootsuite is Canada's dominant social media management platform — headquartered in Vancouver with a major Toronto engineering and product team — serving over 200,000 customers including 80% of the Fortune 1000. Their platform manages social publishing, content scheduling, monitoring, analytics, and team collaboration across every major social network from a single dashboard.",
                      "For Toronto businesses evaluating what Canadian SaaS engineering can achieve at enterprise scale, Hootsuite is a definitive reference point. Their API integrations span LinkedIn, Twitter/X, Instagram, Facebook, TikTok, Pinterest, and YouTube — and their enterprise security posture (SOC 2 Type II, GDPR compliance, SSO, advanced permissions) represents the compliance standard for B2B SaaS serving large organizations.",
                      "Hootsuite's Toronto presence contributes meaningfully to the city's social and digital marketing technology talent pool. Key Services: Social media scheduling and publishing, content calendar management, social listening and monitoring, analytics and reporting, employee advocacy, team workflows, and enterprise social media governance.",
                    ],
                  },
                  {
                    num: '07', id: 'wattpad', name: 'Wattpad', category: 'Content Platform',
                    emoji: '📖', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    hq: 'Toronto, Ontario (Acquired by Naver Corp.)',
                    metric: '90M+ monthly users | $600M acquisition by Naver | User-generated storytelling platform',
                    paragraphs: [
                      "Wattpad is Toronto's most globally beloved consumer product — a storytelling platform connecting 90 million monthly active users with emerging writers across 50+ languages. Founded in 2006 and acquired by South Korean technology conglomerate Naver Corporation for $600 million in 2021, Wattpad's Toronto engineering team built one of the most technically complex content platforms in the world: real-time collaborative reading experiences, sophisticated recommendation algorithms, content moderation at scale, and a monetization infrastructure spanning Wattpad Originals, paid stories, and brand partnerships.",
                      "Wattpad's acquisition by Naver — parent company of Line, Snow, and Webtoon — underscores Toronto's credibility as a source of globally competitive consumer technology. The Wattpad engineering culture, which emphasized deep personalization, community-driven product decisions, and mobile-first design, influenced an entire generation of Toronto product engineers.",
                      "For consumer app developers, Wattpad is the benchmark for user-generated content platforms built out of Toronto. Key technical achievements: real-time reading progress sync across devices, ML-powered story discovery, creator monetization tooling, content moderation systems at 90M-user scale, and mobile apps serving markets across North America, Southeast Asia, Latin America, and Europe.",
                    ],
                  },
                  {
                    num: '08', id: 'veeva-systems', name: 'Veeva Systems', category: 'Life Sciences Cloud',
                    emoji: '🧬', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    hq: 'Pleasanton, CA (major Toronto / Canadian engineering presence)',
                    metric: '$2.3B+ annual revenue | 1,000+ biopharma clients | Life sciences cloud leader',
                    paragraphs: [
                      "Veeva Systems is the dominant cloud software provider for the global life sciences industry — serving over 1,000 biopharmaceutical, medical device, and clinical research companies including Pfizer, AstraZeneca, Johnson & Johnson, and GSK. Their platform spans clinical data management (Veeva Vault), commercial operations (Veeva CRM), regulatory submissions, quality management, and medical affairs — essentially the full software stack for a modern pharma company.",
                      "Veeva's Canadian engineering presence — particularly in Toronto, given the city's proximity to major pharmaceutical research campuses — makes them a significant force in the local technology talent market. For healthcare and life sciences companies building digital products or seeking development partners with deep pharmaceutical industry compliance knowledge (21 CFR Part 11, GxP validation, HIPAA), Toronto's life sciences software talent pool — shaped in part by Veeva — is a key resource.",
                      "Key Veeva platform capabilities: Vault Clinical, Vault RIM (regulatory information management), Vault Quality, Veeva CRM, PromoMats (promotional content management), and Veeva Network (master data management). Best For: Pharmaceutical, biotech, medical device, and CRO companies building software that must meet FDA and international regulatory compliance requirements.",
                    ],
                  },
                  {
                    num: '09', id: 'thoughtwire', name: 'ThoughtWire', category: 'Digital Twins / IoT',
                    emoji: '🏗️', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    hq: 'Toronto, Ontario',
                    metric: 'Smart building and hospital digital twin platform | Real-time operational intelligence',
                    paragraphs: [
                      "ThoughtWire is one of Toronto's most technically ambitious enterprise software companies, building digital twin platforms for complex built environments — hospitals, commercial buildings, campuses, and critical infrastructure. Their platform integrates data from building management systems, IoT sensors, access control, environmental monitors, and operational systems into a unified real-time model of a physical facility, enabling operators to see and respond to conditions across an entire building from a single interface.",
                      "Their healthcare vertical is particularly notable: ThoughtWire's hospital digital twin platform has been deployed in major Canadian hospital systems, providing clinical operations teams with real-time patient flow visibility, bed management, staff location, and environmental monitoring. In environments where operational decisions directly affect patient outcomes, this level of software engineering complexity and consequence is rare.",
                      "For enterprises evaluating IoT, smart building, or digital twin development in Canada, ThoughtWire represents the highest standard of this engineering discipline in the Toronto market. Key Services: Building digital twin platforms, real-time IoT data integration, hospital operational intelligence, facilities management dashboards, BMS integration, and smart campus command centres.",
                    ],
                  },
                  {
                    num: '10', id: 'stackadapt', name: 'StackAdapt', category: 'AdTech / DSP',
                    emoji: '📊', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    hq: 'Toronto, Ontario',
                    metric: 'G2 #1 DSP 2023–2026 | 2,000+ agencies | Programmatic advertising platform',
                    paragraphs: [
                      "StackAdapt is Toronto's most impressive adtech success story and one of the fastest-growing programmatic advertising platforms in North America. Their self-serve demand-side platform (DSP) enables marketing agencies and brands to plan, execute, and optimize programmatic advertising campaigns across display, video, CTV, native, audio, and digital-out-of-home channels from a single interface. Rated the #1 DSP on G2 for four consecutive years, StackAdapt has built a platform that out-executes competitors far better capitalized than they are.",
                      "StackAdapt's engineering achievement is significant: they built a real-time bidding platform that processes billions of auction requests per day, applies ML-driven audience targeting and bid optimization, and delivers campaign analytics in near-real-time — all at competitive CPMs that consistently outperform larger incumbent DSPs. For a Toronto-founded company competing against the likes of The Trade Desk and DV360, this is a remarkable engineering accomplishment.",
                      "StackAdapt serves 2,000+ agency and brand clients across North America and Europe, making it the go-to programmatic platform for Canadian agencies that need sophisticated multi-channel programmatic capabilities without the complexity or minimum spend requirements of enterprise DSP alternatives. Key Services: Programmatic display, video, CTV, native, audio, and DOOH advertising — all accessible through a single self-serve platform.",
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 40 }} id={app.id}>
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

                {/* Quick Comparison Table */}
                <div className="reveal" id="comparison-table" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>2026 Company Comparison at a Glance</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
                    A quick reference across the top 10 ranked companies by specialty, best use case, and market focus.
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Rank', 'Company', 'Specialty', 'Best For', 'Type'].map(h => (
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
                          { rank: '#1', company: 'Codazz', specialty: 'Mobile, SaaS, AI, Web', bestFor: 'Full-cycle Canadian app development', type: 'Dev Agency' },
                          { rank: '#2', company: 'Shopify', specialty: 'Commerce platform & ecosystem', bestFor: 'E-commerce app development', type: 'Platform / Ecosystem' },
                          { rank: '#3', company: 'Aislelabs', specialty: 'Wi-Fi analytics, location intelligence', bestFor: 'Retail & venue foot traffic analytics', type: 'Product Company' },
                          { rank: '#4', company: 'Tulip Retail', specialty: 'Mobile retail associate apps', bestFor: 'In-store retail technology', type: 'Product Company' },
                          { rank: '#5', company: 'Top Hat', specialty: 'Interactive learning SaaS', bestFor: 'University-grade edtech platforms', type: 'Product Company' },
                          { rank: '#6', company: 'Hootsuite', specialty: 'Social media management', bestFor: 'Social media SaaS and marketing tech', type: 'Product Company' },
                          { rank: '#7', company: 'Wattpad', specialty: 'UGC content platform at scale', bestFor: 'Consumer content app engineering', type: 'Product Company' },
                          { rank: '#8', company: 'Veeva Systems', specialty: 'Life sciences cloud', bestFor: 'Pharma & regulated software', type: 'Product Company' },
                          { rank: '#9', company: 'ThoughtWire', specialty: 'Digital twins, IoT, smart buildings', bestFor: 'Enterprise IoT & facility intelligence', type: 'Product Company' },
                          { rank: '#10', company: 'StackAdapt', specialty: 'Programmatic DSP / AdTech', bestFor: 'Ad platform & marketing technology', type: 'Product Company' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '13px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{row.rank}</td>
                            <td style={{ padding: '13px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.company}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.specialty}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.bestFor}</td>
                            <td style={{ padding: '13px 16px', fontSize: 12, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{row.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* City Comparison */}
                <div className="reveal" id="city-comparison" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 8,
                  }}>Toronto vs Vancouver vs Edmonton: Cost &amp; Talent Comparison</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
                    All rates in CAD per hour for mid-level developers. Data reflects 2026 market conditions across Canada&apos;s three largest tech hubs.
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
                          { factor: 'AI / ML Expertise', toronto: 'Exceptional (Vector Inst.)', vancouver: 'Strong', edmonton: 'Growing (UAlberta AI)' },
                          { factor: 'Fintech Ecosystem', toronto: "Canada's deepest", vancouver: 'Strong', edmonton: 'Emerging' },
                          { factor: 'SR&ED Eligible', toronto: 'Yes', vancouver: 'Yes', edmonton: 'Yes' },
                          { factor: 'Best Value Segments', toronto: 'Enterprise / Fintech', vancouver: 'Gaming / Creative', edmonton: 'Gov / Energy / SaaS' },
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

                {/* How to Choose */}
                <div className="reveal" id="how-to-choose" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>How to Choose an App Development Company in Toronto: 6-Step Guide</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {[
                      {
                        step: '01',
                        title: 'Write a Scope Before You Talk to Anyone',
                        desc: "Toronto development firms receive hundreds of inquiries monthly. The fastest way to move to the front of the queue — and get accurate quotes — is to arrive with a clear product brief: core user journeys, key integrations, platform targets (iOS/Android/web), and a realistic budget range. Without this, any quote you receive is a guess dressed up as a proposal.",
                      },
                      {
                        step: '02',
                        title: 'Request Canadian Case Studies, Not Just Logos',
                        desc: "Any development firm can display client logos. Ask specifically for Canadian client case studies — projects where they dealt with Canadian payment systems (Interac, Stripe Canada), provincial privacy laws (PIPEDA, Quebec Law 25), or Canadian App Store and Google Play distribution. This separates firms with genuine Canadian market knowledge from those who serve US clients and claim Canadian expertise.",
                      },
                      {
                        step: '03',
                        title: 'Verify SR&ED Eligibility Early',
                        desc: "Canada's Scientific Research and Experimental Development (SR&ED) tax credit program can recover 15–35% of eligible software development costs. Ask any development firm whether your project qualifies and whether they have experience preparing or supporting SR&ED claims. Firms like Codazz that work primarily with Canadian clients understand this process deeply — and can help you structure your project to maximize eligible expenditures.",
                      },
                      {
                        step: '04',
                        title: 'Insist on Weekly Demos, Not Status Emails',
                        desc: "Running software in a staging environment is the only honest progress signal. Structure your contract to require weekly demo sessions of working functionality — not status report emails describing what was worked on. Any firm that resists this clause is telling you something important about their delivery confidence. Weekly demos also prevent scope drift and surface misunderstandings while they are still cheap to fix.",
                      },
                      {
                        step: '05',
                        title: 'Clarify IP Ownership Before Day One',
                        desc: "Ensure your development agreement explicitly assigns all IP, source code, work product, and derivative works to you — not to the development firm. Canadian development contracts should include clear IP assignment language. Do not accept a contract that grants the developer a perpetual license to your work product. Have your lawyer review the IP clause before signing.",
                      },
                      {
                        step: '06',
                        title: 'Consider Distributed Canadian Teams for Better Value',
                        desc: "The best value in Canadian software development is often not a Toronto-HQ firm. Codazz (Edmonton HQ) charges $95–$145 CAD/hr for work that comparable Toronto agencies quote at $130–$175 CAD/hr. Same Canadian law, same time zones, meaningfully lower total project cost. For a $300K project, that difference is $50,000–$90,000 in savings — enough to fund your entire post-launch marketing budget.",
                      },
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

                {/* Cost Guide */}
                <div className="reveal" id="cost-guide" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Toronto App Development Cost Guide (2026)</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 28 }}>
                    {[
                      {
                        tier: 'Simple MVP',
                        range: '$50K–$100K CAD',
                        icon: '🌱',
                        features: ['3–5 core screens', 'Single platform (iOS or Android)', 'Basic backend + API', 'User authentication', '10–14 week timeline'],
                        color: '#60a5fa',
                      },
                      {
                        tier: 'Mid-Complexity App',
                        range: '$100K–$250K CAD',
                        icon: '🚀',
                        features: ['8–15 features', 'iOS + Android', 'Admin dashboard', 'Payment integration', 'Real-time features', '4–7 month timeline'],
                        color: '#22c55e',
                      },
                      {
                        tier: 'Enterprise Platform',
                        range: '$300K+ CAD',
                        icon: '🏗️',
                        features: ['Complex integrations', 'AI/ML components', 'Multi-region infra', 'Enterprise auth/SSO', 'Custom analytics', '8–14 month timeline'],
                        color: '#a78bfa',
                      },
                    ].map((tier, i) => (
                      <div key={i} style={{
                        padding: 28, borderRadius: 20,
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <div style={{ fontSize: 32, marginBottom: 12 }}>{tier.icon}</div>
                        <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{tier.tier}</p>
                        <p style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.03em' }}>{tier.range}</p>
                        <ul style={{ margin: 0, paddingLeft: 18 }}>
                          {tier.features.map((f, fi) => (
                            <li key={fi} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 4 }}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div style={{
                    padding: 24, borderRadius: 16,
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Codazz cost advantage:</strong> Working with Codazz (Edmonton HQ, $95–$145 CAD/hr) vs. a comparable Toronto agency ($130–$175 CAD/hr) saves $20–$40 CAD per engineer hour. On a typical mid-complexity project consuming 1,500 hours of engineering time, that is $30,000–$60,000 in savings — at equivalent Canadian management standards and IP protection.
                    </p>
                  </div>
                </div>

                {/* SR&ED Tax Credits */}
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
                      Canada&apos;s Scientific Research and Experimental Development (SR&amp;ED) program is one of the most generous R&amp;D incentive programs in the world — and it applies directly to innovative software development. If your app involves novel AI algorithms, new protocol development, or solving a technological uncertainty that existing knowledge cannot resolve, your project may qualify for SR&amp;ED credits worth 15–35% of eligible expenditures.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                      For Canadian-controlled private corporations (CCPCs), the enhanced SR&amp;ED credit rate is 35% on the first $3 million of eligible expenditures — potentially returning $1.05 million on a $3M software project. For larger corporations, the base federal rate is 15%, with additional provincial credits available in Ontario (8%) and Alberta (10%), among others.
                    </p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
                    {[
                      { title: 'CCPC Enhanced Rate', value: 'Up to 35%', desc: 'Enhanced refundable rate for Canadian-controlled private corporations on first $3M of eligible R&D expenditures' },
                      { title: 'Federal Base Rate', value: '15%', desc: 'Standard federal credit for non-CCPC corporations on qualifying R&D expenditures' },
                      { title: 'Ontario Provincial', value: '+8%', desc: 'Additional Ontario Innovation Tax Credit stacked on top of federal SR&ED' },
                      { title: 'Alberta Provincial', value: '+10%', desc: 'Additional Alberta Innovation Employment Grant stacked on federal SR&ED' },
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
                    Common questions from Toronto businesses evaluating app development partners in 2026.
                  </p>
                  {faqItems.map((faq, i) => (
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
                        { href: '#toronto-hub', label: 'Why Toronto is a Tech Hub' },
                        { href: '#toronto-rates', label: 'Toronto Dev Rates (2026)' },
                        { href: '#key-takeaways', label: 'Key Takeaways' },
                        { href: '#top-companies', label: 'Top 10 Companies' },
                        { href: '#codazz', label: '#1 Codazz' },
                        { href: '#comparison-table', label: 'Company Comparison Table' },
                        { href: '#city-comparison', label: 'Toronto vs Vancouver vs Edmonton' },
                        { href: '#how-to-choose', label: 'How to Choose a Dev Partner' },
                        { href: '#cost-guide', label: 'Cost Guide by Project Type' },
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

                  {/* Rate Reference Card */}
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

                  {/* Codazz CTA Card */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(255,255,255,0.01) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 12,
                    }}>Work with Codazz</p>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 10, lineHeight: 1.4 }}>
                      Canada&apos;s top app dev team. Edmonton HQ. Serving Toronto clients nationwide.
                    </p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 18 }}>
                      Mobile, web, SaaS, AI. $95–$145 CAD/hr. 500+ launches. SR&amp;ED-eligible. No surprises.
                    </p>
                    <Link href="/contact" style={{ textDecoration: 'none', display: 'block' }}>
                      <button style={{
                        width: '100%', padding: '13px 20px', borderRadius: 100,
                        background: '#22c55e', color: '#000', fontSize: 14,
                        fontWeight: 700, border: 'none', cursor: 'pointer',
                        transition: 'opacity 0.2s',
                      }}>
                        Get a Free Quote →
                      </button>
                    </Link>
                  </div>

                  {/* Author Card */}
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
                      Runs Codazz from Edmonton, Alberta with a development centre in Chandigarh, India. Has guided 500+ product launches across mobile, SaaS, AI, and web for clients across Canada, the US, and the UAE.
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
                }}>Canada&apos;s Top Dev Team · Edmonton HQ</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Build Your Toronto Project with Canada&apos;s Best Dev Team
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, lineHeight: 1.7 }}>
                  Codazz delivers Canadian-standard mobile, web, and AI development from Edmonton — serving Toronto clients at rates 20–30% below Toronto market pricing. 500+ launches. SR&amp;ED-eligible. No surprises.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                    fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                    transition: 'all 0.2s', whiteSpace: 'nowrap',
                  }}>
                    Talk to Codazz →
                  </button>
                </Link>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', margin: 0 }}>
                  Free consultation · No commitment
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
