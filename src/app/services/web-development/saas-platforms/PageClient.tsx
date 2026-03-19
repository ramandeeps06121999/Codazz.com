'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import HeroBackground from '@/components/HeroBackground';
import PortfolioShowcase from '@/components/PortfolioShowcase';

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

const stats = [
  { value: '50+', label: 'SaaS Platforms Built' },
  { value: '$200M+', label: 'ARR Enabled' },
  { value: '8wk', label: 'MVP Timeline' },
  { value: '99.99%', label: 'Uptime SLA' },
];

const services = [
  { icon: '🏢', title: 'Multi-Tenant Architecture', desc: 'We design robust multi-tenant systems with proper data isolation — shared database, separate schemas, or separate databases — selecting the right model based on your compliance requirements and scale projections.' },
  { icon: '💳', title: 'Subscription Billing (Stripe)', desc: 'From free trials and freemium tiers to usage-based billing and annual contracts, we implement complete billing flows with Stripe — including proration, dunning management, invoices, and tax handling.' },
  { icon: '🔐', title: 'SSO & Auth', desc: 'We implement secure authentication using Auth0, Clerk, or custom JWT solutions, with support for SAML/SSO for enterprise customers, MFA, role-based access control, and audit logging.' },
  { icon: '📊', title: 'Admin Dashboards', desc: 'Super-admin and tenant-admin dashboards with real-time metrics, user management, subscription oversight, feature flag controls, and operational tooling to manage your platform at scale.' },
  { icon: '📈', title: 'Usage Analytics', desc: 'We instrument your platform with product analytics (Mixpanel, PostHog) and custom usage dashboards that track feature adoption, churn indicators, and growth metrics — giving you the data to make informed decisions.' },
  { icon: '🔗', title: 'API Platform & Webhooks', desc: 'We build developer-facing APIs with comprehensive documentation (OpenAPI/Swagger), webhook systems for real-time event delivery, API key management, and rate limiting to support ecosystem integrations.' },
];

const steps = [
  { num: '01', title: 'Product Discovery', desc: 'We run structured discovery workshops to define your ICP, core workflow, pricing model, and technical requirements — producing a product spec, architecture proposal, and phased roadmap with clear MVP scope.' },
  { num: '02', title: 'Architecture Design', desc: 'We design the multi-tenant data model, authentication flows, billing integration, API contracts, and infrastructure topology before any code is written — preventing expensive architectural debt later.' },
  { num: '03', title: 'MVP Build', desc: 'We build iteratively in two-week sprints, prioritising the core workflow that delivers value to your first customers. You get a shippable, tested MVP in 8 weeks — not a bloated feature set in 18 months.' },
  { num: '04', title: 'Scale & Iterate', desc: 'Post-launch, we help you analyze usage data, run A/B experiments on conversion and activation, scale infrastructure to handle growth, and ship the next tier of features based on real customer feedback.' },
];

const faqs = [
  { q: 'How long does it take to build a SaaS MVP?', a: 'A focused SaaS MVP — core workflow, authentication, basic billing, and essential admin tooling — typically takes 6–10 weeks with our team. We enforce strict scope discipline during discovery to ensure you launch with the smallest product that delivers genuine value to early customers, then iterate rapidly based on feedback.' },
  { q: 'Should we build multi-tenancy from day one?', a: 'Yes, always. Adding multi-tenancy to an existing single-tenant codebase is one of the most expensive and risky refactors a SaaS company can undertake. We design the data isolation model, access control layer, and routing logic correctly from the start — even if you only have one tenant on launch day.' },
  { q: 'Which billing provider do you recommend?', a: 'We recommend Stripe for the vast majority of SaaS products — it has the most comprehensive subscription and billing API, excellent documentation, and supports complex scenarios like usage-based billing, multi-currency, and marketplace splits. We implement billing with Stripe Billing + webhooks for reliable subscription lifecycle management.' },
  { q: 'How do you handle data isolation between tenants?', a: 'We evaluate three isolation models: shared schema with tenant_id columns (most cost-efficient, lowest isolation), separate schemas per tenant (good balance for mid-market SaaS), and separate databases per tenant (highest isolation, required for some compliance standards). We recommend the right model based on your regulatory requirements and expected tenant count.' },
  { q: 'Do you provide post-launch support?', a: 'Yes. Most of our SaaS clients engage us on a monthly retainer covering infrastructure monitoring, incident response, performance optimization, security updates, and ongoing feature development. We treat post-launch as the beginning of the product journey, not the end of the engagement.' },
];



export default function SaasPlatforms() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
      `}</style>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', fontFamily: 'inherit' }}>

        {/* HERO */}
        <section ref={heroRef} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="right" />
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 60px)', alignItems: 'center' }}>
              <div>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/services/web-development" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Web Development</Link>
              <span>/</span>
              <span style={{ color: '#ffffff' }}>SaaS Platform Development</span>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.05em' }}>SAAS PRODUCT ENGINEERING</span>
            </div>
            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
              SaaS Platforms Built to{' '}
              <span style={{ color: '#ffffff' }}>Scale & Generate ARR</span>
            </h1>
            <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>
              We build production-grade SaaS platforms from the ground up — multi-tenant architecture, subscription billing, enterprise SSO, and scalable infrastructure — delivering your MVP in 8 weeks and growing with you from there.
            </p>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                Start Your Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
              </div>
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section ref={s1} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>What We Offer</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Everything Your SaaS Needs to Succeed</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {services.map((svc, i) => (
                <div key={svc.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}

        {/* PORTFOLIO */}
        <PortfolioShowcase category="web-development" />

        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>How We Work</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {steps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#ffffff', letterSpacing: '0.1em', marginBottom: 16 }}>{step.num}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s3} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container" style={{ maxWidth: 800 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Common Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, transition: '0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s4} className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 70%)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Build Your SaaS?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Let's turn your product idea into a scalable, revenue-generating SaaS platform — starting with an MVP in 8 weeks.</p>
            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 56, padding: '0 40px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
                Get a Free Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
