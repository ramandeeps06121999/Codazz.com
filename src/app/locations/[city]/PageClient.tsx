'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackground from '@/components/HeroBackground';
import TrustBadges from '@/components/TrustBadges';
import type { CityData } from '@/data/cities';
import { cities } from '@/data/cities';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import GlobalPresence from '@/components/GlobalPresence';

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

const services = [{ name: 'Mobile Apps', slug: 'mobile-app-development', icon: '📱' }, { name: 'Web Development', slug: 'web-development', icon: '🌐' }, { name: 'AI Solutions', slug: 'ai-solutions', icon: '🧠' }, { name: 'Cloud', slug: 'cloud-architecture', icon: '☁️' }, { name: 'IoT', slug: 'iot-development', icon: '📡' }, { name: 'Blockchain', slug: 'blockchain', icon: '⛓️' }];
const servicesBreakdown = [{ title: 'Mobile App Development', desc: 'Native and cross-platform mobile apps.', items: ['iOS', 'Android', 'React Native', 'ASO'] }, { title: 'Web Development', desc: 'Modern web platforms and APIs.', items: ['React', 'Next.js', 'Node.js', 'Databases'] }, { title: 'AI & ML', desc: 'AI-powered solutions and integrations.', items: ['LLM APIs', 'ChatGPT', 'ML Models', 'Analytics'] }, { title: 'Cloud & DevOps', desc: 'Deployment and infrastructure.', items: ['AWS', 'GCP', 'Docker', 'K8s'] }, { title: 'IoT Solutions', desc: 'Connected devices and sensors.', items: ['Embedded', 'Real-time', 'IoT Arch', 'Monitoring'] }, { title: 'Blockchain', desc: 'Crypto and Web3 applications.', items: ['Smart Contracts', 'Wallets', 'NFTs', 'DeFi'] }];
const industryData: Record<string, { icon: string; desc: string }> = { 'FinTech': { icon: '💰', desc: 'Payment systems, trading, lending platforms.' }, 'Healthcare': { icon: '🏥', desc: 'Telemedicine, EHR, patient management.' }, 'E-Commerce': { icon: '🛒', desc: 'Marketplaces, inventory, payments.' }, 'Real Estate': { icon: '🏠', desc: 'Property portals, virtual tours, CRM.' }, 'Logistics': { icon: '🚛', desc: 'Fleet management, optimization, tracking.' }, 'EdTech': { icon: '📚', desc: 'Learning platforms, courses, assessments.' }, 'SaaS': { icon: '☁️', desc: 'Subscription apps, analytics, billing.' }, 'AI Products': { icon: '🤖', desc: 'Intelligent automation, predictive analytics.' } };
const techCategories = [{ name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vue.js'] }, { name: 'Backend', items: ['Node.js', 'Python', 'Go', 'Java', 'PostgreSQL'] }, { name: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'] }, { name: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Docker', 'K8s'] }];
const processSteps = [{ title: 'Discovery', description: 'Understanding your goals and requirements.', deliverables: ['Plan', 'Docs', 'Tech Stack'], icon: '🔍', duration: '1-2w' }, { title: 'Design', description: 'UI/UX and system architecture.', deliverables: ['Designs', 'Arch', 'Proto'], icon: '📐', duration: '2-3w' }, { title: 'Development', description: '2-week sprints with daily standups.', deliverables: ['Code', 'Tests', 'Docs'], icon: '⚙️', duration: '8-16w' }, { title: 'QA & Testing', description: 'Testing, optimization, and security.', deliverables: ['Reports', 'Fixes', 'Perf'], icon: '✅', duration: '2-4w' }, { title: 'Launch', description: 'Deployment and ongoing support.', deliverables: ['Live', 'Monitor', 'Support'], icon: '🚀', duration: 'Ongoing' }];
const portfolioProjects = [{ name: 'FinTech App', description: 'Multi-currency payments with portfolio management.', techStack: ['React Native', 'Node.js', 'PostgreSQL'], metrics: [{ label: 'Users', value: '500K+' }, { label: 'Txns', value: '$2B+' }] }, { name: 'AI Chatbot', description: 'Enterprise chatbot with NLP and training.', techStack: ['Next.js', 'Python', 'OpenAI'], metrics: [{ label: 'Customers', value: '1K+' }, { label: 'Msgs/Day', value: '10M+' }] }, { name: 'Healthcare Portal', description: 'Telemedicine platform for consultations.', techStack: ['React', 'Node.js', 'WebRTC'], metrics: [{ label: 'Doctors', value: '5K+' }, { label: 'Rating', value: '4.8★' }] }];
const clientLogos = ['Google', 'Microsoft', 'Amazon', 'Startup', 'TechCo', 'Digital', 'Labs'];

function generateFAQs(cityName: string): Array<{ q: string; a: string }> {
  return [{ q: `How much does development cost in ${cityName}?`, a: `Costs vary by scope. We offer fixed-price quotes. Small: $20K-$50K. Medium: $50K-$150K. Enterprise: $150K+. Contact for consultation.` }, { q: `How long to build an app?`, a: `MVP in 8-12 weeks. Full app in 4-6 months. We use 2-week sprints with weekly demos.` }, { q: `Do you offer staff augmentation?`, a: `Yes. Hire dedicated developers or teams. Senior engineers, benefits, seamless integration.` }, { q: `What's your development process?`, a: `Discovery → Design → Dev (sprints) → QA → Launch → Support. Daily standups, transparency.` }, { q: `Post-launch support?`, a: `Yes. 24/7 support, monitoring, bug fixes, new features. SLAs available.` }, { q: `Legacy system modernization?`, a: `Yes. Audit, refactor, migrate to modern stacks. Zero downtime guaranteed.` }];
}

function getTopDevReasons(cityName: string): Array<{ number: string; title: string; desc: string }> {
  return [{ number: '01', title: 'Track Record', desc: `500+ projects, 99.9% on-time, 4.9/5 satisfaction.` }, { number: '02', title: 'Senior Engineers', desc: `8+ years avg experience. Latest tech expertise.` }, { number: '03', title: 'Transparent', desc: `Fixed prices, 2-week sprints, no scope creep.` }, { number: '04', title: 'Cost Effective', desc: `25-40% less than Silicon Valley rates.` }, { number: '05', title: '24/7 Support', desc: `Round-the-clock across time zones.` }, { number: '06', title: 'Startup Friendly', desc: `Flexible models, equity partnerships.` }];
}

function getRelatedCities(city: CityData): Array<{ name: string; slug: string; stateAbbr: string }> {
  const nearby = city.nearbyLocations || [];
  return nearby.map(slug => {
    const c = cities.find(x => x.slug === slug);
    return { name: c?.name || slug, slug, stateAbbr: c?.state?.substring(0, 2).toUpperCase() || '' };
  });
}

function Accordion({ items }: { items: Array<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none', background: 'transparent', cursor: 'pointer', color: '#ffffff', fontWeight: 600, fontSize: 15, transition: '0.3s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(34,197,94,0.03)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
            {item.q}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ transition: 'transform 0.3s', transform: open === i ? 'rotate(180deg)' : '' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          {open === i && <div style={{ padding: '0 24px 20px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: 14 }}>{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

function ServiceAccordion({ services }: { services: typeof servicesBreakdown; cityName?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {services.map((svc, i) => (
        <div key={i} style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', transition: 'all 0.3s' }}
          onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.2)'; t.style.background = 'rgba(34,197,94,0.03)'; }}
          onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.background = 'transparent'; }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none', background: 'transparent', cursor: 'pointer', color: '#ffffff', fontWeight: 600, fontSize: 16 }}>
            <span>{svc.title}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ transition: 'transform 0.3s', transform: open === i ? 'rotate(180deg)' : '' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          {open === i && (
            <div style={{ padding: '0 28px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: '0 0 16px', fontSize: 14 }}>{svc.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 12 }}>
                {svc.items.map(item => <div key={item} style={{ padding: '8px 12px', borderRadius: 8, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', color: '#22c55e', fontSize: 12, fontWeight: 600, textAlign: 'center' }}>{item}</div>)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function LeadCaptureForm({ cityName }: { cityName: string }) {
  const [email, setEmail] = useState('');
  return (
    <div style={{ padding: '40px 32px', borderRadius: 24, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 20 }}>Free Consultation</h3>
      <form onSubmit={e => { e.preventDefault(); alert('Thanks! We\'ll contact you.'); setEmail(''); }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#ffffff', fontSize: 14 }} />
        <button type="submit" style={{ padding: '12px 24px', borderRadius: 12, background: '#22c55e', color: '#000', border: 'none', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(34,197,94,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
          Let's Talk
        </button>
      </form>
      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 14, lineHeight: 1.6 }}>Response within 24 hours.</p>
    </div>
  );
}

function TechTabs() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto', paddingBottom: 16 }}>
        {techCategories.map((cat, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ padding: '8px 20px', borderRadius: 12, border: '1px solid ' + (active === i ? '#22c55e' : 'rgba(255,255,255,0.06)'), background: active === i ? 'rgba(34,197,94,0.08)' : 'transparent', color: active === i ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', whiteSpace: 'nowrap' }}>
            {cat.name}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }}>
        {techCategories[active].items.map(tech => <div key={tech} style={{ padding: '16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textAlign: 'center', color: '#ffffff', fontWeight: 600, fontSize: 13 }}>{tech}</div>)}
      </div>
    </div>
  );
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.03em' }}>{value}</div>
      <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 6 }}>{label}</div>
    </div>
  );
}

function MarqueeStyles() {
  return (
    <style>{`
      @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      @keyframes cityMarqueeL { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      @keyframes cityMarqueeR { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      .loc-hero-grid { display: grid; grid-template-columns: 1fr 420px; gap: 60px; align-items: center; }
      .loc-svc-scroll::-webkit-scrollbar { display: none; }
      .loc-city-marquee:hover .loc-city-track { animation-play-state: paused !important; }
      .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
      .reveal.visible { opacity: 1; transform: none; }
      .reveal-d1 { transition-delay: 0.1s; }
      .reveal-d2 { transition-delay: 0.2s; }
      .reveal-d3 { transition-delay: 0.3s; }
      .reveal-d4 { transition-delay: 0.4s; }
      @media (max-width: 900px) { .loc-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      @media (max-width: 600px) { .loc-stats-row { grid-template-columns: repeat(2, 1fr) !important; } }
    `}</style>
  );
}

export default function PageClient({ city }: { city: CityData }) {
  const heroRef = useRef<HTMLElement>(null);
  const trustRef = useReveal() as React.RefObject<HTMLElement>;
  const logosRef = useReveal() as React.RefObject<HTMLElement>;
  const industriesRef = useReveal() as React.RefObject<HTMLElement>;
  const whyRef = useReveal() as React.RefObject<HTMLElement>;
  const portfolioRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const statsRef = useReveal() as React.RefObject<HTMLElement>;
  const testimonialsRef = useReveal() as React.RefObject<HTMLElement>;
  const topDevsRef = useReveal() as React.RefObject<HTMLElement>;
  const faqRef = useReveal() as React.RefObject<HTMLElement>;
  const relatedRef = useReveal() as React.RefObject<HTMLElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  const locationLabel = city.country === 'UAE' ? `${city.name}, UAE` : `${city.name}, ${city.state}`;
  const faqs = (city.faqs && city.faqs.length > 0) ? city.faqs : generateFAQs(city.name);
  const topDevReasons = getTopDevReasons(city.name);
  const relatedCities = getRelatedCities(city);
  const industryCards = city.localIndustries.map(name => {
    const data = industryData[name];
    return { name, icon: data?.icon || '💼', desc: data?.desc || `Solutions for ${name} in ${city.name}.` };
  });

  return (
    <>
      <MarqueeStyles />
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* 1. HERO */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <HeroBackground variant="center" />
          <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(60px, 10vw, 120px) 0', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
            <div className="loc-hero-grid">
              <div>
                <nav className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
                  {[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }].map(crumb => (
                    <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Link href={crumb.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#22c55e'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>{crumb.label}</Link>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>/</span>
                    </span>
                  ))}
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{city.name}</span>
                </nav>

                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{locationLabel}</span>
                </div>

                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
                  Software Development Company in <span style={{ color: '#22c55e' }}>{city.name}</span>
                </h1>

                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: 580, margin: '0 0 36px' }}>
                  {city.heroContext}
                </p>

                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get a Free Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 36px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
                    View Case Studies
                  </Link>
                </div>

                <div className="reveal reveal-d4 loc-stats-row" style={{ display: 'grid', gridTemplateColumns: `repeat(${city.stats.length}, 1fr)`, borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', maxWidth: 560 }}>
                  {city.stats.map((s, i) => (
                    <div key={s.label} style={{ padding: '18px 16px', textAlign: 'center', borderRight: i < city.stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                      <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#22c55e' }}>{s.value}</div>
                      <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal reveal-d3">
                <LeadCaptureForm cityName={city.name} />
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRUST */}
        <section ref={trustRef} style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(28px, 5vw, 48px) 0', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Awards</div>
            <TrustBadges />
          </div>
        </section>

        {/* 3. LOGOS */}
        <section ref={logosRef} style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(48px, 8vw, 80px) 0', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 40, fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Trusted by Leaders</div>
            <div style={{ position: 'relative', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', marginBottom: 16 }}>
              <div style={{ display: 'flex', gap: 48, animation: 'marqueeScroll 35s linear infinite', width: 'max-content' }}>
                {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                  <div key={`r1-${i}`} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(34,197,94,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: '#22c55e' }}>{logo.charAt(0)}</div>
                    <span style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap' }}>{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. INDUSTRIES */}
        <section ref={industriesRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Industries</div>
            <h2 className="reveal" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: 0 }}>Industries We Serve</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 16 }}>
            {industryCards.map((ind, i) => (
              <Link key={ind.name} href={`/industries/${ind.name.toLowerCase().replace(/[\s&]+/g, '-')}`}
                style={{ display: 'flex', flexDirection: 'column', padding: '24px', borderRadius: 18, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textDecoration: 'none', gap: 12, transition: 'all 0.3s', minHeight: 150 }}
                onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.25)'; t.style.background = 'rgba(34,197,94,0.04)'; t.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.background = 'rgba(255,255,255,0.015)'; t.style.transform = ''; }}>
                <div style={{ fontSize: 24 }}>{ind.icon}</div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: 0 }}>{ind.name}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, flexGrow: 1, lineHeight: 1.6 }}>{ind.desc}</p>
                <div style={{ color: '#22c55e', fontSize: 12, fontWeight: 600 }}>Explore →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* 5. WHY */}
        <section ref={whyRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Why {city.name}</div>
            <h2 className="reveal" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: 0, marginBottom: 20 }}>Why Choose Codazz</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {city.whyCity.map((item, i) => (
              <div key={item.title} className={`reveal reveal-d${i + 1}`}
                style={{ padding: '32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.2)'; t.style.background = 'rgba(34,197,94,0.03)'; t.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.background = 'rgba(255,255,255,0.015)'; t.style.transform = ''; }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#22c55e' }} />
                <div style={{ fontSize: 28, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. PORTFOLIO */}
        <section ref={portfolioRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Work</div>
            <h2 className="reveal" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: 0 }}>Featured Projects</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 24, marginBottom: 40 }}>
            {(city.portfolio && city.portfolio.length > 0 ? city.portfolio : portfolioProjects).map((project, i) => (
              <div key={project.name} className={`reveal reveal-d${i + 1}`}
                style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', overflow: 'hidden', transition: 'all 0.3s' }}
                onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.2)'; t.style.transform = 'translateY(-4px)'; t.style.boxShadow = '0 16px 40px rgba(34,197,94,0.08)'; }}
                onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.transform = ''; t.style.boxShadow = ''; }}>
                <div style={{ height: 160, background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(0,0,0,0))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>🚀</div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{project.name}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 16, lineHeight: 1.6 }}>{project.description}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`, gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {project.metrics.map(m => <div key={m.label} style={{ textAlign: 'center' }}><div style={{ fontSize: 16, fontWeight: 700, color: '#22c55e' }}>{m.value}</div><div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 4, fontWeight: 600 }}>{m.label}</div></div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 48, padding: '0 28px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>
              View All →
            </Link>
          </div>
        </section>

        {/* 7. SERVICES */}
        <section ref={servicesRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Services</div>
            <h2 className="reveal" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: 0 }}>What We Build</h2>
          </div>
          <div className="reveal" style={{ maxWidth: 900, margin: '0 auto' }}>
            <ServiceAccordion services={servicesBreakdown} />
          </div>
        </section>

        {/* 8. PROCESS */}
        <section ref={processRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Process</div>
            <h2 className="reveal" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: 0 }}>Development Steps</h2>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {processSteps.map((step, i) => (
              <div key={i} className={`reveal reveal-d${(i % 3) + 1}`} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', flexShrink: 0, background: i === 0 ? '#22c55e' : 'transparent', border: `2px solid ${i === 0 ? '#22c55e' : 'rgba(34,197,94,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{step.icon}</div>
                <div style={{ flex: 1, padding: '20px 24px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{step.title}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.6 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. TECH */}
        <section ref={techRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Tech Stack</div>
            <h2 className="reveal" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: 0 }}>Technologies</h2>
          </div>
          <div className="reveal" style={{ maxWidth: 800, margin: '0 auto' }}>
            <TechTabs />
          </div>
        </section>

        {/* 10. STATS */}
        <section ref={statsRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Stats</div>
            <h2 className="reveal" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: 0 }}>Codazz Numbers</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            {[{ value: '500+', label: 'Projects', icon: '🚀' }, { value: '100+', label: 'Engineers', icon: '👨‍💻' }, { value: '24', label: 'Countries', icon: '🌍' }, { value: '99%', label: 'Satisfaction', icon: '⭐' }].map(s => (
              <div key={s.label} style={{ padding: '28px 16px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 20, marginBottom: 8 }}>{s.icon}</div>
                <AnimatedStat value={s.value} label={s.label} />
              </div>
            ))}
          </div>
        </section>

        {/* 11. TESTIMONIALS */}
        <section ref={testimonialsRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)', marginBottom: 40 }}>
            <div style={{ textAlign: 'center' }}>
              <div className="reveal" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Testimonials</div>
              <h2 className="reveal" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: 0 }}>What Clients Say</h2>
            </div>
          </div>
          <TestimonialMarquee testimonials={city.testimonials} />
        </section>

        {/* 12. WHY US */}
        <section ref={topDevsRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Why Us</div>
            <h2 className="reveal" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: 0 }}>Top Reasons</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 16 }}>
            {topDevReasons.map((reason, i) => (
              <div key={reason.number} className={`reveal reveal-d${(i % 3) + 1}`}
                style={{ padding: '24px', borderLeft: '3px solid rgba(34,197,94,0.4)', borderTop: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, background: 'rgba(255,255,255,0.015)', transition: 'all 0.3s' }}
                onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.background = 'rgba(34,197,94,0.03)'; t.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.background = 'rgba(255,255,255,0.015)'; t.style.transform = ''; }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>{reason.number}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 8, margin: 0, marginBottom: 8 }}>{reason.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 13. FAQ */}
        <section ref={faqRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>FAQ</div>
            <h2 className="reveal" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: 0 }}>Questions</h2>
          </div>
          <div className="reveal" style={{ maxWidth: 800, margin: '0 auto' }}>
            <Accordion items={faqs} />
          </div>
        </section>

        {/* 14. GLOBAL */}
        <GlobalPresence />

        {/* 15. CITIES */}
        <section ref={relatedRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 40, fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 20 }}>More Locations</div>
            <h2 className="reveal" style={{ textAlign: 'center', fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 40px' }}>We Work Everywhere</h2>
          </div>
          <div style={{ overflow: 'hidden', maxWidth: 1280, margin: '0 auto', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
            <div className="loc-city-marquee" style={{ position: 'relative', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', marginBottom: 12 }}>
              <div className="loc-city-track" style={{ display: 'flex', gap: 12, animation: 'cityMarqueeL 35s linear infinite', width: 'max-content' }}>
                {[...relatedCities, ...relatedCities, ...relatedCities].map((rc, i) => (
                  <Link key={`r1-${i}`} href={`/locations/${rc.slug}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, fontSize: 13, fontWeight: 600, color: '#ffffff' }}>
                    📍 {rc.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 16. CTA */}
        <section ref={ctaRef} style={{ padding: 'clamp(80px, 12vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(34,197,94,0.08), transparent 70%)', pointerEvents: 'none' }} />
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>Let's Build Together</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 0 20px' }}>
              Ready to Transform<br />Your Vision?
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: '0 0 32px' }}>
              From startups to enterprises, we deliver working software on time. Let's talk about your next project.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(34,197,94,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Start Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <a href="https://calendly.com/codazz" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}>
                Schedule Call
              </a>
            </div>
            <div style={{ marginTop: 32, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
              hello@codazz.com • +1 (403) 604-8692
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
