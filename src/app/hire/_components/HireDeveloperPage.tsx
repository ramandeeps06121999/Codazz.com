'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import Breadcrumb from '@/components/Breadcrumb';
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

export interface DeveloperProfile {
  id: string;
  role: string;
  experience: string;
  skills: string[];
  projects: string;
  availability: string;
}

export interface TechCategory {
  label: string;
  chips: string[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface HireDeveloperPageProps {
  technology: string;
  tagline: string;
  description: string;
  stats: { value: string; label: string }[];
  whyHire: { icon: string; title: string; desc: string }[];
  profiles: DeveloperProfile[];
  techCategories: TechCategory[];
  faqs: FAQ[];
  startingRate: string;
  breadcrumbLabel: string;
}

const engagementModels = [
  { title: 'Full-Time Dedicated', hours: '40 hrs/week', price: 'Most Popular', desc: 'A developer works exclusively on your project, fully embedded in your team and processes.', features: ['Dedicated resource', 'Daily standups', 'Sprint planning', 'Direct Slack/Teams access'] },
  { title: 'Part-Time Flexible', hours: '20 hrs/week', price: 'Budget-Friendly', desc: 'Consistent senior support without the full-time commitment. Ideal for startups and scaling teams.', features: ['Flexible scheduling', 'Async communication', 'Weekly sync calls', 'Progress reports'] },
  { title: 'Team Augmentation', hours: '2-10 devs', price: 'Enterprise', desc: 'Extend your existing engineering team with multiple developers who integrate into your workflow.', features: ['Team lead included', 'CI/CD integration', 'Code review process', 'Knowledge transfer'] },
  { title: 'Project-Based', hours: 'Fixed Scope', price: 'Defined Budget', desc: 'A dedicated team for a defined project with clear milestones, timeline, and deliverables.', features: ['Fixed-price quote', 'Milestone payments', 'Project manager', 'Warranty included'] },
];

const hiringSteps = [
  { num: '01', title: 'Share Requirements', desc: 'Tell us about your project, tech stack, and the type of developer you need. We will match you with the best-fit candidates from our vetted talent pool.', duration: 'Day 1' },
  { num: '02', title: 'Interview Developers', desc: 'Interview pre-screened developers who match your requirements. Evaluate technical skills, communication, and culture fit on your own terms.', duration: 'Day 1-2' },
  { num: '03', title: 'Onboard & Integrate', desc: 'Your selected developer signs the NDA, gets access to your tools, and joins your team channels. We handle all the logistics.', duration: 'Day 2-3' },
  { num: '04', title: 'Start Building', desc: 'Your developer is fully operational — writing code, attending standups, and shipping features. We provide ongoing support and performance management.', duration: 'Day 3+' },
];

export default function HireDeveloperPage({
  technology, tagline, description, stats, whyHire, profiles, techCategories, faqs, startingRate, breadcrumbLabel,
}: HireDeveloperPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useReveal() as React.RefObject<HTMLDivElement>;
  const whyRef = useReveal() as React.RefObject<HTMLDivElement>;
  const profilesRef = useReveal() as React.RefObject<HTMLDivElement>;
  const modelsRef = useReveal() as React.RefObject<HTMLDivElement>;
  const techRef = useReveal() as React.RefObject<HTMLDivElement>;
  const processRef = useReveal() as React.RefObject<HTMLDivElement>;
  const pricingRef = useReveal() as React.RefObject<HTMLDivElement>;
  const faqRef = useReveal() as React.RefObject<HTMLDivElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Hire Developers', href: '/hire' },
            { label: breadcrumbLabel },
          ]} />
        </div>

        {/* ═══ HERO ═══ */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }} className="hire-hero-grid">
              <div>
                <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                  {technology}
                </div>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                  Hire {technology} Developers
                </h1>
                <p className="reveal" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.7, maxWidth: 560 }}>
                  {description}
                </p>
                <div className="reveal" style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                  {stats.map((s, i) => (
                    <div key={i} style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                    Hire {technology} Developers
                  </Link>
                  <Link href="#profiles" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                    View Profiles
                  </Link>
                </div>
              </div>
              <div className="reveal" style={{ maxWidth: 440, width: '100%', justifySelf: 'end' }}>
                <ServiceHeroForm service={`Hire ${technology} Developers`} />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHY HIRE FROM CODAZZ ═══ */}
        <section ref={whyRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Why Codazz</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Why Hire {technology}<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Developers From Us.</span>
              </h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {whyHire.map(item => (
                <div key={item.title}
                  style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; }}
                >
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ DEVELOPER PROFILES ═══ */}
        <section id="profiles" ref={profilesRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Available Talent</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Meet Our<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>{technology} Developers.</span>
              </h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {profiles.map((dev, i) => (
                <div key={dev.id}
                  style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}
                >
                  {/* Avatar placeholder */}
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(34,197,94,0.05))', border: '2px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: '#22c55e', marginBottom: 20 }}>
                    {dev.id}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 4 }}>{dev.role}</h3>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>{dev.experience}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>{dev.projects}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {dev.skills.map(s => <span key={s} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)', padding: '4px 12px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100 }}>{s}</span>)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: dev.availability === 'Available Now' ? '#22c55e' : '#f59e0b' }} />
                    <span style={{ fontSize: 12, color: dev.availability === 'Available Now' ? '#22c55e' : '#f59e0b', fontWeight: 600 }}>{dev.availability}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ENGAGEMENT MODELS ═══ */}
        <section ref={modelsRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Engagement Models</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Flexible Hiring<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Models.</span>
              </h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {engagementModels.map((model, idx) => (
                <div key={model.title}
                  style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease', position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}
                >
                  {idx === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #22c55e, transparent)' }} />}
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '4px 12px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>{model.price}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 4 }}>{model.title}</h3>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>{model.hours}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>{model.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {model.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TECH EXPERTISE ═══ */}
        <section ref={techRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Tech Expertise</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                {technology}<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Tech Stack.</span>
              </h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {techCategories.map(cat => (
                <div key={cat.label} style={{ padding: '32px 28px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, background: 'rgba(255,255,255,0.015)' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 20, letterSpacing: '-0.01em' }}>{cat.label}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => <span key={c} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, transition: 'all 0.2s' }}>{c}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HIRING PROCESS ═══ */}
        <section ref={processRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 80 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Hiring Process</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                4 Simple Steps<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>To Your Team.</span>
              </h2>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom, rgba(34,197,94,0.5), rgba(34,197,94,0.05))', zIndex: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {hiringSteps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'start', padding: '32px 0' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(34,197,94,0.4)', background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#ffffff', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>
                    <div style={{ padding: 'clamp(20px, 3vw, 32px) clamp(16px, 3vw, 40px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' as const }}>{step.duration}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PRICING ═══ */}
        <section ref={pricingRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Transparent Pricing</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 20 }}>
                Starting at <span style={{ color: '#22c55e' }}>{startingRate}</span>/hr
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 40 }}>
                No hidden fees. No recruitment charges. No long-term lock-in. Pay only for the hours your developer works.
              </p>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 20, marginBottom: 40 }}>
                {[
                  { label: 'Mid-Level', rate: `${startingRate}/hr`, exp: '4-6 years' },
                  { label: 'Senior', rate: `$${parseInt(startingRate.replace('$', '')) + 10}/hr`, exp: '6-8 years' },
                  { label: 'Lead / Architect', rate: `$${parseInt(startingRate.replace('$', '')) + 20}/hr`, exp: '8-12+ years' },
                ].map(tier => (
                  <div key={tier.label} style={{ padding: '32px 24px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', textAlign: 'center' }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>{tier.label}</div>
                    <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>{tier.rate}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{tier.exp}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section ref={faqRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: 64, textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Common<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Questions.</span>
              </h2>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden', transition: 'all 0.3s ease', background: openFaq === i ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', padding: '24px 28px', background: 'transparent', border: 'none', color: '#ffffff', fontSize: 16, fontWeight: 600, textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, fontFamily: 'inherit' }}
                  >
                    {faq.q}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                    <p style={{ padding: '0 28px 24px', fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA WITH FORM ═══ */}
        <section ref={ctaRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal hire-cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center', maxWidth: 1000, margin: '0 auto' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                  Ready to Hire {technology} Developers?
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Share your requirements. We will match you with pre-vetted {technology.toLowerCase()} developers within 24 hours.
                </p>
                <div style={{ maxWidth: 440, margin: '0 auto' }}>
                  <ServiceHeroForm service={`Hire ${technology} Developers`} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive styles */}
        <style>{`
          @media (min-width: 768px) {
            .hire-hero-grid { grid-template-columns: 1fr 440px !important; }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
