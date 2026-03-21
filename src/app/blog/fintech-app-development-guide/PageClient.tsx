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
  { id: 'market-overview', label: 'Market Overview', emoji: '📊' },
  { id: 'fintech-categories', label: 'Fintech Categories', emoji: '🏦' },
  { id: 'open-banking', label: 'Open Banking & APIs', emoji: '🔗' },
  { id: 'kyc-aml-compliance', label: 'KYC / AML Compliance', emoji: '🔒' },
  { id: 'pci-dss-security', label: 'PCI DSS & Security', emoji: '🛡️' },
  { id: 'crypto-integration', label: 'Crypto & Web3', emoji: '₿' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-to-build-fintech-app', title: 'How to Build a Fintech App: Step-by-Step Guide', category: 'Fintech', readTime: '12 min' },
  { slug: 'top-fintech-apps-2026', title: 'Top Fintech Apps to Watch in 2026', category: 'Fintech', readTime: '9 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026: The Complete Guide', category: 'AI/ML', readTime: '18 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a fintech app in 2026?',
    a: 'Fintech app development costs range from $100,000 for a focused payment or budgeting app to $1M+ for a full neobank with core banking, lending, investment, and crypto capabilities. The primary cost drivers are regulatory compliance work (KYC/AML systems, PCI DSS certification), banking infrastructure partnerships (sponsor bank relationships, payment processor integrations), and the security infrastructure needed to handle financial data at scale. Unlike most app categories, fintech has significant pre-launch compliance costs that exist before a line of code is written.',
  },
  {
    q: 'Do I need a banking license to build a fintech app?',
    a: 'It depends on what your app does. Payment facilitators, money transmitters, and apps that hold customer funds require money transmitter licenses (MTL) in each US state you operate in — a process that takes 1-2 years and costs $500K-$2M in total. Most fintech startups avoid this by partnering with a sponsor bank (like Bancorp, Sutton Bank, or Blue Ridge Bank) that provides the banking charter and regulatory coverage. You build the product; they hold the licenses and regulatory relationships.',
  },
  {
    q: 'What is the difference between PCI DSS Level 1, 2, 3, and 4?',
    a: 'PCI DSS compliance levels are based on annual transaction volume. Level 4 (under 20,000 e-commerce transactions/year) requires a self-assessment questionnaire. Level 3 (20,000-1M) requires a quarterly network scan plus SAQ. Level 2 (1M-6M) adds an annual on-site audit. Level 1 (over 6M transactions/year) requires a full Report on Compliance (ROC) from a Qualified Security Assessor (QSA). Most fintech startups launch as Level 4 and graduate to higher levels as they scale. Using a PCI-compliant payment processor like Stripe or Braintree dramatically reduces your own PCI scope.',
  },
  {
    q: 'How do I integrate with Plaid for open banking?',
    a: 'Plaid provides APIs to connect your app to a user\'s bank account for account verification, balance checking, transaction history, and ACH initiation. Integration takes 2-4 weeks: register for Plaid developer access, implement the Plaid Link SDK (a pre-built UI that handles OAuth flows with 12,000+ financial institutions), and call Plaid\'s backend APIs to retrieve financial data. Plaid pricing starts at $0.30-$1.50 per successful connection per month depending on the product used. For international open banking, look at TrueLayer (UK/EU) and Yapily.',
  },
  {
    q: 'What KYC provider should I use for my fintech app?',
    a: 'The top KYC/identity verification providers are Jumio, Onfido, Persona, Socure, and Stripe Identity. For early-stage fintech apps, Stripe Identity (if you are already using Stripe) or Persona (developer-friendly, composable workflows) are the easiest to integrate. For regulated financial services requiring full AML screening plus adverse media checks, Jumio or Onfido are the enterprise-grade choices. Budget $1-$5 per verification depending on the depth of checks. Layer in AML transaction monitoring via Sardine, Unit21, or ComplyAdvantage.',
  },
];

export default function FintechAppDevelopmentGuideClient() {
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

        {/* -- FEATURED IMAGE -- */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/fintech-app-development-guide.jpg"
              alt="fintech app development guide"
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
              <Link href="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>Fintech</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                17 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              Fintech App Development Guide 2026: Build Payment, Banking & Investment Apps
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              From open banking APIs and KYC/AML compliance to PCI DSS security, crypto integration, and cost breakdowns. Everything you need to build a fintech app that regulators and users trust.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, color: '#ffffff' }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[{ label: 'Twitter', icon: '𝕏' }, { label: 'LinkedIn', icon: 'in' }].map(s => (
                  <button key={s.label} style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{ padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)', color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)', fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
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

              <article>

                {/* Market Overview */}
                <div className="reveal" style={{ marginBottom: 56 }} id="market-overview">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The Fintech Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global fintech market is projected to reach $1.5 trillion by 2030, growing at 23% annually. Over 2.5 billion people worldwide now use at least one fintech app, and that number is accelerating as banking infrastructure in emerging markets leapfrogs directly to mobile. In the United States, 65% of adults use digital-only banking or payment services weekly, and traditional banks have lost over $1 trillion in deposits to fintech challengers over the past five years.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But fintech is also the most regulated category of software development. Every financial product — payments, lending, investing, insurance — is subject to a complex web of federal and state regulations. Getting it wrong does not just mean a bad user experience; it means regulatory action, fines, and forced shutdowns. The developers who succeed in fintech are those who treat compliance as a feature, not an afterthought.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Key opportunity in 2026:</strong> Embedded finance — integrating financial services into non-financial apps — is the fastest growing segment. Platforms in e-commerce, gig economy, healthcare, and SaaS are embedding payments, insurance, lending, and banking directly into their user workflows using APIs from providers like Stripe, Unit, and Synapse. This is creating a $7 trillion market opportunity.
                    </p>
                  </div>
                </div>

                {/* Fintech Categories */}
                <div className="reveal" style={{ marginBottom: 56 }} id="fintech-categories">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Fintech App Categories: What Are You Building?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Fintech is not a monolith. The architecture, compliance requirements, and infrastructure you need depend entirely on which category you are building. Here are the major categories and their defining characteristics:
                  </p>
                  <div style={{ display: 'grid', gap: 16 }}>
                    {[
                      {
                        category: 'Neobanks / Challenger Banks',
                        examples: 'Chime, Revolut, N26, Monzo',
                        desc: 'Digital-first banking apps offering checking, savings, debit cards, and overdraft protection without physical branches. Require a sponsor bank partnership for FDIC insurance and regulatory coverage. Core features: real-time transaction notifications, fee-free ATM networks, automated savings, and sub-accounts.',
                        complexity: 'Very High',
                        license: 'Sponsor bank + MSB registration',
                      },
                      {
                        category: 'Payment Apps',
                        examples: 'PayPal, Cash App, Venmo, Zelle',
                        desc: 'P2P and merchant payment platforms for sending money, splitting bills, and accepting payments. Require money transmitter licenses in all 50 US states (or sponsor bank) and PCI DSS compliance. Real-time push-to-debit and RTP network connectivity are key differentiators.',
                        complexity: 'High',
                        license: 'MTL or sponsor bank',
                      },
                      {
                        category: 'Investment & Wealth Management',
                        examples: 'Robinhood, Acorns, Betterment, Wealthfront',
                        desc: 'Retail brokerage, robo-advisory, and fractional share investing apps. Require SEC broker-dealer registration or RIA registration. Custodian partnership (Apex Clearing, DriveWealth) required for securities custody. FINRA membership and ongoing compliance obligations.',
                        complexity: 'Very High',
                        license: 'SEC broker-dealer / RIA',
                      },
                      {
                        category: 'Lending Apps',
                        examples: 'SoFi, Affirm, Upstart, Klarna',
                        desc: 'Personal loans, BNPL (Buy Now Pay Later), student loan refinancing, and small business lending. Require lending licenses by state (or bank partnership), Truth in Lending Act compliance, Fair Lending obligations, and FCRA compliance for credit reporting.',
                        complexity: 'High',
                        license: 'State lending licenses or bank charter',
                      },
                      {
                        category: 'Budgeting & PFM Apps',
                        examples: 'YNAB, Copilot, Rocket Money (Mint)',
                        desc: 'Personal finance management apps that aggregate accounts, categorize transactions, track spending, and provide insights. Primarily read-only access to financial data via Plaid/Finicity. Lower regulatory burden but high data privacy requirements. Monetized via subscription.',
                        complexity: 'Medium',
                        license: 'Generally none (read-only)',
                      },
                      {
                        category: 'Crypto & DeFi Apps',
                        examples: 'Coinbase, Gemini, MetaMask, Uniswap',
                        desc: 'Cryptocurrency exchanges, wallets, and DeFi protocol interfaces. FinCEN Money Services Business registration required for exchanges. State BitLicense requirements (NY is strictest). KYC/AML obligations identical to traditional money transmitters. Smart contract auditing critical.',
                        complexity: 'Very High',
                        license: 'MSB + state crypto licenses',
                      },
                    ].map(item => (
                      <div key={item.category} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.category}</h3>
                          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: item.complexity === 'Very High' ? '#ef4444' : '#f59e0b', background: item.complexity === 'Very High' ? 'rgba(239,68,68,0.1)' : 'rgba(245,158,11,0.1)', padding: '2px 8px', borderRadius: 100 }}>Complexity: {item.complexity}</span>
                        </div>
                        <p style={{ fontSize: 12, color: '#22c55e', margin: '0 0 8px', fontWeight: 600 }}>Examples: {item.examples}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 10 }}>{item.desc}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: 0 }}>License required: <span style={{ color: 'rgba(255,255,255,0.55)' }}>{item.license}</span></p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Open Banking */}
                <div className="reveal" style={{ marginBottom: 56 }} id="open-banking">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Open Banking APIs: Plaid, Stripe & Payment Infrastructure
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The modern fintech stack is built on a layer of specialized APIs that handle the hard parts — bank connectivity, payment processing, card issuing, and identity verification. Here are the key providers you will build on:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        provider: 'Plaid',
                        category: 'Bank Account Connectivity',
                        desc: 'The dominant API for connecting to US bank accounts. Provides account verification, balance checks, transaction history, identity verification, and ACH initiation. Covers 12,000+ financial institutions.',
                        pricing: '$0.30-$1.50/connection/month',
                        useCase: 'Account aggregation, ACH payments, income verification',
                      },
                      {
                        provider: 'Stripe',
                        category: 'Payment Processing',
                        desc: 'Full-stack payments platform. Card processing, ACH, SEPA, international payments, Stripe Connect for marketplaces, Stripe Issuing for card programs, and Stripe Treasury for banking-as-a-service.',
                        pricing: '2.9% + $0.30 per card transaction',
                        useCase: 'Payment acceptance, marketplace payouts, card issuing',
                      },
                      {
                        provider: 'Dwolla',
                        category: 'ACH & Bank Transfers',
                        desc: 'White-label ACH payment infrastructure. Supports same-day ACH, real-time payments (RTP), FedNow, and international wire transfers. Better than Stripe for high-volume ACH with lower per-transaction fees.',
                        pricing: '$0.05-$0.50 per ACH transfer',
                        useCase: 'Payroll, high-volume transfers, marketplace disbursements',
                      },
                      {
                        provider: 'Unit',
                        category: 'Banking-as-a-Service',
                        desc: 'Embed banking into any product. Unit provides FDIC-insured accounts, debit cards, ACH, wire transfers, and check deposits through a single API, with built-in compliance and sponsor bank relationships.',
                        pricing: 'Revenue share + $500-$2,000/month base',
                        useCase: 'Neobanks, embedded banking, fintech startups',
                      },
                      {
                        provider: 'Marqeta',
                        category: 'Card Issuing',
                        desc: 'Modern card issuing platform used by Cash App, Instacart, and Klarna. Issue virtual and physical debit/prepaid cards, set real-time spend controls, and customize authorization logic per transaction.',
                        pricing: 'Interchange share + per-card fees',
                        useCase: 'Corporate cards, prepaid programs, debit card programs',
                      },
                      {
                        provider: 'Alpaca / DriveWealth',
                        category: 'Brokerage-as-a-Service',
                        desc: 'API-first brokerage infrastructure for embedding stock and ETF investing. Handles SEC/FINRA compliance, custody, clearing, and settlement. Used by Robinhood competitors and wealth apps.',
                        pricing: 'Commission per trade or revenue share',
                        useCase: 'Investment apps, robo-advisors, savings apps with investing',
                      },
                    ].map(item => (
                      <div key={item.provider} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', margin: '0 0 4px' }}>{item.category}</p>
                        <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{item.provider}</p>
                        <p style={{ fontSize: 12, color: '#22c55e', fontWeight: 600, margin: '0 0 10px' }}>{item.pricing}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 10 }}>{item.desc}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>Best for: {item.useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* KYC / AML */}
                <div className="reveal" style={{ marginBottom: 56 }} id="kyc-aml-compliance">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    KYC / AML Compliance: Know Your Customer & Anti-Money Laundering
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    KYC (Know Your Customer) and AML (Anti-Money Laundering) compliance are mandatory for any fintech app that handles money movement. The Bank Secrecy Act (BSA) and FinCEN regulations require financial services companies to verify customer identity, monitor transactions for suspicious activity, and file Suspicious Activity Reports (SARs). Violations can result in fines of $1M+ per day and criminal prosecution.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        phase: 'Customer Identification Program (CIP)',
                        desc: 'Collect and verify the identity of every customer before providing financial services. Required by the USA PATRIOT Act.',
                        requirements: [
                          'Collect full legal name, date of birth, address, and SSN/TIN',
                          'Verify identity through government-issued ID (passport, driver\'s license)',
                          'Screen against OFAC Specially Designated Nationals (SDN) list',
                          'Screen against PEP (Politically Exposed Persons) databases',
                          'Screen against global sanctions lists (UN, EU, OFAC)',
                        ],
                        tools: 'Jumio, Onfido, Persona, Socure, Stripe Identity',
                      },
                      {
                        phase: 'Ongoing Customer Due Diligence (CDD)',
                        desc: 'Continuously assess and monitor customer risk throughout the relationship. Risk-based approach: higher-risk customers get more scrutiny.',
                        requirements: [
                          'Assign risk ratings to customers (low, medium, high) based on profile',
                          'Enhanced Due Diligence (EDD) for high-risk customers (PEPs, high transaction volumes)',
                          'Periodic re-verification for high-risk accounts',
                          'Monitor for changes in customer behavior or risk profile',
                          'Beneficial ownership verification for business accounts (25%+ owners)',
                        ],
                        tools: 'Sardine, Alloy, Socure, ComplyAdvantage',
                      },
                      {
                        phase: 'Transaction Monitoring & AML',
                        desc: 'Monitor all transactions in real time to detect patterns indicative of money laundering, fraud, or sanctions violations.',
                        requirements: [
                          'Rules-based and ML-powered transaction monitoring',
                          'Alert generation for suspicious patterns (structuring, layering)',
                          'Currency Transaction Reports (CTRs) for cash transactions over $10K',
                          'Suspicious Activity Reports (SARs) within 30 days of detection',
                          'Annual AML compliance program review by a qualified officer',
                        ],
                        tools: 'Unit21, Sardine, Featurespace, NICE Actimize',
                      },
                    ].map(item => (
                      <div key={item.phase} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.phase}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 14 }}>{item.desc}</p>
                        <ul style={{ margin: '0 0 14px', paddingLeft: 20 }}>
                          {item.requirements.map(r => (
                            <li key={r} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 4 }}>{r}</li>
                          ))}
                        </ul>
                        <p style={{ fontSize: 12, color: '#22c55e', margin: 0, fontWeight: 600 }}>Recommended tools: {item.tools}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PCI DSS & Security */}
                <div className="reveal" style={{ marginBottom: 56 }} id="pci-dss-security">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    PCI DSS & Security Requirements
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Payment Card Industry Data Security Standard (PCI DSS) is the security framework for any app that processes, stores, or transmits cardholder data. The best approach for most fintech startups is to use a PCI-compliant processor (Stripe, Braintree) so that card data never touches your servers, minimizing your PCI scope to SAQ-A. Here is the full security stack you need regardless of PCI scope:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { req: 'Data Encryption', desc: 'AES-256 for data at rest, TLS 1.3 for data in transit. Separate encryption keys for production and non-production. Hardware Security Modules (HSMs) for key management at scale.', priority: 'Critical' },
                      { req: 'Zero-Trust Architecture', desc: 'Never trust, always verify. Service-to-service authentication via mTLS, least-privilege IAM policies, network segmentation, and no implicit trust between internal services.', priority: 'Critical' },
                      { req: 'Fraud Detection', desc: 'Real-time ML-powered fraud scoring for every transaction. Device fingerprinting, velocity checks, IP reputation, behavioral biometrics, and 3D Secure 2.0 for card payments.', priority: 'Critical' },
                      { req: 'Penetration Testing', desc: 'Annual penetration tests by certified security firms. Quarterly automated vulnerability scanning. Bug bounty program for responsible disclosure. Fix critical vulnerabilities within 24 hours.', priority: 'High' },
                      { req: 'SOC 2 Type II', desc: 'Service Organization Control 2 audit covering Security, Availability, Processing Integrity, Confidentiality, and Privacy. Required by most enterprise B2B customers and institutional partners.', priority: 'High' },
                      { req: 'Incident Response Plan', desc: 'Documented IR playbooks for breach, DDoS, insider threat, and ransomware scenarios. RTO/RPO targets, communication templates, regulatory notification timelines (72 hours for GDPR).', priority: 'High' },
                    ].map(item => (
                      <div key={item.req} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>{item.req}</p>
                          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.priority === 'Critical' ? '#ef4444' : '#f59e0b', background: item.priority === 'Critical' ? 'rgba(239,68,68,0.1)' : 'rgba(245,158,11,0.1)', padding: '3px 10px', borderRadius: 100 }}>{item.priority}</span>
                        </div>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Crypto Integration */}
                <div className="reveal" style={{ marginBottom: 56 }} id="crypto-integration">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Crypto & Web3 Integration
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Crypto functionality is now expected in many fintech apps. Whether you are building a dedicated exchange or adding crypto to a traditional financial app, here is what you need to know:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        feature: 'Crypto Custody & Wallets',
                        desc: 'For custodial wallets (you hold the keys), integrate with institutional custody providers like Fireblocks, BitGo, or Copper. These provide MPC-based key management with HSM security and insurance coverage. For non-custodial wallets, integrate with Web3 wallet standards (EIP-4337 account abstraction) for a user-friendly experience without seed phrase management.',
                        options: 'Fireblocks, BitGo, Copper, WalletConnect',
                      },
                      {
                        feature: 'Fiat On/Off Ramps',
                        desc: 'Enable users to buy crypto with bank transfers or credit cards. Options: integrate directly with a crypto liquidity provider (Moonpay, Ramp Network, Transak) or build your own using a crypto broker API (Gemini, Kraken, Coinbase Prime) if you have the regulatory licenses.',
                        options: 'Moonpay, Ramp Network, Transak, Stripe Crypto',
                      },
                      {
                        feature: 'DeFi Protocol Integration',
                        desc: 'Connect to decentralized finance protocols for staking, yield farming, and lending. Use a Web3 library (ethers.js, wagmi) to interact with smart contracts on Ethereum, Solana, or other chains. The regulatory status of DeFi features is evolving rapidly — get legal review before launching.',
                        options: 'ethers.js, wagmi, viem, thirdweb',
                      },
                      {
                        feature: 'Blockchain Data & Analytics',
                        desc: 'For transaction monitoring, portfolio tracking, and on-chain analytics, use blockchain indexing APIs rather than running your own nodes. Alchemy, Infura, and QuickNode provide reliable RPC endpoints; Moralis and Covalent provide pre-indexed transaction histories and token balances.',
                        options: 'Alchemy, Moralis, Covalent, The Graph',
                      },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{item.feature}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
                        <p style={{ fontSize: 12, color: '#22c55e', fontWeight: 600, margin: 0 }}>Key tools: {item.options}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#f59e0b' }}>Regulatory note:</strong> Any app that facilitates crypto exchange (buying, selling, or swapping) requires FinCEN Money Services Business (MSB) registration and compliance with the Travel Rule (sharing sender/receiver information for transfers over $3,000). State-level BitLicense or money transmitter licenses may also be required. The regulatory landscape is evolving rapidly — engage a crypto-specialist regulatory attorney before launch.
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack for Fintech Apps
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { layer: 'Mobile Apps', tech: 'React Native or Flutter', why: 'Cross-platform for iOS and Android. React Native has strong ecosystem for fintech (biometrics, secure storage, payment SDKs). Flutter for smoother animations and consistent UI. Never store sensitive financial data in AsyncStorage — use the Keychain/Keystore APIs.' },
                      { layer: 'Backend', tech: 'Node.js (NestJS) or Go (Golang)', why: 'NestJS for rapid development with strong TypeScript support. Go for high-throughput payment processing where performance matters (sub-millisecond transaction latency). Both have strong async support for webhook handling.' },
                      { layer: 'Database', tech: 'PostgreSQL + Redis + TimescaleDB', why: 'PostgreSQL for ACID-compliant financial transactions with double-entry bookkeeping. Redis for session management and fraud detection rate limiting. TimescaleDB for time-series transaction analytics and reporting.' },
                      { layer: 'Message Queue', tech: 'Apache Kafka or AWS SQS', why: 'Financial operations must be idempotent and auditable. Kafka for high-throughput event streaming (transaction events, fraud signals). SQS for simpler async workflows like notification delivery and report generation.' },
                      { layer: 'Cloud Infrastructure', tech: 'AWS or GCP with security hardening', why: 'AWS for the most mature fintech ecosystem (AWS Bedrock for AI, Amazon Fraud Detector, CloudHSM, WAF). GCP if you need Google BigQuery for financial analytics at scale. Both support SOC 2 and PCI DSS compliance postures.' },
                      { layer: 'API Gateway & Security', tech: 'Kong or AWS API Gateway + Cloudflare', why: 'Rate limiting, JWT validation, mutual TLS, and DDoS protection at the edge. Cloudflare for bot management and WAF. Never expose financial APIs without authentication and rate limiting.' },
                      { layer: 'Monitoring & Observability', tech: 'Datadog or New Relic + PagerDuty', why: 'Financial systems require 99.99% uptime. Real-time alerting on transaction failure rates, latency spikes, and error rates. PagerDuty for on-call incident management with escalation policies.' },
                      { layer: 'Compliance Infrastructure', tech: 'Alloy or Comply Advantage', why: 'Orchestrate your entire KYC/AML workflow through a single platform. Connect identity verification, sanctions screening, transaction monitoring, and case management in one compliance operating system.' },
                    ].map(item => (
                      <div key={item.layer} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', margin: '0 0 8px' }}>{item.layer}</p>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.tech}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: How Much Does a Fintech App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Fintech apps are consistently the most expensive category of app development due to compliance requirements, security infrastructure, and the complexity of financial integrations. Here is a realistic breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'Budgeting / PFM App (Low Regulatory Burden)',
                        price: '$100,000 - $180,000',
                        timeline: '5-7 months',
                        color: '#22c55e',
                        features: ['Plaid integration for bank account aggregation', 'Transaction categorization (ML-powered)', 'Budget tracking and goal setting', 'Net worth dashboard', 'Subscription detection and management', 'Bill tracking and payment reminders', 'Spending insights and trend analysis', 'iOS and Android apps + web dashboard'],
                      },
                      {
                        tier: 'Payment App / Neobank MVP',
                        price: '$250,000 - $500,000',
                        timeline: '9-12 months',
                        color: '#3b82f6',
                        features: ['KYC identity verification (Jumio/Persona)', 'OFAC and sanctions screening', 'Bank account connectivity (Plaid)', 'ACH and real-time payment rails', 'Debit card program (Marqeta + sponsor bank)', 'In-app P2P transfers', 'Push notifications and transaction alerts', 'AML transaction monitoring (Sardine)', 'Fraud detection system', 'Core banking ledger (double-entry)'],
                      },
                      {
                        tier: 'Full Neobank / Investment Platform',
                        price: '$500,000 - $1,000,000+',
                        timeline: '14-20 months',
                        color: '#a855f7',
                        features: ['Everything in Payment App tier', 'Stock / ETF investing (DriveWealth/Alpaca)', 'Crypto buy/sell/custody (Fireblocks)', 'Savings products (HY savings, CDs)', 'Lending products (personal loans, BNPL)', 'Business accounts and payroll', 'Full compliance program (BSA officer, policies)', 'SOC 2 Type II certification', 'State money transmitter license applications', 'Regulatory reporting automation'],
                      },
                    ].map(tier => (
                      <div key={tier.tier} style={{ padding: '28px 32px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${tier.color}25`, borderLeft: `3px solid ${tier.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: tier.color, margin: '0 0 4px' }}>{tier.tier}</p>
                            <p style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.03em' }}>{tier.price}</p>
                          </div>
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.03)', padding: '6px 16px', borderRadius: 100 }}>{tier.timeline}</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
                          {tier.features.map(f => (
                            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <div style={{ width: 6, height: 6, borderRadius: '50%', background: tier.color, flexShrink: 0 }} />
                              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Ongoing compliance costs:</strong> KYC verification ($1-$5 per user), AML transaction monitoring ($0.01-$0.10 per transaction), sanctions screening ($200-$500/month for API), legal & compliance counsel ($5,000-$20,000/month for regulated entities), annual pen tests ($20,000-$80,000), SOC 2 audit ($30,000-$100,000), and state MTL renewal fees ($2,000-$10,000 per state/year). Budget $15,000-$50,000/month in compliance operating costs for a regulated fintech.
                    </p>
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Fintech App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Fintech is not a category where you want a generalist development shop. The combination of regulatory complexity, security requirements, and financial infrastructure integrations demands a team that has navigated this landscape before. At Codazz, we have built across the fintech stack: payment platforms, neobank infrastructure, investment apps, and crypto exchanges. We have worked through the KYC/AML implementation challenges, the Plaid and Stripe integration edge cases, and the PCI DSS audit process.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    We bring pre-built compliance infrastructure modules, established relationships with banking-as-a-service providers, and a development process designed around financial-grade security from day one. We help you choose the right regulatory path for your product before architecture decisions are made — because changing your infrastructure after you have built it is orders of magnitude more expensive than getting it right the first time.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{ padding: '14px 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
                        Get a Free Consultation
                      </button>
                    </Link>
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                        <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '20px 24px', background: 'rgba(255,255,255,0.02)', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left' }}>
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"/></svg>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px', background: 'rgba(255,255,255,0.02)' }}>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside>
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map(section => (
                        <a key={section.id} href={`#${section.id}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.15s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}>
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0 }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)', background: 'transparent', transition: 'all 0.2s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}>
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
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, padding: '64px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Get Started</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>
                  Ready to Build Your Fintech App?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your fintech vision with our team. We will map out your regulatory pathway, recommend the right banking and payment infrastructure, and deliver a detailed fixed-price proposal within 48 hours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                  Get Your Free Estimate
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
