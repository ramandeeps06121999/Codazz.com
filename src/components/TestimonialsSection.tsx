'use client';
import { useRef, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'CEO, Fintech Startup · San Francisco',
    initials: 'SJ',
    color: '#111827',
    stars: 5,
    text: 'They transformed our legacy system into a high-performance cloud platform. Technical depth is unparalleled — shipped in 10 weeks, zero bugs in production.',
    metric: '4.9★',
    metricLabel: 'App Rating',
    platform: 'Clutch',
  },
  {
    name: 'Michael D.',
    role: 'Head of Product, Healthcare SaaS · Austin',
    initials: 'MD',
    color: '#374151',
    stars: 5,
    text: 'The level of detail in their product design phase saved us thousands in development costs. A truly strategic partner — they think like founders, not vendors.',
    metric: '100K+',
    metricLabel: 'Users Onboarded',
    platform: 'Google',
  },
  {
    name: 'Alex R.',
    role: 'Founder, E-Commerce Platform · New York',
    initials: 'AR',
    color: '#111827',
    stars: 5,
    text: "Scaling to 500K concurrent users was seamless with their architecture. Black Friday, not a single crash. I'm never going anywhere else.",
    metric: '500K',
    metricLabel: 'Concurrent Users',
    platform: 'Clutch',
  },
  {
    name: 'Priya K.',
    role: 'CTO, EdTech Series A · Dubai',
    initials: 'PK',
    color: '#374151',
    stars: 5,
    text: 'We were struggling with a React Native app that kept crashing. The team rebuilt the entire architecture in 6 weeks — crash rate dropped to 0.01%. Absolute lifesaver.',
    metric: '99.99%',
    metricLabel: 'Uptime Achieved',
    platform: 'Clutch',
  },
  {
    name: 'David L.',
    role: 'VP Engineering, Logistics Corp · Chicago',
    initials: 'DL',
    color: '#111827',
    stars: 5,
    text: 'Their team integrated real-time GPS tracking and route optimization into our fleet management system. Delivery times dropped 34% in the first month.',
    metric: '34%',
    metricLabel: 'Faster Deliveries',
    platform: 'Google',
  },
  {
    name: 'Nina W.',
    role: 'Founder, D2C Brand · Los Angeles',
    initials: 'NW',
    color: '#374151',
    stars: 5,
    text: 'From branding to a fully custom Shopify Plus build — they handled everything. Revenue tripled within 4 months of launch. The ROI speaks for itself.',
    metric: '3x',
    metricLabel: 'Revenue Growth',
    platform: 'Clutch',
  },
];

const Stars = ({ count }: { count: number }) => (
  <div style={{ display: 'flex', gap: 3 }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#111827" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div
      style={{
        width: 380,
        minWidth: 380,
        padding: '32px 28px',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        cursor: 'default',
        background: 'rgba(0,0,0,0.015)',
        position: 'relative' as const,
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)';
        e.currentTarget.style.background = 'rgba(17,24,39,0.03)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.08), 0 0 40px rgba(17,24,39,0.08)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
        e.currentTarget.style.background = 'rgba(0,0,0,0.015)';
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {/* Quote mark */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(0,0,0,0.03)" style={{ position: 'absolute', top: 16, right: 16 }}>
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z"/>
      </svg>

      {/* Stars + platform */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Stars count={t.stars} />
        <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(0,0,0,0.2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.platform}</span>
      </div>

      <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.5)', lineHeight: 1.75, margin: 0, flex: 1 }}>&ldquo;{t.text}&rdquo;</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
        {/* Avatar + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: `rgba(${t.color === '#111827' ? '79,70,229' : '6,182,212'},0.12)`, border: `1px solid ${t.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: t.color }}>{t.initials}</span>
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>{t.name}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(0,0,0,0.25)', marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.08em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.role}</div>
          </div>
        </div>
        {/* Metric */}
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1 }}>{t.metric}</div>
          <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(0,0,0,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 3 }}>{t.metricLabel}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Pause on hover
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const pause = () => { track.style.animationPlayState = 'paused'; };
    const play = () => { track.style.animationPlayState = 'running'; };
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', play);
    return () => {
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', play);
    };
  }, []);

  return (
    <section ref={ref} id="testimonials" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
      <div className="cb-container">
        <div className="reveal" style={{ marginBottom: 'clamp(40px, 8vw, 60px)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Testimonials</div>
          <div className="testimonials-heading-grid">
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              Trusted by People<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Changing the World.</span>
            </h2>
            <div>
              <p style={{ fontSize: 17, color: 'rgb(0,0,0)', lineHeight: 1.7, margin: '0 0 24px' }}>
                Hear directly from the founders and CTOs who&apos;ve shipped with us.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 20px', border: '1px solid rgba(17,24,39,0.2)', borderRadius: 100, background: 'rgba(17,24,39,0.05)' }}>
                <Stars count={5} />
                <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>4.9</span>
                <span style={{ fontSize: 13, color: 'rgb(0,0,0)' }}>·</span>
                <span style={{ fontSize: 13, color: 'rgb(0,0,0)' }}>500+ reviews on Clutch</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Single-line carousel */}
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 100, height: '100%', background: 'linear-gradient(to right, #ffffff, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 100, height: '100%', background: 'linear-gradient(to left, #ffffff, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: 20,
            width: 'max-content',
            animation: 'testimonials-scroll 40s linear infinite',
            paddingLeft: 40,
          }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
          {/* Duplicate for seamless loop */}
          {testimonials.map((t) => (
            <TestimonialCard key={`dup-${t.name}`} t={t} />
          ))}
        </div>
      </div>

      {/* Post-testimonials CTA */}
      <div className="cb-container">
        <div style={{ textAlign: 'center', padding: '60px 0 0' }}>
          <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.4)', marginBottom: 20 }}>
            Join 150+ companies who&apos;ve shipped with Codazz
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 44, padding: '0 24px', borderRadius: 100,
              background: '#111827', color: '#fff', fontSize: 14, fontWeight: 600,
              textDecoration: 'none',
            }}>
              Start Your Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/case-studies" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 44, padding: '0 24px', borderRadius: 100,
              background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.08)',
              color: '#111827', fontSize: 14, fontWeight: 600,
              textDecoration: 'none',
            }}>
              View Case Studies
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonials-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
