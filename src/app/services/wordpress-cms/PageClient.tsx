'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceHeroForm from '@/components/ServiceHeroForm';
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

const stats = [
  { value: '500+', label: 'Sites Launched' },
  { value: '99.9%', label: 'Uptime' },
  { value: 'Sub-2s', label: 'Load Time' },
  { value: '100', label: 'PageSpeed Score' },
];

const services = [
  { icon: '🔧', title: 'Custom WordPress Development', desc: 'Bespoke themes, custom post types, advanced custom fields and plugin development — no page builders, no bloat, just clean code.' },
  { icon: '🛒', title: 'WooCommerce Stores', desc: 'High-conversion WooCommerce stores with custom checkout flows, payment gateways, inventory management and marketing integrations.' },
  { icon: '⚡', title: 'Headless WordPress', desc: 'WordPress as a backend CMS powering a Next.js or Nuxt.js frontend — best-in-class performance with full editorial control.' },
  { icon: '📝', title: 'Custom CMS Development', desc: 'Strapi, Contentful, Sanity and custom-built CMS platforms tailored to your content team\'s exact workflow and structure.' },
  { icon: '🚀', title: 'Website Migrations', desc: 'Risk-free migrations from any platform to WordPress — preserving SEO, redirects, content and design fidelity throughout.' },
  { icon: '🔒', title: 'Maintenance & Security', desc: 'Ongoing updates, security hardening, uptime monitoring, daily backups and performance optimisation for your live site.' },
];

const steps = [
  { num: '01', title: 'Discovery', desc: 'We map your content structure, user journeys, integrations and editorial workflow to define the right CMS architecture before any design work begins.' },
  { num: '02', title: 'Design', desc: 'Wireframes, component library and high-fidelity designs reviewed and approved by your team before development starts. No surprises mid-build.' },
  { num: '03', title: 'Build', desc: 'Custom theme or headless build, plugin integration, performance optimisation, SEO setup and cross-browser testing on real devices.' },
  { num: '04', title: 'Launch', desc: 'Staging environment QA, team training session, production deployment and 30-day post-launch support included on every project.' },
];

const results = [
  { value: '100', label: 'PageSpeed Score', sub: 'Lighthouse performance on launch' },
  { value: '60%', label: 'Traffic Increase', sub: 'avg organic growth in 6 months' },
  { value: '45%', label: 'Conversion Lift', sub: 'CRO-optimised redesigns' },
];

const faqs = [
  { q: 'How long does a custom WordPress site take to build?', a: 'A standard marketing site takes 4–6 weeks. Complex sites with custom functionality, WooCommerce or headless architecture typically take 8–14 weeks. We provide a detailed timeline after discovery.' },
  { q: 'What is the difference between a standard and headless WordPress build?', a: 'Standard WordPress serves pages directly from the CMS. Headless WordPress uses WordPress only as a backend API, with a separate Next.js or Nuxt.js frontend. Headless delivers significantly faster performance and better developer experience, but requires more upfront investment.' },
  { q: 'Will I be able to update my site myself after launch?', a: 'Yes. The entire project is built around giving your team full editorial control. We configure the admin interface specifically for your workflow and run a handover training session before launch.' },
  { q: 'Do you handle hosting, or do I need to arrange that separately?', a: 'We can manage hosting for you on WP Engine, Kinsta or AWS, or deploy to your existing hosting infrastructure. We recommend managed WordPress hosting for optimal performance and security.' },
  { q: 'Can you improve the speed of my existing WordPress site?', a: 'Yes. Performance audits and optimisation are a standalone service. We address hosting, caching, image optimisation, plugin bloat, database queries and Core Web Vitals. Most sites see significant score improvements within 2 weeks.' },
];

export default function WordPressCMSPage() {
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
            { label: 'WordPress & CMS' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(60px, 8vw, 100px) 0 clamp(60px, 8vw, 120px)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.015) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '30%', left: '5%', width: 600, height: 600, background: 'radial-gradient(ellipse,rgba(79,70,229,0.08) 0%,transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 80px)', alignItems: 'center' }}>
              {/* Left */}
              <div>
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4F46E5', boxShadow: '0 0 8px #4F46E5' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#4F46E5', letterSpacing: '0.12em', textTransform: 'uppercase' }}>WordPress & CMS</span>
                </div>
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.8rem,5vw,5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 24px', maxWidth: 700 }}>
                  We Build Sites That <span style={{ color: '#4F46E5' }}>Sell.</span>
                </h1>
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(0,0,0,0.55)', lineHeight: 1.75, maxWidth: 520, margin: '0 0 40px' }}>
                  Custom WordPress sites, headless CMS platforms and content management systems — fast, secure and easy to manage.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#4F46E5', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
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
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, color: '#4F46E5', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
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
              <span style={{ fontSize: 11, fontWeight: 700, color: '#4F46E5', letterSpacing: '0.12em', textTransform: 'uppercase' }}>What We Build</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>WordPress & CMS Services</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 520, margin: '0 0 56px', lineHeight: 1.7 }}>Fast, secure and editable — everything from marketing sites to headless e-commerce.</p>
            {/* Service Cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {services.map(s => (
                <div key={s.title} style={{ padding: '36px 32px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; e.currentTarget.style.background = 'rgba(79,70,229,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#4F46E5,transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section ref={s3} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#4F46E5', letterSpacing: '0.12em', textTransform: 'uppercase' }}>How We Work</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 60px' }}>Our Website Build Process</h2>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ position: 'absolute', top: 24, bottom: 24, left: 23, width: 1, background: 'linear-gradient(to bottom, #4F46E5, rgba(79,70,229,0.1))', zIndex: 0 }} />
              {steps.map((step, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 32, paddingBottom: i < steps.length - 1 ? 48 : 0, position: 'relative', zIndex: 1, transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#4F46E5', color: '#fff', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
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
              <span style={{ fontSize: 11, fontWeight: 700, color: '#4F46E5', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Results</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Sites That Perform</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {results.map((r, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(79,70,229,0.04)', border: '1px solid rgba(79,70,229,0.12)', borderRadius: 24, padding: '40px 32px', transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 700, color: '#4F46E5', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.value}</div>
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
              <span style={{ fontSize: 11, fontWeight: 700, color: '#4F46E5', letterSpacing: '0.12em', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ background: openFaq === i ? 'rgba(79,70,229,0.04)' : 'rgba(0,0,0,0.015)', border: `1px solid ${openFaq === i ? 'rgba(79,70,229,0.2)' : 'rgba(0,0,0,0.05)'}`, borderRadius: 20, overflow: 'hidden', transition: '0.3s', transitionDelay: `${i * 0.06}s` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#111827', textAlign: 'left' }}>{faq.q}</span>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#4F46E5' : 'rgba(0,0,0,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  {openFaq === i && <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(0,0,0,0.55)', lineHeight: 1.75 }}>{faq.a}</p>}
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
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 }}>Technology</div>
                <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                  The Stack Behind Your Site
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
                Industry-standard tools chosen for reliability, editorial control, and long-term maintainability.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {[
                { label: 'CMS', chips: ['WordPress', 'Headless WP', 'WooCommerce', 'Elementor'] },
                { label: 'Development', chips: ['PHP', 'React (Headless)', 'REST API', 'GraphQL (WPGraphQL)'] },
                { label: 'Hosting', chips: ['WP Engine', 'Cloudways', 'AWS Lightsail', 'Vercel (headless)'] },
                { label: 'Plugins', chips: ['ACF Pro', 'Yoast SEO', 'WooCommerce', 'WPML', 'Gravity Forms'] },
              ].map(cat => (
                <div key={cat.label}
                  style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; e.currentTarget.style.background = 'rgba(79,70,229,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c}
                        style={{ padding: '7px 16px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.35)'; e.currentTarget.style.color = '#4F46E5'; e.currentTarget.style.background = 'rgba(79,70,229,0.06)'; }}
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
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 }}>Industries</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                WordPress Solutions by Industry
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {[
                { icon: '🛒', title: 'E-Commerce', desc: 'WooCommerce stores, product catalogs, subscription boxes and multi-vendor marketplaces built for conversion.', href: '/industries/ecommerce' },
                { icon: '🏥', title: 'Healthcare', desc: 'HIPAA-compliant patient portals, clinic websites, appointment booking and provider directory platforms.', href: '/industries/healthcare' },
                { icon: '📚', title: 'Education', desc: 'Course platforms, alumni networks, school websites and learning management systems with editorial control.', href: '/industries/edtech' },
                { icon: '🏠', title: 'Real Estate', desc: 'Property listings, agent portals, MLS integrations and neighbourhood guides with advanced search and filtering.', href: '/industries/enterprise' },
                { icon: '🍽️', title: 'Hospitality', desc: 'Restaurant sites, booking systems, event platforms and venue showcases with reservation integrations.', href: '/industries/logistics' },
                { icon: '💚', title: 'Non-Profit', desc: 'Donation platforms, volunteer management, campaign sites and impact reporting dashboards.', href: '/industries/fintech' },
              ].map(ind => (
                <Link key={ind.title} href={ind.href} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '36px 32px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease', height: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; e.currentTarget.style.background = 'rgba(79,70,229,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#4F46E5,transparent)' }} />
                    <div style={{ fontSize: 32, marginBottom: 20 }}>{ind.icon}</div>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 12 }}>{ind.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, margin: '0 0 16px' }}>{ind.desc}</p>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#4F46E5', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
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
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 }}>Investment</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 16px' }}>
                WordPress & CMS Pricing
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>Transparent pricing based on scope and complexity. Every engagement starts with a detailed proposal.</p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {[
                {
                  tier: 'Business Site',
                  price: '$5,000+',
                  desc: 'A polished, professional WordPress site built to convert.',
                  features: ['Custom theme development', '5-10 pages', 'Contact forms & CTAs', 'SEO foundations', 'Mobile responsive', '30-day post-launch support'],
                },
                {
                  tier: 'E-Commerce',
                  price: '$15,000+',
                  desc: 'A full WooCommerce store ready to sell from day one.',
                  features: ['WooCommerce setup', 'Payment gateway integration', 'Inventory management', 'Shipping configuration', 'Custom checkout flow', 'Marketing integrations'],
                  featured: true,
                },
                {
                  tier: 'Enterprise',
                  price: '$35,000+',
                  desc: 'Headless WordPress with custom plugins and API integrations.',
                  features: ['Headless WP architecture', 'Multi-site setup', 'Custom plugin development', 'API integrations', 'Advanced security hardening', 'Dedicated support & SLA'],
                },
              ].map(plan => (
                <div key={plan.tier} style={{ padding: '40px 32px', border: plan.featured ? '2px solid rgba(79,70,229,0.4)' : '1px solid rgba(0,0,0,0.06)', borderRadius: 28, background: plan.featured ? 'rgba(79,70,229,0.04)' : 'rgba(0,0,0,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  {plan.featured && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#4F46E5,transparent)' }} />}
                  {plan.featured && <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4F46E5', background: 'rgba(79,70,229,0.1)', padding: '5px 14px', borderRadius: 100, marginBottom: 16, display: 'inline-block', alignSelf: 'flex-start' }}>Most Popular</span>}
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 8 }}>{plan.tier}</h3>
                  <div style={{ fontSize: 'clamp(2rem,3vw,2.5rem)', fontWeight: 700, color: '#4F46E5', letterSpacing: '-0.03em', marginBottom: 12 }}>{plan.price}</div>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, marginBottom: 24 }}>{plan.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, flex: 1 }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(0,0,0,0.55)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: 48, borderRadius: 100, background: plan.featured ? '#4F46E5' : 'transparent', border: plan.featured ? 'none' : '1px solid rgba(0,0,0,0.1)', color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; if (plan.featured) e.currentTarget.style.boxShadow = '0 12px 32px rgba(79,70,229,0.35)'; else e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'; }}
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
                  color: 'rgba(0,0,0,0.55)', background: 'rgba(0,0,0,0.02)',
                  border: '1px solid rgba(0,0,0,0.06)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = 'rgba(0,0,0,0.55)'; }}
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
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4F46E5', boxShadow: '0 0 8px #4F46E5' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#4F46E5', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get Started</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Ready to Build Your <span style={{ color: '#4F46E5' }}>Website?</span>
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(0,0,0,0.45)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75 }}>
              500+ sites launched. Fast, secure, and built to convert from day one.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#4F46E5', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Start Your Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                View Portfolio
              </Link>
            </div>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
              {['30-day post-launch support', 'Team training included', '100 PageSpeed guaranteed'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
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
