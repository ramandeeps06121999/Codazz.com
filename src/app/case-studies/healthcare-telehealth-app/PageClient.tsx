'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
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

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.2)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(255,255,255,0.06)',
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

export default function HealthcareTelehealthPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLDivElement>;
  const s2 = useReveal() as React.RefObject<HTMLDivElement>;
  const s3 = useReveal() as React.RefObject<HTMLDivElement>;
  const s4 = useReveal() as React.RefObject<HTMLDivElement>;
  const s5 = useReveal() as React.RefObject<HTMLDivElement>;
  const s6 = useReveal() as React.RefObject<HTMLDivElement>;
  const s7 = useReveal() as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'Healthcare Telehealth App' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Healthcare &bull; Case Study
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Building a HIPAA-Compliant Telehealth Platform for{' '}
              <span style={{ color: '#22c55e' }}>50K+ Patients</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 700, margin: '0 auto 2.5rem' }}>
              A fully compliant telehealth platform with HD video consultations, e-prescriptions, EHR integration, and automated appointment management.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))', gap: '1.5rem', maxWidth: 700, margin: '0 auto' }}>
              {[
                ['50K+', 'Patients Served'],
                ['HIPAA', 'Certified'],
                ['40%', 'Fewer No-Shows'],
                ['4.8\u2605', 'App Store Rating'],
              ].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT CHALLENGE */}
        <section ref={s1} className="section-padding">
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>The Challenge</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
                A Regional Health Network Needed to Go Digital
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Our client, a multi-location healthcare provider in the Midwest, was losing patients to telehealth competitors. Their legacy scheduling system generated a 35% no-show rate. They needed a HIPAA-compliant virtual care platform that integrated with their existing Epic EHR — without disrupting clinical workflows.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '\uD83C\uDFE5', title: '35% No-Show Rate', desc: 'Appointment no-shows were costing the practice $2M+ annually in lost revenue.' },
                { icon: '\uD83D\uDD12', title: 'HIPAA Compliance Required', desc: 'All video, messaging, and data storage needed full HIPAA compliance with BAA coverage.' },
                { icon: '\uD83D\uDD17', title: 'EHR Integration', desc: 'Seamless bi-directional integration with Epic EHR for patient records, scheduling, and billing.' },
              ].map(c => (
                <Card key={c.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{c.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem' }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* OUR SOLUTION */}
        <section ref={s2} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Solution</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
                A Complete Telehealth Platform — Built for Clinicians and Patients
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We designed and built a cross-platform mobile app and provider dashboard with HD video consultations, automated reminders, e-prescriptions via Surescripts, and deep EHR integration — all within a HIPAA-compliant infrastructure.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '\uD83D\uDCF9', title: 'HD Video Consultations', desc: 'WebRTC-powered video with adaptive bitrate, screen sharing, and HIPAA-compliant recording with patient consent management.' },
                { icon: '\uD83D\uDCCB', title: 'Smart Scheduling & Reminders', desc: 'AI-optimized scheduling with automated SMS/email reminders at 48hr, 24hr, and 1hr intervals, reducing no-shows by 40%.' },
                { icon: '\uD83D\uDC8A', title: 'E-Prescriptions', desc: 'Integrated Surescripts EPCS for electronic prescribing including controlled substances, with pharmacy network lookup.' },
                { icon: '\uD83D\uDD04', title: 'Epic EHR Integration', desc: 'HL7 FHIR R4 bi-directional integration for patient records, visit notes, lab results, and automated billing via HL7v2 ADT messages.' },
              ].map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem' }}>{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={s3} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Technology</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Tech Stack</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {[
                { cat: 'Frontend', items: ['React Native', 'TypeScript', 'React (Provider Portal)', 'TailwindCSS'] },
                { cat: 'Backend', items: ['Node.js', 'Express', 'GraphQL', 'Bull Queue'] },
                { cat: 'Video & Comms', items: ['WebRTC', 'Twilio Video', 'Twilio SMS', 'SendGrid'] },
                { cat: 'Healthcare', items: ['HL7 FHIR R4', 'Surescripts EPCS', 'ICD-10', 'CPT Codes'] },
                { cat: 'Database', items: ['PostgreSQL', 'Redis', 'S3 (encrypted)', 'Elasticsearch'] },
                { cat: 'Infrastructure', items: ['AWS HIPAA', 'ECS Fargate', 'CloudWatch', 'WAF'] },
              ].map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '4px 12px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <section ref={s4} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Process</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Development Timeline</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>7 months from discovery to HIPAA-certified production launch.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gap: '1rem' }}>
              {[
                { phase: 'Weeks 1-3', title: 'Clinical Discovery & Compliance Planning', desc: 'Shadowed clinicians, mapped patient journeys, identified HIPAA requirements, designed HL7 FHIR integration architecture.' },
                { phase: 'Weeks 4-10', title: 'Core Platform & Video Engine', desc: 'Built WebRTC video infrastructure, patient/provider portals, scheduling engine, and notification system.' },
                { phase: 'Weeks 11-18', title: 'EHR Integration & E-Prescriptions', desc: 'Implemented HL7 FHIR R4 interface with Epic, Surescripts e-prescribing, lab result viewer, and clinical note templates.' },
                { phase: 'Weeks 19-24', title: 'HIPAA Compliance & Security Audit', desc: 'Penetration testing, HIPAA risk assessment, BAA execution with all vendors, encryption audit, and access control review.' },
                { phase: 'Weeks 25-28', title: 'Pilot Launch & Iteration', desc: 'Soft launch with 3 clinic locations, clinician training, patient onboarding flow optimization, and bug resolution.' },
              ].map((p, i) => (
                <div key={p.phase} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 48, height: 48, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, color: '#22c55e', flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div style={{ paddingBottom: '1.5rem', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none', flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', color: '#22c55e', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{p.phase}</div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section ref={s5} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Results</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Measurable Impact</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>Within 4 months of launch, the platform transformed patient engagement and clinic revenue.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                { value: '50K+', label: 'Patients Onboarded', before: 'In-person only previously' },
                { value: 'HIPAA', label: 'Fully Certified', before: 'Independent third-party audit' },
                { value: '40%', label: 'Reduction in No-Shows', before: '35% no-show rate before' },
                { value: '4.8\u2605', label: 'App Store Rating', before: '2,400+ patient reviews' },
                { value: '$1.2M', label: 'Annual Revenue Recovered', before: 'From reduced no-shows alone' },
                { value: '92%', label: 'Patient Satisfaction', before: 'Post-visit survey score' },
              ].map(r => (
                <Card key={r.label}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#22c55e', marginBottom: '0.25rem' }}>{r.value}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem' }}>{r.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>{r.before}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section ref={s6} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="reveal" style={{ border: '1px solid rgba(34,197,94,0.15)', borderRadius: 32, background: 'rgba(34,197,94,0.03)', padding: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center' }}>
              <blockquote style={{ margin: 0 }}>
                <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  &ldquo;Our clinicians were skeptical about telehealth. Within 3 months, it became their preferred workflow. Codazz understood healthcare — the compliance, the integrations, and most importantly, the patient experience.&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>Chief Medical Officer</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)' }}>Regional Healthcare Network, Midwest US</div>
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        {/* RELATED CASE STUDIES */}
        <section ref={s7} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>Related Case Studies</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'FinTech Trading Platform', industry: 'FinTech', metric: '100K+ Active Users', href: '/case-studies/fintech-trading-platform' },
                { title: 'E-Commerce Marketplace', industry: 'E-Commerce', metric: '340% Conversion Lift', href: '/case-studies/ecommerce-marketplace' },
              ].map(r => (
                <Link
                  key={r.href}
                  href={r.href}
                  style={{
                    display: 'block',
                    padding: '2rem',
                    borderRadius: 24,
                    background: 'rgba(255,255,255,0.015)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#22c55e', letterSpacing: '0.05em' }}>{r.industry}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0.5rem 0' }}>{r.title}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>{r.metric}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Build Your <span style={{ color: '#22c55e' }}>Healthcare Platform.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                HIPAA-compliant, EHR-integrated, and built for real clinical workflows. Let&apos;s talk.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Start Your Project
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  More Case Studies
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['HIPAA Compliant', 'NDA on Day 1', 'SOC II Certified', '24hr Response'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)' }}>{'\u2713'} {t}</span>
                ))}
              </div>
              <TrustBadges compact />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
