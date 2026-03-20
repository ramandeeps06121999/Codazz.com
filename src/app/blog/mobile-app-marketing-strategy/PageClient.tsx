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

const tocItems = [
  { id: 'aso', label: 'App Store Optimization', emoji: '🔍' },
  { id: 'paid-ua', label: 'Paid User Acquisition', emoji: '💰' },
  { id: 'retention', label: 'Retention Strategies', emoji: '🔄' },
  { id: 'influencer-referral', label: 'Influencer & Referrals', emoji: '📢' },
  { id: 'key-metrics', label: 'Key Metrics', emoji: '📊' },
  { id: 'budget-allocation', label: 'Budget Allocation', emoji: '💵' },
  { id: 'codazz-approach', label: 'Codazz Approach', emoji: '🍁' },
  { id: 'faqs', label: 'FAQs', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'top-app-development-companies-usa', title: 'Top 10 App Development Companies in the USA (2026)', category: 'Engineering', readTime: '10 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native: The Definitive 2026 Comparison', category: 'Engineering', readTime: '15 min' },
  { slug: 'digital-marketing-cost-usa', title: 'How Much Does Digital Marketing Cost in the USA?', category: 'Digital Marketing', readTime: '9 min' },
];

const faqs = [
  {
    q: 'How much does it cost to market a mobile app in 2026?',
    a: 'Marketing budgets vary dramatically by stage. Pre-launch, expect to spend $2,000-$10,000 on landing pages, beta campaigns, and PR outreach. At launch, a realistic budget is $5,000-$25,000 for paid acquisition and press. During growth, most successful apps spend $10,000-$100,000+/month on a mix of ASO, paid UA, influencer marketing, and retention campaigns. The key metric is keeping your Customer Acquisition Cost (CAC) below one-third of your Lifetime Value (LTV).',
  },
  {
    q: 'What is ASO and why does it matter?',
    a: 'App Store Optimization (ASO) is the process of optimizing your app listing to rank higher in app store search results and convert more visitors into downloads. Since 65% of app discoveries happen through app store search, ASO is the highest-ROI marketing channel for most apps. It includes optimizing your title, subtitle, description, keywords, screenshots, preview video, and ratings. Unlike paid ads, ASO delivers compounding organic downloads that grow over time.',
  },
  {
    q: 'Which paid acquisition channel works best for mobile apps?',
    a: 'It depends on your app category and audience. Apple Search Ads consistently delivers the highest-intent users for iOS apps because users are already searching in the App Store (average CPI: $1-$4). Google UAC is best for scale across both Android and iOS with its machine learning optimization. Meta Ads (Facebook/Instagram) excels for lifestyle, e-commerce, and social apps with rich visual creative. TikTok Ads performs exceptionally well for apps targeting Gen Z and millennials. Most successful apps use a multi-channel approach, starting with Apple Search Ads and expanding to other platforms as they optimize.',
  },
  {
    q: 'What is a good Day 1, Day 7, and Day 30 retention rate?',
    a: 'Retention benchmarks vary by category, but general targets are: Day 1 retention of 25-40% (the percentage of users who return the day after install), Day 7 retention of 12-20%, and Day 30 retention of 8-15%. Top-performing apps exceed these significantly, with Day 1 rates above 50%. If your Day 1 retention is below 20%, focus on fixing your onboarding flow before spending on acquisition. Acquiring users who churn immediately is burning money.',
  },
  {
    q: 'How do I calculate Customer Acquisition Cost (CAC) for a mobile app?',
    a: 'CAC = Total Marketing Spend / Number of New Paying Users. Note the distinction between cost per install (CPI) and CAC. CPI measures all downloads including free users, while CAC measures only users who pay or subscribe. If your app has a freemium model with a 5% conversion rate and your CPI is $3, your effective CAC is $60 ($3 / 0.05). A healthy CAC-to-LTV ratio is 1:3 or better, meaning each user should generate at least 3x their acquisition cost over their lifetime.',
  },
  {
    q: 'Should I launch on iOS or Android first?',
    a: 'For most startups, launch on iOS first. iOS users have 2-3x higher average revenue per user (ARPU) than Android users globally, and Apple Search Ads provides a highly effective paid acquisition channel from day one. The App Store also has fewer apps (lower competition) and a more consistent review process. Once you have product-market fit and proven unit economics on iOS, expand to Android to capture the larger global market. The exception is if your target market is primarily in regions with heavy Android usage (Southeast Asia, India, Latin America).',
  },
];

export default function MobileAppMarketingStrategyClient() {
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

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/mobile-app-marketing-strategy.jpg"
              alt="Mobile app marketing strategy guide 2026"
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

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Digital Marketing</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                14 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Mobile App Marketing Strategy 2026: Complete ASO &amp; User Acquisition Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The definitive playbook for launching and growing a mobile app in 2026. From App Store Optimization to paid user acquisition, retention engineering, and the metrics that actually matter.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: '\u{1D54F}' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)',
                  background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY + SIDEBAR ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Building a great mobile app is only half the battle. The App Store has over 1.8 million apps. Google Play has over 3.5 million. Without a deliberate, data-driven marketing strategy, your app will be invisible no matter how good it is.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    In 2026, the mobile app landscape is more competitive and more expensive than ever. Average cost-per-install has risen 30% since 2023. Privacy changes from Apple and Google have fundamentally altered how paid acquisition works. And user expectations for onboarding, performance, and design have never been higher.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide covers the complete mobile app marketing stack: App Store Optimization, paid user acquisition across every major platform, retention engineering, influencer marketing, referral programs, key metrics, and budget allocation for every stage of growth.
                  </p>
                </div>

                {/* ASO */}
                <div className="reveal" style={{ marginBottom: 56 }} id="aso">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    App Store Optimization (ASO): Your Highest-ROI Channel
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    ASO is to mobile apps what SEO is to websites. 65% of all app downloads come from app store search, making ASO the single most important marketing lever. Unlike paid acquisition, organic downloads from ASO compound over time and cost nothing per install.
                  </p>

                  {[
                    {
                      title: 'Title & Subtitle Optimization', emoji: '📝',
                      description: 'Your app title (30 characters on iOS, 50 on Google Play) is the most heavily weighted ranking factor. Include your primary keyword naturally. Your subtitle (iOS) or short description (Google Play) should contain secondary keywords. Example: Instead of "FitTrack - Workout App," use "FitTrack: Gym Workout Planner & Fitness Tracker" to capture multiple search terms.',
                      accentColor: '#22c55e', bgColor: 'rgba(34,197,94,',
                    },
                    {
                      title: 'Keyword Strategy', emoji: '🔑',
                      description: 'On iOS, you get a 100-character keyword field that is invisible to users but critical for search ranking. Target medium-competition keywords with 20-60 search score in tools like AppTweak or Sensor Tower. On Google Play, keywords are extracted from your full description, so write naturally keyword-rich copy. Update keywords monthly based on performance data and seasonal trends.',
                      accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    },
                    {
                      title: 'Screenshots & Preview Video', emoji: '🖼️',
                      description: 'Screenshots are your conversion-rate multiplier. The first three screenshots determine whether a user keeps scrolling or downloads. Use benefit-driven captions (not feature lists), show the actual UI in context, and design for the search results view (small thumbnails). A/B test aggressively. Adding a 15-30 second preview video can increase conversion rates by 25-35%.',
                      accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    },
                    {
                      title: 'Ratings & Reviews Management', emoji: '⭐',
                      description: 'Apps with 4.5+ stars convert at 2-3x the rate of apps with 4.0 stars. Use in-app review prompts (Apple SKStoreReviewController, Google In-App Review API) triggered after positive moments like completing a workout or achieving a milestone. Respond to every negative review within 24 hours. A single response can convert a 1-star review into a 5-star review 33% of the time.',
                      accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    },
                    {
                      title: 'A/B Testing', emoji: '🧪',
                      description: 'Apple App Store and Google Play both offer native A/B testing for store listings. Test one element at a time: icon, first screenshot, subtitle, description. Run tests for at least 7 days with statistically significant traffic. Even small conversion rate improvements compound massively. Improving your listing conversion from 25% to 30% on 10,000 monthly page views means 500 extra free installs every month.',
                      accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    },
                  ].map((item) => (
                    <div key={item.title} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 24, padding: 36, marginBottom: 20,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 16 }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                          background: `${item.bgColor}0.1)`, border: `1px solid ${item.bgColor}0.2)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                        }}>{item.emoji}</div>
                        <div>
                          <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{item.title}</h3>
                        </div>
                      </div>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Paid User Acquisition */}
                <div className="reveal" style={{ marginBottom: 56 }} id="paid-ua">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Paid User Acquisition: Platform-by-Platform Breakdown
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Paid acquisition is the fastest way to scale app downloads, but it requires careful channel selection, creative testing, and relentless optimization. Here is how each platform performs in 2026.
                  </p>

                  {[
                    { platform: 'Apple Search Ads', cpi: '$1-$4', strengths: 'Highest intent users (searching in the App Store), 50%+ conversion rates on branded terms, granular keyword targeting', weaknesses: 'iOS only, limited creative options, can get expensive in competitive categories', bestFor: 'iOS-first apps, subscription apps, any app targeting the US/EU market', color: '#22c55e' },
                    { platform: 'Google UAC (App Campaigns)', cpi: '$0.50-$3', strengths: 'Massive scale across Search, YouTube, Play Store, and Display network. Google ML auto-optimizes placements and bids. Supports both Android and iOS campaigns', weaknesses: 'Less control over placements, requires conversion data to optimize well, can waste budget on low-quality inventory initially', bestFor: 'Apps seeking scale, Android-first apps, apps with clear in-app conversion events', color: '#a78bfa' },
                    { platform: 'Meta Ads (Facebook & Instagram)', cpi: '$1.50-$5', strengths: 'Best audience targeting (demographics, interests, lookalike audiences), strong creative formats (Reels, Stories, carousel), excellent retargeting', weaknesses: 'Post-ATT tracking limitations on iOS, creative fatigue requires constant refreshes, CPIs have risen 40% since 2022', bestFor: 'Lifestyle, e-commerce, social, and entertainment apps with strong visual appeal', color: '#f472b6' },
                    { platform: 'TikTok Ads', cpi: '$1-$4', strengths: 'Lowest CPMs of any major platform, exceptional for reaching Gen Z and millennials, native UGC-style creative performs well, Spark Ads amplify organic content', weaknesses: 'Audience skews younger, attribution can be challenging, creative burnout is fast (3-5 day lifespan)', bestFor: 'Consumer apps targeting 18-34, apps with visually interesting features, gaming apps', color: '#fbbf24' },
                  ].map((item) => (
                    <div key={item.platform} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20, padding: 28, marginBottom: 20,
                    }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: item.color, margin: '0 0 16px' }}>{item.platform}</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 16, marginBottom: 16 }}>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Avg. CPI</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.cpi}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Best For</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.bestFor}</p>
                        </div>
                      </div>
                      <div style={{ marginBottom: 12 }}>
                        <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>Strengths</p>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{item.strengths}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>Weaknesses</p>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{item.weaknesses}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Retention Strategies */}
                <div className="reveal" style={{ marginBottom: 56 }} id="retention">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Retention Strategies: Keeping Users After the Install
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The average app loses 77% of its daily active users within the first three days after install. Retention is where most app marketing budgets are wasted because teams spend everything on acquisition and nothing on keeping users. A 5% improvement in retention can increase profitability by 25-95%.
                  </p>

                  {[
                    { title: 'Onboarding Flows', description: 'First impressions determine everything. Design an onboarding experience that gets users to their "aha moment" within 60 seconds. Use progressive disclosure (do not overwhelm with features), personalization questions to tailor the experience, and clear value demonstration. Apps with optimized onboarding see 2-3x higher Day 7 retention.', color: '#22c55e' },
                    { title: 'Push Notifications', description: 'Push notifications are the most powerful re-engagement tool when used correctly. Personalize based on user behavior (not generic blasts), time notifications using send-time optimization (when each user is most active), and limit to 3-5 per week maximum. Segmented push notifications have 4-7x higher open rates than broadcast messages.', color: '#a78bfa' },
                    { title: 'In-App Messaging', description: 'Unlike push notifications, in-app messages reach users while they are actively using your app. Use them for feature announcements, personalized tips, milestone celebrations, and upgrade prompts. Triggered in-app messages based on behavior (e.g., "You have used this feature 10 times, did you know about this shortcut?") feel helpful rather than intrusive.', color: '#f472b6' },
                    { title: 'Gamification', description: 'Streaks, badges, leaderboards, and progress bars tap into core human psychology. Duolingo built a $10B+ company largely on streak mechanics. Implement daily check-in rewards, progress visualization, achievement unlocks, and social competition. Gamification increases session frequency by 30-50% and dramatically improves long-term retention.', color: '#fbbf24' },
                  ].map((item) => (
                    <div key={item.title} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20, padding: 28, marginBottom: 20,
                    }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: item.color, margin: '0 0 12px' }}>{item.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Influencer & Referrals */}
                <div className="reveal" style={{ marginBottom: 56 }} id="influencer-referral">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Influencer Marketing &amp; Referral Programs
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Paid ads are getting more expensive every year. The most capital-efficient growth channels in 2026 are influencer marketing and referral programs, both of which leverage social proof and word-of-mouth to acquire users at a fraction of traditional paid UA costs.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 20,
                  }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 20px' }}>Influencer Marketing Playbook</h3>
                    <div style={{ display: 'grid', gap: 16 }}>
                      {[
                        { tier: 'Nano Influencers (1K-10K)', cost: '$50-$500/post', engagement: '5-10%', bestFor: 'Early-stage apps needing social proof. High trust, low cost.' },
                        { tier: 'Micro Influencers (10K-100K)', cost: '$500-$5,000/post', engagement: '3-7%', bestFor: 'Growth-stage apps. Best balance of reach and authenticity.' },
                        { tier: 'Macro Influencers (100K-1M)', cost: '$5,000-$25,000/post', engagement: '1-3%', bestFor: 'Apps with proven unit economics seeking scale.' },
                        { tier: 'Mega Influencers (1M+)', cost: '$25,000-$100,000+/post', engagement: '0.5-2%', bestFor: 'Major launches with large budgets. Brand awareness over direct installs.' },
                      ].map((tier) => (
                        <div key={tier.tier} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                          <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{tier.tier}</p>
                          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 8 }}>
                            <span style={{ fontSize: 13, color: '#22c55e' }}>Cost: {tier.cost}</span>
                            <span style={{ fontSize: 13, color: '#a78bfa' }}>Engagement: {tier.engagement}</span>
                          </div>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0 }}>{tier.bestFor}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 20,
                  }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 16px' }}>Referral Program Design</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                      The best referral programs offer two-sided incentives (both referrer and referee get value), are dead simple to use (one-tap sharing), and are triggered at moments of delight (after a user achieves something). Dropbox grew from 100K to 4M users in 15 months with a referral program that gave both parties extra storage. Design your incentive around your core value proposition.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['Two-sided rewards', 'One-tap sharing', 'Unique referral codes', 'Progress tracking', 'Tiered rewards', 'Social proof badges'].map((item, idx) => (
                        <span key={idx} style={{
                          fontSize: 12, color: 'rgba(255,255,255,0.45)', padding: '4px 12px',
                          borderRadius: 100, background: 'rgba(255,255,255,0.02)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="reveal" style={{ marginBottom: 56 }} id="key-metrics">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Key Metrics Every App Marketer Must Track
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    You cannot improve what you do not measure. These are the metrics that separate apps that grow from apps that die.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 24,
                    border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Metric</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>What It Measures</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#a78bfa', fontSize: 14 }}>Benchmark</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { metric: 'CAC', measures: 'Cost to acquire one paying user', benchmark: 'Less than 1/3 of LTV' },
                          { metric: 'LTV', measures: 'Revenue per user over their lifetime', benchmark: '$20-$200+ (varies by category)' },
                          { metric: 'D1 Retention', measures: 'Users returning Day 1', benchmark: '25-40%' },
                          { metric: 'D7 Retention', measures: 'Users returning Day 7', benchmark: '12-20%' },
                          { metric: 'D30 Retention', measures: 'Users returning Day 30', benchmark: '8-15%' },
                          { metric: 'ARPU', measures: 'Average Revenue Per User (monthly)', benchmark: '$2-$15 (consumer apps)' },
                          { metric: 'ROAS', measures: 'Return on ad spend', benchmark: '2x+ at 90 days' },
                        ].map((row) => (
                          <tr key={row.metric} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px 8px', color: '#ffffff', fontWeight: 600 }}>{row.metric}</td>
                            <td style={{ padding: '12px 8px', color: 'rgba(255,255,255,0.6)' }}>{row.measures}</td>
                            <td style={{ padding: '12px 8px', color: 'rgba(255,255,255,0.6)' }}>{row.benchmark}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{
                    background: 'rgba(34,197,94,0.05)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}>
                    <p style={{ fontSize: 15, color: '#ffffff', margin: 0 }}>
                      <strong>The Golden Rule:</strong> Your LTV-to-CAC ratio should be at least 3:1. If you are spending $30 to acquire a user, that user needs to generate at least $90 in lifetime revenue. Below 3:1, you are growing unprofitably. Above 5:1, you are under-investing in growth.
                    </p>
                  </div>
                </div>

                {/* Budget Allocation */}
                <div className="reveal" style={{ marginBottom: 56 }} id="budget-allocation">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Budget Allocation by Stage
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    How you allocate your marketing budget should change dramatically as your app matures. Here is the framework used by the most successful app companies.
                  </p>

                  {[
                    {
                      stage: 'Pre-Launch ($2K-$10K total)',
                      breakdown: [
                        { channel: 'Landing page & email list', pct: '30%' },
                        { channel: 'Beta community building', pct: '25%' },
                        { channel: 'PR & press outreach', pct: '20%' },
                        { channel: 'ASO preparation', pct: '15%' },
                        { channel: 'Influencer seeding', pct: '10%' },
                      ],
                      color: '#22c55e',
                    },
                    {
                      stage: 'Launch Week ($5K-$25K)',
                      breakdown: [
                        { channel: 'Apple Search Ads', pct: '35%' },
                        { channel: 'Meta/TikTok Ads', pct: '25%' },
                        { channel: 'Influencer activations', pct: '20%' },
                        { channel: 'PR push & Product Hunt', pct: '15%' },
                        { channel: 'ASO optimization', pct: '5%' },
                      ],
                      color: '#a78bfa',
                    },
                    {
                      stage: 'Growth ($10K-$100K+/month)',
                      breakdown: [
                        { channel: 'Paid UA (multi-platform)', pct: '40%' },
                        { channel: 'Retention & CRM', pct: '20%' },
                        { channel: 'ASO & organic growth', pct: '15%' },
                        { channel: 'Influencer marketing', pct: '15%' },
                        { channel: 'Referral program', pct: '10%' },
                      ],
                      color: '#f472b6',
                    },
                  ].map((item) => (
                    <div key={item.stage} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20, padding: 28, marginBottom: 20,
                    }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: item.color, margin: '0 0 16px' }}>{item.stage}</h3>
                      {item.breakdown.map((b) => (
                        <div key={b.channel} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>{b.channel}</span>
                          <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>{b.pct}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Codazz Approach */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz-approach">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <span style={{ fontSize: 28 }}>🍁</span>
                        <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', margin: 0 }}>
                          How Codazz Builds Apps That Market Themselves
                        </h2>
                      </div>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                        Most app development agencies build your app and hand it off. You are left figuring out marketing on your own. Codazz is different because we build marketing into the product from day one.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                        Our engineering team implements ASO-optimized store listings, deep linking for attribution, push notification infrastructure, referral system APIs, and analytics SDKs as part of the core build. We also build your app landing page with conversion-optimized design and SEO to capture organic web traffic that converts to app installs.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                        The result: apps that launch with a marketing foundation already in place, reducing time-to-first-1000-users by 60% compared to teams that retrofit marketing after launch.
                      </p>
                      <div style={{
                        padding: '14px 20px', borderRadius: 12,
                        background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                        display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                        </svg>
                        <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                          Engineering + Marketing Under One Roof = 60% Faster Launch
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faqs">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Frequently Asked Questions
                  </h2>
                  <div>
                    {faqs.map((faq, idx) => (
                      <div key={idx} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, marginBottom: 12, overflow: 'hidden',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          style={{
                            width: '100%', padding: '20px 24px', background: 'transparent', border: 'none',
                            color: '#ffffff', fontSize: 16, fontWeight: 600, textAlign: 'left',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                          }}
                        >
                          <span>{faq.q}</span>
                          <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)', flexShrink: 0, transform: openFaq === idx ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                        </button>
                        {openFaq === idx && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside>
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {/* Table of Contents */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocItems.map(item => (
                        <a key={item.id} href={`#${item.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                        >
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0 }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                        >
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

        {/* ── BOTTOM CTA ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="reveal" style={{
              background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
              borderRadius: 28, padding: '64px 56px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 32,
            }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>App Marketing</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>
                  Ready to Launch &amp; Grow Your App?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Codazz builds mobile apps with marketing baked into the product. From ASO-ready store listings to referral systems, we set you up for growth from day one.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get a Free Consultation →
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
