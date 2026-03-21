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
  { id: 'market-overview', label: 'Market Overview', emoji: '📊' },
  { id: 'core-features', label: 'Core Features', emoji: '🏠' },
  { id: 'tenant-screening', label: 'Tenant Screening', emoji: '🔍' },
  { id: 'lease-management', label: 'Lease Management', emoji: '📄' },
  { id: 'rent-payment', label: 'Rent Payment', emoji: '💳' },
  { id: 'listing-search', label: 'Listing Search & MLS', emoji: '🗺️' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'proptech-trends-2026', title: 'PropTech Trends 2026: What\'s Reshaping Real Estate Tech', category: 'PropTech', readTime: '10 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '10 min' },
  { slug: 'app-maintenance-cost-guide', title: 'App Maintenance Cost Guide 2026', category: 'Business', readTime: '9 min' },
];

const faqs = [
  {
    q: 'How long does it take to build a rental property app like Zillow or Apartments.com?',
    a: 'A functional MVP with property search, tenant applications, and basic rent collection typically takes 4–6 months and costs $80K–$150K. A full platform matching Zillow\'s core feature set — MLS data integration, tenant screening, e-signature leases, ACH rent payment, maintenance tracking, and landlord analytics — takes 7–12 months and costs $150K–$350K. Enterprise platforms with white-labeling, multi-market MLS feeds, AI-powered price recommendations, and property management company (PMC) integrations take 12–24 months and cost $300K–$600K+.',
  },
  {
    q: 'How much does MLS data access cost and how do I get it?',
    a: 'MLS (Multiple Listing Service) access is controlled by local associations — there are 580+ MLSs in the USA alone. Access typically requires you to be a licensed real estate broker or to partner with one. Cost ranges from $0 (some MLSs offer free data feed access to approved tech vendors) to $2,500+/month for commercial data licenses. RESO (Real Estate Standards Organization) Web API is the modern standard. TRESTLE by CoreLogic aggregates data from 200+ MLSs under one contract, starting at approximately $500–$2,000/month depending on market coverage. Zillow and Apartments.com syndication feeds are separate from MLS and available as listing aggregator partnerships.',
  },
  {
    q: 'Should I use Stripe or Plaid for rent collection?',
    a: 'You need both, and they serve different purposes. Plaid handles bank account linking and verification — tenants connect their bank account securely via Plaid Link (OAuth-based), which verifies account ownership and provides routing/account numbers. Stripe then processes the ACH bank transfer using those verified credentials. ACH via Stripe costs $0.80 per transaction with a $5 cap, versus 2.9% + $0.30 for card payments. For a $1,500/month rent, ACH costs $0.80 while card costs $43.80. Always default to ACH for rent and offer card as a fallback with a convenience fee passed to the tenant. Total infrastructure cost at 10,000 monthly rent payments: ~$8,000/month via ACH vs. ~$438,000/month via card.',
  },
  {
    q: 'How do I handle GDPR and Canadian privacy law (PIPEDA/Bill C-27) for tenant data?',
    a: 'Tenant data is among the most sensitive personal data you can collect — it includes income, credit scores, employment history, SIN/SSN, eviction records, and rental history. For Canadian users (PIPEDA and provincial laws like Quebec Law 25): obtain explicit consent before collecting background check data, store all personal data on Canadian servers or with explicit cross-border transfer agreements, provide tenants the right to access and delete their data, and appoint a privacy officer. For GDPR (EU tenants): lawful basis for processing must be established (legitimate interest or explicit consent for each data category), data retention limits must be enforced (delete tenant applications that don\'t convert within 6–12 months), and a Data Processing Agreement (DPA) is required with TransUnion, Experian, Equifax, and Plaid. Budget $15K–$30K for legal counsel and privacy engineering during development.',
  },
  {
    q: 'What is the best mobile framework for a rental property app — React Native or Flutter?',
    a: 'React Native is the stronger choice for rental property apps for three reasons. First, the JavaScript/TypeScript ecosystem integrates more naturally with Plaid Link SDK, Stripe SDK, DocuSign SDK, and Mapbox SDK — all of which have mature React Native packages but more limited Flutter support. Second, your web platform (Next.js) shares business logic, API types, and state management patterns with React Native, reducing total development cost by 20–30%. Third, the React Native talent pool is significantly larger, which matters for ongoing hiring. Flutter is an excellent choice if you\'re starting a greenfield mobile-only product, but the PropTech ecosystem\'s SDK landscape tilts React Native.',
  },
];

export default function RentalPropertyAppDevelopmentClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('market-overview');

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = tocSections.map(s => {
        const el = document.getElementById(s.id);
        return { id: s.id, top: el ? el.getBoundingClientRect().top : 9999 };
      });
      const current = offsets.filter(o => o.top <= 160).pop();
      if (current) setActiveSection(current.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* FEATURED IMAGE */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/rental-property-app-development.jpg"
              alt="rental property app development guide 2026"
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

        {/* ARTICLE HERO */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '5px 14px', borderRadius: 100 }}>PropTech</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 21, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                18 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 900 }}>
              Rental Property App Development Guide 2026: Build Like Zillow &amp; Apartments.com
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 760, marginBottom: 48, fontWeight: 400 }}>
              From MLS data integration and TransUnion tenant screening to Plaid-powered ACH rent collection and DocuSign e-leases — the complete technical guide to building a rental property platform in 2026.
            </p>

            {/* Author + Share */}
            <div className="reveal reveal-d4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, color: '#22c55e' }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[{ label: 'Twitter', icon: '𝕏' }, { label: 'LinkedIn', icon: 'in' }].map(s => (
                  <button key={s.label} style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{ padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)', color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)', fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE BODY + SIDEBAR */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* SIDEBAR TOC — desktop sticky */}
              <aside style={{ display: 'none' }} className="blog-sidebar">
                <div style={{ position: 'sticky', top: 100, padding: '24px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Table of Contents</p>
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {tocSections.map(s => (
                      <a key={s.id} href={`#${s.id}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 10, fontSize: 13, fontWeight: activeSection === s.id ? 600 : 400, color: activeSection === s.id ? '#22c55e' : 'rgba(255,255,255,0.4)', background: activeSection === s.id ? 'rgba(34,197,94,0.06)' : 'transparent', textDecoration: 'none', transition: 'all 0.2s' }}>
                        <span style={{ fontSize: 14 }}>{s.emoji}</span>
                        {s.label}
                      </a>
                    ))}
                  </nav>
                  <div style={{ marginTop: 28, padding: '20px', borderRadius: 16, background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>Ready to Build?</p>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 16, lineHeight: 1.5 }}>Get a free project estimate for your rental platform.</p>
                    <Link href="/contact" style={{ display: 'block', textAlign: 'center', padding: '10px 16px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Get Estimate</Link>
                  </div>
                </div>
              </aside>

              <article>

                {/* MARKET OVERVIEW */}
                <div className="reveal" style={{ marginBottom: 64 }} id="market-overview">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The US Rental Market in 2026: A $2.2 Trillion Opportunity
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The US residential rental market is valued at $2.2 trillion in 2026, driven by 44 million renter households — representing 35% of all US households. An estimated 20 million individual landlords manage between 1 and 10 rental units each, forming a massively fragmented market that is largely still managed through spreadsheets, paper leases, and manual bank transfers. This is the core product-market fit opportunity for rental property software.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The residential property management software market — the platform layer capturing value from landlords and property managers — is valued at $4.8 billion in 2026 and growing at 11.4% CAGR. The market is dominated by AppFolio ($1.9B valuation), Buildium (acquired by RealPage for $580M), and Yardi (private, est. $6B revenue). The consumer-facing listing side is dominated by Zillow Group ($14B market cap) and CoStar Group (which owns Apartments.com, $32B market cap).
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    New entrants win by serving underserved segments: self-managing landlords with 1–10 units (Buildium's minimum viable customer is 150 units), short-term rental operators (Airbnb adjacents), mid-term furnished rentals (1–6 months), and student housing. Each niche has workflow-specific needs that generic platforms handle poorly.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 28 }}>
                    {[
                      { stat: '$2.2T', label: 'US Rental Market Value', color: '#22c55e' },
                      { stat: '44M', label: 'US Renter Households', color: '#3b82f6' },
                      { stat: '20M', label: 'Individual Landlords', color: '#a855f7' },
                      { stat: '11.4%', label: 'PropTech Software CAGR', color: '#f59e0b' },
                    ].map(item => (
                      <div key={item.stat} style={{ padding: '20px 24px', borderRadius: 16, background: `${item.color}08`, border: `1px solid ${item.color}20`, textAlign: 'center' }}>
                        <p style={{ fontSize: 32, fontWeight: 800, color: item.color, margin: '0 0 6px', letterSpacing: '-0.04em' }}>{item.stat}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.4 }}>{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Key Insight:</strong> 82% of independent landlords (1–4 units) still use no software at all — they collect rent by cheque, draft leases from templates, and screen tenants by calling references. This is the biggest addressable gap in the market. A $49/month SaaS tool that automates rent collection, background checks, and digital leases saves a landlord with 3 units approximately 12 hours per month and pays for itself with the first late payment fee it catches automatically.
                    </p>
                  </div>
                </div>

                {/* CORE FEATURES */}
                <div className="reveal" style={{ marginBottom: 64 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features: Tenant App vs. Landlord Dashboard
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    A rental property platform serves two fundamentally different users with opposite workflows. Tenants need a consumer-grade discovery and application experience. Landlords need a business operations dashboard. Building both well — and making them work together seamlessly — is the product design challenge that defines platforms in this space.
                  </p>

                  {[
                    {
                      panel: 'Tenant App',
                      color: '#22c55e',
                      icon: '🏠',
                      features: [
                        { name: 'Property Search & Discovery', desc: 'Filter by price, bedrooms, pet policy, move-in date, amenities, and neighborhood. Map view with listing pins. Saved search alerts when new matching listings appear. Virtual tour links and photo gallery with room labels.' },
                        { name: 'Online Rental Application', desc: 'Single-page application with autofill from profile. Employment history, income verification (Plaid income), references, co-signer support. Application status tracking — submitted, under review, approved, denied — with automated email/SMS updates.' },
                        { name: 'Online Rent Payment', desc: 'ACH bank transfer via Plaid + Stripe (lowest cost). Credit/debit card fallback. Autopay setup with advance notice before charge. Payment history and receipts. Rent payment reporting to credit bureaus (opt-in, improves tenant credit score).' },
                        { name: 'Maintenance Requests', desc: 'Photo upload, issue category (plumbing, HVAC, appliances), priority flag. Real-time status updates from landlord or property manager. Messaging thread per request. Resolution confirmation and satisfaction rating.' },
                        { name: 'Digital Lease Documents', desc: 'View and e-sign lease agreement. Countersigned copy stored in app. Move-in checklist with photo documentation. Renewal notifications 90/60/30 days before lease end. Document storage for renter\'s insurance, parking permits, pet agreements.' },
                      ],
                    },
                    {
                      panel: 'Landlord Dashboard',
                      color: '#3b82f6',
                      icon: '📋',
                      features: [
                        { name: 'Property Listing Management', desc: 'Create and publish listings with photos (S3 upload), pricing, availability, pet policy, and custom lease terms. One-click syndication to Zillow, Apartments.com, Craigslist, Facebook Marketplace, and Realtor.com. Listing performance analytics: views, inquiries, application conversion rate.' },
                        { name: 'Tenant Screening', desc: 'Automated background check order via TransUnion SmartMove or Experian. Full credit report, eviction history, criminal background, income verification. Screening cost passed to applicant ($30–$50) or absorbed by landlord. Screening results with AI-powered recommendation: Approve / Approve with Conditions / Decline.' },
                        { name: 'Lease Management', desc: 'Generate lease from state-specific template library. Customize terms, clauses, and addenda. Send for e-signature via DocuSign or HelloSign. Track signing status. Automated renewal workflow 90 days before expiration — rent increase calculator, renewal offer, tenant e-sign.' },
                        { name: 'Rent Collection & Accounting', desc: 'Rent roll dashboard: units, tenants, rent amount, due date, payment status. Automated late fee assessment after grace period. Income/expense tracking by property. Schedule E tax report export. Bank reconciliation. Multi-property P&L statements.' },
                        { name: 'Maintenance Coordination', desc: 'Receive and triage tenant maintenance requests. Assign to in-house staff or vendor marketplace. Cost tracking per repair. Preventive maintenance schedules (HVAC filter changes, annual inspections). Photo documentation for move-out deposit deductions.' },
                      ],
                    },
                  ].map(panel => (
                    <div key={panel.panel} style={{ padding: '28px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderLeft: `3px solid ${panel.color}`, marginBottom: 24 }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: panel.color, marginBottom: 20 }}>{panel.icon} {panel.panel}</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 12 }}>
                        {panel.features.map(item => (
                          <div key={item.name} style={{ padding: '14px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                            <p style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.name}</p>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.55 }}>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* TENANT SCREENING */}
                <div className="reveal" style={{ marginBottom: 64 }} id="tenant-screening">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Tenant Screening: APIs, Credit Thresholds & Compliance
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Tenant screening is the highest-liability feature in a rental platform. A bad screening decision costs a landlord $3,500–$10,000 in eviction costs and 3–6 months of lost rent. A discriminatory screening process exposes you and your landlord customers to Fair Housing Act violations with fines up to $16,000 for a first offense. Getting the API integration, data handling, and decision logic right is non-negotiable.
                  </p>

                  <div style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
                    {[
                      {
                        provider: 'TransUnion SmartMove',
                        color: '#22c55e',
                        type: 'Recommended for consumer platforms',
                        cost: '$25–$40 per screening',
                        features: ['Full credit report (TransUnion)', 'Criminal background check (national)', 'Eviction history (LexisNexis, 50-state)', 'Income insights', 'ResidentScore (proprietary eviction risk score 350–850)', 'FCRA-compliant adverse action notices'],
                        integration: 'REST API with OAuth 2.0. Screening request → applicant consent flow → results webhook. Landlord sees ResidentScore + recommendation. Full report available in PDF.',
                      },
                      {
                        provider: 'Experian Connect',
                        color: '#3b82f6',
                        type: 'Best for income + credit focus',
                        cost: '$30–$45 per screening',
                        features: ['Experian credit report + FICO Score', 'Income verification (bank data via Experian)', 'Employment verification', 'Eviction history', 'Identity verification', 'Experian RentBureau reporting (bonus: reports rent payment)'],
                        integration: 'Experian Decisioning-as-a-Service API. Tenant-initiated consent flow. Returns structured JSON with tradelines, score, and income estimates.',
                      },
                      {
                        provider: 'Plaid Income',
                        color: '#a855f7',
                        type: 'Income verification addon',
                        cost: '$0.10–$1.50 per connection',
                        features: ['Bank-verified income (payroll direct deposits)', '3–24 months of income history', 'Employment status verification', 'Income stability score', 'Works alongside any screening provider', 'Gig economy income support'],
                        integration: 'Plaid Link SDK (OAuth bank connection). Returns PaystubBreakdown and IncomeStream objects. Map to income-to-rent ratio (standard threshold: gross income ≥ 3× monthly rent).',
                      },
                    ].map(item => (
                      <div key={item.provider} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}20` }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                          <div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: item.color, margin: '0 0 4px' }}>{item.provider}</h3>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>{item.type}</p>
                          </div>
                          <span style={{ padding: '4px 12px', borderRadius: 100, background: `${item.color}12`, color: item.color, fontSize: 12, fontWeight: 600 }}>{item.cost}</span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                          {item.features.map(f => (
                            <span key={f} style={{ padding: '3px 10px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{f}</span>
                          ))}
                        </div>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>{item.integration}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '24px', borderRadius: 16, background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.15)', marginBottom: 20 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: '#ef4444', margin: '0 0 12px' }}>Fair Housing Act Compliance Requirements</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 10 }}>
                      {[
                        'Apply identical screening criteria to ALL applicants — no case-by-case exceptions that could suggest protected class discrimination.',
                        'Document your criteria publicly (credit score ≥ 620, income ≥ 3× rent, no evictions within 5 years) and apply them uniformly.',
                        'Adverse action notices must be sent to declined applicants (FCRA requirement) — your screening provider\'s API returns a pre-formatted notice.',
                        'Criminal screening: HUD guidelines prohibit blanket criminal bans. Individualized assessment required for older, minor, or non-violent records.',
                        'Source of income: 23 US states + DC prohibit refusing applicants who use housing vouchers (Section 8). Screen your markets before implementing income-type filters.',
                      ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                            <span style={{ fontSize: 10, color: '#ef4444', fontWeight: 700 }}>!</span>
                          </div>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.55 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* LEASE MANAGEMENT */}
                <div className="reveal" style={{ marginBottom: 64 }} id="lease-management">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Digital Lease Management: E-Signature, Templates & Renewals
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A digital lease workflow replaces the landlord's most time-consuming manual process: drafting a lease, emailing a PDF, chasing signatures, and filing the signed copy. The e-signature market is dominated by DocuSign (holding 60%+ share) and HelloSign (acquired by Dropbox, rebranded Dropbox Sign). Both have REST APIs suitable for lease workflows, but they differ meaningfully in cost and feature set at scale.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 28 }}>
                    {[
                      {
                        name: 'DocuSign eSignature API',
                        color: '#22c55e',
                        pros: ['Industry standard — tenants recognize and trust the interface', 'Advanced features: in-person signing, ID verification, notarization', 'Audit trail (certificate of completion) legally defensible in all 50 states', 'Pre-built React component for easy embed'],
                        cons: ['Expensive at scale: $25–$65/user/month + per-envelope fees', 'Enterprise plans required for API access', 'Overkill for simple residential leases'],
                        bestFor: 'Commercial leases, multi-family portfolios, property management companies',
                      },
                      {
                        name: 'Dropbox Sign (HelloSign) API',
                        color: '#3b82f6',
                        pros: ['Much more affordable: $15–$25/month or pay-per-signature', 'Clean API with React/Node.js SDKs', 'Embedded signing without leaving your platform', 'Template library with field mapping for lease variables'],
                        cons: ['Fewer advanced features than DocuSign', 'Less brand recognition with older tenants', 'Dropbox acquisition created some product uncertainty'],
                        bestFor: 'Residential landlords, small property managers, consumer-first apps',
                      },
                    ].map(item => (
                      <div key={item.name} style={{ padding: '24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}20` }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: item.color, margin: '0 0 16px' }}>{item.name}</h3>
                        <div style={{ marginBottom: 12 }}>
                          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>Pros</p>
                          {item.pros.map(p => (
                            <div key={p} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                              <span style={{ color: item.color, fontSize: 12, flexShrink: 0 }}>✓</span>
                              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{p}</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ marginBottom: 12 }}>
                          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>Cons</p>
                          {item.cons.map(c => (
                            <div key={c} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                              <span style={{ color: 'rgba(239,68,68,0.7)', fontSize: 12, flexShrink: 0 }}>✗</span>
                              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{c}</span>
                            </div>
                          ))}
                        </div>
                        <p style={{ fontSize: 11, color: `${item.color}99`, fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>Best for: {item.bestFor}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 20 }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 16px' }}>State-Specific Lease Template Library</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16 }}>
                      Landlord-tenant law is governed at the state level in the USA and at the provincial level in Canada — and the differences are enormous. A lease valid in Texas is missing legally required disclosures for California. Building a template library requires attorney review for each jurisdiction you serve. Key jurisdiction-specific variables include:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
                      {[
                        { jurisdiction: 'California', notes: 'AB 1482 rent control disclosures, mold disclosure required, Prop 65 notice, bed bug disclosure, 3-day / 30-day / 60-day notice rules' },
                        { jurisdiction: 'New York', notes: 'Rent stabilization status disclosure, Good Cause Eviction notice (NYC), security deposit max = 1 month, required window guard notice' },
                        { jurisdiction: 'Texas', notes: 'No statewide rent control, security deposit max = none, landlord right-to-enter 24hr notice not required by statute but best practice, military clause required' },
                        { jurisdiction: 'Ontario, Canada', notes: 'Standard Lease Form mandatory (Form LTB-L1), AGI (above guideline increase) rules, Landlord Tenant Board process, 24hr notice before entry required' },
                        { jurisdiction: 'Florida', notes: 'Security deposit held in separate account or surety bond, disclosure of banking institution required, 7-day notice to cure, 3-day notice to pay' },
                        { jurisdiction: 'British Columbia, Canada', notes: 'RTB Residential Tenancy Agreement, 2-month notice for end of tenancy, 24hr entry notice, pet damage deposit max = 0.5 month rent' },
                      ].map(j => (
                        <div key={j.jurisdiction} style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.08)' }}>
                          <p style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', margin: '0 0 6px' }}>{j.jurisdiction}</p>
                          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.55 }}>{j.notes}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RENT PAYMENT */}
                <div className="reveal" style={{ marginBottom: 64 }} id="rent-payment">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Rent Payment Infrastructure: Stripe + Plaid ACH
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Rent payment is the most financially critical feature in your platform — and the most misunderstood by developers. The common mistake is integrating Stripe's standard card payment flow and calling it done. Card payments for rent cost landlords or tenants 2.9% + $0.30 per transaction. On a $2,000/month rent, that's $58.30 per payment, or $699.60/year. ACH bank transfer via Stripe costs $0.80 per transaction with a $5 cap — saving $57.50 per payment. At scale, this difference defines whether your platform is economically viable.
                  </p>

                  <div style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 28 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>ACH Payment Architecture</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
                      {['Tenant Bank Account', '→', 'Plaid Link (OAuth)', '→', 'Stripe ACH Pull', '→', 'Stripe Platform Account', '→', 'Landlord Payout'].map((node, i) => (
                        node === '→'
                          ? <span key={i} style={{ color: 'rgba(255,255,255,0.2)', fontSize: 18 }}>→</span>
                          : <div key={i} style={{ padding: '8px 14px', borderRadius: 8, background: i === 0 ? 'rgba(59,130,246,0.1)' : i === 8 ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.04)', border: `1px solid ${i === 0 ? 'rgba(59,130,246,0.25)' : i === 8 ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.08)'}`, fontSize: 11, fontWeight: 600, color: i === 0 ? '#3b82f6' : i === 8 ? '#22c55e' : 'rgba(255,255,255,0.7)', textAlign: 'center' }}>{node}</div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
                    {[
                      {
                        title: 'Plaid Link for Bank Account Verification',
                        color: '#22c55e',
                        desc: 'Plaid Link is an OAuth-based SDK that lets tenants authenticate their bank account directly with their bank (supports 12,000+ US banks). The tenant sees their bank\'s own login interface, enters credentials, and Plaid returns a processor_token that Stripe can use for ACH debits — without your platform ever seeing bank credentials.',
                        detail: 'Integration: Embed Plaid Link SDK (React component). On success, exchange public_token for access_token (server-side). Create a Stripe customer with plaid_bank_account_token. Enable ACH debits. Plaid cost: $0.30–$1.50 per successful bank link. Plaid Income addon: $0.10–$1.50 per income verification.',
                      },
                      {
                        title: 'Stripe ACH Direct Debit (us_bank_account)',
                        color: '#3b82f6',
                        desc: 'Stripe processes ACH pull payments — debiting the tenant\'s bank account on your schedule. Set up automated rent collection with Stripe Billing: create a subscription with monthly billing, $0.80/transaction fee (capped at $5), 2-5 business day settlement to landlord. Failed payment retry logic and dunning emails included.',
                        detail: 'Use Stripe Connect (Express or Custom account) to route payments from tenant directly to landlord minus your platform fee. Example: tenant pays $1,500 rent → Stripe charges $0.80 → $1,499.20 to landlord → platform takes $5 service fee → landlord receives $1,494.20. Clear fee disclosure required for Regulation E compliance.',
                      },
                      {
                        title: 'Automated Late Fees',
                        color: '#f59e0b',
                        desc: 'Automatically assess late fees after the grace period (typically 3–5 days post-due-date). Create a Stripe Invoice for the late fee amount and charge the same bank account. Late fee amounts are state-regulated: California caps at $35 or 3% of rent (whichever is greater), Texas allows up to 12% of monthly rent, Ontario (Canada) prohibits late fees entirely.',
                        detail: 'Use a cron job (daily at midnight UTC) to check for outstanding rent invoices past grace period. Create invoice, attempt charge, send SMS/email notification via Twilio/SendGrid. Log all attempts for audit trail. Provide landlord override to waive fee.',
                      },
                      {
                        title: 'Rent Payment Credit Reporting (Experian RentBureau)',
                        color: '#a855f7',
                        desc: 'A powerful tenant acquisition feature: opt-in rent payment reporting to Experian RentBureau. On-time rent payments are reported monthly and appear on the tenant\'s Experian credit report, potentially raising their credit score by 20–100 points over 12 months. This is a meaningful differentiator — Zillow and most competitors do not include this.',
                        detail: 'Experian RentBureau requires a bulk reporting contract ($200–$500/month minimum depending on volume). Report monthly via secure SFTP file upload in Metro 2 format. Tenant opt-in consent form must clearly explain what will be reported and how to opt out. Experian requires minimum 10 active reporting accounts.',
                      },
                    ].map(item => (
                      <div key={item.title} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderLeft: `3px solid ${item.color}` }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{item.title}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
                        <p style={{ fontSize: 12, color: `${item.color}99`, lineHeight: 1.6, margin: 0, padding: '10px 14px', borderRadius: 8, background: `${item.color}06`, border: `1px solid ${item.color}15` }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LISTING SEARCH & MLS */}
                <div className="reveal" style={{ marginBottom: 64 }} id="listing-search">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Listing Search, MLS Integration & Map-Based Discovery
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Property search is the tenant-facing centerpiece of your platform. Two fundamentally different approaches exist: build your own listing inventory (landlords post directly to your platform), or aggregate listings from MLS feeds. Each has very different technical, legal, and business model implications.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 28 }}>
                    {[
                      {
                        approach: 'Own Listing Inventory',
                        color: '#22c55e',
                        how: 'Landlords list directly on your platform. You own the data.',
                        pros: ['Full control of data quality', 'No MLS licensing complexity', 'Landlord relationship = monetization opportunity', 'Global scalability'],
                        cons: ['Cold start problem — no listings = no tenants = no landlords', 'Requires marketing to landlords', 'Thin inventory in early markets'],
                      },
                      {
                        approach: 'MLS/RETS Data Feed',
                        color: '#3b82f6',
                        how: 'Aggregate listings from local MLS associations. RESO Web API is the modern standard (replacing RETS).',
                        pros: ['Instant listing inventory in licensed markets', 'Professional-grade listing data with photos', 'Aligns with agent/broker workflows'],
                        cons: ['580+ individual US MLSs to negotiate separately', 'TRESTLE aggregates 200+ but still incomplete', 'MLS data typically covers for-sale more than for-rent', 'Annual licensing fees per MLS'],
                      },
                      {
                        approach: 'Zillow / Apartments.com Syndication',
                        color: '#a855f7',
                        how: 'Apply to be a listing syndication partner. Receive feed of listings aggregated from participating landlords.',
                        pros: ['Massive inventory instantly', 'No per-MLS negotiation', 'Rental-specific inventory (not just for-sale)'],
                        cons: ['Must meet Zillow\'s/CoStar\'s partnership criteria', 'Data restrictions on how listings can be displayed', 'Dependency on partner relationship continuity', 'No exclusive inventory'],
                      },
                    ].map(item => (
                      <div key={item.approach} style={{ padding: '24px', borderRadius: 16, background: `${item.color}06`, border: `1px solid ${item.color}20` }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: item.color, margin: '0 0 8px' }}>{item.approach}</h3>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: '0 0 14px', fontStyle: 'italic' }}>{item.how}</p>
                        <div style={{ marginBottom: 10 }}>
                          {item.pros.map(p => <div key={p} style={{ display: 'flex', gap: 8, marginBottom: 5 }}><span style={{ color: item.color, fontSize: 11 }}>+</span><span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{p}</span></div>)}
                        </div>
                        <div>
                          {item.cons.map(c => <div key={c} style={{ display: 'flex', gap: 8, marginBottom: 5 }}><span style={{ color: 'rgba(239,68,68,0.6)', fontSize: 11 }}>−</span><span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>{c}</span></div>)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gap: 16 }}>
                    <div style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 16px' }}>Search Infrastructure: Algolia + PostGIS + Mapbox</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
                        {[
                          { tech: 'Algolia Search', desc: 'Full-text search with typo tolerance, faceted filtering (price range, bedrooms, pet policy, amenities), and sub-100ms response times. Sync listings to Algolia index via webhook. InstantSearch.js React component for frontend. Cost: $1/1,000 searches at scale.' },
                          { tech: 'PostgreSQL + PostGIS', desc: 'Primary database for listing data with geospatial extensions. PostGIS enables radius search (all listings within 5km of a point), polygon search (draw a shape on map), and nearest-neighbor queries. ST_DWithin for radius, ST_Within for polygon search.' },
                          { tech: 'Mapbox GL JS', desc: 'Map-based listing discovery with clustering (group nearby listings at zoom-out), custom listing markers with price labels, and draw-a-search-area polygon tool. Mapbox is significantly cheaper than Google Maps at scale ($0.50/1K tile loads vs. $7/1K for Google Maps). Mapbox Geocoding API for address autocomplete.' },
                          { tech: 'Geofencing Search', desc: 'Allow tenants to search by commute time rather than distance — "show me apartments within 30 minutes of [workplace address]". Implement with Mapbox Isochrone API (returns a polygon of areas reachable within X minutes by transit/car/walking). Overlay isochrone polygon on listing map.' },
                        ].map(item => (
                          <div key={item.tech} style={{ padding: '14px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <p style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', margin: '0 0 6px' }}>{item.tech}</p>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.55 }}>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* TECH STACK */}
                <div className="reveal" style={{ marginBottom: 64 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack for a Rental Property Platform
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    This stack is optimized for a team of 3–8 developers building a production-grade rental platform over 6–18 months. It prioritizes JavaScript/TypeScript across the stack for shared code and a smaller hiring surface, with best-in-class third-party APIs for high-liability features (payments, screening, legal).
                  </p>

                  <div style={{ display: 'grid', gap: 12, marginBottom: 28 }}>
                    {[
                      { category: 'Mobile App', color: '#22c55e', items: [{ name: 'React Native + Expo', purpose: 'iOS and Android from one codebase. Expo managed workflow for OTA updates. expo-location for GPS (maintenance visit verification). expo-camera for property photo upload. React Navigation for routing.' }] },
                      { category: 'Web Platform', color: '#3b82f6', items: [{ name: 'Next.js 15 (App Router)', purpose: 'Public listing pages with SSG/ISR for SEO. Landlord dashboard with server-side rendering. API Routes for backend-for-frontend pattern. next/image for optimized property photos.' }] },
                      { category: 'Backend API', color: '#a855f7', items: [{ name: 'Node.js + Express + TypeScript', purpose: 'RESTful API with JWT authentication. Webhook handlers for Stripe, Plaid, DocuSign, and TransUnion events. Background jobs (Bull/BullMQ + Redis) for scheduled rent charges, late fee assessment, and lease renewal reminders.' }] },
                      { category: 'Database', color: '#f59e0b', items: [{ name: 'PostgreSQL + PostGIS', purpose: 'Primary relational database. PostGIS extension for geospatial listing queries. JSON columns for flexible property attribute storage (custom amenities, appliance lists). Prisma ORM for type-safe queries.' }] },
                      { category: 'Caching & Queues', color: '#06b6d4', items: [{ name: 'Redis (Upstash or AWS ElastiCache)', purpose: 'Session storage, rate limiting, and job queues (Bull). Cache Mapbox geocoding results (24hr TTL). Cache listing search results (5-min TTL). Cache tenant screening status to avoid duplicate API calls.' }] },
                      { category: 'File Storage', color: '#ec4899', items: [{ name: 'AWS S3 + CloudFront', purpose: 'Property photos, lease PDFs, screening reports, move-in/move-out inspection photos. Pre-signed upload URLs for direct browser-to-S3 upload (never route large files through your server). CloudFront CDN for fast global photo delivery.' }] },
                      { category: 'Payments', color: '#22c55e', items: [{ name: 'Stripe + Plaid', purpose: 'Stripe Connect for landlord payouts + platform fee collection. Stripe Billing for recurring rent subscriptions. Stripe Invoicing for late fees. Plaid Link for bank account verification. Plaid Income for income verification.' }] },
                      { category: 'Communications', color: '#3b82f6', items: [{ name: 'Twilio + SendGrid', purpose: 'Twilio SMS for rent due reminders, maintenance request updates, lease renewal nudges, and 2FA. SendGrid transactional email for application status updates, payment receipts, late notices, and welcome sequences.' }] },
                      { category: 'E-Signature', color: '#a855f7', items: [{ name: 'Dropbox Sign (HelloSign) API', purpose: 'Embedded e-signature for lease agreements. Template-based lease generation with variable fields (tenant name, rent amount, lease dates, custom clauses). Webhook for signing completion events.' }] },
                      { category: 'Search', color: '#f59e0b', items: [{ name: 'Algolia + Mapbox', purpose: 'Algolia for full-text listing search with faceted filters. Mapbox GL JS for map-based discovery, Mapbox Geocoding for address search, Mapbox Isochrone API for commute-time search.' }] },
                    ].map(row => (
                      <div key={row.category} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: '140px 1fr', gap: 16, alignItems: 'start' }}>
                        <div>
                          <span style={{ padding: '3px 10px', borderRadius: 6, background: `${row.color}12`, color: row.color, fontSize: 11, fontWeight: 700 }}>{row.category}</span>
                        </div>
                        {row.items.map(item => (
                          <div key={item.name}>
                            <p style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.name}</p>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.55 }}>{item.purpose}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* COST BREAKDOWN */}
                <div className="reveal" style={{ marginBottom: 64 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: MVP to Enterprise
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Rental platform costs vary enormously based on feature scope, MLS integration complexity, jurisdiction coverage, and team location. The ranges below assume a North American development team (Canada, USA) with senior-to-mid experience. Teams in Codazz's model — Canada + India hybrid — typically deliver the same scope at 35–45% lower cost than a fully North American team.
                  </p>

                  <div style={{ overflowX: 'auto', marginBottom: 28 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                      <thead>
                        <tr>
                          {['Tier', 'Budget', 'Timeline', 'What\'s Included'].map(h => (
                            <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.06)', whiteSpace: 'nowrap' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            tier: 'MVP',
                            color: '#22c55e',
                            budget: '$80K – $150K',
                            timeline: '4–6 months',
                            included: 'Landlord listing creation, tenant search + inquiry, basic application form, Stripe payment (card or ACH), TransUnion screening (1 market), Dropbox Sign leases, maintenance requests, email/SMS notifications, mobile app (iOS + Android), Next.js web dashboard',
                          },
                          {
                            tier: 'Full Platform',
                            color: '#3b82f6',
                            budget: '$150K – $350K',
                            timeline: '7–12 months',
                            included: 'Everything in MVP + Plaid income verification, Algolia search + Mapbox map view + isochrone search, state-specific lease template library (10 states), automated late fees, lease renewal workflows, landlord accounting (Schedule E export), vendor/contractor marketplace, multi-property dashboard, property manager team accounts, Experian rent reporting',
                          },
                          {
                            tier: 'Enterprise',
                            color: '#a855f7',
                            budget: '$300K – $600K+',
                            timeline: '12–24 months',
                            included: 'Everything in Full Platform + TRESTLE/MLS data feed integration, AI-powered pricing recommendations, white-label platform (property management company branding), multi-market expansion (Canada + US), ERP integrations (Yardi, AppFolio API), advanced analytics + BI dashboard, inspection workflow app, utility management, multi-currency rent collection, SOC 2 Type II certification',
                          },
                        ].map((row, i) => (
                          <tr key={row.tier} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                            <td style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                              <span style={{ padding: '4px 10px', borderRadius: 6, background: `${row.color}12`, color: row.color, fontSize: 12, fontWeight: 700 }}>{row.tier}</span>
                            </td>
                            <td style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ffffff', fontWeight: 700, whiteSpace: 'nowrap' }}>{row.budget}</td>
                            <td style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>{row.timeline}</td>
                            <td style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.45)', fontSize: 12, lineHeight: 1.6 }}>{row.included}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
                    {[
                      { label: 'MLS/TRESTLE Licensing', range: '$500–$2,000/mo', note: 'Per-market MLS data feed access. TRESTLE aggregates 200+ MLSs but still requires market-specific agreements.' },
                      { label: 'TransUnion SmartMove', range: '$25–$40/screening', note: 'Per-screening cost. Often passed to tenant applicants as a screening fee.' },
                      { label: 'Stripe + Plaid (monthly)', range: '$0.80/payment + $1.50/bank link', note: 'At 1,000 rent payments/mo: ~$800 in payment fees. Plaid bank links: ~$1,500 for 1,000 new tenants.' },
                      { label: 'Mapbox (monthly)', range: '$0–$500/mo', note: '50K free map loads/month. $0.50/1K loads above that. 1M loads/month = $475/mo.' },
                      { label: 'Algolia Search', range: '$1/1K searches', note: '10K searches/day = ~$300/month. Enterprise contracts available at scale.' },
                      { label: 'Dropbox Sign / DocuSign', range: '$15–$65/user/mo', note: 'Or $0.50–$1.50 per envelope at lower volume. Negotiate envelope-based pricing at >500 leases/month.' },
                    ].map(item => (
                      <div key={item.label} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.label}</p>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', margin: '0 0 6px' }}>{item.range}</p>
                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.5 }}>{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 64 }} id="faq">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 28 }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, textAlign: 'left' }}
                        >
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                          <span style={{ fontSize: 22, color: '#22c55e', flexShrink: 0, lineHeight: 1, fontWeight: 300 }}>{openFaq === i ? '×' : '+'}</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="reveal" style={{ marginBottom: 64 }}>
                  <div style={{ padding: 'clamp(36px, 5vw, 56px)', borderRadius: 28, background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.03) 100%)', border: '1px solid rgba(34,197,94,0.15)', textAlign: 'center' }}>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>Ready to Build</p>
                    <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.2 }}>
                      Build Your Rental Platform
                    </h2>
                    <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 520, margin: '0 auto 32px' }}>
                      Codazz builds rental property platforms with MLS integration, Plaid-powered ACH rent collection, tenant screening, and digital leases. Based in Edmonton + Chandigarh — delivering North American quality at sustainable cost.
                    </p>
                    <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px', borderRadius: 100, background: '#22c55e', color: '#000000', fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}>
                      Get a Free Estimate
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>

                {/* RELATED POSTS */}
                <div className="reveal">
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 20 }}>Related Articles</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
                    {relatedPosts.map(post => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} style={{ padding: '20px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none', display: 'block', transition: 'border-color 0.2s' }}>
                        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 8, display: 'block' }}>{post.category} · {post.readTime}</span>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0, lineHeight: 1.4 }}>{post.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>

              </article>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
