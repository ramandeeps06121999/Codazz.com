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

const tableOfContents = [
  { id: 'hourly-rates', label: 'Hourly Rates by Role', emoji: '\u{1F4B0}' },
  { id: 'global-comparison', label: 'Global Cost Comparison', emoji: '\u{1F30D}' },
  { id: 'project-costs', label: 'Cost by Project Type', emoji: '\u{1F4CB}' },
  { id: 'city-comparison', label: 'Costs by Indian City', emoji: '\u{1F3D9}\u{FE0F}' },
  { id: 'why-india', label: 'Why India Dominates Outsourcing', emoji: '\u{1F1EE}\u{1F1F3}' },
  { id: 'codazz-advantage', label: 'The Codazz Advantage', emoji: '\u{1F3D7}\u{FE0F}' },
  { id: 'hidden-costs', label: 'Hidden Costs to Watch', emoji: '\u{26A0}\u{FE0F}' },
  { id: 'faq', label: 'FAQ', emoji: '\u{2753}' },
];

const relatedPosts = [
  { slug: 'app-development-companies-bangalore', title: 'Top 10 App Development Companies in Bangalore (2026)', category: 'Mobile', readTime: '14 min' },
  { slug: 'app-development-companies-dubai', title: 'Top 10 App Development Companies in Dubai (2026)', category: 'Mobile', readTime: '12 min' },
  { slug: 'top-app-development-companies-usa', title: 'Top App Development Companies in the USA (2026)', category: 'Mobile', readTime: '10 min' },
];

const faqs = [
  { q: 'What is the average hourly rate for software developers in India?', a: 'The average hourly rate for software developers in India ranges from $15-50/hr depending on experience level, technology stack, and city. Junior developers charge $15-25/hr, mid-level developers $25-40/hr, and senior/lead engineers $40-50/hr. Specialized roles like AI/ML engineers or blockchain developers can command $50-75/hr. These rates are 60-80% lower than comparable US rates.' },
  { q: 'How much does it cost to build a mobile app in India?', a: 'A simple mobile app (MVP) costs $5,000-$15,000 in India, a medium-complexity app costs $15,000-$50,000, and a complex enterprise app costs $50,000-$200,000+. These are 60-75% less than building the same app in the US or UK. The exact cost depends on features, platforms (iOS, Android, or both), design complexity, and backend requirements.' },
  { q: 'Is it safe to outsource software development to India?', a: 'Yes, when done correctly. India has strong IP protection laws (aligned with TRIPS agreement), a well-developed IT legal framework, and thousands of companies with proven track records serving Fortune 500 clients. The key is choosing the right partner. Companies like Codazz add extra security with their Canadian headquarters, providing North American legal protections while leveraging Indian engineering talent.' },
  { q: 'Why is software development cheaper in India?', a: 'Lower cost of living (60-70% less than the US), favorable exchange rates, a massive supply of engineering graduates (1.5 million per year), government incentives for the IT sector, and intense competition among service providers all drive prices down. Importantly, lower cost does not mean lower quality — India produces some of the world\'s best engineers, as evidenced by Indian-born CEOs leading Google, Microsoft, and Adobe.' },
  { q: 'What is the best model for working with Indian developers?', a: 'The hybrid model is widely regarded as the best approach: a company with Western headquarters (for IP protection, communication, and project management) and an India-based development center (for cost-effective engineering). Codazz operates exactly this model with their Canadian HQ in Edmonton and development center in Chandigarh, India. This gives you the best of both worlds — Western business standards with Indian engineering excellence.' },
  { q: 'How does India compare to other outsourcing destinations?', a: 'India leads the global outsourcing market with 56% market share. Compared to alternatives: Ukraine and Poland offer similar quality but at higher rates ($35-75/hr). The Philippines excels in BPO but has a smaller developer pool. Vietnam and Romania are emerging but lack India\'s scale. India\'s combination of massive talent pool, English proficiency, Western time zone overlap, and proven track record makes it the undisputed leader.' },
];

export default function SoftwareDevelopmentCostIndiaClient() {
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
              src="/blog_images/software-development-cost-india.jpg"
              alt="Software development cost in India 2026 complete guide"
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
              }}>Business</span>
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
                14 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Software Development Cost in India 2026: Complete Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              India dominates the global software outsourcing market with 56% market share and $245 billion in IT revenue. This guide breaks down exact costs by role, project type, and city&mdash;plus how to get the best value with a hybrid delivery model.
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
                    India&apos;s software development industry is a $245 billion juggernaut that commands 56% of the global outsourcing market. With 1.5 million new engineering graduates every year, a thriving startup ecosystem of 100,000+ companies, and hourly rates that are 60-80% lower than the US, India remains the world&apos;s undisputed leader in software outsourcing. But how much does it actually cost to build software in India in 2026?
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide provides a comprehensive breakdown of software development costs in India&mdash;by role, experience level, project type, and city. We also compare India&apos;s rates with other global markets and explain why the hybrid model (Western headquarters + India development center) offers the best value proposition for businesses worldwide.
                  </p>
                </div>

                {/* Key Stats Box */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    padding: '28px 32px', borderRadius: 20,
                    background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.12)',
                  }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#60a5fa', marginBottom: 16 }}>
                      India Software Development: Key Facts 2026
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: '$245B IT Revenue', desc: 'India\'s total IT industry revenue, 7.5% of GDP' },
                        { label: '56% Market Share', desc: 'India\'s share of the global outsourcing market' },
                        { label: '5.4M IT Workers', desc: 'Total IT workforce, largest in the world' },
                        { label: '$15-50/hr Rates', desc: 'Developer hourly rates, 60-80% below US rates' },
                      ].map(item => (
                        <div key={item.label} style={{ padding: '14px 16px', borderRadius: 12, background: 'rgba(96,165,250,0.06)' }}>
                          <p style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{item.label}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 1: Hourly Rates */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hourly-rates">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Hourly Rates by Role (2026)
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    Software development rates in India vary significantly based on the developer&apos;s experience, specialization, and the city they work from. Here is a detailed breakdown of current market rates:
                  </p>

                  <div style={{ overflowX: 'auto', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ padding: '14px 16px', textAlign: 'left', color: '#60a5fa', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Role</th>
                          <th style={{ padding: '14px 16px', textAlign: 'left', color: '#60a5fa', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Junior</th>
                          <th style={{ padding: '14px 16px', textAlign: 'left', color: '#60a5fa', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Mid-Level</th>
                          <th style={{ padding: '14px 16px', textAlign: 'left', color: '#60a5fa', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Senior</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { role: 'Frontend Developer (React/Vue)', junior: '$15-20/hr', mid: '$25-35/hr', senior: '$35-50/hr' },
                          { role: 'Backend Developer (Node/Python)', junior: '$15-22/hr', mid: '$25-38/hr', senior: '$38-50/hr' },
                          { role: 'Mobile Developer (Flutter/RN)', junior: '$18-25/hr', mid: '$28-40/hr', senior: '$40-55/hr' },
                          { role: 'Full-Stack Developer', junior: '$18-25/hr', mid: '$28-40/hr', senior: '$40-55/hr' },
                          { role: 'DevOps Engineer', junior: '$20-28/hr', mid: '$30-42/hr', senior: '$42-60/hr' },
                          { role: 'UI/UX Designer', junior: '$12-18/hr', mid: '$20-30/hr', senior: '$30-45/hr' },
                          { role: 'QA Engineer', junior: '$10-15/hr', mid: '$18-28/hr', senior: '$28-40/hr' },
                          { role: 'AI/ML Engineer', junior: '$22-30/hr', mid: '$35-50/hr', senior: '$50-75/hr' },
                          { role: 'Project Manager', junior: '$18-25/hr', mid: '$28-40/hr', senior: '$40-60/hr' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '12px 16px', color: '#ffffff', fontWeight: 600 }}>{row.role}</td>
                            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,0.5)' }}>{row.junior}</td>
                            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,0.5)' }}>{row.mid}</td>
                            <td style={{ padding: '12px 16px', color: '#22c55e', fontWeight: 600 }}>{row.senior}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 2: Global Comparison */}
                <div className="reveal" style={{ marginBottom: 56 }} id="global-comparison">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Global Cost Comparison
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    To understand India&apos;s value proposition, here is how its rates compare with other major software development markets:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { country: 'United States', range: '$100-250/hr', flag: '\u{1F1FA}\u{1F1F8}', color: '#60a5fa', savings: 'Baseline' },
                      { country: 'United Kingdom', range: '$80-200/hr', flag: '\u{1F1EC}\u{1F1E7}', color: '#a78bfa', savings: '10-20% savings' },
                      { country: 'Canada', range: '$80-180/hr', flag: '\u{1F1E8}\u{1F1E6}', color: '#f472b6', savings: '15-25% savings' },
                      { country: 'Australia', range: '$80-190/hr', flag: '\u{1F1E6}\u{1F1FA}', color: '#fbbf24', savings: '10-20% savings' },
                      { country: 'Eastern Europe', range: '$35-75/hr', flag: '\u{1F1F5}\u{1F1F1}', color: '#34d399', savings: '55-70% savings' },
                      { country: 'India', range: '$15-50/hr', flag: '\u{1F1EE}\u{1F1F3}', color: '#22c55e', savings: '60-80% savings' },
                    ].map(item => (
                      <div key={item.country} style={{
                        padding: '20px 24px', borderRadius: 16,
                        background: 'rgba(255,255,255,0.015)', border: `1px solid ${item.country === 'India' ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.06)'}`,
                        ...(item.country === 'India' ? { background: 'rgba(34,197,94,0.05)' } : {}),
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                          <span style={{ fontSize: 20 }}>{item.flag}</span>
                          <span style={{ fontSize: 15, fontWeight: 700, color: '#ffffff' }}>{item.country}</span>
                        </div>
                        <p style={{ fontSize: 22, fontWeight: 800, color: item.color, margin: '0 0 4px', letterSpacing: '-0.02em' }}>{item.range}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{item.savings}</p>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    The numbers speak for themselves: India offers 60-80% cost savings compared to the US and UK, with a developer talent pool that is unmatched in size. Indian-born engineers lead some of the world&apos;s largest technology companies&mdash;Sundar Pichai (Google), Satya Nadella (Microsoft), and Shantanu Narayen (Adobe)&mdash;demonstrating the caliber of talent the country produces.
                  </p>
                </div>

                {/* Section 3: Cost by Project Type */}
                <div className="reveal" style={{ marginBottom: 56 }} id="project-costs">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Cost by Project Type
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    Here is what different types of software projects typically cost when developed in India:
                  </p>

                  {[
                    {
                      type: 'Simple Mobile App (MVP)',
                      india: '$5,000 - $15,000',
                      us: '$25,000 - $75,000',
                      timeline: '6-10 weeks',
                      desc: 'Basic app with 5-10 screens, user auth, simple backend, single platform',
                      color: '#22c55e',
                    },
                    {
                      type: 'Medium-Complexity App',
                      india: '$15,000 - $50,000',
                      us: '$75,000 - $250,000',
                      timeline: '3-5 months',
                      desc: 'Multi-platform app with payment integration, real-time features, admin panel',
                      color: '#60a5fa',
                    },
                    {
                      type: 'Complex Enterprise App',
                      india: '$50,000 - $200,000',
                      us: '$250,000 - $1,000,000',
                      timeline: '6-12 months',
                      desc: 'Large-scale platform with microservices, AI/ML, multiple integrations, compliance',
                      color: '#a78bfa',
                    },
                    {
                      type: 'E-Commerce Platform',
                      india: '$10,000 - $60,000',
                      us: '$50,000 - $300,000',
                      timeline: '2-6 months',
                      desc: 'Online store with catalog, cart, payment, inventory, order management',
                      color: '#fbbf24',
                    },
                    {
                      type: 'SaaS Product',
                      india: '$30,000 - $150,000',
                      us: '$150,000 - $750,000',
                      timeline: '4-10 months',
                      desc: 'Multi-tenant platform with subscription billing, analytics, API, admin dashboard',
                      color: '#f472b6',
                    },
                    {
                      type: 'AI/ML Application',
                      india: '$25,000 - $120,000',
                      us: '$125,000 - $600,000',
                      timeline: '3-8 months',
                      desc: 'ML model development, training pipeline, API deployment, monitoring dashboard',
                      color: '#34d399',
                    },
                  ].map(project => (
                    <div key={project.type} className="reveal" style={{ marginBottom: 20 }}>
                      <div style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 20, padding: '24px 28px',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                          <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', margin: 0 }}>{project.type}</h3>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', padding: '4px 12px', borderRadius: 100, background: 'rgba(255,255,255,0.04)' }}>{project.timeline}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 16 }}>{project.desc}</p>
                        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                          <div style={{ padding: '12px 18px', borderRadius: 12, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', flex: 1, minWidth: 180 }}>
                            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', margin: '0 0 4px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>India Cost</p>
                            <p style={{ fontSize: 18, fontWeight: 800, color: '#22c55e', margin: 0 }}>{project.india}</p>
                          </div>
                          <div style={{ padding: '12px 18px', borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', flex: 1, minWidth: 180 }}>
                            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', margin: '0 0 4px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>US Cost</p>
                            <p style={{ fontSize: 18, fontWeight: 800, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{project.us}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section 4: City Comparison */}
                <div className="reveal" style={{ marginBottom: 56 }} id="city-comparison">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Costs by Indian City
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    Rates vary significantly between Indian cities due to cost of living differences and talent concentration:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { city: 'Bangalore', range: '$20-55/hr', tier: 'Tier 1 (Premium)', desc: 'Highest rates, deepest talent pool' },
                      { city: 'Mumbai', range: '$18-50/hr', tier: 'Tier 1', desc: 'Finance & enterprise focus' },
                      { city: 'Delhi/NCR', range: '$18-48/hr', tier: 'Tier 1', desc: 'Diverse tech scene, large agencies' },
                      { city: 'Hyderabad', range: '$16-45/hr', tier: 'Tier 1', desc: 'Growing hub, Microsoft/Google presence' },
                      { city: 'Pune', range: '$15-42/hr', tier: 'Tier 1-2', desc: 'Strong engineering talent, lower cost' },
                      { city: 'Chennai', range: '$15-40/hr', tier: 'Tier 1-2', desc: 'IT services hub, competitive rates' },
                      { city: 'Chandigarh', range: '$12-35/hr', tier: 'Tier 2', desc: 'Emerging hub, excellent value, quality talent' },
                      { city: 'Jaipur', range: '$10-30/hr', tier: 'Tier 2', desc: 'Lower cost, growing tech presence' },
                    ].map(city => (
                      <div key={city.city} style={{
                        padding: '18px 20px', borderRadius: 16,
                        background: city.city === 'Chandigarh' ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.015)',
                        border: `1px solid ${city.city === 'Chandigarh' ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.06)'}`,
                      }}>
                        <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{city.city}</p>
                        <p style={{ fontSize: 18, fontWeight: 800, color: city.city === 'Chandigarh' ? '#22c55e' : '#60a5fa', margin: '0 0 4px' }}>{city.range}</p>
                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', margin: '0 0 4px', fontWeight: 700, textTransform: 'uppercase' }}>{city.tier}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.4 }}>{city.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    padding: '20px 24px', borderRadius: 16,
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                  }}>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Pro Tip:</strong> Tier 2 cities like Chandigarh offer an exceptional sweet spot&mdash;engineering talent that rivals Bangalore (many developers relocate from Tier 1 cities for quality of life), but at 30-40% lower rates. This is exactly why Codazz chose Chandigarh for their India development center.
                    </p>
                  </div>
                </div>

                {/* Section 5: Why India */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-india">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Why India Dominates Software Outsourcing
                  </h2>

                  {[
                    { title: 'Massive Talent Pool', desc: 'India produces 1.5 million engineering graduates annually and has 5.4 million active IT professionals. No other country comes close to this scale. You can find specialists in virtually any technology, from legacy systems to cutting-edge AI/ML.' },
                    { title: 'English Proficiency', desc: 'India is the world\'s second-largest English-speaking country. Most Indian developers are fluent in English, eliminating the communication barriers that plague other outsourcing destinations like China, Japan, or non-English European countries.' },
                    { title: 'Time Zone Overlap', desc: 'India (IST, GMT+5:30) offers working hour overlap with both the US (morning hours overlap with US evening) and Europe (afternoon overlap). Many Indian teams offer flexible hours to maximize overlap with Western clients.' },
                    { title: 'Proven Track Record', desc: 'India\'s IT industry has been serving global clients for 30+ years. Companies like TCS, Infosys, and Wipro have proven that Indian engineering can meet the most demanding global standards. The track record is unmatched by any other outsourcing destination.' },
                    { title: 'Government Support', desc: 'The Indian government actively supports the IT sector through tax incentives (SEZ benefits), digital infrastructure investments, and education programs. The Digital India initiative has further accelerated the tech ecosystem.' },
                    { title: 'Cost of Living Advantage', desc: 'The cost of living in India is 60-70% lower than the US, which naturally translates to lower developer rates without sacrificing quality of life for engineers. This structural advantage is sustainable and not a race-to-the-bottom pricing strategy.' },
                  ].map((reason, i) => (
                    <div key={i} style={{
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      marginBottom: 12,
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{reason.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{reason.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Section 6: Codazz Advantage */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz-advantage">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />

                    <h2 style={{
                      fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', marginBottom: 24, position: 'relative', zIndex: 1,
                    }}>
                      The Codazz Advantage: Canadian HQ + India Dev Center
                    </h2>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      The biggest challenge with outsourcing to India is not quality&mdash;it is trust, communication, and IP protection. This is exactly why the hybrid model exists, and why Codazz has perfected it.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 24, position: 'relative', zIndex: 1 }}>
                      {[
                        { title: 'Canadian Headquarters (Edmonton)', items: ['Canadian IP protection laws', 'North American contract enforcement', 'Local project management', 'Same-timezone client meetings', 'Western business standards'] },
                        { title: 'India Dev Center (Chandigarh)', items: ['World-class engineering talent', 'Tier 2 city pricing advantage', 'Scalable team deployment', 'Full-stack capabilities', '60-70% cost savings vs North America'] },
                      ].map(col => (
                        <div key={col.title} style={{
                          padding: '20px 24px', borderRadius: 16,
                          background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)',
                        }}>
                          <h4 style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', marginBottom: 12 }}>{col.title}</h4>
                          <ul style={{ margin: 0, padding: '0 0 0 18px', listStyle: 'disc' }}>
                            {col.items.map(item => (
                              <li key={item} style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      This model gives clients the best of both worlds: the cost efficiency and engineering depth of India, wrapped in the legal protections, communication standards, and project management rigor of a North American company. With 500+ successful product launches, Codazz has proven this model works at scale.
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
                        500+ Product Launches &bull; Canadian IP Protection &bull; India Engineering Excellence &bull; 60-70% Cost Savings
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section 7: Hidden Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hidden-costs">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Hidden Costs to Watch Out For
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    The hourly rate is only part of the equation. Here are hidden costs that can significantly impact your total project budget when outsourcing to India:
                  </p>

                  {[
                    { title: 'Communication Overhead', desc: 'Poor English skills, cultural misunderstandings, and timezone gaps can add 15-25% to project timelines. Mitigation: Choose a company with Western project management (like Codazz\'s Canadian HQ model).' },
                    { title: 'Scope Creep', desc: 'Vague requirements lead to constant revisions. Indian agencies that bill hourly may not flag scope issues proactively. Mitigation: Invest in detailed specifications upfront and choose a partner that offers fixed-price milestones.' },
                    { title: 'Quality Assurance', desc: 'Cutting QA costs is the most common mistake. Budget an additional 15-20% for thorough testing, especially for cross-device and cross-browser compatibility. Mitigation: Ensure your partner includes dedicated QA in their team.' },
                    { title: 'Post-Launch Maintenance', desc: 'Budget 15-20% of the initial development cost annually for maintenance, bug fixes, server costs, and updates. Many clients underestimate this ongoing cost.' },
                    { title: 'IP Protection', desc: 'Without proper contracts under strong legal jurisdictions, your code may not be fully protected. Mitigation: Work with a company headquartered in a country with strong IP laws (Canada, US, UK).' },
                  ].map((cost, i) => (
                    <div key={i} style={{
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(251,191,36,0.03)', border: '1px solid rgba(251,191,36,0.1)',
                      marginBottom: 12,
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fbbf24', marginBottom: 8 }}>{cost.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{cost.desc}</p>
                    </div>
                  ))}
                </div>

                {/* FAQ Section */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
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
                      {tableOfContents.map(item => (
                        <a key={item.id} href={`#${item.id}`} style={{
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
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Quick Stats */}
                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 16,
                    }}>Quick Comparison</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: '0 0 2px' }}>India Avg. Rate</p>
                        <p style={{ fontSize: 20, fontWeight: 800, color: '#22c55e', margin: 0 }}>$15-50/hr</p>
                      </div>
                      <div>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: '0 0 2px' }}>US Avg. Rate</p>
                        <p style={{ fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.4)', margin: 0 }}>$100-250/hr</p>
                      </div>
                      <div>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: '0 0 2px' }}>Your Savings</p>
                        <p style={{ fontSize: 20, fontWeight: 800, color: '#22c55e', margin: 0 }}>60-80%</p>
                      </div>
                    </div>
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
                      Leading engineering strategy at Codazz with dual operations in Canada and India. Has managed over 500+ product launches using the hybrid delivery model described in this guide.
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
                }}>Save 60-80% on Development</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to build with India&apos;s best?<br />Let&apos;s talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Codazz delivers world-class software with Canadian business standards and Indian engineering excellence. Get a free cost estimate for your project today.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Free Cost Estimate &rarr;
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
