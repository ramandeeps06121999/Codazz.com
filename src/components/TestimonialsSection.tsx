'use client';
import { useRef, useEffect, useState, useCallback } from 'react';

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'CEO',
    company: 'Fintech Startup, San Francisco',
    initials: 'SJ',
    avatarBg: 'rgba(79,70,229,0.15)',
    avatarBorder: 'rgba(79,70,229,0.3)',
    avatarColor: '#818cf8',
    stars: 5,
    text: 'They transformed our legacy system into a high-performance cloud platform. Technical depth is unparalleled — shipped in 10 weeks, zero bugs in production.',
  },
  {
    name: 'Michael D.',
    role: 'Head of Product',
    company: 'Healthcare SaaS, Austin',
    initials: 'MD',
    avatarBg: 'rgba(6,182,212,0.15)',
    avatarBorder: 'rgba(6,182,212,0.3)',
    avatarColor: '#22d3ee',
    stars: 5,
    text: 'The level of detail in their product design phase saved us thousands in development costs. A truly strategic partner — they think like founders, not vendors.',
  },
  {
    name: 'Alex R.',
    role: 'Founder',
    company: 'E-Commerce Platform, New York',
    initials: 'AR',
    avatarBg: 'rgba(244,63,94,0.15)',
    avatarBorder: 'rgba(244,63,94,0.3)',
    avatarColor: '#fb7185',
    stars: 5,
    text: "Scaling to 500K concurrent users was seamless with their architecture. Black Friday, not a single crash. I'm never going anywhere else.",
  },
  {
    name: 'Priya K.',
    role: 'CTO',
    company: 'EdTech Series A, Dubai',
    initials: 'PK',
    avatarBg: 'rgba(34,197,94,0.15)',
    avatarBorder: 'rgba(34,197,94,0.3)',
    avatarColor: '#22c55e',
    stars: 5,
    text: 'We were struggling with a React Native app that kept crashing. The team rebuilt the entire architecture in 6 weeks — crash rate dropped to 0.01%. Absolute lifesaver.',
  },
  {
    name: 'David L.',
    role: 'VP Engineering',
    company: 'Logistics Corp, Chicago',
    initials: 'DL',
    avatarBg: 'rgba(251,191,36,0.15)',
    avatarBorder: 'rgba(251,191,36,0.3)',
    avatarColor: '#fbbf24',
    stars: 5,
    text: 'Their team integrated real-time GPS tracking and route optimization into our fleet management system. Delivery times dropped 34% in the first month.',
  },
  {
    name: 'Nina W.',
    role: 'Founder',
    company: 'D2C Brand, Los Angeles',
    initials: 'NW',
    avatarBg: 'rgba(168,85,247,0.15)',
    avatarBorder: 'rgba(168,85,247,0.3)',
    avatarColor: '#a855f7',
    stars: 5,
    text: 'From branding to a fully custom Shopify Plus build — they handled everything. Revenue tripled within 4 months of launch. The ROI speaks for itself.',
  },
];

const Stars = ({ count }: { count: number }) => (
  <div style={{ display: 'flex', gap: 3 }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#22c55e" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const total = testimonials.length;

  // We clone the first slide at the end for seamless infinite loop
  const slides = [...testimonials, testimonials[0]];

  const goTo = useCallback((index: number, animate = true) => {
    setIsTransitioning(animate);
    setActive(index);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActive(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  // Handle seamless loop: when we reach the clone (index === total), jump back to 0
  useEffect(() => {
    if (active === total) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActive(0);
      }, 600); // wait for transition to finish
      return () => clearTimeout(timeout);
    }
  }, [active, total]);

  // Reveal animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach(child => obs.observe(child));
    return () => obs.disconnect();
  }, []);

  const displayIndex = active >= total ? 0 : active;

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-padding"
      style={{
        background: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div className="cb-container">
        <div className="reveal" style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}>
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
          <div className="testimonials-heading-grid">
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 500,
              color: '#ffffff',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              margin: 0,
            }}>
              Trusted by People<br />
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>Changing the World.</span>
            </h2>
            <div>
              <p style={{ fontSize: 17, color: '#9ca3af', lineHeight: 1.7, margin: '0 0 24px' }}>
                Hear directly from the founders and CTOs who&apos;ve shipped with us.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 20px',
                border: '1px solid rgba(34,197,94,0.2)',
                borderRadius: 100,
                background: 'rgba(34,197,94,0.08)',
              }}>
                <Stars count={5} />
                <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>4.9</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>·</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>500+ reviews on Clutch</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="reveal"
        style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: 100, height: '100%',
          background: 'linear-gradient(to right, #000000, transparent)', zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 100, height: '100%',
          background: 'linear-gradient(to left, #000000, transparent)', zIndex: 2, pointerEvents: 'none',
        }} />

        {/* Track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: 24,
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
            transform: `translateX(calc(-${active} * (min(380px, 80vw) + 24px) + max(calc((100vw - min(380px, 80vw)) / 2), 40px)))`,
            padding: '16px 0',
          }}
        >
          {slides.map((t, i) => {
            const isActive = i === active || (active === total && i === 0);
            return (
              <div
                key={`slide-${i}`}
                style={{
                  width: 'min(380px, 80vw)',
                  minWidth: 'min(380px, 80vw)',
                  flexShrink: 0,
                  padding: '32px 28px',
                  border: `1px solid ${isActive ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 28,
                  display: 'flex',
                  flexDirection: 'column' as const,
                  gap: 20,
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  cursor: 'default',
                  background: isActive ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.02)',
                  position: 'relative' as const,
                  opacity: isActive ? 1 : 0.5,
                  transform: isActive ? 'scale(1)' : 'scale(0.96)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)';
                  e.currentTarget.style.background = 'rgba(34,197,94,0.06)';
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1)';
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5), 0 0 30px rgba(34,197,94,0.08)';
                }}
                onMouseLeave={e => {
                  const isCurrent = i === active || (active === total && i === 0);
                  e.currentTarget.style.borderColor = isCurrent ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.background = isCurrent ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.transform = isCurrent ? 'scale(1)' : 'scale(0.96)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {/* Decorative quote mark */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(34,197,94,0.12)" style={{ position: 'absolute', top: 20, right: 20 }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>

                {/* Stars */}
                <Stars count={t.stars} />

                {/* Quote text */}
                <p style={{
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.8,
                  margin: 0,
                  flex: 1,
                  fontStyle: 'italic',
                }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  paddingTop: 20,
                }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: t.avatarBg,
                    border: `1.5px solid ${t.avatarBorder}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    fontWeight: 700,
                    color: t.avatarColor,
                    flexShrink: 0,
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation dots */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        marginTop: 40,
      }}>
        {testimonials.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            style={{
              width: displayIndex === i ? 32 : 10,
              height: 10,
              borderRadius: 100,
              border: 'none',
              background: displayIndex === i ? '#22c55e' : 'rgba(255,255,255,0.12)',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Post-testimonials CTA */}
      <div className="cb-container">
        <div style={{ textAlign: 'center', padding: '60px 0 0' }}>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
            Join 150+ companies who&apos;ve shipped with Codazz
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 44, padding: '0 24px', borderRadius: 100,
              background: '#ffffff', color: '#000000', fontSize: 14, fontWeight: 600,
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
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              color: '#ffffff', fontSize: 14, fontWeight: 600,
              textDecoration: 'none',
            }}>
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
