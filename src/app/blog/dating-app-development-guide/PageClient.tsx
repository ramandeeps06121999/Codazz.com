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
  { id: 'matching-algorithms', label: 'Matching Algorithms', emoji: '🧠' },
  { id: 'core-features', label: 'Core Features', emoji: '⚙️' },
  { id: 'safety-features', label: 'Safety & Trust', emoji: '🛡️' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'monetization', label: 'Monetization', emoji: '💵' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026 Guide)', category: 'Business', readTime: '8 min' },
  { slug: 'uber-like-app-development-guide', title: 'How to Build an Uber-Like App in 2026', category: 'Mobile', readTime: '14 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026: The Complete Guide', category: 'AI/ML', readTime: '18 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a dating app like Tinder?',
    a: 'A dating app costs between $60,000 and $180,000 depending on features and complexity. A basic MVP with swipe matching and messaging starts at $60K-$85K. A full-featured platform with AI matching, video chat, safety features, and premium subscriptions costs $120K-$180K.',
  },
  {
    q: 'How long does it take to develop a dating app?',
    a: 'A basic dating app MVP takes 4-5 months. A full-featured platform with AI-powered matching, video calling, safety verification, and monetization features takes 7-10 months. The matching algorithm alone can take 4-6 weeks to develop and tune properly.',
  },
  {
    q: 'What matching algorithm should I use for my dating app?',
    a: 'Start with a collaborative filtering algorithm that learns from user behavior (swipes, messages, matches). Layer in content-based filtering using profile attributes (interests, location, age). For 2026, add AI/ML models that analyze engagement patterns to predict compatibility. The Elo-style ranking system Tinder uses is a good foundation but should be combined with behavioral signals.',
  },
  {
    q: 'How do dating apps make money?',
    a: 'The dominant model is freemium with premium subscriptions ($14.99-$29.99/month). Additional revenue comes from in-app purchases (Super Likes, Boosts, profile highlighting), advertising for free-tier users, premium tiers with exclusive features, and event/experience monetization.',
  },
  {
    q: 'What safety features are essential for a dating app?',
    a: 'Essential safety features include photo verification (selfie matching), ID verification, block and report functionality, message screening for inappropriate content, video call before meeting, location sharing with trusted contacts, and an in-app panic button. In 2026, AI-powered catfish detection and background check integrations are becoming standard.',
  },
  {
    q: 'Should I build for iOS or Android first?',
    a: 'We recommend building for both platforms simultaneously using React Native or Flutter. Dating apps have a network effect: the more users, the better the experience. Launching on both platforms doubles your initial user pool, which is critical for a dating app where match quality depends on user density.',
  },
];

export default function DatingAppDevelopmentGuideClient() {
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>Mobile</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                13 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              How to Build a Dating App Like Tinder in 2026
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              From matching algorithms and safety features to monetization strategies and cost breakdowns. Everything you need to build a dating app that people actually want to use.
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
                    The Dating App Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The online dating market is worth over $12 billion globally and growing at 7.4% annually. Over 350 million people worldwide use dating apps, and that number climbs every year as social stigma around online dating continues to evaporate. In the United States alone, over 44 million people actively use dating apps, and 30% of adults have used one at some point.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But here is the opportunity: despite Tinder, Bumble, and Hinge dominating the mainstream, user dissatisfaction is at an all-time high. Over 75% of dating app users report frustration with the experience. Swipe fatigue, low-quality matches, ghosting, and safety concerns have created a market ripe for disruption. The most successful new dating apps in 2026 are hyper-focused: niche communities, specific demographics, unique interaction models, and safety-first design.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Opportunity:</strong> Niche dating apps targeting specific communities (faith-based, LGBTQ+, professionals, pet owners, specific ethnicities, outdoor enthusiasts) consistently achieve 3-5x higher engagement rates and 60% lower churn than general-purpose platforms. The key is community density, not total user count.
                    </p>
                  </div>
                </div>

                {/* Matching Algorithms */}
                <div className="reveal" style={{ marginBottom: 56 }} id="matching-algorithms">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Matching Algorithms: The Heart of Your Dating App
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Your matching algorithm is the single most important technical decision you will make. It determines whether users find meaningful connections or get frustrated and delete your app. Here are the approaches that work in 2026:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 20 }}>
                    {[
                      {
                        name: 'Elo-Based Ranking',
                        desc: 'Borrowed from chess ratings. Each user has a desirability score that increases when highly-rated users swipe right on them and decreases when they are passed over. Users with similar scores are shown to each other. Tinder used this early on.',
                        pros: 'Simple to implement, creates balanced matching',
                        cons: 'Can feel unfair, creates echo chambers',
                      },
                      {
                        name: 'Collaborative Filtering',
                        desc: 'Recommends profiles based on what similar users liked. If users A and B both liked profiles X and Y, and user A also liked profile Z, the system recommends Z to user B. This is the same technique Netflix uses for movie recommendations.',
                        pros: 'Discovers non-obvious matches, improves over time',
                        cons: 'Needs critical mass of data, cold start problem',
                      },
                      {
                        name: 'AI/ML Compatibility Prediction',
                        desc: 'Machine learning models trained on successful matches (users who exchanged 10+ messages or met in person). Features include profile attributes, behavioral signals (time spent viewing, message response patterns), and conversation quality metrics.',
                        pros: 'Most accurate, adapts to individual preferences',
                        cons: 'Requires significant data and ML expertise',
                      },
                      {
                        name: 'Hybrid Approach (Recommended)',
                        desc: 'Combine all three: use Elo for initial ranking, collaborative filtering for discovery, and ML for fine-tuning. Layer in explicit preferences (age, distance, interests) as hard filters. This is what Hinge and Bumble use in 2026.',
                        pros: 'Best match quality, handles cold start and scale',
                        cons: 'Most complex to build, needs ongoing tuning',
                      },
                    ].map(algo => (
                      <div key={algo.name} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{algo.name}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>{algo.desc}</p>
                        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 12, color: '#22c55e' }}>Pros: {algo.pros}</span>
                          <span style={{ fontSize: 12, color: '#f59e0b' }}>Cons: {algo.cons}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features for Your Dating App
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { feature: 'Profile Creation', desc: 'Photos, bio, prompts, interests, lifestyle tags, verification badge' },
                      { feature: 'Swipe / Like Mechanism', desc: 'Classic swipe UI with like, pass, and super like actions' },
                      { feature: 'Mutual Matching', desc: 'Only connect users when both express interest (prevents unwanted messages)' },
                      { feature: 'Real-Time Messaging', desc: 'Text, GIFs, voice notes, and video messages between matched users' },
                      { feature: 'Video Calling', desc: 'In-app video dates with blur background option for privacy' },
                      { feature: 'Discovery Filters', desc: 'Age range, distance, gender, interests, relationship goals, height, education' },
                      { feature: 'Location-Based Matching', desc: 'GPS-based user discovery with adjustable distance radius' },
                      { feature: 'Photo Verification', desc: 'Selfie-matching AI to confirm users look like their photos' },
                      { feature: 'Profile Prompts', desc: 'Conversation starters like Hinge prompts that encourage meaningful profiles' },
                      { feature: 'Push Notifications', desc: 'New match alerts, message notifications, daily match suggestions' },
                      { feature: 'Block & Report', desc: 'Easy blocking with multiple report categories and swift moderation' },
                      { feature: 'Profile Boost', desc: 'Paid feature to increase visibility for a set time period' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safety Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="safety-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Safety & Trust Features (Non-Negotiable in 2026)
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Safety is not a feature. It is the foundation. Users will not engage with a dating app they do not trust, and a single safety incident can destroy your brand. In 2026, these safety features are table stakes:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { feature: 'Photo Verification', desc: 'AI-powered selfie matching ensures users look like their profile photos. Users take a real-time selfie in a specific pose, and the system verifies it against uploaded photos. Verified users get a blue checkmark badge.', priority: 'Critical' },
                      { feature: 'ID Verification', desc: 'Optional government ID verification for users who want an extra trust layer. Integrates with services like Jumio or Onfido for document verification. Users who verify get a gold badge.', priority: 'High' },
                      { feature: 'AI Content Moderation', desc: 'Automatic screening of messages for harassment, hate speech, unsolicited explicit content, and spam. Uses NLP models to flag and block inappropriate messages before they reach the recipient.', priority: 'Critical' },
                      { feature: 'Block & Report System', desc: 'One-tap blocking that immediately prevents all contact. Detailed report categories (fake profile, harassment, underage, scam) with 24-hour moderation review SLA.', priority: 'Critical' },
                      { feature: 'Location Sharing', desc: 'Before meeting IRL, users can share their live location with trusted contacts. Includes a check-in timer that alerts emergency contacts if not dismissed.', priority: 'High' },
                      { feature: 'Video Date Before Meeting', desc: 'Encourage video calls before in-person meetups. Helps verify identity and build comfort. Some apps require a video call before sharing location.', priority: 'Medium' },
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
                      { layer: 'Mobile Apps', tech: 'React Native or Flutter', why: 'Cross-platform for iOS and Android. React Native excels with gesture-heavy UIs (swipe cards). Flutter offers smoother animations.' },
                      { layer: 'Backend', tech: 'Node.js (NestJS) or Python (Django)', why: 'Event-driven architecture for real-time messaging. Python is better if you plan heavy ML/AI for matching algorithms.' },
                      { layer: 'Real-Time Messaging', tech: 'Socket.io + Redis Pub/Sub', why: 'Low-latency WebSocket connections for instant message delivery. Redis handles presence (online/offline status) and typing indicators.' },
                      { layer: 'Database', tech: 'PostgreSQL + Redis + MongoDB', why: 'PostgreSQL for user profiles and matches. Redis for caching and sessions. MongoDB for flexible chat message storage.' },
                      { layer: 'ML / Matching Engine', tech: 'Python (scikit-learn / TensorFlow)', why: 'Train matching models on user interaction data. Deployed as a microservice that the main backend calls for match recommendations.' },
                      { layer: 'Media Storage', tech: 'AWS S3 + CloudFront CDN', why: 'Store profile photos and video messages. CloudFront ensures fast loading globally. Image moderation via AWS Rekognition.' },
                      { layer: 'Video Calling', tech: 'Twilio Video or Agora', why: 'WebRTC-based video calling with background blur, low latency, and recording capabilities for safety.' },
                      { layer: 'Identity Verification', tech: 'Jumio or Onfido', why: 'Document verification and liveness detection for photo and ID verification features.' },
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
                    Cost Breakdown: How Much Does a Dating App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building a dating app ranges from $60,000 to $180,000+ depending on features, matching complexity, and safety infrastructure. Here is the breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP',
                        price: '$60,000 - $85,000',
                        timeline: '4-5 months',
                        color: '#22c55e',
                        features: ['Profile creation with photos & bio', 'Swipe-based matching', 'Basic messaging (text only)', 'Location-based discovery', 'Push notifications', 'Basic photo verification', 'Block & report functionality'],
                      },
                      {
                        tier: 'Standard',
                        price: '$90,000 - $130,000',
                        timeline: '6-8 months',
                        color: '#3b82f6',
                        features: ['Everything in MVP', 'AI-enhanced matching algorithm', 'Video calling & voice messages', 'Profile prompts & conversation starters', 'Premium subscription system', 'In-app purchases (Boosts, Super Likes)', 'Advanced content moderation', 'Detailed analytics dashboard'],
                      },
                      {
                        tier: 'Full-Featured',
                        price: '$140,000 - $180,000+',
                        timeline: '8-10 months',
                        color: '#a855f7',
                        features: ['Everything in Standard', 'ML-powered compatibility prediction', 'ID verification integration', 'AI catfish detection', 'Events & experiences feature', 'Group matching / friend-of-friend', 'Location sharing for safety', 'Multi-language support', 'Advanced A/B testing framework'],
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
                    Monetization: How Dating Apps Make Money
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Dating apps are one of the highest-grossing app categories. Tinder alone generates over $1.8 billion in annual revenue. Here are the monetization models that work:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { model: 'Premium Subscription', revenue: '$14.99-$29.99/month', desc: 'The core revenue driver. Premium users get unlimited likes, see who liked them, advanced filters, passport (change location), and priority in the algorithm. Offer tiered plans (Gold, Platinum).' },
                      { model: 'In-App Purchases', revenue: '$0.99-$4.99 each', desc: 'Super Likes ($1.99), Boosts ($3.99 for 30 min of top visibility), Roses (Hinge-style), and Read Receipts. These microtransactions add up fast with high-volume users.' },
                      { model: 'Advertising', revenue: '$3-$10 CPM', desc: 'Display ads for free-tier users between swipes. Partner with relevant brands (restaurants, events, fashion). Remove ads for premium subscribers as an incentive to upgrade.' },
                      { model: 'Events & Experiences', revenue: '$15-$50 per ticket', desc: 'Organize speed-dating events, singles mixers, or adventure dates through the app. Takes a percentage of ticket sales and builds community engagement.' },
                      { model: 'Premium Placement', revenue: '$4.99-$9.99/week', desc: 'Let users pay for increased visibility. Profile highlighting, appearing at the top of stacks, and featured profiles in specific areas.' },
                      { model: 'Referral Partnerships', revenue: 'Revenue share', desc: 'Partner with date-night businesses (restaurants, activities, flower delivery). Earn commission on bookings made through the app for date planning.' },
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
                    Why Build Your Dating App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Dating apps are among the most technically complex consumer applications. They require real-time messaging infrastructure, ML-powered matching engines, video calling, content moderation at scale, and bulletproof safety systems. Our team at Codazz has deep experience building social platforms with these exact requirements.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We do not use templates. Your dating app will be custom-engineered with a matching algorithm tuned to your specific niche, safety features that exceed industry standards, and a monetization system designed around your user demographics. We build dating apps that people keep coming back to.
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
                  Ready to Build Your Dating App?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your dating app concept with our team. We will analyze your niche, recommend matching algorithms, and provide a detailed fixed-price proposal within 48 hours.
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
