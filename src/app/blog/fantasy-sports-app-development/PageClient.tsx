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
  { id: 'daily-vs-season', label: 'Daily vs Season-Long', emoji: '🗓️' },
  { id: 'core-features', label: 'Core Features', emoji: '⚙️' },
  { id: 'sports-data-apis', label: 'Sports Data APIs', emoji: '📡' },
  { id: 'real-time-architecture', label: 'Real-Time Architecture', emoji: '⚡' },
  { id: 'legal-landscape', label: 'Legal Landscape', emoji: '⚖️' },
  { id: 'payment-processing', label: 'Payments & Prize Pools', emoji: '💳' },
  { id: 'anti-fraud', label: 'Anti-Fraud & Compliance', emoji: '🛡️' },
  { id: 'mobile-considerations', label: 'iOS & Android Rules', emoji: '📱' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-to-build-on-demand-app', title: 'How to Build an On-Demand App in 2026', category: 'Mobile', readTime: '13 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '11 min' },
  { slug: 'native-vs-cross-platform-2026', title: 'Native vs Cross-Platform Development in 2026', category: 'Mobile', readTime: '10 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a fantasy sports app like DraftKings?',
    a: 'A DraftKings-like fantasy sports platform costs between $100,000 and $600,000+ depending on scope. A season-long MVP with basic contest creation, a single sport, and weekly scoring is $100K-$160K. A full DFS platform with live scoring, lineup optimizer, leaderboards, and payment processing runs $220K-$380K. An enterprise-grade multi-sport platform with AI-driven fraud detection and mobile apps on both iOS and Android exceeds $400K-$600K+.',
  },
  {
    q: 'Do I need a license to operate a paid daily fantasy sports platform?',
    a: 'Yes, in many jurisdictions. In the United States, paid DFS is legal in 38+ states, but several states (Arizona, Iowa, Louisiana, Montana, Tennessee, and Washington) have specific licensing requirements. Tennessee, for example, requires a $25,000 annual license fee and mandates that 100% of prize pool funds come from entry fees. You must also comply with IRS reporting requirements (1099 forms for winnings over $600). In Canada, paid contests exist in a regulatory grey zone — operators should obtain specific gaming law advice by province before accepting Canadian users.',
  },
  {
    q: 'Which sports data API should I use for my fantasy app?',
    a: 'For a paid commercial platform, Sportradar is the industry standard. It provides official data for NFL, NBA, MLB, NHL, and 80+ other sports with a guaranteed 99.9% uptime SLA. Pricing starts around $2,000-$5,000/month for basic sports packages. Stats Perform (formerly Opta) is the leading alternative, especially strong for soccer. For early-stage testing or free tiers, MySportsFeeds ($30-$150/month) and SportsDataIO offer affordable entry points. Our recommendation: build your MVP against SportsDataIO, then migrate to Sportradar once you have paying users and the data SLA matters.',
  },
  {
    q: 'How do you handle WebSocket connections for live scoring at scale?',
    a: 'Use a publish-subscribe architecture. The sports data API pushes events to your backend. Your backend publishes game state changes to Redis Pub/Sub channels partitioned by game ID. WebSocket servers subscribe to relevant channels and push updates to connected clients. For 100K concurrent users, you need a horizontally scaled WebSocket tier — Socket.io cluster or a managed service like Ably or Pusher — behind a load balancer with sticky sessions. AWS API Gateway WebSocket APIs handle connection state at scale without managing your own servers. Score updates must reach client screens within 3-5 seconds of the real-world event.',
  },
  {
    q: 'Can Apple and Google reject my fantasy sports app from their stores?',
    a: 'Yes, both stores have specific rules. Apple (App Store Review Guideline 4.7.1) permits fantasy sports apps with real-money entry fees only if the app is legal in the jurisdictions where it is offered, entry fees are disclosed, and contests are skill-based. You must geo-restrict users in prohibited states. Google Play allows real-money fantasy sports apps via its Skill Games Real-Money policy, requiring a separate application process that typically takes 6-8 weeks. Both stores require age gating (18+ or 21+ depending on jurisdiction). Plan for a 4-6 week App Store review and obtain legal compliance documentation before submission.',
  },
];

export default function FantasySportsAppDevelopmentClient() {
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
              src="/blog_images/fantasy-sports-app-development.jpg"
              alt="Fantasy sports app development guide 2026"
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '5px 14px', borderRadius: 100 }}>Sports Tech</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                16 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 860 }}>
              Fantasy Sports App Development Guide 2026: Build DraftKings-Like Apps
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 740, marginBottom: 48, fontWeight: 400 }}>
              The complete technical and business guide to building a fantasy sports platform in 2026. Real-time scoring engines, sports data APIs, legal compliance by US state, anti-fraud systems, and a full cost breakdown from $100K to $600K+.
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

                {/* ─── MARKET OVERVIEW ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="market-overview">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The $40 Billion Fantasy Sports Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Fantasy sports is one of the most durable consumer categories in digital entertainment. The global fantasy sports market is valued at over $40 billion in 2026 and is projected to reach $75 billion by 2030, growing at a compound annual rate of 13.5%. In the United States and Canada alone, over 60 million people play fantasy sports each year — roughly one in five adults. NFL, NBA, MLB, and PGA fantasy formats dominate in North America, while fantasy cricket (especially through Dream11 in India) commands hundreds of millions of users globally.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    DraftKings and FanDuel together control roughly 90% of the US daily fantasy sports (DFS) market. But the opportunity is not competing head-on with them. It lives in verticals they underserve: international sports (cricket, soccer, rugby), niche formats (survivor pools, pick-em contests, prop-style games), hyper-local leagues, youth leagues, and employer or office fantasy platforms. These segments collectively represent billions in addressable market with far less competition.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16, marginBottom: 20 }}>
                    {[
                      { stat: '$40B+', label: 'Global market size (2026)' },
                      { stat: '60M+', label: 'US & Canada fantasy players' },
                      { stat: '13.5%', label: 'Annual market growth (CAGR)' },
                      { stat: '38+', label: 'US states with legal paid DFS' },
                      { stat: '$75B', label: 'Projected market by 2030' },
                      { stat: '500M+', label: 'Global players (incl. cricket)' },
                    ].map(item => (
                      <div key={item.label} style={{ padding: '20px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)', textAlign: 'center' }}>
                        <p style={{ fontSize: 28, fontWeight: 800, color: '#22c55e', margin: '0 0 6px', letterSpacing: '-0.03em' }}>{item.stat}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.4 }}>{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Key insight:</strong> The average fantasy sports player spends $653 per year on entry fees, subscriptions, and in-app purchases. Users who play both season-long and daily fantasy spend 2.4x more than single-format players. Fantasy players consume 40% more sports content than non-players — making them among the most valuable audiences in digital media.
                    </p>
                  </div>
                </div>

                {/* ─── DAILY VS SEASON-LONG ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="daily-vs-season">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Daily Fantasy (DFS) vs Season-Long Fantasy: Which Should You Build?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Before writing a single line of code, you need to decide your core format. The two dominant models have entirely different mechanics, monetization structures, regulatory considerations, and technical requirements. Getting this decision wrong is expensive — DFS and season-long platforms share little code at the core.
                  </p>
                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        type: 'Daily Fantasy Sports (DFS)',
                        color: '#22c55e',
                        examples: 'DraftKings, FanDuel, PrizePicks',
                        mechanics: [
                          'Players draft new lineups each day or each slate (set of games)',
                          'Salary cap system — each player has a dollar value; lineups must stay under the cap',
                          'Contest types: GPP (large multi-entry tournaments), cash games (50/50, double-up), head-to-head matchups',
                          'Results known within 24 hours — immediate gratification feedback loop',
                          'High engagement frequency: NFL DFS players typically enter 5-15 lineups per slate',
                        ],
                        monetization: 'Entry fees with 10-15% rake (platform cut of prize pool)',
                        regulation: 'Classified as skill-based gaming in most US states. Requires state-specific DFS law compliance.',
                        techComplexity: 'Very High — real-time scoring engine, salary cap optimizer, fraud detection at scale',
                      },
                      {
                        type: 'Season-Long Fantasy',
                        color: '#3b82f6',
                        examples: 'Yahoo Fantasy, ESPN Fantasy, Sleeper',
                        mechanics: [
                          'Users join private or public leagues (8-14 teams) at season start',
                          'Snake draft or auction draft at the beginning of the season',
                          'Weekly head-to-head matchups against other league members',
                          'Waiver wire and trade system for roster management throughout the season',
                          'Points accumulate week-by-week with a season champion crowned at end',
                        ],
                        monetization: 'League entry fees (commissioner collects), premium subscriptions for trade analyzers, waiver grades, and start/sit tools',
                        regulation: 'Generally exempt from US gambling laws as social/free-play. Private money leagues are a grey area by state.',
                        techComplexity: 'Moderate — draft room, trade system, waiver logic; scoring is less time-critical than DFS',
                      },
                    ].map(item => (
                      <div key={item.type} style={{ padding: '28px 32px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}25`, borderLeft: `3px solid ${item.color}` }}>
                        <div style={{ marginBottom: 16 }}>
                          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.color, margin: '0 0 4px' }}>Format</p>
                          <p style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', margin: '0 0 6px', letterSpacing: '-0.02em' }}>{item.type}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', margin: 0 }}>Examples: {item.examples}</p>
                        </div>
                        <div style={{ marginBottom: 16 }}>
                          <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 8px' }}>How It Works</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {item.mechanics.map((m, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                <div style={{ width: 5, height: 5, borderRadius: '50%', background: item.color, flexShrink: 0, marginTop: 7 }} />
                                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{m}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
                          {[
                            { label: 'Monetization', val: item.monetization },
                            { label: 'Regulation', val: item.regulation },
                            { label: 'Tech Complexity', val: item.techComplexity },
                          ].map(d => (
                            <div key={d.label} style={{ padding: '12px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.03)' }}>
                              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px' }}>{d.label}</p>
                              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>{d.val}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#f59e0b' }}>Our recommendation:</strong> For most new entrants, start with a season-long fantasy platform in a niche sport or demographic. Lower regulatory burden, lower development cost, and stronger community retention. Once you have traction and revenue, layer in DFS contests for high-engagement users who want daily action.
                    </p>
                  </div>
                </div>

                {/* ─── CORE FEATURES ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features of a Fantasy Sports Platform
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A competitive fantasy sports platform requires five distinct system layers, each with significant technical depth. These are not simple CRUD screens — they are performance-critical, real-time systems that must handle tens of thousands of concurrent users during peak game windows.
                  </p>

                  {/* Contest Creation */}
                  <div style={{ marginBottom: 32 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#22c55e', marginBottom: 12, letterSpacing: '-0.02em' }}>1. Contest Creation & Lobby</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 16 }}>
                      The contest lobby is the marketplace of your platform. Users browse available contests by sport, entry fee, prize pool size, and contest type. For DFS, the lobby dynamically updates with available roster spots as contests fill. For season-long, it is a league finder with commissioner-configured settings.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
                      {[
                        { feature: 'Contest Templates', desc: 'Predefined structures (GPP, 50/50, H2H, Survivor) that commissioners or the system instantiate for each slate. Configuration-driven, not hard-coded.' },
                        { feature: 'Dynamic Pricing', desc: 'Entry fee ranges from free contests to $10K+ high-roller entries. Guaranteed prize pools trigger at minimum fill thresholds — or the platform absorbs the shortfall.' },
                        { feature: 'Multi-Entry & Single Entry', desc: 'DFS allows up to 150 lineup entries per contest (DraftKings standard). Max entries per user per contest is configurable by contest type.' },
                        { feature: 'Late Swap', desc: 'Allow lineup changes up until game lock time. Each player locks individually as their game starts — a critical DFS differentiator that reduces user risk.' },
                        { feature: 'Invite-Only Leagues', desc: 'Private contest codes for friend groups, office pools, and subscriber communities. Deep link sharing for iOS and Android.' },
                        { feature: 'Contest Scheduling', desc: 'Automated contest generation based on sports calendar data. NFL contests auto-create each Thursday ahead of Sunday slates with no manual operator input.' },
                      ].map(item => (
                        <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.feature}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Draft Room */}
                  <div style={{ marginBottom: 32 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#22c55e', marginBottom: 12, letterSpacing: '-0.02em' }}>2. Draft Room</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 16 }}>
                      The draft room is the highest-stakes real-time experience on your platform. Up to 12-14 teams draft simultaneously with strict per-pick timers. A poorly built draft room — with latency, dropped picks, or sync errors — destroys user trust permanently. This module deserves 15-20% of your total development budget.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
                      {[
                        { feature: 'Snake & Auction Draft', desc: 'Snake (alternating pick order each round) and auction draft (each team bids on players with a salary budget) are both required for a competitive season-long platform.' },
                        { feature: 'Auto-Pick & Queue', desc: 'Users pre-queue 5-10 preferred picks. Auto-pick activates when the timer expires. Essential for draft rooms with 60-90 second pick clocks.' },
                        { feature: 'Draft Board UI', desc: 'Real-time board showing all picks, player availability, and positional needs per team. Sortable by position, projected points, and ADP (Average Draft Position).' },
                        { feature: 'Live Chat', desc: 'In-draft trash talk chat is a social engagement driver. Moderate with keyword filters; archive post-draft for nostalgia. Drives repeat league formation.' },
                        { feature: 'Pick Timer & Reconnection', desc: 'WebSocket-based timer synchronized server-side, not client-side. Handle disconnections gracefully — reconnecting users see the current board state instantly.' },
                        { feature: 'Mock Draft Mode', desc: 'Let users practice their draft strategy against AI opponents before their real draft. Increases platform engagement during the off-season.' },
                      ].map(item => (
                        <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.feature}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real-Time Scoring Engine */}
                  <div style={{ marginBottom: 32 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#22c55e', marginBottom: 12, letterSpacing: '-0.02em' }}>3. Real-Time Scoring Engine</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 16 }}>
                      The scoring engine is the heart of your platform's technical complexity. It must ingest raw sports events (touchdown, 3-pointer, strikeout), apply your platform's scoring rules, recalculate every affected lineup's score, and push updates to hundreds of thousands of connected clients — all within 2-5 seconds of the real-world event occurring.
                    </p>
                    <div style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 16 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: '0 0 16px' }}>Scoring Engine Data Flow</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[
                          { step: '1', label: 'Event Ingestion', desc: 'Sportradar push feed publishes a raw game event to a Kafka topic. An event consumer microservice picks it up within milliseconds.' },
                          { step: '2', label: 'Point Calculation', desc: 'A rule engine applies scoring config (e.g., 6 pts/TD, 1 pt/10 rush yards) to raw stats. Rules are configurable per contest format without a code deploy.' },
                          { step: '3', label: 'Lineup Recalculation', desc: 'A worker fleet queries all lineups containing that player. Recalculates each lineup\'s total score. Writes updated scores to PostgreSQL and Redis cache.' },
                          { step: '4', label: 'Leaderboard Rerank', desc: 'Redis sorted sets (ZADD) maintain contest leaderboards with O(log N) insert and update. Handles millions of entries without degrading.' },
                          { step: '5', label: 'WebSocket Push', desc: 'Score update events publish to Redis Pub/Sub. WebSocket servers subscribe, receive deltas, and push to connected clients within 3 seconds of the real-world event.' },
                        ].map(item => (
                          <div key={item.step} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#22c55e', flexShrink: 0 }}>{item.step}</div>
                            <div>
                              <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '2px 0 2px' }}>{item.label}</p>
                              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Lineup Optimizer */}
                  <div style={{ marginBottom: 32 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#22c55e', marginBottom: 12, letterSpacing: '-0.02em' }}>4. Lineup Optimizer</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 16 }}>
                      A lineup optimizer is a decision-support tool that helps users build optimal DFS lineups. It is simultaneously a monetizable premium feature and a user acquisition tool — many DFS players choose a platform based on optimizer quality. Mathematically, this is a constrained integer programming problem: maximize projected fantasy points subject to salary cap and positional constraints.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
                      {[
                        { feature: 'Projection Engine', desc: 'Aggregate player projections from multiple sources (Sportradar, FantasyPros, proprietary models) weighted by each source\'s historical accuracy for that position and sport.' },
                        { feature: 'Salary Cap Solver', desc: 'Integer linear programming (PuLP or Google OR-Tools) finds the optimal combination respecting positional slots and the platform\'s salary cap (e.g., $50,000).' },
                        { feature: 'Exposure Controls', desc: 'Multi-lineup generation with user-set max exposure per player (e.g., max 40% of lineups may start Mahomes). Critical for GPP tournament strategy with 150 entries.' },
                        { feature: 'Stack Builder', desc: 'Correlate QB + WR stacks and apply pitcher-vs-hitter avoidance rules. Correlation-aware lineup building significantly improves win rate in large-field tournaments.' },
                        { feature: 'Custom Projections', desc: 'Allow advanced users to override system projections with their own values. Power users pay for this feature. It is a primary driver of premium subscription conversions.' },
                        { feature: 'Bulk Import/Export', desc: 'CSV upload to DraftKings or FanDuel contest lobby. API-based submission for users entering 150 lineups into a single contest.' },
                      ].map(item => (
                        <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.feature}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Leaderboard */}
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#22c55e', marginBottom: 12, letterSpacing: '-0.02em' }}>5. Live Leaderboard & Prize Distribution</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 16 }}>
                      The leaderboard is the most-viewed screen during live contests. It must refresh in near-real-time, handle ties correctly based on tiebreaker rules in your contest terms, and display a user's rank alongside the percentile payout threshold clearly visible. Prize distribution is fully automated and must be auditable by operators and, in licensed states, by regulators.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
                      {[
                        { feature: 'Redis ZADD Leaderboard', desc: 'Sorted sets with score as key. O(log N) updates. ZRANK gives a user\'s rank instantly. Handles 1M+ entry contests with sub-millisecond read latency.' },
                        { feature: 'Payout Structure Display', desc: 'Visual prize rail showing where money positions start. User highlighted with an arrow showing direction of movement needed to cash.' },
                        { feature: 'Live Rank Notifications', desc: 'Push notification when user breaks into prize positions or falls out. "You just entered the money — currently #47." High engagement and session extension driver.' },
                        { feature: 'Score Projection', desc: 'Projected final score based on remaining players with games still active. Shows users their realistic ceiling and floor for the contest.' },
                        { feature: 'Automated Prize Settlement', desc: 'Within 2 hours of all games completing, prize amounts are calculated per payout structure and credited to winning user wallets automatically.' },
                        { feature: 'Dispute Resolution Queue', desc: 'When official stats corrections occur (common in MLB box scores), automated recalculation triggers with a supervisor override capability for edge cases.' },
                      ].map(item => (
                        <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.feature}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ─── SPORTS DATA APIS ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="sports-data-apis">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Sports Data APIs: Choosing Your Data Provider
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Your sports data provider is the single most important third-party dependency in your stack. Without reliable, low-latency official data, your scoring engine cannot function. Every second of data latency translates to user frustration and trust erosion. Choose carefully — switching providers after launch is extremely painful and requires rewriting your ingestion pipeline and re-mapping all statistical fields.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 20 }}>
                    {[
                      {
                        name: 'Sportradar',
                        tier: 'Enterprise',
                        color: '#22c55e',
                        price: '$2,000 – $15,000+/month',
                        sports: 'NFL, NBA, MLB, NHL, Soccer, Tennis, Golf, Cricket, 80+ sports',
                        latency: 'Under 1 second (official partner push feeds)',
                        uptime: '99.95% SLA guaranteed',
                        pros: 'Official NFL and NBA data partner, push feed architecture (no polling), global sports coverage, the gold standard for DFS platforms',
                        cons: 'Expensive for early-stage startups, complex contract negotiation, minimum commitment terms',
                        best: 'Any paid DFS platform or mid-to-large fantasy operator needing SLA guarantees',
                      },
                      {
                        name: 'Stats Perform (Opta)',
                        tier: 'Enterprise',
                        color: '#3b82f6',
                        price: '$1,500 – $10,000+/month',
                        sports: 'Soccer (world-leading), NFL, NBA, Tennis, Cricket, Rugby',
                        latency: 'Under 2 seconds',
                        uptime: '99.9% SLA',
                        pros: 'The gold standard for soccer data globally (used by Premier League clubs), deep player tracking metrics, strong for European sports markets',
                        cons: 'US sports coverage is strong but secondary to Sportradar, less flexible API design for North American formats',
                        best: 'Soccer-focused fantasy platforms or global sports media products targeting European audiences',
                      },
                      {
                        name: 'SportsDataIO',
                        tier: 'Mid-Market',
                        color: '#f59e0b',
                        price: '$200 – $1,500/month',
                        sports: 'NFL, NBA, MLB, NHL, NCAA, Soccer, Golf',
                        latency: '5-15 seconds (polling-based, not push)',
                        uptime: '99.5% target, no hard SLA',
                        pros: 'Affordable entry point, developer-friendly REST API, excellent documentation, free tier available for initial development and testing',
                        cons: 'Polling-based means higher latency — unsuitable for real-time DFS scoring without workarounds that increase complexity',
                        best: 'Season-long platforms, MVP stage startups, analytics and tools products where seconds of delay are acceptable',
                      },
                      {
                        name: 'MySportsFeeds',
                        tier: 'Budget / Free Tier',
                        color: '#a855f7',
                        price: 'Free – $150/month',
                        sports: 'NFL, NBA, MLB, NHL, MLS',
                        latency: '30-60 seconds average',
                        uptime: 'Best effort, no SLA',
                        pros: 'Free tier available, excellent for prototyping and MVP validation, good historical data access for building projection models',
                        cons: 'Not suitable for live scoring features, frequent outages during peak NFL game windows, limited sports coverage outside major US leagues',
                        best: 'Prototyping, internal analytics tools, historical analysis, proof-of-concept builds before raising funding',
                      },
                    ].map(api => (
                      <div key={api.name} style={{ padding: '24px 28px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${api.color}20`, borderLeft: `3px solid ${api.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                              <p style={{ fontSize: 18, fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>{api.name}</p>
                              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: api.color, background: `${api.color}15`, padding: '3px 10px', borderRadius: 100 }}>{api.tier}</span>
                            </div>
                            <p style={{ fontSize: 14, fontWeight: 600, color: api.color, margin: 0 }}>{api.price}</p>
                          </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10, marginBottom: 14 }}>
                          {[
                            { label: 'Sports Covered', val: api.sports },
                            { label: 'Data Latency', val: api.latency },
                            { label: 'Uptime', val: api.uptime },
                          ].map(d => (
                            <div key={d.label}>
                              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 2px' }}>{d.label}</p>
                              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.4 }}>{d.val}</p>
                            </div>
                          ))}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
                          <div>
                            <p style={{ fontSize: 12, color: '#22c55e', margin: '0 0 2px', fontWeight: 600 }}>Pros</p>
                            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{api.pros}</p>
                          </div>
                          <div>
                            <p style={{ fontSize: 12, color: '#f59e0b', margin: '0 0 2px', fontWeight: 600 }}>Cons</p>
                            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{api.cons}</p>
                          </div>
                          <div>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: '0 0 2px', fontWeight: 600 }}>Best For</p>
                            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{api.best}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Architecture tip:</strong> Build your scoring engine behind a DataProviderService interface from day one. All event ingestion and stat normalization flows through this abstraction layer. Swapping from SportsDataIO to Sportradar then becomes a configuration change, not an architectural rewrite.
                    </p>
                  </div>
                </div>

                {/* ─── REAL-TIME ARCHITECTURE ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="real-time-architecture">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Real-Time Architecture: WebSockets, Event Streaming & Scale
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Real-time score updates are the defining technical challenge of a fantasy sports platform. During peak NFL Sunday windows, you may have 50,000-500,000 concurrent users all expecting live score pushes within seconds of the real-world play. This is not a problem you can solve with REST polling at any reasonable scale — you need a purpose-built event-driven architecture.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        layer: 'WebSocket Layer',
                        tech: 'Socket.io (clustered) or Ably / Pusher (managed)',
                        desc: 'Each client maintains a persistent WebSocket connection. Connections are grouped by contest ID using Socket.io rooms. When a game event occurs, the server emits only to relevant rooms — not broadcasting to all connected clients. For 100K+ concurrent connections, use a managed service like Ably to avoid managing your own Socket.io cluster and Redis adapter at an early stage.',
                        note: 'Use managed (Ably/Pusher) when you expect over 50K concurrent users at launch. Self-host a Socket.io cluster with a Redis adapter for full cost control at smaller scale.',
                      },
                      {
                        layer: 'Event Streaming',
                        tech: 'Apache Kafka or AWS Kinesis',
                        desc: 'Sports data events flow through a message broker before reaching your scoring workers. Kafka topics partitioned by sport and game allow parallel processing across a worker fleet. Consumers process events idempotently — if a worker crashes and replays an event, the scoring result is identical. This guarantees exactly-once scoring semantics, which is critical when prize pool payouts depend on correctness.',
                        note: 'AWS Kinesis is easier to operate for teams without Kafka expertise. Use Kafka if you anticipate more than 10 million events per day or need cross-region fan-out.',
                      },
                      {
                        layer: 'Caching Layer',
                        tech: 'Redis Cluster (AWS ElastiCache)',
                        desc: 'Three distinct Redis use cases: (1) Pub/Sub for broadcasting score updates to WebSocket servers, (2) Sorted Sets via ZADD/ZRANK for O(log N) leaderboard operations at any scale, (3) Hash maps for active player stats so lineup recalculation reads from memory rather than the database. Budget for Redis Cluster with at least 3 primary nodes for high availability.',
                        note: 'AWS ElastiCache is strongly recommended. Managed failover, automated snapshots, and Multi-AZ replication without the operational overhead of self-managed Redis.',
                      },
                      {
                        layer: 'Primary Database',
                        tech: 'PostgreSQL (Aurora Serverless v2) + TimescaleDB',
                        desc: 'PostgreSQL for lineups, contests, user accounts, and financial transactions. Use database partitioning on contest_id for lineup tables — a 1M-lineup contest needs efficient partition scans during scoring. TimescaleDB (a PostgreSQL extension) for time-series player stats history, enabling efficient historical analysis and projection model training.',
                        note: 'AWS Aurora PostgreSQL with read replicas is critical. Leaderboard queries during NFL game windows generate approximately 80% reads and only 20% writes — a pattern read replicas are designed to handle.',
                      },
                    ].map(item => (
                      <div key={item.layer} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'baseline', marginBottom: 10 }}>
                          <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.layer}</p>
                          <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 600 }}>{item.tech}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: '0 0 10px' }}>{item.desc}</p>
                        <div style={{ padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)' }}>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0, lineHeight: 1.5 }}>
                            <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Decision guide:</strong> {item.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#f59e0b' }}>Performance target:</strong> Score updates must reach client screens within 3-5 seconds of the real-world event. Users watch the touchdown happen live on TV and expect their fantasy points to update within seconds. Consistently exceeding 10 seconds of latency will generate support tickets, social media complaints, and churn.
                    </p>
                  </div>
                </div>

                {/* ─── LEGAL LANDSCAPE ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="legal-landscape">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Legal Landscape: US State Laws & Canada
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Paid daily fantasy sports occupies a unique legal category in the United States. The Unlawful Internet Gambling Enforcement Act of 2006 (UIGEA) explicitly exempted fantasy sports with entry fees from its definition of illegal gambling — but this does not mean paid DFS is legal everywhere. States have independent authority to regulate or ban it, and the legal map changes every legislative session.
                  </p>

                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>US State Status (as of March 2026)</h3>
                    <div style={{ display: 'grid', gap: 12 }}>
                      {[
                        {
                          status: 'Legal & Explicitly Authorized (38+ States)',
                          color: '#22c55e',
                          states: 'California, Texas, Florida, New York, Pennsylvania, Illinois, Ohio, Michigan, Georgia, North Carolina, New Jersey, Virginia, Colorado, Tennessee (licensed), Iowa (licensed), Arizona (licensed), and 22+ additional states',
                          notes: 'These states have passed DFS-specific legislation or issued AG opinions confirming skill-game status. Some require annual operator registration or licensing fees before accepting entry fees from residents.',
                        },
                        {
                          status: 'Unclear / Grey Area (5 States)',
                          color: '#f59e0b',
                          states: 'Arkansas, Delaware, Kansas, Oregon, South Dakota',
                          notes: 'No explicit DFS legislation exists. Paid contests operate under general gambling law ambiguity. Most major operators geo-restrict these states as a precaution. Consult a gaming law attorney before operating.',
                        },
                        {
                          status: 'Prohibited or Effectively Banned (7 States)',
                          color: '#ef4444',
                          states: 'Hawaii, Idaho, Louisiana (paid DFS separately banned), Montana, Nevada, Washington, Wisconsin',
                          notes: 'AG opinions or existing state law classify paid DFS as illegal gambling. DraftKings and FanDuel are geo-restricted from these states. You must implement both IP-based and GPS-based geo-blocking.',
                        },
                      ].map(item => (
                        <div key={item.status} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}20`, borderLeft: `3px solid ${item.color}` }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                            <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.status}</p>
                          </div>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 8px', lineHeight: 1.5 }}>{item.states}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.5, fontStyle: 'italic' }}>{item.notes}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.02em' }}>Canada</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 12 }}>
                      Canada legalized single-game sports betting at the federal level in 2021 (Bill C-218), and provinces now regulate sports betting independently. Daily fantasy sports as a distinct category is not explicitly regulated in most provinces — it currently operates in a regulatory grey zone where operators function without a specific DFS licence. This is changing. Ontario launched its regulated iGaming market in April 2022 through the iGaming Ontario (iGO) framework. If your DFS platform qualifies as a game of chance under provincial law, you may need an Ontario iGaming registration from the Alcohol and Gaming Commission of Ontario (AGCO). Obtain a Canadian gaming law opinion specific to your format before launching paid contests to Canadian users.
                    </p>
                  </div>

                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)' }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#ef4444', margin: '0 0 10px' }}>Mandatory Compliance Checklist</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
                      {[
                        'Geo-blocking at both IP and GPS level for prohibited jurisdictions',
                        'Age verification — 18+ minimum, 21+ in some jurisdictions',
                        'IRS 1099 reporting for US winners receiving $600+ annually',
                        'Problem gambling disclosures and self-exclusion tools',
                        'Annual operator licensing (Tennessee $25K/yr, Arizona $25K initial)',
                        'Withdrawal holds for new accounts pending KYC review',
                        'Separate prize pool escrow from operating capital',
                        'Employee contest entry restrictions with audit logs',
                      ].map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#ef4444', flexShrink: 0, marginTop: 6 }} />
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ─── PAYMENT PROCESSING ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="payment-processing">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Payment Processing & Prize Pool Management
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Fantasy sports payment processing is one of the most commercially challenging parts of the platform. Banks and payment processors apply high-risk merchant category codes (MCC 7995 — betting and casino gambling) to DFS platforms, which means standard Stripe or PayPal integrations will get your merchant account terminated. You need processors with explicit DFS programme approval.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
                    {[
                      {
                        processor: 'Stripe (with Fantasy Sports Add-On)',
                        model: 'Card processing + ACH bank transfer',
                        fees: '2.9% + $0.30 per transaction',
                        notes: 'Stripe supports skill-based gaming platforms on a case-by-case basis via their Stripe for Platforms programme. You must apply for approval through the Stripe dashboard and provide a legal opinion on DFS skill classification in your operating jurisdictions. Approval is not guaranteed. Best for initial MVP stage or if you anticipate under $50K/month GMV.',
                        risk: 'Medium',
                        riskColor: '#f59e0b',
                      },
                      {
                        processor: 'Worldpay / FIS',
                        model: 'Full payment stack — card, ACH, digital wallets',
                        fees: '1.5-2.5% (negotiated at scale)',
                        notes: 'Worldpay is the processor of choice for mid-to-large DFS operators. It has an explicit high-risk gaming merchant programme with dedicated account managers. Supports ACH, debit card, PayPal, and credit card. Requires approximately $100K+ monthly processing volume for preferred rate negotiation. DraftKings used Worldpay during its growth phase.',
                        risk: 'Low',
                        riskColor: '#22c55e',
                      },
                      {
                        processor: 'PayNearMe / Mazooma',
                        model: 'Cash deposits + bank-to-bank transfer',
                        fees: '$1-3 per transaction (flat)',
                        notes: 'PayNearMe enables cash deposits at CVS and 7-Eleven locations. Mazooma enables direct bank-to-bank transfers without credit or debit card processing. Both are critical for reaching demographics without credit cards, which represents a significant portion of the DFS market. Add as secondary payment methods alongside your primary processor.',
                        risk: 'Low',
                        riskColor: '#22c55e',
                      },
                    ].map(p => (
                      <div key={p.processor} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                          <div>
                            <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 2px' }}>{p.processor}</p>
                            <p style={{ fontSize: 13, color: '#22c55e', margin: '0 0 2px', fontWeight: 600 }}>{p.fees}</p>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>{p.model}</p>
                          </div>
                          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: p.riskColor, background: `${p.riskColor}15`, padding: '4px 12px', borderRadius: 100, flexShrink: 0 }}>Termination risk: {p.risk}</span>
                        </div>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{p.notes}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.02em' }}>Prize Pool Architecture</h3>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 16 }}>
                    Prize pool management requires a separate ledger system from general user wallets. Entry fees flow into a contest-specific escrow pool. The rake (platform fee, typically 10-12% of prize pool) is deducted immediately upon entry. Remaining funds are held until contest completion. Never co-mingle prize pool funds with operating capital — this is both an accounting best practice and a legal requirement in licensed states.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
                    {[
                      { item: 'Contest Wallet', desc: 'Separate database wallet per contest. Sum of entry fees minus rake. Immutable records once a contest locks. Fully auditable transaction log.' },
                      { item: 'User Wallet Structure', desc: 'Available balance, bonus balance (with wagering requirements tracked separately), and pending withdrawal balance — each tracked in independent ledger rows.' },
                      { item: 'Withdrawal Processing', desc: 'ACH payouts within 3-5 business days. Instant withdrawals via PayPal or debit card at a small additional fee. KYC required above $2,000 cumulative withdrawal threshold.' },
                      { item: 'Guaranteed vs Non-Guaranteed', desc: 'Guaranteed prize pools (GPP) pay out even if the contest does not fill to max capacity. The platform absorbs the shortfall. Non-guaranteed contests refund entry fees if minimum participation is not met.' },
                    ].map(item => (
                      <div key={item.item} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.item}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ─── ANTI-FRAUD ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="anti-fraud">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Anti-Fraud, Collusion Detection & Responsible Gaming
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Fraud and collusion are existential threats for fantasy sports platforms. The 2015 insider data scandal — where DraftKings and FanDuel employees were found to have entered each other's contests using non-public ownership data — nearly destroyed the entire DFS industry. Your compliance and fraud system must be in place before you accept your first dollar of entry fees.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        threat: 'Multi-Accounting',
                        desc: 'Users creating multiple accounts to enter the same contest multiple times or circumvent geo-restrictions. Detected via device fingerprinting (FingerprintJS Pro), IP velocity checks, linked payment methods, and behavioral biometrics patterns at login.',
                        severity: 'Critical',
                        severityColor: '#ef4444',
                        mitigation: 'Device fingerprinting at account creation and login. One verified payment method per account. Automatic account suspension upon duplicate device fingerprint detection with manual review queue.',
                      },
                      {
                        threat: 'Collusion',
                        desc: 'Multiple accounts controlled by one person or coordinated group intentionally distributing lineups to control prize pool distribution. Detected via lineup similarity scoring (cosine similarity above 85% triggers a review flag), shared IP cluster analysis, and graph-based social relationship detection.',
                        severity: 'Critical',
                        severityColor: '#ef4444',
                        mitigation: 'Automated lineup similarity flagging. Social network graph analysis across accounts. Human review queue for suspected collusion rings. Winnings held pending investigation outcome.',
                      },
                      {
                        threat: 'Bonus Abuse',
                        desc: 'Creating accounts solely to claim deposit bonuses with no genuine intent to play. Detected via deposit-withdrawal velocity patterns (deposit, claim bonus, immediately withdraw), device and IP clustering across new accounts, and wagering requirement enforcement.',
                        severity: 'High',
                        severityColor: '#f59e0b',
                        mitigation: 'Minimum wagering requirements before withdrawal eligibility (e.g., 1x deposit amount in contest entry fees). Bonus wallet kept separate from real-money wallet at the ledger level.',
                      },
                      {
                        threat: 'Insider Information Exploitation',
                        desc: 'Users with access to non-public player data (injury reports, lineup decisions) entering contests before the information becomes public. Relevant for platform employees and contractors with data access.',
                        severity: 'High',
                        severityColor: '#f59e0b',
                        mitigation: 'Employee contest restrictions enforced at the account level via role-based flags. Audited data access logs. Contest ownership data revealed only after slate lock. Mandatory disclosure policy for all staff.',
                      },
                      {
                        threat: 'Payment Fraud',
                        desc: 'Stolen credit cards used for deposits. Chargeback abuse (deposit, win prizes, then dispute the original deposit via card issuer). Detected via Stripe Radar custom rules, velocity limits on new accounts, and withdrawal hold periods.',
                        severity: 'High',
                        severityColor: '#f59e0b',
                        mitigation: 'Stripe Radar with custom fraud rules tuned for DFS patterns. New account withdrawal holds (72 hours minimum). KYC identity verification required above $2K lifetime deposits. Chargeback ratio monitored as a key business metric.',
                      },
                    ].map(item => (
                      <div key={item.threat} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                          <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.threat}</p>
                          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.severityColor, background: `${item.severityColor}15`, padding: '3px 10px', borderRadius: 100 }}>{item.severity}</span>
                        </div>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 10px', lineHeight: 1.6 }}>{item.desc}</p>
                        <div style={{ padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)' }}>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.5 }}>
                            <strong style={{ color: '#22c55e' }}>Mitigation:</strong> {item.mitigation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', margin: '0 0 12px' }}>Responsible Gaming (Required in Licensed States)</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
                      {[
                        'Deposit limits (daily, weekly, monthly) configurable by user',
                        'Loss limits user-set with cooling-off enforcement',
                        'Session time reminders at configurable intervals',
                        'Self-exclusion (temporary: 24h/7d/30d, or permanent)',
                        'Problem gambling hotline display (1-800-522-4700)',
                        'Reality check popups showing session duration and net P&L',
                      ].map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', flexShrink: 0, marginTop: 6 }} />
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ─── MOBILE CONSIDERATIONS ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="mobile-considerations">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    iOS & Android: App Store Rules for Real-Money Fantasy
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Getting your fantasy sports app approved on the App Store and Google Play is not automatic. Both platforms have specific requirements for real-money fantasy sports that, if not met precisely, result in rejection or post-launch removal. Plan for a 4-6 week App Store review process that includes human review — not just automated scanning. Budget time for at least one rejection and resubmission cycle.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 20 }}>
                    {[
                      {
                        platform: 'Apple App Store',
                        guideline: 'App Store Review Guideline 4.7.1 — Real-Money Fantasy Sports',
                        requirements: [
                          'App must be free to download — paid downloads are not permitted for gambling or fantasy apps',
                          'App must be available only in jurisdictions where real-money fantasy sports is legal (Apple verifies via geo-restriction implementation review)',
                          'Prominently display all entry costs, prize structures, and odds of winning before any in-app purchase is confirmed',
                          'Age gate enforced at onboarding (18+ minimum, higher where legally required)',
                          'Apple Pay cannot be used for real-money contest entry fees — only for legitimate non-gambling in-app purchases',
                          'App must include responsible gaming tools, self-exclusion options, and links to problem gambling resources (NCPG)',
                          'Compliance documentation required at submission: legal opinions per jurisdiction, licensing certificates, proof of geo-blocking implementation',
                        ],
                        tip: 'Apple human reviewers will test your geo-blocking by spoofing location to prohibited states during review. Ensure geo-restriction uses both GPS coordinates and IP address — reviewers test both independently. Failure to block either will result in rejection.',
                      },
                      {
                        platform: 'Google Play Store',
                        guideline: 'Google Play Real Money Skill Games Policy',
                        requirements: [
                          'Must apply for approval via the Google Play Real Money Skills Games Programme (not available to all regions or all app categories)',
                          'Programme available in: US, UK, Ireland, France, Brazil, and select other countries — not globally',
                          'Must hold appropriate licences from authorities in each country where the app is offered',
                          'Age verification at account creation must be technically enforced, not honour-system checkbox only',
                          'In-app promotional offers must comply with local advertising regulations for gambling and gaming',
                          'Google Play Billing must be used for cosmetic in-app purchases; real-money contest entry fees must use external payment processors',
                          'Annual re-certification submission required to maintain Real Money Skill Games approval status',
                        ],
                        tip: 'Google Play\'s approval process for skill games typically takes 6-8 weeks — longer than a standard app review. Apply 3 months before your planned public launch date. During the approval wait period, you can distribute via direct APK download (Android sideloading) or TestFlight-equivalent closed testing tracks.',
                      },
                    ].map(item => (
                      <div key={item.platform} style={{ padding: '28px 32px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <p style={{ fontSize: 17, fontWeight: 800, color: '#ffffff', margin: '0 0 4px', letterSpacing: '-0.02em' }}>{item.platform}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: '0 0 16px', fontStyle: 'italic' }}>{item.guideline}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                          {item.requirements.map((req, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', flexShrink: 0, marginTop: 7 }} />
                              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{req}</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ padding: '12px 16px', borderRadius: 12, background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.1)' }}>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>
                            <strong style={{ color: '#22c55e' }}>Practical tip:</strong> {item.tip}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ─── TECH STACK ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack for a Fantasy Sports Platform
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      {
                        layer: 'Mobile Apps',
                        tech: 'React Native',
                        why: 'Cross-platform iOS and Android from a single codebase. React Native\'s gesture handler library handles the drag-and-drop draft room well. Faster iteration cycle than Flutter for early-stage startups. Native WebSocket support is straightforward with solid third-party libraries.',
                      },
                      {
                        layer: 'Web Frontend',
                        tech: 'Next.js (App Router)',
                        why: 'Server-side rendering for contest lobby pages (SEO and first-load performance). Client-side hydration for live leaderboard components. Next.js API routes handle lightweight webhook ingestion. Deploy on Vercel for zero-config CDN and edge rendering.',
                      },
                      {
                        layer: 'Backend API',
                        tech: 'Node.js (NestJS)',
                        why: 'Event-driven architecture ideal for real-time fantasy scoring workflows. NestJS provides structured modules (AuthModule, ContestModule, ScoringModule) that scale independently. TypeScript across the full stack reduces bugs in complex scoring and financial logic.',
                      },
                      {
                        layer: 'Scoring Microservice',
                        tech: 'Go (Golang)',
                        why: 'The scoring engine is CPU-intensive during NFL Sunday game windows (recalculating thousands of lineups per second). Go\'s goroutine concurrency model and raw computational performance make it the right choice for this specific hot-path workload. Deployed separately from the main API and scaled independently.',
                      },
                      {
                        layer: 'WebSocket Server',
                        tech: 'Ably (managed) or Socket.io Cluster',
                        why: 'Ably for getting to launch fast. Managed WebSocket infrastructure that handles connection distribution and fan-out without DevOps overhead. Switch to a self-hosted Socket.io cluster with a Redis adapter when Ably fees exceed approximately $5,000/month.',
                      },
                      {
                        layer: 'Message Queue',
                        tech: 'AWS SQS + EventBridge',
                        why: 'SQS decouples scoring workers from the API layer. EventBridge handles scheduling for automated contest creation from the sports calendar. Easier to operate than Kafka at startup scale. Upgrade to MSK (Managed Kafka) when processing exceeds 5 million events per day.',
                      },
                      {
                        layer: 'Primary Database',
                        tech: 'PostgreSQL (Aurora Serverless v2)',
                        why: 'Aurora Serverless v2 auto-scales read capacity during NFL Sunday peaks (10x normal database load) and scales down on weekdays. PostgreSQL row-level locking handles concurrent contest entry safely. Enable pgBouncer for connection pooling.',
                      },
                      {
                        layer: 'Cache & Leaderboard',
                        tech: 'Redis (AWS ElastiCache)',
                        why: 'Sorted sets for live leaderboards. Hash maps for active player stats cache. Pub/Sub for score update fan-out to WebSocket servers. ElastiCache with Multi-AZ replication. Enable cluster mode when single-node memory utilization exceeds 70%.',
                      },
                      {
                        layer: 'Sports Data',
                        tech: 'Sportradar (production) + SportsDataIO (MVP)',
                        why: 'Abstracted behind a DataProviderService interface. Configuration-driven provider selection per environment. Build and validate against SportsDataIO first (cheaper, simpler API), then migrate to Sportradar when paying users demand the SLA.',
                      },
                      {
                        layer: 'Payments',
                        tech: 'Stripe (MVP) then Worldpay (Scale)',
                        why: 'Stripe for fastest initial integration and MVP validation. Migrate to Worldpay when monthly GMV exceeds $100K for improved rates, a dedicated account manager, and stronger high-risk merchant programme guarantees.',
                      },
                      {
                        layer: 'Fraud Detection',
                        tech: 'FingerprintJS Pro + Stripe Radar + custom rules',
                        why: 'FingerprintJS Pro for device fingerprinting (99.5% browser/device accuracy). Stripe Radar for payment fraud with custom ML models. Custom Redis velocity rules (max 3 accounts per device, max 5 accounts per IP per day). Sift Science for advanced ML-based fraud scoring at enterprise scale.',
                      },
                      {
                        layer: 'Cloud Infrastructure',
                        tech: 'AWS (us-east-1 primary, us-west-2 DR)',
                        why: 'ECS Fargate for containerized microservices (no EC2 management). CloudFront CDN for static assets. Route 53 latency-based routing. us-east-1 primary for lowest latency to eastern US — the dominant DFS audience. CloudWatch and Datadog for observability and alerting.',
                      },
                    ].map(item => (
                      <div key={item.layer} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', margin: '0 0 8px' }}>{item.layer}</p>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.tech}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ─── COST BREAKDOWN ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: How Much Does a Fantasy Sports App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building a competitive fantasy sports platform is a significant investment. Costs vary widely based on format (DFS vs season-long), number of sports, real-time infrastructure requirements, and compliance overhead. The ranges below reflect projects built with North American development teams — offshore development can reduce costs by 30-45% while maintaining quality with the right partner.
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 32 }}>
                    {[
                      {
                        tier: 'Season-Long MVP',
                        price: '$100,000 – $160,000',
                        timeline: '5-6 months',
                        color: '#22c55e',
                        description: 'Single sport (NFL or NBA), private leagues, snake draft, basic weekly scoring, standard user wallet.',
                        features: [
                          'User auth and profile management',
                          'League creation and invite system',
                          'WebSocket-based snake draft room',
                          'Auto-pick and draft queue',
                          'Weekly matchup scoring (SportsDataIO)',
                          'Waiver wire management',
                          'iOS and Android apps (React Native)',
                          'Basic payment processing (Stripe)',
                          'Admin dashboard and CMS',
                          'League commissioner tools',
                        ],
                        notIncluded: 'DFS contests, lineup optimizer, real-time live scoring, fraud detection system',
                      },
                      {
                        tier: 'DFS Platform',
                        price: '$220,000 – $380,000',
                        timeline: '8-10 months',
                        color: '#3b82f6',
                        description: 'Daily fantasy with salary cap, GPP and cash games, live scoring engine, leaderboards, and core compliance.',
                        features: [
                          'Everything in Season-Long MVP',
                          'DFS contest lobby with all contest types',
                          'Salary cap lineup builder',
                          'Real-time scoring engine (Kafka + Redis)',
                          'Live leaderboard (WebSocket)',
                          'Late swap functionality',
                          'Sportradar API integration',
                          'Multi-entry lineup management',
                          'Automated prize settlement',
                          'Geo-blocking (IP + GPS)',
                          'Age verification integration',
                          'FingerprintJS fraud detection',
                          'Responsible gaming tools',
                          'App Store compliance package',
                        ],
                        notIncluded: 'Lineup optimizer, multi-sport support, ML-based collusion detection',
                      },
                      {
                        tier: 'Enterprise Platform',
                        price: '$400,000 – $600,000+',
                        timeline: '12-18 months',
                        color: '#a855f7',
                        description: 'Multi-sport DFS and season-long hybrid, lineup optimizer, advanced fraud detection, custom data science infrastructure.',
                        features: [
                          'Everything in DFS Platform',
                          'Multi-sport (NFL, NBA, MLB, NHL)',
                          'Lineup optimizer with exposure controls',
                          'Custom player projection engine',
                          'ML-based collusion detection',
                          'Multi-accounting detection system',
                          'Auction draft support',
                          'Season-long and DFS hybrid',
                          'Operator analytics platform',
                          'A/B testing framework',
                          'Multi-language and international support',
                          'Dedicated DevOps and 99.9% SLA infra',
                          'Full KYC/AML compliance stack',
                          'Promotions and bonus CMS',
                        ],
                        notIncluded: 'Sportradar data fees ($2-15K/month ongoing) not included in build cost',
                      },
                    ].map(tier => (
                      <div key={tier.tier} style={{ padding: '28px 32px', borderRadius: 28, background: 'rgba(255,255,255,0.02)', border: `1px solid ${tier.color}25`, borderLeft: `3px solid ${tier.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: tier.color, margin: '0 0 4px' }}>{tier.tier}</p>
                            <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: '0 0 6px', letterSpacing: '-0.03em' }}>{tier.price}</p>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{tier.description}</p>
                          </div>
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.03)', padding: '6px 16px', borderRadius: 100, flexShrink: 0 }}>{tier.timeline}</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8, marginBottom: 16 }}>
                          {tier.features.map(f => (
                            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <div style={{ width: 6, height: 6, borderRadius: '50%', background: tier.color, flexShrink: 0 }} />
                              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{f}</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.025)' }}>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
                            <strong style={{ color: 'rgba(255,255,255,0.45)' }}>Not included:</strong> {tier.notIncluded}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>Ongoing Monthly Operating Costs (Post-Launch)</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
                    {[
                      { item: 'Sportradar Data Feed', cost: '$2,000 – $15,000/mo', note: 'Varies by sport package and data volume commitments' },
                      { item: 'AWS Infrastructure', cost: '$1,500 – $8,000/mo', note: 'Scales with user count; peaks significantly on NFL Sundays' },
                      { item: 'Ably / WebSocket', cost: '$300 – $3,000/mo', note: 'Based on concurrent connection count and message volume' },
                      { item: 'FingerprintJS Pro', cost: '$100 – $500/mo', note: 'Per API call volume for device fingerprinting' },
                      { item: 'State Licensing Fees', cost: '$0 – $25,000/yr', note: 'Tennessee, Arizona, Iowa each require annual fees' },
                      { item: 'Payment Processing', cost: '2-3% of GMV', note: 'Lower rates negotiable at scale through Worldpay' },
                    ].map(item => (
                      <div key={item.item} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.item}</p>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', margin: '0 0 4px' }}>{item.cost}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Fantasy Sports Platform with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Fantasy sports platforms sit at the intersection of real-time systems engineering, payments infrastructure, legal compliance, and consumer product design. Very few development shops have deep experience in all four simultaneously. At Codazz, we have built high-frequency consumer platforms with WebSocket infrastructure, Kafka-based event processing, complex wallet and ledger systems, and compliance frameworks for regulated markets — the exact foundations a DFS or season-long platform requires.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    We do not build from templates. Your platform is engineered from first principles: a custom scoring engine tuned to your sports and contest formats, a fraud detection system calibrated to your risk profile, and an App Store submission package prepared to pass Apple and Google review. With offices in Edmonton, Canada and Chandigarh, India, we deliver at timezone coverage and cost efficiency that pure North American agencies cannot match.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{ padding: '14px 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
                        Get a Free Consultation
                      </button>
                    </Link>
                  </div>
                </div>

                {/* ─── FAQ ─── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{ width: '100%', padding: '20px 24px', background: 'rgba(255,255,255,0.02)', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left' }}
                        >
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

                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0 }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>Leading engineering strategy and product vision at Codazz. Has guided 500+ bespoke product launches globally across fintech, consumer apps, and regulated digital markets.</p>
                  </div>

                  <div style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 12 }}>Build Your Fantasy App</p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 16 }}>Get a fixed-price proposal for your fantasy sports platform within 48 hours.</p>
                    <Link href="/contact" style={{ textDecoration: 'none', display: 'block' }}>
                      <button style={{ width: '100%', padding: '12px 20px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                        Get a Free Estimate
                      </button>
                    </Link>
                  </div>

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
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 12 }}>Get Started</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>
                  Ready to Build Your Fantasy Sports Platform?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 500, lineHeight: 1.7 }}>
                  Share your concept with our team. We will review your format, sports selection, and target jurisdictions and deliver a detailed fixed-price proposal within 48 hours.
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
