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
  { id: 'streaming-protocols', label: 'Streaming Protocols', emoji: '📡' },
  { id: 'cdn-architecture', label: 'CDN Architecture', emoji: '🌐' },
  { id: 'transcoding', label: 'Video Transcoding', emoji: '🎞️' },
  { id: 'drm-protection', label: 'DRM Protection', emoji: '🔒' },
  { id: 'live-vs-vod', label: 'Live vs VOD', emoji: '📺' },
  { id: 'recommendations', label: 'Recommendations & Subscriptions', emoji: '🤖' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '10 min' },
  { slug: 'how-to-build-marketplace-app', title: 'How to Build a Marketplace App in 2026', category: 'Mobile', readTime: '14 min' },
  { slug: 'saas-development-cost-guide', title: 'SaaS Development Cost Guide 2026', category: 'SaaS', readTime: '11 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a video streaming app like Netflix?',
    a: 'A Netflix-like streaming platform costs between $150,000 and $1M+ depending on scope. An MVP with VOD streaming, user accounts, and basic subscription management runs $150K-$300K. A full platform with live streaming, DRM, multi-bitrate adaptive streaming, recommendation engine, and multi-device support runs $500K-$1M+. Ongoing infrastructure costs (CDN, transcoding, storage) run $5K-$50K/month at scale.',
  },
  {
    q: 'What streaming protocol should I use — HLS or DASH?',
    a: 'For most platforms, use HLS (HTTP Live Streaming). It has native support on iOS/macOS Safari, works on Android via HLS.js, and is compatible with all major CDNs. DASH (Dynamic Adaptive Streaming over HTTP) is codec-agnostic and better for cross-platform web apps. In 2026, the best approach is to serve HLS for Apple devices and DASH for Android/web, letting your player library (Video.js, Shaka Player) handle the switching automatically. For live streaming with sub-second latency, use LL-HLS (Low-Latency HLS) or WebRTC.',
  },
  {
    q: 'Do I need DRM for my streaming app?',
    a: 'Yes, if you are licensing third-party content. Content studios require DRM as a condition of licensing. You need Widevine (Google) for Android/Chrome, FairPlay (Apple) for iOS/Safari, and PlayReady (Microsoft) for Windows/Edge. Multi-DRM services like Axinom, BuyDRM, or AWS Elemental MediaConvert handle all three under one API. If you are streaming only user-generated or original content you own, DRM is optional but recommended for premium content.',
  },
  {
    q: 'How do recommendation algorithms work for streaming platforms?',
    a: 'Modern streaming recommendations use a hybrid approach. Collaborative filtering identifies users with similar taste profiles and recommends what they watched. Content-based filtering analyzes metadata (genre, cast, director, mood) to find similar titles. Deep learning models (like those Netflix uses) process viewing history, completion rates, time-of-day, and device type to rank recommendations. Start with collaborative filtering using matrix factorization, then layer in behavioral signals once you have sufficient data (50K+ users).',
  },
  {
    q: 'What is the difference between live streaming and VOD architecture?',
    a: 'VOD (Video on Demand) is simpler: videos are pre-transcoded into multiple quality levels and stored in S3 or similar object storage, then served via CDN. Users can pause, rewind, and skip freely. Live streaming is far more complex: a live video encoder (OBS, hardware encoder) sends an RTMP stream to an ingest server, which transcodes it in real-time into HLS/DASH chunks and pushes them to the CDN origin. Latency for standard live HLS is 10-30 seconds; LL-HLS reduces this to 2-5 seconds; WebRTC achieves sub-1-second for interactive live use cases.',
  },
];

export default function VideoStreamingAppDevelopmentClient() {
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
              src="/blog_images/video-streaming-app-development.jpg"
              alt="how to build a video streaming app like Netflix in 2026"
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>Streaming</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                17 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              How to Build a Video Streaming App Like Netflix in 2026
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              From HLS protocols and CDN architecture to FFmpeg transcoding, DRM protection, and recommendation algorithms. Everything you need to build a streaming platform that scales.
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
                    The Video Streaming Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global video streaming market is worth over $180 billion in 2026, growing at 14.3% annually. Netflix has 310 million subscribers, Amazon Prime Video has 230 million, and Disney+ has 165 million — but the real growth is happening in niche vertical platforms: fitness streaming, sports, education, faith-based content, and regional language entertainment. The OTT (Over-the-Top) space has never been more fragmented, or more accessible to new entrants.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The technical barriers that once required $50M+ in infrastructure to build a streaming platform have been demolished by cloud services. AWS Elemental, CloudFront, and Mux now let a 10-person team build a production-grade streaming platform that would have cost $20M to operate a decade ago. The opportunity is real — but the architecture decisions you make at the start will determine whether your platform scales smoothly or collapses under load.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>The opportunity:</strong> Niche streaming platforms with 50K-500K subscribers can be highly profitable businesses. A platform with 100K subscribers at $9.99/month generates $12M annually. The key is a defensible content library, strong retention mechanics, and infrastructure that scales cost-efficiently with viewership.
                    </p>
                  </div>
                </div>

                {/* Streaming Protocols */}
                <div className="reveal" style={{ marginBottom: 56 }} id="streaming-protocols">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Streaming Protocols: HLS, DASH, and WebRTC
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The streaming protocol determines how video is delivered from your servers to viewers. Each protocol has different trade-offs for latency, compatibility, and scalability:
                  </p>
                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        protocol: 'HLS (HTTP Live Streaming)',
                        developed: 'Apple',
                        latency: '6-30 seconds (standard) / 2-5s (LL-HLS)',
                        color: '#22c55e',
                        desc: 'HLS is the dominant streaming protocol in 2026. It works by breaking video into small segments (2-10 seconds each) delivered over standard HTTP. This means it plays over any CDN without special infrastructure. Native support in all Apple devices, iOS, macOS, tvOS. Works on Android via HLS.js. Compatible with every major CDN (CloudFront, Akamai, Cloudflare). For most platforms, HLS should be your primary protocol.',
                        useCases: ['Netflix-style VOD platforms', 'Live broadcast (sports, news, events)', 'Apple device-first platforms', 'Any platform needing CDN compatibility'],
                      },
                      {
                        protocol: 'DASH (Dynamic Adaptive Streaming over HTTP)',
                        developed: 'MPEG / ISO Standard',
                        latency: '6-30 seconds (standard)',
                        color: '#3b82f6',
                        desc: 'DASH is the open standard equivalent of HLS — codec-agnostic (supports H.264, H.265, AV1, VP9) and not controlled by Apple. Better for web-first platforms. Does not work natively on iOS Safari (requires Media Source Extensions). Shaka Player (Google) and dash.js handle DASH playback in the browser. Google uses DASH for YouTube. Best used alongside HLS in an adaptive delivery setup.',
                        useCases: ['Web-first streaming platforms', 'Platforms needing AV1 or VP9 codec support', 'Android-first delivery', 'Multi-codec adaptive bitrate delivery'],
                      },
                      {
                        protocol: 'WebRTC',
                        developed: 'Google / W3C Open Standard',
                        latency: 'Sub-500ms (near real-time)',
                        color: '#a855f7',
                        desc: 'WebRTC is a peer-to-peer protocol designed for ultra-low latency communication (video calls, live auctions, interactive broadcasts). It runs UDP rather than HTTP, which means it cannot leverage traditional CDN infrastructure — you need WebRTC-specific media servers (Janus, Mediasoup, Ant Media). Extremely complex to scale. Use WebRTC only when sub-second latency is genuinely required (live betting, interactive live shows, video commerce).',
                        useCases: ['Interactive live shopping', 'Real-time sports betting overlays', 'Live auctions', 'Video chat and watch-party features'],
                      },
                    ].map(proto => (
                      <div key={proto.protocol} style={{ padding: '28px 32px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${proto.color}25`, borderLeft: `3px solid ${proto.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                          <div>
                            <p style={{ fontSize: 18, fontWeight: 800, color: '#ffffff', margin: '0 0 4px', letterSpacing: '-0.02em' }}>{proto.protocol}</p>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: 0 }}>By {proto.developed} &nbsp;|&nbsp; Latency: <span style={{ color: proto.color }}>{proto.latency}</span></p>
                          </div>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16 }}>{proto.desc}</p>
                        <div>
                          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: proto.color, marginBottom: 8 }}>Best Use Cases</p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {proto.useCases.map(uc => (
                              <span key={uc} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.04)', padding: '4px 12px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)' }}>{uc}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CDN Architecture */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cdn-architecture">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    CDN Architecture: CloudFront, Akamai, and Cloudflare Stream
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A Content Delivery Network (CDN) is non-negotiable for video streaming. Without a CDN, every viewer request hits your origin server, causing buffering, latency, and catastrophic failure at scale. CDNs cache your video segments at edge locations close to viewers worldwide. Here is how the major CDNs compare for video streaming in 2026:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        cdn: 'AWS CloudFront',
                        pricing: '$0.0085-$0.02/GB',
                        desc: 'Best choice if your origin is on AWS (S3, Elemental MediaPackage). Deep integration with AWS Elemental for live streaming. 600+ edge locations globally. Signed URLs and cookies for content protection. Real-time logging to CloudWatch. Most popular CDN for streaming startups.',
                        best: 'AWS-native stacks, startups, enterprise',
                      },
                      {
                        cdn: 'Akamai',
                        pricing: 'Custom enterprise pricing',
                        desc: 'The original CDN, still the largest network with 4,000+ edge locations. Unmatched for premium live sports and major broadcast events. NetStorage for origin. Adaptive Media Delivery (AMD) for HLS/DASH optimization. Expensive for small platforms but the gold standard for broadcast-grade reliability.',
                        best: 'Live sports, major broadcasters, enterprise SLA requirements',
                      },
                      {
                        cdn: 'Cloudflare Stream',
                        pricing: '$1/1000 minutes stored + $1/1000 minutes delivered',
                        desc: 'The simplest CDN for video streaming. Upload a video via API, get back an HLS/DASH URL and an embedded player. Cloudflare handles transcoding, storage, and delivery. No infrastructure management. Best for platforms wanting simplicity over control. 300+ edge locations.',
                        best: 'Small to mid-size platforms, user-generated content, rapid prototyping',
                      },
                      {
                        cdn: 'Mux',
                        pricing: '$0.015/min stored + $0.0015/min delivered',
                        desc: 'Developer-first video infrastructure. Mux handles transcoding, adaptive bitrate packaging, and delivery. Mux Data provides real-time video quality monitoring (QoE metrics, rebuffering rate, startup time). Superior developer experience vs raw AWS. Growing fast among streaming startups.',
                        best: 'Developer-first teams, platforms prioritizing video quality metrics',
                      },
                    ].map(item => (
                      <div key={item.cdn} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{item.cdn}</p>
                        <p style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', margin: '0 0 10px' }}>{item.pricing}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '0 0 12px', lineHeight: 1.6 }}>{item.desc}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>Best for: <span style={{ color: 'rgba(255,255,255,0.5)' }}>{item.best}</span></p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#34d399', marginBottom: 8 }}>Architecture recommendation for a new streaming platform</p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
                      Start with Cloudflare Stream or Mux for fast time-to-market and zero infrastructure ops. Migrate to AWS CloudFront + Elemental when you hit 10K+ subscribers and need custom DRM, advanced analytics, or cost optimization at scale. Most streaming startups waste 6+ months on CDN infrastructure they do not yet need.
                    </p>
                  </div>
                </div>

                {/* Transcoding */}
                <div className="reveal" style={{ marginBottom: 56 }} id="transcoding">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Video Encoding &amp; Transcoding: FFmpeg, AWS Elemental &amp; More
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Transcoding converts uploaded video files into multiple quality levels (2160p, 1080p, 720p, 480p, 360p) optimized for adaptive bitrate streaming. Without this, a 4K source file would buffer endlessly on a 4Mbps mobile connection. Here is the transcoding landscape:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        tool: 'FFmpeg',
                        type: 'Open-Source Transcoder',
                        desc: 'The most powerful open-source transcoding tool. Runs on any Linux server. Supports all major codecs (H.264, H.265/HEVC, AV1, VP9). Generates HLS and DASH manifests. Run it on EC2 spot instances for cost-efficient batch transcoding. Requires engineering expertise to configure and orchestrate at scale.',
                        use: 'Custom transcoding pipelines, cost-sensitive high volume',
                      },
                      {
                        tool: 'AWS Elemental MediaConvert',
                        type: 'Managed Cloud Transcoder',
                        desc: 'AWS-managed transcoding service. Submit a job, get back HLS/DASH output in S3. Handles DRM packaging, captions/subtitles, HDR, and frame rate conversion. Integrates natively with CloudFront. Pricing: $0.0075-$0.015/minute of output. Zero infrastructure management — ideal for most streaming platforms.',
                        use: 'AWS-native stacks, platforms needing DRM + transcoding in one service',
                      },
                      {
                        tool: 'AWS Elemental MediaLive',
                        type: 'Managed Live Transcoder',
                        desc: 'Real-time live video transcoding. Accepts RTMP, RTP, and HLS inputs from live encoders. Outputs multi-bitrate HLS or DASH to MediaPackage for packaging and CloudFront for delivery. Handles input redundancy (dual-input failover). Essential for live sports, news, and events at scale.',
                        use: 'Live streaming: sports, news, concerts, live shopping',
                      },
                      {
                        tool: 'Bitmovin',
                        type: 'Commercial Transcoder',
                        desc: 'Developer-friendly API for transcoding and adaptive streaming. Claims 10-100x faster transcoding than FFmpeg through parallel processing. Offers per-title encoding optimization (Netflix technique that reduces file size by 30-50% without quality loss). Excellent developer experience. Premium pricing.',
                        use: 'Premium VOD platforms, platforms needing per-title encoding',
                      },
                    ].map(item => (
                      <div key={item.tool} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', margin: '0 0 6px' }}>{item.type}</p>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 10px' }}>{item.tool}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '0 0 12px', lineHeight: 1.6 }}>{item.desc}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>Best for: <span style={{ color: 'rgba(255,255,255,0.5)' }}>{item.use}</span></p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DRM */}
                <div className="reveal" style={{ marginBottom: 56 }} id="drm-protection">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    DRM Protection: Widevine, FairPlay &amp; PlayReady
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Digital Rights Management (DRM) encrypts your video content so only authenticated, paying subscribers can decrypt and watch it. Content studios will not license their content without DRM. Here is what you need to know:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      { drm: 'Widevine (Google)', platform: 'Android, Chrome, Firefox, Edge', level: 'L1 (hardware) / L3 (software)', desc: 'The dominant DRM for Android and desktop browsers. Widevine L1 requires hardware-level decryption (supported on most Android phones) and is required for 1080p and 4K playback. L3 is software-only and sufficient for SD/HD. Integrated via the Encrypted Media Extensions (EME) browser API.' },
                      { drm: 'FairPlay (Apple)', platform: 'iOS, iPadOS, macOS, tvOS, Safari', level: 'Hardware-enforced on Apple silicon', desc: 'Apple\'s proprietary DRM. Required for streaming on all Apple devices via Safari. FairPlay requires a license from Apple (part of the MFi program for streaming). Integrated via HLS Encryption. Third-party players on iOS (iOS 11.2+) can use FairPlay via AVPlayer. This is why multi-DRM services exist — you need FairPlay for Apple + Widevine for everything else.' },
                      { drm: 'PlayReady (Microsoft)', platform: 'Edge, Internet Explorer, Xbox, Windows', level: 'Software and hardware', desc: 'Microsoft\'s DRM system. Required for premium content delivery on Windows devices and Xbox. Less commonly implemented independently — usually included as part of a multi-DRM package. Required for Ultra HD content on Windows (Widevine L3 is software-only and does not qualify for 4K on Windows).' },
                    ].map(item => (
                      <div key={item.drm} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                          <p style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.drm}</p>
                          <span style={{ fontSize: 11, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: 100, fontWeight: 700 }}>{item.level}</span>
                        </div>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>Platform: {item.platform}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#34d399', marginBottom: 8 }}>Multi-DRM Services (recommended)</p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>
                      Implementing each DRM individually is extremely complex. Use a multi-DRM service that handles Widevine, FairPlay, and PlayReady under a single API:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                      {['Axinom DRM', 'BuyDRM KeyOS', 'EZDRM', 'AWS Elemental (via Speke)', 'Verimatrix', 'PallyCon'].map(svc => (
                        <span key={svc} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.05)', padding: '5px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)' }}>{svc}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live vs VOD */}
                <div className="reveal" style={{ marginBottom: 56 }} id="live-vs-vod">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Live Streaming vs VOD: Architecture Differences
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Live and VOD streaming share many components but have fundamentally different architecture requirements. Understanding this distinction will prevent costly architectural mistakes:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        type: 'VOD Architecture',
                        color: '#3b82f6',
                        steps: [
                          'Creator uploads source file (MP4, MOV, MXF)',
                          'Transcoder converts to multi-bitrate HLS/DASH (AWS Elemental MediaConvert or FFmpeg)',
                          'Transcoded segments stored in S3 / object storage',
                          'CDN (CloudFront) caches segments at edge locations',
                          'Viewer requests manifest → CDN serves segments from nearest edge',
                          'Player switches quality automatically based on bandwidth (ABR)',
                        ],
                        infra: 'S3 + MediaConvert + CloudFront + video player',
                      },
                      {
                        type: 'Live Architecture',
                        color: '#ef4444',
                        steps: [
                          'Live encoder (OBS, hardware encoder) sends RTMP stream to ingest server',
                          'Real-time transcoder (MediaLive, Wowza) converts to multiple bitrates simultaneously',
                          'Packager (MediaPackage) creates HLS/DASH manifest and 2-6s segments',
                          'Segments pushed to CDN origin as they are created',
                          'CDN distributes to global edge locations in real time',
                          'Viewer receives 10-30s latency on standard HLS, 2-5s on LL-HLS',
                        ],
                        infra: 'RTMP ingest + MediaLive + MediaPackage + CloudFront',
                      },
                    ].map(item => (
                      <div key={item.type} style={{ padding: '24px 28px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}20` }}>
                        <p style={{ fontSize: 15, fontWeight: 700, color: item.color, marginBottom: 16 }}>{item.type}</p>
                        {item.steps.map((step, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                            <span style={{ fontSize: 11, fontWeight: 800, color: item.color, background: `${item.color}15`, width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{step}</span>
                          </div>
                        ))}
                        <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${item.color}15` }}>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>Core infrastructure: <span style={{ color: item.color }}>{item.infra}</span></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations & Subscriptions */}
                <div className="reveal" style={{ marginBottom: 56 }} id="recommendations">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommendation Algorithms &amp; Subscription Management
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Retention on streaming platforms is driven by two systems: recommendations that surface the right content at the right time, and subscription management that converts free users and minimizes churn.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
                    {[
                      {
                        title: 'Collaborative Filtering',
                        desc: 'Identifies users with similar taste profiles based on viewing history, ratings, and completion rates. Recommends titles that similar users loved. Standard approach: matrix factorization (ALS, SVD). Start here — it is effective with 10K+ users and minimal infrastructure.',
                        tag: 'Recommendation',
                        color: '#22c55e',
                      },
                      {
                        title: 'Content-Based Filtering',
                        desc: 'Analyzes metadata (genre, cast, director, mood, runtime, language, themes) to find similar titles. Works well for new users with little viewing history. Combine with collaborative filtering for a hybrid approach that handles the cold-start problem.',
                        tag: 'Recommendation',
                        color: '#22c55e',
                      },
                      {
                        title: 'Deep Learning Ranking Models',
                        desc: 'Neural networks trained on viewing behavior, time-of-day, device type, search queries, and content completion. Used by Netflix and YouTube. Requires millions of viewing events to train effectively. Implement this at 100K+ active users.',
                        tag: 'Recommendation',
                        color: '#22c55e',
                      },
                      {
                        title: 'Stripe Billing + Subscription Tiers',
                        desc: 'Use Stripe for subscription management. Offer Free (limited content) → Basic ($6.99/mo) → Standard ($12.99/mo) → Premium ($18.99/mo) with increasing features (screens, quality, downloads). Stripe handles dunning, retries, proration, and tax calculation globally.',
                        tag: 'Subscriptions',
                        color: '#3b82f6',
                      },
                      {
                        title: 'Annual Plans & Discounts',
                        desc: 'Offer an annual plan at 15-20% discount (e.g., $99/year vs $12.99/mo = $156/year). This reduces churn significantly — annual subscribers churn at 3-5% vs 20-25% for monthly. Strongly push annual upsells at the end of the first month.',
                        tag: 'Subscriptions',
                        color: '#3b82f6',
                      },
                      {
                        title: 'Churn Prevention & Win-Back',
                        desc: 'Detect at-risk subscribers (low engagement, skipped content) and intervene with personalized recommendations and retention offers. Email win-back campaigns targeting churned subscribers when new relevant content is added. Pause-subscription as an alternative to cancellation reduces churn by 15-25%.',
                        tag: 'Retention',
                        color: '#a855f7',
                      },
                    ].map(item => (
                      <div key={item.title} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.color, background: `${item.color}15`, padding: '4px 10px', borderRadius: 100, flexShrink: 0, marginTop: 2 }}>{item.tag}</span>
                        <div>
                          <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.title}</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: How Much Does a Streaming App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building a video streaming platform involves both upfront development costs and ongoing operational infrastructure costs. Here is the full picture:
                  </p>
                  <div style={{ display: 'grid', gap: 20, marginBottom: 28 }}>
                    {[
                      {
                        tier: 'MVP Streaming Platform',
                        price: '$150,000 - $300,000',
                        timeline: '5-8 months',
                        color: '#22c55e',
                        features: ['VOD streaming via Mux or Cloudflare Stream', 'Web app (Next.js) + iOS + Android apps', 'User authentication + subscription (Stripe)', 'Basic content management admin panel', 'Content library (10-50 titles)', 'Search and basic recommendations', 'Offline downloads (for mobile)', 'Analytics dashboard (viewership, revenue)'],
                      },
                      {
                        tier: 'Full Streaming Platform',
                        price: '$400,000 - $800,000',
                        timeline: '10-18 months',
                        color: '#3b82f6',
                        features: ['Everything in MVP', 'Live streaming infrastructure (MediaLive)', 'Multi-DRM (Widevine + FairPlay + PlayReady)', 'Advanced recommendation engine (collaborative filtering)', 'Multi-language subtitles and dubbing support', 'CTV apps (Apple TV, Fire TV, Roku, Smart TV)', 'Content creator upload portal + CMS', 'Advanced analytics (QoE, churn prediction)', 'CDN optimization + cost management'],
                      },
                      {
                        tier: 'Netflix-Scale Architecture',
                        price: '$800,000 - $2,000,000+',
                        timeline: '18-36 months',
                        color: '#a855f7',
                        features: ['Everything in Full Platform', 'Per-title encoding optimization', 'Deep learning recommendation model', 'Real-time personalization engine', 'Multi-region CDN with custom PoPs', 'Live events + sports broadcasting stack', 'Advanced fraud detection', 'A/B testing infrastructure', 'Data warehouse + BI tooling', 'Content licensing management system'],
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

                  {/* Infrastructure cost table */}
                  <p style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Monthly Infrastructure Costs by Scale</p>
                  <div style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                    <div style={{ padding: '14px 20px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 12 }}>
                      {['Component', '1K subscribers', '50K subscribers', '500K subscribers'].map(h => (
                        <span key={h} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{h}</span>
                      ))}
                    </div>
                    {[
                      { component: 'CDN (delivery)', v1: '$50-$200', v50: '$2K-$8K', v500: '$20K-$80K' },
                      { component: 'Storage (S3)', v1: '$20-$100', v50: '$500-$2K', v500: '$5K-$20K' },
                      { component: 'Transcoding', v1: '$50-$200', v50: '$1K-$3K', v500: '$8K-$25K' },
                      { component: 'DRM licensing', v1: '$0-$100', v50: '$500-$2K', v500: '$3K-$10K' },
                      { component: 'Backend / API servers', v1: '$100-$300', v50: '$500-$2K', v500: '$3K-$10K' },
                      { component: 'Database', v1: '$50-$150', v50: '$300-$800', v500: '$2K-$5K' },
                      { component: 'Total estimated', v1: '$270-$1K', v50: '$5K-$18K', v500: '$40K-$150K' },
                    ].map((row, i) => (
                      <div key={row.component} style={{ padding: '12px 20px', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)', borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.04)' : 'none', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 12, alignItems: 'center' }}>
                        <span style={{ fontSize: 14, color: i === 6 ? '#ffffff' : 'rgba(255,255,255,0.7)', fontWeight: i === 6 ? 600 : 400 }}>{row.component}</span>
                        <span style={{ fontSize: 13, color: '#22c55e', fontWeight: 600 }}>{row.v1}</span>
                        <span style={{ fontSize: 13, color: '#3b82f6', fontWeight: 600 }}>{row.v50}</span>
                        <span style={{ fontSize: 13, color: '#a855f7', fontWeight: 600 }}>{row.v500}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Streaming Platform with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Streaming platforms sit at the intersection of media technology, distributed systems, and consumer product design. Transcoding pipelines, DRM integration, CDN optimization, and recommendation systems each require specialized engineering expertise. Our team at Codazz has built video infrastructure for platforms across entertainment, education, fitness, and sports — from MVP to hundreds of thousands of subscribers.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We start with your content strategy and business model, then architect a platform that can scale without re-architecture. We implement DRM correctly from day one, build cost-efficient transcoding pipelines, and design subscription systems optimized for your target market. Most importantly, we help you avoid the infrastructure mistakes that force expensive rebuilds at 50K subscribers.
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
                  Ready to Build Your Streaming Platform?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your streaming platform concept with our team. We will assess your content strategy, recommend the right architecture, and provide a detailed fixed-price proposal within 48 hours.
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
