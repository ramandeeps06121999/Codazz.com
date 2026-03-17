'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';

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
  { value: '500+', label: 'Motion assets created' },
  { value: '10M+', label: 'Video views generated' },
  { value: 'AE & Lottie', label: 'Expert team' },
  { value: 'Broadcast', label: 'Quality standard' },
];

const services = [
  { icon: '✨', title: 'Logo Animation & Sting', desc: 'A signature animated logo sting that brings your brand to life — crafted in After Effects with multiple timing variants (3s, 5s, 10s) for different contexts from social to broadcast.' },
  { icon: '🎞️', title: 'Brand Motion Guidelines', desc: 'A motion design language system defining your brand\'s animation principles — easing curves, timing, transition styles, and motion personality that all animated assets must follow.' },
  { icon: '📱', title: 'Social Media Motion Templates', desc: 'A library of editable motion templates for Instagram, TikTok, LinkedIn, and YouTube — Stories, Reels, feed posts, and ads — enabling your team to produce on-brand animated content at scale.' },
  { icon: '🎬', title: 'Explainer Video Production', desc: 'Script, storyboard, voiceover, and full motion graphics production for explainer videos that communicate complex products or services in under 90 seconds with visual clarity and brand consistency.' },
  { icon: '⚡', title: 'Lottie Animations for Web & App', desc: 'Lightweight, scalable Lottie JSON animations for web and mobile applications — micro-interactions, loading states, onboarding animations, and icon animations that enhance UX without performance cost.' },
  { icon: '📡', title: 'Broadcast Graphics & Lower-Thirds', desc: 'Broadcast-quality animated graphics packages for live events, virtual conferences, and video productions — lower-thirds, transitions, title cards, and bug animations delivered in broadcast-ready formats.' },
];

const steps = [
  { num: '01', title: 'Brief & Storyboard', desc: 'We develop a detailed creative brief and storyboard — mapping every scene, transition, and timing beat before any animation begins, ensuring full alignment on the visual direction.' },
  { num: '02', title: 'Style Development', desc: 'A motion styleframe is designed and approved — establishing the visual look, colour palette, typography treatment, and animation mood before full production commences.' },
  { num: '03', title: 'Animation Production', desc: 'Our After Effects team animates the approved storyboard, with two rounds of revision included — refining timing, easing, and details until every frame is perfect.' },
  { num: '04', title: 'File Delivery', desc: 'Final files delivered in all required formats — MP4, MOV, GIF, WebM, Lottie JSON, and editable After Effects project files — with a clear file naming and usage guide.' },
];

const faqs = [
  { q: 'What is a logo sting?', a: 'A logo sting (also called a logo reveal or logo animation) is a short animated sequence — typically 3–10 seconds — that animates your logo on screen. Used at the start or end of videos, in ads, and on brand intro cards, it adds a layer of polish and brand recognition that static logos cannot achieve.' },
  { q: 'Lottie vs GIF vs MP4 for web animations?', a: 'Lottie (JSON) is the superior choice for web and app animations — it is vector-based (scales perfectly), incredibly lightweight (often 10x smaller than GIF), and fully interactive/controllable via code. GIF has no alpha channel and poor quality. MP4 works well for video but requires autoplay considerations. We always recommend Lottie for UI animations.' },
  { q: 'How long does a brand video take to produce?', a: 'A 60–90 second explainer video typically takes 4–6 weeks from brief to delivery: 1 week for script and storyboard, 1 week for styleframes, 2–3 weeks for animation, and 1 week for revisions and final delivery. Logo stings and short motion assets are faster — typically 1–2 weeks.' },
  { q: 'Do you provide editable After Effects files?', a: 'Yes — all After Effects project files are included in our standard deliverable package. We structure projects cleanly with labelled compositions, organised layers, and clear notes so your in-house team or future agency can make updates without starting from scratch.' },
  { q: 'Can motion assets match our existing static brand?', a: 'Absolutely — and this is typically where we start. We review your existing brand guidelines, colour system, typography, and static identity, then develop a motion language that feels like a natural extension of your visual identity rather than a departure from it.' },
];

export default function MotionVideoBrandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;

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
      `}</style>
      <Navbar />
      <main style={{ background: '#ffffff', color: '#111827', fontFamily: 'inherit' }}>

        {/* HERO */}
        <section ref={heroRef} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,70,229,0.12) 0%, transparent 70%)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 60px)', alignItems: 'center' }}>
              <div>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(0,0,0,0.4)' }}>
              <Link href="/" style={{ color: 'rgba(0,0,0,0.4)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/services/branding" style={{ color: 'rgba(0,0,0,0.4)', textDecoration: 'none' }}>Branding & Identity</Link>
              <span>/</span>
              <span style={{ color: '#4F46E5' }}>Motion & Video Branding</span>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4F46E5', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#4F46E5', letterSpacing: '0.05em' }}>BRANDING & IDENTITY</span>
            </div>
            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
              Motion That Makes Brands <span style={{ color: '#4F46E5' }}>Come Alive</span>
            </h1>
            <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>Broadcast-quality motion branding — from logo animations and Lottie web assets to explainer videos and social motion templates — that gives your brand a dynamic visual presence across every screen.</p>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                Start Your Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.1)', color: '#111827', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>View Case Studies</Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#4F46E5', letterSpacing: '-0.03em' }}>{s.value}</div>
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
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 12 }}>What We Offer</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Our Capabilities</h2>
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
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 12 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>How We Work</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {steps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(0,0,0,0.05)', background: 'rgba(0,0,0,0.015)' }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#4F46E5', letterSpacing: '0.1em', marginBottom: 16 }}>{step.num}</div>
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
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 12 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Common Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ borderRadius: 16, border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#111827', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" style={{ flexShrink: 0, transition: '0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}><path d="M12 5v14M5 12h14" /></svg>
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
        <section ref={s4} style={{ padding: '120px 0', textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(79,70,229,0.08) 0%, transparent 70%)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Animate Your Brand?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(0,0,0,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Let's bring your brand to life with motion design that captivates audiences across every screen.</p>
            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 56, padding: '0 40px', borderRadius: 100, background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', color: '#fff', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
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
