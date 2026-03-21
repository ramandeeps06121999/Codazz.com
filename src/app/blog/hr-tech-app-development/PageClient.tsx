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
  { id: 'hrms-modules', label: 'HRMS Core Modules', emoji: '⚙️' },
  { id: 'payroll-engine', label: 'Payroll Engine', emoji: '💸' },
  { id: 'compliance', label: 'Compliance & GDPR', emoji: '🔒' },
  { id: 'ats-recruitment', label: 'ATS & Recruitment', emoji: '🎯' },
  { id: 'integrations', label: 'Accounting Integrations', emoji: '🔗' },
  { id: 'mobile-hr', label: 'Mobile HR Features', emoji: '📱' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'build-vs-buy', label: 'Build vs Buy Analysis', emoji: '⚖️' },
  { id: 'tech-stack', label: 'Tech Stack Recommendation', emoji: '🛠️' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'saas-development-cost-guide', title: 'SaaS Development Cost Guide 2026', category: 'SaaS', readTime: '12 min' },
  { slug: 'how-to-build-fintech-app', title: 'How to Build a Fintech App in 2026', category: 'Fintech', readTime: '15 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '10 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a custom HRMS from scratch?',
    a: 'A custom HRMS costs between $60,000 and $400,000+ depending on the modules included, payroll complexity, and geographic compliance requirements. An MVP with employee records, leave management, basic payroll, and onboarding runs $60K-$110K over 5-7 months. A full-featured HRMS with ATS, performance management, multi-country payroll, accounting integrations, mobile apps, and compliance tooling runs $180K-$400K+ over 12-18 months.',
  },
  {
    q: 'Should I build a custom HRMS or use BambooHR/Workday/ADP?',
    a: 'Off-the-shelf HRMS platforms like BambooHR, Workday, and ADP are excellent for standard HR workflows. However, they charge $8-$25 per employee per month, have limited customization, and often require expensive consulting to configure. A custom HRMS makes sense when you are an HR SaaS startup, have a specific industry niche with unique compliance needs, are an enterprise with proprietary workflows, or need deep integrations with legacy systems that SaaS platforms cannot accommodate. Break-even vs. BambooHR typically occurs at 200-500 employees.',
  },
  {
    q: 'What compliance requirements must an HRMS handle?',
    a: 'Compliance requirements vary by geography and industry. Key areas include: GDPR and CCPA for employee personal data (right to erasure, data minimization, consent tracking), labor law compliance (FLSA in the US, Employment Standards Act in Canada, Working Time Regulations in the UK), tax compliance (federal/state/provincial income tax calculations, T4/W-2 generation), employment equity reporting, ADA/accessibility requirements for the HR platform itself, and SOC 2 Type II for data security if selling B2B. Multi-country HRMS must handle each jurisdiction separately.',
  },
  {
    q: 'How do you build a payroll engine that handles taxes correctly?',
    a: 'Payroll tax calculation is one of the hardest problems in HR software. The recommended approach is to use a payroll tax API rather than building tax tables from scratch. In the US, integrate with Check (check.com), Gusto Embedded Payroll, or Plaid for automated federal and state tax calculations, withholding, and remittances. For Canada, integrate with the CRA payroll deductions API. For other countries, use Deel or Remote APIs. Building your own tax calculation engine is only justified for very high-volume payroll at scale, and requires a dedicated compliance team to maintain.',
  },
  {
    q: 'What tech stack should I use to build an HRMS in 2026?',
    a: 'For the frontend, Next.js with TypeScript provides the best combination of performance and developer experience for data-heavy dashboards. For mobile, React Native for cross-platform iOS and Android. Backend: Node.js (NestJS) for real-time features (notifications, live chat) or Python (Django) for its excellent admin and ORM for complex relational data. Database: PostgreSQL for all HRMS data (highly relational — employees, departments, roles, permissions), Redis for caching and session management. For payroll, use a payroll API provider rather than building from scratch. Document storage: AWS S3 for contracts, policies, and employee documents. Authentication: Auth0 or Clerk for SSO, SAML 2.0, and MFA.',
  },
];

export default function HrTechAppDevelopmentClient() {
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
              src="/blog_images/hr-tech-app-development.jpg"
              alt="HR tech app development guide 2026"
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>HR Tech</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                19 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              HR Tech App Development Guide 2026: Build HRMS &amp; Payroll Systems
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              From employee records and payroll engines to ATS, compliance tooling, and QuickBooks integrations. The complete engineering guide to building an HRMS that replaces BambooHR, Workday, and ADP for your specific market.
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
                    The HR Tech Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global HR technology market is projected to reach $91.8 billion by 2028, growing at 7.5% CAGR. Every company with more than 10 employees eventually needs an HRMS — making HR tech one of the most defensible B2B software categories. Workday processes payroll for over 10,000 enterprises. ADP manages payroll for 920,000 businesses. BambooHR serves 30,000+ companies. Yet the market remains massively underserved for specific industries, company sizes, and geographies.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The opportunity in 2026 is vertical HR tech: HRMS built specifically for healthcare staffing, construction crew management, restaurant group HR, remote-first companies, or companies operating across multiple countries with complex local compliance. Generic HRMS platforms are built to serve everyone — and as a result serve no specific industry particularly well. Vertical HRMS products win by being 10x better for a specific segment than any horizontal player can afford to be.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Market Insight:</strong> HR software has among the highest switching costs of any SaaS category. Once employee records, payroll history, and performance data are in a system, companies rarely migrate. This creates exceptional retention (95%+ NRR at scale) and predictable revenue for HRMS SaaS products. The challenge is winning the initial sale — demos, compliance documentation, and security certifications are table stakes.
                    </p>
                  </div>
                </div>

                {/* HRMS Core Modules */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hrms-modules">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    HRMS Core Modules: What to Build
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A production-ready HRMS is a multi-module system. Each module manages a distinct HR function and shares a common employee data model. Building them in dependency order prevents expensive refactoring. Here are the essential modules:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { module: 'Employee Records Management', desc: 'Central employee profile: personal info, emergency contacts, employment history, job title, department, manager, compensation history, and documents (contracts, ID, certifications). Audit trail for all changes.' },
                      { module: 'Onboarding Workflows', desc: 'Automated onboarding sequences triggered on hire date: document signing (DocuSign/HelloSign), task assignments, equipment requests, account provisioning checklists, first-week schedule, and welcome pack delivery.' },
                      { module: 'Leave & Absence Management', desc: 'Leave request and approval workflows, accrual calculations (vacation, sick, PTO), holiday calendar by location, multi-level approvals, team calendar view for managers, and government statutory leave compliance (FMLA, parental leave).' },
                      { module: 'Time & Attendance Tracking', desc: 'Clock-in/clock-out via web, mobile, or physical terminals. GPS location tracking for field workers. Shift scheduling with drag-and-drop calendar. Overtime calculations and timesheet approval workflows.' },
                      { module: 'Performance Management', desc: '360-degree reviews, OKR/goal tracking linked to employee records, continuous feedback tools, performance improvement plans (PIPs), compensation review cycles, and manager-employee one-on-one templates.' },
                      { module: 'Compensation & Benefits', desc: 'Salary bands and compensation planning tools, benefits enrollment with carrier integrations (health, dental, vision), equity management (stock options, vesting schedules), and total compensation statements.' },
                      { module: 'Org Chart & Directory', desc: 'Dynamic org chart that updates automatically as employees join, leave, or change roles. Company-wide employee directory with search, contact info, and team structure visualization.' },
                      { module: 'Document Management', desc: 'Secure storage for employment contracts, NDAs, policy acknowledgments, certifications, and tax forms. E-signature workflows, expiry tracking for certifications, and GDPR-compliant retention policies.' },
                      { module: 'Offboarding Workflows', desc: 'Structured offboarding: exit interview scheduling, equipment return checklists, access revocation task assignments, final payroll trigger, reference letter generation, and alumni portal setup.' },
                      { module: 'HR Analytics & Reporting', desc: 'Headcount reports, attrition analysis, time-to-hire dashboards, compensation equity audits, leave utilization, and custom report builder. Export to CSV, Excel, and PDF for board reporting.' },
                      { module: 'Policy & Compliance Hub', desc: 'Centralized policy library with version control. Employee acknowledgment tracking (who has read and signed each policy). Automated reminders for annual policy reviews and compliance training completions.' },
                      { module: 'Employee Self-Service Portal', desc: 'Employees update their own personal info, request leave, view payslips, access documents, complete tasks, submit expense claims, and manage benefits enrollment without HR intervention.' },
                    ].map(item => (
                      <div key={item.module} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.module}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payroll Engine */}
                <div className="reveal" style={{ marginBottom: 56 }} id="payroll-engine">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Building a Payroll Engine: The Hardest Part
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Payroll is the highest-stakes module in any HRMS. A bug in payroll means employees are not paid correctly, which has immediate legal, reputational, and morale consequences. Here is how to architect a payroll system that works reliably:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        component: 'Payroll Calculation Engine',
                        priority: 'Critical',
                        desc: 'Calculate gross pay from salary, hourly rates, overtime, commissions, and bonuses. Apply pre-tax deductions (401k, HSA, FSA, health premiums). Calculate federal, state, and local income tax withholding using current tax tables. Apply FICA (Social Security 6.2%, Medicare 1.45%). Calculate post-tax deductions (Roth 401k, garnishments, union dues). Net pay = Gross - All Deductions - All Taxes.',
                        color: '#ef4444',
                      },
                      {
                        component: 'Tax Filing & Remittance',
                        priority: 'Critical',
                        desc: 'Use a payroll API provider (Check, Gusto Embedded, or Roll by ADP) rather than building tax tables from scratch. These APIs handle 50-state tax calculations, quarterly 941 filings, annual W-2/1099 generation, state unemployment (SUTA) filings, and electronic tax payments to federal and state agencies. Building this yourself requires a dedicated compliance team and ongoing maintenance as tax laws change.',
                        color: '#ef4444',
                      },
                      {
                        component: 'Payroll Run Workflow',
                        priority: 'High',
                        desc: 'Multi-step payroll run process: (1) Import timesheets and approve hours, (2) Preview payroll register with all calculations, (3) HR manager reviews and approves, (4) Funds transfer initiated via ACH, (5) Direct deposit or check delivery, (6) Payslips generated and emailed to employees, (7) Journal entries pushed to accounting system. Cutoff dates and approval deadlines enforced in workflow.',
                        color: '#f59e0b',
                      },
                      {
                        component: 'Multi-Pay Schedule Support',
                        priority: 'High',
                        desc: 'Support weekly, bi-weekly, semi-monthly, and monthly pay schedules simultaneously. Different employee groups (hourly vs. salaried, US vs. Canadian) may operate on different schedules. Off-cycle payroll runs for terminations, corrections, and bonus payments. Retroactive pay calculations for salary changes mid-period.',
                        color: '#f59e0b',
                      },
                      {
                        component: 'Multi-Country Payroll',
                        priority: 'Medium',
                        desc: 'Each country has distinct payroll rules: Canada (CRA deductions, ROE generation, T4 slips), UK (PAYE, National Insurance, P60/P45), Australia (superannuation, PAYG withholding). Use Deel, Remote, or Papaya Global APIs for international payroll rather than building country-specific engines. Connect their API to your HRMS employee data and payroll runs.',
                        color: '#22c55e',
                      },
                    ].map(item => (
                      <div key={item.component} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}25`, borderLeft: `3px solid ${item.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.component}</h3>
                          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.color, background: `${item.color}15`, padding: '3px 10px', borderRadius: 100 }}>{item.priority}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance & GDPR */}
                <div className="reveal" style={{ marginBottom: 56 }} id="compliance">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Compliance &amp; GDPR: Employee Data Protection
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    HRMS platforms are prime targets for compliance audits because they hold highly sensitive employee personal data. GDPR fines reach 4% of global annual turnover. A single data breach of employee records can destroy enterprise client relationships. Compliance must be architected in from day one, not retrofitted later.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { area: 'GDPR Compliance (EU/UK)', desc: 'Lawful basis for processing employee data (legitimate interest or contract). Data minimization — only collect what you use. Right to access (employee can download their data). Right to erasure (delete data after employment ends per retention policy). Data Processing Agreements (DPAs) with all sub-processors.' },
                      { area: 'CCPA Compliance (California)', desc: 'California Consumer Privacy Act requires disclosure of data categories collected, opt-out from data sale (not applicable for HR data but required for marketing data), and deletion rights. B-to-B HRMS processing California employee data must comply with CPRA amendments since January 2023.' },
                      { area: 'Data Retention Policies', desc: 'Different data types have different legal retention requirements. Payroll records: 7 years (IRS requirement). I-9 employment eligibility: 3 years after hire or 1 year after termination. Personnel files: varies by state (typically 3-7 years). Build automated archival and deletion workflows triggered by retention period expiry.' },
                      { area: 'Access Controls & RBAC', desc: 'Role-based access control (RBAC) ensuring HR managers see only their department data, payroll admins see compensation but not performance reviews, employees see only their own records. Audit logs of every data access event with user, timestamp, and action. Required for SOC 2 compliance.' },
                      { area: 'Data Encryption', desc: 'Encrypt all PII at rest (AES-256) and in transit (TLS 1.3). Separate encryption keys per tenant for multi-tenant HRMS. Encrypt database columns containing SSN, SIN, bank account numbers, and salary data. Key rotation procedures and HSM-based key management for enterprise clients.' },
                      { area: 'SOC 2 Type II Certification', desc: 'Required by most enterprise buyers before signing contracts. Covers Security, Availability, and Confidentiality trust service criteria. 6-12 month audit period with continuous monitoring. Use Vanta or Drata to automate evidence collection and control monitoring. Budget $15K-$40K for initial certification.' },
                    ].map(item => (
                      <div key={item.area} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.area}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ATS & Recruitment */}
                <div className="reveal" style={{ marginBottom: 56 }} id="ats-recruitment">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    ATS: Applicant Tracking System Integration
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The best HRMS products seamlessly connect hiring to people management. When a candidate is hired in the ATS, their record flows automatically into the HRMS — eliminating the double-entry that plagues HR teams using separate systems. Here is the ATS feature set:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 20 }}>
                    {[
                      {
                        feature: 'Job Posting Management',
                        desc: 'Create job descriptions with structured fields (title, department, location, salary range, requirements). One-click publishing to job boards: Indeed, LinkedIn, Glassdoor, ZipRecruiter via API integrations. Custom careers page hosted on your domain with company branding. Track source attribution for each application.',
                        impact: 'Reduces time-to-post by 80%',
                      },
                      {
                        feature: 'Application Pipeline (Kanban)',
                        desc: 'Drag-and-drop Kanban board: Applied, Screened, Phone Interview, Technical, Final Interview, Offer, Hired, Rejected. Custom pipeline stages per role type. Bulk actions for moving or rejecting multiple candidates. Activity feed showing all touchpoints per candidate.',
                        impact: 'Recruiter efficiency +65%',
                      },
                      {
                        feature: 'Resume Parsing & AI Screening',
                        desc: 'Automated resume parsing to extract structured data: skills, experience, education, contact info. AI scoring of candidate-to-job-description match (keyword and semantic matching). Flag candidates meeting minimum qualifications automatically. Reduces initial screening from hours to minutes.',
                        impact: 'Screening time reduced by 70%',
                      },
                      {
                        feature: 'Interview Scheduling Automation',
                        desc: 'Automated interview scheduling via calendar integration (Google Calendar, Outlook). Send candidates a self-scheduling link showing interviewer availability. Automatic meeting creation and conferencing link generation (Zoom, Teams, Google Meet). Reminder emails and SMS to candidates and interviewers.',
                        impact: 'Scheduling back-and-forth eliminated',
                      },
                      {
                        feature: 'Collaborative Feedback & Scorecards',
                        desc: 'Structured interview feedback forms with competency-based scorecards. Interviewers submit ratings per competency (1-5) with written comments. Aggregated scores visible to hiring manager. Blind review mode to reduce bias. Feedback deadline reminders for slow interviewers.',
                        impact: 'Hiring decision quality +40%',
                      },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{item.feature}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
                        <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 600 }}>{item.impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accounting Integrations */}
                <div className="reveal" style={{ marginBottom: 56 }} id="integrations">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Accounting Integrations: QuickBooks, SAP, Xero, and More
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Every payroll run generates accounting entries. Without HRMS-to-accounting integration, finance teams manually retype payroll journal entries — a time-consuming and error-prone process. Here are the integrations that matter and how to build them:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { integration: 'QuickBooks Online', audience: 'SMB (1-100 employees)', desc: 'QuickBooks Online API (v3) supports journal entry creation, bill payment, and chart of accounts sync. Map payroll categories to QBO accounts. Push payroll runs as journal entries: debit salary expense accounts, credit payroll liabilities and bank. Webhook triggers on payroll approval.' },
                      { integration: 'QuickBooks Desktop', audience: 'SMB with on-premise accounting', desc: 'QuickBooks Desktop uses a different IIF import format. Generate IIF files from each payroll run that accountants import into QBO Desktop. Less real-time but covers the large installed base of Desktop users who have not migrated to QBO Online.' },
                      { integration: 'Xero', audience: 'SMB & Mid-market (UK/AU/NZ focus)', desc: 'Xero API for journal entry creation, invoice generation, and bank reconciliation. Particularly important for UK, Australia, and New Zealand markets where Xero has 60%+ market share among SMBs. OAuth 2.0 integration with automatic token refresh.' },
                      { integration: 'SAP S/4HANA', audience: 'Enterprise (500+ employees)', desc: 'SAP integration via BAPI/RFC or SAP Integration Suite (formerly Cloud Platform Integration). Map HRMS cost centers to SAP controlling objects. Push headcount data for SAP workforce planning. Requires SAP Basis expertise — plan for a dedicated 6-8 week integration sprint.' },
                      { integration: 'NetSuite', audience: 'Mid-market to Enterprise', desc: 'NetSuite SuiteTalk REST API for journal entry creation and subsidiary management. Map multi-entity payroll to NetSuite subsidiaries. Sync employee records to NetSuite vendor records for expense management. Real-time sync on payroll approval.' },
                      { integration: 'Sage Intacct', audience: 'Non-profit & Professional Services', desc: 'Sage Intacct XML API for journal entry, project cost allocation, and dimension-based reporting. Common for non-profits and professional services firms tracking labor costs by project or grant. Dimension mapping between HRMS departments and Intacct dimensions.' },
                    ].map(item => (
                      <div key={item.integration} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.integration}</p>
                        <p style={{ fontSize: 11, fontWeight: 600, color: '#22c55e', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.audience}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile HR Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="mobile-hr">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Mobile HR: Features for the Deskless Workforce
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    60% of the global workforce is deskless — retail workers, construction crews, healthcare staff, drivers, and field technicians. These workers cannot access an HRMS via desktop browser. A mobile-first HR app is not a nice-to-have for these segments; it is the only way they can interact with HR processes at all.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { feature: 'Mobile Clock-In/Clock-Out', desc: 'GPS-verified clock-in/clock-out with geofencing enforcement (must be within X meters of job site). Photo capture for attendance verification. Shift start/end push notifications. Works offline with sync when connection resumes.' },
                      { feature: 'Leave Requests & Approvals', desc: 'Employees submit leave requests from mobile with date range and reason. Managers receive push notifications and approve or deny with one tap. Team calendar view shows who is out before submitting. Automatic email confirmation on approval.' },
                      { feature: 'Mobile Payslips', desc: 'Employees view and download their payslips directly from the mobile app. Year-to-date earnings summary, deductions breakdown, and tax withholdings. Biometric authentication to access sensitive pay information.' },
                      { feature: 'Shift Scheduling', desc: 'Managers publish shift schedules from mobile. Employees see their upcoming shifts, swap shifts with colleagues (pending manager approval), and receive notifications when new schedules are published. Shift confirmation acknowledgment to prevent no-shows.' },
                      { feature: 'Expense Claims', desc: 'Capture receipts by camera, auto-extract amount and merchant via OCR, categorize expense, and submit for approval in under 30 seconds. Manager approval workflow with push notifications. Expense reimbursement linked to next payroll run.' },
                      { feature: 'Push Notifications & Alerts', desc: 'Critical HR communications delivered as push: upcoming review reminders, leave request outcomes, payslip available, compliance training due, policy acknowledgment required, and emergency company announcements to all staff.' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: How Much Does It Cost to Build an HRMS?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building a custom HRMS or HR Tech product ranges from $60,000 to $400,000+ depending on module scope, payroll complexity, compliance requirements, and multi-tenancy architecture. Here is the detailed breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP HRMS',
                        price: '$60,000 - $110,000',
                        timeline: '5-7 months',
                        color: '#22c55e',
                        features: [
                          'Employee records management',
                          'Onboarding workflows',
                          'Leave & absence management',
                          'Basic payroll (via payroll API)',
                          'Document storage & e-signatures',
                          'Employee self-service portal',
                          'Role-based access control',
                          'Email notifications',
                          'Responsive web platform',
                        ],
                      },
                      {
                        tier: 'Standard HRMS',
                        price: '$120,000 - $200,000',
                        timeline: '8-11 months',
                        color: '#3b82f6',
                        features: [
                          'Everything in MVP',
                          'Full payroll engine with tax compliance',
                          'Time & attendance tracking',
                          'Performance management & reviews',
                          'ATS with job board integrations',
                          'QuickBooks & Xero integration',
                          'HR analytics dashboard',
                          'Mobile app (React Native)',
                          'GDPR compliance tooling',
                          'SSO (Google, SAML 2.0)',
                        ],
                      },
                      {
                        tier: 'Enterprise HRMS',
                        price: '$220,000 - $400,000+',
                        timeline: '12-18 months',
                        color: '#a855f7',
                        features: [
                          'Everything in Standard',
                          'Multi-tenancy & white-labeling',
                          'Multi-country payroll (Deel/Remote API)',
                          'Advanced ATS with AI resume screening',
                          'SAP & NetSuite integrations',
                          'Compensation planning & equity management',
                          'Advanced analytics & BI exports',
                          'SOC 2 Type II compliance tooling',
                          'Workforce planning module',
                          'Custom reporting engine',
                          'Dedicated mobile app (iOS + Android)',
                        ],
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

                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Key Cost Drivers in HRMS Development</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
                      {[
                        { item: 'Payroll API (Check/Gusto)', cost: '$2-$7/employee/month' },
                        { item: 'E-Signature (DocuSign/HelloSign)', cost: '$25-$100/month' },
                        { item: 'SMS Notifications (Twilio)', cost: '$0.0075 per SMS' },
                        { item: 'Email (SendGrid)', cost: '$20-$200/month' },
                        { item: 'AWS Infrastructure', cost: '$300-$3,000/month' },
                        { item: 'SOC 2 Certification (Vanta)', cost: '$12K-$40K/year' },
                      ].map(item => (
                        <div key={item.item} style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: '0 0 4px' }}>{item.item}</p>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#22c55e', margin: 0 }}>{item.cost}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Build vs Buy */}
                <div className="reveal" style={{ marginBottom: 56 }} id="build-vs-buy">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Build vs Buy: Workday vs BambooHR vs Custom HRMS
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The biggest strategic decision in HR technology is not which features to build first — it is whether to build at all. Here is an honest breakdown of when each option wins:
                  </p>
                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        option: 'BambooHR',
                        cost: '$6–$12/employee/month',
                        bestFor: 'SMBs (10–200 employees) with standard HR workflows',
                        pros: ['Fast implementation (2–4 weeks)', 'Great UX out of the box', 'Built-in ATS, onboarding, e-signatures', 'Proven compliance for US market', 'Low upfront investment'],
                        cons: ['Limited customization — their workflow is your workflow', 'No payroll in many countries (US only)', 'Expensive at scale ($6K–$24K/yr for 100 staff)', 'No white-labeling or reselling', 'Cannot serve niche industries well'],
                        color: '#f59e0b',
                      },
                      {
                        option: 'Workday HCM',
                        cost: '$40–$100/employee/month (enterprise pricing)',
                        bestFor: 'Large enterprises (1,000+ employees) with complex global operations',
                        pros: ['Best-in-class analytics and reporting', 'Global payroll in 100+ countries', 'Deep financial management integration', 'Strong compliance for regulated industries', 'Robust developer API for integrations'],
                        cons: ['18–24 month implementation timeline', '$500K–$2M+ implementation cost', 'Requires Workday-certified consultants', 'Extremely rigid — customization is expensive', 'Overkill for anything under 500 employees'],
                        color: '#3b82f6',
                      },
                      {
                        option: 'Custom HRMS (Build)',
                        cost: '$60,000 – $400,000+ upfront',
                        bestFor: 'HR SaaS startups, enterprises with unique workflows, or companies with industry-specific compliance',
                        pros: ['100% fits your exact workflow and compliance needs', 'No per-employee cost at scale (break-even at 200–500 employees)', 'White-label and resell to your own customers', 'Competitive moat — competitors cannot copy your system', 'Integrate with any tool, any legacy system, any API'],
                        cons: ['High upfront investment ($60K–$400K+)', 'Longer time to first use (5–18 months)', 'Requires ongoing maintenance team', 'You own all compliance updates (tax laws change)', 'Initial QA and hardening period of 2–4 months'],
                        color: '#22c55e',
                      },
                    ].map(item => (
                      <div key={item.option} style={{ padding: '28px 32px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}25`, borderLeft: `3px solid ${item.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                          <div>
                            <p style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', margin: '0 0 4px' }}>{item.option}</p>
                            <p style={{ fontSize: 13, color: item.color, fontWeight: 600, margin: '0 0 4px' }}>{item.cost}</p>
                            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Best for: {item.bestFor}</p>
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                          <div>
                            <p style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>Pros</p>
                            {item.pros.map(p => (
                              <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                                <span style={{ color: '#22c55e', flexShrink: 0, marginTop: 2 }}>+</span>
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{p}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <p style={{ fontSize: 12, fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>Cons</p>
                            {item.cons.map(c => (
                              <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                                <span style={{ color: '#ef4444', flexShrink: 0, marginTop: 2 }}>–</span>
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{c}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#22c55e', margin: '0 0 8px' }}>Decision Rule of Thumb</p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
                      Use <strong style={{ color: '#ffffff' }}>BambooHR</strong> if you are an internal team with standard HR needs and under 300 employees. Use <strong style={{ color: '#ffffff' }}>Workday</strong> if you are a global enterprise with 1,000+ employees who can afford the implementation cost. Build <strong style={{ color: '#ffffff' }}>custom</strong> if you are an HR SaaS startup, have an industry-specific workflow no existing product serves, or need to white-label the platform.
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack for an HRMS in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    HRMS applications have unique technical requirements: complex relational data models, multi-tenancy, strict access control, real-time notifications, and high-reliability payroll processing. Here is the stack we recommend and why:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        layer: 'Frontend (Web Dashboard)',
                        choice: 'Next.js 14 + TypeScript',
                        why: 'Server-side rendering for data-heavy HR dashboards. TypeScript enforces type safety critical for payroll calculations. App Router enables streaming for large employee lists. Excellent developer ecosystem for complex table/chart components.',
                        alternatives: 'React + Vite (slightly simpler), Angular (good for enterprise teams who know it)',
                        color: '#60a5fa',
                      },
                      {
                        layer: 'Mobile App (Employee Self-Service)',
                        choice: 'React Native (Expo)',
                        why: 'Share component logic with the web dashboard. Large ecosystem of pre-built HR-relevant components (biometrics, camera for expense receipts, GPS). Expo simplifies over-the-air updates for quick compliance patches without App Store review cycles.',
                        alternatives: 'Flutter (better performance, less web code sharing)',
                        color: '#a78bfa',
                      },
                      {
                        layer: 'Backend API',
                        choice: 'Node.js (NestJS) or Python (Django)',
                        why: 'NestJS for teams prioritising real-time (WebSockets for live org chart, notification streams). Django for teams prioritising admin tooling and ORM power for complex relational queries across employees, departments, roles, and permissions. Both have excellent PostgreSQL support.',
                        alternatives: 'Go (great performance, smaller ecosystem), Ruby on Rails (fast MVP, but scaling concerns)',
                        color: '#34d399',
                      },
                      {
                        layer: 'Database',
                        choice: 'PostgreSQL (primary) + Redis (cache/sessions)',
                        why: 'HR data is highly relational — employees belong to departments, have roles, accrue leave balances, process through payroll runs. PostgreSQL\'s JSONB columns handle variable employee attributes per company in multi-tenant setups. Row-level security (RLS) for tenant isolation at the database level. Redis for session management and caching employee counts/org chart data.',
                        alternatives: 'MySQL (acceptable alternative), MongoDB (not recommended — HR data is too relational)',
                        color: '#f59e0b',
                      },
                      {
                        layer: 'Payroll Processing',
                        choice: 'Check.com API or Gusto Embedded Payroll',
                        why: 'Do not build payroll tax calculations from scratch. Check handles US federal + 50-state tax calculations, withholding, W-2/1099 generation, and ACH payments. Gusto Embedded offers similar with a more mature API. Both handle compliance updates automatically — a single state tax law change can break a hand-rolled engine.',
                        alternatives: 'Deel or Remote for international payroll, Payroll4Free for very small US operations',
                        color: '#ef4444',
                      },
                      {
                        layer: 'Authentication & SSO',
                        choice: 'Auth0 or Clerk',
                        why: 'Enterprise HR buyers require SAML 2.0 SSO, MFA, and SOC 2-compliant session management. Auth0 supports SAML, OIDC, and Active Directory. Clerk is faster to implement for SMB-focused HRMS. Both handle MFA, magic links, and device management out of the box.',
                        alternatives: 'NextAuth.js (simpler, good for MVP), Okta (enterprise, expensive)',
                        color: '#22c55e',
                      },
                      {
                        layer: 'Document Storage',
                        choice: 'AWS S3 + presigned URLs',
                        why: 'Employment contracts, offer letters, I-9/W-4 forms, and policies need secure, durable, compliant storage. S3 with server-side encryption (SSE-KMS), lifecycle policies for GDPR retention, and presigned URLs for time-limited document access. CloudFront CDN for fast global document delivery.',
                        alternatives: 'Google Cloud Storage (equivalent), Azure Blob (good for Microsoft shops)',
                        color: '#60a5fa',
                      },
                      {
                        layer: 'Email & Notifications',
                        choice: 'SendGrid (email) + Twilio (SMS) + FCM/APNs (push)',
                        why: 'HRMS sends high-volume transactional emails: payslip delivery, leave approvals, onboarding tasks, performance review reminders. SendGrid handles deliverability and email analytics. Twilio for SMS alerts on urgent notifications. Firebase Cloud Messaging for mobile push across iOS and Android.',
                        alternatives: 'Postmark (excellent deliverability), Resend (modern API)',
                        color: '#a78bfa',
                      },
                    ].map(item => (
                      <div key={item.layer} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}20`, borderLeft: `3px solid ${item.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                          <p style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>{item.layer}</p>
                          <span style={{ fontSize: 13, fontWeight: 700, color: item.color, background: `${item.color}15`, padding: '3px 10px', borderRadius: 100 }}>{item.choice}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: '0 0 8px' }}>{item.why}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}><strong style={{ color: 'rgba(255,255,255,0.4)' }}>Alternatives:</strong> {item.alternatives}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your HRMS with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    HR technology is one of the most technically demanding SaaS categories. It requires deep expertise across payroll calculation, compliance architecture, multi-tenant data isolation, complex RBAC, and sensitive data security. Most development teams can handle standard CRUD applications. HRMS is not a standard application.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Codazz has built HR and workforce management platforms from the ground up — architecting for compliance from day one, integrating with payroll APIs and accounting systems, and designing UX for both desk-based HR managers and deskless frontline workers. We understand that in HR software, reliability and accuracy are more important than speed, and we build accordingly. Fixed-price contracts, milestone-based delivery, and ongoing support included.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{ padding: '14px 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
                        Get a Free HRMS Consultation
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
                  Ready to Build Your Custom HRMS?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your HR tech vision with our team. We will analyze your compliance requirements, recommend the right architecture, and provide a detailed fixed-price proposal within 48 hours.
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
