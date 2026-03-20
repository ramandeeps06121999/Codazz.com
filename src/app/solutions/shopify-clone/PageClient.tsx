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

export default function ShopifyClonePage() {
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
    { icon: '🏪', title: 'Multi-Vendor Marketplace', desc: 'Allow multiple sellers to create their own storefronts, manage products, and process orders independently within your platform.' },
    { icon: '💳', title: 'Payment Gateway Integration', desc: 'Stripe, PayPal, Square, and 50+ regional gateways with multi-currency support, subscription billing, and automatic tax calculation.' },
    { icon: '📦', title: 'Inventory Management', desc: 'Real-time stock tracking across multiple warehouses, low-stock alerts, bulk import/export, and automated reorder points.' },
    { icon: '📊', title: 'Analytics Dashboard', desc: 'Revenue tracking, conversion funnels, customer lifetime value, product performance, and real-time sales metrics for sellers and admins.' },
    { icon: '🎨', title: 'Theme Engine & Store Builder', desc: 'Drag-and-drop storefront builder with customizable themes, custom CSS, and a marketplace of pre-built templates for sellers.' },
    { icon: '🔌', title: 'App & Plugin Ecosystem', desc: 'Extensible platform with REST and GraphQL APIs, webhook system, and a plugin architecture for third-party integrations.' },
    { icon: '🚚', title: 'Shipping & Fulfillment', desc: 'Real-time shipping rate calculation, label generation, multi-carrier support (FedEx, UPS, USPS), and order tracking for customers.' },
    { icon: '🔍', title: 'Search & Discovery', desc: 'Elasticsearch-powered product search with faceted filtering, autocomplete, typo tolerance, and AI-powered product recommendations.' },
    { icon: '📱', title: 'Mobile Commerce', desc: 'Responsive storefronts optimized for mobile, native mobile app SDKs, Apple Pay/Google Pay integration, and push notifications.' },
    { icon: '🛡️', title: 'Security & Compliance', desc: 'PCI-DSS compliant payment handling, SSL everywhere, fraud detection, GDPR-ready data management, and role-based access controls.' },
  ];

  const techStack = [
    { cat: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
    { cat: 'Backend', items: ['Node.js', 'Python', 'GraphQL', 'REST APIs'] },
    { cat: 'Database', items: ['PostgreSQL', 'Redis', 'Elasticsearch', 'MongoDB'] },
    { cat: 'Cloud & Payments', items: ['AWS', 'Stripe', 'Kubernetes', 'CloudFront CDN'] },
  ];

  const timeline = [
    { phase: 'Discovery & Architecture', duration: '2-4 weeks', desc: 'Market research, platform architecture, database design, and UI/UX wireframing for the core storefront experience.' },
    { phase: 'Core Platform', duration: '12-16 weeks', desc: 'Store builder, product management, cart/checkout, payment processing, and seller onboarding.' },
    { phase: 'Advanced Features', duration: '8-12 weeks', desc: 'Theme engine, analytics dashboard, app ecosystem, shipping integrations, and marketing tools.' },
    { phase: 'Testing & Launch', duration: '3-4 weeks', desc: 'Load testing, security audit, payment flow verification, and staged rollout to production.' },
  ];

  const faqs = [
    { q: 'How much does it cost to build an ecommerce platform like Shopify?', a: 'Building a Shopify-like ecommerce platform typically costs between $80,000 and $250,000. A basic multi-vendor marketplace MVP starts around $80,000, while a full platform with theme engine, app ecosystem, payment processing, and analytics ranges from $150,000 to $250,000.' },
    { q: 'How long does it take to build a Shopify-like platform?', a: 'An MVP with core store builder, product management, and checkout takes 4-5 months. A full-featured platform with multi-vendor support, theme marketplace, and advanced analytics takes 7-10 months.' },
    { q: 'Can you integrate multiple payment gateways?', a: 'Yes. We integrate Stripe, PayPal, Square, and region-specific gateways. Our platform supports multi-currency transactions, subscription billing, and split payments for multi-vendor marketplaces.' },
    { q: 'Will the platform scale to handle high traffic?', a: 'Absolutely. We architect for scale from day one using microservices, CDN-backed asset delivery, database sharding, and auto-scaling infrastructure that handles traffic spikes like Black Friday sales.' },
    { q: 'Can sellers customize their storefronts?', a: 'Yes. We build a theme engine with drag-and-drop customization, custom CSS support, and a library of pre-built templates so sellers can brand their stores without writing code.' },
  ];

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Shopify Clone' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Ecommerce Platform Development
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Build an Ecommerce Platform <span style={{ color: '#22c55e' }}>Like Shopify.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Multi-vendor marketplace, payment processing, inventory management, and a powerful store builder — your own ecommerce empire.
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
              {[['$80K+', 'Starting Cost'], ['4-10 Mo', 'Development'], ['100K+', 'Orders/Day']].map(([val, label]) => (
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>A complete ecommerce ecosystem built for scale.</p>
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Enterprise-grade technologies for reliability at scale.</p>
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Structured delivery with milestones at every phase.</p>
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Transparent pricing for every stage of growth.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
              {[
                { tier: 'MVP', price: '$80,000 - $120,000', desc: 'Core store builder, product management, cart/checkout, and payment processing. Launch and validate your marketplace.', features: ['Store Builder', 'Product Management', 'Cart & Checkout', 'Payment Processing', 'Seller Dashboard'] },
                { tier: 'Full Platform', price: '$150,000 - $250,000', desc: 'Complete ecommerce platform with theme engine, multi-vendor, analytics, shipping, and app ecosystem.', features: ['Everything in MVP', 'Theme Engine', 'Multi-Vendor Support', 'Analytics Dashboard', 'Shipping Integration', 'App/Plugin Ecosystem'] },
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
                Ready to Build Your <span style={{ color: '#22c55e' }}>Ecommerce Platform?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                From storefront to checkout to analytics — we engineer ecommerce platforms that power real businesses.
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
                {['PCI-DSS Compliant', 'NDA Protected', 'Fixed-Price Sprints', 'Post-Launch Support'].map(t => (
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
