'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';

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
  { id: 'healthcare-landscape', label: 'Healthcare Tech in 2026', emoji: '🏥' },
  { id: 'types', label: 'Types of Healthcare Apps', emoji: '📱' },
  { id: 'step-by-step', label: 'Step-by-Step Guide', emoji: '🛠️' },
  { id: 'features', label: 'Must-Have Features', emoji: '✅' },
  { id: 'hipaa', label: 'HIPAA Compliance', emoji: '🔒' },
  { id: 'tech-stack', label: 'Technology Stack', emoji: '⚙️' },
  { id: 'costs', label: 'Costs & Timeline', emoji: '💰' },
  { id: 'mistakes', label: 'Common Mistakes', emoji: '⚠️' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development: Complete Guide', category: 'AI/ML', readTime: '18 min' },
];

export default function HowToBuildHealthcareAppClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="/blog_images/how-to-build-healthcare-app.jpg"
              alt="Healthcare technology and medical app development"
              width={1200}
              height={675}
              priority
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

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Healthcare</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                17 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              How to Build a Healthcare App in 2026: HIPAA Compliant Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              From HIPAA compliance to EHR integration, the complete blueprint for building healthcare applications that pass regulatory scrutiny and improve patient outcomes.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
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
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(180,253,131,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT GRID ── */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* ── MAIN ARTICLE ── */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    Digital health is a $550 billion market growing at 25% annually. The pandemic permanently shifted healthcare online.
                  </p>
                  <p>
                    Telehealth visits remain 38x higher than pre-2020 levels. Patients expect digital-first healthcare experiences. And healthcare organizations are racing to digitize every touchpoint.
                  </p>
                  <p>
                    But healthcare apps are uniquely challenging. A single HIPAA violation can cost up to <strong style={{ color: '#ffffff' }}>$1.9 million per incident</strong>. Get compliance wrong, and you face criminal charges, not just fines.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    This guide covers everything: HIPAA compliance, EHR integration, telemedicine features, and real costs from 35+ healthcare apps we&apos;ve built at Codazz.
                  </p>
                </div>

                {/* Healthcare Landscape */}
                <h2 id="healthcare-landscape" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Healthcare Tech in 2026</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="/blog_images/how-to-build-healthcare-app.jpg"
                    alt="Modern healthcare technology and digital health"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>$550B</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Digital Health Market (2026)</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>350K+</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Health Apps Available</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>76%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Patients Prefer Digital</p>
                  </div>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p><strong style={{ color: '#ffffff' }}>Key healthcare tech trends in 2026:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>AI Diagnostics:</strong> AI-assisted image analysis, symptom checkers, and clinical decision support</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Remote Patient Monitoring (RPM):</strong> Wearable integration, continuous vitals tracking, and automated alerts</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Interoperability (FHIR):</strong> HL7 FHIR standard enabling seamless data exchange between systems</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Mental Health Tech:</strong> CBT apps, AI therapy assistants, and mood tracking with clinical integration</li>
                    <li><strong style={{ color: '#ffffff' }}>Value-Based Care:</strong> Apps focused on outcomes rather than volume of visits</li>
                  </ul>
                </div>

                {/* Types */}
                <h2 id="types" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Types of Healthcare Apps</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Type</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Examples</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>HIPAA Required?</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Cost Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Telehealth</strong></td>
                        <td style={{ padding: '12px 8px' }}>Teladoc, Amwell</td>
                        <td style={{ padding: '12px 8px' }}>Yes</td>
                        <td style={{ padding: '12px 8px' }}>$120K-350K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Patient Portal</strong></td>
                        <td style={{ padding: '12px 8px' }}>MyChart, FollowMyHealth</td>
                        <td style={{ padding: '12px 8px' }}>Yes</td>
                        <td style={{ padding: '12px 8px' }}>$100K-300K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>EHR/EMR</strong></td>
                        <td style={{ padding: '12px 8px' }}>Epic MyChart, Cerner</td>
                        <td style={{ padding: '12px 8px' }}>Yes</td>
                        <td style={{ padding: '12px 8px' }}>$200K-500K+</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Mental Health</strong></td>
                        <td style={{ padding: '12px 8px' }}>BetterHelp, Calm</td>
                        <td style={{ padding: '12px 8px' }}>If handling PHI</td>
                        <td style={{ padding: '12px 8px' }}>$75K-200K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>RPM/Wearables</strong></td>
                        <td style={{ padding: '12px 8px' }}>Livongo, Dexcom</td>
                        <td style={{ padding: '12px 8px' }}>Yes</td>
                        <td style={{ padding: '12px 8px' }}>$150K-400K</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Health & Wellness</strong></td>
                        <td style={{ padding: '12px 8px' }}>MyFitnessPal, Headspace</td>
                        <td style={{ padding: '12px 8px' }}>Usually No</td>
                        <td style={{ padding: '12px 8px' }}>$50K-150K</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Step-by-Step */}
                <h2 id="step-by-step" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step-by-Step: Building a Healthcare App</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="/blog_images/how-to-build-healthcare-app.jpg"
                    alt="Medical professional using technology"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                </div>

                {[
                  { num: 1, title: 'Define Your Healthcare Niche', desc: 'Healthcare is enormous. Trying to build "an app for all healthcare" is how you burn $500K and launch nothing. Find a specific pain point.', detail: 'Talk to 30+ healthcare providers AND patients. Understand their workflows, frustrations, and what existing tools they use. The best healthcare apps solve ONE problem that makes clinicians\' lives measurably easier.' },
                  { num: 2, title: 'Understand HIPAA Requirements', desc: 'If your app handles Protected Health Information (PHI)—names, diagnoses, medications, insurance info—you MUST be HIPAA compliant. No exceptions.', detail: 'HIPAA has three rules: Privacy Rule (who can access PHI), Security Rule (technical safeguards), and Breach Notification Rule (what to do when things go wrong). Violations: $100-$50,000 per incident, up to $1.9M per year per category.' },
                  { num: 3, title: 'Choose Your EHR Integration Strategy', desc: 'Most healthcare apps need to connect to Electronic Health Records (EHR) systems. This is the hardest part of healthcare development.', detail: 'Options: HL7 FHIR APIs (modern, recommended), direct EHR integration (Epic, Cerner, Allscripts), or middleware platforms (Redox, Health Gorilla, Particle Health). FHIR is the future—design for it.' },
                  { num: 4, title: 'Design for Clinical Workflows', desc: 'Healthcare UX is different from consumer UX. Doctors have 7 minutes per patient. Nurses are multitasking. Patients are stressed and confused.', detail: 'Design for speed (minimal clicks), accessibility (large touch targets, high contrast), error prevention (confirmation dialogs for critical actions), and context (show relevant info at the right time). Get clinician feedback weekly.' },
                  { num: 5, title: 'Build HIPAA-Compliant Infrastructure', desc: 'Every layer of your stack must be HIPAA compliant: hosting, database, APIs, storage, and even your email provider.', detail: 'Use HIPAA-eligible cloud services: AWS (with BAA), GCP (with BAA), or Azure (with BAA). Encrypt data at rest (AES-256) and in transit (TLS 1.3). Implement audit logging for every PHI access. Sign Business Associate Agreements (BAAs) with every vendor.' },
                  { num: 6, title: 'Implement Secure Authentication & Access Control', desc: 'Healthcare apps need role-based access control (RBAC). A nurse, doctor, admin, and patient all see different data.', detail: 'Implement MFA for all users, session timeouts (auto-logout after 15 minutes), IP whitelisting for admin access, audit trails for every PHI access, and emergency break-glass procedures for urgent access.' },
                  { num: 7, title: 'Build Telemedicine Features', desc: 'Video visits are now expected in every healthcare app. But healthcare video is different from Zoom—you need HIPAA compliance, clinical tools, and EHR integration.', detail: 'Use HIPAA-compliant video SDKs: Twilio (with BAA), Vonage, or Daily.co. Add clinical tools: screen sharing, annotation, photo capture, and vitals display. Record visits (with consent) for documentation.' },
                  { num: 8, title: 'Integrate Payment & Insurance', desc: 'Healthcare payments are complex: insurance verification, copay collection, claims submission, and billing reconciliation.', detail: 'Use eligibility verification APIs (Eligible, PokitDok) to check insurance in real-time. Implement copay collection via Stripe. For claims, consider clearinghouses like Claim.MD or Change Healthcare.' },
                  { num: 9, title: 'Add Patient Engagement Features', desc: 'The best healthcare apps keep patients engaged between visits. This improves outcomes and reduces no-shows.', detail: 'Build appointment scheduling, medication reminders, secure messaging with providers, health tracking (symptoms, vitals, mood), educational content, and push notifications for care plan adherence.' },
                  { num: 10, title: 'Conduct HIPAA Risk Assessment', desc: 'Before launching, you must complete a formal HIPAA risk assessment. This is legally required—not optional.', detail: 'Document all PHI flows, identify vulnerabilities, assess likelihood and impact of each risk, implement mitigation plans, and document everything. Use frameworks like NIST 800-66 or hire a HIPAA compliance firm ($15K-40K).' },
                  { num: 11, title: 'Perform Clinical Validation & Testing', desc: 'Healthcare apps need more rigorous testing than typical consumer apps. Bugs can literally harm patients.', detail: 'Conduct: usability testing with real clinicians (5-10 providers), clinical accuracy validation, accessibility testing (WCAG 2.1 AA), load testing for concurrent video sessions, and penetration testing. If your app is a medical device, FDA clearance may be required.' },
                  { num: 12, title: 'Launch with a Pilot Program', desc: 'Don\'t do a public launch. Start with one clinic, one hospital department, or one patient population.', detail: 'Run a 4-8 week pilot with 50-200 patients and 5-10 providers. Measure clinical outcomes, user satisfaction, and system reliability. Fix issues before expanding. Get testimonials and case studies for marketing.' },
                ].map((step) => (
                  <div key={step.num} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{
                        minWidth: 40, height: 40, borderRadius: '50%',
                        background: 'rgba(180,253,131,0.15)', border: '1px solid rgba(180,253,131,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16, fontWeight: 700, color: '#b4fd83',
                      }}>{step.num}</div>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{step.title}</h3>
                        <p style={{ fontSize: 15, marginBottom: 8 }}>{step.desc}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{step.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Features */}
                <h2 id="features" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Must-Have Healthcare App Features</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>For Patients</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>Appointment booking & reminders</li>
                      <li style={{ marginBottom: 6 }}>Secure video consultations</li>
                      <li style={{ marginBottom: 6 }}>Medical records access</li>
                      <li style={{ marginBottom: 6 }}>Prescription management & refills</li>
                      <li>Secure messaging with providers</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>For Providers</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>Patient dashboard & charts</li>
                      <li style={{ marginBottom: 6 }}>E-prescribing (EPCS compliant)</li>
                      <li style={{ marginBottom: 6 }}>Clinical notes & documentation</li>
                      <li style={{ marginBottom: 6 }}>Lab results & imaging review</li>
                      <li>Care plan management</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Security & Compliance</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>End-to-end encryption (AES-256)</li>
                      <li style={{ marginBottom: 6 }}>Multi-factor authentication</li>
                      <li style={{ marginBottom: 6 }}>Role-based access control</li>
                      <li style={{ marginBottom: 6 }}>Complete audit trail logging</li>
                      <li>Automatic session timeout</li>
                    </ul>
                  </div>
                </div>

                {/* HIPAA */}
                <h2 id="hipaa" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>HIPAA Compliance Deep Dive</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="/blog_images/how-to-build-healthcare-app.jpg"
                    alt="Data security and HIPAA compliance"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,107,107,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,107,107,0.2)',
                }}>
                  <h3 style={{ color: '#ff6b6b', fontSize: 18, marginBottom: 16, marginTop: 0 }}>HIPAA Technical Safeguards Checklist</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Requirement</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Implementation</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Priority</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>Access Control</strong></td>
                        <td style={{ padding: '12px 8px' }}>Unique user IDs, RBAC, emergency access</td>
                        <td style={{ padding: '12px 8px' }}>Required</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>Audit Controls</strong></td>
                        <td style={{ padding: '12px 8px' }}>Log all PHI access, record who/when/what</td>
                        <td style={{ padding: '12px 8px' }}>Required</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>Data Integrity</strong></td>
                        <td style={{ padding: '12px 8px' }}>Checksums, version control, backup</td>
                        <td style={{ padding: '12px 8px' }}>Required</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>Encryption at Rest</strong></td>
                        <td style={{ padding: '12px 8px' }}>AES-256 for all stored PHI</td>
                        <td style={{ padding: '12px 8px' }}>Addressable*</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>Encryption in Transit</strong></td>
                        <td style={{ padding: '12px 8px' }}>TLS 1.3 for all data transmission</td>
                        <td style={{ padding: '12px 8px' }}>Addressable*</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>Automatic Logoff</strong></td>
                        <td style={{ padding: '12px 8px' }}>Session timeout after inactivity</td>
                        <td style={{ padding: '12px 8px' }}>Addressable*</td>
                      </tr>
                    </tbody>
                  </table>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 12, marginBottom: 0 }}>
                    *&ldquo;Addressable&rdquo; doesn&apos;t mean optional. It means you must implement it OR document why an alternative is equally effective. In practice, always implement these.
                  </p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                    Pro Tip: Sign Business Associate Agreements (BAAs) with EVERY vendor that touches PHI—your cloud provider, email service, analytics tool, error tracking, and even your Slack workspace if you discuss patient cases.
                  </p>
                </div>

                {/* Tech Stack */}
                <h2 id="tech-stack" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Recommended Technology Stack</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Layer</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Technology</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Mobile</strong></td>
                        <td style={{ padding: '12px 8px' }}>React Native or Flutter</td>
                        <td style={{ padding: '12px 8px' }}>Biometric auth, secure storage</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Backend</strong></td>
                        <td style={{ padding: '12px 8px' }}>Node.js / Python / Java</td>
                        <td style={{ padding: '12px 8px' }}>FHIR libraries, strong typing</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Database</strong></td>
                        <td style={{ padding: '12px 8px' }}>PostgreSQL (encrypted)</td>
                        <td style={{ padding: '12px 8px' }}>ACID compliance, encryption at rest</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>EHR Integration</strong></td>
                        <td style={{ padding: '12px 8px' }}>Redox, Health Gorilla</td>
                        <td style={{ padding: '12px 8px' }}>Pre-built EHR connectors</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Video</strong></td>
                        <td style={{ padding: '12px 8px' }}>Twilio (with BAA)</td>
                        <td style={{ padding: '12px 8px' }}>HIPAA-compliant video SDK</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Cloud</strong></td>
                        <td style={{ padding: '12px 8px' }}>AWS (with BAA)</td>
                        <td style={{ padding: '12px 8px' }}>HIPAA-eligible, healthcare focus</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Auth</strong></td>
                        <td style={{ padding: '12px 8px' }}>Auth0 or AWS Cognito</td>
                        <td style={{ padding: '12px 8px' }}>MFA, RBAC, HIPAA compliant</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Monitoring</strong></td>
                        <td style={{ padding: '12px 8px' }}>Datadog (with BAA)</td>
                        <td style={{ padding: '12px 8px' }}>PHI-safe monitoring & alerts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Costs */}
                <h2 id="costs" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Costs & Timeline</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Phase</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Duration</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Research & Compliance Planning</strong></td>
                        <td style={{ padding: '12px 8px' }}>3-4 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$10K-25K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>UI/UX Design (Clinical + Patient)</strong></td>
                        <td style={{ padding: '12px 8px' }}>4-6 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$15K-40K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Core Development</strong></td>
                        <td style={{ padding: '12px 8px' }}>12-20 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$60K-200K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>EHR Integration</strong></td>
                        <td style={{ padding: '12px 8px' }}>4-8 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$20K-60K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>HIPAA Risk Assessment & Pen Testing</strong></td>
                        <td style={{ padding: '12px 8px' }}>3-4 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$15K-40K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Clinical Pilot & QA</strong></td>
                        <td style={{ padding: '12px 8px' }}>4-8 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$10K-30K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 600 }}>
                        <td style={{ padding: '12px 8px', color: '#ffffff' }}>Total (MVP)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>5-8 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>$75K-200K</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px', color: '#ffffff' }}>Total (Full Product)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>8-16 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>$200K-400K+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mistakes */}
                <h2 id="mistakes" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Common Healthcare App Mistakes to Avoid</h2>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Treating HIPAA as an Afterthought:</strong> Building the app first, then &ldquo;adding HIPAA&rdquo; later. This requires a complete rewrite. Design for compliance from Day 1. Cost of retrofit: $100K+.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Using Non-Compliant Tools:</strong> Storing PHI in regular Gmail, using Zoom without BAA, analytics tools that capture PHI. Every vendor must sign a BAA or you&apos;re in violation.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Ignoring Clinical Workflows:</strong> Building what engineers think doctors want, not what doctors actually need. Shadow clinicians for a week before designing anything.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Over-Building EHR Integration:</strong> Trying to integrate with every EHR system at launch. Start with ONE (Epic has 35% market share). Expand after validation.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>No Offline Mode:</strong> Hospital WiFi is notoriously unreliable. Apps that fail without connectivity frustrate clinicians. Build offline-first for critical features.</li>
                    <li><strong style={{ color: '#ff6b6b' }}>Skipping Clinical Validation:</strong> Launching without testing with real clinicians in real clinical settings. Healthcare is life-critical—test exhaustively.</li>
                  </ul>
                </div>

                {/* Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Choose Codazz for Healthcare Development</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>35+ Healthcare Apps Built</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Telehealth platforms, patient portals, RPM systems, and clinical tools. We understand healthcare workflows and regulations.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>HIPAA Compliance Experts</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We design for HIPAA from Day 1. Risk assessments, BAA management, and audit-ready documentation are built into our process.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>EHR Integration Experience</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Deep experience with Epic, Cerner, Allscripts, and FHIR APIs. We know the integration timelines, costs, and gotchas.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Clinical Design Team</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Our designers work directly with clinicians. We test prototypes in clinical settings and iterate based on real provider feedback.</p>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'Does my healthcare app need to be HIPAA compliant?', a: 'If your app creates, stores, transmits, or processes Protected Health Information (PHI)—including patient names, diagnoses, medications, insurance data, or any data that can identify a patient—then yes, HIPAA compliance is legally required. Wellness apps (fitness trackers, meditation) that don\'t handle PHI typically don\'t need HIPAA compliance.' },
                  { q: 'How much does HIPAA compliance add to development costs?', a: 'HIPAA compliance typically adds 20-40% to total development costs. For a $150K project, expect $30K-60K additional for: compliant infrastructure setup, encryption implementation, audit logging, risk assessment, penetration testing, and documentation. Using HIPAA-ready BaaS platforms (like AWS with BAA) reduces this significantly.' },
                  { q: 'Does my app need FDA clearance?', a: 'If your app diagnoses, treats, or prevents disease (a "Software as a Medical Device" or SaMD), it likely needs FDA clearance. Examples: AI diagnostic tools, clinical decision support that overrides clinician judgment. Apps for scheduling, communication, or general wellness typically do NOT need FDA clearance. Consult a regulatory attorney.' },
                  { q: 'How long does EHR integration take?', a: 'Using middleware (Redox, Health Gorilla): 4-8 weeks. Direct Epic integration via App Orchard: 3-6 months (includes Epic review). Direct Cerner integration: 2-4 months. FHIR API (when available): 2-6 weeks. Plan for the longer timeline—EHR vendors move slowly.' },
                  { q: 'Can I use cloud services for storing patient data?', a: 'Yes, but only HIPAA-eligible cloud services with a signed Business Associate Agreement (BAA). AWS, GCP, and Azure all offer HIPAA-eligible services. You must configure them correctly—a BAA alone doesn\'t make your setup compliant. Use encrypted storage, proper access controls, and audit logging.' },
                  { q: 'What happens if my app has a data breach?', a: 'HIPAA Breach Notification Rule requires: Notify affected individuals within 60 days. Notify HHS (Department of Health and Human Services). If 500+ individuals affected, notify media. Penalties: $100-$50,000 per violation, up to $1.9M per year per category. Criminal penalties possible for willful neglect.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)' }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Ready to Build Your Healthcare App?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free consultation with our healthcare development team. We&apos;ll review your concept, map HIPAA requirements, and provide a detailed project estimate.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Get Your Free Healthcare Consultation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  {/* Table of Contents */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '8px 0', fontSize: 14,
                            color: activeSection === section.id ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #b4fd83' : '2px solid transparent',
                            paddingLeft: 12,
                          }}
                        >
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Related Posts */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          style={{
                            display: 'block', padding: 16,
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 12, textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{ fontSize: 11, color: '#b4fd83', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
