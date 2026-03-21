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
      { threshold: 0.07 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.25)',
  background: 'rgba(34,197,94,0.04)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(34,197,94,0.08)',
};

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...cardBase, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        paddingBottom: '1.25rem',
        marginBottom: '1.25rem',
        cursor: 'pointer',
      }}
      onClick={() => setOpen(o => !o)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontWeight: 600, fontSize: '1rem', color: '#ffffff', lineHeight: 1.5 }}>{q}</span>
        <span style={{ color: '#22c55e', fontSize: '1.4rem', flexShrink: 0, lineHeight: 1 }}>{open ? '−' : '+'}</span>
      </div>
      {open && (
        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginTop: '0.875rem', fontSize: '0.95rem' }}>
          {a}
        </p>
      )}
    </div>
  );
}

const SERVICES = [
  {
    icon: '🩺',
    title: 'Telemedicine App Development',
    desc: 'WebRTC-powered HIPAA video consultations, encrypted patient records, e-prescribing, appointment scheduling, and remote monitoring dashboards for modern care delivery.',
  },
  {
    icon: '🏥',
    title: 'Patient Portal Development',
    desc: 'Secure, mobile-first patient portals for appointment booking, lab results, secure messaging, medication management, and health record access — improving engagement at scale.',
  },
  {
    icon: '🔗',
    title: 'EHR / EMR Integration',
    desc: 'HL7 FHIR R4 and legacy HL7 v2 integrations with Epic, Cerner, Allscripts, and athenahealth — unifying clinical data across your entire care network.',
  },
  {
    icon: '⌚',
    title: 'Wearable & IoT Health Integration',
    desc: 'FDA-compliant integrations with Apple HealthKit, Google Health, Fitbit, Dexcom CGMs, and clinical IoT devices that stream real-time vitals to care teams.',
  },
  {
    icon: '🧠',
    title: 'Health AI & Clinical Decision Support',
    desc: 'FDA-aware ML models for diagnostic imaging analysis, predictive care pathways, NLP-powered clinical documentation, sepsis early-warning, and risk stratification.',
  },
  {
    icon: '📊',
    title: 'Healthcare Analytics Platforms',
    desc: 'Population health dashboards, clinical outcome tracking, HEDIS measure reporting, and predictive models that help providers deliver better care at lower cost.',
  },
];

const COMPLIANCE = [
  { badge: 'HIPAA', desc: 'End-to-end PHI encryption, audit logging, RBAC, session controls, and BAA agreements with all sub-processors — HIPAA Security Rule compliance built in.' },
  { badge: 'HL7 FHIR R4', desc: 'Certified FHIR R4 API development for interoperability with major EHR vendors and compliance with information-blocking rules.' },
  { badge: 'FDA 21 CFR Part 11', desc: 'Electronic records and signature workflows that satisfy FDA audit requirements for clinical and regulated healthcare applications.' },
  { badge: 'SOC 2 Type II', desc: 'Security, availability, and confidentiality controls designed to pass SOC 2 audits — documentation and evidence prepared by our team.' },
  { badge: 'PIPEDA / PHIPA', desc: 'Canadian privacy law compliance (PIPEDA, Ontario PHIPA) for healthcare organisations serving Canadian patients.' },
  { badge: 'GDPR', desc: 'Privacy-by-design architecture, consent management, data minimisation, and right-to-erasure workflows for EU and global patients.' },
];

const PROCESS = [
  { step: '01', title: 'Clinical Discovery & Compliance Scoping', desc: 'We work with your clinical and compliance teams to map PHI data flows, regulatory requirements (HIPAA, HL7 FHIR, FDA), and existing EHR landscape before any architecture decisions.' },
  { step: '02', title: 'HIPAA-First Architecture Design', desc: 'We design secure, scalable system architecture with encrypted PHI storage, audit logging, RBAC, and BAA-covered sub-processors — before writing a single line of code.' },
  { step: '03', title: 'Agile Clinical Development Sprints', desc: 'Two-week sprints with live demo environments, clinician feedback loops, and automated HIPAA security checks baked into every CI/CD pipeline run.' },
  { step: '04', title: 'Clinical UX Testing', desc: 'Usability testing with real clinicians and patients. Accessibility audits (WCAG 2.1 AA), cognitive load testing, and workflow validation to reduce training time.' },
  { step: '05', title: 'Security Review & Penetration Testing', desc: 'Independent penetration testing, OWASP vulnerability scanning, and HIPAA risk analysis documentation completed before any production deployment.' },
  { step: '06', title: 'Launch, Training & Ongoing Support', desc: '24/7 SLA-backed monitoring, automated alerting, EHR integration maintenance, and a dedicated CSM to support your clinical operations team post-launch.' },
];

const TECH = [
  { cat: 'Healthcare Standards', items: ['HL7 FHIR R4', 'DICOM', 'ICD-10', 'SNOMED CT', 'LOINC'] },
  { cat: 'EHR Integrations', items: ['Epic SMART on FHIR', 'Cerner', 'Allscripts', 'athenahealth'] },
  { cat: 'Video & Comms', items: ['Twilio Video', 'Daily.co', 'WebRTC', 'Vonage'] },
  { cat: 'Wearables & IoT', items: ['Apple HealthKit', 'Google Health', 'Fitbit API', 'Dexcom G7', 'Withings'] },
  { cat: 'Health AI', items: ['MONAI', 'Med-PaLM 2', 'AWS HealthLake', 'Azure Health Bot'] },
  { cat: 'HIPAA Cloud', items: ['AWS HIPAA BAA', 'Azure Health APIs', 'GCP HCLS', 'Kubernetes'] },
];

const CASE_STUDIES = [
  {
    tag: 'Telemedicine Platform',
    client: 'National Healthcare Provider — USA',
    headline: '100K+ patients served, 99.9% uptime, zero HIPAA audit findings',
    body: 'We built a HIPAA-compliant telehealth platform from the ground up — WebRTC video with Twilio, HL7 FHIR R4 APIs connecting to Epic, e-prescribing via Surescripts, and a clinical documentation layer with NLP auto-summarisation. Passed HIPAA audit on first attempt.',
    quote: '"The Codazz team understood healthcare compliance from day one. Zero audit findings — our compliance officer was genuinely impressed."',
    author: 'Chief Medical Officer, National Healthcare Provider',
    stats: [['100K+', 'Patients Served'], ['99.9%', 'Platform Uptime'], ['0', 'HIPAA Audit Findings']],
  },
  {
    tag: 'Patient Portal',
    client: 'Multi-Specialty Clinic Network',
    headline: '73% reduction in no-show rates, 4.8-star patient satisfaction rating',
    body: 'A full patient engagement portal — online scheduling, lab results delivery, secure messaging with care teams, medication adherence reminders, and a native iOS and Android app with biometric login. Integrated with Cerner using FHIR R4.',
    quote: '"Our patient satisfaction scores went from 3.2 to 4.8 stars. The portal completely changed how our patients interact with us."',
    author: 'VP Patient Experience, Multi-Specialty Clinic Network',
    stats: [['73%', 'Fewer No-Shows'], ['4.8★', 'Patient Rating'], ['12 weeks', 'Time to Launch']],
  },
  {
    tag: 'Remote Patient Monitoring',
    client: 'Cardiology Practice — Canada',
    headline: '3,200 patients monitored remotely, 31% reduction in preventable ER visits',
    body: 'We integrated a continuous cardiac monitoring solution with Withings and Kardia ECG devices, built a clinical dashboard with real-time alert escalation, and connected the entire system to their existing Epic instance via SMART on FHIR.',
    quote: '"The RPM system paid for itself in the first quarter. We are catching events we would have missed entirely with in-person visits alone."',
    author: 'Director of Cardiology, Canadian Health Network',
    stats: [['3,200+', 'Patients Monitored'], ['31%', 'Fewer ER Visits'], ['PHIPA', 'Compliant']],
  },
];

const PRICING = [
  {
    tier: 'Healthcare MVP',
    price: '$40K – $75K',
    timeline: '10–16 weeks',
    ideal: 'Digital health startups validating a clinical product',
    features: [
      'Core telehealth or patient engagement feature set',
      'HIPAA-compliant architecture & BAA',
      'Basic EHR integration (FHIR read)',
      'HIPAA-compliant video (Twilio / Daily.co)',
      'iOS + Android or Web app',
      '3 months post-launch support',
    ],
  },
  {
    tier: 'Clinical Platform',
    price: '$100K – $250K',
    timeline: '20–36 weeks',
    ideal: 'Health systems and Series A digital health companies',
    popular: true,
    features: [
      'Full telehealth or patient portal feature set',
      'Deep EHR integration (Epic / Cerner FHIR R4)',
      'Wearable & medical device integration',
      'Clinical AI feature (NLP notes / risk scoring)',
      'HIPAA risk analysis documentation',
      'SOC 2 readiness preparation',
      '6 months SLA-backed support',
    ],
  },
  {
    tier: 'Enterprise Health',
    price: 'Custom',
    timeline: 'Tailored',
    ideal: 'Hospitals, health systems, and regulated mHealth companies',
    features: [
      'Multi-site, multi-EHR architecture',
      'FDA 21 CFR Part 11 compliance',
      'Full HL7 FHIR / DICOM pipeline',
      'Health AI model development & validation',
      'Dedicated engineering pod',
      'Independent pen testing & HIPAA audit support',
      '24/7 on-call monitoring & SLA',
    ],
  },
];

const FAQS = [
  {
    q: 'How do you ensure HIPAA compliance in healthcare apps?',
    a: 'HIPAA compliance is designed into every layer — end-to-end encryption of PHI, role-based access controls, audit logging, automatic session timeouts, and BAA agreements with all sub-processors. We prepare full evidence packs for compliance audits.',
  },
  {
    q: 'Can you integrate with Epic, Cerner, and other EHR systems?',
    a: 'Yes. We have built HL7 FHIR R4 integrations with Epic, Cerner, Allscripts, and athenahealth. We also handle legacy HL7 v2 interfaces and can work with your EHR vendor to obtain sandbox access.',
  },
  {
    q: 'How long does it take to build a telemedicine app?',
    a: 'A HIPAA-compliant telemedicine MVP with video, scheduling, and basic EHR integration typically takes 12–20 weeks. A full-featured platform with AI features, wearable integration, and billing takes 6–12 months.',
  },
  {
    q: 'What is the cost of building a healthcare app?',
    a: 'Healthcare MVPs start at $40,000–$75,000. Full-featured telemedicine or patient engagement platforms range from $120,000–$400,000+ depending on compliance requirements, EHR integrations, and AI features. We provide fixed-price proposals after a discovery call.',
  },
  {
    q: 'Do you sign Business Associate Agreements (BAAs)?',
    a: 'Yes. We sign BAAs before any healthcare project begins. We also ensure all third-party tools and cloud providers used in your stack (AWS, Twilio, etc.) have signed BAAs with us, keeping your entire PHI chain compliant.',
  },
];

export default function HealthcarePageClient() {
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    const hero = document.querySelector('.healthcare-hero');
    hero?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Healthcare' },
          ]} />
        </div>

        {/* ── HERO ── */}
        <section
          className="section-padding healthcare-hero"
          style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}
        >
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 920, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 22px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Healthcare App Development
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5.2rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
              HIPAA-Compliant Healthcare Apps{' '}
              <span style={{ color: '#22c55e' }}>Built to Improve Care.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.75, maxWidth: 700, margin: '0 auto 2.5rem' }}>
              We build telemedicine platforms, patient portals, EHR/EMR integrations, wearable health apps, and clinical AI tools — HIPAA-compliant, audit-ready, and designed for real clinical workflows.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '15px 34px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get a Free Consultation
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '15px 34px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(150px, 100%), 1fr))', gap: '1.5rem', maxWidth: 680, margin: '0 auto' }}>
              {[['100K+', 'Patients Served'], ['HIPAA', 'BAA-Ready'], ['HL7 FHIR', 'R4 Certified'], ['0', 'Audit Findings']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#22c55e' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginTop: 5, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY HEALTHCARE SOFTWARE ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Why Healthcare Organizations Need Custom Software Solutions
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 700, margin: '0 auto' }}>
                Clinical workflows are unique to every organization. Off-the-shelf EHR systems don't adapt to your care delivery model. Custom healthcare software, built HIPAA-first, gives clinicians the tools they actually use and patients the experience they expect.
              </p>
            </div>

            {/* Problem-Solution Cards */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
              {[
                {
                  icon: '🔒',
                  problem: 'HIPAA Compliance Risk',
                  solution: 'End-to-end encryption of PHI, audit logging, and automatic BAA management. Your system passes HIPAA audits with zero findings.'
                },
                {
                  icon: '📋',
                  problem: 'Patient Data Fragmentation',
                  solution: 'Unified patient records across systems via HL7 FHIR R4. Clinicians get one source of truth for every patient.'
                },
                {
                  icon: '🎥',
                  problem: 'Telemedicine Demands',
                  solution: 'HIPAA-compliant video conferencing, asynchronous messaging, and remote patient monitoring built in. Scale from 10 patients to 100,000 overnight.'
                },
                {
                  icon: '🔗',
                  problem: 'System Integration Complexity',
                  solution: 'Native integrations with Epic, Cerner, Allscripts via FHIR R4. Clinical data flows seamlessly without manual entry.'
                }
              ].map(card => (
                <Card key={card.problem}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{card.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                    {card.problem}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '0.93rem' }}>
                    {card.solution}
                  </p>
                </Card>
              ))}
            </div>

            {/* Who Needs It */}
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.03)', borderRadius: 28, border: '1px solid rgba(34,197,94,0.12)', padding: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.75rem' }}>
                Healthcare Organizations We Serve
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.5rem' }}>
                {[
                  { icon: '🏥', name: 'Health Systems & Hospitals', desc: 'Multi-site patient portals, telehealth platforms, and clinical dashboards for large health systems.' },
                  { icon: '👨‍⚕️', name: 'Specialty Practices', desc: 'Custom EHR workflows, patient engagement tools, and practice management integrations.' },
                  { icon: '🚑', name: 'Urgent Care & Clinics', desc: 'Fast-track scheduling, patient intake, lab integration, and real-time reporting.' },
                  { icon: '💊', name: 'Digital Health Startups', desc: 'Telehealth platforms, remote monitoring apps, and consumer health tools with HIPAA compliance.' },
                  { icon: '🧬', name: 'Genomics & Precision Medicine', desc: 'Complex data pipelines, patient data management, and FDA-compliant clinical tools.' },
                  { icon: '📊', name: 'Healthcare Organizations', desc: 'Population health management, care coordination, and value-based care infrastructure.' }
                ].map(item => (
                  <div key={item.name} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '✅', title: 'HIPAA Audit Ready', desc: 'Pass compliance audits without anxiety. Full evidence documentation prepared by our team.' },
                { icon: '📈', title: 'Clinical Efficiency', desc: 'Reduce documentation time by 40%. Clinicians spend more time with patients, less time in EHR.' },
                { icon: '🤝', title: 'Patient Engagement', desc: 'Secure patient portals, appointment reminders, and messaging boost satisfaction scores.' },
                { icon: '💰', title: 'Revenue Protection', desc: 'Reduce billing errors and claim denials with accurate, integrated patient data.' },
                { icon: '⚡', title: 'Scalability', desc: 'Grow from 100 to 100,000 patients without system rewrites or performance degradation.' },
                { icon: '🔗', title: 'Interoperability', desc: 'Seamless data exchange with Epic, Cerner, and other EHRs via HL7 FHIR standards.' }
              ].map(benefit => (
                <div key={benefit.title} style={{ padding: '1.5rem', border: '1px solid rgba(34,197,94,0.12)', borderRadius: 20, background: 'rgba(34,197,94,0.025)' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{benefit.icon}</div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{benefit.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                What We Build for Healthcare
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 640, margin: '0 auto' }}>
                Clinical-grade software engineered for the demands of modern healthcare — from telehealth to health AI.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {SERVICES.map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem', color: '#ffffff' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '0.93rem' }}>{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPLIANCE ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(34,197,94,0.02)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Compliance & Regulatory Expertise
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 660, margin: '0 auto' }}>
                Healthcare compliance is non-negotiable. We design compliant systems from the architecture layer — not as an afterthought.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.25rem' }}>
              {COMPLIANCE.map(c => (
                <div key={c.badge} style={{ border: '1px solid rgba(34,197,94,0.12)', borderRadius: 28, background: 'rgba(34,197,94,0.03)', padding: '1.75rem' }}>
                  <div style={{ display: 'inline-block', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 8, padding: '4px 14px', fontSize: '0.78rem', fontWeight: 700, color: '#22c55e', letterSpacing: '0.05em', marginBottom: '0.875rem' }}>
                    {c.badge}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.93rem' }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Healthcare Case Studies
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>
                Real clinical outcomes from healthcare products we have shipped.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {CASE_STUDIES.map((cs, i) => (
                <div key={i} className="reveal" style={{ border: '1px solid rgba(34,197,94,0.12)', borderRadius: 28, background: 'rgba(34,197,94,0.025)', padding: 'clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 'clamp(1.5rem, 4vw, 2.5rem)', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#22c55e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>{cs.tag}</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>{cs.client}</div>
                    <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.25, color: '#ffffff' }}>{cs.headline}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{cs.body}</p>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                      {cs.stats.map(([val, label]) => (
                        <div key={label}>
                          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#22c55e' }}>{val}</div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <blockquote style={{ borderLeft: '3px solid #22c55e', paddingLeft: '1.5rem', margin: 0 }}>
                      <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', marginBottom: '1rem' }}>{cs.quote}</p>
                      <cite style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)', fontStyle: 'normal' }}>— {cs.author}</cite>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Our Healthcare Development Process
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 620, margin: '0 auto' }}>
                A compliance-first, clinician-informed process for healthcare products that actually get used.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
              {PROCESS.map(p => (
                <div key={p.step} style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: '2rem', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#22c55e', letterSpacing: '0.1em', marginBottom: '0.875rem' }}>{p.step}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.75rem', color: '#ffffff' }}>{p.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.93rem' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Healthcare Tech Stack
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>
                Standards-compliant technologies built for clinical environments and HIPAA-covered data.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              {TECH.map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: '5px 13px', fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Healthcare App Development Pricing
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 620, margin: '0 auto' }}>
                Transparent pricing for every stage of your digital health journey. All tiers include BAA and NDA.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', alignItems: 'start' }}>
              {PRICING.map(p => (
                <div key={p.tier} style={{ border: p.popular ? '1px solid rgba(34,197,94,0.4)' : '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: '2rem', background: p.popular ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)', position: 'relative' }}>
                  {p.popular && (
                    <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#22c55e', color: '#000', fontSize: '0.72rem', fontWeight: 700, padding: '4px 16px', borderRadius: 999, letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                      MOST POPULAR
                    </div>
                  )}
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>{p.tier}</div>
                  <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: p.popular ? '#22c55e' : '#ffffff', marginBottom: '0.25rem' }}>{p.price}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)', marginBottom: '0.75rem' }}>{p.timeline}</div>
                  <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem', lineHeight: 1.5 }}>{p.ideal}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {p.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                        <span style={{ color: '#22c55e', flexShrink: 0, marginTop: '0.1em' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '1.75rem' }}>
                    <Link href="/contact" style={{ display: 'block', textAlign: 'center', background: p.popular ? '#22c55e' : 'transparent', color: p.popular ? '#000' : '#ffffff', border: p.popular ? 'none' : '1px solid rgba(255,255,255,0.12)', padding: '12px 24px', borderRadius: 999, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                      {p.tier === 'Enterprise Health' ? 'Request a Quote' : 'Get Started'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED SERVICES ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 40, textAlign: 'center' }}>
              Services for Healthcare Companies
            </h2>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1rem' }}>
              {[
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'HIPAA-compliant iOS and Android health apps with EHR integration and wearable support.' },
                { name: 'Web Development', href: '/services/web-development', desc: 'Secure patient portals and provider dashboards with HIPAA-compliant data handling.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Clinical decision support, diagnostic imaging AI, NLP documentation, and risk prediction models.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'HIPAA-covered cloud infrastructure on AWS and Azure with audit logging and encryption at rest.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant health SaaS platforms with role-based access control and subscription billing.' },
                { name: 'Product Design', href: '/services/product-design', desc: 'Clinical UX research and design — accessible, WCAG-compliant interfaces tested with real clinicians.' },
              ].map(s => (
                <a key={s.href} href={s.href} style={{ display: 'block', padding: '1.25rem 1.5rem', borderRadius: 20, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginBottom: 5 }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CODAZZ FOR HEALTHCARE ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Why Healthcare Companies Choose Codazz
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 660, margin: '0 auto' }}>
                Healthcare is too important to get wrong. We bring clinical domain knowledge, HIPAA expertise, and engineering rigour to every product we build.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
              {[
                {
                  icon: '🔐',
                  title: 'HIPAA Expertise, BAA on Day One',
                  desc: 'We sign BAAs before any project begins. Our engineers are trained in the HIPAA Security Rule and build PHI protection — encryption, audit logging, RBAC — into every architecture layer from the start.',
                },
                {
                  icon: '🩺',
                  title: 'Clinical Domain Knowledge',
                  desc: 'We have worked directly with clinicians, nurses, hospital CIOs, and compliance officers. We understand clinical workflows, care coordination challenges, and the UX standards that make technology actually usable at the bedside.',
                },
                {
                  icon: '✅',
                  title: 'Audit-Ready from Launch',
                  desc: 'Comprehensive audit logs, access controls, evidence documentation, and risk analysis reports that make your HIPAA compliance officer smile during annual reviews — and QSA auditors satisfied on the first pass.',
                },
                {
                  icon: '🔗',
                  title: 'Deep EHR Integration Experience',
                  desc: 'We have battle-tested FHIR R4 integrations with Epic, Cerner, Allscripts, and athenahealth. We also handle legacy HL7 v2 and know exactly how to navigate EHR vendor sandbox programs.',
                },
                {
                  icon: '🌍',
                  title: 'Multi-Jurisdiction Compliance',
                  desc: 'We build for HIPAA in the US, PHIPA and PIPEDA in Canada, GDPR in Europe, and UAE health data regulations — so your platform can serve patients globally without compliance gaps.',
                },
                {
                  icon: '🤝',
                  title: 'Clinician-Tested UX',
                  desc: 'Every healthcare product we ship is usability-tested with real clinicians and patients. Accessible (WCAG 2.1 AA), intuitive under clinical stress conditions, and designed to reduce cognitive load for busy care teams.',
                },
              ].map(w => (
                <Card key={w.title}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem', color: '#ffffff' }}>{w.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '0.93rem' }}>{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE WORK WITH ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Who We Work With
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 620, margin: '0 auto' }}>
                From digital health startups validating a telehealth MVP to large health systems modernising patient engagement.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
              {[
                {
                  segment: 'Digital Health Startups',
                  desc: 'Pre-seed through Series B startups building telehealth apps, remote patient monitoring tools, mental health platforms, or wellness applications. We move fast while keeping compliance airtight from day one.',
                  tags: ['HIPAA MVP', 'Fast Launch', 'Investor-Ready'],
                },
                {
                  segment: 'Hospitals & Health Systems',
                  desc: 'Large health systems modernising patient engagement, care coordination, or clinical decision support. We integrate deeply with existing Epic and Cerner environments and design for clinician adoption.',
                  tags: ['Epic Integration', 'Cerner FHIR', 'Care Coordination'],
                },
                {
                  segment: 'Mental Health Platforms',
                  desc: 'Teletherapy and mental wellness apps that need HIPAA-compliant video sessions, asynchronous messaging, PHQ-9 digital assessments, care plan management, and provider credentialing workflows.',
                  tags: ['Teletherapy', 'Digital Assessments', 'Provider Matching'],
                },
                {
                  segment: 'Remote Patient Monitoring',
                  desc: 'Clinical RPM programs that integrate with cardiac monitors, CGMs, blood pressure cuffs, pulse oximeters, and smart inhalers — streaming real-time data to care teams with automated alert escalation.',
                  tags: ['Device Integration', 'Real-Time Alerts', 'FDA Considerations'],
                },
                {
                  segment: 'Medical Device Companies',
                  desc: 'Hardware companies that need companion apps, cloud data platforms, and clinical portals built around their devices — with FDA 21 CFR Part 11 compliance and HL7 FHIR data export built in.',
                  tags: ['FDA 21 CFR Part 11', 'Companion Apps', 'FHIR Export'],
                },
                {
                  segment: 'Healthcare SaaS Companies',
                  desc: 'Multi-tenant health SaaS platforms serving clinics, labs, or health systems — with granular RBAC, HIPAA-compliant data isolation between tenants, subscription billing, and onboarding automation.',
                  tags: ['Multi-Tenant HIPAA', 'SaaS Architecture', 'Tenant Isolation'],
                },
              ].map(seg => (
                <div key={seg.segment} style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: '1.75rem', background: 'rgba(255,255,255,0.015)' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.75rem' }}>{seg.segment}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1rem' }}>{seg.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {seg.tags.map(tag => (
                      <span key={tag} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 6, padding: '3px 10px', fontSize: '0.75rem', color: '#22c55e', fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS TRUST BAND ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.012)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: '2rem', textAlign: 'center' }}>
              {[
                { val: '100K+', label: 'Patients Served Across Platforms' },
                { val: '40+', label: 'Digital Health Products Shipped' },
                { val: '0', label: 'HIPAA Audit Findings' },
                { val: '99.9%', label: 'Average Platform Uptime' },
                { val: 'HL7 FHIR', label: 'R4 Certified Integrations' },
                { val: 'BAA', label: 'Signed Before Every Project' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#22c55e', marginBottom: '0.4rem' }}>{stat.val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em', lineHeight: 1.4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HEALTHCARE BLOG ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Healthcare Technology Insights
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem' }}>
                In-depth guides on healthcare app development, compliance, and digital health strategy.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.25rem' }}>
              {[
                { title: 'How to Build a Healthcare App: The Complete 2026 Guide', href: '/blog/how-to-build-healthcare-app', tag: 'Product Guide' },
                { title: 'Healthcare App Development Trends 2026', href: '/blog/healthcare-app-trends-2026', tag: 'Industry Report' },
                { title: 'How Much Does App Development Cost in 2026?', href: '/blog/how-much-does-app-development-cost-2026', tag: 'Cost Guide' },
              ].map(post => (
                <a key={post.href} href={post.href} style={{ display: 'block', padding: '1.5rem', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#22c55e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.625rem' }}>{post.tag}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', lineHeight: 1.5 }}>{post.title}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 780 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem' }}>
                Common questions about our HIPAA-compliant healthcare app development services.
              </p>
            </div>
            <div className="reveal">
              {FAQS.map(faq => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
                Ready to Build Your{' '}
                <span style={{ color: '#22c55e' }}>Healthcare Platform?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.75 }}>
                HIPAA-compliant, audit-ready, clinician-approved. From telehealth MVP to enterprise health AI — let's build it together.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Get a Free Consultation
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['HIPAA Compliant', 'BAA Ready', 'HL7 FHIR Certified', 'NDA on Request', 'Free Discovery Call'].map(t => (
                  <span key={t} style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ color: '#22c55e' }}>✓</span> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
