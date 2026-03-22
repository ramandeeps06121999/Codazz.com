'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import HeroBackground from '@/components/HeroBackground';

/* ───────────────────────── REVEAL HOOK ───────────────────────── */
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

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const heroStats = [
  { value: '500+', label: 'Projects Outsourced' },
  { value: '60-70%', label: 'Cost Savings' },
  { value: '4.9', label: 'Clutch Rating', suffix: '★' },
  { value: '16+', label: 'Years Experience' },
];

const whyOutsource = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Faster Time-to-Market',
    desc: 'Skip months of recruiting and onboarding. Our pre-vetted teams start delivering code within 2 weeks. Launch your product 40-60% faster than building an in-house team from scratch.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: '60-70% Cost Reduction',
    desc: 'Access senior engineers starting at $19/hour vs $100-$200/hour for equivalent US-based talent. No office costs, benefits administration, or HR overhead. Pure engineering value.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Access to 100+ Engineers',
    desc: 'Tap into a deep bench of specialists across React, Node.js, Python, Java, Flutter, AI/ML, DevOps, and more. Scale from 1 developer to a 20-person team without recruitment headaches.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Enterprise-Grade Security',
    desc: 'SOC 2 Type II certified, ISO 27001 compliant. Every project starts with an NDA. Encrypted repos, VPN-secured access, role-based permissions, and regular penetration testing.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Proven Quality Standards',
    desc: 'Mandatory code reviews, automated testing pipelines, and CI/CD from day one. Our teams achieve 90%+ test coverage and maintain sub-1% production defect rates across all projects.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
      </svg>
    ),
    title: 'Flexible Engagement Models',
    desc: 'Choose fixed-price for well-defined projects, time-and-materials for evolving scope, or dedicated teams for long-term partnerships. Switch models as your needs change — no lock-in.',
  },
];

const outsourcingModels = [
  {
    name: 'Offshore',
    tagline: 'Maximum Cost Savings',
    desc: 'Your entire development team operates from our Chandigarh, India center. Ideal for budget-conscious projects where you want maximum savings without compromising quality. 4-5 hours of daily overlap with North American time zones.',
    savings: '60-70%',
    overlap: '4-5 hrs',
    bestFor: 'Startups, MVPs, cost-optimized projects',
    color: '#22c55e',
  },
  {
    name: 'Nearshore',
    tagline: 'Real-Time Collaboration',
    desc: 'Development teams in overlapping time zones for real-time collaboration. Ideal for projects requiring constant communication, rapid iteration, and same-day turnarounds. Slightly higher rates, maximum agility.',
    savings: '40-50%',
    overlap: '6-8 hrs',
    bestFor: 'Agile teams, complex projects, tight deadlines',
    color: '#3b82f6',
  },
  {
    name: 'Hybrid',
    tagline: 'Best of Both Worlds',
    desc: 'Onshore project leads and architects combined with offshore development teams. Your PM and tech lead are in your time zone for strategy and communication, while the engineering team in India handles execution.',
    savings: '50-60%',
    overlap: '8+ hrs',
    bestFor: 'Enterprise projects, regulated industries',
    color: '#a855f7',
  },
];

const costComparison = [
  { role: 'Senior Full-Stack Developer', us: '$150 – $200/hr', india: 'Starting at $26/hr', savings: '82-87%' },
  { role: 'Project Manager', us: '$120 – $160/hr', india: 'Starting at $19/hr', savings: '84-88%' },
  { role: 'QA Engineer', us: '$80 – $130/hr', india: 'Starting at $15/hr', savings: '81-88%' },
  { role: 'DevOps Engineer', us: '$140 – $190/hr', india: 'Starting at $26/hr', savings: '81-86%' },
  { role: 'UI/UX Designer', us: '$100 – $160/hr', india: 'Starting at $19/hr', savings: '81-88%' },
  { role: 'AI/ML Engineer', us: '$160 – $220/hr', india: 'Starting at $30/hr', savings: '81-86%' },
];

const securityFeatures = [
  { title: 'NDA-First Policy', desc: 'Every engagement starts with a comprehensive NDA and IP assignment agreement. Your idea, code, and data are fully protected from day one.' },
  { title: 'SOC 2 Type II Certified', desc: 'Our processes, infrastructure, and controls are independently audited and certified to SOC 2 Type II standards — the gold standard for data security.' },
  { title: 'ISO 27001 Compliant', desc: 'Information security management system certified to ISO 27001. Regular internal and external audits ensure continuous compliance.' },
  { title: 'Encrypted Repositories', desc: 'All code is stored in encrypted private repositories with role-based access controls. No developer has access beyond their project scope.' },
  { title: 'VPN-Secured Access', desc: 'Team members access project resources exclusively through encrypted VPN tunnels. No data leaves our secure network perimeter.' },
  { title: 'Regular Penetration Testing', desc: 'Quarterly penetration tests by independent third-party security firms. Vulnerabilities are patched within 24 hours of discovery.' },
];

const processSteps = [
  { num: '01', title: 'Free Discovery Call', desc: 'Share your project vision, technical requirements, and business goals. We assess scope, timeline, and optimal team composition.' },
  { num: '02', title: 'Technical Proposal', desc: 'Receive a detailed proposal with architecture recommendations, technology stack, timeline with milestones, and transparent pricing.' },
  { num: '03', title: 'NDA & Contract', desc: 'Sign comprehensive NDA and Master Service Agreement with clear IP assignment, SLAs, payment terms, and exit clauses.' },
  { num: '04', title: 'Team Assembly', desc: 'We hand-pick engineers matching your requirements. You interview and approve each team member within 1-2 weeks.' },
  { num: '05', title: 'Agile Development', desc: '2-week sprints with daily standups, bi-weekly demos, and continuous deployment. Full visibility via Jira, Slack, and live dashboards.' },
  { num: '06', title: 'Delivery & Support', desc: 'Production deployment, knowledge transfer, and post-launch support. Ongoing maintenance retainers available for long-term partnership.' },
];

const industries = [
  { name: 'FinTech', examples: 'Trading platforms, digital wallets, payment gateways, lending apps' },
  { name: 'Healthcare', examples: 'HIPAA-compliant telehealth, EHR systems, medical device software' },
  { name: 'E-Commerce', examples: 'Marketplaces, mobile storefronts, inventory management, loyalty platforms' },
  { name: 'SaaS', examples: 'Multi-tenant platforms, subscription billing, analytics dashboards' },
  { name: 'Logistics', examples: 'Fleet management, route optimization, warehouse automation, tracking' },
  { name: 'EdTech', examples: 'LMS platforms, adaptive learning, virtual classrooms, assessment tools' },
  { name: 'Real Estate', examples: 'Property platforms, CRM systems, virtual tours, mortgage tech' },
  { name: 'Media & Entertainment', examples: 'Streaming apps, social platforms, content management, gaming' },
];

const testimonials = [
  {
    quote: 'We outsourced our entire SaaS platform development to Codazz. They delivered a production-ready product in 5 months at roughly 65% less than what local agencies quoted us. The quality exceeded our expectations.',
    name: 'Michael Torres',
    title: 'CEO, CloudMetrics',
    location: 'San Francisco, CA',
  },
  {
    quote: 'The NDA-first approach gave us confidence from day one. Our fintech app handles millions in transactions daily, and Codazz built it with bank-grade security. Their SOC 2 certification was a key factor in our decision.',
    name: 'Lisa Park',
    title: 'CTO, PayStream',
    location: 'New York, NY',
  },
  {
    quote: 'After a bad experience with a cheap outsourcing shop, we were skeptical. Codazz completely changed our perception. Professional project management, clean code, and they actually hit deadlines. We have been with them 2 years now.',
    name: 'Andrew Wallace',
    title: 'VP Product, HealthFirst',
    location: 'Chicago, IL',
  },
];

const trustBadges = [
  { title: 'SOC 2 Type II', desc: 'Independently audited security controls and data protection' },
  { title: 'ISO 27001', desc: 'Certified information security management system' },
  { title: 'Clutch Top Company', desc: 'Recognized as a top development company worldwide' },
  { title: 'AWS Partner', desc: 'Advanced tier AWS consulting and technology partner' },
  { title: '100% IP Ownership', desc: 'All code, designs, and assets belong entirely to you' },
  { title: 'NDA on Day 1', desc: 'Comprehensive non-disclosure before any project discussion' },
];

const techExpertise = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Svelte'] },
  { category: 'Backend', techs: ['Node.js', 'Python', 'Java', 'Go', '.NET', 'Ruby on Rails', 'PHP/Laravel'] },
  { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift/SwiftUI', 'Kotlin', 'Ionic'] },
  { category: 'Cloud & DevOps', techs: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
  { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB', 'Elasticsearch'] },
  { category: 'AI & ML', techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Computer Vision', 'NLP'] },
];

const successMetrics = [
  { value: '500+', label: 'Projects Delivered', desc: 'Across FinTech, Healthcare, E-Commerce, SaaS, and 8+ verticals' },
  { value: '98%', label: 'Client Retention', desc: 'Most clients renew and expand their outsourcing engagement' },
  { value: '60-70%', label: 'Average Cost Savings', desc: 'Compared to equivalent US or Canadian development teams' },
  { value: '<2 Wks', label: 'Team Assembly Time', desc: 'From signed contract to fully operational development team' },
  { value: '4.9/5', label: 'Clutch Rating', desc: 'Based on 127+ verified reviews from real clients' },
  { value: '0', label: 'IP Disputes', desc: 'Zero intellectual property issues in 16+ years of operation' },
];

const engagementTypes = [
  {
    title: 'Fixed-Price Projects',
    desc: 'Ideal for well-defined projects with clear scope and requirements. You receive a detailed quote with milestones and deliverables before signing. No surprises — the price is locked in from day one. Best for MVPs, redesigns, and feature builds with a defined scope.',
    bestFor: 'MVPs, well-scoped features, redesigns',
    riskLevel: 'Low — predictable budget',
  },
  {
    title: 'Time & Materials',
    desc: 'Perfect for evolving products where requirements may shift. You pay for actual hours worked with full transparency via time-tracking tools. Weekly cost reports keep you in control. Best for ongoing product development and R&D projects.',
    bestFor: 'Product development, R&D, evolving scope',
    riskLevel: 'Medium — controlled by sprint budgets',
  },
  {
    title: 'Dedicated Team',
    desc: 'A full-time team working exclusively on your product. Monthly flat rate per team member. Scale up or down with 2 weeks notice. Ideal for long-term partnerships where you need consistent velocity and deep domain expertise.',
    bestFor: 'Long-term products, scaling startups',
    riskLevel: 'Low — fixed monthly cost',
  },
];

const selectionCriteria = [
  {
    num: '01',
    title: 'Technical Depth & Stack Match',
    desc: 'Verify the vendor has real production experience in your exact stack — not just portfolio slides. Ask for live code reviews, GitHub profiles, or technical take-home challenges.',
  },
  {
    num: '02',
    title: 'Communication & English Proficiency',
    desc: 'Run a discovery call and assess response time, clarity, and proactiveness. Great outsourcing partners ask the right questions — they don\'t just wait to be told what to do.',
  },
  {
    num: '03',
    title: 'Security & Compliance Certifications',
    desc: 'Verify SOC 2 Type II or ISO 27001 certification. Ask about their data handling policies, penetration testing cadence, and whether engineers sign individual NDAs.',
  },
  {
    num: '04',
    title: 'Team Stability & Retention Rate',
    desc: 'High turnover is the silent killer of outsourced projects. Ask for their annual engineer retention rate. Industry average is 70% — top firms like Codazz maintain 96%+.',
  },
  {
    num: '05',
    title: 'Transparent Pricing & Contract Terms',
    desc: 'Demand itemized pricing with no hidden clauses. Avoid vendors who bundle ambiguous "management fees." Look for clear exit terms, SLAs, and IP assignment language.',
  },
  {
    num: '06',
    title: 'References From Similar Clients',
    desc: 'Ask for two or three client references from companies in your industry and at your scale. A vendor that hesitates to provide references is a red flag.',
  },
];

const commonMistakes = [
  {
    mistake: 'Choosing on price alone',
    impact: 'High — leads to poor quality and expensive rewrites',
    fix: 'Balance cost with tech depth, communication, and retention rate.',
    severity: 'critical',
  },
  {
    mistake: 'Skipping the NDA / IP assignment',
    impact: 'Critical — your IP may not be legally yours',
    fix: 'Sign a comprehensive IP assignment agreement before a single line of code is written.',
    severity: 'critical',
  },
  {
    mistake: 'Handing over full autonomy',
    impact: 'High — misalignment builds up silently over sprints',
    fix: 'Stay involved: weekly demos, sprint reviews, and direct Slack access to the team.',
    severity: 'high',
  },
  {
    mistake: 'Hiring for skills, not for culture fit',
    impact: 'Medium — communication friction slows everything down',
    fix: 'Assess English fluency, Agile familiarity, and proactive communication style during interviews.',
    severity: 'high',
  },
  {
    mistake: 'No defined acceptance criteria',
    impact: 'High — "done" means different things to different people',
    fix: 'Write user stories with clear acceptance criteria before every sprint starts.',
    severity: 'medium',
  },
  {
    mistake: 'Ignoring time zone overlap planning',
    impact: 'Medium — async delays kill velocity',
    fix: 'Establish 2-3 hours of mandatory daily overlap for standups and urgent decisions.',
    severity: 'medium',
  },
];

const roiData = [
  {
    metric: 'Cost Savings',
    value: '60-70%',
    detail: 'vs. equivalent US/Canada in-house hires',
    example: 'A 5-person team that costs $600K/yr in the US starts at $135K/yr with Codazz',
  },
  {
    metric: 'Time to First Commit',
    value: '2 Weeks',
    detail: 'from signed contract to active development',
    example: 'vs. 3-6 months to recruit and onboard an in-house team',
  },
  {
    metric: 'Annual Cost Avoided',
    value: '$420K+',
    detail: 'average saving for a 5-person team',
    example: 'No benefits, payroll taxes, office space, or recruiting fees',
  },
  {
    metric: 'Productivity Gain',
    value: '35%+',
    detail: 'faster delivery vs. internal hiring',
    example: 'Pre-vetted talent, CI/CD pipelines, and Agile process included from day one',
  },
];

const faqs = [
  {
    q: 'Why should I outsource software development?',
    a: 'Outsourcing software development allows you to access top-tier engineering talent at 60-70% lower cost than hiring in-house in the US or Canada. It accelerates time-to-market, reduces operational overhead, and lets you scale teams on demand. Companies like Slack, GitHub, and Alibaba all built critical products using outsourced development teams.',
  },
  {
    q: 'What outsourcing models does Codazz offer?',
    a: 'Codazz offers three outsourcing models: Offshore (team based in India for maximum cost savings of 60-70%), Nearshore (overlapping time zones for real-time collaboration with 40-50% savings), and Hybrid (combination of onshore leads with offshore execution for 50-60% savings). Each model is tailored to your budget, timeline, and communication preferences.',
  },
  {
    q: 'How do you protect my intellectual property?',
    a: 'IP protection is foundational to our outsourcing model. We sign comprehensive NDAs and IP assignment agreements before any work begins. All code and assets are your exclusive property. We are SOC 2 Type II certified, use encrypted repositories, enforce role-based access controls, and conduct regular penetration testing.',
  },
  {
    q: 'How much does software outsourcing cost?',
    a: 'Software outsourcing with Codazz starts at $19/hour depending on the role and seniority, compared to $100-$200/hour for equivalent US-based talent. A typical 5-person team starts at $11,000/month. We offer both fixed-price and time-and-materials pricing models.',
  },
  {
    q: 'Can I communicate directly with the development team?',
    a: 'Yes, absolutely. You have direct access to every team member via Slack, Microsoft Teams, or your preferred communication tool. We schedule daily standups at times convenient for your time zone. Your dedicated Project Manager coordinates everything, but you can always reach individual developers directly.',
  },
  {
    q: 'What is the typical engagement timeline?',
    a: 'From first call to working team: 1-2 weeks. MVP delivery: 8-12 weeks. Full product launch: 4-6 months. Enterprise-grade applications: 6-12 months. We provide a detailed milestone plan with sprint-by-sprint deliverables before development begins.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   STYLES
   ═══════════════════════════════════════════════════════════════════════════ */

const sectionStyle: React.CSSProperties = {
  padding: '100px 20px',
  maxWidth: 1200,
  margin: '0 auto',
};

const headingStyle: React.CSSProperties = {
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  fontWeight: 800,
  color: '#fff',
  marginBottom: 16,
  lineHeight: 1.15,
};

const subHeadingStyle: React.CSSProperties = {
  fontSize: 18,
  color: 'rgba(255,255,255,0.6)',
  maxWidth: 700,
  marginBottom: 56,
  lineHeight: 1.7,
};

const greenText: React.CSSProperties = { color: '#22c55e' };

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 28,
  padding: 32,
};

const btnPrimary: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '16px 36px',
  background: '#22c55e',
  color: '#000',
  fontWeight: 700,
  fontSize: 16,
  borderRadius: 12,
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'transform .2s, box-shadow .2s',
};

const btnOutline: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '16px 36px',
  background: 'transparent',
  color: '#22c55e',
  fontWeight: 700,
  fontSize: 16,
  borderRadius: 12,
  border: '2px solid #22c55e',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'transform .2s, box-shadow .2s',
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function SoftwareOutsourcingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pageRef = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000', color: '#fff', overflow: 'hidden' }}>

        {/* ─── BREADCRUMB ─── */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 20px 0' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Software Outsourcing' },
            ]}
          />
        </div>

        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="reveal" style={{ position: 'relative', padding: '40px 20px 100px', maxWidth: 1200, margin: '0 auto' }}>
          <HeroBackground />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 99, fontSize: 14, color: '#22c55e', fontWeight: 600, marginBottom: 24 }}>
              SOC 2 Type II Certified | ISO 27001 Compliant
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Software Development <span style={greenText}>Outsourcing Company</span>
            </h1>
            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 40, maxWidth: 650 }}>
              Outsource your software development to Codazz and save 60-70% without sacrificing quality. Offshore, nearshore, and hybrid models. 500+ projects delivered for startups and Fortune 500 companies. Your IP is always 100% yours.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
              <Link href="/contact" style={btnPrimary}>Get Free Quote →</Link>
              <Link href="#outsourcing-models" style={btnOutline}>View Outsourcing Models</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24 }}>
              {heroStats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#22c55e' }}>{s.value}{s.suffix || ''}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ WHY OUTSOURCE ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Why Outsource to <span style={greenText}>Codazz</span>?
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              We are not just a vendor — we are a strategic engineering partner trusted by 200+ companies across 4 continents. Here is why they choose us.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
            {whyOutsource.map(item => (
              <div key={item.title} style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ OUTSOURCING MODELS ═══════════════════ */}
        <section id="outsourcing-models" className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Outsourcing <span style={greenText}>Models</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Choose the engagement model that fits your project requirements, budget, and communication preferences. Switch models anytime as your needs evolve.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {outsourcingModels.map(model => (
              <div key={model.name} style={{ ...cardStyle, borderTop: `3px solid ${model.color}`, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'inline-block', padding: '4px 12px', background: `${model.color}15`, borderRadius: 6, alignSelf: 'flex-start' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: model.color }}>{model.tagline}</span>
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 800, color: '#fff' }}>{model.name}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, flex: 1 }}>{model.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Cost Savings</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: model.color }}>{model.savings}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Time Zone Overlap</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: model.color }}>{model.overlap}</div>
                  </div>
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>
                  <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Best for:</strong> {model.bestFor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ COST COMPARISON ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Cost Comparison: <span style={greenText}>US vs India</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Real market rates for senior-level talent. See exactly how much you save by outsourcing to Codazz without any compromise on quality.
            </p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 650 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>Role</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>US Rate</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid #22c55e', color: '#22c55e', fontSize: 14, fontWeight: 700 }}>Codazz Rate</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row, i) => (
                  <tr key={row.role} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                    <td style={{ padding: '14px 20px', fontSize: 15, fontWeight: 600, color: '#fff' }}>{row.role}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through' }}>{row.us}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: '#22c55e', fontWeight: 600 }}>{row.india}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: '#22c55e', fontWeight: 700 }}>{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/contact" style={btnPrimary}>Get Your Custom Quote →</Link>
          </div>
        </section>

        {/* ═══════════════════ SECURITY & IP PROTECTION ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Security & <span style={greenText}>IP Protection</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Your intellectual property and data security are non-negotiable. Here is how we protect them at every level.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {securityFeatures.map(item => (
              <div key={item.title} style={{ ...cardStyle, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 40, height: 40, borderRadius: 10, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ OUR PROCESS ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Our Outsourcing <span style={greenText}>Process</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              A battle-tested 6-step process refined over 500+ projects. Designed to minimize risk and maximize velocity from day one.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {processSteps.map(step => (
              <div key={step.num} style={{ ...cardStyle, position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: 72, fontWeight: 900, color: 'rgba(34,197,94,0.06)', position: 'absolute', top: -8, right: 12, lineHeight: 1 }}>{step.num}</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, color: '#22c55e' }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>{step.title}</h3>
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ INDUSTRIES ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Industries We <span style={greenText}>Serve</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Deep domain expertise across 8+ verticals. Our engineers understand your industry regulations, user expectations, and competitive landscape.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {industries.map(ind => (
              <div key={ind.name} style={{ ...cardStyle, padding: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>{ind.name}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{ind.examples}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ SUCCESS METRICS ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Our <span style={greenText}>Track Record</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Numbers that demonstrate why Codazz is a trusted outsourcing partner for companies across 4 continents.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {successMetrics.map(stat => (
              <div key={stat.label} style={{ ...cardStyle, textAlign: 'center', padding: 28 }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>{stat.value}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{stat.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ ENGAGEMENT TYPES ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Engagement <span style={greenText}>Types</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Choose the pricing model that fits your project. Switch between models as your requirements evolve — no lock-in, no penalties.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
            {engagementTypes.map(et => (
              <div key={et.title} style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>{et.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, flex: 1, margin: 0 }}>{et.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Best For</div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{et.bestFor}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Budget Risk</div>
                    <div style={{ fontSize: 14, color: '#22c55e', fontWeight: 600 }}>{et.riskLevel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ TECH EXPERTISE ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Technology <span style={greenText}>Expertise</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Our 100+ engineers have deep production experience across the entire modern tech stack. We match the right technology to your project requirements.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {techExpertise.map(cat => (
              <div key={cat.category} style={cardStyle}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', marginBottom: 16 }}>{cat.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.techs.map(t => (
                    <span key={t} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              What Our <span style={greenText}>Clients Say</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Real feedback from companies who outsource their software development to Codazz.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 20, borderTop: '3px solid rgba(34,197,94,0.3)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(34,197,94,0.3)">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, flex: 1, fontStyle: 'italic', margin: 0 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{t.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ TRUST BADGES ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Trust & <span style={greenText}>Compliance</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Enterprise-grade certifications and policies that give you peace of mind when outsourcing mission-critical software.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {trustBadges.map(badge => (
              <div key={badge.title} style={{ ...cardStyle, textAlign: 'center', padding: 28 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>{badge.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{badge.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ HOW TO SELECT A PARTNER ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              How to <span style={greenText}>Choose the Right Partner</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Not all outsourcing vendors are created equal. Use this 6-point selection framework before signing any contract.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {selectionCriteria.map(item => (
              <div key={item.num} style={{ ...cardStyle, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 44, height: 44, borderRadius: 12, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, color: '#22c55e', flexShrink: 0 }}>
                  {item.num}
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ COMMON MISTAKES ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              6 Outsourcing Mistakes <span style={greenText}>to Avoid</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Most outsourcing failures are preventable. Here are the most common pitfalls — and how to avoid every one of them.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {commonMistakes.map(item => (
              <div key={item.mistake} style={{ ...cardStyle, borderLeft: `3px solid ${item.severity === 'critical' ? '#ef4444' : item.severity === 'high' ? '#f97316' : '#eab308'}`, paddingLeft: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, padding: '3px 10px', borderRadius: 20, background: item.severity === 'critical' ? 'rgba(239,68,68,0.1)' : item.severity === 'high' ? 'rgba(249,115,22,0.1)' : 'rgba(234,179,8,0.1)', color: item.severity === 'critical' ? '#ef4444' : item.severity === 'high' ? '#f97316' : '#eab308' }}>
                    {item.severity}
                  </span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.mistake}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}><strong style={{ color: 'rgba(255,255,255,0.7)' }}>Impact:</strong> {item.impact}</p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}><strong style={{ color: '#22c55e' }}>Fix:</strong> {item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ ROI OF OUTSOURCING ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              The Real <span style={greenText}>ROI of Outsourcing</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Outsourcing with Codazz is not just about cost cutting — it is about compressing timelines, eliminating overhead, and scaling without risk.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {roiData.map(item => (
              <div key={item.metric} style={{ ...cardStyle, textAlign: 'center' }}>
                <div style={{ fontSize: 42, fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>{item.value}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{item.metric}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{item.detail}</div>
                <div style={{ padding: '12px 16px', background: 'rgba(34,197,94,0.06)', borderRadius: 10, fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.example}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ FAQ ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Frequently Asked <span style={greenText}>Questions</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Common questions about outsourcing software development to Codazz.
            </p>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  ...cardStyle,
                  padding: 0,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: openFaq === i ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,255,255,0.08)',
                }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', margin: 0 }}>{faq.q}</h3>
                  <span style={{ fontSize: 24, color: '#22c55e', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform .2s', flexShrink: 0 }}>+</span>
                </div>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ HOW WE COMPARE ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Codazz vs Other <span style={greenText}>Outsourcing Providers</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Not all outsourcing companies deliver the same value. Here is how Codazz compares to generic outsourcing shops and freelance platforms.
            </p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>Feature</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid #22c55e', color: '#22c55e', fontSize: 14, fontWeight: 700 }}>Codazz</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>Generic Outsourcing</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>Freelance Platforms</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Security Certifications', codazz: 'SOC 2 + ISO 27001', generic: 'Rarely certified', freelance: 'None' },
                  { feature: 'IP Protection', codazz: 'Full NDA + IP assignment', generic: 'Basic NDA', freelance: 'Varies, often unclear' },
                  { feature: 'Team Stability', codazz: '96% annual retention', generic: '60-70% retention', freelance: 'High turnover' },
                  { feature: 'Project Management', codazz: 'Dedicated PM included', generic: 'Extra cost', freelance: 'Self-managed' },
                  { feature: 'Quality Assurance', codazz: 'Dedicated QA + CI/CD', generic: 'Basic testing', freelance: 'None' },
                  { feature: 'Scalability', codazz: 'Scale in 2 weeks', generic: '4-6 weeks', freelance: 'Hire from scratch' },
                ].map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                    <td style={{ padding: '14px 20px', fontSize: 15, fontWeight: 600, color: '#fff' }}>{row.feature}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: '#22c55e', fontWeight: 500 }}>{row.codazz}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>{row.generic}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>{row.freelance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/contact" style={btnPrimary}>Get Free Quote →</Link>
          </div>
        </section>

        {/* ═══════════════════ CTA ═══════════════════ */}
        <section className="reveal" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '64px 40px', background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.03))', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 24 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              Ready to <span style={greenText}>Outsource Smarter</span>?
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 36, maxWidth: 600, margin: '0 auto 36px' }}>
              Get a free consultation and detailed project estimate within 48 hours. No commitment, no pressure. Just a transparent conversation about how outsourcing can accelerate your product roadmap.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={btnPrimary}>Get Free Quote →</Link>
              <Link href="/case-studies" style={btnOutline}>View Case Studies</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .reveal { opacity: 0; transform: translateY(40px); transition: opacity .7s, transform .7s; }
        .reveal.visible { opacity: 1; transform: none; }
        @media (max-width: 768px) {
          table { font-size: 13px !important; }
        }
      `}</style>
    </>
  );
}
