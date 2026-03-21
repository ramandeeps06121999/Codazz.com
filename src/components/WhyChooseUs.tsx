'use client';

import React, { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    title: '16+ Years Experience',
    description: 'From startups to Fortune 500s',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="16" r="2" />
        <line x1="12" y1="14" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    title: '100+ Engineers',
    description: 'Full-stack teams ready to deploy',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="3" />
        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
        <circle cx="19" cy="9" r="2.5" />
        <path d="M22 21a4.5 4.5 0 0 0-4-4.47" />
        <circle cx="5" cy="9" r="2.5" />
        <path d="M2 21a4.5 4.5 0 0 1 4-4.47" />
      </svg>
    ),
  },
  {
    title: '24 Countries Served',
    description: 'Global delivery, local understanding',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
      </svg>
    ),
  },
  {
    title: '98% Client Retention',
    description: 'Clients stay because we deliver',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'SOC 2 Certified',
    description: 'Enterprise-grade security standard',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: '8-Week MVP',
    description: 'From idea to launch, fast',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const sectionStyle: React.CSSProperties = {
    background: '#000',
    padding: '100px 20px',
    position: 'relative',
    overflow: 'hidden',
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: 64,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  };

  const h2Style: React.CSSProperties = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 800,
    color: '#fff',
    margin: 0,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 18,
    color: 'rgba(255,255,255,0.5)',
    marginTop: 16,
    fontWeight: 400,
  };

  const accentDotStyle: React.CSSProperties = {
    color: '#22c55e',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gap: 24,
  };

  const ctaWrapStyle: React.CSSProperties = {
    textAlign: 'center',
    marginTop: 56,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s',
  };

  const ctaBtnStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '18px 44px',
    background: '#22c55e',
    color: '#000',
    fontWeight: 700,
    fontSize: 17,
    borderRadius: 60,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  };

  return (
    <>
      <style>{`
        .wcuz-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
          .wcuz-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .wcuz-grid {
            grid-template-columns: 1fr;
          }
        }
        .wcuz-card {
          position: relative;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 40px 32px 36px;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          cursor: default;
        }
        .wcuz-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 32px;
          right: 32px;
          height: 3px;
          background: #22c55e;
          border-radius: 0 0 3px 3px;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        .wcuz-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 30px rgba(34,197,94,0.15), 0 12px 40px rgba(0,0,0,0.4);
          border-color: rgba(34,197,94,0.3);
        }
        .wcuz-card:hover::before {
          opacity: 1;
        }
        .wcuz-card:hover .wcuz-icon-circle {
          transform: scale(1.1);
        }
        .wcuz-icon-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.35s ease;
        }
        .wcuz-cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 24px rgba(34,197,94,0.35);
        }
      `}</style>

      <section ref={sectionRef} style={sectionStyle}>
        <div style={innerStyle}>
          <div style={headerStyle}>
            <h2 style={h2Style}>
              Why Companies Choose Codazz<span style={accentDotStyle}>.</span>
            </h2>
            <p style={subtitleStyle}>
              The partner that turns ambition into outcomes
            </p>
          </div>

          <div className="wcuz-grid" style={gridStyle}>
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="wcuz-card"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.5s ease ${0.15 + i * 0.1}s, transform 0.5s ease ${0.15 + i * 0.1}s`,
                }}
              >
                <div className="wcuz-icon-circle">{reason.icon}</div>
                <h3
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 700,
                    margin: '0 0 8px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 15,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div style={ctaWrapStyle}>
            <a href="/contact" className="wcuz-cta-btn" style={ctaBtnStyle}>
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
