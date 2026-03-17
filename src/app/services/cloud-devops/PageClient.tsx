'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '99.99%', label: 'Uptime Delivered' },
  { value: '300+', label: 'Cloud Migrations' },
  { value: '70%', label: 'Avg Cost Reduction' },
  { value: 'SOC II', label: 'Compliant' },
];

const services: { title: string; tag: string; desc: string; chips?: string[] }[] = [
  {
    title: 'Cloud Architecture & Migration',
    tag: 'Multi-Cloud',
    desc: 'AWS, GCP and Azure architecture designed for resilience, cost efficiency and compliance. Full migration with zero data loss.',
    chips: ['AWS', 'Google Cloud', 'Azure', 'Terraform', 'Pulumi'],
  },
  {
    title: 'CI/CD & Platform Engineering',
    tag: 'DevOps',
    desc: 'End-to-end pipelines with automated testing, security scanning, container orchestration and self-healing infrastructure.',
    chips: ['Kubernetes', 'Docker', 'GitHub Actions', 'ArgoCD', 'Prometheus'],
  },
  { title: 'Infrastructure as Code', tag: 'IaC', desc: 'Fully declarative, version-controlled infrastructure with Terraform, Pulumi and AWS CDK.' },
  { title: 'Security & Compliance', tag: 'DevSecOps', desc: 'Shift-left security scanning, secrets management and continuous compliance for SOC II and ISO 27001.' },
  { title: 'Cost Optimisation', tag: 'FinOps', desc: 'Right-sizing, reserved instance planning and resource tagging to cut cloud bills without cutting corners.' },
  { title: 'Observability', tag: 'Monitoring', desc: 'Full-stack metrics, tracing and alerting with sub-minute incident detection and automated runbooks.' },
];

const steps = [
  {
    num: '01',
    title: 'Audit',
    desc: 'Deep assessment of your current infrastructure: cost analysis, security posture, reliability gaps and compliance status.',
    deliverables: ['Architecture Diagram', 'Cost Breakdown', 'Security Report', 'Gap Analysis'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'Target-state architecture design with multi-region redundancy, auto-scaling policies and disaster recovery runbooks.',
    deliverables: ['Target Architecture', 'DR Plan', 'Scaling Policy', 'Cost Projection'],
    duration: '1–2 weeks',
  },
  {
    num: '03',
    title: 'Migration',
    desc: 'Phased migration with blue-green deployments, database replication sync and zero-downtime DNS cutover.',
    deliverables: ['Migration Runbook', 'Data Sync Plan', 'Rollback Plan', 'Cutover Checklist'],
    duration: '2–8 weeks',
  },
  {
    num: '04',
    title: 'Automation',
    desc: 'Full IaC coverage, CI/CD pipelines, automated testing gates, security scanning and self-healing alert responses.',
    deliverables: ['IaC Codebase', 'CI/CD Pipelines', 'Security Gates', 'Runbook Automation'],
    duration: '2–4 weeks',
  },
  {
    num: '05',
    title: 'Optimise',
    desc: 'Continuous cost optimisation, performance tuning and compliance reporting. Monthly FinOps reviews included.',
    deliverables: ['FinOps Report', 'Performance Baselines', 'Compliance Dashboard', 'Monthly Reviews'],
    duration: 'Ongoing',
  },
];

const techCategories = [
  { label: 'Cloud', chips: ['AWS', 'Google Cloud', 'Azure', 'Cloudflare', 'Vercel'] },
  { label: 'Containers', chips: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'EKS'] },
  { label: 'IaC', chips: ['Terraform', 'Pulumi', 'Ansible', 'CDK'] },
  { label: 'Observability', chips: ['Prometheus', 'Grafana', 'Datadog', 'OpenTelemetry', 'PagerDuty'] },
];

const industries = [
  { icon: '💳', title: 'FinTech', desc: 'PCI-DSS and SOC II compliant infrastructure built for high-frequency transaction workloads.' },
  { icon: '🏥', title: 'Healthcare', desc: 'HIPAA-compliant cloud architecture with encrypted data pipelines and audit logging.' },
  { icon: '🛒', title: 'E-Commerce', desc: 'Auto-scaling storefronts that handle flash sales and seasonal spikes without a blink.' },
  { icon: '📺', title: 'Media', desc: 'Global CDN distribution, video transcoding pipelines and sub-100ms content delivery.' },
  { icon: '🏢', title: 'Enterprise', desc: 'Hybrid cloud and multi-cloud setups with centralised governance and cost controls.' },
  { icon: '🚀', title: 'Startups', desc: 'Cost-optimised cloud foundations that scale from zero to millions without re-architecture.' },
];

// ─── REVEAL HOOK ─────────────────────────────────────────────────────────────

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

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CloudDevOpsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const industriesRef = useReveal() as React.RefObject<HTMLElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', color: '#111827', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Cloud & DevOps' },
          ]} />
        </div>

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(60px, 8vw, 100px) 0 clamp(60px, 8vw, 120px)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          {/* Grid background */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.015) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
          {/* Glow */}
          <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 700, height: 600, background: 'radial-gradient(ellipse,rgba(79,70,229,0.08) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 80px)', alignItems: 'center' }}>
              {/* Left */}
              <div>
                {/* Badge */}
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4F46E5', boxShadow: '0 0 8px #4F46E5' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#4F46E5', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Cloud &amp; DevOps</span>
                </div>

                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(3rem,6vw,6rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 28px' }}>
                  Infrastructure That<br /><span style={{ color: '#4F46E5' }}>Never Sleeps.</span>
                </h1>

                <p className="reveal reveal-d2" style={{ fontSize: 18, color: 'rgba(0,0,0,0.55)', lineHeight: 1.75, maxWidth: 620, margin: '0 0 44px' }}>
                  Cloud architecture, CI/CD pipelines and DevSecOps — engineered for zero downtime, infinite scale and full observability.
                </p>

                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#4F46E5', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Start Your Migration
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                    View Our Work
                  </Link>
                </div>
              </div>

              {/* Right — contact form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            STATS STRIP
        ═══════════════════════════════════════ */}
        <section ref={statsRef} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ padding: 'clamp(28px, 4vw, 52px) clamp(16px, 3vw, 40px)', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.05)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 10 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHAT WE BUILD
        ═══════════════════════════════════════ */}
        <section ref={servicesRef} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>What We Build</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Resilient by Design.<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Automated by Default.</span>
              </h2>
            </div>

            {/* Service Cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {services.map(s => (
                <div key={s.title} style={{ padding: '36px 32px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; e.currentTarget.style.background = 'rgba(79,70,229,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#4F46E5,transparent)' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4F46E5', background: 'rgba(79,70,229,0.1)', padding: '5px 14px', borderRadius: 100, marginBottom: 20, display: 'inline-block' }}>{s.tag}</span>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, marginBottom: s.chips ? 24 : 0 }}>{s.desc}</p>
                  {s.chips && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.chips.map(c => <span key={c} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(0,0,0,0.4)', padding: '6px 14px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 100 }}>{c}</span>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PROCESS
        ═══════════════════════════════════════ */}
        <section ref={processRef} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 80 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                From Audit<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>to Optimised.</span>
              </h2>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom,rgba(79,70,229,0.5),rgba(79,70,229,0.05))', zIndex: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {steps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'start', padding: '32px 0' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(79,70,229,0.4)', background: 'rgba(79,70,229,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#4F46E5', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>
                    <div style={{ padding: 'clamp(20px, 3vw, 32px) clamp(16px, 3vw, 40px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', transition: 'all 0.35s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; e.currentTarget.style.background = 'rgba(79,70,229,0.03)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.boxShadow = ''; }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#4F46E5', background: 'rgba(79,70,229,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' as const }}>{step.duration}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.55)', lineHeight: 1.75, marginBottom: 24 }}>{step.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.deliverables.map(d => (
                          <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(0,0,0,0.55)', padding: '6px 14px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100 }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
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
        <section ref={techRef} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Technology</div>
                <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                  The Stack Behind<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Your Platform.</span>
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
                Battle-hardened cloud-native tooling chosen for reliability, security and cost efficiency.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {techCategories.map(cat => (
                <div key={cat.label} style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; e.currentTarget.style.background = 'rgba(79,70,229,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c} style={{ padding: '7px 16px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.35)'; e.currentTarget.style.color = '#4F46E5'; e.currentTarget.style.background = 'rgba(79,70,229,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = 'rgba(0,0,0,0.45)'; e.currentTarget.style.background = 'transparent'; }}
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
        <section ref={industriesRef} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Industries</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Infrastructure That<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Powers Every Sector.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {industries.map((ind, i) => (
                <div key={ind.title} className={`reveal-d${i + 1}`} style={{ padding: '36px 32px', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 24, background: 'rgba(0,0,0,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; e.currentTarget.style.background = 'rgba(79,70,229,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{ind.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 10 }}>{ind.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════ */}
        <section ref={ctaRef} style={{ padding: 'clamp(60px, 8vw, 120px) 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse,rgba(79,70,229,0.09) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 24 }}>Ready to Scale?</div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 28px' }}>
              Ready to Scale Your<br /><span style={{ color: '#4F46E5' }}>Infrastructure?</span>
            </h2>
            <TrustBadges compact />
            <p className="reveal reveal-d2" style={{ fontSize: 18, color: 'rgba(0,0,0,0.35)', maxWidth: 500, margin: '0 auto 48px', lineHeight: 1.7 }}>
              Tell us about your stack. We&apos;ll return a free infrastructure audit and cost-reduction estimate within 48 hours.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 60, padding: '0 40px', borderRadius: 100, background: '#4F46E5', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get a Free Audit
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', height: 60, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                Talk to an Architect
              </Link>
            </div>
            {/* Trust strip */}
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Zero Downtime Migrations', 'SOC II Compliant', '48hr Audit Report', 'NDA on Day 1'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section style={{ padding: '80px 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Related Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              {[
                { name: 'Web Development', href: '/services/web-development', desc: 'Full-stack web platforms deployed on the cloud infrastructure we build and manage.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Scalable SaaS products with CI/CD pipelines, auto-scaling and zero-downtime deploys.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Production AI models hosted on optimised cloud infrastructure with full observability.' },
              ].map((s) => (
                <a key={s.href} href={s.href} style={{
                  display: 'block', padding: '28px 24px', borderRadius: 16,
                  background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 8 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', lineHeight: 1.6 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section style={{ padding: '60px 0' }}>
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: 24 }}>Industries We Serve</p>
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
                  color: 'rgba(0,0,0,0.55)', background: 'rgba(0,0,0,0.02)',
                  border: '1px solid rgba(0,0,0,0.06)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = 'rgba(0,0,0,0.55)'; }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
