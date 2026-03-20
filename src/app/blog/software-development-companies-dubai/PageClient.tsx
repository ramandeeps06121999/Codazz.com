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

const companies = [
  { num: 1, name: 'Codazz', category: 'Enterprise & AI', emoji: '🏗️', metric: 'Dubai Office + Global Dev, 500+ Launches' },
  { num: 2, name: 'Careem (Uber)', category: 'Super App Engineering', emoji: '🚗', metric: 'Dubai-Born, Acquired by Uber for $3.1B' },
  { num: 3, name: 'G42', category: 'AI & Cloud', emoji: '🤖', metric: 'Abu Dhabi AI Powerhouse, $10B+ Valuation' },
  { num: 4, name: 'Mashreq Neo', category: 'Digital Banking', emoji: '🏦', metric: 'UAE\'s First Digital-Only Bank' },
  { num: 5, name: 'DarkMatter', category: 'Cybersecurity', emoji: '🔒', metric: 'UAE-Born Cybersecurity Leader' },
  { num: 6, name: 'Deriv', category: 'Fintech Platform', emoji: '📈', metric: 'Dubai-HQ, Trading Platform' },
  { num: 7, name: 'Kitopi', category: 'Cloud Kitchen Tech', emoji: '🍳', metric: 'Dubai Unicorn, Smart Kitchen Platform' },
  { num: 8, name: 'Presight AI', category: 'Big Data Analytics', emoji: '📊', metric: 'G42 Subsidiary, Government AI' },
  { num: 9, name: 'Property Finder', category: 'PropTech', emoji: '🏠', metric: 'MENA Real Estate Platform' },
  { num: 10, name: 'Anghami', category: 'Media Tech', emoji: '🎵', metric: 'MENA Music Streaming, Publicly Listed' },
];

const relatedPosts = [
  { slug: 'app-development-companies-dubai', title: 'Top 10 App Development Companies in Dubai (2026)', category: 'Mobile', readTime: '12 min' },
  { slug: 'app-development-cost-dubai', title: 'How Much Does App Development Cost in Dubai? (2026)', category: 'Business', readTime: '10 min' },
  { slug: 'app-development-companies-saudi-arabia', title: 'Top 10 App Development Companies in Saudi Arabia (2026)', category: 'Mobile', readTime: '10 min' },
];

const faqs = [
  { q: 'What makes Dubai a hub for software development?', a: 'Dubai offers a unique combination of 0% corporate tax, world-class infrastructure, strategic timezone bridging Asia and Europe, government-backed tech initiatives (Smart Dubai, DIFC), and a diverse talent pool from 200+ nationalities. Free zones like Dubai Internet City, DIFC, and DMCC Tech provide favorable regulatory environments for tech companies.' },
  { q: 'How much does custom software development cost in Dubai?', a: 'Custom software development in Dubai ranges from AED 100,000 for simple web applications to AED 5,000,000+ for complex enterprise platforms. SaaS products typically cost AED 300,000-1,200,000 to build. Hybrid models like Codazz can deliver the same quality for 40-60% less than purely local Dubai agencies.' },
  { q: 'Should I hire a Dubai software company or build an in-house team?', a: 'For most businesses, partnering with a Dubai software company is more cost-effective and faster than building in-house. In-house teams require 3-6 months of recruitment, AED 30,000-50,000/month per senior developer, plus office space and benefits. A development partner like Codazz can start delivering in weeks, not months.' },
  { q: 'What technologies do Dubai software companies specialize in?', a: 'Leading Dubai software companies work with modern tech stacks including React/Next.js, Flutter, React Native, Node.js, Python, cloud platforms (AWS, Azure, GCP), AI/ML frameworks, blockchain (Solidity, Hyperledger), and enterprise systems (SAP, Oracle). Arabic NLP and AI models are a growing specialization unique to the Gulf market.' },
  { q: 'Do I need UAE data hosting for my software?', a: 'For government contracts, financial services, and healthcare applications, UAE data residency is often mandatory. AWS has a Middle East region in Bahrain, Microsoft Azure has UAE North (Dubai) and UAE Central (Abu Dhabi), and Oracle has a Dubai Cloud region. Data hosting adds AED 5,000-50,000/year depending on scale and compliance requirements.' },
];

export default function SoftwareDevelopmentCompaniesDubaiClient() {
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
              src="/blog_images/software-development-companies-dubai.jpg"
              alt="Top software development companies in Dubai"
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

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Engineering</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                11 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top Software Development Companies in Dubai (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Beyond mobile apps, Dubai is home to world-class software engineering across enterprise platforms, SaaS products, AI systems, fintech infrastructure, and cybersecurity. From billion-dollar exits to government AI initiatives, these are the companies defining Dubai&apos;s software engineering landscape in 2026.
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

        {/* ARTICLE BODY + SIDEBAR */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* MAIN ARTICLE */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Dubai&apos;s software development ecosystem has matured far beyond mobile apps. The emirate now hosts some of the most sophisticated engineering operations in the Middle East&mdash;from Careem&apos;s $3.1 billion super app platform to G42&apos;s cutting-edge AI infrastructure and DarkMatter&apos;s nation-grade cybersecurity systems. The Smart Dubai initiative, DIFC&apos;s fintech sandbox, and Dubai Internet City have created a fertile ground for world-class software engineering.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This ranking goes beyond app studios to evaluate companies building enterprise software, SaaS platforms, AI systems, and complex infrastructure. We assessed engineering depth, technical innovation, scalability of solutions delivered, and their impact on Dubai&apos;s tech ecosystem.
                  </p>
                </div>

                {/* Dubai Software Ecosystem */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    padding: '28px 32px', borderRadius: 20,
                    background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.12)',
                  }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#a78bfa', marginBottom: 16 }}>
                      Dubai&apos;s Software Engineering Ecosystem in 2026
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Dubai Internet City', desc: '1,600+ tech companies in dedicated free zone' },
                        { label: 'DIFC Fintech Hive', desc: 'Middle East\'s largest fintech accelerator' },
                        { label: '$3.1B Careem Exit', desc: 'Largest tech acquisition in MENA history' },
                        { label: 'G42 AI Cluster', desc: 'Government-backed AI with $10B+ investments' },
                        { label: 'Smart Dubai 2030', desc: 'Blockchain, AI, and IoT city-wide integration' },
                        { label: '0% Corporate Tax', desc: 'Free zone companies exempt from taxation' },
                      ].map(item => (
                        <div key={item.label} style={{ padding: '14px 16px', borderRadius: 12, background: 'rgba(167,139,250,0.06)' }}>
                          <p style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{item.label}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Company 1: Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 0, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🏗️</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Enterprise & AI</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz claims the top position for custom software development in Dubai with a breadth of engineering capability that few agencies can match. While the other companies on this list are primarily product companies (building their own platforms), Codazz is the premier choice for businesses that need to build custom software&mdash;whether that&apos;s a SaaS platform, enterprise system, AI-powered application, or complex web portal.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Their Dubai office serves as the Gulf command center for enterprise engagements, while their engineering teams in India and Canada deliver across the full technology spectrum: cloud-native microservices architectures on AWS and Azure, AI/ML pipelines using TensorFlow and PyTorch, cross-platform mobile apps in Flutter and React Native, and enterprise web applications in Next.js and Node.js. They have deep expertise in Dubai-specific requirements&mdash;Arabic-first interfaces, UAE data residency compliance, DIFC regulatory frameworks, and Smart Dubai integration standards.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      With 500+ product launches globally and a growing Gulf portfolio spanning fintech, logistics, healthcare, and e-commerce, Codazz delivers Big Four consultancy-grade engineering at a fraction of the cost. For any Dubai business that needs custom software built right the first time, Codazz is the definitive choice.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                        Dubai Office &bull; 500+ Launches &bull; Enterprise, SaaS, AI, Mobile
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company 2: Careem */}
                <div className="reveal" style={{ marginBottom: 56 }} id="careem">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🚗</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>02</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(96,165,250,0.12)', color: '#60a5fa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Super App Engineering</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Careem (Uber)</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Careem represents the pinnacle of Dubai-born software engineering. Founded in Dubai and acquired by Uber for $3.1 billion&mdash;the largest tech acquisition in MENA history&mdash;Careem&apos;s engineering team built a super app platform handling ride-hailing, food delivery, payments, and fintech across 100+ cities in 13 countries. Their Dubai engineering hub continues to operate semi-independently, building the super app for the Middle East.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      Their engineering achievements include real-time matching algorithms optimized for Gulf traffic patterns, a complete digital wallet (Careem Pay), and a microservices architecture handling millions of daily requests. While they build primarily for their own platform, Careem&apos;s engineering standards set the benchmark for Dubai software companies.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#60a5fa', fontWeight: 600 }}>
                        $3.1B Exit &bull; Super App Platform &bull; 100+ Cities
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company 3: G42 */}
                <div className="reveal" style={{ marginBottom: 56 }} id="g42">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🤖</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>03</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(251,191,36,0.12)', color: '#fbbf24',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>AI & Cloud</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>G42</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      G42 is the UAE&apos;s AI and cloud computing powerhouse, valued at over $10 billion with strategic investments from Microsoft and Silver Lake. Based in Abu Dhabi, G42 builds large-scale AI infrastructure including large language models trained on Arabic data, cloud computing platforms, and AI-powered government solutions. Their Jais LLM is one of the most capable Arabic language models ever built.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      G42&apos;s subsidiaries include Presight AI (big data analytics), Injazat (cloud services), and Core42 (AI infrastructure). They represent the future of UAE tech&mdash;sovereign AI capabilities that reduce dependence on Western cloud providers. While primarily focused on government and large enterprise clients, their technology stack influences the entire Gulf software ecosystem.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#fbbf24', fontWeight: 600 }}>
                        $10B+ Valuation &bull; Jais Arabic LLM &bull; Sovereign AI
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 4-10: Condensed */}
                {[
                  {
                    num: '04', id: 'mashreq-neo', name: 'Mashreq Neo', category: 'Digital Banking',
                    emoji: '🏦', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'UAE\'s First Digital-Only Bank',
                    paragraphs: [
                      'Mashreq Neo is a masterclass in digital banking engineering. As the UAE\'s first fully digital bank, their engineering team built a complete banking platform from scratch—account opening in minutes, instant card issuance, AI-powered spending insights, and seamless integration with UAE payment infrastructure (Mada, WPS, UAEFTS). Their mobile app is consistently rated among the best banking apps in the Middle East.',
                    ],
                  },
                  {
                    num: '05', id: 'darkmatter', name: 'DarkMatter', category: 'Cybersecurity',
                    emoji: '🔒', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'UAE-Born Cybersecurity Leader',
                    paragraphs: [
                      'DarkMatter is a UAE-born cybersecurity firm providing nation-grade digital security solutions. Their software engineers build advanced threat detection platforms, secure communication systems, and critical infrastructure protection tools. They represent the highest tier of software engineering in the Gulf, where security is not an afterthought but the core product.',
                    ],
                  },
                  {
                    num: '06', id: 'deriv', name: 'Deriv', category: 'Fintech Platform',
                    emoji: '📈', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Dubai-HQ, Trading Platform',
                    paragraphs: [
                      'Deriv (formerly Binary.com) is a Dubai-headquartered fintech company that has built one of the most sophisticated online trading platforms in the world. Their engineering team handles millions of transactions daily with sub-millisecond latency, building complex derivatives pricing engines and real-time data streaming infrastructure. A showcase of high-performance financial software engineering.',
                    ],
                  },
                  {
                    num: '07', id: 'kitopi', name: 'Kitopi', category: 'Cloud Kitchen Tech',
                    emoji: '🍳', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Dubai Unicorn, Smart Kitchen Platform',
                    paragraphs: [
                      'Kitopi is a Dubai-born unicorn that built proprietary smart kitchen management software powering cloud kitchens across the Gulf. Their platform orchestrates kitchen operations, order routing, inventory management, and real-time demand prediction using AI. A prime example of Dubai software innovation solving real operational challenges at scale.',
                    ],
                  },
                  {
                    num: '08', id: 'presight-ai', name: 'Presight AI', category: 'Big Data Analytics',
                    emoji: '📊', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'G42 Subsidiary, Government AI',
                    paragraphs: [
                      'Presight AI (a G42 subsidiary, publicly listed on ADX) builds big data analytics platforms for government and enterprise clients across the UAE. Their software processes petabytes of data for national security, healthcare analytics, and smart city operations. They represent the cutting edge of Arabic-language data processing and AI analytics in the Gulf.',
                    ],
                  },
                  {
                    num: '09', id: 'property-finder', name: 'Property Finder', category: 'PropTech',
                    emoji: '🏠', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'MENA Real Estate Platform',
                    paragraphs: [
                      'Property Finder has built the dominant real estate technology platform in the Middle East, processing millions of property listings and connecting buyers with developers across the GCC. Their engineering team has built sophisticated search algorithms, virtual tour technology, and market analytics tools purpose-built for the Gulf real estate market.',
                    ],
                  },
                  {
                    num: '10', id: 'anghami', name: 'Anghami', category: 'Media Tech',
                    emoji: '🎵', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'MENA Music Streaming, Publicly Listed',
                    paragraphs: [
                      'Anghami is the leading music streaming platform in the Middle East, publicly listed on NASDAQ. Built with a deep understanding of Arabic music cataloging, their engineering team has created sophisticated recommendation engines tuned for Arabic and Middle Eastern music preferences, low-latency streaming optimized for Gulf mobile networks, and an advertising platform serving the MENA market.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 24, padding: 36,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                          background: `${app.bgColor}0.1)`, border: `1px solid ${app.bgColor}0.2)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                        }}>{app.emoji}</div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}0.12)`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                          </div>
                          <h2 style={{
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                            letterSpacing: '-0.03em', margin: 0,
                          }}>{app.name}</h2>
                        </div>
                      </div>
                      {app.paragraphs.map((para, pi) => (
                        <p key={pi} style={{
                          fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                          marginBottom: pi < app.paragraphs.length - 1 ? 16 : 20,
                        }}>{para}</p>
                      ))}
                      <div style={{
                        padding: '14px 20px', borderRadius: 12,
                        background: `${app.bgColor}0.06)`, border: `1px solid ${app.bgColor}0.12)`,
                        display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={app.accentColor} strokeWidth="2">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                        </svg>
                        <span style={{ fontSize: 13, color: app.accentColor, fontWeight: 600 }}>
                          {app.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Conclusion */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Choosing Your Dubai Software Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Dubai&apos;s software development landscape is remarkably diverse. From billion-dollar super apps to sovereign AI infrastructure, the emirate has proven that world-class software can be built in the Middle East. The key distinction in this ranking is between product companies (who build for themselves) and service companies (who build for you).
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    If you need custom software built&mdash;whether a SaaS platform, enterprise application, AI system, or mobile app&mdash;Codazz offers the most compelling value proposition: a Dubai office for strategy and client engagement, world-class engineering from global development centers, and pricing that is 40-60% lower than purely local agencies or Big Four consultancies.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    The other companies on this list have proven that Dubai-born software can compete on the global stage. Whether you are building the next Careem or need an enterprise platform for your growing Gulf business, the talent exists to make it happen.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 32,
                  }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, overflow: 'hidden',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px', background: 'none', border: 'none',
                            color: '#ffffff', fontSize: 16, fontWeight: 600, textAlign: 'left',
                            cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', gap: 16,
                          }}
                        >
                          {faq.q}
                          <span style={{
                            fontSize: 20, color: 'rgba(255,255,255,0.3)', flexShrink: 0,
                            transform: openFaq === i ? 'rotate(45deg)' : 'none',
                            transition: 'transform 0.2s',
                          }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {companies.map(app => (
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s()]+/g, '-')}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{app.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{app.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{app.category}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally, including enterprise platforms for Gulf-region clients.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
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

        {/* BOTTOM CTA */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#ffffff', marginBottom: 12,
                }}>Build With Codazz Dubai</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Need custom software for the Gulf?<br />Let&apos;s build it.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  From enterprise platforms to AI-powered applications, Codazz delivers world-class software development for Dubai and the wider Gulf market. Dubai office, global engineering. Let&apos;s talk.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Contact Dubai Office →
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
