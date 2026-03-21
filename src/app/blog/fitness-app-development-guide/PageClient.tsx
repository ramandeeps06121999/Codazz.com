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
  { id: 'core-features', label: 'Core Features', emoji: '⚙️' },
  { id: 'wearable-integration', label: 'Wearable Integration', emoji: '⌚' },
  { id: 'gamification', label: 'Gamification & Social', emoji: '🏆' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'monetization', label: 'Monetization', emoji: '💵' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026 Guide)', category: 'Business', readTime: '8 min' },
  { slug: 'dating-app-development-guide', title: 'How to Build a Dating App Like Tinder in 2026', category: 'Mobile', readTime: '13 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026: The Complete Guide', category: 'AI/ML', readTime: '18 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a fitness app?',
    a: 'A fitness app costs between $30,000 and $150,000 depending on features and complexity. A basic MVP with workout tracking and exercise library starts at $30K-$50K. A full-featured platform with AI coaching, wearable integration, meal planning, social features, and gamification costs $100K-$150K.',
  },
  {
    q: 'How long does it take to develop a fitness app?',
    a: 'A basic fitness app MVP takes 3-4 months. A full-featured platform with wearable integration, AI-powered coaching, social community features, and gamification takes 6-9 months. Wearable SDK integration alone can take 3-5 weeks per platform (Apple Watch, Fitbit, Garmin).',
  },
  {
    q: 'Which wearable devices should my fitness app support?',
    a: 'Start with Apple HealthKit (iOS) and Google Health Connect (Android) as they aggregate data from most wearables. Then add direct integrations for Fitbit, Garmin, and Whoop based on your target audience. Apple Watch has the largest market share at 50%+, so prioritize that for direct watchOS app development.',
  },
  {
    q: 'How do fitness apps make money?',
    a: 'The dominant model is freemium with premium subscriptions ($9.99-$29.99/month). Peloton generates $1.67B annually from subscriptions. Additional revenue comes from in-app purchases (premium workout plans), branded partnerships, marketplace commissions on equipment, and corporate wellness programs.',
  },
  {
    q: 'Should I use AI in my fitness app?',
    a: 'Yes. AI is now table stakes for competitive fitness apps in 2026. Use AI for personalized workout recommendations based on user goals and progress, form analysis through computer vision, adaptive training plans that adjust based on recovery and performance data, and nutrition recommendations based on activity levels. Apps with AI personalization see 40% higher retention.',
  },
];

export default function FitnessAppDevelopmentGuideClient() {
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
              src="/blog_images/fitness-app-development-guide.jpg"
              alt="fitness app development guide"
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>Mobile</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                14 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              How to Build a Fitness App in 2026: Complete Development Guide
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              From workout tracking and wearable integration to AI coaching and gamification. Everything you need to build a fitness app that keeps users coming back every day.
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
                    The Fitness App Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global fitness app market is projected to reach $19.3 billion by 2027, growing at a CAGR of 21.6%. Over 400 million people worldwide use fitness apps, and the COVID pandemic permanently shifted workout habits: 72% of gym-goers now supplement with at-home digital workouts. The wearable fitness market alone is worth $74 billion, and every one of those devices needs an app ecosystem.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But the opportunity is not in building another generic workout tracker. Strava dominates running, Peloton owns connected fitness, and MyFitnessPal leads calorie tracking. The winners in 2026 are hyper-focused apps: prenatal fitness, senior wellness, sport-specific training, recovery and mobility, and AI-powered personal coaching that adapts in real time. Niche fitness apps achieve 3x higher retention than generalist platforms.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Opportunity:</strong> The average fitness app user churns within 30 days. Apps with personalized AI coaching retain users 2.5x longer. Wearable-integrated apps see 60% higher daily active usage. The combination of personalization + wearable data + social accountability is the winning formula in 2026.
                    </p>
                  </div>
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features for Your Fitness App
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The features you include determine whether users open your app once or build it into their daily routine. Here are the essential features for a competitive fitness app in 2026:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { feature: 'Workout Tracking', desc: 'Log exercises with sets, reps, weight, duration. Auto-detect rest periods. Track cardio with GPS for running, cycling, hiking.' },
                      { feature: 'Exercise Library', desc: '500+ exercises with HD video demos, muscle group targeting, difficulty levels, and alternative movements for injuries.' },
                      { feature: 'Custom Workout Builder', desc: 'Drag-and-drop workout creator with exercise search, superset grouping, rest timers, and template saving.' },
                      { feature: 'Meal Planning & Nutrition', desc: 'Calorie and macro tracking, barcode scanner, meal logging with photos, recipe suggestions based on dietary goals.' },
                      { feature: 'Progress Tracking', desc: 'Body measurements, progress photos with side-by-side comparison, strength progression charts, personal records.' },
                      { feature: 'AI Personal Trainer', desc: 'Adaptive workout plans that adjust based on performance, recovery data, and goals. Suggests deload weeks and progressive overload.' },
                      { feature: 'Workout Plans & Programs', desc: 'Pre-built 4-12 week programs for muscle gain, fat loss, marathon training, flexibility, and sport-specific conditioning.' },
                      { feature: 'Rest Timer & Interval Training', desc: 'Configurable rest timers between sets, HIIT interval timers, Tabata mode, and AMRAP countdowns.' },
                      { feature: 'Wearable Sync', desc: 'Real-time heart rate from Apple Watch, Fitbit, Garmin. Auto-import sleep, steps, recovery scores, and HRV data.' },
                      { feature: 'Push Notifications', desc: 'Workout reminders, streak alerts, rest day suggestions, goal milestones, and social activity notifications.' },
                      { feature: 'Offline Mode', desc: 'Download workouts for gym use without internet. Sync data when back online. Essential for basement and outdoor gyms.' },
                      { feature: 'Audio Coaching', desc: 'Voice-guided workouts with rep counting, form cues, and motivational coaching during exercises.' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wearable Integration */}
                <div className="reveal" style={{ marginBottom: 56 }} id="wearable-integration">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Wearable Integration: The Competitive Advantage
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Wearable integration is not optional in 2026. Over 500 million wearable devices are in use globally, and users expect their fitness app to pull data from their watch automatically. Wearable data unlocks features that are impossible with a phone alone: real-time heart rate zones, sleep quality analysis, recovery readiness scores, and stress monitoring.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 20 }}>
                    {[
                      {
                        name: 'Apple HealthKit / watchOS',
                        desc: 'Apple Watch holds 50%+ market share in smartwatches. HealthKit provides a unified API for steps, heart rate, HRV, sleep stages, blood oxygen, and workout data. Build a companion watchOS app for real-time workout tracking with haptic feedback for intervals.',
                        priority: 'Critical',
                      },
                      {
                        name: 'Google Health Connect (Android)',
                        desc: 'Google Health Connect replaces Google Fit as the unified health data layer on Android. Aggregates data from Samsung Galaxy Watch, Pixel Watch, Fitbit, and third-party apps. Single API integration covers the entire Android wearable ecosystem.',
                        priority: 'Critical',
                      },
                      {
                        name: 'Fitbit Web API',
                        desc: 'Fitbit has 30+ million active users. Their REST API provides detailed sleep data, SpO2 trends, stress management scores, and Active Zone Minutes. OAuth 2.0 authentication with granular permission scoping.',
                        priority: 'High',
                      },
                      {
                        name: 'Garmin Connect IQ',
                        desc: 'Garmin dominates the serious athlete segment: runners, triathletes, cyclists. Their Connect IQ SDK allows building custom watch faces and data fields. Garmin Health API provides training load, VO2 max estimates, and body battery.',
                        priority: 'High',
                      },
                      {
                        name: 'Whoop API',
                        desc: 'Whoop is the premium recovery wearable with detailed strain, recovery, and sleep scores. Their API provides granular HRV data and recovery percentages that are highly valued by serious athletes.',
                        priority: 'Medium',
                      },
                    ].map(item => (
                      <div key={item.name} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.priority === 'Critical' ? '#ef4444' : item.priority === 'High' ? '#f59e0b' : '#22c55e', background: item.priority === 'Critical' ? 'rgba(239,68,68,0.1)' : item.priority === 'High' ? 'rgba(245,158,11,0.1)' : 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: 100 }}>{item.priority}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gamification & Social */}
                <div className="reveal" style={{ marginBottom: 56 }} id="gamification">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Gamification & Social Features That Drive Retention
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The biggest problem in fitness apps is retention. 95% of users who download a fitness app stop using it within 90 days. Gamification and social accountability are the two proven levers that change this equation. Strava built a $12 billion company primarily on social fitness features.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { feature: 'Streak System', desc: 'Daily workout streaks with escalating rewards. Show streak count prominently. Send recovery reminders before a streak breaks. Duolingo proved this drives daily engagement by 4x.' },
                      { feature: 'Achievement Badges', desc: 'Unlock badges for milestones: first 5K run, 100 workouts completed, deadlift PR, 30-day streak. Display on profile. Share to social media.' },
                      { feature: 'Leaderboards', desc: 'Weekly and monthly leaderboards for workout volume, calories burned, steps, or sport-specific metrics. Filter by friends, age group, or location.' },
                      { feature: 'Challenges', desc: 'Time-limited group challenges: 30-day plank challenge, monthly running distance goal, team step competitions. Creates urgency and community.' },
                      { feature: 'Social Feed', desc: 'Share completed workouts, PRs, progress photos, and achievements. Like, comment, and high-five. Follow friends and fitness influencers.' },
                      { feature: 'Workout Partners', desc: 'Match users for accountability partnerships. Shared workout plans, mutual check-ins, and co-workout sessions. Users with a workout partner retain 65% longer.' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.feature}</p>
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
                      { layer: 'Mobile Apps', tech: 'React Native or Flutter', why: 'Cross-platform for iOS and Android. React Native has better HealthKit and Google Fit libraries. Flutter excels at smooth animation-heavy workout UIs.' },
                      { layer: 'watchOS / Wear OS', tech: 'Swift (watchOS) + Kotlin (Wear OS)', why: 'Companion watch apps require native development for real-time sensor access, background heart rate monitoring, and haptic feedback during workouts.' },
                      { layer: 'Backend', tech: 'Node.js (NestJS) or Go', why: 'High-throughput API for syncing workout data and wearable metrics. Go excels at handling concurrent data streams from thousands of active workout sessions.' },
                      { layer: 'Database', tech: 'PostgreSQL + TimescaleDB + Redis', why: 'PostgreSQL for user data and workout plans. TimescaleDB extension for time-series health metrics (heart rate, steps per minute). Redis for real-time leaderboards.' },
                      { layer: 'AI / ML Engine', tech: 'Python (TensorFlow / PyTorch)', why: 'Workout recommendation models, form analysis via computer vision (MediaPipe), adaptive training load calculations, and nutrition optimization.' },
                      { layer: 'Media Storage', tech: 'AWS S3 + CloudFront CDN', why: 'Store exercise demo videos, progress photos, and audio coaching files. CloudFront ensures fast video loading globally. Compress videos with FFmpeg.' },
                      { layer: 'Computer Vision', tech: 'MediaPipe + TensorFlow Lite', why: 'On-device pose estimation for real-time form analysis. Counts reps automatically, detects improper form, and provides corrective feedback.' },
                      { layer: 'Push & Engagement', tech: 'Firebase Cloud Messaging + OneSignal', why: 'Workout reminders, streak preservation alerts, social notifications, and personalized re-engagement campaigns based on user activity patterns.' },
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
                    Cost Breakdown: How Much Does a Fitness App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building a fitness app ranges from $30,000 to $150,000+ depending on features, wearable integrations, and AI capabilities. Here is the breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP',
                        price: '$30,000 - $50,000',
                        timeline: '3-4 months',
                        color: '#22c55e',
                        features: ['Workout logging with sets/reps/weight', 'Exercise library (200+ exercises)', 'Basic progress tracking', 'Pre-built workout plans', 'Apple HealthKit & Google Fit sync', 'Push notification reminders', 'User profiles and settings'],
                      },
                      {
                        tier: 'Standard',
                        price: '$60,000 - $100,000',
                        timeline: '5-7 months',
                        color: '#3b82f6',
                        features: ['Everything in MVP', 'Custom workout builder', 'Meal planning & calorie tracking', 'Progress photos with comparison', 'Social feed with likes & comments', 'Streak system & achievement badges', 'Apple Watch companion app', 'Subscription billing system'],
                      },
                      {
                        tier: 'Full-Featured',
                        price: '$110,000 - $150,000+',
                        timeline: '7-9 months',
                        color: '#a855f7',
                        features: ['Everything in Standard', 'AI-powered adaptive training plans', 'Computer vision form analysis', 'Audio-guided coaching', 'Leaderboards & group challenges', 'Multi-wearable integration (Fitbit, Garmin, Whoop)', 'Marketplace for trainer content', 'Corporate wellness B2B features', 'Advanced analytics dashboard'],
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
                    Monetization: How Fitness Apps Make Money
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Fitness apps are among the highest-grossing app categories on both app stores. Peloton generates $1.67B annually, Strava $250M, and MyFitnessPal $200M. Here are the monetization models that work:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { model: 'Premium Subscription', revenue: '$9.99-$29.99/month', desc: 'The dominant revenue model. Free users get basic workout tracking. Premium unlocks AI coaching, advanced analytics, custom plans, and unlimited workout history. Annual plans at 40% discount drive commitment.' },
                      { model: 'Trainer Marketplace', revenue: '20-30% commission', desc: 'Let certified trainers sell workout programs, meal plans, and coaching packages through your platform. You take a commission on each sale. Builds content moat and community.' },
                      { model: 'In-App Purchases', revenue: '$2.99-$14.99 each', desc: 'Individual workout programs (12-week shred), specialized meal plans (keto, vegan), and challenge entry fees. One-time purchases that complement the subscription.' },
                      { model: 'Corporate Wellness (B2B)', revenue: '$3-$8 per employee/month', desc: 'Sell to companies for employee wellness programs. Includes admin dashboard, team challenges, engagement reporting, and health outcome tracking. Higher contract values, lower churn.' },
                      { model: 'Equipment Partnerships', revenue: '5-15% affiliate commission', desc: 'Recommend gym equipment, supplements, apparel, and wearables within the app. Affiliate links to Amazon, direct brand partnerships. Contextual recommendations work best.' },
                      { model: 'Premium Content', revenue: '$4.99-$19.99/program', desc: 'Celebrity trainer programs, sport-specific training camps, and exclusive video content series. Limited-time premium content creates urgency and drives both subscriptions and one-time purchases.' },
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
                    Why Build Your Fitness App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Fitness apps require a unique combination of real-time data processing, wearable SDK integration, computer vision for form analysis, and social features that scale. Our team at Codazz has built health and fitness platforms that process millions of workout sessions and sync data from every major wearable ecosystem.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We do not use templates. Your fitness app will be custom-engineered with AI coaching tuned to your specific fitness niche, wearable integrations that go beyond basic step counting, and gamification mechanics proven to drive daily engagement. We build fitness apps that become habits.
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
                  Ready to Build Your Fitness App?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your fitness app concept with our team. We will analyze your niche, recommend the right wearable integrations, and provide a detailed fixed-price proposal within 48 hours.
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
