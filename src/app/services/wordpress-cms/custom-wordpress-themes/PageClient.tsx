'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import HeroBackground from '@/components/HeroBackground';
import { FloatingIconsBackground } from '@/components/FloatingIconsBackground';
import { IconReact, IconNextJS, IconNodeJS, IconPython, IconAWS, IconDocker, IconKubernetes, IconTypeScript, IconGraphQL, IconPostgreSQL, IconMongoDB, IconTensorFlow, IconGitHub, IconFigma, IconVSCode } from '@/components/tech-icons';

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
  { value: '100+', label: 'Custom Themes Built' },
  { value: '98+', label: 'PageSpeed Score' },
  { value: '100%', label: 'Pixel-Perfect from Figma' },
  { value: '0', label: 'Page Builders Used' },
];

const services = [
  { icon: '🎨', title: 'Bespoke Theme Development', desc: 'Hand-coded WordPress themes built from scratch — no Elementor, no Divi. Clean, semantic HTML and CSS that performs.' },
  { icon: '🖼️', title: 'Figma / XD to WordPress', desc: 'We translate your design files into pixel-perfect WordPress themes with meticulous attention to spacing, typography and interaction.' },
  { icon: '🧱', title: 'Gutenberg Custom Blocks', desc: 'Powerful, reusable custom blocks for the Block Editor that give your team a flexible, page-builder-like experience — without the bloat.' },
  { icon: '👶', title: 'Child Theme Development', desc: 'Safe child themes that inherit parent theme styles while allowing full customisation — your edits survive every parent update.' },
  { icon: '⚡', title: 'Theme Performance Optimisation', desc: 'We audit and optimise every asset — critical CSS inlining, deferred JS, image lazy loading — to hit 90+ Lighthouse scores.' },
  { icon: '🛒', title: 'WooCommerce Theme Integration', desc: 'Custom WooCommerce template overrides so your shop pages match your brand exactly, with conversion-focused layouts.' },
];

const steps = [
  { num: '01', title: 'Design Review', desc: 'We audit your Figma or XD files, flag any ambiguities, and align on component inventory, breakpoints and animation behaviour before writing a single line of code.' },
  { num: '02', title: 'Theme Architecture', desc: 'We plan the file structure, template hierarchy, custom post types, taxonomies and block patterns that will power the theme — built for maintainability from day one.' },
  { num: '03', title: 'Block & Template Development', desc: 'Iterative development with weekly check-ins. Each template and block is reviewed in staging before moving on, keeping scope tight and quality high.' },
  { num: '04', title: 'QA & Handover', desc: 'Cross-browser and device QA, Lighthouse performance testing, accessibility audit, and a training session so your team can manage content confidently.' },
];

const faqs = [
  { q: 'Custom theme vs premium theme — which is better?', a: 'Premium themes are fast to deploy but come with thousands of lines of code you\'ll never use, making them slow and hard to customise cleanly. A custom theme is built for your exact requirements — nothing more, nothing less — resulting in better performance, easier maintenance, and a unique look that reflects your brand.' },
  { q: 'Do you use page builders like Elementor?', a: 'No. We build hand-coded themes using the native WordPress Block Editor (Gutenberg) for content management. Page builders add significant JavaScript overhead, generate bloated markup, and create long-term lock-in. Our approach results in faster sites and cleaner code.' },
  { q: 'How do you ensure the theme is fast?', a: 'Performance is baked in from the start: we only load assets on pages that need them, inline critical CSS, defer non-critical JavaScript, use modern image formats (WebP/AVIF), and configure server-side caching. We target a 90+ Lighthouse score as a baseline, not a bonus.' },
  { q: 'Can we edit content ourselves after launch?', a: 'Absolutely. Every custom theme we build includes intuitive Gutenberg blocks and Full Site Editing (FSE) patterns so your team can manage pages, posts and global settings without touching code. We include a handover training session and documentation.' },
  { q: 'Does the theme work with any plugins?', a: 'We code to WordPress standards, so the theme is compatible with all well-coded plugins. We also test compatibility with common plugins you plan to use (WooCommerce, SEO plugins, forms, etc.) during QA before launch.' },
];


const floatingIcons = [
  { id: 1, icon: IconReact, className: 'top-[10%] left-[5%]' },
  { id: 2, icon: IconNextJS, className: 'top-[15%] right-[8%]' },
  { id: 3, icon: IconNodeJS, className: 'top-[60%] left-[3%]' },
  { id: 4, icon: IconPython, className: 'bottom-[20%] right-[5%]' },
  { id: 5, icon: IconAWS, className: 'top-[5%] left-[25%]' },
  { id: 6, icon: IconDocker, className: 'top-[70%] right-[15%]' },
  { id: 7, icon: IconKubernetes, className: 'bottom-[15%] left-[20%]' },
  { id: 8, icon: IconTypeScript, className: 'top-[40%] left-[8%]' },
  { id: 9, icon: IconGraphQL, className: 'top-[80%] right-[25%]' },
  { id: 10, icon: IconPostgreSQL, className: 'top-[25%] right-[5%]' },
  { id: 11, icon: IconMongoDB, className: 'top-[50%] left-[2%]' },
  { id: 12, icon: IconTensorFlow, className: 'bottom-[25%] right-[10%]' },
  { id: 13, icon: IconGitHub, className: 'top-[35%] right-[12%]' },
  { id: 14, icon: IconFigma, className: 'bottom-[10%] left-[10%]' },
  { id: 15, icon: IconVSCode, className: 'top-[5%] left-[50%]' },
];

export default function CustomWordPressThemesPage() {
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
      <main style={{ background: '#000000', color: '#ffffff', fontFamily: 'inherit' }}>

        {/* HERO */}
        <section ref={heroRef} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="right" />
          <FloatingIconsBackground icons={floatingIcons} />
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 60px)', alignItems: 'center' }}>
              <div>
                <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                  <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
                  <span>/</span>
                  <Link href="/services/wordpress-cms" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>WordPress & CMS</Link>
                  <span>/</span>
                  <span style={{ color: '#ffffff' }}>Custom WordPress Themes</span>
                </div>
                <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 24 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.05em' }}>WORDPRESS & CMS</span>
                </div>
                <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
                  Custom WordPress <span style={{ color: '#ffffff' }}>Theme Development</span>
                </h1>
                <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>Hand-coded, pixel-perfect WordPress themes built from your Figma designs — no page builders, no bloat, just fast and beautiful sites.</p>
                <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                    Start Your Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>View Case Studies</Link>
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
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Our Capabilities</h2>
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
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Get Started?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Let's discuss your project and build something great together.</p>
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
