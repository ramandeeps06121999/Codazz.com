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
  { value: '80+', label: 'React Native Apps Shipped' },
  { value: '70%', label: 'Code Shared iOS/Android' },
  { value: 'JS', label: 'Expertise Leverage' },
  { value: '9wk', label: 'Avg Timeline' },
];

const services = [
  { icon: '⚛️', title: 'React Native Core', desc: 'We build performant React Native apps using the New Architecture (Fabric renderer + JSI) for improved performance, lower bridge overhead, and better support for concurrent React features.' },
  { icon: '📱', title: 'Expo & Bare Workflow', desc: 'We choose the right workflow for your project: Expo Managed for fast iteration and easy OTA updates, or Bare Workflow for full native control. We can also help you eject from Expo when you outgrow it.' },
  { icon: '🔧', title: 'Native Modules', desc: 'When an existing library doesn\'t cut it, we write custom Native Modules in Swift and Kotlin that expose platform-specific APIs — Bluetooth, NFC, biometrics, hardware sensors — directly to your JS layer.' },
  { icon: '🔄', title: 'OTA Updates with CodePush', desc: 'Deploy JavaScript bundle updates to your users instantly without going through App Store or Play Store review. We set up Microsoft AppCenter CodePush with staged rollouts and rollback capabilities.' },
  { icon: '🧭', title: 'React Navigation', desc: 'We architect complex navigation flows using React Navigation — stack, tab, drawer, and modal navigators — with smooth native transitions, deep linking support, and proper back-stack management.' },
  { icon: '🚀', title: 'Performance Optimization', desc: 'We profile apps using Flipper and React DevTools to identify and eliminate JS thread bottlenecks, unnecessary re-renders, and list performance issues, ensuring 60fps UI on mid-range devices.' },
];

const steps = [
  { num: '01', title: 'Scoping & Stack Decision', desc: 'We evaluate your team\'s skills, integration requirements, and performance needs to select the optimal React Native setup — Expo vs bare, state management library, navigation approach, and testing strategy.' },
  { num: '02', title: 'Component Design', desc: 'We build a shared component library in TypeScript, with platform-adaptive styles that honour iOS and Android design conventions where appropriate while maintaining a consistent brand identity.' },
  { num: '03', title: 'Native Integration', desc: 'Native Modules, platform-specific code, third-party SDKs, and deep OS integrations are wired in and thoroughly tested on real devices across a range of OS versions and manufacturers.' },
  { num: '04', title: 'Deployment', desc: 'We manage App Store and Play Store submissions, configure CodePush for OTA updates, set up Fastlane for automated builds, and establish a CD pipeline for ongoing releases.' },
];

const faqs = [
  { q: 'React Native vs Flutter — which is right for us?', a: 'React Native is the better choice when your team already knows JavaScript/TypeScript and React, when you need to share code with a web app, or when deep native component integration matters. Flutter wins on pixel-perfect custom UIs and consistent cross-platform rendering. We can help you make the right call based on your specific context.' },
  { q: 'Can our web React developers build a React Native app?', a: 'React developers can contribute quickly, but React Native is not just React for mobile — it has its own layout engine (Yoga/Flexbox), platform APIs, performance considerations, and native build tooling. We recommend pairing web developers with at least one experienced React Native engineer for production apps.' },
  { q: 'How are native APIs accessed in React Native?', a: 'Native APIs are accessed through the JavaScript-to-Native bridge (or JSI in the New Architecture). The community provides hundreds of pre-built libraries on npm for common APIs. For anything custom, we write Native Modules in Swift (iOS) and Kotlin (Android) that are called from JavaScript.' },
  { q: 'Expo Managed vs Bare Workflow — what\'s the difference?', a: 'Expo Managed gives you a curated set of APIs, easy OTA updates, and no Xcode/Android Studio needed for basic builds — great for fast iteration. Bare Workflow gives you full control over native code, enabling any third-party SDK and custom native features. Most production apps eventually move to Bare or use Expo with EAS Build.' },
  { q: 'Will our React Native app be approved by the App Store?', a: 'Yes — React Native apps are fully compliant with App Store and Play Store policies. They compile to native binaries and are indistinguishable from native apps to the review team. The key is ensuring your app content and functionality comply with guidelines, which we handle as part of our submission process.' },
];

export default function ReactNativeApps() {
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
                  <span style={{ color: '#111827' }}>React Native Apps</span>
                </div>
                <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(17,24,39,0.08)', border: '1px solid rgba(17,24,39,0.2)', marginBottom: 24 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#111827', display: 'inline-block' }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#111827', letterSpacing: '0.05em' }}>JAVASCRIPT-POWERED MOBILE</span>
                </div>
                <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
                  React Native Apps with{' '}
                  <span style={{ color: '#111827' }}>True Native Feel</span>
                </h1>
                <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>
                  We leverage the full React Native ecosystem — including the New Architecture — to build fast, maintainable iOS and Android apps that share up to 70% of their codebase. Ship faster without compromising on quality.
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
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Full React Native Capability</h2>
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
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Ship with React Native?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(0,0,0,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Let's build a high-quality cross-platform mobile app that leverages your existing JavaScript expertise.</p>
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
