'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceHeroForm from '@/components/ServiceHeroForm';
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

const stats = [
  { value: '50+', label: 'SaaS Products Shipped' },
  { value: '$200M+', label: 'ARR Generated' },
  { value: '99.99%', label: 'Uptime' },
  { value: '8-Week', label: 'MVP Timeline' },
];

const services = [
  { icon: '🏗️', title: 'SaaS Architecture', desc: 'Multi-tenant data isolation, org-level customisation and the infrastructure patterns that support 10 to 10 million users without re-architecting.' },
  { icon: '💳', title: 'Subscription Billing', desc: 'Stripe integration with flat-rate, per-seat, metered and usage-based billing — trial management, proration and dunning all handled.' },
  { icon: '🔐', title: 'Auth & Multi-tenancy', desc: 'SSO (SAML/OIDC), role-based access control, organisation management and audit logs — enterprise-ready from day one.' },
  { icon: '📊', title: 'Analytics Dashboards', desc: 'Usage analytics, revenue metrics, churn indicators and feature adoption dashboards that give your team and customers actionable data.' },
  { icon: '🔌', title: 'API Platform', desc: 'RESTful and GraphQL APIs with versioning, rate limiting, webhooks, API keys and auto-generated SDK and documentation.' },
  { icon: '⚡', title: 'DevOps & Scaling', desc: 'CI/CD pipelines, containerised deployments, auto-scaling infrastructure, zero-downtime migrations and 24/7 monitoring.' },
];

const steps = [
  { num: '01', title: 'Discovery', desc: 'We map your target customer, core use case, pricing model and technical constraints — producing a product spec and architecture ADR before writing any code.' },
  { num: '02', title: 'Architecture', desc: 'Database schema, API contract, auth model, billing flows and infrastructure design reviewed and signed off before MVP development begins.' },
  { num: '03', title: 'MVP', desc: 'Core feature set built in 6–8 weeks, deployed to production with real customers — billing live, auth working, and the critical loop your first cohort needs to see value.' },
  { num: '04', title: 'Scale', desc: 'Post-PMF feature expansion, performance optimisation, enterprise tier additions and the infrastructure hardening needed to support aggressive growth.' },
];

const results = [
  { value: '8wk', label: 'MVP to Production', sub: 'median time from kickoff to launch' },
  { value: '$200M+', label: 'ARR Enabled', sub: 'across portfolio of SaaS products' },
  { value: '99.99%', label: 'Uptime', sub: 'SLA across production SaaS platforms' },
];

const faqs = [
  { q: 'What tech stack do you use for SaaS products?', a: 'Our default stack is Next.js (frontend and API routes), PostgreSQL (primary database), Redis (caching and queues), Stripe (billing), Auth.js or Clerk (authentication) and AWS or Vercel (infrastructure). We adapt based on your requirements and existing technology.' },
  { q: 'Can you build an MVP in 8 weeks?', a: 'Yes, for a well-scoped core feature set. The 8-week MVP timeline applies when discovery is complete, design is approved and the scope is disciplined. We will tell you upfront if your requirements require more time — we do not over-promise.' },
  { q: 'Do you handle multi-tenancy from day one, or can I add it later?', a: 'Multi-tenancy is significantly cheaper to build correctly from the start than to retrofit. We architect data isolation, org management and tenant-scoped permissions at the schema level from day one, which protects you as you scale into enterprise customers.' },
  { q: 'Will you help us after launch, or is it a handoff?', a: 'We offer ongoing engineering partnerships — retainer-based or project-by-project. Many clients engage us for 6–18 months post-launch for feature development, infrastructure scaling and technical leadership ahead of fundraising rounds.' },
  { q: 'How do you approach SaaS pricing and billing architecture?', a: 'We start with your go-to-market model and design the billing architecture to match — free tier, trial-to-paid, per-seat, usage-based or hybrid. We configure Stripe with your exact pricing logic, automate invoicing and build the self-serve upgrade/downgrade flows your customers expect.' },
];

export default function SaaSDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;
  const s7 = useReveal() as React.RefObject<HTMLElement>;
  const s8 = useReveal() as React.RefObject<HTMLElement>;
  const s9 = useReveal() as React.RefObject<HTMLElement>;

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
      <main style={{ background: '#ffffff', color: '#111827', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'SaaS Development' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(60px, 8vw, 100px) 0 clamp(60px, 8vw, 120px)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <HeroBackground variant="right" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 80px)', alignItems: 'center' }}>
              {/* Left */}
              <div>
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(17,24,39,0.08)', border: '1px solid rgba(17,24,39,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#111827', boxShadow: '0 0 8px #111827' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase' }}>SaaS Development</span>
                </div>
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.8rem,5vw,5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 24px', maxWidth: 700 }}>
                  We Build SaaS Products That <span style={{ color: '#111827' }}>Scale.</span>
                </h1>
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgb(0,0,0)', lineHeight: 1.75, maxWidth: 520, margin: '0 0 40px' }}>
                  From zero to Series A — multi-tenant SaaS platforms with billing, auth, analytics and the infrastructure to grow.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#111827', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(17,24,39,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get Started <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                    See Our Work
                  </Link>
                </div>
              </div>

              {/* Right — contact form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section ref={s1} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))' }}>
              {stats.map((s, i) => (
                <div key={i} className="reveal" style={{ padding: 'clamp(28px, 4vw, 48px) 0', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.05)' : 'none', paddingLeft: i > 0 ? 'clamp(16px, 3vw, 40px)' : 0, transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section ref={s2} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase' }}>What We Build</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>Full-Stack SaaS Engineering</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 520, margin: '0 0 56px', lineHeight: 1.7 }}>Every layer of the stack — from database schema to billing flows to the CI/CD pipeline that ships daily.</p>
            {/* Service Cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {services.map(s => (
                <div key={s.title} style={{ padding: '36px 32px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)'; e.currentTarget.style.background = 'rgba(17,24,39,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#111827,transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgb(0,0,0)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section ref={s3} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase' }}>How We Build</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 60px' }}>Our SaaS Build Process</h2>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ position: 'absolute', top: 24, bottom: 24, left: 23, width: 1, background: 'linear-gradient(to bottom, #111827, rgba(17,24,39,0.1))', zIndex: 0 }} />
              {steps.map((step, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 32, paddingBottom: i < steps.length - 1 ? 48 : 0, position: 'relative', zIndex: 1, transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#111827', color: '#fff', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
                  <div style={{ paddingTop: 10 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{step.title}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, margin: 0, maxWidth: 560 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section ref={s4} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Results</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>SaaS Built to Last</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {results.map((r, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(17,24,39,0.04)', border: '1px solid rgba(17,24,39,0.12)', borderRadius: 24, padding: '40px 32px', transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.value}</div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: '#111827', margin: '12px 0 8px' }}>{r.label}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s5} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 760 }}>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ background: openFaq === i ? 'rgba(17,24,39,0.04)' : 'rgba(0,0,0,0.015)', border: `1px solid ${openFaq === i ? 'rgba(17,24,39,0.2)' : 'rgba(0,0,0,0.05)'}`, borderRadius: 20, overflow: 'hidden', transition: '0.3s', transitionDelay: `${i * 0.06}s` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#111827', textAlign: 'left' }}>{faq.q}</span>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#111827' : 'rgba(0,0,0,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  {openFaq === i && <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgb(0,0,0)', lineHeight: 1.75 }}>{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={s7} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111827', marginBottom: 20 }}>Technology</div>
                <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                  The Stack Behind Your SaaS
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgb(0,0,0)', maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
                Battle-tested tools chosen for reliability, developer velocity, and the ability to scale from MVP to enterprise.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {[
                { label: 'Frontend', chips: ['React', 'Next.js', 'Vue.js', 'TypeScript'] },
                { label: 'Backend', chips: ['Node.js', 'Python', 'Go', 'GraphQL'] },
                { label: 'Infrastructure', chips: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'] },
                { label: 'SaaS Essentials', chips: ['Stripe', 'Auth0', 'SendGrid', 'Redis', 'PostgreSQL'] },
              ].map(cat => (
                <div key={cat.label}
                  style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)'; e.currentTarget.style.background = 'rgba(17,24,39,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#111827', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c}
                        style={{ padding: '7px 16px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.35)'; e.currentTarget.style.color = '#111827'; e.currentTarget.style.background = 'rgba(17,24,39,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = 'rgba(0,0,0,0.45)'; e.currentTarget.style.background = 'transparent'; }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRY USE CASES */}
        <section ref={s8} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111827', marginBottom: 20 }}>Industries</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                SaaS Solutions by Industry
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {[
                { icon: '💰', title: 'FinTech SaaS', desc: 'Payment platforms, compliance tools, trading dashboards and financial analytics built for regulatory environments.', href: '/industries/fintech' },
                { icon: '🏥', title: 'Healthcare SaaS', desc: 'EHR systems, telehealth platforms, patient portals and clinical workflow tools with HIPAA compliance baked in.', href: '/industries/healthcare' },
                { icon: '🛒', title: 'E-Commerce SaaS', desc: 'Multi-vendor marketplaces, inventory management systems and subscription commerce platforms at scale.', href: '/industries/ecommerce' },
                { icon: '📚', title: 'EdTech SaaS', desc: 'LMS platforms, virtual classrooms, assessment tools and student engagement systems for modern education.', href: '/industries/edtech' },
                { icon: '🚛', title: 'Logistics SaaS', desc: 'Fleet management, route optimisation, warehouse systems and real-time tracking platforms.', href: '/industries/logistics' },
                { icon: '🏢', title: 'Enterprise SaaS', desc: 'CRM, ERP, project management and HR platforms built for complex organisational workflows.', href: '/industries/enterprise' },
              ].map(ind => (
                <Link key={ind.title} href={ind.href} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '36px 32px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease', height: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)'; e.currentTarget.style.background = 'rgba(17,24,39,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#111827,transparent)' }} />
                    <div style={{ fontSize: 32, marginBottom: 20 }}>{ind.icon}</div>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 12 }}>{ind.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgb(0,0,0)', lineHeight: 1.7, margin: '0 0 16px' }}>{ind.desc}</p>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#111827', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Learn More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING TIERS */}
        <section ref={s9} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111827', marginBottom: 20 }}>Investment</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 16px' }}>
                SaaS Development Pricing
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>Transparent pricing based on scope and complexity. Every engagement starts with a detailed proposal.</p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {[
                {
                  tier: 'MVP Launch',
                  price: '$25,000+',
                  desc: 'Get to market fast with a production-ready MVP.',
                  features: ['Core feature set', 'Basic authentication', 'Payment integration', 'Admin panel', 'Production deployment', '30-day post-launch support'],
                },
                {
                  tier: 'Growth Platform',
                  price: '$75,000+',
                  desc: 'Scale your SaaS with multi-tenancy, analytics and integrations.',
                  features: ['Multi-tenant architecture', 'Analytics dashboards', 'Third-party integrations', 'CI/CD pipeline', 'Role-based access control', 'Usage-based billing'],
                  featured: true,
                },
                {
                  tier: 'Enterprise Scale',
                  price: '$150,000+',
                  desc: 'Enterprise-grade SaaS with white-label, compliance and auto-scaling.',
                  features: ['White-label support', 'SSO / SAML authentication', 'SOC 2 compliance ready', 'Auto-scaling infrastructure', 'Custom API platform', 'Dedicated support & SLA'],
                },
              ].map(plan => (
                <div key={plan.tier} style={{ padding: '40px 32px', border: plan.featured ? '2px solid rgba(17,24,39,0.4)' : '1px solid rgba(0,0,0,0.06)', borderRadius: 28, background: plan.featured ? 'rgba(17,24,39,0.04)' : 'rgba(0,0,0,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  {plan.featured && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#111827,transparent)' }} />}
                  {plan.featured && <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111827', background: 'rgba(17,24,39,0.1)', padding: '5px 14px', borderRadius: 100, marginBottom: 16, display: 'inline-block', alignSelf: 'flex-start' }}>Most Popular</span>}
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 8 }}>{plan.tier}</h3>
                  <div style={{ fontSize: 'clamp(2rem,3vw,2.5rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.03em', marginBottom: 12 }}>{plan.price}</div>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, marginBottom: 24 }}>{plan.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, flex: 1 }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgb(0,0,0)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: 48, borderRadius: 100, background: plan.featured ? '#111827' : 'transparent', border: plan.featured ? 'none' : '1px solid rgba(0,0,0,0.1)', color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; if (plan.featured) e.currentTarget.style.boxShadow = '0 12px 32px rgba(17,24,39,0.35)'; else e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; if (!plan.featured) e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'; }}>
                    Get Started <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section style={{ padding: '60px 0' }}>
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: 24 }}>Industries We Serve</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
              ].map((ind) => (
                <a key={ind.href} href={ind.href} style={{
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                  color: 'rgb(0,0,0)', background: 'rgba(0,0,0,0.02)',
                  border: '1px solid rgba(0,0,0,0.06)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = 'rgb(0,0,0)'; }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s6} className="section-padding">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(17,24,39,0.08)', border: '1px solid rgba(17,24,39,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#111827', boxShadow: '0 0 8px #111827' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get Started</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Ready to Build Your <span style={{ color: '#111827' }}>SaaS?</span>
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(0,0,0,0.45)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75 }}>
              50+ SaaS products shipped. From zero to production in 8 weeks.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#111827', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(17,24,39,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Start Your SaaS Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                View SaaS Portfolio
              </Link>
            </div>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
              {['8-week MVP guaranteed', 'Multi-tenant from day one', 'Ongoing engineering support'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  {t}
                </div>
              ))}
            </div>
            <TrustBadges compact />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
