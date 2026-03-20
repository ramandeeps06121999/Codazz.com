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
  { id: 'ai-landscape', label: 'AI Landscape 2026', emoji: '🌐' },
  { id: 'agentic-ai', label: 'Agentic AI', emoji: '🤖' },
  { id: 'multimodal-ai', label: 'Multimodal AI', emoji: '🎯' },
  { id: 'ai-coding', label: 'AI Coding Assistants', emoji: '💻' },
  { id: 'small-models', label: 'Small Language Models', emoji: '🧠' },
  { id: 'ai-regulation', label: 'AI Regulation', emoji: '⚖️' },
  { id: 'business-impact', label: 'Business Impact', emoji: '📈' },
  { id: 'adoption', label: 'Adoption Strategy', emoji: '🗺️' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'top-fintech-apps-2026', title: 'Top 20 FinTech Apps Changing the Game in 2026', category: 'FinTech', readTime: '22 min' },
];

export default function AiTrends2026Client() {
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
              alt="AI development trends and artificial intelligence technology"
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
              }}>AI & Technology</span>
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
                21 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Top AI Development Trends 2026: What Every Business Needs to Know
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              From agentic AI and multimodal models to AI regulation and small language models, here are the AI trends reshaping every industry in 2026.
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
                    AI is no longer a technology trend. It&apos;s the defining business strategy of the decade. Companies that adopt AI intelligently will dominate. Those that don&apos;t will be disrupted.
                  </p>
                  <p>
                    2025 was the year AI went mainstream. ChatGPT, Claude, Gemini, and open-source models became tools that every knowledge worker uses daily. But 2026 is different. This is the year AI goes from chatbot to autonomous agent, from text-only to multimodal, and from unregulated to governed.
                  </p>
                  <p>
                    The question is no longer &quot;Should we use AI?&quot; It&apos;s &quot;How do we use AI to build a competitive moat before our competitors do?&quot;
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    This guide covers the 5 most impactful AI trends of 2026, their business implications, and a practical adoption strategy for companies of any size.
                  </p>
                </div>

                {/* AI Landscape */}
                <h2 id="ai-landscape" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The AI Landscape in 2026</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>$500B+</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Global AI Market (2026)</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>72%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Companies Using AI in Production</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>40%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Average Productivity Gain</p>
                  </div>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p><strong style={{ color: '#ffffff' }}>Key shifts in AI for 2026:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>From Assistants to Agents:</strong> AI is moving from answering questions to autonomously completing multi-step tasks</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>From Cloud to Edge:</strong> Small, efficient models running on devices enable private, real-time AI without internet</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>From Text to Everything:</strong> Multimodal models understand and generate text, images, audio, video, and code simultaneously</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>From Wild West to Regulated:</strong> The EU AI Act is enforced, and US, UK, and Canada are following with their own frameworks</li>
                    <li><strong style={{ color: '#ffffff' }}>From Hype to ROI:</strong> Companies are moving past experimentation to measuring concrete ROI from AI investments</li>
                  </ul>
                </div>

                {/* Agentic AI */}
                <h2 id="agentic-ai" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Trend 1: Agentic AI</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop"
                    alt="Agentic AI and autonomous AI systems"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@possessedphotography" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Possessed Photography</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Agentic AI is the single biggest shift in artificial intelligence since the transformer architecture. Instead of responding to prompts, AI agents plan, execute multi-step workflows, use tools, and make decisions autonomously.
                  </p>

                  <div style={{
                    background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(180,253,131,0.2)',
                  }}>
                    <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                      &quot;The difference between a chatbot and an AI agent is like the difference between a calculator and an employee. One answers questions. The other does the work.&quot;
                    </p>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>What agentic AI looks like in practice:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Customer Service Agents:</strong> AI that doesn&apos;t just answer FAQs but actually resolves issues: processes refunds, updates accounts, escalates to humans only when needed. Companies report 60-80% resolution without human intervention.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Sales Development Agents:</strong> AI that researches prospects, writes personalized outreach, follows up, qualifies leads, and books meetings. Early adopters see 3x more qualified pipeline.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Data Analysis Agents:</strong> Give the agent a question (&quot;Why did revenue drop 12% in Q3?&quot;), and it queries databases, runs statistical analysis, creates visualizations, and writes an executive summary.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>DevOps Agents:</strong> AI that monitors systems, detects anomalies, diagnoses root causes, and implements fixes &mdash; all before a human even notices the issue.</li>
                    <li><strong style={{ color: '#ffffff' }}>Research Agents:</strong> Multi-agent systems where specialized AI agents collaborate: one researches, one analyzes, one writes, and one fact-checks.</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>Agentic AI Technology Stack</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Component</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Tools</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Foundation Models</strong></td>
                        <td style={{ padding: '12px 8px' }}>Claude, GPT-4o, Gemini, Llama 3</td>
                        <td style={{ padding: '12px 8px' }}>Reasoning and language understanding</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Agent Frameworks</strong></td>
                        <td style={{ padding: '12px 8px' }}>LangGraph, CrewAI, AutoGen, Claude Agent SDK</td>
                        <td style={{ padding: '12px 8px' }}>Orchestration and tool use</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Vector Databases</strong></td>
                        <td style={{ padding: '12px 8px' }}>Pinecone, Weaviate, Chroma, pgvector</td>
                        <td style={{ padding: '12px 8px' }}>Long-term memory and RAG</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Tool Integration</strong></td>
                        <td style={{ padding: '12px 8px' }}>MCP, function calling, API connectors</td>
                        <td style={{ padding: '12px 8px' }}>Connecting AI to business systems</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Observability</strong></td>
                        <td style={{ padding: '12px 8px' }}>LangSmith, Braintrust, Arize Phoenix</td>
                        <td style={{ padding: '12px 8px' }}>Monitoring, evaluation, debugging</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Multimodal AI */}
                <h2 id="multimodal-ai" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Trend 2: Multimodal AI</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Multimodal AI models understand and generate across text, images, audio, video, and code simultaneously. This isn&apos;t just about adding image recognition to a chatbot &mdash; it&apos;s about AI that can reason across different types of information the way humans do.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginTop: 24, marginBottom: 24,
                  }}>
                    <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Vision + Language</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Upload a photo of a product, receipt, or document and AI extracts, analyzes, and acts on the information. Retail, insurance, and logistics are being transformed.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Audio + Text</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Real-time speech-to-text, translation, and sentiment analysis. Call centers use multimodal AI to transcribe, analyze tone, and suggest responses simultaneously.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Video Understanding</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>AI that watches video and extracts insights: security footage analysis, manufacturing quality control, sports analytics, and content moderation at scale.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Generative Media</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Text-to-image (DALL-E 3, Midjourney), text-to-video (Sora, Runway), and text-to-music (Suno) are creating a new creative economy with AI as co-creator.</p>
                    </div>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Business applications:</strong> Product descriptions generated from photos, customer support that understands screenshots, meeting transcription with action items, and automated video editing. The companies building multimodal features into their products are seeing 2-3x higher engagement.</p>
                </div>

                {/* AI Coding */}
                <h2 id="ai-coding" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Trend 3: AI Coding Assistants</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    AI coding assistants have gone from autocomplete on steroids to genuine development partners. In 2026, over 90% of professional developers use AI coding tools daily, and the tools have evolved dramatically.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>AI Coding Tools Comparison</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Tool</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Best For</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Key Capability</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Claude Code</strong></td>
                          <td style={{ padding: '12px 8px' }}>Full-stack development, complex refactors</td>
                          <td style={{ padding: '12px 8px' }}>Agentic coding with codebase understanding</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>GitHub Copilot</strong></td>
                          <td style={{ padding: '12px 8px' }}>In-IDE code completion</td>
                          <td style={{ padding: '12px 8px' }}>Context-aware suggestions across files</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Cursor</strong></td>
                          <td style={{ padding: '12px 8px' }}>AI-native code editing</td>
                          <td style={{ padding: '12px 8px' }}>Multi-file editing with natural language</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Windsurf</strong></td>
                          <td style={{ padding: '12px 8px' }}>Flow-state AI coding</td>
                          <td style={{ padding: '12px 8px' }}>Deep codebase understanding and cascade</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Devin</strong></td>
                          <td style={{ padding: '12px 8px' }}>Autonomous task completion</td>
                          <td style={{ padding: '12px 8px' }}>End-to-end feature implementation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Impact on development teams:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>40-55% faster development:</strong> Routine coding tasks (boilerplate, tests, documentation) are largely automated</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Junior developers leveled up:</strong> AI assistants help junior devs write senior-level code by suggesting best practices and patterns</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Code review automation:</strong> AI catches bugs, security vulnerabilities, and performance issues before human reviewers see them</li>
                    <li><strong style={{ color: '#ffffff' }}>Natural language programming:</strong> Non-technical stakeholders can describe features in plain English and get working prototypes</li>
                  </ul>
                </div>

                {/* Small Language Models */}
                <h2 id="small-models" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Trend 4: Small Language Models (SLMs)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    While headlines focus on ever-larger models, the practical revolution is happening in small language models. SLMs with 1-13 billion parameters now match GPT-3.5-level performance on specific tasks while running on a smartphone or edge device.
                  </p>

                  <div style={{
                    background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(180,253,131,0.2)',
                  }}>
                    <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                      &quot;The future of AI is not just bigger models. It&apos;s the right-sized model for the right task. A 3B parameter model fine-tuned on your data can outperform GPT-4 on your specific use case &mdash; at 1% of the cost.&quot;
                    </p>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Why SLMs matter for businesses:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Cost Reduction:</strong> Running Llama 3 8B locally costs 95% less than API calls to GPT-4 for comparable task-specific performance</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Privacy & Data Security:</strong> Models running on-premise or on-device mean sensitive data never leaves your infrastructure</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Latency:</strong> On-device inference in milliseconds vs. seconds for cloud API calls. Critical for real-time applications.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Customization:</strong> Fine-tuning a small model on your proprietary data creates a specialized AI that understands your business deeply</li>
                    <li><strong style={{ color: '#ffffff' }}>Offline Capability:</strong> Edge AI works without internet. Essential for manufacturing, field service, healthcare, and mobile applications.</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Leading SLMs</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 4 }}>Llama 3 (8B) &mdash; Meta&apos;s open-source powerhouse</li>
                      <li style={{ marginBottom: 4 }}>Phi-3 (3.8B) &mdash; Microsoft&apos;s efficiency champion</li>
                      <li style={{ marginBottom: 4 }}>Gemma 2 (9B) &mdash; Google&apos;s on-device model</li>
                      <li style={{ marginBottom: 4 }}>Mistral 7B &mdash; European open-source leader</li>
                      <li>Qwen 2 (7B) &mdash; Alibaba&apos;s multilingual model</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Best SLM Use Cases</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 4 }}>Text classification and sentiment analysis</li>
                      <li style={{ marginBottom: 4 }}>Named entity recognition</li>
                      <li style={{ marginBottom: 4 }}>Document summarization</li>
                      <li style={{ marginBottom: 4 }}>Code completion and review</li>
                      <li>On-device chat assistants</li>
                    </ul>
                  </div>
                </div>

                {/* AI Regulation */}
                <h2 id="ai-regulation" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Trend 5: AI Regulation & Governance</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    2026 is the year AI regulation gets real. The EU AI Act is fully enforceable, with fines up to 7% of global revenue. The US, UK, Canada, and others are finalizing their own frameworks. Companies that ignore AI governance are taking enormous financial and reputational risks.
                  </p>

                  <div style={{
                    background: 'rgba(255,107,107,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(255,107,107,0.2)',
                  }}>
                    <h3 style={{ color: '#ff6b6b', fontSize: 18, marginBottom: 16, marginTop: 0 }}>Global AI Regulation Landscape</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Region</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Regulation</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Key Requirements</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>EU</strong></td>
                          <td style={{ padding: '12px 8px' }}>EU AI Act (enforced)</td>
                          <td style={{ padding: '12px 8px' }}>Risk-based classification, transparency, human oversight</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>United States</strong></td>
                          <td style={{ padding: '12px 8px' }}>Executive Orders + State laws</td>
                          <td style={{ padding: '12px 8px' }}>AI safety, bias testing, federal procurement rules</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>Canada</strong></td>
                          <td style={{ padding: '12px 8px' }}>AIDA (Artificial Intelligence and Data Act)</td>
                          <td style={{ padding: '12px 8px' }}>Impact assessments, transparency, record-keeping</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>UK</strong></td>
                          <td style={{ padding: '12px 8px' }}>Pro-Innovation AI Framework</td>
                          <td style={{ padding: '12px 8px' }}>Sector-specific regulation, sandboxes</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#ff6b6b' }}>China</strong></td>
                          <td style={{ padding: '12px 8px' }}>Generative AI regulations</td>
                          <td style={{ padding: '12px 8px' }}>Content moderation, data labeling, algorithmic transparency</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>What every business must do now:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>AI Inventory:</strong> Catalog every AI system in your organization, its purpose, data sources, and risk level</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Bias Testing:</strong> Regularly test AI outputs for demographic bias, especially in hiring, lending, and healthcare applications</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Transparency:</strong> Disclose when customers are interacting with AI. The EU AI Act requires this for all customer-facing AI.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Human Oversight:</strong> Maintain human review for high-stakes AI decisions (credit, medical, legal)</li>
                    <li><strong style={{ color: '#ffffff' }}>Documentation:</strong> Document training data, model architecture, testing results, and deployment decisions for audit readiness</li>
                  </ul>
                </div>

                {/* Business Impact */}
                <h2 id="business-impact" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Business Impact by Industry</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Industry</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Top AI Application</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Measured Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Healthcare</strong></td>
                        <td style={{ padding: '12px 8px' }}>AI diagnostics, clinical documentation</td>
                        <td style={{ padding: '12px 8px' }}>30% faster diagnosis, 50% less admin time</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Financial Services</strong></td>
                        <td style={{ padding: '12px 8px' }}>Fraud detection, risk assessment</td>
                        <td style={{ padding: '12px 8px' }}>90% fraud detection rate, 60% faster underwriting</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>E-Commerce</strong></td>
                        <td style={{ padding: '12px 8px' }}>Personalization, inventory optimization</td>
                        <td style={{ padding: '12px 8px' }}>20% revenue increase, 35% fewer returns</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Manufacturing</strong></td>
                        <td style={{ padding: '12px 8px' }}>Predictive maintenance, quality control</td>
                        <td style={{ padding: '12px 8px' }}>40% reduction in downtime, 25% fewer defects</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Legal</strong></td>
                        <td style={{ padding: '12px 8px' }}>Contract analysis, legal research</td>
                        <td style={{ padding: '12px 8px' }}>80% faster contract review, 60% cost reduction</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Marketing</strong></td>
                        <td style={{ padding: '12px 8px' }}>Content generation, campaign optimization</td>
                        <td style={{ padding: '12px 8px' }}>3x content output, 25% better ROAS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Adoption Strategy */}
                <h2 id="adoption" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>AI Adoption Strategy for 2026</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  {[
                    { num: 1, title: 'Audit Your Current Processes', desc: 'Map every business process and score them on repetitiveness, data availability, and impact. Start with high-repetition, high-data processes where AI delivers quick wins.' },
                    { num: 2, title: 'Start with Internal Tools', desc: 'Before building AI-powered products, build AI-powered internal tools. AI-assisted customer support, automated reporting, and intelligent search are low-risk, high-reward starting points.' },
                    { num: 3, title: 'Build Your Data Foundation', desc: 'AI is only as good as your data. Invest in data infrastructure: clean your databases, build data pipelines, and establish data governance. This is the unglamorous work that determines AI success.' },
                    { num: 4, title: 'Choose Build vs. Buy vs. Fine-Tune', desc: 'Use commercial APIs (Claude, GPT-4) for general tasks. Fine-tune open-source models for domain-specific needs. Build custom models only when you have proprietary data and a clear competitive advantage.' },
                    { num: 5, title: 'Establish AI Governance', desc: 'Create an AI governance framework: acceptable use policies, bias testing protocols, human oversight requirements, and incident response plans. This isn\'t optional with the EU AI Act in force.' },
                    { num: 6, title: 'Measure ROI Ruthlessly', desc: 'Every AI project needs a clear success metric. Hours saved, revenue generated, costs reduced, or errors prevented. Kill projects that don\'t show measurable ROI within 90 days.' },
                  ].map((step) => (
                    <div key={step.num} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                        <div style={{
                          minWidth: 40, height: 40, borderRadius: '50%',
                          background: 'rgba(180,253,131,0.15)', border: '1px solid rgba(180,253,131,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 16, fontWeight: 700, color: '#b4fd83',
                        }}>{step.num}</div>
                        <div>
                          <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{step.title}</h3>
                          <p style={{ fontSize: 15, margin: 0 }}>{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Choose Codazz for AI Development</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Full-Stack AI Expertise</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>From RAG systems and fine-tuning to agentic workflows and MLOps, our team builds production-grade AI solutions that deliver measurable business value.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Industry-Specific Models</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We build and fine-tune models for healthcare, finance, e-commerce, and legal. Domain expertise ensures AI solutions that understand your business context.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Responsible AI</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We build AI with governance, bias testing, and compliance baked in from Day 1. Our solutions are audit-ready for the EU AI Act and emerging regulations.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Rapid Prototyping</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Go from AI concept to working prototype in 2-4 weeks. We validate ideas quickly so you invest in solutions that work, not science projects.</p>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How much does it cost to build an AI-powered application?', a: 'A basic AI integration (chatbot, content generation) costs $30K-$80K. A custom AI platform with fine-tuned models, agentic workflows, and RAG systems runs $100K-$400K+. Using pre-built AI APIs (Claude, GPT-4) significantly reduces costs compared to training custom models.' },
                  { q: 'Should I use a commercial AI API or build my own model?', a: 'Start with commercial APIs (Claude, GPT-4) for 90% of use cases. They are cheaper, faster to deploy, and continuously improving. Build custom models only when you have (1) proprietary training data that creates a competitive advantage, (2) strict data privacy requirements, or (3) a use case where commercial models fall short.' },
                  { q: 'What is agentic AI and why does it matter?', a: 'Agentic AI refers to AI systems that autonomously plan and execute multi-step tasks using tools and APIs. Unlike chatbots that answer questions, agents complete work: researching, analyzing data, writing reports, and taking actions. It matters because it moves AI from a productivity tool to a workforce multiplier.' },
                  { q: 'How do I ensure my AI application complies with the EU AI Act?', a: 'First, classify your AI system by risk level (unacceptable, high-risk, limited, or minimal). High-risk systems need conformity assessments, quality management, transparency, and human oversight. All customer-facing AI must disclose it is AI. Work with legal counsel experienced in AI regulation, and document everything.' },
                  { q: 'What is RAG and why is it important?', a: 'Retrieval-Augmented Generation (RAG) connects AI models to your proprietary data (documents, databases, knowledge bases). Instead of relying solely on training data, the AI retrieves relevant information in real-time and uses it to generate accurate, up-to-date responses. RAG is essential for enterprise AI where accuracy and currency matter.' },
                  { q: 'How long does it take to deploy an AI solution?', a: 'A simple AI integration (chatbot, document processing) takes 4-8 weeks. A custom RAG system with fine-tuned models takes 2-4 months. An agentic AI platform with multiple tools and workflows takes 4-8 months. Start with a proof-of-concept (2-4 weeks) to validate the approach before committing to a full build.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)' }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Ready to Start Your AI Project?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free AI strategy consultation with our team. We&apos;ll assess your use case, recommend the right approach (build vs. buy vs. fine-tune), and provide a detailed project roadmap.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Start Your AI Project with Codazz
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
