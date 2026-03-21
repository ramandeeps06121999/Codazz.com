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
  { id: 'engine-comparison', label: 'Unity vs Unreal vs Godot', emoji: '⚙️' },
  { id: 'game-categories', label: 'Game Categories', emoji: '🎮' },
  { id: 'multiplayer-backend', label: 'Multiplayer Backend', emoji: '🌐' },
  { id: 'monetization', label: 'Monetization', emoji: '💰' },
  { id: 'live-ops', label: 'Live Ops & Events', emoji: '🔥' },
  { id: 'performance', label: 'Performance & App Store', emoji: '⚡' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💵' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '10 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native 2026: Complete Comparison', category: 'Mobile', readTime: '12 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026: The Complete Guide', category: 'AI/ML', readTime: '18 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a mobile game in 2026?',
    a: 'Mobile game development costs range from $50,000 for a hyper-casual prototype to $2M+ for a full mid-core or hardcore game with multiplayer, live ops, and multiple seasons of content. A solid hyper-casual game runs $50K-$120K. A mid-core strategy or RPG runs $300K-$800K. A competitive multiplayer game with full live ops infrastructure runs $800K-$2M+.',
  },
  {
    q: 'Should I use Unity or Unreal Engine for my mobile game?',
    a: 'Unity is the right choice for 80% of mobile games. It has superior mobile optimization, a massive asset store, C# scripting, and lower hardware requirements for target devices. Unreal Engine (with its Nanite and Lumen systems disabled on mobile) is best for games requiring console-quality visuals — think Fortnite Mobile. Godot is excellent for 2D games and indie projects with smaller budgets. If you are uncertain, choose Unity.',
  },
  {
    q: 'What is the best monetization model for a mobile game?',
    a: 'The best model depends on your game genre. Hyper-casual games (Subway Surfers, Temple Run style) rely 70-90% on in-game advertising (interstitials, rewarded ads). Mid-core games (Clash of Clans style) use in-app purchases (IAP) for progression boosters, cosmetics, and resource packs. Hardcore and narrative games increasingly use premium pricing ($4.99-$9.99) or subscription bundles (Apple Arcade, Google Play Pass). Hybrid models combining ads and IAP are most common in 2026.',
  },
  {
    q: 'How do I build multiplayer for a mobile game?',
    a: 'For real-time multiplayer (battle royale, shooters, racing), use Photon Engine or Mirror Networking with dedicated game servers. For turn-based multiplayer (chess, words, card games), a simple REST API with push notifications is sufficient. For MMO-scale games, use PlayFab or a custom backend on AWS/GCP with WebSocket connections. Start with Photon for speed to market — it handles 100K+ concurrent players and has a generous free tier.',
  },
  {
    q: 'How long does it take to develop a mobile game?',
    a: 'A hyper-casual game takes 2-4 months from concept to App Store launch. A mid-core game with social features, progression systems, and IAP takes 8-14 months. A hardcore multiplayer game takes 18-36 months for a full launch (though a soft launch can happen at 12-18 months). Plan for an additional 20-30% of development time post-launch for live ops content — events, seasons, new characters, and balance patches.',
  },
];

export default function MobileGameDevelopmentGuideClient() {
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
              src="/blog_images/mobile-game-development-guide.jpg"
              alt="mobile game development guide 2026"
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>Gaming</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                16 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              Mobile Game Development Guide 2026: Unity, Unreal &amp; Hyper-Casual
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              From choosing your game engine and genre to multiplayer backends, live ops, monetization, and App Store optimization. Everything you need to ship a successful mobile game in 2026.
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
                    The Mobile Gaming Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Mobile gaming is the largest segment of the entire global games market, generating over $120 billion in revenue in 2026 and accounting for 55% of all gaming spend worldwide. With 3.2 billion mobile gamers globally, this is the single largest entertainment medium on Earth. The average mobile gamer plays 30 minutes per day, and top games generate more than $1 billion annually from a single title.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The market is bifurcating. At one end, hyper-casual games (simple one-tap mechanics, ad-supported) attract hundreds of millions of downloads but face rising user acquisition costs and declining session lengths. At the other end, mid-core and hardcore games with deep progression systems, social guilds, and live events generate massive ARPU (Average Revenue Per User) from dedicated player bases. The sweet spot in 2026 is hybrid-casual: simple to learn, deep to master, with meaningful social mechanics.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Key stat:</strong> The top 1% of mobile games capture 80% of all revenue. Success requires not just a good game but a retention-first design philosophy, a live ops roadmap from day one, and a user acquisition strategy built around strong LTV (Lifetime Value) metrics.
                    </p>
                  </div>
                </div>

                {/* Engine Comparison */}
                <div className="reveal" style={{ marginBottom: 56 }} id="engine-comparison">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Unity vs Unreal Engine vs Godot: Which to Choose?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Your game engine choice affects your build pipeline, visual fidelity ceiling, hiring pool, and long-term maintenance cost. Here is the honest breakdown for mobile in 2026:
                  </p>
                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        engine: 'Unity',
                        tagline: 'Best for 90% of mobile games',
                        color: '#22c55e',
                        desc: 'Unity is the dominant mobile game engine for good reason. It has the largest mobile developer community, the richest asset store (1M+ assets), and the best mobile optimization tooling. C# scripting is approachable. The Unity Addressables system enables over-the-air content updates without App Store re-submissions. Unity Gaming Services provides analytics, authentication, cloud saves, and matchmaking out of the box.',
                        pros: ['Best mobile performance optimization', 'Largest talent pool (C# devs)', 'Unity Asset Store saves months', 'Unity Gaming Services (UGS) integration', 'Strong 2D and 3D support'],
                        cons: ['2023 runtime fee controversy damaged trust', 'Less impressive visuals vs Unreal', 'Editor can be heavy on older machines'],
                        bestFor: 'Hyper-casual, mid-core, casual, 2D games, puzzle, RPG, strategy',
                      },
                      {
                        engine: 'Unreal Engine 5',
                        tagline: 'Best for AAA-quality mobile games',
                        color: '#3b82f6',
                        desc: 'Unreal Engine 5 delivers console-quality visuals, but requires disabling Nanite and Lumen on mobile hardware. Epic Games has invested heavily in mobile — Fortnite runs on UE. Blueprint visual scripting lowers the barrier for game logic. The engine is royalty-free up to $1M in revenue, then 5%. C++ is required for performance-critical systems. Build times are significantly longer than Unity.',
                        pros: ['Unmatched visual fidelity ceiling', 'Blueprint visual scripting (no-code logic)', 'Free until $1M revenue', 'Best for realistic 3D games', 'Strong multiplayer networking built-in'],
                        cons: ['Steeper learning curve', 'Larger APK/IPA sizes', 'Slower build and iteration times', 'Smaller mobile-specific community', 'C++ required for optimizations'],
                        bestFor: 'Hardcore shooters, racing games, battle royale, AAA mobile titles',
                      },
                      {
                        engine: 'Godot 4',
                        tagline: 'Best for indie and 2D mobile games',
                        color: '#a855f7',
                        desc: 'Godot is the fastest-growing open-source game engine. Godot 4 added significant 3D capabilities, but its real strength remains 2D. GDScript (Python-like) is beginner-friendly. The engine is MIT-licensed with zero royalties. Community plugins cover most needs. Mobile export is straightforward. The downside is a smaller professional talent pool compared to Unity or Unreal.',
                        pros: ['100% free, MIT license, no royalties', 'Excellent 2D workflow', 'Fast iteration and build times', 'GDScript is easy to learn', 'Rapidly growing community'],
                        cons: ['Smaller professional talent pool', '3D less mature than Unity/Unreal', 'Fewer commercial plugins', 'Less suitable for AAA-quality 3D'],
                        bestFor: '2D puzzle games, platformers, indie titles, prototype-first projects',
                      },
                    ].map(eng => (
                      <div key={eng.engine} style={{ padding: '28px 32px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${eng.color}25`, borderLeft: `3px solid ${eng.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                          <div>
                            <p style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', margin: '0 0 4px', letterSpacing: '-0.03em' }}>{eng.engine}</p>
                            <p style={{ fontSize: 13, color: eng.color, fontWeight: 600, margin: 0 }}>{eng.tagline}</p>
                          </div>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.03)', padding: '4px 12px', borderRadius: 100, flexShrink: 0 }}>Best for: {eng.bestFor}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16 }}>{eng.desc}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 8 }}>Pros</p>
                            {eng.pros.map(p => (
                              <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', flexShrink: 0, marginTop: 6 }} />
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{p}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#f59e0b', marginBottom: 8 }}>Cons</p>
                            {eng.cons.map(c => (
                              <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#f59e0b', flexShrink: 0, marginTop: 6 }} />
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{c}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Game Categories */}
                <div className="reveal" style={{ marginBottom: 56 }} id="game-categories">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Hyper-Casual vs Hybrid-Casual vs Mid-Core vs Hardcore
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The game category you target determines your entire development approach, team size, timeline, and monetization model. Here is how they differ:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        category: 'Hyper-Casual',
                        examples: 'Subway Surfers, Helix Jump, Paper.io',
                        dev: '2-4 months',
                        cost: '$50K-$120K',
                        arpu: '$0.10-$0.50',
                        retention: 'Day 1: 35-40%, Day 7: 10-15%',
                        color: '#22c55e',
                        desc: 'One-tap mechanics learnable in 30 seconds. Success driven by volume (100M+ downloads). Revenue is almost entirely interstitial and rewarded ads. UA costs must be low — target CPI under $0.30. The market is extremely saturated; differentiation comes from novel core mechanics and strong viral loops.',
                      },
                      {
                        category: 'Hybrid-Casual',
                        examples: 'Royal Match, Merge Mansion, Coin Master',
                        dev: '5-9 months',
                        cost: '$150K-$400K',
                        arpu: '$3-$15',
                        retention: 'Day 1: 40-50%, Day 7: 20-30%',
                        color: '#3b82f6',
                        desc: 'Simple entry mechanics with deep meta-game progression (collection, building, narrative). Monetizes through both ads (for casual players) and IAP (for engaged players). The dominant category in 2026 — more sustainable than hyper-casual, less expensive than mid-core. Requires a robust economy design and live events from launch.',
                      },
                      {
                        category: 'Mid-Core',
                        examples: 'Clash of Clans, Clash Royale, Rise of Kingdoms',
                        dev: '9-18 months',
                        cost: '$400K-$1M',
                        arpu: '$15-$100',
                        retention: 'Day 1: 35-45%, Day 30: 10-20%',
                        color: '#a855f7',
                        desc: 'Deeper strategy, base building, PvP, guilds, and complex progression trees. Almost entirely IAP-monetized with battle passes and premium currencies. Requires content roadmap for 12+ months of live ops. Social features (clans, chat, leaderboards) are essential to retention. Long dev cycle but high LTV per player.',
                      },
                      {
                        category: 'Hardcore / Competitive',
                        examples: 'PUBG Mobile, Genshin Impact, Honkai: Star Rail',
                        dev: '18-36 months',
                        cost: '$1M-$5M+',
                        arpu: '$50-$500+',
                        retention: 'Day 1: 40-55%, Day 30: 15-25%',
                        color: '#ef4444',
                        desc: 'Console-quality graphics, skill-based gameplay, competitive ranking systems, esports potential. Requires a large dedicated dev team, ongoing content seasons, and community management at scale. Very high risk, very high reward. Genshin Impact generates $2B+ annually. Not recommended without substantial funding and an experienced studio.',
                      },
                    ].map(cat => (
                      <div key={cat.category} style={{ padding: '24px 28px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${cat.color}20` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                          <div>
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: cat.color, display: 'block', marginBottom: 4 }}>{cat.category}</span>
                            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: 0 }}>{cat.examples}</p>
                          </div>
                          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.04)', padding: '4px 12px', borderRadius: 100 }}>{cat.dev}</span>
                            <span style={{ fontSize: 13, fontWeight: 700, color: cat.color, background: `${cat.color}12`, padding: '4px 12px', borderRadius: 100 }}>{cat.cost}</span>
                          </div>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>{cat.desc}</p>
                        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>ARPU: <strong style={{ color: '#ffffff' }}>{cat.arpu}</strong></span>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Retention: <strong style={{ color: '#ffffff' }}>{cat.retention}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Multiplayer Backend */}
                <div className="reveal" style={{ marginBottom: 56 }} id="multiplayer-backend">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Multiplayer Backend: Photon, Mirror, and PlayFab
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Real-time multiplayer is one of the most technically demanding parts of mobile game development. Latency, cheat prevention, server costs, and matchmaking all need to work flawlessly under load. Here are the leading solutions in 2026:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        tool: 'Photon Engine (PUN 2 / Quantum)',
                        use: 'Real-time competitive multiplayer',
                        desc: 'The industry standard for Unity multiplayer. Photon Unity Networking (PUN) handles room creation, matchmaking, and state synchronization. Photon Quantum uses a deterministic simulation model for fighting games and precise physics. Scales to 100K+ CCU. Free tier covers early development.',
                        best: 'Battle royale, racing, party games, card games',
                      },
                      {
                        tool: 'Mirror Networking',
                        use: 'Self-hosted multiplayer for Unity',
                        desc: 'Open-source successor to UNET. Mirror runs on your own servers (AWS, GCP, bare metal), giving full control over data and costs. Best for games needing custom server logic (authoritative physics, anti-cheat). Requires infrastructure expertise. Zero licensing fees.',
                        best: 'MMOs, simulation games, games with custom anti-cheat needs',
                      },
                      {
                        tool: 'Microsoft PlayFab',
                        use: 'Full game backend platform',
                        desc: 'PlayFab is a complete BaaS (Backend as a Service) for games. It handles player authentication, leaderboards, economy (virtual currencies, IAP), matchmaking, cloud scripts, and analytics. Works with any engine. Generous free tier. Acquired by Microsoft, it integrates with Azure seamlessly.',
                        best: 'Mid-core and hardcore games needing economy + multiplayer + analytics in one platform',
                      },
                      {
                        tool: 'Unity Gaming Services (UGS)',
                        use: 'Unity-native backend',
                        desc: 'Unity Game Server Hosting (Multiplay), Matchmaker, Relay, and Lobby services built into the Unity ecosystem. Simplest integration for Unity games. Analytics and economy included. Works alongside Photon or Mirror for transport layer.',
                        best: 'Unity games wanting an integrated, managed backend with minimal ops overhead',
                      },
                      {
                        tool: 'Nakama (Heroic Labs)',
                        use: 'Open-source social + multiplayer',
                        desc: 'Open-source game server with built-in support for friends, groups, chat, leaderboards, real-time multiplayer, and matchmaking. Self-hosted or managed cloud. Supports any language for custom game logic. Strong TypeScript runtime for server-side code.',
                        best: 'Social games, competitive games with community features, custom backend logic',
                      },
                      {
                        tool: 'Custom WebSocket Backend',
                        use: 'Turn-based or async multiplayer',
                        desc: 'For turn-based games (chess, words, strategy), a REST API with push notifications is sufficient. A Node.js or Go WebSocket server on AWS handles thousands of concurrent games cheaply. Only go custom if Photon or PlayFab pricing becomes prohibitive at scale.',
                        best: 'Turn-based games, async multiplayer, trivia, word games',
                      },
                    ].map(item => (
                      <div key={item.tool} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', margin: '0 0 8px' }}>{item.use}</p>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 10px' }}>{item.tool}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '0 0 12px', lineHeight: 1.6 }}>{item.desc}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>Best for: <span style={{ color: 'rgba(255,255,255,0.5)' }}>{item.best}</span></p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Monetization */}
                <div className="reveal" style={{ marginBottom: 56 }} id="monetization">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Monetization: Ads vs IAP vs Subscriptions
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Mobile game monetization is not one-size-fits-all. The model must match your genre, player psychology, and session length. Here is what works in 2026:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        model: 'Rewarded Video Ads',
                        revenue: '$15-$25 eCPM',
                        desc: 'Players voluntarily watch a 30-second ad to receive in-game rewards (extra lives, power-ups, currencies). Highest CPM of all ad formats. Players appreciate the opt-in nature — does not damage experience. Use AdMob, ironSource (Unity LevelPlay), or AppLovin MAX for mediation.',
                      },
                      {
                        model: 'Interstitial Ads',
                        revenue: '$5-$12 eCPM',
                        desc: 'Full-screen ads shown between levels or game sessions. Best for hyper-casual where sessions are short (30-90 seconds). Cap frequency at one every 2-3 minutes to avoid churn. A/B test placement timing — too aggressive kills retention.',
                      },
                      {
                        model: 'In-App Purchases (IAP)',
                        revenue: '$0.99-$99.99 per purchase',
                        desc: 'Virtual currencies, cosmetic skins, character unlocks, progression boosters, and loot boxes. The core revenue model for mid-core and hardcore. Design around whale spending (top 1% of players who spend $100-$1000+) while keeping the free experience enjoyable. Battle passes convert well: $4.99-$9.99/month with clear value proposition.',
                      },
                      {
                        model: 'Battle Pass',
                        revenue: '$4.99-$9.99/season',
                        desc: 'Fortnite popularized this. Players pay a flat fee per season (4-8 weeks) for a tiered reward track. Creates recurring revenue, drives daily engagement (completing challenges), and is perceived as fair value by players. One of the highest-converting mobile monetization tools in 2026.',
                      },
                      {
                        model: 'Subscription',
                        revenue: '$4.99-$14.99/month',
                        desc: 'Monthly or annual subscriptions unlocking premium content, ad removal, exclusive characters, and bonus resources. Works well for puzzle and casual games. Apple Arcade and Google Play Pass also offer a revenue share model if your game is accepted — no IAP needed, just a quality bar.',
                      },
                      {
                        model: 'Premium / Paid Game',
                        revenue: '$0.99-$9.99 upfront',
                        desc: 'Upfront purchase with no IAP. Works for established IPs, narrative games, or games with strong word-of-mouth. Harder to grow virally. Consider a paid premium tier alongside a free version to capture both audiences. Suitable for indie games with cult followings.',
                      },
                    ].map(item => (
                      <div key={item.model} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.model}</p>
                        <p style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', margin: '0 0 10px' }}>{item.revenue}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Ops */}
                <div className="reveal" style={{ marginBottom: 56 }} id="live-ops">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Live Ops &amp; Events: Keeping Players Engaged Post-Launch
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A mobile game launch is not the finish line — it is the starting gun. The top-grossing games spend more on live operations than initial development. Here is what a live ops strategy looks like:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 24 }}>
                    {[
                      { feature: 'Seasonal Events', desc: 'Time-limited events tied to holidays or in-game lore. New content, exclusive rewards, and limited cosmetics drive massive spikes in DAU and revenue.' },
                      { feature: 'Battle Pass Seasons', desc: '4-8 week progression tracks with premium tier. Creates predictable recurring revenue and gives players a reason to log in daily.' },
                      { feature: 'Daily Challenges', desc: 'Simple tasks that reward in-game currency. Drive daily active users (DAU) and habit formation. Essential for D7 and D30 retention.' },
                      { feature: 'Limited-Time Offers', desc: 'Urgency-driven IAP bundles offered to players at key moments (after losing a level, after a long session). 3x higher conversion than regular shop.' },
                      { feature: 'Guild Wars / Tournaments', desc: 'Competitive events between guilds or individual players. Creates strong social bonds that dramatically improve long-term retention.' },
                      { feature: 'New Content Drops', desc: 'New levels, characters, maps, or story chapters released on a cadence. Every major drop should have a marketing push (push notifications, social media).' },
                      { feature: 'A/B Testing', desc: 'Continuously test monetization placement, difficulty curves, and UI flows. A 5% improvement in conversion can mean millions in additional annual revenue.' },
                      { feature: 'Remote Config', desc: 'Change game parameters (prices, difficulty, event timing) without an App Store update using Firebase Remote Config or PlayFab CloudScript.' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance & App Store */}
                <div className="reveal" style={{ marginBottom: 56 }} id="performance">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Performance Optimization &amp; App Store Guidelines
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Poor performance kills mobile games. Players delete apps that drain battery, run at under 30fps, or crash on mid-range devices. Target the median device, not the flagship. Here are the critical optimization areas:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 28 }}>
                    {[
                      { area: 'Draw Call Batching', desc: 'Combine meshes and use texture atlases to minimize GPU draw calls. Target under 100 draw calls per frame on mid-range devices. Use Unity Profiler or Unreal Insights to identify bottlenecks.' },
                      { area: 'APK / IPA Size', desc: 'Keep your initial download under 100MB for iOS and Android. Use Unity Addressables or Unreal Pak files for asset streaming. Larger files kill conversion on install — every 10MB costs ~5% of potential installs.' },
                      { area: 'Memory Management', desc: 'Aggressively unload unused assets. Pool frequently spawned objects (bullets, particles, enemies). Target under 500MB RAM on mid-range devices. Memory spikes cause crashes on iOS (which has no swap).' },
                      { area: 'Battery & Thermal', desc: 'Cap framerate at 60fps (30fps in menus). Reduce physics simulation rate when off-screen. Thermal throttling kicks in at 20 minutes of intensive gameplay on most devices — test for it.' },
                      { area: 'Shader Complexity', desc: 'Write mobile-optimized shaders. Avoid pixel-perfect lighting on large surfaces. Use baked lighting for static environments. Mobile GPUs are tile-based — understand tiled deferred rendering.' },
                      { area: 'Network Efficiency', desc: 'Use binary protocols (Protocol Buffers) instead of JSON for multiplayer. Implement delta compression. For real-time games, target under 100ms round-trip latency. Use UDP, not TCP, for real-time state sync.' },
                    ].map(item => (
                      <div key={item.area} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.area}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#34d399', marginBottom: 10 }}>App Store Gaming Guidelines (2026)</p>
                    <div style={{ display: 'grid', gap: 8 }}>
                      {[
                        'Loot boxes must disclose drop rates on both App Store and Google Play',
                        'Age-gating required for games with user-generated content or social features',
                        'Real-money gambling mechanics prohibited without a gambling license',
                        'In-game chat requires content moderation and reporting tools',
                        'Privacy labels must accurately reflect all data collection (Analytics, Device ID, User ID)',
                        'Google Play requires target API level 34+ for all new submissions in 2026',
                      ].map(rule => (
                        <div key={rule} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#34d399', flexShrink: 0, marginTop: 7 }} />
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{rule}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: How Much Does Mobile Game Development Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Mobile game development costs span an enormous range — from $50K for a hyper-casual prototype to $2M+ for a competitive mid-core title. Here is the detailed breakdown by tier:
                  </p>
                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'Hyper-Casual MVP',
                        price: '$50,000 - $120,000',
                        timeline: '2-4 months',
                        color: '#22c55e',
                        features: ['Core one-tap game mechanic', 'Procedural or hand-crafted levels (20-50)', 'AdMob / ironSource ad integration', 'Basic analytics (Firebase)', 'App Store & Google Play submission', 'Simple meta-game (score, leaderboard)', 'Basic UI and onboarding flow'],
                      },
                      {
                        tier: 'Hybrid-Casual / Mid-Core',
                        price: '$250,000 - $700,000',
                        timeline: '8-14 months',
                        color: '#3b82f6',
                        features: ['Polished core loop + meta progression system', 'Economy design (virtual currencies, shop)', 'IAP integration (Google Play Billing, StoreKit 2)', 'Battle pass + seasonal events system', 'Push notifications & re-engagement flows', 'Friends / social features', 'PlayFab or UGS backend integration', 'Admin dashboard for live ops', 'Soft launch + balance iteration phase'],
                      },
                      {
                        tier: 'Competitive Multiplayer',
                        price: '$700,000 - $2,000,000+',
                        timeline: '16-30 months',
                        color: '#a855f7',
                        features: ['Full real-time multiplayer (Photon / custom)', 'Ranked matchmaking & ELO system', 'Anti-cheat & server-authoritative game state', 'Character roster + cosmetic system', 'Competitive seasons + esports support', 'In-game guild/clan system', 'Clan wars, tournaments, leaderboards', 'Dedicated live ops team post-launch', 'Custom analytics & revenue dashboards', 'Multi-region server infrastructure'],
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

                  {/* Cost table */}
                  <div style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                    <div style={{ padding: '14px 20px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 12 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Component</span>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Hyper-Casual</span>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Mid-Core</span>
                    </div>
                    {[
                      { component: 'Game Design & UX', hc: '$5K-$15K', mc: '$30K-$80K' },
                      { component: 'Game Development (Unity/UE)', hc: '$30K-$70K', mc: '$150K-$350K' },
                      { component: 'Art & Animation', hc: '$8K-$20K', mc: '$60K-$150K' },
                      { component: 'Audio / SFX', hc: '$2K-$5K', mc: '$15K-$40K' },
                      { component: 'Backend & Multiplayer', hc: '$0-$5K', mc: '$50K-$120K' },
                      { component: 'QA & Device Testing', hc: '$5K-$10K', mc: '$30K-$60K' },
                      { component: 'Launch & ASO', hc: '$3K-$8K', mc: '$15K-$30K' },
                    ].map((row, i) => (
                      <div key={row.component} style={{ padding: '12px 20px', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 12, alignItems: 'center' }}>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{row.component}</span>
                        <span style={{ fontSize: 13, color: '#22c55e', fontWeight: 600 }}>{row.hc}</span>
                        <span style={{ fontSize: 13, color: '#3b82f6', fontWeight: 600 }}>{row.mc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Mobile Game with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Mobile game development is uniquely demanding — it sits at the intersection of software engineering, game design, psychology, and real-time infrastructure. Our team at Codazz includes Unity and Unreal specialists, game economy designers, multiplayer backend engineers, and live ops strategists who have shipped games across all major genres.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We approach game development the way top studios do: with a retention-first design philosophy, a live ops roadmap from day one, and monetization systems that feel fair to players while driving strong ARPU. Whether you are building a hyper-casual prototype for rapid market testing or a mid-core multiplayer title with multi-year content ambitions, we build games that players keep coming back to.
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
                  Ready to Build Your Mobile Game?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your game concept with our team. We will assess your genre, recommend the right engine and monetization model, and provide a detailed fixed-price proposal within 48 hours.
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
