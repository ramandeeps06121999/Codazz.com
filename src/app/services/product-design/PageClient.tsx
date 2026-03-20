'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

/* ─── Reveal Animation Hook ─── */
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

/* ─── Data ─── */
const heroStats = [
  { value: '200+', label: 'Products Designed' },
  { value: '4.9/5', label: 'Average Client Rating' },
  { value: '98%', label: 'Design-to-Dev Match' },
  { value: '40%', label: 'Avg Conversion Lift' },
];

const awards = [
  { icon: '🏆', label: 'Clutch Top Design Agency 2025' },
  { icon: '⭐', label: 'GoodFirms Top UX Company' },
  { icon: '🎖️', label: 'Awwwards Honoree' },
  { icon: '🥇', label: 'CSS Design Awards Winner' },
  { icon: '✅', label: 'Google UX Certified Team' },
  { icon: '🛡️', label: 'ISO 27001 Certified' },
];

const designServices = [
  {
    icon: '🧭',
    title: 'UI/UX Strategy',
    desc: 'User interviews, competitive audits, and data-driven UX strategy that aligns business goals with user needs. Every pixel backed by research.',
    href: '/services/product-design/ui-ux-strategy',
    features: ['User Interviews', 'Competitive Analysis', 'Journey Mapping', 'UX Audits'],
  },
  {
    icon: '📐',
    title: 'Wireframing & Prototyping',
    desc: 'Low to high-fidelity wireframes and interactive prototypes that validate ideas before a single line of code is written.',
    href: '/services/product-design/wireframing',
    features: ['Lo-Fi Wireframes', 'Hi-Fi Prototypes', 'User Flows', 'Click Testing'],
  },
  {
    icon: '🧩',
    title: 'Design Systems',
    desc: 'Scalable component libraries with tokens, documentation, and developer handoff specs. One source of truth for your entire product.',
    href: '/services/product-design/design-systems',
    features: ['Component Libraries', 'Design Tokens', 'Style Guides', 'Dev Handoff'],
  },
  {
    icon: '🎨',
    title: 'Brand Identity',
    desc: 'Visual identity systems that translate from boardroom to pixel. Logo, color, typography, and illustration systems built for digital products.',
    href: '/services/product-design/brand-identity',
    features: ['Logo Design', 'Color Systems', 'Typography', 'Illustration'],
  },
  {
    icon: '🔍',
    title: 'User Research',
    desc: 'Moderated and unmoderated usability testing, heuristic evaluations, A/B testing, and analytics analysis. Design decisions backed by evidence.',
    href: '/services/product-design/prototyping',
    features: ['Usability Testing', 'A/B Testing', 'Heuristic Reviews', 'Analytics'],
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Research & Discovery',
    whatWeDo: 'Stakeholder interviews, user research, competitive audit, analytics review, and technical constraints mapping.',
    whatYouGet: 'Research report, user personas, competitive landscape map, and defined success metrics.',
  },
  {
    num: '02',
    title: 'Wireframes & Information Architecture',
    whatWeDo: 'Information architecture, user flows, sitemaps, and low-fidelity wireframes that test core navigation and hierarchy.',
    whatYouGet: 'Validated wireframes, user flow diagrams, sitemap, and content structure.',
  },
  {
    num: '03',
    title: 'Visual Design',
    whatWeDo: 'High-fidelity UI design with your brand identity, accessible color systems, and responsive layouts for every breakpoint.',
    whatYouGet: 'Pixel-perfect screens for mobile, tablet, and desktop with interaction specifications.',
  },
  {
    num: '04',
    title: 'Interactive Prototyping',
    whatWeDo: 'Clickable high-fidelity prototypes that simulate the real product experience for stakeholder demos and user testing.',
    whatYouGet: 'Interactive Figma prototype ready for user testing and stakeholder review.',
  },
  {
    num: '05',
    title: 'User Testing',
    whatWeDo: 'Recruit participants, run moderated/unmoderated sessions, synthesize findings, and iterate on designs based on real user feedback.',
    whatYouGet: 'Testing report with actionable insights, heatmaps, and prioritized design iterations.',
  },
  {
    num: '06',
    title: 'Developer Handoff',
    whatWeDo: 'Design tokens, component specs, responsive guidelines, animation specs, and living design system documentation.',
    whatYouGet: 'Dev-ready Figma files, design system documentation, and implementation support.',
  },
];

const caseStudies = [
  {
    title: 'FinTech Dashboard Redesign',
    industry: 'FinTech',
    challenge: 'Complex financial dashboard with 200+ data points causing user drop-off and support tickets.',
    solution: 'Simplified IA, progressive disclosure patterns, and customizable widget system.',
    metrics: [
      { label: 'Conversion Rate', before: '2.1%', after: '5.8%', change: '+176%' },
      { label: 'User Engagement', before: '3.2 min', after: '8.7 min', change: '+172%' },
      { label: 'Support Tickets', before: '340/mo', after: '89/mo', change: '-74%' },
    ],
    color: '#22c55e',
  },
  {
    title: 'Healthcare Patient Portal',
    industry: 'Healthcare',
    challenge: 'HIPAA-compliant portal with poor accessibility scores and low adoption among elderly patients.',
    solution: 'WCAG AAA compliance, simplified flows, large touch targets, and voice-assisted navigation.',
    metrics: [
      { label: 'Adoption Rate', before: '23%', after: '67%', change: '+191%' },
      { label: 'Task Completion', before: '54%', after: '94%', change: '+74%' },
      { label: 'Accessibility Score', before: '42/100', after: '98/100', change: '+133%' },
    ],
    color: '#3b82f6',
  },
  {
    title: 'E-Commerce Mobile App',
    industry: 'E-Commerce',
    challenge: 'Cart abandonment rate of 78% on mobile. Checkout flow had 7 steps with poor UX.',
    solution: 'Streamlined 3-step checkout, smart product recommendations, and micro-interaction polish.',
    metrics: [
      { label: 'Cart Abandonment', before: '78%', after: '34%', change: '-56%' },
      { label: 'Mobile Revenue', before: '$120K/mo', after: '$310K/mo', change: '+158%' },
      { label: 'App Store Rating', before: '3.2', after: '4.8', change: '+50%' },
    ],
    color: '#a855f7',
  },
];

const designTools = [
  { name: 'Figma', desc: 'Primary design & prototyping', color: '#F24E1E' },
  { name: 'Sketch', desc: 'UI design & symbols', color: '#FDB300' },
  { name: 'Adobe XD', desc: 'Prototyping & animations', color: '#FF61F6' },
  { name: 'Framer', desc: 'Interactive prototypes', color: '#0055FF' },
  { name: 'Principle', desc: 'Motion & animation design', color: '#7B61FF' },
  { name: 'InVision', desc: 'Collaboration & feedback', color: '#FF3366' },
  { name: 'Zeplin', desc: 'Developer handoff', color: '#FDBD39' },
  { name: 'Storybook', desc: 'Component documentation', color: '#FF4785' },
];

const designPrinciples = [
  {
    icon: '👤',
    title: 'User-Centered',
    desc: 'Every design decision is validated by real user data. We don\'t guess — we test, measure, and iterate based on evidence.',
    highlight: '5-point usability testing on every project',
  },
  {
    icon: '♿',
    title: 'Accessible (WCAG 2.1)',
    desc: 'We design to WCAG 2.1 AA standards by default. Proper contrast ratios, keyboard navigation, screen reader support, and inclusive patterns.',
    highlight: 'AA compliance guaranteed, AAA available',
  },
  {
    icon: '⚡',
    title: 'Performance-Driven',
    desc: 'Designs optimized for real-world performance. Efficient asset systems, lazy-loading patterns, and lightweight animations that don\'t tank Core Web Vitals.',
    highlight: 'Sub-3s load time design targets',
  },
  {
    icon: '🎯',
    title: 'Brand-Consistent',
    desc: 'Design systems with tokens, documentation, and governance that keep your product on-brand at every screen, across every platform.',
    highlight: 'Single source of truth for all teams',
  },
];

const whyCodazz = [
  {
    icon: '🔬',
    title: 'Research-First Approach',
    desc: 'We never start with pixels. Every project begins with stakeholder interviews, user research, and competitive analysis. Designs backed by data, not assumptions.',
    stat: '100% of projects start with research',
  },
  {
    icon: '🔄',
    title: 'Design + Engineering Under One Roof',
    desc: 'Our designers sit next to our engineers. No handoff gaps, no "that\'s not buildable" surprises. What we design, we can build — and we do.',
    stat: '98% design-to-dev fidelity',
  },
  {
    icon: '📈',
    title: 'Conversion-Obsessed',
    desc: 'Beautiful design that doesn\'t convert is decoration. We optimize for business metrics — conversion rates, engagement, retention, and revenue impact.',
    stat: '40% average conversion lift',
  },
  {
    icon: '🚀',
    title: 'Speed Without Sacrifice',
    desc: 'MVP design in 3 weeks. Full product design in 6-8 weeks. We move fast because our process is battle-tested across 200+ products.',
    stat: '3-week MVP design sprints',
  },
];

const testimonials = [
  {
    quote: 'Codazz completely transformed our product\'s user experience. Our conversion rate jumped 176% after the redesign, and support tickets dropped by 74%. Best design investment we\'ve made.',
    name: 'Sarah Mitchell',
    role: 'VP Product, FinEdge',
    industry: 'FinTech',
  },
  {
    quote: 'The design system they built is incredible. Our dev team ships 3x faster now because every component is documented and dev-ready. It\'s like having a design superpower.',
    name: 'David Chen',
    role: 'CTO, CloudStack',
    industry: 'SaaS',
  },
  {
    quote: 'They didn\'t just make it pretty — they made it accessible. Our WCAG compliance went from 42 to 98, and patient adoption nearly tripled. Truly thoughtful design.',
    name: 'Dr. Lisa Patel',
    role: 'Chief Digital Officer, MedPortal',
    industry: 'Healthcare',
  },
  {
    quote: 'From research to handoff in 4 weeks. The speed was impressive, but what really stood out was the quality of their user research. They understood our users better than we did.',
    name: 'James Rodriguez',
    role: 'Founder & CEO, ShipFast',
    industry: 'Logistics',
  },
];

const industries = [
  { name: 'FinTech', icon: '💰', desc: 'Trading platforms, banking apps, payment systems', href: '/industries/fintech' },
  { name: 'Healthcare', icon: '🏥', desc: 'Patient portals, telehealth, EHR systems', href: '/industries/healthcare' },
  { name: 'E-Commerce', icon: '🛒', desc: 'Storefronts, marketplaces, checkout flows', href: '/industries/ecommerce' },
  { name: 'SaaS', icon: '☁️', desc: 'Dashboards, admin panels, analytics tools', href: '/industries/saas' },
  { name: 'EdTech', icon: '📚', desc: 'LMS platforms, course builders, student portals', href: '/industries/edtech' },
  { name: 'Logistics', icon: '🚚', desc: 'Fleet tracking, warehouse management, routing', href: '/industries/logistics' },
  { name: 'Real Estate', icon: '🏠', desc: 'Property listings, virtual tours, CRM systems', href: '/industries/real-estate' },
  { name: 'Enterprise', icon: '🏢', desc: 'Internal tools, workflow automation, portals', href: '/industries/enterprise' },
];

const faqs = [
  {
    q: 'How much does UI/UX design cost?',
    a: 'UI/UX design costs vary by scope. A focused UX audit starts at $3,000-$5,000. Full product design for an MVP ranges from $15,000-$40,000. Enterprise design systems with multiple user types can be $50,000-$120,000+. We provide detailed estimates after a free scoping call.',
  },
  {
    q: 'How long does a product design project take?',
    a: 'Discovery and strategy typically run 1-2 weeks. Full UI design for an MVP takes 3-4 weeks. Complex enterprise products with multiple user types may extend to 8-12 weeks. We provide detailed timelines after our initial scoping call.',
  },
  {
    q: 'What design tools do you use?',
    a: 'Figma is our primary tool for UI design, prototyping, and design systems. We also use Sketch, Adobe XD, Framer for interactive prototypes, Principle for animations, InVision for collaboration, Zeplin for developer handoff, and Storybook for component documentation.',
  },
  {
    q: 'Do you conduct user research and testing?',
    a: 'Yes — user research and testing are core to our process. We conduct user interviews, usability testing, A/B testing, heuristic evaluations, and analytics analysis. We build user testing into every major project to validate design decisions with real data.',
  },
  {
    q: 'Can you work with our existing brand guidelines?',
    a: 'Absolutely. We adapt to your existing brand guidelines, design tokens, and visual language. We can also help evolve your brand for digital products or create a complete brand identity from scratch if needed.',
  },
  {
    q: 'Do you build design systems?',
    a: 'Yes — design systems are one of our specialties. We create scalable component libraries with design tokens, documentation, usage guidelines, and developer handoff specs that keep your product consistent across platforms and teams.',
  },
  {
    q: 'How do you ensure designs are accessible?',
    a: 'We design to WCAG 2.1 AA standards by default. This includes proper color contrast ratios (4.5:1 for text, 3:1 for UI), keyboard navigation, screen reader compatibility, focus states, and inclusive design patterns. We can also target AAA compliance.',
  },
  {
    q: 'Do you work with our development team?',
    a: 'Yes. We provide detailed specs, design tokens, and component documentation in Figma. We can also embed with your engineering team during implementation to ensure pixel-perfect execution and answer questions in real-time.',
  },
];


/* ─── Inline Styles ─── */
const cardBase: React.CSSProperties = {
  padding: '36px 32px',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.35s ease',
};

const sectionBorder: React.CSSProperties = {
  borderBottom: '1px solid rgba(255,255,255,0.05)',
};

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: '#ffffff',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
};

const headingStyle: React.CSSProperties = {
  fontSize: 'clamp(2rem,3.5vw,3rem)',
  fontWeight: 500,
  letterSpacing: '-0.03em',
  margin: '0 0 16px',
};

const subtextStyle: React.CSSProperties = {
  fontSize: 16,
  color: 'rgba(255,255,255,0.45)',
  maxWidth: 560,
  margin: '0 0 56px',
  lineHeight: 1.7,
};

function cardHover(e: React.MouseEvent<HTMLDivElement>, enter: boolean) {
  const t = e.currentTarget;
  if (enter) {
    t.style.borderColor = 'rgba(34,197,94,0.2)';
    t.style.background = 'rgba(34,197,94,0.03)';
    t.style.transform = 'translateY(-4px)';
    t.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)';
  } else {
    t.style.borderColor = 'rgba(255,255,255,0.06)';
    t.style.background = 'rgba(255,255,255,0.015)';
    t.style.transform = '';
    t.style.boxShadow = '';
  }
}


/* ─── Component ─── */
export default function ProductDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const heroRef = useReveal() as React.RefObject<HTMLElement>;
  const awardsRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const portfolioRef = useReveal() as React.RefObject<HTMLElement>;
  const toolsRef = useReveal() as React.RefObject<HTMLElement>;
  const principlesRef = useReveal() as React.RefObject<HTMLElement>;
  const whyRef = useReveal() as React.RefObject<HTMLElement>;
  const testimonialsRef = useReveal() as React.RefObject<HTMLElement>;
  const industriesRef = useReveal() as React.RefObject<HTMLElement>;
  const faqRef = useReveal() as React.RefObject<HTMLElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
        .reveal-d5 { transition-delay: 0.5s; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes pulse-dot { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Product Design & UI/UX' },
          ]} />
        </div>

        {/* ================================================================
            SECTION 1: HERO
        ================================================================ */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              {/* Left: Content */}
              <div>
                <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                  Award-Winning Product Design Agency
                </div>
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Product Design &<br />
                  <span style={{ background: 'linear-gradient(135deg, #22c55e, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite' }}>
                    UI/UX Agency
                  </span>
                </h1>
                <p className="reveal reveal-d2" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.75, maxWidth: 520 }}>
                  We design digital products that users love and businesses profit from. Research-driven UX, pixel-perfect UI, and scalable design systems — shipped across 200+ products.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                  <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: '0.3s' }}>
                    Get Free Design Audit <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}>
                    View Our Work
                  </Link>
                </div>
                <div className="reveal reveal-d4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(12px, 2vw, 24px)' }}>
                  {heroStats.map((s, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.3 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: Lead Form */}
              <div className="reveal reveal-d3">
                <ServiceHeroForm service="Product Design & UI/UX" />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 2: AWARDS / TRUST BADGES
        ================================================================ */}
        <section ref={awardsRef} style={{ ...sectionBorder, padding: 'clamp(32px, 5vw, 56px) 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
              <span style={{ ...labelStyle, color: 'rgba(255,255,255,0.35)' }}>Recognized By</span>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(16px, 3vw, 32px)' }}>
              {awards.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 24px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', transition: '0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)'; e.currentTarget.style.background = 'rgba(34,197,94,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}>
                  <span style={{ fontSize: 18 }}>{a.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 3: DESIGN SERVICES GRID
        ================================================================ */}
        <section ref={servicesRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Our Design Services</span>
            </div>
            <h2 className="reveal reveal-d1" style={headingStyle}>End-to-End Product Design</h2>
            <p className="reveal reveal-d2" style={subtextStyle}>
              From initial research to developer handoff — every step validated by real users, every component built for scale.
            </p>
            <div className="reveal reveal-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {designServices.map((s, i) => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ ...cardBase, height: '100%', transitionDelay: `${i * 0.08}s` }}
                    onMouseEnter={e => cardHover(e, true)}
                    onMouseLeave={e => cardHover(e, false)}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                    <div style={{ fontSize: 36, marginBottom: 20 }}>{s.icon}</div>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: '0 0 20px' }}>{s.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.features.map(f => (
                        <span key={f} style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.04)', padding: '4px 12px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)' }}>{f}</span>
                      ))}
                    </div>
                    <div style={{ position: 'absolute', bottom: 20, right: 24, display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#22c55e', fontWeight: 600 }}>
                      Learn More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 4: DESIGN PROCESS
        ================================================================ */}
        <section ref={processRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Our Design Process</span>
            </div>
            <h2 className="reveal reveal-d1" style={headingStyle}>6-Step Design Process</h2>
            <p className="reveal reveal-d2" style={subtextStyle}>
              A battle-tested process refined across 200+ products. Clear deliverables at every stage.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 20 }}>
              {processSteps.map((step, i) => (
                <div key={i} className="reveal" style={{ ...cardBase, padding: '32px 28px', transitionDelay: `${i * 0.08}s` }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                    <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#22c55e', color: '#000', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>What We Do</div>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>{step.whatWeDo}</p>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#3b82f6', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>What You Get</div>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>{step.whatYouGet}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 5: PORTFOLIO / CASE STUDIES
        ================================================================ */}
        <section ref={portfolioRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Portfolio</span>
            </div>
            <h2 className="reveal reveal-d1" style={headingStyle}>Design Case Studies</h2>
            <p className="reveal reveal-d2" style={subtextStyle}>
              Real results from real projects. See how research-driven design translates to measurable business impact.
            </p>

            {/* Tab selectors */}
            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
              {caseStudies.map((cs, i) => (
                <button key={i} onClick={() => setActiveCaseStudy(i)}
                  style={{
                    padding: '10px 24px', borderRadius: 100, fontSize: 14, fontWeight: 600, border: '1px solid', cursor: 'pointer', fontFamily: 'inherit', transition: '0.3s',
                    background: activeCaseStudy === i ? cs.color : 'transparent',
                    borderColor: activeCaseStudy === i ? cs.color : 'rgba(255,255,255,0.1)',
                    color: activeCaseStudy === i ? '#000' : 'rgba(255,255,255,0.6)',
                  }}>
                  {cs.industry}
                </button>
              ))}
            </div>

            {/* Active case study */}
            {(() => {
              const cs = caseStudies[activeCaseStudy];
              return (
                <div className="reveal" style={{ ...cardBase, padding: 'clamp(28px, 4vw, 48px)', borderColor: `${cs.color}22` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: cs.color }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: cs.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{cs.industry}</span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#ffffff', marginBottom: 20, letterSpacing: '-0.02em' }}>{cs.title}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, marginBottom: 32 }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Challenge</div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>{cs.challenge}</p>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Solution</div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>{cs.solution}</p>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Results (Before → After)</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 16 }}>
                    {cs.metrics.map((m, j) => (
                      <div key={j} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: '24px 20px', textAlign: 'center' }}>
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>{m.label}</div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                          <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>{m.before}</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={cs.color} strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          <span style={{ fontSize: 20, fontWeight: 700, color: '#ffffff' }}>{m.after}</span>
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: cs.color, marginTop: 8 }}>{m.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ================================================================
            SECTION 6: DESIGN TOOLS
        ================================================================ */}
        <section ref={toolsRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Our Toolkit</span>
            </div>
            <h2 className="reveal reveal-d1" style={headingStyle}>Design Tools We Use</h2>
            <p className="reveal reveal-d2" style={subtextStyle}>
              Industry-standard tools for every phase of the design process — from research to developer handoff.
            </p>
            <div className="reveal reveal-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))', gap: 16 }}>
              {designTools.map((tool, i) => (
                <div key={tool.name} style={{ ...cardBase, padding: '28px 24px', display: 'flex', alignItems: 'center', gap: 16, transitionDelay: `${i * 0.06}s` }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${tool.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${tool.color}30` }}>
                    <div style={{ width: 20, height: 20, borderRadius: 4, background: tool.color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 2 }}>{tool.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{tool.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 7: DESIGN PRINCIPLES
        ================================================================ */}
        <section ref={principlesRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Design Philosophy</span>
            </div>
            <h2 className="reveal reveal-d1" style={headingStyle}>Our Design Principles</h2>
            <p className="reveal reveal-d2" style={subtextStyle}>
              Four principles that guide every design decision we make.
            </p>
            <div className="reveal reveal-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {designPrinciples.map((p, i) => (
                <div key={p.title} style={{ ...cardBase, padding: '36px 28px', transitionDelay: `${i * 0.1}s` }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <div style={{ fontSize: 40, marginBottom: 20 }}>{p.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.02em' }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: '0 0 20px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#22c55e', fontWeight: 600, padding: '8px 14px', background: 'rgba(34,197,94,0.06)', borderRadius: 100, border: '1px solid rgba(34,197,94,0.15)', width: 'fit-content' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                    {p.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 8: WHY CODAZZ
        ================================================================ */}
        <section ref={whyRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Why Codazz</span>
            </div>
            <h2 className="reveal reveal-d1" style={headingStyle}>Why Teams Choose Codazz for Product Design</h2>
            <p className="reveal reveal-d2" style={subtextStyle}>
              We are not just designers — we are product thinkers who ship.
            </p>
            <div className="reveal reveal-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {whyCodazz.map((w, i) => (
                <div key={w.title} style={{ ...cardBase, padding: '36px 28px', transitionDelay: `${i * 0.1}s` }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{w.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.02em' }}>{w.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: '0 0 20px' }}>{w.desc}</p>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    {w.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 9: TESTIMONIALS
        ================================================================ */}
        <section ref={testimonialsRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Client Testimonials</span>
            </div>
            <h2 className="reveal reveal-d1" style={headingStyle}>What Our Clients Say</h2>
            <p className="reveal reveal-d2" style={subtextStyle}>
              Hear from product leaders who chose Codazz for their design needs.
            </p>
            <div className="reveal reveal-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{ ...cardBase, padding: '36px 28px', display: 'flex', flexDirection: 'column', transitionDelay: `${i * 0.1}s` }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                    {[1, 2, 3, 4, 5].map(s => (
                      <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#22c55e" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: '0 0 24px', flex: 1, fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 4 }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{t.role}</div>
                    <div style={{ display: 'inline-block', marginTop: 8, fontSize: 11, color: '#22c55e', background: 'rgba(34,197,94,0.08)', padding: '4px 12px', borderRadius: 100, border: '1px solid rgba(34,197,94,0.2)' }}>{t.industry}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 10: INDUSTRIES
        ================================================================ */}
        <section ref={industriesRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16, textAlign: 'center' }}>
              <span style={labelStyle}>Industries We Design For</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, textAlign: 'center', margin: '0 auto 16px' }}>Specialized Design for Every Industry</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, textAlign: 'center', margin: '0 auto 56px' }}>
              Every industry has unique UX challenges. We bring deep domain expertise to each.
            </p>
            <div className="reveal reveal-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: 16 }}>
              {industries.map((ind, i) => (
                <Link key={ind.name} href={ind.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ ...cardBase, padding: '28px 24px', textAlign: 'center', transitionDelay: `${i * 0.06}s` }}
                    onMouseEnter={e => cardHover(e, true)}
                    onMouseLeave={e => cardHover(e, false)}>
                    <div style={{ fontSize: 36, marginBottom: 12 }}>{ind.icon}</div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>{ind.name}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{ind.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 11: FAQ
        ================================================================ */}
        <section ref={faqRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: 16, textAlign: 'center' }}>
              <span style={labelStyle}>FAQ</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, textAlign: 'center', margin: '0 auto 16px' }}>Frequently Asked Questions</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, textAlign: 'center', margin: '0 auto 48px' }}>
              Answers to common questions about our product design and UI/UX services.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{
                  background: openFaq === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                  border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`,
                  borderRadius: 20, overflow: 'hidden', transition: '0.3s', transitionDelay: `${i * 0.04}s`,
                }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '22px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textAlign: 'left', paddingRight: 16 }}>{faq.q}</span>
                    <div style={{
                      width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.03)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  {openFaq === i && (
                    <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 12: CTA + LEAD CAPTURE FORM
        ================================================================ */}
        <section ref={ctaRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.06) 0%, transparent 70%)' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              {/* Left: CTA content */}
              <div>
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', animation: 'pulse-dot 2s infinite' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Start Your Design Project</span>
                </div>
                <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 24px' }}>
                  Ready to Design a Product<br />
                  <span style={{ color: '#22c55e' }}>Users Actually Love?</span>
                </h2>
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', maxWidth: 480, lineHeight: 1.75, margin: '0 0 32px' }}>
                  200+ products designed. 40% average conversion lift. 98% design-to-dev fidelity. Let&apos;s create something extraordinary.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                  {[
                    'Free UX audit of your current product',
                    'Custom design roadmap in 48 hours',
                    'Fixed-price proposals with no surprises',
                    'Dedicated senior designer assigned',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(34,197,94,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                  {heroStats.slice(0, 3).map((s, i) => (
                    <div key={i}>
                      <div style={{ fontSize: 24, fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: Lead form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm service="Product Design & UI/UX" />
              </div>
            </div>
            <div className="reveal reveal-d4" style={{ marginTop: 56 }}>
              <TrustBadges compact />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
