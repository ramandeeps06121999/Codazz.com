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
  { id: 'data-models', label: 'Relational vs Document', emoji: '📊' },
  { id: 'acid-consistency', label: 'ACID & Consistency', emoji: '🔐' },
  { id: 'json-support', label: 'JSON Support in PostgreSQL', emoji: '📄' },
  { id: 'horizontal-scaling', label: 'Horizontal Scaling', emoji: '📈' },
  { id: 'performance', label: 'Performance Benchmarks', emoji: '⚙️' },
  { id: 'use-case-guide', label: 'Use Case Guide', emoji: '🎯' },
  { id: 'hybrid-approaches', label: 'Hybrid Approaches', emoji: '🔀' },
  { id: 'pricing-hosting', label: 'Pricing & Hosting', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'python-vs-nodejs-backend-2026', title: 'Python vs Node.js for Backend Development in 2026', category: 'Engineering', readTime: '13 min' },
  { slug: 'microservices-vs-monolith-2026', title: 'Microservices vs Monolith in 2026', category: 'Engineering', readTime: '14 min' },
  { slug: 'saas-development-cost-guide', title: 'SaaS Development Cost Guide 2026', category: 'Business', readTime: '10 min' },
];

export default function PostgresqlVsMongodbClient() {
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
              src="/blog_images/postgresql-vs-mongodb-2026.jpg"
              alt="PostgreSQL vs MongoDB database comparison 2026"
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
              }}>Engineering</span>
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
                15 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              PostgreSQL vs MongoDB in 2026: Which Database Should You Choose?
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The database you choose will shape your query patterns, scaling architecture, and developer experience for years. PostgreSQL and MongoDB are both excellent — but for very different workloads.
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
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.6)',
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
                    The relational vs NoSQL debate has raged for over a decade. But in 2026, the answer is more nuanced than ever. PostgreSQL now has world-class JSON support. MongoDB has added multi-document ACID transactions. The lines have blurred — which makes the decision harder.
                  </p>
                  <p>
                    <strong style={{ color: '#ffffff' }}>PostgreSQL is the world&apos;s most advanced open-source relational database.</strong> MongoDB is the world&apos;s most popular document database. Both are proven at enormous scale, with Fortune 500 companies running critical systems on each.
                  </p>
                  <p>
                    This guide cuts through the marketing noise and gives you an engineering-first breakdown: data models, ACID guarantees, scaling strategies, performance benchmarks, and real-world use cases.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we have production systems running on both. Here&apos;s the honest comparison.
                  </p>
                </div>

                {/* Quick Comparison */}
                <h2 id="quick-comparison" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Quick Comparison: PostgreSQL vs MongoDB</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Factor</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#336791', fontSize: 14 }}>PostgreSQL</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>MongoDB</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Data Model</td>
                        <td style={{ padding: '12px 8px', color: '#336791' }}>Relational (tables, rows)</td>
                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>Document (BSON/JSON)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Schema</td>
                        <td style={{ padding: '12px 8px', color: '#336791' }}>Strict (enforced)</td>
                        <td style={{ padding: '12px 8px' }}>Flexible (optional validation)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>ACID Transactions</td>
                        <td style={{ padding: '12px 8px', color: '#336791' }}>Full (single + multi-row)</td>
                        <td style={{ padding: '12px 8px' }}>Multi-doc (since v4.0, 2018)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>JSON Support</td>
                        <td style={{ padding: '12px 8px', color: '#336791' }}>JSONB (indexed, queryable)</td>
                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>Native (core data format)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Horizontal Scaling</td>
                        <td style={{ padding: '12px 8px' }}>Manual (Citus, CockroachDB)</td>
                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>Native sharding</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Query Language</td>
                        <td style={{ padding: '12px 8px', color: '#336791' }}>SQL (standard, powerful)</td>
                        <td style={{ padding: '12px 8px' }}>MQL (MongoDB Query Language)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}>Full-Text Search</td>
                        <td style={{ padding: '12px 8px' }}>Built-in (tsvector)</td>
                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>Atlas Search (Lucene-based)</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}>Best For</td>
                        <td style={{ padding: '12px 8px', color: '#336791' }}>Financial data, complex queries, integrity</td>
                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>Content, catalogs, real-time, flexible schema</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Data Models */}
                <h2 id="data-models" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Relational vs Document Model: What Actually Matters</h2>

                <p className="reveal">
                  The data model is the most fundamental difference between the two databases. Understanding it will drive every subsequent decision.
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, margin: '32px 0',
                }}>
                  <div style={{ background: 'rgba(51,103,145,0.1)', padding: 24, borderRadius: 28, border: '1px solid rgba(51,103,145,0.35)' }}>
                    <h4 style={{ color: '#4a9fd5', marginBottom: 12, fontSize: 18 }}>PostgreSQL: Relational Model</h4>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', marginBottom: 16, lineHeight: 1.65 }}>
                      Data is structured into tables with predefined columns, types, and constraints. Relationships between entities are expressed via foreign keys and JOIN operations.
                    </p>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Schema migrations required when structure changes</li>
                      <li style={{ marginBottom: 8 }}>Data normalisation avoids duplication</li>
                      <li style={{ marginBottom: 8 }}>Complex multi-table queries via SQL JOINs</li>
                      <li>Referential integrity enforced at DB level</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(34,197,94,0.06)', padding: 24, borderRadius: 28, border: '1px solid rgba(34,197,94,0.2)' }}>
                    <h4 style={{ color: '#22c55e', marginBottom: 12, fontSize: 18 }}>MongoDB: Document Model</h4>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', marginBottom: 16, lineHeight: 1.65 }}>
                      Data is stored as self-contained JSON-like BSON documents. Related data is often embedded directly in a single document, eliminating the need for JOINs.
                    </p>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Schema-flexible — add fields without migrations</li>
                      <li style={{ marginBottom: 8 }}>Embed related data for single-query reads</li>
                      <li style={{ marginBottom: 8 }}>Natural fit for hierarchical or polymorphic data</li>
                      <li>Aggregation pipeline for complex transformations</li>
                    </ul>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,200,0,0.07)', borderRadius: 28, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,200,0,0.25)',
                }}>
                  <h4 style={{ color: '#ffd700', marginBottom: 10 }}>The Embedding vs. Referencing Trade-off</h4>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65 }}>
                    MongoDB encourages embedding related data (a user&apos;s addresses inside the user document). This makes reads fast but updates expensive when data is shared. PostgreSQL normalises this into separate tables — slower reads (JOINs) but simpler updates. The right choice depends on your read-to-write ratio and data relationship patterns.
                  </p>
                </div>

                {/* ACID & Consistency */}
                <h2 id="acid-consistency" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>ACID Compliance & Data Consistency</h2>

                <p className="reveal">
                  For financial systems, e-commerce, and any application where data integrity is non-negotiable, ACID guarantees matter enormously.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>ACID Property</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#4a9fd5', fontSize: 14 }}>PostgreSQL</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>MongoDB</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Atomicity', 'All-or-nothing across all operations', 'All-or-nothing within single document (native) or multi-doc (since v4.0)'],
                        ['Consistency', 'Schema constraints, triggers, foreign keys enforced', 'Schema validation rules (optional), no foreign key enforcement'],
                        ['Isolation', 'Full isolation levels (Read Committed to Serializable)', 'Snapshot isolation for multi-doc transactions'],
                        ['Durability', 'WAL (Write-Ahead Log) — crash-safe by default', 'Journal-based — durable with writeConcern: majority'],
                      ].map(([prop, pg, mongo], i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px', fontWeight: 600, color: '#ffffff', fontSize: 14 }}>{prop}</td>
                          <td style={{ padding: '12px 8px', fontSize: 13, color: '#4a9fd5' }}>{pg}</td>
                          <td style={{ padding: '12px 8px', fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{mongo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="reveal">
                  <strong style={{ color: '#4a9fd5' }}>PostgreSQL has a 30+ year head start on ACID guarantees.</strong> For workloads like banking ledgers, payment processing, inventory management, and medical records — where data correctness is more important than raw throughput — PostgreSQL is the safer choice. MongoDB&apos;s multi-document transactions work well, but they come with a performance penalty and are best used sparingly.
                </p>

                {/* JSON Support in PostgreSQL */}
                <h2 id="json-support" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>JSON Support in PostgreSQL: The Best of Both Worlds</h2>

                <p className="reveal">
                  One of the most underappreciated features of PostgreSQL is its JSONB data type. It turns PostgreSQL into a hybrid database capable of handling both structured relational data and flexible document-style data in the same table.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(51,103,145,0.1)', borderRadius: 28, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(51,103,145,0.35)',
                }}>
                  <h4 style={{ color: '#4a9fd5', marginBottom: 12 }}>What JSONB Gives You</h4>
                  <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>GIN Indexes:</strong> Full indexing of JSON keys and values for fast lookups</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Containment Queries:</strong> Query documents where a JSON field contains a specific value</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Path Expressions:</strong> Extract deeply nested values using the #&gt;&gt; operator</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>JSON Aggregation:</strong> Build JSON objects from query results with json_agg()</li>
                    <li><strong style={{ color: '#ffffff' }}>Schema Flexibility:</strong> Store variable attributes (product metadata, user preferences) without separate tables</li>
                  </ul>
                </div>

                <p className="reveal">
                  A common pattern we use at Codazz: store a product&apos;s core attributes (name, price, SKU) in typed PostgreSQL columns for query performance and integrity, while putting flexible attributes (custom specs, tags, localised content) in a JSONB column. You get the best of both models without running two separate databases.
                </p>

                {/* Horizontal Scaling */}
                <h2 id="horizontal-scaling" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Horizontal Scaling: MongoDB Atlas vs CockroachDB</h2>

                <p className="reveal">
                  PostgreSQL was designed for vertical scaling (bigger servers). MongoDB was designed for horizontal scaling (more servers). But in 2026, both have solutions for web-scale distributed workloads.
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, margin: '24px 0',
                }}>
                  {[
                    {
                      name: 'MongoDB Atlas Sharding',
                      color: '#22c55e',
                      bg: 'rgba(34,197,94,0.06)',
                      border: 'rgba(34,197,94,0.2)',
                      points: [
                        'Native horizontal sharding built into MongoDB',
                        'Atlas manages shard placement automatically',
                        'Range, hash, and zone-based sharding strategies',
                        'Global clusters across multiple cloud regions',
                        'Seamless read scaling with replica sets',
                      ],
                    },
                    {
                      name: 'CockroachDB (Postgres-compatible)',
                      color: '#4a9fd5',
                      bg: 'rgba(51,103,145,0.1)',
                      border: 'rgba(51,103,145,0.35)',
                      points: [
                        'Distributed SQL — full PostgreSQL wire compatibility',
                        'Automatic sharding with ACID guarantees across nodes',
                        'Geo-partitioning for data residency compliance',
                        'Survive entire region failures without data loss',
                        'Used by Netflix, Bose, Hard Rock',
                      ],
                    },
                    {
                      name: 'Citus (PostgreSQL Extension)',
                      color: '#a78bfa',
                      bg: 'rgba(167,139,250,0.06)',
                      border: 'rgba(167,139,250,0.25)',
                      points: [
                        'Turns PostgreSQL into a distributed database',
                        'Shard tables across worker nodes transparently',
                        'Co-locate related data to minimise cross-node queries',
                        'Acquired by Microsoft — integrated into Azure Cosmos DB for PostgreSQL',
                        'Excellent for multi-tenant SaaS',
                      ],
                    },
                  ].map((option, i) => (
                    <div key={i} style={{ background: option.bg, padding: 20, borderRadius: 28, border: `1px solid ${option.border}` }}>
                      <h4 style={{ color: option.color, marginBottom: 12, fontSize: 15 }}>{option.name}</h4>
                      <ul style={{ paddingLeft: 20, margin: 0, fontSize: 13 }}>
                        {option.points.map((point, j) => (
                          <li key={j} style={{ marginBottom: 6, color: 'rgba(255,255,255,0.7)' }}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="reveal" style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                  MongoDB still has the easiest path to horizontal scale. But CockroachDB and Citus have closed the gap significantly for teams that want PostgreSQL compatibility with distributed scale.
                </p>

                {/* Performance */}
                <h2 id="performance" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Performance Benchmarks: What the Numbers Say</h2>

                <p className="reveal">
                  Performance is highly workload-dependent. Here&apos;s how the two compare across common query patterns on equivalent hardware (16-core, 64GB RAM, NVMe SSD):
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Workload</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#4a9fd5', fontSize: 14 }}>PostgreSQL</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>MongoDB</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Simple document read (by _id)', '~0.5ms', '~0.3ms', 'MongoDB'],
                        ['Complex JOIN (5 tables)', '~8ms', 'N/A (requires aggregation)', 'PostgreSQL'],
                        ['Bulk insert (10k docs)', '~280ms', '~120ms', 'MongoDB'],
                        ['Aggregation (GROUP BY)', '~15ms', '~22ms', 'PostgreSQL'],
                        ['Full-text search', '~5ms (tsvector)', '~2ms (Atlas Search)', 'MongoDB Atlas'],
                        ['Concurrent writes (1000 TPS)', '~12ms p99', '~9ms p99', 'MongoDB'],
                        ['ACID multi-row transaction', '~4ms', '~18ms (multi-doc)', 'PostgreSQL'],
                        ['Range query with index', '~1ms', '~1ms', 'Tie'],
                      ].map(([workload, pg, mongo, winner], i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px', fontSize: 13 }}>{workload}</td>
                          <td style={{ padding: '12px 8px', fontSize: 13, color: '#4a9fd5' }}>{pg}</td>
                          <td style={{ padding: '12px 8px', fontSize: 13, color: '#22c55e' }}>{mongo}</td>
                          <td style={{ padding: '12px 8px', fontSize: 13, fontWeight: 600, color: winner === 'PostgreSQL' ? '#4a9fd5' : winner === 'MongoDB' || winner === 'MongoDB Atlas' ? '#22c55e' : 'rgba(255,255,255,0.5)' }}>{winner}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="reveal">
                  The takeaway: MongoDB is faster for simple document reads and writes. PostgreSQL is faster for complex relational queries and transactional workloads. Neither has a universal performance advantage — it depends entirely on your query patterns.
                </p>

                {/* Use Case Guide */}
                <h2 id="use-case-guide" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Use Case Guide: When to Choose Each</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(51,103,145,0.1)', padding: 24, borderRadius: 28, border: '1px solid rgba(51,103,145,0.35)' }}>
                    <h4 style={{ color: '#4a9fd5', marginBottom: 16, fontSize: 18 }}>Choose PostgreSQL When:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Financial applications</strong> — banking, payments, accounting, trading</li>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>E-commerce</strong> — inventory, orders, pricing with complex discount rules</li>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Healthcare</strong> — patient records with strict compliance requirements</li>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Complex reporting</strong> — multi-dimensional analytics with ad hoc SQL</li>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Multi-table relationships</strong> — data with many interconnected entities</li>
                      <li><strong style={{ color: '#ffffff' }}>Hybrid workloads</strong> — when you need both structured and document storage</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(34,197,94,0.06)', padding: 24, borderRadius: 28, border: '1px solid rgba(34,197,94,0.2)' }}>
                    <h4 style={{ color: '#22c55e', marginBottom: 16, fontSize: 18 }}>Choose MongoDB When:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Content management</strong> — blogs, CMS, product catalogs with variable attributes</li>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Real-time analytics</strong> — event streams, clickstreams, time-series-adjacent data</li>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>IoT and telemetry</strong> — high-volume, high-velocity sensor data ingestion</li>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Mobile backends</strong> — flexible schema suits rapidly evolving mobile apps</li>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Rapid prototyping</strong> — schema changes without migrations accelerate iteration</li>
                      <li><strong style={{ color: '#ffffff' }}>Global scale from day one</strong> — Atlas multi-region clusters with built-in sharding</li>
                    </ul>
                  </div>
                </div>

                {/* Hybrid Approaches */}
                <h2 id="hybrid-approaches" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Hybrid Approaches: Using Both Together</h2>

                <p className="reveal">
                  Many production systems at scale use both databases. The trick is knowing which data belongs where. Here are the most common hybrid patterns we implement at Codazz:
                </p>

                <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                  {[
                    {
                      title: 'E-commerce Platform',
                      desc: 'PostgreSQL for orders, inventory, user accounts, and payment records (ACID critical). MongoDB for product catalog with variable attributes (electronics vs. clothing), session data, and search indexes.',
                      companies: 'Pattern used by: eBay, Shopify-style platforms',
                    },
                    {
                      title: 'SaaS Application',
                      desc: 'PostgreSQL for billing, subscriptions, user management, and audit logs. MongoDB for user-generated content, activity feeds, and application configuration that varies per tenant.',
                      companies: 'Pattern used by: Segment, HubSpot',
                    },
                    {
                      title: 'Healthcare App',
                      desc: 'PostgreSQL for patient records, appointments, prescriptions, and billing (HIPAA-auditable, relational). MongoDB for unstructured clinical notes, imaging metadata, and device telemetry.',
                      companies: 'Pattern used by: Epic Systems integrations, Teladoc',
                    },
                    {
                      title: 'Real-Time Analytics Platform',
                      desc: 'PostgreSQL as the source of truth for business data. MongoDB (or TimescaleDB on Postgres) for high-velocity event ingestion. Materialised views and scheduled sync keep both in alignment.',
                      companies: 'Pattern used by: Amplitude, Mixpanel-style platforms',
                    },
                  ].map((pattern, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', padding: 24, borderRadius: 28,
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}>
                      <h4 style={{ color: '#22c55e', marginBottom: 10, fontSize: 16 }}>{pattern.title}</h4>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: '0 0 10px', lineHeight: 1.65 }}>{pattern.desc}</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: 0, fontStyle: 'italic' }}>{pattern.companies}</p>
                    </div>
                  ))}
                </div>

                {/* Pricing & Hosting */}
                <h2 id="pricing-hosting" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Pricing & Hosting Costs</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24, margin: '24px 0',
                  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Option</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Database</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Starting Price</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Supabase', 'PostgreSQL', 'Free / $25/mo Pro', 'Open-source Firebase alternative, excellent DX'],
                        ['Neon', 'PostgreSQL', 'Free / $19/mo', 'Serverless Postgres with branching'],
                        ['AWS RDS Postgres', 'PostgreSQL', '~$15/mo (t3.micro)', 'Managed, Multi-AZ HA available'],
                        ['MongoDB Atlas Free', 'MongoDB', 'Free (512MB)', 'Shared cluster, great for MVPs'],
                        ['MongoDB Atlas M10', 'MongoDB', '~$57/mo', 'Dedicated, production-ready'],
                        ['CockroachDB Serverless', 'PostgreSQL-compat', 'Free (5GB) / usage-based', 'Distributed SQL, scales to zero'],
                        ['PlanetScale', 'MySQL-compat', '$39/mo Scaler', 'Vitess-based sharding, branch workflow'],
                      ].map(([option, db, price, notes], i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px', color: '#22c55e', fontWeight: 600, fontSize: 14 }}>{option}</td>
                          <td style={{ padding: '12px 8px', fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{db}</td>
                          <td style={{ padding: '12px 8px', fontSize: 13, color: '#4a9fd5' }}>{price}</td>
                          <td style={{ padding: '12px 8px', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="reveal">
                  For most new projects, start with Supabase (PostgreSQL) or MongoDB Atlas Free Tier. Both have generous free plans, excellent DX, and scale smoothly. The incremental cost between the two managed options is minimal at small scale — the database choice should be driven by your data model, not pricing.
                </p>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  {
                    q: 'Is MongoDB faster than PostgreSQL?',
                    a: 'For simple document reads and writes, MongoDB is typically faster due to its document model eliminating JOINs. For complex relational queries, aggregations, and transactional workloads, PostgreSQL is usually faster. There\'s no universal answer — benchmark your specific query patterns.',
                  },
                  {
                    q: 'Can PostgreSQL replace MongoDB completely?',
                    a: 'For most use cases, yes. PostgreSQL\'s JSONB support handles document-style storage well. The main gaps are native sharding for multi-terabyte scales and MongoDB\'s superior developer experience for document-heavy apps (Mongoose, Atlas App Services). Many teams have successfully migrated from MongoDB to PostgreSQL as their schemas matured.',
                  },
                  {
                    q: 'Does MongoDB support transactions?',
                    a: 'Yes, since MongoDB 4.0 (2018), multi-document ACID transactions are supported. They work well for occasional transactional operations but come with a performance overhead. For workloads where transactions are the norm (not the exception), PostgreSQL remains the better choice.',
                  },
                  {
                    q: 'Which is better for a startup MVP?',
                    a: 'Both work well for MVPs. MongoDB\'s schema flexibility is an advantage when your data model is evolving rapidly. PostgreSQL with Supabase offers SQL familiarity, a free tier, and auto-generated APIs. Our most common recommendation for startups is PostgreSQL via Supabase or Neon — you can always add MongoDB later for specific use cases.',
                  },
                  {
                    q: 'Is it expensive to migrate between PostgreSQL and MongoDB?',
                    a: 'Significant. A migration requires rewriting queries, changing ORMs (Sequelize/Prisma to Mongoose or vice versa), rethinking data models, and running parallel systems during cutover. Plan for 4-12 weeks of engineering effort for a production system. Getting the database choice right early is cheaper than migrating later.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 16,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 28, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Not Sure Which Database Is Right for Your App?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
                    The wrong database choice can cost you months of re-architecture later. Our engineers have shipped production systems on PostgreSQL, MongoDB, and hybrid architectures — let us help you pick the right one.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#22c55e', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Book Free Database Architecture Review
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
                          color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
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
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>{post.category}</span>
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
