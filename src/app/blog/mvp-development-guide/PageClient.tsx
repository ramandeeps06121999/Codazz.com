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
  { id: 'what-is-mvp', label: 'What Is an MVP?', emoji: '🎯' },
  { id: '90-day-framework', label: '90-Day Framework', emoji: '📅' },
  { id: 'case-studies', label: 'Real Case Studies', emoji: '📊' },
  { id: 'costs', label: 'Development Costs', emoji: '💰' },
  { id: 'pitfalls', label: 'Common Pitfalls', emoji: '⚠️' },
  { id: 'post-mvp', label: 'Post-MVP Growth', emoji: '📈' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native: The Definitive 2026 Comparison', category: 'Engineering', readTime: '15 min' },
];

export default function MVPDevelopmentGuideClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop"
              alt="Startup team working on product launch"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 8, textAlign: 'center' }}>
              Photo by <a href="https://unsplash.com/@marvelous" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Marvin Meyer</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
            </p>
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
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
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 18, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
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
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              The Complete MVP Development Guide: From Idea to Launch in 90 Days
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Step-by-step guide to building a successful MVP in 90 days. Learn the framework, avoid common mistakes, and launch faster with proven strategies from 150+ MVPs.
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
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(180,253,131,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT GRID ── */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>
              
              {/* ── MAIN ARTICLE ── */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>
                
                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    I&apos;ve seen it hundreds of times.
                  </p>
                  <p>
                    Founders spend 12 months and $200,000 building the &ldquo;perfect&rdquo; product. They launch. Crickets.
                  </p>
                  <p>
                    Meanwhile, their competitor ships a basic version in 6 weeks, gets 10,000 users, raises funding, and dominates the market.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    The difference? They understood what an MVP actually is.
                  </p>
                  <p>
                    An MVP isn&apos;t a half-finished product. It&apos;s a <strong style={{ color: '#ffffff' }}>complete product with minimum features</strong> that solves a real problem for real users.
                  </p>
                  <p>
                    At Codazz, we&apos;ve launched <strong style={{ color: '#ffffff' }}>150+ MVPs</strong>. The successful ones follow a specific pattern. This guide shows you exactly what that pattern is.
                  </p>
                </div>

                {/* What is MVP */}
                <h2 id="what-is-mvp" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>What an MVP Actually Is (And Isn&apos;t)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&h=500&fit=crop"
                    alt="Product development and prototype design"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@headwayio" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Headway</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ff6b6b', marginTop: 32, marginBottom: 16 }}>
                  ❌ Common MVP Mistakes
                </h3>
                <div className="reveal" style={{ 
                  background: 'rgba(255,107,107,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,107,107,0.2)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Mistake</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Reality</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>&ldquo;MVP = Low Quality&rdquo;</td>
                        <td style={{ padding: '12px 8px' }}>Users won&apos;t tolerate bugs</td>
                        <td style={{ padding: '12px 8px' }}>Bad reviews, churn</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>&ldquo;MVP = All Features&rdquo;</td>
                        <td style={{ padding: '12px 8px' }}>Takes too long, costs too much</td>
                        <td style={{ padding: '12px 8px' }}>Competitor wins</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>&ldquo;Build First, Validate Later&rdquo;</td>
                        <td style={{ padding: '12px 8px' }}>Build something nobody wants</td>
                        <td style={{ padding: '12px 8px' }}>Total failure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  ✅ The Real MVP Definition
                </h3>
                <div className="reveal" style={{ 
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                    &ldquo;A Minimum Viable Product is the smallest thing you can build that delivers customer value and validates your business hypothesis.&rdquo; — Eric Ries
                  </p>
                </div>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Key Characteristics:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}>Solves ONE problem really well</li>
                    <li style={{ marginBottom: 8 }}>Has polished UX (not just functional)</li>
                    <li style={{ marginBottom: 8 }}>Can handle real user traffic</li>
                    <li style={{ marginBottom: 8 }}>Collects data for learning</li>
                    <li>Built in 6-12 weeks, not 6-12 months</li>
                  </ul>
                </div>

                {/* 90-Day Framework */}
                <h2 id="90-day-framework" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The 90-Day MVP Framework</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=500&fit=crop"
                    alt="Timeline planning and schedule"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@esteejanssens" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Estée Janssens</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{ 
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Phase 1: Discover (Days 1-30)</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Problem validation</li>
                      <li style={{ marginBottom: 8 }}>Customer interviews</li>
                      <li style={{ marginBottom: 8 }}>User personas</li>
                      <li>Clickable prototype</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Phase 2: Build (Days 31-75)</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Core development</li>
                      <li style={{ marginBottom: 8 }}>3-5 features max</li>
                      <li style={{ marginBottom: 8 }}>Testing & QA</li>
                      <li>Pre-launch polish</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Phase 3: Launch (Days 76-90)</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Soft launch</li>
                      <li style={{ marginBottom: 8 }}>Beta testing</li>
                      <li style={{ marginBottom: 8 }}>Public launch</li>
                      <li>Marketing activation</li>
                    </ul>
                  </div>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginTop: 32, marginBottom: 16 }}>
                  The MoSCoW Method
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#b4fd83' }}>M</strong>ust have: Critical for launch</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>S</strong>hould have: Important but not critical</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>C</strong>ould have: Nice to have</li>
                    <li><strong style={{ color: '#ff6b6b' }}>W</strong>on&apos;t have: Save for later</li>
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginTop: 32, marginBottom: 16 }}>
                  MVP Tech Stack (2026)
                </h3>
                <div className="reveal" style={{ 
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Layer</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Technology</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Frontend</strong></td>
                        <td style={{ padding: '12px 8px' }}>Flutter or React Native</td>
                        <td style={{ padding: '12px 8px' }}>Fast, cross-platform</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Backend</strong></td>
                        <td style={{ padding: '12px 8px' }}>Firebase or Supabase</td>
                        <td style={{ padding: '12px 8px' }}>Zero DevOps, fast setup</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Auth</strong></td>
                        <td style={{ padding: '12px 8px' }}>Firebase Auth or Auth0</td>
                        <td style={{ padding: '12px 8px' }}>Secure, pre-built</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Payments</strong></td>
                        <td style={{ padding: '12px 8px' }}>Stripe</td>
                        <td style={{ padding: '12px 8px' }}>Industry standard</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Case Studies */}
                <h2 id="case-studies" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Real MVP Case Studies</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop"
                    alt="Mobile app success and launch"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@mr_fresh" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Yura Fresh</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{ 
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12 }}>Case Study 1: Fitness App MVP</h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Budget:</strong> $25,000 | <strong>Timeline:</strong> 8 weeks</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>MVP Features:</strong> Workout logging, basic progress tracking, 20 pre-built workouts, simple profile</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Results:</strong> 5,000 users in first month, 4.6★ rating, $15K MRR by month 6, raised $500K seed</p>
                  <p style={{ fontSize: 14, margin: 0, color: '#b4fd83' }}><strong>Key Lesson:</strong> The core value was workout tracking. Everything else was noise.</p>
                </div>

                <div className="reveal" style={{ 
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12 }}>Case Study 2: B2B SaaS MVP</h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Budget:</strong> $45,000 | <strong>Timeline:</strong> 10 weeks</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>MVP Features:</strong> CSV upload, data visualization, PDF export, team sharing (5 users max)</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Results:</strong> 50 paying customers in 3 months, $8K MRR, 90% retention</p>
                  <p style={{ fontSize: 14, margin: 0, color: '#b4fd83' }}><strong>Key Lesson:</strong> B2B buyers need reliability over features.</p>
                </div>

                <div className="reveal" style={{ 
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12 }}>Case Study 3: Marketplace MVP</h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Budget:</strong> $35,000 | <strong>Timeline:</strong> 12 weeks</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>MVP Features:</strong> Provider profiles, booking system, basic search, Stripe payments, review system</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Results:</strong> 200 providers onboarded, 1,000 bookings in month 1, $25K GMV</p>
                  <p style={{ fontSize: 14, margin: 0, color: '#b4fd83' }}><strong>Key Lesson:</strong> Web-first MVP validated the model before expensive mobile development.</p>
                </div>

                {/* Costs */}
                <h2 id="costs" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>MVP Development Costs (2026)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop"
                    alt="Budget planning and cost breakdown"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@homajob" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Scott Graham</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{ 
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>MVP Type</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Simple</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Medium</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Complex</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Consumer App</strong></td>
                        <td style={{ padding: '12px 8px' }}>$15K-30K</td>
                        <td style={{ padding: '12px 8px' }}>$30K-60K</td>
                        <td style={{ padding: '12px 8px' }}>$60K-100K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>B2B SaaS</strong></td>
                        <td style={{ padding: '12px 8px' }}>$25K-45K</td>
                        <td style={{ padding: '12px 8px' }}>$45K-80K</td>
                        <td style={{ padding: '12px 8px' }}>$80K-150K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Marketplace</strong></td>
                        <td style={{ padding: '12px 8px' }}>$30K-50K</td>
                        <td style={{ padding: '12px 8px' }}>$50K-90K</td>
                        <td style={{ padding: '12px 8px' }}>$90K-180K</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>AI-Powered</strong></td>
                        <td style={{ padding: '12px 8px' }}>$35K-60K</td>
                        <td style={{ padding: '12px 8px' }}>$60K-120K</td>
                        <td style={{ padding: '12px 8px' }}>$120K-250K</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginTop: 32, marginBottom: 16 }}>
                  Cost Breakdown
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Development (60%):</strong> Frontend, backend, APIs, integrations</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Design (20%):</strong> UI/UX, prototyping, user testing</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Infrastructure (10%):</strong> Hosting, domain, tools</li>
                    <li><strong style={{ color: '#ffffff' }}>Project Management (10%):</strong> Requirements, sprints, documentation</li>
                  </ul>
                </div>

                {/* Pitfalls */}
                <h2 id="pitfalls" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Common MVP Pitfalls</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1621252179027-94459d27d3ee?w=800&h=500&fit=crop"
                    alt="Warning signs and caution for pitfalls"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@mojahidmottakin" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Mojahid Mottakin</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Feature Creep:</strong> &ldquo;Let&apos;s just add this one more thing...&rdquo; Cost: 3-month delay, $50K over budget. Prevention: Strict MoSCoW prioritization.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Perfectionism:</strong> &ldquo;It&apos;s not ready yet&rdquo; after 6 months. Prevention: Set hard launch date, define &ldquo;good enough&rdquo; criteria.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Wrong Tech Stack:</strong> Spending months on infrastructure. Prevention: Use proven stacks, avoid bleeding edge.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>No User Feedback Loop:</strong> Building in isolation for 4 months. Prevention: Weekly user testing from Week 2.</li>
                    <li><strong style={{ color: '#ff6b6b' }}>Ignoring Legal/Compliance:</strong> App rejected from store. Prevention: Legal review in Week 1.</li>
                  </ul>
                </div>

                {/* Post-MVP */}
                <h2 id="post-mvp" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Post-MVP: What Comes Next?</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
                    alt="Growth chart and success metrics"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@kmuza" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Carlos Muza</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{ 
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Month 1-3: Iterate</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Collect user feedback daily. Fix critical bugs. A/B test onboarding. Optimize conversion funnels.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Month 4-6: Product-Market Fit</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Measure retention (aim for 40%+ Day 30). Calculate unit economics. Identify power users.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Month 7-12: Scale</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Build Phase 2 features. Expand team. Increase marketing spend. Consider fundraising.</p>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="reveal" style={{ 
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Let&apos;s Build Your MVP
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    The best time to launch was yesterday. The second best time is now.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Start Your MVP Journey
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
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
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '8px 0', fontSize: 14,
                            color: activeSection === section.id ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #b4fd83' : '2px solid transparent',
                            paddingLeft: 12,
                          }}
                        >
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Related Posts */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          style={{
                            display: 'block', padding: 16,
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 12, textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{ fontSize: 11, color: '#b4fd83', fontWeight: 600 }}>{post.category}</span>
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
