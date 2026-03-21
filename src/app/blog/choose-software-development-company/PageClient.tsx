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
  { id: 'evaluation', label: '7 Dimensions of Evaluation', emoji: '📊' },
  { id: 'scorecard', label: 'Evaluation Scorecard', emoji: '📝' },
  { id: 'red-flags', label: 'Red Flags', emoji: '🚩' },
  { id: 'selection-process', label: 'Selection Process', emoji: '🔍' },
  { id: 'pricing', label: 'Pricing & Value', emoji: '💰' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
  { slug: 'remote-development-team-guide', title: 'How to Build a Remote Development Team', category: 'Business', readTime: '15 min' },
];

export default function ChooseSoftwareCompanyClient() {
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
              src="/blog_images/choose-software-development-company.jpg"
              alt="Business decision making and choosing partner"
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
                16 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              How to Choose a Software Development Company: The 2026 Decision Framework
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The complete framework for evaluating and choosing a software development company. 7 dimensions, red flags, scorecards, and a step-by-step selection process.
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
                    Choosing the wrong development partner is expensive.
                  </p>
                  <p>
                    I&apos;ve talked to founders who lost:
                  </p>
                  <div className="reveal" style={{ margin: '24px 0' }}>
                    <ul style={{ paddingLeft: 24, margin: 0 }}>
                      <li style={{ marginBottom: 12 }}><strong style={{ color: '#ff6b6b' }}>$80,000</strong> to an agency that delivered unusable code</li>
                      <li style={{ marginBottom: 12 }}><strong style={{ color: '#ff6b6b' }}>12 months</strong> to a team that kept missing deadlines</li>
                      <li><strong style={{ color: '#ff6b6b' }}>Their entire startup</strong> because the product never launched</li>
                    </ul>
                  </div>
                  <p>
                    But I&apos;ve also seen founders who:
                  </p>
                  <div className="reveal" style={{ margin: '24px 0' }}>
                    <ul style={{ paddingLeft: 24, margin: 0 }}>
                      <li style={{ marginBottom: 12 }}>Built <strong style={{ color: '#b4fd83' }}>$10M+ businesses</strong> with the right technical partner</li>
                      <li style={{ marginBottom: 12 }}>Launched in <strong style={{ color: '#b4fd83' }}>8 weeks</strong> instead of 8 months</li>
                      <li>Scaled from MVP to enterprise with the same trusted team</li>
                    </ul>
                  </div>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    The difference isn&apos;t luck. It&apos;s knowing how to evaluate partners.
                  </p>
                  <p>
                    After 10 years running Codazz and hearing thousands of horror stories, here&apos;s the exact framework I recommend.
                  </p>
                </div>

                {/* Evaluation */}
                <h2 id="evaluation" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The 7 Dimensions of Evaluation</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="/blog_images/choose-software-development-company.jpg"
                    alt="Evaluation criteria and assessment framework"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  1. Technical Expertise (The Foundation)
                </h3>
                <div className="reveal" style={{ 
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ff6b6b', fontSize: 14 }}>Red Flag 🚩</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Green Flag ✅</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>&ldquo;We can do everything&rdquo;</td>
                        <td style={{ padding: '12px 8px' }}>Deep expertise in your specific tech stack</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Outdated technologies</td>
                        <td style={{ padding: '12px 8px' }}>Modern stack (React, Flutter, Node, cloud-native)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>No senior developers</td>
                        <td style={{ padding: '12px 8px' }}>70%+ senior/staff engineers</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>No code reviews</td>
                        <td style={{ padding: '12px 8px' }}>Strict quality assurance process</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  2. Communication (Where Most Fail)
                </h3>
                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="/blog_images/choose-software-development-company.jpg"
                    alt="Team communication and collaboration"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                </div>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Communication Structure to Demand:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong>Daily:</strong> Standup (15 min) or async update</li>
                    <li style={{ marginBottom: 8 }}><strong>Weekly:</strong> Demo + planning (1 hour)</li>
                    <li style={{ marginBottom: 8 }}><strong>Bi-weekly:</strong> Retrospective + roadmap review</li>
                    <li><strong>Monthly:</strong> Strategic planning + metrics review</li>
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  3. Process & Methodology
                </h3>
                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="/blog_images/choose-software-development-company.jpg"
                    alt="Agile development and scrum process"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                </div>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Green Flags in Process:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}>✅ CI/CD pipelines</li>
                    <li style={{ marginBottom: 8 }}>✅ Automated testing</li>
                    <li style={{ marginBottom: 8 }}>✅ Infrastructure as Code</li>
                    <li style={{ marginBottom: 8 }}>✅ Monitoring and alerting</li>
                    <li>✅ Regular security audits</li>
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  4. Portfolio & References
                </h3>
                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  5. Cultural Fit
                </h3>
                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  6. Pricing & Value
                </h3>
                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  7. Post-Launch Support
                </h3>

                {/* Scorecard */}
                <h2 id="scorecard" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The Evaluation Scorecard</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="/blog_images/choose-software-development-company.jpg"
                    alt="Score rating and evaluation scorecard"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                </div>

                <div className="reveal" style={{ 
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Dimension</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Technical Expertise</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>25%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Communication</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>20%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Process & Quality</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>15%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Portfolio & References</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>15%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Cultural Fit</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>10%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Pricing & Value</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>10%</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>Post-Launch Support</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="reveal" style={{ fontSize: 16, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                  Minimum Thresholds: Technical (4/5), Communication (4/5), Portfolio (3/5). Overall: 3.5/5 minimum.
                </p>

                {/* Red Flags */}
                <h2 id="red-flags" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Red Flags: When to Walk Away</h2>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p style={{ marginBottom: 12, color: '#ff6b6b', fontWeight: 600 }}>Immediate Deal Breakers 🚫</p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}>No Contract or Vague Terms — &ldquo;We&apos;ll figure out the details later&rdquo;</li>
                    <li style={{ marginBottom: 12 }}>Unrealistic Promises — &ldquo;We&apos;ll build Facebook in 2 months for $10K&rdquo;</li>
                    <li style={{ marginBottom: 12 }}>Poor Communication from Day 1 — Slow responses during sales process</li>
                    <li style={{ marginBottom: 12 }}>No Technical Leadership — Can&apos;t speak with a senior developer</li>
                    <li>No Portfolio or References — &ldquo;Our work is confidential&rdquo;</li>
                  </ul>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p style={{ marginBottom: 12, color: '#ffa500', fontWeight: 600 }}>Warning Signs ⚠️</p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}>Pushes you toward their preferred tech (not yours)</li>
                    <li style={{ marginBottom: 8 }}>No testing/QA process</li>
                    <li style={{ marginBottom: 8 }}>No documentation deliverables</li>
                    <li style={{ marginBottom: 8 }}>Extremely low price (50%+ below market)</li>
                    <li>Poor online reviews</li>
                  </ul>
                </div>

                {/* Selection Process */}
                <h2 id="selection-process" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The Selection Process: Step-by-Step</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="/blog_images/choose-software-development-company.jpg"
                    alt="Process steps and workflow"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                </div>

                <div className="reveal" style={{ 
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Week 1: Research</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Create longlist of 10-15 companies. Use Clutch, LinkedIn, referrals.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Week 2: Screening</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Send RFP to 10 companies. Narrow to 5 based on response quality.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Week 3: Deep Dive</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Discovery calls, technical interviews, reference checks.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Week 4: Decision</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Final evaluation, negotiation, contract review.</p>
                  </div>
                </div>

                {/* Pricing */}
                <h2 id="pricing" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Pricing & Value</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="/blog_images/choose-software-development-company.jpg"
                    alt="Pricing cost comparison and budget"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                </div>

                <div className="reveal" style={{ 
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Region</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Junior</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Senior</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Architect</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>North America</strong></td>
                        <td style={{ padding: '12px 8px' }}>$80-120</td>
                        <td style={{ padding: '12px 8px' }}>$180-250</td>
                        <td style={{ padding: '12px 8px' }}>$250-400</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Western Europe</strong></td>
                        <td style={{ padding: '12px 8px' }}>$60-100</td>
                        <td style={{ padding: '12px 8px' }}>$150-200</td>
                        <td style={{ padding: '12px 8px' }}>$200-300</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Eastern Europe</strong></td>
                        <td style={{ padding: '12px 8px' }}>$30-50</td>
                        <td style={{ padding: '12px 8px' }}>$80-120</td>
                        <td style={{ padding: '12px 8px' }}>$120-180</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>South Asia</strong></td>
                        <td style={{ padding: '12px 8px' }}>$15-30</td>
                        <td style={{ padding: '12px 8px' }}>$50-80</td>
                        <td style={{ padding: '12px 8px' }}>$80-120</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="reveal" style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                  Remember: Cheaper hourly rates ≠ lower total cost. A $150/hour team that delivers in 100 hours = $15,000. A $75/hour team that takes 300 hours = $22,500.
                </p>

                {/* CTA Section */}
                <div className="reveal" style={{ 
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Why Companies Choose Codazz
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Transparent communication, technical excellence, startup DNA, and long-term partnerships.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Schedule a Call
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
