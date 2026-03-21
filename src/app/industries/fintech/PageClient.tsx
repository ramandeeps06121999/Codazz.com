'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import HeroBackground from '@/components/HeroBackground';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.25)',
  background: 'rgba(34,197,94,0.04)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(34,197,94,0.08)',
};

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...cardBase, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        paddingBottom: '1.25rem',
        marginBottom: '1.25rem',
        cursor: 'pointer',
      }}
      onClick={() => setOpen(o => !o)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontWeight: 600, fontSize: '1rem', color: '#ffffff', lineHeight: 1.5 }}>{q}</span>
        <span style={{ color: '#22c55e', fontSize: '1.4rem', flexShrink: 0, lineHeight: 1 }}>{open ? '−' : '+'}</span>
      </div>
      {open && (
        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginTop: '0.875rem', fontSize: '0.95rem' }}>
          {a}
        </p>
      )}
    </div>
  );
}

const SERVICES = [
  {
    icon: '💳',
    title: 'Payment App Development',
    desc: 'Secure, PCI DSS-compliant payment gateways with multi-provider failover, card tokenisation, ACH, real-time payments (RTP), and Apple Pay / Google Pay support.',
  },
  {
    icon: '🏦',
    title: 'Digital Banking Platforms',
    desc: 'Mobile-first neobank and digital banking apps with KYC/AML workflows, multi-currency accounts, biometric authentication, and core-banking integrations.',
  },
  {
    icon: '📈',
    title: 'Investment & Trading Platforms',
    desc: 'AI-driven analytics, real-time market data ingestion, order management systems, portfolio risk engines, and robo-advisor features for retail and institutional traders.',
  },
  {
    icon: '🪙',
    title: 'Crypto & DeFi Applications',
    desc: 'Custodial and non-custodial wallet infrastructure, smart contract development, DeFi protocol integration, and blockchain-based settlement for digital asset platforms.',
  },
  {
    icon: '🛡️',
    title: 'InsurTech Solutions',
    desc: 'Quote engines, policy management systems, claims automation, telematics integrations, and embedded insurance APIs for modern insurance businesses.',
  },
  {
    icon: '📋',
    title: 'RegTech & Compliance Tools',
    desc: 'Automated KYC/AML screening, regulatory reporting pipelines, real-time transaction monitoring, and audit-ready dashboards for compliance-driven organisations.',
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery & Compliance Scoping', desc: 'We map your regulatory environment (PCI DSS, SOC 2, Open Banking, MiFID II) and define architecture constraints before writing a single line of code.' },
  { step: '02', title: 'Architecture Design', desc: 'We design event-driven, horizontally-scalable systems with security zones, encrypted data flows, and HSM-backed key management from the ground up.' },
  { step: '03', title: 'Agile Development Sprints', desc: 'Two-week sprints with daily standups, live demo environments, and automated compliance checks baked into CI/CD pipelines.' },
  { step: '04', title: 'Security & Penetration Testing', desc: 'Independent pen testing, OWASP vulnerability scanning, and code review by a third-party security firm before any production launch.' },
  { step: '05', title: 'Compliance Audit Support', desc: 'We prepare documentation, evidence packs, and system diagrams for PCI QSA and SOC 2 Type II auditors — so you pass on the first attempt.' },
  { step: '06', title: 'Launch & Ongoing Operations', desc: '24/7 SLA-backed monitoring, automated scaling, incident response, and feature velocity maintained post-launch.' },
];

const COMPLIANCE = [
  { badge: 'PCI DSS', desc: 'Level 1 compliant architecture with tokenisation, network segmentation, and quarterly ASV scans.' },
  { badge: 'SOC 2 Type II', desc: 'Security, availability, and confidentiality controls designed to pass SOC 2 audits on first attempt.' },
  { badge: 'Open Banking', desc: 'FCA-aligned and CFPB-ready Open Banking APIs with OAuth 2.0 and consent management.' },
  { badge: 'AML / KYC', desc: 'Automated identity verification, sanctions screening, and transaction monitoring pipelines.' },
  { badge: 'GDPR / CCPA', desc: 'Data minimisation, right-to-erasure workflows, and privacy-by-design architecture for global users.' },
  { badge: 'ISO 27001', desc: 'Information security management policies and controls aligned with ISO 27001 frameworks.' },
];

const TECH = [
  { cat: 'Backend & APIs', items: ['Python', 'Go', 'Rust', 'Java', 'Node.js'] },
  { cat: 'Fintech Integrations', items: ['Plaid', 'Stripe', 'Dwolla', 'Marqeta', 'Synapse'] },
  { cat: 'Data & Streaming', items: ['Apache Kafka', 'TimescaleDB', 'Redis', 'Apache Spark'] },
  { cat: 'Security', items: ['HashiCorp Vault', 'OAuth 2.0 / PKCE', 'HSM', 'FIDO2 / WebAuthn'] },
  { cat: 'Blockchain', items: ['Ethereum', 'Solana', 'Solidity', 'ethers.js', 'Hardhat'] },
  { cat: 'Cloud & DevOps', items: ['AWS GovCloud', 'Azure', 'Kubernetes', 'Terraform', 'Datadog'] },
];

const CASE_STUDIES = [
  {
    tag: 'Payment Infrastructure',
    client: 'US Payment Startup',
    headline: '2M+ daily transactions processed at sub-50ms latency with 99.99% uptime',
    body: 'We rebuilt their legacy payment engine with an event-driven microservices architecture on AWS, integrating Stripe Connect for marketplace payouts and Plaid for instant bank verification. Zero downtime during migration.',
    quote: '"Codazz delivered a payments engine that our team tried to build for 18 months. They did it in 14 weeks."',
    author: 'CTO, Series B Payments Startup',
    stats: [['2M+', 'Transactions/Day'], ['<50ms', 'p99 Latency'], ['99.99%', 'Uptime SLA']],
  },
  {
    tag: 'Digital Banking',
    client: 'Neobank — North America',
    headline: '180K active users, 6 currency accounts, full KYC/AML pipeline',
    body: 'We built the entire mobile banking product from API design to App Store launch — multi-currency ledger, biometric auth, real-time spending insights, and an automated KYC flow with Jumio and Sardine fraud screening.',
    quote: '"We went from idea to 180K users in under a year. The Codazz team operated like a world-class internal engineering org."',
    author: 'CEO, North American Neobank',
    stats: [['180K+', 'Active Users'], ['6', 'Currencies Supported'], ['<2min', 'KYC Approval Time']],
  },
  {
    tag: 'Investment Platform',
    client: 'Robo-Advisor Platform',
    headline: '$500M AUM platform with AI-driven portfolio rebalancing and tax-loss harvesting',
    body: 'End-to-end build of a B2C robo-advisor — SEC-compliant brokerage integration via Alpaca, real-time portfolio risk scoring, and a tax-loss harvesting engine that runs nightly across 40,000+ portfolios.',
    quote: '"The technical quality is exceptional. Our compliance team was impressed by the audit trail and evidence documentation."',
    author: 'Chief Compliance Officer, Investment Platform',
    stats: [['$500M+', 'AUM Managed'], ['40K+', 'Portfolios'], ['SOC 2', 'Type II Passed']],
  },
];

const PRICING = [
  {
    tier: 'Fintech MVP',
    price: '$30K – $60K',
    timeline: '8–14 weeks',
    ideal: 'Pre-seed / seed startups validating a fintech idea',
    features: [
      'Core payment or banking feature set',
      'Plaid or Stripe integration',
      'Basic KYC flow',
      'PCI DSS-aware architecture',
      'iOS + Android or Web app',
      '3 months post-launch support',
    ],
  },
  {
    tier: 'Growth Platform',
    price: '$80K – $180K',
    timeline: '16–28 weeks',
    ideal: 'Series A companies scaling a compliant fintech product',
    popular: true,
    features: [
      'Full payment / banking / investment feature set',
      'Multi-provider integration (Plaid, Stripe, Dwolla)',
      'KYC/AML pipeline with vendor integration',
      'PCI DSS Level 1 architecture',
      'Admin dashboard & analytics',
      'SOC 2 readiness documentation',
      '6 months SLA-backed support',
    ],
  },
  {
    tier: 'Enterprise Fintech',
    price: 'Custom',
    timeline: 'Tailored',
    ideal: 'Banks, regulated entities, and scale-up fintech companies',
    features: [
      'Custom regulatory architecture (PCI, SOC 2, Open Banking)',
      'Core banking / brokerage / insurance integration',
      'AI-powered fraud detection & risk scoring',
      'Multi-region, multi-currency infrastructure',
      'Dedicated engineering pod',
      'QSA audit support & penetration testing',
      '24/7 SLA monitoring & on-call support',
    ],
  },
];

const FAQS = [
  {
    q: 'How long does it take to build a fintech app?',
    a: 'A fintech MVP typically takes 8–16 weeks depending on complexity. A full-featured payment platform or digital banking app with compliance baked in usually takes 4–9 months. We provide a detailed timeline after your discovery call.',
  },
  {
    q: 'Can you build PCI DSS compliant payment apps?',
    a: 'Yes. PCI DSS compliance is built into our fintech architecture from day one — tokenisation, encrypted data storage, network segmentation, and audit logging are standard. We also support third-party QSA audits.',
  },
  {
    q: 'Do you integrate with Plaid and Stripe?',
    a: 'Absolutely. We have deep integration experience with Plaid for bank account linking, Stripe and Stripe Connect for payments and marketplace payouts, Dwolla for ACH, and dozens of other fintech APIs.',
  },
  {
    q: 'What is the cost of building a fintech app?',
    a: 'Fintech MVPs start at around $30,000–$60,000. Full-featured digital banking or investment platforms range from $100,000–$350,000+ depending on compliance requirements, integrations, and scale. We offer fixed-price sprints to control budget.',
  },
  {
    q: 'Do you sign NDAs before discussing project details?',
    a: 'Yes. We sign NDAs before any discovery call and can execute custom IP assignment agreements. For regulated fintech projects, we work under appropriate legal frameworks to protect your business.',
  },
];

export default function FintechPageClient() {
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    const hero = document.querySelector('.fintech-hero');
    hero?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Fintech' },
          ]} />
        </div>

        {/* ── HERO ── */}
        <section
          className="section-padding fintech-hero"
          style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}
        >
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 22px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Fintech App Development
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5.2rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
              Fintech Apps Built for{' '}
              <span style={{ color: '#22c55e' }}>Compliance, Scale & Speed.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.75, maxWidth: 680, margin: '0 auto 2.5rem' }}>
              We build payment apps, digital banking platforms, investment tools, crypto wallets, and InsurTech solutions — PCI DSS, SOC 2, and Open Banking compliant from day one.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '15px 34px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get a Free Proposal
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '15px 34px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(150px, 100%), 1fr))', gap: '1.5rem', maxWidth: 640, margin: '0 auto' }}>
              {[['$2B+', 'Transactions Processed'], ['PCI DSS', 'Level 1 Compliant'], ['<50ms', 'p99 Latency'], ['SOC 2', 'Audit-Ready']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#22c55e' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginTop: 5, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                What We Build for Fintech
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 620, margin: '0 auto' }}>
                End-to-end fintech engineering — from regulatory architecture to consumer-facing interfaces.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {SERVICES.map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem', color: '#ffffff' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '0.93rem' }}>{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPLIANCE SECTION ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(34,197,94,0.02)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Compliance Expertise
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 640, margin: '0 auto' }}>
                Regulated fintech demands more than good code. We design compliant systems from the architecture layer up.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.25rem' }}>
              {COMPLIANCE.map(c => (
                <div key={c.badge} style={{ border: '1px solid rgba(34,197,94,0.12)', borderRadius: 28, background: 'rgba(34,197,94,0.03)', padding: '1.75rem' }}>
                  <div style={{ display: 'inline-block', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 8, padding: '4px 14px', fontSize: '0.78rem', fontWeight: 700, color: '#22c55e', letterSpacing: '0.05em', marginBottom: '0.875rem' }}>
                    {c.badge}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.93rem' }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Fintech Case Studies
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Real results from real financial products we have shipped.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {CASE_STUDIES.map((cs, i) => (
                <div key={i} className="reveal" style={{ border: '1px solid rgba(34,197,94,0.12)', borderRadius: 28, background: 'rgba(34,197,94,0.025)', padding: 'clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 'clamp(1.5rem, 4vw, 2.5rem)', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#22c55e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>{cs.tag}</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>{cs.client}</div>
                    <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.25, color: '#ffffff' }}>{cs.headline}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{cs.body}</p>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                      {cs.stats.map(([val, label]) => (
                        <div key={label}>
                          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#22c55e' }}>{val}</div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <blockquote style={{ borderLeft: '3px solid #22c55e', paddingLeft: '1.5rem', margin: 0 }}>
                      <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', marginBottom: '1rem' }}>{cs.quote}</p>
                      <cite style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)', fontStyle: 'normal' }}>— {cs.author}</cite>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Our Fintech Development Process
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
                A structured, compliance-first process designed for regulated financial products.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
              {PROCESS.map(p => (
                <div key={p.step} style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: '2rem', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#22c55e', letterSpacing: '0.1em', marginBottom: '0.875rem' }}>{p.step}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.75rem', color: '#ffffff' }}>{p.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.93rem' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Tech Stack
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>
                Battle-tested technologies chosen for performance, security, and financial compliance.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              {TECH.map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: '5px 13px', fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Fintech Development Pricing
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
                Transparent pricing for every stage of your fintech journey. All tiers include NDA and fixed-price sprint options.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', alignItems: 'start' }}>
              {PRICING.map(p => (
                <div key={p.tier} style={{ border: p.popular ? '1px solid rgba(34,197,94,0.4)' : '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: '2rem', background: p.popular ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)', position: 'relative' }}>
                  {p.popular && (
                    <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#22c55e', color: '#000', fontSize: '0.72rem', fontWeight: 700, padding: '4px 16px', borderRadius: 999, letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                      MOST POPULAR
                    </div>
                  )}
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>{p.tier}</div>
                  <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: p.popular ? '#22c55e' : '#ffffff', marginBottom: '0.25rem' }}>{p.price}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)', marginBottom: '0.75rem' }}>{p.timeline}</div>
                  <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem', lineHeight: 1.5 }}>{p.ideal}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {p.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                        <span style={{ color: '#22c55e', flexShrink: 0, marginTop: '0.1em' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '1.75rem' }}>
                    <Link href="/contact" style={{ display: 'block', textAlign: 'center', background: p.popular ? '#22c55e' : 'transparent', color: p.popular ? '#000' : '#ffffff', border: p.popular ? 'none' : '1px solid rgba(255,255,255,0.12)', padding: '12px 24px', borderRadius: 999, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                      {p.tier === 'Enterprise Fintech' ? 'Request a Quote' : 'Get Started'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED SERVICES ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 40, textAlign: 'center' }}>
              Services for Fintech Companies
            </h2>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1rem' }}>
              {[
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Secure mobile banking and wallet apps with biometric auth and real-time notifications.' },
                { name: 'Web Development', href: '/services/web-development', desc: 'High-performance trading dashboards and financial portals built with modern frameworks.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Fraud detection models, risk scoring engines and predictive analytics for financial data.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'PCI DSS compliant cloud infrastructure with zero-downtime deployments and auto-scaling.' },
                { name: 'Blockchain & Web3', href: '/services/blockchain-web3', desc: 'Smart contracts, DeFi protocols and tokenised asset platforms on EVM-compatible chains.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant fintech SaaS platforms with subscription billing and role-based access control.' },
              ].map(s => (
                <a key={s.href} href={s.href} style={{ display: 'block', padding: '1.25rem 1.5rem', borderRadius: 20, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginBottom: 5 }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CODAZZ FOR FINTECH ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Why Fintech Companies Choose Codazz
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 640, margin: '0 auto' }}>
                We don't just write code — we understand financial systems, regulatory landscapes, and the stakes involved in moving money.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
              {[
                {
                  icon: '🎓',
                  title: 'Financial Domain Experts',
                  desc: 'Our engineers have built systems for payment processors, investment platforms, and neobanks. We understand order books, ledger architecture, reconciliation, and the precision financial systems demand.',
                },
                {
                  icon: '🔒',
                  title: 'Security-First Architecture',
                  desc: 'Security is designed in from day one — not bolted on. Every system we ship includes HSM-backed key management, mTLS service communication, and passes independent penetration testing before launch.',
                },
                {
                  icon: '📋',
                  title: 'Regulatory Guidance Built In',
                  desc: 'We stay current with PCI DSS v4, SOC 2, Open Banking regulations, MiFID II, and emerging CFPB frameworks — so your product launches compliant and stays that way as regulations evolve.',
                },
                {
                  icon: '⚡',
                  title: 'Performance at Financial Scale',
                  desc: 'We architect for millions of concurrent transactions. Event-driven microservices, Apache Kafka streaming, horizontal auto-scaling, and multi-region deployments are standard practice — not premium add-ons.',
                },
                {
                  icon: '🤝',
                  title: 'Transparent Fixed-Price Sprints',
                  desc: 'No surprise invoices. We scope in 2-week sprints with clear deliverables and fixed pricing. You always know exactly what is being built, what it costs, and when it will be done.',
                },
                {
                  icon: '🌍',
                  title: 'Global Fintech Experience',
                  desc: 'We have built fintech products for markets across North America, the UAE, and Europe — navigating different regulatory regimes, currency requirements, and banking infrastructure in each region.',
                },
              ].map(w => (
                <Card key={w.title}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem', color: '#ffffff' }}>{w.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '0.93rem' }}>{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE WORK WITH ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Who We Work With
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
                From pre-seed startups validating a payments idea to regulated financial institutions modernising legacy systems.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
              {[
                {
                  segment: 'Fintech Startups',
                  desc: 'Pre-seed through Series B startups building payment apps, neobanks, lending platforms, or investment tools. We help you move fast while building compliance in from the start — not fixing it later.',
                  tags: ['MVP Development', 'Rapid Iteration', 'Investor-Ready Tech'],
                },
                {
                  segment: 'Challenger Banks & Neobanks',
                  desc: 'Digital-first banking platforms that need full mobile banking stacks — KYC/AML, multi-currency ledgers, card issuance via Marqeta, and real-time notifications — built to scale to millions of accounts.',
                  tags: ['Core Banking', 'Card Issuance', 'KYC/AML Pipeline'],
                },
                {
                  segment: 'Payment Processors',
                  desc: 'Companies building payment infrastructure need performance and reliability above all else. We architect PCI DSS Level 1 systems with sub-50ms p99 latency, multi-provider failover, and 99.99% uptime SLAs.',
                  tags: ['PCI DSS Level 1', 'High Throughput', 'Multi-Provider'],
                },
                {
                  segment: 'Investment & Wealth Platforms',
                  desc: 'Robo-advisors, brokerage platforms, and wealth management tools that need SEC-compliant trading infrastructure, real-time risk engines, and portfolio analytics built for institutional-grade performance.',
                  tags: ['SEC Compliance', 'Order Management', 'Risk Engines'],
                },
                {
                  segment: 'InsurTech Companies',
                  desc: 'Modern insurance businesses that need quote engines, policy administration systems, claims automation workflows, telematics integrations, and embedded insurance APIs for distribution partners.',
                  tags: ['Policy Admin', 'Claims Automation', 'Embedded Insurance'],
                },
                {
                  segment: 'Crypto & Web3 Platforms',
                  desc: 'Custodial and non-custodial wallet platforms, DeFi protocols, NFT marketplaces, and tokenised asset platforms that need secure smart contract development and blockchain infrastructure.',
                  tags: ['Smart Contracts', 'DeFi Protocols', 'Wallet Infrastructure'],
                },
              ].map(seg => (
                <div key={seg.segment} style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: '1.75rem', background: 'rgba(255,255,255,0.015)' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.75rem' }}>{seg.segment}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1rem' }}>{seg.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {seg.tags.map(tag => (
                      <span key={tag} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 6, padding: '3px 10px', fontSize: '0.75rem', color: '#22c55e', fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS TRUST BAND ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.012)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: '2rem', textAlign: 'center' }}>
              {[
                { val: '$2B+', label: 'Transaction Volume Processed' },
                { val: '50+', label: 'Fintech Products Shipped' },
                { val: '8+', label: 'Years in Financial Engineering' },
                { val: '99.99%', label: 'Average Uptime SLA' },
                { val: 'PCI DSS', label: 'Level 1 Architecture' },
                { val: '0', label: 'Failed Compliance Audits' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#22c55e', marginBottom: '0.4rem' }}>{stat.val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em', lineHeight: 1.4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINTECH BLOG ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Fintech Insights & Guides
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem' }}>
                In-depth articles on fintech engineering, compliance, and product strategy.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.25rem' }}>
              {[
                { title: 'How to Build a Fintech App in 2026: The Complete Guide', href: '/blog/how-to-build-fintech-app', tag: 'Product Guide' },
                { title: 'Top Fintech Apps of 2026: What Makes Them Work', href: '/blog/top-fintech-apps-2026', tag: 'Industry Report' },
                { title: 'How Much Does App Development Cost in 2026?', href: '/blog/how-much-does-app-development-cost-2026', tag: 'Cost Guide' },
              ].map(post => (
                <a key={post.href} href={post.href} style={{ display: 'block', padding: '1.5rem', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#22c55e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.625rem' }}>{post.tag}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', lineHeight: 1.5 }}>{post.title}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 780 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem' }}>
                Common questions about our fintech app development services.
              </p>
            </div>
            <div className="reveal">
              {FAQS.map(faq => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
                Ready to Build Your{' '}
                <span style={{ color: '#22c55e' }}>Fintech Product?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.75 }}>
                From a payment MVP to enterprise-grade banking infrastructure — we have the regulatory expertise and engineering depth to make it happen.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Get a Free Technical Proposal
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['PCI DSS Compliant', 'SOC 2 Ready', 'NDA on Request', 'Fixed-Price Sprints', 'Free Discovery Call'].map(t => (
                  <span key={t} style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ color: '#22c55e' }}>✓</span> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
