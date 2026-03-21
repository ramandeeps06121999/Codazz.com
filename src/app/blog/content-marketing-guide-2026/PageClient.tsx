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
  { id: 'what-is-content-marketing', label: 'What Is Content Marketing', emoji: '📝' },
  { id: 'strategy-frameworks', label: 'Strategy Frameworks', emoji: '🗺️' },
  { id: 'topic-clusters', label: 'Topic Clusters & Pillar Pages', emoji: '🔗' },
  { id: 'ai-content-creation', label: 'AI-Assisted Creation', emoji: '🤖' },
  { id: 'repurposing', label: 'Content Repurposing', emoji: '♻️' },
  { id: 'b2b-vs-b2c', label: 'B2B vs B2C Strategy', emoji: '🏢' },
  { id: 'content-calendar', label: 'Content Calendar Planning', emoji: '📅' },
  { id: 'measuring-roi', label: 'Measuring Content ROI', emoji: '📊' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'ppc-vs-seo-2026', title: 'PPC vs SEO in 2026: Which Strategy Wins?', category: 'Marketing', readTime: '14 min' },
  { slug: 'startup-marketing-guide-2026', title: 'Startup Marketing Guide 2026: From Zero to 10K Users', category: 'Marketing', readTime: '16 min' },
  { slug: 'digital-marketing-cost-usa', title: 'Digital Marketing Agency Cost in USA 2026', category: 'Business', readTime: '12 min' },
];

const faqItems = [
  {
    q: 'How long does content marketing take to show results?',
    a: 'Content marketing is a long-term strategy. Most businesses start seeing meaningful organic traffic gains in 3–6 months, with significant ROI compounding over 12–18 months. The timeline depends on domain authority, publishing cadence, content quality, and competitive landscape. Targeting low-competition long-tail keywords can accelerate early results.',
  },
  {
    q: 'How much content should I publish per month?',
    a: 'Quality always beats quantity. For most B2B companies, 4–8 in-depth articles per month (1,500–3,000 words each) outperforms 20 thin posts. SaaS and ecommerce brands targeting broader audiences may benefit from higher frequency. What matters most is consistent publishing, strong on-page SEO, and genuine depth on each topic.',
  },
  {
    q: 'What is a topic cluster and why does it matter for SEO?',
    a: 'A topic cluster is a group of interlinked pages centered on a broad pillar page (e.g., "Content Marketing") with supporting cluster pages covering subtopics (e.g., "content calendar templates," "B2B content strategy," "AI writing tools"). This architecture signals topical authority to Google, improves internal linking, and helps entire clusters rank — not just individual pages.',
  },
  {
    q: 'Can AI replace human content writers in 2026?',
    a: 'AI tools (ChatGPT, Claude, Gemini) excel at research, outlining, first drafts, and repurposing. However, they cannot replicate original research, authentic brand voice, nuanced expertise, or emotionally compelling storytelling. The winning formula in 2026 is human-led, AI-assisted: use AI to 10x output speed while humans handle strategy, quality control, and unique insights.',
  },
  {
    q: 'How do I measure content marketing ROI?',
    a: 'Track a layered funnel: awareness (organic sessions, impressions, rankings), engagement (time on page, scroll depth, email subscribers), lead generation (form fills, demo requests attributed to organic), and revenue (CRM-attributed pipeline from content-driven leads). Tools like GA4, Search Console, Ahrefs, and HubSpot help connect content touchpoints to closed revenue.',
  },
];

export default function ContentMarketingGuideClient() {
  const pageRef = useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('what-is-content-marketing');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (const sec of tocSections) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollY) setActiveSection(sec.id);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const green = '#22c55e';
  const darkGreen = '#16a34a';
  const cardBg = '#0d0d0d';
  const borderCol = '#1a1a1a';

  return (
    <main ref={pageRef} style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: 140, paddingBottom: 80, overflow: 'hidden' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
            <span style={{ display: 'inline-block', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 20, padding: '6px 18px', fontSize: 13, color: green, marginBottom: 20, fontWeight: 600, letterSpacing: '0.04em' }}>
              CONTENT MARKETING · MARCH 20, 2026
            </span>
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 58px)', fontWeight: 800, lineHeight: 1.12, marginBottom: 24, opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease 0.1s' }}>
            Content Marketing Strategy Guide 2026:<br />
            <span style={{ color: green }}>Drive Organic Growth</span>
          </h1>
          <p className="reveal" style={{ fontSize: 18, color: '#a0a0a0', lineHeight: 1.7, maxWidth: 680, margin: '0 auto 32px', opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease 0.2s' }}>
            From topic clusters and pillar pages to AI-assisted creation and repurposing workflows — everything you need to build a content engine that compounds organic growth in 2026.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease 0.3s' }}>
            {[{ label: '18 min read', icon: '⏱️' }, { label: 'Updated Mar 2026', icon: '📅' }, { label: 'B2B & B2C', icon: '🎯' }].map(b => (
              <span key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#111', border: '1px solid #222', borderRadius: 20, padding: '8px 16px', fontSize: 13, color: '#ccc' }}>
                <span>{b.icon}</span>{b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div style={{ maxWidth: 900, margin: '0 auto 60px', padding: '0 24px' }}>
        <div className="reveal" style={{ borderRadius: 28, overflow: 'hidden', opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
          <Image src="/blog_images/content-marketing-guide-2026.jpg" alt="Content Marketing Strategy Guide 2026" width={900} height={480} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
        </div>
      </div>

      {/* Body: TOC sidebar + article */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 48, alignItems: 'start' }}>

        {/* Article */}
        <article>

          {/* Section: What Is Content Marketing */}
          <section id="what-is-content-marketing" style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              What Is Content Marketing in 2026?
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 20, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.1s' }}>
              Content marketing is the strategic practice of creating and distributing valuable, relevant content to attract, engage, and convert a defined audience — without directly pitching your product. In 2026, it has evolved beyond blogging: it now encompasses long-form articles, video scripts, podcasts, newsletters, interactive tools, and AI-generated assets distributed across a unified channel mix.
            </p>
            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.15s' }}>
              The economics are compelling. Organic search traffic compounds over time — each article you publish continues attracting visitors months or years after it's written, unlike paid ads that stop the moment your budget runs out. Content marketing costs 62% less than outbound marketing and generates 3x more leads, according to DemandMetric research.
            </p>

            {/* Stats row */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.2s' }}>
              {[
                { stat: '3x', label: 'More leads vs outbound' },
                { stat: '62%', label: 'Lower cost per lead' },
                { stat: '6x', label: 'Higher conversion rates' },
                { stat: '70%', label: 'Buyers prefer articles over ads' },
              ].map(s => (
                <div key={s.stat} style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 16, padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: green, marginBottom: 6 }}>{s.stat}</div>
                  <div style={{ fontSize: 13, color: '#888', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.25s' }}>
              The shift in 2026 is the integration of AI tools into the content production workflow, enabling teams to publish at scale while maintaining quality. Companies that master the human-AI collaboration model will dominate organic search in their niches.
            </p>
          </section>

          {/* Section: Strategy Frameworks */}
          <section id="strategy-frameworks" style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              Content Strategy Frameworks That Work in 2026
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.1s' }}>
              A content strategy without a framework is just publishing noise. The most effective teams in 2026 choose from several proven models depending on their business stage, resources, and goals.
            </p>

            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.15s' }}>
              {[
                {
                  title: 'The Hub & Spoke Model',
                  desc: 'One authoritative "hub" page targets a broad keyword (e.g., "mobile app development"). Multiple "spoke" pages cover related subtopics and link back to the hub. This establishes topical authority and helps all pages rank together.',
                  tag: 'Best for: Established brands building authority',
                },
                {
                  title: 'The Skyscraper Technique',
                  desc: 'Find existing high-ranking content, create something 10x more comprehensive and up-to-date, then promote it to the same sites linking to the original. Still highly effective for competitive keywords.',
                  tag: 'Best for: Competitive niches with linkable assets',
                },
                {
                  title: 'The Jobs-to-Be-Done Framework',
                  desc: 'Map content to specific "jobs" your audience is trying to complete — not just keywords. Understand the underlying motivation (awareness, evaluation, decision) and create content that serves each stage perfectly.',
                  tag: 'Best for: B2B companies with complex buying journeys',
                },
                {
                  title: 'The TOFU/MOFU/BOFU Funnel',
                  desc: 'Top-of-funnel content (educational, broad) captures awareness. Middle-of-funnel content (comparison, solution-focused) nurtures. Bottom-of-funnel content (case studies, ROI calculators) converts. Balance all three layers.',
                  tag: 'Best for: SaaS and product-led growth companies',
                },
              ].map(f => (
                <div key={f.title} style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 20, padding: '24px 28px' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 15, color: '#bbb', lineHeight: 1.7, marginBottom: 12 }}>{f.desc}</p>
                  <span style={{ fontSize: 13, color: green, fontWeight: 600 }}>{f.tag}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Topic Clusters */}
          <section id="topic-clusters" style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              Topic Clusters & Pillar Pages: The SEO Architecture That Wins
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 20, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.1s' }}>
              Topic clusters remain the gold standard for SEO architecture in 2026. Google's algorithms heavily reward topical depth — sites that comprehensively cover a subject outrank those with isolated, unconnected posts.
            </p>

            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: `1px solid rgba(34,197,94,0.2)`, borderRadius: 20, padding: '28px 32px', marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.15s' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: green, marginBottom: 16 }}>How to Build a Topic Cluster: Step by Step</h3>
              <ol style={{ paddingLeft: 20, margin: 0 }}>
                {[
                  'Choose a broad pillar topic (e.g., "Content Marketing") targeting a high-volume, competitive keyword.',
                  'Audit existing content to identify gaps and cluster opportunities via keyword research tools (Ahrefs, Semrush).',
                  'Map 8–15 cluster subtopics (e.g., "content calendar templates," "how to repurpose blog posts," "B2B content strategy").',
                  'Create the pillar page first — a comprehensive 3,000–5,000 word guide that links to all cluster pages.',
                  'Publish cluster pages one by one, each linking back to the pillar and to each other where relevant.',
                  'Update the pillar page quarterly; update cluster pages whenever information changes.',
                ].map((step, i) => (
                  <li key={i} style={{ fontSize: 15, color: '#ccc', lineHeight: 1.7, marginBottom: 10 }}>{step}</li>
                ))}
              </ol>
            </div>

            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 20, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.2s' }}>
              A well-executed topic cluster for a competitive keyword like "SaaS development" can drive 5,000–50,000+ organic sessions per month once the cluster pages achieve first-page rankings. The compounding effect is dramatic — ranking cluster pages lift the pillar page, which in turn boosts the cluster.
            </p>

            <div className="reveal" style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 20, padding: '24px 28px', marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.25s' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Pillar Page vs Cluster Page: Key Differences</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${borderCol}` }}>
                      {['Attribute', 'Pillar Page', 'Cluster Page'].map(h => (
                        <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: green, fontWeight: 700 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Word count', '3,000–5,000+', '1,200–2,500'],
                      ['Keyword intent', 'Broad, informational', 'Specific, long-tail'],
                      ['Internal links', 'Links out to all cluster pages', 'Links back to pillar + related clusters'],
                      ['Update frequency', 'Quarterly', 'As information changes'],
                      ['CTA style', 'Multiple lead magnets', 'Focused single CTA'],
                    ].map(([attr, pillar, cluster]) => (
                      <tr key={attr} style={{ borderBottom: `1px solid #111` }}>
                        <td style={{ padding: '10px 12px', color: '#888', fontWeight: 600 }}>{attr}</td>
                        <td style={{ padding: '10px 12px', color: '#ccc' }}>{pillar}</td>
                        <td style={{ padding: '10px 12px', color: '#ccc' }}>{cluster}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section: AI-Assisted Creation */}
          <section id="ai-content-creation" style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              AI-Assisted Content Creation: The 2026 Playbook
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 20, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.1s' }}>
              AI tools have fundamentally changed content production economics. A content team that once published 4 articles per month can now produce 12–20 with the same headcount — but only when AI is used correctly. The danger is publishing low-quality, generic AI content that Google actively penalizes through its Helpful Content system.
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.15s' }}>
              {[
                {
                  title: 'Where AI Excels',
                  color: green,
                  items: ['Topic ideation from keyword data', 'Outline generation and structure', 'First-draft production', 'Meta descriptions and title variations', 'FAQ generation from search queries', 'Summarizing research and sources'],
                },
                {
                  title: 'Where Humans Must Lead',
                  color: '#f59e0b',
                  items: ['Original research and data', 'Authentic brand voice', 'Expert opinions and commentary', 'Emotional storytelling', 'Strategy and editorial decisions', 'Quality review and fact-checking'],
                },
              ].map(col => (
                <div key={col.title} style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 20, padding: '24px 24px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: col.color, marginBottom: 16 }}>{col.title}</h3>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {col.items.map(item => (
                      <li key={item} style={{ fontSize: 14, color: '#ccc', lineHeight: 1.7, marginBottom: 8 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: `1px solid rgba(34,197,94,0.2)`, borderRadius: 20, padding: '24px 28px', marginBottom: 20, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.2s' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: green, marginBottom: 12 }}>The AI-Assisted Workflow (Proven in 2026)</h3>
              <ol style={{ paddingLeft: 20, margin: 0 }}>
                {[
                  'Brief: Human defines keyword, intent, angle, unique insight, and brand voice guidelines.',
                  'Research: Human gathers 3–5 authoritative sources; AI summarizes and identifies gaps.',
                  'Outline: AI generates a detailed outline; human refines structure and ensures differentiation.',
                  'Draft: AI writes sections; human edits for tone, accuracy, and original expertise.',
                  'Enhancement: Human adds proprietary data, quotes, case studies AI cannot fabricate.',
                  'SEO review: AI checks keyword density, heading structure, meta copy.',
                  'Publish & promote: Human leads distribution strategy and relationship-building for links.',
                ].map((step, i) => (
                  <li key={i} style={{ fontSize: 14, color: '#ccc', lineHeight: 1.7, marginBottom: 8 }}>{step}</li>
                ))}
              </ol>
            </div>

            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.25s' }}>
              Top AI tools used by content teams in 2026: ChatGPT-4o and Claude 3.5 for drafting, Perplexity for research, Surfer SEO and Clearscope for optimization, Jasper for brand voice templates, and Midjourney / DALL-E 3 for custom visuals.
            </p>
          </section>

          {/* Section: Content Repurposing */}
          <section id="repurposing" style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              Content Repurposing: Get 10x Value from Every Piece
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.1s' }}>
              The most efficient content teams don't just publish — they repurpose. A single well-researched long-form article can fuel your entire content calendar for a week or more across multiple channels. This "content atomization" strategy maximizes ROI per hour invested.
            </p>

            <div className="reveal" style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 20, padding: '28px 32px', marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.15s' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 20 }}>The Content Repurposing Cascade</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { from: '📝 Long-Form Blog Post (3,000+ words)', to: ['📹 YouTube video script (narrated walkthrough)', '🎙️ Podcast episode (audio discussion)', '📧 3-part email newsletter series', '📱 10 LinkedIn/Twitter posts (one insight each)', '🖼️ 5 infographic panels for Pinterest/Instagram', '📊 SlideShare/LinkedIn carousel (key stats)', '🎬 2-min YouTube Short / TikTok (surprising stat hook)'] },
                ].map(item => (
                  <div key={item.from}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: green, marginBottom: 10 }}>{item.from}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8 }}>
                      {item.to.map(t => (
                        <div key={t} style={{ background: '#111', borderRadius: 10, padding: '10px 14px', fontSize: 13, color: '#ccc' }}>{t}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.2s' }}>
              {[
                { metric: '7 assets', label: 'From one long-form article' },
                { metric: '3–5x', label: 'Traffic increase via multi-channel' },
                { metric: '40%', label: 'Less content needed with repurposing' },
                { metric: '2.5x', label: 'Higher audience reach vs single channel' },
              ].map(s => (
                <div key={s.metric} style={{ background: 'rgba(34,197,94,0.06)', border: `1px solid rgba(34,197,94,0.2)`, borderRadius: 16, padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: green, marginBottom: 6 }}>{s.metric}</div>
                  <div style={{ fontSize: 13, color: '#888' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: B2B vs B2C */}
          <section id="b2b-vs-b2c" style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              B2B vs B2C Content Strategy: Key Differences
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.1s' }}>
              B2B and B2C content strategies differ fundamentally in audience intent, buying cycle length, content format preference, and distribution channels. Applying a B2C approach to a B2B audience (or vice versa) is one of the most common content marketing mistakes.
            </p>

            <div className="reveal" style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 20, padding: '28px', marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.15s' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${borderCol}` }}>
                      {['Factor', 'B2B Content Strategy', 'B2C Content Strategy'].map(h => (
                        <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: green, fontWeight: 700 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Buying cycle', '3–18 months (committee)', '1–7 days (individual)'],
                      ['Primary goal', 'Lead generation, trust', 'Awareness, conversion'],
                      ['Best formats', 'Whitepapers, case studies, webinars', 'Videos, listicles, UGC'],
                      ['Top channels', 'LinkedIn, email, organic search', 'Instagram, TikTok, YouTube, organic search'],
                      ['Content depth', 'Deep, technical, data-rich', 'Entertaining, relatable, visual'],
                      ['Keyword intent', 'Informational + commercial', 'Informational + transactional'],
                      ['Publish cadence', '2–4x/month (high quality)', '5–15x/month (higher volume)'],
                      ['Success metric', 'MQLs, pipeline influenced', 'Traffic, conversions, brand awareness'],
                    ].map(([factor, b2b, b2c]) => (
                      <tr key={factor} style={{ borderBottom: `1px solid #111` }}>
                        <td style={{ padding: '10px 14px', color: '#888', fontWeight: 600 }}>{factor}</td>
                        <td style={{ padding: '10px 14px', color: '#ccc' }}>{b2b}</td>
                        <td style={{ padding: '10px 14px', color: '#ccc' }}>{b2c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.2s' }}>
              {[
                {
                  label: 'B2B Content Priorities',
                  emoji: '🏢',
                  items: ['Original research and industry reports', 'Customer case studies with measurable ROI', 'Comparison pages (your solution vs competitors)', 'Technical documentation and how-to guides', 'LinkedIn thought leadership from founders', 'Webinars and virtual events'],
                },
                {
                  label: 'B2C Content Priorities',
                  emoji: '🛍️',
                  items: ['Short-form video (TikTok, YouTube Shorts, Reels)', 'User-generated content and reviews', 'Seasonal and trend-driven content', 'Influencer collaborations', 'Email newsletters with offers', 'Interactive quizzes and product finders'],
                },
              ].map(col => (
                <div key={col.label} style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 20, padding: '24px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 14 }}>{col.emoji} {col.label}</h3>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {col.items.map(item => (
                      <li key={item} style={{ fontSize: 14, color: '#bbb', lineHeight: 1.7, marginBottom: 8 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Content Calendar Planning */}
          <section id="content-calendar" style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              Content Calendar Planning: Build Your Publishing Engine
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 20, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.1s' }}>
              Consistency is the #1 predictor of content marketing success. A content calendar removes guesswork, aligns your team, and ensures you maintain publishing rhythm even during busy quarters.
            </p>

            <div className="reveal" style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 20, padding: '28px 32px', marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.15s' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Monthly Content Calendar Template</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                {[
                  { week: 'Week 1', focus: 'Pillar / Cluster Content', desc: 'Publish or update a high-priority SEO article. Target your highest-volume keyword gap this month.' },
                  { week: 'Week 2', focus: 'Distribution & Repurposing', desc: 'Convert Week 1 article into social posts, LinkedIn carousel, and email segment. Update existing top-10 articles.' },
                  { week: 'Week 3', focus: 'Bottom-of-Funnel Content', desc: 'Case study, comparison page, or ROI calculator. Direct sales support content for late-stage buyers.' },
                  { week: 'Week 4', focus: 'Performance Review + Plan', desc: 'Analyze GA4 + Search Console. Identify ranking gains, content to prune/merge, and next month\'s priorities.' },
                ].map(w => (
                  <div key={w.week} style={{ background: '#111', borderRadius: 14, padding: '18px 20px' }}>
                    <div style={{ fontSize: 13, color: green, fontWeight: 700, marginBottom: 6 }}>{w.week}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{w.focus}</div>
                    <p style={{ fontSize: 13, color: '#aaa', lineHeight: 1.6, margin: 0 }}>{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: `1px solid rgba(34,197,94,0.2)`, borderRadius: 20, padding: '24px 28px', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.2s' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: green, marginBottom: 14 }}>Content Calendar Must-Have Fields</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
                {[
                  'Target keyword + search volume', 'Content type (pillar/cluster/case study)', 'Funnel stage (TOFU/MOFU/BOFU)',
                  'Primary author + AI assist flag', 'Target publish date', 'Internal links planned',
                  'Distribution channels', 'CTA and conversion goal', 'Status (brief/draft/review/live)',
                ].map(field => (
                  <div key={field} style={{ background: '#111', borderRadius: 10, padding: '10px 14px', fontSize: 13, color: '#ccc', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: green }}>✓</span>{field}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Measuring ROI */}
          <section id="measuring-roi" style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              Measuring Content ROI: The Metrics That Matter
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.1s' }}>
              "We can't measure content ROI" is the most common excuse for underfunding content programs — and it's no longer true. With the right attribution setup, you can connect content touchpoints to revenue with confidence.
            </p>

            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 28, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.15s' }}>
              {[
                {
                  tier: 'Tier 1: Awareness Metrics',
                  color: '#60a5fa',
                  metrics: [
                    { name: 'Organic sessions', target: 'Track MoM growth; aim for 10–20% MoM early stage' },
                    { name: 'Keyword rankings', target: 'Track positions for all target keywords in Ahrefs/Semrush' },
                    { name: 'Impressions (Search Console)', target: 'Proxy for brand reach in Google search' },
                    { name: 'Branded vs non-branded traffic ratio', target: 'Healthy ratio: 60–70% non-branded' },
                  ],
                },
                {
                  tier: 'Tier 2: Engagement Metrics',
                  color: '#a78bfa',
                  metrics: [
                    { name: 'Average engagement time', target: 'Goal: 3+ min for long-form content' },
                    { name: 'Scroll depth', target: '60%+ scroll depth indicates genuine interest' },
                    { name: 'Email subscribers from content', target: 'Track via UTM-tagged lead magnets' },
                    { name: 'Return visitor rate', target: '15–25% return visitors signals loyal audience' },
                  ],
                },
                {
                  tier: 'Tier 3: Revenue Metrics',
                  color: green,
                  metrics: [
                    { name: 'Content-attributed leads (first-touch)', target: 'Leads whose first session came from organic blog' },
                    { name: 'Content-influenced pipeline', target: 'Deals where content was any touchpoint (multi-touch)' },
                    { name: 'Content-influenced revenue', target: 'Revenue from closed deals where content assisted' },
                    { name: 'Cost per organic lead', target: 'Total content spend ÷ leads from organic; benchmark < $150 for B2B' },
                  ],
                },
              ].map(tier => (
                <div key={tier.tier} style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 20, padding: '24px 28px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: tier.color, marginBottom: 16 }}>{tier.tier}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
                    {tier.metrics.map(m => (
                      <div key={m.name} style={{ background: '#111', borderRadius: 10, padding: '12px 16px' }}>
                        <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{m.name}</div>
                        <div style={{ fontSize: 12, color: '#888' }}>{m.target}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: `1px solid rgba(34,197,94,0.2)`, borderRadius: 20, padding: '24px 28px', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.2s' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: green, marginBottom: 14 }}>Recommended Tool Stack for Content Analytics</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                {[
                  { tool: 'Google Analytics 4', use: 'Traffic, engagement, conversions' },
                  { tool: 'Google Search Console', use: 'Rankings, impressions, CTR' },
                  { tool: 'Ahrefs / Semrush', use: 'Keyword tracking, backlink analysis' },
                  { tool: 'HubSpot / Salesforce', use: 'Lead attribution, revenue influence' },
                  { tool: 'Hotjar / Microsoft Clarity', use: 'Heatmaps, scroll depth' },
                  { tool: 'Databox', use: 'Unified content ROI dashboard' },
                ].map(t => (
                  <div key={t.tool} style={{ background: '#111', borderRadius: 10, padding: '12px 14px' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{t.tool}</div>
                    <div style={{ fontSize: 12, color: '#888' }}>{t.use}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Common Mistakes */}
          <section style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              10 Content Marketing Mistakes to Avoid in 2026
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 24, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.1s' }}>
              Even experienced marketers fall into predictable traps. Avoiding these 10 mistakes will save months of wasted effort and accelerate your path to results.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.15s' }}>
              {[
                { num: '01', title: 'Publishing without keyword research', desc: 'Writing content nobody searches for. Every piece must target a validated keyword with search demand.' },
                { num: '02', title: 'Ignoring search intent', desc: 'Matching format to intent (listicle vs guide vs comparison) is as important as the keyword itself.' },
                { num: '03', title: 'No internal linking strategy', desc: 'Orphaned pages lose PageRank. Every new article must link to and from 3–5 existing relevant pages.' },
                { num: '04', title: 'Publishing thin AI content', desc: "AI-generated fluff without original insights triggers Google's Helpful Content filters and tanks rankings." },
                { num: '05', title: 'Never updating old content', desc: 'Outdated articles lose rankings rapidly. Schedule quarterly reviews for your top-20 organic pages.' },
                { num: '06', title: 'Skipping distribution', desc: 'Writing is 50% of content marketing. Distribution — email, social, outreach — drives the initial traffic and links that enable SEO success.' },
                { num: '07', title: 'No conversion path on content pages', desc: 'Every article should have a relevant CTA. Readers who find value are primed to convert if you make it easy.' },
                { num: '08', title: 'Measuring only vanity metrics', desc: 'Pageviews and social shares feel good. Focus on leads attributed to content and pipeline influenced.' },
                { num: '09', title: 'Inconsistent publishing cadence', desc: 'Publishing 10 articles in January then nothing for 3 months destroys momentum. Consistency beats bursts.' },
                { num: '10', title: 'No differentiation from competitors', desc: 'If your content says the same thing as the #1 result, you will not outrank it. Add proprietary data, unique angles, or deeper expertise.' },
              ].map(m => (
                <div key={m.num} style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 16, padding: '18px 20px', display: 'flex', gap: 14 }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: 'rgba(34,197,94,0.3)', flexShrink: 0, minWidth: 28 }}>{m.num}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{m.title}</div>
                    <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 28, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {faqItems.map((item, i) => (
                <div key={i} className="reveal" style={{ background: cardBg, border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.4)' : borderCol}`, borderRadius: 20, overflow: 'hidden', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
                  >
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#fff', lineHeight: 1.5 }}>{item.q}</span>
                    <span style={{ fontSize: 20, color: green, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 24px 20px', fontSize: 15, color: '#bbb', lineHeight: 1.7 }}>{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Content Marketing Budget Guide */}
          <section style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
              Content Marketing Budget Benchmarks for 2026
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: '#ccc', lineHeight: 1.8, marginBottom: 24, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.1s' }}>
              Industry benchmarks suggest allocating 25–30% of total marketing budget to content. Here is how that breaks down by company stage and what to expect at each investment level.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 16, opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease 0.15s' }}>
              {[
                { tier: 'Starter', budget: '$2,000–$5,000/mo', what: '4–6 SEO articles/mo, basic keyword research, minimal distribution. Good for early-stage startups establishing an organic presence.', expect: '3–6 months to first ranking gains; 500–2,000 organic sessions/mo at 12 months.' },
                { tier: 'Growth', budget: '$5,000–$15,000/mo', what: '8–12 articles/mo, topic cluster builds, email newsletter, LinkedIn repurposing, link building outreach. Ideal for Series A startups and scaling SMBs.', expect: '6–12 months to meaningful pipeline influence; 5,000–20,000 organic sessions/mo at 18 months.' },
                { tier: 'Scale', budget: '$15,000–$40,000/mo', what: '15–25 pieces/mo across formats (articles, video scripts, case studies), full repurposing engine, dedicated SEO strategist, content ops tooling, analytics attribution.', expect: 'Compounding 30–50%+ organic traffic growth YoY; content as a primary demand generation channel.' },
              ].map(t => (
                <div key={t.tier} style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 20, padding: '22px 26px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: 0 }}>{t.tier} Tier</h3>
                    <span style={{ fontSize: 15, fontWeight: 700, color: green }}>{t.budget}</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#bbb', lineHeight: 1.7, marginBottom: 10 }}><strong style={{ color: '#fff' }}>What you get:</strong> {t.what}</p>
                  <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6, margin: 0 }}><strong style={{ color: '#aaa' }}>What to expect:</strong> {t.expect}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related posts */}
          <section style={{ marginBottom: 64 }}>
            <h2 className="reveal" style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: '#fff', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>Related Posts</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {relatedPosts.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="reveal" style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 20, padding: '22px 24px', opacity: 0, transform: 'translateY(20px)', transition: `all 0.5s ease ${i * 0.1}s`, cursor: 'pointer' }}>
                    <span style={{ fontSize: 12, color: green, fontWeight: 700, letterSpacing: '0.05em' }}>{post.category.toUpperCase()}</span>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff', margin: '8px 0 12px', lineHeight: 1.5 }}>{post.title}</h3>
                    <span style={{ fontSize: 13, color: '#666' }}>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(22,163,74,0.05) 100%)', border: `1px solid rgba(34,197,94,0.25)`, borderRadius: 28, padding: '48px 40px', textAlign: 'center', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 14 }}>Ready to Build a Content Engine That Compounds?</h2>
            <p style={{ fontSize: 16, color: '#aaa', marginBottom: 28, maxWidth: 520, margin: '0 auto 28px' }}>
              Codazz builds full-stack digital marketing systems — from content strategy and SEO to paid growth and analytics. Let&apos;s build yours.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-block', background: green, color: '#000', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 12, textDecoration: 'none' }}>
                Get a Content Strategy Session
              </Link>
              <Link href="/services/digital-marketing" style={{ display: 'inline-block', background: 'transparent', color: green, fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 12, textDecoration: 'none', border: `1px solid rgba(34,197,94,0.4)` }}>
                View Marketing Services
              </Link>
            </div>
          </section>
        </article>

        {/* TOC Sidebar */}
        <aside style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
          <div style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 20, padding: '24px 20px', marginBottom: 24 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Table of Contents</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {tocSections.map(sec => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 10, fontSize: 13, color: activeSection === sec.id ? green : '#888', background: activeSection === sec.id ? 'rgba(34,197,94,0.08)' : 'transparent', textDecoration: 'none', fontWeight: activeSection === sec.id ? 600 : 400, transition: 'all 0.2s' }}
                  onClick={e => { e.preventDefault(); document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  <span>{sec.emoji}</span>
                  <span>{sec.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Sidebar CTA */}
          <div style={{ background: 'rgba(34,197,94,0.08)', border: `1px solid rgba(34,197,94,0.2)`, borderRadius: 20, padding: '24px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: 24, marginBottom: 10 }}>🚀</div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Ready to scale with content?</h3>
            <p style={{ fontSize: 13, color: '#888', marginBottom: 16, lineHeight: 1.5 }}>Codazz builds content systems that drive compounding organic growth.</p>
            <Link href="/contact" style={{ display: 'block', background: green, color: '#000', fontWeight: 700, fontSize: 14, padding: '12px 20px', borderRadius: 10, textDecoration: 'none' }}>
              Book a Strategy Call
            </Link>
          </div>
        </aside>
      </div>

      <Footer />

      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); }
        .reveal.visible { opacity: 1 !important; transform: translateY(0) !important; }
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: '1fr 280px'"] {
            grid-template-columns: 1fr !important;
          }
          aside { display: none; }
        }
      `}</style>
    </main>
  );
}
