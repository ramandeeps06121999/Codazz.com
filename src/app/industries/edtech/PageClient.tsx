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
      { threshold: 0.07 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.25)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
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

const WHAT_WE_BUILD = [
  {
    icon: '🧠',
    title: 'Adaptive Learning Platforms',
    desc: 'AI-driven curriculum that adjusts difficulty in real time using knowledge graph modeling, spaced repetition scheduling, and mastery-based progression. Detailed learning analytics for educators and institutional admins.',
    tags: ['Python AI', 'Knowledge Graph', 'React', 'PostgreSQL'],
  },
  {
    icon: '🎥',
    title: 'Virtual Classrooms & LMS',
    desc: 'Full-featured LMS with live WebRTC classrooms, interactive whiteboards, breakout rooms, screen sharing, session recording, and post-class AI-generated summaries and transcripts.',
    tags: ['WebRTC', 'Agora', 'Daily.co', 'SCORM', 'xAPI'],
  },
  {
    icon: '🏆',
    title: 'Gamification Engines',
    desc: 'Points, streaks, badges, leaderboards, and challenge systems built on behavioral science. Proven to increase daily active learner rates by 3–5x and reduce course abandonment to under 20%.',
    tags: ['Real-time Events', 'Redis', 'WebSockets', 'React'],
  },
  {
    icon: '📝',
    title: 'Assessment & Proctoring',
    desc: 'AI-powered remote exam proctoring with facial recognition, gaze tracking, and browser lockdown. Adaptive testing that adjusts question difficulty dynamically, auto-grading, and plagiarism detection.',
    tags: ['Computer Vision', 'OpenAI', 'AWS Rekognition', 'Python'],
  },
  {
    icon: '📱',
    title: 'Offline-Capable Mobile Apps',
    desc: 'Native and cross-platform learning apps with intelligent offline content sync, push notification nudge systems, low-bandwidth video streaming, and adaptive bitrate for learners in any connectivity environment.',
    tags: ['Flutter', 'React Native', 'Expo', 'SQLite', 'HLS'],
  },
  {
    icon: '🏫',
    title: 'Corporate L&D Platforms',
    desc: 'Employee training and development portals with skills gap analysis, compliance training tracking, certifications, manager reporting dashboards, and HRIS integrations for Workday and BambooHR.',
    tags: ['SCORM 2004', 'xAPI', 'LTI', 'SSO / SAML', 'Workday'],
  },
];

const INTEGRATIONS = [
  { name: 'Canvas LMS', category: 'LMS' },
  { name: 'Moodle', category: 'LMS' },
  { name: 'Blackboard', category: 'LMS' },
  { name: 'Google Classroom', category: 'LMS' },
  { name: 'Zoom', category: 'Video' },
  { name: 'Microsoft Teams', category: 'Video' },
  { name: 'Stripe', category: 'Billing' },
  { name: 'Workday', category: 'HRIS' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'Okta / Auth0', category: 'SSO' },
  { name: 'AWS S3 / CloudFront', category: 'Media' },
  { name: 'Vimeo OTT', category: 'Video CDN' },
];

const COMPLIANCE = [
  {
    badge: 'WCAG 2.1 AA',
    title: 'WCAG 2.1 Accessibility',
    desc: 'Full WCAG 2.1 AA compliance with screen reader support (NVDA, JAWS, VoiceOver), keyboard navigation, sufficient color contrast, caption support for all video content, and ARIA landmark roles — so every learner can participate.',
  },
  {
    badge: 'SCORM / xAPI',
    title: 'SCORM 1.2, 2004 & xAPI',
    desc: 'Full SCORM 1.2, SCORM 2004, and xAPI (Tin Can) compliance. Content packages work inside any SCORM-compliant LMS. xAPI learning records stream to your Learning Record Store for deep analytics.',
  },
  {
    badge: 'FERPA',
    title: 'FERPA Compliant',
    desc: 'Student education record privacy controls meeting FERPA requirements — role-based data access, parent/student consent workflows, audit logs, and data retention policies for K-12 and higher education.',
  },
  {
    badge: 'COPPA',
    title: 'COPPA & Child Safety',
    desc: 'Parental consent workflows, age-gating, restricted data collection for under-13 learners, and content moderation tools that meet COPPA requirements for K-12 platforms in the United States.',
  },
];

const TECH_STACK = [
  { cat: 'Video & Live Classes', items: ['Agora', 'Daily.co', 'WebRTC', 'HLS', 'AWS MediaConvert', 'FFmpeg'] },
  { cat: 'AI & Personalization', items: ['OpenAI GPT', 'LangChain', 'spaCy', 'scikit-learn', 'Pinecone'] },
  { cat: 'LMS & Standards', items: ['SCORM 1.2/2004', 'xAPI', 'LTI 1.3', 'Canvas', 'Moodle', 'Blackboard'] },
  { cat: 'Mobile', items: ['Flutter', 'React Native', 'Expo', 'SQLite', 'Offline-First'] },
  { cat: 'Backend & Infra', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Kafka', 'AWS'] },
  { cat: 'Payments & Auth', items: ['Stripe', 'Revenuecat', 'Auth0', 'Okta', 'SAML 2.0'] },
];

const PRICING = [
  {
    tier: 'Core LMS',
    price: 'From $18,000',
    timeline: '8–12 weeks',
    items: [
      'Course creation & management',
      'Video hosting & streaming',
      'Assessments & quizzes',
      'Student dashboard',
      'Instructor admin portal',
      'Basic SCORM support',
    ],
    cta: 'Get a Quote',
    highlight: false,
  },
  {
    tier: 'Full EdTech Platform',
    price: 'From $75,000',
    timeline: '4–6 months',
    items: [
      'AI adaptive learning engine',
      'Live WebRTC classrooms',
      'Gamification system',
      'AI exam proctoring',
      'SCORM & xAPI compliance',
      'WCAG 2.1 AA accessibility',
      'Mobile apps (iOS & Android)',
      'Analytics dashboards',
    ],
    cta: 'Start Your Platform',
    highlight: true,
  },
  {
    tier: 'Enterprise L&D',
    price: 'From $160,000',
    timeline: '5–8 months',
    items: [
      'Multi-tenant institutional LMS',
      'AI tutoring assistants (LLM)',
      'Skills gap analysis engine',
      'HRIS & SSO integrations',
      'Custom branded mobile apps',
      'Learning Record Store (LRS)',
      'Compliance training tracking',
      'SLA-backed support',
    ],
    cta: 'Discuss Your Platform',
    highlight: false,
  },
];

const PROCESS = [
  { step: '01', title: 'Learning Design Discovery', desc: 'We work with your instructional designers, curriculum leads, and learner experience team to understand your pedagogy, learner personas, content modalities, and measurable learning outcomes before writing a line of code.' },
  { step: '02', title: 'Platform Architecture', desc: 'We design your content delivery architecture (video CDN, offline sync), AI personalization layer, assessment engine, LMS integrations, and accessibility framework — all documented and reviewed before build starts.' },
  { step: '03', title: 'Agile Build & Learner Testing', desc: 'Two-week sprints with real learner testing at each milestone. We use task completion rates and learner feedback to iterate rapidly. Accessibility testing runs in parallel from sprint 1.' },
  { step: '04', title: 'Standards & Compliance Validation', desc: 'Before launch we complete SCORM conformance testing, WCAG 2.1 AA audits using axe and manual screen reader testing, and FERPA/COPPA compliance review if applicable to your audience.' },
  { step: '05', title: 'Launch & Engagement Optimization', desc: 'Post-launch we analyze completion rates, engagement events, and drop-off points. We iterate on nudge notifications, gamification mechanics, and content recommendations to continuously improve learner outcomes.' },
];

const WHY_CODAZZ = [
  {
    icon: '📚',
    title: 'Pedagogy-Informed Engineering',
    desc: 'Our team includes learning designers who apply cognitive science — spaced repetition, interleaving, retrieval practice, and worked examples — to every product decision. We build for learning outcomes, not just feature completeness.',
  },
  {
    icon: '♿',
    title: 'Accessibility as a Standard',
    desc: 'WCAG 2.1 AA compliance is not an afterthought — it\'s a sprint 1 requirement. We conduct manual screen reader testing, keyboard navigation audits, and captioning reviews at every milestone.',
  },
  {
    icon: '🚀',
    title: 'Scale from 100 to 10 Million',
    desc: 'We architect for the learner counts you want, not the ones you have today. Our platforms handle 100 or 10 million concurrent learners on the same codebase without re-architecting.',
  },
  {
    icon: '🤖',
    title: 'AI That Actually Teaches',
    desc: 'We build AI tutors and adaptive engines grounded in learning science — not just GPT wrappers. Knowledge graph models, misconception detection, and personalized content sequencing that genuinely improve learner mastery.',
  },
  {
    icon: '🔌',
    title: 'Deep LMS Integration',
    desc: 'Canvas, Moodle, Blackboard, Google Classroom — we speak LTI, SCORM, xAPI, and SAML. Your custom platform integrates cleanly with existing institutional systems without disrupting IT.',
  },
  {
    icon: '🤝',
    title: 'Fixed-Price, Transparent Delivery',
    desc: 'EdTech projects have a habit of scope-creeping into multi-year overruns. Our fixed-price milestone model keeps scope tight, budgets predictable, and your board happy.',
  },
];

const FAQS = [
  {
    q: 'How much does it cost to build a custom LMS or EdTech platform?',
    a: 'EdTech development at Codazz starts at $18,000 for a basic LMS with course management, video delivery, and assessments. A full-featured platform with live classrooms, AI-adaptive learning, gamification, and SCORM compliance typically costs $75,000–$200,000. We deliver in fixed-price milestones.',
  },
  {
    q: 'Do you build SCORM and xAPI compliant learning platforms?',
    a: 'Yes. We build platforms that are fully SCORM 1.2, SCORM 2004, and xAPI (Tin Can) compliant. Our LMS implementations integrate seamlessly with Canvas, Moodle, Blackboard, and Google Classroom via LTI standards, so your content works within existing institutional ecosystems.',
  },
  {
    q: 'Is your EdTech platform WCAG 2.1 accessible?',
    a: 'Yes. Accessibility is built in from day one, not retrofitted. We target WCAG 2.1 AA compliance with full screen reader support (NVDA, JAWS, VoiceOver), keyboard navigation, sufficient color contrast ratios, caption support for all video content, and regular audits using axe and Lighthouse.',
  },
  {
    q: 'Can you integrate Zoom or other video platforms into an LMS?',
    a: 'Yes. We integrate Zoom, Google Meet, Microsoft Teams, Agora, and Daily.co for live classroom sessions. We also build custom WebRTC-powered classrooms with interactive whiteboards, breakout rooms, polls, screen sharing, and session recording with AI-generated transcripts and summaries.',
  },
  {
    q: 'How long does it take to build an EdTech platform?',
    a: 'A basic LMS with course creation, video hosting, and assessments can launch in 8–12 weeks. A full platform with live classrooms, AI tutoring, gamification, and institutional admin dashboards takes 4–7 months. We use two-week sprints so you have working software to review throughout development.',
  },
];

export default function EdtechPage() {
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    const timer = setTimeout(() => {
      pageRef.current?.querySelectorAll('.hero-reveal').forEach(n => n.classList.add('visible'));
    }, 100);
    return () => clearTimeout(timer);
  }, [pageRef]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'EdTech' },
          ]} />
        </div>

        {/* ─── HERO ─── */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
            <div className="hero-reveal reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.45)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Education Technology
            </div>
            <h1 className="hero-reveal reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              EdTech Platforms Built for{' '}
              <span style={{ color: '#22c55e' }}>Real Learning Outcomes.</span>
            </h1>
            <p className="hero-reveal reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.75, maxWidth: 680, margin: '0 auto 2.5rem' }}>
              LMS platforms, virtual classrooms, AI adaptive learning, gamification, SCORM compliance, and WCAG accessibility — engineered by a team that understands both pedagogy and scale.
            </p>
            <div className="hero-reveal reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '15px 34px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Start Your Project
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '15px 34px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="hero-reveal reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))', gap: '1.5rem', maxWidth: 640, margin: '0 auto' }}>
              {[
                ['500K+', 'Learners Reached'],
                ['85%', 'Course Completion Rate'],
                ['4.8★', 'Avg Learner Rating'],
                ['3x', 'Engagement Improvement'],
              ].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#22c55e' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginTop: 6, letterSpacing: '0.04em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHAT WE BUILD ─── */}
        <section className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>What We Build</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Every EdTech Product Type</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 580, margin: '0 auto' }}>K-12, higher ed, corporate L&D, creator platforms — we've built them all at scale.</p>
            </div>

            {/* ─── EDTECH MARQUEE ─── */}
            <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '3rem', maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
              <style>{`@keyframes edtech-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
              <div style={{ display: 'flex', gap: '12px', width: 'max-content', animation: 'edtech-marquee 32s linear infinite' }}>
                {['🎓 LMS Platform','📹 Live Classes','🤖 AI Tutoring','📊 Learning Analytics','🎮 Gamification','📱 Mobile Learning','🏆 Certifications','💬 Collaboration Tools','📚 Content Library','🔒 FERPA Compliant','🌐 Multi-language','⚡ Offline Mode','🎓 LMS Platform','📹 Live Classes','🤖 AI Tutoring','📊 Learning Analytics','🎮 Gamification','📱 Mobile Learning','🏆 Certifications','💬 Collaboration Tools','📚 Content Library','🔒 FERPA Compliant','🌐 Multi-language','⚡ Offline Mode'].map((item, i) => (
                  <span key={i} style={{ padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', display: 'flex', gap: 8, whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{item}</span>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
              {WHAT_WE_BUILD.map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.25rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {s.tags.map(tag => (
                      <span key={tag} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 6, padding: '2px 10px', fontSize: '0.78rem', color: 'rgba(34,197,94,0.8)' }}>{tag}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>How We Work</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>From Learning Design to Launch</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>A process grounded in pedagogy and validated by real learners at every sprint.</p>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {PROCESS.map(p => (
                <div key={p.step} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'start', padding: '2rem', background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28 }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(34,197,94,0.25)', lineHeight: 1, minWidth: 56 }}>{p.step}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.6rem' }}>{p.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CASE STUDY ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, background: 'rgba(34,197,94,0.03)', padding: 'clamp(2rem, 4vw, 3.5rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 'clamp(2rem, 4vw, 3rem)', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, color: 'rgba(34,197,94,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>LearnPath — Online Skills Platform</div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  500K learners, 85% completion rate — against an industry average of 15%
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  Their platform had a 15% course completion rate and no mobile app. We rebuilt it with an AI-powered adaptive engine that personalizes content sequencing for each learner, a gamified progress system, and a Flutter app that works offline. Learner engagement tripled in 60 days.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  {[['85%', 'Completion Rate'], ['3x', 'Engagement Lift'], ['4.8★', 'App Store Rating']].map(([v, l]) => (
                    <div key={l} style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontWeight: 800, color: '#22c55e', fontSize: '1.4rem' }}>{v}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <blockquote style={{ borderLeft: '3px solid #22c55e', paddingLeft: '1.75rem', margin: 0 }}>
                  <p style={{ fontSize: '1.2rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                    "Our completion rate went from 15% to 85% in four months. The AI adaptive engine and the gamification layer are genuinely changing how people learn on our platform."
                  </p>
                  <cite style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.25)', fontStyle: 'normal', display: 'block' }}>
                    — Head of Product, LearnPath
                  </cite>
                </blockquote>
                <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginBottom: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Tech Used</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {['Flutter', 'Python AI', 'OpenAI', 'Node.js', 'PostgreSQL', 'SCORM', 'AWS'].map(t => (
                      <span key={t} style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 6, padding: '2px 10px', fontSize: '0.78rem', color: 'rgba(34,197,94,0.8)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TECH STACK ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Tech Stack</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Modern EdTech Infrastructure</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Built for the next generation of learners — accessible, offline-capable, and AI-powered.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-sit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {TECH_STACK.map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '4px 12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INTEGRATIONS ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Integrations</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Works with Your Existing Ecosystem</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Your custom platform integrates cleanly with the tools your institution or team already uses.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))', gap: '1rem' }}>
              {INTEGRATIONS.map(i => (
                <div key={i.name} style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, textAlign: 'center' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff', marginBottom: 4 }}>{i.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{i.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMPLIANCE ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Compliance & Standards</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Built for Regulated Education</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>WCAG, SCORM, FERPA, COPPA — accessibility and compliance are standard, not optional extras.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-sit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {COMPLIANCE.map(c => (
                <Card key={c.badge}>
                  <div style={{ display: 'inline-block', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 8, padding: '3px 12px', fontSize: '0.75rem', fontWeight: 700, color: '#22c55e', marginBottom: '1rem', letterSpacing: '0.05em' }}>{c.badge}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Pricing</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Transparent, Fixed-Price Tiers</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>No hourly billing. Clear scope, clear price, clear timeline.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', alignItems: 'start' }}>
              {PRICING.map(p => (
                <div key={p.tier} style={{
                  borderRadius: 28,
                  border: p.highlight ? '1px solid rgba(34,197,94,0.35)' : '1px solid rgba(255,255,255,0.06)',
                  background: p.highlight ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                  padding: '2rem',
                  position: 'relative',
                }}>
                  {p.highlight && (
                    <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#22c55e', color: '#000', borderRadius: 999, padding: '3px 16px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Most Popular</div>
                  )}
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>{p.tier}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.25rem' }}>{p.price}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1.75rem' }}>{p.timeline} timeline</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {p.items.map(item => (
                      <li key={item} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                        <span style={{ color: '#22c55e', marginTop: 2, flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" style={{
                    display: 'block', textAlign: 'center', padding: '12px 24px', borderRadius: 999,
                    background: p.highlight ? '#22c55e' : 'transparent',
                    border: p.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    color: p.highlight ? '#000' : '#fff',
                    fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                  }}>{p.cta}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CODAZZ ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Why Codazz</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>We Build for Learners First</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Then scale for millions. Pedagogy and engineering in equal measure.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-sit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
              {WHY_CODAZZ.map(w => (
                <Card key={w.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{w.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RELATED SERVICES ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Services for EdTech</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1rem' }}>
              {[
                { name: 'Web Development', href: '/services/web-development', desc: 'Accessible learning portals with LMS integration, video streaming, and real-time collaboration.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Offline-capable learning apps with adaptive content delivery and push notification nudges.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Adaptive learning engines, AI tutoring assistants, and automated assessment grading.' },
                { name: 'Game Development', href: '/services/game-development', desc: 'Gamified learning with points, badges, leaderboards, and interactive educational simulations.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant LMS platforms with subscription billing and institutional admin dashboards.' },
                { name: 'Product Design', href: '/services/product-design', desc: 'Learner-centered UX research, journey mapping, and accessible interface design for EdTech.' },
              ].map(s => (
                <a key={s.href} href={s.href} style={{ display: 'block', padding: '1.5rem', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 6 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container" style={{ maxWidth: 820, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>Common Questions</h2>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, background: 'rgba(255,255,255,0.015)', overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', background: 'none', border: 'none', color: '#fff', padding: '1.4rem 1.75rem', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '1rem', fontWeight: 600, lineHeight: 1.4 }}
                  >
                    {faq.q}
                    <span style={{ color: '#22c55e', fontSize: '1.4rem', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.75rem 1.4rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURE DEEP DIVE ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Feature Depth</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>What Sets Our EdTech Builds Apart</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 580, margin: '0 auto' }}>The implementation details that separate real learning platforms from glorified video hosting.</p>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, overflow: 'hidden' }}>
              {[
                {
                  area: 'Adaptive Learning',
                  standard: 'Linear course progression',
                  codazz: 'Knowledge graph modeling of content dependencies. Bayesian knowledge estimation per learner per concept. Dynamic content sequencing that routes learners to prerequisite material when gaps are detected. Spaced repetition scheduling using SM-2 algorithm variant. Mastery gates that prevent progression without demonstrated competence. Weekly learning path recalculation based on performance.',
                },
                {
                  area: 'Video & Live Classes',
                  standard: 'YouTube embed or Vimeo upload',
                  codazz: 'Adaptive bitrate HLS streaming from S3/CloudFront for bandwidth-constrained learners. Chapter markers with AI-generated time-stamped summaries. Interactive in-video quizzes that pause playback for active recall. WebRTC live classrooms with interactive whiteboard, breakout rooms, polls, emoji reactions, hand-raise queue, and post-session AI transcript + action items.',
                },
                {
                  area: 'Assessment Engine',
                  standard: 'Multiple choice quiz with score display',
                  codazz: 'Item response theory (IRT) adaptive testing that adjusts difficulty per question. Drag-and-drop, matching, code editor, case study, and essay question types. AI-powered automated essay grading with rubric alignment and feedback generation. Plagiarism detection via semantic similarity. Remote proctoring with AI facial detection, gaze tracking, and browser lockdown. FERPA-compliant audit logs for all assessment events.',
                },
                {
                  area: 'Gamification',
                  standard: 'Points and a leaderboard',
                  codazz: 'Behavioral science-informed achievement system: variable-ratio reinforcement for streaks, surprise rewards to sustain motivation, social comparison (opt-in) relative to similar learners, team challenges, seasonal events, collectible badge sets that drive course exploration, and XP decay prevention mechanics that reward consistency over bingeing.',
                },
                {
                  area: 'Accessibility',
                  standard: 'Alt text on images',
                  codazz: 'WCAG 2.1 AA full compliance: screen reader optimization (ARIA live regions for dynamic content), keyboard trap prevention, focus management in modals and custom components, caption and transcript generation for all video, color contrast ratio ≥ 4.5:1 for text, reduced motion media query support, and dyslexia-friendly font option. Manual testing with NVDA, JAWS, and VoiceOver before every release.',
                },
              ].map((row, i) => (
                <div key={row.area} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: 0, background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <div style={{ padding: '1.5rem 1.75rem', borderRight: '1px solid rgba(255,255,255,0.04)', fontWeight: 700, fontSize: '0.95rem', color: '#fff', display: 'flex', alignItems: 'flex-start' }}>{row.area}</div>
                  <div style={{ padding: '1.5rem 1.75rem', borderRight: '1px solid rgba(255,255,255,0.04)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, display: 'flex', alignItems: 'flex-start' }}>{row.standard}</div>
                  <div style={{ padding: '1.5rem 1.75rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{row.codazz}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHO WE SERVE ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Who We Serve</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Every EdTech Business Model</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>From solo course creators to enterprise L&D teams at Fortune 500 companies.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem' }}>
              {[
                { segment: 'EdTech Startups', desc: 'You\'re building a new learning product and need a technical co-builder who understands both pedagogy and scalable architecture. We move fast with your runway.' },
                { segment: 'K-12 Schools & Districts', desc: 'You need an accessible, FERPA-compliant learning platform that works for students, teachers, and parents — built to your curriculum requirements, not a generic template.' },
                { segment: 'Universities & Colleges', desc: 'Canvas and Blackboard don\'t do exactly what you need. You need custom integrations, unique assessment types, or a new student-facing portal that connects to your SIS.' },
                { segment: 'Corporate L&D Teams', desc: 'Employee training, compliance certification, and skills development at scale. HRIS integration, manager reporting dashboards, and SCORM content from your existing library.' },
                { segment: 'Online Course Creators', desc: 'You\'re a subject matter expert building a paid course business. You need a branded platform with video hosting, community features, and Stripe billing — not a generic marketplace.' },
                { segment: 'Training Providers & Bootcamps', desc: 'Cohort-based, live instruction with projects, mentor sessions, peer review, and job placement tracking. A platform that supports the full learner journey, not just video hosting.' },
              ].map(s => (
                <div key={s.segment} style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24 }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem', color: '#fff' }}>{s.segment}</div>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── LEARNING SCIENCE ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Learning Science</div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                  Engineering Meets Cognitive Science
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
                  Most EdTech platforms are built by engineers who watch YouTube tutorials. We involve learning designers from day one. Every feature is evaluated against what the research says actually helps people learn.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { principle: 'Spaced Repetition', desc: 'We implement SR scheduling based on Ebbinghaus forgetting curves — surfacing content at optimal review intervals to maximize long-term retention.' },
                    { principle: 'Retrieval Practice', desc: 'Low-stakes quizzes and active recall prompts are embedded throughout content — not just at the end. Research shows this doubles retention versus passive re-reading.' },
                    { principle: 'Interleaving', desc: 'Our adaptive engines mix problem types within practice sessions — counterintuitive but consistently superior to blocked practice for skill transfer.' },
                    { principle: 'Desirable Difficulty', desc: 'We build in appropriate challenge calibration — too easy causes boredom, too hard causes dropout. Our AI targets the zone of proximal development for each learner.' },
                  ].map(p => (
                    <div key={p.principle} style={{ padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#22c55e', marginBottom: '0.4rem' }}>{p.principle}</div>
                      <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                {[
                  { metric: '85%', label: 'Completion Rate', sub: 'vs 15% industry avg' },
                  { metric: '3x', label: 'Engagement Lift', sub: 'post-gamification rollout' },
                  { metric: '40%', label: 'Retention Improvement', sub: 'with spaced repetition' },
                  { metric: '4.8★', label: 'Learner Rating', sub: 'across all platforms' },
                  { metric: '< 5%', label: 'Churn Rate', sub: 'for subscription platforms' },
                  { metric: 'WCAG AA', label: 'Accessibility', sub: 'every platform, by default' },
                ].map(m => (
                  <div key={m.label} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, textAlign: 'center' }}>
                    <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#22c55e', marginBottom: '0.35rem' }}>{m.metric}</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff', marginBottom: '0.25rem' }}>{m.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{m.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECOND CASE STUDY ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-sit, minmax(min(420px, 100%), 1fr))', gap: '2.5rem', alignItems: 'center', padding: 'clamp(2rem, 4vw, 3rem)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28 }}>
              <div>
                <div style={{ fontSize: 11, color: 'rgba(34,197,94,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Fortune 500 Corporate L&D — North America</div>
                <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.25 }}>
                  Custom L&D portal: 28,000 employees, SCORM migration from legacy LMS, compliance training at 98% completion
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  A Fortune 500 manufacturer needed to migrate 28,000 employees from a legacy LMS to a modern platform that integrated with Workday, supported 400+ SCORM modules, and surfaced compliance training completions to managers in real time. We delivered in 5 months. Mandatory compliance training completion went from 71% to 98% within the first quarter.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {[
                  ['28,000', 'Employees Onboarded'],
                  ['98%', 'Compliance Completion'],
                  ['400+', 'SCORM Modules Migrated'],
                  ['5 mo', 'Full Delivery Timeline'],
                ].map(([v, l]) => (
                  <div key={l} style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: 18, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <div style={{ fontWeight: 800, color: '#22c55e', fontSize: '1.5rem', marginBottom: 4 }}>{v}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                Ready to Build Your{' '}
                <span style={{ color: '#22c55e' }}>EdTech Platform?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.75 }}>
                Engaging, accessible, and scalable — learning platforms built on a fixed price that genuinely improve learner outcomes.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 38px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Get a Free Consultation
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '16px 38px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {['WCAG 2.1 AA', 'SCORM & xAPI', 'Offline Capable', 'NDA on Request'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)' }}>✓ {t}</span>
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
