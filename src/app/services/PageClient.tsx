'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackground from '@/components/HeroBackground';
import Breadcrumb from '@/components/Breadcrumb';

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

/* ── Service card with hover lift + green border glow ── */
function ServiceCard({ service }: { service: ServiceItem }) {
  const [hovered, setHovered] = useState(false);
  const base: React.CSSProperties = {
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 20,
    background: 'rgba(255,255,255,0.02)',
    padding: 'clamp(1.25rem, 3vw, 1.75rem)',
    transition: 'border-color 0.35s, background 0.35s, transform 0.35s, box-shadow 0.35s',
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100%',
    textDecoration: 'none',
    color: 'inherit',
  };
  const hover: React.CSSProperties = {
    borderColor: 'rgba(34,197,94,0.35)',
    background: 'rgba(34,197,94,0.04)',
    transform: 'translateY(-6px)',
    boxShadow: '0 0 30px rgba(34,197,94,0.08), 0 20px 50px rgba(0,0,0,0.3)',
  };
  return (
    <Link
      href={service.href}
      style={{ ...base, ...(hovered ? hover : {}), textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: 'rgba(34,197,94,0.08)',
        border: '1px solid rgba(34,197,94,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1rem', flexShrink: 0,
        fontSize: 24,
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontWeight: 700,
        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
        marginBottom: '0.5rem',
        lineHeight: 1.3,
        color: '#ffffff',
      }}>
        {service.title}
      </h3>

      {/* Short description */}
      <p style={{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 'clamp(0.82rem, 1.5vw, 0.9rem)',
        lineHeight: 1.6,
        marginBottom: '1rem',
        flexGrow: 1,
      }}>
        {service.description}
      </p>

      {/* Sub-services count tag */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
        <span style={{
          fontSize: 11, fontWeight: 600,
          color: '#22c55e',
          background: 'rgba(34,197,94,0.08)',
          border: '1px solid rgba(34,197,94,0.15)',
          borderRadius: 999,
          padding: '4px 12px',
          letterSpacing: '0.03em',
        }}>
          {service.subCount} sub-services
        </span>
        <span style={{
          fontSize: '0.85rem', fontWeight: 600,
          color: hovered ? '#22c55e' : 'rgba(255,255,255,0.4)',
          transition: 'color 0.3s',
        }}>
          Learn More &rarr;
        </span>
      </div>
    </Link>
  );
}

/* ── Service data ── */
interface ServiceItem {
  title: string;
  href: string;
  icon: string;
  description: string;
  subCount: number;
}

const services: ServiceItem[] = [
  {
    title: 'Mobile App Development',
    href: '/services/mobile-app-development',
    icon: '\u{1F4F1}',
    description: 'Native and cross-platform apps for iOS and Android built for scale.',
    subCount: 5,
  },
  {
    title: 'Web Development',
    href: '/services/web-development',
    icon: '\u{1F310}',
    description: 'Modern web apps, SaaS platforms, and enterprise portals with Next.js and React.',
    subCount: 5,
  },
  {
    title: 'AI & Machine Learning',
    href: '/services/ai-ml',
    icon: '\u{1F9E0}',
    description: 'Intelligent automation, predictive analytics, and production-ready AI systems.',
    subCount: 5,
  },
  {
    title: 'AI Agent Development',
    href: '/services/ai-agent-development',
    icon: '\u{1F916}',
    description: 'Autonomous AI agents that reason, plan, and execute complex workflows.',
    subCount: 5,
  },
  {
    title: 'LLM Integration',
    href: '/services/llm-integration',
    icon: '\u{1F4AC}',
    description: 'Integrate GPT, Claude, and open-source LLMs into your products securely.',
    subCount: 5,
  },
  {
    title: 'Generative AI',
    href: '/services/generative-ai',
    icon: '\u{2728}',
    description: 'Custom generative AI solutions for content, code, images, and data.',
    subCount: 5,
  },
  {
    title: 'Blockchain & Web3',
    href: '/services/blockchain-web3',
    icon: '\u{26D3}\u{FE0F}',
    description: 'Smart contracts, DeFi protocols, and decentralized applications.',
    subCount: 5,
  },
  {
    title: 'Product Design',
    href: '/services/product-design',
    icon: '\u{1F3A8}',
    description: 'User-centered UI/UX design, prototyping, and scalable design systems.',
    subCount: 5,
  },
  {
    title: 'Cloud & DevOps',
    href: '/services/cloud-devops',
    icon: '\u{2601}\u{FE0F}',
    description: 'Cloud architecture, CI/CD pipelines, and infrastructure automation on AWS.',
    subCount: 5,
  },
  {
    title: 'SaaS Development',
    href: '/services/saas-development',
    icon: '\u{1F680}',
    description: 'End-to-end SaaS products with multi-tenant architecture and billing.',
    subCount: 5,
  },
  {
    title: 'QA & Testing',
    href: '/services/qa-testing',
    icon: '\u{1F50D}',
    description: 'Automated testing, performance testing, and quality assurance at scale.',
    subCount: 5,
  },
  {
    title: 'Cybersecurity',
    href: '/services/cybersecurity',
    icon: '\u{1F6E1}\u{FE0F}',
    description: 'Security audits, penetration testing, and compliance-ready architectures.',
    subCount: 5,
  },
  {
    title: 'IoT Development',
    href: '/services/iot-development',
    icon: '\u{1F4E1}',
    description: 'Connected device ecosystems, firmware, and real-time IoT dashboards.',
    subCount: 5,
  },
  {
    title: 'AR & VR Development',
    href: '/services/ar-vr',
    icon: '\u{1F97D}',
    description: 'Immersive AR/VR experiences for mobile, web, and Apple Vision Pro.',
    subCount: 5,
  },
  {
    title: 'Game Development',
    href: '/services/game-development',
    icon: '\u{1F3AE}',
    description: 'Mobile games, Unity and Unreal Engine titles with multiplayer backends.',
    subCount: 5,
  },
  {
    title: 'Digital Marketing',
    href: '/services/digital-marketing',
    icon: '\u{1F4C8}',
    description: 'Data-driven SEO, PPC, social media, and content marketing strategies.',
    subCount: 5,
  },
  {
    title: 'Branding & Identity',
    href: '/services/branding',
    icon: '\u{1F48E}',
    description: 'Brand strategy, visual identity, guidelines, and motion branding.',
    subCount: 5,
  },
  {
    title: 'WordPress & CMS',
    href: '/services/wordpress-cms',
    icon: '\u{1F4DD}',
    description: 'Custom themes, headless CMS, WooCommerce, and site speed optimization.',
    subCount: 5,
  },
  {
    title: 'RAG Development',
    href: '/services/rag-development',
    icon: '\u{1F4DA}',
    description: 'Retrieval-augmented generation systems for enterprise knowledge bases.',
    subCount: 5,
  },
];

/* ── Process steps ── */
const steps = [
  { num: '01', label: 'Discover', desc: 'Research & strategy' },
  { num: '02', label: 'Design', desc: 'UX & architecture' },
  { num: '03', label: 'Develop', desc: 'Agile sprints' },
  { num: '04', label: 'Deploy', desc: 'Launch & support' },
];

export default function ServicesIndexPage() {
  const mainRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    mainRef.current?.querySelectorAll('.reveal').forEach((n, i) =>
      setTimeout(() => n.classList.add('visible'), 80 + i * 40)
    );
  }, [mainRef]);

  return (
    <>
      <Navbar />
      <main ref={mainRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* ── HERO ── */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '55vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
            <div style={{ textAlign: 'center', maxWidth: 780, margin: '3rem auto 0' }}>
              <div className="reveal" style={{
                display: 'inline-block',
                border: '1px solid rgba(34,197,94,0.4)',
                borderRadius: 999,
                padding: '6px 20px',
                fontSize: 13,
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '1.5rem',
                letterSpacing: '0.05em',
              }}>
                What We Build
              </div>
              <h1 className="reveal" style={{
                fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                marginBottom: '1.25rem',
                letterSpacing: '-0.025em',
              }}>
                Our Services
              </h1>
              <p className="reveal" style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7,
                maxWidth: 600,
                margin: '0 auto',
              }}>
                End-to-end software development services for startups to enterprises
              </p>
            </div>
          </div>
        </section>

        {/* ── SERVICE CARDS GRID ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
              <h2 style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
                fontWeight: 800,
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}>
                Everything You Need to Build &amp; Grow
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>
                {services.length} service categories, each backed by deep domain expertise.
              </p>
            </div>
            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(0.75rem, 2vw, 1.25rem)',
            }}>
              {services.map(service => (
                <ServiceCard key={service.href} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS STRIP ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                display: 'block', marginBottom: 12,
              }}>Our Process</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
                How Every Project Works
              </h2>
            </div>
            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
              maxWidth: 900,
              margin: '0 auto',
              position: 'relative',
            }}>
              {steps.map((step, i) => (
                <div key={step.num} style={{
                  textAlign: 'center',
                  padding: 'clamp(1rem, 2vw, 1.5rem)',
                  position: 'relative',
                }}>
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: 28,
                      right: 0,
                      width: '50%',
                      height: 1,
                      background: 'rgba(34,197,94,0.2)',
                    }} />
                  )}
                  {i > 0 && (
                    <div style={{
                      position: 'absolute',
                      top: 28,
                      left: 0,
                      width: '50%',
                      height: 1,
                      background: 'rgba(34,197,94,0.2)',
                    }} />
                  )}
                  {/* Step circle */}
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'rgba(34,197,94,0.1)',
                    border: '2px solid rgba(34,197,94,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 12px',
                    fontSize: 14, fontWeight: 800, color: '#22c55e',
                    position: 'relative', zIndex: 1,
                  }}>
                    {step.num}
                  </div>
                  <div style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>
                    {step.label}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                    {step.desc}
                  </div>
                  {/* Arrow between steps */}
                  {i < steps.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: 22,
                      right: -6,
                      fontSize: 16,
                      color: 'rgba(34,197,94,0.4)',
                      zIndex: 2,
                    }}>
                      &rarr;
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Mobile fallback: stack vertically */}
            <style>{`
              @media (max-width: 600px) {
                .cb-container > .reveal > div[style*="grid-template-columns: repeat(4"] {
                  grid-template-columns: 1fr 1fr !important;
                }
              }
            `}</style>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{
              textAlign: 'center',
              maxWidth: 640,
              margin: '0 auto',
              padding: 'clamp(2rem, 5vw, 4rem) 0',
            }}>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}>
                Need a custom solution?
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                marginBottom: '2rem',
                lineHeight: 1.7,
              }}>
                Let&apos;s talk.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{
                  background: '#22c55e', color: '#000',
                  padding: 'clamp(12px, 2vw, 16px) clamp(28px, 4vw, 40px)',
                  borderRadius: 999, fontWeight: 700,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  textDecoration: 'none', display: 'inline-block',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}>
                  Get a Free Quote
                </Link>
                <Link href="/case-studies" style={{
                  border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff',
                  padding: 'clamp(12px, 2vw, 16px) clamp(28px, 4vw, 40px)',
                  borderRadius: 999, fontWeight: 600,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  textDecoration: 'none', display: 'inline-block',
                  transition: 'border-color 0.2s',
                }}>
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
