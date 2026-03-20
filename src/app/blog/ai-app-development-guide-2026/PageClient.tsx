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
  { id: 'what-is-ai-app', label: 'What Is an AI App?', emoji: '🤖' },
  { id: 'tech-stack', label: 'AI Tech Stack', emoji: '⚙️' },
  { id: 'api-comparison', label: 'AI API Comparison', emoji: '🔌' },
  { id: 'building-ai', label: 'Building Your First AI Feature', emoji: '🛠️' },
  { id: 'build-vs-buy', label: 'Build vs Buy', emoji: '⚖️' },
  { id: 'app-types-costs', label: 'AI App Types & Costs', emoji: '📊' },
  { id: 'examples', label: 'Real AI App Examples', emoji: '📱' },
  { id: 'costs', label: 'Development Costs', emoji: '💰' },
  { id: 'ethics', label: 'Ethics & Legal', emoji: '⚖️' },
  { id: 'mistakes', label: 'Common Mistakes', emoji: '⚠️' },
  { id: 'roadmap', label: 'Your AI App Roadmap', emoji: '🗺️' },
  { id: 'build-with-codazz', label: 'Build AI with Codazz', emoji: '🚀' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native: The Definitive 2026 Comparison', category: 'Engineering', readTime: '15 min' },
];

/* ── Reusable style objects ── */
const tableWrapStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
};
const thStyle: React.CSSProperties = { textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14, whiteSpace: 'nowrap' };
const tdStyle: React.CSSProperties = { padding: '12px 8px' };
const tdBold: React.CSSProperties = { padding: '12px 8px', color: '#b4fd83', fontWeight: 600 };
const trBorder: React.CSSProperties = { borderBottom: '1px solid rgba(255,255,255,0.05)' };
const headBorder: React.CSSProperties = { borderBottom: '1px solid rgba(255,255,255,0.1)' };

const proTipStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, rgba(180,253,131,0.08) 0%, rgba(180,253,131,0.02) 100%)',
  borderRadius: 12, padding: '20px 24px', margin: '32px 0',
  borderLeft: '4px solid #b4fd83',
};
const proTipTitle: React.CSSProperties = { fontSize: 13, fontWeight: 700, color: '#b4fd83', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' as const };

const h2Style: React.CSSProperties = {
  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
};
const h3Style: React.CSSProperties = { fontSize: 20, fontWeight: 600, color: '#ffffff', marginTop: 32, marginBottom: 16 };

export default function AIAppDevelopmentClient() {
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
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop"
              alt="Artificial intelligence and machine learning visualization"
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
              Photo by <a href="https://unsplash.com/@googledeepmind" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Google DeepMind</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
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
                22 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              AI App Development in 2026: The Complete Guide to Building Intelligent Applications
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Everything you need to build AI-powered apps in 2026&mdash;from choosing the right models to deployment at scale. Real implementation examples, cost breakdowns, and hard-won lessons from 100+ AI features shipped.
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

                {/* ── KEY TAKEAWAYS BOX ── */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.06) 0%, rgba(8,50,61,0.2) 100%)',
                  borderRadius: 16, padding: 'clamp(24px, 4vw, 32px)', marginBottom: 48,
                  border: '1px solid rgba(180,253,131,0.15)',
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#b4fd83', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                    Key Takeaways
                  </h3>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 10, color: '#ffffff', fontSize: 15 }}>
                      <strong>AI is no longer optional</strong> &mdash; 78% of top-performing apps in 2026 ship with at least one AI-powered feature. Users now expect intelligent personalization as a baseline.
                    </li>
                    <li style={{ marginBottom: 10, color: '#ffffff', fontSize: 15 }}>
                      <strong>Start with APIs, not custom models</strong> &mdash; Pre-built APIs from OpenAI, Anthropic, and Google let you ship AI features in weeks, not months. Fine-tune later when you have the data.
                    </li>
                    <li style={{ marginBottom: 10, color: '#ffffff', fontSize: 15 }}>
                      <strong>Costs range from $8K to $500K+</strong> &mdash; A simple chatbot costs $8K-$20K. A full recommendation engine runs $40K-$100K. Custom model training starts at $100K. Know your tier before you budget.
                    </li>
                    <li style={{ marginBottom: 10, color: '#ffffff', fontSize: 15 }}>
                      <strong>Ongoing AI costs are the hidden killer</strong> &mdash; API calls, vector database hosting, and model retraining can exceed your build cost within 12 months. Plan for $1K-$40K/month depending on scale.
                    </li>
                    <li style={{ marginBottom: 0, color: '#ffffff', fontSize: 15 }}>
                      <strong>Ethics and compliance are non-negotiable</strong> &mdash; GDPR, the EU AI Act, and Canada&apos;s AIDA all regulate AI apps now. Skipping compliance can mean fines up to 6% of global revenue.
                    </li>
                  </ul>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    In 2023, AI features were a &ldquo;nice-to-have.&rdquo; In 2026, they&apos;re <strong style={{ color: '#b4fd83' }}>table stakes</strong>.
                  </p>
                  <p>
                    Users now expect apps to:
                  </p>
                  <div className="reveal" style={{ margin: '24px 0' }}>
                    <ul style={{ paddingLeft: 24, margin: 0 }}>
                      <li style={{ marginBottom: 12 }}>Predict what they want before they ask</li>
                      <li style={{ marginBottom: 12 }}>Understand natural language commands</li>
                      <li style={{ marginBottom: 12 }}>Generate content instantly</li>
                      <li>Learn and improve from every interaction</li>
                    </ul>
                  </div>
                  <p>
                    At Codazz, we&apos;ve integrated AI into <strong style={{ color: '#ffffff' }}>100+ applications</strong> across healthcare, fintech, e-commerce, and SaaS. Revenue from AI-powered features has grown 400%. User engagement? Up 250%.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    This isn&apos;t hype. This is the new baseline.
                  </p>
                  <p>
                    Whether you&apos;re a startup founder exploring your first AI feature or an enterprise team planning a full intelligent platform, this guide breaks down exactly what you need to know&mdash;no fluff, real numbers, and lessons from the trenches.
                  </p>
                </div>

                {/* ══════════ What is AI App ══════════ */}
                <h2 id="what-is-ai-app" className="reveal" style={h2Style}>What &ldquo;AI App&rdquo; Actually Means in 2026</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                    alt="Machine learning data science visualization"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@lukechesser" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Luke Chesser</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  Let&apos;s clear up the confusion. When people say &ldquo;AI app,&rdquo; they usually mean one of these four categories&mdash;each with wildly different technical requirements, costs, and timelines:
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, margin: '32px 0',
                }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>1. NLP Apps</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Chatbots, voice assistants, content analyzers, sentiment engines. Models: GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Pro</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>2. Computer Vision</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Face recognition, object detection, medical imaging, OCR. Models: YOLO v9, Vision Transformers, SAM 2</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>3. Generative AI</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Content generators, image creators, code assistants, music composition. Models: Stable Diffusion 3, DALL-E 3, Sora</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>4. Predictive / Recommendation</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Product recommendations, demand forecasting, churn prediction, dynamic pricing</p>
                  </div>
                </div>

                {/* Pro Tip #1 */}
                <div className="reveal" style={proTipStyle}>
                  <p style={proTipTitle}>Pro Tip</p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
                    Don&apos;t chase the &ldquo;most advanced&rdquo; AI category. The highest ROI usually comes from <strong style={{ color: '#ffffff' }}>NLP features</strong> (chatbots, search, content generation) because they directly reduce support costs and boost engagement. Start there, validate, then expand.
                  </p>
                </div>

                {/* ══════════ AI Tech Stack ══════════ */}
                <h2 id="tech-stack" className="reveal" style={h2Style}>The AI App Tech Stack (2026 Edition)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop"
                    alt="Technology stack and cloud infrastructure layers"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@nasa" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>NASA</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  Building an AI app means assembling the right combination of models, infrastructure, and tooling. Here&apos;s the stack we recommend at Codazz for most production AI applications:
                </p>

                {/* AI Tech Stack Table */}
                <h3 className="reveal" style={h3Style}>AI Tech Stack Breakdown</h3>
                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Category</th>
                        <th style={thStyle}>Recommended Tools</th>
                        <th style={thStyle}>Monthly Cost</th>
                        <th style={thStyle}>Complexity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={trBorder}>
                        <td style={tdBold}>LLM / Text</td>
                        <td style={tdStyle}>OpenAI GPT-4o, Claude 3.5 Sonnet, Gemini 2.0 Pro, Llama 3.1</td>
                        <td style={tdStyle}>$500 - $20,000+</td>
                        <td style={tdStyle}><span style={{ color: '#fbbf24' }}>Medium</span></td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Vision / Image</td>
                        <td style={tdStyle}>Google Vision AI, AWS Rekognition, YOLO v9, OpenAI Vision</td>
                        <td style={tdStyle}>$200 - $10,000+</td>
                        <td style={tdStyle}><span style={{ color: '#f87171' }}>High</span></td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Speech / Audio</td>
                        <td style={tdStyle}>OpenAI Whisper, Deepgram, AssemblyAI, ElevenLabs</td>
                        <td style={tdStyle}>$100 - $5,000+</td>
                        <td style={tdStyle}><span style={{ color: '#fbbf24' }}>Medium</span></td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Analytics / ML</td>
                        <td style={tdStyle}>AWS SageMaker, Google Vertex AI, Databricks, MLflow</td>
                        <td style={tdStyle}>$300 - $15,000+</td>
                        <td style={tdStyle}><span style={{ color: '#f87171' }}>High</span></td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Vector DB</td>
                        <td style={tdStyle}>Pinecone, Weaviate, Qdrant, pgvector (Supabase)</td>
                        <td style={tdStyle}>$0 - $2,000+</td>
                        <td style={tdStyle}><span style={{ color: '#4ade80' }}>Low</span></td>
                      </tr>
                      <tr>
                        <td style={tdBold}>Orchestration</td>
                        <td style={tdStyle}>LangChain, LlamaIndex, Semantic Kernel, Haystack</td>
                        <td style={tdStyle}>Free (open-source)</td>
                        <td style={tdStyle}><span style={{ color: '#fbbf24' }}>Medium</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="reveal" style={h3Style}>Backend/Database Layer</h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Pinecone/Weaviate:</strong> Vector search for embeddings&mdash;the backbone of RAG systems and semantic search</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Supabase:</strong> Postgres + pgvector for AI apps that need relational + vector search in one place</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Firebase:</strong> Real-time AI features with built-in auth and hosting</li>
                    <li><strong style={{ color: '#ffffff' }}>AWS SageMaker:</strong> Custom model training, hosting, and automated ML pipelines</li>
                  </ul>
                </div>

                {/* Pro Tip #2 */}
                <div className="reveal" style={proTipStyle}>
                  <p style={proTipTitle}>Pro Tip</p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
                    <strong style={{ color: '#ffffff' }}>Don&apos;t over-architect your vector database on day one.</strong> Start with pgvector in Supabase (free tier available). It handles up to ~1M vectors efficiently. Only migrate to Pinecone or Weaviate when you hit scale issues or need advanced features like hybrid search.
                  </p>
                </div>

                {/* ══════════ AI API Comparison ══════════ */}
                <h2 id="api-comparison" className="reveal" style={h2Style}>AI API Comparison: OpenAI vs Anthropic vs Google vs Meta</h2>

                <p className="reveal">
                  Choosing the right LLM provider is one of the most consequential decisions you&apos;ll make. Here&apos;s how the top four stack up in 2026:
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Feature</th>
                        <th style={thStyle}>OpenAI (GPT-4o)</th>
                        <th style={thStyle}>Anthropic (Claude 3.5)</th>
                        <th style={thStyle}>Google (Gemini 2.0)</th>
                        <th style={thStyle}>Meta (Llama 3.1)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={trBorder}>
                        <td style={tdBold}>Best For</td>
                        <td style={tdStyle}>General-purpose, vision, function calling</td>
                        <td style={tdStyle}>Long docs, reasoning, safety-critical apps</td>
                        <td style={tdStyle}>Multimodal, Google ecosystem, enterprise</td>
                        <td style={tdStyle}>Self-hosting, privacy, customization</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Context Window</td>
                        <td style={tdStyle}>128K tokens</td>
                        <td style={tdStyle}>200K tokens</td>
                        <td style={tdStyle}>2M tokens</td>
                        <td style={tdStyle}>128K tokens</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Input Pricing</td>
                        <td style={tdStyle}>$2.50 / 1M tokens</td>
                        <td style={tdStyle}>$3.00 / 1M tokens</td>
                        <td style={tdStyle}>$1.25 / 1M tokens</td>
                        <td style={tdStyle}>Free (self-hosted) or $0.20-$0.75 via providers</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Output Pricing</td>
                        <td style={tdStyle}>$10.00 / 1M tokens</td>
                        <td style={tdStyle}>$15.00 / 1M tokens</td>
                        <td style={tdStyle}>$5.00 / 1M tokens</td>
                        <td style={tdStyle}>Free (self-hosted) or $0.20-$0.75 via providers</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Avg Latency</td>
                        <td style={tdStyle}><span style={{ color: '#4ade80' }}>Fast</span> (~800ms TTFT)</td>
                        <td style={tdStyle}><span style={{ color: '#fbbf24' }}>Medium</span> (~1.2s TTFT)</td>
                        <td style={tdStyle}><span style={{ color: '#4ade80' }}>Fast</span> (~700ms TTFT)</td>
                        <td style={tdStyle}><span style={{ color: '#fbbf24' }}>Varies</span> (depends on hardware)</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Multimodal</td>
                        <td style={tdStyle}>Text, vision, audio, video</td>
                        <td style={tdStyle}>Text, vision</td>
                        <td style={tdStyle}>Text, vision, audio, video, code</td>
                        <td style={tdStyle}>Text, vision</td>
                      </tr>
                      <tr>
                        <td style={tdBold}>Data Privacy</td>
                        <td style={tdStyle}>API data not used for training</td>
                        <td style={tdStyle}>API data not used for training</td>
                        <td style={tdStyle}>API data not used for training</td>
                        <td style={tdStyle}>Full control (self-hosted)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip #3 */}
                <div className="reveal" style={proTipStyle}>
                  <p style={proTipTitle}>Pro Tip</p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
                    <strong style={{ color: '#ffffff' }}>Use a multi-provider strategy.</strong> We route 70% of our clients&apos; traffic through OpenAI for speed, fall back to Claude for complex reasoning tasks, and use Gemini for multimodal workloads. Tools like LiteLLM or OpenRouter make provider-switching seamless with a single API interface.
                  </p>
                </div>

                {/* ══════════ Building AI ══════════ */}
                <h2 id="building-ai" className="reveal" style={h2Style}>Building Your First AI Feature</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop"
                    alt="Workflow automation and process flow"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@beatriz_perez" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Beatriz Perez Moya</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  The fastest path to shipping AI? Don&apos;t reinvent the wheel. Here are the four main approaches ranked by speed-to-market:
                </p>

                <h3 className="reveal" style={h3Style}>Chatbot Implementation Approaches</h3>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Approach</th>
                        <th style={thStyle}>Best For</th>
                        <th style={thStyle}>Cost</th>
                        <th style={thStyle}>Time to Ship</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={trBorder}>
                        <td style={tdBold}>No-Code</td>
                        <td style={tdStyle}>Simple FAQs, quick launch</td>
                        <td style={tdStyle}>$50-500/month</td>
                        <td style={tdStyle}>1-3 days</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>API Integration</td>
                        <td style={tdStyle}>Custom behavior, full control</td>
                        <td style={tdStyle}>Usage-based</td>
                        <td style={tdStyle}>1-4 weeks</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>RAG + Fine-Tuned</td>
                        <td style={tdStyle}>Domain-specific knowledge</td>
                        <td style={tdStyle}>$5,000-50,000</td>
                        <td style={tdStyle}>4-10 weeks</td>
                      </tr>
                      <tr>
                        <td style={tdBold}>Self-Hosted</td>
                        <td style={tdStyle}>Data privacy, no API costs at scale</td>
                        <td style={tdStyle}>Infrastructure costs</td>
                        <td style={tdStyle}>6-16 weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip #4 */}
                <div className="reveal" style={proTipStyle}>
                  <p style={proTipTitle}>Pro Tip</p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
                    <strong style={{ color: '#ffffff' }}>Always implement streaming responses.</strong> Users perceive AI as 3x faster when they see tokens appear in real-time versus waiting for a complete response. The OpenAI and Anthropic SDKs both support server-sent events (SSE) out of the box. There&apos;s no excuse to show a spinner for 5 seconds.
                  </p>
                </div>

                {/* ══════════ Build vs Buy ══════════ */}
                <h2 id="build-vs-buy" className="reveal" style={h2Style}>Build vs Buy: Custom AI vs Pre-Built APIs vs Hybrid</h2>

                <p className="reveal">
                  This is the decision that trips up most teams. Custom AI sounds impressive on a pitch deck, but it&apos;s usually the wrong call for your first AI feature. Here&apos;s an honest comparison:
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 650 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Factor</th>
                        <th style={thStyle}>Custom AI (Train Your Own)</th>
                        <th style={thStyle}>Pre-Built APIs</th>
                        <th style={thStyle}>Hybrid Approach</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={trBorder}>
                        <td style={tdBold}>Upfront Cost</td>
                        <td style={tdStyle}>$100K - $500K+</td>
                        <td style={tdStyle}>$0 - $5K</td>
                        <td style={tdStyle}>$20K - $80K</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Time to Launch</td>
                        <td style={tdStyle}>3-12 months</td>
                        <td style={tdStyle}>1-4 weeks</td>
                        <td style={tdStyle}>2-3 months</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Data Requirements</td>
                        <td style={tdStyle}>10K-1M+ labeled examples</td>
                        <td style={tdStyle}>None (zero-shot)</td>
                        <td style={tdStyle}>100-10K examples for fine-tuning</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Pros</td>
                        <td style={tdStyle}>Full control, competitive moat, no per-call cost</td>
                        <td style={tdStyle}>Fast, cheap, state-of-the-art, easy to iterate</td>
                        <td style={tdStyle}>Best of both worlds, good balance of cost/control</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Cons</td>
                        <td style={tdStyle}>Expensive, needs ML team, slow iteration, data hungry</td>
                        <td style={tdStyle}>Vendor lock-in, per-call cost at scale, less control</td>
                        <td style={tdStyle}>More complex architecture, needs skilled engineers</td>
                      </tr>
                      <tr>
                        <td style={tdBold}>Best For</td>
                        <td style={tdStyle}>Enterprise with unique data, regulated industries</td>
                        <td style={tdStyle}>Startups, MVPs, standard NLP/vision tasks</td>
                        <td style={tdStyle}>Growing companies with domain-specific needs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip #5 */}
                <div className="reveal" style={proTipStyle}>
                  <p style={proTipTitle}>Pro Tip</p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
                    <strong style={{ color: '#ffffff' }}>The hybrid approach wins 80% of the time.</strong> Use pre-built APIs as your foundation, add RAG (Retrieval-Augmented Generation) with your proprietary data, and fine-tune only the specific layers where generic models fall short. This gets you 90% of custom model quality at 20% of the cost.
                  </p>
                </div>

                {/* ══════════ AI App Types & Costs ══════════ */}
                <h2 id="app-types-costs" className="reveal" style={h2Style}>AI App Types: Timeline, Cost & Complexity</h2>

                <p className="reveal">
                  Not all AI apps are created equal. Here&apos;s a realistic breakdown of what each type of AI application takes to build from concept to production:
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>AI App Type</th>
                        <th style={thStyle}>Timeline</th>
                        <th style={thStyle}>Development Cost</th>
                        <th style={thStyle}>Complexity</th>
                        <th style={thStyle}>Example Use Cases</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={trBorder}>
                        <td style={tdBold}>Chatbot / Virtual Assistant</td>
                        <td style={tdStyle}>2-8 weeks</td>
                        <td style={tdStyle}>$8,000 - $50,000</td>
                        <td style={tdStyle}><span style={{ color: '#4ade80' }}>Low-Medium</span></td>
                        <td style={tdStyle}>Customer support, onboarding, internal Q&A</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Recommendation Engine</td>
                        <td style={tdStyle}>8-16 weeks</td>
                        <td style={tdStyle}>$40,000 - $120,000</td>
                        <td style={tdStyle}><span style={{ color: '#fbbf24' }}>Medium-High</span></td>
                        <td style={tdStyle}>E-commerce, content feeds, matchmaking</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Computer Vision App</td>
                        <td style={tdStyle}>10-20 weeks</td>
                        <td style={tdStyle}>$50,000 - $200,000</td>
                        <td style={tdStyle}><span style={{ color: '#f87171' }}>High</span></td>
                        <td style={tdStyle}>Medical imaging, quality inspection, AR filters</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Predictive Analytics</td>
                        <td style={tdStyle}>8-14 weeks</td>
                        <td style={tdStyle}>$35,000 - $150,000</td>
                        <td style={tdStyle}><span style={{ color: '#fbbf24' }}>Medium-High</span></td>
                        <td style={tdStyle}>Demand forecasting, churn prediction, pricing</td>
                      </tr>
                      <tr>
                        <td style={tdBold}>Generative AI Platform</td>
                        <td style={tdStyle}>12-24 weeks</td>
                        <td style={tdStyle}>$60,000 - $300,000</td>
                        <td style={tdStyle}><span style={{ color: '#f87171' }}>High</span></td>
                        <td style={tdStyle}>Content creation, design tools, code generation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* ══════════ Examples ══════════ */}
                <h2 id="examples" className="reveal" style={h2Style}>Real AI App Examples</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
                    alt="Health and fitness technology app"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@nci" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>National Cancer Institute</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  Theory is great, but real numbers are better. Here are two AI applications we&apos;ve built at Codazz, with actual results:
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12 }}>Example 1: AI Health & Wellness Coach</h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Client:</strong> HealthTech startup, Toronto</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>AI Features:</strong> Personalized workouts via LLM, nutrition analysis from food photos (computer vision), sleep pattern prediction, mental health NLP journaling</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Tech Stack:</strong> Flutter, Python/FastAPI, OpenAI GPT-4, TensorFlow Lite for on-device inference</p>
                  <p style={{ fontSize: 14, margin: 0 }}><strong>Results:</strong> 300,000+ downloads in 6 months, 4.7-star rating, 40% higher retention vs non-AI competitor, <strong style={{ color: '#b4fd83' }}>$85,000 total build cost</strong></p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12 }}>Example 2: AI Financial Advisor</h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Client:</strong> Fintech company, New York</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>AI Features:</strong> Spending analysis with NLP transaction parsing, investment recommendations, fraud detection using anomaly models, natural language portfolio queries</p>
                  <p style={{ fontSize: 14, margin: 0 }}><strong>Results:</strong> $2M+ in assets under AI management, 92% user satisfaction, 60% reduction in false fraud alerts, <strong style={{ color: '#b4fd83' }}>$180,000 total build cost</strong></p>
                </div>

                {/* Pro Tip #6 */}
                <div className="reveal" style={proTipStyle}>
                  <p style={proTipTitle}>Pro Tip</p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
                    <strong style={{ color: '#ffffff' }}>Measure AI feature impact from day one.</strong> Set up A/B tests comparing AI-powered vs traditional flows. Track specific metrics: time-to-task-completion, support ticket deflection rate, and user retention at 7/30/90 days. Without data, you&apos;re guessing whether AI is actually helping.
                  </p>
                </div>

                {/* ══════════ Costs ══════════ */}
                <h2 id="costs" className="reveal" style={h2Style}>AI App Development Costs (2026)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop"
                    alt="Budget planning and cost analysis"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@mathieustern" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Mathieu Stern</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <h3 className="reveal" style={h3Style}>Development Costs by Feature</h3>
                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>AI Feature Type</th>
                        <th style={thStyle}>Development Cost</th>
                        <th style={thStyle}>Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={trBorder}>
                        <td style={tdBold}>Simple Chatbot (API-based)</td>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>$8,000 - $20,000</td>
                        <td style={tdStyle}>2-4 weeks</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>RAG Knowledge Base</td>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>$25,000 - $50,000</td>
                        <td style={tdStyle}>4-8 weeks</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Image Generation</td>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>$30,000 - $70,000</td>
                        <td style={tdStyle}>6-10 weeks</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Recommendation Engine</td>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>$40,000 - $100,000</td>
                        <td style={tdStyle}>8-12 weeks</td>
                      </tr>
                      <tr>
                        <td style={tdBold}>Custom Model Training</td>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>$100,000 - $500,000</td>
                        <td style={tdStyle}>3-6 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="reveal" style={h3Style}>Ongoing AI Costs (Monthly)</h3>
                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Usage Level</th>
                        <th style={thStyle}>API Costs</th>
                        <th style={thStyle}>Infrastructure</th>
                        <th style={thStyle}>Total Monthly</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={trBorder}>
                        <td style={tdBold}>Startup (1K users)</td>
                        <td style={tdStyle}>$500</td>
                        <td style={tdStyle}>$200</td>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>$1,000</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Growing (10K users)</td>
                        <td style={tdStyle}>$3,000</td>
                        <td style={tdStyle}>$800</td>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>$5,800</td>
                      </tr>
                      <tr style={trBorder}>
                        <td style={tdBold}>Scale (100K users)</td>
                        <td style={tdStyle}>$20,000</td>
                        <td style={tdStyle}>$5,000</td>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>$40,000</td>
                      </tr>
                      <tr>
                        <td style={tdBold}>Enterprise (1M users)</td>
                        <td style={tdStyle}>$150,000+</td>
                        <td style={tdStyle}>$30,000+</td>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>$280,000+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pro Tip #7 */}
                <div className="reveal" style={proTipStyle}>
                  <p style={proTipTitle}>Pro Tip</p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
                    <strong style={{ color: '#ffffff' }}>Implement caching aggressively.</strong> Most AI apps have 30-60% repeated or near-identical queries. A semantic cache (using embeddings to match similar questions) can cut your API costs by 40-50% overnight. Tools like GPTCache or a custom Redis + pgvector setup work well.
                  </p>
                </div>

                {/* ══════════ Ethics ══════════ */}
                <h2 id="ethics" className="reveal" style={h2Style}>The Ethics & Legal Side of AI Apps</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=500&fit=crop"
                    alt="Ethics justice and balance concept"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@brett_jordan" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Brett Jordan</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <h3 className="reveal" style={h3Style}>What You Must Address</h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Data Privacy:</strong> Don&apos;t send PII to third-party APIs. Implement data anonymization. Review your AI provider&apos;s data retention policies&mdash;most don&apos;t train on API data, but verify it.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Transparency:</strong> Disclose when users are interacting with AI. The EU AI Act requires it. Show confidence levels on AI-generated content.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Bias & Fairness:</strong> Test AI outputs across demographics. Monitor for discriminatory patterns. Document your testing methodology&mdash;regulators will ask for it.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Content Safety:</strong> Use content moderation APIs. Implement input/output filtering. Have human review for high-stakes decisions.</li>
                    <li><strong style={{ color: '#ffffff' }}>Regulatory Compliance:</strong> GDPR (EU), AIDA (Canada), state-level AI laws (US). If your AI makes decisions affecting people&apos;s rights, you need an AI impact assessment.</li>
                  </ul>
                </div>

                {/* Pro Tip #8 */}
                <div className="reveal" style={proTipStyle}>
                  <p style={proTipTitle}>Pro Tip</p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>
                    <strong style={{ color: '#ffffff' }}>Build an &ldquo;AI card&rdquo; for every AI feature you ship.</strong> Document what data it uses, what decisions it makes, known limitations, and how to override it. This isn&apos;t just good ethics&mdash;it&apos;s becoming a legal requirement in many jurisdictions and it makes debugging 10x faster.
                  </p>
                </div>

                {/* ══════════ Mistakes ══════════ */}
                <h2 id="mistakes" className="reveal" style={h2Style}>Common AI App Mistakes (And How to Avoid Them)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1621252179027-94459d27d3ee?w=800&h=500&fit=crop"
                    alt="Warning signs and error alerts"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@mojahidmottakin" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Mojahid Mottakin</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  After building 100+ AI features, we&apos;ve seen every mistake in the book. Here are the ones that cost real money:
                </p>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ffffff' }}>Over-Engineering:</strong> Building custom models when APIs suffice. <span style={{ color: '#f87171' }}>Cost: $100K+ wasted.</span> Fix: Start with APIs, fine-tune only after you have 10K+ domain-specific examples and proof that generic models aren&apos;t good enough.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ffffff' }}>Ignoring Latency:</strong> AI responses taking 5-10 seconds kills UX. Fix: Use streaming responses, implement optimistic UI patterns, and cache frequent queries. Target under 2 seconds for perceived response time.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ffffff' }}>Poor Error Handling:</strong> AI hallucinations shown as facts. Fix: Verify critical outputs against your data, show confidence scores, and always provide a &ldquo;this doesn&apos;t look right&rdquo; feedback button.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ffffff' }}>No Cost Controls:</strong> A single prompt injection attack or viral moment can blow through your entire monthly API budget in hours. Fix: Implement rate limiting, per-user quotas, and hard spending caps from day one.</li>
                    <li><strong style={{ color: '#ffffff' }}>Neglecting Mobile Optimization:</strong> AI features drain battery and consume data. Fix: Use on-device models where possible (TensorFlow Lite, Core ML), batch API calls, and implement intelligent prefetching.</li>
                  </ul>
                </div>

                {/* ══════════ Roadmap ══════════ */}
                <h2 id="roadmap" className="reveal" style={h2Style}>Getting Started: Your AI App Roadmap</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop"
                    alt="Roadmap journey and path forward"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@martenbjork" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Marten Newhall</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Phase 1: Validate (Weeks 1-2)</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Identify the user problem AI actually solves. Build a simple prototype with API calls. Test with 5-10 real users. Kill the idea fast if it doesn&apos;t resonate.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Phase 2: MVP (Weeks 3-8)</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Choose your tech stack and primary AI provider. Implement core AI feature with streaming. Build basic UI. Internal testing with 20+ scenarios. Set up cost monitoring.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Phase 3: Beta (Weeks 9-14)</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Expand AI capabilities based on user feedback. Beta launch with 100-500 users. Implement caching and rate limiting. Gather quality and cost metrics.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Phase 4: Launch (Weeks 15-20)</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Performance optimization and load testing. Security audit and compliance review. App store submission. Public launch with monitoring dashboards.</p>
                  </div>
                </div>

                {/* ══════════ Build AI with Codazz ══════════ */}
                <h2 id="build-with-codazz" className="reveal" style={h2Style}>Build AI with Codazz</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 'clamp(24px, 4vw, 32px)', marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <p style={{ fontSize: 18, color: '#ffffff', fontWeight: 600, marginBottom: 16 }}>
                    Why Teams Choose Codazz for AI Development
                  </p>
                  <p style={{ marginBottom: 24 }}>
                    We&apos;ve shipped <strong style={{ color: '#b4fd83' }}>100+ AI-powered features</strong> across mobile apps, web platforms, and enterprise systems. Our team doesn&apos;t just plug in APIs&mdash;we architect intelligent systems that scale, stay within budget, and actually move business metrics.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
                    <div style={{ padding: '16px 20px', background: 'rgba(180,253,131,0.05)', borderRadius: 10, border: '1px solid rgba(180,253,131,0.1)' }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: '0 0 4px 0' }}>100+</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0 }}>AI features built & deployed</p>
                    </div>
                    <div style={{ padding: '16px 20px', background: 'rgba(180,253,131,0.05)', borderRadius: 10, border: '1px solid rgba(180,253,131,0.1)' }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: '0 0 4px 0' }}>LLM</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0 }}>Integration specialists (OpenAI, Claude, Gemini, Llama)</p>
                    </div>
                    <div style={{ padding: '16px 20px', background: 'rgba(180,253,131,0.05)', borderRadius: 10, border: '1px solid rgba(180,253,131,0.1)' }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: '0 0 4px 0' }}>RAG</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0 }}>Expert in retrieval-augmented generation pipelines</p>
                    </div>
                    <div style={{ padding: '16px 20px', background: 'rgba(180,253,131,0.05)', borderRadius: 10, border: '1px solid rgba(180,253,131,0.1)' }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: '0 0 4px 0' }}>40%</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0 }}>Avg cost savings vs building in-house AI teams</p>
                    </div>
                  </div>
                  <p style={{ marginBottom: 16 }}>
                    <strong style={{ color: '#ffffff' }}>What we handle:</strong> LLM integration (GPT-4o, Claude, Gemini, Llama), RAG pipelines, vector search, computer vision, recommendation engines, AI-powered analytics, speech-to-text, generative content systems, and custom model fine-tuning.
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: '#ffffff' }}>How we work:</strong> Fixed-price AI sprints. You get a working AI feature every 2-4 weeks with transparent cost tracking. No surprise bills, no scope creep.
                  </p>
                </div>

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 32, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Ready to Add AI to Your App?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
                    AI isn&apos;t just changing apps&mdash;it&apos;s changing entire industries. The companies that move fast capture massive value. Book a free 30-minute AI strategy call with our team to map out your roadmap.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Schedule Your Free AI Consultation
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
