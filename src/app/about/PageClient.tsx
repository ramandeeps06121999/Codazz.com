'use client';

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Globe } from '@/components/ui/globe';
import type { COBEOptions } from 'cobe';
import { TeamSectionBlock } from '@/components/ui/team-section-block-shadcnui';
import HeroBackground from '@/components/HeroBackground';

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

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '150+', label: 'Engineers Worldwide' },
  { value: '50', label: 'Locations Across 24 Countries' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '$500M+', label: 'Client Revenue Generated' },
];

const timeline = [
  { year: '2018', event: 'Founded in Edmonton by Raman Makkar. TML Branding Agency begins.' },
  { year: '2019', event: 'First 25 clients. Revenue crosses $1M. Team grows to 18 engineers.' },
  { year: '2020', event: 'Expanded across the US. Virtual-first team model adopted.' },
  { year: '2021', event: 'Series A funding. Headcount doubles. First enterprise contracts.' },
  { year: '2022', event: 'Expanded to 50 locations across 24 countries worldwide. Global coverage.' },
  { year: '2023', event: '500+ projects milestone. Recognized in Deloitte\'s Fast 50.' },
  { year: '2024', event: 'Codazz AI Labs launched. Dedicated research team for applied AI.' },
  { year: '2025', event: 'Reached 150+ engineers working virtually across 50 locations. Surpassed $500M in client revenue generated.' },
];

const values = [
  {
    icon: '\u{1F3C6}',
    title: 'Engineering Excellence',
    desc: 'We hold our code, our architecture, and our processes to the highest standard. Mediocre work doesn\'t leave our doors.',
  },
  {
    icon: '\u{2764}\u{FE0F}',
    title: 'Client Obsession',
    desc: 'Your success is the only metric that matters. We measure ourselves by the outcomes we create for the businesses we build with.',
  },
  {
    icon: '\u{1F50D}',
    title: 'Radical Transparency',
    desc: 'No jargon, no surprises, no vanity metrics. You always know exactly where your project stands and what it will cost.',
  },
  {
    icon: '\u{26A1}',
    title: 'Speed Without Compromise',
    desc: 'We move fast because we\'ve built the systems that let us. Speed without quality is recklessness \u2014 we deliver both.',
  },
  {
    icon: '\u{1F512}',
    title: 'Security First',
    desc: 'Security is designed in from day one. Every system we build is architected to withstand the threats of tomorrow.',
  },
  {
    icon: '\u{1F331}',
    title: 'Long-term Thinking',
    desc: 'We build relationships and codebases designed to last. The decisions we make today should serve you five years from now.',
  },
];

const team = [
  {
    initials: 'RM',
    name: 'Raman Makkar',
    role: 'Founder & CEO',
    bio: 'Founded Codazz and TML Branding Agency. Over a decade of hands-on experience in software engineering, product development, and digital transformation. Has personally led the architecture of trading platforms processing 50K+ daily transactions and telehealth systems serving 200K+ patients. Based in Edmonton, serving clients globally.',
  },
  {
    initials: 'HM',
    name: 'Harry',
    role: 'VP Engineering',
    bio: 'Leads engineering across all 50 locations with a focus on scalable cloud architecture and microservices. AWS-certified solutions architect who has designed infrastructure handling 500K concurrent users. Oversees code quality, CI/CD pipelines, and the technical interview process for every engineer who joins Codazz.',
  },
  {
    initials: 'MC',
    name: 'Michel',
    role: 'Chief Design Officer',
    bio: 'Drives product design and brand identity across all client engagements. Has designed interfaces for apps with 1M+ downloads and e-commerce platforms with 2.5M monthly visitors. Specializes in building reusable design systems, conducting user research, and creating conversion-focused experiences that measurably improve business metrics.',
  },
  {
    initials: 'KS',
    name: 'Karan',
    role: 'Head of Operations',
    bio: 'Manages global operations and client delivery across 24 countries. Ensures every project runs on time, on budget, and to standard through structured sprint planning, weekly client demos, and proactive risk management. Has overseen the delivery of 500+ projects with a 98% client satisfaction rate.',
  },
];

const offices = [
  // Headquarters
  { city: 'Edmonton', role: 'HQ', detail: 'Headquarters \u2014 Edmonton, Canada', flag: '\u{1F1E8}\u{1F1E6}' },
  { city: 'Chandigarh', role: 'HQ', detail: 'Headquarters \u2014 Chandigarh, India', flag: '\u{1F1EE}\u{1F1F3}' },
  { city: 'New York', role: 'USA', detail: 'New York Office', flag: '\u{1F1FA}\u{1F1F8}' },
  { city: 'Dubai', role: 'UAE', detail: 'Dubai Office', flag: '\u{1F1E6}\u{1F1EA}' },
  // Americas
  { city: 'San Francisco', role: 'California', detail: 'San Francisco Office', flag: '\u{1F1FA}\u{1F1F8}' },
  { city: 'Los Angeles', role: 'California', detail: 'Los Angeles Office', flag: '\u{1F1FA}\u{1F1F8}' },
  { city: 'Chicago', role: 'Illinois', detail: 'Chicago Office', flag: '\u{1F1FA}\u{1F1F8}' },
  { city: 'Austin', role: 'Texas', detail: 'Austin Office', flag: '\u{1F1FA}\u{1F1F8}' },
  { city: 'Miami', role: 'Florida', detail: 'Miami Office', flag: '\u{1F1FA}\u{1F1F8}' },
  { city: 'Toronto', role: 'Canada', detail: 'Toronto Office', flag: '\u{1F1E8}\u{1F1E6}' },
  { city: 'S\u00E3o Paulo', role: 'Brazil', detail: 'S\u00E3o Paulo Office', flag: '\u{1F1E7}\u{1F1F7}' },
  { city: 'Mexico City', role: 'Mexico', detail: 'Mexico City Office', flag: '\u{1F1F2}\u{1F1FD}' },
  // Europe
  { city: 'London', role: 'United Kingdom', detail: 'London Office', flag: '\u{1F1EC}\u{1F1E7}' },
  { city: 'Berlin', role: 'Germany', detail: 'Berlin Office', flag: '\u{1F1E9}\u{1F1EA}' },
  { city: 'Amsterdam', role: 'Netherlands', detail: 'Amsterdam Office', flag: '\u{1F1F3}\u{1F1F1}' },
  { city: 'Dublin', role: 'Ireland', detail: 'Dublin Office', flag: '\u{1F1EE}\u{1F1EA}' },
  { city: 'Zurich', role: 'Switzerland', detail: 'Zurich Office', flag: '\u{1F1E8}\u{1F1ED}' },
  { city: 'Warsaw', role: 'Poland', detail: 'Warsaw Office', flag: '\u{1F1F5}\u{1F1F1}' },
  // Middle East
  { city: 'Abu Dhabi', role: 'UAE', detail: 'Abu Dhabi Office', flag: '\u{1F1E6}\u{1F1EA}' },
  { city: 'Riyadh', role: 'Saudi Arabia', detail: 'Riyadh Office', flag: '\u{1F1F8}\u{1F1E6}' },
  { city: 'Doha', role: 'Qatar', detail: 'Doha Office', flag: '\u{1F1F6}\u{1F1E6}' },
  { city: 'Tel Aviv', role: 'Israel', detail: 'Tel Aviv Office', flag: '\u{1F1EE}\u{1F1F1}' },
  // Asia-Pacific
  { city: 'Singapore', role: 'Singapore', detail: 'Singapore Office', flag: '\u{1F1F8}\u{1F1EC}' },
  { city: 'Tokyo', role: 'Japan', detail: 'Tokyo Office', flag: '\u{1F1EF}\u{1F1F5}' },
  { city: 'Sydney', role: 'Australia', detail: 'Sydney Office', flag: '\u{1F1E6}\u{1F1FA}' },
  { city: 'Bangalore', role: 'India', detail: 'Bangalore Office', flag: '\u{1F1EE}\u{1F1F3}' },
  { city: 'Seoul', role: 'South Korea', detail: 'Seoul Office', flag: '\u{1F1F0}\u{1F1F7}' },
  { city: 'Ho Chi Minh City', role: 'Vietnam', detail: 'Ho Chi Minh City Office', flag: '\u{1F1FB}\u{1F1F3}' },
  // Africa
  { city: 'Lagos', role: 'Nigeria', detail: 'Lagos Office', flag: '\u{1F1F3}\u{1F1EC}' },
  { city: 'Nairobi', role: 'Kenya', detail: 'Nairobi Office', flag: '\u{1F1F0}\u{1F1EA}' },
  { city: 'Cairo', role: 'Egypt', detail: 'Cairo Office', flag: '\u{1F1EA}\u{1F1EC}' },
  // Oceania
  { city: 'Auckland', role: 'New Zealand', detail: 'Auckland Office', flag: '\u{1F1F3}\u{1F1FF}' },
];

const CODAZZ_GLOBE: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.1, 0.1, 0.1],
  markerColor: [0.4, 0.494, 0.918],
  glowColor: [0.1, 0.12, 0.2],
  markers: [
    // North America
    { location: [40.7128, -74.006], size: 0.05 },   // New York
    { location: [34.0522, -118.2437], size: 0.06 },  // Los Angeles
    { location: [41.8781, -87.6298], size: 0.06 },   // Chicago
    { location: [37.7749, -122.4194], size: 0.06 },  // San Francisco
    { location: [30.2672, -97.7431], size: 0.05 },   // Austin
    { location: [25.7617, -80.1918], size: 0.05 },   // Miami
    { location: [47.6062, -122.3321], size: 0.05 },  // Seattle
    { location: [43.6532, -79.3832], size: 0.05 },   // Toronto
    { location: [49.2827, -123.1207], size: 0.05 },  // Vancouver
    // Middle East
    { location: [25.2048, 55.2708], size: 0.1 },     // Dubai (HQ)
    // Europe
    { location: [51.5074, -0.1278], size: 0.07 },    // London
    { location: [52.52, 13.405], size: 0.05 },       // Berlin
    { location: [48.8566, 2.3522], size: 0.05 },     // Paris
    { location: [41.9028, 12.4964], size: 0.04 },    // Rome
    // Asia
    { location: [19.076, 72.8777], size: 0.07 },     // Mumbai
    { location: [1.3521, 103.8198], size: 0.06 },    // Singapore
    { location: [35.6762, 139.6503], size: 0.05 },   // Tokyo
    { location: [22.3193, 114.1694], size: 0.05 },    // Hong Kong
    { location: [37.5665, 126.978], size: 0.04 },    // Seoul
    // South America
    { location: [-23.5505, -46.6333], size: 0.05 },  // S\u00E3o Paulo
    { location: [-34.6037, -58.3816], size: 0.04 },  // Buenos Aires
    // Africa
    { location: [6.5244, 3.3792], size: 0.04 },      // Lagos
    { location: [-1.2921, 36.8219], size: 0.04 },    // Nairobi
    // Oceania
    { location: [-33.8688, 151.2093], size: 0.05 },  // Sydney
  ],
};

export default function AboutPage() {
  const pageRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>
        <article>

        {/* \u2500\u2500 HERO \u2500\u2500 */}
        <section style={{ padding: 'clamp(120px, 12vw, 160px) 0 clamp(60px, 8vw, 100px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="right" />
          <div className="cb-container">
            <div style={{ display: 'grid', gap: 40, alignItems: 'center' }} className="about-hero-grid">
              {/* Text */}
              <div>
                <div className="reveal" style={{ marginBottom: 24 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#ffffff',
                  }}>About Codazz</span>
                </div>
                <h1 className="reveal reveal-d1" style={{
                  fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 800, color: '#ffffff',
                  lineHeight: 1.0, letterSpacing: '-0.05em', marginBottom: 32, maxWidth: 600,
                }}>
                  We Build Software<br />That Matters.
                </h1>
                <p className="reveal reveal-d2" style={{
                  fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
                  maxWidth: 520, marginBottom: 40,
                }}>
                  Headquartered in Edmonton (Canada) and Chandigarh (India) with offices in New York and Dubai. Founded by Raman Makkar in 2018, Codazz has grown from a small branding agency into a global engineering firm with 150+ engineers across 24 countries. We handpick the best engineers from around the world and run 99% of meetings virtually \u2014 faster kick-offs, zero travel overhead, and a greener way to build world-class software.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ textDecoration: 'none' }}>
                    <button style={{
                      padding: '16px 36px', borderRadius: 100, background: '#22c55e', color: '#000',
                      fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}>
                      Work With Us
                    </button>
                  </Link>
                  <Link href="/case-studies" style={{ textDecoration: 'none' }}>
                    <button style={{
                      padding: '16px 36px', borderRadius: 100,
                      background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.7)',
                      fontSize: 15, fontWeight: 600, border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}>
                      See Our Work
                    </button>
                  </Link>
                </div>
              </div>
              {/* Globe */}
              <div className="reveal reveal-d2" style={{ position: 'relative', width: '100%', maxWidth: 500, aspectRatio: '1/1', margin: '0 auto' }}>
                <Globe config={CODAZZ_GLOBE} />
                {/* Labels */}
                <div style={{ position: 'absolute', top: '18%', left: '8%', display: 'flex', alignItems: 'center', gap: 6, pointerEvents: 'none' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.5)' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#ffffff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Edmonton HQ</span>
                </div>
                <div style={{ position: 'absolute', top: '35%', right: '5%', display: 'flex', alignItems: 'center', gap: 6, pointerEvents: 'none' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.5)' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#ffffff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Chandigarh HQ</span>
                </div>
                <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', pointerEvents: 'none' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>50 Locations \u00B7 24 Countries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* \u2500\u2500 MISSION STATEMENT \u2500\u2500 */}
        <section style={{
          padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(255,255,255,0.01)',
        }}>
          <div className="cb-container">
            <p className="reveal" style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
              lineHeight: 1.35, letterSpacing: '-0.03em', textAlign: 'center',
              maxWidth: 920, margin: '0 auto',
            }}>
              &ldquo;Our mission is to democratize access to world-class software engineering.{' '}
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>
                Every company, regardless of size, deserves technology that competes at the highest level.
              </span>&rdquo;
            </p>
          </div>
        </section>

        {/* \u2500\u2500 STATS STRIP \u2500\u2500 */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
            }}>
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal reveal-d${i + 1}`}
                  style={{
                    padding: '52px 0', textAlign: 'center',
                    borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}
                >
                  <p style={{
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#ffffff',
                    letterSpacing: '-0.04em', margin: '0 0 8px',
                  }}>{stat.value}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, fontWeight: 500 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* \u2500\u2500 OUR STORY \u2500\u2500 */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>

              {/* Text */}
              <div>
                <div className="reveal" style={{ marginBottom: 20 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.25)',
                  }}>Our Story</span>
                </div>
                <h2 className="reveal reveal-d1" style={{
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.04em', marginBottom: 28, lineHeight: 1.1,
                }}>
                  Built by engineers,<br />for builders.
                </h2>
                <div className="reveal reveal-d2">
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Codazz was founded in 2018 by Raman Makkar &mdash; a software engineer who saw a gap between what startups needed and what agencies delivered. Most agencies optimized for billable hours. Raman wanted to build one that optimized for outcomes. What started as TML Branding Agency in Edmonton has grown into a full-service technology firm with 150+ engineers across 24 countries, headquartered in Edmonton and Chandigarh.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The founding belief was simple: world-class engineering talent shouldn&apos;t only be available to companies with $100M budgets. A founder building their first product deserves the same quality of architecture decisions, code review standards, and deployment practices as a Series D company with a 200-person engineering team. That belief drove every hiring decision, every process refinement, and every technology choice Codazz has made.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The results speak through the numbers: 500+ products shipped, platforms handling millions of users, trading systems processing 50K+ daily transactions, telehealth apps serving 200K+ patient sessions, and e-commerce platforms that tripled client revenue. Collectively, the products Codazz has built have generated over $500 million in revenue for clients across fintech, healthcare, e-commerce, logistics, and enterprise sectors.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    The founding belief hasn&apos;t changed. Neither has the standard we hold ourselves to.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="reveal reveal-d2">
                <div style={{ position: 'relative', paddingLeft: 32 }}>
                  {/* Vertical line */}
                  <div aria-hidden="true" style={{
                    position: 'absolute', left: 0, top: 12, bottom: 12,
                    width: 1, background: 'linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.1))',
                  }} />
                  {timeline.map((item, i) => (
                    <div key={item.year} style={{
                      position: 'relative', marginBottom: i < timeline.length - 1 ? 32 : 0,
                    }}>
                      {/* Dot */}
                      <div style={{
                        position: 'absolute', left: -38, top: 4,
                        width: 10, height: 10, borderRadius: '50%',
                        background: i === timeline.length - 1 ? '#22c55e' : 'rgba(34,197,94,0.4)',
                        border: `2px solid ${i === timeline.length - 1 ? '#22c55e' : 'rgba(34,197,94,0.2)'}`,
                      }} />
                      <div>
                        <span style={{
                          fontSize: 12, fontWeight: 800, color: '#ffffff',
                          letterSpacing: '0.05em', display: 'block', marginBottom: 4,
                        }}>{item.year}</span>
                        <p style={{
                          fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0,
                        }}>{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* \u2500\u2500 VALUES \u2500\u2500 */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
              }}>What We Stand For</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff',
              letterSpacing: '-0.04em', marginBottom: 60, lineHeight: 1.1,
            }}>
              Our Values
            </h2>
            <div className="values-grid" style={{
              display: 'grid', gap: 20,
            }}>
              {values.map((val, i) => (
                <div
                  key={val.title}
                  className={`reveal reveal-d${Math.min(i + 1, 6)}`}
                  style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(34,197,94,0.2)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(34,197,94,0.03)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.015)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{val.icon}</div>
                  <h3 style={{
                    fontSize: 17, fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.02em', marginBottom: 12,
                  }}>{val.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* \u2500\u2500 LEADERSHIP TEAM \u2500\u2500 */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
              }}>The People Behind It</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff',
              letterSpacing: '-0.04em', marginBottom: 16, lineHeight: 1.1,
            }}>
              Leadership Team
            </h2>
            <p className="reveal reveal-d2" style={{
              fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7,
              maxWidth: 560, marginBottom: 60,
            }}>
              The best engineers from around the world, working virtually across 50 locations in 24 countries to deliver world-class technology to every builder.
            </p>
            <TeamSectionBlock />
          </div>
        </section>

        {/* \u2500\u2500 OFFICES \u2500\u2500 */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
              }}>Where We Are</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff',
              letterSpacing: '-0.04em', marginBottom: 16, lineHeight: 1.1,
            }}>
              Global Offices
            </h2>
            <p className="reveal reveal-d2" style={{
              fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7,
              maxWidth: 520, marginBottom: 60,
            }}>
              50 locations across 24 countries, one engineering culture. The best engineers from around the world, working virtually.
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))', gap: 16,
            }}>
              {offices.map((office, i) => (
                <div
                  key={office.city}
                  className={`reveal reveal-d${Math.min(i + 1, 6)}`}
                  style={{
                    background: office.role === 'HQ' ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                    border: `1px solid ${office.role === 'HQ' ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: 20, padding: '24px 20px',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(34,197,94,0.2)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(34,197,94,0.03)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = office.role === 'HQ' ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLDivElement).style.background = office.role === 'HQ' ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{office.flag}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 4 }}>
                    {office.city}
                  </h3>
                  <p style={{ fontSize: 11, fontWeight: 700, color: office.role === 'HQ' ? '#22c55e' : 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                    {office.role}
                  </p>
                </div>
              ))}
            </div>
            <div className="reveal reveal-d3" style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/locations" style={{
                fontSize: 15, fontWeight: 600, color: '#ffffff', textDecoration: 'none',
                borderBottom: '2px solid rgba(34,197,94,0.3)',
                paddingBottom: 2,
              }}>
                View All 50 Locations &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* \u2500\u2500 WHAT CLIENTS SAY \u2500\u2500 */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
              }}>What They Say</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff',
              letterSpacing: '-0.04em', marginBottom: 60, lineHeight: 1.1,
            }}>
              Client Testimonials
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {[
                { quote: 'Zero bugs in production. They shipped our fintech MVP in 10 weeks and it handled 50K transactions on day one.', name: 'Sarah J.', role: 'CEO, Fintech Startup', location: 'San Francisco', rating: '4.9' },
                { quote: 'Saved us thousands in development costs. The telehealth platform they built has onboarded 100K+ users with zero downtime.', name: 'Michael D.', role: 'Head of Product, Healthcare SaaS', location: 'Austin', rating: '5.0' },
                { quote: 'They scaled our e-commerce platform to handle 500K concurrent users during Black Friday. Revenue tripled within 4 months.', name: 'Alex R.', role: 'Founder, E-Commerce', location: 'New York', rating: '5.0' },
              ].map((t, i) => (
                <div key={i} className={`reveal reveal-d${i + 1}`} style={{
                  background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 24, padding: 36,
                }}>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                    {Array(5).fill(null).map((_, si) => (
                      <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#22c55e"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 24, fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{t.name}</p>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: 0 }}>{t.role} &middot; {t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* \u2500\u2500 BOTTOM CTA \u2500\u2500 */}
        <section className="section-padding">
          <div className="cb-container">
            <div
              className="reveal"
              style={{
                textAlign: 'center', padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 48px)',
                background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 32, position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Glow */}
              <div aria-hidden="true" style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 500, height: 500,
                background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#ffffff', display: 'block', marginBottom: 20, position: 'relative',
              }}>Join Our Clients</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', fontWeight: 800, color: '#ffffff',
                letterSpacing: '-0.04em', marginBottom: 20, lineHeight: 1.1, position: 'relative',
              }}>
                Join 150+ companies<br />building with us.
              </h2>
              <p style={{
                fontSize: 18, color: 'rgba(255,255,255,0.4)', maxWidth: 500,
                margin: '0 auto 40px', lineHeight: 1.7, position: 'relative',
              }}>
                From seed-stage startups to public companies &mdash; we help every kind of builder ship software that makes a difference.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '18px 44px', borderRadius: 100, background: '#22c55e', color: '#000',
                    fontSize: 16, fontWeight: 700, border: 'none', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}>
                    Start a Project
                  </button>
                </Link>
                <Link href="/case-studies" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '18px 44px', borderRadius: 100,
                    background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.7)',
                    fontSize: 16, fontWeight: 600, border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}>
                    View Case Studies
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        </article>
      </main>
      <Footer />
    </>
  );
}
