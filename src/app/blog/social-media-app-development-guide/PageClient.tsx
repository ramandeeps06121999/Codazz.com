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
  { id: 'core-features', label: 'Core Features', emoji: '⚙️' },
  { id: 'tech-stack', label: 'Tech Stack Choices', emoji: '🛠️' },
  { id: 'content-algorithm', label: 'Content Algorithm', emoji: '🤖' },
  { id: 'auth-profiles', label: 'Auth & Profiles', emoji: '👤' },
  { id: 'content-moderation', label: 'Content Moderation', emoji: '🛡️' },
  { id: 'monetization', label: 'Monetization', emoji: '💵' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'timeline', label: 'Development Timeline', emoji: '📅' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'dating-app-development-guide', title: 'How to Build a Dating App Like Tinder in 2026', category: 'Mobile', readTime: '13 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '10 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026: The Complete Guide', category: 'AI/ML', readTime: '18 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a social media app?',
    a: 'Building a social media app ranges from $100,000 for a focused MVP to $500,000+ for a full-featured platform with video feeds, live streaming, and AI moderation. The primary cost drivers are the content algorithm (machine learning infrastructure), real-time messaging, video processing (reels/shorts), and content moderation systems. A TikTok-style short video app costs more than a text-first platform like Threads because of video transcoding, CDN delivery, and recommendation model training.',
  },
  {
    q: 'How long does it take to build a social media app?',
    a: 'A focused social media MVP takes 5-7 months. A platform with short-form video, live streaming, stories, messaging, and a content algorithm takes 12-18 months. The recommendation algorithm alone requires 2-3 months of model training and A/B testing after launch before it performs well. Budget for ongoing ML model improvement post-launch — the algorithm never stops being built.',
  },
  {
    q: 'What technology powers TikTok-style video feeds?',
    a: 'Short-video feeds require a pipeline of: mobile upload (compressed at the client), server-side transcoding into multiple resolutions (360p, 720p, 1080p) using FFmpeg or AWS MediaConvert, storage on S3/GCS, CDN delivery via CloudFront or Akamai for sub-second playback, and a Redis-cached ranked feed per user updated every few minutes. The recommendation engine typically uses a two-tower neural network model trained on engagement signals (watch time, replays, shares, comments).',
  },
  {
    q: 'How do social media apps handle content moderation at scale?',
    a: 'Modern social media apps layer multiple moderation approaches: automated AI scanning (AWS Rekognition, Google Vision API, or PhotoDNA for CSAM) runs on every upload before it goes live; user reporting feeds into a human review queue prioritized by severity and viral potential; and repeat-offender signals auto-restrict accounts. A newly launched app should enforce strict upload policies and human review everything above a low viral threshold until the AI model is trained on your platform\'s specific content patterns.',
  },
  {
    q: 'What is the best monetization strategy for a new social media app?',
    a: 'For a new social media app, avoid ads until you have 100,000+ monthly active users — empty ad inventory damages the experience. Start with creator subscriptions (fans pay creators monthly for exclusive content) and a tipping/gifting system during live streams. These feel native, share revenue with creators (which drives creator acquisition), and do not require an ad sales team. Once you reach scale, layered in-feed ads with CPM pricing become your primary revenue engine. Snapchat, YouTube, and Instagram all followed this playbook.',
  },
];

export default function SocialMediaAppDevelopmentGuideClient() {
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

        {/* FEATURED IMAGE */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/social-media-app-development-guide.jpg"
              alt="social media app development guide 2026"
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '5px 14px', borderRadius: 100 }}>Mobile</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                15 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 900 }}>
              How to Build a Social Media App in 2026: From TikTok to Threads
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              Feed algorithms, short-form video, live streaming, content moderation, and monetization. The complete engineering playbook for building a social media platform that scales from zero to millions.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, color: '#22c55e' }}>CE</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Codazz Engineering</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Engineering Team, Codazz</p>
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
                    Social Media Market Overview 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Social media is not a saturated market — it is a fragmented one. The global social media market is valued at $231 billion in 2026, and over 5.2 billion people use at least one social platform. Yet despite the dominance of Meta, TikTok, and YouTube, niche social networks are growing faster than the incumbents. BeReal hit 100M users in 18 months. Threads reached 100M sign-ups in 5 days. Discord has become the default community layer for gaming, crypto, and creator communities.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The opportunity in 2026 is not to build another general-purpose social network. It is to own a community vertical: professional networking for a specific industry, creator platforms with direct monetization, social layers for existing products (fitness apps, learning platforms, gaming), or regional social networks in markets that global players underserve. Every vertical social network that breaks 1M engaged users becomes an extremely defensible business.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12, marginBottom: 24 }}>
                    {[
                      { stat: '5.2B', label: 'Social media users worldwide' },
                      { stat: '$231B', label: 'Global social media market size' },
                      { stat: '2.5h', label: 'Average daily time spent on social media' },
                      { stat: '68%', label: 'Gen Z prefers video-first platforms' },
                      { stat: '$72B', label: 'Social commerce market in 2026' },
                      { stat: '42%', label: 'Creators earn via social platform tips/subs' },
                    ].map(item => (
                      <div key={item.stat} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.1)', textAlign: 'center' }}>
                        <p style={{ fontSize: 28, fontWeight: 800, color: '#22c55e', margin: '0 0 4px', letterSpacing: '-0.04em' }}>{item.stat}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.4 }}>{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Key Insight:</strong> Short-form video accounts for 82% of all internet traffic in 2026. If your social media app does not have a video-first feed, you are building for a shrinking audience. Even text-first platforms like Threads and Bluesky are now integrating video carousels into their timelines.
                    </p>
                  </div>
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features to Build
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Every social media platform is differentiated by the combination of features it implements and how well they interlock. Here is an engineering-level breakdown of each key feature category:
                  </p>

                  {/* Feed Algorithm */}
                  <div style={{ marginBottom: 36 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>📡</span>
                      Feed Algorithm
                    </h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                      The feed is your product's core loop. A chronological feed is the simplest to build but produces the worst engagement. An algorithmic feed requires a recommendation pipeline that scores every candidate post against the user's interest graph and engagement history in real time. For new platforms, start with a hybrid: show a weighted mix of followed accounts (80%) plus algorithmically surfaced discovery content (20%), and increase the discovery ratio as your model improves.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 10 }}>
                      {[
                        { name: 'Candidate Generation', desc: 'Pull posts from followed accounts, trending hashtags, and interest clusters. Narrow from millions to ~1,000 candidates per user per feed refresh.' },
                        { name: 'Ranking & Scoring', desc: 'Score each candidate with a neural model trained on watch time, likes, comments, shares, saves, and profile clicks. Filter out seen and low-quality posts.' },
                        { name: 'Real-time Signals', desc: 'Inject trending content (last 6 hours) and breaking topics with a recency boost. Prevent filter bubbles with diversity sampling across creators.' },
                        { name: 'Personalization Store', desc: 'Store user interest embeddings in a vector database (Pinecone, Weaviate) for sub-100ms retrieval. Update embeddings asynchronously after each session.' },
                      ].map(item => (
                        <div key={item.name} style={{ padding: '14px 18px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <p style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', margin: '0 0 6px' }}>{item.name}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.55 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stories */}
                  <div style={{ marginBottom: 36 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🌀</span>
                      Stories
                    </h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                      Stories (24-hour ephemeral content) drive daily active usage because they create a daily obligation — you need to check before they disappear. Stories require a separate content pipeline from the main feed: client-side compression, server-side transcoding to HLS for smooth playback, viewer tracking, and automatic deletion at 24 hours. Add stickers, polls, questions, and link overlays to maximize creator engagement.
                    </p>
                  </div>

                  {/* Reels / Shorts */}
                  <div style={{ marginBottom: 36 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🎬</span>
                      Reels / Short-Form Video
                    </h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                      Short-form video is the highest-engagement content type in 2026. Building a TikTok-style vertical video feed requires: client-side video capture with optional in-app editing (trim, speed, filter, text overlay, audio overlay), upload with client-side compression, server-side FFmpeg transcoding into HLS format at multiple resolutions (360p, 720p, 1080p), adaptive bitrate streaming via CDN, and infinite scroll feed with preloading. The engineering complexity is 3-5x higher than a photo feed.
                    </p>
                    <div style={{ padding: '18px 22px', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: 12 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>Video Processing Pipeline</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {['Client Capture', 'H.264 Compress', 'Upload to S3', 'FFmpeg Transcode', 'HLS Packaging', 'CloudFront CDN', 'Adaptive Streaming', 'Pre-buffer Next Video'].map(step => (
                          <span key={step} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: 100 }}>{step}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Messaging */}
                  <div style={{ marginBottom: 36 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>💬</span>
                      Direct Messaging
                    </h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                      Real-time messaging requires WebSocket connections for instant delivery, message persistence in a purpose-built store (Cassandra or DynamoDB for horizontal write scaling), read receipts and delivery status, media sharing (images, videos, audio messages, GIFs), and group conversations. End-to-end encryption using the Signal Protocol is now expected by privacy-conscious users and becoming a legal requirement in some jurisdictions.
                    </p>
                  </div>

                  {/* Live Streaming */}
                  <div style={{ marginBottom: 36 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>📺</span>
                      Live Streaming
                    </h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                      Live streaming is a monetization engine, not just a feature. Twitch generates hundreds of millions in revenue through live stream gifting alone. Building live streaming requires: RTMP ingest (OBS, mobile app), server-side transcoding with AWS IVS or Mux, ultra-low-latency playback (under 3 seconds), real-time comment/reaction overlay, viewer count, and gifting/tipping mechanics during streams. Co-streaming (two creators simultaneously) is a growth feature to add post-launch.
                    </p>
                  </div>

                  {/* Push Notifications */}
                  <div style={{ marginBottom: 12 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🔔</span>
                      Push Notifications
                    </h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      Push notifications are your re-engagement engine. Social notification events include: new follower, like, comment, mention, DM received, live stream started by a followed creator, story posted, and trending posts in interests. Use Firebase Cloud Messaging (FCM) for Android and APNs for iOS. Implement notification preferences so users can silence categories without turning off all notifications — over-notification is the number one reason users disable notifications entirely.
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Tech Stack Choices
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Social media platforms are among the most technically demanding products to build. Every layer of the stack has to handle spikes — a viral post can generate 10,000x normal traffic in seconds. Here are the right tools for each layer:
                  </p>

                  {/* Mobile: React Native vs Flutter */}
                  <div style={{ marginBottom: 28 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>React Native vs Flutter for Social Apps</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 16 }}>
                      {[
                        {
                          name: 'React Native',
                          badge: 'Recommended',
                          color: '#22c55e',
                          pros: ['Larger ecosystem of social/media libraries', 'Native camera and video APIs mature', 'JavaScript enables fast iteration', 'Expo simplifies OTA updates', 'Larger talent pool, lower team cost'],
                          cons: ['Heavier animation can need native modules', 'Video list performance needs tuning'],
                        },
                        {
                          name: 'Flutter',
                          badge: 'Strong Alternative',
                          color: '#3b82f6',
                          pros: ['Silky 60/120fps animations by default', 'Consistent UI pixel-perfect across devices', 'Excellent for stories and transition effects', 'Strong performance for media-heavy UIs'],
                          cons: ['Smaller social media library ecosystem', 'Dart learning curve for web devs', 'Larger app binary size'],
                        },
                      ].map(item => (
                        <div key={item.name} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}20` }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h4>
                            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.color, background: `${item.color}15`, padding: '3px 10px', borderRadius: 100 }}>{item.badge}</span>
                          </div>
                          <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>Pros</p>
                          <div style={{ marginBottom: 14 }}>
                            {item.pros.map(p => (
                              <div key={p} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 4 }}>
                                <span style={{ color: item.color, flexShrink: 0, marginTop: 2, fontSize: 12 }}>✓</span>
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{p}</span>
                              </div>
                            ))}
                          </div>
                          <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>Cons</p>
                          {item.cons.map(c => (
                            <div key={c} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 4 }}>
                              <span style={{ color: '#ef4444', flexShrink: 0, marginTop: 2, fontSize: 12 }}>✗</span>
                              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{c}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Full stack table */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { layer: 'Backend API', tech: 'Node.js (NestJS) or Go', why: 'NestJS for rapid feature development and type safety. Go for high-concurrency services (notification fanout, feed generation) that must handle millions of events per second.' },
                      { layer: 'Real-time Layer', tech: 'WebSockets + Socket.io / Ably', why: 'WebSocket connections for DMs, live comment streams, and notification delivery. Ably or Pusher simplify connection management at scale vs self-hosted Socket.io.' },
                      { layer: 'Primary Database', tech: 'PostgreSQL', why: 'User accounts, follows graph, posts metadata, and comments. Use read replicas and connection pooling (PgBouncer) to handle read-heavy social workloads.' },
                      { layer: 'Feed & Cache Layer', tech: 'Redis + Redis Sorted Sets', why: 'Store pre-computed ranked feeds per user in Redis Sorted Sets. Update feeds asynchronously on post creation. Sub-10ms feed reads at any scale.' },
                      { layer: 'Message Storage', tech: 'Apache Cassandra / DynamoDB', why: 'Wide-column stores are optimal for messaging: append-only writes, fast reads by conversation ID, and horizontal scaling across billions of messages.' },
                      { layer: 'Search', tech: 'Elasticsearch / OpenSearch', why: 'Full-text search across users, hashtags, and posts. Powers @mention autocomplete, hashtag feeds, and trending topic detection in near real time.' },
                      { layer: 'Video & Media CDN', tech: 'AWS S3 + CloudFront / Cloudflare Stream', why: 'Store uploaded videos and images on S3. Cloudflare Stream handles video transcoding and adaptive HLS delivery globally. Cloudfront for static assets.' },
                      { layer: 'Push Notifications', tech: 'Firebase Cloud Messaging + APNs', why: 'FCM for Android and APNs for iOS. Use a notification service (OneSignal or custom) to fanout notifications to millions of devices with topic-based batching.' },
                      { layer: 'ML / Recommendation', tech: 'Python + TensorFlow + Redis', why: 'Two-tower recommendation model trained on user-content interaction pairs. Serve recommendations via a Python FastAPI microservice with embeddings cached in Redis.' },
                      { layer: 'Vector Database', tech: 'Pinecone / Weaviate', why: 'Store user interest embeddings and content embeddings for fast nearest-neighbor retrieval. Powers "for you" discovery and related content suggestions.' },
                    ].map(item => (
                      <div key={item.layer} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', margin: '0 0 8px' }}>{item.layer}</p>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.tech}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Algorithm Basics */}
                <div className="reveal" style={{ marginBottom: 56 }} id="content-algorithm">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Content Algorithm Basics
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The recommendation algorithm is what separates social platforms that feel addictive from those that feel like a chore. You do not need TikTok's billion-parameter model at launch. You need a system that improves continuously from day one. Here is how to build it in stages:
                  </p>
                  <div style={{ display: 'grid', gap: 16 }}>
                    {[
                      {
                        phase: 'Phase 1: Launch (0-10K users)',
                        color: '#22c55e',
                        desc: 'Use a simple engagement-weighted ranking formula. Score each post by: (likes × 1) + (comments × 3) + (shares × 5) + (saves × 4), decayed by time. Recency beats engagement for the first 6 hours. No ML required — just arithmetic that you can tune based on what you observe.',
                      },
                      {
                        phase: 'Phase 2: Scale (10K-500K users)',
                        color: '#3b82f6',
                        desc: 'Introduce user-content affinity scoring. Track which content categories each user engages with and weight those categories higher in their feed. Use collaborative filtering: "users similar to you also engaged with this." Train a basic matrix factorization model on engagement data weekly.',
                      },
                      {
                        phase: 'Phase 3: Personalization (500K+ users)',
                        color: '#a855f7',
                        desc: 'Deploy a two-tower neural network: one tower encodes users (interest history, demographics, device, time of day), the other encodes content (creator features, content tags, historical engagement rate). Retrain weekly. Serve via a low-latency recommendation API. Add diversity sampling to prevent echo chambers.',
                      },
                    ].map(item => (
                      <div key={item.phase} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}20`, borderLeft: `3px solid ${item.color}` }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: item.color, margin: '0 0 10px' }}>{item.phase}</p>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 20, padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>The algorithm's north star metric</strong> should be "quality watch time" or "meaningful interactions" — not raw engagement. Optimizing for raw clicks leads to outrage and controversy dominating feeds, which degrades the platform's health long-term. Define your engagement metric carefully before training your first model.
                    </p>
                  </div>
                </div>

                {/* Auth & Profiles */}
                <div className="reveal" style={{ marginBottom: 56 }} id="auth-profiles">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    User Authentication & Profiles
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Registration and profile setup are the first 5 minutes of the user experience — and where 60% of new users drop off. Minimize friction and delay value delivery.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 24 }}>
                    {[
                      { feature: 'Phone / Email Registration', desc: 'Offer both. Phone number with OTP has higher completion rates on mobile. Email for users who value privacy.' },
                      { feature: 'Social OAuth (Google, Apple)', desc: 'Mandatory on iOS (Apple Sign-In is required if you offer any third-party auth). Reduces sign-up to two taps.' },
                      { feature: 'Username Availability Check', desc: 'Real-time username validation with suggestions. Allow underscores, dots. Reserve brand and profanity lists.' },
                      { feature: 'Interest Onboarding', desc: 'Ask users to pick 5+ interest categories during onboarding to cold-start the recommendation algorithm with non-empty data.' },
                      { feature: 'Profile Customization', desc: 'Avatar, bio, website link, pronouns, location (optional), verified badge logic. Creator profiles need extended fields: media kit, booking link, stats.' },
                      { feature: 'Follow Graph', desc: 'Follow / unfollow with instant UI feedback. Mutual follow detection for "friends." Follower/following lists with search. Block and mute functionality.' },
                      { feature: '2FA / Security', desc: 'SMS OTP and authenticator app support. Login notifications. Active sessions management. Account recovery flows.' },
                      { feature: 'Privacy Controls', desc: 'Public, followers-only, close friends content visibility. Profile privacy settings. DM restrictions. Content visibility on search.' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Moderation */}
                <div className="reveal" style={{ marginBottom: 56 }} id="content-moderation">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Content Moderation: Building Safe at Scale
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Content moderation is not optional — it is a legal requirement and a product health necessity. Platforms that fail at moderation lose advertiser trust, app store placement, and eventually users. Build moderation infrastructure before you launch publicly.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        layer: 'Pre-upload Scanning',
                        priority: 'Critical',
                        desc: 'Scan every image and video before it becomes visible. Use AWS Rekognition, Google Vision SafeSearch, or Microsoft Azure Content Moderator to detect nudity, graphic violence, and hate symbols. PhotoDNA (Microsoft) is mandatory for CSAM detection — this is a legal requirement. Reject or flag content before it enters your platform.',
                      },
                      {
                        layer: 'AI Text Moderation',
                        priority: 'Critical',
                        desc: 'Use OpenAI Moderation API, AWS Comprehend, or Perspective API (Google) to score text toxicity in captions, bios, and comments. Set thresholds for auto-reject (>95% confidence), auto-flag for human review (60-95%), and pass-through (<60%). Multilingual moderation is required if your app supports non-English content.',
                      },
                      {
                        layer: 'User Reporting',
                        priority: 'High',
                        desc: 'Every post, comment, profile, and DM must be reportable. Report categories: spam, harassment, misinformation, self-harm, violence, nudity, CSAM. Reports feed into a prioritized queue (viral content with reports = higher priority). Build an internal review dashboard before launch.',
                      },
                      {
                        layer: 'Account-Level Actions',
                        priority: 'High',
                        desc: 'Strike system: 1 strike = warning, 2 = content restriction, 3 = temporary suspension, 4 = permanent ban. Shadow ban for spam accounts (content visible to themselves but not others). Phone number verification gate after first strike.',
                      },
                      {
                        layer: 'Appeals Process',
                        priority: 'Medium',
                        desc: 'Every moderation action must have an appeal path. Required by EU Digital Services Act for platforms over 45M monthly users. Build a simple appeals queue from day one — retrofitting it later is painful.',
                      },
                    ].map(item => (
                      <div key={item.layer} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.layer}</h3>
                          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.priority === 'Critical' ? '#ef4444' : item.priority === 'High' ? '#f59e0b' : '#22c55e', background: item.priority === 'Critical' ? 'rgba(239,68,68,0.1)' : item.priority === 'High' ? 'rgba(245,158,11,0.1)' : 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: 100 }}>{item.priority}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Monetization */}
                <div className="reveal" style={{ marginBottom: 56 }} id="monetization">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Monetization Options
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Social media monetization is a sequencing game. Build the audience first, then layer in revenue. The biggest mistake founders make is plastering ads on a platform with under 500K MAU — it degrades the experience before you have the density for meaningful ad revenue. Here is the right sequence:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { model: 'In-Feed Advertising', revenue: 'CPM $5-$25', stage: 'Scale (1M+ MAU)', desc: 'Native in-feed ads that match the format of organic content. Video ads, image ads, story ads. Requires an ad server, targeting system, and auction engine. Build or use Meta Audience Network / Google AdMob.' },
                      { model: 'Creator Subscriptions', revenue: '$4.99-$19.99/month', stage: 'Early (100K+ MAU)', desc: 'Fans pay creators monthly for exclusive content, subscriber-only posts, badges in live streams, and early access. Platform takes 20-30%. YouTube, TikTok, and Patreon run on this model.' },
                      { model: 'Live Stream Gifting / Tips', revenue: '20-30% platform cut', stage: 'Early (10K+ MAU)', desc: 'Virtual gifts purchased with in-app currency and sent to creators during live streams. Creators cash out at a conversion rate. TikTok and Twitch generate hundreds of millions from gifting alone.' },
                      { model: 'Boosted Posts / Promotion', revenue: '$10-$500 per boost', stage: 'Early (10K+ MAU)', desc: 'Let creators and brands pay to amplify their content reach. Simple self-serve campaign builder with budget, duration, and target audience. Lower friction than a full ad platform.' },
                      { model: 'Platform Subscriptions', revenue: '$4.99-$14.99/month', stage: 'Mid (500K+ MAU)', desc: 'Premium platform features: ad-free experience, exclusive analytics, longer video uploads, advanced editing tools, and a verified badge. Twitter Blue / X Premium proved this model works at scale.' },
                      { model: 'Creator Marketplace', revenue: '10-20% commission', stage: 'Scale (1M+ MAU)', desc: 'Connect brands with creators for sponsored content deals. Platform matches brand brief with creator audience demographics and handles contracts, payments, and FTC disclosure.' },
                    ].map(item => (
                      <div key={item.model} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 8 }}>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>{item.model}</p>
                          <span style={{ fontSize: 10, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '3px 8px', borderRadius: 100, whiteSpace: 'nowrap', flexShrink: 0 }}>{item.stage}</span>
                        </div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', margin: '0 0 10px' }}>{item.revenue}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: $100K to $500K+
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Social media apps span a wide cost range depending entirely on which features you ship. Here is what each tier realistically includes and costs:
                  </p>
                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'Community MVP',
                        price: '$80,000 - $130,000',
                        timeline: '5-7 months',
                        color: '#22c55e',
                        features: [
                          'Photo/text post feed (chronological or simple ranked)',
                          'Follow / unfollow graph',
                          'Likes, comments, shares, bookmarks',
                          'User profiles with bio and avatar',
                          'Hashtags and search',
                          'Direct messaging (text only)',
                          'Push notifications for social events',
                          'Basic content reporting',
                          'iOS and Android apps',
                        ],
                      },
                      {
                        tier: 'Video-First Platform',
                        price: '$200,000 - $320,000',
                        timeline: '9-13 months',
                        color: '#3b82f6',
                        features: [
                          'Everything in Community MVP',
                          'Short-form vertical video (reels/shorts) with HLS streaming',
                          'Stories with stickers, polls, and questions',
                          'In-app video recording and editing tools',
                          'Basic recommendation algorithm (engagement-weighted)',
                          'Video DMs and media sharing in chat',
                          'Creator profiles with analytics dashboard',
                          'Explore/discover tab with trending content',
                          'AI image moderation pre-launch',
                        ],
                      },
                      {
                        tier: 'Full Social Platform',
                        price: '$350,000 - $500,000+',
                        timeline: '14-20 months',
                        color: '#a855f7',
                        features: [
                          'Everything in Video-First',
                          'Live streaming with real-time chat and gifting',
                          'Personalized ML recommendation algorithm',
                          'Creator subscription system and monetization tools',
                          'In-feed advertising infrastructure (basic ad server)',
                          'End-to-end encrypted messaging',
                          'Full content moderation stack (AI + human review queue)',
                          'Creator marketplace and brand deal workflow',
                          'Advanced analytics for creators and admins',
                          'Web app in addition to iOS and Android',
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
                            <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                              <div style={{ width: 6, height: 6, borderRadius: '50%', background: tier.color, flexShrink: 0, marginTop: 6 }} />
                              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Infrastructure costs:</strong> In addition to development costs, budget $2,000-$8,000/month for cloud infrastructure (AWS/GCP) in the first year. Video transcoding and CDN delivery are the largest ongoing cost drivers. As you scale past 100K MAU, infrastructure costs can reach $20K-$50K/month before advertising revenue offsets them.
                    </p>
                  </div>
                </div>

                {/* Development Timeline */}
                <div className="reveal" style={{ marginBottom: 56 }} id="timeline">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Development Timeline
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Here is a realistic timeline for a video-first social media platform from kick-off to public launch:
                  </p>
                  <div style={{ display: 'grid', gap: 12 }}>
                    {[
                      {
                        phase: 'Month 1-2',
                        title: 'Architecture & Foundation',
                        tasks: ['System architecture design and API schema', 'Database schema, user model, follow graph structure', 'Authentication system (OAuth, phone OTP)', 'CI/CD pipeline and infrastructure provisioning', 'Design system, component library, and brand guidelines'],
                      },
                      {
                        phase: 'Month 3-4',
                        title: 'Core Social Features',
                        tasks: ['Feed implementation (post creation, media upload)', 'Follower/following graph and profile pages', 'Likes, comments, shares, saves, and bookmarks', 'Search by users and hashtags', 'Basic push notification infrastructure'],
                      },
                      {
                        phase: 'Month 5-7',
                        title: 'Video & Stories',
                        tasks: ['Short-form video upload pipeline (S3, FFmpeg, HLS)', 'Vertical video feed with preloading and adaptive bitrate', 'Stories with 24-hour TTL and viewer tracking', 'In-app video recording and basic editing tools', 'CDN configuration and video playback optimization'],
                      },
                      {
                        phase: 'Month 8-9',
                        title: 'Messaging & Discovery',
                        tasks: ['Real-time direct messaging with WebSockets', 'Media sharing in DMs (images, videos, posts)', 'Explore/discover tab with trending content', 'Hashtag pages and trending algorithm', 'Basic engagement-weighted feed ranking'],
                      },
                      {
                        phase: 'Month 10-11',
                        title: 'Moderation & Safety',
                        tasks: ['AI moderation integration (Rekognition, Perspective API)', 'User reporting flows and review dashboard', 'Strike and account restriction system', 'Appeals queue', 'CSAM scanning integration (PhotoDNA)'],
                      },
                      {
                        phase: 'Month 12-13',
                        title: 'QA, Beta & Launch',
                        tasks: ['Closed beta with 1,000-5,000 users', 'Load testing and performance optimization', 'App Store and Google Play submission', 'Creator onboarding program', 'Public launch and growth marketing'],
                      },
                    ].map((item, idx) => (
                      <div key={item.phase} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 16, padding: '20px 24px', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', alignItems: 'start' }}>
                        <div>
                          <p style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>{item.phase}</p>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0, lineHeight: 1.4 }}>{item.title}</p>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {item.tasks.map(task => (
                            <span key={task} style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', padding: '4px 12px', borderRadius: 100, lineHeight: 1.5 }}>{task}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Social Platform with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Social media apps are one of the hardest products to build: real-time infrastructure, video processing pipelines, recommendation algorithms, content moderation at scale, and the relentless need to retain users every single day. Most development agencies treat social media like a glorified CRUD app. We do not.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Our team has built real-time social features, video streaming pipelines, and recommendation systems for platforms serving hundreds of thousands of users. We know where the performance cliffs are, how to architect a follow graph that does not collapse under scale, and how to build a moderation system that keeps your platform safe from day one. We build the infrastructure that lets you focus on growing your community.
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

                  {/* TOC */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map(section => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.15s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                        >
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author Card */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#22c55e', flexShrink: 0 }}>CE</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Codazz Engineering</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Engineering Team, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      The Codazz Engineering team publishes in-depth guides on mobile and web app development, drawing from hands-on experience shipping products for 500+ clients globally.
                    </p>
                  </div>

                  {/* Related Posts */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          style={{ textDecoration: 'none', display: 'block', padding: '14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)', background: 'transparent', transition: 'all 0.2s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                        >
                          <p style={{ fontSize: 11, color: '#22c55e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: 0 }}>{post.readTime} read</p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar CTA */}
                  <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>Ready to build your social platform?</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: '0 0 16px' }}>
                      Get a detailed technical proposal for your social media app within 48 hours.
                    </p>
                    <Link href="/contact" style={{ textDecoration: 'none', display: 'block' }}>
                      <button style={{ width: '100%', padding: '12px 20px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
                        Get a Free Estimate
                      </button>
                    </Link>
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
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 12 }}>Start Building</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>
                  Ready to Build Your Social Media App?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
                  Share your concept with our team. We will assess the technical requirements, recommend the right architecture for your scale goals, and deliver a fixed-price proposal within 48 hours.
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
