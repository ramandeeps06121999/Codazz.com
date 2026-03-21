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

const tocItems = [
  { id: 'saas-seo-different', label: 'Why SaaS SEO is Different', emoji: '🎯' },
  { id: 'product-led-seo', label: 'Product-Led SEO', emoji: '🚀' },
  { id: 'programmatic-seo', label: 'Programmatic SEO', emoji: '🤖' },
  { id: 'comparison-pages', label: 'Comparison Pages Strategy', emoji: '⚖️' },
  { id: 'integration-pages', label: 'Integration Pages', emoji: '🔗' },
  { id: 'free-tools', label: 'Free Tools as SEO Magnets', emoji: '🧲' },
  { id: 'g2-capterra', label: 'G2 & Capterra Optimization', emoji: '⭐' },
  { id: 'content-clusters', label: 'Content Cluster Strategy', emoji: '📚' },
  { id: 'technical-seo', label: 'Technical SEO for SaaS', emoji: '🔧' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🏆' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'startup-marketing-guide-2026', title: 'Startup Marketing Guide 2026', category: 'Marketing', readTime: '16 min' },
  { slug: 'ppc-vs-seo-2026', title: 'PPC vs SEO in 2026: Which Drives More ROI?', category: 'Marketing', readTime: '12 min' },
  { slug: 'nextjs-vs-react-2026', title: 'Next.js vs React in 2026', category: 'Tech', readTime: '11 min' },
];

export default function SeoForSaasClient() {
  const mainRef = useReveal();
  const [activeSection, setActiveSection] = useState('saas-seo-different');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(t => document.getElementById(t.id)).filter(Boolean);
      let current = tocItems[0].id;
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= 120) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: 'How is SaaS SEO different from regular SEO?',
      a: 'SaaS SEO targets a buyer journey that spans weeks or months across multiple decision-makers. You need content for every funnel stage: awareness (problem-aware content), consideration (comparison pages, use case pages), and decision (pricing, case studies, free trials). Unlike e-commerce or local SEO, SaaS also relies heavily on programmatic pages, integration directories, and review platforms like G2 and Capterra that traditional businesses do not deal with.',
    },
    {
      q: 'What is product-led SEO and how do I implement it for my SaaS?',
      a: 'Product-led SEO means creating pages that demonstrate your product\'s value directly in search results. Examples: Canva\'s free design templates that rank for "resume template" or "poster maker", Ahrefs\' free SEO tools that rank for "backlink checker", Notion\'s public template gallery. Implement it by identifying your product\'s most useful features, building public-facing pages around those outputs (reports, templates, results), and optimizing each for relevant keywords. The product itself becomes your best content asset.',
    },
    {
      q: 'How many comparison pages should a SaaS company have?',
      a: 'Prioritize your top 5–10 direct competitors and create a dedicated "[Your Product] vs [Competitor]" page for each. Then create "alternatives to [Competitor]" pages targeting users actively looking to switch. Beyond direct competitors, create "best [category] software" pages to capture category-level searches. A mature SaaS in a competitive market typically has 20–50 comparison and alternative pages. Start with your two or three most-searched competitors and expand from there.',
    },
    {
      q: 'How long does SaaS SEO take to show results?',
      a: 'Expect 6–12 months before significant organic traffic gains for a new or low-authority SaaS site. Technical SEO fixes show results fastest (1–3 months). Content clusters and comparison pages typically rank within 3–6 months with active link building. Programmatic SEO pages can show early signals in 2–4 months. Domains with existing authority (DA 40+) see faster results. Most SaaS companies see meaningful ROI from SEO at 12–18 months, after which the compounding effect accelerates.',
    },
    {
      q: 'Is G2 or Capterra worth investing in for SaaS SEO?',
      a: 'Yes — both platforms rank on the first page for nearly every "[software category] software" search. Getting listed and actively collecting reviews is essential. G2 is the higher-authority platform (preferred for B2B). Capterra has higher volume but lower quality traffic. Invest in getting to 25+ reviews on G2 to unlock badges and higher category visibility. These platforms also pass significant referral traffic independent of your organic rankings. A combined investment in G2 + Capterra profile optimization typically returns 3–8x in pipeline influence.',
    },
  ];

  return (
    <main ref={mainRef} style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', padding: '120px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>SaaS Growth</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#aaa', padding: '6px 16px', borderRadius: 100, fontSize: 13 }}>March 20, 2026</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#aaa', padding: '6px 16px', borderRadius: 100, fontSize: 13 }}>18 min read</span>
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
            SEO for SaaS Companies 2026:<br />
            <span style={{ color: '#22c55e' }}>Complete Growth Guide</span>
          </h1>
          <p className="reveal" style={{ fontSize: 18, color: '#bbb', lineHeight: 1.7, marginBottom: 32 }}>
            Product-led SEO, programmatic pages, comparison strategies, integration directories, free tools, G2 optimization, and technical SEO — everything SaaS founders and CMOs need to dominate organic search in 2026.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Grow My SaaS with SEO</Link>
            <a href="#saas-seo-different" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '14px 32px', borderRadius: 100, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>Read the Guide</a>
          </div>
        </div>
      </section>

      {/* Main content + TOC */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: '1fr 260px', gap: 48, alignItems: 'start' }}>

        {/* Article body */}
        <article>

          {/* Why SaaS SEO is Different */}
          <section id="saas-seo-different" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🎯 Why SaaS SEO is Fundamentally Different
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              SaaS companies cannot use the same SEO playbook as e-commerce or local businesses. Your buyer journey is longer (30–90+ days), involves multiple stakeholders, and crosses stages from problem awareness to product evaluation to purchase. Your SEO must match this complexity.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { stage: 'TOFU — Awareness', intent: 'Problem-aware, not solution-aware', content: 'Educational guides, trend reports, problem definition posts', example: '"how to manage remote teams"' },
                { stage: 'MOFU — Consideration', intent: 'Evaluating solutions and categories', content: 'Use case pages, comparison pages, feature deep-dives', example: '"best project management software"' },
                { stage: 'BOFU — Decision', intent: 'Comparing specific vendors', content: 'vs pages, pricing transparency, case studies, reviews', example: '"Asana vs Monday pricing"' },
                { stage: 'Retention', intent: 'Existing customers seeking help', content: 'Help docs (which rank!), tutorials, changelog posts', example: '"how to use [feature]"' },
              ].map((stage, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700, display: 'inline-block', marginBottom: 10 }}>{stage.stage}</div>
                  <div style={{ color: '#bbb', fontSize: 13, marginBottom: 8 }}>{stage.intent}</div>
                  <div style={{ color: '#fff', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{stage.content}</div>
                  <div style={{ color: '#888', fontSize: 12, fontStyle: 'italic' }}>e.g. {stage.example}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
              <p style={{ color: '#bbb', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#22c55e' }}>Key principle:</strong> SaaS SEO is not about one viral post. It is about building a content moat — hundreds of pages that capture intent at every stage, every use case, and every competitor comparison. The compounding effect kicks in at month 12–18.
              </p>
            </div>
          </section>

          {/* Product-Led SEO */}
          <section id="product-led-seo" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🚀 Product-Led SEO: Your Unfair Advantage
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Product-led SEO (coined by Eli Schwartz) means building SEO into your product itself. Instead of writing articles about what your product does, you create pages that let users experience the value — and those pages rank for high-intent keywords.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 28 }}>
              {[
                { company: 'Canva', tactic: 'Free template library — 10M+ pages', rank: '"resume template", "birthday card maker", "poster design"', lesson: 'Each template is a standalone SEO page targeting a specific use case keyword.' },
                { company: 'Ahrefs', tactic: 'Free SEO tools (backlink checker, keyword explorer lite)', rank: '"free backlink checker", "keyword research tool"', lesson: 'The free version is a lead magnet that ranks, captures intent, and demonstrates product value simultaneously.' },
                { company: 'Zapier', tactic: 'App integration directory — 50,000+ pages', rank: '"Slack Gmail integration", "HubSpot Zapier"', lesson: 'Every integration gets its own page. Users searching for specific integrations find Zapier at the exact moment of highest intent.' },
                { company: 'Notion', tactic: 'Public template gallery with user submissions', rank: '"project tracker template", "meeting notes template"', lesson: 'User-generated templates scale content production with zero editorial cost while ranking for long-tail keywords.' },
              ].map((ex, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 10, alignItems: 'center' }}>
                    <span style={{ fontWeight: 800, color: '#22c55e', fontSize: 16 }}>{ex.company}</span>
                    <span style={{ color: '#aaa', fontSize: 13 }}>{ex.tactic}</span>
                  </div>
                  <div style={{ color: '#bbb', fontSize: 13, marginBottom: 8 }}>Ranking for: <span style={{ color: '#fff', fontStyle: 'italic' }}>{ex.rank}</span></div>
                  <div style={{ color: '#888', fontSize: 13, lineHeight: 1.6 }}>Lesson: {ex.lesson}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 28 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 17, marginBottom: 14 }}>How to Implement Product-Led SEO</h3>
              {['Identify your product\'s most shareable outputs (reports, templates, calculations, summaries)', 'Build public-facing pages for each output type with proper URL structure (/templates/[category])', 'Allow user-generated content where quality can be moderated (community, marketplace)', 'Create "free tools" that demonstrate core product value (ROI calculator, free tier, trial mode)', 'Optimize each page for the specific keyword its output targets, not just generic product keywords'].map((item, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 14, marginBottom: 8, display: 'flex', gap: 10 }}>
                  <span style={{ color: '#22c55e', flexShrink: 0 }}>→</span> {item}
                </div>
              ))}
            </div>
          </section>

          {/* Programmatic SEO */}
          <section id="programmatic-seo" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🤖 Programmatic SEO: Scale to Thousands of Pages
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Programmatic SEO uses templates and structured data to generate hundreds or thousands of unique, rankable pages automatically. Done right, it is one of the highest-leverage SEO strategies for SaaS companies.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { pageType: 'Use Case Pages', template: '[Product] for [Industry/Role]', example: '"CRM for real estate agents"', volume: '50–500 pages' },
                { pageType: 'Location Pages', template: '[Service] in [City]', example: '"accounting software for UK businesses"', volume: '20–200 pages' },
                { pageType: 'Integration Pages', template: '[Product] + [App] Integration', example: '"Slack HubSpot integration"', volume: '100–5,000 pages' },
                { pageType: 'Comparison Pages', template: '[Product] vs [Competitor]', example: '"Monday vs Asana"', volume: '10–100 pages' },
                { pageType: 'Feature Deep Dives', template: '[Feature] Software / Tools', example: '"time tracking software"', volume: '20–100 pages' },
                { pageType: 'Job Role Pages', template: '[Product] for [Job Title]', example: '"project management for freelancers"', volume: '20–200 pages' },
              ].map((pt, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 14, marginBottom: 8 }}>{pt.pageType}</div>
                  <div style={{ color: '#888', fontSize: 12, marginBottom: 6 }}>Template: {pt.template}</div>
                  <div style={{ color: '#bbb', fontSize: 13, fontStyle: 'italic', marginBottom: 8 }}>"{pt.example}"</div>
                  <div style={{ color: '#22c55e', fontSize: 12, fontWeight: 600 }}>{pt.volume}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Programmatic SEO Quality Rules</h3>
              <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>Google has become aggressive about thin programmatic content. Every programmatic page must pass these tests:</p>
              {['Unique, substantial content beyond just changing the [variable] in the template', 'Real utility to the user — not just keyword stuffing with variable substitution', 'Internal links connecting related programmatic pages into topic clusters', 'Canonical tags where near-duplicate pages exist', 'Structured data (FAQ, HowTo, SoftwareApplication schema) for rich results', 'Regular quality audits — remove or consolidate underperforming pages'].map((rule, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 13, marginBottom: 6, display: 'flex', gap: 8 }}>
                  <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span> {rule}
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Pages */}
          <section id="comparison-pages" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              ⚖️ Comparison Pages: Capturing High-Intent Buyers
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              "[Product A] vs [Product B]" searches have some of the highest buyer intent in all of SaaS. Users searching these queries are ready to buy — they just need to decide between options. Owning these pages is critical.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 28 }}>
              {[
                { type: '[Your Product] vs [Competitor]', strategy: 'You control the narrative. Be honest about where competitors are stronger — credibility wins. Lead with your strengths but acknowledge trade-offs. Include a comparison table, pricing comparison, and migration resources.', priority: 'Highest' },
                { type: 'Alternatives to [Competitor]', strategy: 'Capture users already dissatisfied with a competitor. Rank for "[Competitor] alternatives" and "[Competitor] pricing too high". These users are actively churning from a competitor and are your hottest leads.', priority: 'High' },
                { type: 'Best [Category] Software', strategy: 'Category-level searches have massive volume. Create a "Best [category] tools in 2026" page where your product is prominently featured. Include multiple legitimate options — Google trusts balanced reviews.', priority: 'High' },
                { type: '[Competitor] Pricing / [Competitor] Reviews', strategy: 'Capture research intent around competitors. "HubSpot pricing" is searched 50K+ times/month. Create content addressing competitor pricing concerns, then position your product as the value alternative.', priority: 'Medium' },
              ].map((comp, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 16 }}>{comp.type}</div>
                    <span style={{ background: comp.priority === 'Highest' ? 'rgba(34,197,94,0.15)' : comp.priority === 'High' ? 'rgba(59,130,246,0.15)' : 'rgba(251,191,36,0.15)', color: comp.priority === 'Highest' ? '#22c55e' : comp.priority === 'High' ? '#60a5fa' : '#fbbf24', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>{comp.priority} Priority</span>
                  </div>
                  <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{comp.strategy}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Integration Pages */}
          <section id="integration-pages" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🔗 Integration Pages: The Most Underrated SaaS SEO Strategy
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Users searching "[Your Product] + [Popular App]" integration are almost always existing users or high-intent prospects who already use both tools. These are your highest-converting pages — often with 5–10x better conversion than top-of-funnel content.
            </p>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 32, marginBottom: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>Integration Page Template</h3>
              {[
                { section: 'Hero', content: '[Product] + [App] Integration — clear, bold heading with both logos' },
                { section: 'What it does', content: '2–3 sentences explaining what the integration enables (not how it works technically)' },
                { section: 'Use cases', content: '3–5 specific workflows users can automate or improve' },
                { section: 'Setup guide', content: 'Step-by-step instructions with screenshots — this earns backlinks and reduces support load' },
                { section: 'Video demo', content: '2–3 minute Loom or custom video of the integration in action' },
                { section: 'CTA', content: 'Start free trial / Connect your [App] now — conversion-optimized with low friction' },
              ].map((sec, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: 12, marginBottom: 12, borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div style={{ minWidth: 100, color: '#22c55e', fontWeight: 700, fontSize: 13 }}>{sec.section}</div>
                  <div style={{ color: '#bbb', fontSize: 14, lineHeight: 1.6 }}>{sec.content}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
              <p style={{ color: '#bbb', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#22c55e' }}>Prioritize integrations by search volume:</strong> Use Ahrefs or SEMrush to find which integrations have existing search volume. Start with your highest-traffic app integrations (Salesforce, HubSpot, Slack, Google Workspace, Zapier) before building pages for low-volume integrations.
              </p>
            </div>
          </section>

          {/* Free Tools */}
          <section id="free-tools" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🧲 Free Tools as SEO Magnets
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Free tools are the highest-ROI content investment for SaaS companies. A useful free tool ranks for high-volume transactional keywords, earns natural backlinks (often from competitors and media), demonstrates product capability, and captures lead emails — all simultaneously.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { tool: 'ROI Calculator', keywords: '"[category] ROI calculator"', effort: 'Low (2–4 weeks)', impact: 'Captures BOFU intent from buyers justifying purchase' },
                { tool: 'Free Audit / Analysis', keywords: '"free [category] audit"', effort: 'Medium (4–8 weeks)', impact: 'Demonstrates product depth, high email capture rate' },
                { tool: 'Generator / Maker', keywords: '"[content type] generator"', effort: 'Medium (4–8 weeks)', impact: 'Massive volume potential (Canva, Copy.ai proven this)' },
                { tool: 'Grader / Checker', keywords: '"[metric] checker"', effort: 'Medium (4–8 weeks)', impact: 'HubSpot Marketing Grader has earned 1,000s of links' },
                { tool: 'Template Library', keywords: '"[use case] template"', effort: 'Low (ongoing)', impact: 'Scales via community; each template = a ranking page' },
                { tool: 'API / Embeddable Widget', keywords: '[brand] + [function] queries', effort: 'High', impact: 'Embeds create backlinks; API drives developer signups' },
              ].map((tool, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 15, marginBottom: 8 }}>{tool.tool}</div>
                  <div style={{ color: '#888', fontSize: 12, marginBottom: 6 }}>Target: {tool.keywords}</div>
                  <div style={{ color: '#bbb', fontSize: 12, marginBottom: 8 }}>Effort: {tool.effort}</div>
                  <p style={{ color: '#aaa', fontSize: 12, lineHeight: 1.5, margin: 0 }}>{tool.impact}</p>
                </div>
              ))}
            </div>
          </section>

          {/* G2 & Capterra */}
          <section id="g2-capterra" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              ⭐ G2 & Capterra: Optimize Your Review Presence
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Review platforms are a parallel search engine for B2B SaaS buyers. G2, Capterra, and Trustpilot rank on the first page for virtually every "[software] software" or "[software] reviews" query. Ignoring them means handing first-page real estate to competitors.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28 }}>
              {[
                {
                  platform: 'G2',
                  authority: 'DA 91 — highest authority review platform',
                  bestFor: 'B2B SaaS, enterprise software',
                  keyActions: ['Complete 100% of profile fields', 'Get to 25+ reviews to unlock G2 badges', 'Use G2 badges on your pricing page (+20% conversion)', 'Respond to every review (positive and negative)', 'Apply for G2 Leader categories quarterly'],
                  color: '#ef4444',
                },
                {
                  platform: 'Capterra',
                  authority: 'DA 88 — largest review directory by listing count',
                  bestFor: 'SMB, mid-market, all categories',
                  keyActions: ['Claim and complete your listing profile', 'Request reviews via email after user milestones', 'Use Capterra\'s "Best Value" badge in paid ads', 'Update product screenshots quarterly', 'Run Capterra PPC ads for high-intent category traffic'],
                  color: '#3b82f6',
                },
              ].map((plat, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${plat.color}33`, borderRadius: 28, padding: 28 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: plat.color, marginBottom: 6 }}>{plat.platform}</h3>
                  <div style={{ color: '#888', fontSize: 13, marginBottom: 4 }}>{plat.authority}</div>
                  <div style={{ color: '#aaa', fontSize: 13, marginBottom: 16 }}>Best for: {plat.bestFor}</div>
                  {plat.keyActions.map((action, j) => (
                    <div key={j} style={{ color: '#bbb', fontSize: 13, marginBottom: 7, display: 'flex', gap: 8 }}>
                      <span style={{ color: plat.color, flexShrink: 0 }}>✓</span> {action}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Review Generation Strategy</h3>
              <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>Getting reviews is a systematic process, not a one-time ask. Build it into your customer journey:</p>
              {['Trigger review request email at 30 days after first meaningful product usage (not at sign-up)', 'Personalize: "You\'ve [specific action] 47 times this month — would you share your experience?"', 'Make it frictionless: direct link to G2/Capterra review form, pre-filled where allowed', 'Offer value exchange: early access to new features, swag, or charitable donation in their name', 'Follow up once at day 45 for non-responders — then stop', 'Train customer success to verbally ask for reviews during quarterly business reviews'].map((tip, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 13, marginBottom: 7, display: 'flex', gap: 8 }}>
                  <span style={{ color: '#22c55e', flexShrink: 0 }}>→</span> {tip}
                </div>
              ))}
            </div>
          </section>

          {/* Content Clusters */}
          <section id="content-clusters" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              📚 Content Cluster Strategy for SaaS
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Content clusters (pillar pages + supporting cluster content) are how SaaS companies build topical authority that Google rewards with consistent rankings. A well-built cluster dominates an entire topic area, not just individual keywords.
            </p>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 32, marginBottom: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 17, marginBottom: 20 }}>Example Cluster: "Project Management Software"</h3>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 10 }}>Pillar Page (Target: "project management software" — 50K/mo searches)</div>
                <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7 }}>A comprehensive 5,000+ word guide covering what project management software is, key features, how to choose, and pricing. This page links out to all cluster content and receives links back from cluster articles.</p>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 10 }}>Cluster Content (15–30 supporting articles)</div>
                {[
                  '"project management software for small business" — 8K/mo',
                  '"agile project management software" — 12K/mo',
                  '"project management software with time tracking" — 5K/mo',
                  '"how to manage remote teams effectively" — 18K/mo (TOFU)',
                  '"Monday vs Asana" — 22K/mo (BOFU)',
                  '"project management templates" — 40K/mo (product-led)',
                ].map((item, i) => (
                  <div key={i} style={{ color: '#bbb', fontSize: 13, marginBottom: 7, display: 'flex', gap: 8 }}>
                    <span style={{ color: '#22c55e', flexShrink: 0 }}>→</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              {[
                { stat: '3–5x', label: 'more organic traffic from cluster vs standalone articles' },
                { stat: '6–12', label: 'months to see full cluster ranking potential' },
                { stat: '2,000+', label: 'words minimum for a competitive pillar page' },
                { stat: '15–30', label: 'supporting cluster articles per pillar topic' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24, textAlign: 'center' }}>
                  <div style={{ color: '#22c55e', fontSize: 28, fontWeight: 800, marginBottom: 8 }}>{s.stat}</div>
                  <div style={{ color: '#aaa', fontSize: 13, lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical SEO */}
          <section id="technical-seo" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🔧 Technical SEO for SaaS: The Foundation
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              SaaS products introduce unique technical SEO challenges: app subdomain vs subdirectory, authenticated content, dynamic pages, and JavaScript-heavy interfaces. Fix these foundations before scaling content.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 16 }}>
              {[
                { issue: 'Subdomain vs Subdirectory', fix: 'Use /blog/, /help/, /integrations/ on your root domain instead of blog.yoursaas.com. Subdirectories share root domain authority. Moving a blog from subdomain to subdirectory typically increases organic traffic 20–60%.', priority: 'Critical' },
                { issue: 'App Content Behind Login', fix: 'Ensure your marketing site (public pages) is fully crawlable. Your app.yoursaas.com can be behind auth — but your website, blog, and feature pages must be indexable. Use hreflang for multi-language versions.', priority: 'Critical' },
                { issue: 'Core Web Vitals', fix: 'SaaS marketing sites often fail LCP (large hero images, video backgrounds) and CLS (dynamic elements). Use Next.js Image optimization, lazy load non-critical resources, and defer third-party scripts (Intercom, HubSpot, analytics).', priority: 'High' },
                { issue: 'JavaScript Rendering', fix: 'If your marketing site uses heavy client-side rendering, Google may not index content correctly. Use SSR or SSG (Next.js recommended). Test with Google Search Console\'s URL Inspection tool — check rendered HTML vs source HTML.', priority: 'High' },
                { issue: 'Internal Link Architecture', fix: 'Map your pillar pages and ensure every cluster article links back to its pillar. Add contextual internal links between related articles. Every new page should be reachable within 3 clicks from your homepage.', priority: 'Medium' },
                { issue: 'Schema Markup', fix: 'Implement SoftwareApplication schema on product pages, FAQPage schema on FAQ sections, Article schema on blog posts, and BreadcrumbList on all pages. Rich results increase CTR by 15–30%.', priority: 'Medium' },
                { issue: 'Canonical Tags', fix: 'Critical for programmatic SEO pages, pagination, and filtered views. Ensure every page has a self-referencing canonical. Paginated series should use rel="next" / rel="prev" or canonicalize to the first page.', priority: 'High' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, display: 'flex', gap: 20 }}>
                  <div style={{ flexShrink: 0, marginTop: 2 }}>
                    <span style={{ background: item.priority === 'Critical' ? 'rgba(239,68,68,0.15)' : item.priority === 'High' ? 'rgba(34,197,94,0.12)' : 'rgba(251,191,36,0.12)', color: item.priority === 'Critical' ? '#ef4444' : item.priority === 'High' ? '#22c55e' : '#fbbf24', padding: '2px 8px', borderRadius: 100, fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap' }}>{item.priority}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 6 }}>{item.issue}</div>
                    <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Link Building */}
          <section style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🔗 Link Building for SaaS: Strategies That Actually Work
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Backlinks remain a core ranking signal in 2026. But generic link building (guest posts on random sites, directory submissions) delivers diminishing returns. SaaS-specific link building strategies earn higher-quality links that compound in value.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 28 }}>
              {[
                {
                  strategy: 'Digital PR & Data Studies',
                  difficulty: 'High',
                  payoff: 'Very High',
                  desc: 'Publish original research using data you already have (product usage trends, anonymized benchmarks, industry surveys). Journalists cite original data — earning links from TechCrunch, Forbes, and industry publications. Even a modest study can earn 50–200+ high-DA links.',
                  examples: 'Intercom\'s Customer Support Benchmark Report, HubSpot\'s State of Marketing annual study',
                },
                {
                  strategy: 'Integration Partner Link Exchange',
                  difficulty: 'Low–Medium',
                  payoff: 'High',
                  desc: 'Every app you integrate with is a potential link partner. Request a listing in their integration directory or co-marketing page. These links are topically relevant and come from DA 40–90+ SaaS domains. Create a dedicated /integrations/ page with rich content about each integration.',
                  examples: 'Zapier app directory, HubSpot App Marketplace, Shopify App Store partner pages',
                },
                {
                  strategy: 'Free Tool Link Magnets',
                  difficulty: 'Medium',
                  payoff: 'Very High',
                  desc: 'Useful free tools earn links naturally as bloggers and journalists reference them in articles. Ahrefs\' free backlink checker has earned 100,000+ links. Build tools your target audience needs even if they are not direct product users — they become your top-of-funnel link magnets.',
                  examples: 'HubSpot\'s Website Grader, CoSchedule\'s Headline Analyzer, Shopify\'s business name generator',
                },
                {
                  strategy: 'HARO / Journalist Outreach',
                  difficulty: 'Low',
                  payoff: 'Medium–High',
                  desc: 'Help a Reporter Out (HARO) and similar platforms (Qwoted, SourceBottle) connect you with journalists seeking expert quotes. Respond to relevant queries with data-backed insights. 5–10 quality responses per week can earn 2–4 links monthly from high-DA publications.',
                  examples: 'Business Insider, Forbes, Inc, Entrepreneur, industry trade publications',
                },
                {
                  strategy: 'Content-Led Link Building',
                  difficulty: 'Medium',
                  payoff: 'Medium',
                  desc: 'Create comprehensive guides or tools that naturally get linked to as resources. "Best practices" guides, industry glossaries, and certification programs all earn passive links over time as others reference them. Target keywords where existing content is weak or outdated.',
                  examples: 'Comprehensive glossary pages, "ultimate guide" posts, industry certification programs',
                },
                {
                  strategy: 'Podcast & Speaking Links',
                  difficulty: 'Medium',
                  payoff: 'Medium',
                  desc: 'Podcast episode pages almost always link to guests\' companies. Guest on 2–4 relevant podcasts per month and you earn consistent high-quality, topically relevant links. Conference speaking also generates event page links — often from .edu or established industry sites.',
                  examples: 'SaaStr, Lenny\'s Podcast, How I Built This, industry-specific shows',
                },
              ].map((strat, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                    <h3 style={{ fontWeight: 700, color: '#fff', fontSize: 17, margin: 0 }}>{strat.strategy}</h3>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span style={{ background: 'rgba(255,255,255,0.08)', color: '#aaa', padding: '2px 10px', borderRadius: 100, fontSize: 11 }}>Difficulty: {strat.difficulty}</span>
                      <span style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600 }}>Payoff: {strat.payoff}</span>
                    </div>
                  </div>
                  <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{strat.desc}</p>
                  <div style={{ color: '#888', fontSize: 12 }}>Examples: {strat.examples}</div>
                </div>
              ))}
            </div>
          </section>

          {/* SaaS SEO Roadmap */}
          <section style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🗓️ SaaS SEO Roadmap: 12-Month Execution Plan
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              SEO without a structured roadmap leads to scattered effort and slow results. Here is a proven 12-month execution plan for SaaS companies starting from a low or moderate organic baseline.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 20 }}>
              {[
                {
                  period: 'Month 1–2: Foundation',
                  color: '#f97316',
                  tasks: [
                    'Full technical SEO audit — fix critical crawl errors, Core Web Vitals, and indexation issues',
                    'Keyword research — build a master list of 500–2,000 target keywords organized by funnel stage',
                    'Competitor gap analysis — identify content and link gaps vs top 3 competitors',
                    'Set up GA4, Search Console, and rank tracking for baseline measurement',
                    'Publish 2 foundational pillar pages on your most important topics',
                  ],
                },
                {
                  period: 'Month 3–4: Content Engine',
                  color: '#fbbf24',
                  tasks: [
                    'Launch first content cluster (pillar + 8–10 supporting articles)',
                    'Build out first 10 comparison/vs pages targeting direct competitors',
                    'Create 5 integration pages for highest-traffic integrations',
                    'Start G2 and Capterra review generation campaign (target: 25 reviews by month 6)',
                    'Begin HARO outreach for link building — aim for 2 responses/day',
                  ],
                },
                {
                  period: 'Month 5–6: Scale',
                  color: '#22c55e',
                  tasks: [
                    'Launch programmatic SEO system (use case pages, location pages) — 50–200 pages',
                    'Build second content cluster on adjacent topic',
                    'Publish first original research or data study for digital PR',
                    'Launch free tool or ROI calculator',
                    'Integration partner link exchange outreach to top 20 integration partners',
                  ],
                },
                {
                  period: 'Month 7–9: Amplify',
                  color: '#60a5fa',
                  tasks: [
                    'Scale content production to 12–20 articles/month via editorial team or content agency',
                    'Expand comparison pages to cover 20+ competitors and "alternatives" keywords',
                    'Second programmatic SEO batch (new template type)',
                    'Podcast guest campaign — 4–6 appearances/month',
                    'Audit and refresh top 20 existing pages — update statistics, add new sections, improve internal links',
                  ],
                },
                {
                  period: 'Month 10–12: Compound & Optimize',
                  color: '#a78bfa',
                  tasks: [
                    'Attribution analysis — which content pieces are driving pipeline? Double down on those topics',
                    'Full technical SEO re-audit — address any new issues from site expansion',
                    'Build out product-led SEO pages (templates, generators, calculators)',
                    'G2 Leader badge campaign — get category placement for Q1 next year',
                    'Plan year 2 roadmap based on what is working — expect 3–8x organic traffic growth vs start',
                  ],
                },
              ].map((phase, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${phase.color}33`, borderRadius: 20, padding: 28 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: phase.color, marginBottom: 14 }}>{phase.period}</h3>
                  {phase.tasks.map((task, j) => (
                    <div key={j} style={{ color: '#bbb', fontSize: 13, marginBottom: 8, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: phase.color, flexShrink: 0, marginTop: 1 }}>→</span> {task}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { month: 'Month 1–3', result: 'Technical fixes indexed, first content live, baseline established' },
                { month: 'Month 4–6', result: 'First keyword movements, G2 profile active, early link gains' },
                { month: 'Month 7–9', result: 'Noticeable traffic growth, comparison pages ranking, programmatic pages indexed' },
                { month: 'Month 10–12', result: '3–8x organic traffic vs baseline, meaningful organic pipeline contribution' },
              ].map((milestone, i) => (
                <div key={i} style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 16, padding: 20 }}>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{milestone.month}</div>
                  <div style={{ color: '#bbb', fontSize: 12, lineHeight: 1.5 }}>{milestone.result}</div>
                </div>
              ))}
            </div>
          </section>

          {/* SaaS SEO Metrics */}
          <section style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              📊 SaaS SEO Metrics & KPIs to Track
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Vanity metrics (page views, social shares) do not predict revenue. Track these SaaS-specific SEO KPIs that connect directly to pipeline and ARR.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { metric: 'Organic MQL Rate', desc: 'What % of organic visitors become Marketing Qualified Leads? Target 0.5–2% for informational content, 5–15% for BOFU content. This tells you if your content is attracting the right audience.' },
                { metric: 'Organic Pipeline Attribution', desc: 'Track how many opportunities in your CRM have organic touchpoints. Most SaaS companies find organic contributes 20–40% of total pipeline — often underreported due to attribution gaps.' },
                { metric: 'Keyword Visibility Score', desc: 'Track rankings across your full target keyword set, not just top 10 keywords. Tools like Ahrefs, SEMrush, or SERPwoo provide visibility scores that capture the complete picture.' },
                { metric: 'Content ROI by Page', desc: 'Monthly organic traffic × conversion rate × ACV = organic revenue by page. Identify your 20% of pages driving 80% of organic revenue and prioritize their optimization.' },
                { metric: 'Backlink Velocity', desc: 'New referring domains per month. Consistent growth (even 5–10/month) compounds over time. A sudden drop signals potential link issues. Target quality over quantity (DA 40+ domains).' },
                { metric: 'Organic CAC vs Paid CAC', desc: 'Compare Customer Acquisition Cost from organic vs paid channels. Mature SaaS organic CAC is typically 60–80% lower than paid. Track quarterly — the gap widens as content compounds.' },
              ].map((kpi, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 15, marginBottom: 10 }}>{kpi.metric}</div>
                  <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{kpi.desc}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Recommended SEO Tool Stack for SaaS</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
                {[
                  { category: 'Keyword Research', tools: 'Ahrefs, SEMrush, Google Search Console' },
                  { category: 'Technical SEO', tools: 'Screaming Frog, Sitebulb, PageSpeed Insights' },
                  { category: 'Content Optimization', tools: 'Clearscope, Surfer SEO, MarketMuse' },
                  { category: 'Link Building', tools: 'Ahrefs, BuzzStream, Hunter.io, HARO' },
                  { category: 'Rank Tracking', tools: 'Ahrefs, SEMrush, SERPwoo' },
                  { category: 'Analytics', tools: 'GA4, Plausible, Segment (for pipeline attribution)' },
                ].map((tool, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 16 }}>
                    <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 12, marginBottom: 6 }}>{tool.category}</div>
                    <div style={{ color: '#bbb', fontSize: 12 }}>{tool.tools}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Codazz */}
          <section id="why-codazz" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🏆 Grow Your SaaS with Codazz
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              Codazz combines deep SaaS product expertise with advanced SEO strategy. We build the technical foundations (Next.js SSR, schema markup, Core Web Vitals) and execute the content strategy (programmatic pages, comparison content, integration directories) that drives compound organic growth.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
              {[
                { icon: '🔧', title: 'Technical SEO Foundation', desc: 'Next.js SSR migration, Core Web Vitals optimization, schema implementation, and crawl budget management.' },
                { icon: '🤖', title: 'Programmatic SEO Build', desc: 'Engineering-led programmatic page systems for integration pages, location pages, and use case pages at scale.' },
                { icon: '📝', title: 'Content Strategy & Production', desc: 'Pillar + cluster content, comparison pages, and product-led SEO content — written by SaaS domain experts.' },
                { icon: '⭐', title: 'Review Platform Optimization', desc: 'G2 and Capterra profile optimization, review generation campaigns, and badge integration.' },
                { icon: '🔗', title: 'Link Building for SaaS', desc: 'Digital PR, integration partner link exchanges, HARO, and resource page outreach tailored for SaaS.' },
                { icon: '📊', title: 'Monthly SEO Reporting', desc: 'Transparent dashboards tracking rankings, traffic, conversions, and CAC from organic — not just vanity metrics.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 8 }}>{item.title}</div>
                  <p style={{ color: '#aaa', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 28, padding: 36, textAlign: 'center' }}>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Ready to Build Your SaaS SEO Moat?</h3>
              <p style={{ color: '#bbb', marginBottom: 24, lineHeight: 1.7 }}>Book a free SEO audit. We will analyze your current organic presence, identify your biggest growth opportunities, and give you a prioritized 90-day action plan.</p>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 36px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 16, display: 'inline-block' }}>
                Get Free SEO Audit
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 28 }}>
              ❓ Frequently Asked Questions
            </h2>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, marginBottom: 12, overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', background: openFaq === i ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)', border: 'none', padding: '20px 24px', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
                  >
                    <span style={{ color: '#fff', fontWeight: 600, fontSize: 15, lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ color: '#22c55e', fontSize: 22, fontWeight: 300, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 24px 20px', background: 'rgba(34,197,94,0.05)' }}>
                      <p style={{ color: '#bbb', lineHeight: 1.7, margin: 0, fontSize: 14 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Related Posts */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="reveal" style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {relatedPosts.map((post, i) => (
                <Link key={i} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
                    <span style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600 }}>{post.category}</span>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 15, marginTop: 12, marginBottom: 8, lineHeight: 1.4 }}>{post.title}</div>
                    <div style={{ color: '#666', fontSize: 12 }}>{post.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* TOC Sidebar */}
        <aside style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
            <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Table of Contents</div>
            {tocItems.map(item => (
              <a key={item.id} href={`#${item.id}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 10, textDecoration: 'none', marginBottom: 2, background: activeSection === item.id ? 'rgba(34,197,94,0.12)' : 'transparent', transition: 'background 0.2s' }}>
                <span style={{ fontSize: 14 }}>{item.emoji}</span>
                <span style={{ color: activeSection === item.id ? '#22c55e' : '#aaa', fontSize: 13, fontWeight: activeSection === item.id ? 600 : 400, lineHeight: 1.3 }}>{item.label}</span>
              </a>
            ))}
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
