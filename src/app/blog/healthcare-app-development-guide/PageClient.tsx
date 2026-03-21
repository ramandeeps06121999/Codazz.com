'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
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

const tocSections = [
  { id: 'market-overview', label: 'Market Overview', emoji: '📊' },
  { id: 'hipaa-compliance', label: 'HIPAA Compliance', emoji: '🔒' },
  { id: 'core-features', label: 'Core Features', emoji: '⚙️' },
  { id: 'ehr-integration', label: 'EHR Integration', emoji: '🔗' },
  { id: 'ai-diagnostics', label: 'AI & Wearables', emoji: '🤖' },
  { id: 'fda-regulations', label: 'FDA Regulations', emoji: '📋' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'healthcare-app-trends-2026', title: 'Top Healthcare App Trends in 2026', category: 'Healthcare', readTime: '10 min' },
  { slug: 'how-to-build-healthcare-app', title: 'How to Build a Healthcare App: Step-by-Step Guide', category: 'Mobile', readTime: '12 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026: The Complete Guide', category: 'AI/ML', readTime: '18 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a healthcare app in 2026?',
    a: 'Healthcare app development costs range from $80,000 for a basic telemedicine MVP to $500,000+ for a full enterprise platform with EHR integration, AI diagnostics, and wearable device connectivity. The primary cost drivers are HIPAA-compliant infrastructure, EHR integration complexity (Epic and Cerner integrations alone add $30K-$80K), and FDA regulatory compliance work if your app qualifies as a medical device.',
  },
  {
    q: 'What makes a healthcare app HIPAA compliant?',
    a: 'HIPAA compliance requires end-to-end encryption for all Protected Health Information (PHI) in transit and at rest (AES-256), strict access controls with role-based permissions, comprehensive audit logs of all PHI access, Business Associate Agreements (BAA) with every vendor handling PHI (AWS, Twilio, etc.), data breach notification procedures, and employee training documentation. You also need to conduct regular risk assessments and maintain security policies. HIPAA is not a one-time certification but an ongoing compliance program.',
  },
  {
    q: 'How long does it take to build a telemedicine app?',
    a: 'A basic telemedicine MVP with video consultations, appointment scheduling, and prescription management takes 5-7 months. A full platform with EHR integration, insurance billing, AI symptom checking, and multi-provider support takes 10-14 months. EHR integration alone (getting FHIR API access approved by Epic or Cerner) can take 3-6 months due to their vendor review processes.',
  },
  {
    q: 'Does my healthcare app need FDA approval?',
    a: 'It depends on what your app does. Apps that only help patients manage personal health information, provide general wellness advice, or facilitate administrative functions (scheduling, billing) are generally not regulated. Apps that analyze patient-specific data to diagnose, treat, or prevent disease qualify as Software as a Medical Device (SaMD) and require FDA clearance (510(k)) or approval (PMA). AI-powered diagnostic tools, clinical decision support that overrides clinician judgment, and apps controlling connected medical devices all fall under FDA jurisdiction.',
  },
  {
    q: 'What EHR systems should my healthcare app integrate with?',
    a: 'Epic and Cerner together cover over 70% of US hospital beds. Epic uses their proprietary API alongside FHIR R4; Cerner (now Oracle Health) provides SMART on FHIR access. If you are targeting physician practices, also consider Athenahealth, eClinicalWorks, and Allscripts. For broad interoperability, build to the HL7 FHIR R4 standard — all major EHR vendors are required to support FHIR-based APIs under the 21st Century Cures Act.',
  },
];

export default function HealthcareAppDevelopmentGuideClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* -- FEATURED IMAGE -- */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/healthcare-app-development-guide.jpg"
              alt="healthcare app development guide"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
          </div>
        </div>

        {/* ARTICLE HERO */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>Healthcare</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                16 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              Healthcare App Development Guide 2026: HIPAA, Telemedicine & mHealth
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              Everything you need to build a compliant, scalable healthcare app — from HIPAA architecture and EHR integration to AI diagnostics, FDA regulations, and a full cost breakdown.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, color: '#ffffff' }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[{ label: 'Twitter', icon: '𝕏' }, { label: 'LinkedIn', icon: 'in' }].map(s => (
                  <button key={s.label} style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{ padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)', color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)', fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE BODY + SIDEBAR */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              <article>

                {/* Market Overview */}
                <div className="reveal" style={{ marginBottom: 56 }} id="market-overview">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The mHealth Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global digital health market is projected to surpass $780 billion by 2030, growing at over 18% annually. The COVID-19 pandemic permanently shifted patient expectations: 76% of patients now prefer to manage routine healthcare digitally, and telemedicine adoption has stabilized at 38 times pre-pandemic levels. Healthcare is the fastest-growing sector in enterprise app development, and for good reason.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But healthcare app development is also the most technically and legally demanding category of software. Every decision — from your database schema to your choice of cloud provider — must account for HIPAA compliance. EHR integration requires months of vendor negotiations. And if your app touches clinical decision-making, the FDA will classify it as a medical device. None of this is insurmountable, but it demands a development partner who has built in this space before.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Key opportunity:</strong> Chronic disease management apps (diabetes, hypertension, mental health) are the fastest-growing mHealth segment. Apps that connect to wearables, integrate with EHRs, and deliver personalized interventions are achieving $50-$150/month per patient subscription with 70%+ retention rates — far exceeding typical consumer app benchmarks.
                    </p>
                  </div>
                </div>

                {/* HIPAA Compliance */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hipaa-compliance">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    HIPAA Compliance: Building It In from Day One
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    HIPAA (Health Insurance Portability and Accountability Act) governs how Protected Health Information (PHI) is stored, transmitted, and accessed. Non-compliance penalties range from $100 to $50,000 per violation, with a maximum of $1.9 million per violation category per year. A data breach involving PHI can also trigger class-action litigation. Here is what HIPAA-compliant architecture looks like in practice:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        category: 'Data Encryption',
                        requirements: [
                          'AES-256 encryption for all PHI at rest (databases, backups, file storage)',
                          'TLS 1.3 for all data in transit — no exceptions',
                          'End-to-end encryption for patient-provider messaging',
                          'Encrypted database backups with separate key management (AWS KMS)',
                        ],
                        note: 'HIPAA does not mandate specific encryption standards, but AES-256 and TLS 1.3 are the de facto standard expected by auditors.',
                      },
                      {
                        category: 'Access Controls',
                        requirements: [
                          'Role-based access control (RBAC) — staff see only the PHI they need',
                          'Multi-factor authentication (MFA) for all provider and admin accounts',
                          'Automatic session timeout after inactivity (typically 15 minutes)',
                          'Emergency access procedures with audit logging',
                        ],
                        note: 'The Minimum Necessary Standard requires that access to PHI is limited to what is needed for a specific function.',
                      },
                      {
                        category: 'Audit Logs',
                        requirements: [
                          'Log every access, modification, and deletion of PHI with timestamp and user ID',
                          'Tamper-proof, immutable audit trails stored separately from application data',
                          'Retain audit logs for a minimum of 6 years',
                          'Automated alerting for suspicious access patterns',
                        ],
                        note: 'Audit logs are the single most important artifact during a HIPAA investigation or breach inquiry.',
                      },
                      {
                        category: 'Business Associate Agreements (BAA)',
                        requirements: [
                          'Execute a BAA with every vendor that handles PHI on your behalf',
                          'AWS, Google Cloud, and Azure all offer HIPAA BAAs for their HIPAA-eligible services',
                          'Twilio, SendGrid, and Stripe also offer BAAs for healthcare use cases',
                          'Review vendor sub-processor lists — a BAA chain must cover every link',
                        ],
                        note: 'Using a service without a BAA for PHI processing is a direct HIPAA violation, even if the vendor is reputable.',
                      },
                    ].map(item => (
                      <div key={item.category} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: 14 }}>{item.category}</h3>
                        <ul style={{ margin: '0 0 14px', paddingLeft: 20 }}>
                          {item.requirements.map(r => (
                            <li key={r} style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 4 }}>{r}</li>
                          ))}
                        </ul>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features for Healthcare Apps
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Healthcare apps span a wide range of use cases — telemedicine platforms, patient portals, chronic disease management, mental health apps, and clinical decision support. Here are the features that apply across the most common categories:
                  </p>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>Telemedicine Features</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 32 }}>
                    {[
                      { feature: 'Video Consultations', desc: 'HIPAA-compliant video calling with waiting room, session recording (with consent), and screen sharing for imaging review' },
                      { feature: 'Appointment Scheduling', desc: 'Provider calendar management, patient self-scheduling, automated reminders via SMS and email, and no-show management' },
                      { feature: 'Secure Messaging', desc: 'Encrypted patient-provider messaging, document sharing, prescription requests, and lab result notifications' },
                      { feature: 'E-Prescriptions', desc: 'EPCS (Electronic Prescribing of Controlled Substances) integration with Surescripts network, DEA compliance' },
                      { feature: 'Insurance Verification', desc: 'Real-time eligibility checks via Availity or Change Healthcare, copay estimation before the visit' },
                      { feature: 'Billing & Claims', desc: 'CMS-1500 claim generation, clearinghouse integration (Waystar, Availity), ERA/EOB processing, patient invoicing' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>Patient Portal Features</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { feature: 'Health Records Access', desc: 'View clinical notes, lab results, imaging reports, medication history, and immunization records via FHIR APIs' },
                      { feature: 'Medication Management', desc: 'Medication reminders, refill requests, drug interaction checking, and adherence tracking with caregiver notifications' },
                      { feature: 'Symptom Checker', desc: 'AI-powered symptom assessment that routes patients to appropriate care level (self-care, urgent care, ER, telemedicine)' },
                      { feature: 'Care Plan Tracking', desc: 'Goal setting, progress tracking, and educational content tailored to diagnosis (diabetes management, cardiac rehab, etc.)' },
                      { feature: 'Family & Caregiver Access', desc: 'Delegated access for parents, caregivers, and family members with configurable permissions and notification settings' },
                      { feature: 'Health Surveys & PROs', desc: 'Patient-reported outcome measures (PHQ-9 for depression, GAD-7 for anxiety) with trend visualization' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EHR Integration */}
                <div className="reveal" style={{ marginBottom: 56 }} id="ehr-integration">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    EHR Integration: Epic, Cerner & FHIR
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Electronic Health Record (EHR) integration is the most technically complex part of healthcare app development. Epic and Cerner together serve over 70% of US hospital beds. The 21st Century Cures Act (2020) mandates that all EHR vendors provide FHIR-based API access, which has dramatically simplified interoperability — but implementation is still far from trivial.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        system: 'Epic Systems',
                        market: '~35% of US hospital beds',
                        access: 'Epic on FHIR (SMART on FHIR R4). Apply through the Epic App Orchard marketplace. Sandbox access is available within 1-2 weeks; production access requires Epic client approval and typically takes 2-4 months.',
                        apis: 'Patient demographics, clinical notes, lab results, medications, allergies, appointments, care teams, immunizations, and diagnostic reports via FHIR R4 resources.',
                        cost: '$0 for API access; Epic App Orchard listing costs $1,500-$5,000/year depending on tier',
                      },
                      {
                        system: 'Oracle Cerner',
                        market: '~27% of US hospital beds',
                        access: 'Cerner SMART on FHIR. Register through the Cerner code developer program. Sandbox access in days; production deployment coordinated through individual Cerner client health systems.',
                        apis: 'Clinical data via FHIR R4: AllergyIntolerance, Condition, DiagnosticReport, Encounter, Immunization, MedicationRequest, Observation, Patient, and Procedure resources.',
                        cost: 'API access is free; production access is negotiated per health system',
                      },
                      {
                        system: 'HL7 FHIR R4 Standard',
                        market: 'Universal interoperability layer',
                        access: 'Build to FHIR R4 first, and your integration will work across Epic, Cerner, Athenahealth, eClinicalWorks, and any other ONC-certified EHR. Use SMART on FHIR for OAuth 2.0 authorization.',
                        apis: 'Over 140 standardized resource types covering the full clinical data model. Key resources: Patient, Observation (vitals, labs), Condition, MedicationRequest, AllergyIntolerance, Appointment, and CarePlan.',
                        cost: 'Open standard — no licensing fees. Implementation effort is 6-12 weeks for a competent FHIR developer.',
                      },
                    ].map(item => (
                      <div key={item.system} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.system}</h3>
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: 100, whiteSpace: 'nowrap' }}>{item.market}</span>
                        </div>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 8 }}><strong style={{ color: 'rgba(255,255,255,0.7)' }}>Access:</strong> {item.access}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 8 }}><strong style={{ color: 'rgba(255,255,255,0.7)' }}>APIs:</strong> {item.apis}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}><strong style={{ color: 'rgba(255,255,255,0.7)' }}>Cost:</strong> {item.cost}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI & Wearables */}
                <div className="reveal" style={{ marginBottom: 56 }} id="ai-diagnostics">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    AI Diagnostics & Wearable Device Integration
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    AI and wearable connectivity are the two capabilities that separate the next generation of healthcare apps from glorified scheduling tools. Here is how to build them correctly:
                  </p>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>AI-Powered Capabilities</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
                    {[
                      { cap: 'Symptom Assessment & Triage', desc: 'NLP-powered conversational symptom checker that asks follow-up questions and routes patients to the appropriate level of care. Trained on ICD-10 codes and clinical protocols.', fda: 'Low risk if advisory only' },
                      { cap: 'Medical Image Analysis', desc: 'Deep learning models (CNNs) that analyze dermatology photos, X-rays, and retinal scans to flag abnormalities for clinician review. FDA Class II device territory.', fda: 'FDA clearance required' },
                      { cap: 'Predictive Risk Scoring', desc: 'ML models that predict 30-day readmission risk, sepsis onset, or deterioration events by analyzing EHR data patterns. Deployed as clinical decision support.', fda: 'Review required if autonomous' },
                      { cap: 'Medication Adherence AI', desc: 'Computer vision using the phone camera to verify patients are taking their medications (directly observed therapy). Particularly used in TB and behavioral health programs.', fda: 'Generally low risk' },
                      { cap: 'Mental Health NLP', desc: 'Sentiment analysis and linguistic pattern detection in patient journals and check-ins to identify deterioration in mental health conditions and trigger care team alerts.', fda: 'Context-dependent' },
                      { cap: 'Clinical Documentation AI', desc: 'Ambient AI that listens to patient-provider conversations (with consent) and generates structured clinical notes in real time, reducing physician documentation burden by 40-60%.', fda: 'Low risk as documentation tool' },
                    ].map(item => (
                      <div key={item.cap} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.cap}</p>
                        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: item.fda.includes('required') ? '#f59e0b' : '#22c55e', background: item.fda.includes('required') ? 'rgba(245,158,11,0.1)' : 'rgba(34,197,94,0.1)', padding: '2px 8px', borderRadius: 100, display: 'inline-block', marginBottom: 10 }}>{item.fda}</span>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>Wearable Device Integration</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { device: 'Apple Watch / HealthKit', desc: 'Heart rate, HRV, SpO2, ECG, fall detection, sleep stages, and activity data via HealthKit. Apple Health Records connects directly to FHIR-enabled EHRs.' },
                      { device: 'Google Fit / Health Connect', desc: 'Android ecosystem data aggregation. Health Connect API unifies data from Samsung Health, Fitbit, and third-party fitness apps into a single FHIR-compatible dataset.' },
                      { device: 'Continuous Glucose Monitors', desc: 'Dexcom G7 and Abbott LibreLink offer developer APIs for real-time CGM data integration. Critical for diabetes management apps and endocrinology platforms.' },
                      { device: 'Remote Patient Monitoring Devices', desc: 'Blood pressure cuffs (Withings, Omron), pulse oximeters, smart scales, and cardiac monitors connect via Bluetooth LE. Data transmitted to cloud via phone relay.' },
                    ].map(item => (
                      <div key={item.device} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.device}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FDA Regulations */}
                <div className="reveal" style={{ marginBottom: 56 }} id="fda-regulations">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    FDA Regulations for Medical Apps
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The FDA regulates Software as a Medical Device (SaMD). Understanding whether your app falls under FDA jurisdiction is critical — it affects your architecture, timelines, and budget significantly. The FDA uses a risk-based framework:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        level: 'Not Regulated',
                        color: '#22c55e',
                        desc: 'Apps that help patients manage their own health and wellness without interfacing with a medical device or providing clinical decision support.',
                        examples: ['Appointment scheduling and reminders', 'General wellness and fitness tracking', 'Medication reminders for non-prescription drugs', 'Patient education and health literacy content', 'Administrative functions (billing, records access)'],
                      },
                      {
                        level: 'Enforcement Discretion (Low Risk)',
                        color: '#f59e0b',
                        desc: 'Apps that meet the definition of a medical device but pose low risk. FDA generally does not enforce regulations here but may revisit as technology evolves.',
                        examples: ['Apps to help patients self-manage certain diseases with clinician oversight', 'Automated insulin delivery algorithm aids (advisory only)', 'Low-risk clinical decision support with qualified clinician review', 'Medical device data systems that transfer data without analysis'],
                      },
                      {
                        level: 'FDA Class II — 510(k) Required',
                        color: '#ef4444',
                        desc: 'Apps that pose moderate risk and must demonstrate substantial equivalence to a predicate device. 510(k) clearance typically takes 3-12 months and costs $50K-$200K in regulatory work.',
                        examples: ['AI diagnostic tools (dermatology, radiology, pathology)', 'ECG analysis algorithms', 'Autonomous clinical decision support', 'Apps controlling infusion pumps or ventilators', 'Point-of-care diagnostic apps'],
                      },
                    ].map(item => (
                      <div key={item.level} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}25`, borderLeft: `3px solid ${item.color}` }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>{item.level}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 14 }}>{item.desc}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {item.examples.map(ex => (
                            <span key={ex} style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.03)', padding: '4px 10px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.05)' }}>{ex}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack for Healthcare Apps
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { layer: 'Mobile Apps', tech: 'React Native or Swift / Kotlin', why: 'React Native for cross-platform speed. Native Swift/Kotlin for apps requiring direct Bluetooth LE device communication, HealthKit deep integration, or high-performance biometric processing.' },
                      { layer: 'Backend', tech: 'Node.js (NestJS) or Python (Django/FastAPI)', why: 'Python is preferred for healthcare due to strong FHIR library support (fhir.resources, HAPI FHIR) and ML/AI capabilities. NestJS for high-throughput real-time telemedicine APIs.' },
                      { layer: 'FHIR Server', tech: 'HAPI FHIR or Azure Health Data Services', why: 'HAPI FHIR is the leading open-source FHIR server. Azure Health Data Services (formerly Azure API for FHIR) provides managed FHIR R4 with HIPAA BAA included.' },
                      { layer: 'Database', tech: 'PostgreSQL + TimescaleDB + Redis', why: 'PostgreSQL for clinical data. TimescaleDB (PostgreSQL extension) for time-series vitals and wearable data. Redis for session caching and real-time telemedicine coordination.' },
                      { layer: 'Video Calling', tech: 'Twilio Video or Daily.co', why: 'Both offer HIPAA BAAs. Twilio Video provides more programmatic control. Daily.co is faster to implement with pre-built HIPAA-compliant room infrastructure.' },
                      { layer: 'Cloud Infrastructure', tech: 'AWS (GovCloud or standard with BAA)', why: 'AWS has the most comprehensive HIPAA BAA covering S3, RDS, EKS, Lambda, and CloudWatch. GovCloud for FedRAMP compliance if serving federal payers. Azure is a strong alternative.' },
                      { layer: 'AI / ML Platform', tech: 'AWS SageMaker or Azure ML', why: 'Both support HIPAA-compliant model training and inference. SageMaker for teams already on AWS. Pre-trained medical AI models available through AWS HealthLake and Google Cloud Healthcare API.' },
                      { layer: 'Messaging', tech: 'HIPAA-compliant messaging (TigerConnect, Klara)', why: 'Do not build secure messaging from scratch. TigerConnect and Klara are purpose-built, offer BAAs, and have SDKs for integration into custom apps.' },
                    ].map(item => (
                      <div key={item.layer} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', margin: '0 0 8px' }}>{item.layer}</p>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.tech}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: How Much Does a Healthcare App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Healthcare apps cost significantly more than standard consumer apps due to compliance requirements, EHR integration complexity, and security infrastructure. Here is the realistic breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'Telemedicine MVP',
                        price: '$80,000 - $150,000',
                        timeline: '5-7 months',
                        color: '#22c55e',
                        features: ['HIPAA-compliant architecture & BAAs', 'Video consultations (Twilio/Daily.co)', 'Appointment scheduling & calendar sync', 'Secure patient-provider messaging', 'Basic EHR data pull (one system)', 'e-Prescriptions (Surescripts integration)', 'Insurance eligibility verification', 'Patient and provider mobile apps'],
                      },
                      {
                        tier: 'Full Patient Portal / mHealth Platform',
                        price: '$180,000 - $350,000',
                        timeline: '8-12 months',
                        color: '#3b82f6',
                        features: ['Everything in MVP', 'Multi-EHR integration (Epic + Cerner)', 'Wearable device data ingestion', 'AI symptom checker & triage', 'Medication management & reminders', 'Care plan tracking & patient education', 'Billing & claims processing', 'Population health dashboards', 'FHIR R4 API for third-party integrations', 'Admin dashboard & provider CRM'],
                      },
                      {
                        tier: 'Enterprise / AI Diagnostics Platform',
                        price: '$350,000 - $500,000+',
                        timeline: '12-18 months',
                        color: '#a855f7',
                        features: ['Everything in Full Platform', 'FDA SaMD regulatory pathway support', 'Medical image analysis AI (CNN)', 'Predictive risk scoring models', 'Ambient clinical documentation AI', 'Remote patient monitoring (RPM)', 'Multi-facility, multi-state deployment', 'SOC 2 Type II certification', 'FedRAMP authorization (if government payers)', 'Clinical research data warehouse'],
                      },
                    ].map(tier => (
                      <div key={tier.tier} style={{ padding: '28px 32px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${tier.color}25`, borderLeft: `3px solid ${tier.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: tier.color, margin: '0 0 4px' }}>{tier.tier}</p>
                            <p style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.03em' }}>{tier.price}</p>
                          </div>
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.03)', padding: '6px 16px', borderRadius: 100 }}>{tier.timeline}</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
                          {tier.features.map(f => (
                            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <div style={{ width: 6, height: 6, borderRadius: '50%', background: tier.color, flexShrink: 0 }} />
                              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Ongoing costs to budget for:</strong> HIPAA-compliant cloud infrastructure ($500-$3,000/month), EHR API access fees ($0-$2,000/month depending on system), clinical messaging platform ($200-$800/month), video infrastructure usage ($0.001/min per participant), security monitoring ($300-$1,000/month), and annual HIPAA security risk assessments ($5,000-$20,000).
                    </p>
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Healthcare App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Healthcare app development is not something you want to figure out along the way. The consequences of getting HIPAA wrong are not just financial — a data breach involving patient health information is a reputation-ending event. The consequences of getting FDA classification wrong can halt your launch entirely. Our team at Codazz has built across the full healthcare technology stack: telemedicine platforms, patient portals, chronic disease management apps, and AI-powered clinical decision support tools.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    We bring HIPAA-compliant architecture patterns, pre-built FHIR integration modules, and established relationships with Epic and Cerner app marketplaces. We can also guide your FDA regulatory strategy before a single line of code is written, saving you from expensive architecture changes later. We build healthcare apps that clinicians trust and patients actually want to use.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{ padding: '14px 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
                        Get a Free Consultation
                      </button>
                    </Link>
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                        <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '20px 24px', background: 'rgba(255,255,255,0.02)', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left' }}>
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"/></svg>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px', background: 'rgba(255,255,255,0.02)' }}>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside>
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map(section => (
                        <a key={section.id} href={`#${section.id}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.15s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}>
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0 }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)', background: 'transparent', transition: 'all 0.2s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}>
                          <p style={{ fontSize: 11, color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: 0 }}>{post.readTime} read</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, padding: '64px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Get Started</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>
                  Ready to Build Your Healthcare App?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your vision with our team. We will map out HIPAA architecture, EHR integration pathways, and FDA regulatory strategy — then deliver a detailed fixed-price proposal within 48 hours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                  Get Your Free Estimate
                </button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
