'use client';

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
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

const techStack = ['React Native', 'WebRTC', 'Node.js', 'AWS', 'MongoDB', 'HL7 FHIR'];

const metrics = [
  { value: '200K+', label: 'Patient Sessions' },
  { value: '99.97%', label: 'Uptime' },
  { value: '4.8★', label: 'App Rating' },
  { value: '60%', label: 'Faster Consultations' },
];

export default function HealthcareCaseStudyClient() {
  const pageRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#ffffff', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: 'clamp(100px, 12vw, 140px) 0 clamp(40px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="wide" />
          <div className="cb-container">
            <div className="reveal">
              <Breadcrumb items={[
                { label: 'Home', href: '/' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'HIPAA-Compliant Telehealth Platform' },
              ]} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, marginBottom: 16 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#111827',
                padding: '5px 14px', borderRadius: 100,
              }}>Healthcare</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>Healthcare Client &middot; Austin</span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#111827',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              HIPAA-Compliant Telehealth Platform
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              We designed and built a fully compliant telehealth platform that connects patients with specialists through encrypted HD video, integrated EHR workflows, and a seamless mobile experience.
            </p>

            {/* Placeholder image */}
            <div className="reveal reveal-d4" style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(17,24,39,0.08), rgba(0,0,0,0.03))',
              border: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 48,
            }}>
              <span style={{ fontSize: 15, color: 'rgba(0,0,0,0.25)', fontWeight: 500 }}>
                Case Study Visual — Coming Soon
              </span>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW GRID ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 24,
            }}>
              {[
                { title: 'Challenge', text: 'A Austin-based healthcare network needed to rapidly deploy a telehealth solution during COVID-19 while meeting strict HIPAA and CCPA compliance requirements and integrating with existing Electronic Health Record systems.' },
                { title: 'Solution', text: 'Codazz built a cross-platform mobile app with React Native, leveraging WebRTC for encrypted video consultations and HL7 FHIR for seamless EHR integration — delivered in 14 weeks.' },
                { title: 'Results', text: 'The platform has facilitated over 200K patient sessions with 99.97% uptime, earned a 4.8-star app store rating, and reduced average consultation times by 60% compared to in-person visits.' },
              ].map((card) => (
                <div key={card.title} style={{
                  padding: 'clamp(24px, 4vw, 36px)', borderRadius: 24,
                  background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <p style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#111827', marginBottom: 16,
                  }}>{card.title}</p>
                  <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, margin: 0 }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE CHALLENGE ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#111827', marginBottom: 16,
              }}>The Challenge</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Healthcare Delivery in a Post-COVID World</h2>

              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                When the pandemic hit, our client — a multi-location healthcare network in Austin — found themselves scrambling to provide remote care. Their existing workflows were entirely paper-based and in-person. Patients were cancelling appointments, specialists were idle, and the organization was losing revenue while failing to meet patient needs.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                The compliance landscape made this particularly challenging. The platform needed to satisfy HIPAA requirements for Protected Health Information (PHI), align with CCPA for American data privacy, and support end-to-end encryption for all video, audio, and messaging channels. There was zero tolerance for data breaches in this space.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                Additionally, the system had to integrate with their existing EHR — a legacy on-premise system running HL7v2 — so that patient records, prescriptions, and consultation notes flowed seamlessly between the telehealth app and the clinical backend without manual data entry.
              </p>
            </div>
          </div>
        </section>

        {/* ── OUR SOLUTION ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#111827', marginBottom: 16,
              }}>Our Solution</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Secure, Scalable, Patient-First Design</h2>

              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                We built a cross-platform mobile application using React Native, enabling rapid deployment to both iOS and Android from a single codebase. The video consultation engine was powered by WebRTC with SRTP encryption, ensuring that all audio and video streams were encrypted end-to-end — no data ever passed through our servers in an unencrypted state.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                For EHR integration, we built a custom HL7 FHIR adapter that translated between the client&apos;s legacy HL7v2 system and our modern API layer. This allowed patient records, appointment history, and prescription data to sync in real time without disrupting existing clinical workflows. MongoDB served as the primary data store, chosen for its flexible schema to accommodate the diverse document types in healthcare.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                The backend was deployed on AWS with HIPAA-eligible services, including encrypted S3 buckets for document storage, CloudWatch for audit logging, and WAF for threat protection. We implemented role-based access control, session timeouts, and device-level biometric authentication to ensure that only authorized personnel could access patient data.
              </p>

              {/* Tech stack badges */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {techStack.map(tech => (
                  <span key={tech} style={{
                    fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.5)',
                    padding: '10px 20px', border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: 100, background: 'rgba(0,0,0,0.03)',
                  }}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY RESULTS ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <p className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#111827', marginBottom: 16,
            }}>Key Results</p>
            <h2 className="reveal" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
              letterSpacing: '-0.03em', marginBottom: 40,
            }}>Transforming Patient Care at Scale</h2>

            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
              gap: 24,
            }}>
              {metrics.map((m) => (
                <div key={m.label} style={{
                  padding: 'clamp(20px, 4vw, 36px)', borderRadius: 24, textAlign: 'center',
                  background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <div style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 800, color: '#111827', marginBottom: 8 }}>{m.value}</div>
                  <div style={{
                    fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.4)',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              maxWidth: 760,
              padding: 'clamp(24px, 4vw, 48px)', borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(17,24,39,0.06), rgba(0,0,0,0.015))',
              border: '1px solid rgba(17,24,39,0.15)',
              position: 'relative',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 24, opacity: 0.15 }}>
                <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p style={{
                fontSize: 20, color: 'rgba(0,0,0,0.6)', lineHeight: 1.7,
                fontStyle: 'italic', marginBottom: 24,
              }}>
                &ldquo;We went from zero telehealth capability to serving thousands of patients per week in under four months. Codazz understood our compliance constraints from day one and delivered a platform that our clinicians actually enjoy using. The EHR integration alone saved us hundreds of hours of manual data entry.&rdquo;
              </p>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: '0 0 4px' }}>Chief Medical Officer</p>
                <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', margin: 0 }}>Leading Austin Healthcare Network</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ paddingBottom: 'clamp(60px, 10vw, 120px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              background: 'rgba(17,24,39,0.04)', border: '1px solid rgba(17,24,39,0.15)',
              borderRadius: 28, padding: 'clamp(32px, 6vw, 64px) clamp(20px, 4vw, 56px)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 32,
            }}>
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#111827', marginBottom: 12,
                }}>Start a Similar Project</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Building a Healthcare Platform?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  We specialize in HIPAA-compliant, patient-first digital health solutions. Let&apos;s discuss how we can help transform your healthcare delivery.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#111827', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get in Touch →
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
