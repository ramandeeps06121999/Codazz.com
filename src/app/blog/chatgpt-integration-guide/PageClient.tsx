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
  { id: 'overview', label: 'Overview', emoji: '🌐' },
  { id: 'api-setup', label: 'API Setup', emoji: '🔑' },
  { id: 'streaming', label: 'Streaming Responses', emoji: '🌊' },
  { id: 'function-calling', label: 'Function Calling', emoji: '⚡' },
  { id: 'embeddings', label: 'Embeddings & RAG', emoji: '🧠' },
  { id: 'cost-optimization', label: 'Cost Optimization', emoji: '💰' },
  { id: 'rate-limiting', label: 'Rate Limiting', emoji: '🚦' },
  { id: 'production', label: 'Production Best Practices', emoji: '🏭' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'ai-trends-2026', title: 'Top AI Development Trends 2026', category: 'AI', readTime: '21 min' },
  { slug: 'api-development-guide-2026', title: 'API Development Guide 2026', category: 'Development', readTime: '18 min' },
];

export default function ChatGPTIntegrationGuideClient() {
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

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden', paddingTop: 'clamp(120px, 15vw, 160px)' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
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
              }}>Developer Guide</span>
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
              How to Integrate ChatGPT into Your App: Complete Developer Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Everything you need to integrate OpenAI&apos;s ChatGPT API into your application&mdash;from basic setup to production-grade streaming, function calling, embeddings, and cost optimization.
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
                    ChatGPT changed the game for AI-powered applications. But moving from playground demos to a production-grade integration requires careful architecture decisions around streaming, error handling, cost management, and security. This guide covers everything.
                  </p>
                  <p>
                    Whether you&apos;re building a customer support chatbot, an AI writing assistant, or a code generation tool, the OpenAI API gives you access to GPT-4o, GPT-4 Turbo, and other models. We&apos;ll walk through each step from obtaining your API key to deploying a production-ready integration that handles thousands of concurrent users.
                  </p>
                </div>

                {/* Section: Overview */}
                <h2 id="overview" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>ChatGPT Integration: The 2026 Landscape</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>OpenAI&apos;s API has evolved significantly. In 2026, the ecosystem includes:</p>
                  <ul style={{ paddingLeft: 24, marginTop: 16 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>GPT-4o</strong> &mdash; The flagship multimodal model supporting text, images, audio, and video inputs with fast response times.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>GPT-4 Turbo</strong> &mdash; 128K context window, optimized for complex reasoning tasks and structured outputs.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>GPT-4o Mini</strong> &mdash; Cost-effective model for high-volume, lower-complexity tasks at 60x cheaper than GPT-4.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Assistants API</strong> &mdash; Built-in support for threads, file retrieval, code interpreter, and persistent memory.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Batch API</strong> &mdash; 50% cost reduction for non-real-time workloads processed within 24 hours.</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.06)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.15)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Key Decision: Chat Completions vs. Assistants API</h4>
                  <p style={{ margin: 0, fontSize: 15 }}>
                    Use <strong style={{ color: '#ffffff' }}>Chat Completions</strong> when you want full control over conversation state, context windows, and prompt engineering. Use the <strong style={{ color: '#ffffff' }}>Assistants API</strong> when you need built-in file search, code interpreter, or persistent threads without managing state yourself.
                  </p>
                </div>

                {/* Section: API Setup */}
                <h2 id="api-setup" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 1: API Setup &amp; Authentication</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>Start by creating an OpenAI account and generating an API key. Here&apos;s the setup for a Node.js/TypeScript backend:</p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`npm install openai

// src/lib/openai.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  // Optional: set organization ID
  organization: process.env.OPENAI_ORG_ID,
});

export async function chat(messages: OpenAI.ChatCompletionMessageParam[]) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages,
    temperature: 0.7,
    max_tokens: 4096,
  });
  return response.choices[0].message.content;
}`}</pre>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Environment Variable Security</h3>
                  <p>Never expose your API key to the client. The OpenAI SDK should only run server-side.</p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`# .env.local (never commit this file)
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
OPENAI_ORG_ID=org-xxxxxxxxxxxxxxxxxxxxx

# Next.js API route (app/api/chat/route.ts)
import { NextRequest, NextResponse } from 'next/server';
import { chat } from '@/lib/openai';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  // Validate & sanitize input
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: 'Invalid messages' }, { status: 400 });
  }

  const reply = await chat(messages);
  return NextResponse.json({ reply });
}`}</pre>
                  </div>
                </div>

                {/* Section: Streaming */}
                <h2 id="streaming" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 2: Streaming Responses</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Streaming is essential for production apps. Users see tokens appearing in real-time instead of waiting 5-15 seconds for a complete response. This dramatically improves perceived performance and user engagement.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// Server: app/api/chat/stream/route.ts
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { messages } = await req.json();

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages,
    stream: true,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || '';
        controller.enqueue(encoder.encode(\`data: \${JSON.stringify({ text })}\\n\\n\`));
      }
      controller.enqueue(encoder.encode('data: [DONE]\\n\\n'));
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}`}</pre>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Client-Side Stream Consumption</h3>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// Client: hooks/useChat.ts
export function useChat() {
  const [response, setResponse] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);

  const sendMessage = async (messages: Message[]) => {
    setIsStreaming(true);
    setResponse('');

    const res = await fetch('/api/chat/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    while (reader) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\\n').filter(l => l.startsWith('data: '));

      for (const line of lines) {
        const data = line.slice(6);
        if (data === '[DONE]') break;
        const { text } = JSON.parse(data);
        setResponse(prev => prev + text);
      }
    }
    setIsStreaming(false);
  };

  return { response, isStreaming, sendMessage };
}`}</pre>
                  </div>
                </div>

                {/* Section: Function Calling */}
                <h2 id="function-calling" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 3: Function Calling (Tool Use)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Function calling lets ChatGPT invoke your backend functions&mdash;querying databases, calling APIs, updating records&mdash;turning it from a text generator into an intelligent agent that takes action.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`const tools: OpenAI.ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'get_order_status',
      description: 'Look up the status of a customer order by order ID',
      parameters: {
        type: 'object',
        properties: {
          order_id: { type: 'string', description: 'The order ID (e.g., ORD-12345)' },
        },
        required: ['order_id'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'search_products',
      description: 'Search product catalog by query',
      parameters: {
        type: 'object',
        properties: {
          query: { type: 'string' },
          category: { type: 'string', enum: ['electronics', 'clothing', 'home'] },
          max_price: { type: 'number' },
        },
        required: ['query'],
      },
    },
  },
];

// Handle tool calls in a loop
async function handleWithTools(messages: Message[]) {
  let response = await openai.chat.completions.create({
    model: 'gpt-4o', messages, tools, tool_choice: 'auto',
  });

  while (response.choices[0].finish_reason === 'tool_calls') {
    const toolCalls = response.choices[0].message.tool_calls!;
    messages.push(response.choices[0].message);

    for (const call of toolCalls) {
      const result = await executeFunction(call.function.name,
        JSON.parse(call.function.arguments));
      messages.push({
        role: 'tool', tool_call_id: call.id,
        content: JSON.stringify(result),
      });
    }

    response = await openai.chat.completions.create({
      model: 'gpt-4o', messages, tools,
    });
  }
  return response.choices[0].message.content;
}`}</pre>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.06)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.15)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Pro Tip: Parallel Function Calls</h4>
                  <p style={{ margin: 0, fontSize: 15 }}>
                    GPT-4o can invoke multiple functions simultaneously. If a user asks &quot;Show me my order status and recommend similar products,&quot; the model will call both <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4 }}>get_order_status</code> and <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4 }}>search_products</code> in parallel, reducing round trips.
                  </p>
                </div>

                {/* Section: Embeddings */}
                <h2 id="embeddings" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 4: Embeddings &amp; RAG (Retrieval-Augmented Generation)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Out-of-the-box, ChatGPT only knows its training data. To make it answer questions about <em>your</em> data&mdash;internal docs, product catalogs, knowledge bases&mdash;you need RAG. The pattern is: embed your documents, store vectors in a database, retrieve relevant chunks at query time, and pass them as context.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// Generate embeddings
const embedding = await openai.embeddings.create({
  model: 'text-embedding-3-large',
  input: 'Your document text here...',
  dimensions: 1536, // Reduce dimensions for faster search
});

const vector = embedding.data[0].embedding; // Float array

// Store in Pinecone / pgvector / Supabase
await vectorDB.upsert({
  id: 'doc-123',
  values: vector,
  metadata: { source: 'product-docs', title: 'Setup Guide' },
});

// RAG query flow
async function ragQuery(userQuestion: string) {
  // 1. Embed the question
  const qEmbed = await openai.embeddings.create({
    model: 'text-embedding-3-large',
    input: userQuestion, dimensions: 1536,
  });

  // 2. Search vector DB for relevant chunks
  const results = await vectorDB.query({
    vector: qEmbed.data[0].embedding,
    topK: 5, includeMetadata: true,
  });

  // 3. Build context from retrieved chunks
  const context = results.matches
    .map(m => m.metadata.text).join('\\n---\\n');

  // 4. Send to ChatGPT with context
  return openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: \`Answer based on this context:\\n\${context}\` },
      { role: 'user', content: userQuestion },
    ],
  });
}`}</pre>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Choosing a Vector Database</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 16 }}>
                    {[
                      { name: 'Pinecone', desc: 'Fully managed, serverless, scales to billions of vectors. Best for teams that want zero ops.' },
                      { name: 'pgvector', desc: 'PostgreSQL extension. Great if you already use Postgres. Self-hosted, cost-effective.' },
                      { name: 'Weaviate', desc: 'Open-source, hybrid search (vector + keyword). Good for complex retrieval needs.' },
                      { name: 'Supabase', desc: 'pgvector built-in with auth, storage, and edge functions. Full-stack developer favorite.' },
                    ].map((db, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{db.name}</h4>
                        <p style={{ fontSize: 14, margin: 0 }}>{db.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Cost Optimization */}
                <h2 id="cost-optimization" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 5: Cost Optimization</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    OpenAI costs can spiral quickly at scale. A single GPT-4o call costs ~$5 per million input tokens, and $15 per million output tokens. At 10,000 daily users, that adds up fast. Here are proven strategies to control costs:
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <div style={{ display: 'grid', gap: 16 }}>
                    {[
                      { title: 'Model Routing', detail: 'Use GPT-4o Mini ($0.15/1M input) for simple tasks like classification, summarization, and FAQ. Reserve GPT-4o ($5/1M input) for complex reasoning. Route based on query complexity.' },
                      { title: 'Prompt Caching', detail: 'OpenAI automatically caches repeated prompt prefixes. Structure your system prompts to maximize cache hits&mdash;put static instructions first, dynamic content last. Cached tokens cost 50% less.' },
                      { title: 'Context Window Management', detail: 'Don\'t send the entire conversation history every time. Summarize older messages, keep only the last 10-20 exchanges, and use embeddings to retrieve relevant context on-demand.' },
                      { title: 'Batch API', detail: 'For non-real-time workloads (content generation, data processing, analysis), use the Batch API for 50% cost reduction. Results are returned within 24 hours.' },
                      { title: 'Response Caching', detail: 'Cache identical or near-identical queries with Redis or a CDN. For FAQ-style questions, cache hit rates can exceed 40%, cutting API costs substantially.' },
                      { title: 'Token Limits', detail: 'Set max_tokens to prevent runaway responses. A 500-token limit is often sufficient for customer support replies. Set per-user daily token budgets.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.title}</h4>
                        <p style={{ fontSize: 15, margin: 0 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                  overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// Smart model routing example
function selectModel(query: string, complexity: number): string {
  if (complexity < 0.3) return 'gpt-4o-mini';    // Simple queries
  if (complexity < 0.7) return 'gpt-4o-mini';     // Medium queries
  return 'gpt-4o';                                 // Complex reasoning
}

// Estimate complexity with a fast classifier
async function estimateComplexity(query: string): Promise<number> {
  const res = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'Rate query complexity 0-1. Reply with number only.' },
      { role: 'user', content: query },
    ],
    max_tokens: 5, temperature: 0,
  });
  return parseFloat(res.choices[0].message.content || '0.5');
}`}</pre>
                </div>

                {/* Section: Rate Limiting */}
                <h2 id="rate-limiting" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 6: Rate Limiting &amp; Error Handling</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    OpenAI enforces rate limits based on your tier (RPM: requests per minute, TPM: tokens per minute). You also need to protect your own API from abuse. Here&apos;s a robust approach:
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(20, '1 m'), // 20 requests per minute
  analytics: true,
});

// Middleware for rate limiting
export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
        'X-RateLimit-Reset': reset.toString(),
      }},
    );
  }

  // Proceed with OpenAI call...
}

// Retry with exponential backoff for OpenAI errors
async function callWithRetry(fn: () => Promise<any>, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      if (error.status === 429 || error.status === 500) {
        const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
        await new Promise(r => setTimeout(r, delay));
        continue;
      }
      throw error;
    }
  }
  throw new Error('Max retries exceeded');
}`}</pre>
                  </div>
                </div>

                {/* Section: Production */}
                <h2 id="production" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 7: Production Best Practices</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <div style={{ display: 'grid', gap: 16 }}>
                    {[
                      { title: 'Content Moderation', detail: 'Use OpenAI\'s Moderation API to filter harmful inputs before sending to GPT. It\'s free and catches hate speech, violence, and self-harm content.' },
                      { title: 'Structured Outputs', detail: 'Use JSON mode or Zod schemas with response_format to guarantee valid JSON responses. This eliminates parsing errors in production pipelines.' },
                      { title: 'Observability', detail: 'Log every request/response with Langfuse, LangSmith, or custom logging. Track latency, token usage, error rates, and user satisfaction. Set up alerts for cost anomalies.' },
                      { title: 'Prompt Versioning', detail: 'Store prompts in a database or config file, not hardcoded. Version them like code. A/B test different prompts. Use prompt management tools like Langfuse or Helicone.' },
                      { title: 'Graceful Degradation', detail: 'If OpenAI is down, fall back to cached responses or a simpler local model. Never show users a raw error. Queue requests and retry.' },
                      { title: 'Security Hardening', detail: 'Implement prompt injection defense: validate inputs, use system prompts to establish boundaries, filter outputs for PII leakage, and audit all AI-generated content before displaying.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.title}</h4>
                        <p style={{ fontSize: 15, margin: 0 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.06)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.15)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Production Checklist</h4>
                  <ul style={{ margin: 0, paddingLeft: 20, fontSize: 15 }}>
                    <li style={{ marginBottom: 8 }}>API key stored in environment variables, rotated quarterly</li>
                    <li style={{ marginBottom: 8 }}>Rate limiting on both user-facing API and OpenAI calls</li>
                    <li style={{ marginBottom: 8 }}>Content moderation on inputs and outputs</li>
                    <li style={{ marginBottom: 8 }}>Structured output validation with Zod schemas</li>
                    <li style={{ marginBottom: 8 }}>Request/response logging with cost tracking</li>
                    <li style={{ marginBottom: 8 }}>Fallback strategy when OpenAI API is unavailable</li>
                    <li style={{ marginBottom: 8 }}>Per-user token budgets and spending alerts</li>
                    <li style={{ marginBottom: 0 }}>Prompt injection testing and input sanitization</li>
                  </ul>
                </div>

                {/* Section: Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Teams Choose Codazz for AI Integration</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    At Codazz, we&apos;ve shipped production ChatGPT integrations for startups and enterprises across fintech, healthcare, and e-commerce. Our team handles the full stack&mdash;from prompt engineering and RAG pipelines to streaming UIs and cost optimization.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
                    {[
                      { title: 'Production-Ready', desc: 'We build AI integrations that handle 10K+ concurrent users with proper error handling, caching, and fallbacks.' },
                      { title: 'Cost-Optimized', desc: 'Smart model routing, prompt caching, and response caching typically cut OpenAI costs by 40-60%.' },
                      { title: 'Rapid Delivery', desc: 'From proof-of-concept to production in 4-8 weeks. We move fast without cutting corners on security.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.title}</h4>
                        <p style={{ fontSize: 14, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How much does it cost to use the ChatGPT API?', a: 'GPT-4o costs $5 per million input tokens and $15 per million output tokens. GPT-4o Mini is significantly cheaper at $0.15/$0.60 per million tokens. A typical customer support chatbot handling 1,000 conversations/day costs $50-$200/month with proper optimization (model routing, caching, token limits).' },
                  { q: 'Should I use the Chat Completions API or the Assistants API?', a: 'Use Chat Completions for maximum control over conversation state, prompt engineering, and cost. Use the Assistants API if you need built-in file search, code interpreter, or persistent conversation threads without managing state yourself. Most production apps start with Chat Completions.' },
                  { q: 'How do I prevent prompt injection attacks?', a: 'Layer your defenses: (1) Use strong system prompts with clear boundaries, (2) Validate and sanitize user inputs, (3) Use OpenAI\'s Moderation API, (4) Implement output filtering for PII/sensitive data, (5) Use structured outputs to constrain response format, (6) Monitor for anomalous patterns in production.' },
                  { q: 'Can I fine-tune GPT-4 for my specific use case?', a: 'Yes, OpenAI supports fine-tuning for GPT-4o and GPT-4o Mini. However, start with prompt engineering and RAG first&mdash;fine-tuning is typically needed only when you require a specific output style/format, need to reduce token usage by encoding knowledge into the model, or have a specialized domain where few-shot prompting falls short.' },
                  { q: 'What is the maximum context window for GPT-4?', a: 'GPT-4 Turbo supports 128K tokens (~300 pages of text). GPT-4o supports 128K tokens as well. However, sending maximum context every request is expensive. Best practice: use RAG to retrieve only relevant context (typically 2-5K tokens), keeping costs low while maintaining accuracy.' },
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
                    Need Help Integrating ChatGPT?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free technical consultation. We&apos;ll review your use case, recommend the right architecture, and provide a detailed implementation plan.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Start Your AI Integration with Codazz
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
