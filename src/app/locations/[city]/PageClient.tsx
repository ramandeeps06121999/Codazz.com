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

const services = [
  { name: 'Mobile App Development', slug: 'mobile-app-development', icon: '📱', desc: 'Native iOS & Android apps, React Native, Flutter. Full-cycle development from concept to App Store launch.' },
  { name: 'Web Development', slug: 'web-development', icon: '🌐', desc: 'React, Next.js, Node.js web platforms. Responsive, fast, and SEO-optimized web applications.' },
  { name: 'AI Solutions', slug: 'ai-solutions', icon: '🧠', desc: 'ChatGPT integration, LLM APIs, machine learning models, AI-powered automation and analytics.' },
  { name: 'Cloud & DevOps', slug: 'cloud-architecture', icon: '☁️', desc: 'AWS, GCP, Azure deployment. Docker, Kubernetes, CI/CD pipelines, infrastructure as code.' },
  { name: 'IoT Development', slug: 'iot-development', icon: '📡', desc: 'Embedded systems, sensor integration, real-time data collection, device management platforms.' },
  { name: 'Blockchain & Web3', slug: 'blockchain', icon: '⛓️', desc: 'Smart contracts, crypto wallets, NFT platforms, DeFi solutions, blockchain architecture.' },
];

const industryData: Record<string, { icon: string; desc: string; details: string }> = {
  'FinTech': { icon: '💰', desc: 'Payment systems, trading platforms, lending apps.', details: 'We build secure, compliant financial software. Payment gateways, portfolio management, trading interfaces, blockchain integration.' },
  'Healthcare': { icon: '🏥', desc: 'Telemedicine, patient management, EHR systems.', details: 'HIPAA-compliant healthcare solutions. Virtual consultations, patient records, appointment scheduling, health monitoring.' },
  'E-Commerce': { icon: '🛒', desc: 'Marketplaces, shopping apps, inventory management.', details: 'End-to-end e-commerce platforms. Shopping carts, payment processing, inventory tracking, order fulfillment.' },
  'Real Estate': { icon: '🏠', desc: 'Property portals, virtual tours, CRM systems.', details: 'Real estate tech solutions. Property listings, 3D tours, buyer/agent management, transaction tracking.' },
  'Logistics': { icon: '🚛', desc: 'Fleet management, route optimization, tracking.', details: 'Supply chain and logistics software. Real-time tracking, route optimization, fleet management, delivery scheduling.' },
  'EdTech': { icon: '📚', desc: 'Learning platforms, video courses, assessments.', details: 'Education technology platforms. Online courses, student progress tracking, interactive quizzes, certification systems.' },
  'SaaS': { icon: '☁️', desc: 'Subscription apps, analytics, billing systems.', details: 'SaaS infrastructure. Multi-tenant platforms, subscription billing, usage analytics, user authentication.' },
  'AI Products': { icon: '🤖', desc: 'Intelligent automation, predictive analytics.', details: 'AI-powered applications. Machine learning models, predictive algorithms, intelligent automation workflows.' },
};

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    duration: '1-2 weeks',
    desc: 'We dive deep into understanding your business goals, target market, competitive landscape, and technical requirements. Through workshops and discovery sessions, we create a roadmap for success.',
    deliverables: ['Project Plan', 'Requirements Doc', 'Tech Stack', 'Timeline', 'Budget Estimate']
  },
  {
    num: '02',
    title: 'Design & Architecture',
    duration: '2-3 weeks',
    desc: 'Our designers create beautiful, user-centered interfaces while engineers design scalable system architecture. We prepare wireframes, prototypes, and technical documentation for review.',
    deliverables: ['UI/UX Designs', 'Architecture Diagram', 'Database Schema', 'API Specs', 'Prototypes']
  },
  {
    num: '03',
    title: 'Development (Sprints)',
    duration: '8-16 weeks',
    desc: 'We follow agile 2-week sprints with daily standups and weekly demos. You see progress continuously with regular code reviews, automated testing, and incremental feature releases.',
    deliverables: ['Working Code', 'Automated Tests', 'Documentation', 'Code Reviews', 'Sprint Reports']
  },
  {
    num: '04',
    title: 'QA & Optimization',
    duration: '2-4 weeks',
    desc: 'Comprehensive testing including automated tests, manual QA, performance optimization, security audits, and bug fixes. We ensure production readiness.',
    deliverables: ['QA Reports', 'Bug Fixes', 'Performance Data', 'Security Audit', 'Optimization Report']
  },
  {
    num: '05',
    title: 'Launch & Support',
    duration: 'Ongoing',
    desc: 'Seamless deployment to production with monitoring, alerts, and 24/7 support. We continue optimizing and adding features based on user feedback and analytics.',
    deliverables: ['Live Deployment', 'Monitoring Setup', 'Support Plan', 'Analytics Dashboard', 'Feature Updates']
  }
];

const portfolioProjects = [
  {
    name: 'Multi-Currency Payment Platform',
    category: 'FinTech',
    desc: 'Crypto and fiat payment platform with real-time trading, portfolio management, and secure wallets.',
    metrics: [{ label: 'Users', value: '500K+' }, { label: 'Transactions', value: '$2B+' }, { label: 'Uptime', value: '99.99%' }],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe', 'Blockchain']
  },
  {
    name: 'Enterprise AI Chatbot Platform',
    category: 'AI',
    desc: 'NLP-powered chatbot with multi-language support, custom training, analytics, and integration APIs.',
    metrics: [{ label: 'Customers', value: '1K+' }, { label: 'Messages/Day', value: '10M+' }, { label: 'Accuracy', value: '94%' }],
    tech: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL', 'Redis']
  },
  {
    name: 'Virtual Telemedicine Platform',
    category: 'Healthcare',
    desc: 'HIPAA-compliant platform connecting patients with doctors for video consultations and prescriptions.',
    metrics: [{ label: 'Doctors', value: '5K+' }, { label: 'Appointments', value: '100K+' }, { label: 'Rating', value: '4.8★' }],
    tech: ['React', 'Node.js', 'WebRTC', 'MongoDB', 'AWS']
  },
];

const topReasons = [
  { num: '01', title: 'Proven Track Record', desc: '500+ projects delivered across startups and enterprises. 99.9% on-time delivery. Average client satisfaction: 4.9/5 stars on Clutch.' },
  { num: '02', title: 'Senior Engineering Team', desc: 'Average 8+ years of professional experience. Continuous learning, certifications, and expertise in latest technologies and best practices.' },
  { num: '03', title: 'Transparent & Agile', desc: 'Fixed-price quotes with no hidden fees. 2-week sprints, daily standups, weekly demos. Full ownership of your project.' },
  { num: '04', title: 'Cost Advantage', desc: '25-40% lower than Silicon Valley rates without compromising quality. Proven by Clutch 4.9★ rating and case studies.' },
  { num: '05', title: '24/7 Support', desc: 'Round-the-clock support across time zones. Dedicated team, rapid response to issues, proactive monitoring and optimization.' },
  { num: '06', title: 'Startup-Friendly', desc: 'Flexible engagement models. Equity partnerships available. We grow with your business. Success-oriented approach.' },
];

function generateFAQs(cityName: string): Array<{ q: string; a: string }> {
  return [
    { q: `How much does custom software development cost in ${cityName}?`, a: `Costs vary based on project complexity and scope. Small projects: $20K-$50K. Medium projects: $50K-$150K. Enterprise solutions: $150K+. We provide fixed-price quotes with detailed breakdowns. Contact us for a free consultation and estimate.` },
    { q: `How long does it take to build a mobile app or web application?`, a: `MVP (Minimum Viable Product): 8-12 weeks. Full-featured application: 4-6 months. Enterprise systems: 6-12 months. We use 2-week sprints so you see progress continuously with weekly demos.` },
    { q: `Do you offer staff augmentation and dedicated development teams?`, a: `Yes! Hire dedicated developers, designers, or entire teams. Senior engineers, full benefits, seamless integration with your existing team. Flexible scaling up or down based on needs.` },
    { q: `What is your software development process and methodology?`, a: `Discovery → Design → Development (2-week sprints) → QA → Launch → Support. Daily standups, weekly demos, code reviews, automated testing. We follow agile principles with full transparency.` },
    { q: `Do you provide post-launch support and maintenance?`, a: `Absolutely. 24/7 support, monitoring, bug fixes, performance optimization. Optional retainer packages for ongoing feature development. SLAs and uptime guarantees available.` },
    { q: `Can you help modernize legacy systems and technical debt?`, a: `Yes. We audit, refactor, and migrate old systems to modern stacks like Next.js, React, Node.js, Python. Zero downtime migration guaranteed. Updated security and performance.` },
    { q: `What technologies and frameworks do you specialize in?`, a: `Frontend: React, Next.js, TypeScript, Tailwind. Backend: Node.js, Python, Go, Java. Mobile: React Native, Flutter, Swift, Kotlin. Cloud: AWS, GCP, Azure. Databases: PostgreSQL, MongoDB, DynamoDB.` },
    { q: `How do you ensure security and data privacy?`, a: `ISO 27001 certified. HIPAA-compliant for healthcare. SOC II Type II. We implement industry best practices: encryption, secure authentication, regular security audits, compliance standards.` },
  ];
}

function getRelatedCities(city: CityData): Array<{ name: string; slug: string }> {
  const nearby = city.nearbyLocations || [];
  return nearby.map(slug => {
    const c = cities.find(x => x.slug === slug);
    return { name: c?.name || slug, slug };
  });
}

function Accordion({ items }: { items: Array<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none', background: 'transparent', cursor: 'pointer', color: '#ffffff', fontWeight: 600, fontSize: 15 }}>
            {item.q}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ transition: 'transform 0.3s', transform: open === i ? 'rotate(180deg)' : '' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          {open === i && <div style={{ padding: '0 24px 20px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: 14 }}>{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

function MarqueeStyles() {
  return (
    <style>{`
      .loc-hero-grid { display: grid; grid-template-columns: 1fr 420px; gap: 60px; align-items: center; }
      .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
      .reveal.visible { opacity: 1; transform: none; }
      .reveal-d1 { transition-delay: 0.1s; }
      .reveal-d2 { transition-delay: 0.2s; }
      .reveal-d3 { transition-delay: 0.3s; }
      .reveal-d4 { transition-delay: 0.4s; }
      @media (max-width: 900px) { .loc-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      @media (max-width: 600px) { .loc-stats-row { grid-template-columns: repeat(2, 1fr) !important; } }

      /* Company card hover */
      .company-card { transition: all 0.3s ease; }
      .company-card:hover { border-color: rgba(34, 197, 94, 0.2); background-color: rgba(34, 197, 94, 0.04); }

      /* Service card hover */
      .service-card { transition: all 0.3s ease; }
      .service-card:hover { border-color: rgba(34, 197, 94, 0.25); background-color: rgba(34, 197, 94, 0.04); transform: translateY(-4px); }

      /* Industry card hover */
      .industry-card { transition: all 0.3s ease; }
      .industry-card:hover { border-color: rgba(34, 197, 94, 0.25); background-color: rgba(34, 197, 94, 0.04); }

      /* Button hover */
      .form-submit-btn { transition: all 0.3s ease; }
      .form-submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(34, 197, 94, 0.3); }
    `}</style>
  );
}

function LeadCaptureForm({ cityName }: { cityName: string }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', project: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.project) {
      setSubmitted(true);
      setTimeout(() => { setFormData({ name: '', email: '', phone: '', project: '' }); setSubmitted(false); }, 3000);
    }
  };
  const inputStyle = { padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#ffffff', fontSize: 14, fontFamily: 'inherit', width: '100%', boxSizing: 'border-box' as const };
  return (
    <div style={{ padding: '40px 32px', borderRadius: 24, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>Free Project Estimate</h3>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 24px' }}>Get a Quote in 24 Hours</p>
      {submitted ? (
        <div style={{ padding: '20px', borderRadius: 12, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', textAlign: 'center' }}>
          <div style={{ fontSize: 28, marginBottom: 12 }}>✓</div>
          <p style={{ fontSize: 14, color: '#22c55e', fontWeight: 600, margin: 0 }}>Thank you! We'll contact you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          <input type="email" name="email" placeholder="Work Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={inputStyle} />
          <textarea name="project" placeholder="Tell us about your project..." value={formData.project} onChange={handleChange} required style={{ ...inputStyle, minHeight: 100, resize: 'none' }} />
          <button type="submit" className="form-submit-btn" style={{ padding: '14px 24px', borderRadius: 12, background: '#22c55e', color: '#000', border: 'none', fontWeight: 700, cursor: 'pointer', fontSize: 14, transition: 'all 0.3s' }}>
            Get Free Quote
          </button>
        </form>
      )}
      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 14 }}>Your data is protected • NDA available</p>
    </div>
  );
}

export default function PageClient({ city }: { city: CityData }) {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const industriesRef = useReveal() as React.RefObject<HTMLElement>;
  const whyRef = useReveal() as React.RefObject<HTMLElement>;
  const portfolioRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const statsRef = useReveal() as React.RefObject<HTMLElement>;
  const testimonialsRef = useReveal() as React.RefObject<HTMLElement>;
  const whyUsRef = useReveal() as React.RefObject<HTMLElement>;
  const faqRef = useReveal() as React.RefObject<HTMLElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  const relatedCities = getRelatedCities(city);
  const faqs = (city.faqs && city.faqs.length > 0) ? city.faqs : generateFAQs(city.name);

  return (
    <>
      <MarqueeStyles />
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <HeroBackground variant="center" />
          <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(60px, 10vw, 120px) 0', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
            <div className="loc-hero-grid">
              <div>
                <nav className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, flexWrap: 'wrap', fontSize: 13 }}>
                  <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
                  <Link href="/locations" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Locations</Link>
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>{city.name}</span>
                </nav>

                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
                  Software Development Company in <span style={{ color: '#22c55e' }}>{city.name}</span>
                </h1>

                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: 580, margin: '0 0 36px' }}>
                  {city.heroContext}
                </p>

                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
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

        {/* TRUSTED BY LEADERS */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 50 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', margin: 0 }}>Trusted by Industry Leaders</p>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
            <div style={{ display: 'flex', gap: 60, justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'center' }}>
              {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Shopify', 'Stripe', 'Figma', 'Notion'].map((company, i) => (
                <div key={company} className={`reveal reveal-d${(i % 4) + 1} company-card`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 24px', borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', minWidth: 160, justifyContent: 'center', transition: 'all 0.3s' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: '#22c55e' }}>
                    {company.charAt(0)}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap' }}>{company}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 50 }}>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>
              Trusted by startups, scaleups, and enterprises building next-generation software in {city.name} and globally.
            </p>
          </div>
        </section>

        {/* TRUST */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(40px, 6vw, 80px) 0', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <TrustBadges />
          </div>
        </section>

        {/* WHY SOFTWARE DEVELOPMENT */}
        <section style={{ padding: 'clamp(100px, 12vw, 160px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 24px' }}>
              Unlock Your Business Potential with Expert Software Development in {city.name}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: 32, marginTop: 40 }}>
              {/* Problem 1 */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>⚡</div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>Digital Transformation is No Longer Optional</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                    {city.name}'s competitive business landscape demands digital transformation. Companies without modern software solutions fall behind competitors. Custom software development is essential for automating processes, improving efficiency, and scaling your business faster than your competition.
                  </p>
                </div>
              </div>

              {/* Problem 2 */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>💼</div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>Off-the-Shelf Software Has Limits</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                    Generic software may not fit your unique business requirements. Custom software development gives you full control — tailored features, scalable architecture, and solutions built specifically for your {city.name} market. No compromises, no vendor lock-in.
                  </p>
                </div>
              </div>

              {/* Solution 1 */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>🚀</div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>Custom Software Accelerates Growth</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                    Software development services empower {city.name} businesses to reduce operational costs by 30-40%, increase productivity, and scale operations without proportional cost increases. Our clients report faster time-to-market, improved customer satisfaction, and higher profitability.
                  </p>
                </div>
              </div>

              {/* Solution 2 */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>🔒</div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>Security & Compliance Built In</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                    Custom software development includes security-by-design principles. For {city.name} FinTech, Healthcare, and regulated industries, we ensure compliance with local data protection laws, PCI-DSS, HIPAA, and industry standards from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 24, padding: '40px', marginTop: 60, marginBottom: 60 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 24px' }}>Who Needs Software Development Services in {city.name}?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {[
                { icon: '🚀', title: 'Startups & MVPs', desc: city.name === 'Toronto' ? "Launch your startup in Canada's startup capital. Scale from idea to Series A at MaRS Discovery District pace." : 'Build your first product or scale from idea to Series A funding round' },
                { icon: '🏢', title: 'Growing SMBs', desc: 'Automate operations, compete with larger players, enter new markets' },
                { icon: '🔄', title: 'Enterprises', desc: 'Modernize legacy systems, integrate APIs, improve customer experience' },
                { icon: '💰', title: 'Financial Services', desc: city.name === 'Toronto' ? 'Build OSFI-compliant fintech platforms, trading systems, and payment solutions for Bay Street and beyond' : 'Build fintech platforms, payment systems, trading interfaces on Wall Street' },
                { icon: '🏥', title: 'Healthcare Orgs', desc: city.name === 'Toronto' ? 'Launch PHIPA-compliant telemedicine and patient management systems serving Ontario Health' : 'Launch telemedicine platforms, patient management, HIPAA-compliant systems' },
                { icon: '🛒', title: 'E-Commerce', desc: 'Build marketplaces, shopping apps, inventory systems, payment integration' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '16px', borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h4>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ marginBottom: 60 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 24px' }}>What You'll Gain from Professional Software Development</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
              {[
                { value: '30-40%', label: 'Cost Reduction', desc: 'Automated processes, reduced manual work' },
                { value: '3x Faster', label: 'Time-to-Market', desc: 'Launch new features and products quickly' },
                { value: '90%+ Uptime', label: 'Business Continuity', desc: 'Reliable systems that keep you running' },
                { value: '99.9% SLA', label: 'Production Reliability', desc: 'Enterprise-grade uptime guarantees' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '24px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>{item.value}</div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: '0 0 6px' }}>{item.label}</h4>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 16px' }}>Why Software Development Matters for Your {city.name} Business</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: '0 0 16px' }}>
              {city.name === 'Toronto' ?
                "Software development is the foundation of competitive advantage in Toronto's thriving tech ecosystem. Whether you're building fintech on King West, scaling AI research into products, launching healthcare solutions for Ontario, or growing your e-commerce empire, custom software gives you the tools to dominate your market, reduce operational costs by 30-40%, improve customer satisfaction, and scale rapidly."
                :
                `Software development is an investment in your company's future. Whether you're in FinTech on Wall Street, Healthcare in the Medical District, E-Commerce, or any industry in ${city.name}, custom software gives you competitive advantage, reduces operational cost, improves customer satisfaction, and enables rapid scaling.`
              }
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
              {city.name === 'Toronto' ?
                "Codazz is trusted by leading Toronto fintech platforms, healthcare systems, AI startups, and enterprises. We bring 500+ projects of experience, deep expertise in OSFI compliance and Ontario Health integration, proven track record with Canadian startups and institutions, and developers who average 8+ years of experience. We understand Toronto's unique business landscape, regulatory environment, and growth velocity. Partner with us to build software that scales with your ambition."
                :
                `The right development partner makes all the difference. Codazz brings 500+ projects of experience, proven expertise in ${city.name}'s unique market, and a commitment to delivering working software on time and budget. Our developers average 8+ years of professional experience and understand your industry challenges.`
              }
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section ref={servicesRef} style={{ padding: 'clamp(80px, 10vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 20px' }}>
              Software Development Services in {city.name}
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 720, margin: '0 auto' }}>
              Full-spectrum software development tailored to your business. From mobile apps to enterprise platforms, AI solutions to cloud infrastructure — we deliver working software on time.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 28 }}>
            {services.map((svc, i) => (
              <Link key={svc.slug} href={`/services/${svc.slug}`}
                className={`reveal reveal-d${(i % 2) + 1} service-card`}
                style={{ display: 'flex', flexDirection: 'column', padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textDecoration: 'none', gap: 16, transition: 'all 0.3s', minHeight: 240 }}>
                <div style={{ fontSize: 32 }}>{svc.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{svc.name}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, flexGrow: 1, lineHeight: 1.7 }}>{svc.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#22c55e', fontSize: 13, fontWeight: 600, marginTop: 'auto' }}>
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section ref={industriesRef} style={{ padding: 'clamp(80px, 10vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 20px' }}>
              Industries We Serve
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 720, margin: '0 auto' }}>
              Industry expertise across FinTech, Healthcare, E-Commerce, Real Estate, Logistics, EdTech, SaaS, and AI. We understand compliance, user needs, and market dynamics for every vertical.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 24 }}>
            {Object.entries(industryData).map(([name, data], i) => (
              <Link key={name} href={`/industries/${name.toLowerCase().replace(/[\s&]+/g, '-')}`}
                className={`reveal reveal-d${(i % 4) + 1} industry-card`}
                style={{ display: 'flex', flexDirection: 'column', padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textDecoration: 'none', gap: 14, transition: 'all 0.3s', minHeight: 280 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ fontSize: 28 }}>{data.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{name}</h3>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0, fontWeight: 500 }}>{data.desc}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', margin: 0, flexGrow: 1, lineHeight: 1.7 }}>{data.details}</p>
                <div style={{ color: '#22c55e', fontSize: 12, fontWeight: 600 }}>Explore solutions →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section ref={whyRef} style={{ padding: 'clamp(80px, 10vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 20px' }}>
              Why {city.name} Businesses Choose Codazz
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 720, margin: '0 auto' }}>
              We understand the unique business landscape, regulatory requirements, and growth challenges in {city.name}. Our local expertise combined with global best practices delivers results.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {city.whyCity.map((item, i) => (
              <div key={item.title} className={`reveal reveal-d${(i % 2) + 1}`}
                style={{ padding: '32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, background: 'rgba(255,255,255,0.015)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #22c55e, transparent)' }} />
                <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', marginBottom: 12, margin: 0 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section ref={portfolioRef} style={{ padding: 'clamp(80px, 10vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 20px' }}>
              Featured Projects & Case Studies
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 720, margin: '0 auto' }}>
              Real projects with measurable results. From fintech platforms processing billions to AI chatbots serving millions of messages daily. See the impact we deliver.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 24, marginBottom: 40 }}>
            {portfolioProjects.map((project, i) => (
              <Link key={project.name} href="/case-studies"
                className={`reveal reveal-d${(i % 3) + 1}`}
                style={{ display: 'flex', flexDirection: 'column', padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.25)'; t.style.background = 'rgba(34,197,94,0.04)'; t.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.background = 'rgba(255,255,255,0.015)'; t.style.transform = ''; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ fontSize: 24 }}>🚀</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{project.category}</div>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 12, margin: 0 }}>{project.name}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 20, flexGrow: 1 }}>{project.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {project.metrics.map(m => (
                    <div key={m.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: '#22c55e' }}>{m.value}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 4, fontWeight: 600, textTransform: 'uppercase' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
              View All Case Studies
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>

        {/* PROCESS */}
        <section ref={processRef} style={{ padding: 'clamp(80px, 10vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 20px' }}>
              Our Development Process
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 720, margin: '0 auto' }}>
              A proven, battle-tested 5-step process refined over 500+ projects. We focus on transparency, communication, and delivering exceptional results on time and budget.
            </p>
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
            {processSteps.map((step, i) => (
              <div key={i} className={`reveal reveal-d${(i % 2) + 1}`} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'start' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', flexShrink: 0, background: i === 0 ? '#22c55e' : 'transparent', border: `2px solid ${i === 0 ? '#22c55e' : 'rgba(34,197,94,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: i === 0 ? '#000' : '#22c55e' }}>
                  {step.num}
                </div>
                <div style={{ padding: '24px 28px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', margin: 0 }}>{step.title}</h3>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', padding: '4px 12px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', whiteSpace: 'nowrap' }}>{step.duration}</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 16, margin: 0 }}>{step.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {step.deliverables.map(d => (
                      <span key={d} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', padding: '5px 12px', borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}>✓ {d}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section ref={statsRef} style={{ padding: 'clamp(80px, 10vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 20px' }}>
              By The Numbers
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
              Proven results across multiple projects and clients. Our track record speaks for itself.
            </p>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            {[
              { value: '500+', label: 'Projects', desc: 'Delivered across startups and enterprises' },
              { value: '100+', label: 'Engineers', desc: 'Avg 8+ years experience' },
              { value: '24', label: 'Countries', desc: 'Global presence and expertise' },
              { value: '99.9%', label: 'Uptime', desc: 'Production SLA guarantee' },
            ].map((stat, i) => (
              <div key={stat.label} style={{ padding: '32px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', fontWeight: 700, color: '#22c55e' }}>{stat.value}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginTop: 8, letterSpacing: '0.06em' }}>{stat.label}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 6 }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section ref={testimonialsRef} style={{ padding: 'clamp(80px, 10vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 20px' }}>
                What Our Clients Say
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
                Hear from founders and executives who have partnered with us to build their products.
              </p>
            </div>
            <TestimonialMarquee testimonials={city.testimonials} />
          </div>
        </section>

        {/* WHY US */}
        <section ref={whyUsRef} style={{ padding: 'clamp(80px, 10vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 20px' }}>
              Why Choose Codazz for {city.name}
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 720, margin: '0 auto' }}>
              We're not just developers — we're partners invested in your success. Here's why {city.name} businesses trust us.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 24 }}>
            {topReasons.map((reason, i) => (
              <div key={reason.num} className={`reveal reveal-d${(i % 3) + 1}`}
                style={{ padding: '28px 32px', borderLeft: '3px solid rgba(34,197,94,0.4)', borderTop: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, background: 'rgba(255,255,255,0.015)' }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#22c55e', marginBottom: 12, letterSpacing: '0.08em' }}>{reason.num}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 12, margin: 0 }}>{reason.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section ref={faqRef} style={{ padding: 'clamp(80px, 10vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 20px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
              Common questions about software development, our process, pricing, and partnerships.
            </p>
          </div>
          <div className="reveal" style={{ maxWidth: 800, margin: '0 auto' }}>
            <Accordion items={faqs} />
          </div>
        </section>

        {/* GLOBAL */}
        <GlobalPresence />

        {/* RELATED CITIES */}
        <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 20px' }}>
              Software Development in Other Cities
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto', marginBottom: 40 }}>
              Serving clients across North America with local expertise in every major tech hub.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
            {relatedCities.map(city => (
              <Link key={city.slug} href={`/locations/${city.slug}`}
                style={{ padding: '16px 20px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textDecoration: 'none', color: '#ffffff', fontSize: 14, fontWeight: 600, textAlign: 'center', transition: 'all 0.3s' }}
                onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.3)'; t.style.background = 'rgba(34,197,94,0.05)'; }}
                onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.background = 'rgba(255,255,255,0.015)'; }}>
                📍 {city.name}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} style={{ padding: 'clamp(100px, 12vw, 160px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', maxWidth: 1280, margin: '0 auto', width: '100%', paddingLeft: 'max(2vw, 24px)', paddingRight: 'max(2vw, 24px)' }}>
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 0 20px' }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: '0 0 40px' }}>
              Whether you're a startup building your first MVP or an enterprise modernizing legacy systems — we're ready to help you build something great in {city.name}.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 40px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <a href="https://calendly.com/codazz" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>
                📅 Schedule Call
              </a>
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
              hello@codazz.com • +1 (403) 604-8692 • Response within 24 hours
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
