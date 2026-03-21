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
  { id: 'ecommerce-ai-landscape', label: 'E-Commerce AI Landscape', emoji: '🛒' },
  { id: 'recommendation-engines', label: 'Recommendation Engines', emoji: '🎯' },
  { id: 'dynamic-pricing', label: 'Dynamic Pricing', emoji: '💰' },
  { id: 'visual-search', label: 'Visual Search', emoji: '👁️' },
  { id: 'chatbot-commerce', label: 'Chatbot Commerce', emoji: '💬' },
  { id: 'inventory-prediction', label: 'Inventory Prediction', emoji: '📦' },
  { id: 'customer-segmentation', label: 'Customer Segmentation', emoji: '👥' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'ai-trends-2026', title: 'Top AI Development Trends 2026: What Every Business Needs to Know', category: 'AI & Technology', readTime: '21 min' },
  { slug: 'ecommerce-trends-2026', title: 'E-Commerce Trends 2026: What Online Retailers Need to Know', category: 'E-Commerce', readTime: '18 min' },
  { slug: 'ai-in-fintech-2026', title: 'AI in FinTech 2026: From Fraud Detection to Robo-Advisors', category: 'FinTech AI', readTime: '23 min' },
];

export default function AiInEcommerce2026Client() {
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
              src="/blog_images/ai-in-ecommerce-2026.jpg"
              alt="AI in e-commerce personalization and dynamic pricing"
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
              }}>E-Commerce AI</span>
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
                20 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              AI in E-Commerce 2026: Personalization, Pricing &amp; Beyond
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              From recommendation engines that drive 35% of Amazon&apos;s revenue to dynamic pricing algorithms that optimize margins in real-time, AI is the engine powering every successful e-commerce company in 2026.
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
                    E-commerce is the industry where AI&apos;s ROI is most immediately visible. Every recommendation clicked, every dynamic price accepted, every chatbot-resolved query translates directly to revenue. The companies that master AI ecommerce solutions in 2026 will dominate their categories.
                  </p>
                  <p>
                    The numbers are compelling: AI-powered personalization increases revenue by 15-25%. Dynamic pricing improves margins by 5-10%. AI chatbots handle 70% of customer inquiries. And predictive inventory management reduces stockouts by 30% while cutting excess inventory by 20%.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    This guide explores six AI capabilities that every e-commerce business needs in 2026, with implementation strategies and real-world performance benchmarks.
                  </p>
                </div>

                {/* E-Commerce AI Landscape */}
                <h2 id="ecommerce-ai-landscape" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The E-Commerce AI Landscape in 2026</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>35%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Revenue from AI Recommendations</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>$14.5B</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>AI in Retail Market (2026)</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>71%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Consumers Expect Personalization</p>
                  </div>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p><strong style={{ color: '#ffffff' }}>Key AI shifts in e-commerce for 2026:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Hyper-Personalization:</strong> Beyond product recommendations. AI personalizes pricing, promotions, page layouts, email timing, and even product descriptions for each individual shopper.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Conversational Commerce:</strong> LLM-powered shopping assistants that understand natural language queries, maintain conversation context, and complete purchases within the chat interface.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Visual AI:</strong> Shoppers photograph products they like and find exact or similar items instantly. AR try-on reduces returns by 40% for fashion and cosmetics.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Predictive Operations:</strong> AI forecasts demand, optimizes inventory across warehouses, predicts supply chain disruptions, and automates procurement.</li>
                    <li><strong style={{ color: '#ffffff' }}>AI-Generated Content:</strong> Product descriptions, marketing copy, social media posts, and even product photography generated by AI at scale.</li>
                  </ul>
                </div>

                {/* Recommendation Engines */}
                <h2 id="recommendation-engines" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>AI Recommendation Engines</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Recommendation engines drive 35% of Amazon&apos;s revenue and 75% of Netflix viewing. In 2026, recommendations go far beyond &quot;customers who bought X also bought Y&quot; &mdash; they leverage deep learning to understand nuanced user preferences and context.
                  </p>

                  <div style={{
                    background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(180,253,131,0.2)',
                  }}>
                    <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                      &quot;The best recommendation engines don&apos;t just show products you might like. They anticipate what you need before you know you need it. That&apos;s the difference between a 2% click-through rate and a 15% conversion rate.&quot;
                    </p>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>Recommendation Algorithm Comparison</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Approach</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Best For</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Limitation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Collaborative Filtering</strong></td>
                          <td style={{ padding: '12px 8px' }}>Users with rich interaction history</td>
                          <td style={{ padding: '12px 8px' }}>Cold start problem for new users/products</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Content-Based</strong></td>
                          <td style={{ padding: '12px 8px' }}>New products with rich metadata</td>
                          <td style={{ padding: '12px 8px' }}>Limited serendipity, filter bubble</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Deep Learning (Two-Tower)</strong></td>
                          <td style={{ padding: '12px 8px' }}>Large catalogs, complex features</td>
                          <td style={{ padding: '12px 8px' }}>Requires significant training data</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Transformer-Based (BERT4Rec)</strong></td>
                          <td style={{ padding: '12px 8px' }}>Sequential, session-aware recommendations</td>
                          <td style={{ padding: '12px 8px' }}>Computationally expensive</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>LLM-Powered</strong></td>
                          <td style={{ padding: '12px 8px' }}>Natural language queries, reasoning</td>
                          <td style={{ padding: '12px 8px' }}>Latency, cost at scale</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Modern recommendation best practices:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Real-Time Personalization:</strong> Update recommendations within milliseconds of user actions. A user who just viewed winter coats should immediately see matching accessories, not summer dresses.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Multi-Objective Optimization:</strong> Optimize for revenue, margin, inventory clearance, and customer satisfaction simultaneously. Don&apos;t just recommend the highest-margin product &mdash; recommend the one most likely to create a repeat customer.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Context-Aware:</strong> Time of day, device, location, weather, and even current events influence purchase intent. A recommendation engine that ignores context leaves money on the table.</li>
                    <li><strong style={{ color: '#ffffff' }}>Explore-Exploit Balance:</strong> Use multi-armed bandit algorithms to balance showing known-good recommendations (exploit) with testing new ones (explore). This prevents filter bubbles and discovers unexpected bestsellers.</li>
                  </ul>
                </div>

                {/* Dynamic Pricing */}
                <h2 id="dynamic-pricing" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>AI Dynamic Pricing</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Dynamic pricing powered by AI adjusts prices in real-time based on demand, competition, inventory, customer segment, and dozens of other signals. Amazon changes prices up to 2.5 million times per day. Airlines pioneered yield management; now every e-commerce category benefits.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginTop: 24, marginBottom: 24,
                  }}>
                    <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Competitive Intelligence</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>AI monitors competitor prices across hundreds of sites in real-time. Automated price matching, undercutting, or strategic premium positioning based on brand strength and product differentiation.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Demand Elasticity Models</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>ML models learn price sensitivity curves for every product-segment combination. Some products can absorb a 15% increase with minimal volume loss; others lose 50% of sales with a 5% increase. AI finds the optimum.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Inventory-Based Pricing</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Overstocked items get automatic markdowns. Low-stock items see price increases. AI balances sell-through rate targets with margin goals, optimizing across the entire product lifecycle.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Personalized Pricing</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Segment-specific pricing and promotions based on customer lifetime value, purchase history, and price sensitivity. High-value customers get loyalty discounts; price-sensitive shoppers get strategic offers to convert.</p>
                    </div>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Dynamic pricing impact:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>5-10% margin improvement:</strong> AI pricing captures more value than manual pricing by optimizing millions of price points simultaneously</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>2-5% revenue lift:</strong> Better price-demand matching increases total revenue while maintaining competitive positioning</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>30% faster markdowns:</strong> AI detects slow-moving inventory earlier and implements graduated markdowns that maximize recovery value</li>
                    <li><strong style={{ color: '#ffffff' }}>Reduced price wars:</strong> AI-driven competitive pricing avoids irrational race-to-bottom dynamics by focusing on value-based positioning</li>
                  </ul>
                </div>

                {/* Visual Search */}
                <h2 id="visual-search" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Visual Search & AR Try-On</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Visual search lets shoppers take a photo of any product &mdash; a dress seen on the street, a piece of furniture in a magazine, a shoe spotted on Instagram &mdash; and find exact or similar items instantly. In 2026, visual search converts at 2-3x the rate of text search because it captures high-intent moments.
                  </p>

                  <p><strong style={{ color: '#ffffff' }}>Visual AI capabilities:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Image-to-Product Matching:</strong> Deep learning extracts visual features (color, shape, pattern, texture, style) and matches against the entire catalog in real-time. Pinterest Lens processes 600M+ visual searches monthly.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>AR Virtual Try-On:</strong> Shoppers see how clothes, glasses, makeup, and furniture look on them or in their space before buying. This reduces returns by 25-40% for fashion and cosmetics brands.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Visual Quality Control:</strong> AI inspects product photos for consistency, background quality, and compliance with marketplace standards. Automated photo enhancement standardizes listings at scale.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Social Commerce Discovery:</strong> AI scans social media feeds to identify trending products, styles, and aesthetics. Fashion retailers use this to curate collections aligned with emerging social trends.</li>
                    <li><strong style={{ color: '#ffffff' }}>3D Product Visualization:</strong> AI generates 3D models from 2D product photos, enabling 360-degree views and AR placement without expensive 3D photography shoots.</li>
                  </ul>
                </div>

                {/* Chatbot Commerce */}
                <h2 id="chatbot-commerce" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Conversational Commerce & AI Chatbots</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    AI chatbots have evolved from frustrating FAQ bots to genuine shopping assistants. Powered by LLMs, they understand context, maintain conversation history, access product catalogs, check inventory, and even process payments &mdash; all within a natural conversation.
                  </p>

                  <div style={{
                    background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(180,253,131,0.2)',
                  }}>
                    <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                      &quot;The future of e-commerce isn&apos;t more catalog pages. It&apos;s an AI personal shopper that knows your style, budget, and preferences better than any human sales associate &mdash; and is available 24/7 in any language.&quot;
                    </p>
                  </div>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginTop: 24, marginBottom: 24,
                  }}>
                    <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Product Discovery</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>&quot;I need a waterproof jacket for hiking in the Pacific Northwest, under $200, in dark green.&quot; The AI understands multiple constraints and returns curated options, not keyword search results.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Post-Purchase Support</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Order tracking, returns initiation, size exchanges, and warranty claims handled entirely by AI. Resolution time drops from 24 hours to 30 seconds. CSAT improves because no one waits on hold.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Proactive Engagement</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>AI detects hesitation (cart abandonment, long page dwell times) and proactively offers help: &quot;I see you&apos;re comparing these two laptops. Want me to break down the differences?&quot;</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Omnichannel Integration</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Same AI assistant across website, WhatsApp, Instagram DMs, SMS, and voice. Conversation context persists across channels so customers never repeat themselves.</p>
                    </div>
                  </div>

                  <div className="reveal" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                  }}>
                    <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)', textAlign: 'center' }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>70%</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Queries Resolved Without Human</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>26%</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>AOV Increase with Chat Assist</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>3x</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Higher Conversion Rate</p>
                    </div>
                  </div>
                </div>

                {/* Inventory Prediction */}
                <h2 id="inventory-prediction" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>AI Inventory Prediction & Supply Chain</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Inventory mismanagement costs retailers $1.8 trillion globally through stockouts ($1T) and overstock ($600B). AI demand forecasting predicts what will sell, when, and where with accuracy that human planners cannot match.
                  </p>

                  <p><strong style={{ color: '#ffffff' }}>AI inventory capabilities:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Demand Forecasting:</strong> ML models analyze historical sales, seasonality, promotions, weather, events, competitor actions, and social media trends to predict demand at the SKU-location-day level. Accuracy improvement over traditional methods: 20-50%.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Multi-Echelon Optimization:</strong> AI optimizes inventory placement across warehouses, fulfillment centers, and stores simultaneously. Products are positioned closest to predicted demand, reducing shipping costs and delivery times.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Supply Chain Risk Prediction:</strong> AI monitors global signals (port congestion, weather events, geopolitical tensions, supplier financial health) to predict disruptions weeks before they impact inventory.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Automated Reordering:</strong> AI calculates optimal reorder points and quantities considering lead times, demand variability, holding costs, and stockout costs. Procurement becomes proactive instead of reactive.</li>
                    <li><strong style={{ color: '#ffffff' }}>New Product Forecasting:</strong> For products with no sales history, AI uses similar product attributes, category trends, and pre-launch signals (pre-orders, social buzz) to estimate initial demand.</li>
                  </ul>
                </div>

                {/* Customer Segmentation */}
                <h2 id="customer-segmentation" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>AI Customer Segmentation</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Traditional segmentation groups customers into 5-10 static segments based on demographics. AI creates micro-segments of one &mdash; dynamic, behavioral profiles that update in real-time as customer preferences evolve.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>AI Segmentation vs. Traditional</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Dimension</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Traditional</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>AI-Powered</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Segments</strong></td>
                          <td style={{ padding: '12px 8px' }}>5-10 static groups</td>
                          <td style={{ padding: '12px 8px' }}>Unlimited dynamic micro-segments</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Update Frequency</strong></td>
                          <td style={{ padding: '12px 8px' }}>Quarterly or annually</td>
                          <td style={{ padding: '12px 8px' }}>Real-time with every interaction</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Data Used</strong></td>
                          <td style={{ padding: '12px 8px' }}>Demographics, purchase history</td>
                          <td style={{ padding: '12px 8px' }}>Behavioral, contextual, psychographic</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Prediction</strong></td>
                          <td style={{ padding: '12px 8px' }}>What groups did in the past</td>
                          <td style={{ padding: '12px 8px' }}>What individuals will do next</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Action</strong></td>
                          <td style={{ padding: '12px 8px' }}>Segment-level campaigns</td>
                          <td style={{ padding: '12px 8px' }}>Individualized experiences</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>AI segmentation use cases:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Churn Prediction:</strong> Identify at-risk customers 30-60 days before they churn and trigger retention campaigns with personalized offers based on their specific churn drivers.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>CLV Prediction:</strong> Predict customer lifetime value at first purchase. Allocate acquisition spend toward high-CLV segments and adjust service levels accordingly.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Next-Best-Action:</strong> For each customer, AI determines the optimal next touchpoint: email, push notification, retargeting ad, loyalty reward, or personal outreach.</li>
                    <li><strong style={{ color: '#ffffff' }}>Lookalike Audiences:</strong> Find new prospects who resemble your best customers using ML similarity models. This drives 3-5x better ROAS than broad targeting.</li>
                  </ul>
                </div>

                {/* Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Choose Codazz for E-Commerce AI</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Recommendation Engine Expertise</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We&apos;ve built recommendation systems handling millions of products and billions of interactions. Our engines combine collaborative filtering, deep learning, and real-time personalization for maximum conversion.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Platform Integration</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Deep integration with Shopify, Magento, WooCommerce, BigCommerce, and custom platforms. We plug AI capabilities into your existing tech stack, not replace it.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Revenue-Focused AI</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Every AI feature we build has a clear revenue metric. We A/B test rigorously and only deploy models that show statistically significant lifts in conversion, AOV, or retention.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Scale-Ready Architecture</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Our AI systems handle Black Friday traffic spikes, millions of daily recommendations, and real-time pricing across millions of SKUs. Built for scale from Day 1.</p>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How much does it cost to build an AI recommendation engine?', a: 'A basic recommendation system using collaborative filtering for a mid-size catalog costs $40K-$100K. A production-grade deep learning recommendation engine with real-time personalization runs $150K-$400K. Enterprise-scale systems processing billions of events daily (like what Amazon or Netflix use) cost $500K+. The ROI is typically 10-30x through increased conversion and AOV.' },
                  { q: 'Is dynamic pricing ethical and legal?', a: 'Dynamic pricing is legal in most jurisdictions (except for price gouging during emergencies in some regions). Ethically, best practices include: (1) Transparency about pricing methodology, (2) Not discriminating by protected characteristics, (3) Avoiding predatory pricing on essential goods, (4) Ensuring competitive pricing overall. Many retailers combine dynamic pricing with price-match guarantees to maintain trust.' },
                  { q: 'How much data do I need for AI personalization?', a: 'You need at least 10,000-50,000 user interactions (views, clicks, purchases) for basic collaborative filtering. For deep learning models, 500K+ interactions produce good results. However, you can start immediately using content-based recommendations (product attributes) and session-based personalization that don&apos;t require historical user data. Cold-start strategies can provide value from Day 1.' },
                  { q: 'Can AI chatbots really replace customer service agents?', a: 'AI chatbots handle 60-80% of customer inquiries without human intervention (order tracking, returns, FAQs, product questions). Complex issues, complaints, and emotionally sensitive situations still need humans. The best approach is AI-first with seamless human escalation. This reduces support costs by 40-60% while improving response times from hours to seconds for routine queries.' },
                  { q: 'How long does it take to implement AI in an e-commerce store?', a: 'Basic AI features (product recommendations, chatbot) can be deployed in 4-8 weeks using pre-built solutions integrated with your platform. Custom AI systems (dynamic pricing, visual search, predictive inventory) take 3-6 months. A comprehensive AI overhaul (personalization engine, chatbot, pricing, inventory, segmentation) takes 6-12 months with phased rollouts to measure impact at each stage.' },
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
                    Ready to Add AI to Your E-Commerce Store?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free consultation for your e-commerce AI project. We&apos;ll audit your current stack, identify the highest-ROI AI opportunities, and provide a phased implementation plan.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Start Your E-Commerce AI Project
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
                      Raman leads Codazz&apos;s e-commerce AI practice, helping online retailers and marketplaces build AI-powered personalization, pricing, and operations systems.
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
