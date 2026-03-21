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
  { value: '60-70%', label: 'Cost Savings' },
  { value: '4.9', label: 'Clutch Rating', suffix: '★' },
  { value: '100+', label: 'Engineers' },
];

const offices = [
  {
    city: 'Edmonton, Canada',
    role: 'Global HQ',
    desc: 'Our headquarters in Edmonton, Alberta handles client relationships, project strategy, and account management for North American clients. Direct access to your leadership team in your time zone for seamless communication and strategic alignment.',
    features: ['Client-facing project leads', 'Strategic planning & architecture', 'Same time zone meetings', 'Legal & compliance'],
    color: '#22c55e',
  },
  {
    city: 'Chandigarh, India',
    role: 'Development Center',
    desc: 'Our engineering hub in Chandigarh houses 100+ developers, QA engineers, and DevOps specialists. The city is a top-tier IT destination known for its world-class universities, engineering talent, and modern infrastructure.',
    features: ['100+ full-stack engineers', 'Dedicated QA & DevOps teams', 'State-of-the-art office', 'SOC 2 certified facility'],
    color: '#3b82f6',
  },
];

const costSavingsData = [
  { category: 'Senior Developer (Annual)', us: '$180,000 – $250,000', offshore: '$36,000 – $66,000', saved: '$114,000 – $184,000' },
  { category: 'Project Manager (Annual)', us: '$130,000 – $180,000', offshore: '$30,000 – $48,000', saved: '$100,000 – $132,000' },
  { category: 'QA Engineer (Annual)', us: '$100,000 – $150,000', offshore: '$24,000 – $42,000', saved: '$76,000 – $108,000' },
  { category: '5-Person Team (Annual)', us: '$750,000 – $1,000,000', offshore: '$180,000 – $330,000', saved: '$420,000 – $670,000' },
];

const additionalSavings = [
  { item: 'Office Space & Infrastructure', savings: '$0 — we handle it' },
  { item: 'Benefits & Health Insurance', savings: '$0 — included in rates' },
  { item: 'Recruiting & HR', savings: '$0 — we handle hiring' },
  { item: 'Equipment & Licenses', savings: '$0 — provided by Codazz' },
  { item: 'Training & Onboarding', savings: '$0 — pre-trained teams' },
];

const timeZoneOverlap = [
  { zone: 'EST (New York, Toronto)', overlap: '8:00 AM – 12:30 PM EST', hours: '4.5 hrs' },
  { zone: 'CST (Chicago, Houston)', overlap: '7:00 AM – 11:30 AM CST', hours: '4.5 hrs' },
  { zone: 'MST (Edmonton, Denver)', overlap: '6:00 AM – 10:30 AM MST', hours: '4.5 hrs' },
  { zone: 'PST (San Francisco, LA)', overlap: '5:00 AM – 9:30 AM PST', hours: '4.5 hrs' },
  { zone: 'GMT (London, Dublin)', overlap: '1:00 PM – 5:30 PM GMT', hours: '4.5 hrs' },
  { zone: 'AEST (Sydney, Melbourne)', overlap: '9:30 PM – 2:00 AM AEST', hours: '4.5 hrs' },
];

const communicationFramework = [
  {
    title: 'Daily Standups',
    desc: '15-minute daily syncs during overlapping hours. Every team member reports progress, blockers, and plans. You have full visibility into what is happening every single day.',
    frequency: 'Every day',
  },
  {
    title: 'Sprint Planning',
    desc: 'Bi-weekly sprint planning sessions where we review the backlog, estimate stories, and commit to sprint goals. You prioritize, we deliver.',
    frequency: 'Every 2 weeks',
  },
  {
    title: 'Sprint Demos',
    desc: 'Live demo of all completed features at the end of every sprint. You see working software, provide feedback, and approve before we move forward.',
    frequency: 'Every 2 weeks',
  },
  {
    title: 'Slack Channels',
    desc: 'Dedicated project Slack channels for real-time communication. Tag any team member directly. Average response time: under 15 minutes during work hours.',
    frequency: 'Always on',
  },
  {
    title: 'Weekly Reports',
    desc: 'Comprehensive weekly status reports covering velocity, burndown charts, risks, and upcoming milestones. Delivered to your inbox every Friday.',
    frequency: 'Every week',
  },
  {
    title: 'Executive Reviews',
    desc: 'Monthly strategic reviews with project leadership covering progress against KPIs, budget utilization, roadmap adjustments, and long-term planning.',
    frequency: 'Monthly',
  },
];

const qaProcessSteps = [
  {
    title: 'Code Reviews',
    desc: 'Every pull request undergoes peer review by a senior engineer. We enforce coding standards, check for security vulnerabilities, and ensure maintainability before any merge.',
  },
  {
    title: 'Automated Testing',
    desc: 'CI/CD pipelines run unit tests, integration tests, and E2E tests on every commit. We target 90%+ code coverage with Jest, Cypress, Playwright, and Selenium.',
  },
  {
    title: 'Manual QA',
    desc: 'Dedicated QA engineers perform exploratory testing, usability testing, and edge-case validation. They catch what automated tests miss — the human-visible bugs.',
  },
  {
    title: 'Performance Testing',
    desc: 'Load testing with K6 and JMeter to validate your application handles 10x expected traffic. We optimize response times, database queries, and memory usage.',
  },
  {
    title: 'Security Audits',
    desc: 'Regular OWASP Top 10 scans, dependency vulnerability checks, and penetration testing. Security is built into our development process, not bolted on after.',
  },
  {
    title: 'Pre-Release Checklist',
    desc: 'A 50-point pre-deployment checklist covering accessibility, SEO, cross-browser compatibility, mobile responsiveness, error handling, and monitoring setup.',
  },
];

const caseStudies = [
  {
    title: 'FinTech Trading Platform',
    desc: 'Built a real-time trading platform processing 50,000+ transactions/day with sub-100ms latency. 8-person offshore team delivered in 6 months, saving the client $720,000 vs US-based development.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    savings: '$720K saved',
    href: '/case-studies/fintech-trading-platform',
  },
  {
    title: 'Healthcare Telehealth App',
    desc: 'HIPAA-compliant telehealth platform with video consultations, e-prescriptions, and EHR integration. Launched in 5 months with a 6-person offshore team, serving 100,000+ patients.',
    tech: ['React Native', 'Python', 'PostgreSQL', 'AWS', 'Twilio'],
    savings: '$540K saved',
    href: '/case-studies/healthcare-telehealth-app',
  },
  {
    title: 'E-Commerce Marketplace',
    desc: 'Multi-vendor marketplace with AI-powered recommendations, real-time inventory, and payment processing. 10-person team delivered in 8 months, now processing $5M+ monthly GMV.',
    tech: ['Next.js', 'Go', 'MongoDB', 'Elasticsearch', 'Stripe'],
    savings: '$890K saved',
    href: '/case-studies/ecommerce-marketplace',
  },
];

const techStack = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', techs: ['Node.js', 'Python', 'Java', 'Go', '.NET', 'Ruby on Rails'] },
  { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'] },
  { category: 'Cloud & DevOps', techs: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'] },
  { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB', 'Elasticsearch'] },
  { category: 'AI & ML', techs: ['TensorFlow', 'PyTorch', 'OpenAI APIs', 'LangChain', 'Hugging Face', 'Computer Vision'] },
];

const whyChooseUs = [
  {
    title: 'Canadian HQ, Indian Engineering',
    desc: 'Unlike pure offshore shops, Codazz has a real headquarters in Edmonton, Alberta. Your project lead and account manager are in North America. Strategy meetings happen in your time zone. Engineering execution happens in Chandigarh.',
  },
  {
    title: 'Zero Developer Turnover',
    desc: 'Our Chandigarh team has a 96% annual retention rate — far above the industry average of 70%. Your developers stay on your project long-term. No knowledge loss, no re-onboarding, no disruption to velocity.',
  },
  {
    title: 'Fixed-Price & T&M Options',
    desc: 'Choose fixed-price for well-scoped projects with predictable budgets, or time-and-materials for evolving products. Either way, you get weekly cost tracking with no surprise invoices.',
  },
  {
    title: 'Pre-Vetted Senior Talent',
    desc: 'Every Codazz engineer passes a 5-stage vetting process: technical assessment, live coding challenge, system design interview, English proficiency test, and cultural fit evaluation. Only the top 3% make it through.',
  },
  {
    title: 'Full IP Ownership on Day 1',
    desc: 'All intellectual property rights are assigned to you from the very first line of code. Comprehensive NDAs, IP assignment agreements, and work-for-hire contracts ensure your assets are 100% protected.',
  },
  {
    title: 'Transparent & Predictable',
    desc: 'Real-time project dashboards, daily standups, weekly reports, and bi-weekly demos. You always know where your budget stands, what has been delivered, and what is coming next. No black boxes.',
  },
];

const testimonials = [
  {
    quote: 'Codazz offshore team built our trading platform from scratch — 50,000 transactions per day with sub-100ms latency. The quality matched what we would expect from a top Bay Area firm, at a fraction of the cost.',
    name: 'Richard Huang',
    title: 'CTO, TradePro',
    location: 'San Francisco, CA',
  },
  {
    quote: 'Having their HQ in Edmonton was the deciding factor. We needed a Canadian partner for compliance reasons but wanted offshore pricing. Codazz gave us both. Our team has been rock solid for 14 months.',
    name: 'Emily Lawson',
    title: 'COO, MedSync',
    location: 'Vancouver, BC',
  },
  {
    quote: 'We scaled from 3 to 12 offshore developers in under a month when we closed our Series B. No other partner could have moved that fast with such consistent quality. The follow-the-sun model is a genuine advantage.',
    name: 'Mark Thompson',
    title: 'CEO, DataFlow',
    location: 'Denver, CO',
  },
];

const industries = [
  { name: 'FinTech & Banking', desc: 'Trading platforms, payment gateways, digital wallets, lending apps, regulatory compliance tools. PCI DSS compliant.' },
  { name: 'Healthcare', desc: 'HIPAA-compliant telehealth, EHR integrations, patient portals, clinical trial management, medical device software.' },
  { name: 'E-Commerce', desc: 'Multi-vendor marketplaces, mobile storefronts, inventory systems, loyalty programs, AI-powered recommendations.' },
  { name: 'SaaS & Enterprise', desc: 'Multi-tenant platforms, subscription billing, analytics dashboards, workflow automation, CRM/ERP systems.' },
  { name: 'Logistics', desc: 'Fleet management, route optimization, warehouse automation, real-time tracking, supply chain visibility.' },
  { name: 'EdTech', desc: 'Learning management systems, adaptive learning, virtual classrooms, assessment platforms, gamified experiences.' },
  { name: 'Real Estate', desc: 'Property platforms, CRM systems, virtual tour apps, mortgage technology, smart building management.' },
  { name: 'Media & Entertainment', desc: 'Streaming platforms, social apps, content management, gaming backends, creator economy tools.' },
];

const engagementProcess = [
  { num: '01', title: 'Free Discovery Call', desc: 'Share your project vision. We assess scope, recommend team composition, and provide a preliminary estimate — all within 48 hours. No commitment required.' },
  { num: '02', title: 'Proposal & Architecture', desc: 'Receive a detailed technical proposal including architecture diagrams, tech stack recommendations, milestone timeline, and transparent fixed or T&M pricing.' },
  { num: '03', title: 'NDA & Contract', desc: 'We sign comprehensive NDAs and a Master Service Agreement with clear IP assignment, SLAs, payment terms, communication protocols, and fair exit clauses.' },
  { num: '04', title: 'Team Assembly', desc: 'Our recruiting team hand-picks engineers matching your tech stack and domain requirements. You interview and approve each team member. Ready in 1-2 weeks.' },
  { num: '05', title: 'Sprint Zero & Onboarding', desc: 'Environment setup, tool provisioning, knowledge transfer sessions, coding standards alignment, and first sprint planning. Your team is fully operational.' },
  { num: '06', title: 'Agile Delivery', desc: 'Continuous delivery with 2-week sprints, daily standups, bi-weekly demos, and production deployments. Scale your team as your product evolves.' },
];

const culturalAlignmentPoints = [
  {
    title: 'English as the Working Language',
    desc: 'All 100+ engineers at our Chandigarh center communicate in fluent English. Every daily standup, code review, technical spec, and Slack message is in English. No translation layers, no misinterpretations.',
    icon: '🗣️',
  },
  {
    title: 'Western Agile Culture',
    desc: 'Our team has trained on Scrum, Kanban, and Agile delivery methods used by North American and European tech companies. Sprint ceremonies, user story writing, and acceptance criteria are second nature.',
    icon: '🔄',
  },
  {
    title: 'Proactive Communication',
    desc: 'We train engineers to surface blockers early, ask clarifying questions before coding, and push back when requirements are unclear. You get a thinking partner — not just a code executor.',
    icon: '📣',
  },
  {
    title: 'North American Business Hours Overlap',
    desc: 'The Chandigarh team schedules 4-5 hours of overlap with US/Canada business hours daily. Key decisions never wait 24 hours. Standups, reviews, and urgent calls happen on your schedule.',
    icon: '🌏',
  },
  {
    title: 'Shared Engineering Values',
    desc: 'Clean code, comprehensive documentation, peer code reviews, and test-driven development are non-negotiable at Codazz. Engineers take pride in shipping maintainable, production-grade software.',
    icon: '💎',
  },
  {
    title: 'No Culture Shock, Only Collaboration',
    desc: 'Our Edmonton HQ team bridges cultural context when needed. You get a culturally fluent North American point of contact plus the engineering power of our Chandigarh center.',
    icon: '🤝',
  },
];

const ipProtectionSteps = [
  {
    step: '01',
    title: 'NDA Before Any Discussion',
    desc: 'Before a single requirement is shared, we sign a mutual NDA. Your idea, business model, and technical plans are legally protected from the first conversation.',
    badge: 'Day 0',
  },
  {
    step: '02',
    title: 'IP Assignment Agreement',
    desc: 'All code, designs, databases, and documentation produced by our team are assigned to you under a legally binding work-for-hire contract. 100% ownership — no exceptions.',
    badge: 'Before Sprint 1',
  },
  {
    step: '03',
    title: 'Individual Engineer NDAs',
    desc: 'Every engineer, QA specialist, and DevOps engineer who touches your project signs a personal confidentiality agreement. Your IP is protected at the individual level, not just the company level.',
    badge: 'Onboarding',
  },
  {
    step: '04',
    title: 'Encrypted, Access-Controlled Repos',
    desc: 'Your code lives in your GitHub or GitLab organization. Developers access it via VPN and role-based permissions. Only team members approved by you have access. We never fork or retain copies.',
    badge: 'Ongoing',
  },
  {
    step: '05',
    title: 'SOC 2 Type II Certified Infrastructure',
    desc: 'Our operations are SOC 2 Type II certified, meaning an independent auditor verifies our security controls annually. ISO 27001 compliance further governs how we handle your data.',
    badge: 'Ongoing',
  },
  {
    step: '06',
    title: 'Zero IP Disputes in 16+ Years',
    desc: 'We have a zero IP dispute record across 500+ projects. Our legal framework is designed to eliminate ambiguity — what you build with Codazz is yours, period.',
    badge: 'Track Record',
  },
];

const gettingStartedSteps = [
  {
    num: '1',
    title: 'Book a Free 30-Min Discovery Call',
    desc: 'Share your product vision, tech stack, team size needed, and timeline. We ask the right questions — no sales scripts.',
    time: '30 minutes',
  },
  {
    num: '2',
    title: 'Receive a Custom Team Proposal',
    desc: 'Within 24-48 hours, we send a tailored proposal with recommended team composition, tech stack approach, timeline estimates, and transparent monthly pricing.',
    time: '24-48 hours',
  },
  {
    num: '3',
    title: 'Interview & Approve Each Engineer',
    desc: 'You interview every engineer we propose. Assess their technical depth, communication, and culture fit. Only approve people you are excited to work with.',
    time: '3-5 days',
  },
  {
    num: '4',
    title: 'Sign NDA, MSA & IP Assignment',
    desc: 'Clear, plain-English contracts. NDAs, IP assignment, SLAs, and exit clauses — all designed to protect your interests. No ambiguous boilerplate.',
    time: '1-2 days',
  },
  {
    num: '5',
    title: 'Onboarding & Sprint Zero',
    desc: 'Tool setup, access provisioning, architecture planning, and Sprint Zero backlog grooming. Your team is fully operational within 2 weeks of contract signing.',
    time: '1-2 weeks',
  },
  {
    num: '6',
    title: 'First Sprint Kicks Off',
    desc: 'Agile development begins. Daily standups, 2-week sprints, and bi-weekly demos from day one. You have full visibility and control throughout.',
    time: 'Week 2-3',
  },
];

const faqs = [
  {
    q: 'What is offshore software development?',
    a: 'Offshore software development is the practice of hiring a development team in a different country to build your software product. Companies choose offshore development to access a larger talent pool, reduce costs by 60-70%, and accelerate delivery timelines. Codazz operates with an HQ in Edmonton, Canada and a delivery center in Chandigarh, India.',
  },
  {
    q: 'How much can I save with offshore development?',
    a: 'Companies typically save 60-70% on development costs by choosing offshore development with Codazz. A senior full-stack developer in the US costs $150-$200/hour, while equivalent talent through our Chandigarh center costs $35-$55/hour. A 5-person team can save you $500,000-$800,000 annually.',
  },
  {
    q: 'How do you handle time zone differences?',
    a: 'Our Chandigarh team maintains a 4-5 hour overlap with North American business hours. We schedule daily standups, sprint reviews, and key meetings during overlapping hours. For urgent matters, our team leads are available extended hours. The time zone difference actually creates a "follow-the-sun" advantage where work continues while you sleep.',
  },
  {
    q: 'Is my data secure with an offshore team?',
    a: 'Absolutely. Codazz is SOC 2 Type II certified and ISO 27001 compliant. We use encrypted VPNs, role-based access controls, secure code repositories, and regular penetration testing. All team members undergo background checks and sign individual NDAs. Our security practices meet the same standards as US-based development firms.',
  },
  {
    q: 'What technologies does your offshore team specialize in?',
    a: 'Our offshore team has deep expertise across the full modern tech stack: React, Next.js, Angular, Vue.js for frontend; Node.js, Python, Java, Go, .NET for backend; React Native, Flutter, Swift, Kotlin for mobile; AWS, Azure, GCP for cloud; PostgreSQL, MongoDB, Redis for databases; and TensorFlow, PyTorch, OpenAI for AI/ML.',
  },
  {
    q: 'Can I visit the offshore development center?',
    a: 'Yes, we welcome client visits to our Chandigarh development center. Many of our clients visit during the project kickoff phase and periodically throughout the engagement. We also offer virtual office tours via video call. Our Edmonton HQ team is always available for in-person meetings in Canada.',
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

export default function OffshoreDevelopmentPage() {
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
              { label: 'Offshore Development' },
            ]}
          />
        </div>

        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="reveal" style={{ position: 'relative', padding: '40px 20px 100px', maxWidth: 1200, margin: '0 auto' }}>
          <HeroBackground />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 99, fontSize: 14, color: '#22c55e', fontWeight: 600, marginBottom: 24 }}>
              Edmonton HQ + Chandigarh Delivery Center
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Offshore Software <span style={greenText}>Development Company</span>
            </h1>
            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 40, maxWidth: 650 }}>
              Save 60-70% on development costs with Codazz. Our Edmonton headquarters ensures North American-grade project management while our 100+ engineer team in Chandigarh delivers world-class software. SOC 2 certified. Your IP is always yours.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
              <Link href="/contact" style={btnPrimary}>Get Free Quote →</Link>
              <Link href="#offshore-centers" style={btnOutline}>See Our Offices</Link>
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

        {/* ═══════════════════ OUR OFFSHORE CENTERS ═══════════════════ */}
        <section id="offshore-centers" className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Our <span style={greenText}>Offshore Centers</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Two strategically located offices designed for seamless collaboration. North American leadership with world-class Indian engineering talent.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 32 }}>
            {offices.map(office => (
              <div key={office.city} style={{ ...cardStyle, borderTop: `3px solid ${office.color}`, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <div style={{ display: 'inline-block', padding: '4px 12px', background: `${office.color}15`, borderRadius: 6, marginBottom: 12 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: office.color }}>{office.role}</span>
                  </div>
                  <h3 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{office.city}</h3>
                </div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{office.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {office.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={office.color} strokeWidth="2.5"><path d="M5 12l5 5L20 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ COST SAVINGS ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Save <span style={greenText}>60-70%</span> on Development Costs
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Real numbers, no fluff. Here is exactly how much you save by going offshore with Codazz compared to hiring in the US.
            </p>
          </div>
          <div style={{ overflowX: 'auto', marginBottom: 40 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>Role / Team</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>US Cost</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid #22c55e', color: '#22c55e', fontSize: 14, fontWeight: 700 }}>Codazz Offshore</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600 }}>You Save</th>
                </tr>
              </thead>
              <tbody>
                {costSavingsData.map((row, i) => (
                  <tr key={row.category} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                    <td style={{ padding: '14px 20px', fontSize: 15, fontWeight: 600, color: '#fff' }}>{row.category}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through' }}>{row.us}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: '#22c55e', fontWeight: 600 }}>{row.offshore}</td>
                    <td style={{ padding: '14px 20px', fontSize: 15, color: '#22c55e', fontWeight: 700 }}>{row.saved}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional hidden costs you avoid */}
          <div style={{ ...cardStyle, maxWidth: 700, margin: '0 auto' }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Hidden Costs You <span style={greenText}>Eliminate</span></h3>
            {additionalSavings.map(item => (
              <div key={item.item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>{item.item}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#22c55e' }}>{item.savings}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ TIME ZONE OVERLAP ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Time Zone <span style={greenText}>Overlap</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Our Chandigarh team (IST, UTC+5:30) maintains 4-5 hours of daily overlap with every major North American and European time zone. Key meetings happen during your business hours.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {timeZoneOverlap.map(tz => (
              <div key={tz.zone} style={{ ...cardStyle, padding: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{tz.zone}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{tz.overlap}</div>
                </div>
                <div style={{ padding: '6px 14px', background: 'rgba(34,197,94,0.1)', borderRadius: 8 }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: '#22c55e' }}>{tz.hours}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
              The time zone difference creates a <strong style={{ color: '#22c55e' }}>&quot;follow-the-sun&quot;</strong> advantage — our team continues building while you sleep. Wake up to progress reports and completed features every morning.
            </p>
          </div>
        </section>

        {/* ═══════════════════ COMMUNICATION FRAMEWORK ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Communication <span style={greenText}>Framework</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Offshore does not mean out of touch. Our structured communication framework ensures you always know what is happening, what is next, and what needs your attention.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {communicationFramework.map(item => (
              <div key={item.title} style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>{item.title}</h3>
                  <span style={{ padding: '4px 10px', background: 'rgba(34,197,94,0.1)', borderRadius: 6, fontSize: 12, fontWeight: 600, color: '#22c55e' }}>{item.frequency}</span>
                </div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ QUALITY ASSURANCE ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Quality <span style={greenText}>Assurance</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Offshore does not mean lower quality. Our multi-layered QA process ensures every release meets the same standards as Silicon Valley engineering teams.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {qaProcessSteps.map((step, i) => (
              <div key={step.title} style={{ ...cardStyle, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 40, height: 40, borderRadius: 10, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, color: '#22c55e' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ CASE STUDIES ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Offshore <span style={greenText}>Success Stories</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Real projects built by our offshore teams. Real savings. Real results.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
            {caseStudies.map(cs => (
              <Link key={cs.title} href={cs.href} style={{ textDecoration: 'none' }}>
                <div style={{ ...cardStyle, height: '100%', display: 'flex', flexDirection: 'column', gap: 16, transition: 'border-color .2s', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: 0 }}>{cs.title}</h3>
                    <span style={{ padding: '4px 12px', background: 'rgba(34,197,94,0.1)', borderRadius: 6, fontSize: 13, fontWeight: 700, color: '#22c55e', whiteSpace: 'nowrap' }}>{cs.savings}</span>
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, flex: 1, margin: 0 }}>{cs.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {cs.tech.map(t => (
                      <span key={t} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#22c55e' }}>Read Case Study →</span>
                </div>
              </Link>
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
              Deep domain expertise across 8+ verticals. Our offshore engineers understand your industry regulations, compliance requirements, and user expectations.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {industries.map(ind => (
              <div key={ind.name} style={{ ...cardStyle, padding: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>{ind.name}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ ENGAGEMENT PROCESS ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Getting Started Is <span style={greenText}>Simple</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Our proven 6-step onboarding process gets your offshore team from first call to shipping code in under 3 weeks.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {engagementProcess.map(step => (
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

        {/* ═══════════════════ WHY CHOOSE US ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Why Choose <span style={greenText}>Codazz Offshore</span>?
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Not all offshore companies are created equal. Here is what makes Codazz different from generic outsourcing shops.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {whyChooseUs.map(item => (
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

        {/* ═══════════════════ TECH STACK ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Our <span style={greenText}>Tech Stack</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Our offshore team has production expertise across every major technology. We match the right stack to your project for optimal performance and maintainability.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
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

        {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Client <span style={greenText}>Testimonials</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Real feedback from companies who partner with Codazz for offshore development.
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

        {/* ═══════════════════ CULTURAL ALIGNMENT ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Built for <span style={greenText}>Cultural Alignment</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              The biggest offshore concern is communication breakdown. We have solved it systematically — through hiring, training, and management practices refined over 16 years.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {culturalAlignmentPoints.map(point => (
              <div key={point.title} style={{ ...cardStyle, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 48, height: 48, borderRadius: 14, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                  {point.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{point.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════ IP PROTECTION ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Your IP is <span style={greenText}>100% Protected</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Intellectual property protection is not an afterthought at Codazz — it is built into every layer of our engagement model, from the first call to final delivery.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {ipProtectionSteps.map(item => (
              <div key={item.step} style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ minWidth: 44, height: 44, borderRadius: 12, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, color: '#22c55e', flexShrink: 0 }}>
                    {item.step}
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, padding: '3px 12px', background: 'rgba(34,197,94,0.1)', borderRadius: 20, color: '#22c55e' }}>{item.badge}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, padding: '24px 32px', background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, textAlign: 'center' }}>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
              <span style={{ color: '#22c55e', fontWeight: 700 }}>Zero IP disputes</span> across 500+ projects and 16+ years. When you build with Codazz, what you create is yours — guaranteed by law and enforced by practice.
            </p>
          </div>
        </section>

        {/* ═══════════════════ HOW TO GET STARTED ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              How to <span style={greenText}>Get Started</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              From first contact to fully operational offshore team in under 2 weeks. Here is exactly what the journey looks like.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {gettingStartedSteps.map(step => (
              <div key={step.num} style={{ ...cardStyle, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 48, height: 48, borderRadius: 14, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 20, color: '#22c55e', flexShrink: 0 }}>
                  {step.num}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: 0 }}>{step.title}</h3>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)', padding: '2px 10px', borderRadius: 20 }}>{step.time}</span>
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '18px 44px', background: '#22c55e', color: '#000', fontWeight: 700, fontSize: 16, borderRadius: 12, textDecoration: 'none' }}>
              Book Your Free Discovery Call →
            </a>
          </div>
        </section>

        {/* ═══════════════════ FAQ ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              Frequently Asked <span style={greenText}>Questions</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Everything you need to know about offshore software development with Codazz.
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

        {/* ═══════════════════ OFFSHORE ADVANTAGES ═══════════════════ */}
        <section className="reveal" style={sectionStyle}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, textAlign: 'center' }}>
              The Offshore <span style={greenText}>Advantage</span>
            </h2>
            <p style={{ ...subHeadingStyle, margin: '0 auto 56px' }}>
              Beyond cost savings, offshore development with Codazz provides strategic benefits that accelerate your growth.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {[
              {
                title: 'Follow-the-Sun Development',
                desc: 'While your US team sleeps, our Chandigarh team is building. Wake up to completed features, merged pull requests, and resolved bugs. Effectively doubling your development hours without doubling your cost.',
              },
              {
                title: 'Access to 1.5M+ CS Graduates',
                desc: 'India produces over 1.5 million computer science graduates annually — more than any other country. This vast talent pool means we never struggle to find engineers with niche expertise in AI/ML, blockchain, IoT, or any specialized technology.',
              },
              {
                title: 'No Recruitment Overhead',
                desc: 'Hiring a senior developer in the US takes 45-90 days on average and costs $15,000-$30,000 in recruitment fees. With Codazz, your team is assembled and operational in 2 weeks with zero recruitment costs.',
              },
              {
                title: 'Instant Scalability',
                desc: 'Need to double your team for a product launch? Scale back after a major release? Our bench of pre-vetted engineers allows you to scale from 3 to 15 developers in under a month, with no long-term commitments.',
              },
              {
                title: 'Cultural Compatibility',
                desc: 'Our Chandigarh engineers are experienced in working with North American and European clients. They understand Western business culture, communicate fluently in English, and follow Agile/Scrum methodologies natively.',
              },
              {
                title: 'Risk Mitigation',
                desc: 'With a Canadian HQ providing legal and contractual protections, combined with SOC 2 and ISO 27001 certified operations, your offshore engagement is structured to minimize every category of risk — legal, security, quality, and continuity.',
              },
            ].map(item => (
              <div key={item.title} style={{ ...cardStyle, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 40, height: 40, borderRadius: 10, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
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

        {/* ═══════════════════ CTA ═══════════════════ */}
        <section className="reveal" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '64px 40px', background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.03))', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 24 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              Start Saving <span style={greenText}>60-70%</span> Today
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 36, maxWidth: 600, margin: '0 auto 36px' }}>
              Get a free consultation and detailed cost analysis for your project. See exactly how much you will save with Codazz offshore development. No commitment required.
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
