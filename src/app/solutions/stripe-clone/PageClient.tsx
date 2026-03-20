'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
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

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.2)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(255,255,255,0.06)',
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

export default function StripeClonePage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  const features = [
    { icon: '💳', title: 'Payment Processing', desc: 'High-throughput payment gateway supporting credit/debit cards, ACH, wire transfers, and digital wallets with real-time authorization and settlement.' },
    { icon: '🔄', title: 'Subscription Billing', desc: 'Flexible recurring billing engine with plan management, proration, trial periods, usage-based pricing, dunning, and automated invoice generation.' },
    { icon: '📄', title: 'Invoicing System', desc: 'Professional invoice creation and management with customizable templates, automatic reminders, partial payments, and tax calculation.' },
    { icon: '🛡️', title: 'Fraud Detection', desc: 'AI-powered fraud prevention with real-time risk scoring, velocity checks, device fingerprinting, 3D Secure, and customizable fraud rules.' },
    { icon: '🌍', title: 'Multi-Currency Support', desc: 'Process payments in 135+ currencies with automatic conversion, local payment methods, and region-specific compliance for global operations.' },
    { icon: '⚡', title: 'Developer APIs', desc: 'RESTful and GraphQL APIs with comprehensive SDKs, webhooks, idempotency keys, sandbox environment, and interactive API documentation.' },
    { icon: '💰', title: 'Payout Management', desc: 'Automated merchant payouts with configurable schedules, split payments, marketplace disbursements, and multi-bank account support.' },
    { icon: '📊', title: 'Reporting Dashboard', desc: 'Real-time analytics with transaction monitoring, revenue metrics, churn analysis, reconciliation reports, and customizable data exports.' },
    { icon: '🔒', title: 'PCI Compliance', desc: 'PCI DSS Level 1 compliant infrastructure with tokenization, encrypted vault storage, secure hosted payment fields, and audit trail logging.' },
    { icon: '🔔', title: 'Webhooks & Events', desc: 'Reliable event notification system with retry logic, event filtering, delivery monitoring, and comprehensive webhook management console.' },
  ];

  const techStack = [
    { cat: 'Backend', items: ['Node.js', 'Go', 'gRPC', 'Microservices'] },
    { cat: 'Database', items: ['PostgreSQL', 'Redis', 'TimescaleDB', 'Vault'] },
    { cat: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Storybook'] },
    { cat: 'Infrastructure', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform'] },
  ];

  const timeline = [
    { phase: 'Discovery & Compliance', duration: '3-4 weeks', desc: 'Requirements analysis, regulatory research, PCI compliance planning, and system architecture design.' },
    { phase: 'Core Payment Engine', duration: '16-20 weeks', desc: 'Payment processing, tokenization, merchant onboarding, basic APIs, and transaction management.' },
    { phase: 'Advanced Features', duration: '12-18 weeks', desc: 'Subscription billing, fraud detection, multi-currency, developer portal, and reporting dashboard.' },
    { phase: 'Security & Compliance', duration: '4-6 weeks', desc: 'PCI audit preparation, penetration testing, security hardening, and compliance documentation.' },
    { phase: 'Launch & Certification', duration: '3-4 weeks', desc: 'PCI certification, staged rollout, monitoring setup, and post-launch support infrastructure.' },
  ];

  const faqs = [
    { q: 'How much does it cost to build a payment platform like Stripe?', a: 'A payment platform like Stripe typically costs between $120,000 and $400,000 depending on features and regulatory requirements. An MVP with core payment processing and basic APIs can start around $120,000, while a full-featured platform with subscription billing, fraud detection, and multi-currency support ranges from $250,000 to $400,000.' },
    { q: 'How long does it take to build a Stripe-like platform?', a: 'An MVP typically takes 6-7 months. A full-featured payment platform with subscription billing, fraud detection, developer APIs, and compliance features takes 10-14 months from start to launch.' },
    { q: 'What tech stack is best for a payment platform?', a: 'We recommend Node.js or Go for high-throughput backend services, PostgreSQL for transactional data, Redis for caching, React for the merchant dashboard, and robust encryption libraries. PCI DSS compliance infrastructure is built from the ground up.' },
    { q: 'How do you handle PCI compliance?', a: 'We architect payment platforms with PCI DSS Level 1 compliance in mind, including tokenization, encrypted data storage, secure API endpoints, audit logging, and regular penetration testing. We work with certified QSAs to ensure full compliance.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. We offer ongoing maintenance, security monitoring, compliance updates, feature development, and scaling support after launch. Our team ensures your platform stays secure, compliant, and performant.' },
  ];

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Stripe Clone' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Payment Platform Development
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Build a Payment Platform <span style={{ color: '#22c55e' }}>Like Stripe.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Payment processing, subscription billing, fraud detection, and developer-first APIs — we build the complete fintech infrastructure your business requires.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get a Free Quote
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Our Work
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[['$120K+', 'Starting Cost'], ['6-14 Mo', 'Development'], ['135+', 'Currencies']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Core Features</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Everything you need to launch a world-class payment infrastructure platform.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {features.map(f => (
                <Card key={f.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{f.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Tech Stack</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Bank-grade technologies for secure, high-throughput payment processing.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {techStack.map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '4px 12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Development Timeline</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>From concept to PCI-certified launch in as little as 6 months.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {timeline.map((t, i) => (
                <Card key={t.phase}>
                  <div style={{ fontSize: '0.75rem', color: '#22c55e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Phase {i + 1}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.25rem' }}>{t.phase}</h3>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>{t.duration}</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{t.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* COST */}
        <section ref={s4} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Investment Range</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Transparent pricing based on scope and compliance requirements.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
              {[
                { tier: 'MVP', price: '$120,000 - $180,000', desc: 'Core payment processing with card payments, basic APIs, merchant dashboard, and essential security. Perfect for validating your fintech concept.', features: ['Payment Processing', 'Merchant Dashboard', 'REST APIs & SDKs', 'Basic Reporting', 'PCI Compliance'] },
                { tier: 'Full Product', price: '$250,000 - $400,000', desc: 'Complete payment infrastructure with subscription billing, fraud detection, multi-currency, developer portal, and enterprise analytics.', features: ['Everything in MVP', 'Subscription Billing', 'AI Fraud Detection', 'Multi-Currency', 'Developer Portal', 'Payout Management'] },
              ].map(p => (
                <Card key={p.tier}>
                  <div style={{ fontSize: '0.75rem', color: '#22c55e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{p.tier}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>{p.price}</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{p.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {p.features.map(f => (
                      <li key={f} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', padding: '4px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#22c55e' }}>&#10003;</span> {f}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s5} className="section-padding">
          <div className="cb-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Frequently Asked Questions</h2>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.015)', border: 'none', color: '#ffffff', fontSize: '1rem', fontWeight: 600, textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    {faq.q}
                    <span style={{ fontSize: '1.2rem', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s6} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Ready to Build Your <span style={{ color: '#22c55e' }}>Payment Platform?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                From checkout to settlement — let us build the payment infrastructure that powers your financial ecosystem.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Get a Free Quote
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['NDA Protected', 'Fixed-Price Sprints', 'Free Consultation', 'Post-Launch Support'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)' }}>&#10003; {t}</span>
                ))}
              </div>
              <TrustBadges compact />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
