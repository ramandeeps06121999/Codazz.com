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
  { value: '15+', label: 'Industrial AR Deployments' },
  { value: '40%', label: 'Average Error Reduction' },
  { value: 'HoloLens & Magic Leap', label: 'Platforms Supported' },
  { value: '6 Months', label: 'Avg ROI Realisation' },
];

const services = [
  { icon: '🔵', title: 'HoloLens 2 Development', desc: 'Enterprise-grade mixed reality apps for Microsoft HoloLens 2 — using Mixed Reality Toolkit (MRTK), Unity, and Azure Spatial Anchors for persistent, shared AR experiences.' },
  { icon: '📡', title: 'Remote Expert Assistance (AR)', desc: 'AR-powered remote support tools — field workers see live expert annotations overlaid on equipment, reducing downtime and eliminating the need for on-site specialists.' },
  { icon: '🔧', title: 'AR-Guided Assembly & Maintenance', desc: 'Step-by-step AR work instructions overlaid directly on machinery and components. Reduce training time, eliminate paper manuals, and cut assembly errors by up to 40%.' },
  { icon: '🏭', title: 'Digital Twin Visualisation', desc: 'Live 3D digital twin overlays on physical assets — visualise sensor data, component status, and maintenance history spatially anchored to real equipment.' },
  { icon: '📊', title: 'IoT Data Overlay in AR', desc: 'Real-time IoT telemetry — temperature, pressure, vibration, throughput — displayed as spatial AR overlays directly on the machines generating that data.' },
  { icon: '🦺', title: 'Worker Safety AR Applications', desc: 'Hazard zone visualisation, PPE compliance checking, safety procedure guidance, and emergency exit wayfinding — AR applications that protect your workforce on the floor.' },
];

const steps = [
  { num: '01', title: 'Workflow Analysis', desc: 'Our team embeds with your operations team to map current workflows, identify pain points, and quantify the time and error costs that industrial AR can address.' },
  { num: '02', title: 'Use Case Selection', desc: 'We prioritise the highest-ROI use case for a focused pilot — assembly guidance, remote support, or IoT overlay — and define measurable success metrics.' },
  { num: '03', title: 'Pilot Development', desc: 'A working AR pilot is built and deployed in the actual factory environment. Real workers, real equipment, real conditions — tested iteratively until the use case is validated.' },
  { num: '04', title: 'Enterprise Rollout', desc: 'Validated pilots scale to full deployment — device fleet management, MDM integration, training programmes, and ongoing support to ensure enterprise-wide adoption.' },
];

const faqs = [
  {
    q: 'HoloLens vs tablet-based AR for industrial use?',
    a: 'HoloLens 2 wins when workers need both hands free — assembly, maintenance, surgery, and any task where holding a tablet is impractical. It\'s more expensive ($3,500/unit) but delivers true hands-free AR. Tablet-based AR (iPad with ARCore/ARKit) is lower cost, easier to deploy, and sufficient for inspection, training, and reference use cases where the worker can hold a device. We\'ll recommend the right hardware for your specific workflow.',
  },
  {
    q: 'How do you overlay real-time IoT data in AR?',
    a: 'We connect to your existing IoT infrastructure via REST APIs, MQTT, or OPC-UA. The AR app polls or subscribes to live data streams and renders them as spatial overlays anchored to physical asset locations using Azure Spatial Anchors or Vuforia Object Targets. Data refreshes at configurable intervals — typically 1–5 seconds for operational metrics, real-time for safety-critical alerts.',
  },
  {
    q: 'How do you measure ROI of industrial AR?',
    a: 'We establish baseline metrics before the pilot: average task completion time, error rate, rework hours, and training time per new employee. Post-deployment, we measure the same KPIs. Our clients typically see 25–45% reduction in task time, 30–60% reduction in errors, and 50%+ reduction in training time. These translate directly to cost savings that we document in a post-pilot ROI report.',
  },
  {
    q: 'How does connectivity work in factory environments?',
    a: 'Industrial environments often have patchy Wi-Fi and no cellular signal. We design AR apps to function offline-first — all work instructions and 3D content are cached on-device. IoT data overlays and remote expert features require connectivity, which we handle through Wi-Fi dead zone mapping and optional private 5G or LTE network integration. Azure Edge and on-premise server options are available for air-gapped facilities.',
  },
  {
    q: 'How do you train workers to use AR tools?',
    a: 'We design AR tools to be intuitive enough that formal training is minimal — the AR guidance itself is the training. For initial rollout, we provide train-the-trainer sessions, in-app onboarding flows, and video tutorial content. We also build AR-based training modules for the tools themselves, so workers learn the system in the same medium they\'ll use it. Adoption is tracked through usage analytics built into every deployment.',
  },
];

export default function PageClient() {
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
              <Link href="/services/ar-vr" style={{ color: 'rgba(0,0,0,0.4)', textDecoration: 'none' }}>AR &amp; VR Development</Link>
              <span>/</span>
              <span style={{ color: '#4F46E5' }}>Industrial AR Solutions</span>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4F46E5', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#4F46E5', letterSpacing: '0.05em' }}>AR &amp; VR DEVELOPMENT</span>
            </div>
            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
              Industrial AR That <span style={{ color: '#4F46E5' }}>Transforms Operations</span>
            </h1>
            <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>We build enterprise-grade AR solutions for manufacturing, maintenance, and industrial operations — delivering measurable ROI through HoloLens 2, Magic Leap, and tablet AR deployments.</p>
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
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Modernise Your Operations?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(0,0,0,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Let's discuss your project and build something great together.</p>
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
