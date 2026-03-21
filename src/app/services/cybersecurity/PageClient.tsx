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

/* ───── DATA ───── */

const stats = [
  { value: '500+', label: 'Security Assessments' },
  { value: '99.7%', label: 'Threat Detection Rate' },
  { value: '24/7', label: 'Monitoring & Response' },
  { value: '0', label: 'Data Breaches on Watch' },
];

const services = [
  {
    icon: '\uD83D\uDD13',
    title: 'Penetration Testing',
    desc: 'Manual and automated penetration testing for web applications, networks, APIs, mobile apps and cloud infrastructure. OWASP Top 10, PTES and NIST methodology-driven engagements that simulate real-world attack scenarios.',
  },
  {
    icon: '\uD83D\uDD0D',
    title: 'Security Audits',
    desc: 'Comprehensive security audits covering architecture review, configuration assessment, access control analysis, and security policy evaluation. Detailed findings with prioritised remediation roadmaps and executive summaries.',
  },
  {
    icon: '\uD83D\uDEE1\uFE0F',
    title: 'VAPT',
    desc: 'Combined automated vulnerability scanning and manual penetration testing that identifies, validates and prioritises vulnerabilities across your entire attack surface with zero false positive reporting.',
  },
  {
    icon: '\u2601\uFE0F',
    title: 'Cloud Security',
    desc: 'Security assessments and hardening for AWS, Azure and GCP environments. IAM policy review, network segmentation analysis, secrets management, container security, and infrastructure-as-code scanning.',
  },
  {
    icon: '\uD83D\uDCBB',
    title: 'Application Security',
    desc: 'SAST, DAST, SCA and manual secure code review integrated into your CI/CD pipeline. Shift-left security that catches vulnerabilities in development before they reach production environments.',
  },
  {
    icon: '\uD83D\uDEA8',
    title: 'Incident Response',
    desc: 'Rapid incident response with sub-1-hour SLA for critical events. Digital forensics, malware analysis, breach containment, root cause analysis and post-incident hardening to prevent recurrence.',
  },
];

const complianceFrameworks = [
  {
    name: 'SOC 2',
    full: 'SOC 2 Type I & Type II',
    desc: 'Trust services criteria compliance for SaaS and service organisations. Gap analysis, control design, evidence collection, and auditor coordination through certification.',
    timeline: '3\u20136 months',
  },
  {
    name: 'ISO 27001',
    full: 'ISO/IEC 27001:2022',
    desc: 'Information security management system implementation. Risk assessment, policy framework, Annex A controls, internal audit preparation and certification body coordination.',
    timeline: '4\u20138 months',
  },
  {
    name: 'HIPAA',
    full: 'HIPAA Security Rule',
    desc: 'Healthcare data protection compliance for covered entities and business associates. Technical safeguards, administrative controls, risk analysis and breach notification procedures.',
    timeline: '3\u20135 months',
  },
  {
    name: 'PCI DSS',
    full: 'PCI DSS v4.0',
    desc: 'Payment card industry compliance for merchants and service providers. Network segmentation, encryption assessment, access controls, logging requirements and SAQ/ROC preparation.',
    timeline: '2\u20134 months',
  },
  {
    name: 'GDPR',
    full: 'General Data Protection Regulation',
    desc: 'EU data privacy compliance including data mapping, privacy impact assessments, consent management, data subject rights implementation and DPO advisory services.',
    timeline: '3\u20136 months',
  },
];

const techStack = [
  { label: 'Pen Testing', chips: ['Burp Suite Pro', 'Metasploit', 'Nmap', 'Wireshark', 'SQLMap', 'Nuclei'] },
  { label: 'SAST / DAST', chips: ['SonarQube', 'Checkmarx', 'Snyk', 'OWASP ZAP', 'Semgrep', 'Trivy'] },
  { label: 'Cloud Security', chips: ['Prowler', 'ScoutSuite', 'CloudSploit', 'Terraform Sentinel', 'AWS Config'] },
  { label: 'SIEM & Monitoring', chips: ['Splunk', 'Elastic SIEM', 'CrowdStrike', 'Wazuh', 'Datadog Security'] },
  { label: 'Compliance', chips: ['Vanta', 'Drata', 'OneTrust', 'Tugboat Logic', 'Secureframe'] },
  { label: 'DevSecOps', chips: ['GitHub Advanced Security', 'GitLab SAST', 'HashiCorp Vault', 'Falco', 'Aqua Security'] },
];

const threatStats = [
  { value: '$4.45M', label: 'Average Cost of a Data Breach', source: 'IBM 2024' },
  { value: '277 days', label: 'Average Time to Identify & Contain', source: 'IBM 2024' },
  { value: '83%', label: 'Organisations Breached More Than Once', source: 'IBM 2024' },
  { value: '10x', label: 'Cheaper to Fix in Dev vs Production', source: 'NIST' },
  { value: '95%', label: 'Breaches Caused by Human Error', source: 'World Economic Forum' },
  { value: '2,200+', label: 'Cyberattacks Per Day Globally', source: 'University of Maryland' },
];

const steps = [
  { num: '01', title: 'Discovery & Scoping', desc: 'We define the engagement scope, target systems, testing methodology, rules of engagement, and success criteria. A signed scope document ensures alignment before any testing begins.' },
  { num: '02', title: 'Reconnaissance & Mapping', desc: 'Passive and active reconnaissance to map your attack surface. We enumerate subdomains, open ports, services, technologies, and entry points \u2014 building a complete threat model of your environment.' },
  { num: '03', title: 'Testing & Exploitation', desc: 'Manual and automated testing following OWASP, PTES and NIST frameworks. We attempt to exploit identified vulnerabilities, chain attack vectors, and demonstrate real-world business impact.' },
  { num: '04', title: 'Reporting & Remediation', desc: 'Detailed technical report with executive summary, vulnerability severity ratings (CVSS), proof-of-concept evidence, and step-by-step remediation guidance. Critical findings are reported in real time.' },
  { num: '05', title: 'Re-Testing & Validation', desc: 'Free re-testing after your team has implemented fixes. We validate that vulnerabilities are properly remediated and issue a clean verification report for stakeholders and auditors.' },
];

const caseStudy = {
  client: 'Series B FinTech Platform',
  industry: 'Financial Services',
  challenge: 'A fast-growing FinTech company processing $200M+ in annual transactions needed SOC 2 Type II certification and a comprehensive security overhaul before their Series C fundraise. Their application had never undergone a professional penetration test.',
  solution: 'We conducted a full VAPT engagement covering their web platform, mobile apps, APIs, and AWS infrastructure. Simultaneously, we ran a SOC 2 readiness program \u2014 gap analysis, policy creation, control implementation, and evidence collection.',
  results: [
    { metric: '47', label: 'Vulnerabilities Found', detail: 'Including 3 critical and 8 high-severity issues' },
    { metric: '100%', label: 'Remediated Before Launch', detail: 'All critical and high issues fixed within 2 weeks' },
    { metric: 'SOC 2', label: 'Certified in 4 Months', detail: 'Clean audit report with zero exceptions' },
    { metric: '$0', label: 'Security Incidents Post-Engagement', detail: '18+ months of clean operation' },
  ],
};

const pricingPlans: { tier: string; price: string; desc: string; features: string[]; featured?: boolean }[] = [
  {
    tier: 'Security Assessment',
    price: '$8,000+',
    desc: 'Focused penetration testing for a single web application, API, or mobile app with detailed reporting.',
    features: [
      'Web, API, or mobile app pen test',
      'OWASP Top 10 coverage',
      'Manual + automated testing',
      'Detailed report with CVSS scoring',
      'Remediation guidance',
      'Free re-test after fixes',
      '1\u20132 week delivery',
    ],
  },
  {
    tier: 'Enterprise Security Audit',
    price: '$25,000+',
    desc: 'Comprehensive security audit covering applications, infrastructure, cloud, and compliance readiness.',
    features: [
      'Full-stack pen testing (web, API, mobile)',
      'Cloud infrastructure assessment',
      'Network security evaluation',
      'Architecture & configuration review',
      'Compliance gap analysis',
      'Executive summary + technical report',
      '3\u20136 week delivery',
    ],
    featured: true,
  },
  {
    tier: 'Managed Security',
    price: '$5,000+/mo',
    desc: 'Ongoing security monitoring, vulnerability management, and incident response retainer.',
    features: [
      '24/7 threat monitoring & alerting',
      'Monthly vulnerability scanning',
      'Quarterly penetration testing',
      'Incident response (sub-1hr SLA)',
      'Compliance maintenance & updates',
      'Dedicated security team',
      'Continuous improvement roadmap',
    ],
  },
];

const faqs = [
  {
    q: 'What types of penetration testing does Codazz offer?',
    a: 'We offer network penetration testing, web application penetration testing, mobile application testing, API security testing, cloud infrastructure testing, and social engineering assessments. Each engagement follows OWASP, PTES, and NIST methodologies with manual exploitation by certified security engineers.',
  },
  {
    q: 'How long does a typical security audit take?',
    a: 'A standard security audit takes 2\u20134 weeks depending on scope. Web application pentests typically run 1\u20132 weeks. Full enterprise security assessments including infrastructure, applications, and compliance review take 4\u20138 weeks. We provide preliminary findings within 48 hours of critical discovery.',
  },
  {
    q: 'Can you help us achieve SOC 2 or ISO 27001 compliance?',
    a: 'Yes. We provide end-to-end compliance readiness services for SOC 2 Type I and Type II, ISO 27001, HIPAA, PCI DSS, and GDPR. This includes gap analysis, policy development, control implementation, evidence collection, and audit preparation. Most clients achieve certification within 3\u20136 months.',
  },
  {
    q: 'What happens if you find a critical vulnerability during testing?',
    a: 'Critical and high-severity vulnerabilities are reported immediately through our secure communication channel \u2014 not at the end of the engagement. We provide a detailed remediation guide and can assist your team in patching the issue. A free re-test is included to verify the fix.',
  },
  {
    q: 'Do you offer ongoing security monitoring and managed services?',
    a: 'Yes. Beyond one-time assessments, we offer continuous security monitoring, managed SIEM, vulnerability management programs, and retainer-based incident response. Our managed security services include 24/7 threat detection, monthly vulnerability scans, and quarterly penetration tests.',
  },
  {
    q: 'How much do cybersecurity services cost?',
    a: 'Pricing depends on scope and complexity. Web application pentests start at $8,000. Full infrastructure security audits start at $25,000. Compliance readiness programs start at $40,000. Managed security retainers start at $5,000/month. Every engagement is scoped individually after a free consultation.',
  },
];


/* ───── COMPONENT ───── */

export default function CybersecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
      `}</style>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Cybersecurity' },
          ]} />
        </div>

        {/* ═══════════════ HERO ═══════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Cybersecurity Services
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Protect What You&apos;ve Built.
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Penetration testing, security audits, compliance consulting and 24/7 threat monitoring for applications, cloud infrastructure and enterprise networks.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get a Free Assessment
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                See Our Work
              </Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { value: '500+', label: 'Assessments Delivered' },
                { value: '99.7%', label: 'Detection Rate' },
                { value: '24/7', label: 'Monitoring' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ STATS BAR ═══════════════ */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))' }}>
              {stats.map((s, i) => (
                <div key={i} className="reveal" style={{ padding: 'clamp(28px, 4vw, 48px) 0', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingLeft: i > 0 ? 'clamp(16px, 3vw, 40px)' : 0, transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ SERVICES ═══════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>What We Do</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>Cybersecurity Services</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 0 56px', lineHeight: 1.7 }}>End-to-end security coverage from code to cloud &mdash; offensive testing, defensive monitoring and compliance readiness.</p>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {services.map(s => (
                <div key={s.title} style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ COMPLIANCE ═══════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Compliance</div>
                <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                  Compliance Readiness &amp; Certification
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 400, lineHeight: 1.75, margin: 0 }}>
                We guide you from gap analysis to certification day &mdash; building the policies, controls and evidence your auditors need.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {complianceFrameworks.map((fw) => (
                <div key={fw.name}
                  style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.08)', padding: '5px 14px', borderRadius: 100, marginBottom: 16 }}>{fw.name}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{fw.full}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: '0 0 16px' }}>{fw.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    Typical timeline: {fw.timeline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ TECH STACK ═══════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Technology</div>
                <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                  Our Security Arsenal
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
                Enterprise-grade tools combined with manual expertise for thorough, accurate assessments with zero false positives.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {techStack.map(cat => (
                <div key={cat.label}
                  style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>{cat.label}</div>
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

        {/* ═══════════════ THREAT LANDSCAPE STATS ═══════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Threat Landscape</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>Why Cybersecurity Matters Now</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 0 56px', lineHeight: 1.7 }}>The threat landscape is evolving faster than most organisations can respond. These numbers tell the story.</p>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {threatStats.map((t, i) => (
                <div key={i}
                  style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, padding: '40px 32px', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1 }}>{t.value}</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', margin: '12px 0 8px' }}>{t.label}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>Source: {t.source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ PROCESS ═══════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Our Process</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 60px' }}>How a Security Engagement Works</h2>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ position: 'absolute', top: 24, bottom: 24, left: 23, width: 1, background: 'linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.1))', zIndex: 0 }} />
              {steps.map((step, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 32, paddingBottom: i < steps.length - 1 ? 48 : 0, position: 'relative', zIndex: 1, transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#22c55e', color: '#000', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
                  <div style={{ paddingTop: 10 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{step.title}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0, maxWidth: 560 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CASE STUDY ═══════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Case Study</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Real-World Security Impact</h2>
            <div className="reveal reveal-d2" style={{ border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, overflow: 'hidden', background: 'rgba(34,197,94,0.02)' }}>
              <div style={{ padding: 'clamp(32px, 5vw, 56px)' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 32, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100 }}>{caseStudy.industry}</span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{caseStudy.client}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 40, marginBottom: 40 }}>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 16 }}>Challenge</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 16 }}>Solution</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>{caseStudy.solution}</p>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 20 }}>
                  {caseStudy.results.map((r, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 20, padding: '28px 24px', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.03em', lineHeight: 1 }}>{r.metric}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '10px 0 6px' }}>{r.label}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{r.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ PRICING ═══════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Pricing</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 16px' }}>
                Transparent Security Pricing
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>Every engagement is scoped individually. These tiers give you a starting framework for budgeting your security investment.</p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {pricingPlans.map(plan => (
                <div key={plan.tier}
                  style={{
                    padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 40px)',
                    border: plan.featured ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28,
                    background: plan.featured ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = plan.featured ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  {plan.featured && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />}
                  {plan.featured && (
                    <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, marginBottom: 16 }}>Most Popular</span>
                  )}
                  <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 8px' }}>{plan.tier}</h3>
                  <div style={{ fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 16 }}>{plan.price}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>{plan.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 48, padding: '0 28px', borderRadius: 100, background: plan.featured ? '#22c55e' : 'transparent', border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.1)', color: plan.featured ? '#000' : '#ffffff', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginTop: 32, transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; if (plan.featured) e.currentTarget.style.boxShadow = '0 12px 30px rgba(34,197,94,0.3)'; else e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; if (!plan.featured) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                    Get Started <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 760 }}>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ background: openFaq === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)', border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`, borderRadius: 20, overflow: 'hidden', transition: '0.3s', transitionDelay: `${i * 0.06}s` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textAlign: 'left' }}>{faq.q}</span>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  {openFaq === i && <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ INDUSTRIES ═══════════════ */}
        <section className="section-padding-sm">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>Industries We Secure</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'SaaS', href: '/industries/saas' },
                { name: 'Enterprise', href: '/industries/enterprise' },
                { name: 'Logistics', href: '/industries/logistics' },
              ].map((ind) => (
                <a key={ind.href} href={ind.href} style={{
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CTA ═══════════════ */}
        <section className="section-padding">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get Protected</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Secure Your Business <span style={{ color: '#22c55e' }}>Before</span> the Breach.
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>
              500+ security assessments delivered. Let&apos;s find your vulnerabilities before attackers do. Start with a free consultation.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get a Free Security Assessment <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
              {['OWASP methodology', 'SOC 2 & ISO 27001 ready', 'Free re-testing included'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  {t}
                </div>
              ))}
            </div>
            <TrustBadges compact />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
