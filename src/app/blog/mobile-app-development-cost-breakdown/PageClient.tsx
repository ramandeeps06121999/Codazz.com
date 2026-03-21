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
  { id: 'key-takeaways', label: 'Key Takeaways', emoji: '🔑' },
  { id: 'introduction', label: 'Introduction', emoji: '📖' },
  { id: 'cost-by-complexity', label: 'Cost by Complexity', emoji: '💰' },
  { id: 'ios-vs-android', label: 'iOS vs Android Costs', emoji: '📱' },
  { id: 'cross-platform', label: 'Cross-Platform Options', emoji: '🔄' },
  { id: 'cost-by-industry', label: 'Cost by Industry', emoji: '🏢' },
  { id: 'hidden-costs', label: 'Hidden Costs', emoji: '🔍' },
  { id: 'maintenance-costs', label: 'Maintenance & Updates', emoji: '🔧' },
  { id: 'team-structure', label: 'Team Structure & Rates', emoji: '👥' },
  { id: 'reduce-costs', label: 'How to Reduce Costs', emoji: '📉' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Cost Guide', readTime: '14 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native in 2026: Which to Choose?', category: 'Engineering', readTime: '13 min' },
  { slug: 'mvp-development-guide', title: 'MVP Development Guide: Build, Launch & Validate', category: 'Strategy', readTime: '15 min' },
];

export default function MobileAppDevelopmentCostBreakdownClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* -- FEATURED IMAGE -- */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/mobile-app-development-cost-breakdown.jpg"
              alt="mobile app development cost breakdown 2026"
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
        <section style={{ padding: 'clamp(100px, 14vw, 160px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">

            {/* Breadcrumbs */}
            <div className="reveal" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <Link href="/" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>/</span>
              <Link href="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}>Blog</Link>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>/</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Mobile App Development Cost Breakdown</span>
            </div>

            {/* Category + Date + Read Time */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(34,197,94,0.12)', color: '#22c55e',
                padding: '5px 14px', borderRadius: 100,
              }}>Cost Guide</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                16 min read
              </span>
            </div>

            {/* Title */}
            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Mobile App Development Cost Breakdown 2026: Complete Guide
            </h1>

            {/* Subtitle */}
            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A detailed breakdown of mobile app development costs in 2026 &mdash; from simple apps to enterprise-grade platforms, across iOS, Android, and cross-platform. Real budgets, hidden costs, and strategies to save.
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
                  background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#22c55e',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* MAIN ARTICLE */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* KEY TAKEAWAYS */}
                <div id="key-takeaways" className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(0,0,0,0.4) 100%)',
                  borderRadius: 28, padding: 'clamp(24px, 4vw, 40px)', marginBottom: 48,
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: '#22c55e', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 24 }}>🔑</span> Key Takeaways
                  </h2>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Simple apps cost $15K&ndash;$50K,</strong> medium complexity $50K&ndash;$150K, and enterprise-grade apps $150K&ndash;$500K+ in 2026.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Cross-platform saves 30&ndash;40%</strong> over building separate native iOS and Android apps, with near-native performance in 2026.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Hidden costs add 25&ndash;40%</strong> &mdash; backend infrastructure, third-party APIs, app store fees, analytics, and security audits.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Maintenance runs 15&ndash;20% annually</strong> of the initial build cost &mdash; budget for it from day one.</li>
                    <li style={{ marginBottom: 0 }}><strong style={{ color: '#ffffff' }}>MVP-first approach</strong> can reduce initial costs by 60&ndash;70% while validating product-market fit.</li>
                  </ul>
                </div>

                {/* INTRODUCTION */}
                <h2 id="introduction" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why App Development Costs Are Misunderstood</h2>

                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    &ldquo;How much does it cost to build an app?&rdquo; is the most common question we hear &mdash; and the most poorly answered across the internet. Generic ranges like &ldquo;$10K to $500K&rdquo; aren&apos;t helpful.
                  </p>
                  <p>
                    The real answer depends on your app&apos;s complexity, platform strategy (iOS, Android, or both), backend requirements, third-party integrations, and the team you hire. In 2026, AI tooling has reduced some development time, but user expectations for design quality, performance, and security have simultaneously risen.
                  </p>
                  <p>
                    This guide provides a granular breakdown by category, so you can build a realistic budget &mdash; not a wishful one.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    At <Link href="/services/mobile-development" style={{ color: '#22c55e', textDecoration: 'underline', textUnderlineOffset: 4 }}>Codazz</Link>, we&apos;ve built 100+ mobile apps across industries. Here&apos;s what real projects actually cost.
                  </p>
                </div>

                {/* COST BY COMPLEXITY */}
                <h2 id="cost-by-complexity" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Cost Breakdown by App Complexity</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    App complexity is the single biggest cost driver. Here&apos;s a detailed breakdown by tier with real feature examples and timelines.
                  </p>
                </div>

                {/* Simple App */}
                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 'clamp(24px, 3vw, 32px)',
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', marginBottom: 16 }}>Tier 1: Simple Apps &mdash; $15K&ndash;$50K</h3>
                  <p style={{ marginBottom: 16 }}><strong style={{ color: '#ffffff' }}>Timeline:</strong> 6&ndash;10 weeks &nbsp;|&nbsp; <strong style={{ color: '#ffffff' }}>Team size:</strong> 2&ndash;3 developers</p>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Features:</strong> User authentication, basic CRUD operations, push notifications, simple UI with 5&ndash;10 screens.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Examples:</strong> Informational apps, simple booking tools, task managers, event apps.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Backend:</strong> Firebase or Supabase BaaS &mdash; reduces server-side costs by 40&ndash;60%.</li>
                    <li style={{ marginBottom: 0 }}><strong style={{ color: '#ffffff' }}>Design:</strong> Template-based UI with light customization. No custom illustrations or animations.</li>
                  </ul>
                </div>

                {/* Medium App */}
                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 'clamp(24px, 3vw, 32px)',
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#b4fd83', marginBottom: 16 }}>Tier 2: Medium Complexity &mdash; $50K&ndash;$150K</h3>
                  <p style={{ marginBottom: 16 }}><strong style={{ color: '#ffffff' }}>Timeline:</strong> 3&ndash;6 months &nbsp;|&nbsp; <strong style={{ color: '#ffffff' }}>Team size:</strong> 3&ndash;5 developers</p>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Features:</strong> Payment integration (Stripe/PayPal), real-time chat, maps &amp; location, social login, admin dashboard, analytics.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Examples:</strong> E-commerce apps, fitness trackers, on-demand service apps, social platforms.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Backend:</strong> Custom API with Node.js/Python, PostgreSQL database, Redis caching, S3 storage.</li>
                    <li style={{ marginBottom: 0 }}><strong style={{ color: '#ffffff' }}>Design:</strong> Custom UI/UX design, micro-interactions, onboarding flows, responsive across devices.</li>
                  </ul>
                </div>

                {/* Complex App */}
                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 'clamp(24px, 3vw, 32px)',
                  border: '1px solid rgba(34,197,94,0.15)', marginBottom: 48,
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', marginBottom: 16 }}>Tier 3: Enterprise / Complex &mdash; $150K&ndash;$500K+</h3>
                  <p style={{ marginBottom: 16 }}><strong style={{ color: '#ffffff' }}>Timeline:</strong> 6&ndash;12+ months &nbsp;|&nbsp; <strong style={{ color: '#ffffff' }}>Team size:</strong> 6&ndash;12+ developers</p>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Features:</strong> AI/ML integration, video streaming, real-time sync, multi-tenant architecture, complex role-based access, offline mode.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Examples:</strong> Fintech platforms, telehealth apps, marketplace apps (Uber-style), enterprise SaaS.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Backend:</strong> Microservices architecture, Kubernetes orchestration, multiple databases, message queues, CDN.</li>
                    <li style={{ marginBottom: 0 }}><strong style={{ color: '#ffffff' }}>Compliance:</strong> HIPAA, PCI-DSS, SOC 2, GDPR &mdash; add $20K&ndash;$60K for compliance implementation and audits.</li>
                  </ul>
                </div>

                {/* iOS VS ANDROID */}
                <h2 id="ios-vs-android" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>iOS vs Android: Platform-Specific Costs</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Building for both platforms separately (native) costs roughly 1.8&ndash;2x of a single platform &mdash; not exactly double, because backend, design, and project management are shared.
                  </p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 'clamp(24px, 3vw, 40px)',
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 48,
                }}>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                      <thead>
                        <tr>
                          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#22c55e', fontWeight: 700 }}>Factor</th>
                          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#22c55e', fontWeight: 700 }}>iOS (Swift)</th>
                          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#22c55e', fontWeight: 700 }}>Android (Kotlin)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Development cost', '$25K&ndash;$250K', '$25K&ndash;$250K'],
                          ['Device fragmentation', 'Low (15&ndash;20 models)', 'Very high (1000+ models)'],
                          ['Testing effort', 'Lower', '30&ndash;40% higher'],
                          ['App Store fee', '$99/year', '$25 one-time'],
                          ['Review time', '24&ndash;48 hours', '2&ndash;7 days'],
                          ['Revenue per user', 'Higher (1.5&ndash;2x)', 'Lower globally'],
                          ['Developer hourly rate', '$100&ndash;$180 (US)', '$100&ndash;$180 (US)'],
                        ].map(([factor, ios, android], i) => (
                          <tr key={i}>
                            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#ffffff', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: factor }} />
                            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }} dangerouslySetInnerHTML={{ __html: ios }} />
                            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }} dangerouslySetInnerHTML={{ __html: android }} />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* CROSS-PLATFORM */}
                <h2 id="cross-platform" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Cross-Platform: The Cost-Effective Alternative</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    In 2026, cross-platform frameworks have matured to near-native quality. <Link href="/blog/flutter-vs-react-native-2026" style={{ color: '#22c55e', textDecoration: 'underline', textUnderlineOffset: 4 }}>Flutter and React Native</Link> now deliver 95%+ of native performance for most app categories.
                  </p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 'clamp(24px, 3vw, 32px)',
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', marginBottom: 16 }}>Cross-Platform Cost Savings</h3>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Flutter:</strong> Single codebase for iOS, Android, web, and desktop. 70&ndash;80% code sharing. Cost: 60&ndash;70% of two native apps.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>React Native:</strong> JavaScript-based with native modules. 65&ndash;75% code sharing. Easier hiring from web dev pool.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Kotlin Multiplatform (KMP):</strong> Share business logic across platforms while keeping native UI. 40&ndash;60% code sharing.</li>
                    <li style={{ marginBottom: 0 }}><strong style={{ color: '#ffffff' }}>When to stay native:</strong> AR/VR-heavy apps, games, apps requiring bleeding-edge platform APIs, or apps where UI performance is the core differentiator.</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(0,0,0,0.4) 100%)',
                  borderRadius: 28, padding: 'clamp(20px, 3vw, 32px)',
                  border: '1px solid rgba(34,197,94,0.2)', marginBottom: 48,
                }}>
                  <p style={{ fontSize: 16, color: '#b4fd83', fontWeight: 600, margin: 0, lineHeight: 1.7 }}>
                    Bottom line: For 80% of business apps, cross-platform saves $30K&ndash;$120K versus building two native apps, with negligible quality trade-offs.
                  </p>
                </div>

                {/* COST BY INDUSTRY */}
                <h2 id="cost-by-industry" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Cost Breakdown by Industry</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Different industries have different regulatory, security, and feature requirements that dramatically affect cost.
                  </p>
                </div>

                {[
                  { title: 'Healthcare & Telehealth', range: '$80K&ndash;$350K', details: 'HIPAA compliance ($15K&ndash;$30K), EHR integration, video consultations, appointment scheduling, secure messaging. FDA approval for medical devices adds $50K&ndash;$150K.' },
                  { title: 'Fintech & Banking', range: '$100K&ndash;$500K', details: 'PCI-DSS compliance, KYC/AML verification, real-time transaction processing, multi-currency support, biometric authentication, fraud detection AI.' },
                  { title: 'E-commerce & Marketplace', range: '$60K&ndash;$250K', details: 'Product catalog, search & filters, payment gateway, order management, reviews, push notifications, inventory sync, seller dashboard for marketplaces.' },
                  { title: 'On-Demand Services', range: '$70K&ndash;$300K', details: 'Real-time GPS tracking, matching algorithms, dual apps (customer + provider), surge pricing, rating systems, route optimization.' },
                  { title: 'Social & Communication', range: '$80K&ndash;$400K', details: 'Real-time messaging (WebSocket), media sharing, content moderation, news feeds, stories, live streaming adds $40K&ndash;$80K.' },
                ].map((industry, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 'clamp(24px, 3vw, 32px)',
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 16,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{industry.title}</h3>
                      <span style={{ fontSize: 16, fontWeight: 700, color: '#22c55e' }}>{industry.range}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 15 }}>{industry.details}</p>
                  </div>
                ))}

                {/* HIDDEN COSTS */}
                <h2 id="hidden-costs" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Hidden Costs Most Budgets Miss</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    The development quote is just the starting point. These frequently-overlooked costs can add 25&ndash;40% to your total budget.
                  </p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 'clamp(24px, 3vw, 32px)',
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 48,
                }}>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 14 }}><strong style={{ color: '#ffffff' }}>Backend infrastructure:</strong> Cloud hosting ($200&ndash;$2,000/month), CDN, database hosting, SSL certificates, load balancers. Often not included in app development quotes.</li>
                    <li style={{ marginBottom: 14 }}><strong style={{ color: '#ffffff' }}>Third-party APIs:</strong> Maps ($2&ndash;$7/1K requests), SMS verification ($0.01&ndash;$0.05/message), payment processing (2.9% + $0.30 per transaction), push notification services.</li>
                    <li style={{ marginBottom: 14 }}><strong style={{ color: '#ffffff' }}>QA &amp; testing:</strong> Manual + automated testing across devices typically runs 15&ndash;25% of development cost. Skipping it costs more in bug fixes later.</li>
                    <li style={{ marginBottom: 14 }}><strong style={{ color: '#ffffff' }}>App store optimization:</strong> Screenshots, descriptions, A/B testing, keyword research &mdash; $2K&ndash;$8K initial setup plus ongoing.</li>
                    <li style={{ marginBottom: 14 }}><strong style={{ color: '#ffffff' }}>Legal &amp; compliance:</strong> Privacy policy, terms of service, GDPR/CCPA compliance, accessibility audits &mdash; $3K&ndash;$15K.</li>
                    <li style={{ marginBottom: 0 }}><strong style={{ color: '#ffffff' }}>Analytics &amp; monitoring:</strong> Crashlytics, performance monitoring, user analytics, A/B testing tools &mdash; $100&ndash;$500/month for production-grade tools.</li>
                  </ul>
                </div>

                {/* MAINTENANCE */}
                <h2 id="maintenance-costs" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Maintenance &amp; Ongoing Costs</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Launching an app is not the end &mdash; it&apos;s the beginning. Plan for 15&ndash;20% of your initial build cost annually for maintenance, and more if you&apos;re actively adding features.
                  </p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 'clamp(24px, 3vw, 32px)',
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', marginBottom: 16 }}>Annual Maintenance Budget</h3>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>OS updates:</strong> Both Apple and Google release major OS updates annually. Compatibility testing and fixes: $5K&ndash;$20K per update cycle.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Bug fixes &amp; patches:</strong> Ongoing monitoring and issue resolution: $1K&ndash;$5K/month depending on app complexity.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Security updates:</strong> Dependency updates, vulnerability patching, penetration testing: $3K&ndash;$10K/year.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Performance optimization:</strong> Database query tuning, caching improvements, API optimization as user base grows.</li>
                    <li style={{ marginBottom: 0 }}><strong style={{ color: '#ffffff' }}>Feature updates:</strong> New features to stay competitive: budget $3K&ndash;$15K/month for continuous development.</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(0,0,0,0.4) 100%)',
                  borderRadius: 28, padding: 'clamp(20px, 3vw, 32px)',
                  border: '1px solid rgba(34,197,94,0.2)', marginBottom: 48,
                }}>
                  <p style={{ fontSize: 16, color: '#b4fd83', fontWeight: 600, margin: 0, lineHeight: 1.7 }}>
                    Example: A $100K app will cost $15K&ndash;$20K/year in maintenance alone. Over 3 years, your total investment is $145K&ndash;$160K &mdash; plan accordingly.
                  </p>
                </div>

                {/* TEAM STRUCTURE */}
                <h2 id="team-structure" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Team Structure &amp; Regional Rates</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Where you hire has the single biggest impact on your total budget. Here&apos;s what typical teams cost by region in 2026.
                  </p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 'clamp(24px, 3vw, 40px)',
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 48,
                }}>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                      <thead>
                        <tr>
                          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#22c55e', fontWeight: 700 }}>Region</th>
                          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#22c55e', fontWeight: 700 }}>Hourly Rate</th>
                          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#22c55e', fontWeight: 700 }}>Medium App Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['US / Canada', '$120&ndash;$200/hr', '$100K&ndash;$250K'],
                          ['Western Europe', '$100&ndash;$170/hr', '$80K&ndash;$200K'],
                          ['Eastern Europe', '$50&ndash;$100/hr', '$40K&ndash;$120K'],
                          ['India', '$25&ndash;$60/hr', '$20K&ndash;$80K'],
                          ['South America', '$40&ndash;$80/hr', '$35K&ndash;$100K'],
                          ['Middle East (UAE)', '$80&ndash;$150/hr', '$70K&ndash;$180K'],
                        ].map(([region, rate, cost], i) => (
                          <tr key={i}>
                            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#ffffff', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: region }} />
                            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }} dangerouslySetInnerHTML={{ __html: rate }} />
                            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }} dangerouslySetInnerHTML={{ __html: cost }} />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* REDUCE COSTS */}
                <h2 id="reduce-costs" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>How to Reduce App Development Costs</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 'clamp(24px, 3vw, 32px)',
                  border: '1px solid rgba(255,255,255,0.06)', marginBottom: 48,
                }}>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 14 }}><strong style={{ color: '#22c55e' }}>Start with an MVP.</strong> Build only the 3&ndash;5 core features. Validate with real users before investing in the full product. <Link href="/blog/mvp-development-guide" style={{ color: '#22c55e', textDecoration: 'underline', textUnderlineOffset: 4 }}>Read our MVP guide</Link>.</li>
                    <li style={{ marginBottom: 14 }}><strong style={{ color: '#22c55e' }}>Use cross-platform frameworks.</strong> Flutter or React Native can save 30&ndash;40% versus building two native apps.</li>
                    <li style={{ marginBottom: 14 }}><strong style={{ color: '#22c55e' }}>Leverage BaaS (Backend-as-a-Service).</strong> Firebase, Supabase, or AWS Amplify eliminate custom backend costs for simpler apps.</li>
                    <li style={{ marginBottom: 14 }}><strong style={{ color: '#22c55e' }}>Prioritize ruthlessly.</strong> Every additional feature adds 5&ndash;15% to cost. Cut nice-to-haves and ship faster.</li>
                    <li style={{ marginBottom: 14 }}><strong style={{ color: '#22c55e' }}>Choose the right partner.</strong> Agencies with domain expertise ship faster and avoid costly mistakes. False savings from the cheapest option often cost more in rework.</li>
                    <li style={{ marginBottom: 0 }}><strong style={{ color: '#22c55e' }}>Use AI-assisted development.</strong> In 2026, AI coding assistants reduce boilerplate code time by 20&ndash;30%, translating to measurable cost savings.</li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 28, padding: 'clamp(32px, 5vw, 48px)', marginTop: 64, marginBottom: 48, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Need an Accurate Cost Estimate for Your App?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 12, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                    Generic cost ranges are not useful. At Codazz, we provide detailed project estimates based on your specific requirements, timeline, and platform strategy &mdash; with offices in Edmonton and Chandigarh.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 28, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', fontSize: 15 }}>
                    Get a free, no-obligation cost breakdown for your app idea.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#22c55e', color: '#000000',
                    padding: '16px 32px', borderRadius: 12,
                    fontWeight: 700, textDecoration: 'none', fontSize: 16,
                    transition: 'transform 0.2s',
                  }}>
                    Get Free Cost Estimate
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  {
                    q: 'How much does a simple mobile app cost in 2026?',
                    a: 'A simple app with basic features (user auth, CRUD operations, 5-10 screens) costs $15K-$50K depending on the platform and development team location. Using cross-platform frameworks like Flutter can bring this to the lower end of the range.',
                  },
                  {
                    q: 'Is it cheaper to build for iOS or Android first?',
                    a: 'Development costs are roughly equal for both platforms. However, iOS has less device fragmentation which can reduce testing costs by 10-15%. The strategic choice should depend on your target audience: iOS users tend to have higher spending power, while Android has greater global reach.',
                  },
                  {
                    q: 'How much does app maintenance cost per year?',
                    a: 'Plan for 15-20% of your initial development cost annually. A $100K app will need $15K-$20K/year for OS compatibility updates, bug fixes, security patches, and minor improvements. Active feature development costs additional.',
                  },
                  {
                    q: 'Can I build an app for under $10,000?',
                    a: 'It\'s possible with no-code/low-code platforms (FlutterFlow, Adalo) or offshore freelancers, but expect significant limitations in performance, customization, and scalability. For a production-quality app that users will pay for, $15K-$25K is the realistic minimum.',
                  },
                  {
                    q: 'How does Codazz help reduce app development costs?',
                    a: 'We use an MVP-first methodology, cross-platform frameworks where appropriate, and our Edmonton + Chandigarh team structure provides North American quality at competitive rates. We\'ve helped startups launch apps for 30-40% less than typical US agency quotes. Contact us for a detailed cost breakdown for your specific project.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden',
                  }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: '100%', textAlign: 'left', padding: '20px 24px',
                        background: 'transparent', border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                      }}
                    >
                      <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', margin: 0 }}>{faq.q}</h3>
                      <span style={{
                        fontSize: 20, color: '#22c55e', flexShrink: 0,
                        transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}>+</span>
                    </button>
                    <div style={{
                      maxHeight: openFaq === i ? 400 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                    }}>
                      <p style={{
                        fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.7,
                        padding: '0 24px 20px 24px',
                      }}>{faq.a}</p>
                    </div>
                  </div>
                ))}

                {/* FINAL CTA */}
                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 'clamp(32px, 5vw, 48px)',
                  marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Ready to Build Your Mobile App?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 28, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                    Whether you need an MVP for $25K or an enterprise platform for $300K+, Codazz delivers production-quality apps on time and on budget.
                  </p>
                  <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: '#22c55e', color: '#000000',
                      padding: '14px 28px', borderRadius: 12,
                      fontWeight: 700, textDecoration: 'none',
                      transition: 'transform 0.2s',
                    }}>
                      Get Started
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link href="/services/mobile-development" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'transparent', color: '#22c55e',
                      padding: '14px 28px', borderRadius: 12,
                      fontWeight: 600, textDecoration: 'none',
                      border: '1px solid rgba(34,197,94,0.3)',
                      transition: 'all 0.2s',
                    }}>
                      Our Services
                    </Link>
                  </div>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  {/* Table of Contents */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {tocSections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '6px 0', fontSize: 13,
                          color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
                          paddingLeft: 12,
                        }}>
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Related Articles */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          display: 'block', padding: 16,
                          background: 'rgba(255,255,255,0.03)',
                          borderRadius: 12, textDecoration: 'none',
                          border: '1px solid rgba(255,255,255,0.06)',
                          transition: 'all 0.2s',
                        }}>
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
