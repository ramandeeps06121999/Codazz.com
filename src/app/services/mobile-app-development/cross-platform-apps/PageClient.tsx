'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
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
  { value: '300+', label: 'Multi-Platform Apps' },
  { value: '50%', label: 'Lower Dev Cost' },
  { value: '1 Team', label: 'iOS, Android & Web' },
  { value: '10wk', label: 'Avg Timeline' },
];

const services = [
  { icon: '🗺️', title: 'Platform Strategy Consulting', desc: 'We analyse your target audience, budget, and feature set to recommend the optimal cross-platform approach — Flutter, React Native, or a hybrid — with a clear cost-benefit breakdown.' },
  { icon: '🏗️', title: 'Shared Codebase Architecture', desc: 'Our architects design modular codebases that maximise reuse of business logic, networking, and state management, while allowing clean separation of platform-specific UI and hardware integrations.' },
  { icon: '✅', title: 'Native Feature Parity', desc: 'Cross-platform doesn\'t mean compromise. We ensure full feature parity with native apps — camera, GPS, biometrics, push notifications, and background tasks — all working flawlessly on every platform.' },
  { icon: '📊', title: 'Performance Benchmarking', desc: 'We run side-by-side performance benchmarks against native reference apps to validate frame rates, startup times, memory usage, and battery impact before any release.' },
  { icon: '🖼️', title: 'UI Adaptation per Platform', desc: 'Users expect iOS apps to feel like iOS apps and Android apps to feel like Android apps. We adapt navigation patterns, typography, gestures, and component styles to match each platform\'s conventions.' },
  { icon: '⚙️', title: 'CI/CD for Multiple Stores', desc: 'We configure unified CI/CD pipelines using Fastlane and GitHub Actions that build, test, sign, and submit to both the App Store and Play Store simultaneously on every release branch merge.' },
];

const steps = [
  { num: '01', title: 'Platform Audit', desc: 'We assess your target platforms, user demographics, feature requirements, and existing tech stack to define the cross-platform strategy and framework selection with full justification.' },
  { num: '02', title: 'Shared Architecture', desc: 'We design the shared module boundaries — what lives in shared code vs platform-specific layers — and establish the project structure, CI pipeline, and development workflow before coding begins.' },
  { num: '03', title: 'Platform-Specific Polish', desc: 'Once the core is built, we invest time in making each platform feel native — correct iOS transitions, Android back-stack behaviour, platform-appropriate icons, and adaptive layouts for every screen size.' },
  { num: '04', title: 'Unified Launch', desc: 'We coordinate simultaneous submissions to the App Store and Play Store, synchronise release notes, manage staged rollouts on both platforms, and monitor crash rates and performance post-launch.' },
];

const faqs = [
  { q: 'Which cross-platform framework is best?', a: 'There is no single answer — it depends on your team, design requirements, and integration needs. Flutter is best for custom, pixel-perfect UIs and multi-platform targets beyond mobile. React Native is ideal when you have a JavaScript/React team or need web code sharing. We help you evaluate objectively and pick the right fit for your project.' },
  { q: 'Do cross-platform apps feel native to users?', a: 'Modern cross-platform frameworks have closed the gap significantly. Flutter renders its own pixels (no native component overhead), and React Native renders actual native components. With thoughtful platform-adaptive UX design, users typically cannot tell the difference from a native app. We prioritise platform feel as a core deliverable.' },
  { q: 'How do you handle platform differences like navigation and gestures?', a: 'We implement platform-adaptive navigation — iOS-style stack with swipe-back, Android back-button and predictive-back gesture, and Material vs Cupertino UI components where appropriate. Our designers create platform variants for critical UX patterns rather than forcing a single design on both platforms.' },
  { q: 'What is the cost difference vs building separate native apps?', a: 'Cross-platform development typically reduces cost by 40–60% compared to maintaining two separate native codebases, since business logic, APIs, and state management are shared. Platform-specific UI work still requires native expertise, but the overall team size and timeline are substantially reduced.' },
  { q: 'Can you migrate our existing native app to a cross-platform framework?', a: 'Yes. We offer structured migration services with a phased approach — typically starting with new features built in the cross-platform framework while the existing native code continues to ship. This reduces risk and allows the team to build familiarity with the new stack before full migration.' },
];

export default function CrossPlatformApps() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
        @media(max-width:1024px){.cb-container > div[style*="grid-template-columns"]{grid-template-columns:1fr!important;}}
      `}</style>
      <Navbar />
      <main style={{ background: '#ffffff', color: '#111827', fontFamily: 'inherit' }}>

        {/* HERO */}
        <section ref={heroRef} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="right" />
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 60px)', alignItems: 'center' }}>
              <div>
                <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(0,0,0,0.4)' }}>
                  <Link href="/" style={{ color: 'rgba(0,0,0,0.4)', textDecoration: 'none' }}>Home</Link>
                  <span>/</span>
                  <Link href="/services/mobile-app-development" style={{ color: 'rgba(0,0,0,0.4)', textDecoration: 'none' }}>Mobile App Development</Link>
                  <span>/</span>
                  <span style={{ color: '#111827' }}>Cross-Platform App Development</span>
                </div>
                <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(17,24,39,0.08)', border: '1px solid rgba(17,24,39,0.2)', marginBottom: 24 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#111827', display: 'inline-block' }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#111827', letterSpacing: '0.05em' }}>MULTI-PLATFORM STRATEGY</span>
                </div>
                <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
                  Reach Every Platform with{' '}
                  <span style={{ color: '#111827' }}>Half the Investment</span>
                </h1>
                <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>
                  We design and build cross-platform mobile apps that deliver a native-quality experience on iOS, Android, and beyond — from a single unified team and codebase. Maximise your reach while minimising your development cost.
                </p>
                <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #111827, #374151)', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                    Start Your Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.1)', color: '#111827', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
                    View Case Studies
                  </Link>
                </div>
                <div className="reveal" style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
                  {stats.map(s => (
                    <div key={s.label}>
                      <div style={{ fontSize: 32, fontWeight: 800, color: '#111827', letterSpacing: '-0.03em' }}>{s.value}</div>
                      <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section ref={s1} style={{ padding: '100px 0', background: 'rgba(0,0,0,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#111827', marginBottom: 12 }}>What We Offer</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Everything Your Multi-Platform App Needs</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {services.map((svc, i) => (
                <div key={svc.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(0,0,0,0.05)', background: 'rgba(0,0,0,0.015)' }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section ref={s2} style={{ padding: '100px 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#111827', marginBottom: 12 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>How We Work</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {steps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(0,0,0,0.05)', background: 'rgba(0,0,0,0.015)' }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#111827', letterSpacing: '0.1em', marginBottom: 16 }}>{step.num}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s3} style={{ padding: '100px 0', background: 'rgba(0,0,0,0.01)' }}>
          <div className="cb-container" style={{ maxWidth: 800 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#111827', marginBottom: 12 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Common Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ borderRadius: 16, border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#111827', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" style={{ flexShrink: 0, transition: '0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px', fontSize: 15, color: 'rgba(0,0,0,0.5)', lineHeight: 1.75 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s4} style={{ padding: '120px 0', textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(17,24,39,0.08) 0%, transparent 70%)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Go Cross-Platform?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(0,0,0,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Let's discuss your platform goals and find the most efficient path to reaching your users on every device.</p>
            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 56, padding: '0 40px', borderRadius: 100, background: 'linear-gradient(135deg, #111827, #374151)', color: '#fff', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
                Get a Free Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
