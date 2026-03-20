'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';

// ─── REVEAL HOOK ─────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.02, rootMargin: '0px 0px 100px 0px' }
    );
    els?.forEach(el => io.observe(el));
    const fallback = setTimeout(() => {
      els?.forEach(el => el.classList.add('visible'));
    }, 4000);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);
  return ref;
}

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface CityServicePageProps {
  cityName: string;
  citySlug: string;
  state: string;
  stateAbbr: string;
  isHQ: boolean;
  serviceName: string;
  serviceSlug: string;
  heroContext: string;
  heroDescription: string;
  badge: string;
  localIndustries: string[];
  industryExpertise: string;
  servicesIntro: string;
  processIntro: string;
  techIntro: string;
  stats: { value: string; label: string }[];
  largeServices: { icon: string; title: string; desc: string; tags?: string[] }[];
  smallServices: { icon: string; title: string; desc: string }[];
  whyCity: { icon: string; title: string; desc: string }[];
  steps: { num: string; title: string; duration: string; desc: string; deliverables: string[] }[];
  techCategories: { title: string; items: string[] }[];
  testimonials: { name: string; company: string; role: string; quote: string }[];
  faqs: { q: string; a: string }[];
  relatedSubServices: { name: string; slug: string }[];
  relatedCityServices: { name: string; citySlug: string; serviceSlug: string }[];
}

// ─── SHARED STYLES ───────────────────────────────────────────────────────────

const sectionPad: React.CSSProperties = { padding: 'clamp(60px, 10vw, 120px) 0' };
const sectionBorder: React.CSSProperties = { borderTop: '1px solid rgba(255,255,255,0.05)' };
const heading2: React.CSSProperties = { fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 };
const subLabel: React.CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.25)', marginBottom: 20 };
const bodyText: React.CSSProperties = { fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 };
const autoGrid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 'clamp(16px, 2vw, 20px)' };

function hoverCard(e: React.MouseEvent, on: boolean) {
  const t = e.currentTarget as HTMLElement;
  t.style.borderColor = on ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)';
  t.style.background = on ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)';
  t.style.transform = on ? 'translateY(-4px)' : '';
  t.style.boxShadow = on ? '0 24px 60px rgba(255,255,255,0.06)' : '';
}

const cardStyle: React.CSSProperties = {
  padding: '36px 32px',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 18px',
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,0.08)',
  background: 'rgba(255,255,255,0.03)',
  color: '#ffffff',
  fontSize: 16,
  fontFamily: 'inherit',
  transition: '0.3s',
  outline: 'none',
  boxSizing: 'border-box',
};

// ─── TRUST BADGES DATA ──────────────────────────────────────────────────────

const trustBadges = [
  { src: '/awards/Clutch-Top-GenerativeAI-Company2026.png', alt: 'Clutch Top Generative AI Company 2026', w: 60, h: 48 },
  { src: '/awards/aws-advance-tier.svg', alt: 'AWS Advanced Tier Partner', w: 60, h: 48 },
  { src: '/awards/socII-icon.svg', alt: 'SOC II Compliant', w: 48, h: 48 },
  { src: '/awards/ISO-icon.svg', alt: 'ISO 27001 Certified', w: 48, h: 48 },
  { src: '/awards/Webby-icon.svg', alt: 'Webby Award Honoree', w: 48, h: 48 },
];

// ─── PORTFOLIO SHOWCASE DATA ────────────────────────────────────────────────

const portfolioResults = [
  {
    icon: '\u{1F4B3}',
    category: 'FinTech',
    title: 'Digital Banking Platform',
    desc: 'Built a full-stack digital banking app with real-time payments, biometric auth, and PCI-DSS compliance. Scaled from 0 to 100K+ active users within 8 months of launch.',
    metrics: [
      { value: '4.9\u2605', label: 'App Store Rating' },
      { value: '100K+', label: 'Active Users' },
      { value: '99.99%', label: 'Uptime SLA' },
    ],
    tags: ['React Native', 'Node.js', 'AWS', 'Stripe'],
    accentColor: 'rgba(34,197,94,0.15)',
  },
  {
    icon: '\u{1F6D2}',
    category: 'E-Commerce',
    title: 'Omnichannel Retail Platform',
    desc: 'Designed and developed a headless commerce platform integrating 12 sales channels with unified inventory, AI-powered recommendations, and sub-second page loads globally.',
    metrics: [
      { value: '3x', label: 'Revenue Growth' },
      { value: '340%', label: 'Conversion Lift' },
      { value: '<0.8s', label: 'Load Time' },
    ],
    tags: ['Next.js', 'Shopify Plus', 'Algolia', 'Vercel'],
    accentColor: 'rgba(59,130,246,0.15)',
  },
  {
    icon: '\u{1F3E5}',
    category: 'Healthcare',
    title: 'Telehealth & Patient Portal',
    desc: 'Delivered a HIPAA-compliant telehealth platform with video consultations, EHR integration, e-prescriptions, and a patient portal serving 50K+ patients across 200+ providers.',
    metrics: [
      { value: 'HIPAA', label: 'Compliant' },
      { value: '50K+', label: 'Patients Served' },
      { value: '4.8\u2605', label: 'Provider Rating' },
    ],
    tags: ['React', 'Python', 'FHIR', 'Azure'],
    accentColor: 'rgba(168,85,247,0.15)',
  },
];

// ─── INDUSTRY ICON MAP ──────────────────────────────────────────────────────

const industryIconMap: Record<string, string> = {
  'FinTech': '\u{1F4B3}', 'Finance': '\u{1F4B3}', 'Banking': '\u{1F3E6}',
  'AI & Machine Learning': '\u{1F916}', 'AI': '\u{1F916}', 'Machine Learning': '\u{1F916}',
  'HealthTech': '\u{1F3E5}', 'Healthcare': '\u{1F3E5}', 'Health': '\u{1F3E5}',
  'E-Commerce': '\u{1F6D2}', 'Retail': '\u{1F6D2}', 'eCommerce': '\u{1F6D2}',
  'Media': '\u{1F3AC}', 'Entertainment': '\u{1F3AC}', 'Streaming': '\u{1F3AC}',
  'Media & Entertainment': '\u{1F3AC}',
  'EdTech': '\u{1F393}', 'Education': '\u{1F393}',
  'Real Estate': '\u{1F3D7}\u{FE0F}', 'PropTech': '\u{1F3D7}\u{FE0F}', 'Construction': '\u{1F3D7}\u{FE0F}',
  'Logistics': '\u{1F69A}', 'Supply Chain': '\u{1F69A}', 'Transportation': '\u{1F69A}',
  'Energy': '\u{26A1}', 'CleanTech': '\u{26A1}', 'Oil & Gas': '\u{26A1}', 'Oil & Gas Tech': '\u{26A1}',
  'Energy & Sustainability': '\u{26A1}',
  'SaaS': '\u{2601}\u{FE0F}', 'Cloud': '\u{2601}\u{FE0F}', 'Enterprise SaaS': '\u{2601}\u{FE0F}',
  'Insurance': '\u{1F6E1}\u{FE0F}', 'InsurTech': '\u{1F6E1}\u{FE0F}',
  'Legal': '\u{2696}\u{FE0F}', 'LegalTech': '\u{2696}\u{FE0F}',
  'Manufacturing': '\u{1F3ED}', 'Industrial': '\u{1F3ED}', 'Smart Manufacturing': '\u{1F3ED}',
  'Travel': '\u{2708}\u{FE0F}', 'Hospitality': '\u{2708}\u{FE0F}', 'Tourism': '\u{2708}\u{FE0F}',
  'Tourism & Hospitality': '\u{2708}\u{FE0F}',
  'Gaming': '\u{1F3AE}', 'Sports': '\u{1F3C6}',
  'Agriculture': '\u{1F33E}', 'AgriTech': '\u{1F33E}',
  'Telecom': '\u{1F4E1}', 'Telecommunications': '\u{1F4E1}',
  'Government': '\u{1F3DB}\u{FE0F}', 'GovTech': '\u{1F3DB}\u{FE0F}', 'Government & Smart City': '\u{1F3DB}\u{FE0F}',
  'Automotive': '\u{1F697}', 'Mobility': '\u{1F697}',
  'Cybersecurity': '\u{1F512}',
  'Biotech': '\u{1F9EC}',
  'Aerospace': '\u{1F680}',
  'Defence': '\u{1F6E1}\u{FE0F}',
  'Mining Tech': '\u{26CF}\u{FE0F}',
  'Fashion Tech': '\u{1F45C}',
  'Food Tech': '\u{1F355}',
  'Maritime': '\u{1F6A2}',
  'Robotics': '\u{1F916}',
  'VFX & Film': '\u{1F3AC}',
  'Space Tech': '\u{1F6F8}',
  'Sovereign Wealth': '\u{1F4B0}',
  'IoT': '\u{1F4F6}',
  'Retail Tech': '\u{1F6D2}',
};
const defaultIcons = ['\u{1F4A1}', '\u{1F52C}', '\u{1F3AF}', '\u{1F680}', '\u{2B50}', '\u{1F527}', '\u{1F4CA}', '\u{1F310}', '\u{1F4BB}', '\u{1F512}'];

function getIndustryIcon(ind: string, index: number): string {
  return industryIconMap[ind] || Object.entries(industryIconMap).find(([k]) => ind.toLowerCase().includes(k.toLowerCase()))?.[1] || defaultIcons[index % defaultIcons.length];
}

// ─── WHY CHOOSE US EXTRA CARDS ──────────────────────────────────────────────

const whyChooseUsExtras = [
  { icon: '\u{1F4CD}', title: 'Local Expertise', desc: 'Our team understands the regulatory landscape, business culture, and user expectations specific to your city. We combine global engineering standards with hyper-local market knowledge to build products that resonate with your target audience from day one.' },
  { icon: '\u{1F4C8}', title: 'Proven Track Record', desc: 'With 500+ projects delivered across 24 countries since 2018, we bring battle-tested processes and domain expertise to every engagement. Our client retention rate of 94% speaks to the long-term partnerships we build, not just one-off projects.' },
  { icon: '\u{1F465}', title: 'Dedicated Team', desc: 'Every project gets a dedicated cross-functional team including a project manager, lead architect, senior developers, QA engineers, and a DevOps specialist. No freelancers, no outsourcing your project to third parties - your team is your team throughout.' },
  { icon: '\u{1F6E0}\u{FE0F}', title: 'Post-Launch Support', desc: 'Our relationship does not end at deployment. We provide 90 days of complimentary post-launch support, proactive monitoring, performance optimization, and a dedicated Slack channel for your team. Most clients continue with our maintenance retainer plans.' },
];

// ─── FAQ ACCORDION COMPONENT ────────────────────────────────────────────────

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div style={{
      border: '1px solid',
      borderColor: isOpen ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)',
      borderRadius: 20,
      background: isOpen ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
    }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          padding: '24px 28px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <span style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.4 }}>{q}</span>
        <div style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.08)',
          background: isOpen ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.03)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#22c55e' : 'rgba(255,255,255,0.5)'} strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </button>
      <div style={{
        height,
        overflow: 'hidden',
        transition: 'height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div ref={contentRef} style={{ padding: '0 28px 24px' }}>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, margin: 0 }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

// ─── INLINE HERO FORM COMPONENT ─────────────────────────────────────────────

function HeroLeadForm({ serviceName, cityName }: { serviceName: string; cityName: string }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      const body = new FormData();
      body.append('access_key', '9646b6a0-81d5-459f-bc00-6656c77bbcae');
      body.append('name', form.name);
      body.append('email', form.email);
      body.append('phone', form.phone);
      body.append('message', form.message);
      body.append('service', serviceName);
      body.append('city', cityName);
      body.append('subject', `New Quote Request - ${serviceName} (${cityName})`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body,
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      position: 'relative',
      borderRadius: 24,
      border: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px)',
      boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
    }}>
      {/* Glow accent */}
      <div style={{ position: 'absolute', top: -1, left: '20%', right: '20%', height: 2, background: 'linear-gradient(90deg, transparent, #22c55e, transparent)', borderRadius: 2 }} />

      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 6 }}>
          Get Your Custom Project Plan
        </h3>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, margin: 0 }}>
          Share your project details — a senior engineer responds within 4 hours.
        </p>
      </div>

      {submitted ? (
        <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: 48, marginBottom: 16, color: '#22c55e' }}>&#10003;</div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>Request Received!</h3>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 360, margin: '0 auto' }}>
            A senior engineer will review your project details and respond within 4 business hours with a custom assessment.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label htmlFor="hero-name" className="sr-only">Full Name</label>
            <input id="hero-name" type="text" placeholder="Full Name" required aria-required="true"
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
            />
          </div>
          <div>
            <label htmlFor="hero-email" className="sr-only">Work Email</label>
            <input id="hero-email" type="email" placeholder="Work Email" required aria-required="true"
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
            />
          </div>
          <div>
            <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
            <input id="hero-phone" type="tel" placeholder="Phone Number"
              value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
            />
          </div>
          <div>
            <label htmlFor="hero-message" className="sr-only">Project Details</label>
            <textarea id="hero-message" placeholder="Tell us about your project..." rows={3}
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'none' as const }}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
            />
          </div>
          <button type="submit" disabled={isLoading} style={{
            width: '100%', height: 52, borderRadius: 12, border: 'none', background: '#22c55e', color: '#000',
            fontSize: 15, fontWeight: 700, cursor: isLoading ? 'wait' : 'pointer', transition: '0.3s', fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: isLoading ? 0.7 : 1,
          }}
            onMouseEnter={e => { if (!isLoading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(34,197,94,0.4)'; } }}
            onMouseLeave={e => { if (!isLoading) { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; } }}
          >
            {isLoading ? 'Sending...' : 'Get Free Quote'}
            {!isLoading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
          </button>
        </form>
      )}

      {/* Form trust badges */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(10px, 2vw, 20px)', marginTop: 18, flexWrap: 'wrap' as const, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {[
          { icon: '\u{1F512}', text: 'NDA Protected' },
          { icon: '\u{26A1}', text: '4hr Response' },
          { icon: '\u{1F4AC}', text: 'Free Consultation' },
        ].map(b => (
          <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>
            <span style={{ fontSize: 12 }}>{b.icon}</span>
            {b.text}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function CityServicePageClient(props: CityServicePageProps) {
  const {
    cityName, citySlug, state, stateAbbr, isHQ,
    serviceName, serviceSlug, heroContext, heroDescription, badge,
    localIndustries, industryExpertise, servicesIntro, processIntro, techIntro,
    stats, largeServices, smallServices, whyCity, steps,
    techCategories, testimonials, faqs,
    relatedSubServices, relatedCityServices,
  } = props;

  const heroRef = useRef<HTMLElement>(null);
  const trustRef = useReveal() as React.RefObject<HTMLElement>;
  const overviewRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const industryRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const whyRef = useReveal() as React.RefObject<HTMLElement>;
  const portfolioRef = useReveal() as React.RefObject<HTMLElement>;
  const testimonialsRef = useReveal() as React.RefObject<HTMLElement>;
  const faqRef = useReveal() as React.RefObject<HTMLElement>;
  const relatedRef = useReveal() as React.RefObject<HTMLElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLElement>;

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = useCallback((i: number) => {
    setOpenFaq(prev => prev === i ? null : i);
  }, []);

  // Active tech tab state
  const [activeTechTab, setActiveTechTab] = useState(0);

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 1: HERO — 2-Column with Lead Capture Form
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(48px, 8vw, 100px) 0 clamp(48px, 8vw, 120px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <HeroBackground variant="default" />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="cs-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 80px)', alignItems: 'center' }}>

              {/* Left column */}
              <div>
                {/* Breadcrumb */}
                <nav className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Locations', href: '/locations' },
                    { label: cityName, href: `/locations/${citySlug}` },
                  ].map((crumb) => (
                    <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Link href={crumb.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#22c55e'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                        {crumb.label}
                      </Link>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>/</span>
                    </span>
                  ))}
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{serviceName}</span>
                </nav>

                {/* Badge */}
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{badge}</span>
                </div>

                {/* H1 */}
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.6rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
                  {serviceName} Company in{' '}<span style={{ color: '#ffffff' }}>{cityName}</span>
                </h1>

                {/* Hero description */}
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 560, margin: '0 0 36px' }}>
                  {heroContext}
                </p>

                {/* Stats row */}
                <div className="reveal reveal-d3 cs-hero-stats" style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 16, marginBottom: 36 }}>
                  {stats.map((s, i) => (
                    <div key={s.label} style={{ textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingRight: i < stats.length - 1 ? 16 : 0 }}>
                      <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em' }}>{s.value}</div>
                      <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="reveal reveal-d4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get a Free Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 36px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                    View Case Studies
                  </Link>
                </div>
              </div>

              {/* Right column — lead capture form */}
              <div className="reveal reveal-d2">
                <HeroLeadForm serviceName={serviceName} cityName={cityName} />
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 2: TRUST STRIP
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={trustRef} style={{ ...sectionBorder, background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 48px)', padding: '36px 0' }}>
              {/* Clutch rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Image src="/awards/Clutch-Top-GenerativeAI-Company2026.png" alt="Clutch" width={40} height={32} style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>4.9<span style={{ color: '#22c55e' }}>/5</span></div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Clutch Rating</div>
                </div>
              </div>

              <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.06)' }} />

              {/* Stats badges */}
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: 'ISO', label: '27001 Certified' },
                { value: 'SOC II', label: 'Compliant' },
                { value: '99%', label: 'Client Satisfaction' },
              ].map((item, i) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {i > 0 && <div className="cs-trust-divider" style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.06)', marginRight: 10 }} />}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>{item.value}</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                  </div>
                </div>
              ))}

              <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.06)' }} />

              {/* Award badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                {trustBadges.slice(1).map(b => (
                  <Image key={b.src} src={b.src} alt={b.alt} width={Math.round(b.w * 0.7)} height={Math.round(b.h * 0.7)} style={{ filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 3: SERVICE OVERVIEW
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={overviewRef} style={{ ...sectionPad, ...sectionBorder, position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', top: '20%', left: '-10%', width: 600, height: 600, background: 'radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ marginBottom: 32 }}>
              <div style={subLabel}>Service Overview</div>
              <h2 style={{ ...heading2, maxWidth: 800 }}>{serviceName} Solutions for {cityName} Businesses</h2>
            </div>

            <div className="cs-overview-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'start' }}>
              {/* Left: Content */}
              <div className="reveal reveal-d1">
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 28 }}>
                  {heroDescription}
                </p>
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 28 }}>
                  {heroContext}
                </p>

                {/* Why this service in this city */}
                <div style={{ padding: '28px 32px', borderRadius: 20, border: '1px solid rgba(34,197,94,0.15)', background: 'rgba(34,197,94,0.03)', marginBottom: 32 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#22c55e', letterSpacing: '-0.02em', marginBottom: 12 }}>
                    Why {serviceName} in {cityName}?
                  </h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                    {cityName}, {state} is a thriving hub for technology and innovation. Businesses here demand top-tier {serviceName.toLowerCase()} solutions that can compete on a global stage while addressing local market needs. Our team combines deep technical expertise with an understanding of {cityName}&apos;s unique business landscape to deliver solutions that drive measurable results.
                  </p>
                </div>

                {/* Quick stats */}
                <div className="cs-overview-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                  {[
                    { value: '8+', label: 'Years Experience' },
                    { value: '24', label: 'Countries Served' },
                    { value: '200+', label: 'Engineers' },
                  ].map(s => (
                    <div key={s.label} style={{ textAlign: 'center', padding: '20px 16px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
                      <div style={{ fontSize: 24, fontWeight: 700, color: '#22c55e', letterSpacing: '-0.03em' }}>{s.value}</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Key benefits list */}
              <div className="reveal reveal-d2">
                <div style={{ ...cardStyle, padding: '36px 32px' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 28 }}>What You Get</h3>
                  {[
                    'Custom-built solutions tailored to your business',
                    'Dedicated project manager in your timezone',
                    'Agile development with weekly sprint demos',
                    'Full source code ownership from day one',
                    'Comprehensive QA and security testing',
                    '90-day post-launch support included',
                    'NDA and IP protection guaranteed',
                    'Fixed-price or flexible engagement models',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 0', borderBottom: i < 7 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 4: SUB-SERVICES GRID
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={servicesRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 32 }}>
              <div style={subLabel}>What We Build</div>
              <h2 style={heading2}>{serviceName} Services We Offer in {cityName}</h2>
            </div>

            <p className="reveal" style={{ ...bodyText, maxWidth: 800, marginBottom: 64 }}>
              {servicesIntro}
            </p>

            {/* Large service cards — show all 6 */}
            <div className="reveal reveal-d1 cs-large-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 20, marginBottom: 24 }}>
              {largeServices.slice(0, 6).map((s, i) => (
                <div key={s.title} className="cs-large-card" style={{
                  ...cardStyle,
                  padding: '44px 36px',
                  borderRadius: 28,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  {/* Top accent line */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #22c55e, transparent)' }} />

                  {/* Step number watermark */}
                  <div style={{ position: 'absolute', top: -12, right: 16, fontSize: 80, fontWeight: 800, color: 'rgba(255,255,255,0.015)', lineHeight: 1, pointerEvents: 'none' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div style={{ fontSize: 36, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 14 }}>{s.title}</h3>
                  <p style={{ ...bodyText, marginBottom: s.tags && s.tags.length > 0 ? 24 : 0 }}>{s.desc}</p>
                  {s.tags && s.tags.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                      {s.tags.map(tag => (
                        <span key={tag} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', padding: '5px 12px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100 }}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Small service cards */}
            {smallServices.length > 0 && (
              <div className="reveal reveal-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 16 }}>
                {smallServices.map(s => (
                  <div key={s.title} style={{ ...cardStyle, padding: '28px 24px', borderRadius: 20, position: 'relative', overflow: 'hidden' }}
                    onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #22c55e, transparent)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                      <div style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{s.icon}</div>
                      <div>
                        <h3 style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 8 }}>{s.title}</h3>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 5: INDUSTRY EXPERTISE
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={industryRef} style={{ ...sectionPad, ...sectionBorder, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '30%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
              <div style={subLabel}>Industry Expertise</div>
              <h2 style={{ ...heading2, marginBottom: 20, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
                {serviceName} for {cityName}&apos;s Key Industries
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, maxWidth: 640, margin: '0 auto' }}>
                {industryExpertise}
              </p>
            </div>

            {/* Industry cards grid */}
            <div className="cs-industry-grid reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: 16,
              maxWidth: 1000,
              margin: '0 auto',
            }}>
              {localIndustries.map((ind, i) => {
                const icon = getIndustryIcon(ind, i);
                return (
                  <div key={ind} className="cs-industry-card" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '22px 24px',
                    borderRadius: 20,
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.02)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                    onMouseEnter={e => {
                      const t = e.currentTarget;
                      t.style.borderColor = 'rgba(34,197,94,0.25)';
                      t.style.background = 'rgba(34,197,94,0.04)';
                      t.style.transform = 'translateY(-3px)';
                      t.style.boxShadow = '0 12px 32px rgba(34,197,94,0.08)';
                    }}
                    onMouseLeave={e => {
                      const t = e.currentTarget;
                      t.style.borderColor = 'rgba(255,255,255,0.06)';
                      t.style.background = 'rgba(255,255,255,0.02)';
                      t.style.transform = '';
                      t.style.boxShadow = '';
                    }}>
                    <div style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                      flexShrink: 0,
                    }}>
                      {icon}
                    </div>
                    <div>
                      <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', display: 'block' }}>{ind}</span>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 2, display: 'block' }}>
                        {serviceName} Solutions
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 6: DEVELOPMENT PROCESS
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={processRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 32 }}>
              <div style={subLabel}>Our Process</div>
              <h2 style={heading2}>Our {serviceName} Development Process</h2>
            </div>

            <p className="reveal" style={{ ...bodyText, maxWidth: 800, marginBottom: 64 }}>
              {processIntro}
            </p>

            {/* Horizontal timeline on desktop */}
            <div className="cs-process-container" style={{ position: 'relative' }}>
              {/* Vertical timeline line */}
              <div className="cs-process-timeline" style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom, rgba(34,197,94,0.6), rgba(34,197,94,0.05))', zIndex: 0 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {steps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${Math.min(i + 1, 5)} cs-process-row`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 32, alignItems: 'start', padding: '28px 0' }}>
                    {/* Step number circle */}
                    <div className="cs-process-num" style={{
                      width: 48, height: 48, borderRadius: '50%',
                      border: '2px solid rgba(34,197,94,0.4)',
                      background: 'rgba(34,197,94,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 800, color: '#ffffff',
                      flexShrink: 0, position: 'relative', zIndex: 1,
                    }}>
                      {step.num}
                    </div>

                    {/* Step card */}
                    <div className="cs-process-card" style={{ ...cardStyle, padding: '32px 36px' }}
                      onMouseEnter={e => {
                        const t = e.currentTarget as HTMLElement;
                        t.style.borderColor = 'rgba(34,197,94,0.2)';
                        t.style.background = 'rgba(34,197,94,0.03)';
                        t.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)';
                      }}
                      onMouseLeave={e => {
                        const t = e.currentTarget as HTMLElement;
                        t.style.borderColor = 'rgba(255,255,255,0.06)';
                        t.style.background = 'rgba(255,255,255,0.015)';
                        t.style.boxShadow = '';
                      }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' as const }}>{step.duration}</span>
                      </div>
                      <p style={{ ...bodyText, marginBottom: 20 }}>{step.desc}</p>

                      {/* Deliverables */}
                      <div style={{ marginBottom: 0 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Deliverables</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {step.deliverables.map(d => (
                            <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.65)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, background: 'rgba(255,255,255,0.02)' }}>
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 7: TECHNOLOGY STACK
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={techRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 32 }}>
              <div style={subLabel}>Technology</div>
              <h2 style={heading2}>Technologies We Use for {serviceName}</h2>
            </div>
            <p className="reveal" style={{ ...bodyText, maxWidth: 800, marginBottom: 48 }}>
              {techIntro}
            </p>

            {/* Tech tabs */}
            <div className="reveal reveal-d1" style={{ marginBottom: 32 }}>
              <div className="cs-tech-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {techCategories.map((cat, i) => (
                  <button key={cat.title} onClick={() => setActiveTechTab(i)} style={{
                    padding: '10px 22px',
                    borderRadius: 100,
                    border: '1px solid',
                    borderColor: activeTechTab === i ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.08)',
                    background: activeTechTab === i ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)',
                    color: activeTechTab === i ? '#22c55e' : 'rgba(255,255,255,0.5)',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: '0.3s',
                    fontFamily: 'inherit',
                  }}>{cat.title}</button>
                ))}
              </div>

              {/* Active tab content */}
              <div style={{ ...cardStyle, padding: '36px 32px' }}>
                <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 24 }}>
                  {techCategories[activeTechTab]?.title}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {techCategories[activeTechTab]?.items.map(item => (
                    <span key={item} style={{
                      padding: '10px 20px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 100,
                      fontSize: 14,
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.6)',
                      transition: '0.25s',
                      cursor: 'default',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* All categories grid (below tabs) */}
            <div className="reveal reveal-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 16 }}>
              {techCategories.map((cat, i) => (
                <div key={cat.title} style={{
                  ...cardStyle,
                  padding: '28px 24px',
                  borderRadius: 20,
                  cursor: 'pointer',
                  borderColor: activeTechTab === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)',
                  background: activeTechTab === i ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)',
                }}
                  onClick={() => setActiveTechTab(i)}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,197,94,0.2)'; (e.currentTarget as HTMLElement).style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { if (activeTechTab !== i) { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.015)'; } }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: activeTechTab === i ? '#22c55e' : 'rgba(255,255,255,0.35)', marginBottom: 14, transition: 'color 0.3s' }}>{cat.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                    {cat.items.slice(0, 4).join(' \u00B7 ')}{cat.items.length > 4 ? ` +${cat.items.length - 4} more` : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 8: WHY CHOOSE US IN {CITY}
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={whyRef} style={{ ...sectionPad, ...sectionBorder, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, height: 600, background: 'radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={subLabel}>Why Choose Us</div>
              <h2 style={{ ...heading2, maxWidth: 800, margin: '0 auto 20px' }}>
                Why {cityName} Businesses Choose Codazz for {serviceName}
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto' }}>
                We combine world-class engineering with local market understanding to deliver {serviceName.toLowerCase()} solutions that drive real business outcomes.
              </p>
            </div>

            {/* City-specific why cards from data */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 460px), 1fr))', gap: 20, marginBottom: 32 }}>
              {whyCity.map((w, i) => (
                <div key={w.title} className={`reveal reveal-d${Math.min(i + 1, 4)} cs-why-card`} style={{ ...cardStyle, padding: '40px 32px' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ fontSize: 36, marginBottom: 18 }}>{w.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{w.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>

            {/* Extra why-choose-us cards */}
            <div className="reveal reveal-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 460px), 1fr))', gap: 20 }}>
              {whyChooseUsExtras.map((w, i) => (
                <div key={w.title} className="cs-why-card" style={{ ...cardStyle, padding: '40px 32px' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ fontSize: 36, marginBottom: 18 }}>{w.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{w.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 9: PORTFOLIO / RESULTS
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={portfolioRef} style={{ ...sectionPad, ...sectionBorder, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', right: '-15%', width: 700, height: 700, background: 'radial-gradient(ellipse, rgba(34,197,94,0.05) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
              <div style={subLabel}>Featured Results</div>
              <h2 style={{ ...heading2, maxWidth: 700, margin: '0 auto 20px' }}>
                Real Results from Real Projects
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto' }}>
                We measure success by the impact we create. Here are three recent projects that showcase our {serviceName.toLowerCase()} capabilities.
              </p>
            </div>

            <div className="cs-portfolio-grid reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: 24 }}>
              {portfolioResults.map((project, i) => (
                <div key={project.title} className={`reveal reveal-d${i + 1}`} style={{
                  ...cardStyle,
                  padding: 0,
                  borderRadius: 24,
                  overflow: 'hidden',
                  position: 'relative',
                }}
                  onMouseEnter={e => {
                    const t = e.currentTarget as HTMLElement;
                    t.style.borderColor = 'rgba(34,197,94,0.25)';
                    t.style.transform = 'translateY(-6px)';
                    t.style.boxShadow = '0 32px 64px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={e => {
                    const t = e.currentTarget as HTMLElement;
                    t.style.borderColor = 'rgba(255,255,255,0.06)';
                    t.style.transform = '';
                    t.style.boxShadow = '';
                  }}>
                  {/* Top accent */}
                  <div style={{ height: 3, background: `linear-gradient(90deg, #22c55e, ${project.accentColor})` }} />

                  <div style={{ padding: '32px 28px' }}>
                    {/* Category badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: project.accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                        {project.icon}
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{project.category}</span>
                    </div>

                    <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{project.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24 }}>{project.desc}</p>

                    {/* Metrics */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20, padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      {project.metrics.map(m => (
                        <div key={m.label} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', letterSpacing: '-0.02em' }}>{m.value}</div>
                          <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 3 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', padding: '4px 10px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100 }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View all CTA */}
            <div className="reveal reveal-d3" style={{ textAlign: 'center', marginTop: 48 }}>
              <Link href="/case-studies" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 32px',
                borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff',
                fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#22c55e'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#ffffff'; }}>
                View All Case Studies
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 10: TESTIMONIALS
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={testimonialsRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
              <div style={subLabel}>Client Testimonials</div>
              <h2 style={{ ...heading2, maxWidth: 700, margin: '0 auto 16px' }}>
                What {cityName} Clients Say About Us
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 500, margin: '0 auto' }}>
                Real feedback from businesses we have partnered with on {serviceName.toLowerCase()} projects.
              </p>
            </div>

            <div className="reveal reveal-d1 cs-testimonial-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <div key={`${t.name}-${i}`} className="cs-testimonial-card" style={{
                  ...cardStyle,
                  padding: '36px 32px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  {/* Quote mark watermark */}
                  <div style={{ position: 'absolute', top: -10, right: 16, fontSize: 100, fontWeight: 800, color: 'rgba(34,197,94,0.04)', lineHeight: 1, pointerEvents: 'none', fontFamily: 'Georgia, serif' }}>&ldquo;</div>

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#22c55e" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(34,197,94,0.05))',
                      border: '1px solid rgba(34,197,94,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 16, fontWeight: 700, color: '#22c55e',
                    }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 11: FAQ SECTION
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={faqRef} style={{ ...sectionPad, ...sectionBorder, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '30%', left: '-10%', width: 500, height: 500, background: 'radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="cs-faq-layout" style={{ display: 'grid', gridTemplateColumns: '0.4fr 0.6fr', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'start' }}>

              {/* Left — heading */}
              <div className="reveal" style={{ position: 'sticky', top: 120 }}>
                <div style={subLabel}>FAQs</div>
                <h2 style={{ ...heading2, marginBottom: 20 }}>
                  Frequently Asked Questions About {serviceName} in {cityName}
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, marginBottom: 32 }}>
                  Have a question not listed here? Reach out to our team and we will get back to you within 4 hours.
                </p>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10, height: 48, padding: '0 28px',
                  borderRadius: 100, border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e',
                  fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: '0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.08)'; e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; }}>
                  Ask a Question
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Right — accordion */}
              <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onToggle={() => toggleFaq(i)} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 12: RELATED SERVICES
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={relatedRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            {/* Related services in same city */}
            {relatedCityServices.length > 0 && (
              <div className="reveal" style={{ marginBottom: 64 }}>
                <div style={subLabel}>Explore</div>
                <h2 style={{ ...heading2, marginBottom: 20 }}>Other Services We Offer in {cityName}</h2>
                <p style={{ ...bodyText, maxWidth: 600, marginBottom: 32 }}>
                  Looking for a different service? Explore our full range of technology solutions available in {cityName}.
                </p>
                <div style={autoGrid}>
                  {relatedCityServices.map(rs => (
                    <Link key={`${rs.citySlug}-${rs.serviceSlug}`} href={`/locations/${rs.citySlug}/${rs.serviceSlug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ ...cardStyle, padding: '24px 28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                        onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                        <span style={{ fontSize: 15, fontWeight: 500, color: '#ffffff' }}>{rs.name} in {cityName}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related sub-services */}
            {relatedSubServices.length > 0 && (
              <div className="reveal reveal-d2" style={{ marginBottom: 64 }}>
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 16 }}>Explore Our {serviceName} Specializations</h3>
                <p style={{ ...bodyText, maxWidth: 600, marginBottom: 24 }}>
                  Dive deeper into our specialized {serviceName.toLowerCase()} offerings.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {relatedSubServices.map(sub => (
                    <Link key={sub.slug} href={`/services/${serviceSlug}/${sub.slug}`} style={{
                      padding: '10px 22px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100,
                      fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.25s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Cross-city links for SEO */}
            <div className="reveal reveal-d3">
              <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 16 }}>
                {serviceName} in Other Cities
              </h3>
              <p style={{ ...bodyText, maxWidth: 600, marginBottom: 24 }}>
                We deliver {serviceName.toLowerCase()} solutions across 45 cities in 24 countries. Find a location near you.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <Link href="/locations" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px',
                  border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100,
                  fontSize: 13, fontWeight: 600, color: '#22c55e', textDecoration: 'none', transition: '0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.08)'; e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; }}>
                  View All 45 Locations
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════════
            SECTION 13: BOTTOM CTA
        ════════════════════════════════════════════════════════════════════════ */}
        <section ref={ctaRef} style={{ padding: 'clamp(80px, 12vw, 160px) 0', position: 'relative', overflow: 'hidden', textAlign: 'center', ...sectionBorder }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 600, background: 'radial-gradient(ellipse,rgba(34,197,94,0.09) 0%,transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ maxWidth: 700, margin: '0 auto' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 24 }}>Ready to Build?</div>
              <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
                Start Your {serviceName} Project in{' '}<span style={{ color: '#22c55e' }}>{cityName}</span>
              </h2>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.75 }}>
                {heroDescription}
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12, height: 60, padding: '0 40px',
                borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700,
                textDecoration: 'none', transition: '0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get a Free Proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href={`/locations/${citySlug}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, height: 60, padding: '0 40px',
                borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff',
                fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                All {cityName} Services
              </Link>
            </div>

            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['NDA on Day 1', 'Fixed-Price Guarantee', '48hr Proposal', 'Secure Data Residency'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="reveal reveal-d3" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 40, padding: '12px 24px', borderRadius: 100, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'csPulse 2s ease-in-out infinite' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.03em' }}>Average response time: 4 hours</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @keyframes csPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        /* ─── Mobile Responsive ─── */
        @media(max-width:1024px) {
          .cs-overview-grid { grid-template-columns: 1fr !important; }
          .cs-faq-layout { grid-template-columns: 1fr !important; }
          .cs-faq-layout > div:first-child { position: static !important; }
        }

        @media(max-width:768px) {
          .cb-container { padding-left: 20px !important; padding-right: 20px !important; }
          .cs-hero-stats { grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr)) !important; gap: 12px !important; }
          .cs-hero-stats > div { padding-right: 0 !important; border-right: none !important; }
          .cs-large-card { padding: 28px 22px !important; }
          .cs-why-card { padding: 28px 22px !important; }
          .cs-process-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          .cs-process-num { display: none !important; }
          .cs-process-card { padding: 24px 20px !important; }
          .cs-process-timeline { display: none !important; }
          .cs-industry-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .cs-industry-card { padding: 16px 18px !important; }
          .cs-testimonial-card { padding: 28px 22px !important; }
          .cs-overview-grid { grid-template-columns: 1fr !important; }
          .cs-overview-stats { grid-template-columns: repeat(3, 1fr) !important; }
          .cs-faq-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
          .cs-faq-layout > div:first-child { position: static !important; }
          .cs-trust-divider { display: none !important; }
          .cs-portfolio-grid { grid-template-columns: 1fr !important; }
        }

        @media(max-width:480px) {
          .cs-hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .cs-industry-grid { grid-template-columns: 1fr !important; }
          .cs-overview-stats { grid-template-columns: 1fr !important; }
          .cs-testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
