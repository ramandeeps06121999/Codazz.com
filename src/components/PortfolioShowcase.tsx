'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCard {
  title: string;
  category: string;
  image: string;
  metrics: { value: string; label: string }[];
  tech: string[];
}

const PROJECTS: ProjectCard[] = [
  {
    title: 'KPR Interiors',
    category: 'Web Design',
    image: '/portfolio/all-devices-black-1.png',
    metrics: [{ value: '4x', label: 'Lead Gen' }, { value: '1.8s', label: 'Load Time' }],
    tech: ['Next.js', 'Tailwind', 'GSAP'],
  },
  {
    title: 'CareSync',
    category: 'Healthcare',
    image: '/portfolio/image-1888377.jpg',
    metrics: [{ value: '130+', label: 'Patients' }, { value: '4.9★', label: 'Rating' }],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'LYKFit',
    category: 'E-Commerce',
    image: '/portfolio/1-4.png',
    metrics: [{ value: '3x', label: 'Revenue' }, { value: '2.5M+', label: 'Visitors' }],
    tech: ['Next.js', 'Shopify', 'Stripe'],
  },
  {
    title: 'Pioneer Logistics',
    category: 'Logistics',
    image: '/portfolio/all-devices-black-2.png',
    metrics: [{ value: '15K+', label: 'Deliveries/Mo' }, { value: '98%', label: 'On-Time' }],
    tech: ['React', 'Node.js', 'MapBox'],
  },
  {
    title: 'BYT Trucking',
    category: 'Logistics',
    image: '/portfolio/all-devices-black-3.png',
    metrics: [{ value: '500+', label: 'Projects' }, { value: '30+', label: 'Years' }],
    tech: ['Next.js', 'MapBox', 'MongoDB'],
  },
  {
    title: 'ReviewPro',
    category: 'SaaS',
    image: '/portfolio/all-devices-black-4.png',
    metrics: [{ value: '10K+', label: 'Businesses' }, { value: '200%', label: 'Growth' }],
    tech: ['React', 'Google API', 'Redis'],
  },
  {
    title: 'Media Studio',
    category: 'Web Design',
    image: '/portfolio/3-1-1.png',
    metrics: [{ value: '5x', label: 'Client Leads' }, { value: '85%', label: 'Engagement' }],
    tech: ['Next.js', 'GSAP', 'Framer Motion'],
  },
  {
    title: 'SmartLamp',
    category: 'IoT',
    image: '/portfolio/Untitled-design-18.png',
    metrics: [{ value: '50K+', label: 'Downloads' }, { value: '4.7★', label: 'Rating' }],
    tech: ['React Native', 'Firebase', 'IoT SDK'],
  },
  {
    title: 'HomeNest',
    category: 'Mobile',
    image: '/portfolio/Untitled-design-21.png',
    metrics: [{ value: '1M+', label: 'Downloads' }, { value: '68%', label: 'D30 Retention' }],
    tech: ['React Native', 'Firebase', 'MapBox'],
  },
  {
    title: 'NFTc Marketplace',
    category: 'Web3',
    image: '/portfolio/image-1877877.jpg',
    metrics: [{ value: '$2.4M', label: 'Volume' }, { value: '15K+', label: 'NFTs' }],
    tech: ['Solidity', 'ethers.js', 'IPFS'],
  },
  {
    title: 'Custom Trucking',
    category: 'Logistics',
    image: '/portfolio/Group-26.jpg',
    metrics: [{ value: '500+', label: 'Loads' }, { value: '99%', label: 'On-Time' }],
    tech: ['Next.js', 'Tailwind', 'MongoDB'],
  },
  {
    title: 'Velvet Cream',
    category: 'E-Commerce',
    image: '/portfolio/2-1.png',
    metrics: [{ value: '2K+', label: 'Orders/Wk' }, { value: '4.8★', label: 'Rating' }],
    tech: ['Next.js', 'Stripe', 'Firebase'],
  },
];

const ACCENT_COLORS: Record<string, string> = {
  'Web Design': '#22c55e',
  Healthcare: '#3b82f6',
  'E-Commerce': '#f59e0b',
  Logistics: '#8b5cf6',
  SaaS: '#06b6d4',
  Mobile: '#f97316',
  Web3: '#6366f1',
  IoT: '#ec4899',
};

function ProjectCardEl({ project, highlighted }: { project: ProjectCard; highlighted: boolean }) {
  const accent = ACCENT_COLORS[project.category] || '#22c55e';

  return (
    <div
      className="marquee-card"
      style={{
        width: 320,
        flexShrink: 0,
        borderRadius: 20,
        overflow: 'hidden',
        border: highlighted ? `1px solid ${accent}50` : '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'pointer',
      }}
    >
      {/* Image container */}
      <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="320px"
          style={{ objectFit: 'cover', filter: 'brightness(0.75) saturate(0.9)', transition: 'transform 0.6s ease' }}
        />
        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%)`,
            pointerEvents: 'none',
          }}
        />
        {/* Category tag */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            padding: '4px 12px',
            borderRadius: 100,
            background: `${accent}18`,
            border: `1px solid ${accent}40`,
            fontSize: 10,
            fontWeight: 700,
            color: accent,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          {project.category}
        </div>
        {/* Project name overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 14,
            right: 14,
          }}
        >
          <div
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '14px 16px 16px' }}>
        {/* Metric badges */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          {project.metrics.map((m) => (
            <div
              key={m.label}
              style={{
                padding: '5px 10px',
                borderRadius: 100,
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.18)',
                fontSize: 11,
                fontWeight: 700,
                color: '#22c55e',
                whiteSpace: 'nowrap',
                lineHeight: 1.2,
              }}
            >
              {m.value} <span style={{ color: 'rgba(34,197,94,0.6)', fontWeight: 500 }}>{m.label}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: '3px 10px',
                borderRadius: 100,
                fontSize: 10,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.45)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioShowcase({ category }: { category: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  // Split projects into two rows
  const row1 = PROJECTS.slice(0, 6);
  const row2 = PROJECTS.slice(6, 12);

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

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        background: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Keyframes + hover styles */}
      <style>{`
        @keyframes marquee-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-row-left {
          animation: marquee-scroll-left 45s linear infinite;
        }
        .marquee-row-right {
          animation: marquee-scroll-right 50s linear infinite;
        }
        .marquee-row-left:hover,
        .marquee-row-right:hover {
          animation-play-state: paused;
        }
        .marquee-card:hover {
          transform: scale(1.04);
          border-color: rgba(34,197,94,0.35) !important;
          box-shadow: 0 0 30px rgba(34,197,94,0.12), 0 8px 32px rgba(0,0,0,0.4);
        }
        .marquee-card:hover img {
          transform: scale(1.08);
          filter: brightness(0.9) saturate(1.1) !important;
        }
      `}</style>

      {/* Section header */}
      <div className="cb-container">
        <div className="reveal" style={{ marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
              marginBottom: 20,
            }}
          >
            Our Work
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 500,
              color: '#ffffff',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              margin: 0,
              marginBottom: 20,
            }}
          >
            Products That Users<br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>Actually Love.</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#9ca3af',
              lineHeight: 1.7,
              maxWidth: 560,
              margin: 0,
            }}
          >
            200+ products shipped across fintech, healthcare, e-commerce, and SaaS — built to scale, designed to convert.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 — scrolls left */}
      <div
        className="reveal"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          marginBottom: 20,
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
          className="marquee-row-left"
          style={{
            display: 'flex',
            gap: 20,
            width: 'max-content',
          }}
        >
          {/* Render cards twice for seamless loop */}
          {[...row1, ...row1].map((project, i) => (
            <ProjectCardEl
              key={`r1-${i}`}
              project={project}
              highlighted={project.category.toLowerCase().replace(/[\s&-]+/g, '-') === category}
            />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — scrolls right */}
      <div
        className="reveal reveal-d1"
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
          className="marquee-row-right"
          style={{
            display: 'flex',
            gap: 20,
            width: 'max-content',
          }}
        >
          {/* Render cards twice for seamless loop */}
          {[...row2, ...row2].map((project, i) => (
            <ProjectCardEl
              key={`r2-${i}`}
              project={project}
              highlighted={project.category.toLowerCase().replace(/[\s&-]+/g, '-') === category}
            />
          ))}
        </div>
      </div>

      {/* View Portfolio button */}
      <div className="cb-container">
        <div className="reveal reveal-d2" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <Link
            href="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              height: 52,
              padding: '0 28px',
              borderRadius: 100,
              background: 'linear-gradient(135deg, #22c55e, #4ade80)',
              color: '#fff',
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            View Portfolio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
