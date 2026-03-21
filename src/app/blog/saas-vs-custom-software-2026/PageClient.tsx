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
  { id: 'overview', label: 'SaaS vs Custom Overview', emoji: '🔍' },
  { id: 'tco-analysis', label: 'Total Cost of Ownership', emoji: '💰' },
  { id: 'scalability', label: 'Scalability Comparison', emoji: '📈' },
  { id: 'customization', label: 'Customization & Control', emoji: '🔧' },
  { id: 'security', label: 'Security & Compliance', emoji: '🔒' },
  { id: 'vendor-lock-in', label: 'Vendor Lock-In Risks', emoji: '⚠️' },
  { id: 'decision-framework', label: 'Decision Framework', emoji: '🧭' },
  { id: 'hybrid-approach', label: 'Hybrid Approaches', emoji: '🔄' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'custom-vs-off-the-shelf-software', title: 'Custom vs Off-the-Shelf Software: Complete Guide', category: 'Business', readTime: '16 min' },
  { slug: 'enterprise-software-development-guide', title: 'Enterprise Software Development Guide', category: 'Development', readTime: '20 min' },
  { slug: 'saas-development-cost-usa', title: 'SaaS Development Cost in the USA', category: 'Cost Guide', readTime: '14 min' },
];

export default function SaasVsCustomSoftwareClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden', paddingTop: 'clamp(120px, 15vw, 160px)' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
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
              }}>Business Strategy</span>
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
                18 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              SaaS vs Custom Software 2026: Build or Subscribe?
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A data-driven comparison of SaaS subscriptions versus custom-built software. We break down total cost of ownership, scalability limits, security trade-offs, vendor lock-in risks, and provide a decision framework for 2026.
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
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(180,253,131,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT GRID ── */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* ── MAIN ARTICLE ── */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    The build-vs-buy decision has never been more nuanced. SaaS adoption has exploded&mdash;the global SaaS market hit $315 billion in 2025&mdash;but so has the demand for bespoke software that delivers genuine competitive advantage. Making the wrong call can cost your company millions in wasted spend, lost productivity, or technical debt.
                  </p>
                  <p>
                    This guide cuts through the vendor marketing and gives you a concrete framework for deciding when to subscribe to SaaS, when to build custom software, and when a hybrid approach is the smartest play. Every recommendation is grounded in real cost data and lessons learned from dozens of enterprise deployments.
                  </p>
                </div>

                {/* Section: Overview */}
                <h2 id="overview" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>SaaS vs Custom Software: The 2026 Landscape</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>Before diving into cost comparisons, let&apos;s define what we&apos;re comparing:</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }}>
                    <div style={{
                      background: 'rgba(255,255,255,0.03)', padding: 24, borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 12, marginTop: 0 }}>SaaS (Subscribe)</h4>
                      <ul style={{ paddingLeft: 16, margin: 0 }}>
                        <li style={{ marginBottom: 8 }}>Pre-built, multi-tenant software</li>
                        <li style={{ marginBottom: 8 }}>Monthly/annual subscription fee</li>
                        <li style={{ marginBottom: 8 }}>Vendor manages hosting, updates, security</li>
                        <li style={{ marginBottom: 8 }}>Limited customization via config/APIs</li>
                        <li style={{ marginBottom: 0 }}>Shared roadmap across all customers</li>
                      </ul>
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.03)', padding: 24, borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 12, marginTop: 0 }}>Custom (Build)</h4>
                      <ul style={{ paddingLeft: 16, margin: 0 }}>
                        <li style={{ marginBottom: 8 }}>Purpose-built for your workflows</li>
                        <li style={{ marginBottom: 8 }}>One-time dev cost + ongoing maintenance</li>
                        <li style={{ marginBottom: 8 }}>You own the code, data, and infrastructure</li>
                        <li style={{ marginBottom: 8 }}>Unlimited customization and integration</li>
                        <li style={{ marginBottom: 0 }}>Roadmap aligned to your business needs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>The 2026 landscape has shifted in important ways. AI-assisted development has reduced custom software build times by 30-40%. Meanwhile, SaaS pricing has increased 15-25% year-over-year as vendors push &ldquo;platform&rdquo; pricing tiers. The crossover point&mdash;where custom becomes cheaper than SaaS over a 3-5 year horizon&mdash;has moved significantly.</p>
                </div>

                {/* Section: TCO Analysis */}
                <h2 id="tco-analysis" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Total Cost of Ownership: The Real Numbers</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Most build-vs-buy analyses fail because they compare Year 1 costs only. SaaS looks cheaper upfront, but subscription fees compound. Custom software requires higher initial investment but flattens over time. Here&apos;s a realistic 5-year comparison for a mid-market CRM system:
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 24,
                    border: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontWeight: 600 }}>Cost Factor</th>
                          <th style={{ textAlign: 'right', padding: '12px 8px', color: '#b4fd83', fontWeight: 600 }}>SaaS (5yr)</th>
                          <th style={{ textAlign: 'right', padding: '12px 8px', color: '#b4fd83', fontWeight: 600 }}>Custom (5yr)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { factor: 'Licenses / Dev Cost', saas: '$450K-$750K', custom: '$150K-$300K' },
                          { factor: 'Implementation', saas: '$50K-$150K', custom: 'Included in dev' },
                          { factor: 'Customization / Integrations', saas: '$100K-$200K', custom: 'Included in dev' },
                          { factor: 'Infrastructure / Hosting', saas: 'Included', custom: '$30K-$60K' },
                          { factor: 'Maintenance & Updates', saas: 'Included', custom: '$75K-$150K' },
                          { factor: 'Training', saas: '$25K-$50K', custom: '$15K-$30K' },
                          { factor: '5-Year Total', saas: '$625K-$1.15M', custom: '$270K-$540K' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px 8px', color: row.factor === '5-Year Total' ? '#ffffff' : 'rgba(255,255,255,0.7)', fontWeight: row.factor === '5-Year Total' ? 700 : 400 }}>{row.factor}</td>
                            <td style={{ textAlign: 'right', padding: '12px 8px', color: row.factor === '5-Year Total' ? '#ffffff' : 'rgba(255,255,255,0.7)', fontWeight: row.factor === '5-Year Total' ? 700 : 400 }}>{row.saas}</td>
                            <td style={{ textAlign: 'right', padding: '12px 8px', color: row.factor === '5-Year Total' ? '#ffffff' : 'rgba(255,255,255,0.7)', fontWeight: row.factor === '5-Year Total' ? 700 : 400 }}>{row.custom}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.06)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.15)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>The Per-Seat Trap</h4>
                  <p style={{ margin: 0, fontSize: 15 }}>
                    SaaS per-seat pricing can spiral as your team grows. A 50-person team paying $150/user/month for a CRM spends $90K/year&mdash;$450K over 5 years in licenses alone. Custom software has zero marginal cost per user. If your team is growing rapidly, custom software&apos;s economics become compelling much faster.
                  </p>
                </div>

                {/* Section: Scalability */}
                <h2 id="scalability" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Scalability: Who Wins at Scale?</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Scalability has two dimensions: technical (can the system handle growing load?) and organizational (can the software adapt to changing processes?). SaaS and custom excel at different scales:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
                    {[
                      { title: 'SaaS Scales Effortlessly (to a Point)', detail: 'SaaS vendors handle infrastructure scaling automatically. You never worry about server capacity, database tuning, or load balancing. However, you hit hard limits: API rate limits, storage caps, row limits in databases, and feature gates on lower-tier plans force expensive upgrades.' },
                      { title: 'Custom Requires Investment but Has No Ceiling', detail: 'Custom software needs deliberate architectural planning for scale&mdash;horizontal scaling, caching layers, database sharding. But there are no artificial limits. You scale based on actual infrastructure costs, not vendor pricing tiers. At 10,000+ users, custom is often 3-5x cheaper to operate than equivalent SaaS.' },
                      { title: 'The Process Scalability Gap', detail: 'As your business evolves, SaaS forces you into its workflow model. Custom software adapts to your processes, not the other way around. Companies that outgrow SaaS workflow constraints often face painful migrations&mdash;retraining teams, moving data, and rebuilding integrations.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.title}</h4>
                        <p style={{ fontSize: 15, margin: 0 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Customization */}
                <h2 id="customization" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Customization &amp; Control</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Customization is where the build-vs-buy decision gets personal. Some businesses can thrive with 80% of a SaaS tool&apos;s features. Others need that last 20%&mdash;and it&apos;s the most expensive 20% you&apos;ll ever chase.
                  </p>
                  <ul style={{ paddingLeft: 24, marginTop: 16 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>SaaS Customization</strong> &mdash; Limited to configuration options, custom fields, workflow automation (Zapier/Make), and API integrations. Deep UI changes or proprietary business logic? Off the table. Many SaaS vendors charge 2-5x more for &ldquo;Enterprise&rdquo; plans that unlock advanced customization.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Custom Software Control</strong> &mdash; Every pixel, every workflow, every business rule is yours. Want an AI-powered lead scoring model unique to your industry? A custom approval workflow with 12 conditional branches? Integration with a legacy ERP from 2009? All possible, and the cost is predictable.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>The API Middle Ground</strong> &mdash; Many businesses start with SaaS and build custom middleware or dashboards that pull data via APIs. This works until the SaaS vendor changes their API (Salesforce deprecated their SOAP API), raises API rate limits, or gates API access behind enterprise pricing.</li>
                  </ul>
                </div>

                {/* Section: Security */}
                <h2 id="security" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Security &amp; Compliance</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Security is often cited as a reason to choose SaaS (&ldquo;they have dedicated security teams!&rdquo;). But the reality is more nuanced:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
                    {[
                      { title: 'SaaS Security: Shared Responsibility', detail: 'You inherit the vendor\'s security posture&mdash;good and bad. Major SaaS breaches (Okta 2023, Snowflake 2024) proved that even security-focused vendors get compromised. You also can\'t control encryption keys, audit logs, or data residency in most SaaS products.' },
                      { title: 'Custom Software: Full Control', detail: 'You choose encryption standards, key management, data residency, and access controls. Compliance (HIPAA, SOC 2, GDPR) is easier to prove when you control the entire stack. The tradeoff: you need competent security engineering, or you\'ll create worse vulnerabilities than any SaaS vendor.' },
                      { title: 'Data Sovereignty Matters', detail: 'Regulated industries (healthcare, finance, government) increasingly require data residency guarantees. Custom software lets you deploy in specific regions, use customer-managed encryption keys, and maintain full audit trails&mdash;capabilities many SaaS vendors still can\'t offer.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.title}</h4>
                        <p style={{ fontSize: 15, margin: 0 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Vendor Lock-In */}
                <h2 id="vendor-lock-in" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Vendor Lock-In: The Hidden Cost of SaaS</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Vendor lock-in is the most underestimated risk in SaaS adoption. Once your team&apos;s workflows, data, and integrations are embedded in a SaaS platform, switching costs become enormous:
                  </p>
                  <ul style={{ paddingLeft: 24, marginTop: 16 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Data Migration</strong> &mdash; Exporting data from SaaS is rarely clean. Proprietary fields, relationships, attachments, and historical audit trails often can&apos;t be exported at all. We&apos;ve seen migrations from Salesforce to custom CRMs take 3-6 months just for data cleanup.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Workflow Retraining</strong> &mdash; Your team has built muscle memory around the SaaS UI. Switching means 2-4 months of reduced productivity while people learn new tools. This cost is real but rarely included in TCO analyses.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Integration Rebuilding</strong> &mdash; Every Zapier automation, every API integration, every custom report needs to be rebuilt. Companies with 50+ integrations face $100K-$300K in integration migration costs alone.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Price Leverage</strong> &mdash; Once locked in, SaaS vendors know your switching costs. Annual price increases of 10-20% become standard. Custom software eliminates this leverage entirely&mdash;you own the code.</li>
                  </ul>
                </div>

                {/* Section: Decision Framework */}
                <h2 id="decision-framework" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Decision Framework: When to Build vs Subscribe</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>Use this framework to make the right call for each software need:</p>

                  <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
                    <div style={{
                      background: 'rgba(180,253,131,0.06)', padding: 24, borderRadius: 12,
                      border: '1px solid rgba(180,253,131,0.15)',
                    }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 12, marginTop: 0 }}>Choose SaaS When...</h4>
                      <ul style={{ paddingLeft: 16, margin: 0, fontSize: 15 }}>
                        <li style={{ marginBottom: 8 }}>The function is commodity (email, file storage, basic CRM)</li>
                        <li style={{ marginBottom: 8 }}>You have fewer than 20 users and limited budget</li>
                        <li style={{ marginBottom: 8 }}>You need to launch in days/weeks, not months</li>
                        <li style={{ marginBottom: 8 }}>The workflow is standardized across your industry</li>
                        <li style={{ marginBottom: 0 }}>You don&apos;t have engineering resources for maintenance</li>
                      </ul>
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.03)', padding: 24, borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 12, marginTop: 0 }}>Choose Custom When...</h4>
                      <ul style={{ paddingLeft: 16, margin: 0, fontSize: 15 }}>
                        <li style={{ marginBottom: 8 }}>The software IS your competitive advantage</li>
                        <li style={{ marginBottom: 8 }}>You have 50+ users and per-seat pricing becomes prohibitive</li>
                        <li style={{ marginBottom: 8 }}>Compliance requirements demand full data control</li>
                        <li style={{ marginBottom: 8 }}>Your workflow has unique logic no SaaS supports</li>
                        <li style={{ marginBottom: 0 }}>You need deep integrations with proprietary/legacy systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section: Hybrid */}
                <h2 id="hybrid-approach" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The Hybrid Approach: Best of Both Worlds</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    The smartest companies in 2026 aren&apos;t choosing between SaaS and custom&mdash;they&apos;re building a hybrid stack. Here&apos;s what that looks like:
                  </p>
                  <ul style={{ paddingLeft: 24, marginTop: 16 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>SaaS for Commodity Functions</strong> &mdash; Use Slack for chat, Google Workspace for email/docs, Stripe for payments, and Datadog for monitoring. These are solved problems where SaaS delivers superior value.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Custom for Core Differentiators</strong> &mdash; Build custom software for anything that directly drives revenue or creates competitive advantage: your customer-facing product, proprietary analytics dashboard, custom CRM with industry-specific workflows, or internal operations platform.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Integration Layer</strong> &mdash; Build a custom middleware/API layer that connects your SaaS tools with your custom software. This gives you a unified data model and prevents vendor lock-in on any single SaaS tool.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Data Warehouse</strong> &mdash; Centralize data from all sources (SaaS + custom) into your own data warehouse. This ensures you always own your data regardless of which SaaS tools you switch.</li>
                  </ul>
                </div>

                {/* Section: Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Teams Choose Codazz for Custom Software</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    At Codazz, we help businesses make the build-vs-buy decision with data, not gut feeling. When custom software is the right call, we deliver production-grade solutions in weeks, not quarters&mdash;powered by AI-assisted development and battle-tested architectures.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
                    {[
                      { title: 'TCO Analysis', desc: 'We model your 5-year total cost of ownership for SaaS vs custom before writing a single line of code. No surprises.' },
                      { title: 'Rapid Build', desc: 'AI-assisted development and component libraries mean your custom software launches in 6-12 weeks, not 6-12 months.' },
                      { title: 'Migration Experts', desc: 'Moving off SaaS? We handle data migration, integration rebuilding, and team training as a turnkey package.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.title}</h4>
                        <p style={{ fontSize: 14, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'Is custom software always more expensive than SaaS?', a: 'No. Custom software has a higher upfront cost but lower long-term cost. For teams of 50+ users, custom software typically becomes cheaper than SaaS within 2-3 years. For teams under 10 using commodity tools (email, basic CRM), SaaS is almost always cheaper.' },
                  { q: 'How long does it take to build custom software?', a: 'An MVP takes 8-16 weeks depending on complexity. A full-featured enterprise application takes 4-8 months. AI-assisted development in 2026 has reduced these timelines by 30-40% compared to 2023. The key is starting with a focused MVP and iterating based on real user feedback.' },
                  { q: 'What about SaaS for regulated industries like healthcare or finance?', a: 'Many SaaS tools are HIPAA-compliant or SOC 2 certified, but compliance is shared responsibility. You\'re still liable for how you configure the tool, manage access, and handle data. Custom software gives you full control over compliance implementation, audit trails, and data residency&mdash;which is why most large healthcare and financial organizations build custom for core workflows.' },
                  { q: 'Can I start with SaaS and migrate to custom later?', a: 'Yes, and this is a common strategy. Start with SaaS to validate your workflow and business model. When you hit SaaS limits (cost, customization, scale), migrate to custom. The key is planning for this from day one: keep your data portable, avoid deep platform-specific customizations, and document your workflows independently of the SaaS tool.' },
                  { q: 'What\'s the biggest mistake companies make in the build-vs-buy decision?', a: 'Comparing Year 1 costs only. SaaS looks cheap in Year 1 because you\'re comparing a subscription fee to an entire development project. The right comparison is 3-5 year TCO including per-seat costs at projected team size, integration costs, training, and the cost of vendor lock-in. The second biggest mistake: building custom software for commodity functions where SaaS is genuinely superior.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)' }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Not Sure Whether to Build or Subscribe?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free TCO analysis comparing SaaS subscriptions to a custom build for your specific use case. We&apos;ll give you the real numbers&mdash;no sales pitch.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Get Your Free TCO Analysis
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  {/* Table of Contents */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '8px 0', fontSize: 14,
                            color: activeSection === section.id ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #b4fd83' : '2px solid transparent',
                            paddingLeft: 12,
                          }}
                        >
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Related Posts */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          style={{
                            display: 'block', padding: 16,
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 12, textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{ fontSize: 11, color: '#b4fd83', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
