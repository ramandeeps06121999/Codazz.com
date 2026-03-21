'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 'caresync',
    client: 'CareSync',
    title: 'Healthcare Management Dashboard',
    category: 'Healthcare',
    description: 'Comprehensive healthcare platform with patient management, timetable scheduling, disease statistics, and real-time treatment tracking for 130+ patients.',
    image: '/portfolio/image-1888377.jpg',
    metrics: [
      { value: '130+', label: 'Active Patients' },
      { value: '48', label: 'Medical Folders' },
      { value: '4.9★', label: 'User Rating' },
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'WebSocket'],
    href: '/portfolio',
  },
  {
    id: 'lykfit',
    client: 'LYKFit',
    title: 'E-Commerce Fashion Platform',
    category: 'E-Commerce',
    description: 'Modern headless e-commerce platform for a premium fitness apparel brand with responsive storefront, product catalog, and seamless checkout.',
    image: '/portfolio/1-4.png',
    metrics: [
      { value: '3x', label: 'Revenue Growth' },
      { value: '2.5M+', label: 'Monthly Visitors' },
      { value: '1.1s', label: 'Page Load' },
    ],
    tags: ['Next.js', 'Shopify', 'Stripe', 'Tailwind', 'Vercel'],
    href: '/portfolio',
  },
  {
    id: 'nftc',
    client: 'NFTc',
    title: 'NFT Marketplace Platform',
    category: 'Web3',
    description: 'Vibrant NFT marketplace with wallet integration, token displays, and 3D asset previews for a cycling-themed digital collectibles community.',
    image: '/portfolio/image-1877877.jpg',
    metrics: [
      { value: '$2.4M', label: 'Trading Volume' },
      { value: '15K+', label: 'NFTs Listed' },
      { value: '8K', label: 'Active Users' },
    ],
    tags: ['React', 'Solidity', 'ethers.js', 'IPFS', 'Hardhat'],
    href: '/portfolio',
  },
  {
    id: 'trucking',
    client: 'Custom Trucking & Baling',
    title: 'Logistics & Fleet Management',
    category: 'Logistics',
    description: 'Full-service trucking and agricultural hauling platform with fleet tracking, quote generation, and service management across Alberta.',
    image: '/portfolio/Group-26.jpg',
    metrics: [
      { value: '500+', label: 'Projects Completed' },
      { value: '24/7', label: 'Service Availability' },
      { value: '30+', label: 'Years Experience' },
    ],
    tags: ['Next.js', 'Node.js', 'MapBox', 'AWS', 'MongoDB'],
    href: '/portfolio',
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
    <section ref={ref} id="portfolio" className="section-padding" style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="cb-container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(40px, 6vw, 80px)', gap: 'clamp(20px, 4vw, 40px)', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Our Work</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              Our Work Speaks<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>For Itself.</span>
            </h2>
          </div>
          <div className="portfolio-tabs">
            {projects.map((pr, i) => (
              <button
                key={pr.category}
                onClick={() => setActive(i)}
                style={{
                  padding: '12px 28px',
                  borderRadius: 100,
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 600,
                  border: active === i ? '1px solid rgba(34,197,94,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  background: active === i ? 'rgba(34,197,94,0.12)' : 'transparent',
                  color: active === i ? '#22c55e' : 'rgba(255,255,255,0.6)',
                  transition: 'all 0.25s ease',
                  fontFamily: 'inherit',
                  boxShadow: active === i ? '0 0 16px rgba(34,197,94,0.15)' : 'none',
                  transform: active === i ? 'translateY(-1px)' : 'none',
                }}
                onMouseEnter={e => {
                  if (active !== i) {
                    (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.18)';
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)';
                  }
                }}
                onMouseLeave={e => {
                  if (active !== i) {
                    (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.6)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  }
                }}
              >
                {pr.category}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal reveal-d1 portfolio-grid" style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'clamp(24px, 4vw, 48px)', overflow: 'hidden', minHeight: 400 }}>
          <div style={{ padding: 'clamp(40px,6vw,80px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>{p.client}</div>
              <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 20 }}>{p.title}</h3>
              <p style={{ fontSize: 17, color: '#9ca3af', lineHeight: 1.7, maxWidth: 480 }}>{p.description}</p>
            </div>
            <div>
              <div className="portfolio-content-row" style={{ marginBottom: 40 }}>
                {p.metrics.map((m, i) => (
                  <div key={m.label} style={{ display: 'contents' }}>
                    {i > 0 && <div style={{ width: 1, background: 'rgba(255,255,255,0.06)', alignSelf: 'stretch' }} />}
                    <div>
                      <div style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1, background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{m.value}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>{m.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 30 }}>
                {p.tags.map(t => <span key={t} style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', padding: '8px 18px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100 }}>{t}</span>)}
              </div>
              <a href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 28px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                View Portfolio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>

          {/* Right: real project image */}
          <div style={{ background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', borderLeft: '1px solid rgba(255,255,255,0.04)', minHeight: 280 }} className="portfolio-visual">
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
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,12,41,0.6) 0%, transparent 60%)' }} />
            {/* Metric badge */}
            <div style={{ position: 'absolute', bottom: 16, right: 16, padding: '10px 16px', background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 10, backdropFilter: 'blur(12px)', maxWidth: 'calc(100% - 32px)' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{p.metrics[0].value} {p.metrics[0].label}</span>
            </div>
          </div>
        </div>

        {/* View all link */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(32px, 5vw, 56px)' }}>
          <a
            href="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 15,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              padding: '14px 32px',
              borderRadius: 100,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.03)',
              transition: 'all 0.25s ease',
              fontFamily: 'inherit',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = '#22c55e';
              el.style.borderColor = 'rgba(34,197,94,0.35)';
              el.style.background = 'rgba(34,197,94,0.08)';
              el.style.boxShadow = '0 0 20px rgba(34,197,94,0.12)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = 'rgba(255,255,255,0.7)';
              el.style.borderColor = 'rgba(255,255,255,0.1)';
              el.style.background = 'rgba(255,255,255,0.03)';
              el.style.boxShadow = 'none';
            }}
          >
            View All 200+ Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
