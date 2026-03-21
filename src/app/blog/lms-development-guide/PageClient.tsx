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
  { id: 'core-features', label: 'Core LMS Features', emoji: '⚙️' },
  { id: 'scorm-xapi', label: 'SCORM & xAPI Standards', emoji: '📋' },
  { id: 'course-monetization', label: 'Course Monetization', emoji: '💳' },
  { id: 'gamification', label: 'Gamification', emoji: '🎮' },
  { id: 'mobile-learning', label: 'Mobile Learning', emoji: '📱' },
  { id: 'build-vs-buy', label: 'Build vs Buy', emoji: '🆚' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'education-app-development-guide', title: 'EdTech App Development Guide 2026: Build the Next Duolingo', category: 'EdTech', readTime: '16 min' },
  { slug: 'saas-development-cost-guide', title: 'SaaS Development Cost Guide 2026', category: 'SaaS', readTime: '12 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '10 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a custom LMS from scratch?',
    a: 'A custom LMS costs between $50,000 and $300,000+ depending on feature scope and complexity. An MVP with course builder, video hosting, quizzes, and basic progress tracking runs $50K-$90K over 4-6 months. A full-featured LMS with SCORM compliance, advanced gamification, multi-tenant architecture, payment processing, and mobile apps runs $150K-$300K+ over 10-14 months.',
  },
  {
    q: 'Should I build a custom LMS or use Teachable/Thinkific/Moodle?',
    a: 'Off-the-shelf platforms like Teachable, Thinkific, and Moodle are excellent for getting started quickly with minimal upfront cost. However, they have platform fees (2-10% of revenue), limited customization, no white-labeling on lower tiers, and no ability to build proprietary features. A custom LMS makes sense when you have a strong differentiation strategy, are generating $30K+/month on a hosted platform, need deep integrations, or are building a B2B product where custom branding and admin controls are non-negotiable.',
  },
  {
    q: 'What is SCORM and does my LMS need to support it?',
    a: 'SCORM (Sharable Content Object Reference Model) is the industry standard for e-learning content interoperability. If you are selling to corporate clients or educational institutions, SCORM 1.2 and SCORM 2004 support is mandatory — enterprises use SCORM-compliant content extensively. xAPI (Tin Can API) is the modern successor that tracks learning data from any environment, including mobile apps, simulations, and offline activities. If you are building for corporate training or institutional markets, supporting both is essential.',
  },
  {
    q: 'How do I monetize an LMS platform effectively?',
    a: 'The most proven LMS monetization models are: subscription access ($29-$99/month for learners), B2B per-seat licensing ($8-$25/seat/month for organizations), course marketplace with commissions (30-50% per sale), white-label SaaS for course creators ($199-$999/month), and one-time course purchases. B2B licensing generates the highest ARPU and lowest churn. A hybrid model with individual subscriptions plus corporate licensing is the most resilient revenue architecture.',
  },
  {
    q: 'What tech stack should I use to build an LMS in 2026?',
    a: 'For the web frontend, Next.js with TypeScript provides the best balance of SEO (important for course discovery), performance, and developer experience. For mobile, React Native or Flutter for cross-platform iOS and Android. Backend: Node.js (NestJS) for real-time features like live classes and notifications, or Python (Django) for content-heavy platforms with its powerful admin. Video hosting: Mux or Cloudflare Stream for adaptive streaming. Database: PostgreSQL for core data, Redis for caching and sessions, and S3/CloudFront for course assets. Payment: Stripe for subscriptions, marketplace payouts, and invoicing.',
  },
];

export default function LmsDevelopmentGuideClient() {
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
              src="/blog_images/lms-development-guide.jpg"
              alt="LMS development guide 2026"
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>EdTech</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                18 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              LMS Development Guide 2026: Build a Learning Management System
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              From course builder and video hosting to SCORM compliance, gamification, and payment integration. The complete guide to building a custom LMS that competes with Teachable and Moodle — and wins.
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
                    The LMS Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global Learning Management System market is projected to reach $47.5 billion by 2030, growing at 19.2% CAGR. Over 87% of Fortune 500 companies now use an LMS for employee training and compliance. The shift to remote work, mandatory compliance training, and the explosion of online education has made LMS platforms one of the fastest-growing software categories in the world.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The market bifurcates into two distinct segments. The consumer EdTech segment (Teachable, Thinkific, Kajabi) serves individual course creators and solopreneurs generating $1M-$50M in course sales. The enterprise/institutional segment (Cornerstone, SAP SuccessFactors, Moodle) serves organizations with complex compliance requirements, multi-department training programs, and thousands of learners. Custom LMS development thrives in both segments where differentiation, branding, and proprietary features matter.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Market Insight:</strong> Platform fees are the silent killer for LMS businesses on hosted solutions. Teachable charges up to 5% transaction fees plus monthly fees. A course business generating $500K/year pays $25K+ in platform fees alone. A custom LMS pays for itself within 12-18 months and provides complete control over features, branding, and data.
                    </p>
                  </div>
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core LMS Features: What to Build
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A production-ready LMS requires a carefully sequenced set of modules. Building them in the right order determines your time-to-market and initial quality. Here are the essential components:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { feature: 'Course Builder', desc: 'Drag-and-drop course creator with modules, lessons, sections, and rich media. Support for text, video, audio, PDFs, embeds, and SCORM packages. Preview mode and auto-save.' },
                      { feature: 'Video Hosting & Streaming', desc: 'Adaptive bitrate video streaming (HLS/DASH), DRM protection to prevent piracy, playback speed control, closed captions, and video analytics showing drop-off points.' },
                      { feature: 'Quiz & Assessment Engine', desc: 'Multiple choice, true/false, fill-in-the-blank, drag-and-drop matching, essay responses, file upload assignments. Timed assessments, randomized question pools, and passing score enforcement.' },
                      { feature: 'Progress Tracking & Analytics', desc: 'Learner dashboards with completion percentages, time-on-course, quiz scores, and last-accessed. Admin reports for cohort performance, at-risk learners, and course effectiveness.' },
                      { feature: 'Certificate Generator', desc: 'Customizable certificate templates with learner name, course name, completion date, and instructor signature. PDF download, shareable links, and LinkedIn integration for credential publishing.' },
                      { feature: 'User Management & Roles', desc: 'Multi-role system: Super Admin, Instructor, Student, Organization Admin. Bulk user import via CSV, SSO integration (SAML 2.0, OAuth), and granular permission controls.' },
                      { feature: 'Discussion & Community', desc: 'Per-lesson discussion threads, Q&A sections with instructor-endorsed answers, peer-to-peer interaction, and course-level community forums for social learning.' },
                      { feature: 'Live Class / Webinar Integration', desc: 'Schedule and host live classes with video conferencing (Zoom, Google Meet, or native WebRTC). Auto-record sessions, add recordings to course library, and send automated reminders.' },
                      { feature: 'Drip Content Scheduling', desc: 'Release course modules on a schedule (day 1, day 7, day 14) to prevent overwhelm and maintain engagement over time. Prerequisite locking ensures sequential learning.' },
                      { feature: 'Multi-Tenancy (White-Label)', desc: 'Support multiple organizations or course creators on a single platform with isolated data, custom domains, custom branding, and separate admin portals. Essential for B2B SaaS LMS.' },
                      { feature: 'Mobile App', desc: 'Native iOS and Android apps with offline content download, push notification reminders, and synchronized progress across devices. React Native or Flutter for cross-platform coverage.' },
                      { feature: 'Notification System', desc: 'Email and push notifications for course enrollment, lesson completion, quiz results, certificate issuance, upcoming live classes, and re-engagement nudges for inactive learners.' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SCORM & xAPI */}
                <div className="reveal" style={{ marginBottom: 56 }} id="scorm-xapi">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    SCORM & xAPI: The Standards That Matter
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    If you are targeting enterprise clients, SCORM compliance is not optional — it is a deal-breaker requirement. Over 70% of corporate training content is packaged in SCORM format. Understanding these standards determines whether you can serve the $28 billion corporate training market.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        standard: 'SCORM 1.2',
                        status: 'Required for Enterprise',
                        desc: 'The most widely deployed e-learning standard. SCORM 1.2 packages contain a manifest file (imsmanifest.xml) that defines course structure, and JavaScript APIs that communicate completion, score, and time-spent data back to the LMS. Build a SCORM 1.2 runtime API with AICC_Lesson_Status tracking. Your LMS must be able to launch SCORM packages in a sandboxed iframe and capture all API calls.',
                        color: '#ef4444',
                      },
                      {
                        standard: 'SCORM 2004',
                        status: 'Required for Enterprise',
                        desc: 'The successor to SCORM 1.2 with more granular tracking (4 editions), better sequencing and navigation controls, and more completion status options. Implement the SCORM 2004 RTE (Runtime Environment) with cmi.* data model support. Many enterprise clients have migrated their content libraries to SCORM 2004 for its richer interaction data.',
                        color: '#ef4444',
                      },
                      {
                        standard: 'xAPI (Tin Can API)',
                        status: 'Recommended',
                        desc: 'The modern standard that tracks learning statements from anywhere: mobile apps, simulations, games, PDFs, and offline activities. Uses a Learning Record Store (LRS) to collect actor-verb-object statements ("John completed Module 3"). Build an LRS or integrate with a third-party LRS (SCORM Cloud, Learning Locker). xAPI enables tracking of informal learning and blended learning programs that SCORM cannot capture.',
                        color: '#f59e0b',
                      },
                      {
                        standard: 'AICC',
                        status: 'Legacy Support',
                        desc: 'An older standard used by aviation and some government sectors. AICC courses communicate with the LMS via HTTP API calls rather than JavaScript. Support is declining but some enterprise clients with legacy content libraries still require it. Implement HACP (HTTP-based AICC/CMI Protocol) if targeting regulated industries.',
                        color: '#22c55e',
                      },
                    ].map(item => (
                      <div key={item.standard} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}25`, borderLeft: `3px solid ${item.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.standard}</h3>
                          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.color, background: `${item.color}15`, padding: '3px 10px', borderRadius: 100 }}>{item.status}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Build Tip:</strong> Use SCORM Cloud as your SCORM testing environment during development. They provide a free tier for testing SCORM package launches and verifying your API implementation before enterprise client demos.
                    </p>
                  </div>
                </div>

                {/* Course Monetization */}
                <div className="reveal" style={{ marginBottom: 56 }} id="course-monetization">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Payment Integration & Course Monetization
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Monetization architecture is one of the most complex parts of LMS development. A well-designed payment system supports multiple revenue models simultaneously and scales to marketplace-level complexity. Here are the models and implementation approaches:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { model: 'One-Time Course Purchase', revenue: '$47-$2,000 per course', desc: 'Stripe Checkout or Payment Intents for single purchase. Support coupon codes, bundle pricing, and purchase order invoicing for enterprise buyers. Issue instant access on payment confirmation.' },
                      { model: 'Subscription Access', revenue: '$29-$199/month', desc: 'Stripe Billing for recurring subscriptions with trial periods, annual discounts (typically 20-40% off), and pausing/cancellation flows. Free tier with limited course access drives subscription conversion.' },
                      { model: 'Course Marketplace Payouts', revenue: '30-50% platform commission', desc: 'Stripe Connect for marketplace payouts to instructors. Automatic commission splits on each sale, 1099-K tax reporting, international payout support in 135+ currencies, and instructor earnings dashboards.' },
                      { model: 'B2B Per-Seat Licensing', revenue: '$8-$25/seat/month', desc: 'Organization-level billing with seat-based pricing, annual contracts, and invoice payment terms. Support PO numbers, NET-30 invoicing, and bulk seat management for HR admins.' },
                      { model: 'Certification Exam Fees', revenue: '$75-$500 per attempt', desc: 'Charge separately for proctored certification exams. Integrate ProctorU or Examity for online proctoring. Support exam retake fees and bulk exam vouchers for corporate clients.' },
                      { model: 'Installment Plans', revenue: 'Increases conversion by 30%', desc: 'Offer 3 or 6-month installment plans using Stripe Payment Links or Afterpay/Klarna integration. Particularly effective for high-ticket courses ($500+) targeting individual consumers.' },
                    ].map(item => (
                      <div key={item.model} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.model}</p>
                        <p style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', margin: '0 0 10px' }}>{item.revenue}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Payment Stack Recommendation:</strong> Stripe for all payment processing (supports 135+ currencies, subscriptions, marketplace payouts, and invoicing in a single integration). Pair with Stripe Tax for automated sales tax and VAT compliance across 35+ countries. This eliminates the need for separate tax calculation services.
                    </p>
                  </div>
                </div>

                {/* Gamification */}
                <div className="reveal" style={{ marginBottom: 56 }} id="gamification">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Gamification: Turning Passive Learners into Active Completers
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The average online course completion rate is 5-15%. LMS platforms with well-designed gamification see 40-70% completion rates. Gamification is not about adding points — it is about designing psychological feedback loops that make progress feel rewarding and abandonment feel costly.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 20 }}>
                    {[
                      {
                        mechanic: 'Points & Experience System (XP)',
                        desc: 'Award points for every learning action: completing a lesson (10 XP), passing a quiz (25 XP), perfect quiz score (50 XP), posting in discussion (5 XP), helping a peer (15 XP). XP accumulates toward levels and unlocks achievement badges. Visible XP totals on learner profiles create social proof.',
                        impact: 'Engagement increase of 48%',
                      },
                      {
                        mechanic: 'Streak & Consistency Rewards',
                        desc: 'Daily learning streaks with escalating rewards (7-day streak badge, 30-day bonus content). Streak freeze mechanics (earned or purchasable) reduce the anxiety of missing a day. Weekly summaries email showing streak progress keep inactive users re-engaged.',
                        impact: 'DAU increase of 35%',
                      },
                      {
                        mechanic: 'Leaderboards & Cohort Competition',
                        desc: 'Weekly leaderboards within cohorts or organizations. Separate leaderboards for XP earned, courses completed, and quiz scores. Team leaderboards for corporate training drive departmental competition. Display top 10 on dashboard with current user rank always visible.',
                        impact: 'Course completion rate +28%',
                      },
                      {
                        mechanic: 'Badges & Achievement System',
                        desc: 'Tiered badge system for milestones: First Lesson, First Course, Streak badges (7, 30, 100 days), Perfect Score, Top Contributor, Mentor badge for helping peers. Badges display on learner profile and can be shared to LinkedIn as verifiable achievements.',
                        impact: 'Social sharing increase of 65%',
                      },
                      {
                        mechanic: 'Progress Visualization',
                        desc: 'Course completion rings (Apple-Watch-style), skill trees showing progression paths, learning streaks calendar (GitHub contribution graph style), and animated progress bars on every module. Visual progress creates the Zeigarnik effect — users feel compelled to complete what they started.',
                        impact: 'Course finish rate +52%',
                      },
                    ].map(item => (
                      <div key={item.mechanic} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{item.mechanic}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
                        <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 600 }}>{item.impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Learning */}
                <div className="reveal" style={{ marginBottom: 56 }} id="mobile-learning">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Mobile Learning: Building for the Modern Learner
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    65% of LMS users access content on mobile devices in 2026. Mobile-first design is not a UX preference — it is a business requirement. The most successful LMS platforms treat mobile as a first-class experience, not a responsive web adaptation.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { feature: 'Offline Content Download', desc: 'Allow learners to download lessons, videos, and assessments for offline use. Sync progress automatically when reconnection is detected. Critical for learners with unreliable internet or international users.' },
                      { feature: 'Microlearning Modules', desc: 'Break content into 3-5 minute mobile-optimized segments. Learners complete micro-lessons during commutes, breaks, and in-between moments. Combine microlearning with push notifications for habit formation.' },
                      { feature: 'Push Notifications', desc: 'Personalized push notifications for lesson reminders, streak alerts, new course releases, quiz deadlines, and re-engagement nudges. Firebase Cloud Messaging (FCM) for cross-platform delivery with analytics.' },
                      { feature: 'Touch-Optimized Interactions', desc: 'Swipe-to-advance lessons, touch-friendly drag-and-drop quiz interfaces, video scrubbing with large touch targets, and haptic feedback for correct/incorrect quiz answers on iOS.' },
                      { feature: 'Video Download & DRM', desc: 'Offline video download with FairPlay (iOS) and Widevine (Android) DRM to prevent unauthorized screen recording or file extraction. Enforce download limits per subscription tier.' },
                      { feature: 'Adaptive Streaming Quality', desc: 'Detect connection speed and automatically switch video quality (360p on 3G, 1080p on WiFi). Buffer-free playback on variable connections ensures learners never stop due to buffering.' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Build vs Buy */}
                <div className="reveal" style={{ marginBottom: 56 }} id="build-vs-buy">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Build vs Buy: Custom LMS vs Teachable, Thinkific, Moodle
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The most common question LMS founders ask is whether to build custom or use an existing platform. The answer depends on your revenue stage, differentiation strategy, and target market. Here is the honest breakdown:
                  </p>
                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        platform: 'Teachable',
                        bestFor: 'Solo course creators, $0-$20K/month',
                        pros: ['Zero upfront cost', 'Launch in hours', 'Built-in payment processing', 'Student management included'],
                        cons: ['5% transaction fee on basic plans', 'Limited white-labeling', 'No custom domain on free plan', 'No SCORM support', 'Platform lock-in'],
                        color: '#3b82f6',
                      },
                      {
                        platform: 'Thinkific',
                        bestFor: 'Growing course creators, $10K-$50K/month',
                        pros: ['0% transaction fees on all paid plans', 'Communities feature', 'Better customization than Teachable', 'Bundles and memberships'],
                        cons: ['No SCORM support', 'Limited enterprise features', 'No multi-tenancy', 'Higher monthly fees for scale'],
                        color: '#8b5cf6',
                      },
                      {
                        platform: 'Moodle',
                        bestFor: 'Educational institutions, non-profits',
                        pros: ['Open source (free)', 'Full SCORM and xAPI support', 'Massive plugin ecosystem', 'Self-hosted for data control'],
                        cons: ['Outdated UX (requires significant theming)', 'High server and maintenance costs', 'Poor mobile experience out-of-the-box', 'Complex administration'],
                        color: '#f59e0b',
                      },
                      {
                        platform: 'Custom LMS',
                        bestFor: 'B2B EdTech, $30K+/month, differentiated products',
                        pros: ['Zero platform fees — maximize margins', 'Complete white-labeling and branding', 'Full SCORM/xAPI compliance', 'Multi-tenancy for B2B', 'Own your learner data', 'Build any feature you need'],
                        cons: ['$50K-$300K upfront investment', '4-12 month build timeline', 'Ongoing maintenance responsibility', 'Engineering team required'],
                        color: '#22c55e',
                      },
                    ].map(item => (
                      <div key={item.platform} style={{ padding: '28px 32px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}25`, borderLeft: `3px solid ${item.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.platform}</h3>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.03)', padding: '5px 14px', borderRadius: 100 }}>{item.bestFor}</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', margin: '0 0 8px' }}>Pros</p>
                            {item.pros.map(pro => (
                              <div key={pro} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', flexShrink: 0, marginTop: 5 }} />
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{pro}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ef4444', margin: '0 0 8px' }}>Cons</p>
                            {item.cons.map(con => (
                              <div key={con} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', flexShrink: 0, marginTop: 5 }} />
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{con}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: How Much Does It Cost to Build an LMS?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building a custom LMS ranges from $50,000 to $300,000+ depending on feature scope, compliance requirements, and multi-tenancy complexity. Here is the detailed breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP LMS',
                        price: '$50,000 - $90,000',
                        timeline: '4-6 months',
                        color: '#22c55e',
                        features: [
                          'Course builder (drag-and-drop)',
                          'Video hosting & streaming (Mux/Cloudflare)',
                          'Quiz & assessment engine',
                          'Progress tracking dashboard',
                          'Certificate generation',
                          'Stripe payment integration',
                          'User management & authentication',
                          'Email notifications',
                          'Responsive web platform',
                        ],
                      },
                      {
                        tier: 'Standard LMS',
                        price: '$100,000 - $180,000',
                        timeline: '7-10 months',
                        color: '#3b82f6',
                        features: [
                          'Everything in MVP',
                          'SCORM 1.2 & SCORM 2004 compliance',
                          'Gamification (XP, badges, leaderboards, streaks)',
                          'Discussion forums & community',
                          'Live class integration (Zoom/Agora)',
                          'Subscription & marketplace billing (Stripe Connect)',
                          'Advanced analytics & reporting',
                          'Mobile app (React Native — iOS & Android)',
                          'Drip content scheduling',
                          'SSO integration (Google, SAML)',
                        ],
                      },
                      {
                        tier: 'Enterprise LMS',
                        price: '$180,000 - $300,000+',
                        timeline: '10-14 months',
                        color: '#a855f7',
                        features: [
                          'Everything in Standard',
                          'Multi-tenancy & white-labeling',
                          'xAPI / Tin Can + Learning Record Store',
                          'AI-powered adaptive learning paths',
                          'LLM-based course assistant (RAG)',
                          'Advanced proctoring integration',
                          'B2B invoicing & PO management',
                          'Offline mobile content download',
                          'Custom reporting & BI integrations',
                          'GDPR & SOC 2 compliance tooling',
                          'Multi-language localization',
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
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Ongoing Monthly Infrastructure Costs</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
                      {[
                        { item: 'Video Hosting (Mux)', cost: '$50-$500/month' },
                        { item: 'AWS/GCP Infrastructure', cost: '$200-$2,000/month' },
                        { item: 'Email (SendGrid/Postmark)', cost: '$20-$200/month' },
                        { item: 'Payment Processing (Stripe)', cost: '2.9% + $0.30/txn' },
                        { item: 'Push Notifications (FCM)', cost: 'Free – $100/month' },
                        { item: 'CDN & Storage (CloudFront)', cost: '$50-$300/month' },
                      ].map(item => (
                        <div key={item.item} style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: '0 0 4px' }}>{item.item}</p>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#22c55e', margin: 0 }}>{item.cost}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your LMS with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Building an LMS requires deep expertise across video infrastructure, SCORM compliance, payment systems, gamification design, and multi-tenant architecture. Most development shops can build one or two of these well. Codazz has built all of them, across platforms serving hundreds of thousands of learners.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We approach LMS development as a product challenge, not just an engineering task. We help you choose the right monetization model, design gamification mechanics for your specific learner audience, and architect for the scale you are planning to reach — not just where you are today. Fixed-price contracts, transparent milestones, and post-launch support included.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{ padding: '14px 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
                        Get a Free LMS Consultation
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
                  Ready to Build Your Custom LMS?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your LMS concept with our team. We will analyze your learning model, recommend the right architecture, and provide a detailed fixed-price proposal within 48 hours.
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
