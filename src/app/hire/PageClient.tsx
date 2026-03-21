'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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

const developerTypes = [
  {
    title: 'React Developers',
    href: '/hire/react-developers',
    icon: '\u269B',
    color: '#61dafb',
    description: 'Hire senior React & Next.js developers for high-performance web applications, SPAs, and complex front-end architectures.',
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'GraphQL'],
    startingRate: '$25/hr',
  },
  {
    title: 'Node.js Developers',
    href: '/hire/nodejs-developers',
    icon: '\u2B22',
    color: '#68a063',
    description: 'Hire Node.js developers for scalable APIs, microservices, real-time applications, and full-stack JavaScript solutions.',
    skills: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL'],
    startingRate: '$25/hr',
  },
  {
    title: 'Flutter Developers',
    href: '/hire/flutter-developers',
    icon: '\u25C6',
    color: '#027dfd',
    description: 'Hire Flutter developers for pixel-perfect cross-platform mobile apps that run natively on iOS, Android, Web, and Desktop.',
    skills: ['Flutter', 'Dart', 'Firebase', 'BLoC', 'Riverpod'],
    startingRate: '$25/hr',
  },
  {
    title: 'Python Developers',
    href: '/hire/python-developers',
    icon: '\u{1F40D}',
    color: '#ffd43b',
    description: 'Hire Python developers for backend systems, data pipelines, automation, Django/FastAPI web apps, and scientific computing.',
    skills: ['Python', 'Django', 'FastAPI', 'Pandas', 'Celery'],
    startingRate: '$25/hr',
  },
  {
    title: 'AI/ML Engineers',
    href: '/hire/ai-ml-engineers',
    icon: '\u{1F9E0}',
    color: '#a855f7',
    description: 'Hire AI/ML engineers for LLM integration, computer vision, NLP, predictive analytics, and intelligent automation.',
    skills: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI', 'MLOps'],
    startingRate: '$35/hr',
  },
];

const whyHire = [
  { icon: '\u2705', title: 'Vetted & Battle-Tested', desc: 'Every developer passes a 5-stage vetting process: coding challenge, system design, live pair programming, culture fit, and reference checks. Only the top 3% make it through.' },
  { icon: '\u{1F30D}', title: 'Timezone-Aligned Teams', desc: 'Our developers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your team is online when you are.' },
  { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your IP is protected before a single line of code is discussed. Enforceable NDAs and data protection agreements are standard, not optional.' },
  { icon: '\u26A1', title: 'Start in 48 Hours', desc: 'Share your requirements today. Interview pre-matched developers tomorrow. Onboard and start building within 48 hours.' },
  { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior-level talent at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space needed.' },
  { icon: '\u{1F504}', title: 'Flexible Scale Up/Down', desc: 'Add or remove developers as your project evolves. No long-term contracts required. Scale your team on demand.' },
];

const engagementModels = [
  { title: 'Full-Time Dedicated', hours: '40 hrs/week', desc: 'A developer works exclusively on your project, fully embedded in your team.', best: 'Long-term projects, product companies' },
  { title: 'Part-Time Flexible', hours: '20 hrs/week', desc: 'Ideal for startups and growing teams that need consistent support without full-time commitment.', best: 'Startups, ongoing maintenance' },
  { title: 'Team Augmentation', hours: 'Custom', desc: 'Extend your existing team with 2-10 developers who integrate seamlessly into your workflow.', best: 'Enterprise teams, large projects' },
  { title: 'Project-Based', hours: 'Fixed Scope', desc: 'Dedicated team for a defined project with clear milestones, timeline, and deliverables.', best: 'MVPs, defined-scope products' },
];

export default function HireIndexPage() {
  const heroRef = useReveal() as React.RefObject<HTMLDivElement>;
  const cardsRef = useReveal() as React.RefObject<HTMLDivElement>;
  const whyRef = useReveal() as React.RefObject<HTMLDivElement>;
  const modelsRef = useReveal() as React.RefObject<HTMLDivElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Hire Developers' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Hire Developers
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Hire Pre-Vetted Developers.<br /><span style={{ color: 'rgba(255,255,255,0.3)' }}>Start in 48 Hours.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Scale your engineering team with senior developers who have shipped 500+ products. Flexible engagement models, timezone alignment, and NDA protection from day one.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Hire Developers Now
              </Link>
              <Link href="#developers" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Developer Roles
              </Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { value: '150+', label: 'Engineers' },
                { value: '48hrs', label: 'Avg. Start Time' },
                { value: '98%', label: 'Client Retention' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPER TYPES */}
        <section id="developers" ref={cardsRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Developer Roles</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Choose Your<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Technology Expert.</span>
              </h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {developerTypes.map((dev, i) => (
                <Link key={dev.title} href={dev.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div
                    style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease', height: '100%', display: 'flex', flexDirection: 'column' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${dev.color},transparent)` }} />
                    <div style={{ fontSize: 32, marginBottom: 16 }}>{dev.icon}</div>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>Hire {dev.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{dev.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                      {dev.skills.map(s => <span key={s} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100 }}>{s}</span>)}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Starting at <strong style={{ color: '#22c55e' }}>{dev.startingRate}</strong></span>
                      <span style={{ fontSize: 13, color: '#22c55e', fontWeight: 600 }}>View Details &rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WHY HIRE FROM CODAZZ */}
        <section ref={whyRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Why Codazz</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Why Companies<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Choose Us.</span>
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

        {/* ENGAGEMENT MODELS */}
        <section ref={modelsRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Engagement Models</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Flexible Hiring<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Models.</span>
              </h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {engagementModels.map(model => (
                <div key={model.title}
                  style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}
                >
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>{model.hours}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 12 }}>{model.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 16 }}>{model.desc}</p>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Best for: <span style={{ color: 'rgba(255,255,255,0.6)' }}>{model.best}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
            <div className="reveal">
              <h2 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                Ready to Build Your Dream Team?
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Tell us what you need. We will match you with pre-vetted developers within 24 hours.
              </p>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 40px', borderRadius: 999, fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none', display: 'inline-block' }}>
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
