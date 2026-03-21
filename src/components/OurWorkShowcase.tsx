'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

export interface WorkItem {
  name: string;
  category: string;
  company: string;
  results: string[];
  techs: string[];
}

interface OurWorkShowcaseProps {
  items: WorkItem[];
  title?: string;
  subtitle?: string;
  description?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function OurWorkShowcase({
  items,
  title = 'Our Work',
  subtitle = 'Products That Users Actually Love.',
  description = '200+ products shipped across fintech, healthcare, e-commerce, and SaaS — built to scale, designed to convert.',
}: OurWorkShowcaseProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{
        position: 'relative',
        background: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%',
          height: '120%',
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(34,197,94,0.02) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(59,130,246,0.02) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="reveal"
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 16,
            }}
          >
            {title}
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 500,
              color: '#ffffff',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              margin: '0 0 24px',
              maxWidth: 700,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {subtitle}
          </h2>
          <p
            style={{
              fontSize: 'clamp(14px, 2vw, 16px)',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
              maxWidth: 700,
              margin: '0 auto',
            }}
          >
            {description}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 24,
          }}
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="reveal"
              style={{
                position: 'relative',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(34,197,94,0.3)';
                el.style.background = 'rgba(34,197,94,0.03)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.background = 'rgba(255,255,255,0.015)';
                el.style.transform = '';
              }}
            >
              <div
                style={{
                  padding: 'clamp(28px, 4vw, 36px)',
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.015)',
                  transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'linear-gradient(90deg, #22c55e, transparent)',
                  }}
                />

                {/* Category badge */}
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#22c55e',
                    background: 'rgba(34,197,94,0.1)',
                    padding: '5px 14px',
                    borderRadius: 100,
                    marginBottom: 16,
                    width: 'fit-content',
                  }}
                >
                  {item.category}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 'clamp(1.4rem, 2vw, 1.6rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '-0.01em',
                    margin: '0 0 8px',
                    lineHeight: 1.2,
                  }}
                >
                  {item.name}
                </h3>

                {/* Company */}
                <p
                  style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.5)',
                    margin: '0 0 20px',
                    fontWeight: 500,
                  }}
                >
                  {item.company}
                </p>

                {/* Results */}
                <div style={{ marginBottom: 20, flex: 1 }}>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)',
                      marginBottom: 10,
                    }}
                  >
                    Results
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {item.results.map((result, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          fontSize: 13,
                          color: 'rgba(255,255,255,0.65)',
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="3"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)',
                      marginBottom: 10,
                    }}
                  >
                    Technology
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {item.techs.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: 6,
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.6)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
