'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '50+', label: 'AI Products Shipped' },
  { value: '2M+', label: 'Daily Predictions' },
  { value: '<100ms', label: 'Inference' },
  { value: '98%', label: 'Model Accuracy' },
];

const services: { title: string; tag: string; desc: string; chips?: string[] }[] = [
  {
    title: 'Custom LLM Applications',
    tag: 'Generative AI',
    desc: 'GPT-4, Claude and open-source LLMs integrated into your product — RAG pipelines, fine-tuning, prompt engineering and production deployment at scale.',
    chips: ['OpenAI', 'LangChain', 'Pinecone', 'Claude', 'HuggingFace'],
  },
  {
    title: 'ML Model Development',
    tag: 'Predictive AI',
    desc: 'End-to-end ML pipelines — from data prep and feature engineering to model training, evaluation and serving at scale with full monitoring in production.',
    chips: ['Python', 'TensorFlow', 'PyTorch', 'SageMaker', 'MLflow'],
  },
  { title: 'Computer Vision', tag: 'Vision AI', desc: 'Object detection, image classification, OCR and real-time video analysis for any industry.' },
  { title: 'NLP & Text Analytics', tag: 'NLP', desc: 'Sentiment analysis, entity extraction, document understanding and semantic search pipelines.' },
  { title: 'AI Automation', tag: 'Automation', desc: 'Intelligent workflow automation that eliminates manual tasks and scales with your operations.' },
  { title: 'Data Engineering', tag: 'Data', desc: 'Data pipelines, feature stores and warehouse architectures that feed reliable models.' },
];

const steps = [
  {
    num: '01',
    title: 'Data Audit',
    desc: 'We assess your existing data assets, identify gaps, and define the data strategy needed to build a model that actually performs in production.',
    deliverables: ['Data Inventory', 'Quality Report', 'Gap Analysis', 'Data Roadmap'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Model Design',
    desc: 'Architecture selection, problem framing, and baseline benchmarking — choosing the right approach before committing to full training.',
    deliverables: ['Architecture Doc', 'Baseline Benchmarks', 'Feature Plan', 'Evaluation Criteria'],
    duration: '1–2 weeks',
  },
  {
    num: '03',
    title: 'Training',
    desc: 'Iterative model training with full experiment tracking, hyperparameter tuning, and version control on every run.',
    deliverables: ['Trained Models', 'Experiment Logs', 'Tuning Report', 'Version Registry'],
    duration: '2–6 weeks',
  },
  {
    num: '04',
    title: 'Evaluation',
    desc: 'Rigorous evaluation across accuracy, latency, fairness and robustness metrics. Red-teaming for LLM applications before any production exposure.',
    deliverables: ['Eval Report', 'Bias Audit', 'Latency Profile', 'Red-Team Results'],
    duration: '1–2 weeks',
  },
  {
    num: '05',
    title: 'Deployment',
    desc: 'Containerized model serving, A/B testing infrastructure, real-time monitoring dashboards and drift detection to keep your model accurate over time.',
    deliverables: ['Production API', 'A/B Framework', 'Monitoring Dashboard', 'Drift Alerts'],
    duration: 'Ongoing',
  },
];

const techCategories = [
  { label: 'Models', chips: ['GPT-4', 'Claude', 'Llama', 'Mistral', 'Gemini'] },
  { label: 'Frameworks', chips: ['TensorFlow', 'PyTorch', 'LangChain', 'Scikit-learn'] },
  { label: 'Infrastructure', chips: ['AWS SageMaker', 'Google Vertex AI', 'Azure ML', 'Kubernetes'] },
  { label: 'Data', chips: ['Pinecone', 'Weaviate', 'PostgreSQL', 'Spark', 'Airflow'] },
];

const industries = [
  { icon: '💰', title: 'FinTech', desc: 'Fraud detection, credit scoring, algorithmic trading and risk modeling at scale.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Clinical NLP, medical imaging analysis, patient outcome prediction and drug discovery support.' },
  { icon: '🛍️', title: 'Retail', desc: 'Recommendation engines, demand forecasting, dynamic pricing and inventory optimization.' },
  { icon: '⚖️', title: 'Legal', desc: 'Contract analysis, case outcome prediction, document review automation and due diligence tools.' },
  { icon: '📺', title: 'Media', desc: 'Content personalisation, automated tagging, sentiment monitoring and audience analytics.' },
  { icon: '🏭', title: 'Manufacturing', desc: 'Predictive maintenance, quality control vision systems and supply chain optimization.' },
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

export default function AiMlPage() {
  const statsRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const industriesRef = useReveal() as React.RefObject<HTMLElement>;
  const heroRef = useReveal() as React.RefObject<HTMLElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'AI & Machine Learning' },
          ]} />
        </div>

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              AI & Machine Learning
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              AI That Moves Your Business Forward.
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Custom AI models, intelligent automation, and LLM-powered products — built for production, not demos.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Build With AI
              </Link>
              <Link href="/contact" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                See AI Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { value: '50+', label: 'AI Products Shipped' },
                { value: '2M+', label: 'Daily Predictions' },
                { value: '98%', label: 'Model Accuracy' },
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
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ padding: 'clamp(28px, 4vw, 52px) clamp(16px, 3vw, 40px)', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginTop: 10 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SERVICES / FEATURES
        ═══════════════════════════════════════ */}
        <section ref={servicesRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            {/* Header */}
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>What We Build</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Production AI.<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Not Prototypes.</span>
              </h2>
            </div>

            {/* Service Cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {services.map(s => (
                <div key={s.title} style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#ffffff', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, marginBottom: 20, display: 'inline-block' }}>{s.tag}</span>
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
            PROCESS
        ═══════════════════════════════════════ */}
        <section ref={processRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 80 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                From Raw Data<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>To Live AI.</span>
              </h2>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Vertical connecting line */}
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom, rgba(34,197,94,0.5), rgba(34,197,94,0.05))', zIndex: 0 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {steps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'start', padding: '32px 0' }}>
                    {/* Circle number */}
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(34,197,94,0.4)', background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#ffffff', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>

                    {/* Content card */}
                    <div
                      style={{ padding: 'clamp(20px, 3vw, 32px) clamp(16px, 3vw, 40px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
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
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Technology</div>
                <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                  The Stack Behind<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Your AI.</span>
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
                State-of-the-art models paired with battle-tested infrastructure — so your AI stays accurate and reliable at scale.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {techCategories.map(cat => (
                <div key={cat.label}
                  style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#ffffff', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c}
                        style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'transparent'; }}>
                        {c}
                      </span>
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
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Industries</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                AI That Transforms<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Every Vertical.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {industries.map((ind, i) => (
                <div key={ind.title} className={`reveal-d${i + 1}`}
                  style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
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
            BOTTOM CTA
        ═══════════════════════════════════════ */}
        <section ref={ctaRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse,rgba(34,197,94,0.09) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.25)', marginBottom: 24 }}>Let&apos;s Build</div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 28px' }}>
              Ready to Build<br /><span style={{ color: '#ffffff' }}>With AI?</span>
            </h2>
            <TrustBadges compact />
            <p className="reveal reveal-d2" style={{ fontSize: 18, color: 'rgba(255,255,255,0.35)', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
              Share your data challenge. We&apos;ll send a detailed AI strategy proposal within 48 hours — no commitment required.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
              <Link href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 60, padding: '0 40px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get a Free AI Proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', height: 60, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                onClick={e => { e.preventDefault(); window.location.href = '/contact'; }}>
                Book an AI Consultation
              </Link>
            </div>
            {/* Trust badges */}
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
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
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'Scalable cloud infrastructure and CI/CD pipelines to deploy and monitor your AI models.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant SaaS platforms with AI-powered features, analytics and automation.' },
                { name: 'Web Development', href: '/services/web-development', desc: 'Full-stack web applications with intelligent backends and real-time data dashboards.' },
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
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
        .reveal-d5 { transition-delay: 0.5s; }
        @media(max-width:768px){
          .ind-grid{grid-template-columns:repeat(2,1fr)!important;}
          .tech-grid{grid-template-columns:1fr!important;}
          .svc-large{grid-template-columns:1fr!important;}
          .svc-small{grid-template-columns:repeat(2,1fr)!important;}
          .stats-row{grid-template-columns:repeat(2,1fr)!important;}
        }
        @media(max-width:480px){
          .svc-small{grid-template-columns:1fr!important;}
          .ind-grid{grid-template-columns:1fr!important;}
          .stats-row{grid-template-columns:repeat(2,1fr)!important;}
        }
      `}</style>
    </>
  );
}
