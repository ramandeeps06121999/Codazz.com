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
  { id: 'what-are-agents', label: 'What Are AI Agents', emoji: '🤖' },
  { id: 'agent-architectures', label: 'Agent Architectures', emoji: '🏗️' },
  { id: 'tool-use', label: 'Tool Use & Function Calling', emoji: '🔧' },
  { id: 'memory-systems', label: 'Memory Systems', emoji: '🧠' },
  { id: 'multi-agent', label: 'Multi-Agent Orchestration', emoji: '🎭' },
  { id: 'frameworks', label: 'LangGraph & CrewAI', emoji: '⚡' },
  { id: 'production', label: 'Production Deployment', emoji: '🚀' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '💡' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'ai-trends-2026', title: 'Top AI Development Trends 2026: What Every Business Needs to Know', category: 'AI & Technology', readTime: '21 min' },
  { slug: 'ai-in-healthcare-2026', title: 'AI in Healthcare 2026: How AI is Transforming Patient Care', category: 'Healthcare AI', readTime: '22 min' },
  { slug: 'ai-in-fintech-2026', title: 'AI in FinTech 2026: From Fraud Detection to Robo-Advisors', category: 'FinTech AI', readTime: '23 min' },
];

export default function AiAgentDevelopmentGuideClient() {
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

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="/blog_images/ai-agent-development-guide.jpg"
              alt="AI agent development guide with architectures and frameworks"
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
              }}>AI Agents</span>
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
                24 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              How to Build AI Agents in 2026: Complete Development Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The definitive guide to AI agent development. Learn the architectures, frameworks, and patterns behind autonomous AI systems that plan, reason, use tools, and execute multi-step tasks.
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
                    AI agents are the most significant advancement in software since the smartphone. While chatbots answer questions, agents autonomously plan, execute, and complete complex tasks &mdash; booking travel, analyzing data, writing code, managing workflows, and even building other AI agents.
                  </p>
                  <p>
                    The search term &quot;AI agent development&quot; has surged +215% in the past year. Every major tech company &mdash; Anthropic, OpenAI, Google, Microsoft &mdash; has shipped agent SDKs. The developer tools are mature. The business use cases are proven. 2026 is the year AI agents go from demos to production.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    This guide covers everything you need to build production-grade AI agents: architectures, tool use, memory, multi-agent orchestration, and the leading frameworks (LangGraph, CrewAI, and more).
                  </p>
                </div>

                {/* What Are AI Agents */}
                <h2 id="what-are-agents" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>What Are AI Agents?</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>+215%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Search Interest Growth (YoY)</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>$47B</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>AI Agent Market by 2030</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>82%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Enterprises Planning Agent Adoption</p>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    An AI agent is a software system that uses a large language model (LLM) as its reasoning engine to autonomously plan and execute multi-step tasks. Unlike a chatbot that responds to a single prompt, an agent breaks complex goals into subtasks, uses tools (APIs, databases, code execution), observes results, and adapts its approach based on feedback.
                  </p>

                  <div style={{
                    background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(180,253,131,0.2)',
                  }}>
                    <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                      &quot;A chatbot is a calculator. An AI agent is an employee. One answers questions. The other understands goals, makes plans, uses tools, handles exceptions, and delivers results. That&apos;s not an incremental improvement &mdash; it&apos;s a paradigm shift.&quot;
                    </p>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Key characteristics of AI agents:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Autonomy:</strong> Agents operate independently once given a goal. They decide what steps to take, in what order, and how to handle unexpected situations without constant human input.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Tool Use:</strong> Agents interact with external systems through function calling: searching the web, querying databases, calling APIs, executing code, reading/writing files, and controlling other software.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Planning:</strong> Agents decompose complex goals into a sequence of actionable steps, re-plan when things go wrong, and maintain progress toward the objective across multiple interactions.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Memory:</strong> Agents maintain context across interactions &mdash; short-term (within a task), long-term (across sessions), and episodic (learning from past successes and failures).</li>
                    <li><strong style={{ color: '#ffffff' }}>Reasoning:</strong> Agents use chain-of-thought, reflection, and self-critique to improve their outputs. The best agents know when they&apos;re uncertain and ask for clarification rather than guessing.</li>
                  </ul>
                </div>

                {/* Agent Architectures */}
                <h2 id="agent-architectures" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Agent Architectures: ReAct, Plan-and-Execute & More</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    The architecture you choose determines how your agent thinks, plans, and acts. Each architecture makes different tradeoffs between speed, accuracy, cost, and reliability.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>Agent Architecture Comparison</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Architecture</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>How It Works</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>ReAct</strong></td>
                          <td style={{ padding: '12px 8px' }}>Reason-Act-Observe loop. Think, take action, observe result, repeat.</td>
                          <td style={{ padding: '12px 8px' }}>Simple tasks, tool use, question answering</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Plan-and-Execute</strong></td>
                          <td style={{ padding: '12px 8px' }}>Create full plan first, then execute steps sequentially.</td>
                          <td style={{ padding: '12px 8px' }}>Complex, multi-step tasks with clear subtasks</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Reflexion</strong></td>
                          <td style={{ padding: '12px 8px' }}>Execute, self-evaluate, reflect on failures, retry with improvements.</td>
                          <td style={{ padding: '12px 8px' }}>Tasks requiring iteration and self-improvement</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>LATS (Tree Search)</strong></td>
                          <td style={{ padding: '12px 8px' }}>Explore multiple solution paths, backtrack from dead ends.</td>
                          <td style={{ padding: '12px 8px' }}>Problems with many possible approaches</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Agentic RAG</strong></td>
                          <td style={{ padding: '12px 8px' }}>Agent decides when/what to retrieve, synthesizes from multiple sources.</td>
                          <td style={{ padding: '12px 8px' }}>Knowledge-intensive, research tasks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>ReAct (Reasoning + Acting):</strong></p>
                  <p>
                    ReAct is the foundational agent architecture. The agent follows a loop: (1) <strong style={{ color: '#ffffff' }}>Thought</strong> &mdash; reason about what to do next, (2) <strong style={{ color: '#ffffff' }}>Action</strong> &mdash; call a tool or function, (3) <strong style={{ color: '#ffffff' }}>Observation</strong> &mdash; process the result, then repeat. This is simple, effective, and works well for tasks that need 3-10 tool calls.
                  </p>

                  <p><strong style={{ color: '#ffffff' }}>Plan-and-Execute:</strong></p>
                  <p>
                    For complex tasks, the agent first creates a detailed plan (&quot;Step 1: Search for X. Step 2: Analyze Y. Step 3: Write report.&quot;), then executes each step. A separate &quot;re-planner&quot; can adjust the plan based on intermediate results. This architecture excels at tasks with 10+ steps where upfront planning prevents wasted effort.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginTop: 24, marginBottom: 24,
                  }}>
                    <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>When to Use ReAct</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Customer support agents, data retrieval tasks, simple automation. Low overhead, fast iteration, easy to debug. Best when the task is straightforward and the number of steps is small.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>When to Use Plan-and-Execute</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Research agents, report generation, complex workflows. Better for tasks where missteps are expensive and a deliberate plan improves success rate. Think travel booking or competitive analysis.</p>
                    </div>
                  </div>
                </div>

                {/* Tool Use */}
                <h2 id="tool-use" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Tool Use & Function Calling</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Tools are what give agents their power. Without tools, an agent is just a chatbot with extra steps. With tools, an agent can interact with the entire digital world: databases, APIs, browsers, code interpreters, file systems, and other AI models.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>Common Agent Tools</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Tool Category</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Examples</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Use Case</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Search & Retrieval</strong></td>
                          <td style={{ padding: '12px 8px' }}>Web search, vector DB query, SQL</td>
                          <td style={{ padding: '12px 8px' }}>Research, data lookup, RAG</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Code Execution</strong></td>
                          <td style={{ padding: '12px 8px' }}>Python sandbox, shell, Jupyter</td>
                          <td style={{ padding: '12px 8px' }}>Data analysis, computation, automation</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>API Integration</strong></td>
                          <td style={{ padding: '12px 8px' }}>REST APIs, GraphQL, webhooks</td>
                          <td style={{ padding: '12px 8px' }}>CRM updates, payment processing, notifications</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>File Operations</strong></td>
                          <td style={{ padding: '12px 8px' }}>Read, write, parse PDFs, spreadsheets</td>
                          <td style={{ padding: '12px 8px' }}>Document processing, report generation</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Browser Control</strong></td>
                          <td style={{ padding: '12px 8px' }}>Playwright, Puppeteer, computer use</td>
                          <td style={{ padding: '12px 8px' }}>Web scraping, form filling, testing</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Model Context Protocol (MCP):</strong></p>
                  <p>
                    MCP is an open standard (introduced by Anthropic) that standardizes how AI agents connect to tools and data sources. Think of it as USB-C for AI &mdash; a universal connector that lets any agent use any tool without custom integration code. MCP servers expose tools, resources, and prompts through a consistent protocol. This is rapidly becoming the standard for agent tool integration.
                  </p>

                  <p><strong style={{ color: '#ffffff' }}>Tool design best practices:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Clear descriptions:</strong> Write tool descriptions that explain what the tool does, when to use it, and what inputs it expects. The LLM decides tool selection based on these descriptions.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Atomic tools:</strong> Each tool should do one thing well. &quot;search_database&quot; and &quot;write_to_database&quot; are better than a single &quot;database_operation&quot; tool. Granularity helps the LLM make better decisions.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Error handling:</strong> Tools must return clear, actionable error messages. &quot;Rate limited, retry in 30 seconds&quot; is useful. &quot;Error 429&quot; is not. The agent needs to understand what went wrong to recover.</li>
                    <li><strong style={{ color: '#ffffff' }}>Sandboxing:</strong> Always sandbox code execution and limit API permissions. An agent with unrestricted access to production databases is a security incident waiting to happen.</li>
                  </ul>
                </div>

                {/* Memory Systems */}
                <h2 id="memory-systems" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Memory Systems for AI Agents</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Memory is what separates a useful agent from a forgetful chatbot. Without memory, every interaction starts from scratch. With well-designed memory, agents learn from experience, maintain context across sessions, and build knowledge over time.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginTop: 24, marginBottom: 24,
                  }}>
                    <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Short-Term Memory</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>The conversation context window. All recent messages, tool calls, and observations. This is the agent&apos;s working memory &mdash; what it&apos;s actively thinking about. Limited by context window size (200K+ tokens in 2026).</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Long-Term Memory</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Persistent storage in vector databases (Pinecone, Weaviate, Chroma). User preferences, past conversations, learned facts, and organizational knowledge. Retrieved via semantic search when relevant.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Episodic Memory</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Records of past task executions: what worked, what failed, and what strategies were effective. Agents learn from experience and improve over time. Like a human reflecting on past projects.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Procedural Memory</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Standard operating procedures, workflows, and best practices stored as structured instructions. When the agent encounters a familiar task type, it retrieves the proven playbook.</p>
                    </div>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Memory implementation patterns:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Summarization:</strong> Periodically summarize older conversation history to fit within context limits. Keep recent messages verbatim and compress older ones into summaries.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Retrieval-Augmented Memory:</strong> Store all interactions in a vector database. Before each response, retrieve the most relevant past interactions. This gives the agent &quot;infinite&quot; memory without context window limits.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Knowledge Graphs:</strong> Structure learned facts as entity-relationship graphs. This enables complex reasoning about relationships between concepts, people, and events that flat vector search misses.</li>
                    <li><strong style={{ color: '#ffffff' }}>Memory Prioritization:</strong> Not all memories are equally important. Implement recency, relevance, and importance scoring to surface the most useful memories at the right time.</li>
                  </ul>
                </div>

                {/* Multi-Agent */}
                <h2 id="multi-agent" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Multi-Agent Orchestration</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Multi-agent systems use multiple specialized agents working together, each with its own role, tools, and expertise. Like a team of specialists rather than one generalist, multi-agent architectures handle complex workflows that no single agent could manage effectively.
                  </p>

                  <div style={{
                    background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(180,253,131,0.2)',
                  }}>
                    <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                      &quot;Single agents hit a ceiling of complexity. Multi-agent systems break through it. A research agent, an analysis agent, a writing agent, and a review agent collaborating produce output that&apos;s dramatically better than any single agent working alone.&quot;
                    </p>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Multi-agent patterns:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Supervisor Pattern:</strong> A central orchestrator agent delegates tasks to specialized worker agents, reviews their outputs, and synthesizes the final result. Used when tasks have clear decomposition and quality control matters.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Hierarchical Teams:</strong> Supervisors manage sub-teams, who manage individual agents. A CEO agent oversees a Research Team Lead and a Writing Team Lead, each managing their own specialist agents. Scales to very complex workflows.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Debate/Adversarial:</strong> Two or more agents argue different perspectives on a question. A judge agent synthesizes the best answer. This produces higher-quality outputs on subjective or complex analytical tasks.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Pipeline:</strong> Agents process tasks sequentially. Agent 1 researches, Agent 2 analyzes, Agent 3 writes, Agent 4 reviews. Simple, predictable, easy to debug. Good for well-defined workflows.</li>
                    <li><strong style={{ color: '#ffffff' }}>Swarm:</strong> Agents hand off tasks to each other dynamically based on expertise. No central orchestrator. Each agent decides when to delegate and to whom. More flexible but harder to control.</li>
                  </ul>
                </div>

                {/* Frameworks */}
                <h2 id="frameworks" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frameworks: LangGraph, CrewAI & Beyond</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Choosing the right framework determines your development speed, flexibility, and production readiness. Here are the leading frameworks for AI agent development in 2026.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>Agent Framework Comparison</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Framework</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Strengths</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>LangGraph</strong></td>
                          <td style={{ padding: '12px 8px' }}>Stateful graphs, persistence, human-in-the-loop, production-ready</td>
                          <td style={{ padding: '12px 8px' }}>Complex stateful agents, enterprise workflows</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>CrewAI</strong></td>
                          <td style={{ padding: '12px 8px' }}>Role-based multi-agent, simple API, task delegation</td>
                          <td style={{ padding: '12px 8px' }}>Multi-agent teams, role-playing workflows</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Claude Agent SDK</strong></td>
                          <td style={{ padding: '12px 8px' }}>Native Claude integration, MCP support, simple API</td>
                          <td style={{ padding: '12px 8px' }}>Claude-first agents, tool-heavy workflows</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>OpenAI Agents SDK</strong></td>
                          <td style={{ padding: '12px 8px' }}>Handoff pattern, guardrails, tracing built-in</td>
                          <td style={{ padding: '12px 8px' }}>OpenAI model agents, swarm-style handoffs</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>AutoGen (Microsoft)</strong></td>
                          <td style={{ padding: '12px 8px' }}>Conversational agents, code execution, group chat</td>
                          <td style={{ padding: '12px 8px' }}>Research, coding agents, multi-model setups</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>LangGraph deep dive:</strong></p>
                  <p>
                    LangGraph models agents as directed graphs. Nodes are functions (LLM calls, tool calls, logic). Edges define flow between nodes (conditional routing, loops). State persists across the graph, enabling complex workflows with branching, cycles, and human-in-the-loop checkpoints. It&apos;s the most flexible framework for building production agents.
                  </p>

                  <p><strong style={{ color: '#ffffff' }}>CrewAI deep dive:</strong></p>
                  <p>
                    CrewAI is built around roles. You define Agents (with backstory, goals, and tools), Tasks (with descriptions and expected outputs), and Crews (how agents collaborate). It&apos;s the fastest way to build multi-agent systems for content creation, research, and business process automation.
                  </p>
                </div>

                {/* Production Deployment */}
                <h2 id="production" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Production Deployment & Observability</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Building a demo agent is easy. Deploying a production agent that&apos;s reliable, observable, and cost-effective is hard. Here&apos;s what separates production agents from prototypes.
                  </p>

                  {[
                    { num: 1, title: 'Guardrails & Safety', desc: 'Implement input validation, output filtering, and action constraints. An agent should never be able to delete production data, send unauthorized emails, or spend unlimited money on API calls. Use allowlists for high-risk tools and require human approval for irreversible actions.' },
                    { num: 2, title: 'Observability & Tracing', desc: 'Use LangSmith, Braintrust, or Arize Phoenix to trace every LLM call, tool invocation, and decision point. When an agent fails (and it will), you need a complete trace to understand why. Monitor token usage, latency, error rates, and task success rates.' },
                    { num: 3, title: 'Cost Management', desc: 'Agent token costs can spiral quickly. A complex task might involve 50+ LLM calls. Use caching (semantic caching for similar queries), model routing (cheap models for simple decisions, expensive models for complex reasoning), and token budgets to control costs.' },
                    { num: 4, title: 'Evaluation & Testing', desc: 'Build automated evaluation suites that test agent performance on representative tasks. Measure task completion rate, accuracy, cost per task, and time to completion. Run evals on every code change and model upgrade.' },
                    { num: 5, title: 'Human-in-the-Loop', desc: 'Design escape hatches. Agents should escalate to humans when confidence is low, stakes are high, or the task is outside their competence. The goal is augmentation, not full automation. Build approval workflows for high-impact actions.' },
                    { num: 6, title: 'Fault Tolerance', desc: 'Agents interact with unreliable external systems. Implement retries with exponential backoff, circuit breakers for failing tools, fallback strategies, and graceful degradation. A good agent recovers from failures instead of crashing.' },
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
                }}>Why Choose Codazz for AI Agent Development</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Production Agent Experience</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We&apos;ve deployed production AI agents for customer support, data analysis, content workflows, and business process automation. We know the difference between a demo and a system that handles 10,000 tasks per day.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Framework-Agnostic</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We work with LangGraph, CrewAI, Claude Agent SDK, and custom frameworks. We choose the right tool for your use case, not the one we&apos;re most comfortable with. No vendor lock-in.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>MCP & Tool Integration</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We build custom MCP servers for your business systems, enabling agents to interact with your CRM, ERP, databases, and APIs through a standardized protocol. Your agents plug into your tech stack seamlessly.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Full Observability Stack</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Every agent we deploy includes tracing, evaluation, cost monitoring, and alerting. You see exactly what your agents are doing, how much they cost, and where they fail. No black boxes.</p>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How much does it cost to build an AI agent?', a: 'A simple single-purpose agent (customer support, data retrieval) costs $30K-$80K to build. A multi-agent system with complex workflows, tool integrations, and production infrastructure runs $100K-$300K. Enterprise agents with multiple teams, custom MCP servers, and full observability cost $300K-$600K+. Ongoing costs include LLM API usage ($500-$10K/month depending on volume) and infrastructure.' },
                  { q: 'What LLM should I use for AI agents?', a: 'Claude (Anthropic) excels at complex reasoning, tool use, and following instructions &mdash; making it ideal for agents. GPT-4o (OpenAI) is strong for general-purpose agents. For cost-sensitive applications, Claude Haiku or GPT-4o-mini handle simpler agent tasks at 1/10th the cost. Open-source models (Llama 3, Mistral) work for agents with simpler tool use requirements. Many production systems use model routing: expensive models for planning, cheap models for simple tool calls.' },
                  { q: 'What is the difference between an AI agent and a chatbot?', a: 'A chatbot responds to individual messages within a single conversation. An AI agent autonomously plans and executes multi-step tasks using tools (APIs, databases, code). Key differences: (1) Agents maintain goals across multiple steps; chatbots respond to one prompt at a time. (2) Agents use tools to take real-world actions; chatbots generate text. (3) Agents adapt their approach based on intermediate results; chatbots don\'t have iterative loops. (4) Agents can delegate to other agents; chatbots are standalone.' },
                  { q: 'Is LangGraph or CrewAI better for building AI agents?', a: 'LangGraph is better for: complex stateful workflows, fine-grained control over agent behavior, human-in-the-loop patterns, and enterprise production requirements. CrewAI is better for: rapid prototyping, role-based multi-agent teams, content/research workflows, and simpler use cases. Start with CrewAI if you want fast results. Move to LangGraph when you need production-grade control, persistence, and complex routing logic.' },
                  { q: 'How do you make AI agents reliable in production?', a: 'Production reliability requires: (1) Guardrails that prevent dangerous actions (delete, send, pay) without approval. (2) Comprehensive tracing to debug failures. (3) Automated evaluation suites that run on every deployment. (4) Retry logic with fallback strategies for failed tool calls. (5) Human-in-the-loop escalation for low-confidence decisions. (6) Cost budgets to prevent runaway API spending. (7) Canary deployments to test changes on a small percentage of traffic first.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden',
                  }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: '100%', padding: 24, background: 'none', border: 'none', cursor: 'pointer',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left',
                      }}
                    >
                      <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', margin: 0 }}>{faq.q}</h3>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"
                        style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', flexShrink: 0 }}>
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '0 24px 24px' }}>
                        <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Ready to Build AI Agents for Your Business?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free AI agent strategy session. We&apos;ll identify your highest-value automation opportunities, recommend the right architecture, and build a production-ready prototype in 2-4 weeks.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Start Your AI Agent Project
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

                  {/* Author Card */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '50%',
                        background: 'rgba(180,253,131,0.15)', border: '1px solid rgba(180,253,131,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 15, fontWeight: 700, color: '#b4fd83',
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>
                      Raman leads Codazz&apos;s AI agent development practice, building autonomous systems with LangGraph, CrewAI, and custom frameworks for enterprise clients.
                    </p>
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
