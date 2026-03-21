'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';

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
  { id: 'aso', label: 'App Store Optimization', emoji: '🏪' },
  { id: 'user-acquisition', label: 'User Acquisition Channels', emoji: '📣' },
  { id: 'push-notifications', label: 'Push Notification Strategy', emoji: '🔔' },
  { id: 'referral', label: 'In-App Referral Programs', emoji: '🤝' },
  { id: 'influencer', label: 'Influencer Marketing', emoji: '🌟' },
  { id: 'ab-testing', label: 'A/B Testing', emoji: '🧪' },
  { id: 'growth-hacking', label: 'Growth Hacking', emoji: '⚡' },
  { id: 'launch-strategy', label: 'Launch Strategy', emoji: '🚀' },
  { id: 'retention', label: 'Retention Marketing', emoji: '🔄' },
  { id: 'cpi-benchmarks', label: 'CPI Benchmarks', emoji: '💰' },
  { id: 'analytics-measurement', label: 'Analytics & Measurement', emoji: '📊' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'startup-marketing-guide-2026', title: 'Startup Marketing Guide 2026: From Zero to Growth', category: 'Marketing', readTime: '16 min' },
  { slug: 'ppc-vs-seo-2026', title: 'PPC vs SEO in 2026: Which Strategy is Right?', category: 'Marketing', readTime: '14 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'app-monetization-strategies-2026', title: 'App Monetization Strategies 2026: From Freemium to Subscriptions', category: 'Business', readTime: '17 min' },
  { slug: 'mvp-development-guide', title: 'MVP Development Guide: Build, Measure, Learn', category: 'Engineering', readTime: '13 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native 2026: The Definitive Comparison', category: 'Engineering', readTime: '15 min' },
];

const faqs = [
  {
    q: 'How long does it take to see results from ASO?',
    a: 'ASO results typically begin to show within 2–4 weeks after optimization. Keyword rankings can shift quickly, but organic download improvements usually compound over 2–3 months as the algorithm picks up positive signals from higher click-through rates and conversion rates.',
  },
  {
    q: 'What is a good Cost Per Install (CPI) benchmark in 2026?',
    a: 'Global average CPI sits at $1.22 for Android and $1.86 for iOS. However, benchmarks vary heavily by category: gaming apps often see $0.40–$1.00 while finance apps can exceed $8–$15 per install. Always measure cost per engaged user, not just installs.',
  },
  {
    q: 'Should I use TikTok Ads for my app in 2026?',
    a: "Yes, if your target audience is 18–34. TikTok's App Campaign product has matured significantly and often delivers CPI 30–50% lower than Meta for entertainment, lifestyle, and gaming verticals. Creative fatigue is fast, so plan for weekly new creatives.",
  },
  {
    q: 'What is the best push notification frequency to avoid churn?',
    a: 'Industry data suggests 1–3 push notifications per week for utility apps and up to once per day for news or content apps. The key is relevance — behavioral triggers (e.g., cart abandonment, milestone alerts) consistently outperform scheduled blasts by 3–5× in CTR.',
  },
  {
    q: 'How do I design a referral program that actually works?',
    a: "The highest-converting referral programs offer two-sided rewards (both referrer and referee get value), have a frictionless sharing flow (one tap to send), and tie the reward to a meaningful in-app action. Uber's early growth was driven by giving free rides to both parties — mimic that mechanic for your category.",
  },
];

export default function MobileAppMarketingClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('aso');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = tocSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocSections[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main ref={pageRef} style={{ background: '#000', minHeight: '100vh', color: '#e5e7eb' }}>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .toc-link { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 10px; color: #9ca3af; text-decoration: none; font-size: 14px; transition: all 0.2s; cursor: pointer; }
        .toc-link:hover, .toc-link.active { background: rgba(34,197,94,0.12); color: #22c55e; }
        .prose h2 { font-size: 1.75rem; font-weight: 700; color: #fff; margin: 2.5rem 0 1rem; }
        .prose h3 { font-size: 1.25rem; font-weight: 600; color: #d1fae5; margin: 1.75rem 0 0.75rem; }
        .prose p { color: #d1d5db; line-height: 1.8; margin-bottom: 1.1rem; }
        .prose ul { color: #d1d5db; padding-left: 1.5rem; margin-bottom: 1.1rem; }
        .prose ul li { margin-bottom: 0.5rem; line-height: 1.7; }
        .prose strong { color: #22c55e; }
        .prose a { color: #22c55e; text-decoration: underline; }
        .data-card { background: rgba(34,197,94,0.07); border: 1px solid rgba(34,197,94,0.18); border-radius: 16px; padding: 20px 24px; margin: 1.5rem 0; }
        .channel-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 1.5rem 0; }
        .channel-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px; }
        .benchmark-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
        .benchmark-table th { background: rgba(34,197,94,0.15); color: #22c55e; padding: 10px 14px; text-align: left; font-size: 13px; font-weight: 600; }
        .benchmark-table td { padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.06); color: #d1d5db; font-size: 14px; }
        .benchmark-table tr:last-child td { border-bottom: none; }
        @media (max-width: 1024px) { .layout-grid { display: block !important; } .toc-sidebar { display: none; } }
        @media (max-width: 640px) { .prose h2 { font-size: 1.4rem; } .channel-grid { grid-template-columns: 1fr; } }
      `}</style>

      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: '120px', paddingBottom: '80px', overflow: 'hidden' }}>
        <HeroBackground />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 20, padding: '4px 14px', fontSize: 13, color: '#22c55e' }}>Marketing</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: '4px 14px', fontSize: 13, color: '#9ca3af' }}>Mar 20, 2026</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: '4px 14px', fontSize: 13, color: '#9ca3af' }}>18 min read</span>
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
            Mobile App Marketing Strategy 2026:<br />
            <span style={{ color: '#22c55e' }}>ASO, UA &amp; Growth Hacking</span>
          </h1>
          <p className="reveal" style={{ fontSize: '1.15rem', color: '#9ca3af', lineHeight: 1.7, maxWidth: 680 }}>
            The complete playbook for getting your app discovered, downloaded, and retained in 2026 — covering App Store Optimization, paid user acquisition across Meta, Google UAC and TikTok, referral programs, push notifications, influencer marketing, and the CPI benchmarks you need to know.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: '12px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#22c55e' }}>5M+</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>Apps in stores</div>
            </div>
            <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: '12px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#22c55e' }}>$1.22</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>Avg CPI Android</div>
            </div>
            <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: '12px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#22c55e' }}>77%</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>Users churn day 3</div>
            </div>
            <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: '12px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#22c55e' }}>65%</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>Downloads from search</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <div style={{ maxWidth: 900, margin: '0 auto 48px', padding: '0 24px' }}>
        <div className="reveal" style={{ borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
          <Image
            src="/blog_images/mobile-app-marketing-strategy.jpg"
            alt="Mobile App Marketing Strategy 2026"
            width={900}
            height={480}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </div>
      </div>

      {/* Layout */}
      <div
        className="layout-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 40, maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px', alignItems: 'start' }}
      >
        {/* Article Body */}
        <article className="prose">

          {/* ASO */}
          <section id="aso">
            <h2 className="reveal">App Store Optimization (ASO): Your 24/7 Free Acquisition Engine</h2>
            <p className="reveal">
              With over <strong>65% of app downloads</strong> attributed to search within the App Store and Google Play, ASO is the highest-ROI channel available to any mobile team. Unlike paid channels that stop the moment your budget dries up, a well-optimized listing compounds over time — generating installs on autopilot.
            </p>
            <p className="reveal">
              In 2026, both Apple and Google have significantly expanded their algorithmic signals. Title and subtitle keyword density still matter, but behavioral signals — session length after install, scroll depth in screenshots, ratings velocity — now carry more weight than ever.
            </p>

            <h3 className="reveal">iOS ASO: What Apple&apos;s Algorithm Looks For</h3>
            <p className="reveal">
              Apple ranks apps on keyword relevance (title, subtitle, keyword field — 100 chars max), conversion rate from listing view to install, and rating velocity. The title field carries the most weight; pack your highest-volume keyword here. Use the subtitle for your second-priority keyword cluster and reserve the keyword field for long-tail terms you cannot fit elsewhere.
            </p>
            <div className="reveal data-card">
              <strong style={{ color: '#22c55e', display: 'block', marginBottom: 8 }}>iOS ASO Checklist 2026</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#d1d5db' }}>
                <li>Title (30 chars): Primary keyword + brand name</li>
                <li>Subtitle (30 chars): Secondary keyword cluster</li>
                <li>Keyword field (100 chars): Long-tail, no spaces, comma-separated</li>
                <li>First 3 screenshots must tell the full value story above the fold</li>
                <li>Preview video autoplays muted — design for silent storytelling</li>
                <li>Localize for each market: do not just translate, culturally adapt screenshots</li>
                <li>Respond to every 1–2 star review within 48 hours</li>
              </ul>
            </div>

            <h3 className="reveal">Google Play ASO: Different Rules, Same Goal</h3>
            <p className="reveal">
              Google Play indexes the full short and long description, so strategic keyword placement matters more on Android. Aim for 3–5 mentions of your primary keyword naturally woven into the long description. Google also uses behavioral data from Chrome and Google Search to assess relevance — a strong web presence reinforces your Play Store ranking.
            </p>
            <p className="reveal">
              Feature Graphic (1024×500px) is prominently displayed in Play Store search on some layouts — treat it like a billboard. Unlike iOS, Google allows you to run store listing experiments natively within the Play Console, enabling A/B tests on icon, screenshots, and descriptions without third-party tools.
            </p>

            <h3 className="reveal">Icon Design: The Silent Conversion Driver</h3>
            <p className="reveal">
              Your icon is the first impression before anyone reads a single word. In crowded categories, icons that use <strong>single bold colors</strong> with a simple, recognizable symbol consistently outperform detailed or text-heavy designs. Test at least 3 icon variants before launch — even a 5% improvement in icon CTR can translate to thousands of additional downloads monthly.
            </p>
          </section>

          {/* User Acquisition */}
          <section id="user-acquisition">
            <h2 className="reveal">User Acquisition Channels: Meta, Google UAC &amp; TikTok</h2>
            <p className="reveal">
              Paid UA in 2026 operates in a privacy-first world. Apple&apos;s ATT framework and Google&apos;s phased deprecation of third-party identifiers have fundamentally changed how campaigns are measured. The winners are teams that have invested in first-party data, aggregated measurement (MMP + SKAdNetwork/PPA), and creative-led strategies.
            </p>

            <div className="channel-grid reveal">
              <div className="channel-card">
                <div style={{ fontSize: 28, marginBottom: 8 }}>📘</div>
                <h3 style={{ margin: '0 0 8px', color: '#fff', fontSize: '1rem' }}>Meta App Campaigns</h3>
                <p style={{ margin: 0, color: '#9ca3af', fontSize: 14 }}>Best for: social apps, e-commerce, gaming. Advantage+ App Campaigns uses ML to auto-optimize across all placements. Feed video (4:5) and Reels (9:16) are top performers. Budget: $50–$500/day minimum for algorithm learning.</p>
              </div>
              <div className="channel-card">
                <div style={{ fontSize: 28, marginBottom: 8 }}>🔍</div>
                <h3 style={{ margin: '0 0 8px', color: '#fff', fontSize: '1rem' }}>Google UAC</h3>
                <p style={{ margin: 0, color: '#9ca3af', fontSize: 14 }}>Best for: utility, productivity, finance. Universal App Campaigns bid on tCPA or tROAS across Search, YouTube, Display, and Play. Provide 5+ headlines, 5+ descriptions, and 10+ video/image assets for best results.</p>
              </div>
              <div className="channel-card">
                <div style={{ fontSize: 28, marginBottom: 8 }}>🎵</div>
                <h3 style={{ margin: '0 0 8px', color: '#fff', fontSize: '1rem' }}>TikTok App Ads</h3>
                <p style={{ margin: 0, color: '#9ca3af', fontSize: 14 }}>Best for: consumer apps targeting 18–34. App Campaign objective with TopFeed and In-Feed placements. Creative must feel native — avoid polished brand ads. Plan for 3–5 new creatives per week to combat fatigue.</p>
              </div>
              <div className="channel-card">
                <div style={{ fontSize: 28, marginBottom: 8 }}>🍎</div>
                <h3 style={{ margin: '0 0 8px', color: '#fff', fontSize: '1rem' }}>Apple Search Ads</h3>
                <p style={{ margin: 0, color: '#9ca3af', fontSize: 14 }}>Best for: iOS apps with strong brand awareness. Intent is highest here — users searching your exact category. Average TTR 8–12%, CVR 50–70%. Use exact match keywords + broad match discovery campaigns in tandem.</p>
              </div>
            </div>

            <h3 className="reveal">Creative Strategy in a Privacy-First World</h3>
            <p className="reveal">
              Since signal loss from ATT, creative has become targeting. Your video must self-select the right audience — the hook in the first 3 seconds is everything. Use user-generated content (UGC) style ads: they achieve <strong>4–8× higher CTR</strong> than produced brand videos across TikTok and Meta Reels. Tools like Canva, CapCut, and Runway ML make it fast to iterate.
            </p>
            <p className="reveal">
              Batch-produce creatives in themes: testimonial, problem-solution, feature highlight, lifestyle. Test one variable at a time (hook, format, CTA) to build institutional knowledge about what your audience responds to.
            </p>

            <h3 className="reveal">Mobile Measurement Partners (MMPs)</h3>
            <p className="reveal">
              In 2026, you need an MMP — AppsFlyer, Adjust, or Branch — to deduplicate installs across channels and connect post-install events back to campaigns in an aggregated, privacy-safe way. Without an MMP, you are flying blind. Budget $500–$2,000/month for an MMP depending on install volume.
            </p>
          </section>

          {/* Push Notifications */}
          <section id="push-notifications">
            <h2 className="reveal">Push Notification Strategy: Driving Retention Without Annoying Users</h2>
            <p className="reveal">
              Push notifications remain one of the highest-ROI retention tools available, but they are also the fastest path to uninstalls if misused. The key is transitioning from broadcast to behavioral push: sending the right message at the moment of highest relevance.
            </p>

            <h3 className="reveal">Permission Rate Optimization</h3>
            <p className="reveal">
              On iOS, you have one shot at the permission prompt. Native prompts shown immediately see 30–40% opt-in rates. Apps that first show a custom "pre-permission" modal explaining the value of notifications see 55–70% opt-in. Time this prompt to a moment of clear user value — after a user completes their first key action, not on first launch.
            </p>

            <div className="reveal data-card">
              <strong style={{ color: '#22c55e', display: 'block', marginBottom: 10 }}>Push Notification Best Practices 2026</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#d1d5db' }}>
                <li><strong>Frequency:</strong> 1–3/week for utility apps; up to once daily for content/news apps</li>
                <li><strong>Timing:</strong> Test 10–11am and 6–8pm local time as starting points</li>
                <li><strong>Behavioral triggers:</strong> Cart abandonment, streak reminders, milestone alerts — 3–5× higher CTR than blasts</li>
                <li><strong>Rich push:</strong> Include an image; iOS and Android both support rich notifications that drive 56% higher open rates</li>
                <li><strong>Personalization:</strong> First name + contextual detail (e.g., &quot;Your delivery is 10 min away, Alex&quot;) lifts CTR by 40%</li>
                <li><strong>Sunset policy:</strong> Stop sending to users who have not opened 3 consecutive pushes — re-engage via email instead</li>
              </ul>
            </div>

            <h3 className="reveal">In-App Messaging vs Push</h3>
            <p className="reveal">
              In-app messages reach 100% of active users (no permission needed) and should be used for contextual onboarding tips, feature discovery, and upsell prompts. Pair them with push: use push to bring dormant users back, then in-app messages to guide the session. Tools like Braze, Clevertap, and OneSignal handle both channels in one platform.
            </p>
          </section>

          {/* Referral Programs */}
          <section id="referral">
            <h2 className="reveal">In-App Referral Programs: Turning Users Into a Growth Engine</h2>
            <p className="reveal">
              Referral programs are the most capital-efficient growth channel for mobile apps. When executed well, they generate users with <strong>3–5× higher LTV</strong> than paid acquisition, at 60–80% lower CAC. The referred user trusts the product before they install it — word-of-mouth pre-qualifies intent.
            </p>

            <h3 className="reveal">The Anatomy of a High-Converting Referral Program</h3>
            <p className="reveal">
              The best referral programs share four traits: two-sided rewards (both parties get value), low friction (one tap to share), delayed reward delivery tied to a meaningful in-app action (not just install), and prominent placement within the natural user flow.
            </p>
            <div className="reveal data-card">
              <strong style={{ color: '#22c55e', display: 'block', marginBottom: 10 }}>Referral Program Framework</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#d1d5db' }}>
                <li><strong>Reward for referrer:</strong> Cash credit, premium features, or virtual currency (tie to category)</li>
                <li><strong>Reward for referee:</strong> Extended trial, discount, or bonus credits on first action</li>
                <li><strong>Trigger moment:</strong> Post-purchase, post-achievement, or after receiving value (not on first open)</li>
                <li><strong>Share channels:</strong> WhatsApp, iMessage, and Instagram DM drive highest conversion in 2026</li>
                <li><strong>Tracking:</strong> Deep links (Branch, AppsFlyer OneLink) to attribute install AND in-app action</li>
                <li><strong>Fraud prevention:</strong> Device fingerprinting + minimum session threshold before reward unlock</li>
              </ul>
            </div>

            <h3 className="reveal">Case Study: How Referral Loops Scale</h3>
            <p className="reveal">
              Cash App grew from 1M to 7M users in under 18 months largely on the back of a $5/$5 referral program. The reward was meaningful, the action (sending money) naturally prompted a conversation, and the share moment was baked into the core flow. If your app has a natural social moment, build referral around it.
            </p>
          </section>

          {/* Influencer Marketing */}
          <section id="influencer">
            <h2 className="reveal">Influencer Marketing for Apps: Micro vs Macro in 2026</h2>
            <p className="reveal">
              Influencer marketing for mobile apps has matured significantly. The era of paying a single macro-influencer $50K for one story post is largely over. In 2026, the winning approach combines <strong>micro-influencers</strong> (10K–100K followers) at scale with performance-tracked links and app store attribution.
            </p>

            <h3 className="reveal">Micro-Influencer Strategy</h3>
            <p className="reveal">
              Micro-influencers in niche communities — fitness, personal finance, parenting, travel — deliver <strong>engagement rates 3–8× higher</strong> than macro-influencers and convert at higher rates because their audiences trust them. Budget $200–$2,000 per creator for a dedicated post. Run 10–20 micro-influencers simultaneously for brand saturation within a vertical.
            </p>
            <p className="reveal">
              Use platforms like Grin, Creator.co, or Collabstr to find, contract, and track creators at scale. Each creator gets a unique deep link with UTM parameters — tie installs back to creators in your MMP dashboard.
            </p>

            <h3 className="reveal">TikTok Creator Marketplace</h3>
            <p className="reveal">
              TikTok&apos;s Creator Marketplace has become the most powerful performance influencer channel for consumer apps in 2026. Creators post organic-style content that appears in the For You Page — the best performing posts generate 100K–5M views at $500–$3,000 per creator. The key: give creators creative freedom and brief them on the outcome (downloads, sign-ups), not the script.
            </p>

            <h3 className="reveal">Affiliate Programs for Apps</h3>
            <p className="reveal">
              Beyond one-time posts, consider a performance affiliate program using Impact.com or PartnerStack. Pay creators and media partners on a per-install or per-subscription basis. This shifts risk to the publisher and aligns incentives — you only pay when you win.
            </p>
          </section>

          {/* A/B Testing */}
          <section id="ab-testing">
            <h2 className="reveal">A/B Testing Screenshots, Icons &amp; Metadata</h2>
            <p className="reveal">
              Your App Store listing is a conversion funnel. The average iOS listing converts at 2–3% (views to installs). Improving this to 4–6% through systematic A/B testing doubles your installs from the same organic traffic — effectively cutting your effective CPI in half.
            </p>

            <h3 className="reveal">What to Test and How</h3>
            <p className="reveal">
              <strong>Google Play Console</strong> has a native Store Listing Experiments feature — test icons, screenshots, feature graphics, and short descriptions with 50/50 traffic splits. Results are statistically significant within 7–14 days. On iOS, use <strong>Apple&apos;s Product Page Optimization</strong> (up to 3 treatment groups) for icons and screenshots.
            </p>
            <div className="reveal data-card">
              <strong style={{ color: '#22c55e', display: 'block', marginBottom: 10 }}>A/B Testing Prioritization Matrix</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#d1d5db' }}>
                <li><strong>Icon:</strong> Highest impact — test color palette, style (flat vs 3D), subject matter</li>
                <li><strong>Screenshot 1:</strong> Most viewed; test headline text overlay, benefit vs feature framing</li>
                <li><strong>Screenshot 2–3:</strong> Test social proof vs feature showcase vs lifestyle imagery</li>
                <li><strong>Preview video:</strong> Test with vs without, landscape vs portrait, hook-first vs feature-first</li>
                <li><strong>Short description:</strong> Android only — test benefit-led vs problem-solution framing</li>
                <li><strong>Run time:</strong> Minimum 7 days; wait for 95% statistical significance</li>
              </ul>
            </div>

            <h3 className="reveal">Third-Party ASO Testing Tools</h3>
            <p className="reveal">
              For deeper testing velocity, tools like StoreMaven and SplitMetrics simulate App Store pages outside the store, allowing you to drive paid traffic to mock listings and get directional data in 48–72 hours — far faster than native experiments. Use these to pre-validate concepts before running official tests.
            </p>
          </section>

          {/* Growth Hacking */}
          <section id="growth-hacking">
            <h2 className="reveal">Growth Hacking Tactics: Viral Loops &amp; Unconventional Channels</h2>
            <p className="reveal">
              Beyond paid UA and ASO, the fastest-growing apps in 2026 exploit unconventional growth levers — viral mechanics baked into the product itself, cross-platform content strategies, and community-led growth. These channels have near-zero marginal cost per user once the flywheel is spinning.
            </p>

            <h3 className="reveal">Viral Coefficient: The K-Factor</h3>
            <p className="reveal">
              A viral coefficient (K-factor) above 1.0 means your app grows exponentially without paid spend — each user brings more than one new user. Most apps have a K-factor of 0.1–0.5. To push this above 1.0, you need a product that is inherently social or competitive, a frictionless sharing mechanism, and a compelling reason for the recipient to install.
            </p>
            <div className="reveal data-card">
              <strong style={{ color: '#22c55e', display: 'block', marginBottom: 10 }}>Viral Loop Design Patterns</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#d1d5db' }}>
                <li><strong>Social sharing:</strong> Workout summaries, achievement cards, score screenshots — content users want to share on their own terms</li>
                <li><strong>Collaborative features:</strong> Any feature that requires a second user creates natural acquisition (shared lists, multiplayer, group chats)</li>
                <li><strong>Competition &amp; leaderboards:</strong> Ranking users against friends creates organic re-sharing of results</li>
                <li><strong>Content watermarking:</strong> Exported content with your app branding turns every user into passive distribution (used effectively by CapCut, Canva)</li>
                <li><strong>Invite gates:</strong> Exclusivity (Clubhouse model) drives demand — use carefully; too restrictive kills growth</li>
              </ul>
            </div>

            <h3 className="reveal">App Clips &amp; Instant Apps</h3>
            <p className="reveal">
              Apple App Clips (iOS) and Google Instant Apps (Android) let users experience a lightweight slice of your app without installing — triggered via QR codes, NFC, Safari banners, or Maps. Apps with a natural physical touchpoint (restaurant ordering, rental scooters, parking) see 40–60% install conversion from App Clip users who experience the core value first. Build your App Clip around the single highest-value action.
            </p>

            <h3 className="reveal">Widget Strategy for iOS &amp; Android</h3>
            <p className="reveal">
              Home screen widgets are one of the most underutilized growth tactics in 2026. Apps with engaging widgets — fitness progress, habit tracking, news headlines, countdown timers — see 25–40% better Day-30 retention because the widget creates daily passive brand exposure even when the user does not open the app. Build a widget that surfaces personalized, time-sensitive data for maximum engagement.
            </p>

            <h3 className="reveal">Community-Led Growth: Reddit, Discord &amp; Subreddits</h3>
            <p className="reveal">
              Building a community around your app category — not just your product — creates a flywheel of organic discovery. Apps that seed communities on Reddit (posting genuinely useful content in relevant subreddits), Discord (running a server for power users), and Facebook Groups consistently see 15–25% of their organic traffic from community channels at scale. Assign a community manager from day one; do not outsource this to a bot.
            </p>
          </section>

          {/* Retention */}
          <section id="retention">
            <h2 className="reveal">Retention Marketing: Keeping Users After Day 1</h2>
            <p className="reveal">
              The hard truth of mobile growth: <strong>77% of users churn within 3 days</strong> of install. Day-30 retention averages just 6–9% across categories. Retention is not a post-launch problem — it is architected into your onboarding, notifications, and reward loops from day one.
            </p>

            <h3 className="reveal">Onboarding: The Most Important UX Screen</h3>
            <p className="reveal">
              Users who complete onboarding retain at 3–5× the rate of those who do not. Your onboarding goal is to get users to their &quot;aha moment&quot; — the point where they first experience core value — as fast as possible. Cut every friction point. Social login (Sign in with Apple, Google) reduces onboarding drop-off by 20–40% versus email-password flows.
            </p>
            <p className="reveal">
              Progressive profiling — collecting user data incrementally over multiple sessions rather than at once — improves completion rates by 30–50% and allows personalization to kick in earlier.
            </p>

            <h3 className="reveal">Lifecycle Email + SMS</h3>
            <p className="reveal">
              For apps with user accounts, email is your lifeline to churned users who have push disabled. Build automated lifecycle sequences: Day 1 welcome, Day 3 tip, Day 7 progress summary, Day 14 re-engagement if no session. SMS re-engagement (via Twilio or Attentive) has 98% open rate — reserve for your highest-value offers.
            </p>

            <h3 className="reveal">Gamification &amp; Habit Loops</h3>
            <p className="reveal">
              Streaks (Duolingo), achievement badges, leaderboards, and daily rewards trigger variable-ratio reinforcement — the same psychological mechanism behind social media scrolling. Apps with even lightweight gamification see 20–35% better Day-30 retention. Identify the core action you want users to repeat daily and build a streak or reward around it.
            </p>
          </section>

          {/* CPI Benchmarks */}
          <section id="cpi-benchmarks">
            <h2 className="reveal">Cost Per Install Benchmarks 2026</h2>
            <p className="reveal">
              Understanding CPI benchmarks is critical for setting realistic UA budgets and evaluating channel efficiency. The numbers below reflect global averages — US, UK, and AU will be 2–4× higher; SE Asia and LATAM 30–60% lower.
            </p>

            <div className="reveal" style={{ overflowX: 'auto' }}>
              <table className="benchmark-table">
                <thead>
                  <tr>
                    <th>App Category</th>
                    <th>Android CPI</th>
                    <th>iOS CPI</th>
                    <th>Best Channel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Gaming (Casual)</td><td>$0.40–$0.90</td><td>$0.70–$1.50</td><td>Meta, TikTok</td></tr>
                  <tr><td>Gaming (Mid-Core)</td><td>$1.50–$4.00</td><td>$2.50–$6.00</td><td>Google UAC, YouTube</td></tr>
                  <tr><td>E-Commerce</td><td>$1.20–$3.00</td><td>$2.00–$5.00</td><td>Meta, Google UAC</td></tr>
                  <tr><td>Finance / Fintech</td><td>$4.00–$12.00</td><td>$8.00–$18.00</td><td>Google, Apple Search Ads</td></tr>
                  <tr><td>Health &amp; Fitness</td><td>$1.80–$4.50</td><td>$3.00–$7.00</td><td>Meta, TikTok, Influencer</td></tr>
                  <tr><td>Dating</td><td>$2.50–$6.00</td><td>$4.00–$9.00</td><td>Meta, Snapchat</td></tr>
                  <tr><td>Food Delivery</td><td>$1.50–$3.50</td><td>$2.50–$5.50</td><td>Google, Referral</td></tr>
                  <tr><td>Productivity</td><td>$1.00–$2.50</td><td>$1.80–$4.00</td><td>Apple Search Ads, Google</td></tr>
                  <tr><td>Education</td><td>$1.80–$5.00</td><td>$3.00–$8.00</td><td>Meta, TikTok</td></tr>
                </tbody>
              </table>
            </div>

            <div className="reveal data-card" style={{ marginTop: 24 }}>
              <strong style={{ color: '#22c55e', display: 'block', marginBottom: 8 }}>CPI vs CPEU: The Metric That Actually Matters</strong>
              <p style={{ margin: 0, color: '#d1d5db', lineHeight: 1.7 }}>
                Cost Per Engaged User (CPEU) — users who complete onboarding or reach your activation milestone — is the metric that correlates with LTV, not raw CPI. An app paying $0.60 CPI with 5% activation has an effective CPEU of $12. An app paying $2.50 CPI with 40% activation has a CPEU of $6.25. Always optimize for downstream events, not top-of-funnel installs.
              </p>
            </div>

            <h3 className="reveal">Budget Allocation Framework</h3>
            <p className="reveal">
              A typical growth-stage app allocates UA budget across channels: <strong>40% Meta</strong> (broadest reach, best creative testing), <strong>25% Google UAC</strong> (intent-driven, YouTube scale), <strong>15% TikTok</strong> (emerging, high ROAS for right categories), <strong>10% Apple Search Ads</strong> (high intent, iOS-specific), <strong>10% influencer/affiliate</strong> (brand building + performance). Adjust quarterly based on ROAS data.
            </p>
          </section>

          {/* Launch Strategy */}
          <section id="launch-strategy">
            <h2 className="reveal">App Launch Strategy: The First 90 Days</h2>
            <p className="reveal">
              The launch window is the highest-stakes period in your app&apos;s lifecycle. App Store and Google Play algorithms give extra weight to installs, ratings, and engagement velocity in the first weeks — a strong launch creates momentum that compounds for months. A poorly executed launch can bury your app in the rankings before you have had a chance to find product-market fit.
            </p>

            <h3 className="reveal">Pre-Launch: Building an Audience Before Day 1</h3>
            <p className="reveal">
              The best launches are won in the 60–90 days before the app goes live. Create a landing page capturing email sign-ups with an early access incentive (first-month free, exclusive feature unlock). Build a waitlist — 1,000+ signups before launch gives you a Day 1 burst that signals quality to the algorithm. Seed beta testers via TestFlight (iOS) and Google Play Open Testing who will leave reviews and surface UX issues before launch day.
            </p>
            <div className="reveal data-card">
              <strong style={{ color: '#22c55e', display: 'block', marginBottom: 10 }}>Pre-Launch Checklist (60 Days Out)</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#d1d5db' }}>
                <li>Create a landing page with email capture and early access CTA</li>
                <li>Build social media presence (TikTok, Instagram) with behind-the-scenes content</li>
                <li>Recruit 50–200 beta testers from your target community (Reddit, Facebook Groups)</li>
                <li>Prepare ASO-optimized listing copy, screenshots, and preview video</li>
                <li>Set up MMP (AppsFlyer/Adjust) and configure post-install events before launch</li>
                <li>Outreach to app review sites: AppAdvice, 148Apps, Product Hunt Mobile</li>
                <li>Line up 5–10 micro-influencer posts to go live within the first 48 hours</li>
                <li>Configure push notification permission flow and onboarding sequence</li>
              </ul>
            </div>

            <h3 className="reveal">Launch Day Execution</h3>
            <p className="reveal">
              On launch day, activate all channels simultaneously to create maximum install velocity. Email your waitlist, publish influencer posts, start paid UA campaigns (even at minimum spend — you need data fast), and post on Product Hunt and relevant communities. Send a personalized outreach to journalists covering your category with a hook angle — &quot;the app that&hellip;&quot; framing works better than press release language.
            </p>
            <p className="reveal">
              Target your first 100 reviews within 7 days — a 4.5+ rating with volume establishes credibility for the algorithm and for organic visitors. Proactively ask satisfied early users (identified by in-app sentiment surveys or behavioral signals) to leave a review using SKStoreReviewAPI (iOS) or Google Play In-App Review API.
            </p>

            <h3 className="reveal">Days 7–90: Optimizing for Retention and LTV</h3>
            <p className="reveal">
              After launch week euphoria fades, focus shifts to cohort retention analysis. Look at Day-1, Day-3, Day-7, and Day-14 retention for your launch cohort and identify where users are dropping off. Prioritize fixing the biggest drop-off point before scaling paid UA — acquiring more users into a leaky funnel accelerates cash burn without proportional revenue growth.
            </p>
            <p className="reveal">
              In months 2 and 3, begin building out your ASO keyword strategy based on actual search terms driving installs (available in App Store Connect and Google Play Console). Double down on the UA channels delivering the lowest CPEU and pause underperformers. Begin testing referral mechanics once you have at least 5,000 active users to seed the loop.
            </p>
          </section>

          {/* Analytics & Measurement */}
          <section id="analytics-measurement">
            <h2 className="reveal">App Marketing Analytics: Measuring What Matters</h2>
            <p className="reveal">
              Effective mobile marketing in 2026 requires a measurement stack that can attribute installs and in-app events across channels in a privacy-compliant way, then feed those insights back into campaign optimization. Without the right measurement infrastructure, budget decisions are guesswork.
            </p>

            <h3 className="reveal">The Essential Mobile Marketing Analytics Stack</h3>
            <div className="reveal data-card">
              <strong style={{ color: '#22c55e', display: 'block', marginBottom: 10 }}>Recommended Tools by Function</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#d1d5db' }}>
                <li><strong>MMP:</strong> AppsFlyer, Adjust, or Branch — cross-channel attribution, SKAN 4 / PPA measurement, fraud protection</li>
                <li><strong>Product analytics:</strong> Amplitude or Mixpanel — funnel analysis, cohort retention, feature adoption tracking</li>
                <li><strong>Push &amp; lifecycle:</strong> Braze, CleverTap, or OneSignal — behavioral triggers, segmentation, A/B testing</li>
                <li><strong>ASO analytics:</strong> Sensor Tower, data.ai, or AppFollow — keyword rankings, competitor tracking, review monitoring</li>
                <li><strong>Creative analytics:</strong> Motionapp or Varos — ad creative performance, benchmark against competitors</li>
                <li><strong>CDP:</strong> Segment — unify MMP, product, and CRM data into a single user record</li>
              </ul>
            </div>

            <h3 className="reveal">SKAdNetwork 4 &amp; Privacy-Preserving Attribution</h3>
            <p className="reveal">
              SKAdNetwork 4 (SKAN 4) is now the primary attribution mechanism for iOS in 2026. It provides aggregated, delayed campaign-level data — no user-level data, no real-time reporting. Key SKAN 4 improvements over v3 include: hierarchical conversion values (fine-grained + coarse values), crowd anonymity threshold relaxation for higher-traffic campaigns, and web-to-app attribution support.
            </p>
            <p className="reveal">
              To maximize SKAN 4 insight, map your conversion values to business-critical post-install events — registration, first purchase, subscription start — not just opens. Work with your MMP to use predictive LTV modeling (Adjust&apos;s Predicted LTV, AppsFlyer&apos;s SKAN Smart Model) to compensate for the measurement delay.
            </p>

            <h3 className="reveal">Creative Reporting: Understanding What Converts</h3>
            <p className="reveal">
              Creative is now the primary lever for paid UA performance — more important than audience targeting in a post-ATT world. Build a systematic creative reporting process: track CTR, IPM (installs per 1000 impressions), CPI, and D7 ROAS for every creative variant. Retire creatives when CTR drops 30% below their peak (creative fatigue signal). Maintain a creative bank of at least 20 active variants per channel to give the algorithm sufficient breadth.
            </p>
            <div className="reveal data-card">
              <strong style={{ color: '#22c55e', display: 'block', marginBottom: 10 }}>Creative Performance KPIs to Track</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#d1d5db' }}>
                <li><strong>Hook Rate:</strong> % of viewers who watch past 3 seconds — benchmark: 25–40%</li>
                <li><strong>Hold Rate:</strong> % who watch to 75% completion — benchmark: 15–30%</li>
                <li><strong>CTR:</strong> Click-through rate — benchmark: 1–3% for video, 0.5–1.5% for static</li>
                <li><strong>IPM:</strong> Installs per 1,000 impressions — strong creative: 3–8+ IPM</li>
                <li><strong>D7 ROAS:</strong> Revenue in 7 days / spend — target: 0.3–0.6 for subscription apps</li>
                <li><strong>Creative lifespan:</strong> Most video creatives peak within 7–14 days; plan refresh cycles accordingly</li>
              </ul>
            </div>

            <h3 className="reveal">Marketing Automation: Lifecycle Triggers That Scale</h3>
            <p className="reveal">
              Marketing automation allows a small team to run personalized, behavior-driven communication at scale. Key automation flows every app should have in 2026: (1) <strong>Onboarding sequence</strong> — push Day 1, email Day 3, in-app message Day 5 if user has not reached the activation milestone; (2) <strong>Engagement drop alert</strong> — trigger push + email when a user&apos;s session frequency drops below their historical average; (3) <strong>Milestone celebration</strong> — congratulate users on achievements with a share prompt; (4) <strong>Re-engagement campaign</strong> — 14 days of inactivity triggers a &quot;We miss you&quot; sequence with a compelling reason to return.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="reveal">Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', background: 'none', border: 'none', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: 12 }}
                  >
                    <span style={{ color: '#fff', fontSize: 15, fontWeight: 600, textAlign: 'left' }}>{faq.q}</span>
                    <span style={{ color: '#22c55e', fontSize: 20, flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 20px 18px', color: '#9ca3af', lineHeight: 1.7, fontSize: 15 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Key Takeaways */}
          <section id="key-takeaways" style={{ marginTop: 56 }}>
            <h2 className="reveal">Key Takeaways: Your 2026 App Marketing Priorities</h2>
            <p className="reveal">
              Mobile app marketing in 2026 is more complex than ever — more channels, more privacy restrictions, more competition — but the fundamentals remain: get discovered, convert browsers to installers, and retain the users you work hard to acquire.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginTop: 16 }}>
              {[
                { icon: '🏪', title: 'ASO First', desc: 'Fix your listing before spending a dollar on paid UA. 65% of installs come from search.' },
                { icon: '🎬', title: 'Creative is Targeting', desc: 'In a privacy-first world, your video hook does the audience selection. Invest in creative production.' },
                { icon: '🔔', title: 'Behavioral Push', desc: 'Replace scheduled blasts with trigger-based notifications. 3–5× CTR uplift guaranteed.' },
                { icon: '🤝', title: 'Build Referral Early', desc: 'Referred users have 3–5× higher LTV. Build the referral loop at launch, not as an afterthought.' },
                { icon: '📊', title: 'Measure Everything', desc: 'Set up your MMP before you spend your first UA dollar. Attribution is the foundation of efficiency.' },
                { icon: '🔄', title: 'Retention Over Acquisition', desc: 'Improving Day-30 retention from 6% to 10% is worth more than doubling your UA budget.' },
                { icon: '🚀', title: 'Launch with a Waitlist', desc: 'Pre-build an audience of 1,000+ emails before launch. Day-1 velocity signals quality to the algorithm.' },
                { icon: '🌟', title: 'Micro over Macro', desc: 'Micro-influencers (10K–100K) deliver 3–8× higher engagement and better install conversion than mega-influencers.' },
                { icon: '⚡', title: 'Bake in Virality', desc: 'Design social sharing moments into the product flow — shareable results, leaderboards, or collaborative features.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '16px' }}>
                  <div style={{ fontSize: 24, marginBottom: 6 }}>{item.icon}</div>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 100%)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 28, padding: '40px 32px', marginTop: 56, textAlign: 'center' }}>
            <h2 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 800, marginBottom: 12 }}>Ready to Launch &amp; Grow Your App?</h2>
            <p style={{ color: '#9ca3af', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.6 }}>
              Codazz builds and markets mobile apps that grow. From ASO setup to paid UA strategy, our team has the full-stack growth expertise to help you scale.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', background: '#22c55e', color: '#000', fontWeight: 700, fontSize: 16, padding: '14px 36px', borderRadius: 14, textDecoration: 'none' }}>
              Get a Free Growth Strategy Call
            </Link>
          </div>

          {/* Related Posts */}
          <div style={{ marginTop: 64 }}>
            <h2 className="reveal" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: 20 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
              {relatedPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '20px', transition: 'border-color 0.2s' }}>
                    <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 600, textTransform: 'uppercase' }}>{p.category}</span>
                    <h3 style={{ color: '#fff', fontSize: 15, fontWeight: 600, margin: '8px 0 6px', lineHeight: 1.4 }}>{p.title}</h3>
                    <span style={{ fontSize: 13, color: '#6b7280' }}>{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* TOC Sidebar */}
        <aside className="toc-sidebar" style={{ position: 'sticky', top: 100 }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '20px 16px' }}>
            <p style={{ color: '#6b7280', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Table of Contents</p>
            <nav>
              {tocSections.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`toc-link${activeSection === s.id ? ' active' : ''}`}
                >
                  <span>{s.emoji}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: '24px 20px', marginTop: 24, textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>📈</div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Grow Your App Fast</p>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: 16, lineHeight: 1.5 }}>We build and market apps that scale. Let&apos;s talk strategy.</p>
            <Link href="/contact" style={{ display: 'block', background: '#22c55e', color: '#000', fontWeight: 700, fontSize: 14, padding: '10px 0', borderRadius: 10, textDecoration: 'none' }}>
              Talk to Us
            </Link>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px', marginTop: 20 }}>
            <p style={{ color: '#6b7280', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Quick Stats</p>
            {[
              { label: 'Avg CPI (Android)', value: '$1.22' },
              { label: 'Avg CPI (iOS)', value: '$1.86' },
              { label: 'Day-30 Retention', value: '6–9%' },
              { label: 'ASO Downloads', value: '65%' },
              { label: 'UGC CTR Lift', value: '4–8×' },
              { label: 'Referral LTV Lift', value: '3–5×' },
              { label: 'Micro-influencer ER', value: '3–8×' },
              { label: 'Onboarding boost (retention)', value: '3–5×' },
              { label: 'Push opt-in (pre-prompt)', value: '55–70%' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: i < 7 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <span style={{ color: '#9ca3af', fontSize: 12 }}>{stat.label}</span>
                <span style={{ color: '#22c55e', fontSize: 12, fontWeight: 700 }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
