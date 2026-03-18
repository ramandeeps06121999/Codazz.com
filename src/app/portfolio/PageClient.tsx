'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import HeroBackground from '@/components/HeroBackground';
import LatestWork from '@/components/LatestWork';

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

const CATEGORIES = ['All', 'Web Design', 'E-Commerce', 'Healthcare', 'Logistics', 'Mobile', 'Web3', 'SaaS', 'IoT'];

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

const PROJECTS = [
  {
    title: 'KPR Interiors — Business Website',
    category: 'Web Design',
    description: 'Premium responsive website for an interior design firm showcasing services, portfolio, and client partnerships across all devices.',
    metrics: [
      { value: '4x', label: 'Lead Generation' },
      { value: '1.8s', label: 'Load Time' },
      { value: '100%', label: 'Responsive' },
    ],
    tech: ['Next.js', 'Tailwind', 'GSAP', 'Vercel'],
    image: '/portfolio/all-devices-black-1.png',
  },
  {
    title: 'CareSync — Healthcare Dashboard',
    category: 'Healthcare',
    description: 'Comprehensive healthcare management platform with patient tracking, timetable scheduling, disease statistics, and treatment plan management.',
    metrics: [
      { value: '130+', label: 'Active Patients' },
      { value: '48', label: 'Medical Folders' },
      { value: '4.9★', label: 'User Rating' },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'WebSocket'],
    image: '/portfolio/image-1888377.jpg',
  },
  {
    title: 'LYKFit — Fashion E-Commerce',
    category: 'E-Commerce',
    description: 'Modern e-commerce platform for a premium fitness apparel brand with responsive storefront, product catalog, and seamless checkout experience.',
    metrics: [
      { value: '3x', label: 'Revenue Growth' },
      { value: '2.5M+', label: 'Monthly Visitors' },
      { value: '1.1s', label: 'Page Load' },
    ],
    tech: ['Next.js', 'Shopify', 'Stripe', 'Tailwind', 'Vercel'],
    image: '/portfolio/1-4.png',
  },
  {
    title: 'Pioneer Logistics — Delivery Platform',
    category: 'Logistics',
    description: 'Industry-leading delivery service platform with real-time fleet tracking, route optimization, and customer-facing booking system.',
    metrics: [
      { value: '15K+', label: 'Deliveries/Month' },
      { value: '28%', label: 'Cost Reduction' },
      { value: '98%', label: 'On-Time Rate' },
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'MapBox', 'AWS'],
    image: '/portfolio/all-devices-black-2.png',
  },
  {
    title: 'BYT Trucking — Fleet Management',
    category: 'Logistics',
    description: 'Custom trucking and logistics website with speed-focused delivery tracking, service booking, and fleet management tools.',
    metrics: [
      { value: '500+', label: 'Projects Done' },
      { value: '24/7', label: 'Availability' },
      { value: '30+', label: 'Yrs Experience' },
    ],
    tech: ['Next.js', 'Node.js', 'MapBox', 'MongoDB', 'AWS'],
    image: '/portfolio/all-devices-black-3.png',
  },
  {
    title: 'ReviewPro — Google Reviews Platform',
    category: 'SaaS',
    description: 'SaaS platform helping businesses discover and leverage Google Reviews with integrations to Zomato, Trustpilot, Clutch, and Amazon.',
    metrics: [
      { value: '10K+', label: 'Businesses' },
      { value: '4.8★', label: 'Avg Rating' },
      { value: '200%', label: 'Review Growth' },
    ],
    tech: ['React', 'Node.js', 'Google API', 'PostgreSQL', 'Redis'],
    image: '/portfolio/all-devices-black-4.png',
  },
  {
    title: 'Media Studio — Content Agency',
    category: 'Web Design',
    description: 'Sleek dark-themed website for an advertisement and marketing agency with video content, booking system, and portfolio showcase.',
    metrics: [
      { value: '5x', label: 'Client Leads' },
      { value: '2.3s', label: 'Avg Load' },
      { value: '85%', label: 'Engagement' },
    ],
    tech: ['Next.js', 'GSAP', 'Framer Motion', 'Vercel'],
    image: '/portfolio/3-1-1.png',
  },
  {
    title: 'SmartLamp — IoT Commerce App',
    category: 'IoT',
    description: 'Mobile app for smart home lighting with WiFi-enabled lamp controls, e-commerce store, and motion sensor integration.',
    metrics: [
      { value: '50K+', label: 'Downloads' },
      { value: '4.7★', label: 'App Rating' },
      { value: '12', label: 'Smart Devices' },
    ],
    tech: ['React Native', 'Firebase', 'IoT SDK', 'Stripe'],
    image: '/portfolio/Untitled-design-18.png',
  },
  {
    title: 'HomeNest — Real Estate App',
    category: 'Mobile',
    description: 'Premium real estate mobile app with property search, virtual tours, neighborhood insights, and direct booking for house viewings.',
    metrics: [
      { value: '1M+', label: 'Downloads' },
      { value: '68%', label: 'Retention (D30)' },
      { value: '#5', label: 'Real Estate Apps' },
    ],
    tech: ['React Native', 'Node.js', 'Firebase', 'MapBox', 'Stripe'],
    image: '/portfolio/Untitled-design-21.png',
  },
  {
    title: 'NFTc — NFT Marketplace',
    category: 'Web3',
    description: 'Vibrant NFT marketplace with wallet integration, token displays, and 3D asset previews for digital collectibles community.',
    metrics: [
      { value: '$2.4M', label: 'Trading Volume' },
      { value: '15K+', label: 'NFTs Listed' },
      { value: '8K', label: 'Active Users' },
    ],
    tech: ['React', 'Solidity', 'ethers.js', 'IPFS', 'Hardhat'],
    image: '/portfolio/image-1877877.jpg',
  },
  {
    title: 'Custom Trucking — Agriculture Services',
    category: 'Logistics',
    description: 'Full-service trucking and agricultural hauling platform with fleet management, quote generation, and coverage tracking across Alberta.',
    metrics: [
      { value: '500+', label: 'Loads Completed' },
      { value: '30+', label: 'Yrs Experience' },
      { value: '99%', label: 'On-Time' },
    ],
    tech: ['Next.js', 'Tailwind', 'Node.js', 'MongoDB'],
    image: '/portfolio/Group-26.jpg',
  },
  {
    title: 'Velvet Cream — Restaurant Platform',
    category: 'E-Commerce',
    description: 'Online ordering platform for an ice cream and burger restaurant with menu browsing, order placement, and delivery tracking.',
    metrics: [
      { value: '2K+', label: 'Orders/Week' },
      { value: '4.8★', label: 'Rating' },
      { value: '45%', label: 'Online Growth' },
    ],
    tech: ['Next.js', 'Stripe', 'Firebase', 'Tailwind'],
    image: '/portfolio/2-1.png',
  },
];

const STATS = [
  { value: '200+', label: 'Products Shipped' },
  { value: '150+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24', label: 'Countries Served' },
];

export default function PageClient() {
  const heroRef = useReveal();
  const contentRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    contentRef.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [activeCategory]);

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{ background: '#000000' }}
      >
        <HeroBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          <Breadcrumb items={[{ label: 'Portfolio', href: '/portfolio' }]} />
          <div className="reveal" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 18px', borderRadius: 100, marginBottom: 24,
            background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
              Our Work
            </span>
          </div>
          <h1
            className="reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Products That Users{' '}
            <span style={{ color: '#22c55e' }}>Actually Love.</span>
          </h1>
          <p className="reveal text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
            200+ products shipped across fintech, healthcare, e-commerce, and SaaS — built to scale, designed to convert.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {STATS.map((stat, i) => (
            <div key={i} style={{
              textAlign: 'center', padding: 'clamp(24px, 4vw, 40px) 16px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
              <div style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#22c55e', letterSpacing: '-0.03em' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500, marginTop: 4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Showcase */}
      <LatestWork />

      {/* Portfolio Grid */}
      <section ref={contentRef} className="section-padding" style={{ background: '#000' }}>
        <div className="cb-container">

          {/* Category Filters */}
          <div className="reveal" style={{
            display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center',
            marginBottom: 'clamp(40px, 6vw, 64px)',
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 600,
                  border: `1px solid ${activeCategory === cat ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  background: activeCategory === cat ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)',
                  color: activeCategory === cat ? '#22c55e' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer', transition: 'all 0.3s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {filtered.map((project, i) => {
              const accent = ACCENT_COLORS[project.category] || '#22c55e';
              const isHovered = hoveredProject === i;
              return (
                <div
                  key={project.title}
                  className="reveal"
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    borderRadius: 24, overflow: 'hidden',
                    border: `1px solid ${isHovered ? `${accent}40` : 'rgba(255,255,255,0.06)'}`,
                    background: isHovered ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'translateY(-4px)' : 'none',
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        filter: 'brightness(0.7) saturate(0.9)',
                        transition: 'all 0.6s ease',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      }}
                    />
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
                      background: 'linear-gradient(to top, #000, transparent)',
                    }} />
                    <div style={{
                      position: 'absolute', top: 16, left: 16,
                      padding: '5px 14px', borderRadius: 100,
                      background: `${accent}20`, border: `1px solid ${accent}40`,
                      fontSize: 11, fontWeight: 700, color: accent,
                      letterSpacing: '0.05em', textTransform: 'uppercase',
                    }}>
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: 'clamp(24px, 3vw, 36px)' }}>
                    <h3 style={{
                      fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 700,
                      color: '#fff', letterSpacing: '-0.02em', marginBottom: 12,
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontSize: 14, color: 'rgba(255,255,255,0.4)',
                      lineHeight: 1.7, marginBottom: 24,
                    }}>
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div style={{
                      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
                      marginBottom: 24, padding: '16px 0',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      {project.metrics.map((m, j) => (
                        <div key={j} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: 20, fontWeight: 800, color: accent, letterSpacing: '-0.02em' }}>
                            {m.value}
                          </div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 500, marginTop: 2 }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {project.tech.map(t => (
                        <span key={t} style={{
                          padding: '4px 12px', borderRadius: 100, fontSize: 11,
                          fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{
        background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center',
      }}>
        <div className="cb-container" style={{ maxWidth: 700 }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800,
            color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 20,
          }}>
            Ready to Build Something{' '}
            <span style={{ color: '#22c55e' }}>Amazing?</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 36 }}>
            Let&apos;s turn your idea into the next product on this page.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              height: 56, padding: '0 36px', borderRadius: 100,
              background: 'linear-gradient(135deg, #22c55e, #4ade80)',
              color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none',
            }}>
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 56, padding: '0 32px', borderRadius: 100,
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff', fontSize: 15, fontWeight: 600, textDecoration: 'none',
            }}>
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
