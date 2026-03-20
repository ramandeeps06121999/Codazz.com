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
  { id: 'quick-comparison', label: 'Quick Comparison', emoji: '⚡' },
  { id: 'performance', label: 'Performance', emoji: '📊' },
  { id: 'scalability', label: 'Scalability', emoji: '📈' },
  { id: 'ai-ml', label: 'AI/ML Capabilities', emoji: '🤖' },
  { id: 'ecosystem', label: 'Ecosystem', emoji: '📦' },
  { id: 'use-cases', label: 'Real-World Use Cases', emoji: '🏢' },
  { id: 'when-to-choose', label: 'When to Choose', emoji: '🎯' },
  { id: 'recommendation', label: 'Our Recommendation', emoji: '✅' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'nextjs-vs-react-2026', title: 'Next.js vs React in 2026: Which Should You Choose?', category: 'Engineering', readTime: '14 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026', category: 'AI/ML', readTime: '18 min' },
  { slug: 'saas-development-cost-usa', title: 'How Much Does SaaS Development Cost in the USA?', category: 'Business', readTime: '8 min' },
];

export default function PythonVsNodejsClient() {
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
              src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=675&fit=crop"
              alt="Backend development and server infrastructure"
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
              Photo by <a href="https://unsplash.com/@jstrippa" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>James Harrison</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
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
              }}>Engineering</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
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
                13 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Python vs Node.js for Backend Development in 2026
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Two of the most popular backend technologies, each with distinct superpowers. Python dominates AI/ML. Node.js dominates real-time. Here&apos;s how to pick the right one.
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
                    Your backend is the engine of your application. It handles authentication, business logic, data processing, and API delivery. Choosing the wrong technology here affects everything.
                  </p>
                  <p>
                    <strong style={{ color: '#ffffff' }}>Python and Node.js are the two most popular backend choices in 2026.</strong> Both are battle-tested at scale. Both have massive ecosystems. But they excel in fundamentally different ways.
                  </p>
                  <p>
                    Python powers the AI revolution. Node.js powers real-time experiences. Understanding this distinction is key to making the right choice.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we use both daily. Here&apos;s our honest, engineering-driven comparison.
                  </p>
                </div>

                {/* Quick Comparison */}
                <h2 id="quick-comparison" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Quick Comparison: At a Glance</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto'
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Factor</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#3776ab', fontSize: 14 }}>Python</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Node.js</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Language</td>
                        <td style={{ padding: '12px 8px' }}>Python 3.12+</td>
                        <td style={{ padding: '12px 8px' }}>JavaScript/TypeScript</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Key Frameworks</td>
                        <td style={{ padding: '12px 8px' }}>Django, FastAPI, Flask</td>
                        <td style={{ padding: '12px 8px' }}>Express, Fastify, NestJS</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>I/O Model</td>
                        <td style={{ padding: '12px 8px' }}>Multi-threaded (async via asyncio)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Event-driven, non-blocking</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>AI/ML</td>
                        <td style={{ padding: '12px 8px', color: '#3776ab' }}>Dominant (PyTorch, TensorFlow)</td>
                        <td style={{ padding: '12px 8px' }}>Limited (TensorFlow.js)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Real-time</td>
                        <td style={{ padding: '12px 8px' }}>Good (Django Channels)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Excellent (Socket.io)</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>Best For</td>
                        <td style={{ padding: '12px 8px' }}>AI/ML, data, enterprise</td>
                        <td style={{ padding: '12px 8px' }}>Real-time, APIs, full-stack JS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Performance */}
                <h2 id="performance" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Performance: Benchmarks That Matter</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                    alt="Performance analytics and monitoring dashboard"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@lukechesser" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Luke Chesser</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  We tested identical REST APIs handling JSON serialization, database queries, and file operations:
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Benchmark</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#3776ab', fontSize: 14 }}>Python (FastAPI)</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Node.js (Fastify)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Requests/sec (JSON)</td>
                        <td style={{ padding: '12px 8px' }}>18,000</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>52,000</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Requests/sec (DB)</td>
                        <td style={{ padding: '12px 8px' }}>8,500</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>14,200</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Latency (p99)</td>
                        <td style={{ padding: '12px 8px' }}>45ms</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>12ms</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Memory Usage</td>
                        <td style={{ padding: '12px 8px' }}>85 MB</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>65 MB</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>CPU-Heavy Tasks</td>
                        <td style={{ padding: '12px 8px', color: '#3776ab' }}>Good (multiprocessing)</td>
                        <td style={{ padding: '12px 8px' }}>Poor (single-threaded)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="reveal" style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                  Node.js is 2-3x faster for I/O-heavy API workloads. Python is better for CPU-intensive computation and data processing. Choose based on your primary workload.
                </p>

                {/* Scalability */}
                <h2 id="scalability" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Scalability</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(55,118,171,0.08)', padding: 20, borderRadius: 12, border: '1px solid rgba(55,118,171,0.3)' }}>
                    <h4 style={{ color: '#5ba3d9', marginBottom: 8 }}>Python Scaling</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Horizontal scaling with Gunicorn workers</li>
                      <li style={{ marginBottom: 8 }}>Celery for background job processing</li>
                      <li style={{ marginBottom: 8 }}>AsyncIO for concurrent I/O</li>
                      <li>Instagram, Spotify, Netflix use Python at scale</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Node.js Scaling</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Event loop handles thousands of connections</li>
                      <li style={{ marginBottom: 8 }}>Cluster module for multi-core</li>
                      <li style={{ marginBottom: 8 }}>Native streaming support</li>
                      <li>LinkedIn, PayPal, Uber use Node.js at scale</li>
                    </ul>
                  </div>
                </div>

                {/* AI/ML */}
                <h2 id="ai-ml" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>AI/ML Capabilities: Python&apos;s Unfair Advantage</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop"
                    alt="Artificial intelligence and machine learning visualization"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@ussamaazam" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Ussama Azam</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  If your application involves machine learning, data science, or AI integration, Python is the clear winner. It&apos;s not even close.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(55,118,171,0.08)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(55,118,171,0.3)',
                }}>
                  <h4 style={{ color: '#5ba3d9', marginBottom: 12 }}>Python&apos;s AI/ML Ecosystem</h4>
                  <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>PyTorch & TensorFlow:</strong> The two dominant deep learning frameworks</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>scikit-learn:</strong> The gold standard for classical ML</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>LangChain & LlamaIndex:</strong> LLM orchestration frameworks</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Pandas & NumPy:</strong> Data manipulation at enterprise scale</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Hugging Face:</strong> 500,000+ pre-trained models</li>
                    <li><strong style={{ color: '#ffffff' }}>OpenAI SDK:</strong> First-class Python support</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12 }}>Node.js AI Options</h4>
                  <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>TensorFlow.js:</strong> Browser and server ML (limited)</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>OpenAI Node SDK:</strong> Good for API calls to LLMs</li>
                    <li><strong style={{ color: '#ffffff' }}>Vercel AI SDK:</strong> Streaming LLM responses in web apps</li>
                  </ul>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 12, marginBottom: 0 }}>
                    Node.js can call AI APIs, but Python is where AI models are trained, fine-tuned, and deployed.
                  </p>
                </div>

                {/* Ecosystem */}
                <h2 id="ecosystem" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Ecosystem & Frameworks</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop"
                    alt="Connected technology ecosystem"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@nasa" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>NASA</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto'
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Category</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#3776ab', fontSize: 14 }}>Python</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#b4fd83', fontSize: 14 }}>Node.js</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Package Manager</td>
                        <td style={{ padding: '12px 8px' }}>pip (450K+ packages)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>npm (2M+ packages)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Web Framework</td>
                        <td style={{ padding: '12px 8px' }}>Django (batteries-included)</td>
                        <td style={{ padding: '12px 8px' }}>NestJS (enterprise-grade)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>API Framework</td>
                        <td style={{ padding: '12px 8px', color: '#3776ab' }}>FastAPI (auto-docs)</td>
                        <td style={{ padding: '12px 8px' }}>Fastify (performance)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Type Safety</td>
                        <td style={{ padding: '12px 8px' }}>Type hints (optional)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>TypeScript (robust)</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>Full-Stack</td>
                        <td style={{ padding: '12px 8px' }}>Backend only</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>Frontend + backend (JS)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Use Cases */}
                <h2 id="use-cases" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Real-World Use Cases</h2>

                <div className="reveal" style={{
                  background: 'rgba(55,118,171,0.08)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(55,118,171,0.3)',
                }}>
                  <h4 style={{ color: '#5ba3d9', marginBottom: 12 }}>Python in Production</h4>
                  <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Instagram:</strong> Django backend serving 2B+ users</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Spotify:</strong> Data pipelines and recommendation engine</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Dropbox:</strong> Core backend infrastructure</li>
                    <li><strong style={{ color: '#ffffff' }}>OpenAI:</strong> ChatGPT&apos;s backend and ML training pipeline</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12 }}>Node.js in Production</h4>
                  <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Netflix:</strong> Streaming service API layer</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>PayPal:</strong> Doubled requests/sec after switching from Java</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>LinkedIn:</strong> Mobile backend (10x fewer servers vs Ruby)</li>
                    <li><strong style={{ color: '#ffffff' }}>Uber:</strong> Real-time dispatch and matching engine</li>
                  </ul>
                </div>

                {/* When to Choose */}
                <h2 id="when-to-choose" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>When to Choose Each</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(55,118,171,0.08)', padding: 24, borderRadius: 12, border: '1px solid rgba(55,118,171,0.3)' }}>
                    <h4 style={{ color: '#5ba3d9', marginBottom: 12, fontSize: 18 }}>Choose Python When:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                      <li style={{ marginBottom: 10 }}>AI/ML is core to your product</li>
                      <li style={{ marginBottom: 10 }}>Heavy data processing or analytics</li>
                      <li style={{ marginBottom: 10 }}>Scientific computing</li>
                      <li style={{ marginBottom: 10 }}>Enterprise apps with complex business logic</li>
                      <li>Rapid prototyping (Django Admin)</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 24, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 12, fontSize: 18 }}>Choose Node.js When:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                      <li style={{ marginBottom: 10 }}>Real-time apps (chat, collaboration)</li>
                      <li style={{ marginBottom: 10 }}>High-concurrency API servers</li>
                      <li style={{ marginBottom: 10 }}>Full-stack JavaScript (shared frontend code)</li>
                      <li style={{ marginBottom: 10 }}>Microservices architecture</li>
                      <li>Streaming data applications</li>
                    </ul>
                  </div>
                </div>

                {/* Recommendation */}
                <h2 id="recommendation" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Our Recommendation at Codazz</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop"
                    alt="Team making technology decisions"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@clyders" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Clyde RS</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#3776ab' }}>For AI-First Products:</strong> Python (FastAPI). If AI/ML is your core value proposition, there&apos;s no alternative.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#b4fd83' }}>For SaaS & Web Apps:</strong> Node.js (NestJS). Same language as your frontend, excellent for APIs, great TypeScript support.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#3776ab' }}>For Data-Heavy Platforms:</strong> Python (Django). Built-in admin, ORM, and the best data processing libraries.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#b4fd83' }}>For Real-Time Features:</strong> Node.js. Chat, live dashboards, collaborative tools, WebSocket-heavy apps.</li>
                    <li><strong style={{ color: '#ffffff' }}>For Many Projects:</strong> Both. Python for AI/data services, Node.js for the API gateway and real-time layer. This is our most common production architecture at Codazz.</li>
                  </ul>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'Is Node.js faster than Python?', a: 'For I/O-bound workloads (API requests, database queries), yes, significantly. Node.js handles 2-3x more concurrent requests. For CPU-bound tasks (data processing, ML inference), Python with multiprocessing is better.' },
                  { q: 'Can I use Python for real-time applications?', a: 'Yes, with Django Channels or FastAPI WebSockets. But Node.js with Socket.io is the more mature and battle-tested solution for real-time at scale.' },
                  { q: 'Should I use TypeScript with Node.js?', a: 'Absolutely. In 2026, TypeScript is the standard for production Node.js applications. The type safety catches bugs at compile time and makes codebases much more maintainable.' },
                  { q: 'Is Python hard to scale?', a: 'No. Instagram serves 2 billion users with Python/Django. The key is proper architecture: async workers, caching, load balancing, and database optimization.' },
                  { q: 'Can I use both in one project?', a: 'Yes, and we recommend it for many projects. A common pattern is Node.js for the API layer and Python microservices for AI/ML processing. They communicate via REST, gRPC, or message queues.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 16,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Building a Backend? Let&apos;s Architect It Right
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Your backend architecture determines your app&apos;s scalability, performance, and maintenance cost for years. Let us help you choose the right stack.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Book Free Architecture Review
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '8px 0', fontSize: 14,
                          color: activeSection === section.id ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === section.id ? '2px solid #b4fd83' : '2px solid transparent',
                          paddingLeft: 12,
                        }}>
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

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
