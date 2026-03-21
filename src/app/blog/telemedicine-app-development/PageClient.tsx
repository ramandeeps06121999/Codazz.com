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
  { id: 'market-opportunity', label: 'Market Opportunity', emoji: '📊' },
  { id: 'core-features', label: 'Core Features', emoji: '⚙️' },
  { id: 'video-tech', label: 'Video Consultation Tech', emoji: '📹' },
  { id: 'hipaa-compliance', label: 'HIPAA Compliance', emoji: '🔒' },
  { id: 'ehr-integration', label: 'EHR Integration', emoji: '🏥' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-to-build-healthcare-app', title: 'How to Build a Healthcare App: Complete 2026 Guide', category: 'Healthcare', readTime: '13 min' },
  { slug: 'healthcare-app-trends-2026', title: 'Healthcare App Trends 2026: AI, Wearables & Digital Health', category: 'Healthcare', readTime: '10 min' },
  { slug: 'how-to-build-fintech-app', title: 'How to Build a Fintech App in 2026', category: 'Fintech', readTime: '15 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a telemedicine app?',
    a: 'A telemedicine app costs between $60,000 and $400,000+ depending on complexity. A focused MVP with video consultation, appointment scheduling, and basic EHR features costs $60K-$100K. A full platform with multi-specialty support, e-prescriptions, insurance billing integration, and EHR connectivity costs $150K-$400K+. HIPAA compliance and security infrastructure add approximately 15-25% to development costs versus a standard mobile app.',
  },
  {
    q: 'What is required for HIPAA compliance in a telemedicine app?',
    a: 'HIPAA compliance for telemedicine requires: end-to-end encryption for all video calls and data in transit (TLS 1.2+), AES-256 encryption for data at rest, Business Associate Agreements (BAAs) with all third-party vendors (AWS, Twilio, etc.), role-based access controls, comprehensive audit logging of all PHI access, automatic session timeouts, and a documented Security Risk Assessment. You also need a HIPAA-compliant video SDK — standard consumer solutions like Google Meet or Zoom (unless using Zoom for Healthcare with BAA) are not compliant by default.',
  },
  {
    q: 'Should I use WebRTC directly or a video SDK like Twilio or Daily.co?',
    a: 'For most telemedicine startups, a HIPAA-compliant video SDK (Twilio Video, Daily.co, or Amazon Chime SDK) is the right choice. Raw WebRTC requires significant infrastructure investment to handle signaling servers, TURN/STUN servers, network traversal, and reliability at scale. SDKs handle this complexity and offer pre-signed BAAs. Use raw WebRTC only if you have specific customization requirements beyond what SDKs support, or if you are processing 1M+ minutes monthly where the cost economics of self-hosting make sense.',
  },
  {
    q: 'Which EHR systems should my telemedicine app integrate with?',
    a: 'Prioritize integration based on your target market. For US independent practices and clinics: DrChrono, Kareo, and SimplePractice. For hospital systems: Epic and Cerner (now Oracle Health) dominate with 60%+ combined US market share. All modern EHRs expose FHIR R4 APIs — build your integration layer on FHIR standards rather than proprietary APIs to reduce future maintenance burden. Start with one EHR integration that covers your primary customer segment, then add others as you grow.',
  },
  {
    q: 'What is the best revenue model for a telemedicine platform?',
    a: 'The most successful telemedicine revenue models combine subscription fees for healthcare providers ($299-$999/month per provider for platform access) with per-consultation fees (either charged to patients directly at $25-$75 per visit, or collected through insurance billing integration). B2B enterprise models (selling to health systems, employers, or insurance companies) generate the highest contract values at $50K-$500K annually. Direct-to-consumer telemedicine is extremely competitive with high customer acquisition costs — B2B2C or provider-facing models typically produce better unit economics.',
  },
];

export default function TelemedicineAppDevelopmentClient() {
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
              src="/blog_images/telemedicine-app-development.jpg"
              alt="telemedicine app development HIPAA compliant guide 2026"
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
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100,
              }}>Healthcare</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                17 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Telemedicine App Development Guide 2026: Build HIPAA-Compliant Video Consult Apps
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Everything you need to know about building a telemedicine platform: WebRTC vs Twilio Video, HIPAA compliance requirements, EHR integration, e-prescriptions, FDA regulations, and a realistic cost breakdown from $60K to $400K+.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[{ label: 'Twitter', icon: '𝕏' }, { label: 'LinkedIn', icon: 'in' }].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)',
                  background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                }}>
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

              {/* MAIN ARTICLE */}
              <article>

                {/* Market Opportunity */}
                <div className="reveal" style={{ marginBottom: 56 }} id="market-opportunity">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The Telemedicine Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global telemedicine market surpassed $120 billion in 2025 and is projected to reach $380 billion by 2030, growing at a CAGR of 23.5%. The post-pandemic era permanently elevated digital health adoption: over 76% of US patients have used telehealth at least once, and 62% prefer telehealth for non-emergency consultations over in-person visits when both options are available.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Beyond general practitioners, telemedicine is rapidly expanding into specialized verticals: mental health platforms (BetterHelp model), dermatology (Curology, Hims/Hers), physical therapy, chronic disease management, pediatrics, and second-opinion services for complex diagnoses. Each vertical has specific clinical workflows, regulatory requirements, and user expectations that create defensible niches for focused platforms.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)', marginBottom: 20 }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Market insight:</strong> Mental health telemedicine is the fastest-growing sub-vertical at 35% CAGR. The combination of high provider shortage (4 psychiatrists per 100,000 population nationally) and strong consumer demand creates a massive opportunity for platforms that can credentialing and match patients with licensed therapists and psychiatrists efficiently.
                    </p>
                  </div>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Regulatory tailwinds are favorable in 2026: the Ryan Haight Act amendments have made prescribing controlled substances via telemedicine more accessible, many states have passed interstate telehealth compacts allowing providers to practice across state lines, and CMS has made many COVID-era telehealth reimbursement expansions permanent. The regulatory environment has never been more permissive for building telemedicine platforms.
                  </p>
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features Your Telemedicine App Needs
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A telemedicine platform requires two primary apps (patient and provider) plus an admin console. The feature sets must align with clinical workflow requirements, not just consumer UX patterns. Here is the complete breakdown:
                  </p>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Patient App Features</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 32 }}>
                    {[
                      { feature: 'Provider Search & Matching', desc: 'Specialty, availability, insurance accepted, ratings, and language filters' },
                      { feature: 'Appointment Scheduling', desc: 'Real-time calendar availability, time zone handling, reminder notifications' },
                      { feature: 'Video Consultation', desc: 'HD video calls with waiting room, screen sharing, and recording consent' },
                      { feature: 'Secure Messaging', desc: 'HIPAA-compliant in-app messaging with providers between appointments' },
                      { feature: 'E-Prescriptions', desc: 'Receive electronic prescriptions sent directly to preferred pharmacy' },
                      { feature: 'Medical Records Access', desc: 'View visit summaries, lab results, and medication history' },
                      { feature: 'Insurance & Payment', desc: 'Insurance card upload, co-pay processing, FSA/HSA payment support' },
                      { feature: 'Symptom Checker', desc: 'AI-powered pre-consultation intake to guide triage and provider matching' },
                      { feature: 'Medication Reminders', desc: 'Push notifications for medication schedules with adherence tracking' },
                      { feature: 'Wearable Integration', desc: 'Sync vitals from Apple Health, Google Fit, and connected devices' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Provider App Features</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 32 }}>
                    {[
                      { feature: 'Provider Dashboard', desc: 'Day view of appointments, queue management, patient queue status' },
                      { feature: 'Patient Chart Access', desc: 'Pre-visit intake forms, medical history, previous visit notes' },
                      { feature: 'Clinical Note Templates', desc: 'SOAP note templates, specialty-specific forms, voice-to-text transcription' },
                      { feature: 'E-Prescribing (EPCS)', desc: 'DEA-compliant electronic prescribing including controlled substances' },
                      { feature: 'Lab Order Management', desc: 'Order lab tests, view results, and communicate findings to patients' },
                      { feature: 'Availability Management', desc: 'Set schedules, block time, manage appointment types and durations' },
                      { feature: 'Billing & Revenue', desc: 'CPT code documentation, insurance claim submission, earnings tracking' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Consultation Tech */}
                <div className="reveal" style={{ marginBottom: 56 }} id="video-tech">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Video Consultation Technology: WebRTC, Twilio, and Beyond
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The video layer is the most critical infrastructure decision in telemedicine development. Healthcare video calls have zero tolerance for failures: a dropped connection mid-consultation erodes trust and can constitute a patient safety risk. Here is how the major options compare:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        option: 'Twilio Video',
                        type: 'Managed SDK',
                        cost: '$0.004/minute per participant',
                        color: '#22c55e',
                        pros: ['HIPAA BAA available', 'Global TURN infrastructure', 'Excellent mobile SDK quality', 'Programmable rooms and tokens', 'Dominant telemedicine choice'],
                        cons: ['Costs scale with volume', 'Less control over infrastructure', 'Vendor dependency'],
                      },
                      {
                        option: 'Daily.co (now Daily)',
                        type: 'Managed SDK',
                        cost: '$0.00099/minute per participant',
                        color: '#3b82f6',
                        pros: ['HIPAA BAA available', 'Lower per-minute cost than Twilio', 'React component library', 'Prebuilt HIPAA-compliant UI'],
                        cons: ['Smaller ecosystem than Twilio', 'Less global infrastructure redundancy'],
                      },
                      {
                        option: 'Amazon Chime SDK',
                        type: 'Managed SDK',
                        cost: '$0.0017/minute per attendee',
                        color: '#a855f7',
                        pros: ['Natively integrates with AWS ecosystem', 'BAA included in AWS BAA', 'Good for teams already on AWS', 'Scalable to enterprise volumes'],
                        cons: ['More complex setup than Twilio', 'Less healthcare-specific features', 'Steeper learning curve'],
                      },
                      {
                        option: 'Raw WebRTC',
                        type: 'Self-Hosted',
                        cost: 'Infrastructure costs only ($500-$5K+/month)',
                        color: 'rgba(255,255,255,0.3)',
                        pros: ['Maximum control and customization', 'No per-minute vendor fees at scale', 'Fully self-contained infrastructure'],
                        cons: ['Requires TURN/STUN server management', 'Significant engineering complexity', 'NAT traversal reliability challenges', 'Not recommended for startups'],
                      },
                    ].map(item => (
                      <div key={item.option} style={{ padding: '24px 28px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}20`, borderLeft: `3px solid ${item.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                          <div>
                            <p style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{item.option}</p>
                            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.type}</span>
                          </div>
                          <span style={{ fontSize: 13, color: '#22c55e', fontWeight: 600, background: 'rgba(34,197,94,0.08)', padding: '6px 14px', borderRadius: 100 }}>{item.cost}</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Pros</p>
                            {item.pros.map(p => (
                              <div key={p} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 6 }}>
                                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', flexShrink: 0, marginTop: 7 }} />
                                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{p}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(239,68,68,0.8)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Cons</p>
                            {item.cons.map(c => (
                              <div key={c} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 6 }}>
                                <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(239,68,68,0.6)', flexShrink: 0, marginTop: 7 }} />
                                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{c}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Recommendation:</strong> For most telemedicine startups and scale-ups, Twilio Video or Daily.co with a signed BAA is the right choice. At 500,000+ consultation minutes monthly, evaluate migrating to self-hosted WebRTC infrastructure or Amazon Chime to reduce per-minute costs.
                    </p>
                  </div>
                </div>

                {/* HIPAA Compliance */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hipaa-compliance">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    HIPAA Compliance: A Technical Checklist
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    HIPAA (Health Insurance Portability and Accountability Act) compliance is not optional for any telemedicine platform operating in the United States. Violations carry penalties from $100 to $50,000 per violation, up to $1.9 million annually per violation category. Here is the comprehensive technical compliance checklist:
                  </p>
                  <div style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
                    {[
                      { category: 'Data Encryption', items: ['TLS 1.2+ for all data in transit (API calls, video streams, messaging)', 'AES-256 encryption for all PHI stored at rest', 'End-to-end encryption for video calls and messages', 'Encrypted database backups with key management (AWS KMS or HashiCorp Vault)'] },
                      { category: 'Access Controls', items: ['Role-based access control (patients see only their data; providers see assigned patients)', 'Multi-factor authentication (MFA) required for provider accounts', 'Automatic session timeouts (15-30 minutes of inactivity)', 'API authentication with short-lived JWT tokens and refresh rotation'] },
                      { category: 'Audit Logging', items: ['Immutable audit log of all PHI access (who accessed what, when, from which IP)', 'Audit logs retained for minimum 6 years', 'Real-time alerting for anomalous access patterns', 'Log integrity verification to detect tampering'] },
                      { category: 'Business Associate Agreements', items: ['Signed BAAs with all cloud vendors (AWS, GCP, Azure all offer BAAs)', 'BAAs with video SDK providers (Twilio, Daily.co, Amazon Chime)', 'BAAs with analytics providers (ensure no PHI reaches non-BAA analytics tools)', 'Internal vendor review process for any new third-party integration'] },
                      { category: 'Infrastructure Security', items: ['HIPAA-eligible services only (AWS HIPAA Eligible Services list)', 'VPC network isolation for all healthcare data services', 'WAF and DDoS protection on all public endpoints', 'Vulnerability scanning and penetration testing (at minimum annually)'] },
                    ].map(section => (
                      <div key={section.category} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{section.category}</p>
                        <div style={{ display: 'grid', gap: 8 }}>
                          {section.items.map(item => (
                            <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12"/></svg>
                              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EHR Integration */}
                <div className="reveal" style={{ marginBottom: 56 }} id="ehr-integration">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    EHR Integration and the FHIR Standard
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Electronic Health Record (EHR) integration is essential for clinical continuity — providers need access to patient history before consultations, and visit notes must flow back into the patient&apos;s permanent record. The good news: the 21st Century Cures Act mandates that all certified EHRs expose FHIR R4 APIs, giving you a standardized integration path.
                  </p>
                  <div style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
                    {[
                      { ehr: 'Epic MyChart', market: '~35% US market share', approach: 'Epic App Orchard partnership + SMART on FHIR OAuth2. Requires Epic review and approval process (4-12 weeks). Best integration option for hospital and large health system customers.' },
                      { ehr: 'Oracle Health (Cerner)', market: '~25% US market share', approach: 'Cerner FHIR R4 APIs with CDS Hooks for clinical decision support. Cerner Open Developer Experience (CODE) program provides sandbox access and developer resources.' },
                      { ehr: 'DrChrono', market: 'Independent practices', approach: 'REST API with OAuth2, well-documented developer portal, and active developer community. Ideal for outpatient clinic and independent practice integrations.' },
                      { ehr: 'Kareo / Tebra', market: 'Small-to-mid practices', approach: 'REST API available for appointment scheduling, clinical notes, and billing. Popular with behavioral health and primary care independent practices.' },
                      { ehr: 'SimplePractice', market: 'Mental health providers', approach: 'API access focused on scheduling and note management. Critical integration for mental health telemedicine platforms targeting therapists and counselors.' },
                    ].map(item => (
                      <div key={item.ehr} style={{ display: 'flex', gap: 20, padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ flexShrink: 0, width: 8, borderRadius: 4, background: 'rgba(34,197,94,0.3)', alignSelf: 'stretch' }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                            <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.ehr}</p>
                            <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 600, background: 'rgba(34,197,94,0.08)', padding: '3px 10px', borderRadius: 100 }}>{item.market}</span>
                          </div>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>{item.approach}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Architecture tip:</strong> Build all EHR integrations through a FHIR adapter layer using an intermediary like Health Gorilla, Redox, or Particle Health. These health data networks provide unified API access to hundreds of EHRs and handle the complex trust frameworks and authentication flows, reducing your integration burden from months to weeks per EHR.
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack for 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Telemedicine apps have strict requirements around security, reliability, and compliance that influence every layer of the stack. Here is what we recommend at Codazz for healthcare platforms in 2026:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { layer: 'Mobile Frontend', tech: 'React Native', why: 'Single codebase for iOS and Android with strong native module support for camera, microphone, and health kit integrations. Large healthcare app ecosystem.' },
                      { layer: 'Web Frontend', tech: 'Next.js (App Router)', why: 'Provider dashboards and patient web portals. Server-side rendering for SEO and initial load performance. TypeScript for type safety in clinical data handling.' },
                      { layer: 'Video Layer', tech: 'Twilio Video or Daily.co', why: 'HIPAA BAA available, global infrastructure, reliable WebRTC abstraction. Start with Twilio for its healthcare ecosystem maturity.' },
                      { layer: 'Backend API', tech: 'Node.js (NestJS) + Python (FastAPI)', why: 'NestJS for main API with HIPAA-compliant middleware. Python FastAPI for AI/ML services: symptom checking, note summarization, clinical NLP.' },
                      { layer: 'Database', tech: 'PostgreSQL + Redis', why: 'PostgreSQL for PHI storage with row-level security. Redis for session management and real-time queue state. Both deployable in HIPAA-eligible configurations on AWS.' },
                      { layer: 'E-Prescribing', tech: 'DoseSpot or DrFirst', why: 'EPCS-certified e-prescribing partners with DEA audit trails. Mandatory for controlled substance prescribing. Both integrate via REST API.' },
                      { layer: 'Scheduling', tech: 'Custom or Calendly Healthcare API', why: 'Complex time zone handling, provider availability rules, and appointment type management. Custom-built scheduling engine gives most flexibility for clinical workflows.' },
                      { layer: 'Cloud Infrastructure', tech: 'AWS (HIPAA Eligible Services)', why: 'AWS offers the broadest selection of HIPAA-eligible services. Use EKS for containers, RDS for databases, S3 + KMS for encrypted storage, CloudTrail for audit logging.' },
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
                    Cost Breakdown: How Much Does a Telemedicine App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Telemedicine app development is more expensive than a standard mobile app due to HIPAA compliance requirements, clinical workflow complexity, and third-party integrations (video SDK, e-prescribing, EHR). Here is a realistic breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP / Basic',
                        price: '$60,000 - $100,000',
                        timeline: '4-6 months',
                        color: '#22c55e',
                        features: ['Patient and provider apps (iOS + Android)', 'Video consultation (Twilio/Daily.co)', 'Appointment scheduling', 'Basic HIPAA compliance setup', 'Secure messaging', 'Payment processing', 'Admin dashboard', 'Push notifications'],
                      },
                      {
                        tier: 'Standard',
                        price: '$110,000 - $220,000',
                        timeline: '7-10 months',
                        color: '#3b82f6',
                        features: ['Everything in MVP', 'E-prescribing integration (DoseSpot)', 'EHR integration (1 system, e.g. DrChrono)', 'Insurance eligibility verification', 'Clinical note templates', 'Lab order management', 'Wearable/HealthKit integration', 'Advanced HIPAA audit logging', 'Group video sessions'],
                      },
                      {
                        tier: 'Enterprise / Full-Featured',
                        price: '$230,000 - $400,000+',
                        timeline: '11-16 months',
                        color: '#a855f7',
                        features: ['Everything in Standard', 'Epic/Cerner EHR integration', 'AI-powered symptom checker', 'Insurance claims submission (837P)', 'Multi-specialty support', 'AI clinical note transcription', 'Patient portal web app', 'Analytics & population health', 'White-label options', 'SOC 2 Type II prep'],
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
                      <strong style={{ color: '#34d399' }}>Important:</strong> Ongoing costs for a telemedicine platform include Twilio Video ($0.004/min per participant — at 10,000 consults/month of average 20 minutes = $1,600/month), DoseSpot e-prescribing ($0.35-$0.75 per prescription), AWS HIPAA infrastructure ($1,500-$5,000/month), and medical malpractice insurance for any employed providers. Factor these into your business model from day one.
                    </p>
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Telemedicine Platform with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    At Codazz, we have built healthcare and regulated-industry applications for clients across North America and the Middle East. HIPAA compliance is not an afterthought we bolt on at the end — it is engineered into the architecture from day one. We have experience with the full healthcare integration stack: FHIR, HL7, EHR APIs, e-prescribing systems, and insurance verification workflows.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Healthcare applications demand a level of reliability and attention to edge cases that goes beyond typical consumer apps. A bug in a ride-sharing app is an inconvenience; a bug in a telemedicine platform can be a patient safety issue. Our QA process for healthcare applications includes clinical workflow validation with actual providers, penetration testing, and HIPAA technical safeguards audit before any production deployment.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{
                        padding: '14px 32px', borderRadius: 100, background: '#22c55e', color: '#000',
                        fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                      }}>
                        Get a Free Consultation
                      </button>
                    </Link>
                    <Link href="/services/ai-ml" style={{ textDecoration: 'none' }}>
                      <button style={{
                        padding: '14px 32px', borderRadius: 100, background: 'rgba(255,255,255,0.03)',
                        color: '#ffffff', fontSize: 14, fontWeight: 700,
                        border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', transition: 'all 0.2s',
                      }}>
                        Explore AI/ML Services
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
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px', background: 'rgba(255,255,255,0.02)',
                            border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', gap: 16, textAlign: 'left',
                          }}
                        >
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"
                            style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                            <polyline points="6 9 12 15 18 9"/>
                          </svg>
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
                  {/* Table of Contents */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map(section => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                        >
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0 }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px', borderRadius: 12,
                          border: '1px solid rgba(255,255,255,0.03)', background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                        >
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
            <div className="reveal" style={{
              background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
              borderRadius: 28, padding: '64px 56px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32,
            }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Get Started</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>
                  Ready to Build Your Telemedicine Platform?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your vision with our healthcare engineering team and receive a detailed technical proposal with HIPAA compliance roadmap within 48 hours. No commitment. Real numbers from engineers who have built regulated healthcare software before.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
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
