import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Codazz — work with a global team of 150+ engineers building world-class software across fintech, healthcare, e-commerce, and AI. Remote-first, competitive pay, real impact.',
  openGraph: {
    title: 'Careers at Codazz',
    description: 'Join a global team of 150+ engineers building world-class software. Remote-first, competitive pay, real impact.',
    url: 'https://codazz.com/careers',
  },
  alternates: {
    canonical: 'https://codazz.com/careers',
  },
};

const openings = [
  {
    title: 'Senior Full-Stack Engineer',
    team: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Build production-grade web applications using Next.js, React, Node.js, and PostgreSQL. Work directly with clients on high-impact projects across fintech, healthcare, and e-commerce.',
    requirements: ['5+ years with React/Next.js and Node.js', 'Experience with PostgreSQL or MongoDB', 'Strong understanding of CI/CD and cloud deployment (AWS)', 'Excellent communication in English'],
  },
  {
    title: 'AI/ML Engineer',
    team: 'AI Labs',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Design and deploy production AI systems — LLM integrations, RAG pipelines, computer vision, and predictive analytics. Work on real products processing thousands of transactions daily.',
    requirements: ['3+ years in ML/AI engineering', 'Experience with Python, TensorFlow or PyTorch', 'Familiarity with LLM APIs (OpenAI, Claude)', 'Understanding of RAG architectures and vector databases'],
  },
  {
    title: 'React Native Developer',
    team: 'Mobile',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Build cross-platform mobile apps that scale to millions of users. Work on apps across healthcare, logistics, and consumer products with real-world impact.',
    requirements: ['3+ years with React Native', 'Experience publishing apps to App Store and Google Play', 'Knowledge of native modules and performance optimization', 'Experience with Firebase, REST APIs, and state management'],
  },
  {
    title: 'Senior UI/UX Designer',
    team: 'Design',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Lead product design for client engagements — from discovery and wireframing to high-fidelity UI and design systems. Design interfaces for apps with millions of users.',
    requirements: ['4+ years in product/UI design', 'Expert in Figma, design systems, and prototyping', 'Experience designing for mobile and web applications', 'Portfolio with shipped, production products'],
  },
  {
    title: 'DevOps / Cloud Engineer',
    team: 'Infrastructure',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Architect and manage cloud infrastructure on AWS. Build CI/CD pipelines, container orchestration with Kubernetes, and Infrastructure as Code for production systems.',
    requirements: ['3+ years in DevOps/Cloud engineering', 'Strong AWS experience (EC2, ECS, Lambda, RDS)', 'Experience with Docker, Kubernetes, and Terraform', 'Understanding of monitoring, logging, and security'],
  },
  {
    title: 'Project Manager',
    team: 'Operations',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Manage end-to-end delivery of software projects across global teams. Run sprint planning, client demos, and ensure every project ships on time and on budget.',
    requirements: ['3+ years managing software projects', 'Experience with Agile/Scrum methodologies', 'Strong communication and client management skills', 'Technical understanding of web/mobile development'],
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ padding: 'clamp(140px, 14vw, 180px) 0 clamp(60px, 8vw, 100px)', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: '20%', left: '30%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              We&apos;re Hiring
            </div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Build Software That<br /><span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Actually Matters</span>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 620, margin: '0 auto 2.5rem' }}>
              Join a global team of 150+ engineers, designers, and strategists building products that handle millions of users, process billions in transactions, and make a real difference for businesses worldwide.
            </p>
            <Link href="#openings" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 52, padding: '0 32px', borderRadius: 100,
              background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700,
              textDecoration: 'none',
            }}>
              View Open Positions
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
            </Link>
          </div>
        </section>

        {/* Why Codazz */}
        <section style={{ padding: 'clamp(48px, 8vw, 80px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', display: 'block', marginBottom: 16 }}>Why Join Us</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>What We Offer</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {[
                { title: 'Remote-First Culture', desc: '99% of our work is virtual. Work from anywhere in the world. No mandatory office hours, no commute. We care about output, not hours logged.' },
                { title: 'Real Impact', desc: 'You won\'t be maintaining legacy code. You\'ll build products from scratch that serve millions of users — trading platforms, telehealth apps, e-commerce at scale.' },
                { title: 'Competitive Compensation', desc: 'We pay competitive rates regardless of where you\'re based. Your talent determines your pay, not your zip code.' },
                { title: 'Work With the Best', desc: 'Collaborate with senior engineers, designers, and architects across 24 countries. Every code review is a learning opportunity.' },
                { title: 'Growth & Learning', desc: 'Work across diverse projects in fintech, healthcare, AI, and more. No two projects are the same — you\'ll constantly expand your skill set.' },
                { title: 'No Bureaucracy', desc: 'Small teams, direct communication, fast decisions. You\'ll ship code in your first week, not spend it in onboarding meetings.' },
              ].map(item => (
                <div key={item.title} style={{
                  background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 24, padding: 32,
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ padding: 'clamp(32px, 5vw, 52px) 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(120px, 100%), 1fr))', gap: 32, textAlign: 'center' }}>
              {[
                { value: '150+', label: 'Engineers' },
                { value: '24', label: 'Countries' },
                { value: '500+', label: 'Projects Shipped' },
                { value: '98%', label: 'Satisfaction' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>{stat.value}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 8 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', display: 'block', marginBottom: 16 }}>Open Positions</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>Current Openings</h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', maxWidth: 500, margin: '0 auto' }}>
                Don&apos;t see your role? We&apos;re always looking for exceptional talent. Send your resume to <a href="mailto:hello@codazz.com" style={{ color: '#22c55e', textDecoration: 'none' }}>hello@codazz.com</a>.
              </p>
            </div>
            <div style={{ display: 'grid', gap: 20, maxWidth: 800, margin: '0 auto' }}>
              {openings.map(job => (
                <div key={job.title} style={{
                  background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 24, padding: 'clamp(24px, 3vw, 36px)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{job.title}</h3>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {[job.team, job.location, job.type].map(tag => (
                          <span key={tag} style={{
                            fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100,
                            background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)',
                            letterSpacing: '0.04em',
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16 }}>{job.description}</p>
                  <div style={{ marginBottom: 20 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Requirements</p>
                    <ul style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
                      {job.requirements.map(req => <li key={req}>{req}</li>)}
                    </ul>
                  </div>
                  <a href={`mailto:hello@codazz.com?subject=Application: ${job.title}`} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 13, fontWeight: 700, color: '#22c55e', textDecoration: 'none',
                  }}>
                    Apply Now &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{
              textAlign: 'center', padding: 'clamp(40px, 6vw, 64px) clamp(20px, 4vw, 48px)',
              background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 28,
            }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, marginBottom: 16 }}>
                Ready to Build Something Great?
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
                Send your resume and portfolio to <a href="mailto:hello@codazz.com" style={{ color: '#22c55e', textDecoration: 'none' }}>hello@codazz.com</a>. Tell us what excites you about building software and why Codazz is the right place for you.
              </p>
              <a href="mailto:hello@codazz.com?subject=Career Inquiry" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: 48, padding: '0 28px', borderRadius: 100,
                background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
              }}>
                Get in Touch
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
