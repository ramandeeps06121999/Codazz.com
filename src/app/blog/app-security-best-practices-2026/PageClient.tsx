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
  { id: 'owasp-top-10', label: 'OWASP Top 10 Explained', emoji: '🛡️' },
  { id: 'secure-coding', label: 'Secure Coding Practices', emoji: '💻' },
  { id: 'dependency-scanning', label: 'Dependency Scanning', emoji: '🔍' },
  { id: 'sast-dast', label: 'SAST & DAST Tools', emoji: '🧪' },
  { id: 'api-security', label: 'API Security', emoji: '🔐' },
  { id: 'secrets-management', label: 'Secrets Management', emoji: '🗝️' },
  { id: 'penetration-testing', label: 'Penetration Testing', emoji: '🎯' },
  { id: 'secure-sdlc', label: 'Secure SDLC', emoji: '🔄' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'aws-vs-gcp-vs-azure-2026', title: 'AWS vs Google Cloud vs Azure in 2026', category: 'Engineering', readTime: '15 min' },
  { slug: 'gdpr-compliance-app-development', title: 'GDPR Compliance for App Development 2026', category: 'Compliance', readTime: '14 min' },
  { slug: 'how-to-build-fintech-app', title: 'How to Build a Fintech App in 2026', category: 'Fintech', readTime: '16 min' },
];

export default function AppSecurityBestPracticesClient() {
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
              src="/blog_images/app-security-best-practices-2026.jpg"
              alt="App security best practices OWASP shield and lock icons"
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
              }}>Security</span>
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
                17 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              App Security Best Practices 2026: OWASP Top 10 &amp; Secure Development
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Security breaches cost the average company $4.88M in 2025. This guide covers everything from the OWASP Top 10 to secrets management and penetration testing — so you ship secure software from day one.
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
                    Application security is no longer optional. With ransomware attacks, supply chain compromises, and API breaches making headlines weekly, insecure software is a business liability — not just a technical problem.
                  </p>
                  <p>
                    The <strong style={{ color: '#22c55e' }}>OWASP Top 10</strong> is the industry&apos;s most-referenced list of critical web and mobile application security risks. Combined with modern tooling like <strong style={{ color: '#22c55e' }}>Snyk</strong>, <strong style={{ color: '#22c55e' }}>SAST/DAST scanners</strong>, and <strong style={{ color: '#22c55e' }}>secrets vaults</strong>, it forms the backbone of a production-grade secure SDLC.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, security is baked into every sprint — not bolted on after launch. Here&apos;s our complete 2026 guide.
                  </p>
                </div>

                {/* OWASP Top 10 */}
                <h2 id="owasp-top-10" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>OWASP Top 10 Explained (2026)</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  The Open Worldwide Application Security Project updates its Top 10 list to reflect real-world attack data. Each category represents a class of vulnerability that has caused significant breaches. Here&apos;s what every developer needs to know:
                </p>

                {[
                  { num: 'A01', name: 'Broken Access Control', color: '#ef4444', desc: 'The #1 risk. Users acting outside their intended permissions — accessing other users\' data, admin panels, or unrestricted API endpoints. Fix: enforce server-side authorization on every request, use deny-by-default policies, and test with automated access-control scanners.' },
                  { num: 'A02', name: 'Cryptographic Failures', color: '#f97316', desc: 'Transmitting or storing sensitive data in plaintext, using weak algorithms (MD5, SHA-1), or failing to enforce HTTPS. Fix: TLS 1.3 everywhere, AES-256-GCM for at-rest encryption, bcrypt/Argon2 for passwords, HSTS headers.' },
                  { num: 'A03', name: 'Injection (SQL, NoSQL, OS, LDAP)', color: '#eab308', desc: 'Attacker-supplied data interpreted as commands or queries. SQL injection remains one of the easiest ways to exfiltrate an entire database. Fix: parameterized queries, ORM usage, input validation, and WAF rules.' },
                  { num: 'A04', name: 'Insecure Design', color: '#22c55e', desc: 'Architecture-level weaknesses that cannot be patched with code — missing rate limiting, insecure password reset flows, or business logic flaws. Fix: threat modeling in design phase, security user stories, and abuse case testing.' },
                  { num: 'A05', name: 'Security Misconfiguration', color: '#06b6d4', desc: 'Default credentials, open S3 buckets, verbose error messages, unnecessary features enabled. The #1 cause of cloud data breaches. Fix: infrastructure-as-code with security baselines, CIS benchmarks, automated misconfiguration scanning.' },
                  { num: 'A06', name: 'Vulnerable & Outdated Components', color: '#8b5cf6', desc: 'Using libraries with known CVEs — Log4Shell affected millions of apps using a popular Java logging library. Fix: Dependabot, Snyk, Renovate for automated dependency updates; maintain an SBOM (Software Bill of Materials).' },
                  { num: 'A07', name: 'Identification & Authentication Failures', color: '#ec4899', desc: 'Weak passwords, missing MFA, credential stuffing vulnerabilities, insecure session management. Fix: enforce MFA, implement account lockout, use secure session tokens, integrate with HIBP (Have I Been Pwned) for leaked credential detection.' },
                  { num: 'A08', name: 'Software & Data Integrity Failures', color: '#f97316', desc: 'CI/CD pipelines pulling unverified dependencies, insecure deserialization, or unsigned software updates. Fix: sign all artifacts, verify checksums, use dependency pinning (lockfiles), and secure your CI/CD pipeline with SLSA framework.' },
                  { num: 'A09', name: 'Security Logging & Monitoring Failures', color: '#22c55e', desc: 'No audit trail means breaches go undetected for months (average detection time: 194 days). Fix: centralized logging (CloudWatch, Datadog), alerting on suspicious patterns, SIEM integration, and incident response runbooks.' },
                  { num: 'A10', name: 'Server-Side Request Forgery (SSRF)', color: '#ef4444', desc: 'The app fetches a remote resource based on user-supplied URL — attacker points it at internal metadata endpoints (cloud IMDS) or internal services. Fix: allowlist valid URLs/IPs, disable unnecessary URL-fetch functionality, use SSRF-resistant HTTP clients.' },
                ].map((item, i) => (
                  <div key={i} className="reveal" style={{
                    display: 'flex', gap: 16, marginBottom: 16,
                    background: 'rgba(255,255,255,0.02)', borderRadius: 28,
                    padding: 20, border: '1px solid rgba(255,255,255,0.05)',
                  }}>
                    <div style={{
                      flexShrink: 0, width: 52, height: 52, borderRadius: 12,
                      background: `${item.color}18`, border: `1px solid ${item.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 800, color: item.color, letterSpacing: '0.03em',
                    }}>{item.num}</div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 6px' }}>{item.name}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Secure Coding */}
                <h2 id="secure-coding" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Secure Coding Practices</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Secure coding is a mindset before it is a checklist. These practices should be standard in every pull request:
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  {[
                    { title: 'Input Validation', icon: '✅', points: ['Validate all inputs server-side', 'Allowlist over blocklist', 'Sanitize HTML output (DOMPurify)', 'Reject unexpected content types'] },
                    { title: 'Output Encoding', icon: '🔒', points: ['Context-aware encoding (HTML, JS, CSS, URL)', 'Use framework escaping by default', 'Never concatenate user input into queries', 'CSP headers to block XSS'] },
                    { title: 'Error Handling', icon: '🚫', points: ['Never expose stack traces in production', 'Log errors server-side, show generic messages', 'Avoid revealing system internals', 'Use structured error codes'] },
                    { title: 'Principle of Least Privilege', icon: '🛡️', points: ['DB users with minimal permissions', 'IAM roles scoped to specific resources', 'Read-only tokens for read-only operations', 'Short-lived credentials over static keys'] },
                  ].map((card, i) => (
                    <div key={i} style={{
                      background: 'rgba(34,197,94,0.05)', padding: 20, borderRadius: 28,
                      border: '1px solid rgba(34,197,94,0.15)',
                    }}>
                      <div style={{ fontSize: 28, marginBottom: 10 }}>{card.icon}</div>
                      <h4 style={{ color: '#22c55e', marginBottom: 10, fontSize: 15, fontWeight: 700 }}>{card.title}</h4>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13 }}>
                        {card.points.map((pt, j) => (
                          <li key={j} style={{ marginBottom: 5, color: 'rgba(255,255,255,0.7)' }}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 16, margin: '0 0 16px' }}>XSS Prevention: Context-aware output encoding examples</p>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '10px 8px', color: '#ffffff', fontSize: 13 }}>Context</th>
                        <th style={{ textAlign: 'left', padding: '10px 8px', color: '#22c55e', fontSize: 13 }}>Correct Practice</th>
                        <th style={{ textAlign: 'left', padding: '10px 8px', color: '#ef4444', fontSize: 13 }}>Avoid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['HTML body', 'innerText or textContent', 'innerHTML with user data'],
                        ['HTML attribute', 'encodeURIComponent / framework escaping', 'String concatenation'],
                        ['JavaScript string', 'JSON.stringify() + CSP nonces', 'Raw string interpolation'],
                        ['CSS property', 'CSS.escape() or sanitized allowlist', 'Direct user input in styles'],
                        ['URL parameter', 'encodeURIComponent()', 'Unencoded user data in URLs'],
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '10px 8px', fontSize: 13 }}>{row[0]}</td>
                          <td style={{ padding: '10px 8px', fontSize: 13, color: '#22c55e' }}>{row[1]}</td>
                          <td style={{ padding: '10px 8px', fontSize: 13, color: '#ef4444' }}>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Dependency Scanning */}
                <h2 id="dependency-scanning" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Dependency Scanning: Snyk, Dependabot & More</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  The average Node.js application has 1,000+ transitive dependencies. A single vulnerable package — like the infamous log4shell or event-stream incident — can compromise your entire system. Automated dependency scanning is non-negotiable.
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  {[
                    { tool: 'Snyk', color: '#7c3aed', badge: 'Recommended', features: ['Real-time CVE database', 'Fix PRs automatically', 'License compliance checks', 'Container & IaC scanning', 'IDE plugins for dev-time feedback'] },
                    { tool: 'GitHub Dependabot', color: '#0284c7', badge: 'Free + Built-in', features: ['Automatic PR creation for updates', 'Native GitHub Actions integration', 'Security advisories alerts', 'Grouped update PRs', 'Ecosystem-wide coverage'] },
                    { tool: 'OWASP Dependency-Check', color: '#22c55e', badge: 'Open Source', features: ['CVSS scoring per dependency', 'CI/CD pipeline integration', 'SBOM generation (CycloneDX)', 'Multi-language support', 'Offline NVD database option'] },
                    { tool: 'Socket.dev', color: '#f59e0b', badge: 'Supply Chain', features: ['Detects malicious packages', 'Typosquatting detection', 'Behavioural analysis', 'npm/PyPI/Go support', 'Block installs on threat detection'] },
                  ].map((tool, i) => (
                    <div key={i} style={{
                      background: `${tool.color}0d`, padding: 20, borderRadius: 28,
                      border: `1px solid ${tool.color}25`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <h4 style={{ color: tool.color, margin: 0, fontSize: 16, fontWeight: 700 }}>{tool.tool}</h4>
                        <span style={{ fontSize: 10, color: tool.color, background: `${tool.color}18`, padding: '3px 8px', borderRadius: 100, fontWeight: 600 }}>{tool.badge}</span>
                      </div>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13 }}>
                        {tool.features.map((f, j) => (
                          <li key={j} style={{ marginBottom: 5, color: 'rgba(255,255,255,0.7)' }}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="reveal" style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                  Best practice: run Snyk in your CI pipeline and block merges when high-severity CVEs are detected. Use Dependabot for automated patch PRs with a weekly batching schedule.
                </p>

                {/* SAST/DAST */}
                <h2 id="sast-dast" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>SAST & DAST Tools</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  <strong style={{ color: '#ffffff' }}>SAST (Static Application Security Testing)</strong> analyzes source code for vulnerabilities without executing it — like a security-focused code review at machine speed. <strong style={{ color: '#ffffff' }}>DAST (Dynamic Application Security Testing)</strong> attacks your running application like an external adversary would.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 540 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Tool</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>Type</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Best For</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['SonarQube', 'SAST', 'Multi-language code quality + security', 'Free / Enterprise'],
                        ['Semgrep', 'SAST', 'Fast, customizable pattern matching', 'Free / Team'],
                        ['CodeQL (GitHub)', 'SAST', 'Deep semantic analysis for GitHub repos', 'Free for OSS'],
                        ['Checkmarx', 'SAST', 'Enterprise-grade, compliance-focused', 'Enterprise'],
                        ['OWASP ZAP', 'DAST', 'Open-source web app scanner, CI/CD friendly', 'Free'],
                        ['Burp Suite', 'DAST', 'Manual + automated pen-testing', 'Free / Pro'],
                        ['Nikto', 'DAST', 'Web server misconfiguration scanner', 'Free'],
                        ['Nuclei', 'DAST', 'Fast, template-based vulnerability scanner', 'Free'],
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '10px 8px', fontWeight: 600, color: '#ffffff', fontSize: 14 }}>{row[0]}</td>
                          <td style={{ padding: '10px 8px', fontSize: 13, color: '#22c55e' }}>{row[1]}</td>
                          <td style={{ padding: '10px 8px', fontSize: 13 }}>{row[2]}</td>
                          <td style={{ padding: '10px 8px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.06)', borderRadius: 28, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(34,197,94,0.15)',
                }}>
                  <h4 style={{ color: '#22c55e', marginBottom: 12, fontSize: 16 }}>Recommended CI/CD Security Pipeline</h4>
                  <ol style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                    <li style={{ marginBottom: 8, color: 'rgba(255,255,255,0.8)' }}>Pre-commit: Semgrep (fast, catches secrets and obvious bugs)</li>
                    <li style={{ marginBottom: 8, color: 'rgba(255,255,255,0.8)' }}>PR merge gate: SonarQube SAST + Snyk dependency check</li>
                    <li style={{ marginBottom: 8, color: 'rgba(255,255,255,0.8)' }}>Staging deploy: OWASP ZAP automated DAST scan</li>
                    <li style={{ marginBottom: 8, color: 'rgba(255,255,255,0.8)' }}>Weekly: Full Burp Suite Pro scan against staging</li>
                    <li style={{ color: 'rgba(255,255,255,0.8)' }}>Quarterly: Manual penetration test by external team</li>
                  </ol>
                </div>

                {/* API Security */}
                <h2 id="api-security" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>API Security: Rate Limiting, JWT Best Practices & More</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  APIs are the attack surface of modern applications. Over 83% of internet traffic is API-based, and API attacks grew 400% in 2024. The <strong style={{ color: '#ffffff' }}>OWASP API Security Top 10</strong> is a separate list dedicated entirely to API risks.
                </p>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Rate Limiting Strategy</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    {[
                      { type: 'Per-IP Rate Limit', desc: 'Block brute-force and DDoS attempts — e.g., 100 req/min per IP', color: '#22c55e' },
                      { type: 'Per-User Rate Limit', desc: 'Prevent API abuse from authenticated users — e.g., 1000 req/hour per API key', color: '#0284c7' },
                      { type: 'Per-Endpoint Rate Limit', desc: 'Tighter limits on sensitive endpoints (login: 5 req/min, password reset: 3 req/15min)', color: '#7c3aed' },
                      { type: 'Sliding Window', desc: 'More fair than fixed windows — use Redis with token bucket or leaky bucket algorithm', color: '#f59e0b' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: `${item.color}0d`, padding: 16, borderRadius: 16,
                        border: `1px solid ${item.color}20`,
                      }}>
                        <h4 style={{ color: item.color, fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{item.type}</h4>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>JWT Best Practices</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
                    {[
                      { do: true, text: 'Use RS256 (asymmetric) over HS256 for public-facing APIs' },
                      { do: true, text: 'Set short expiry (15-60 min) with refresh token rotation' },
                      { do: true, text: 'Validate iss, aud, exp, nbf claims on every request' },
                      { do: true, text: 'Store tokens in httpOnly, Secure, SameSite=Strict cookies' },
                      { do: false, text: 'Never store JWTs in localStorage (XSS accessible)' },
                      { do: false, text: 'Never accept the "none" algorithm — always enforce algorithm' },
                      { do: false, text: 'Never put sensitive data (passwords, PII) in JWT payload' },
                      { do: false, text: 'Never use long-lived (days/weeks) access tokens without refresh rotation' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: 10, alignItems: 'flex-start',
                        padding: '12px 16px', borderRadius: 12,
                        background: item.do ? 'rgba(34,197,94,0.06)' : 'rgba(239,68,68,0.06)',
                        border: `1px solid ${item.do ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)'}`,
                      }}>
                        <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{item.do ? '✅' : '❌'}</span>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="reveal" style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                  Also implement: OAuth 2.0 PKCE for mobile apps, mutual TLS (mTLS) for service-to-service APIs, and API gateway-level WAF rules (AWS WAF, Cloudflare) to block common attack patterns before they reach your application.
                </p>

                {/* Secrets Management */}
                <h2 id="secrets-management" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Secrets Management: Vault, AWS Secrets Manager & More</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Hardcoded secrets are one of the most common and easily avoidable vulnerabilities. A GitHub scan in 2024 found over 12 million secrets accidentally committed to public repositories. Your .env files, API keys, database passwords, and certificates need proper management.
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  {[
                    { name: 'HashiCorp Vault', color: '#fbbf24', best: 'Self-hosted / On-prem', features: ['Dynamic secrets (auto-expiring DB creds)', 'Fine-grained ACL policies', 'Audit logging of every secret access', 'Multi-cloud, multi-platform support', 'PKI certificate management'] },
                    { name: 'AWS Secrets Manager', color: '#ff9900', best: 'AWS-native stacks', features: ['Automatic rotation for RDS, Redshift, etc.', 'Native IAM integration', 'Cross-account secret sharing', 'Lambda rotation functions', '$0.40/secret/month pricing'] },
                    { name: 'GCP Secret Manager', color: '#4285f4', best: 'GCP-native stacks', features: ['Versioned secrets with rollback', 'Regional replication options', 'IAM-based access control', 'Audit logs via Cloud Audit Logs', 'Pub/Sub notifications on changes'] },
                    { name: 'Azure Key Vault', color: '#0078d4', best: 'Azure / Microsoft stacks', features: ['HSM-backed key storage', 'Managed identity access', 'Certificate lifecycle management', 'Soft delete with recovery period', 'FIPS 140-2 Level 2 validated'] },
                  ].map((tool, i) => (
                    <div key={i} style={{
                      background: `${tool.color}0d`, padding: 20, borderRadius: 28,
                      border: `1px solid ${tool.color}25`,
                    }}>
                      <h4 style={{ color: tool.color, margin: '0 0 4px', fontSize: 15, fontWeight: 700 }}>{tool.name}</h4>
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', margin: '0 0 12px' }}>Best for: {tool.best}</p>
                      <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13 }}>
                        {tool.features.map((f, j) => (
                          <li key={j} style={{ marginBottom: 5, color: 'rgba(255,255,255,0.7)' }}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="reveal" style={{
                  background: 'rgba(239,68,68,0.06)', borderRadius: 28, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(239,68,68,0.15)',
                }}>
                  <h4 style={{ color: '#ef4444', marginBottom: 12, fontSize: 16 }}>Secrets Hygiene Checklist</h4>
                  <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14, lineHeight: 1.8 }}>
                    <li style={{ color: 'rgba(255,255,255,0.8)' }}>Use git-secrets or Gitleaks as a pre-commit hook to block accidental commits</li>
                    <li style={{ color: 'rgba(255,255,255,0.8)' }}>Enable GitHub secret scanning (automatically enabled for public repos)</li>
                    <li style={{ color: 'rgba(255,255,255,0.8)' }}>Rotate all secrets immediately if a repository is ever made public by mistake</li>
                    <li style={{ color: 'rgba(255,255,255,0.8)' }}>Never pass secrets as environment variables in Docker image layers (use runtime injection)</li>
                    <li style={{ color: 'rgba(255,255,255,0.8)' }}>Audit secret access logs monthly — know who accessed what and when</li>
                  </ul>
                </div>

                {/* Penetration Testing */}
                <h2 id="penetration-testing" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Penetration Testing: Types, Frequency & What to Expect</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Automated scanning finds known vulnerabilities. Penetration testing finds the unknown ones — the business logic flaws, chained exploits, and creative attack vectors that scanners miss. For production applications handling sensitive data, annual pen tests are the minimum. High-risk industries (fintech, healthcare) should test quarterly.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Test Type</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>Scope</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Typical Cost</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Web Application Pen Test', 'OWASP Top 10, business logic, auth flows', '$3K–$15K', '1–2 weeks'],
                        ['Mobile App Pen Test', 'iOS/Android, local storage, traffic analysis', '$5K–$20K', '1–2 weeks'],
                        ['API Pen Test', 'REST/GraphQL endpoints, auth bypass, injection', '$3K–$12K', '1 week'],
                        ['Cloud Configuration Review', 'IAM policies, open buckets, network exposure', '$4K–$15K', '3–5 days'],
                        ['Red Team Exercise', 'Full-scope adversary simulation', '$20K–$100K+', '2–6 weeks'],
                        ['Bug Bounty Program', 'Continuous, community-driven', '$200–$50K per bug', 'Ongoing'],
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '11px 8px', fontWeight: 600, color: '#ffffff', fontSize: 14 }}>{row[0]}</td>
                          <td style={{ padding: '11px 8px', fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{row[1]}</td>
                          <td style={{ padding: '11px 8px', fontSize: 13, color: '#22c55e' }}>{row[2]}</td>
                          <td style={{ padding: '11px 8px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Secure SDLC */}
                <h2 id="secure-sdlc" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Secure SDLC: Shift-Left Security</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  The cost of fixing a vulnerability rises dramatically the later it is found. A bug caught in development costs $80 to fix. The same bug in production costs $7,600. &ldquo;Shift-left&rdquo; means moving security earlier in the development lifecycle — making it part of design and coding, not just QA.
                </p>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  {[
                    { phase: 'Requirements', color: '#22c55e', actions: ['Define security requirements alongside functional ones', 'Document data classification (PII, PHI, PCI)', 'Identify regulatory obligations (GDPR, HIPAA, PCI-DSS)', 'Create security user stories and abuse cases'] },
                    { phase: 'Design', color: '#0284c7', actions: ['Threat modeling (STRIDE, PASTA, or attack trees)', 'Architecture security review', 'Define trust boundaries and data flow diagrams', 'Plan authentication & authorization model'] },
                    { phase: 'Development', color: '#7c3aed', actions: ['Secure coding standards enforcement (linters, SAST)', 'Developer security training (OWASP, secure-by-default frameworks)', 'Code review with security focus', 'Pre-commit hooks (Gitleaks, Semgrep)'] },
                    { phase: 'Testing', color: '#f59e0b', actions: ['SAST scan in CI pipeline (SonarQube, CodeQL)', 'DAST against staging (OWASP ZAP)', 'Dependency vulnerability scanning (Snyk)', 'Security-focused QA test cases'] },
                    { phase: 'Release & Operations', color: '#ef4444', actions: ['Signed artifact deployment (SLSA level 3)', 'Runtime security monitoring (Falco, AWS GuardDuty)', 'Centralized logging & SIEM alerting', 'Incident response plan documented and tested'] },
                  ].map((phase, i) => (
                    <div key={i} className="reveal" style={{
                      display: 'flex', gap: 16, marginBottom: 16,
                      background: 'rgba(255,255,255,0.02)', borderRadius: 28,
                      padding: 20, border: '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <div style={{
                        flexShrink: 0, width: 40, height: 40, borderRadius: 10,
                        background: `${phase.color}18`, border: `1px solid ${phase.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, fontWeight: 800, color: phase.color, letterSpacing: '0.02em', textAlign: 'center',
                      }}>{(i + 1).toString()}</div>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: phase.color, margin: '0 0 8px' }}>{phase.phase}</h3>
                        <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13 }}>
                          {phase.actions.map((a, j) => (
                            <li key={j} style={{ marginBottom: 4, color: 'rgba(255,255,255,0.7)' }}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  {
                    q: 'What is the most critical OWASP Top 10 vulnerability to fix first?',
                    a: 'Broken Access Control (A01) has topped the list since 2021 and accounts for the most real-world breaches. Fix it first by implementing server-side authorization checks on every request, adopting a deny-by-default policy, and running automated access control tests. Cryptographic failures (A02) and injection (A03) are close seconds.',
                  },
                  {
                    q: 'Is SAST or DAST more important for app security?',
                    a: 'Both are essential and catch different things. SAST finds vulnerabilities in source code early (insecure functions, hardcoded credentials, SQL concatenation) but generates more false positives. DAST tests the running application and finds runtime issues (authentication bypass, XSS, misconfigured headers) with fewer false positives. Use both: SAST in CI, DAST against staging before each release.',
                  },
                  {
                    q: 'How should I store API keys and database credentials in a cloud application?',
                    a: 'Never in code, .env files committed to git, or Docker image layers. Use a secrets manager: AWS Secrets Manager, HashiCorp Vault, or Azure Key Vault for production. In local development, use dotenv-vault or similar tools. Grant access to secrets via IAM roles/managed identities — not static credentials. Rotate secrets automatically using the built-in rotation features.',
                  },
                  {
                    q: 'How often should we do penetration testing?',
                    a: 'At minimum, annually for any production application. After major architecture changes or new feature launches. Quarterly for fintech, healthcare, or any application handling sensitive personal data. Consider a continuous bug bounty program (HackerOne, Bugcrowd) alongside scheduled pen tests for ongoing coverage. Always run a fresh pen test before compliance audits (SOC2, ISO 27001).',
                  },
                  {
                    q: 'What security certifications should a software development company have?',
                    a: 'SOC 2 Type II demonstrates ongoing security controls. ISO 27001 is the gold standard for information security management. For healthcare clients, look for HIPAA compliance experience. For payment processing, PCI-DSS expertise matters. At Codazz, we build applications that are compliant-ready from day one, helping our clients achieve their required certifications faster.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 16,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 28, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Build Secure Applications From Day One
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    At Codazz, security is built into every sprint. SAST/DAST in CI, threat modeling in design, secrets vaults, and penetration testing before launch. Let&apos;s build your app the right way.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#22c55e', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Get a Security-First Development Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '8px 0', fontSize: 14,
                          color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
                          paddingLeft: 12,
                        }}>
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          display: 'block', padding: 16,
                          background: 'rgba(255,255,255,0.03)',
                          borderRadius: 12, textDecoration: 'none',
                          border: '1px solid rgba(255,255,255,0.06)',
                          transition: 'all 0.2s',
                        }}>
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>{post.category}</span>
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
