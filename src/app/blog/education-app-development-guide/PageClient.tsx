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
  { id: 'market-landscape', label: 'Market Landscape', emoji: '📊' },
  { id: 'gamified-learning', label: 'Gamified Learning', emoji: '🎮' },
  { id: 'core-features', label: 'Core Features', emoji: '⚙️' },
  { id: 'ai-tutoring', label: 'AI Tutoring', emoji: '🤖' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'monetization', label: 'Monetization', emoji: '💵' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026 Guide)', category: 'Business', readTime: '8 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026: The Complete Guide', category: 'AI/ML', readTime: '18 min' },
  { slug: 'fitness-app-development-guide', title: 'How to Build a Fitness App in 2026', category: 'Mobile', readTime: '14 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build an education app like Duolingo?',
    a: 'An education app costs between $40,000 and $200,000 depending on features and complexity. A basic MVP with course content, quizzes, and progress tracking starts at $40K-$65K. A full-featured platform with gamified learning, AI tutoring, video streaming, certifications, and multi-language support costs $150K-$200K.',
  },
  {
    q: 'How long does it take to develop an EdTech app?',
    a: 'A basic education app MVP takes 4-5 months. A full-featured platform with gamification, AI-powered tutoring, live video classes, and certification systems takes 8-12 months. The content management system and AI tutoring engine are typically the most time-intensive components at 6-8 weeks each.',
  },
  {
    q: 'What makes Duolingo so addictive and how can I replicate it?',
    a: 'Duolingo uses five core gamification mechanics: daily streaks with loss aversion, XP points and leaderboards for competition, hearts/lives system creating urgency, bite-sized lessons (3-5 minutes) for low commitment, and a progression system with crowns and leagues. The key insight is making learning feel like a game, not homework. These mechanics can be adapted to any educational domain.',
  },
  {
    q: 'Should I build for mobile or web first?',
    a: 'For consumer EdTech (language learning, test prep, skill building), start with mobile. 78% of education app usage happens on mobile devices. For B2B EdTech (corporate training, LMS, professional certification), start with web since most corporate learning happens on desktops during work hours. Ideally, build for both using React Native for mobile and Next.js for web.',
  },
  {
    q: 'How do education apps make money?',
    a: 'The dominant model is freemium with premium subscriptions ($9.99-$29.99/month). Duolingo generates $531M annually this way. Other models include course marketplace (Udemy takes 37% commission), corporate/institutional licensing ($3-$15 per seat), certification fees ($50-$500 per exam), and advertising for free-tier users. B2B EdTech typically generates higher revenue per customer than B2C.',
  },
];

export default function EducationAppDevelopmentGuideClient() {
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
              src="/blog_images/education-app-development-guide.jpg"
              alt="education app development guide"
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
                16 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              EdTech App Development Guide 2026: Build the Next Duolingo
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              From gamified learning mechanics and AI-powered tutoring to video streaming infrastructure and certification systems. The complete guide to building an education app that users actually complete.
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

                {/* Market Landscape */}
                <div className="reveal" style={{ marginBottom: 56 }} id="market-landscape">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The EdTech Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global EdTech market is projected to reach $400 billion by 2027, growing at 16.3% annually. Over 1 billion people worldwide use education apps, from language learning to professional certification. The pandemic permanently shifted education: 60% of learners now prefer hybrid digital-physical learning models, and corporate training has moved almost entirely online.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Duolingo proved that gamification could turn a free language app into a $12.5 billion public company. Coursera went public at $4.3 billion. Khan Academy serves 150 million learners. But the opportunity in 2026 is not in competing with these giants head-on. It is in vertical-specific education: trade skills, healthcare certifications, coding bootcamps, financial literacy, K-12 supplemental, and corporate upskilling. Niche EdTech apps with strong completion mechanics outperform generalist platforms by 5x on retention.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Opportunity:</strong> The average online course has a 5-15% completion rate. Apps with gamification achieve 60-80% completion. The EdTech companies winning in 2026 are not the ones with the most content but the ones with the best engagement mechanics. AI-powered personalization increases learning outcomes by 30% and completion rates by 45%.
                    </p>
                  </div>
                </div>

                {/* Gamified Learning */}
                <div className="reveal" style={{ marginBottom: 56 }} id="gamified-learning">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Gamified Learning: The Duolingo Playbook
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Gamification is the single most important design decision in education app development. It transforms passive content consumption into active, addictive learning. Duolingo has 97 million monthly active users not because it teaches languages the best, but because it makes learning feel like a game. Here are the mechanics that work:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 20 }}>
                    {[
                      {
                        name: 'Streak System (Loss Aversion)',
                        desc: 'Daily streaks are the most powerful retention mechanic in EdTech. Users log in daily to protect their streak. Duolingo found that users with 7+ day streaks are 3x more likely to become long-term users. Add streak freezes (purchasable with in-app currency) and streak repair as premium features.',
                        impact: 'Increases DAU by 40-60%',
                      },
                      {
                        name: 'XP Points & Leaderboards',
                        desc: 'Award experience points for completing lessons, quizzes, and challenges. Weekly leaderboards with leagues (Bronze, Silver, Gold, Diamond) create social competition. Promotion and relegation between leagues drives consistent engagement.',
                        impact: 'Increases session length by 35%',
                      },
                      {
                        name: 'Hearts / Lives System',
                        desc: 'Give users a limited number of lives that deplete with wrong answers. Lives regenerate over time or can be replenished with premium. Creates urgency and encourages careful learning. Also drives premium conversion.',
                        impact: 'Premium conversion increase of 25%',
                      },
                      {
                        name: 'Bite-Sized Lessons',
                        desc: 'Lessons should take 3-7 minutes maximum. Users can learn during a commute, lunch break, or waiting in line. Short sessions lower the commitment barrier and enable daily habit formation. Microlearning retention is 20% higher than long-form content.',
                        impact: 'Completion rate increase of 70%',
                      },
                      {
                        name: 'Progression & Mastery System',
                        desc: 'Visual skill trees showing progress from beginner to advanced. Crown system where lessons can be repeated at higher difficulty. Mastery badges for completed modules. Creates a clear sense of progress and achievement.',
                        impact: 'Increases course completion by 50%',
                      },
                    ].map(item => (
                      <div key={item.name} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{item.name}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
                        <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 600 }}>{item.impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features for Your Education App
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { feature: 'Course Management (CMS)', desc: 'Create, organize, and publish courses with modules, lessons, and assessments. Rich text editor, drag-and-drop ordering, scheduling.' },
                      { feature: 'Video Streaming', desc: 'HD video lessons with adaptive bitrate streaming, playback speed control, picture-in-picture, and offline download for premium users.' },
                      { feature: 'Interactive Quizzes', desc: 'Multiple choice, fill-in-the-blank, matching, ordering, and free-response questions with instant feedback and explanations.' },
                      { feature: 'Progress Dashboard', desc: 'Visual learning analytics: modules completed, time spent, quiz scores, skill mastery levels, and personalized recommendations.' },
                      { feature: 'Spaced Repetition', desc: 'Algorithm-driven review system that presents material at optimal intervals for long-term retention. Proven to improve recall by 200%.' },
                      { feature: 'Live Classes', desc: 'Real-time video classes with screen sharing, whiteboard, chat, hand-raising, breakout rooms, and recording for replay.' },
                      { feature: 'Discussion Forums', desc: 'Threaded discussions per course/lesson. Upvoting, instructor-endorsed answers, and peer-to-peer Q&A for community learning.' },
                      { feature: 'Certification System', desc: 'Issue verifiable digital certificates and badges upon course completion. Blockchain-verified credentials. LinkedIn integration for sharing.' },
                      { feature: 'Offline Mode', desc: 'Download lessons, videos, and quizzes for offline learning. Auto-sync progress when reconnected. Critical for emerging markets.' },
                      { feature: 'Multi-Language Support', desc: 'RTL language support, content translation workflows, localized UI, and region-specific content recommendations.' },
                      { feature: 'Push Notifications', desc: 'Streak reminders, new lesson alerts, quiz due dates, live class starting, and re-engagement nudges for inactive learners.' },
                      { feature: 'Social Learning', desc: 'Study groups, peer challenges, shared notes, collaborative projects, and friend activity feed to drive accountability.' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Tutoring */}
                <div className="reveal" style={{ marginBottom: 56 }} id="ai-tutoring">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    AI-Powered Tutoring: The 2026 Differentiator
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    AI tutoring is no longer a nice-to-have. It is the primary differentiator for EdTech apps in 2026. With GPT-4-class models and specialized education AI, you can provide every learner with a personal tutor that adapts to their pace, identifies knowledge gaps, and explains concepts in multiple ways until they stick.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { feature: 'Adaptive Learning Paths', desc: 'AI analyzes quiz performance and learning patterns to dynamically adjust difficulty, skip mastered topics, and spend more time on weak areas. Each learner gets a personalized curriculum.', priority: 'Critical' },
                      { feature: 'AI Chat Tutor', desc: 'LLM-powered conversational tutor that answers questions, explains concepts, generates practice problems, and provides Socratic dialogue. Uses course content as context for accurate, relevant responses.', priority: 'Critical' },
                      { feature: 'Automated Content Generation', desc: 'AI generates quiz questions, flashcards, summaries, and practice exercises from course material. Instructors review and approve. Reduces content creation time by 70%.', priority: 'High' },
                      { feature: 'Knowledge Gap Detection', desc: 'ML models identify specific concepts students struggle with by analyzing answer patterns across assessments. Automatically recommends remedial content or prerequisite review.', priority: 'High' },
                      { feature: 'Natural Language Assessment', desc: 'AI evaluates free-text responses, essays, and coding assignments. Provides detailed feedback with specific suggestions for improvement rather than just a grade.', priority: 'Medium' },
                      { feature: 'Learning Analytics Prediction', desc: 'Predict which students are at risk of dropping out based on engagement patterns, quiz scores, and login frequency. Trigger proactive interventions before churn happens.', priority: 'Medium' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>{item.feature}</p>
                          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.priority === 'Critical' ? '#ef4444' : item.priority === 'High' ? '#f59e0b' : '#22c55e', background: item.priority === 'Critical' ? 'rgba(239,68,68,0.1)' : item.priority === 'High' ? 'rgba(245,158,11,0.1)' : 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: 100 }}>{item.priority}</span>
                        </div>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { layer: 'Mobile Apps', tech: 'React Native or Flutter', why: 'Cross-platform for iOS and Android. React Native integrates well with video players and offline storage. Flutter excels at custom animations for gamification UIs.' },
                      { layer: 'Web Platform', tech: 'Next.js (React)', why: 'Server-side rendering for SEO on course pages. Fast page loads for content-heavy platforms. Progressive Web App support for desktop learning experience.' },
                      { layer: 'Backend', tech: 'Node.js (NestJS) or Python (Django)', why: 'NestJS for real-time features (live classes, chat). Django for content-heavy platforms with its excellent admin CMS. Both handle complex permission systems well.' },
                      { layer: 'Video Streaming', tech: 'Mux or AWS MediaConvert + CloudFront', why: 'Adaptive bitrate streaming (HLS/DASH) for HD video lessons. DRM protection to prevent piracy. Mux provides analytics on engagement and drop-off points.' },
                      { layer: 'Live Classes', tech: 'Twilio Video or Agora', why: 'WebRTC-based real-time video with screen sharing, whiteboard, breakout rooms, and recording. Supports up to 10,000 simultaneous viewers for lecture-style classes.' },
                      { layer: 'AI / LLM Engine', tech: 'OpenAI API + LangChain + RAG', why: 'GPT-4 for AI tutoring chat. RAG (Retrieval Augmented Generation) indexes course content so the AI tutor answers within the scope of actual course material. LangChain for conversation management.' },
                      { layer: 'Database', tech: 'PostgreSQL + Redis + Pinecone', why: 'PostgreSQL for user profiles, courses, and progress. Redis for leaderboards and real-time features. Pinecone vector database for AI-powered content search and recommendations.' },
                      { layer: 'Content Storage', tech: 'AWS S3 + CloudFront CDN', why: 'Store video lessons, PDFs, images, and downloadable resources. CloudFront ensures fast delivery globally. Enable offline downloads with signed URLs.' },
                    ].map(item => (
                      <div key={item.layer} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', margin: '0 0 8px' }}>{item.layer}</p>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.tech}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: How Much Does an Education App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building an education app ranges from $40,000 to $200,000+ depending on features, AI capabilities, and video infrastructure. Here is the breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP',
                        price: '$40,000 - $65,000',
                        timeline: '4-5 months',
                        color: '#22c55e',
                        features: ['Course creation and management', 'Video lesson player', 'Basic quizzes (multiple choice)', 'Progress tracking dashboard', 'User profiles and settings', 'Push notification reminders', 'Basic gamification (XP, badges)'],
                      },
                      {
                        tier: 'Standard',
                        price: '$75,000 - $130,000',
                        timeline: '6-8 months',
                        color: '#3b82f6',
                        features: ['Everything in MVP', 'Gamified learning (streaks, leaderboards, leagues)', 'Spaced repetition system', 'Interactive assessments (5+ question types)', 'Discussion forums and social features', 'Offline download mode', 'Subscription billing system', 'Certificate generation'],
                      },
                      {
                        tier: 'Full-Featured',
                        price: '$150,000 - $200,000+',
                        timeline: '8-12 months',
                        color: '#a855f7',
                        features: ['Everything in Standard', 'AI-powered adaptive learning paths', 'LLM chat tutor with RAG', 'Live video classes with recording', 'Automated content generation', 'Multi-language support with localization', 'Corporate/institutional admin portal', 'Advanced analytics and prediction', 'Blockchain-verified certifications'],
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
                </div>

                {/* Monetization */}
                <div className="reveal" style={{ marginBottom: 56 }} id="monetization">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Monetization: How Education Apps Make Money
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    EdTech is one of the fastest-growing app revenue categories. Duolingo generates $531M annually, Coursera $524M, and Byju's $600M. Here are the monetization models that work:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { model: 'Freemium Subscription', revenue: '$9.99-$29.99/month', desc: 'Free tier with limited lessons, ads, and basic features. Premium unlocks all content, removes ads, enables offline mode, and provides AI tutoring. Annual plans at 50% discount drive long-term commitment.' },
                      { model: 'Course Marketplace', revenue: '30-50% commission', desc: 'Instructors publish courses on your platform, you handle distribution and payments. Udemy model: take 37% on organic sales, 63% on promoted sales. Creates a content flywheel without internal content production costs.' },
                      { model: 'Corporate / Institutional Licensing', revenue: '$3-$15 per seat/month', desc: 'Sell to companies, schools, and universities. Admin dashboard with progress tracking, team management, and compliance reporting. Higher ARPU, lower churn, predictable revenue.' },
                      { model: 'Certification Fees', revenue: '$50-$500 per exam', desc: 'Charge for proctored certification exams. Industry-recognized certifications command premium pricing. Partner with accreditation bodies for credibility. Google, AWS, and HubSpot models.' },
                      { model: 'In-App Purchases', revenue: '$0.99-$9.99 each', desc: 'Streak freezes, extra lives, premium quizzes, bonus content packs, and cosmetic items (profile customization). Microtransactions complement subscription revenue.' },
                      { model: 'Advertising', revenue: '$5-$15 CPM', desc: 'Display ads for free-tier users between lessons. Partner with relevant brands (office supplies, career services, educational products). High CPMs due to educated, high-intent audience.' },
                    ].map(item => (
                      <div key={item.model} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.model}</p>
                        <p style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', margin: '0 0 10px' }}>{item.revenue}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Education App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Education apps require a rare combination of gamification expertise, video streaming infrastructure, AI integration, and content management systems. Our team at Codazz has built EdTech platforms serving millions of learners with completion rates that exceed industry averages by 3x.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We do not use templates. Your education app will be custom-engineered with gamification mechanics tuned to your specific learning domain, AI tutoring that understands your course content, and engagement systems that turn learners into completers. We build EdTech apps that actually teach.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{ padding: '14px 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
                        Get a Free Consultation
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
                  Ready to Build Your Education App?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your EdTech concept with our team. We will analyze your learning domain, recommend gamification mechanics, and provide a detailed fixed-price proposal within 48 hours.
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
