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
  { id: 'why-maintenance', label: 'Why Maintenance Is Non-Negotiable', emoji: '🔒' },
  { id: 'cost-breakdown', label: 'Monthly Cost Breakdown', emoji: '📊' },
  { id: 'fifteen-percent-rule', label: 'The 15% Rule', emoji: '💡' },
  { id: 'sla-tiers', label: 'SLA Tiers & Response Times', emoji: '⏱️' },
  { id: 'retainer-models', label: 'Retainer Models', emoji: '🤝' },
  { id: 'whats-included', label: "What's Included", emoji: '✅' },
  { id: 'mistakes', label: 'Costly Mistakes', emoji: '⚠️' },
  { id: 'cost-by-type', label: 'Cost by App Type', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '10 min' },
  { slug: 'technical-interview-guide-2026', title: 'Technical Interview Guide 2026', category: 'Engineering', readTime: '12 min' },
  { slug: 'staff-augmentation-guide-2026', title: 'Staff Augmentation Guide 2026', category: 'Business', readTime: '9 min' },
];

const faqs = [
  {
    q: 'What is included in app maintenance?',
    a: 'App maintenance covers six core categories: (1) Security patches — updating dependencies with known CVEs, patching server OS vulnerabilities, rotating API keys; (2) Bug fixes — resolving issues reported by users or found in monitoring; (3) OS compatibility — updating the app for each new major iOS and Android release (typically once per year for each platform); (4) Third-party API updates — adapting your app when payment processors, mapping APIs, or auth providers change their APIs; (5) Performance optimization — database query tuning, caching improvements, infrastructure right-sizing; (6) Monitoring and on-call — responding to alerts, investigating outages, and maintaining uptime SLAs. Depending on your retainer, it may also include minor feature enhancements (sometimes called "small enhancements" in agency contracts, capped at a certain number of hours per month).',
  },
  {
    q: 'When should I rebuild vs. continue maintaining my app?',
    a: 'The rebuild-vs-maintain decision depends on three factors: (1) Technical debt ratio — if more than 40% of your development time is spent fighting the codebase rather than building new features, it\'s time to rebuild; (2) Maintenance cost trajectory — if annual maintenance cost exceeds 35–40% of the original development cost and is growing, a rebuild often has a positive ROI within 18–24 months; (3) Platform alignment — if your app is built on a framework that is no longer supported (e.g., AngularJS, Cordova/PhoneGap, older React Native versions with Objective-C bridges), the security risk of staying on unsupported platforms eventually forces a rebuild. A good heuristic: if patching a dependency requires refactoring 30%+ of the codebase, plan a rebuild. If it requires 10–15%, patch and schedule a larger refactor sprint.',
  },
  {
    q: 'Can I reduce maintenance costs after launch?',
    a: 'Yes — but only with deliberate architectural choices made during development. The most effective cost reduction strategies: (1) Choose long-term-support (LTS) framework versions — React 18 LTS has a longer supported window than bleeding-edge versions; (2) Minimize third-party dependencies — every additional npm/pub package is a potential CVE source and update burden. Audit dependencies quarterly and remove unused ones; (3) Invest in automated testing (unit + integration + e2e) — teams with 70%+ test coverage typically spend 40–60% less time on bug-fix maintenance than teams with no tests; (4) Use managed services (PaaS) instead of self-managed infrastructure — AWS RDS, Vercel, Render handle OS patching and uptime for you; (5) Infrastructure as Code (Terraform, Pulumi) — makes environment recreation and scaling changes faster and cheaper.',
  },
  {
    q: 'What happens if I stop maintaining my app?',
    a: 'The consequences escalate in three stages: (1) Months 1–6: Minor bugs accumulate, minor performance degradation, dependency warnings appear. Users notice small issues but the app still works. (2) Months 6–18: Security vulnerabilities go unpatched, creating real breach risk. iOS/Android OS updates break features (camera permissions change, push notification APIs update, new App Store requirements trigger rejection). Third-party APIs deprecate older versions, breaking integrations. (3) Months 18–36+: Apple or Google removes your app from the store for App Store policy non-compliance (this is not hypothetical — Apple removed 200,000+ apps in a single 2022 purge for non-compliance). Security breach results in customer data loss. At this stage, often cheaper to rebuild than to patch the accumulated technical debt. The data is consistent: unmaintained apps see 3–5× higher user churn in year 2 compared to actively maintained apps.',
  },
  {
    q: 'How does Codazz handle app maintenance retainers?',
    a: 'Codazz offers three maintenance retainer tiers: (1) Essential ($2,500/month): 20 hours of developer time for bug fixes and security patches, monthly monitoring review, and Slack access for issue reporting. Best for simple apps with low traffic. (2) Growth ($5,000/month): 40 hours/month, covers OS compatibility updates and minor enhancements, dedicated developer, 4-hour response for critical issues, weekly status reports. Best for mid-stage SaaS or consumer apps. (3) Scale ($8,000–$15,000/month): 80–160 hours/month, dedicated senior engineer + QA, 1-hour P0 response, continuous monitoring, monthly performance optimization reviews, quarterly security audits. Best for fintech, healthtech, and high-traffic consumer apps. All plans include a shared Slack channel, monthly reporting, and are month-to-month with 30-day notice. Get a custom quote at codazz.com/contact.',
  },
];

export default function AppMaintenanceCostGuideClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('why-maintenance');

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = tocSections.map(s => {
        const el = document.getElementById(s.id);
        return { id: s.id, top: el ? el.getBoundingClientRect().top : 9999 };
      });
      const current = offsets.filter(o => o.top <= 160).pop();
      if (current) setActiveSection(current.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* FEATURED IMAGE */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/app-maintenance-cost-guide.jpg"
              alt="app maintenance cost guide 2026"
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '5px 14px', borderRadius: 100 }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 21, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                16 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 900 }}>
              App Maintenance Cost Guide 2026: How Much Does It Cost After Launch?
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 760, marginBottom: 48, fontWeight: 400 }}>
              Security patches, iOS/Android updates, dependency drift, SLA tiers, retainer models — everything you need to budget accurately for app maintenance in 2026.
            </p>

            {/* Author + Share */}
            <div className="reveal reveal-d4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, color: '#22c55e' }}>RM</div>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* SIDEBAR TOC — desktop sticky */}
              <aside style={{ display: 'none' }} className="blog-sidebar">
                <div style={{ position: 'sticky', top: 100, padding: '24px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Table of Contents</p>
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {tocSections.map(s => (
                      <a key={s.id} href={`#${s.id}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 10, fontSize: 13, fontWeight: activeSection === s.id ? 600 : 400, color: activeSection === s.id ? '#22c55e' : 'rgba(255,255,255,0.4)', background: activeSection === s.id ? 'rgba(34,197,94,0.06)' : 'transparent', textDecoration: 'none', transition: 'all 0.2s' }}>
                        <span style={{ fontSize: 14 }}>{s.emoji}</span>
                        {s.label}
                      </a>
                    ))}
                  </nav>
                  <div style={{ marginTop: 28, padding: '20px', borderRadius: 16, background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>Need a Maintenance Partner?</p>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 16, lineHeight: 1.5 }}>Get a free maintenance quote for your app.</p>
                    <Link href="/contact" style={{ display: 'block', textAlign: 'center', padding: '10px 16px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Get a Quote</Link>
                  </div>
                </div>
              </aside>

              <article>

                {/* WHY MAINTENANCE */}
                <div className="reveal" style={{ marginBottom: 64 }} id="why-maintenance">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why App Maintenance Is Non-Negotiable in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Most founders and product teams budget carefully for development and almost nothing for what comes after launch. This is the single most common post-launch mistake in software — and one of the most expensive. A production app is not a finished product. It is a living system that operates in an environment that is constantly changing beneath it: operating systems update, dependencies accumulate vulnerabilities, payment APIs change, and platform policies shift. Without maintenance, a $300,000 app can become unusable within 18–24 months.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The forces driving mandatory maintenance are structural — they are not optional challenges you can defer indefinitely. Here is what is actively working against your unattended app right now:
                  </p>

                  <div style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
                    {[
                      {
                        threat: 'Security Vulnerabilities (CVEs)',
                        color: '#ef4444',
                        severity: 'Critical',
                        desc: 'Major JavaScript frameworks averaged 54 new CVEs (Common Vulnerabilities and Exposures) in 2025. Node.js, React, Next.js, Express, and common npm packages regularly receive security patches. An app running npm packages that are 12+ months out of date is statistically likely to have at least one critical or high-severity vulnerability. The average cost of a data breach in 2025 was $4.88 million (IBM Cost of a Data Breach Report). A $15,000/year maintenance contract is the cheapest breach prevention you can buy.',
                        data: '54 avg CVEs/year in major frameworks · $4.88M avg breach cost · 72% of breaches exploit known vulnerabilities',
                      },
                      {
                        threat: 'Annual iOS & Android SDK Updates',
                        color: '#f59e0b',
                        severity: 'High',
                        desc: 'Apple releases a new major iOS version every September (iOS 18 in 2024, iOS 19 expected September 2026). Each major release deprecates old APIs, changes permission models (camera, location, notifications), and introduces new App Store requirements. Google follows a similar annual cycle with Android releases. Apps built on deprecated APIs stop working on new OS versions — users on the latest iPhone see crashes your QA team never caught. App Store Connect requires apps to be built with the latest Xcode SDK within 12 months of a new iOS release or they become unavailable to new downloads.',
                        data: '2 mandatory SDK updates/year (iOS + Android) · 12-month window before App Store removal · $3K–$15K per annual update cycle',
                      },
                      {
                        threat: 'Dependency Drift',
                        color: '#a855f7',
                        severity: 'High',
                        desc: 'A typical React Native or Next.js project has 200–500 npm package dependencies. Each package has its own release cycle. After 12 months without updates, the gap between your versions and current versions creates a compounding upgrade problem — upgrading a major dependency (e.g., React 18 → 19) may require updating 30+ dependent packages that have introduced breaking changes. Teams that update dependencies monthly spend 2–4 hours/month. Teams that wait 18 months spend 40–80 hours in a single "dependency debt sprint" — often breaking features that worked fine.',
                        data: '200–500 npm packages in typical app · Monthly updates: 2–4 hrs · 18-month deferred: 40–80 hrs of breaking changes',
                      },
                      {
                        threat: 'App Store Policy Compliance',
                        color: '#22c55e',
                        severity: 'High',
                        desc: 'Apple and Google update their App Store review guidelines annually, with significant changes requiring developer action. Recent examples: Apple\'s App Tracking Transparency (ATT) framework required opt-in prompts for all apps using IDFA; Google required all apps targeting children to comply with Families Policy by deadlines or face removal; Apple now requires privacy nutrition labels and App Privacy Report compliance. Non-compliant apps are removed — Apple removed 153,000 apps in 2022 and 173,000 apps in 2024 for policy violations. Monitoring App Store policy changes and implementing compliance updates is a maintenance function.',
                        data: 'Apple removed 173K+ apps in 2024 · New privacy requirements in 2025/2026 (required ATT, App Privacy Report) · Non-compliance = removal',
                      },
                    ].map(item => (
                      <div key={item.threat} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}20` }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.threat}</h3>
                          <span style={{ padding: '2px 10px', borderRadius: 100, background: `${item.color}15`, color: item.color, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>{item.severity}</span>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 12 }}>{item.desc}</p>
                        <p style={{ fontSize: 11, color: `${item.color}99`, fontStyle: 'italic', margin: 0, padding: '8px 12px', borderRadius: 8, background: `${item.color}06`, border: `1px solid ${item.color}12` }}>{item.data}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* COST BREAKDOWN */}
                <div className="reveal" style={{ marginBottom: 64 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Monthly App Maintenance Cost Breakdown
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    App maintenance cost has two layers: fixed infrastructure and tooling costs (predictable, recurring), and variable labour costs (dependent on how many issues arise and how much feature work is included). Most companies underestimate the infrastructure layer entirely — then get surprised by AWS bills, monitoring fees, and security scanning costs.
                  </p>

                  <div style={{ overflowX: 'auto', marginBottom: 32 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                      <thead>
                        <tr>
                          {['Category', 'Tool / Service', 'Small App', 'Mid-Tier App', 'Enterprise App'].map(h => (
                            <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.06)', whiteSpace: 'nowrap' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { category: 'Hosting / Infra', tool: 'AWS / GCP / Vercel / Render', small: '$50–$200/mo', mid: '$300–$1,500/mo', enterprise: '$2,000–$5,000+/mo', color: '#22c55e' },
                          { category: 'Monitoring & APM', tool: 'Datadog / New Relic / Sentry', small: '$20–$50/mo', mid: '$100–$300/mo', enterprise: '$300–$500/mo', color: '#3b82f6' },
                          { category: 'Security Scanning', tool: 'Snyk / GitHub Advanced Security', small: '$25/mo (free tier)', mid: '$100–$200/mo', enterprise: '$200–$300/mo', color: '#a855f7' },
                          { category: 'Error Tracking', tool: 'Sentry / Bugsnag', small: '$0–$26/mo', mid: '$80–$200/mo', enterprise: '$200–$500/mo', color: '#f59e0b' },
                          { category: 'Log Management', tool: 'Datadog Logs / Logtail', small: '$0–$30/mo', mid: '$50–$200/mo', enterprise: '$200–$1,000/mo', color: '#06b6d4' },
                          { category: 'Bug Fixes (Labour)', tool: '10–20 hrs/mo × developer rate', small: '$1,500–$3,000/mo', mid: '$3,000–$8,000/mo', enterprise: '$8,000–$20,000/mo', color: '#ec4899' },
                          { category: 'OS Compatibility', tool: 'Annual iOS + Android updates', small: '$250–$500/mo amortized', mid: '$750–$1,500/mo amortized', enterprise: '$1,500–$3,000/mo amortized', color: '#22c55e' },
                          { category: '3rd-Party API Updates', tool: 'Stripe, Plaid, Maps, Auth', small: '$0–$200/mo amortized', mid: '$200–$600/mo amortized', enterprise: '$500–$2,000/mo amortized', color: '#3b82f6' },
                        ].map((row, i) => (
                          <tr key={row.category} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                              <span style={{ fontSize: 12, fontWeight: 600, color: row.color }}>{row.category}</span>
                            </td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{row.tool}</td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ffffff', fontWeight: 600, fontSize: 13 }}>{row.small}</td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ffffff', fontWeight: 600, fontSize: 13 }}>{row.mid}</td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ffffff', fontWeight: 600, fontSize: 13 }}>{row.enterprise}</td>
                          </tr>
                        ))}
                        <tr style={{ background: 'rgba(34,197,94,0.04)' }}>
                          <td colSpan={2} style={{ padding: '16px', borderTop: '1px solid rgba(34,197,94,0.15)', color: '#22c55e', fontWeight: 700, fontSize: 13 }}>Monthly Total (est.)</td>
                          <td style={{ padding: '16px', borderTop: '1px solid rgba(34,197,94,0.15)', color: '#22c55e', fontWeight: 800, fontSize: 14 }}>$1,845–$3,980</td>
                          <td style={{ padding: '16px', borderTop: '1px solid rgba(34,197,94,0.15)', color: '#22c55e', fontWeight: 800, fontSize: 14 }}>$4,530–$12,500</td>
                          <td style={{ padding: '16px', borderTop: '1px solid rgba(34,197,94,0.15)', color: '#22c55e', fontWeight: 800, fontSize: 14 }}>$12,900–$32,300</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Note on labour rates:</strong> Bug fix hours are calculated at $150/hr for a North American senior developer. Codazz's Canada + India hybrid model delivers the same quality at $80–$100/hr effective blended rate, reducing the labour component of maintenance by 35–45%.
                    </p>
                  </div>
                </div>

                {/* 15% RULE */}
                <div className="reveal" style={{ marginBottom: 64 }} id="fifteen-percent-rule">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The 15–20% Rule: The Industry Standard for Maintenance Budgeting
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The most widely cited rule in software maintenance budgeting is the 15–20% rule: budget 15–20% of your original development cost per year for maintenance. This figure originates from Gartner, is cited in the IEEE Software Engineering Body of Knowledge (SWEBOK), and is consistently validated by agency experience data across thousands of client projects. It is a reasonable starting estimate, not a precise formula — actual costs depend on app complexity, technology choices, team location, and how much feature development is bundled into the maintenance contract.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16, marginBottom: 28 }}>
                    {[
                      { devCost: '$50,000', range: '$7,500 – $10,000', monthly: '~$625 – $833/mo', label: 'Simple App (MVP)' },
                      { devCost: '$100,000', range: '$15,000 – $20,000', monthly: '~$1,250 – $1,667/mo', label: 'Mid-Tier App' },
                      { devCost: '$250,000', range: '$37,500 – $50,000', monthly: '~$3,125 – $4,167/mo', label: 'Full-Featured App' },
                      { devCost: '$500,000', range: '$75,000 – $100,000', monthly: '~$6,250 – $8,333/mo', label: 'Enterprise Platform' },
                      { devCost: '$1,000,000', range: '$150,000 – $200,000', monthly: '~$12,500 – $16,667/mo', label: 'Large Enterprise' },
                    ].map(item => (
                      <div key={item.devCost} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', margin: '0 0 8px' }}>{item.label}</p>
                        <p style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.4)', margin: '0 0 4px' }}>Dev cost: {item.devCost}</p>
                        <p style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', margin: '0 0 4px', letterSpacing: '-0.03em' }}>{item.range}/yr</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: 0 }}>{item.monthly}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)', marginBottom: 20 }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ef4444', margin: '0 0 14px' }}>Why the 15% Rule Is Often Underestimated</h3>
                    <div style={{ display: 'grid', gap: 10 }}>
                      {[
                        { reason: 'Scope Creep in Maintenance Contracts', desc: 'Maintenance retainers frequently absorb minor feature requests that should be billed separately. Without clear scope boundaries, the 15% budget gets consumed by "small enhancements" that collectively constitute new development.' },
                        { reason: 'New Platform Version Complexity', desc: 'iOS 18 → 19 might require a 2-week sprint if Apple deprecates APIs your app depends on heavily. React Native major version upgrades (0.73 → 0.74 → 0.75) can require 3–6 weeks of breaking change resolution. These are not "bug fixes" — they are mandatory upgrade work that the 15% must absorb.' },
                        { reason: 'Infrastructure Cost Growth', desc: 'As your user base grows, AWS/GCP bills grow faster than the 15% rule assumes. A $100K app with 100 users has very different infrastructure costs than the same app with 100,000 users. Maintenance budgets should be revisited annually as traffic scales.' },
                        { reason: 'Third-Party API Changes', desc: 'Stripe has changed its API significantly 4 times in the past 5 years. Twilio, Mapbox, Google Maps, Plaid, and social login providers all deprecate API versions on their own schedules. Each change requires developer hours — sometimes a few hours, sometimes weeks if the integration is deep.' },
                      ].map(item => (
                        <div key={item.reason} style={{ padding: '14px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                          <p style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.reason}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.55 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SLA TIERS */}
                <div className="reveal" style={{ marginBottom: 64 }} id="sla-tiers">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    SLA Tiers, Response Times & Penalty Clauses
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    A Service Level Agreement (SLA) defines how quickly your maintenance partner must respond to and resolve different categories of issues. When negotiating a maintenance contract, the SLA is the most important document — it determines the commercial risk if your app goes down at 2am on a Saturday. Industry-standard SLA tiers use a P0–P3 priority classification system.
                  </p>

                  <div style={{ overflowX: 'auto', marginBottom: 28 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                      <thead>
                        <tr>
                          {['Priority', 'Label', 'Response Time', 'Resolution Target', 'Examples', 'Escalation'].map(h => (
                            <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.06)', whiteSpace: 'nowrap' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            priority: 'P0',
                            label: 'Critical',
                            color: '#ef4444',
                            response: '< 1 hour',
                            resolution: '4 hours',
                            examples: 'Complete app outage, data breach, payment processing down, login impossible',
                            escalation: 'On-call engineer immediately. CEO/CTO notification. Hourly status updates.',
                          },
                          {
                            priority: 'P1',
                            label: 'High',
                            color: '#f59e0b',
                            response: '< 4 hours',
                            resolution: '24 hours',
                            examples: 'Core feature broken for all users (checkout, search), significant performance degradation (>5s load times), security vulnerability disclosed',
                            escalation: 'Engineer assigned within 4hrs. 4-hour status updates. Management informed.',
                          },
                          {
                            priority: 'P2',
                            label: 'Medium',
                            color: '#3b82f6',
                            response: '< 24 hours',
                            resolution: '72 hours',
                            examples: 'Feature broken for subset of users, non-critical integration failing, performance issue affecting <25% of users',
                            escalation: 'Added to next sprint. Daily status update until resolved.',
                          },
                          {
                            priority: 'P3',
                            label: 'Low',
                            color: '#22c55e',
                            response: '< 72 hours',
                            resolution: 'Next release',
                            examples: 'UI/cosmetic bugs, minor copy errors, non-critical analytics gaps, feature requests',
                            escalation: 'Logged in backlog. Addressed in scheduled maintenance window.',
                          },
                        ].map((row, i) => (
                          <tr key={row.priority} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                              <span style={{ padding: '4px 10px', borderRadius: 6, background: `${row.color}15`, color: row.color, fontSize: 12, fontWeight: 800 }}>{row.priority}</span>
                            </td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: row.color, fontWeight: 700, fontSize: 12 }}>{row.label}</td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ffffff', fontWeight: 700, whiteSpace: 'nowrap' }}>{row.response}</td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.6)', whiteSpace: 'nowrap' }}>{row.resolution}</td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.45)', fontSize: 12, lineHeight: 1.5 }}>{row.examples}</td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', fontSize: 11, lineHeight: 1.5 }}>{row.escalation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 14px' }}>SLA Penalty Clauses: What to Negotiate</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16 }}>
                      SLA penalty clauses (also called "service credits") compensate you when your vendor misses response/resolution targets. Industry-standard penalty structures:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
                      {[
                        { scenario: 'P0 response missed (>1hr)', penalty: '10% of monthly retainer credit' },
                        { scenario: 'P0 resolution missed (>4hrs)', penalty: '20% of monthly retainer credit' },
                        { scenario: 'Monthly uptime <99.9% (SaaS)', penalty: '5–15% monthly credit per 0.1% below target' },
                        { scenario: 'P1 response missed (>4hrs)', penalty: '5% of monthly retainer credit' },
                        { scenario: 'Repeated P0 (3+ in 1 month)', penalty: 'Right to terminate contract with 7-day notice' },
                        { scenario: 'Data breach due to unmaintained dep', penalty: 'Full indemnification clause (negotiate separately)' },
                      ].map(item => (
                        <div key={item.scenario} style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)' }}>
                          <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', margin: '0 0 4px' }}>{item.scenario}</p>
                          <p style={{ fontSize: 12, color: '#ef4444', margin: 0, fontWeight: 600 }}>{item.penalty}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RETAINER MODELS */}
                <div className="reveal" style={{ marginBottom: 64 }} id="retainer-models">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Maintenance Retainer Models: Which Structure Is Right for You?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    App maintenance can be structured in four primary commercial models. Each has meaningfully different cost profiles, flexibility levels, and risk distributions. Most agencies offer multiple models — the right choice depends on your app's stability, your budget predictability requirements, and how active your product roadmap is.
                  </p>

                  <div style={{ display: 'grid', gap: 16 }}>
                    {[
                      {
                        model: 'Fixed Monthly Retainer',
                        color: '#22c55e',
                        cost: '$2,000 – $15,000/month',
                        structure: 'Pay a fixed monthly fee for a defined scope of maintenance work, regardless of actual hours used that month.',
                        pros: ['Fully predictable cost — easy to budget', 'Vendor motivated to be efficient (no extra billing for faster work)', 'Usually includes guaranteed SLA response times', 'Best for companies with consistent maintenance needs'],
                        cons: ['Unused hours typically don\'t roll over', 'Can feel expensive in quiet months with few issues', 'Scope creep disputes if contract is poorly defined'],
                        bestFor: 'Series A+ companies, apps with active user bases, any app where downtime has direct revenue impact',
                      },
                      {
                        model: 'Hourly Bank / Hour Bucket',
                        color: '#3b82f6',
                        cost: '$80–$180/hr, sold in 10–40hr/mo bundles',
                        structure: 'Pre-purchase a block of hours each month. Use them for any mix of maintenance, bug fixes, and minor enhancements.',
                        pros: ['Flexibility to use hours for any work type', 'Unused hours may partially roll over (negotiate)', 'Lower cost in slow months', 'Easy to scale up/down quarterly'],
                        cons: ['Hours can run out mid-month for complex issues', 'Cost unpredictable if incidents spike', 'Vendor has no incentive to be efficient (hours = billing)', 'Often excludes SLA response guarantees'],
                        bestFor: 'Early-stage apps with low traffic, apps with predictable low maintenance needs, experimental products',
                      },
                      {
                        model: 'Dedicated Maintenance Engineer',
                        color: '#a855f7',
                        cost: '$6,000 – $18,000/month (full-time equivalent)',
                        structure: 'A dedicated developer (or half-time developer) focused entirely on your platform\'s ongoing reliability, stability, and maintenance.',
                        pros: ['Deep product knowledge builds over time', 'Proactive maintenance (finds issues before users report)', 'Integrates into your team\'s Slack, Jira, standups', 'Handles everything from security to minor features', 'Best long-term quality outcome'],
                        cons: ['Higher upfront cost than issue-based models', 'Requires active management direction', 'Risk if engineer turns over (knowledge concentration)'],
                        bestFor: 'Enterprise apps, complex codebases, companies without internal engineering, apps in regulated industries',
                      },
                      {
                        model: 'Project-Based (Ad Hoc)',
                        color: '#f59e0b',
                        cost: '$3,000 – $30,000 per project',
                        structure: 'No ongoing retainer. Hire for specific maintenance projects: an iOS 19 compatibility update, a dependency upgrade sprint, or a security audit and patch.',
                        pros: ['Pay only when work is needed', 'Lowest cost for very stable apps', 'Easy to compare multiple vendors'],
                        cons: ['No guaranteed availability when issues arise', 'Cold starts — vendor must re-learn codebase each time', 'No SLA or on-call coverage', 'Premium rates charged for urgent work', 'P0 incidents become expensive emergencies'],
                        bestFor: 'Internal tools with low traffic, apps in maintenance mode, very simple apps with few dependencies',
                      },
                    ].map(item => (
                      <div key={item.model} style={{ padding: '28px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}20` }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.model}</h3>
                          <span style={{ padding: '4px 12px', borderRadius: 100, background: `${item.color}12`, color: item.color, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{item.cost}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 16 }}>{item.structure}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 14 }}>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 10px' }}>Pros</p>
                            {item.pros.map(p => (
                              <div key={p} style={{ display: 'flex', gap: 8, marginBottom: 7 }}>
                                <span style={{ color: item.color, fontSize: 12, flexShrink: 0 }}>✓</span>
                                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{p}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 10px' }}>Cons</p>
                            {item.cons.map(c => (
                              <div key={c} style={{ display: 'flex', gap: 8, marginBottom: 7 }}>
                                <span style={{ color: 'rgba(239,68,68,0.6)', fontSize: 12, flexShrink: 0 }}>✗</span>
                                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>{c}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <p style={{ fontSize: 12, color: `${item.color}99`, fontStyle: 'italic', margin: 0 }}>Best for: {item.bestFor}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WHAT'S INCLUDED */}
                <div className="reveal" style={{ marginBottom: 64 }} id="whats-included">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    What App Maintenance Actually Covers: 6 Categories
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    A comprehensive maintenance contract covers six distinct categories of work. When evaluating vendors, confirm each category is explicitly included — vague "maintenance and support" language in contracts typically means only bug fixes and emergency response, not the full scope below.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      {
                        category: 'Security Patches',
                        icon: '🔒',
                        color: '#ef4444',
                        desc: 'Regular dependency audits using npm audit, Snyk, or GitHub Dependabot. Patch all high/critical CVEs within SLA timeframes. Update server OS and runtime environments (Node.js LTS versions). Rotate API keys and secrets on a schedule. Annual third-party penetration test (for high-security apps).',
                        frequency: 'Continuous monitoring, patches applied within 48hrs of CVE publication for critical severity.',
                      },
                      {
                        category: 'Performance Optimization',
                        icon: '⚡',
                        color: '#f59e0b',
                        desc: 'Monthly review of Core Web Vitals (LCP, CLS, FID). Database query performance analysis — add indexes, rewrite N+1 queries, analyze slow query logs. Cache hit rate monitoring. CDN performance review. API response time profiling. Right-size infrastructure based on actual usage patterns.',
                        frequency: 'Monthly performance review. Optimization sprints quarterly or as metrics degrade.',
                      },
                      {
                        category: 'Bug Fixes',
                        icon: '🐛',
                        color: '#22c55e',
                        desc: 'Triage and resolve user-reported issues. Monitor error tracking (Sentry/Bugsnag) for unhandled exceptions and crash rates. Fix edge cases discovered post-launch. Regression testing after fixes. Root cause analysis for recurring issues.',
                        frequency: 'P0/P1 bugs within SLA. P2/P3 bugs in scheduled release cycles (bi-weekly or monthly).',
                      },
                      {
                        category: 'OS Compatibility',
                        icon: '📱',
                        color: '#3b82f6',
                        desc: 'Test and update app for each new iOS major release (September annually). Test and update for each major Android release (August–October annually). Update to latest React Native / Flutter SDK targeting latest OS APIs. Resolve deprecated API warnings before they become errors. App Store Connect build requirements (minimum iOS version support).',
                        frequency: 'Annual iOS update (Aug–Sep). Annual Android update (Sep–Nov). Minor OS betas tested quarterly.',
                      },
                      {
                        category: '3rd-Party API Updates',
                        icon: '🔗',
                        color: '#a855f7',
                        desc: 'Monitor vendor deprecation notices (Stripe, Plaid, Twilio, Google Maps, Apple Auth, Facebook Login all publish API deprecation timelines). Migrate to new API versions before old versions are sunset. Test integrations after vendor releases major updates. Update SDK versions for all third-party services.',
                        frequency: 'Monitor vendor changelogs monthly. Major migrations planned 3–6 months before deprecation deadlines.',
                      },
                      {
                        category: 'Analytics & Monitoring',
                        icon: '📊',
                        color: '#06b6d4',
                        desc: 'Maintain uptime monitoring (Uptime Robot, Better Uptime, or Datadog Synthetics). Configure alerts for error rate spikes, latency increases, and infrastructure anomalies. Monthly analytics reports: active users, retention, crash rate, API response times. Capacity planning based on growth trends.',
                        frequency: 'Continuous uptime monitoring. Monthly analytics reporting. Quarterly capacity review.',
                      },
                    ].map(item => (
                      <div key={item.category} style={{ padding: '24px', borderRadius: 16, background: `${item.color}06`, border: `1px solid ${item.color}15` }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                          <span style={{ fontSize: 20 }}>{item.icon}</span>
                          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: item.color, margin: 0 }}>{item.category}</h3>
                        </div>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</p>
                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', margin: 0, fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 10 }}>{item.frequency}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MISTAKES */}
                <div className="reveal" style={{ marginBottom: 64 }} id="mistakes">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    5 Costly App Maintenance Mistakes (And How to Avoid Them)
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    These are the mistakes Codazz sees most frequently when inheriting apps from clients who are switching vendors or taking on a previously unmaintained codebase. Each one has a real financial cost.
                  </p>

                  <div style={{ display: 'grid', gap: 16 }}>
                    {[
                      {
                        mistake: 'Not Budgeting for Maintenance at Launch',
                        cost: 'Emergency rebuild costs: $50K–$300K',
                        color: '#ef4444',
                        desc: 'The most common and most avoidable mistake. Companies spend their entire product budget on development and launch with nothing allocated for maintenance. When the first major iOS update breaks the app or the first security patch sprint is needed, there is no budget — resulting in either a deferred fix that compounds into a larger problem, or an emergency spend at premium rates. Fix: allocate 15–20% of your dev budget as an annual maintenance fund at the same time you fund development.',
                        prevention: 'Budget 15–20% of dev cost annually for maintenance before you sign any development contract.',
                      },
                      {
                        mistake: 'Ignoring Dependency Updates for 12+ Months',
                        cost: 'Dependency debt sprint: $15K–$60K',
                        color: '#f59e0b',
                        desc: 'Every month you skip dependency updates, the upgrade path gets more complex. React 18 → 19 requires migrating deprecated lifecycle methods. A 3-version jump in Stripe SDK requires testing every payment flow. Breaking changes in react-navigation 6 → 7 require updating every navigation call in your codebase. Teams that update monthly spend 2–4 hours/month. Teams that skip for 18 months spend 6–10 weeks on a "dependency debt sprint" — often with regressions.',
                        prevention: 'Schedule a dependency review every 6 weeks. Use Renovate Bot or Dependabot to automate minor version updates.',
                      },
                      {
                        mistake: 'No Monitoring = Surprise Outages',
                        cost: 'Revenue loss: $500–$50K per hour of downtime',
                        color: '#a855f7',
                        desc: 'Without error tracking (Sentry) and uptime monitoring (Uptime Robot or Datadog), outages are discovered by users — not by you. Worse, you may have no idea how long the outage lasted or which users were affected. A $20/month Sentry plan and a free Uptime Robot account are the minimum viable monitoring stack. For production apps with revenue at stake, add APM (New Relic or Datadog) to catch performance regressions before they become outages.',
                        prevention: 'Set up Sentry + Uptime Robot before launch day. Configure PagerDuty alerts for your on-call developer.',
                      },
                      {
                        mistake: 'Letting App Store Compliance Lapse',
                        cost: 'App removal + emergency update: $10K–$40K',
                        color: '#22c55e',
                        desc: 'Apple and Google publish compliance deadlines in their developer documentation — but they are easy to miss if nobody is actively monitoring them. Examples: Apple required all apps to support Sign in with Apple if using social login by June 2020. Apps had to use latest SDK targeting iOS 16 by April 2023. Apps not targeting iOS 17 SDK became unavailable for new downloads by April 2024. Missing a compliance deadline means your app is removed from the App Store — affecting new downloads immediately and existing users if Apple issues a hard removal. Emergency compliance fixes at premium rates ($150–$250/hr) are far more expensive than proactive monitoring.',
                        prevention: 'Subscribe to Apple Developer News + Google Play Policy Updates. Track deadlines in your engineering calendar 6 months in advance.',
                      },
                      {
                        mistake: 'Not Documenting Technical Debt',
                        cost: 'Future velocity loss: 30–50% slower development',
                        color: '#3b82f6',
                        desc: 'Technical debt — shortcuts, workarounds, and deferred refactors — is inevitable in any codebase. The problem is undocumented technical debt. When a new developer joins and encounters a workaround, they may unknowingly build on top of it, compounding the issue. Or worse, they "fix" the symptom without understanding the underlying problem, breaking something else. Documented technical debt is manageable. Undocumented technical debt is a hidden tax on every future development sprint.',
                        prevention: 'Maintain a tech debt register (a simple Notion page or GitHub label works). Review and prioritize quarterly. Allocate 10–20% of each sprint to tech debt reduction.',
                      },
                    ].map((item, i) => (
                      <div key={item.mistake} style={{ padding: '28px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}20`, position: 'relative' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 14 }}>
                          <div style={{ width: 28, height: 28, borderRadius: '50%', background: `${item.color}15`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <span style={{ fontSize: 12, fontWeight: 800, color: item.color }}>{i + 1}</span>
                          </div>
                          <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{item.mistake}</h3>
                            <span style={{ fontSize: 11, fontWeight: 700, color: item.color, padding: '2px 8px', borderRadius: 4, background: `${item.color}12` }}>{item.cost}</span>
                          </div>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 14 }}>{item.desc}</p>
                        <div style={{ padding: '10px 14px', borderRadius: 10, background: `${item.color}06`, border: `1px solid ${item.color}12` }}>
                          <p style={{ fontSize: 12, color: `${item.color}cc`, margin: 0, lineHeight: 1.55 }}><strong>Prevention:</strong> {item.prevention}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* COST BY APP TYPE */}
                <div className="reveal" style={{ marginBottom: 64 }} id="cost-by-type">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Annual Maintenance Cost by App Type
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Maintenance cost varies significantly by app category. Fintech and HealthTech apps carry the highest maintenance burden because of regulatory compliance requirements (PCI DSS, HIPAA, SOC 2), mandatory security audits, and high-stakes third-party integrations. Simple marketing apps sit at the opposite end of the spectrum.
                  </p>

                  <div style={{ overflowX: 'auto', marginBottom: 28 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                      <thead>
                        <tr>
                          {['App Type', 'Annual Cost', 'Monthly', 'Key Drivers'].map(h => (
                            <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { type: 'Simple / Marketing App', annual: '$5K – $15K', monthly: '$417 – $1,250', drivers: 'Hosting, basic bug fixes, annual OS update. Low complexity, low traffic.', color: '#22c55e' },
                          { type: 'Mid-Tier SaaS / Consumer App', annual: '$15K – $40K', monthly: '$1,250 – $3,333', drivers: 'Monitoring, dependency updates, bug fixes, OS compatibility, API integrations.', color: '#3b82f6' },
                          { type: 'Enterprise / B2B Platform', annual: '$40K – $150K', monthly: '$3,333 – $12,500', drivers: 'Multi-environment infra, security audits, integrations (SSO, ERP, CRM), compliance.', color: '#a855f7' },
                          { type: 'IoT / Hardware-Connected App', annual: '$30K – $80K', monthly: '$2,500 – $6,667', drivers: 'Firmware compatibility, real-time data pipeline maintenance, device API versioning.', color: '#f59e0b' },
                          { type: 'Fintech App (payments, banking)', annual: '$50K – $200K', monthly: '$4,167 – $16,667', drivers: 'PCI DSS compliance, security audits, Stripe/Plaid updates, fraud monitoring, SOC 2.', color: '#ef4444' },
                          { type: 'HealthTech / MedTech App', annual: '$60K – $200K', monthly: '$5,000 – $16,667', drivers: 'HIPAA compliance, PHI security reviews, EHR integration maintenance, annual HIPAA audits.', color: '#ec4899' },
                          { type: 'Marketplace / On-Demand App', annual: '$25K – $80K', monthly: '$2,083 – $6,667', drivers: 'Payment processing updates, maps/geolocation APIs, real-time infra, fraud detection.', color: '#06b6d4' },
                        ].map((row, i) => (
                          <tr key={row.type} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ffffff', fontWeight: 600, fontSize: 13 }}>{row.type}</td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                              <span style={{ color: row.color, fontWeight: 800, fontSize: 14 }}>{row.annual}</span>
                            </td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)', fontSize: 12, whiteSpace: 'nowrap' }}>{row.monthly}</td>
                            <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.5 }}>{row.drivers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Codazz pricing context:</strong> The ranges above assume North American developer rates ($150–$200/hr senior). Codazz's Canada + India hybrid model delivers equivalent outcomes at $80–$100/hr blended rate — reducing the annual maintenance cost for most app types by 35–45% compared to fully local North American teams.
                    </p>
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 64 }} id="faq">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 28 }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, textAlign: 'left' }}
                        >
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                          <span style={{ fontSize: 22, color: '#22c55e', flexShrink: 0, lineHeight: 1, fontWeight: 300 }}>{openFaq === i ? '×' : '+'}</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="reveal" style={{ marginBottom: 64 }}>
                  <div style={{ padding: 'clamp(36px, 5vw, 56px)', borderRadius: 28, background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.03) 100%)', border: '1px solid rgba(34,197,94,0.15)', textAlign: 'center' }}>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>App Maintenance</p>
                    <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.2 }}>
                      Get a Maintenance Quote
                    </h2>
                    <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 520, margin: '0 auto 32px' }}>
                      Codazz provides fixed-price maintenance retainers with guaranteed SLA response times, monthly reporting, and security-first dependency management. Based in Edmonton + Chandigarh.
                    </p>
                    <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px', borderRadius: 100, background: '#22c55e', color: '#000000', fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}>
                      Get a Free Maintenance Quote
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>

                {/* RELATED POSTS */}
                <div className="reveal">
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 20 }}>Related Articles</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
                    {relatedPosts.map(post => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} style={{ padding: '20px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none', display: 'block', transition: 'border-color 0.2s' }}>
                        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 8, display: 'block' }}>{post.category} · {post.readTime}</span>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0, lineHeight: 1.4 }}>{post.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>

              </article>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
