'use client';

import { useRef, useEffect } from 'react';

interface Testimonial {
  name: string;
  company: string;
  role: string;
  quote: string;
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="testimonial-marquee-card"
      style={{
        width: 380,
        flexShrink: 0,
        padding: '32px 28px',
        borderRadius: 20,
        border: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 24,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
      }}
    >
      {/* Quote */}
      <div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(34,197,94,0.25)" style={{ marginBottom: 16 }}>
          <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
        </svg>
        <p style={{
          fontSize: 'clamp(13px, 2vw, 15px)',
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.75,
          fontStyle: 'italic',
          margin: 0,
        }}>
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 20 }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'rgba(34,197,94,0.08)',
          border: '1px solid rgba(34,197,94,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13,
          fontWeight: 700,
          color: '#22c55e',
          flexShrink: 0,
        }}>
          {t.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{t.name}</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{t.role}, {t.company}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialMarquee({
  testimonials,
  heading = 'What Our Clients Say',
}: {
  testimonials: Testimonial[];
  heading?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach((child) => obs.observe(child));
    return () => obs.disconnect();
  }, []);

  // Duplicate for seamless scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 120px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes testimonial-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonial-marquee-track {
          animation: testimonial-scroll 40s linear infinite;
        }
        .testimonial-marquee-track:hover {
          animation-play-state: paused;
        }
        .testimonial-marquee-card:hover {
          border-color: rgba(34,197,94,0.2) !important;
          background: rgba(34,197,94,0.03) !important;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }
      `}</style>

      {/* Header */}
      <div className="cb-container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
            marginBottom: 20,
          }}>
            Testimonials
          </div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 4rem)',
            fontWeight: 500,
            color: '#ffffff',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            margin: 0,
          }}>
            {heading}
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="reveal"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Edge fades */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 120,
            height: '100%',
            background: 'linear-gradient(to right, #000000, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 120,
            height: '100%',
            background: 'linear-gradient(to left, #000000, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div
          className="testimonial-marquee-track"
          style={{
            display: 'flex',
            gap: 20,
            width: 'max-content',
          }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`t-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
