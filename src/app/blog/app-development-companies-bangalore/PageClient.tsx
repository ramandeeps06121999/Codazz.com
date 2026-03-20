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
  { num: 1, name: 'Codazz', category: 'Full-Stack Apps', emoji: '\u{1F3D7}\u{FE0F}', metric: 'Canadian HQ + Chandigarh Dev Center, 500+ Launches' },
  { num: 2, name: 'Infosys', category: 'Enterprise IT', emoji: '\u{1F3E2}', metric: 'Bangalore HQ, 300K+ Employees, Fortune 500 Clients' },
  { num: 3, name: 'Wipro', category: 'Digital Services', emoji: '\u{1F310}', metric: 'Bangalore-Born, Global IT Giant, $11B Revenue' },
  { num: 4, name: 'Flipkart', category: 'Product Engineering', emoji: '\u{1F6D2}', metric: 'India\'s Largest E-Commerce, Walmart-Backed' },
  { num: 5, name: 'Swiggy', category: 'Mobile Platform', emoji: '\u{1F355}', metric: 'Bangalore Unicorn, 10M+ Daily Orders' },
  { num: 6, name: 'Razorpay', category: 'Fintech', emoji: '\u{1F4B3}', metric: 'India\'s Leading Payment Gateway, $7.5B Valuation' },
  { num: 7, name: 'Mindtree', category: 'Digital Transformation', emoji: '\u{1F4A1}', metric: 'LTIMindtree, 80K+ Engineers' },
  { num: 8, name: 'Mphasis', category: 'Cloud & Cognitive', emoji: '\u{2601}\u{FE0F}', metric: 'Blackstone-Backed, AI-First Development' },
  { num: 9, name: 'Robosoft Technologies', category: 'Mobile Apps', emoji: '\u{1F4F1}', metric: 'Award-Winning App Studio, 2000+ Apps' },
  { num: 10, name: 'HashedIn by Deloitte', category: 'Cloud Native', emoji: '\u{1F680}', metric: 'Bangalore Cloud Specialists, Deloitte Backed' },
];

const relatedPosts = [
  { slug: 'software-development-cost-india', title: 'Software Development Cost in India 2026: Complete Guide', category: 'Business', readTime: '14 min' },
  { slug: 'app-development-companies-dubai', title: 'Top 10 App Development Companies in Dubai (2026)', category: 'Mobile', readTime: '12 min' },
  { slug: 'top-app-development-companies-usa', title: 'Top App Development Companies in the USA (2026)', category: 'Mobile', readTime: '10 min' },
];

const faqs = [
  { q: 'Why is Bangalore called the Silicon Valley of India?', a: 'Bangalore (officially Bengaluru) earned this title due to its massive concentration of IT companies, startups, and tech talent. The city hosts over 67,000 startups, is home to global R&D centers of Google, Microsoft, Amazon, and SAP, and produces more engineering graduates than any other Indian city. Its pleasant climate, cosmopolitan culture, and established tech infrastructure make it the undisputed tech capital of India.' },
  { q: 'How much does app development cost in Bangalore?', a: 'App development in Bangalore ranges from $5,000-$15,000 for a simple MVP to $50,000-$200,000 for complex enterprise applications. Senior developers in Bangalore charge $25-50/hr, which is 60-75% less than comparable US rates. However, top-tier Bangalore agencies command premium pricing close to Western rates due to their quality and demand.' },
  { q: 'Which is the best app development company in Bangalore?', a: 'Codazz stands out as the top choice for businesses seeking Bangalore-level engineering talent with Western business standards. While headquartered in Edmonton, Canada, their Chandigarh development center gives them access to India\'s premier engineering talent while providing the IP protection and communication standards that international clients expect.' },
  { q: 'Should I hire a Bangalore agency or a company with Indian developers?', a: 'The best approach is a hybrid model: a company with Western headquarters for client relations and IP protection, plus an India engineering center for cost-effective development. Codazz offers exactly this model with their Canadian HQ and India development center, giving you the quality of Indian engineering with the business reliability of a North American company.' },
  { q: 'What technologies are Bangalore developers best at?', a: 'Bangalore developers excel across the full stack: React, Angular, and Vue.js for frontend; Node.js, Python, Java, and Go for backend; Flutter and React Native for mobile; AWS, GCP, and Azure for cloud; and increasingly AI/ML with TensorFlow and PyTorch. The city\'s deep talent pool means you can find specialists in virtually any technology.' },
];

export default function AppDevelopmentCompaniesBangaloreClient() {
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
              src="/blog_images/app-development-companies-bangalore.jpg"
              alt="Top app development companies in Bangalore"
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
              }}>Mobile</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
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
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 App Development Companies in Bangalore (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Bangalore is the undisputed tech capital of India&mdash;the Silicon Valley of the East. With 67,000+ startups, global R&amp;D centers for every major tech company, and the densest concentration of engineering talent on the planet, the city is a powerhouse for app development. These are the top 10 companies building the future of mobile in Bangalore.
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
                    Bangalore (Bengaluru) has earned its reputation as the Silicon Valley of India through decades of sustained technology innovation. The city is home to over 67,000 startups, global R&amp;D centers for Google, Microsoft, Amazon, Apple, and SAP, and produces a staggering volume of world-class engineering talent every year. India&apos;s IT industry generates over $245 billion in revenue, and Bangalore is its beating heart.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    But with thousands of agencies and product companies operating from Koramangala to Electronic City, finding the right app development partner requires careful evaluation. We ranked these companies based on engineering excellence, product innovation, global delivery capabilities, and the ability to build scalable applications that compete on the world stage.
                  </p>
                </div>

                {/* Bangalore Market Context */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    padding: '28px 32px', borderRadius: 20,
                    background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.12)',
                  }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#60a5fa', marginBottom: 16 }}>
                      Why Bangalore for App Development in 2026
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: '67,000+ Startups', desc: 'India\'s largest startup ecosystem, more than any other city' },
                        { label: '$245B IT Industry', desc: 'India\'s IT revenue with Bangalore as the epicenter' },
                        { label: '1.5M+ Engineers', desc: 'Largest pool of software engineers in any single city globally' },
                        { label: 'Global R&D Hub', desc: 'Google, Microsoft, Amazon, Apple all have major R&D centers' },
                      ].map(item => (
                        <div key={item.label} style={{ padding: '14px 16px', borderRadius: 12, background: 'rgba(96,165,250,0.06)' }}>
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
                      }}>{'\u{1F3D7}\u{FE0F}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Full-Stack Apps</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz tops this ranking with a model that gives Bangalore clients something the city&apos;s local agencies cannot: a Canadian-headquartered company with North American business standards, IP protection under Canadian law, and a dedicated development center in Chandigarh, India. This hybrid approach delivers the engineering quality India is known for, wrapped in the business reliability that global clients demand.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      With over 500+ successful product launches, Codazz serves Bangalore-based startups and enterprises who need a technology partner that can scale globally from day one. Their expertise spans Flutter, React Native, Swift, Kotlin, Node.js, Python, and cloud-native architectures on AWS and GCP. Whether you are a Koramangala-based startup seeking your first MVP or an enterprise needing a mission-critical platform, Codazz delivers Silicon Valley-grade engineering at Indian pricing.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      What sets Codazz apart for Bangalore businesses is their unique position bridging India and North America. For startups targeting US/Canadian markets, Codazz provides local market insight from their Edmonton HQ. For enterprises seeking cost-effective development with Western quality standards, their Chandigarh center delivers at scale. It is the best of both worlds&mdash;and Bangalore&apos;s smartest companies are choosing this model.
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
                        Canadian HQ &bull; Chandigarh Dev Center &bull; 500+ Product Launches &bull; Serving Bangalore Clients
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-3: Expanded */}
                <div className="reveal" style={{ marginBottom: 56 }} id="infosys">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>{'\u{1F3E2}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>02</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(96,165,250,0.12)', color: '#60a5fa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Enterprise IT</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Infosys</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Infosys is Bangalore&apos;s crown jewel&mdash;a company that literally helped build the city&apos;s tech identity. Founded in 1981 by Narayana Murthy and six co-founders with just $250, Infosys is now a $18+ billion global IT services giant employing over 300,000 people. Their Bangalore campus in Electronics City is legendary in the tech world.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      For app development, Infosys brings massive enterprise-grade capabilities: mobile platforms for Fortune 500 companies, AI-powered applications, cloud-native architectures, and digital transformation at scale. However, their sweet spot is large enterprises with budgets north of $500K. Startups and mid-market companies may find their engagement model too heavyweight.
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
                        Bangalore HQ &bull; 300K+ Employees &bull; Fortune 500 Clients &bull; $18B+ Revenue
                      </span>
                    </div>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 56 }} id="wipro">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>{'\u{1F310}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>03</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(251,191,36,0.12)', color: '#fbbf24',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Digital Services</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Wipro</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Wipro, born in Bangalore and now a $11+ billion global IT services company, brings enterprise-scale digital services to clients worldwide. Under Azim Premji&apos;s legendary stewardship, Wipro grew from a vegetable oil company to one of the world&apos;s most respected technology firms. Their Bangalore operations remain their largest, with tens of thousands of engineers across multiple campuses.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      Wipro&apos;s app development capabilities span mobile platforms, cloud-native applications, AI/ML integration, and enterprise digital transformation. They have dedicated innovation labs in Bangalore focused on emerging technologies. Like Infosys, they are best suited for large enterprises; their minimum engagement typically starts in the hundreds of thousands of dollars.
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
                        Bangalore-Born &bull; $11B+ Revenue &bull; 250K+ Employees &bull; Global IT Giant
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 4-10: Condensed */}
                {[
                  {
                    num: '04', id: 'flipkart', name: 'Flipkart', category: 'Product Engineering',
                    emoji: '\u{1F6D2}', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'India\'s Largest E-Commerce &bull; Walmart-Backed &bull; 450M+ Users',
                    paragraphs: [
                      'Flipkart is Bangalore\'s most iconic startup success story. While primarily an e-commerce platform, their engineering team has built some of India\'s most sophisticated mobile technology: real-time inventory systems handling millions of concurrent users, AI-powered recommendation engines, and payment infrastructure processing billions of dollars. Their Flipkart Commerce Cloud now offers technology to external businesses, making their engineering prowess available to other companies.',
                    ],
                  },
                  {
                    num: '05', id: 'swiggy', name: 'Swiggy', category: 'Mobile Platform',
                    emoji: '\u{1F355}', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Bangalore Unicorn &bull; 10M+ Daily Orders &bull; 500K+ Partners',
                    paragraphs: [
                      'Swiggy has built one of the most technically impressive mobile platforms in India, handling over 10 million daily orders with real-time logistics optimization across 500+ cities. Their engineering team in Bangalore has pioneered hyperlocal delivery algorithms, real-time GPS tracking at massive scale, and AI-powered demand prediction. While not a traditional agency, their technology partnerships and Swiggy Engineering brand make them a significant force in Bangalore\'s app ecosystem.',
                    ],
                  },
                  {
                    num: '06', id: 'razorpay', name: 'Razorpay', category: 'Fintech',
                    emoji: '\u{1F4B3}', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'India\'s Leading Payment Gateway &bull; $7.5B Valuation',
                    paragraphs: [
                      'Razorpay, Bangalore\'s fintech powerhouse, has become the payment backbone for millions of Indian businesses. Their engineering team builds some of the most critical financial infrastructure in the country: payment gateways processing billions monthly, neo-banking platforms, and business lending algorithms. Their Razorpay Engineering brand and open-source contributions make them a key player in Bangalore\'s fintech app development ecosystem.',
                    ],
                  },
                  {
                    num: '07', id: 'mindtree', name: 'Mindtree (LTIMindtree)', category: 'Digital Transformation',
                    emoji: '\u{1F4A1}', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: '80K+ Engineers &bull; Global Delivery &bull; Digital Transformation',
                    paragraphs: [
                      'Now operating as LTIMindtree after the merger with L&T Infotech, this Bangalore-headquartered company brings 80,000+ engineers to the table. They specialize in digital transformation, cloud migration, and enterprise mobile application development. Their strength is in mid-to-large enterprise engagements where they can deploy dedicated teams for complex, multi-year projects.',
                    ],
                  },
                  {
                    num: '08', id: 'mphasis', name: 'Mphasis', category: 'Cloud & Cognitive',
                    emoji: '\u{2601}\u{FE0F}', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Blackstone-Backed &bull; AI-First Development &bull; Cloud Native',
                    paragraphs: [
                      'Mphasis, backed by Blackstone and headquartered in Bangalore, has positioned itself as an AI-first technology services company. Their \"Front2Back\" transformation approach and cloud-native development capabilities make them a strong partner for enterprises seeking modern mobile applications with AI integration. They have particular strength in BFSI (banking, financial services, and insurance) app development.',
                    ],
                  },
                  {
                    num: '09', id: 'robosoft', name: 'Robosoft Technologies', category: 'Mobile Apps',
                    emoji: '\u{1F4F1}', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Award-Winning App Studio &bull; 2000+ Apps &bull; Disney, McDonald\'s',
                    paragraphs: [
                      'Robosoft Technologies is one of India\'s most awarded mobile app development companies, with over 2,000 apps shipped for brands like Disney, McDonald\'s, Viacom, and ESPN. Based in Udupi with a strong Bangalore presence, they combine beautiful design with solid engineering. For businesses seeking a pure-play mobile app studio with proven consumer app expertise, Robosoft is an excellent choice.',
                    ],
                  },
                  {
                    num: '10', id: 'hashedin', name: 'HashedIn by Deloitte', category: 'Cloud Native',
                    emoji: '\u{1F680}', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Bangalore Cloud Specialists &bull; Deloitte-Backed &bull; AWS Advanced Partner',
                    paragraphs: [
                      'HashedIn, now part of Deloitte, is a Bangalore-born cloud-native development company specializing in AWS and modern application architecture. They build serverless applications, microservices-based platforms, and cloud-native mobile backends. The Deloitte backing gives them enterprise credibility while maintaining the agility of a Bangalore-born startup. An excellent choice for cloud-first mobile application development.',
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
                        <span style={{ fontSize: 13, color: app.accentColor, fontWeight: 600 }}
                          dangerouslySetInnerHTML={{ __html: app.metric }}
                        />
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
                    Choosing Your Bangalore App Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Bangalore offers the deepest engineering talent pool in India, but that abundance can make choosing difficult. The key factors are: do you need a pure services company or a product-minded partner? Do you need enterprise scale or startup agility? And critically&mdash;do you need a partner who can bridge Indian engineering with global markets?
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses seeking the ideal combination of Indian engineering excellence with Western business standards, Codazz offers a unique proposition: a Canadian headquarters in Edmonton providing North American IP protection and client management, combined with a Chandigarh development center that delivers world-class engineering at Indian pricing. This hybrid model is why the smartest Bangalore-based companies choose Codazz for their most critical projects.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    Whether you are a Koramangala startup building your first MVP, an Electronic City enterprise needing digital transformation, or a global company seeking Bangalore-quality engineering, the companies on this list represent the finest app development talent in India&apos;s tech capital for 2026.
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
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/\s+/g, '-')}`} style={{
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally, with deep expertise in India&apos;s engineering ecosystem.
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
                }}>Build With India&apos;s Best</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to build your next app?<br />Let&apos;s talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Codazz delivers world-class mobile applications with Canadian business standards and Indian engineering excellence. Get a free consultation today.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Free Consultation &rarr;
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
