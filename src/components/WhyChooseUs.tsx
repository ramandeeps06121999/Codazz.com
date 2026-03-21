'use client';

import React, { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    title: '16+ Years Experience',
    description: 'From early-stage startups to Fortune 500s — we have seen every challenge and know how to navigate it.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    description: 'Full-stack teams across mobile, web, AI, and cloud — ready to deploy on your timeline.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    description: 'Global delivery with local understanding — we adapt to your market, culture, and timezone.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
      </svg>
    ),
  },
  {
    title: '98% Client Retention',
    description: 'Clients stay because we deliver. Our track record speaks through repeat business and referrals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'SOC 2 Certified',
    description: 'Enterprise-grade security standards. Your data and IP are protected from day one.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: '8-Week MVP',
    description: 'From idea to live product in 8 weeks. Structured sprints, zero fluff, maximum momentum.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
      </svg>
    ),
  },
];

const marqueeItems = [
  '500+ Apps Built',
  '99% Client Retention',
  '8-Week MVP',
  '100+ Engineers',
  '15+ Countries',
  'Fixed Price, No Surprises',
  '24/7 Support',
  'NDA Day 1',
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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Duplicate for seamless loop
  const doubledItems = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <style>{`
        @keyframes why-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .wcuz-marquee-track {
          display: flex;
          width: max-content;
          animation: why-marquee 28s linear infinite;
        }

        .wcuz-marquee-wrap:hover .wcuz-marquee-track {
          animation-play-state: paused;
        }

        .wcuz-grid {
          display: grid;
          gap: 2px;
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 900px) {
          .wcuz-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .wcuz-grid {
            grid-template-columns: 1fr;
          }
        }

        .wcuz-card {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 32px 28px;
          border-left: 2px solid transparent;
          border-image: linear-gradient(180deg, #22c55e 0%, rgba(34,197,94,0.2) 100%) 1;
          background: transparent;
          transition: background 0.25s ease;
          cursor: default;
          position: relative;
        }

        .wcuz-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(34,197,94,0.04);
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
        }

        .wcuz-card:hover::after {
          opacity: 1;
        }

        .wcuz-card:hover .wcuz-icon-wrap {
          background: rgba(34,197,94,0.15);
        }

        .wcuz-icon-wrap {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s ease;
        }

        .wcuz-cta-btn {
          display: inline-block;
          padding: 18px 48px;
          background: #22c55e;
          color: #000;
          font-weight: 700;
          font-size: 16px;
          border-radius: 60px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          letter-spacing: -0.01em;
        }

        .wcuz-cta-btn:hover {
          transform: scale(1.04);
          box-shadow: 0 0 32px rgba(34,197,94,0.4);
          background: #16a34a;
        }

        .wcuz-label {
          display: inline-block;
          padding: 6px 16px;
          border: 1px solid rgba(34,197,94,0.35);
          border-radius: 60px;
          color: #22c55e;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .wcuz-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 60px 0 0;
        }
      `}</style>

      <section ref={sectionRef} style={{ background: '#000000', padding: '100px 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Header */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 56,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <span className="wcuz-label">Why Choose Codazz</span>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                fontWeight: 800,
                color: '#fff',
                margin: '0 0 18px',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
              }}
            >
              The Agency That<br />
              <span style={{ color: '#22c55e' }}>Actually Delivers.</span>
            </h2>
            <p
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.5)',
                margin: 0,
                fontWeight: 400,
                maxWidth: 480,
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: 1.6,
              }}
            >
              Built for founders and product teams who need results — not promises.
            </p>
          </div>

          {/* Marquee Strip */}
          <div
            className="wcuz-marquee-wrap"
            style={{
              overflow: 'hidden',
              marginBottom: 72,
              borderTop: '1px solid rgba(255,255,255,0.06)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              padding: '14px 0',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.7s ease 0.2s',
            }}
          >
            <div className="wcuz-marquee-track">
              {doubledItems.map((item, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '0 36px',
                    whiteSpace: 'nowrap',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                  }}
                >
                  <span style={{ color: '#22c55e', fontWeight: 700, fontSize: 15 }}>✓</span>
                  {item}
                  <span style={{ color: 'rgba(255,255,255,0.15)', marginLeft: 10 }}>•</span>
                </span>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div
            className="wcuz-grid"
            style={{
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20,
              overflow: 'hidden',
            }}
          >
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="wcuz-card"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease ${0.2 + i * 0.08}s, transform 0.5s ease ${0.2 + i * 0.08}s`,
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div className="wcuz-icon-wrap">
                  {reason.icon}
                </div>
                <div>
                  <h3
                    style={{
                      color: '#fff',
                      fontSize: 17,
                      fontWeight: 600,
                      margin: '0 0 6px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: 14,
                      margin: 0,
                      lineHeight: 1.6,
                      fontWeight: 400,
                    }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              textAlign: 'center',
              marginTop: 56,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s',
            }}
          >
            <a href="/contact" className="wcuz-cta-btn">
              Start Your Project →
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
