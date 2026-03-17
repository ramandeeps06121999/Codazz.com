'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 'fintech',
    client: 'Fintech Client',
    title: 'AI-Powered Trading Platform',
    category: 'FinTech',
    description: 'Real-time AI trading engine processing 50K+ daily transactions with institutional-grade security and 99.99% uptime.',
    image: '/images/portfolio-finance.png',
    metrics: [
      { value: '50K+', label: 'Daily Transactions' },
      { value: '99.99%', label: 'Uptime' },
      { value: '300ms', label: 'Avg Response' },
    ],
    tags: ['React', 'Python', 'AWS', 'PostgreSQL', 'Redis'],
    href: '/case-studies/fintech-trading-platform',
  },
  {
    id: 'healthcare',
    client: 'Healthcare Client',
    title: 'HIPAA-Compliant Telehealth Platform',
    category: 'Healthcare',
    description: 'Secure telehealth platform with video consultations, EHR integration, and real-time patient monitoring serving 200K+ sessions.',
    image: '/images/portfolio-health.png',
    metrics: [
      { value: '200K+', label: 'Patient Sessions' },
      { value: '4.8★', label: 'App Rating' },
      { value: '60%', label: 'Faster Consults' },
    ],
    tags: ['React Native', 'WebRTC', 'Node.js', 'AWS', 'HL7 FHIR'],
    href: '/case-studies/healthcare-telehealth',
  },
  {
    id: 'ecommerce',
    client: 'E-Commerce Client',
    title: 'Enterprise E-Commerce Platform',
    category: 'Retail',
    description: 'Headless commerce platform handling 2M+ monthly visitors with real-time inventory, multi-vendor support, and 3x revenue growth.',
    image: '/images/portfolio-retail.png',
    metrics: [
      { value: '3x', label: 'Revenue Growth' },
      { value: '2M+', label: 'Monthly Visitors' },
      { value: '1.2s', label: 'Page Load' },
    ],
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'Elasticsearch'],
    href: '/case-studies/ecommerce-platform',
  },
  {
    id: 'logistics',
    client: 'Logistics Client',
    title: 'Real-Time Fleet Management',
    category: 'Logistics',
    description: 'IoT-integrated logistics platform tracking 15K+ daily deliveries with ML-powered route optimization and 25% fuel savings.',
    image: '/images/portfolio-logistics.png',
    metrics: [
      { value: '15K+', label: 'Daily Deliveries' },
      { value: '25%', label: 'Fuel Savings' },
      { value: '98%', label: 'On-Time Rate' },
    ],
    tags: ['React', 'Python', 'TensorFlow', 'AWS IoT', 'MapBox'],
    href: '/case-studies/logistics-platform',
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState(0);
  const p = projects[active];
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="portfolio" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="cb-container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(40px, 8vw, 80px)', gap: 'clamp(20px, 4vw, 40px)', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Case Studies</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              Engineering Impact<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>At Scale.</span>
            </h2>
          </div>
          <div className="portfolio-tabs">
            {projects.map((pr, i) => (
              <button key={pr.category} onClick={() => setActive(i)} style={{ padding: '12px 28px', borderRadius: 100, cursor: 'pointer', fontSize: 13, fontWeight: 600, border: active === i ? '1px solid rgba(17,24,39,0.4)' : '1px solid rgba(0,0,0,0.08)', background: active === i ? 'rgba(17,24,39,0.1)' : 'transparent', color: active === i ? '#111827' : 'rgb(0,0,0)', transition: '0.3s', fontFamily: 'inherit' }}>{pr.category}</button>
            ))}
          </div>
        </div>

        <div className="reveal reveal-d1 portfolio-grid" style={{ border: '1px solid rgba(0,0,0,0.06)', borderRadius: 'clamp(24px, 4vw, 48px)', overflow: 'hidden', minHeight: 400 }}>
          <div style={{ padding: 'clamp(40px,6vw,80px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'rgba(0,0,0,0.015)' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(0,0,0,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>{p.client}</div>
              <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 20 }}>{p.title}</h3>
              <p style={{ fontSize: 17, color: 'rgb(0,0,0)', lineHeight: 1.7, maxWidth: 480 }}>{p.description}</p>
            </div>
            <div>
              <div className="portfolio-content-row" style={{ marginBottom: 40 }}>
                {p.metrics.map((m, i) => (
                  <div key={m.label} style={{ display: 'contents' }}>
                    {i > 0 && <div style={{ width: 1, background: 'rgba(0,0,0,0.06)', alignSelf: 'stretch' }} />}
                    <div>
                      <div style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 600, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1 }}>{m.value}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(0,0,0,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>{m.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 30 }}>
                {p.tags.map(t => <span key={t} style={{ fontSize: 12, fontWeight: 600, color: 'rgb(0,0,0)', padding: '8px 18px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 100 }}>{t}</span>)}
              </div>
              <a href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 28px', borderRadius: 100, background: '#111827', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                View Full Story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>

          {/* Right: real project image */}
          <div style={{ background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', borderLeft: '1px solid rgba(0,0,0,0.04)', minHeight: 280 }} className="portfolio-visual">
            <div style={{ position: 'absolute', inset: 0 }}>
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', opacity: 0.7 }}
              />
            </div>
            {/* Overlay gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
            {/* Metric badge */}
            <div style={{ position: 'absolute', bottom: 16, right: 16, padding: '10px 16px', background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(17,24,39,0.3)', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 10, backdropFilter: 'blur(12px)', maxWidth: 'calc(100% - 32px)' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#111827', boxShadow: '0 0 8px #111827' }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>{p.metrics[0].value} {p.metrics[0].label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
