'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
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

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.2)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(255,255,255,0.06)',
};

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...cardBase, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}


export default function EnterprisePage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/services' },
            { label: 'Enterprise' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Enterprise Software
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              We Build Enterprise Software That <span style={{ color: '#ffffff' }}>Actually Works.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Internal tools, workflow automation, ERP integrations and mission-critical systems for companies with thousands of employees.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Start Your Project
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[['5,000+', 'Enterprise Users'], ['SOC II', 'Certified'], ['Zero', 'Critical Downtime']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Key Challenges We Solve</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Enterprise complexity demands architecture that lasts decades, not months.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🔗', title: 'Legacy System Integration', desc: 'Connecting decades-old ERP, CRM, and mainframe systems to modern interfaces and APIs — without the big-bang migration risk that derails projects.' },
                { icon: '🔐', title: 'Enterprise Security', desc: 'SSO, RBAC, audit trails, and zero-trust networking that satisfies your CISO, passes penetration tests, and keeps sensitive business data protected at rest and in transit.' },
                { icon: '👥', title: 'Change Management', desc: 'Software that employees actually adopt. We conduct user research, run change champions programs, and design onboarding flows that drive real utilisation.' },
              ].map(c => (
                <Card key={c.title}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Our Solutions</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Enterprise-grade systems built for the long term.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🏢', title: 'Custom ERP & CRM Systems', desc: 'Multi-department workflow automation, approval chains, reporting dashboards, and deep integrations with SAP, Salesforce, and Oracle — tailored to your exact processes.' },
                { icon: '🔗', title: 'Enterprise Integration & APIs', desc: 'REST and GraphQL API platforms, ESB implementations, legacy middleware bridges, and SSO unification that connects your entire technology estate.' },
                { icon: '🛠️', title: 'Internal Tooling', desc: 'Custom admin panels, operations dashboards, and employee-facing apps that replace spreadsheets and manual processes with streamlined workflows.' },
                { icon: '📊', title: 'Business Intelligence', desc: 'Real-time reporting dashboards, data warehousing, and self-service analytics that empower every department to make data-driven decisions.' },
                { icon: '⚙️', title: 'Workflow Automation', desc: 'End-to-end process automation with approval chains, notifications, and integrations that eliminate repetitive tasks and reduce human error.' },
                { icon: '🔐', title: 'MDM & Compliance', desc: 'Master data management, audit trails, and regulatory compliance tooling that keeps your organization aligned with industry standards.' },
              ].map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ border: '1px solid rgba(34,197,94,0.15)', borderRadius: 32, background: 'rgba(34,197,94,0.03)', padding: 'clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>EnterpriseX</div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>8,000 employees onboarded, 60% reduction in manual tasks, $2.1M annual savings</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>We replaced a patchwork of 14 internal tools with a unified platform — single sign-on, role-based access, and workflow automation that eliminated thousands of hours of manual work per month.</p>
              </div>
              <div>
                <blockquote style={{ borderLeft: '3px solid #22c55e', paddingLeft: '1.5rem', margin: 0 }}>
                  <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "We went from 14 disconnected tools to one platform. The productivity gain was immediate and the cost savings exceeded our projections."
                  </p>
                  <cite style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.25)', fontStyle: 'normal' }}>— CIO, EnterpriseX</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={s4} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Tech Stack</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Enterprise-grade technologies chosen for reliability and longevity.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                { cat: 'Integration', items: ['MuleSoft', 'Apache Camel', 'REST', 'GraphQL', 'gRPC'] },
                { cat: 'Auth', items: ['Okta', 'Azure AD', 'SAML', 'OAuth2', 'LDAP'] },
                { cat: 'Backend', items: ['Java', '.NET', 'Python', 'Go', 'Kubernetes'] },
                { cat: 'BI', items: ['Power BI', 'Tableau', 'Looker', 'dbt', 'Snowflake'] },
              ].map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '4px 12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CODAZZ */}
        <section ref={s5} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Codazz</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Enterprise software that survives leadership changes, acquisitions, and a decade of growth.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🏛️', title: 'Enterprise Architecture Experts', desc: 'We design for maintainability, extensibility, and the organizational realities of large companies — multiple teams, multiple stakeholders, multi-year roadmaps.' },
                { icon: '🔒', title: 'Security & Compliance', desc: 'SOC II Type II, ISO 27001 alignment, penetration testing, and security architecture reviews that keep your enterprise software out of the headlines.' },
                { icon: '🤝', title: 'Long-term Partnership', desc: 'We don\'t disappear after launch. Our retainer teams provide ongoing development, support, and strategic guidance as your business evolves.' },
              ].map(w => (
                <Card key={w.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{w.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Services for Enterprise
            </h2>
            <div className="industry-services-grid" style={{ display: 'grid', gap: 16 }}>
              {[
                { name: 'Web Development', href: '/services/web-development', desc: 'Internal tools, admin dashboards and employee portals built for thousands of concurrent users.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'Enterprise cloud migrations, Kubernetes orchestration and CI/CD pipelines for large teams.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Business intelligence models, process automation and predictive analytics for enterprise data.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant enterprise platforms with SSO, RBAC and audit-ready compliance tooling.' },
                { name: 'Blockchain Development', href: '/services/blockchain', desc: 'Distributed ledger solutions for supply chain transparency and secure enterprise transactions.' },
              ].map((s) => (
                <a key={s.href} href={s.href} style={{
                  display: 'block', padding: '24px', borderRadius: 16,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 6 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s6} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Build Your <span style={{ color: '#ffffff' }}>Enterprise System.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Mission-critical software that scales with your organization and stands the test of time.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Start Your Project
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['SOC II Certified', 'SSO Ready', 'Long-term Support', 'NDA on Request'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)' }}>✓ {t}</span>
                ))}
              </div>
              <TrustBadges compact />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
