'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import HeroBackground from '@/components/HeroBackground';
import PortfolioShowcase from '@/components/PortfolioShowcase';

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
  { value: '100+', label: 'Flutter Apps Shipped' },
  { value: '60%', label: 'Cost Saving vs Native' },
  { value: '1 Codebase', label: 'iOS + Android' },
  { value: '8wk', label: 'Avg Timeline' },
];

const services = [
  { icon: '🐦', title: 'Dart & Flutter SDK', desc: 'We write clean, idiomatic Dart using Flutter\'s latest SDK. Our engineers stay current with every Flutter release, ensuring your app benefits from the latest performance improvements and APIs.' },
  { icon: '🧩', title: 'Custom Widget Library', desc: 'We design and build reusable custom widget libraries tailored to your brand, ensuring visual consistency across screens while keeping the codebase DRY and maintainable.' },
  { icon: '⚡', title: 'Native Performance', desc: 'Flutter compiles to native ARM code, delivering 60/120fps animations without a JavaScript bridge. We profile and optimize rendering pipelines to ensure buttery-smooth performance on all devices.' },
  { icon: '🔌', title: 'Platform Channels', desc: 'When you need to access device-specific APIs not covered by existing plugins, we write custom Platform Channels in Swift/Kotlin to bridge Flutter with native functionality seamlessly.' },
  { icon: '🖥️', title: 'Flutter Web & Desktop', desc: 'Extend your Flutter app beyond mobile to web browsers, macOS, Windows, and Linux — all from the same codebase. We architect shared business logic with platform-adaptive UIs for each target.' },
  { icon: '🔄', title: 'State Management (Riverpod/Bloc)', desc: 'We implement scalable state management using Riverpod or Bloc depending on your app\'s complexity, ensuring a predictable, testable, and maintainable application architecture.' },
];

const steps = [
  { num: '01', title: 'Architecture Design', desc: 'We define the app architecture — folder structure, state management approach, routing strategy, and third-party package selection — establishing a solid foundation before writing a single widget.' },
  { num: '02', title: 'Widget Development', desc: 'UI is built widget by widget in Flutter, with our designers and developers collaborating closely to produce pixel-perfect implementations of your Figma designs across both iOS and Android.' },
  { num: '03', title: 'Platform Testing', desc: 'We run comprehensive tests on real iOS and Android devices, covering golden widget tests, integration tests, and manual QA to catch any platform-specific rendering or behaviour differences.' },
  { num: '04', title: 'Multi-Store Launch', desc: 'We submit simultaneously to the App Store and Play Store, managing all signing, store metadata, and screenshots for both platforms. One team, one timeline, two successful launches.' },
];

const faqs = [
  { q: 'Is Flutter truly native or a web wrapper?', a: 'Flutter is not a web wrapper or WebView. It compiles your Dart code directly to native ARM machine code and renders every pixel using its own Skia/Impeller rendering engine, bypassing both the native UI framework and a JavaScript bridge. The result is consistently fast, visually custom apps.' },
  { q: 'Flutter vs React Native — which should we choose?', a: 'Flutter excels at pixel-perfect custom UIs, consistent cross-platform rendering, and pure Dart teams. React Native is a better fit when you have a strong JavaScript/React team and need deep integration with the native component ecosystem. We can help you evaluate the right choice based on your specific needs.' },
  { q: 'Can our existing native app be ported to Flutter?', a: 'Yes, we offer Flutter migration services. We typically recommend a screen-by-screen migration strategy, running Flutter and native code side by side using Add-to-App until the full migration is complete, minimising risk and disruption to your existing users.' },
  { q: 'How does Flutter performance compare to native?', a: 'For most app categories, Flutter performance is indistinguishable from native — both achieve 60/120fps animations and fast startup times. Complex platform integrations like maps or camera may have slight overhead from Platform Channels, but these are imperceptible in practice.' },
  { q: 'Who maintains a Flutter app long-term?', a: 'Flutter is backed by Google with a strong open-source community and a growing plugin ecosystem (pub.dev). We provide post-launch maintenance packages and stay current with Flutter SDK updates, Dart upgrades, and OS compatibility requirements so your app never falls behind.' },
];



export default function FlutterDevelopment() {
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
      <main style={{ background: '#000000', color: '#ffffff', fontFamily: 'inherit' }}>

        {/* HERO */}
        <section ref={heroRef} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="right" />
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 60px)', alignItems: 'center' }}>
              <div>
                <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                  <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
                  <span>/</span>
                  <Link href="/services/mobile-app-development" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Mobile App Development</Link>
                  <span>/</span>
                  <span style={{ color: '#ffffff' }}>Flutter Development</span>
                </div>
                <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 24 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.05em' }}>CROSS-PLATFORM NATIVE</span>
                </div>
                <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
                  One Codebase.{' '}
                  <span style={{ color: '#ffffff' }}>Every Platform. Native Speed.</span>
                </h1>
                <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>
                  Flutter lets us ship beautiful, high-performance apps for iOS, Android, web, and desktop from a single Dart codebase — cutting your development cost by up to 60% without sacrificing quality or native feel.
                </p>
                <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                    Start Your Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
                    View Case Studies
                  </Link>
                </div>
                <div className="reveal" style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
                  {stats.map(s => (
                    <div key={s.label}>
                      <div style={{ fontSize: 32, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>{s.value}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
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
        <section ref={s1} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>What We Offer</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Complete Flutter Development Services</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {services.map((svc, i) => (
                <div key={svc.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}

        {/* PORTFOLIO */}
        <PortfolioShowcase category="mobile-app-development" />

        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>How We Work</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {steps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#ffffff', letterSpacing: '0.1em', marginBottom: 16 }}>{step.num}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s3} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container" style={{ maxWidth: 800 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Common Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, transition: '0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s4} className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 70%)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Build with Flutter?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Ship to iOS, Android, and web simultaneously. One team, one codebase, half the cost.</p>
            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 56, padding: '0 40px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
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
