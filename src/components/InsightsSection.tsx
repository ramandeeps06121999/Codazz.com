'use client';
import { useRef, useEffect } from 'react';

const featuredCaseStudy = {
  tag: 'Case Study',
  title: 'AI-Powered FinTech Trading Platform',
  excerpt: 'How we built a real-time trading engine processing 2M+ daily transactions with ML-driven sentiment analysis for a leading fintech client.',
  readTime: '5 min read',
  date: 'Mar 2026',
  href: '/case-studies/fintech-trading-platform',
  image: '/blog_images/ai-development-companies-usa.jpg',
};

const posts = [
  {
    tag: 'Business',
    title: 'Top 10 Unicorn Apps of 2026',
    excerpt: 'The mobile-first companies that crossed $1B valuation this year share a common thread: ruthless product discipline and engineering excellence.',
    readTime: '8 min read',
    date: 'Mar 2026',
    href: '/blog/top-10-unicorn-apps-2026',
    image: '/blog_images/top-10-unicorn-apps-2026.jpg',
  },
  {
    tag: 'Business',
    title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026',
    excerpt: 'Learn the exact blueprint non-technical founders use to build, launch, and scale successful B2B SaaS applications, and why custom architecture matters in 2026.',
    readTime: '7 min read',
    date: 'Mar 2026',
    href: '/blog/saas-guide',
    image: '/blog_images/saas-guide.jpg',
  },
  {
    tag: 'Digital Marketing',
    title: 'Top 10 SEO Companies in the US (2026)',
    excerpt: 'A comprehensive, data-driven ranking of the top 10 SEO agencies in the US for 2026, featuring Codazz and other industry leaders driving serious organic growth.',
    readTime: '9 min read',
    date: 'Mar 2026',
    href: '/blog/top-seo-companies-usa',
    image: '/blog_images/top-seo-companies-usa.jpg',
  },
];

export default function InsightsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="insights" className="section-padding" style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="cb-container">

        {/* Header */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'clamp(20px, 4vw, 40px)', marginBottom: 'clamp(40px, 6vw, 80px)', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Insights</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              From the<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Engineering Desk.</span>
            </h2>
          </div>
          <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 48, padding: '0 28px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: '0.3s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
          >
            View All Articles
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Featured Case Study */}
        <a
          href={featuredCaseStudy.href}
          className="reveal"
          style={{
            display: 'flex',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'clamp(20px, 4vw, 32px)',
            overflow: 'hidden',
            textDecoration: 'none',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            background: '#0a0a0a',
            marginBottom: 40,
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          {/* Featured Image */}
          <div style={{
            width: '40%',
            minHeight: 280,
            backgroundImage: `url(${featuredCaseStudy.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', top: 20, left: 20, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 100, background: 'linear-gradient(135deg, rgba(34,197,94,0.9), rgba(74,222,128,0.9))', border: '1px solid rgba(255,255,255,0.2)' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{featuredCaseStudy.tag}</span>
            </div>
          </div>
          <div style={{ padding: 'clamp(20px, 4vw, 32px) clamp(16px, 4vw, 40px)', display: 'flex', flexDirection: 'column', gap: 16, flex: 1, justifyContent: 'center' }}>
            <h3 style={{ fontSize: 24, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.3, margin: 0 }}>{featuredCaseStudy.title}</h3>
            <p style={{ fontSize: 15, color: '#9ca3af', lineHeight: 1.7, margin: 0 }}>{featuredCaseStudy.excerpt}</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 8, fontSize: 13, fontWeight: 700, color: '#22c55e' }}>
              Read Case Study
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>
          </div>
        </a>

        {/* Cards */}
        <div className="insights-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {posts.map((post, i) => (
            <a
              key={post.title}
              href={post.href}
              className={`reveal reveal-d${i + 1}`}
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 'clamp(20px, 4vw, 32px)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                background: '#0a0a0a',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.15)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 48px rgba(34,197,94,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Blog Image */}
              <div style={{
                height: 220,
                backgroundImage: `url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: 16, left: 16, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 100, background: 'linear-gradient(135deg, rgba(34,197,94,0.9), rgba(74,222,128,0.9))', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{post.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 'clamp(20px, 4vw, 28px)', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.4, margin: 0 }}>{post.title}</h3>
                <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.7, margin: 0, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{post.date}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
