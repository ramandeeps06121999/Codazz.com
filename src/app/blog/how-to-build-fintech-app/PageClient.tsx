'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';

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
  { id: 'fintech-landscape', label: 'FinTech Landscape 2026', emoji: '🏦' },
  { id: 'types', label: 'Types of FinTech Apps', emoji: '📱' },
  { id: 'step-by-step', label: 'Step-by-Step Guide', emoji: '🛠️' },
  { id: 'features', label: 'Must-Have Features', emoji: '✅' },
  { id: 'compliance', label: 'Compliance & Security', emoji: '🔒' },
  { id: 'tech-stack', label: 'Technology Stack', emoji: '⚙️' },
  { id: 'costs', label: 'Costs & Timeline', emoji: '💰' },
  { id: 'mistakes', label: 'Common Mistakes', emoji: '⚠️' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
];

export default function HowToBuildFintechAppClient() {
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

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&h=675&fit=crop"
              alt="FinTech application development and digital banking"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 8, textAlign: 'center' }}>
              Photo by <a href="https://unsplash.com/@tier" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Tier</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
            </p>
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
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
              }}>FinTech</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
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
              How to Build a FinTech App in 2026: Complete Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              From regulatory compliance to payment integrations, everything you need to build a secure, scalable financial technology application.
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
                    The global FinTech market is projected to hit $917 billion by 2027.
                  </p>
                  <p>
                    Neobanks are replacing traditional banks. Payment apps are replacing cash. Robo-advisors are replacing financial planners. And the companies building these apps are capturing enormous value.
                  </p>
                  <p>
                    But FinTech is not like building a social media app or an e-commerce store. One security breach and your company is done. One compliance violation and regulators shut you down.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    This guide covers everything: compliance, security, features, tech stack, and exactly how much it costs.
                  </p>
                  <p>
                    At Codazz, we&apos;ve built <strong style={{ color: '#ffffff' }}>40+ financial applications</strong> across banking, payments, lending, and investment platforms. Here&apos;s the blueprint.
                  </p>
                </div>

                {/* FinTech Landscape */}
                <h2 id="fintech-landscape" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The FinTech Landscape in 2026</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop"
                    alt="Financial technology and digital banking landscape"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@maxim_berg" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Maxim Berg</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>$917B</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Global FinTech Market (2027)</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>75%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Adults Using FinTech Apps</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>26%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>YoY Growth Rate</p>
                  </div>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p><strong style={{ color: '#ffffff' }}>Key trends driving FinTech in 2026:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Embedded Finance:</strong> Non-financial companies offering banking services (Shopify Balance, Uber Money)</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>AI-Powered Risk Assessment:</strong> Real-time fraud detection, credit scoring, and personalized financial advice</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Open Banking APIs:</strong> Plaid, Yodlee, and MX enabling seamless data sharing between institutions</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>DeFi Integration:</strong> Traditional apps adding crypto wallets, staking, and DeFi protocols</li>
                    <li><strong style={{ color: '#ffffff' }}>Regulatory Sandboxes:</strong> Governments creating safe spaces for FinTech innovation</li>
                  </ul>
                </div>

                {/* Types */}
                <h2 id="types" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Types of FinTech Apps</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Type</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Examples</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Complexity</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Cost Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Neobank</strong></td>
                        <td style={{ padding: '12px 8px' }}>Chime, N26, Revolut</td>
                        <td style={{ padding: '12px 8px' }}>Very High</td>
                        <td style={{ padding: '12px 8px' }}>$200K-$500K+</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Payments</strong></td>
                        <td style={{ padding: '12px 8px' }}>Venmo, Cash App, Zelle</td>
                        <td style={{ padding: '12px 8px' }}>High</td>
                        <td style={{ padding: '12px 8px' }}>$120K-$350K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Trading/Investment</strong></td>
                        <td style={{ padding: '12px 8px' }}>Robinhood, Wealthfront</td>
                        <td style={{ padding: '12px 8px' }}>Very High</td>
                        <td style={{ padding: '12px 8px' }}>$250K-$600K+</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Lending</strong></td>
                        <td style={{ padding: '12px 8px' }}>SoFi, LendingClub</td>
                        <td style={{ padding: '12px 8px' }}>High</td>
                        <td style={{ padding: '12px 8px' }}>$150K-$400K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Insurance (InsurTech)</strong></td>
                        <td style={{ padding: '12px 8px' }}>Lemonade, Root</td>
                        <td style={{ padding: '12px 8px' }}>Medium-High</td>
                        <td style={{ padding: '12px 8px' }}>$100K-$300K</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Crypto/DeFi</strong></td>
                        <td style={{ padding: '12px 8px' }}>Coinbase, MetaMask</td>
                        <td style={{ padding: '12px 8px' }}>Very High</td>
                        <td style={{ padding: '12px 8px' }}>$200K-$500K+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Step-by-Step */}
                <h2 id="step-by-step" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step-by-Step: Building a FinTech App</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop"
                    alt="Financial planning and development roadmap"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@homajob" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Scott Graham</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                {[
                  { num: 1, title: 'Define Your Niche & Value Proposition', desc: 'Don\'t build "another payment app." Find the gap. Maybe it\'s cross-border payments for freelancers. Maybe it\'s micro-investing for Gen Z. The more specific, the better.', detail: 'Research competitors, identify underserved segments, and validate with 50+ potential users before writing a single line of code.' },
                  { num: 2, title: 'Understand Regulatory Requirements', desc: 'This is where most founders fail. FinTech is heavily regulated. You need to understand which licenses and registrations apply BEFORE you start building.', detail: 'Money Transmitter License (MTL) in the US, FCA authorization in the UK, or partner with a licensed bank via Banking-as-a-Service (BaaS) providers like Unit, Synapse, or Treasury Prime.' },
                  { num: 3, title: 'Choose Your Banking Infrastructure', desc: 'You have three options: get your own banking license (18-24 months, $1M+), partner with a sponsor bank, or use a BaaS platform.', detail: 'Most startups choose BaaS. Providers like Unit, Bond, and Galileo give you APIs for accounts, cards, payments, and KYC out of the box.' },
                  { num: 4, title: 'Design Security Architecture First', desc: 'In FinTech, security isn\'t a feature. It\'s the foundation. Design your security architecture before building any features.', detail: 'Implement end-to-end encryption, tokenization for card data, multi-factor authentication, and biometric verification. Plan for SOC2 Type II compliance from Day 1.' },
                  { num: 5, title: 'Build KYC/AML Onboarding', desc: 'Know Your Customer (KYC) and Anti-Money Laundering (AML) checks are legally required. Make them seamless.', detail: 'Use providers like Alloy, Jumio, or Onfido for identity verification. Implement document scanning, facial recognition, and sanctions screening. Average onboarding should take under 3 minutes.' },
                  { num: 6, title: 'Implement Core Financial Features', desc: 'Start with the minimum set of financial features that deliver your core value proposition. You can always add more later.', detail: 'For a neobank MVP: account creation, fund transfers, card issuance, transaction history, and push notifications. For payments: send/receive money, QR codes, and split bills.' },
                  { num: 7, title: 'Integrate Payment Processing', desc: 'Choose your payment rails carefully. This decision is hard to reverse later.', detail: 'Stripe for card processing, Plaid for bank connections, Dwolla for ACH transfers, and Marqeta for card issuing. Each has different fee structures, settlement times, and geographic coverage.' },
                  { num: 8, title: 'Build Real-Time Fraud Detection', desc: 'Financial fraud costs the industry $32 billion annually. Your app needs multi-layered fraud prevention.', detail: 'Implement transaction monitoring, velocity checks, device fingerprinting, and behavioral analytics. Use ML models for anomaly detection. Services like Sardine, Unit21, or Featurespace can accelerate this.' },
                  { num: 9, title: 'Set Up Monitoring & Audit Trails', desc: 'Regulators will audit you. You need comprehensive logging of every financial transaction and user action.', detail: 'Implement immutable audit logs, real-time transaction monitoring dashboards, automated suspicious activity reporting (SAR), and regular compliance reports.' },
                  { num: 10, title: 'Conduct Security Penetration Testing', desc: 'Before going live, get a third-party penetration test. This is non-negotiable for financial applications.', detail: 'Hire a certified security firm (CREST, OSCP) for both black-box and white-box testing. Budget $15K-30K for a thorough pen test. Fix all critical and high-severity findings before launch.' },
                  { num: 11, title: 'Launch with a Controlled Beta', desc: 'Don\'t do a public launch immediately. Start with a waitlist and invite-only beta to control risk.', detail: 'Onboard 100-500 beta users. Monitor every transaction manually for the first 2 weeks. Gather feedback, fix issues, and gradually expand access.' },
                  { num: 12, title: 'Scale with Compliance', desc: 'As you grow, compliance requirements increase. Each new state or country means new regulations.', detail: 'Build a compliance team or partner with RegTech companies. Automate regulatory reporting. Plan for regular audits and maintain your SOC2 certification annually.' },
                ].map((step) => (
                  <div key={step.num} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{
                        minWidth: 40, height: 40, borderRadius: '50%',
                        background: 'rgba(180,253,131,0.15)', border: '1px solid rgba(180,253,131,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16, fontWeight: 700, color: '#b4fd83',
                      }}>{step.num}</div>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{step.title}</h3>
                        <p style={{ fontSize: 15, marginBottom: 8 }}>{step.desc}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{step.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Features */}
                <h2 id="features" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Must-Have FinTech Features</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Security & Auth</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>Biometric authentication (Face ID / fingerprint)</li>
                      <li style={{ marginBottom: 6 }}>Multi-factor authentication (MFA)</li>
                      <li style={{ marginBottom: 6 }}>Session management & device tracking</li>
                      <li>End-to-end encryption</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Core Banking</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>Account creation & KYC verification</li>
                      <li style={{ marginBottom: 6 }}>Fund transfers (ACH, wire, P2P)</li>
                      <li style={{ marginBottom: 6 }}>Virtual & physical card issuance</li>
                      <li>Real-time transaction notifications</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Smart Features</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>AI-powered spending insights</li>
                      <li style={{ marginBottom: 6 }}>Budget tracking & alerts</li>
                      <li style={{ marginBottom: 6 }}>Bill pay automation</li>
                      <li>Personalized financial recommendations</li>
                    </ul>
                  </div>
                </div>

                {/* Compliance */}
                <h2 id="compliance" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Compliance & Security Requirements</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=500&fit=crop"
                    alt="Security and compliance in financial technology"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@flyd" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>FlyD</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,107,107,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,107,107,0.2)',
                }}>
                  <h3 style={{ color: '#ff6b6b', fontSize: 18, marginBottom: 16, marginTop: 0 }}>Non-Negotiable Compliance Standards</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Standard</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>What It Covers</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Cost to Comply</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>PCI DSS Level 1</strong></td>
                        <td style={{ padding: '12px 8px' }}>Card data storage & processing</td>
                        <td style={{ padding: '12px 8px' }}>$50K-200K/year</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>SOC 2 Type II</strong></td>
                        <td style={{ padding: '12px 8px' }}>Security, availability, processing integrity</td>
                        <td style={{ padding: '12px 8px' }}>$30K-100K/year</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>KYC/AML</strong></td>
                        <td style={{ padding: '12px 8px' }}>Identity verification, anti-money laundering</td>
                        <td style={{ padding: '12px 8px' }}>$1-5 per verification</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>GDPR / CCPA</strong></td>
                        <td style={{ padding: '12px 8px' }}>User data privacy & protection</td>
                        <td style={{ padding: '12px 8px' }}>$10K-50K setup</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>State MTLs (US)</strong></td>
                        <td style={{ padding: '12px 8px' }}>Money transmission licensing per state</td>
                        <td style={{ padding: '12px 8px' }}>$5K-50K per state</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                    Pro Tip: Use a BaaS provider to inherit their compliance certifications. This saves 6-12 months and $200K+ in compliance setup costs. You operate under their banking license while building your brand.
                  </p>
                </div>

                {/* Tech Stack */}
                <h2 id="tech-stack" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Recommended Technology Stack</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Layer</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Technology</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Mobile</strong></td>
                        <td style={{ padding: '12px 8px' }}>React Native or Flutter</td>
                        <td style={{ padding: '12px 8px' }}>Cross-platform, native security APIs</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Backend</strong></td>
                        <td style={{ padding: '12px 8px' }}>Node.js / Go / Java</td>
                        <td style={{ padding: '12px 8px' }}>High throughput, strong typing</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Database</strong></td>
                        <td style={{ padding: '12px 8px' }}>PostgreSQL + Redis</td>
                        <td style={{ padding: '12px 8px' }}>ACID compliance, caching</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Banking APIs</strong></td>
                        <td style={{ padding: '12px 8px' }}>Plaid, Unit, Galileo</td>
                        <td style={{ padding: '12px 8px' }}>Bank connections, account management</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Payments</strong></td>
                        <td style={{ padding: '12px 8px' }}>Stripe, Marqeta, Dwolla</td>
                        <td style={{ padding: '12px 8px' }}>Cards, ACH, real-time payments</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>KYC/AML</strong></td>
                        <td style={{ padding: '12px 8px' }}>Alloy, Jumio, Onfido</td>
                        <td style={{ padding: '12px 8px' }}>Identity verification, compliance</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Cloud</strong></td>
                        <td style={{ padding: '12px 8px' }}>AWS (preferred) or GCP</td>
                        <td style={{ padding: '12px 8px' }}>SOC2 compliant, financial services focus</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Monitoring</strong></td>
                        <td style={{ padding: '12px 8px' }}>Datadog, PagerDuty</td>
                        <td style={{ padding: '12px 8px' }}>Real-time alerts, incident management</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Costs */}
                <h2 id="costs" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Costs & Timeline</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
                    alt="Budget and cost analysis for FinTech development"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@kmuza" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Carlos Muza</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Phase</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Duration</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Research & Compliance Planning</strong></td>
                        <td style={{ padding: '12px 8px' }}>4-6 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$15K-30K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>UI/UX Design</strong></td>
                        <td style={{ padding: '12px 8px' }}>4-8 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$20K-50K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Core Development</strong></td>
                        <td style={{ padding: '12px 8px' }}>12-20 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$80K-250K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Security & Pen Testing</strong></td>
                        <td style={{ padding: '12px 8px' }}>3-4 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$15K-40K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Compliance Certification</strong></td>
                        <td style={{ padding: '12px 8px' }}>4-8 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$30K-100K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Beta Testing & Launch</strong></td>
                        <td style={{ padding: '12px 8px' }}>4-6 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$10K-25K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 600 }}>
                        <td style={{ padding: '12px 8px', color: '#ffffff' }}>Total (MVP)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>6-9 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>$80K-250K</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px', color: '#ffffff' }}>Total (Full Product)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>9-18 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>$200K-500K+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mistakes */}
                <h2 id="mistakes" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Common FinTech Mistakes to Avoid</h2>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Skipping Compliance Research:</strong> Building first, then discovering you need a money transmitter license in 49 states. Cost: 12+ months of delay and $500K+ in legal fees.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Storing Card Data Yourself:</strong> Handling raw card numbers instead of using tokenization. This triggers PCI DSS Level 1 requirements ($200K/year). Use Stripe or Marqeta tokens instead.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Weak KYC Flow:</strong> Making identity verification a 15-minute ordeal. Users abandon. Best-in-class KYC takes under 2 minutes with photo ID scanning + selfie match.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>No Fraud Monitoring:</strong> Launching without transaction monitoring. One fraud ring can cost you $100K+ before you detect it. Implement velocity checks and anomaly detection from Day 1.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Over-Building the MVP:</strong> Trying to compete with Chase on features from Day 1. Start with 3-5 core features that solve one financial problem exceptionally well.</li>
                    <li><strong style={{ color: '#ff6b6b' }}>Ignoring Reconciliation:</strong> Not building automated ledger reconciliation. Manual reconciliation breaks at 1,000+ daily transactions. Build automated reconciliation from the start.</li>
                  </ul>
                </div>

                {/* Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Choose Codazz for FinTech Development</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>40+ FinTech Projects</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We&apos;ve built neobanks, payment platforms, lending apps, and investment tools. We know the regulatory landscape inside out.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Compliance-First Approach</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We design for PCI DSS, SOC2, and KYC/AML compliance from Day 1. No expensive refactors later.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>BaaS Integration Experts</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Deep experience with Unit, Plaid, Stripe, Marqeta, and other financial infrastructure providers.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Security-Obsessed Team</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Dedicated security engineers on every FinTech project. Pen testing, code reviews, and vulnerability scanning are standard.</p>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'Do I need a banking license to build a FinTech app?', a: 'Not necessarily. Most FinTech startups partner with licensed banks through Banking-as-a-Service (BaaS) providers like Unit, Synapse, or Treasury Prime. This lets you operate under their license while building your brand. Getting your own license takes 18-24 months and costs $1M+.' },
                  { q: 'How long does it take to get PCI DSS certified?', a: 'PCI DSS Level 1 certification typically takes 3-6 months. However, if you use tokenized payment processors like Stripe or Marqeta, you may only need PCI DSS Level 4 (a self-assessment questionnaire), which takes weeks instead of months.' },
                  { q: 'What is the minimum budget for a FinTech MVP?', a: 'A basic FinTech MVP (payment app or simple neobank) starts at $80K-120K with a BaaS provider. A full-featured platform with custom compliance infrastructure runs $200K-500K+. The biggest variable is compliance scope.' },
                  { q: 'Can I build a FinTech app with React Native or Flutter?', a: 'Yes. Both frameworks support the security features FinTech apps need (biometric auth, secure storage, encryption). React Native has a slight edge in the FinTech ecosystem due to larger community and more financial service libraries.' },
                  { q: 'How do I handle multi-state money transmission licensing?', a: 'You have three options: (1) Get individual state licenses ($5K-50K per state, 6-18 months each), (2) Use a BaaS provider whose bank partner covers all states, or (3) Start in states with exemptions and expand gradually.' },
                  { q: 'What ongoing costs should I budget for?', a: 'Plan for $15K-50K/month covering: cloud hosting ($3K-10K), BaaS platform fees ($2K-8K), compliance maintenance ($5K-15K), monitoring tools ($1K-3K), and customer support ($5K-15K). These scale with transaction volume.' },
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
                    Ready to Build Your FinTech App?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free consultation with our FinTech development team. We&apos;ll review your concept, map out compliance requirements, and provide a detailed project estimate.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Get Your Free FinTech Consultation
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
