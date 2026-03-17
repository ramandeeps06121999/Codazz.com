'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';

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
  border: '1px solid rgba(0,0,0,0.06)',
  borderRadius: 24,
  background: 'rgba(0,0,0,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(79,70,229,0.2)',
  background: 'rgba(79,70,229,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(0,0,0,0.06)',
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

export default function EcommercePage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', color: '#111827', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/services' },
            { label: 'E-Commerce' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(79,70,229,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#4F46E5', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              E-Commerce
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              We Build Storefronts That <span style={{ color: '#4F46E5' }}>Convert.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.55)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              High-performance headless commerce, mobile-first checkout flows, and AI-powered merchandising that maximises revenue.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#4F46E5', color: '#fff', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Start Your Project
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(0,0,0,0.1)', color: '#111827', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[['500K', 'Concurrent Users'], ['2.1s', 'Avg Load Time'], ['38%', 'Avg Conv. Lift']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#4F46E5' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Key Challenges We Solve</h2>
              <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: '1.1rem' }}>Revenue-impacting problems that demand engineering precision.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🚀', title: 'Peak Traffic Scaling', desc: 'Black Friday, flash sales, viral moments — your storefront stays fast and available when it matters most, no matter the load.' },
                { icon: '🛒', title: 'Cart Abandonment', desc: 'Optimised checkout flows, smart recovery sequences, and frictionless payment options that turn browsers into buyers.' },
                { icon: '🎯', title: 'Personalisation at Scale', desc: 'AI-powered product recommendations, dynamic pricing, and tailored search results that increase average order value.' },
              ].map(c => (
                <Card key={c.title}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                  <p style={{ color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, fontSize: '0.95rem' }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Our Solutions</h2>
              <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: '1.1rem' }}>Commerce infrastructure engineered to grow with your revenue.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🛍️', title: 'Headless Commerce Platforms', desc: 'Next.js-powered, composable storefronts with sub-2s load times, Lighthouse 95+ scores, and CMS-driven content that marketers can manage without developers.' },
                { icon: '🤖', title: 'AI-Powered Merchandising', desc: 'Recommendation engines trained on your customer data, dynamic pricing algorithms, intelligent search with semantic understanding, and automated upsell flows.' },
                { icon: '📱', title: 'Mobile Commerce', desc: 'Native and PWA shopping experiences with one-tap checkout, push notifications, and offline browsing that drive mobile conversion rates.' },
                { icon: '🔄', title: 'Subscription Billing', desc: 'Recurring payment management with flexible plans, dunning automation, proration, and analytics that reduce churn and maximise lifetime value.' },
                { icon: '🏪', title: 'Marketplace Platforms', desc: 'Multi-vendor marketplace infrastructure with seller onboarding, commission management, split payments, and dispute resolution workflows.' },
                { icon: '📊', title: 'Analytics & Attribution', desc: 'End-to-end conversion tracking, multi-touch attribution modelling, and real-time revenue dashboards that reveal what drives your sales.' },
              ].map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ border: '1px solid rgba(79,70,229,0.15)', borderRadius: 32, background: 'rgba(79,70,229,0.03)', padding: 'clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#4F46E5', marginBottom: '0.5rem' }}>E-Commerce Client</div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>500K concurrent users, 38% conversion lift, $4.2M revenue increase</h3>
                <p style={{ color: 'rgba(0,0,0,0.55)', lineHeight: 1.7 }}>We migrated their legacy storefront to a headless Next.js architecture with real-time inventory, AI search, and a one-page checkout.</p>
              </div>
              <div>
                <blockquote style={{ borderLeft: '3px solid #4F46E5', paddingLeft: '1.5rem', margin: 0 }}>
                  <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "Our Black Friday sale broke records. The platform didn't even flinch."
                  </p>
                  <cite style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.25)', fontStyle: 'normal' }}>— VP Engineering, Major American Retailer</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={s4} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Tech Stack</h2>
              <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: '1.1rem' }}>Best-in-class commerce tools chosen for conversion and performance.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                { cat: 'Commerce', items: ['Shopify', 'Commercetools', 'BigCommerce', 'Medusa'] },
                { cat: 'Frontend', items: ['Next.js', 'Remix', 'React', 'Vercel'] },
                { cat: 'Payments', items: ['Stripe', 'Adyen', 'Braintree', 'Klarna'] },
                { cat: 'Analytics', items: ['GA4', 'Mixpanel', 'Segment', 'Heap'] },
              ].map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(0,0,0,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: '4px 12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CODAZZ */}
        <section ref={s5} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Codazz</h2>
              <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: '1.1rem' }}>We measure success in revenue, not just deploys.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '⚡', title: 'Commerce Performance Experts', desc: 'We obsess over Core Web Vitals, load times, and checkout friction. Every millisecond we save you translates directly to revenue.' },
                { icon: '💰', title: 'Revenue-First Design', desc: 'Every design decision is tested against conversion metrics. We don\'t build beautiful pages — we build pages that sell.' },
                { icon: '📈', title: 'Scale Tested', desc: 'Our platforms have survived Black Friday, Super Bowl ads, and influencer drops without a single incident. We plan for your biggest day from day one.' },
              ].map(w => (
                <Card key={w.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{w.title}</h3>
                  <p style={{ color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, fontSize: '0.95rem' }}>{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Services for E-Commerce
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))', gap: 16 }}>
              {[
                { name: 'Web Development', href: '/services/web-development', desc: 'Headless storefronts with sub-2s load times, Lighthouse 95+ and CMS-driven content.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Native shopping apps with one-tap checkout, push notifications and offline browsing.' },
                { name: 'Digital Marketing', href: '/services/digital-marketing', desc: 'SEO, paid ads and email campaigns that drive traffic and maximise conversion rates.' },
                { name: 'WordPress & CMS', href: '/services/wordpress-cms', desc: 'WooCommerce stores and headless CMS setups for content-rich commerce experiences.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Subscription billing platforms and marketplace infrastructure with multi-vendor support.' },
              ].map((s) => (
                <a key={s.href} href={s.href} style={{
                  display: 'block', padding: '24px', borderRadius: 16,
                  background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 6 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', lineHeight: 1.5 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s6} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Build Your <span style={{ color: '#4F46E5' }}>Commerce Platform.</span>
              </h2>
              <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Performance-engineered storefronts that convert visitors into revenue.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#4F46E5', color: '#fff', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Start Your Project
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(0,0,0,0.1)', color: '#111827', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['Lighthouse 95+', 'Scale Tested', 'Fixed-Price Sprints', 'NDA on Request'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.25)' }}>✓ {t}</span>
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
