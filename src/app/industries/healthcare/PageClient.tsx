'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';
import { FloatingIconsBackground } from '@/components/FloatingIconsBackground';
import {
  IconReact, IconNextJS, IconNodeJS, IconPython, IconAWS,
  IconDocker, IconKubernetes, IconTypeScript, IconGraphQL,
  IconPostgreSQL, IconMongoDB, IconTensorFlow, IconGitHub, IconFigma, IconVSCode
} from '@/components/tech-icons';

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
  border: '1px solid rgba(0,0,0,0.06)',
  borderRadius: 24,
  background: 'rgba(0,0,0,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(17,24,39,0.2)',
  background: 'rgba(17,24,39,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(0,0,0,0.06)',
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

// Floating Icons Configuration
const floatingIcons = [
  { id: 1, icon: IconReact, className: 'top-[10%] left-[5%]' },
  { id: 2, icon: IconNextJS, className: 'top-[15%] right-[8%]' },
  { id: 3, icon: IconNodeJS, className: 'top-[60%] left-[3%]' },
  { id: 4, icon: IconPython, className: 'bottom-[20%] right-[5%]' },
  { id: 5, icon: IconAWS, className: 'top-[5%] left-[25%]' },
  { id: 6, icon: IconDocker, className: 'top-[70%] right-[15%]' },
  { id: 7, icon: IconKubernetes, className: 'bottom-[15%] left-[20%]' },
  { id: 8, icon: IconTypeScript, className: 'top-[40%] left-[8%]' },
  { id: 9, icon: IconGraphQL, className: 'top-[80%] right-[25%]' },
  { id: 10, icon: IconPostgreSQL, className: 'top-[25%] right-[5%]' },
  { id: 11, icon: IconMongoDB, className: 'top-[50%] left-[2%]' },
  { id: 12, icon: IconTensorFlow, className: 'bottom-[25%] right-[10%]' },
  { id: 13, icon: IconGitHub, className: 'top-[35%] right-[12%]' },
  { id: 14, icon: IconFigma, className: 'bottom-[10%] left-[10%]' },
  { id: 15, icon: IconVSCode, className: 'top-[5%] left-[50%]' },
];

export default function HealthcarePage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;

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
            { label: 'Industries', href: '/services' },
            { label: 'Healthcare' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <FloatingIconsBackground icons={floatingIcons} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(17,24,39,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#111827', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Healthcare Technology
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              We Build HealthTech That <span style={{ color: '#111827' }}>Saves Lives.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgb(0,0,0)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              HIPAA-compliant telehealth platforms, EHR integrations, and clinical AI tools trusted by healthcare providers.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#111827', color: '#fff', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Start Your Project
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(0,0,0,0.1)', color: '#111827', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[['100K+', 'Patients Served'], ['HIPAA', 'Compliant'], ['HL7/FHIR', 'Certified']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#111827' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Key Challenges We Solve</h2>
              <p style={{ color: 'rgb(0,0,0)', fontSize: '1.1rem' }}>Healthcare demands trust. We engineer systems that earn it.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🏥', title: 'HIPAA Compliance', desc: 'Building PHI-safe systems with end-to-end encryption, audit logs, and access controls that satisfy compliance officers and protect patients.' },
                { icon: '🔗', title: 'EHR Integration', desc: 'Connecting seamlessly with Epic, Cerner, and Allscripts using HL7 FHIR standards so clinical data flows where it needs to go.' },
                { icon: '❤️', title: 'Patient Experience', desc: 'Designing interfaces that reduce cognitive load for patients and clinicians alike — intuitive, accessible, and built for real-world use.' },
              ].map(c => (
                <Card key={c.title}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                  <p style={{ color: 'rgb(0,0,0)', lineHeight: 1.7, fontSize: '0.95rem' }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Our Solutions</h2>
              <p style={{ color: 'rgb(0,0,0)', fontSize: '1.1rem' }}>Clinical-grade software from consultation to care delivery.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🩺', title: 'Telehealth & Remote Care', desc: 'WebRTC-powered HIPAA video consultations, encrypted patient records, e-prescribing, and remote monitoring dashboards for modern care delivery.' },
                { icon: '🧠', title: 'Clinical AI & Diagnostics', desc: 'FDA-validated ML models for imaging analysis, predictive care pathways, NLP-powered clinical documentation, and sepsis early-warning systems.' },
                { icon: '🔗', title: 'EHR/EMR Integration', desc: 'Seamless HL7 FHIR connections to Epic, Cerner, and Allscripts that unify patient data across your entire care network.' },
                { icon: '🧑‍⚕️', title: 'Patient Portals', desc: 'Secure, mobile-first portals for appointment scheduling, lab results, messaging, and medication management that improve patient engagement.' },
                { icon: '📡', title: 'Medical Devices & IoT', desc: 'FDA-compliant integrations with wearables, remote monitoring devices, and clinical sensors that stream real-time vitals to care teams.' },
                { icon: '📊', title: 'Healthcare Analytics', desc: 'Population health dashboards, clinical outcome tracking, and predictive models that help providers deliver better care at lower cost.' },
              ].map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgb(0,0,0)', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ border: '1px solid rgba(17,24,39,0.15)', borderRadius: 32, background: 'rgba(17,24,39,0.03)', padding: 'clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Healthcare Client</div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>100K+ patients, 99.9% uptime, HIPAA audit passed</h3>
                <p style={{ color: 'rgb(0,0,0)', lineHeight: 1.7 }}>We built their HIPAA-compliant telehealth platform from scratch — HL7 FHIR APIs, WebRTC video, and a full EHR integration suite.</p>
              </div>
              <div>
                <blockquote style={{ borderLeft: '3px solid #111827', paddingLeft: '1.5rem', margin: 0 }}>
                  <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(0,0,0,0.65)', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "The Codazz team understood healthcare compliance from day one. Zero audit findings."
                  </p>
                  <cite style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.25)', fontStyle: 'normal' }}>— Chief Medical Officer, National Healthcare Provider</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={s4} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Tech Stack</h2>
              <p style={{ color: 'rgb(0,0,0)', fontSize: '1.1rem' }}>Standards-compliant technologies built for clinical environments.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                { cat: 'Standards', items: ['HL7 FHIR', 'DICOM', 'ICD-10', 'SNOMED'] },
                { cat: 'Infrastructure', items: ['AWS HIPAA', 'Azure Health', 'Google HCLS'] },
                { cat: 'AI', items: ['TensorFlow Medical', 'MONAI', 'FDA-validated'] },
                { cat: 'Integration', items: ['Epic', 'Cerner', 'Allscripts APIs'] },
              ].map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(0,0,0,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: '4px 12px', fontSize: '0.85rem', color: 'rgba(0,0,0,0.65)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CODAZZ */}
        <section ref={s5} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Codazz</h2>
              <p style={{ color: 'rgb(0,0,0)', fontSize: '1.1rem' }}>Healthcare is too important to get wrong. We get it right.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🔐', title: 'HIPAA Expertise', desc: 'BAA-ready from day one. Our engineers are trained in HIPAA Security Rule requirements and build PHI protection into every layer.' },
                { icon: '🩺', title: 'Clinical Domain Knowledge', desc: 'We have worked directly with clinicians, nurses, and health system CIOs. We understand workflows that save time and reduce errors.' },
                { icon: '✅', title: 'Audit-Ready Code', desc: 'Comprehensive audit logs, access controls, and documentation that makes your compliance team smile during annual reviews.' },
              ].map(w => (
                <Card key={w.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{w.title}</h3>
                  <p style={{ color: 'rgb(0,0,0)', lineHeight: 1.7, fontSize: '0.95rem' }}>{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Services for Healthcare
            </h2>
            <div className="industry-services-grid" style={{ display: 'grid', gap: 16 }}>
              {[
                { name: 'Web Development', href: '/services/web-development', desc: 'HIPAA-compliant patient portals and provider dashboards with secure data handling.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Telehealth apps and patient engagement tools with EHR integration and push notifications.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Clinical decision support, diagnostic imaging AI and predictive care pathway models.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'HIPAA-ready cloud infrastructure on AWS and Azure with audit logging and encryption.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant health platforms with subscription billing and role-based access control.' },
              ].map((s) => (
                <a key={s.href} href={s.href} style={{
                  display: 'block', padding: '24px', borderRadius: 16,
                  background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 6 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', lineHeight: 1.5 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s6} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Build Your <span style={{ color: '#111827' }}>Healthcare Platform.</span>
              </h2>
              <p style={{ color: 'rgb(0,0,0)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                HIPAA-compliant, audit-ready, clinician-approved. Let's build it together.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#111827', color: '#fff', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Start Your Project
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(0,0,0,0.1)', color: '#111827', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['HIPAA Compliant', 'BAA Ready', 'HL7 FHIR Certified', 'NDA on Request'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: '#111827', fontWeight: 600 }}>✓ {t}</span>
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
