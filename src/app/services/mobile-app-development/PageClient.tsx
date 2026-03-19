'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';


// ─── DATA ───────────────────────────────────────────────────────────────────

const stats = [
  { value: '500+', label: 'Apps Shipped' },
  { value: '4.9★', label: 'App Store Avg' },
  { value: '8 Wks', label: 'MVP Timeline' },
  { value: '98%', label: 'Client Retention' },
];

const services: { title: string; tag: string; desc: string; chips?: string[] }[] = [
  {
    title: 'iOS App Development',
    tag: 'Apple Ecosystem',
    desc: 'Native Swift & SwiftUI apps engineered for performance, precision, and seamless App Store delivery. From consumer apps to enterprise tooling.',
    chips: ['SwiftUI', 'CoreML', 'ARKit', 'HealthKit', 'CloudKit'],
  },
  {
    title: 'Android Development',
    tag: 'Google Ecosystem',
    desc: 'Kotlin-first Android apps built for the full device spectrum — phones, tablets, and foldables. Google Play optimized from day one.',
    chips: ['Jetpack Compose', 'ML Kit', 'Room DB', 'Firebase', 'Play Store'],
  },
  { title: 'React Native', tag: 'Cross-Platform', desc: 'One codebase, two stores — without sacrificing native feel or performance.' },
  { title: 'Flutter', tag: 'Cross-Platform', desc: 'Pixel-perfect UIs that run identically on iOS, Android, Web and Desktop.' },
  { title: 'Progressive Web Apps', tag: 'Web-Native', desc: 'Offline-first, installable app-like experiences that live in the browser.' },
  { title: 'Wearable & IoT', tag: 'Emerging Tech', desc: 'WatchOS, WearOS and connected device apps for every screen and sensor.' },
];

const capabilities = [
  { icon: '🔔', label: 'Push Notifications' },
  { icon: '📶', label: 'Offline Mode' },
  { icon: '🔐', label: 'Biometric Auth' },
  { icon: '🥽', label: 'AR / VR' },
  { icon: '⚡', label: 'Real-time Sync' },
  { icon: '💳', label: 'In-App Payments' },
  { icon: '🤖', label: 'AI Integration' },
  { icon: '📊', label: 'Analytics Dashboard' },
  { icon: '🌍', label: 'Localization' },
  { icon: '🔗', label: 'Deep Linking' },
  { icon: '🎙️', label: 'Voice & Siri' },
  { icon: '📍', label: 'Maps & Location' },
];

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'Deep-dive into your business goals, user personas, and technical constraints. Output: a bulletproof project roadmap with fixed scope and milestones.',
    deliverables: ['Product Brief', 'User Personas', 'Technical Spec', 'Project Roadmap'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'UX Design & Prototyping',
    desc: 'User journeys, wireframes, and high-fidelity interactive prototypes — validated with real users before a single line of code is written.',
    deliverables: ['Wireframes', 'Interactive Prototype', 'Design System', 'User Test Report'],
    duration: '2–3 weeks',
  },
  {
    num: '03',
    title: 'Agile Development',
    desc: 'Two-week sprints with daily standups, live staging builds, and full code reviews. You see real progress every single week.',
    deliverables: ['Sprint Demos', 'Staging Builds', 'Code Reviews', 'API Integration'],
    duration: '4–10 weeks',
  },
  {
    num: '04',
    title: 'QA & Performance',
    desc: 'Rigorous testing across 200+ real device/OS combinations. Load testing, security audits, and accessibility reviews before launch.',
    deliverables: ['Test Reports', 'Performance Audit', 'Security Review', 'Crash Analytics'],
    duration: '1–2 weeks',
  },
  {
    num: '05',
    title: 'Launch & Growth',
    desc: 'App Store submission, ASO optimization, and phased rollout. Post-launch SLA support keeps your app performant as you scale.',
    deliverables: ['App Store Submission', 'ASO Package', 'Launch Analytics', 'SLA Support'],
    duration: 'Ongoing',
  },
];

const techCategories = [
  { label: 'iOS', chips: ['Swift', 'SwiftUI', 'CoreML', 'ARKit', 'XCTest', 'TestFlight'] },
  { label: 'Android', chips: ['Kotlin', 'Jetpack Compose', 'ML Kit', 'Room DB', 'Espresso'] },
  { label: 'Cross-Platform', chips: ['Flutter', 'React Native', 'Expo', 'Dart', 'TypeScript'] },
  { label: 'Backend & Cloud', chips: ['Firebase', 'AWS Amplify', 'Node.js', 'PostgreSQL', 'Redis'] },
];

const industries = [
  { icon: '💰', title: 'FinTech', desc: 'Trading apps, digital wallets, payment gateways and PFM tools.' },
  { icon: '🏥', title: 'Healthcare', desc: 'HIPAA-compliant telehealth, EHR integrations and wellness tracking.' },
  { icon: '🛒', title: 'E-Commerce', desc: 'High-conversion mobile storefronts with native checkout flows.' },
  { icon: '🚚', title: 'Logistics', desc: 'Driver apps, real-time tracking and fleet management platforms.' },
  { icon: '📚', title: 'EdTech', desc: 'Adaptive learning, live tutoring and offline-capable course apps.' },
  { icon: '🏢', title: 'Enterprise', desc: 'Internal tools, field service apps and secure MDM-ready builds.' },
];

const whyUs = [
  {
    title: 'In-House Engineers Only',
    desc: 'No freelancers, no outsourcing. Every line of code written by our senior engineers under one roof.',
    icon: '👥',
  },
  {
    title: 'Post-Launch SLA Support',
    desc: '24/7 monitoring, bug fixes, feature updates and performance optimization after your app goes live.',
    icon: '🛡️',
  },
  {
    title: 'App Store Expertise',
    desc: 'We\'ve navigated 500+ App Store reviews. We handle submissions, rejections and ASO so you don\'t have to.',
    icon: '⭐',
  },
];

const faqs = [
  { q: 'How long does it take to build a mobile app?', a: 'Most MVPs ship in 8–12 weeks from discovery kickoff. Full-featured consumer apps typically run 4–6 months. You receive a detailed milestone plan before development begins.' },
  { q: 'iOS, Android, or cross-platform — which should I choose?', a: 'If your audience skews heavily to one platform, start native for best performance. If you need both platforms with a tighter budget, Flutter or React Native delivers 90% of native quality at significantly lower cost.' },
  { q: 'Do you provide post-launch support?', a: 'Yes — every engagement includes a 30-day post-launch warranty. Beyond that, we offer flexible SLA retainers covering monitoring, bug fixes, OS updates and feature development.' },
  { q: 'How much does a mobile app cost?', a: 'Simple MVPs typically start at $25,000 USD. Consumer apps with full feature sets range $60,000–$150,000. Enterprise apps with complex integrations vary. You receive a fixed-price quote after our discovery call.' },
  { q: 'Will you handle App Store submission?', a: 'Absolutely. We manage the full submission process for both App Store and Google Play — including screenshots, descriptions, metadata, rating compliance and any review feedback.' },
  { q: 'Can you work with our existing codebase?', a: 'Yes. We regularly audit and extend existing apps. We\'ll conduct a code review in our discovery phase and give you an honest assessment before committing to a scope.' },
  { q: 'Do you sign NDAs?', a: 'Always — on Day 1, before any project discussion. Your idea and IP are protected from the very first conversation.' },
];

// ─── REVEAL HOOK ───────────────────────────────────────────────────────────

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


// ─── PAGE ───────────────────────────────────────────────────────────────────

export default function MobileAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const statsRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const capRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const industriesRef = useReveal() as React.RefObject<HTMLElement>;
  const whyRef = useReveal() as React.RefObject<HTMLElement>;
  const heroRef = useReveal() as React.RefObject<HTMLElement>;
  const faqRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Mobile App Development' },
          ]} />
        </div>

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Mobile App Development
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              We Build Apps That Drive Real Revenue.
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              From MVP to millions of users — we engineer iOS, Android and cross-platform apps that your customers love and your investors notice.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Start Your App
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { value: '500+', label: 'Apps Shipped' },
                { value: '4.9★', label: 'App Store Avg' },
                { value: '8 Wks', label: 'MVP Timeline' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            STATS STRIP
        ═══════════════════════════════════════ */}
        <section ref={statsRef} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal stats-strip-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ padding: 'clamp(28px, 4vw, 52px) clamp(16px, 3vw, 40px)', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 10 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHAT WE BUILD
        ═══════════════════════════════════════ */}
        <section ref={servicesRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>What We Build</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Every Platform.<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Every Device.</span>
              </h2>
            </div>

            {/* Service Cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {services.map(s => (
                <div key={s.title} style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, marginBottom: 20, display: 'inline-block' }}>{s.tag}</span>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: s.chips ? 24 : 0 }}>{s.desc}</p>
                  {s.chips && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.chips.map(c => <span key={c} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100 }}>{c}</span>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            APP CAPABILITIES
        ═══════════════════════════════════════ */}
        <section ref={capRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Capabilities</div>
                <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                  Built-In From<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Day One.</span>
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 380, lineHeight: 1.75, margin: 0 }}>
                Every feature your app needs to compete — engineered natively, not bolted on.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100px, 100%), 1fr))', gap: 12 }}>
              {capabilities.map((c, i) => (
                <div key={c.label} className={`reveal-d${Math.min(i+1,6)}`}
                  style={{ padding: '28px 20px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 20, background: 'rgba(255,255,255,0.015)', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.25)'; e.currentTarget.style.background = 'rgba(34,197,94,0.04)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; }}>
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{c.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PROCESS
        ═══════════════════════════════════════ */}
        <section ref={processRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 80 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                How We Build<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Your App.</span>
              </h2>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Vertical connecting line */}
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom, rgba(34,197,94,0.5), rgba(34,197,94,0.05))', zIndex: 0 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {steps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'start', padding: '32px 0' }}>
                    {/* Circle */}
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(34,197,94,0.4)', background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#ffffff', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>

                    {/* Content */}
                    <div style={{ padding: 'clamp(20px, 3vw, 32px) clamp(16px, 3vw, 40px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.boxShadow = ''; }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' as const }}>{step.duration}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 24 }}>{step.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.deliverables.map(d => (
                          <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100 }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TECH STACK
        ═══════════════════════════════════════ */}
        <section ref={techRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Technology</div>
                <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                  The Stack Behind<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Your App.</span>
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
                Best-in-class tools chosen for performance, reliability, and long-term maintainability.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {techCategories.map(cat => (
                <div key={cat.label} style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c} style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'transparent'; }}
                      >{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            INDUSTRIES
        ═══════════════════════════════════════ */}
        <section ref={industriesRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Industries</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Apps That Dominate<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Every Vertical.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {industries.map((ind, i) => (
                <div key={ind.title} className={`reveal-d${i + 1}`} style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{ind.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 10 }}>{ind.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHY CHOOSE US
        ═══════════════════════════════════════ */}
        <section ref={whyRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Why Codazz</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 auto', maxWidth: 700 }}>
                The Standard Other Agencies<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Can&apos;t Match.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {whyUs.map((w, i) => (
                <div key={w.title} className={`reveal-d${i + 1}`} style={{ padding: '48px 40px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(255,255,255,0.06), 0 0 40px rgba(34,197,94,0.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ fontSize: 32, marginBottom: 24 }}>{w.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 14 }}>{w.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.42)', lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FAQ
        ═══════════════════════════════════════ */}
        <section ref={faqRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Common Questions<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Answered.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: openFaq === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)', border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`, borderRadius: 20, overflow: 'hidden', transition: 'border-color 0.3s, background 0.3s' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textAlign: 'left', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#22c55e' : 'rgb(0,0,0)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  {openFaq === i && (
                    <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75 }}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse,rgba(34,197,94,0.09) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 24 }}>Ready to Build?</div>
            <h2 style={{ fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 28px' }}>
              Your App Could Be<br /><span style={{ color: '#ffffff' }}>Next.</span>
            </h2>
            <TrustBadges compact />
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.35)', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
              Tell us about your idea. We&apos;ll send you a detailed proposal within 48 hours — no commitment required.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 60, padding: '0 40px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get a Free Proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <a href="tel:+14165551234" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 60, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                onClick={e => { e.preventDefault(); window.location.href = 'tel:+14165551234'; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Call Us
              </a>
            </div>
            {/* Trust strip */}
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['NDA on Day 1', 'Fixed-Price Guarantee', '48hr Proposal', 'No Commitment'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Related Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              {[
                { name: 'Web Development', href: '/services/web-development', desc: 'Full-stack web platforms and SaaS products engineered for speed and scale.' },
                { name: 'AR / VR Development', href: '/services/ar-vr', desc: 'Immersive augmented and virtual reality experiences for mobile and headset.' },
                { name: 'Game Development', href: '/services/game-development', desc: 'Cross-platform game development from concept art to live-ops and monetization.' },
              ].map((s) => (
                <a key={s.href} href={s.href} style={{
                  display: 'block', padding: '28px 24px', borderRadius: 16,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="section-padding-sm">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>Industries We Serve</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
              ].map((ind) => (
                <a key={ind.href} href={ind.href} style={{
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgb(0,0,0)'; }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @keyframes float1 {
          0%,100%{transform:translateY(0px);}
          50%{transform:translateY(-10px);}
        }
        @keyframes float2 {
          0%,100%{transform:translateY(0px);}
          50%{transform:translateY(-14px);}
        }
        @media(max-width:1024px){
          .hero-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:768px){
          .cap-grid{grid-template-columns:repeat(3,1fr)!important;}
          .ind-grid{grid-template-columns:repeat(2,1fr)!important;}
          .why-grid{grid-template-columns:1fr!important;}
          .tech-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:640px){
          .cap-grid{grid-template-columns:repeat(2,1fr)!important;}
          .svc-large{grid-template-columns:1fr!important;}
          .svc-small{grid-template-columns:repeat(2,1fr)!important;}
          .stats-row{grid-template-columns:repeat(2,1fr)!important;}
          .ind-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}
