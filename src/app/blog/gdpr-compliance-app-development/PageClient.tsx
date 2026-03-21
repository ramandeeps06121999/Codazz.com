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
  { id: 'gdpr-basics', label: 'GDPR Basics & Scope', emoji: '📋' },
  { id: 'data-subject-rights', label: '8 Data Subject Rights', emoji: '👤' },
  { id: 'legal-bases', label: 'Legal Bases for Processing', emoji: '⚖️' },
  { id: 'cookie-consent', label: 'Cookie Consent & IAB TCF', emoji: '🍪' },
  { id: 'privacy-by-design', label: 'Privacy by Design', emoji: '🏗️' },
  { id: 'data-retention', label: 'Data Retention & Auto-Deletion', emoji: '🗓️' },
  { id: 'dpa-agreements', label: 'DPA Agreements with Vendors', emoji: '📝' },
  { id: 'breach-notification', label: 'Breach Notification (72-Hour Rule)', emoji: '🚨' },
  { id: 'mobile-gdpr', label: 'Mobile-Specific GDPR', emoji: '📱' },
  { id: 'ccpa-vs-gdpr', label: 'CCPA vs GDPR Comparison', emoji: '🌍' },
  { id: 'consent-platforms', label: 'Consent Management Platforms', emoji: '🛠️' },
  { id: 'fines', label: 'Notable GDPR Fines', emoji: '💸' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'app-security-best-practices-2026', title: 'App Security Best Practices 2026: OWASP Top 10', category: 'Security', readTime: '17 min' },
  { slug: 'how-to-build-fintech-app', title: 'How to Build a Fintech App in 2026', category: 'Fintech', readTime: '16 min' },
  { slug: 'how-to-build-healthcare-app', title: 'How to Build a Healthcare App in 2026', category: 'Healthcare', readTime: '15 min' },
];

export default function GDPRCompliancePageClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              src="/blog_images/gdpr-compliance-app-development.jpg"
              alt="GDPR compliance for app development — privacy shield and data protection icons"
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
                background: 'rgba(34,197,94,0.12)', color: '#22c55e',
                padding: '5px 14px', borderRadius: 100,
              }}>Compliance</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
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
                14 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              GDPR Compliance for App Development 2026: Complete Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              GDPR fines hit &euro;4.5 billion cumulatively by 2025. If your app has a single EU user, you are subject to the world&apos;s strictest data privacy law. This guide covers every technical and legal requirement &mdash; from cookie banners to breach notifications &mdash; so you can build compliantly from day one.
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
                  background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#22c55e',
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
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.6)',
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
                    The General Data Protection Regulation is not a checkbox exercise &mdash; it is a fundamental shift in how software is architected, built, and operated. Enforcement data shows regulators are increasingly targeting technology companies, and the average fine per major violation has grown year-over-year since 2018.
                  </p>
                  <p>
                    Whether you are building a consumer mobile app, a B2B SaaS platform, or an internal enterprise tool, if any user resides in the European Economic Area (EEA), GDPR applies to you &mdash; regardless of where your company is registered. That includes companies in Canada, the USA, India, and Australia.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we integrate GDPR requirements into our architecture and sprint planning from day one &mdash; not as an afterthought before launch.
                  </p>
                </div>

                {/* ── GDPR BASICS ── */}
                <h2 id="gdpr-basics" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>GDPR Basics: Who It Applies to &amp; Key Principles</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  GDPR entered into force on 25 May 2018 and replaced the 1995 Data Protection Directive. It applies in two scenarios: you are established in the EU/EEA, or you offer goods/services to, or monitor the behaviour of, EU/EEA residents. The second criterion &mdash; known as the <strong style={{ color: '#22c55e' }}>extraterritorial scope</strong> under Article 3(2) &mdash; is what catches most global startups off guard.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.05)', borderRadius: 28, padding: 28,
                  border: '1px solid rgba(34,197,94,0.15)', marginBottom: 32,
                }}>
                  <h3 style={{ color: '#22c55e', fontSize: 17, fontWeight: 700, marginBottom: 16, marginTop: 0 }}>The 7 GDPR Principles (Article 5)</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
                    {[
                      { num: '1', name: 'Lawfulness, Fairness & Transparency', desc: 'Processing must have a legal basis; users must know what you do with their data.' },
                      { num: '2', name: 'Purpose Limitation', desc: 'Collect data for specific, explicit, legitimate purposes. Do not reuse it for incompatible purposes.' },
                      { num: '3', name: 'Data Minimisation', desc: 'Collect only what is adequate, relevant, and limited to what is necessary.' },
                      { num: '4', name: 'Accuracy', desc: 'Keep personal data accurate and up to date; erase or correct inaccurate data without delay.' },
                      { num: '5', name: 'Storage Limitation', desc: 'Keep data in identifiable form only as long as necessary for its purpose.' },
                      { num: '6', name: 'Integrity & Confidentiality', desc: 'Appropriate security against unauthorised access, accidental loss, destruction, or damage.' },
                      { num: '7', name: 'Accountability', desc: 'The controller is responsible for and must be able to demonstrate compliance.' },
                    ].map((p, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: 12, background: 'rgba(0,0,0,0.3)',
                        borderRadius: 16, padding: 16,
                      }}>
                        <div style={{
                          flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
                          background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 13, fontWeight: 800, color: '#22c55e',
                        }}>{p.num}</div>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{p.name}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(239,68,68,0.07)', borderRadius: 16, padding: 20, marginBottom: 32,
                  border: '1px solid rgba(239,68,68,0.2)',
                }}>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>
                    <strong style={{ color: '#ef4444' }}>Territorial scope trap:</strong> If your React app uses Google Analytics without consent for a visitor from Germany, you are processing personal data of an EU resident without a legal basis &mdash; a GDPR violation &mdash; even if your servers are in Canada.
                  </p>
                </div>

                {/* ── DATA SUBJECT RIGHTS ── */}
                <h2 id="data-subject-rights" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>8 Data Subject Rights &amp; How to Implement Them</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  GDPR grants individuals eight enforceable rights over their personal data. You must be able to respond to requests within <strong style={{ color: '#22c55e' }}>30 days</strong> (extendable to 3 months for complex requests). Here is what each right means technically and how to implement it:
                </p>

                {[
                  {
                    num: '01', right: 'Right of Access (Article 15)', color: '#22c55e',
                    what: 'Users can request a copy of all personal data you hold about them and information about how it is processed.',
                    how: 'Build a &ldquo;Download My Data&rdquo; feature that exports all user records across your database tables, logs, and third-party integrations into a structured JSON or CSV file. Maintain a data map so you know where every field lives.',
                  },
                  {
                    num: '02', right: 'Right to Erasure / Right to be Forgotten (Article 17)', color: '#8b5cf6',
                    what: 'Users can request deletion of their data when it is no longer necessary, consent is withdrawn, or they object to processing.',
                    how: 'Implement a soft-delete system first (flag as deleted, stop processing), then a hard-delete job that runs on a schedule. Document any data you are legally required to retain (e.g., invoices for 7 years) and explain this in your privacy policy. Propagate deletion requests to all sub-processors within 30 days.',
                  },
                  {
                    num: '03', right: 'Right to Rectification (Article 16)', color: '#f97316',
                    what: 'Users can correct inaccurate personal data held about them.',
                    how: 'Provide an in-app profile editor for self-service corrections. For data users cannot edit themselves (e.g., transaction records), provide a support flow with identity verification. Log all corrections with timestamps.',
                  },
                  {
                    num: '04', right: 'Right to Data Portability (Article 20)', color: '#06b6d4',
                    what: 'Users can receive their data in a machine-readable format and transfer it to another service.',
                    how: 'Export data as JSON, CSV, or XML &mdash; not proprietary formats. Your API should include a /users/me/export endpoint. For health or financial apps, consider FHIR or OFX formats for interoperability.',
                  },
                  {
                    num: '05', right: 'Right to Object (Article 21)', color: '#eab308',
                    what: 'Users can object to processing for direct marketing, profiling, or legitimate interest purposes.',
                    how: 'Include opt-out controls in notification settings and marketing preferences. When a user opts out of marketing, immediately suppress them in your email platform (Mailchimp, SendGrid) and ad platforms. Legitimate interest objections must be honoured unless you can demonstrate compelling grounds.',
                  },
                  {
                    num: '06', right: 'Right to Restrict Processing (Article 18)', color: '#ec4899',
                    what: 'Users can request that processing is paused &mdash; data is retained but not actively used &mdash; while a dispute is resolved.',
                    how: 'Implement a processing_restricted boolean flag at the user level. Your application logic must check this flag before any processing operations (analytics, profiling, personalisation). Consider a separate restricted_users table for clarity.',
                  },
                  {
                    num: '07', right: 'Rights Related to Automated Decision-Making (Article 22)', color: '#ef4444',
                    what: 'Users have the right not to be subject to decisions made solely by automated processing that significantly affect them (e.g., credit decisions, hiring algorithms).',
                    how: 'If you use ML models for consequential decisions, document the logic, provide a human review process, and inform users that automated processing is taking place. Never use fully automated processing for high-stakes decisions without human oversight.',
                  },
                  {
                    num: '08', right: 'Right to Withdraw Consent (Article 7(3))', color: '#22c55e',
                    what: 'Withdrawing consent must be as easy as giving it, and withdrawal must not retroactively affect the lawfulness of prior processing.',
                    how: 'Your consent UX must have a clearly visible withdrawal mechanism on the same screen or within one click of where consent was granted. Update your consent records database immediately on withdrawal and stop all consent-dependent processing.',
                  },
                ].map((item, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 24,
                    border: '1px solid rgba(255,255,255,0.05)', marginBottom: 16,
                  }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{
                        flexShrink: 0, width: 44, height: 44, borderRadius: 12,
                        background: `${item.color}15`, border: `1px solid ${item.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 800, color: item.color,
                      }}>{item.num}</div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.right}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '0 0 10px', lineHeight: 1.6 }}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>What it means:</strong> {item.what}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: `<strong style="color:${item.color}">How to implement:</strong> ${item.how}` }} />
                      </div>
                    </div>
                  </div>
                ))}

                {/* ── LEGAL BASES ── */}
                <h2 id="legal-bases" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Legal Bases for Processing Personal Data</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Every single act of processing personal data must rest on one of six legal bases defined in Article 6. Choosing the wrong one is a common compliance mistake &mdash; particularly relying on consent when legitimate interest or contract would be more appropriate (and more stable legally).
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 32 }}>
                  {[
                    {
                      basis: 'Consent', article: 'Art. 6(1)(a)', color: '#22c55e', strength: 'Flexible but fragile',
                      use: 'Marketing emails, optional cookies, newsletters, personalised ads.',
                      note: 'Must be freely given, specific, informed, and unambiguous. Silence or pre-ticked boxes do not count. Can be withdrawn at any time.',
                    },
                    {
                      basis: 'Contract', article: 'Art. 6(1)(b)', color: '#06b6d4', strength: 'Strong for core features',
                      use: 'Processing payment details, shipping addresses, account credentials &mdash; any data necessary to deliver your service.',
                      note: 'Only covers data strictly necessary for the contract. You cannot use &ldquo;contract&rdquo; as a basis for marketing or analytics.',
                    },
                    {
                      basis: 'Legal Obligation', article: 'Art. 6(1)(c)', color: '#f97316', strength: 'Mandatory retention',
                      use: 'Tax records, KYC for fintech, mandatory fraud reporting, employment records.',
                      note: 'The law requires you to keep this data. Users cannot request erasure for data held under legal obligation.',
                    },
                    {
                      basis: 'Vital Interests', article: 'Art. 6(1)(d)', color: '#ec4899', strength: 'Emergency use only',
                      use: 'Sharing location data with emergency services, disclosing health data in a life-threatening situation.',
                      note: 'Only a last resort when the data subject is incapable of giving consent and another basis is unavailable.',
                    },
                    {
                      basis: 'Public Task', article: 'Art. 6(1)(e)', color: '#8b5cf6', strength: 'Government/research',
                      use: 'Public sector bodies, official authorities, research institutions exercising official functions.',
                      note: 'Rarely applies to private companies unless carrying out a task clearly in the public interest.',
                    },
                    {
                      basis: 'Legitimate Interest', article: 'Art. 6(1)(f)', color: '#eab308', strength: 'Powerful but tested',
                      use: 'Fraud prevention, network security, direct marketing to existing customers, improving your own service.',
                      note: 'Requires a Legitimate Interest Assessment (LIA) &mdash; a three-part test balancing your interest against the individual\'s rights. Cannot override consent where consent is required.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: `${item.color}08`, borderRadius: 28, padding: 20,
                      border: `1px solid ${item.color}22`,
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                        <h4 style={{ color: item.color, margin: 0, fontSize: 16, fontWeight: 700 }}>{item.basis}</h4>
                        <span style={{ fontSize: 10, color: item.color, background: `${item.color}18`, padding: '3px 8px', borderRadius: 100, fontWeight: 600, whiteSpace: 'nowrap' }}>{item.article}</span>
                      </div>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', margin: '0 0 8px', fontStyle: 'italic' }}>{item.strength}</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: '0 0 8px', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: `<strong style="color:rgba(255,255,255,0.9)">When to use:</strong> ${item.use}` }} />
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.note }} />
                    </div>
                  ))}
                </div>

                <div className="reveal" style={{
                  background: 'rgba(234,179,8,0.07)', borderRadius: 16, padding: 20, marginBottom: 32,
                  border: '1px solid rgba(234,179,8,0.2)',
                }}>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>
                    <strong style={{ color: '#eab308' }}>Common mistake:</strong> Using &ldquo;consent&rdquo; as a legal basis for all processing. If a user withdraws consent, you must stop all processing dependent on it &mdash; including analytics and session tracking. For core app functionality, &ldquo;contract&rdquo; is a more stable legal basis.
                  </p>
                </div>

                {/* ── COOKIE CONSENT ── */}
                <h2 id="cookie-consent" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Cookie Consent: Implementation, Banner Design &amp; IAB TCF</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Cookie consent is governed by GDPR (for personal data) and the ePrivacy Directive (for accessing/storing data on a device). Non-essential cookies &mdash; analytics, advertising, personalisation &mdash; require explicit opt-in consent before being set. Here is how to implement it correctly.
                </p>

                <div className="reveal" style={{ marginBottom: 28 }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Cookie Categories</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
                    {[
                      { cat: 'Strictly Necessary', color: '#22c55e', consent: 'No consent required', examples: 'Session cookies, CSRF tokens, load balancer cookies, user authentication' },
                      { cat: 'Functional / Preferences', color: '#06b6d4', consent: 'Consent required', examples: 'Language preferences, region settings, saved form data, chat widgets' },
                      { cat: 'Analytics / Performance', color: '#f97316', consent: 'Consent required', examples: 'Google Analytics, Mixpanel, Hotjar, Segment, PostHog' },
                      { cat: 'Marketing / Advertising', color: '#ef4444', consent: 'Consent required', examples: 'Facebook Pixel, Google Ads, LinkedIn Insight, retargeting pixels' },
                    ].map((c, i) => (
                      <div key={i} style={{
                        background: `${c.color}08`, borderRadius: 16, padding: 16,
                        border: `1px solid ${c.color}25`,
                      }}>
                        <h4 style={{ color: c.color, margin: '0 0 6px', fontSize: 14, fontWeight: 700 }}>{c.cat}</h4>
                        <p style={{ fontSize: 11, color: c.consent === 'No consent required' ? '#22c55e' : '#ef4444', margin: '0 0 8px', fontWeight: 600 }}>{c.consent}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.5 }}>{c.examples}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 28 }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Consent Banner Design Requirements</h3>
                  <p style={{ marginBottom: 16 }}>
                    Regulators have issued guidance on what constitutes valid consent through a cookie banner. Misleading dark patterns &mdash; like hiding the &ldquo;Reject All&rdquo; button or making acceptance easier than rejection &mdash; have been fined extensively (French CNIL fined Google &euro;150M and Facebook &euro;60M in 2022 for exactly this).
                  </p>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 460 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '10px 12px', color: '#ffffff', fontSize: 13 }}>Requirement</th>
                          <th style={{ textAlign: 'left', padding: '10px 12px', color: '#22c55e', fontSize: 13 }}>Valid</th>
                          <th style={{ textAlign: 'left', padding: '10px 12px', color: '#ef4444', fontSize: 13 }}>Invalid (Dark Pattern)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Accept / Reject buttons', '"Accept All" and "Reject All" at same prominence', '"Accept All" button, reject buried in settings link'],
                          ['Pre-selection', 'All non-essential cookies unchecked by default', 'Analytics cookies pre-ticked'],
                          ['Colour/contrast', 'Both buttons same style and colour', 'Accept in green, reject greyed out'],
                          ['Withdrawal', 'Persistent "Manage Cookies" link in footer', 'No way to change preferences after initial choice'],
                          ['Information', 'Plain-language description of each cookie category', 'Vague "improve your experience" language only'],
                          ['Granularity', 'Separate toggles per cookie category', 'Single accept-all only option'],
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '10px 12px', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{row[0]}</td>
                            <td style={{ padding: '10px 12px', fontSize: 13, color: '#22c55e' }}>{row[1]}</td>
                            <td style={{ padding: '10px 12px', fontSize: 13, color: '#ef4444' }}>{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.05)', borderRadius: 28, padding: 24,
                  border: '1px solid rgba(34,197,94,0.15)', marginBottom: 32,
                }}>
                  <h3 style={{ color: '#22c55e', fontSize: 16, fontWeight: 700, marginBottom: 12, marginTop: 0 }}>IAB Transparency &amp; Consent Framework (TCF 2.2)</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 12, lineHeight: 1.65 }}>
                    The IAB Europe TCF is a standardised protocol that enables publishers, CMPs, and ad tech vendors to communicate consent signals in programmatic advertising. If your app monetises via programmatic ads, you need TCF compliance on top of basic GDPR consent.
                  </p>
                  <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                    <li style={{ marginBottom: 8 }}>Register with an IAB-registered CMP (Didomi, Usercentrics, OneTrust)</li>
                    <li style={{ marginBottom: 8 }}>The CMP generates a TC String encoding each vendor&apos;s consent/legitimate interest status</li>
                    <li style={{ marginBottom: 8 }}>The TC String is stored in a first-party cookie (<code style={{ color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '1px 6px', borderRadius: 4 }}>euconsent-v2</code>) and shared via the <code style={{ color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '1px 6px', borderRadius: 4 }}>__tcfapi</code> JavaScript API</li>
                    <li style={{ marginBottom: 8 }}>SSPs and DSPs read this string before serving ads &mdash; no valid consent means no personalised ads</li>
                    <li>TCF 2.2 (2023) increased restrictions on legitimate interest for advertising &mdash; consent is now required for most ad targeting purposes</li>
                  </ul>
                </div>

                {/* ── PRIVACY BY DESIGN ── */}
                <h2 id="privacy-by-design" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Privacy by Design: Data Minimisation &amp; Pseudonymisation</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Article 25 of GDPR mandates &ldquo;Data Protection by Design and by Default&rdquo; &mdash; privacy controls must be built into your system architecture from the start, not retrofitted. Here is what this means at the database and application layer:
                </p>

                <div className="reveal" style={{ marginBottom: 28 }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Data Minimisation in Schema Design</h3>
                  <p style={{ marginBottom: 16 }}>
                    Before adding a field to your database schema, ask: <em>&ldquo;Do we actually need this, and for what specific purpose?&rdquo;</em> Common over-collection examples include storing full date-of-birth when you only need age verification, storing device fingerprints for analytics when session IDs suffice, or collecting phone numbers &ldquo;just in case&rdquo;.
                  </p>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20,
                    border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'monospace', fontSize: 13,
                    color: 'rgba(255,255,255,0.7)', overflowX: 'auto',
                  }}>
                    <p style={{ color: '#ef4444', margin: '0 0 4px' }}>-- Over-collection (avoid)</p>
                    <p style={{ margin: '0 0 12px', whiteSpace: 'pre' }}{...{}}>{`CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  date_of_birth DATE,       -- Only needed if age-gating
  phone TEXT,               -- Needed? For what purpose?
  ip_address INET,          -- Log separately, delete sooner
  device_id TEXT            -- Requires consent for tracking
);`}</p>
                    <p style={{ color: '#22c55e', margin: '0 0 4px' }}>-- Minimised (preferred)</p>
                    <p style={{ margin: 0, whiteSpace: 'pre' }}{...{}}>{`CREATE TABLE users (
  id UUID PRIMARY KEY,
  email_hash TEXT NOT NULL,         -- Hashed for pseudonymisation
  display_name TEXT,                -- Not necessarily real name
  is_adult BOOLEAN,                 -- Boolean instead of DOB
  created_at TIMESTAMPTZ,
  retention_expires_at TIMESTAMPTZ
);`}</p>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 28 }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Pseudonymisation Techniques</h3>
                  <p style={{ marginBottom: 16 }}>
                    Pseudonymisation replaces directly identifying information with artificial identifiers, reducing the risk associated with a data breach. GDPR explicitly encourages pseudonymisation as a technical safeguard (Recital 28). Unlike anonymisation, pseudonymous data can still be re-identified with additional information &mdash; so it remains personal data, but attracts reduced regulatory scrutiny.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 12 }}>
                    {[
                      { tech: 'Tokenisation', desc: 'Replace sensitive values (email, SSN) with opaque tokens. Store the mapping in a separate, access-controlled vault (e.g., HashiCorp Vault or AWS KMS). Analytics systems only see the token.', color: '#22c55e' },
                      { tech: 'Hashing with Salt', desc: 'SHA-256 or bcrypt with a per-user salt. Useful for email lookups without storing plaintext emails. Cannot be reversed without the original value.', color: '#06b6d4' },
                      { tech: 'Data Masking', desc: 'Replace characters in sensitive fields (john@example.com → j***@e******.com). Used in logs, support interfaces, and non-production environments.', color: '#8b5cf6' },
                      { tech: 'Synthetic Data', desc: 'Replace real user data in dev/staging environments with statistically similar synthetic records. Tools: Faker.js, Gretel.ai, Presidio. Never use real production data in dev.', color: '#f97316' },
                    ].map((t, i) => (
                      <div key={i} style={{
                        background: `${t.color}08`, borderRadius: 16, padding: 16,
                        border: `1px solid ${t.color}25`,
                      }}>
                        <h4 style={{ color: t.color, margin: '0 0 8px', fontSize: 14, fontWeight: 700 }}>{t.tech}</h4>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{t.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── DATA RETENTION ── */}
                <h2 id="data-retention" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Data Retention Policies &amp; Auto-Deletion</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  GDPR&apos;s Storage Limitation principle requires you to define how long you keep each category of data &mdash; and to enforce those limits automatically. &ldquo;We keep data indefinitely&rdquo; is not a valid retention policy.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24,
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto', marginBottom: 28,
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: '#ffffff', fontSize: 13 }}>Data Category</th>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: '#22c55e', fontSize: 13 }}>Suggested Retention</th>
                        <th style={{ textAlign: 'left', padding: '10px 12px', color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Legal Basis / Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Account / profile data', 'Duration of account + 30 days after deletion request', 'Contract; extend if legal hold required'],
                        ['Transaction / invoice records', '7 years', 'Legal obligation (tax/accounting laws)'],
                        ['Server access logs (IP addresses)', '90 days', 'Legitimate interest (security); minimise after'],
                        ['Error logs', '30 days', 'Legitimate interest; scrub personal data after 7 days'],
                        ['Marketing consent records', '3 years after last interaction', 'Consent; must prove consent was given'],
                        ['GDPR request records (DSARs)', '3 years', 'Legal obligation; evidence of compliance'],
                        ['Analytics / behavioural data', '13 months (GA4 default)', 'Consent; anonymise after retention period'],
                        ['Cookies (consent records)', '13 months max', 'ePrivacy Directive; re-ask after expiry'],
                        ['Job application data (rejected)', '6 months', 'Legitimate interest; candidate informed'],
                        ['Support ticket data', '2 years after resolution', 'Legitimate interest; scrub sensitive content after 6 months'],
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <td style={{ padding: '10px 12px', fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{row[0]}</td>
                          <td style={{ padding: '10px 12px', fontSize: 13, color: '#22c55e' }}>{row[1]}</td>
                          <td style={{ padding: '10px 12px', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{ marginBottom: 28 }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Implementing Auto-Deletion</h3>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20,
                    border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'monospace', fontSize: 13,
                    color: 'rgba(255,255,255,0.7)', overflowX: 'auto',
                  }}>
                    <p style={{ color: '#22c55e', margin: '0 0 4px' }}>-- Add retention column to each table</p>
                    <p style={{ margin: '0 0 12px', whiteSpace: 'pre' }}{...{}}>{`ALTER TABLE audit_logs ADD COLUMN expires_at TIMESTAMPTZ
  GENERATED ALWAYS AS (created_at + INTERVAL '90 days') STORED;`}</p>
                    <p style={{ color: '#22c55e', margin: '0 0 4px' }}>-- Nightly deletion job (run via pg_cron)</p>
                    <p style={{ margin: 0, whiteSpace: 'pre' }}{...{}}>{`SELECT cron.schedule('purge-expired-logs', '0 2 * * *', $$
  DELETE FROM audit_logs WHERE expires_at < NOW();
$$);`}</p>
                  </div>
                </div>

                {/* ── DPA AGREEMENTS ── */}
                <h2 id="dpa-agreements" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>DPA Agreements with Vendors (AWS, Firebase, Mixpanel &amp; More)</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Under Article 28, any vendor you share personal data with is a <strong style={{ color: '#22c55e' }}>data processor</strong>, and you must have a Data Processing Agreement (DPA) in place before sharing data. This is non-negotiable. Using a SaaS tool without a DPA is a GDPR violation, even if the vendor is GDPR-compliant themselves.
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 32 }}>
                  {[
                    {
                      vendor: 'AWS', color: '#f97316',
                      how: 'Accept AWS GDPR DPA via the AWS console under Account > Data Privacy. AWS acts as a processor for data stored in your AWS services.',
                      note: 'Enables Standard Contractual Clauses (SCCs) for data transfers outside EEA.',
                    },
                    {
                      vendor: 'Google Firebase / GCP', color: '#4285f4',
                      how: 'Sign the Google Cloud Data Processing Addendum at myaccount.google.com. Covers Firebase, BigQuery, Cloud Storage, and other GCP services.',
                      note: 'Firebase Analytics sends data to Google servers &mdash; requires consent if used for behavioural tracking.',
                    },
                    {
                      vendor: 'Mixpanel', color: '#7c3aed',
                      how: 'Request and sign Mixpanel\'s DPA via their privacy portal. Configure data residency to EU. Enable IP anonymisation.',
                      note: 'Mixpanel ingests user IDs, events, and properties &mdash; all personal data requiring consent.',
                    },
                    {
                      vendor: 'Stripe', color: '#635bff',
                      how: 'Stripe\'s DPA is incorporated into their Services Agreement &mdash; automatically accepted when you agree to their ToS.',
                      note: 'Stripe also processes data as a controller (fraud detection, Stripe Radar) &mdash; two separate legal relationships.',
                    },
                    {
                      vendor: 'Mailchimp / Intuit', color: '#f59e0b',
                      how: 'Download and execute Mailchimp\'s DPA. Standard Contractual Clauses are required for EEA &rarr; US transfers.',
                      note: 'Only send marketing emails to users who have given explicit consent.',
                    },
                    {
                      vendor: 'Intercom', color: '#0070f3',
                      how: 'Enable GDPR controls in Intercom settings. Set data retention periods. DPA is included in their subscription agreement.',
                      note: 'Intercom chat widgets load JS on page load &mdash; requires consent before initialisation if using identity resolution.',
                    },
                    {
                      vendor: 'Sentry', color: '#6c5fc7',
                      how: 'Request Sentry\'s DPA via their privacy team. Configure data scrubbing to remove PII from error reports before they leave your server.',
                      note: 'Sentry can capture PII in stack traces and request headers &mdash; configure beforeSend hooks to strip sensitive data.',
                    },
                    {
                      vendor: 'HubSpot', color: '#ff7a59',
                      how: 'HubSpot\'s DPA is part of their MSA. Enable GDPR features in Settings > Privacy & Consent. Use built-in consent workflows.',
                      note: 'HubSpot cookie tracks visitors before consent &mdash; use cookie blocking mode and initialise tracking only after consent.',
                    },
                  ].map((v, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 20,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                        <h4 style={{ color: '#ffffff', margin: 0, fontSize: 16, fontWeight: 700 }}>{v.vendor}</h4>
                        <span style={{ fontSize: 10, color: v.color, background: `${v.color}15`, padding: '3px 8px', borderRadius: 100, fontWeight: 600 }}>DPA Available</span>
                      </div>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: '0 0 8px', lineHeight: 1.5 }}><strong style={{ color: 'rgba(255,255,255,0.9)' }}>How:</strong> <span dangerouslySetInnerHTML={{ __html: v.how }} /></p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5 }}><strong>Note:</strong> <span dangerouslySetInnerHTML={{ __html: v.note }} /></p>
                    </div>
                  ))}
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.05)', borderRadius: 16, padding: 20, marginBottom: 32,
                  border: '1px solid rgba(34,197,94,0.15)',
                }}>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>
                    <strong style={{ color: '#22c55e' }}>Processor Register:</strong> Maintain a Record of Processing Activities (ROPA) under Article 30. This is a living spreadsheet listing every data category, its purpose, legal basis, retention period, processor, and transfer mechanism. It is the first thing a regulator will request during an audit.
                  </p>
                </div>

                {/* ── BREACH NOTIFICATION ── */}
                <h2 id="breach-notification" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Breach Notification: The 72-Hour Rule</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Article 33 requires you to notify your lead supervisory authority within <strong style={{ color: '#22c55e' }}>72 hours</strong> of becoming aware of a personal data breach &mdash; not 72 hours after the breach, but after you become aware. Late notifications have resulted in significant additional fines on top of the breach-related penalties.
                </p>

                <div className="reveal" style={{ marginBottom: 28 }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>What Constitutes a Breach?</h3>
                  <p style={{ marginBottom: 12 }}>A personal data breach is any event leading to accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to personal data. This includes:</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
                    {[
                      'Database server publicly exposed without authentication',
                      'Employee laptop with unencrypted user data stolen',
                      'S3 bucket misconfiguration exposing customer records',
                      'SQL injection attack resulting in data exfiltration',
                      'Email sent to wrong recipient containing PII',
                      'Ransomware encrypting and threatening to publish data',
                      'Third-party vendor breach that included your users\' data',
                      'Accidental deletion of data without backup (availability breach)',
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(239,68,68,0.06)', borderRadius: 12, padding: 12,
                        border: '1px solid rgba(239,68,68,0.15)',
                        display: 'flex', gap: 10, alignItems: 'flex-start',
                      }}>
                        <span style={{ color: '#ef4444', flexShrink: 0, marginTop: 2 }}>⚠</span>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 24,
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 28,
                }}>
                  <h3 style={{ color: '#22c55e', fontSize: 16, fontWeight: 700, marginBottom: 16, marginTop: 0 }}>Breach Response Runbook</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      { time: '0 min', step: 'Detect & Contain', desc: 'Isolate affected systems. Revoke compromised credentials. Preserve evidence &mdash; do not wipe logs.', color: '#ef4444' },
                      { time: '1–4 hrs', step: 'Assess Severity', desc: 'Determine: what data was breached, how many individuals affected, whether special categories (health, financial) are involved, and whether harm is likely.', color: '#f97316' },
                      { time: '4–24 hrs', step: 'Internal Escalation', desc: 'Notify DPO, legal team, and senior management. Start breach documentation. Determine notification obligations.', color: '#eab308' },
                      { time: '24–72 hrs', step: 'Supervisory Authority Notification', desc: 'Notify your lead supervisory authority (e.g., ICO in UK, CNIL in France, DPC in Ireland). Provide: nature of breach, categories and number of individuals, approximate number of records, likely consequences, measures taken.', color: '#22c55e' },
                      { time: 'ASAP if high risk', step: 'Notify Affected Individuals', desc: 'Article 34: if breach is likely to result in high risk to individuals (identity theft, discrimination, financial loss), notify affected users directly &mdash; in plain language, without undue delay.', color: '#06b6d4' },
                      { time: 'Ongoing', step: 'Document & Review', desc: 'Maintain a breach register under Article 33(5). Conduct post-mortem. Update controls. Consider notifying cyber insurance carrier.', color: '#8b5cf6' },
                    ].map((s, i) => (
                      <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                        <div style={{
                          flexShrink: 0, background: `${s.color}15`, border: `1px solid ${s.color}30`,
                          borderRadius: 10, padding: '6px 10px', minWidth: 84, textAlign: 'center',
                        }}>
                          <p style={{ fontSize: 10, color: s.color, margin: 0, fontWeight: 700 }}>{s.time}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{s.step}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── MOBILE GDPR ── */}
                <h2 id="mobile-gdpr" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Mobile-Specific GDPR: Permissions, Analytics &amp; Advertising ID</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Mobile apps have unique GDPR considerations beyond web applications. The combination of persistent device identifiers, background location tracking, and OS-level permission systems creates specific compliance challenges.
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 32 }}>
                  {[
                    {
                      title: 'App Permissions & Purpose Limitation', icon: '🔐', color: '#22c55e',
                      points: [
                        'Only request permissions you actively use &mdash; not &ldquo;just in case&rdquo;',
                        'Request at time of use (contextual), not at app launch',
                        'On Android 13+: granular photo/media permissions',
                        'On iOS: provide usage description strings for every sensitive permission',
                        'Do not request microphone permission for a notes app',
                        'Contacts access requires clear consent and minimised usage',
                      ],
                    },
                    {
                      title: 'Advertising ID (IDFA/GAID)', icon: '📊', color: '#8b5cf6',
                      points: [
                        'iOS: Apple\'s ATT framework requires explicit permission before accessing IDFA (since iOS 14.5)',
                        'Android: Google Advertising ID requires opt-out support',
                        'If user opts out: do not fingerprint as a workaround &mdash; this violates GDPR and platform policies',
                        'Use aggregated cohort attribution (SKAdNetwork on iOS, Privacy Sandbox on Android) for ad measurement without individual tracking',
                      ],
                    },
                    {
                      title: 'Analytics SDK Opt-Out', icon: '📈', color: '#f97316',
                      points: [
                        'Firebase Analytics: call setAnalyticsCollectionEnabled(false) until consent granted',
                        'Mixpanel: call optOutTracking() method on opt-out',
                        'Amplitude: use setOptOut(true) on the Amplitude instance',
                        'Provide in-app privacy settings where users can toggle analytics on/off',
                        'Store consent state in encrypted local storage, not in analytics platforms themselves',
                      ],
                    },
                    {
                      title: 'Push Notifications & Consent', icon: '🔔', color: '#06b6d4',
                      points: [
                        'iOS: push permission is a system dialog &mdash; no separate GDPR consent needed for the permission itself',
                        'Marketing push notifications still require GDPR consent as a legal basis',
                        'Transactional notifications (order confirmations) can rely on contract legal basis',
                        'Provide granular notification preferences: marketing, product updates, reminders',
                        'Honour unsubscribe immediately &mdash; sync with your backend within seconds',
                      ],
                    },
                  ].map((card, i) => (
                    <div key={i} style={{
                      background: `${card.color}07`, borderRadius: 28, padding: 20,
                      border: `1px solid ${card.color}20`,
                    }}>
                      <div style={{ fontSize: 28, marginBottom: 8 }}>{card.icon}</div>
                      <h4 style={{ color: card.color, margin: '0 0 12px', fontSize: 15, fontWeight: 700 }}>{card.title}</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13 }}>
                        {card.points.map((pt, j) => (
                          <li key={j} style={{ marginBottom: 6, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: pt }} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* ── CCPA VS GDPR ── */}
                <h2 id="ccpa-vs-gdpr" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>CCPA vs GDPR: Key Differences</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  If your app serves users in both the EU and California, you must comply with both GDPR and the California Consumer Privacy Act (CCPA), as amended by CPRA. While they share privacy principles, they differ significantly in scope, opt-in vs opt-out approach, and enforcement.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24,
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto', marginBottom: 32,
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 14px', color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Dimension</th>
                        <th style={{ textAlign: 'left', padding: '12px 14px', color: '#22c55e', fontSize: 13 }}>GDPR (EU/EEA)</th>
                        <th style={{ textAlign: 'left', padding: '12px 14px', color: '#06b6d4', fontSize: 13 }}>CCPA/CPRA (California)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Scope', 'Any business processing EU resident data, regardless of size', 'Businesses in CA with >$25M revenue, >100K consumers\' data/yr, or >50% revenue from selling data'],
                        ['Consent model', 'Opt-in required for non-essential processing', 'Opt-out (do not sell/share) for most processing; opt-in for minors under 16'],
                        ['Cookies', 'Opt-in consent required before setting non-essential cookies', 'Opt-out of cookie-based tracking; GPC signal must be honoured'],
                        ['Right to erasure', 'Broad right with limited exceptions', 'Right to delete; more exceptions (free speech, security, legal obligations)'],
                        ['Data portability', 'Machine-readable format required', 'Two specific portable disclosures per year'],
                        ['Sensitive data', 'Special categories require explicit consent (health, race, religion, biometrics)', 'Sensitive PI requires opt-in consent (similar categories plus precise geolocation)'],
                        ['Private right of action', 'No (regulatory enforcement only)', 'Yes — for data breaches: $100–750 per consumer per incident'],
                        ['Max fines', '€20M or 4% of global annual turnover', '$7,500 per intentional violation; $2,500 per unintentional'],
                        ['DPO required', 'Yes, for certain organisations (large-scale processing, special categories)', 'No formal DPO requirement'],
                        ['DPIA/PIA required', 'Yes for high-risk processing', 'Voluntary; CPRA introduced risk assessments for high-risk activities'],
                        ['Territorial scope', 'Global (any business with EU users)', 'Businesses serving California residents (extraterritorial effect)'],
                        ['Enforcement body', 'National supervisory authorities (ICO, CNIL, DPC, etc.)', 'California Privacy Protection Agency (CPPA), California AG'],
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                          <td style={{ padding: '11px 14px', fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{row[0]}</td>
                          <td style={{ padding: '11px 14px', fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>{row[1]}</td>
                          <td style={{ padding: '11px 14px', fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(6,182,212,0.07)', borderRadius: 16, padding: 20, marginBottom: 32,
                  border: '1px solid rgba(6,182,212,0.2)',
                }}>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>
                    <strong style={{ color: '#06b6d4' }}>Practical tip:</strong> Design for GDPR compliance first &mdash; it is more stringent. A GDPR-compliant opt-in consent system will generally satisfy CCPA opt-out requirements as well. The reverse is not true: a CCPA-only system (opt-out model) will not satisfy GDPR&apos;s opt-in requirement.
                  </p>
                </div>

                {/* ── CONSENT PLATFORMS ── */}
                <h2 id="consent-platforms" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Consent Management Platforms (CMPs)</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Building a consent management system from scratch is error-prone and expensive to maintain as regulations evolve. A CMP handles consent collection, storage, signal transmission to vendors (via IAB TCF), and provides a compliance audit trail. Here are the leading options in 2026:
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32 }}>
                  {[
                    {
                      cmp: 'OneTrust', tier: 'Enterprise', color: '#0070f3', price: '$$$',
                      pros: ['Most comprehensive feature set', 'DPIA/PIA workflow tools', 'Vendor risk management', 'Geolocation-based consent rules', 'SOC 2 + ISO 27001 certified'],
                      cons: ['Complex implementation (4–8 weeks)', 'Expensive ($2K–$15K/month)', 'Can slow page load if misconfigured'],
                      bestFor: 'Large enterprises with compliance teams and complex multi-jurisdiction requirements',
                    },
                    {
                      cmp: 'Cookiebot (Usercentrics)', tier: 'SMB / Scale-up', color: '#22c55e', price: '$$',
                      pros: ['Automatic cookie scanning', 'Easy 2-day implementation', 'IAB TCF certified', 'Google Consent Mode v2 support', 'CCPA + GDPR + LGPD'],
                      cons: ['Less customisable than OneTrust', 'Cookie scan not always 100% accurate', 'Limited workflow automation'],
                      bestFor: 'SaaS companies and e-commerce wanting quick GDPR compliance without a dedicated compliance team',
                    },
                    {
                      cmp: 'Didomi', tier: 'Mid-market', color: '#8b5cf6', price: '$$',
                      pros: ['Strong IAB TCF 2.2 implementation', 'Headless consent API for mobile apps', 'React Native SDK available', 'Privacy UX templates', 'Real-time consent reporting'],
                      cons: ['Less brand recognition than OneTrust', 'Vendor list management requires effort'],
                      bestFor: 'Companies with both web and mobile apps needing unified consent infrastructure',
                    },
                    {
                      cmp: 'Osano', tier: 'SMB', color: '#f97316', price: '$',
                      pros: ['Simple pricing model', 'Built-in vendor monitoring', 'Consent change alerts', 'Easy WordPress/Shopify integration', 'Good data subject request workflow'],
                      cons: ['Less advanced IAB TCF features', 'Fewer global regulation templates'],
                      bestFor: 'Small businesses and startups getting started with GDPR compliance on a budget',
                    },
                    {
                      cmp: 'Consent-O-Matic (Open Source)', tier: 'Developer', color: '#22c55e', price: 'Free',
                      pros: ['No vendor dependency', 'Full control over implementation', 'Lightweight', 'No monthly fees'],
                      cons: ['Requires developer maintenance', 'No automatic vendor updates', 'No IAB TCF support out of the box', 'No compliance audit trail'],
                      bestFor: 'Simple apps with few third-party vendors and developer resources for ongoing maintenance',
                    },
                  ].map((cmp, i) => (
                    <div key={i} style={{
                      background: `${cmp.color}08`, borderRadius: 28, padding: 20,
                      border: `1px solid ${cmp.color}22`,
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                        <h4 style={{ color: '#ffffff', margin: 0, fontSize: 15, fontWeight: 700 }}>{cmp.cmp}</h4>
                        <span style={{ fontSize: 14, color: cmp.color, fontWeight: 700 }}>{cmp.price}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                        <span style={{ fontSize: 10, color: cmp.color, background: `${cmp.color}15`, padding: '3px 8px', borderRadius: 100, fontWeight: 600 }}>{cmp.tier}</span>
                      </div>
                      <div style={{ marginBottom: 10 }}>
                        <p style={{ fontSize: 12, color: '#22c55e', margin: '0 0 4px', fontWeight: 600 }}>Pros</p>
                        <ul style={{ paddingLeft: 16, margin: 0, fontSize: 12 }}>
                          {cmp.pros.map((p, j) => <li key={j} style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 3, lineHeight: 1.5 }}>{p}</li>)}
                        </ul>
                      </div>
                      <div style={{ marginBottom: 10 }}>
                        <p style={{ fontSize: 12, color: '#ef4444', margin: '0 0 4px', fontWeight: 600 }}>Cons</p>
                        <ul style={{ paddingLeft: 16, margin: 0, fontSize: 12 }}>
                          {cmp.cons.map((c, j) => <li key={j} style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 3, lineHeight: 1.5 }}>{c}</li>)}
                        </ul>
                      </div>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: 0 }}><strong style={{ color: cmp.color }}>Best for:</strong> {cmp.bestFor}</p>
                    </div>
                  ))}
                </div>

                {/* ── FINES ── */}
                <h2 id="fines" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Notable GDPR Fines: What They Tell Us</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  GDPR enforcement has escalated dramatically. Cumulative fines issued by European supervisory authorities exceeded &euro;4.5 billion by the end of 2025. Here are the most instructive cases &mdash; and what they mean for your architecture decisions:
                </p>

                {[
                  {
                    company: 'Meta (Facebook)', fine: '€1.2 Billion', authority: 'Irish DPC', year: '2023',
                    violation: 'Unlawful data transfers from EU to US &mdash; using Standard Contractual Clauses (SCCs) while knowing that US surveillance law (FISA 702) made meaningful protection impossible.',
                    lesson: 'Data transfers to the US after Schrems II require a Transfer Impact Assessment (TIA). The EU-US Data Privacy Framework (2023) provides a new transfer mechanism &mdash; verify your vendors are certified or rely on updated SCCs with a robust TIA.',
                  },
                  {
                    company: 'Amazon', fine: '€746 Million', authority: 'Luxembourg CNPD', year: '2021',
                    violation: 'Non-compliant cookie consent &mdash; advertising cookies were set without valid consent. Amazon used dark patterns to make opting out difficult.',
                    lesson: 'Cookie consent UX is under active regulatory scrutiny. The &ldquo;Accept All&rdquo; button cannot be more prominent than &ldquo;Reject All.&rdquo; This is pure front-end compliance &mdash; no engineering complexity, just UX discipline.',
                  },
                  {
                    company: 'Instagram (Meta)', fine: '€405 Million', authority: 'Irish DPC', year: '2022',
                    violation: 'Processing children&apos;s data (minors 13–17) &mdash; phone numbers and email addresses were set to public by default on business accounts.',
                    lesson: 'Privacy-by-default means the most private settings are active by default, especially for vulnerable groups. Age verification and parental consent for under-16s require dedicated engineering investment.',
                  },
                  {
                    company: 'TikTok', fine: '€345 Million', authority: 'Irish DPC', year: '2023',
                    violation: 'Children&apos;s data privacy violations &mdash; public-by-default settings for minors, dark patterns in consent flows, and failure to verify user ages adequately.',
                    lesson: 'If your app may be used by under-16s, age verification is not optional. Dark patterns in consent &mdash; nudge language, hidden reject options &mdash; are now being fined directly.',
                  },
                  {
                    company: 'WhatsApp (Meta)', fine: '€225 Million', authority: 'Irish DPC', year: '2021',
                    violation: 'Transparency failures &mdash; insufficient information to users about how their data was shared between WhatsApp and the broader Meta family of companies.',
                    lesson: 'Privacy notices must be specific about data sharing between affiliated companies. &ldquo;We may share data with affiliates&rdquo; is insufficient &mdash; each sharing relationship needs a specific description and legal basis.',
                  },
                  {
                    company: 'Google + Facebook (France)', fine: '€150M + €60M', authority: 'French CNIL', year: '2022',
                    violation: 'Cookie consent UX &mdash; rejecting cookies required more clicks than accepting, and the reject mechanism was insufficiently prominent.',
                    lesson: 'Regulatory precedent: &ldquo;Reject All&rdquo; must require the same number of clicks as &ldquo;Accept All.&rdquo; This is now the de-facto standard in EU cookie compliance.',
                  },
                ].map((item, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 24,
                    border: '1px solid rgba(255,255,255,0.05)', marginBottom: 16,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                      <div>
                        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{item.company}</h3>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{item.authority} &middot; {item.year}</p>
                      </div>
                      <div style={{
                        background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)',
                        borderRadius: 12, padding: '8px 16px', textAlign: 'center',
                      }}>
                        <p style={{ fontSize: 20, fontWeight: 800, color: '#ef4444', margin: 0 }}>{item.fine}</p>
                        <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', margin: 0 }}>fine issued</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: '0 0 10px', lineHeight: 1.6 }}><strong style={{ color: 'rgba(255,255,255,0.85)' }}>Violation:</strong> <span dangerouslySetInnerHTML={{ __html: item.violation }} /></p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}><strong style={{ color: '#22c55e' }}>Lesson for developers:</strong> <span dangerouslySetInnerHTML={{ __html: item.lesson }} /></p>
                  </div>
                ))}

                {/* ── FAQ ── */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                <div className="reveal" style={{ marginBottom: 48 }}>
                  {[
                    {
                      q: 'Do I need a DPO (Data Protection Officer) for my app?',
                      a: 'A DPO is mandatory under Article 37 in three cases: you are a public authority, your core activities require large-scale systematic monitoring of individuals (e.g., tracking apps, ad networks), or you process special categories of data (health, biometric, criminal) at scale. Most startups and SMBs do not require a formal DPO — however, appointing one voluntarily, or designating a team member as a privacy point of contact, is strongly recommended. If you are subject to UK GDPR post-Brexit, the same rules apply.',
                    },
                    {
                      q: 'My startup is incorporated in Canada — does GDPR apply to us?',
                      a: 'Yes, if you have users in the EU/EEA. GDPR\'s extraterritorial scope (Article 3(2)) catches any organisation that offers goods or services to EU residents — even for free — or monitors their behaviour. A SaaS product available to EU users, a free mobile app downloadable in Germany, or an e-commerce store shipping to France all trigger GDPR obligations. You will also need to appoint an EU representative (Article 27) if you are not established in the EU.',
                    },
                    {
                      q: 'Can we use Google Analytics without GDPR consent?',
                      a: 'Not in most EEA jurisdictions. Google Analytics sets cookies and transmits IP addresses and behavioural data to Google servers in the US — constituting both cookie-based tracking (requiring ePrivacy consent) and international data transfer (requiring SCCs or Privacy Framework certification). Austria, France, Italy, and Denmark have all ruled standard GA configurations non-compliant. Solutions: use server-side tagging with IP anonymisation, switch to a privacy-friendly alternative (Plausible, Fathom, Umami), or implement Google Consent Mode v2 with proper consent gates.',
                    },
                    {
                      q: 'What is a Data Protection Impact Assessment (DPIA) and when is it required?',
                      a: 'A DPIA (Article 35) is a systematic analysis of the risks to individuals from a specific processing activity. It is mandatory before you begin high-risk processing — specifically when using systematic and extensive automated profiling that significantly affects people, processing special categories at scale, or systematically monitoring publicly accessible areas at large scale. In practice, any new AI/ML feature processing user behaviour, any health data feature, or any large-scale location tracking should trigger a DPIA. It is a living document — update it when processing changes.',
                    },
                    {
                      q: 'What is the difference between anonymisation and pseudonymisation under GDPR?',
                      a: 'Anonymised data is no longer personal data — GDPR does not apply to it. True anonymisation is extremely difficult to achieve; even aggregate statistics can re-identify individuals when combined with other datasets. Pseudonymous data (e.g., hashed emails, tokenised IDs) is still personal data under GDPR because it can be re-identified with additional information. The key difference: truly anonymised data is outside GDPR scope; pseudonymous data is still within scope but benefits from reduced regulatory scrutiny and is explicitly encouraged as a security measure (Recital 28).',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{
                          width: '100%', textAlign: 'left', background: 'none', border: 'none',
                          padding: '20px 0', cursor: 'pointer',
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                        }}
                      >
                        <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{item.q}</span>
                        <span style={{
                          flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                          background: openFaq === i ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                          border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.08)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.4)',
                          fontSize: 16, transition: 'all 0.2s',
                          transform: openFaq === i ? 'rotate(45deg)' : 'none',
                        }}>+</span>
                      </button>
                      {openFaq === i && (
                        <div style={{ paddingBottom: 20 }}>
                          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* ── CTA ── */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.04) 100%)',
                  borderRadius: 28, padding: 'clamp(28px, 5vw, 48px)',
                  border: '1px solid rgba(34,197,94,0.2)', textAlign: 'center', marginTop: 64,
                }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>🛡️</div>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#ffffff', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                    Need Help Building a GDPR-Compliant App?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: 540, margin: '0 auto 32px' }}>
                    Codazz builds privacy-by-design into every project &mdash; from data schema design to consent management platform integration, DPA agreements, and breach response runbooks. We have helped fintech, healthcare, and SaaS companies launch compliantly in the EU and globally.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    background: '#22c55e', color: '#000000', fontWeight: 700,
                    fontSize: 16, padding: '16px 36px', borderRadius: 100,
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}>
                    Get a GDPR Compliance Review
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ position: 'sticky', top: 100, height: 'fit-content' }}>

                {/* TOC */}
                <div style={{
                  background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 24,
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                }}>
                  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', margin: '0 0 16px' }}>In This Guide</p>
                  <nav>
                    {tocSections.map((s) => (
                      <a key={s.id} href={`#${s.id}`} style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        padding: '8px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.04)',
                        color: activeSection === s.id ? '#22c55e' : 'rgba(255,255,255,0.5)',
                        fontSize: 13, transition: 'color 0.2s', lineHeight: 1.4,
                      }}>
                        <span style={{ fontSize: 14 }}>{s.emoji}</span>
                        {s.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Quick Stats */}
                <div style={{
                  background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 24,
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                }}>
                  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', margin: '0 0 16px' }}>GDPR by the Numbers</p>
                  {[
                    { stat: '€4.5B+', label: 'Total fines issued (2018–2025)' },
                    { stat: '72 hrs', label: 'Maximum breach notification window' },
                    { stat: '€20M / 4%', label: 'Maximum fine per violation' },
                    { stat: '30 days', label: 'DSAR response window' },
                    { stat: '1M+', label: 'GDPR complaints filed since 2018' },
                    { stat: '8', label: 'Data subject rights to implement' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)',
                    }}>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                      <span style={{ fontSize: 15, fontWeight: 700, color: '#22c55e' }}>{item.stat}</span>
                    </div>
                  ))}
                </div>

                {/* Sidebar CTA */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 100%)',
                  borderRadius: 28, padding: 24,
                  border: '1px solid rgba(34,197,94,0.2)', marginBottom: 24, textAlign: 'center',
                }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 10px' }}>Need a GDPR audit?</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 18px', lineHeight: 1.5 }}>We review your architecture, consent flows, and DPA agreements &mdash; and produce a prioritised compliance roadmap.</p>
                  <Link href="/contact" style={{
                    display: 'block', background: '#22c55e', color: '#000',
                    fontWeight: 700, fontSize: 14, padding: '12px 20px',
                    borderRadius: 100, textDecoration: 'none',
                  }}>Get a Compliance Review</Link>
                </div>

                {/* Related posts */}
                <div style={{
                  background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 24,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', margin: '0 0 16px' }}>Related Articles</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {relatedPosts.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                        textDecoration: 'none', padding: '14px', borderRadius: 16,
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
                        transition: 'border-color 0.2s',
                      }}>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                          <span style={{
                            fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            background: 'rgba(34,197,94,0.1)', color: '#22c55e', padding: '2px 8px', borderRadius: 100,
                          }}>{post.category}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{post.readTime}</span>
                        </div>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.4, fontWeight: 500 }}>{post.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>

              </aside>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
