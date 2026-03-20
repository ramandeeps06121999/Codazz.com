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
  borderRadius: 24,
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

export default function EcommerceMarketplacePage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;
  const s7 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'E-Commerce Marketplace' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              E-Commerce &bull; Case Study
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Scaling an E-Commerce Marketplace to{' '}
              <span style={{ color: '#22c55e' }}>$10M+ Annual Revenue</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 700, margin: '0 auto 2.5rem' }}>
              A multi-vendor marketplace with AI-powered search, dynamic pricing, real-time inventory sync, and a checkout experience that converted 340% better.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))', gap: '1.5rem', maxWidth: 700, margin: '0 auto' }}>
              {[
                ['340%', 'Conversion Increase'],
                ['3x', 'Revenue Growth'],
                ['2M+', 'Product Listings'],
                ['99.99%', 'Uptime'],
              ].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT CHALLENGE */}
        <section ref={s1} className="section-padding">
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>The Challenge</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
                A Promising Marketplace Was Leaving Revenue on the Table
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Our client had built an initial marketplace on WooCommerce that worked for their first 50 vendors. But with growing traffic, the platform buckled. Page load times exceeded 6 seconds, search was broken, cart abandonment hit 82%, and the vendor onboarding process took weeks of manual work. They needed a ground-up rebuild to scale.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '\uD83D\uDCC9', title: '82% Cart Abandonment', desc: 'Slow checkout, limited payment options, and poor mobile UX were killing conversions.' },
                { icon: '\u23F3', title: '6+ Second Page Loads', desc: 'WooCommerce couldn\'t handle 2M+ SKUs. Search was slow, filtering was broken.' },
                { icon: '\uD83D\uDCE6', title: 'Manual Vendor Ops', desc: 'Onboarding new vendors took 2+ weeks of manual catalog import and account setup.' },
              ].map(c => (
                <Card key={c.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{c.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem' }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* OUR SOLUTION */}
        <section ref={s2} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Solution</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
                A Headless Commerce Platform Built for Scale
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We rebuilt the entire platform as a headless commerce architecture — Next.js frontend for lightning-fast pages, Elasticsearch for sub-100ms search across 2M+ products, and a custom vendor portal that automated onboarding from weeks to hours.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '\u26A1', title: 'Next.js Headless Frontend', desc: 'Server-side rendered product pages with ISR, achieving sub-1s LCP. Responsive across all devices with a mobile-first checkout flow.' },
                { icon: '\uD83D\uDD0D', title: 'AI-Powered Search & Discovery', desc: 'Elasticsearch with ML-ranked results, typo tolerance, faceted filtering, and personalized recommendations driving 45% of revenue.' },
                { icon: '\uD83D\uDCB3', title: 'Optimized Checkout', desc: 'Single-page checkout with Stripe, Apple Pay, Google Pay, and buy-now-pay-later. Address autocomplete and saved payment methods.' },
                { icon: '\uD83C\uDFEA', title: 'Self-Serve Vendor Portal', desc: 'Automated onboarding with bulk CSV/API catalog import, real-time analytics dashboard, and automated payout scheduling via Stripe Connect.' },
              ].map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem' }}>{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={s3} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Technology</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Tech Stack</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {[
                { cat: 'Frontend', items: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Framer Motion'] },
                { cat: 'Backend', items: ['Node.js', 'Express', 'GraphQL', 'Bull Queue'] },
                { cat: 'Search & Data', items: ['Elasticsearch', 'PostgreSQL', 'Redis', 'S3/CloudFront'] },
                { cat: 'Payments', items: ['Stripe', 'Stripe Connect', 'Apple Pay', 'Klarna'] },
                { cat: 'Infrastructure', items: ['AWS (ECS, RDS, CloudFront)', 'Vercel (Frontend)', 'Terraform', 'DataDog'] },
                { cat: 'Integrations', items: ['ShipStation', 'Segment', 'Google Analytics 4', 'Klaviyo'] },
              ].map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '4px 12px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <section ref={s4} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Process</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Development Timeline</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>6 months from kickoff to launch, with zero downtime migration from the legacy WooCommerce platform.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gap: '1rem' }}>
              {[
                { phase: 'Weeks 1-2', title: 'Discovery & Data Audit', desc: 'Analyzed 2M+ product records, mapped vendor workflows, audited conversion funnel, and designed new information architecture.' },
                { phase: 'Weeks 3-8', title: 'Core Platform & Search Engine', desc: 'Built Next.js storefront, Elasticsearch indexing pipeline, product catalog API, and real-time inventory sync.' },
                { phase: 'Weeks 9-14', title: 'Checkout & Payments', desc: 'Single-page checkout, Stripe Connect multi-vendor payouts, Apple/Google Pay, Klarna integration, and tax automation.' },
                { phase: 'Weeks 15-20', title: 'Vendor Portal & Analytics', desc: 'Self-serve vendor dashboard, bulk product import, real-time sales analytics, automated payout scheduling, and review system.' },
                { phase: 'Weeks 21-24', title: 'Migration, QA & Launch', desc: 'Zero-downtime data migration from WooCommerce, load testing to 10x traffic, SEO redirect mapping, and phased rollout.' },
              ].map((p, i) => (
                <div key={p.phase} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 48, height: 48, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, color: '#22c55e', flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div style={{ paddingBottom: '1.5rem', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none', flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', color: '#22c55e', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{p.phase}</div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section ref={s5} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Results</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Measurable Impact</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>The new platform paid for itself within the first quarter post-launch.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                { value: '340%', label: 'Conversion Increase', before: '1.2% to 5.3% conversion rate' },
                { value: '3x', label: 'Revenue Growth', before: '$3.2M to $10.4M annual revenue' },
                { value: '2M+', label: 'Product Listings', before: 'Scaled from 200K products' },
                { value: '99.99%', label: 'Uptime', before: '94% uptime on WooCommerce' },
                { value: '<1s', label: 'Page Load Time', before: '6+ seconds on legacy platform' },
                { value: '85%', label: 'Faster Vendor Onboarding', before: 'From 2 weeks to 2 days' },
              ].map(r => (
                <Card key={r.label}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#22c55e', marginBottom: '0.25rem' }}>{r.value}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem' }}>{r.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>{r.before}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section ref={s6} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="reveal" style={{ border: '1px solid rgba(34,197,94,0.15)', borderRadius: 32, background: 'rgba(34,197,94,0.03)', padding: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center' }}>
              <blockquote style={{ margin: 0 }}>
                <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  &ldquo;We went from a WooCommerce site that crashed during sales events to a platform handling Black Friday traffic without breaking a sweat. Revenue tripled in 6 months. Codazz delivered exactly what they promised.&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>CEO & Co-Founder</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)' }}>Multi-Vendor Marketplace, Los Angeles</div>
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        {/* RELATED CASE STUDIES */}
        <section ref={s7} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>Related Case Studies</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'FinTech Trading Platform', industry: 'FinTech', metric: '100K+ Active Users', href: '/case-studies/fintech-trading-platform' },
                { title: 'HIPAA Telehealth Platform', industry: 'Healthcare', metric: '50K+ Patients', href: '/case-studies/healthcare-telehealth-app' },
              ].map(r => (
                <Link
                  key={r.href}
                  href={r.href}
                  style={{
                    display: 'block',
                    padding: '2rem',
                    borderRadius: 24,
                    background: 'rgba(255,255,255,0.015)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#22c55e', letterSpacing: '0.05em' }}>{r.industry}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0.5rem 0' }}>{r.title}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>{r.metric}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Scale Your <span style={{ color: '#22c55e' }}>E-Commerce Business.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Whether you&apos;re migrating from a legacy platform or building a marketplace from scratch, we have the commerce engineering expertise to deliver.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Start Your Project
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  More Case Studies
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['NDA on Day 1', 'Fixed-Price Sprints', 'SOC II Certified', '24hr Response'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)' }}>{'\u2713'} {t}</span>
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
