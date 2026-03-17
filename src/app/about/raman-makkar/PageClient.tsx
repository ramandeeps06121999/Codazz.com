'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function RamanMakkarPageClient() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', color: '#111827', minHeight: '100vh' }}>
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Raman Makkar' },
          ]} />
        </div>

        {/* Hero */}
        <section style={{ padding: 'clamp(40px, 5vw, 80px) 0' }}>
          <div className="cb-container" style={{ maxWidth: 800 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, fontWeight: 700, color: '#111827',
              }}>RM</div>
              <div>
                <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0 }}>
                  Raman Makkar
                </h1>
                <p style={{ fontSize: 16, color: '#4F46E5', fontWeight: 600, margin: '4px 0 0' }}>CEO & Founder, Codazz</p>
              </div>
            </div>

            <div style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(0,0,0,0.55)' }}>
              <p style={{ marginBottom: 24 }}>
                Raman Makkar is the founder and CEO of Codazz, a full-service software development company headquartered in New York, NY with a second headquarters in Dubai, UAE. With over a decade of experience in software engineering, product development, and digital transformation, Raman has led the delivery of 500+ projects for clients across 24 countries worldwide.
              </p>
              <p style={{ marginBottom: 24 }}>
                Under his leadership, Codazz has grown into a team of 25+ engineers, designers, and strategists serving clients in fintech, healthcare, e-commerce, logistics, edtech, and enterprise sectors. The company specializes in building custom web applications, mobile apps, AI/ML solutions, cloud infrastructure, and SaaS platforms.
              </p>
              <p style={{ marginBottom: 24 }}>
                Raman is passionate about leveraging technology to solve real business problems. He believes in a client-first approach, combining deep technical expertise with strategic thinking to deliver solutions that drive measurable results. His areas of expertise include React, Next.js, Node.js, Python, AWS, and AI/ML engineering.
              </p>
              <p>
                Based in New York, Raman works with clients across all major US cities including Los Angeles, Miami, Chicago, Houston, and San Francisco, as well as international clients in the Middle East and Europe.
              </p>
            </div>

            {/* Expertise */}
            <div style={{ marginTop: 48 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Areas of Expertise</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['Full-Stack Development', 'AI & Machine Learning', 'Cloud Architecture (AWS/GCP)', 'Mobile App Development', 'SaaS Product Strategy', 'Team Leadership', 'Digital Transformation', 'DevOps & CI/CD', 'Agile Methodology', 'Product Design'].map((skill) => (
                  <span key={skill} style={{
                    padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                    background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.08)',
                    color: 'rgba(0,0,0,0.55)',
                  }}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Articles */}
            <div style={{ marginTop: 48 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Published Articles</h2>
              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  { title: 'Top 10 AI Development Companies in the US', href: '/blog/ai-development-companies-us' },
                  { title: 'How Much Does a Custom Website Cost in the US?', href: '/blog/website-cost-us' },
                  { title: 'How to Choose a Software Development Company in the US', href: '/blog/choose-software-development-company-us' },
                  { title: 'SaaS Development Cost in the US (2026)', href: '/blog/saas-development-cost-us' },
                  { title: 'Top 10 Unicorn Apps of 2026', href: '/blog/top-10-unicorn-apps-2026' },
                ].map((post) => (
                  <a key={post.href} href={post.href} style={{
                    display: 'block', padding: '16px 20px', borderRadius: 12,
                    background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)',
                    textDecoration: 'none', color: '#111827', fontSize: 15, fontWeight: 500,
                    transition: 'all 0.2s ease',
                  }}>
                    {post.title} →
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: 60, padding: '40px', borderRadius: 24, background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Work With Raman</h2>
              <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.5)', marginBottom: 24 }}>
                Have a project in mind? Get a free consultation directly with the founder.
              </p>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: 48, padding: '0 28px', borderRadius: 100,
                background: '#4F46E5', color: '#fff', fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
              }}>
                Schedule a Call
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
