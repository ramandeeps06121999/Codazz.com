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
  { id: 'what-is-roadmap', label: 'What Is a Product Roadmap?', emoji: '🗺️' },
  { id: 'roadmap-types', label: 'Roadmap Types', emoji: '📋' },
  { id: 'okr-framework', label: 'OKR Framework', emoji: '🎯' },
  { id: 'story-mapping', label: 'Story Mapping', emoji: '🗂️' },
  { id: 'prioritization', label: 'Prioritization Frameworks', emoji: '⚖️' },
  { id: 'stakeholder-alignment', label: 'Stakeholder Alignment', emoji: '🤝' },
  { id: 'roadmap-tools', label: 'Roadmap Tools 2026', emoji: '🛠️' },
  { id: 'sprint-planning', label: 'Sprint Planning', emoji: '🏃' },
  { id: 'common-mistakes', label: 'Common Mistakes', emoji: '⚠️' },
  { id: 'codazz-product', label: 'Product Strategy with Codazz', emoji: '✨' },
];

const relatedPosts = [
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide: From Idea to Launch in 90 Days', category: 'Strategy', readTime: '18 min' },
  { slug: 'how-to-find-cto-startup', title: 'How to Find a CTO for Your Startup in 2026: Complete Guide', category: 'Leadership', readTime: '16 min' },
];

/* ── Reusable style objects ── */
const cardBase: React.CSSProperties = {
  background: '#0d0d0d',
  border: '1px solid #1a1a1a',
  borderRadius: 28,
  padding: '2rem',
  marginBottom: '1.5rem',
};

const greenText: React.CSSProperties = { color: '#22c55e' };
const mutedText: React.CSSProperties = { color: '#888', fontSize: '0.92rem' };

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  fontSize: '0.93rem',
  marginBottom: '1rem',
};

const thStyle: React.CSSProperties = {
  background: '#111',
  color: '#22c55e',
  padding: '0.75rem 1rem',
  textAlign: 'left' as const,
  borderBottom: '1px solid #222',
  fontWeight: 600,
};

const tdStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  borderBottom: '1px solid #1a1a1a',
  color: '#ccc',
  verticalAlign: 'top' as const,
};

export default function PageClient() {
  const mainRef = useReveal();
  const [activeSection, setActiveSection] = useState('what-is-roadmap');
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 140;
      for (const s of [...tocSections].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollY) { setActiveSection(s.id); break; }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <main ref={mainRef} style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', padding: '7rem 1.5rem 4rem', textAlign: 'center', overflow: 'hidden' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0d1f14', border: '1px solid #22c55e33', borderRadius: 99, padding: '0.4rem 1.1rem', marginBottom: '1.5rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            <span style={{ color: '#22c55e', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Product Strategy · March 20, 2026 · 17 min read</span>
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            How to Build a Product Roadmap in 2026:<br />
            <span style={greenText}>Frameworks & Templates</span>
          </h1>
          <p className="reveal" style={{ fontSize: '1.15rem', color: '#aaa', lineHeight: 1.7, maxWidth: 650, margin: '0 auto 2rem' }}>
            A product roadmap is the most important alignment tool your company has. This guide covers every major framework — Now/Next/Later, OKR-based, story mapping — plus how to run sprint planning that actually ships.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Now/Next/Later', 'OKR Framework', 'RICE Scoring', 'MoSCoW', 'Linear & Productboard'].map(tag => (
              <span key={tag} style={{ background: '#111', border: '1px solid #222', borderRadius: 99, padding: '0.35rem 0.9rem', fontSize: '0.82rem', color: '#aaa' }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BODY: TOC + ARTICLE ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1.5rem 5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: '2rem' }} className="blog-layout">
          <style>{`
            @media(min-width:1024px){
              .blog-layout { grid-template-columns: 260px minmax(0,1fr) !important; }
            }
            .reveal { opacity:0; transform:translateY(22px); transition:opacity .55s ease,transform .55s ease; }
            .reveal.visible { opacity:1; transform:none; }
            .toc-link { display:flex; align-items:center; gap:8px; padding:0.55rem 0.85rem; border-radius:10px; color:#888; font-size:0.87rem; text-decoration:none; transition:all .2s; border:1px solid transparent; }
            .toc-link:hover,.toc-link.active { background:#0d1f14; color:#22c55e; border-color:#22c55e33; }
            .prose h2 { font-size:1.65rem; font-weight:700; margin:2.5rem 0 1rem; color:#fff; scroll-margin-top:100px; }
            .prose h3 { font-size:1.2rem; font-weight:600; margin:1.75rem 0 0.75rem; color:#e2e8f0; }
            .prose p { color:#bbb; line-height:1.8; margin-bottom:1.1rem; }
            .prose ul,.prose ol { color:#bbb; line-height:1.8; padding-left:1.5rem; margin-bottom:1.1rem; }
            .prose li { margin-bottom:0.4rem; }
            .prose strong { color:#fff; }
            .prose a { color:#22c55e; text-decoration:underline; text-underline-offset:3px; }
          `}</style>

          {/* ── TOC (sidebar) ── */}
          <aside style={{ position: 'sticky', top: 90, height: 'fit-content' }}>
            <div style={{ ...cardBase, padding: '1.25rem' }}>
              <button
                onClick={() => setTocOpen(o => !o)}
                style={{ background: 'none', border: 'none', color: '#22c55e', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, width: '100%', padding: 0, marginBottom: tocOpen ? '1rem' : 0 }}
              >
                <span>📑</span> Table of Contents <span style={{ marginLeft: 'auto' }}>{tocOpen ? '▲' : '▼'}</span>
              </button>
              <nav style={{ display: tocOpen ? 'block' : 'none' }} className="lg-toc">
                <style>{`.lg-toc { display:block !important; }`}</style>
                {tocSections.map(s => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`toc-link${activeSection === s.id ? ' active' : ''}`}
                  >
                    <span>{s.emoji}</span> {s.label}
                  </a>
                ))}
              </nav>
            </div>
            {/* CTA Card */}
            <div style={{ ...cardBase, padding: '1.5rem', background: '#0a1a0f', border: '1px solid #22c55e33', marginTop: '1rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🗺️</div>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Need a Product Roadmap?</p>
              <p style={{ ...mutedText, marginBottom: '1rem' }}>Codazz helps startups build and execute product strategies from MVP to scale.</p>
              <Link href="/contact" style={{ display: 'block', background: '#22c55e', color: '#000', fontWeight: 700, borderRadius: 12, padding: '0.65rem 1rem', textAlign: 'center', textDecoration: 'none', fontSize: '0.88rem' }}>
                Build Your Roadmap →
              </Link>
            </div>
          </aside>

          {/* ── ARTICLE ── */}
          <article className="prose">

            {/* Section 1 */}
            <div id="what-is-roadmap" className="reveal" style={cardBase}>
              <h2>What Is a Product Roadmap?</h2>
              <p>
                A product roadmap is a strategic communication tool — not a project plan. It communicates the vision and direction of your product over time, connects that vision to business goals, and aligns every stakeholder (engineers, designers, sales, investors) around what is being built and why.
              </p>
              <p>
                The most common mistake teams make is treating the roadmap as a feature backlog with dates. This is wrong. A roadmap answers: <strong>what outcomes are we trying to achieve, and what bets are we making to get there?</strong> Features are means, not ends.
              </p>

              <h3>Roadmap vs. Backlog vs. Sprint Plan</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Artifact</th>
                      <th style={thStyle}>Time Horizon</th>
                      <th style={thStyle}>Purpose</th>
                      <th style={thStyle}>Audience</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong style={greenText}>Product Roadmap</strong></td>
                      <td style={tdStyle}>3–18 months</td>
                      <td style={tdStyle}>Strategic direction and outcome bets</td>
                      <td style={tdStyle}>Leadership, Investors, Board</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Backlog</strong></td>
                      <td style={tdStyle}>0–3 months</td>
                      <td style={tdStyle}>Prioritized list of work items</td>
                      <td style={tdStyle}>Product, Engineering</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Sprint Plan</strong></td>
                      <td style={tdStyle}>1–2 weeks</td>
                      <td style={tdStyle}>Committed work for current iteration</td>
                      <td style={tdStyle}>Engineering Team</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Why Most Roadmaps Fail</h3>
              <ul>
                <li>They are built as feature lists with fake precision ("Q3: Add multi-currency support")</li>
                <li>They are not connected to measurable business outcomes</li>
                <li>They are never updated — becoming artifacts of wishful thinking rather than living strategy</li>
                <li>They are used to placate stakeholders rather than drive decisions</li>
                <li>They have no prioritization rationale — everything is "high priority"</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div id="roadmap-types" className="reveal" style={cardBase}>
              <h2>Roadmap Types: Which One Is Right for You?</h2>

              <h3>1. Now / Next / Later (Recommended for Early Stage)</h3>
              <p>
                The Now/Next/Later roadmap is the most practical format for startups. Instead of committing to specific dates (which are almost always wrong), it organizes work into three horizons:
              </p>
              <ul>
                <li><strong>Now:</strong> What the team is actively building in the current quarter. High confidence, detailed.</li>
                <li><strong>Next:</strong> What comes after, roughly the next 1–2 quarters. Medium confidence, somewhat defined.</li>
                <li><strong>Later:</strong> Strategic bets and big ideas for 6+ months out. Low confidence, directional only.</li>
              </ul>
              <p>
                This format is honest about uncertainty. It avoids the trap of false precision ("we'll ship the API in week 7") and gives teams the flexibility to adjust as they learn. Tools like Linear and Productboard have built-in Now/Next/Later views.
              </p>

              <h3>2. Quarterly Roadmap (Recommended for Series A+)</h3>
              <p>
                Once you have a team of 15+ and investors expecting quarterly reviews, a quarterly roadmap provides more structure. Each quarter has defined themes, measurable goals, and key deliverables. The risk: teams start optimizing for shipping items on the list rather than achieving outcomes. Mitigate this by anchoring each item to an OKR.
              </p>

              <h3>3. Goal-Based / Outcome Roadmap</h3>
              <p>
                The most mature form. Instead of listing features, the roadmap lists desired outcomes: "Reduce time-to-first-value from 14 days to 3 days by Q3." Teams are empowered to determine the best solutions. This requires high product maturity and strong cross-functional trust but produces the best results at scale. Companies like Spotify and Intercom operate this way.
              </p>

              <h3>4. Theme-Based Roadmap</h3>
              <p>
                Group work into strategic themes (e.g., "Onboarding Experience," "Enterprise Security," "API Ecosystem") without specific feature commitments. Great for sharing with customers and investors without locking into exact scope. Themes act as buckets — as priorities shift, what lives inside each bucket can change without rewriting the whole roadmap.
              </p>

              <div style={{ background: '#0a1a0f', border: '1px solid #22c55e33', borderRadius: 16, padding: '1.25rem', marginTop: '1.5rem' }}>
                <p style={{ color: '#22c55e', fontWeight: 700, marginBottom: '0.5rem' }}>Our Recommendation</p>
                <p style={{ color: '#bbb', marginBottom: 0 }}>
                  Use <strong>Now/Next/Later</strong> for internal engineering alignment, a <strong>Theme-based view</strong> for customer and investor communication, and add OKRs to both once you scale past seed stage.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="okr-framework" className="reveal" style={cardBase}>
              <h2>The OKR Framework for Product Teams</h2>
              <p>
                OKRs (Objectives and Key Results) connect your roadmap to measurable business outcomes. When used correctly, they prevent the roadmap from becoming a feature factory and keep the team focused on what actually matters.
              </p>

              <h3>OKR Structure</h3>
              <ul>
                <li><strong>Objective:</strong> A qualitative, inspiring goal. "Make onboarding delightful for new users."</li>
                <li><strong>Key Results:</strong> 3–5 measurable outcomes that prove the objective was achieved. "Reduce activation time from 14 days to 3 days." "Increase week-1 retention from 40% to 60%." "Achieve NPS of 45+ from onboarding survey."</li>
              </ul>

              <h3>Quarterly OKR Cycle</h3>
              <ol>
                <li><strong>Week 1 of quarter:</strong> Leadership sets company-level OKRs (top-down)</li>
                <li><strong>Week 2:</strong> Product teams draft team-level OKRs that support company OKRs (bottom-up)</li>
                <li><strong>Week 3:</strong> Alignment sessions — ensure no conflicts, fill coverage gaps</li>
                <li><strong>Weeks 4–12:</strong> Weekly OKR check-ins (confidence level: 0–1, not binary)</li>
                <li><strong>Final week:</strong> OKR grading (0.0–1.0), retrospective, learnings fed into next quarter</li>
              </ol>

              <h3>OKR Pitfalls</h3>
              <ul>
                <li><strong>Too many OKRs:</strong> 3 objectives maximum per team per quarter. More dilutes focus.</li>
                <li><strong>Output vs. outcome KRs:</strong> "Ship the new dashboard" is an output. "Increase dashboard daily active users by 25%" is an outcome.</li>
                <li><strong>Sandbagging:</strong> Teams that always score 1.0 are setting safe targets. Google's standard: 0.7 is success — it means you set ambitious targets.</li>
                <li><strong>Disconnected from roadmap:</strong> Every item on your roadmap should trace to at least one key result. If it doesn't, question why it's there.</li>
              </ul>

              <h3>Sample Product OKRs</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Objective</th>
                      <th style={thStyle}>Key Result</th>
                      <th style={thStyle}>Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle} rowSpan={3}>Win the SMB market</td>
                      <td style={tdStyle}>Increase SMB signups</td>
                      <td style={tdStyle}><strong style={greenText}>+40% QoQ</strong></td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>Reduce churn in under-$99 tier</td>
                      <td style={tdStyle}><strong style={greenText}>&lt;3%/month</strong></td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>SMB NPS score</td>
                      <td style={tdStyle}><strong style={greenText}>45+</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4 */}
            <div id="story-mapping" className="reveal" style={cardBase}>
              <h2>User Story Mapping</h2>
              <p>
                Story mapping is a visual technique invented by Jeff Patton that helps teams understand the user journey and identify the minimum viable scope needed to deliver value. It prevents the classic problem of building features in isolation that don't add up to a coherent experience.
              </p>

              <h3>How Story Mapping Works</h3>
              <ol>
                <li><strong>Identify user activities</strong> (horizontal axis, top row): High-level user goals, e.g., "Create an account," "Set up a project," "Invite teammates," "Generate a report."</li>
                <li><strong>Break activities into tasks</strong> (second row): Each activity decomposes into user tasks — the specific steps a user takes.</li>
                <li><strong>Add stories vertically below each task:</strong> Stories are ordered by priority — the most critical stories sit at the top.</li>
                <li><strong>Draw horizontal slices</strong> to define releases: Everything above slice 1 is your MVP. Everything between slices 1 and 2 is Version 1.1, and so on.</li>
              </ol>

              <h3>Story Mapping Example (SaaS Project Tool)</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Activity</th>
                      <th style={thStyle}>MVP Stories (Slice 1)</th>
                      <th style={thStyle}>v1.1 Stories (Slice 2)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong>Create Account</strong></td>
                      <td style={tdStyle}>Email + password signup; Email verification</td>
                      <td style={tdStyle}>Google OAuth; SSO; 2FA</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Create Project</strong></td>
                      <td style={tdStyle}>Name project; Choose template</td>
                      <td style={tdStyle}>Import from Jira; Duplicate project</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Invite Team</strong></td>
                      <td style={tdStyle}>Invite by email; Role: Admin/Member</td>
                      <td style={tdStyle}>Bulk invite; Domain-based auto-join</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Benefits of Story Mapping</h3>
              <ul>
                <li>Forces end-to-end thinking rather than feature-by-feature thinking</li>
                <li>Makes MVP scope decisions visual and collaborative — whole team can participate</li>
                <li>Naturally reveals gaps in the user journey before development starts</li>
                <li>Great for onboarding new team members to the product's user experience</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div id="prioritization" className="reveal" style={cardBase}>
              <h2>Prioritization Frameworks: RICE, ICE, and MoSCoW</h2>
              <p>
                Prioritization is the hardest part of product management. Without a framework, decisions devolve into the loudest voice in the room or the most recent customer complaint. Here are the three most widely used frameworks:
              </p>

              <h3>RICE Scoring</h3>
              <p>
                RICE was developed by Intercom and is the most rigorous quantitative prioritization method. Each feature gets a score:
              </p>
              <p style={{ background: '#111', padding: '1rem', borderRadius: 12, fontFamily: 'monospace', color: '#22c55e' }}>
                RICE Score = (Reach × Impact × Confidence) / Effort
              </p>
              <ul>
                <li><strong>Reach:</strong> How many users will this affect per quarter? (number)</li>
                <li><strong>Impact:</strong> How much will it move the target metric? (0.25 = minimal, 0.5 = low, 1 = medium, 2 = high, 3 = massive)</li>
                <li><strong>Confidence:</strong> How confident are you in your estimates? (100% = high, 80% = medium, 50% = low)</li>
                <li><strong>Effort:</strong> How many person-months of work? (number)</li>
              </ul>

              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Feature</th>
                      <th style={thStyle}>Reach</th>
                      <th style={thStyle}>Impact</th>
                      <th style={thStyle}>Confidence</th>
                      <th style={thStyle}>Effort</th>
                      <th style={thStyle}>RICE Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>Google OAuth</td>
                      <td style={tdStyle}>500</td>
                      <td style={tdStyle}>2</td>
                      <td style={tdStyle}>80%</td>
                      <td style={tdStyle}>0.5</td>
                      <td style={tdStyle}><strong style={greenText}>1,600</strong></td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>Bulk CSV Import</td>
                      <td style={tdStyle}>200</td>
                      <td style={tdStyle}>3</td>
                      <td style={tdStyle}>50%</td>
                      <td style={tdStyle}>2</td>
                      <td style={tdStyle}><strong style={greenText}>150</strong></td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>Dark Mode</td>
                      <td style={tdStyle}>1,000</td>
                      <td style={tdStyle}>0.25</td>
                      <td style={tdStyle}>100%</td>
                      <td style={tdStyle}>1</td>
                      <td style={tdStyle}><strong style={greenText}>250</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>ICE Scoring</h3>
              <p>
                A simpler alternative to RICE used by growth teams:
              </p>
              <p style={{ background: '#111', padding: '1rem', borderRadius: 12, fontFamily: 'monospace', color: '#22c55e' }}>
                ICE Score = Impact × Confidence × Ease
              </p>
              <p>
                Ease replaces Effort but is inverted — a score of 10 means very easy, 1 means very hard. ICE is faster to score and works well for growth experiments where you need rapid prioritization across many ideas.
              </p>

              <h3>MoSCoW</h3>
              <p>
                MoSCoW is a qualitative framework best used for scoping a specific release or MVP:
              </p>
              <ul>
                <li><strong>Must Have:</strong> Non-negotiable for launch. Without this, the product doesn't function or can't be shipped.</li>
                <li><strong>Should Have:</strong> High value but not blocking. Will be added soon after launch.</li>
                <li><strong>Could Have:</strong> Nice-to-have. Added if there is time and budget.</li>
                <li><strong>Won't Have (this time):</strong> Explicitly out of scope for this release. Prevents scope creep by making exclusions visible.</li>
              </ul>
              <p>
                The most important column in MoSCoW is the <strong>Won't Have</strong> list. A roadmap with no "won't haves" has no prioritization — it's just a wish list.
              </p>
            </div>

            {/* Section 6 */}
            <div id="stakeholder-alignment" className="reveal" style={cardBase}>
              <h2>Stakeholder Alignment: The Hidden Skill</h2>
              <p>
                The best product roadmap in the world is useless if stakeholders don't trust it, understand it, or feel heard in building it. Alignment is not a one-time event — it's an ongoing process.
              </p>

              <h3>Stakeholder Categories</h3>
              <ul>
                <li><strong>Executives and Board:</strong> Care about business outcomes, market positioning, and revenue impact. Show them the goal-based view.</li>
                <li><strong>Sales and Customer Success:</strong> Care about features that close deals and reduce churn. Involve them in quarterly roadmap reviews — they have the most direct customer signal.</li>
                <li><strong>Engineering:</strong> Care about technical debt, architecture quality, and realistic timelines. Give them influence over sequencing and time allocation for non-feature work.</li>
                <li><strong>Design:</strong> Care about user experience coherence. Involve design before roadmap items are scoped — not after.</li>
                <li><strong>Customers:</strong> Want to know their requests are heard. Use a public roadmap (Trello board or Productboard portal) to share the "Now/Next/Later" view without committing to dates.</li>
              </ul>

              <h3>The Roadmap Review Cadence</h3>
              <ul>
                <li><strong>Weekly:</strong> Product + Engineering sync — sprint health, blockers, scope changes</li>
                <li><strong>Monthly:</strong> Full team roadmap review — what shipped, what moved, what we learned</li>
                <li><strong>Quarterly:</strong> Strategic roadmap planning — OKR setting, prioritization framework exercise, stakeholder input gathering</li>
                <li><strong>Annually:</strong> Annual planning — 12-month directional roadmap, budget alignment, headcount planning</li>
              </ul>

              <h3>The "Three Buckets" Rule</h3>
              <p>
                A practical framework for distributing engineering capacity:
              </p>
              <ul>
                <li><strong>~60% New Features:</strong> The roadmap items — things users asked for and things that move metrics</li>
                <li><strong>~20% Tech Debt & Infrastructure:</strong> Non-negotiable if you want to maintain velocity as the product grows</li>
                <li><strong>~20% Bugs & Maintenance:</strong> Keeping the lights on and existing users happy</li>
              </ul>
              <p>
                These ratios shift by stage — earlier-stage products can push new features to 70–75%, but as the codebase ages, ignoring tech debt will halve your velocity within 18 months.
              </p>
            </div>

            {/* Section 7 */}
            <div id="roadmap-tools" className="reveal" style={cardBase}>
              <h2>Top Roadmap Tools in 2026</h2>
              <p>The tooling landscape has matured significantly. Here's a breakdown of the leading options by use case:</p>

              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Tool</th>
                      <th style={thStyle}>Best For</th>
                      <th style={thStyle}>Standout Feature</th>
                      <th style={thStyle}>Pricing (2026)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong style={greenText}>Linear</strong></td>
                      <td style={tdStyle}>Engineering-led product teams</td>
                      <td style={tdStyle}>Cycles, roadmap views, fastest UX in class</td>
                      <td style={tdStyle}>Free–$16/user/mo</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Productboard</strong></td>
                      <td style={tdStyle}>Customer feedback-driven roadmaps</td>
                      <td style={tdStyle}>Feature portal, insights aggregation</td>
                      <td style={tdStyle}>$25–$100/maker/mo</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Aha!</strong></td>
                      <td style={tdStyle}>Enterprise product management</td>
                      <td style={tdStyle}>Strategy → roadmap → features hierarchy</td>
                      <td style={tdStyle}>$59–$149/user/mo</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Notion</strong></td>
                      <td style={tdStyle}>Small teams wanting flexibility</td>
                      <td style={tdStyle}>Fully customizable, all-in-one workspace</td>
                      <td style={tdStyle}>Free–$16/user/mo</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Jira Product Discovery</strong></td>
                      <td style={tdStyle}>Teams already in Atlassian ecosystem</td>
                      <td style={tdStyle}>Native Jira integration, idea scoring</td>
                      <td style={tdStyle}>$10–$20/user/mo</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Shortcut</strong></td>
                      <td style={tdStyle}>Mid-size engineering teams</td>
                      <td style={tdStyle}>Epics, milestones, roadmap views</td>
                      <td style={tdStyle}>Free–$10/user/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Which Tool Should You Use?</h3>
              <ul>
                <li><strong>Pre-seed / 1–5 engineers:</strong> Start with Notion or Linear free tier. Do not over-invest in tooling at this stage.</li>
                <li><strong>Seed / 5–20 engineers:</strong> Linear is the consensus best-in-class choice for engineering-forward teams. Productboard if you are heavy on customer feedback loops.</li>
                <li><strong>Series A+ / 20+ engineers:</strong> Productboard or Aha! for product leadership; Linear or Jira for execution.</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div id="sprint-planning" className="reveal" style={cardBase}>
              <h2>How to Run Sprint Planning That Actually Ships</h2>
              <p>
                A great roadmap is only as good as its execution. Sprint planning is the bridge between strategic roadmap and daily engineering work. Here's how to run it effectively:
              </p>

              <h3>Pre-Sprint Preparation (Day Before Planning)</h3>
              <ul>
                <li>PM reviews backlog and ensures top 20 items are fully defined with acceptance criteria</li>
                <li>Engineering lead assesses team capacity (subtract time for meetings, on-call, holidays)</li>
                <li>Any unresolved design dependencies are flagged and resolved</li>
                <li>Previous sprint retro action items are captured and some are added to new sprint</li>
              </ul>

              <h3>Sprint Planning Meeting (2 Hours for 2-Week Sprint)</h3>
              <ol>
                <li><strong>Review sprint goal (10 min):</strong> What is the one outcome we are committing to this sprint? Link it to an OKR.</li>
                <li><strong>Capacity check (10 min):</strong> How many story points / hours does the team have available? Account for planned absences.</li>
                <li><strong>Backlog walk (60 min):</strong> PM presents top items. Engineers estimate each item. Use T-shirt sizing (XS/S/M/L/XL) or Fibonacci story points (1, 2, 3, 5, 8, 13).</li>
                <li><strong>Commit (20 min):</strong> Team selects what they can confidently commit to based on capacity. Avoid over-committing — 80% capacity utilization is healthier than 100%.</li>
                <li><strong>Break down (20 min):</strong> Committed items broken into sub-tasks and assigned.</li>
              </ol>

              <h3>Velocity and Predictability</h3>
              <p>
                Track your team's velocity (story points completed per sprint) over 6+ sprints. A healthy team shows velocity within a 15–20% variance range. Wild swings indicate estimation problems, scope changes, or team health issues that need addressing.
              </p>

              <p>
                Use your average velocity to make roadmap commitments: if your team averages 30 points per sprint and a major feature is estimated at 120 points, you know it's a 4-sprint (8-week) effort — before you commit to a launch date.
              </p>

              <h3>Definition of Done</h3>
              <p>
                Every team needs an explicit Definition of Done (DoD). At minimum: code reviewed, automated tests written and passing, deployed to staging, PM has accepted the feature against acceptance criteria, and documentation updated. Without a shared DoD, "done" means different things to different people, which creates endless "almost done" situations.
              </p>
            </div>

            {/* Section 9 */}
            <div id="common-mistakes" className="reveal" style={cardBase}>
              <h2>Common Product Roadmap Mistakes</h2>

              <h3>1. Roadmap as a Promise</h3>
              <p>
                The most damaging mistake: committing to a roadmap as a binding contract with customers, sales teams, or investors. A roadmap is a hypothesis about the best way to achieve outcomes — it will change as you learn. Be explicit about this. Use language like "we plan to explore X in Q3" rather than "we will ship X on July 15."
              </p>

              <h3>2. Feature Factory Syndrome</h3>
              <p>
                When teams measure success by features shipped rather than outcomes achieved, you get a feature factory. Symptoms: the backlog is always full, velocity is high, but key metrics don't move. The cure: remove all output metrics from your success definitions and replace them with outcome metrics only.
              </p>

              <h3>3. Ignoring Technical Debt in the Roadmap</h3>
              <p>
                Engineering teams that never get dedicated time for technical debt become progressively slower. Within 12 months, a debt-ignoring team that started at 30 points/sprint may be delivering 15. Every roadmap must explicitly allocate capacity (20% is a common target) for non-feature work.
              </p>

              <h3>4. One Roadmap for All Audiences</h3>
              <p>
                Your board doesn't need to see sprint tasks. Your engineers don't need the investor-facing narrative. Your enterprise customer doesn't need to see internal OKRs. Build audience-specific views of the same underlying roadmap — most modern tools (Productboard, Aha!) support this natively.
              </p>

              <h3>5. Not Revisiting the Roadmap When New Information Arrives</h3>
              <p>
                A competitor launches a feature that changes the market. A major customer churns over a specific missing capability. You discover that users are using the product in a completely unexpected way. These are signals to revisit your roadmap immediately — not wait until the next quarterly planning session. The fastest-moving product teams treat the roadmap as a living document that gets updated weekly, not quarterly.
              </p>

              <h3>6. Skipping User Research</h3>
              <p>
                Building a roadmap without regular user research is guessing at scale. Even 5 user interviews per month, with findings documented and shared with the full team, will dramatically improve the quality of prioritization decisions. The most common objection — "we don't have time" — is ironic, because poor research is the primary cause of building the wrong things and wasting far more time.
              </p>
            </div>

            {/* Section 10 */}
            <div id="codazz-product" className="reveal" style={{ ...cardBase, background: '#0a1a0f', border: '1px solid #22c55e44' }}>
              <h2>Product Strategy with Codazz</h2>
              <p>
                At Codazz, we work embedded with founding teams to translate vision into a structured, executable product roadmap — from the first whiteboarding session to launch and beyond. Our product strategy team has built roadmaps for SaaS platforms, fintech products, healthcare apps, and consumer marketplaces across North America, the UK, and the Middle East.
              </p>

              <h3>What We Deliver</h3>
              <ul>
                <li><strong>Product Discovery Sprint (2 weeks):</strong> User research, competitive analysis, and story mapping to define the MVP scope</li>
                <li><strong>OKR Workshop:</strong> Facilitated session to align your team on measurable product outcomes for the next 2 quarters</li>
                <li><strong>Prioritized Roadmap (Now/Next/Later):</strong> Fully documented roadmap with RICE scores for each initiative, ready for team and investor review</li>
                <li><strong>Technical Feasibility Review:</strong> Our engineering leads review the roadmap against your technical constraints and capacity</li>
                <li><strong>Sprint 0 Setup:</strong> We configure your tool of choice (Linear, Productboard, Notion) and run your first sprint planning session with your team</li>
              </ul>

              <h3>Our Philosophy</h3>
              <p>
                We believe the best product decisions are made at the intersection of user needs, business goals, and technical constraints. We don't just build what you tell us — we challenge assumptions, bring market context, and help you build the right product rather than the most obvious one.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', fontWeight: 700, borderRadius: 14, padding: '0.85rem 1.75rem', textDecoration: 'none', fontSize: '1rem' }}>
                  Start Product Discovery →
                </Link>
                <Link href="/services/product-design" style={{ background: 'transparent', color: '#22c55e', fontWeight: 600, borderRadius: 14, padding: '0.85rem 1.75rem', textDecoration: 'none', fontSize: '1rem', border: '1px solid #22c55e44' }}>
                  View Product Services
                </Link>
              </div>
            </div>

            {/* ── FAQ ── */}
            <div className="reveal" style={cardBase}>
              <h2>Frequently Asked Questions</h2>

              {[
                {
                  q: 'How far ahead should a product roadmap look?',
                  a: 'Most product teams maintain three horizons: detailed for the current quarter, directional for the next 1–2 quarters, and aspirational for 6–12 months. Anything beyond 12 months on a startup roadmap is speculation, not planning. The further out you go, the less specific and more outcome-based your roadmap should be.',
                },
                {
                  q: 'How often should I update the product roadmap?',
                  a: 'Review your roadmap monthly with your team and update it whenever significant new information arrives — a competitive launch, a major customer loss or win, a shift in company strategy, or significant new data from user research. Do not treat it as a document that only gets updated at quarterly planning.',
                },
                {
                  q: 'Should I share my product roadmap with customers?',
                  a: 'Yes — with caveats. Share a curated, theme-based view without specific dates. A public portal (Productboard, Trello, or Canny) showing what you are working on now, what\'s coming next, and what you\'ve heard builds trust with customers. Avoid committing to specific feature launch dates publicly unless you are highly confident.',
                },
                {
                  q: 'What is the difference between RICE and ICE scoring?',
                  a: 'RICE (Reach × Impact × Confidence / Effort) is more rigorous and better suited for product roadmap prioritization where you need to compare large, diverse features. ICE (Impact × Confidence × Ease) is faster and better for growth experiment prioritization where you are scoring many small experiments quickly. Use RICE for quarterly planning, ICE for growth sprint ideation.',
                },
                {
                  q: 'How do I handle when sales promises a feature to close a deal?',
                  a: 'This is one of the most common product management challenges. The solution is a pre-agreed process: Sales must submit a feature request through a formal channel (not a Slack message) with deal size and strategic context. Product reviews it against current priorities. If it genuinely warrants acceleration, it displaces something else — and that trade-off must be made explicitly and transparently with the team, not invisibly. Never add scope without removing scope.',
                },
              ].map(({ q, a }) => (
                <details key={q} style={{ borderBottom: '1px solid #1a1a1a', padding: '1rem 0' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 600, color: '#fff', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {q} <span style={greenText}>+</span>
                  </summary>
                  <p style={{ color: '#aaa', marginTop: '0.75rem', marginBottom: 0, lineHeight: 1.75 }}>{a}</p>
                </details>
              ))}
            </div>

            {/* ── Related Posts ── */}
            <div className="reveal" style={{ marginTop: '2rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1rem' }}>Related Articles</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1rem' }}>
                {relatedPosts.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={{ ...cardBase, textDecoration: 'none', display: 'block', marginBottom: 0 }}>
                    <span style={{ background: '#0d1f14', color: '#22c55e', borderRadius: 99, padding: '0.25rem 0.7rem', fontSize: '0.75rem', fontWeight: 600 }}>{p.category}</span>
                    <p style={{ color: '#fff', fontWeight: 600, margin: '0.75rem 0 0.4rem', fontSize: '0.97rem' }}>{p.title}</p>
                    <span style={mutedText}>{p.readTime} read</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Final CTA ── */}
            <div className="reveal" style={{ ...cardBase, background: 'linear-gradient(135deg,#0a1a0f,#000)', border: '1px solid #22c55e44', textAlign: 'center', padding: '3rem 2rem', marginTop: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🗺️</div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>Ready to Build a Roadmap That Ships?</h2>
              <p style={{ color: '#aaa', maxWidth: 520, margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
                From discovery to launch, Codazz helps startups and scaleups build product strategies that align teams, delight users, and drive measurable business growth.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', fontWeight: 700, borderRadius: 14, padding: '0.9rem 2rem', textDecoration: 'none', fontSize: '1.05rem' }}>
                  Start Product Discovery →
                </Link>
                <Link href="/services/product-design" style={{ background: 'transparent', color: '#22c55e', fontWeight: 600, borderRadius: 14, padding: '0.9rem 2rem', textDecoration: 'none', fontSize: '1.05rem', border: '1px solid #22c55e44' }}>
                  Product Design Services
                </Link>
              </div>
            </div>

          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
