'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Case Study':        { bg: 'rgba(34,197,94,0.15)',  text: '#22c55e' },
  'Business':          { bg: 'rgba(59,130,246,0.15)', text: '#60a5fa' },
  'Digital Marketing': { bg: 'rgba(168,85,247,0.15)', text: '#c084fc' },
  'Engineering':       { bg: 'rgba(251,191,36,0.15)', text: '#fbbf24' },
  'AI':                { bg: 'rgba(244,114,182,0.15)', text: '#f472b6' },
};

const featuredPost = {
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
    excerpt: 'The mobile-first companies that crossed $1B valuation share a common thread: ruthless product discipline.',
    readTime: '8 min read',
    date: 'Mar 2026',
    href: '/blog/top-10-unicorn-apps-2026',
    image: '/blog_images/top-10-unicorn-apps-2026.jpg',
  },
  {
    tag: 'Business',
    title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026',
    excerpt: 'The exact blueprint non-technical founders use to build, launch, and scale successful B2B SaaS products.',
    readTime: '7 min read',
    date: 'Mar 2026',
    href: '/blog/saas-guide',
    image: '/blog_images/saas-guide.jpg',
  },
  {
    tag: 'Digital Marketing',
    title: 'Top 10 SEO Companies in the US (2026)',
    excerpt: 'A data-driven ranking of the top 10 SEO agencies in the US driving serious organic growth.',
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
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="insights"
      className="section-padding"
      style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="cb-container">

        {/* Header */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 'clamp(20px, 4vw, 40px)',
            marginBottom: 'clamp(40px, 6vw, 72px)',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>
              Insights
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              From the<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Engineering Desk.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 48, padding: '0 28px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'border-color 0.25s, color 0.25s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
          >
            View All Articles
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>

        {/* 2-column layout: Featured left + 3 smaller posts right */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 20,
            alignItems: 'stretch',
          }}
        >
          {/* Featured Post — left, tall card */}
          <Link
            href={featuredPost.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 28,
              overflow: 'hidden',
              textDecoration: 'none',
              background: '#0a0a0a',
              transition: 'border-color 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)';
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 28px 56px rgba(34,197,94,0.12), 0 0 0 1px rgba(34,197,94,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Featured image — taller crop */}
            <div style={{ position: 'relative', height: 'clamp(220px, 30vw, 340px)', flexShrink: 0 }}>
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              {/* Gradient overlay bottom */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)' }} />
              {/* Category pill */}
              <div style={{
                position: 'absolute', top: 20, left: 20,
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '5px 14px', borderRadius: 100,
                background: categoryColors[featuredPost.tag]?.bg ?? 'rgba(34,197,94,0.15)',
                border: `1px solid ${categoryColors[featuredPost.tag]?.text ?? '#22c55e'}33`,
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: categoryColors[featuredPost.tag]?.text ?? '#22c55e' }}>
                  {featuredPost.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: 'clamp(20px, 4vw, 32px)', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
              <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.3, margin: 0 }}>
                {featuredPost.title}
              </h3>
              <p style={{ fontSize: 15, color: '#9ca3af', lineHeight: 1.75, margin: 0, flex: 1 }}>
                {featuredPost.excerpt}
              </p>
              {/* Meta row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>{featuredPost.date}</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>{featuredPost.readTime}</span>
              </div>
              {/* CTA */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: '#22c55e' }}>
                Read Case Study
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </Link>

          {/* Right column — 3 smaller cards stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {posts.map((post, i) => (
              <Link
                key={post.title}
                href={post.href}
                className={`reveal reveal-d${i + 1}`}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 28,
                  overflow: 'hidden',
                  textDecoration: 'none',
                  background: '#0a0a0a',
                  flex: 1,
                  transition: 'border-color 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(34,197,94,0.28)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(34,197,94,0.09), 0 0 0 1px rgba(34,197,94,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Thumbnail */}
                <div style={{ position: 'relative', width: 'clamp(100px, 22%, 140px)', flexShrink: 0 }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 30vw, 15vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: 'clamp(14px, 2vw, 20px)', display: 'flex', flexDirection: 'column', gap: 8, flex: 1, justifyContent: 'center' }}>
                  {/* Category pill */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', alignSelf: 'flex-start',
                    padding: '3px 10px', borderRadius: 100,
                    background: categoryColors[post.tag]?.bg ?? 'rgba(34,197,94,0.15)',
                    border: `1px solid ${categoryColors[post.tag]?.text ?? '#22c55e'}33`,
                  }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: categoryColors[post.tag]?.text ?? '#22c55e' }}>
                      {post.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(13px, 1.4vw, 15px)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.015em', lineHeight: 1.4, margin: 0 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.excerpt}
                  </p>
                  {/* Meta */}
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 4 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{post.date}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
