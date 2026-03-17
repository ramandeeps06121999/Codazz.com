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
  { value: '100+', label: 'Pipelines Built' },
  { value: '10x', label: 'Faster Release Cycles' },
  { value: '<5min', label: 'Build Times' },
  { value: 'Zero', label: 'Downtime Deployments' },
];

const services = [
  { icon: '⚙️', title: 'GitHub Actions & GitLab CI', desc: 'Purpose-built pipelines in GitHub Actions or GitLab CI with reusable workflows, caching strategies, and parallel job execution.' },
  { icon: '🧪', title: 'Automated Testing Integration', desc: 'Unit, integration, and end-to-end tests wired into every pipeline stage so no code reaches production without full test coverage.' },
  { icon: '🐳', title: 'Docker Build & Push', desc: 'Optimised multi-stage Docker builds with layer caching, vulnerability scanning, and automated pushes to ECR, GCR, or Docker Hub.' },
  { icon: '🌿', title: 'Environment Promotion (dev→staging→prod)', desc: 'Automated promotion gates between environments with required approvals, smoke tests, and automatic rollback triggers on failure.' },
  { icon: '🟦', title: 'Blue-Green & Canary Deployments', desc: 'Zero-downtime deployment strategies that shift traffic gradually and roll back instantly if error rates or latency thresholds are breached.' },
  { icon: '🛡️', title: 'Pipeline Security (SAST/DAST)', desc: 'Static and dynamic security analysis integrated into the pipeline, blocking deployments that introduce new vulnerabilities or expose secrets.' },
];

const steps = [
  { num: '01', title: 'Current State Audit', desc: 'We map your existing deployment process, identify bottlenecks, manual steps, and security gaps that a pipeline will address.' },
  { num: '02', title: 'Pipeline Design', desc: 'We design the full pipeline architecture: stages, triggers, environment strategy, secrets management, and rollback procedures.' },
  { num: '03', title: 'Implementation', desc: 'Pipelines are built incrementally — starting with CI (build and test), then CD (deploy to staging), then production promotion with approval gates.' },
  { num: '04', title: 'Training & Handover', desc: 'Your team receives documentation and a live walkthrough so they can confidently maintain, extend, and troubleshoot the pipeline independently.' },
];

const faqs = [
  { q: 'GitHub Actions vs Jenkins vs CircleCI — which should I use?', a: 'GitHub Actions is our default recommendation for teams already on GitHub — it requires zero infrastructure, has an enormous marketplace of actions, and costs nothing for public repos. Jenkins is powerful but requires self-hosting and maintenance overhead that most teams underestimate. CircleCI and BuildKite are strong alternatives for teams needing more advanced parallelism or hybrid cloud/on-premise runners.' },
  { q: 'How do you handle secrets in CI/CD?', a: 'Secrets are never hardcoded in pipeline YAML or committed to source control. We use the native secrets store of the CI platform (GitHub Encrypted Secrets, GitLab CI Variables) for basic cases, and integrate with HashiCorp Vault or AWS Secrets Manager for teams with more complex requirements. Secret scanning tools (GitGuardian, truffleHog) are added to the pipeline to catch accidental exposure.' },
  { q: 'What is a blue-green deployment?', a: 'Blue-green deployment maintains two identical production environments. The current live version runs on "blue" and the new version is deployed to "green." Once the green environment passes health checks, traffic is switched over instantly. If issues arise, traffic is switched back to blue in seconds. This eliminates downtime and provides a near-instant rollback capability.' },
  { q: 'How do you prevent bad code reaching production?', a: 'Multiple gates stand between a commit and production: automated linting and formatting checks, unit and integration tests, security scanning (SAST), dependency vulnerability scanning, container image scanning, environment-specific smoke tests, and mandatory human approval for production promotion. A deployment that fails any gate is blocked automatically.' },
  { q: 'How long does it take to set up a full CI/CD pipeline?', a: 'A basic CI pipeline (build, test, lint) for a single service typically takes two to three days. A full CI/CD setup with multiple environments, Docker, promotion gates, blue-green deployments, and security scanning for a multi-service application typically takes two to three weeks. Legacy monolith migrations take longer depending on the existing test coverage.' },
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
              <Link href="/services/cloud-devops" style={{ color: 'rgba(0,0,0,0.4)', textDecoration: 'none' }}>Cloud & DevOps</Link>
              <span>/</span>
              <span style={{ color: '#4F46E5' }}>CI/CD Pipeline Development</span>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4F46E5', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#4F46E5', letterSpacing: '0.05em' }}>CLOUD & DEVOPS</span>
            </div>
            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
              CI/CD Pipelines That <span style={{ color: '#4F46E5' }}>Ship Faster, Safer</span>
            </h1>
            <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>Automated build, test, and deployment pipelines that eliminate manual processes, catch issues early, and let your team ship with confidence every day.</p>
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
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Get Started?</h2>
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
