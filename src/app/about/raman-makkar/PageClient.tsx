'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export default function RamanMakkarPageClient() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', minHeight: '100vh' }}>
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
                background: 'linear-gradient(135deg, #22c55e, #4ade80)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, fontWeight: 700, color: '#ffffff',
              }}>RM</div>
              <div>
                <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0 }}>
                  Raman Makkar
                </h1>
                <p style={{ fontSize: 16, color: '#ffffff', fontWeight: 600, margin: '4px 0 0' }}>CEO & Founder, Codazz</p>
              </div>
            </div>

            <div style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>
              <p style={{ marginBottom: 24 }}>
                Raman Makkar is the founder and CEO of Codazz, a custom software development company headquartered in Edmonton, Canada and Chandigarh, India with offices in New York and Dubai. With over a decade of hands-on experience in software engineering, product development, and digital transformation, Raman has personally led the architecture and delivery of 500+ products for clients across 24 countries.
              </p>
              <p style={{ marginBottom: 24 }}>
                Before founding Codazz in 2018, Raman worked as a software engineer building systems at scale. He saw a consistent problem: startups and mid-market companies couldn&apos;t access the same quality of engineering that Fortune 500 companies took for granted. Agencies either overcharged, under-delivered, or both. Codazz was built to fix that &mdash; offering fixed-price contracts, dedicated teams, and engineering standards that match the best in-house teams.
              </p>
              <p style={{ marginBottom: 24 }}>
                Under his technical leadership, Codazz has built AI-powered trading platforms processing 50K+ daily transactions, HIPAA-compliant telehealth systems serving 200K+ patient sessions, e-commerce platforms handling 2M+ monthly visitors, and mobile apps with over 1M downloads. The company has grown to 150+ engineers and the products built under Raman&apos;s direction have collectively generated over $500 million in client revenue.
              </p>
              <p style={{ marginBottom: 24 }}>
                Raman&apos;s technical expertise spans full-stack development with React, Next.js, Node.js, and Python; cloud architecture on AWS and GCP; AI/ML engineering including LLM integration, RAG systems, and computer vision; and mobile development with React Native and Flutter. He is an AWS-certified solutions architect and holds certifications in SOC II and ISO compliance.
              </p>
              <p>
                Based in Edmonton, Raman works with clients across North America, the Middle East, and Europe. He writes about software development, AI, and building technology companies on the Codazz blog.
              </p>
            </div>

            {/* Key Achievements */}
            <div style={{ marginTop: 48 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Key Achievements</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 16 }}>
                {[
                  { value: '500+', label: 'Products Shipped' },
                  { value: '$500M+', label: 'Client Revenue Generated' },
                  { value: '150+', label: 'Engineers Led' },
                  { value: '24', label: 'Countries Served' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '7+', label: 'Years Building' },
                ].map(stat => (
                  <div key={stat.label} style={{
                    padding: '24px 20px', borderRadius: 16,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 4 }}>{stat.value}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div style={{ marginTop: 48 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Areas of Expertise</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['Full-Stack Development', 'AI & Machine Learning', 'Cloud Architecture (AWS/GCP)', 'Mobile App Development', 'SaaS Product Strategy', 'Team Leadership', 'Digital Transformation', 'DevOps & CI/CD', 'Agile Methodology', 'Product Design'].map((skill) => (
                  <span key={skill} style={{
                    padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.7)',
                  }}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Articles */}
            <div style={{ marginTop: 48 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Published Articles</h2>
              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  { title: 'How Much Does App Development Cost in Canada? (2026 Guide)', href: '/blog/app-development-cost-canada' },
                  { title: 'How to Build an AI Chatbot for Your Business', href: '/blog/how-to-build-ai-chatbot-business' },
                  { title: 'How Much Does App Development Cost in the USA?', href: '/blog/app-development-cost-us' },
                  { title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', href: '/blog/saas-development-guide' },
                  { title: 'How to Choose a Software Development Company', href: '/blog/choose-software-development-company-us' },
                  { title: 'SaaS Development Cost in the US (2026)', href: '/blog/saas-development-cost-us' },
                ].map((post) => (
                  <Link key={post.href} href={post.href} style={{
                    display: 'block', padding: '16px 20px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none', color: '#ffffff', fontSize: 15, fontWeight: 500,
                    transition: 'all 0.2s ease',
                  }}>
                    {post.title} &rarr;
                  </Link>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div style={{ marginTop: 48 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Awards & Recognition</h2>
              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  'Clutch Top Generative AI Company (2026)',
                  'Clutch Top App Development Company (2024)',
                  'AWS Advanced Tier Partner (2024)',
                  'SOC II Certified (2024)',
                  'ISO Certified (2023)',
                  'Red Herring 100 (2023)',
                  'Webby Honoree (2024)',
                ].map(award => (
                  <div key={award} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '14px 20px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: 60, padding: '40px', borderRadius: 24, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Work With Raman</h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 24 }}>
                Have a project in mind? Get a free consultation directly with the founder.
              </p>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: 48, padding: '0 28px', borderRadius: 100,
                background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
              }}>
                Schedule a Call
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
