'use client';
import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const tocSections = [
  { id: 'what-is-multitenancy', label: 'What Is Multi-Tenancy?' },
  { id: 'tenancy-models', label: 'Tenancy Models Compared' },
  { id: 'silo-model', label: 'Silo Model (DB per Tenant)' },
  { id: 'pool-model', label: 'Pool Model (Shared DB + RLS)' },
  { id: 'bridge-model', label: 'Bridge Model (Schema per Tenant)' },
  { id: 'kubernetes-isolation', label: 'Kubernetes Isolation' },
  { id: 'tenant-onboarding', label: 'Automated Onboarding' },
  { id: 'compliance', label: 'Compliance & Data Isolation' },
  { id: 'billing', label: 'Per-Tenant Billing (Stripe)' },
  { id: 'faq', label: 'FAQ' },
];

const relatedPosts = [
  {
    title: 'SaaS Pricing Strategies 2026',
    href: '/blog/saas-pricing-strategies-2026',
    desc: 'Usage-based, seat-based, and credit models for SaaS products.',
  },
  {
    title: 'Subscription Billing Guide 2026',
    href: '/blog/subscription-billing-guide-2026',
    desc: 'Stripe, Chargebee, and Paddle compared for recurring billing.',
  },
  {
    title: 'API Rate Limiting Guide',
    href: '/blog/api-rate-limiting-guide',
    desc: 'Token bucket, sliding window, and Redis-based rate limiting strategies.',
  },
];

const G = '#22c55e';

export default function PageClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('what-is-multitenancy');
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map((s) => document.getElementById(s.id));
      let current = tocSections[0].id;
      sections.forEach((section) => {
        if (section && window.scrollY >= section.offsetTop - 160) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setTocOpen(false);
  };

  return (
    <div ref={pageRef} style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: '120px', paddingBottom: '80px', overflow: 'hidden' }}>
        <HeroBackground />
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <span style={{ background: 'rgba(34,197,94,0.12)', color: G, border: '1px solid rgba(34,197,94,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '13px', fontWeight: 600 }}>Architecture</span>
              <span style={{ background: 'rgba(34,197,94,0.12)', color: G, border: '1px solid rgba(34,197,94,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '13px', fontWeight: 600 }}>SaaS</span>
              <span style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', borderRadius: '20px', padding: '4px 14px', fontSize: '13px' }}>March 2026 · 18 min read</span>
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Multi-Tenant Architecture Guide 2026:{' '}
              <span style={{ color: G }}>Build Scalable SaaS</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '720px' }}>
              Everything engineering teams need to choose, implement, and operate a multi-tenant SaaS platform — from database isolation strategies to Kubernetes namespaces, compliance, and per-tenant billing.
            </p>
          </div>
        </div>
      </section>

      {/* Body: TOC + Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: '240px 1fr', gap: '48px', alignItems: 'start' }}>

        {/* Sidebar TOC */}
        <aside style={{ position: 'sticky', top: '100px' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>Table of Contents</p>
            {tocSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                  padding: '7px 10px', borderRadius: '6px', fontSize: '13px', marginBottom: '2px',
                  color: activeSection === s.id ? G : 'rgba(255,255,255,0.55)',
                  background: activeSection === s.id ? 'rgba(34,197,94,0.08)' : 'transparent',
                  fontWeight: activeSection === s.id ? 600 : 400,
                  transition: 'all 0.2s',
                } as React.CSSProperties}
              >
                {s.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main>

          {/* ── SECTION 1: What Is Multi-Tenancy ── */}
          <section id="what-is-multitenancy" style={{ marginBottom: '72px' }}>
            <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
              <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.01em' }}>
                What Is Multi-Tenancy?
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '16px' }}>
                Multi-tenancy is an architecture where a single instance of an application serves multiple customers — each called a <strong style={{ color: '#fff' }}>tenant</strong>. The customers share the same underlying infrastructure (compute, database, storage, networking), yet each experiences the platform as if it were their own dedicated environment.
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '16px' }}>
                The <strong style={{ color: '#fff' }}>isolation spectrum</strong> runs from <em>shared everything</em> (all tenants in one database table, lowest cost, highest blast radius) to <em>dedicated everything</em> (each tenant gets their own servers and database, highest cost, maximum isolation). Most SaaS platforms land somewhere in between, choosing isolation at the database, schema, or application layer.
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '28px' }}>
                SaaS businesses adopt multi-tenancy because it dramatically reduces cost — you run one fleet of servers instead of N. Updates are centralized: deploy once, all tenants get the fix. Observability is unified. Onboarding a new tenant is a database record, not a new cloud deployment. The challenge is ensuring tenant data never crosses boundaries — a data leak is both a security incident and an existential threat to customer trust.
              </p>

              {/* Stat Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '8px' }}>
                {[
                  { stat: '60–80%', label: 'Infrastructure cost reduction vs dedicated deployments at scale' },
                  { stat: '< 5 min', label: 'Tenant onboarding time with automated provisioning pipelines' },
                  { stat: '99.99%', label: 'Uptime SLA achievable with multi-region multi-tenant Kubernetes' },
                  { stat: '10,000+', label: 'Tenants served by a single well-tuned PostgreSQL cluster (pool model)' },
                ].map((card) => (
                  <div key={card.stat} style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.18)', borderRadius: '12px', padding: '24px' }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: G, marginBottom: '6px' }}>{card.stat}</div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{card.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 2: Tenancy Models ── */}
          <section id="tenancy-models" style={{ marginBottom: '72px' }}>
            <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
              <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.01em' }}>Tenancy Models Compared</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '28px' }}>
                Three primary models dominate SaaS architecture decisions. Choosing the wrong one early is painful to reverse — pick based on compliance requirements, expected tenant count, and engineering capacity.
              </p>
              <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ background: 'rgba(34,197,94,0.08)' }}>
                      {['Model', 'DB Isolation', 'Cost', 'Compliance Fit', 'Migration Difficulty', 'Best For'].map((h) => (
                        <th key={h} style={{ padding: '14px 16px', textAlign: 'left', color: G, fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)', whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        model: 'Silo (DB per tenant)',
                        isolation: 'Highest — separate DB instance',
                        cost: 'Highest ($$$)',
                        compliance: 'Excellent — HIPAA, PCI DSS, SOC 2',
                        migration: 'Complex — N migrations to run',
                        best: 'Enterprise, healthcare, fintech',
                      },
                      {
                        model: 'Pool (Shared DB + RLS)',
                        isolation: 'Application-enforced row-level',
                        cost: 'Lowest ($)',
                        compliance: 'Adequate — needs RLS audit',
                        migration: 'Simple — one migration run',
                        best: 'SMB SaaS, 1,000+ tenants, dev tools',
                      },
                      {
                        model: 'Bridge (Schema per tenant)',
                        isolation: 'Schema-level (PostgreSQL)',
                        cost: 'Medium ($$)',
                        compliance: 'Good — schema can be dumped cleanly',
                        migration: 'Medium — N schemas, one runner',
                        best: 'Mid-market SaaS, < 5,000 tenants',
                      },
                    ].map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '14px 16px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>{row.model}</td>
                        <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.65)' }}>{row.isolation}</td>
                        <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap' }}>{row.cost}</td>
                        <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.65)' }}>{row.compliance}</td>
                        <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.65)' }}>{row.migration}</td>
                        <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.65)' }}>{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── SECTION 3: Silo Model ── */}
          <section id="silo-model" style={{ marginBottom: '72px' }}>
            <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
              <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.01em' }}>Silo Model: Database per Tenant</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '16px' }}>
                In the Silo model each tenant gets a physically isolated database instance. There is zero risk of data bleed between tenants at the query layer — a misconfigured ORM query simply cannot reach another tenant's data.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px', marginTop: '28px' }}>When to Use Silo</h3>
              <ul style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '24px', fontSize: '15px' }}>
                <li>Customers require HIPAA Business Associate Agreements (BAA) — PHI must be isolatable</li>
                <li>PCI DSS scope — cardholder data must never share storage with other entities</li>
                <li>Enterprise contracts that mandate dedicated database clauses</li>
                <li>SOC 2 Type II auditors expect demonstrable logical or physical separation</li>
                <li>Tenants have vastly different load profiles (one tenant should not starve another)</li>
              </ul>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Connection Pooling with PgBouncer</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: '16px' }}>
                At 100 tenants you have 100 database endpoints. Your application cannot open a persistent connection to each — PostgreSQL's connection limit becomes a ceiling fast. Deploy one <strong style={{ color: '#fff' }}>PgBouncer</strong> pool per tenant database in transaction pooling mode. The application connects to a PgBouncer sidecar, which multiplexes dozens of app connections onto a handful of real DB connections per tenant.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '24px', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}># pgbouncer.ini per tenant</div>
                <div>[databases]</div>
                <div>tenant_acme = host=acme-db.internal port=5432 dbname=acme_prod</div>
                <div>tenant_globex = host=globex-db.internal port=5432 dbname=globex_prod</div>
                <div style={{ marginTop: '10px' }}>[pgbouncer]</div>
                <div>pool_mode = transaction</div>
                <div>max_client_conn = 500</div>
                <div>default_pool_size = 10</div>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Dynamic Connection Routing</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: '16px' }}>
                Store connection strings encrypted in a <strong style={{ color: '#fff' }}>master control plane database</strong>. On each request, resolve the tenant from the subdomain or JWT claim, look up the connection string, and inject it into the ORM connection pool for that request's lifecycle.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '24px', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}>// TypeScript: resolve tenant DB per request</div>
                <div>{'async function getTenantDataSource(tenantSlug: string) {'}</div>
                <div>{'  const cached = connectionCache.get(tenantSlug);'}</div>
                <div>{'  if (cached) return cached;'}</div>
                <div>{'  const { connectionUrl } = await masterDb.query('}</div>
                <div>{"    'SELECT connection_url FROM tenants WHERE slug = $1',"}</div>
                <div>{'    [tenantSlug]'}</div>
                <div>{'  );'}</div>
                <div>{'  const ds = new DataSource({ url: decrypt(connectionUrl) });'}</div>
                <div>{'  await ds.initialize();'}</div>
                <div>{'  connectionCache.set(tenantSlug, ds);'}</div>
                <div>{'  return ds;'}</div>
                <div>{'}'}</div>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Running Migrations Across Tenant DBs</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: '16px' }}>
                Every schema change must run against all tenant databases. Build a migration runner that iterates the tenants table and applies Flyway or a custom SQL migration in parallel with a concurrency cap (10 at a time is safe). Log success and failure per tenant. Failed migrations should not block deployment — run migrations as a pre-deploy job with rollback capability.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>AWS RDS Cost Estimate (Silo Model)</h3>
              <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '8px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ background: 'rgba(34,197,94,0.08)' }}>
                      {['Tenants', 'RDS Instance', 'Est. Monthly Cost'].map((h) => (
                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: G, fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['10 tenants', 'db.t3.micro × 10', '~$150/mo'],
                      ['50 tenants', 'db.t3.small × 50', '~$1,250/mo'],
                      ['100 tenants', 'db.t3.medium × 100', '~$4,800/mo'],
                    ].map(([t, i, c], idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                        <td style={{ padding: '12px 16px', color: '#fff' }}>{t}</td>
                        <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,0.65)' }}>{i}</td>
                        <td style={{ padding: '12px 16px', color: G, fontWeight: 600 }}>{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: Pool Model ── */}
          <section id="pool-model" style={{ marginBottom: '72px' }}>
            <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
              <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.01em' }}>Pool Model: Shared DB with Row-Level Security</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '16px' }}>
                The Pool model places all tenants in the same database — even the same tables — with a <strong style={{ color: '#fff' }}>tenant_id</strong> column on every row. Isolation is enforced by PostgreSQL's Row-Level Security (RLS) policy engine, not by physical separation.
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '24px' }}>
                At 10,000 tenants with mostly light usage, the pool model is dramatically more cost-effective than Silo. A single db.r6g.xlarge RDS instance can serve the entire fleet. The engineering challenge shifts to data safety rigor: every query path must correctly set and propagate the tenant context.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>PostgreSQL RLS Setup</h3>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '24px', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}>-- Enable RLS on every tenant-scoped table</div>
                <div>ALTER TABLE projects ENABLE ROW LEVEL SECURITY;</div>
                <div style={{ marginTop: '10px' }}>CREATE POLICY tenant_isolation ON projects</div>
                <div>  USING (tenant_id = current_setting('app.current_tenant_id')::uuid);</div>
                <div style={{ marginTop: '10px' }}>-- Superuser bypass (for admin queries)</div>
                <div>ALTER TABLE projects FORCE ROW LEVEL SECURITY;</div>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Setting Tenant Context per Request</h3>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '24px', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}>-- Run at the start of every transaction</div>
                <div>SELECT set_config('app.current_tenant_id', $1, true);</div>
                <div style={{ marginTop: '10px', color: 'rgba(255,255,255,0.35)' }}>-- In TypeScript middleware (Express / Fastify)</div>
                <div>{'async function tenantMiddleware(req, res, next) {'}</div>
                <div>{'  const tenantId = extractTenantFromJWT(req.headers.authorization);'}</div>
                <div>{'  await db.query("SELECT set_config(\'app.current_tenant_id\', $1, true)", [tenantId]);'}</div>
                <div>{'  req.tenantId = tenantId;'}</div>
                <div>{'  next();'}</div>
                <div>{'}'}</div>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Index Strategy</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: '16px' }}>
                Every table must have a composite index on <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>(tenant_id, id)</code> and any other commonly filtered columns. Without this, PostgreSQL performs a sequential scan across all tenants' rows whenever RLS filters by tenant_id.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '24px', lineHeight: 1.7 }}>
                <div>CREATE INDEX CONCURRENTLY idx_projects_tenant_id_id</div>
                <div>  ON projects (tenant_id, id);</div>
                <div style={{ marginTop: '10px' }}>CREATE INDEX CONCURRENTLY idx_projects_tenant_status</div>
                <div>  ON projects (tenant_id, status, created_at DESC);</div>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Query Performance: EXPLAIN ANALYZE</h3>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '24px', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)' }}>-- With correct index: Index Scan, 0.08ms</div>
                <div>EXPLAIN ANALYZE SELECT * FROM projects WHERE status = 'active';</div>
                <div style={{ marginTop: '8px', color: 'rgba(255,255,255,0.35)' }}>-- Index Scan using idx_projects_tenant_status</div>
                <div style={{ color: 'rgba(255,255,255,0.35)' }}>-- rows=12 width=340 actual time=0.054..0.081</div>
                <div style={{ marginTop: '10px', color: 'rgba(255,255,255,0.35)' }}>-- Without index: Seq Scan, 240ms at 10M rows</div>
              </div>
              <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '10px', padding: '18px', marginBottom: '8px' }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>
                  <strong style={{ color: '#f87171' }}>Critical Risk:</strong> A single query missing <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 5px', borderRadius: '4px' }}>WHERE tenant_id = ?</code> — or a raw SQL bypass that sets the config to the wrong tenant — can expose another customer's data. Enforce RLS at the database layer AND application layer. Never let RLS be your only control.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 5: Bridge Model ── */}
          <section id="bridge-model" style={{ marginBottom: '72px' }}>
            <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
              <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.01em' }}>Bridge Model: Schema per Tenant</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '16px' }}>
                PostgreSQL allows multiple <strong style={{ color: '#fff' }}>schemas</strong> within a single database. The Bridge model creates one schema per tenant — all data physically co-located on one database server, yet logically separated at the schema level. Switching between tenants is a <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>SET search_path</code> command.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Schema Naming and search_path</h3>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '24px', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}>-- Schema naming convention</div>
                <div>CREATE SCHEMA tenant_550e8400_e29b_41d4_a716_446655440000;</div>
                <div style={{ marginTop: '10px', color: 'rgba(255,255,255,0.35)' }}>-- Per-request tenant context switch</div>
                <div>SET search_path TO tenant_550e8400_e29b_41d4_a716_446655440000, public;</div>
                <div style={{ marginTop: '10px', color: 'rgba(255,255,255,0.35)' }}>-- Now all unqualified table references hit this tenant's schema</div>
                <div>SELECT * FROM projects; -- resolves to tenant_550e.../projects</div>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Migrations with Flyway/Liquibase</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: '16px' }}>
                Running schema migrations in the Bridge model means iterating all tenant schemas. Flyway supports a <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>schemas</code> parameter per datasource. Build a migration runner that queries <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>information_schema.schemata</code> for all <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>tenant_%</code> prefixed schemas, then applies migrations in parallel batches.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '24px', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}>// Node.js migration runner (simplified)</div>
                <div>{'const schemas = await db.query('}</div>
                <div>{"  `SELECT schema_name FROM information_schema.schemata"}</div>
                <div>{"   WHERE schema_name LIKE 'tenant_%'`"}</div>
                <div>{');'}</div>
                <div style={{ marginTop: '8px' }}>{'await pMap(schemas.rows, async ({ schema_name }) => {'}</div>
                <div>{'  await runFlyway({ schemas: [schema_name], url: DB_URL });'}</div>
                <div>{'}, { concurrency: 10 });'}</div>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Pros and Cons vs Silo and Pool</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '8px' }}>
                <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '10px', padding: '18px' }}>
                  <p style={{ color: G, fontWeight: 700, marginBottom: '10px', fontSize: '14px' }}>Advantages over Silo</p>
                  <ul style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: 1.7, paddingLeft: '16px', margin: 0 }}>
                    <li>One database server — 80% cheaper at 100 tenants</li>
                    <li>Single connection pool, no PgBouncer per tenant</li>
                    <li>Backups are simpler: one database dump</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '10px', padding: '18px' }}>
                  <p style={{ color: G, fontWeight: 700, marginBottom: '10px', fontSize: '14px' }}>Advantages over Pool</p>
                  <ul style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: 1.7, paddingLeft: '16px', margin: 0 }}>
                    <li>No tenant_id columns polluting every table</li>
                    <li>GDPR erasure: DROP SCHEMA tenant_X CASCADE</li>
                    <li>No RLS policy complexity or data bleed risk</li>
                  </ul>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginTop: '12px', lineHeight: 1.65 }}>
                <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Scale ceiling:</strong> PostgreSQL has a practical limit of approximately 10,000 schemas before catalog table queries become slow. Beyond ~5,000 tenants, migrate to Silo (dedicated databases) for heavy tenants or use a sharded Bridge across multiple database clusters.
              </p>
            </div>
          </section>

          {/* ── SECTION 6: Kubernetes Isolation ── */}
          <section id="kubernetes-isolation" style={{ marginBottom: '72px' }}>
            <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
              <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.01em' }}>Kubernetes Namespace-per-Tenant Isolation</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '16px' }}>
                For compute isolation (not just database isolation), Kubernetes namespaces provide a logical boundary. Each tenant namespace contains its own Deployments, Services, ConfigMaps, and Secrets. Cluster-level policies enforce that no namespace can reach another's pods.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>NetworkPolicy: Block Cross-Namespace Traffic</h3>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '24px', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}># deny-all-cross-namespace.yaml</div>
                <div>apiVersion: networking.k8s.io/v1</div>
                <div>kind: NetworkPolicy</div>
                <div>metadata:</div>
                <div>{'  name: deny-cross-namespace'}</div>
                <div>{'  namespace: tenant-acme'}</div>
                <div>spec:</div>
                <div>{'  podSelector: {}'}</div>
                <div>{'  policyTypes: [Ingress, Egress]'}</div>
                <div>{'  ingress:'}</div>
                <div>{'  - from:'}</div>
                <div>{'    - podSelector: {}  # only same namespace'}</div>
                <div>{'  egress:'}</div>
                <div>{'  - to:'}</div>
                <div>{'    - podSelector: {}  # only same namespace'}</div>
                <div>{'  - to:'}</div>
                <div>{'    - namespaceSelector:'}</div>
                <div>{'        matchLabels:'}</div>
                <div>{'          name: kube-dns  # allow DNS'}</div>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>ResourceQuota and LimitRange</h3>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '24px', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}># resource-quota.yaml</div>
                <div>apiVersion: v1</div>
                <div>kind: ResourceQuota</div>
                <div>metadata:</div>
                <div>{'  name: tenant-quota'}</div>
                <div>spec:</div>
                <div>{'  hard:'}</div>
                <div>{'    requests.cpu: "4"'}</div>
                <div>{'    requests.memory: 8Gi'}</div>
                <div>{'    limits.cpu: "8"'}</div>
                <div>{'    limits.memory: 16Gi'}</div>
                <div>{'    pods: "20"'}</div>
                <div style={{ marginTop: '10px', color: 'rgba(255,255,255,0.35)' }}># limit-range.yaml — container defaults</div>
                <div>apiVersion: v1</div>
                <div>kind: LimitRange</div>
                <div>spec:</div>
                <div>{'  limits:'}</div>
                <div>{'  - default: { cpu: 500m, memory: 512Mi }'}</div>
                <div>{'    defaultRequest: { cpu: 100m, memory: 128Mi }'}</div>
                <div>{'    type: Container'}</div>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Tenant-Scoped RBAC</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: '16px' }}>
                Create a <strong style={{ color: '#fff' }}>ServiceAccount</strong> per tenant namespace with a RoleBinding granting only the permissions needed within that namespace. This prevents a compromised tenant workload from using the Kubernetes API to access secrets or pods in other namespaces.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Helm Chart: One Chart, Values per Tenant</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: '16px' }}>
                Maintain one Helm chart for the tenant workload. Deploy per tenant with a <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>values-{'{tenant}'}.yaml</code> override file. Use ArgoCD ApplicationSets with a list generator to auto-deploy a new namespace when a tenant record is added to the control plane database.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '8px', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}># ApplicationSet generator</div>
                <div>generators:</div>
                <div>{'- list:'}</div>
                <div>{'    elements:'}</div>
                <div>{'    - tenant: acme'}</div>
                <div>{'      plan: enterprise'}</div>
                <div>{'    - tenant: globex'}</div>
                <div>{'      plan: starter'}</div>
                <div>template:</div>
                <div>{'  spec:'}</div>
                <div>{'    destination:'}</div>
                <div>{'      namespace: tenant-{{`{{tenant}}`}}'}</div>
              </div>
            </div>
          </section>

          {/* ── SECTION 7: Tenant Onboarding ── */}
          <section id="tenant-onboarding" style={{ marginBottom: '72px' }}>
            <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
              <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.01em' }}>Automated Tenant Onboarding Pipeline</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '28px' }}>
                Tenant onboarding must be fully automated, idempotent (safe to retry), and observable. A manual provisioning step is a scaling bottleneck and an error source at 3am when a sales team closes a deal.
              </p>
              {[
                {
                  step: '1',
                  title: 'Account Creation',
                  desc: 'Capture email, company name, plan selection. Validate domain uniqueness. Generate a tenant UUID and slug. Write the tenant record to the control plane database with status = provisioning.',
                },
                {
                  step: '2',
                  title: 'Database / Schema Provisioning',
                  desc: 'Trigger an idempotent provisioning job (queue-backed). For Silo: provision RDS instance via Terraform module, wait for endpoint, store encrypted connection string. For Bridge: CREATE SCHEMA IF NOT EXISTS tenant_{uuid}, run Flyway migrations. For Pool: no action needed — rows are tenant-scoped automatically.',
                },
                {
                  step: '3',
                  title: 'Stripe Subscription Creation',
                  desc: 'Create a Stripe Customer object and attach a Subscription to the selected price ID. Store stripe_customer_id and stripe_subscription_id on the tenant record. For paid plans, require card upfront (Stripe Checkout or Payment Element).',
                },
                {
                  step: '4',
                  title: 'Welcome Email + Onboarding Flow',
                  desc: 'Send a transactional welcome email with the subdomain URL, a magic-link login, and a link to the onboarding checklist. Trigger in-app onboarding tasks (e.g., "Connect your first integration", "Invite a teammate").',
                },
                {
                  step: '5',
                  title: 'Admin Panel Tenant Record',
                  desc: 'Update tenant status to active. Emit a tenant.created event to your internal event bus. Create a PagerDuty/OpsGenie escalation policy for this tenant if they are Enterprise SLA. Log all provisioning steps to the audit trail table.',
                },
              ].map((item) => (
                <div key={item.step} style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '2px solid rgba(34,197,94,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: G, fontWeight: 800, fontSize: '15px' }}>{item.step}</div>
                  <div>
                    <p style={{ fontWeight: 700, color: '#fff', marginBottom: '6px', fontSize: '16px' }}>{item.title}</p>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px', marginTop: '16px' }}>Idempotency with Redis SETNX</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: '16px' }}>
                Provisioning jobs may be retried on failure. Wrap the entire pipeline in a distributed lock using Redis SETNX with a 10-minute TTL. If the lock exists, skip the job (a previous run is in progress or succeeded). On success, write the completion state to the control plane DB so subsequent retries are instant no-ops.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}>// Redis distributed lock for idempotent provisioning</div>
                <div>{'const lockKey = `provision:lock:${tenantId}`;'}</div>
                <div>{'const acquired = await redis.set(lockKey, "1", "NX", "EX", 600);'}</div>
                <div>{'if (!acquired) {'}</div>
                <div>{'  logger.info("Provisioning already in progress, skipping");'}</div>
                <div>{'  return;'}</div>
                <div>{'}'}</div>
                <div>{'try {'}</div>
                <div>{'  await runProvisioningPipeline(tenantId);'}</div>
                <div>{'} finally {'}</div>
                <div>{'  await redis.del(lockKey);'}</div>
                <div>{'}'}</div>
              </div>
            </div>
          </section>

          {/* ── SECTION 8: Compliance ── */}
          <section id="compliance" style={{ marginBottom: '72px' }}>
            <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
              <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.01em' }}>Compliance and Data Isolation</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '24px' }}>
                Compliance frameworks have opinions about multi-tenancy. Choosing the wrong isolation model can disqualify you from enterprise deals or create audit findings. Here is how each framework maps to your architecture choices.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  {
                    label: 'SOC 2 Type II',
                    color: '#60a5fa',
                    points: [
                      'Requires per-tenant audit trail — log every data access with tenant context',
                      'Access logging: who accessed which tenant data and when',
                      'Pool model requires RLS audit evidence for auditors',
                      'Silo model simplifies access control audit scope',
                    ],
                  },
                  {
                    label: 'HIPAA',
                    color: '#f59e0b',
                    points: [
                      'PHI must be isolatable for Business Associate Agreement compliance',
                      'Silo model (DB per tenant) is strongly preferred by auditors',
                      'PHI in a pool model requires demonstrated RLS guarantees',
                      'Encryption at rest per tenant DB simplifies breach notification scope',
                    ],
                  },
                  {
                    label: 'GDPR',
                    color: '#a78bfa',
                    points: [
                      'Right to erasure: can you delete all data for one tenant cleanly?',
                      'Silo: drop the database. Bridge: DROP SCHEMA tenant_x CASCADE.',
                      'Pool: DELETE WHERE tenant_id = ? across all tables — error-prone',
                      'Data residency: silo allows per-tenant region selection',
                    ],
                  },
                  {
                    label: 'PCI DSS',
                    color: '#f87171',
                    points: [
                      'Cardholder data must never comingle across entities',
                      'Silo model required for any tenant storing raw card data',
                      'Network segmentation at Kubernetes NetworkPolicy layer',
                      'Dedicated nodes (node affinity) for PCI-scope tenant workloads',
                    ],
                  },
                ].map((item) => (
                  <div key={item.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                    <p style={{ color: item.color, fontWeight: 700, fontSize: '16px', marginBottom: '12px' }}>{item.label}</p>
                    <ul style={{ color: 'rgba(255,255,255,0.62)', fontSize: '13px', lineHeight: 1.7, paddingLeft: '16px', margin: 0 }}>
                      {item.points.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 9: Billing ── */}
          <section id="billing" style={{ marginBottom: '72px' }}>
            <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
              <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.01em' }}>Per-Tenant Billing with Stripe</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '24px' }}>
                Multi-tenant SaaS billing is more complex than single-tenant because usage must be accurately attributed to each tenant before it is reported to the billing provider. Stripe's Meters API (introduced in 2024) is now the canonical solution for usage-based billing.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Metered Billing: Aggregate and Report</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: '16px' }}>
                For each tenant, track API calls, storage bytes, and active seats in a Redis counter or time-series database (TimescaleDB). Every hour, aggregate per-tenant usage and report to Stripe Meters via the <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>POST /v1/billing/meter_events</code> endpoint.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255,255,255,0.75)', overflowX: 'auto', marginBottom: '24px', lineHeight: 1.7 }}>
                <div style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}>// Report usage to Stripe Meters</div>
                <div>{'await stripe.billing.meterEvents.create({'}</div>
                <div>{"  event_name: 'api_requests',"}</div>
                <div>{'  payload: {'}</div>
                <div>{"    value: '1500',  // API calls this hour"}</div>
                <div>{'    stripe_customer_id: tenant.stripeCustomerId,'}</div>
                <div>{'  },'}</div>
                <div>{'  timestamp: Math.floor(Date.now() / 1000),'}</div>
                <div>{'});'}</div>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Usage-Based Dimensions</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '24px' }}>
                {[
                  { metric: 'API Calls', track: 'Redis INCR per request, report hourly' },
                  { metric: 'Storage (GB)', track: 'S3 ListObjectsV2 per tenant prefix, report daily' },
                  { metric: 'Active Seats', track: 'COUNT(users) WHERE last_login > 30d, report monthly' },
                ].map((d) => (
                  <div key={d.metric} style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '10px', padding: '16px' }}>
                    <p style={{ color: G, fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>{d.metric}</p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', lineHeight: 1.6, margin: 0 }}>{d.track}</p>
                  </div>
                ))}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Credit System</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: '16px' }}>
                Pre-paid credit models (common in AI SaaS) require a <strong style={{ color: '#fff' }}>credit_balance</strong> table per tenant. Decrement atomically using a PostgreSQL transaction with <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>SELECT ... FOR UPDATE</code> to prevent race conditions. Reject requests when balance reaches zero, and trigger a low-credit notification at 20%.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Proration on Mid-Month Upgrades</h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, marginBottom: '8px' }}>
                When a tenant upgrades their plan mid-billing-cycle, Stripe automatically calculates proration if you use <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>proration_behavior: 'create_prorations'</code> on the subscription update. Capture the proration preview before applying it and surface the cost delta to the tenant in a confirmation modal.
              </p>
            </div>
          </section>

          {/* ── SECTION 10: FAQ ── */}
          <section id="faq" style={{ marginBottom: '72px' }}>
            <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
              <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '28px', letterSpacing: '-0.01em' }}>Frequently Asked Questions</h2>
              {[
                {
                  q: 'When should I use Silo vs Pool vs Bridge?',
                  a: 'Use Silo when you serve enterprise or regulated industries (healthcare, finance) where dedicated data isolation is contractually or legally required and cost is secondary. Use Pool when you expect thousands of mostly low-traffic tenants and can enforce rigorous RLS discipline — it is by far the cheapest model. Use Bridge when you need better isolation than Pool but cannot afford the operational overhead of Silo, and your tenant count will stay below ~5,000.',
                },
                {
                  q: 'How do I prevent tenant data leaks in a shared database?',
                  a: 'Defence in depth: (1) Enable PostgreSQL RLS with FORCE ROW LEVEL SECURITY. (2) Set the tenant context via set_config at the start of every transaction, never trust application-layer filtering alone. (3) Integration-test every query path with a "wrong tenant" assertion. (4) Use a static analysis tool or ORM plugin to detect missing tenant_id WHERE clauses. (5) Audit logs on all SELECT queries in staging environments to catch leaks before production.',
                },
                {
                  q: 'Can PostgreSQL RLS handle 1,000+ tenants?',
                  a: 'Yes. PostgreSQL RLS is a planner-level filter — it adds a WHERE clause, not a separate query. With correct composite indexes on (tenant_id, primary_key) and all commonly filtered columns, RLS adds negligible overhead even at 100,000 rows per tenant across 10,000 tenants. The bottleneck at that scale is typically connection count (use PgBouncer) and index bloat (VACUUM frequently).',
                },
                {
                  q: 'How do I migrate from single-tenant to multi-tenant?',
                  a: 'The safest migration path: (1) Add tenant_id UUID column to all tables with a DEFAULT pointing to a "legacy" tenant UUID. (2) Add RLS policies but keep them disabled during migration. (3) Backfill all rows with the legacy tenant ID. (4) Enable RLS. (5) Build the new multi-tenant onboarding flow alongside the existing single-tenant product. (6) Migrate legacy data into a proper tenant record. Plan 4–12 weeks of engineering time depending on data model complexity.',
                },
                {
                  q: 'How do I handle tenant-specific customizations (themes, settings)?',
                  a: 'Store tenant configuration in a JSON column on the tenants table: custom_domain, theme_color, logo_url, feature_flags, locale, timezone. Expose a settings API that tenants manage via their admin panel. For heavy customization (custom workflows, custom fields), use an entity-attribute-value (EAV) model or a JSONB field per record type. Avoid forking application code per tenant — all customization should be data-driven.',
                },
              ].map((item, i) => (
                <FaqItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.6s ease' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 100%)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '16px', padding: '48px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Ready to Build Your Multi-Tenant SaaS?</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 28px' }}>
                Codazz architects and builds scalable multi-tenant platforms — from model selection to Kubernetes deployment and compliance readiness. Book a free architecture review.
              </p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: G, color: '#000', borderRadius: '8px', padding: '14px 28px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                Book Free SaaS Architecture Review →
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div style={{ marginTop: '64px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'rgba(255,255,255,0.85)' }}>Related Articles</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {relatedPosts.map((post) => (
                <Link key={post.href} href={post.href} style={{ textDecoration: 'none', display: 'block', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px', transition: 'border-color 0.2s' }}>
                  <p style={{ color: G, fontWeight: 600, fontSize: '14px', marginBottom: '6px' }}>{post.title}</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{post.desc}</p>
                </Link>
              ))}
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: '4px' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}
      >
        <span style={{ color: '#fff', fontSize: '16px', fontWeight: 600, lineHeight: 1.5 }}>{question}</span>
        <span style={{ color: '#22c55e', fontSize: '22px', flexShrink: 0, marginTop: '2px', transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: 1.75, paddingBottom: '20px', paddingRight: '32px', margin: 0 }}>
          {answer}
        </p>
      )}
    </div>
  );
}
