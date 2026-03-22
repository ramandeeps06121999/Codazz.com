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
  { value: '500+', label: 'Projects Delivered' },
  { value: '100+', label: 'Dedicated Engineers' },
  { value: '4.9', label: 'Clutch Rating', suffix: '★' },
  { value: '2 Wks', label: 'Onboarding Time' },
];

const howItWorks = [
  {
    step: '01',
    title: 'Discovery & Matching',
    desc: 'We analyze your project requirements, tech stack, and team culture. Within 48 hours, we present hand-picked developer profiles with verified portfolios and skill assessments tailored to your exact needs.',
  },
  {
    step: '02',
    title: 'Team Assembly & Onboarding',
    desc: 'You interview and approve each team member. We handle onboarding — setting up tools, access, communication channels, and development environments. Your dedicated team is operational within 2 weeks.',
  },
  {
    step: '03',
    title: 'Build & Scale',
    desc: 'Your team works exclusively on your project following Agile sprints. Scale up or down with 2 weeks notice. Daily standups, bi-weekly demos, and a dedicated PM ensure full transparency and velocity.',
  },
];

const teamRoles = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Project Manager',
    desc: 'Your single point of contact who coordinates sprints, removes blockers, manages timelines, and ensures alignment between your business goals and engineering execution.',
    rate: 'Starting at $1,900/mo',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="m7 8 3 3-3 3" />
        <path d="M14 14h3" />
      </svg>
    ),
    title: 'Frontend Developer',
    desc: 'React, Next.js, Angular, or Vue.js specialists who craft pixel-perfect, accessible, and performant user interfaces. Expertise in TypeScript, Tailwind, and modern component architectures.',
    rate: 'Starting at $2,250/mo',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: 'Backend Developer',
    desc: 'Node.js, Python, Java, Go, or .NET engineers who build robust APIs, microservices, and server-side architectures. Deep expertise in databases, caching, message queues, and cloud-native patterns.',
    rate: 'Starting at $2,500/mo',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'QA Engineer',
    desc: 'Manual and automation testing specialists using Selenium, Cypress, Playwright, and Jest. They ensure every release is regression-free with comprehensive test coverage across unit, integration, and E2E layers.',
    rate: 'Starting at $1,500/mo',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'DevOps Engineer',
    desc: 'CI/CD pipeline architects who automate deployments, manage infrastructure as code (Terraform, Pulumi), and ensure 99.99% uptime with monitoring, alerting, and incident response protocols.',
    rate: 'Starting at $2,600/mo',
  },
];

const pricingModels = [
  {
    name: 'Starter Team',
    price: 'Starting at $6,000',
    period: '/month',
    features: [
      '1 Frontend Developer',
      '1 Backend Developer',
      '1 QA Engineer (shared)',
      'Project Manager',
      'Daily standups',
      'Bi-weekly sprint demos',
      'Slack + Jira access',
    ],
    highlighted: false,
  },
  {
    name: 'Growth Team',
    price: 'Starting at $13,500',
    period: '/month',
    features: [
      '2 Frontend Developers',
      '2 Backend Developers',
      '1 QA Engineer (dedicated)',
      '1 DevOps Engineer (shared)',
      'Dedicated Project Manager',
      'Daily standups + weekly reports',
      'Full CI/CD pipeline setup',
      'Architecture reviews',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise Team',
    price: 'Starting at $26,000',
    period: '/month',
    features: [
      '3+ Frontend Developers',
      '3+ Backend Developers',
      '2 QA Engineers (dedicated)',
      '1 DevOps Engineer (dedicated)',
      'Tech Lead + Project Manager',
      'On-demand scaling',
      'SLA-backed uptime guarantees',
      '24/7 support channel',
      'Quarterly architecture audits',
    ],
    highlighted: false,
  },
];

const benefitsVsOthers = [
  {
    feature: 'Team Stability',
    dedicated: 'Full-time, long-term commitment',
    freelancers: 'High turnover, juggling clients',
    agencies: 'Shared across projects',
  },
  {
    feature: 'Cost Efficiency',
    dedicated: '60-70% savings vs US hires',
    freelancers: 'Cheap upfront, costly rework',
    agencies: 'Premium markup (2-3x)',
  },
  {
    feature: 'Communication',
    dedicated: 'Daily standups, Slack, Jira',
    freelancers: 'Async, unreliable',
    agencies: 'Through account manager only',
  },
  {
    feature: 'Scalability',
    dedicated: 'Scale in 2 weeks',
    freelancers: 'Hire from scratch',
    agencies: 'Slow, new SOWs needed',
  },
  {
    feature: 'IP Protection',
    dedicated: 'Full NDA + IP assignment',
    freelancers: 'Often unclear',
    agencies: 'Varies by contract',
  },
  {
    feature: 'Quality Control',
    dedicated: 'Code reviews, QA, CI/CD',
    freelancers: 'Self-managed',
    agencies: 'Process-heavy, slow',
  },
];

const engagementProcess = [
  { num: '1', title: 'Free Discovery Call', desc: 'Share your vision, tech requirements, and timeline. We assess the best team composition for your project.' },
  { num: '2', title: 'Talent Matching', desc: 'We present vetted developer profiles within 48 hours. You interview and approve each team member.' },
  { num: '3', title: 'Contract & NDA', desc: 'Transparent MSA with clear IP assignment, SLAs, and exit clauses. No lock-in periods.' },
  { num: '4', title: 'Onboarding', desc: 'Tool setup, access provisioning, knowledge transfer, and sprint zero planning — all completed in 2 weeks.' },
  { num: '5', title: 'Agile Development', desc: '2-week sprints with daily standups, bi-weekly demos, and continuous deployment. Full transparency via dashboards.' },
  { num: '6', title: 'Scale & Evolve', desc: 'Add or reduce team members as your product evolves. We adapt to your changing needs with zero friction.' },
];

const techStack = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', techs: ['Node.js', 'Python', 'Java', 'Go', '.NET', 'Ruby on Rails'] },
  { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'] },
  { category: 'Cloud', techs: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Vercel'] },
  { category: 'Database', techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB', 'Elasticsearch'] },
  { category: 'DevOps', techs: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'ArgoCD'] },
];

const industries = [
  {
    name: 'FinTech & Banking',
    desc: 'Trading platforms, payment gateways, digital wallets, lending apps, and regulatory compliance tools. PCI DSS and SOC 2 compliant development.',
    projects: '80+',
  },
  {
    name: 'Healthcare & Life Sciences',
    desc: 'HIPAA-compliant telehealth apps, EHR integrations, patient portals, clinical trial platforms, and medical device software.',
    projects: '45+',
  },
  {
    name: 'E-Commerce & Retail',
    desc: 'Multi-vendor marketplaces, mobile storefronts, inventory management systems, loyalty platforms, and AI-powered recommendation engines.',
    projects: '120+',
  },
  {
    name: 'SaaS & Enterprise',
    desc: 'Multi-tenant platforms, subscription billing systems, analytics dashboards, workflow automation tools, and enterprise resource planning.',
    projects: '95+',
  },
  {
    name: 'Logistics & Supply Chain',
    desc: 'Fleet management, route optimization, warehouse automation, real-time tracking, and supply chain visibility platforms.',
    projects: '35+',
  },
  {
    name: 'EdTech & eLearning',
    desc: 'LMS platforms, adaptive learning engines, virtual classrooms, assessment tools, and gamified learning experiences.',
    projects: '40+',
  },
];

const testimonials = [
  {
    quote: 'Codazz assembled a 6-person team for our FinTech platform in under 2 weeks. They integrated seamlessly with our Portland team and delivered our MVP 3 weeks ahead of schedule. The cost savings were substantial — about 65% less than local hires.',
    name: 'David Chen',
    title: 'CTO, FinPay Solutions',
    location: 'Portland, OR',
  },
  {
    quote: 'We have been working with our dedicated Codazz team for 18 months now. The team stability is incredible — zero turnover. They know our codebase inside out and ship features faster than our previous in-house team ever did.',
    name: 'Sarah Mitchell',
    title: 'VP Engineering, MedConnect',
    location: 'Toronto, ON',
  },
  {
    quote: 'After burning through three freelance developers, we switched to a dedicated team from Codazz. Night and day difference. Professional project management, consistent quality, and they actually care about our product success.',
    name: 'James Rodriguez',
    title: 'Founder, ShopLocal',
    location: 'Austin, TX',
  },
];

const trustStats = [
  { value: '500+', label: 'Projects Delivered', desc: 'Across FinTech, Healthcare, E-Commerce, SaaS, and more' },
  { value: '98%', label: 'Client Retention', desc: 'Most clients renew and expand their dedicated teams' },
  { value: '0%', label: 'IP Disputes', desc: 'Zero intellectual property issues in 16+ years' },
  { value: '<2 Wks', label: 'Team Assembly', desc: 'From first call to operational dedicated team' },
  { value: '4.9/5', label: 'Clutch Rating', desc: 'Based on 127+ verified client reviews' },
  { value: '16+', label: 'Years in Business', desc: 'Established in 2010, profitable since day one' },
];

const whyCodezz = [
  {
    title: 'Pre-Vetted Senior Talent',
    desc: 'Every Codazz engineer passes a rigorous 5-stage vetting process including technical assessment, live coding challenge, system design interview, English proficiency test, and cultural fit evaluation. Only the top 3% of applicants join our team, ensuring you get senior-level expertise from day one.',
  },
  {
    title: '96% Annual Retention Rate',
    desc: 'Our engineering team has a 96% retention rate — far above the industry average of 70%. Your dedicated developers stay on your project long-term, building deep domain knowledge and maintaining consistent velocity without disruptive handoffs.',
  },
  {
    title: 'Full Agile Toolchain Included',
    desc: 'Your team comes pre-configured with Jira for project management, Slack for communication, GitHub/GitLab for version control, and automated CI/CD pipelines. No setup costs or tool subscriptions — everything is included in your monthly rate.',
  },
  {
    title: 'No Hidden Costs, No Lock-in',
    desc: 'Our pricing is fully transparent — the rate you see is the rate you pay. No onboarding fees, no infrastructure surcharges, no exit penalties. You can scale or terminate with just 2 weeks notice. We earn your business every sprint.',
  },
  {
    title: 'SOC 2 & ISO 27001 Certified',
    desc: 'Your code and data are protected by enterprise-grade security. We are SOC 2 Type II certified and ISO 27001 compliant. Every team member signs an individual NDA. Encrypted repos, VPN access, and role-based permissions are standard.',
  },
  {
    title: 'Edmonton HQ, Chandigarh Engineering',
    desc: 'Our Canadian headquarters in Edmonton handles client relationships and project strategy in your time zone. Our 100+ engineer delivery center in Chandigarh provides world-class development at offshore rates. Best of both worlds.',
  },
];

const engagementModels = [
  {
    period: 'Weekly',
    icon: '📅',
    title: 'Weekly Sprints',
    highlights: ['Sprint planning every Monday', 'Daily standups (30 min)', 'Friday demo & retrospective', 'Velocity tracking in Jira', 'Slack for async communication'],
    bestFor: 'Fast-paced startups and MVP builds',
  },
  {
    period: 'Monthly',
    icon: '📊',
    title: 'Monthly Milestones',
    highlights: ['Monthly roadmap planning', 'Weekly progress check-ins', 'Monthly exec-level report', 'Burn-down charts and KPIs', 'Dedicated Slack channel'],
    bestFor: 'Scale-ups with stable product roadmaps',
  },
  {
    period: 'Ongoing',
    icon: '♾️',
    title: 'Long-Term Partnership',
    highlights: ['Quarterly strategy sessions', 'Annual team scaling plan', 'Proactive tech recommendations', 'Dedicated account director', 'Priority SLA response times'],
    bestFor: 'Enterprises needing a permanent offshore arm',
  },
];

const clientControlPoints = [
  {
    area: 'Team Hiring',
    control: 'Full Control',
    detail: 'You interview and approve every engineer before they join your project. No bait-and-switch after the contract is signed.',
    icon: '✅',
  },
  {
    area: 'Sprint Planning',
    control: 'Full Control',
    detail: 'You set the priorities each sprint. Your PM facilitates but the product roadmap is yours to define. Engineers follow your direction.',
    icon: '✅',
  },
  {
    area: 'Tools & Workflow',
    control: 'Your Choice',
    detail: 'We adapt to your existing tools — whether that\'s Linear, Notion, Asana, or your custom stack. We don\'t force our toolchain on you.',
    icon: '✅',
  },
  {
    area: 'Code Repository',
    control: 'Full Ownership',
    detail: 'Your GitHub or GitLab org. You own every commit from day one. We push to your repos — never to our servers.',
    icon: '✅',
  },
  {
    area: 'Team Replacement',
    control: 'Your Right',
    detail: 'If a team member is not meeting expectations, we replace them within 2 weeks at no cost. No debates, no lock-in.',
    icon: '✅',
  },
  {
    area: 'IP & Source Code',
    control: '100% Yours',
    detail: 'Every line of code, design file, and document produced by your team is your exclusive intellectual property. Guaranteed by contract.',
    icon: '✅',
  },
];

const faqs = [
  {
    q: 'What is a dedicated development team model?',
    a: 'A dedicated development team model provides you with a full-time, exclusively allocated group of software engineers, project managers, QA specialists, and DevOps engineers who work solely on your project. Unlike freelancers or shared agency teams, dedicated teams integrate into your workflow, attend your standups, and operate as a seamless extension of your in-house staff.',
  },
  {
    q: 'How quickly can you assemble a dedicated team?',
    a: 'Codazz can assemble and onboard a dedicated development team within 1-2 weeks. We maintain a bench of pre-vetted engineers across all major tech stacks, allowing us to match the right talent to your project requirements rapidly. Complex or highly specialized teams may take up to 3 weeks.',
  },
  {
    q: 'How much does a dedicated development team cost?',
    a: 'A dedicated development team from Codazz typically starts at $6,000/month depending on team size and seniority. This is 60-70% less than hiring equivalent talent in the US or Canada. Pricing is fully transparent with no hidden fees — you pay a fixed monthly rate per team member.',
  },
  {
    q: 'Can I scale the team up or down?',
    a: 'Absolutely. One of the biggest advantages of the dedicated team model is flexibility. You can scale your team up or down with just 2 weeks notice. Need to add a mobile developer for a sprint? Or reduce the team after a major release? We handle the transitions seamlessly.',
  },
  {
    q: 'How do you ensure quality and communication?',
    a: 'Every dedicated team follows Agile/Scrum methodology with daily standups, sprint planning, and retrospectives. We use Slack, Jira, and Confluence for real-time communication. You get a dedicated Project Manager as your single point of contact, plus access to our project dashboard for full transparency.',
  },
  {
    q: 'What happens to my intellectual property?',
    a: 'All intellectual property rights belong 100% to you. We sign comprehensive IP assignment agreements and NDAs before any work begins. Your code, designs, documentation, and all project artifacts are your exclusive property from day one.',
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

export default function DedicatedTeamPage() {
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
              { label: 'Dedicated Development Team' },
            ]}
          />
        </div>

        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="reveal" style={{ position: 'relative', padding: '40px 20px 100px', maxWidth: 1200, margin: '0 auto' }}>
          <HeroBackground />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 99, fontSize: 14, color: '#22c55e', fontWeight: 600, marginBottom: 24 }}>
              Trusted by 200+ Companies Worldwide
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Hire a <span style={greenText}>Dedicated Development Team</span> That Ships
            </h1>
            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 40, maxWidth: 650 }}>
              Get a full-stack engineering team — Project Managers, Frontend & Backend developers, QA engineers, and DevOps — working exclusively on your product. Transparent monthly pricing. Onboarded in 2 weeks. Scale anytime.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
              <Link href="/contact" style={btnPrimary}>Get Free Quote →</Link>
              <Link href="#how-it-works" style={btnOutline}>See How It Works</Link>
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

        {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
        <section id="how-it-works" className="reveal" style={{ ...sectionStyle, paddingTop: 80 }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              How It <span style={greenText}>Works</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              From first call to working team in just 2 weeks. Our streamlined process eliminates the months-long hiring cycles and onboarding headaches.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {howItWorks.map(item => (
              <div key={item.step} style={{ ...cardStyle, position: 'relative' }}>
                <div style={{ fontSize: 64, fontWeight: 900, color: 'rgba(34,197,94,0.1)', position: 'absolute', top: 16, right: 24, lineHeight: 1 }}>{item.step}</div>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <span style={{ fontSize: 20, fontWeight: 800, color: '#22c55e' }}>{item.step}</span>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ TEAM COMPOSITION ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Your <span style={greenText}>Team Composition</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Every role is filled by a pre-vetted specialist with 4+ years of experience. You interview and approve each team member before they start.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {teamRoles.map(role => (
              <div key={role.title} style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {role.icon}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>{role.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, flex: 1 }}>{role.desc}</p>
                <div style={{ padding: '8px 16px', background: 'rgba(34,197,94,0.08)', borderRadius: 8, display: 'inline-block', alignSelf: 'flex-start' }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#22c55e' }}>{role.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ PRICING MODELS ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Transparent <span style={greenText}>Pricing</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              No hidden fees. No surprise invoices. Pick a team size that fits your budget, and scale as your product grows.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {pricingModels.map(plan => (
              <div
                key={plan.name}
                style={{
                  ...cardStyle,
                  border: plan.highlighted ? '2px solid #22c55e' : '1px solid rgba(255,255,255,0.08)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {plan.highlighted && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#22c55e', color: '#000', fontWeight: 700, fontSize: 13, padding: '4px 16px', borderRadius: 99 }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{plan.name}</h3>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontSize: 42, fontWeight: 800, color: '#22c55e' }}>{plan.price}</span>
                  <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }}>{plan.period}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M5 12l5 5L20 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  style={{
                    ...( plan.highlighted ? btnPrimary : btnOutline),
                    justifyContent: 'center',
                    marginTop: 28,
                    width: '100%',
                    textAlign: 'center' as const,
                  }}
                >
                  Get Free Quote
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ BENEFITS VS FREELANCERS/AGENCIES ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Dedicated Team vs <span style={greenText}>Freelancers & Agencies</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              See why 200+ companies choose the dedicated team model over traditional hiring, freelancers, or full-service agencies.
            </p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>Feature</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid #22c55e', color: '#22c55e', fontSize: 14, fontWeight: 700 }}>Dedicated Team</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>Freelancers</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>Agencies</th>
                </tr>
              </thead>
              <tbody>
                {benefitsVsOthers.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                    <td style={{ padding: '14px 20px', fontSize: 15, fontWeight: 600, color: '#fff' }}>{row.feature}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: '#22c55e', fontWeight: 500 }}>{row.dedicated}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>{row.freelancers}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>{row.agencies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ═══════════════════ ENGAGEMENT PROCESS ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Our <span style={greenText}>Engagement Process</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              A proven 6-step process refined over 500+ projects. Zero friction, full transparency, rapid time-to-value.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {engagementProcess.map(step => (
              <div key={step.num} style={{ ...cardStyle, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 44, height: 44, borderRadius: 12, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 18, color: '#22c55e' }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ TECH STACK ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Our <span style={greenText}>Tech Stack</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              We match the right technology to your project. Our engineers have deep production experience across all major frameworks, languages, and cloud platforms.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {techStack.map(cat => (
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

        {/* ═══════════════════ WHY CODAZZ ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Why Choose <span style={greenText}>Codazz</span>?
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Not all dedicated team providers are the same. Here is what sets Codazz apart from generic staff augmentation firms.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {whyCodezz.map(item => (
              <div key={item.title} style={{ ...cardStyle, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 40, height: 40, borderRadius: 10, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M5 12l5 5L20 7" />
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

        {/* ═══════════════════ INDUSTRIES ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Industries We <span style={greenText}>Serve</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Our dedicated teams have deep domain expertise across 6+ verticals. They understand your industry regulations, user expectations, and competitive landscape.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {industries.map(ind => (
              <div key={ind.name} style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 }}>{ind.name}</h3>
                  <span style={{ padding: '4px 10px', background: 'rgba(34,197,94,0.1)', borderRadius: 6, fontSize: 13, fontWeight: 600, color: '#22c55e' }}>{ind.projects} projects</span>
                </div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
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
              Do not just take our word for it. Hear from companies who have built products with Codazz dedicated teams.
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

        {/* ═══════════════════ TRUST STATS ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Why <span style={greenText}>200+ Companies</span> Trust Codazz
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Numbers that speak louder than words. Our track record is your peace of mind.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {trustStats.map(stat => (
              <div key={stat.label} style={{ ...cardStyle, textAlign: 'center', padding: 28 }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>{stat.value}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{stat.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ ENGAGEMENT MODELS ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Weekly &amp; Monthly <span style={greenText}>Engagement Models</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              We structure your engagement around your rhythm — not ours. Choose the cadence that fits your team and goals, with full flexibility to adjust anytime.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {engagementModels.map(model => (
              <div key={model.period} style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
                    {model.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: 1 }}>{model.period}</div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 }}>{model.title}</h3>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {model.highlights.map(h => (
                    <li key={h} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M5 12l5 5L20 7" /></svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', padding: '10px 16px', background: 'rgba(34,197,94,0.06)', borderRadius: 10, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
                  <span style={{ color: '#22c55e', fontWeight: 600 }}>Best for:</span> {model.bestFor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ CLIENT CONTROL LEVEL ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              You Are Always <span style={greenText}>In Control</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              A dedicated team is not a black box. You retain full authority over hiring, direction, tools, and IP. We execute — you lead.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {clientControlPoints.map(point => (
              <div key={point.area} style={{ ...cardStyle, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 44, height: 44, borderRadius: 12, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                  {point.icon}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: 0 }}>{point.area}</h3>
                    <span style={{ fontSize: 12, fontWeight: 700, padding: '3px 10px', background: 'rgba(34,197,94,0.15)', borderRadius: 20, color: '#22c55e' }}>{point.control}</span>
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{point.detail}</p>
                </div>
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
              Everything you need to know about hiring a dedicated development team from Codazz.
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
                  <span style={{ fontSize: 24, color: '#22c55e', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}>+</span>
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

        {/* ═══════════════════ CTA ═══════════════════ */}
        <section className="reveal" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '64px 40px', background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.03))', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 24 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              Ready to Build Your <span style={greenText}>Dedicated Team</span>?
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 36, maxWidth: 600, margin: '0 auto 36px' }}>
              Get a free consultation and team proposal within 48 hours. No commitment required. Tell us about your project and we will match the perfect team.
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
