'use client';

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

/* ── Scroll-reveal hook ──────────────────────────────────────────── */
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

/* ── Data ─────────────────────────────────────────────────────────── */

const whyCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Remote-First Culture',
    desc: 'Work from anywhere in the world. No mandatory office hours, no commute. We measure output, not hours logged. Our entire workflow is built for distributed teams.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Cutting-Edge Tech',
    desc: 'Work with Next.js, React Native, Flutter, PyTorch, Kubernetes, AWS, and more. We stay on the bleeding edge so you never stop learning and growing as an engineer.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Career Growth',
    desc: 'Annual learning budgets, mentorship from senior architects, cross-project exposure, and clear promotion paths. Your growth here is intentional, not accidental.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Global Impact',
    desc: 'Build products used by millions across fintech, healthcare, logistics, and e-commerce. Your code ships to real users solving real problems every single day.',
  },
];

const openPositions = [
  {
    title: 'Senior React Native Developer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Mobile Engineering',
    description: 'Build and ship cross-platform mobile applications for clients across fintech, healthcare, and e-commerce. Own features end-to-end, from architecture through App Store deployment.',
  },
  {
    title: 'Full Stack Engineer — Node.js/Next.js',
    location: 'Edmonton or Remote',
    type: 'Full-time',
    department: 'Web Engineering',
    description: 'Design, build, and scale full-stack web applications using Next.js, Node.js, and PostgreSQL. Work directly with product teams to ship SaaS platforms and enterprise portals.',
  },
  {
    title: 'AI/ML Engineer',
    location: 'Chandigarh or Remote',
    type: 'Full-time',
    department: 'AI & Data',
    description: 'Develop and deploy machine learning models, LLM integrations, and AI-powered features for production applications. Experience with PyTorch, TensorFlow, or Hugging Face required.',
  },
  {
    title: 'DevOps Engineer — AWS/Kubernetes',
    location: 'Remote',
    type: 'Full-time',
    department: 'Infrastructure',
    description: 'Architect and maintain cloud infrastructure on AWS. Build CI/CD pipelines, manage Kubernetes clusters, and ensure 99.99% uptime across dozens of production environments.',
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Design',
    description: 'Create intuitive, beautiful user experiences for mobile and web applications. Lead design sprints, build design systems in Figma, and collaborate closely with engineering.',
  },
  {
    title: 'Flutter Developer',
    location: 'Chandigarh',
    type: 'Full-time',
    department: 'Mobile Engineering',
    description: 'Build high-performance cross-platform mobile apps with Flutter and Dart. Work on greenfield projects for startups and enterprise clients across multiple industries.',
  },
  {
    title: 'Project Manager',
    location: 'Edmonton',
    type: 'Full-time',
    department: 'Delivery',
    description: 'Lead cross-functional engineering teams through the full software delivery lifecycle. Manage timelines, budgets, and client communication for 3-5 concurrent projects.',
  },
  {
    title: 'QA Automation Engineer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Quality Engineering',
    description: 'Build and maintain automated test suites using Cypress, Playwright, and Appium. Establish quality gates in CI/CD pipelines and drive a culture of engineering quality.',
  },
];

const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
  { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis'] },
  { category: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI', 'Hugging Face'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions'] },
  { category: 'Data', items: ['MongoDB', 'Elasticsearch', 'BigQuery', 'Kafka', 'Snowflake'] },
];

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Health Insurance',
    desc: 'Comprehensive medical, dental, and vision coverage for you and your family.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Flexible Hours',
    desc: 'Set your own schedule. We trust you to manage your time and deliver results.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Remote Work',
    desc: 'Work from home, a co-working space, or a beach in Bali. Your choice, always.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Learning Budget',
    desc: '$1,500/year for courses, conferences, books, and certifications of your choosing.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Team Offsites',
    desc: 'Annual team retreats to connect, collaborate, and celebrate wins together.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" />
      </svg>
    ),
    title: 'Competitive Pay',
    desc: 'Market-rate compensation based on your talent, not your location or zip code.',
  },
];

const locations = [
  {
    city: 'Edmonton',
    country: 'Canada',
    label: 'HQ',
    description: 'Our North American headquarters. Home to leadership, project management, and client-facing teams. Located in the heart of Alberta\'s tech corridor.',
    timezone: 'MST (UTC-7)',
  },
  {
    city: 'Chandigarh',
    country: 'India',
    label: 'Dev Center',
    description: 'Our primary engineering and development center. A 50+ person team of full-stack engineers, AI/ML specialists, mobile developers, and QA engineers.',
    timezone: 'IST (UTC+5:30)',
  },
];

/* ── Component ────────────────────────────────────────────────────── */

export default function PageClient() {
  const mainRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={mainRef} style={{ background: '#000000', color: '#ffffff', minHeight: '100vh' }}>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 1 — Hero
        ═══════════════════════════════════════════════════════════ */}
        <section style={{
          padding: 'clamp(140px, 14vw, 200px) 0 clamp(80px, 10vw, 120px)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background glow */}
          <div aria-hidden="true" style={{
            position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 900,
            background: 'radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 60%)',
            filter: 'blur(100px)', pointerEvents: 'none',
          }} />
          <div aria-hidden="true" style={{
            position: 'absolute', bottom: '-20%', right: '-10%',
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(34,197,94,0.04) 0%, transparent 60%)',
            filter: 'blur(80px)', pointerEvents: 'none',
          }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
            <div className="reveal" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid rgba(34,197,94,0.35)', borderRadius: 999,
              padding: '7px 22px', fontSize: 13, fontWeight: 600,
              color: '#22c55e', marginBottom: 28, letterSpacing: '0.04em',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px rgba(34,197,94,0.5)', display: 'inline-block' }} />
              We&apos;re Hiring
            </div>

            <h1 className="reveal" style={{
              fontSize: 'clamp(2.6rem, 6.5vw, 5.2rem)',
              fontWeight: 800, lineHeight: 1.08,
              letterSpacing: '-0.04em', marginBottom: 24,
            }}>
              Build the Future<br />
              <span style={{
                background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 50%, #86efac 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                with Us
              </span>
            </h1>

            <p className="reveal" style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.55)', lineHeight: 1.75,
              maxWidth: 640, margin: '0 auto 40px',
            }}>
              We&apos;re a global team of 100+ engineers, designers, and strategists building
              products that serve millions of users. Join us and work on software that
              actually matters.
            </p>

            <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="#positions" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: 54, padding: '0 34px', borderRadius: 100,
                background: 'linear-gradient(135deg, #22c55e, #4ade80)',
                color: '#000', fontSize: 15, fontWeight: 700,
                textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 0 30px rgba(34,197,94,0.2)',
              }}>
                View Open Positions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
              </Link>
              <a href="mailto:careers@codazz.com" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: 54, padding: '0 34px', borderRadius: 100,
                background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
                color: '#ffffff', fontSize: 15, fontWeight: 600,
                textDecoration: 'none', transition: 'border-color 0.2s',
              }}>
                Send Your Resume
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
              </a>
            </div>

            {/* Mini stats */}
            <div className="reveal" style={{
              display: 'flex', justifyContent: 'center', gap: 'clamp(24px, 5vw, 56px)',
              marginTop: 56, flexWrap: 'wrap',
            }}>
              {[
                ['100+', 'Engineers'],
                ['500+', 'Projects'],
                ['24', 'Countries'],
                ['98%', 'Retention'],
              ].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>{val}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 2 — Why Codazz
        ═══════════════════════════════════════════════════════════ */}
        <section style={{
          padding: 'clamp(64px, 10vw, 100px) 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                display: 'block', marginBottom: 16,
              }}>Why Codazz</span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16,
              }}>A Place Where Engineers Thrive</h2>
              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
                maxWidth: 560, margin: '0 auto',
              }}>
                We built Codazz to be the company we always wanted to work at.
                Here&apos;s what that looks like in practice.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 20,
            }}>
              {whyCards.map((card, i) => (
                <div key={card.title} className="reveal" style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 24, padding: 'clamp(28px, 3vw, 40px)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'border-color 0.3s, transform 0.3s',
                }}>
                  <div aria-hidden="true" style={{
                    position: 'absolute', top: -40, right: -40,
                    width: 120, height: 120,
                    background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)',
                    filter: 'blur(30px)', pointerEvents: 'none',
                  }} />
                  <div style={{
                    width: 52, height: 52, borderRadius: 16,
                    background: 'rgba(34,197,94,0.08)',
                    border: '1px solid rgba(34,197,94,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 3 — Open Positions
        ═══════════════════════════════════════════════════════════ */}
        <section id="positions" style={{
          padding: 'clamp(64px, 10vw, 100px) 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                display: 'block', marginBottom: 16,
              }}>Open Positions</span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16,
              }}>Join Our Team</h2>
              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
                maxWidth: 520, margin: '0 auto',
              }}>
                All positions are full-time. We offer competitive salaries,
                equity options, and a comprehensive benefits package.
              </p>
            </div>

            <div style={{
              display: 'grid', gap: 16,
              maxWidth: 880, margin: '0 auto',
            }}>
              {openPositions.map((job) => (
                <div key={job.title} className="reveal" style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 20,
                  padding: 'clamp(24px, 3vw, 36px)',
                  transition: 'border-color 0.3s',
                }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start', flexWrap: 'wrap', gap: 16,
                    marginBottom: 16,
                  }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <h3 style={{
                        fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700,
                        color: '#ffffff', marginBottom: 10, letterSpacing: '-0.02em',
                      }}>
                        {job.title}
                      </h3>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: 11, fontWeight: 600, padding: '5px 14px',
                          borderRadius: 100,
                          background: 'rgba(34,197,94,0.08)',
                          border: '1px solid rgba(34,197,94,0.15)',
                          color: '#22c55e', letterSpacing: '0.03em',
                        }}>{job.department}</span>
                        <span style={{
                          fontSize: 11, fontWeight: 600, padding: '5px 14px',
                          borderRadius: 100,
                          background: 'rgba(255,255,255,0.04)',
                          color: 'rgba(255,255,255,0.5)', letterSpacing: '0.03em',
                        }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            {job.location}
                          </span>
                        </span>
                        <span style={{
                          fontSize: 11, fontWeight: 600, padding: '5px 14px',
                          borderRadius: 100,
                          background: 'rgba(255,255,255,0.04)',
                          color: 'rgba(255,255,255,0.5)', letterSpacing: '0.03em',
                        }}>{job.type}</span>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@codazz.com?subject=Application: ${job.title}&body=Hi Codazz,%0D%0A%0D%0AI'm interested in the ${job.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        height: 42, padding: '0 24px', borderRadius: 100,
                        background: 'linear-gradient(135deg, #22c55e, #4ade80)',
                        color: '#000', fontSize: 13, fontWeight: 700,
                        textDecoration: 'none', flexShrink: 0,
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        boxShadow: '0 0 20px rgba(34,197,94,0.15)',
                      }}
                    >
                      Apply Now
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                  <p style={{
                    fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75,
                    margin: 0,
                  }}>
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 4 — Tech Stack We Use
        ═══════════════════════════════════════════════════════════ */}
        <section style={{
          padding: 'clamp(64px, 10vw, 100px) 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                display: 'block', marginBottom: 16,
              }}>Our Stack</span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16,
              }}>Tech Stack We Use</h2>
              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
                maxWidth: 520, margin: '0 auto',
              }}>
                Modern tools, battle-tested at scale. You will work with the best
                technology available, not legacy stacks from a decade ago.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: 16,
              maxWidth: 960, margin: '0 auto',
            }}>
              {techStack.map((group) => (
                <div key={group.category} className="reveal" style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 20, padding: 28,
                }}>
                  <h3 style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: '#22c55e',
                    marginBottom: 20, paddingBottom: 12,
                    borderBottom: '1px solid rgba(34,197,94,0.15)',
                  }}>
                    {group.category}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {group.items.map((item) => (
                      <div key={item} style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        fontSize: 14, color: 'rgba(255,255,255,0.6)',
                      }}>
                        <span style={{
                          width: 5, height: 5, borderRadius: '50%',
                          background: 'rgba(34,197,94,0.4)', flexShrink: 0,
                        }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 5 — Benefits
        ═══════════════════════════════════════════════════════════ */}
        <section style={{
          padding: 'clamp(64px, 10vw, 100px) 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                display: 'block', marginBottom: 16,
              }}>Perks & Benefits</span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16,
              }}>We Take Care of Our Team</h2>
              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
                maxWidth: 520, margin: '0 auto',
              }}>
                Great work comes from people who feel supported.
                Here&apos;s how we invest in you.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 20,
              maxWidth: 960, margin: '0 auto',
            }}>
              {benefits.map((benefit) => (
                <div key={benefit.title} className="reveal" style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 20, padding: 32,
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: 'rgba(34,197,94,0.08)',
                    border: '1px solid rgba(34,197,94,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#22c55e', flexShrink: 0,
                  }}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 16, fontWeight: 700, color: '#ffffff',
                      marginBottom: 8, letterSpacing: '-0.01em',
                    }}>{benefit.title}</h3>
                    <p style={{
                      fontSize: 14, color: 'rgba(255,255,255,0.45)',
                      lineHeight: 1.7, margin: 0,
                    }}>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 6 — Locations
        ═══════════════════════════════════════════════════════════ */}
        <section style={{
          padding: 'clamp(64px, 10vw, 100px) 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                display: 'block', marginBottom: 16,
              }}>Our Offices</span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16,
              }}>Where We Work</h2>
              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
                maxWidth: 520, margin: '0 auto',
              }}>
                Two offices, one mission. Our distributed team spans the globe,
                anchored by headquarters in Edmonton and our engineering center in Chandigarh.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: 24,
              maxWidth: 880, margin: '0 auto',
            }}>
              {locations.map((loc) => (
                <div key={loc.city} className="reveal" style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 24, padding: 'clamp(32px, 4vw, 48px)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div aria-hidden="true" style={{
                    position: 'absolute', top: -60, right: -60,
                    width: 200, height: 200,
                    background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)',
                    filter: 'blur(40px)', pointerEvents: 'none',
                  }} />
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20,
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#22c55e',
                    }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: 22, fontWeight: 700, color: '#ffffff',
                        letterSpacing: '-0.02em', marginBottom: 2,
                      }}>{loc.city}</h3>
                      <span style={{
                        fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)',
                      }}>{loc.country}</span>
                    </div>
                    <span style={{
                      marginLeft: 'auto',
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: '#22c55e',
                      background: 'rgba(34,197,94,0.08)',
                      border: '1px solid rgba(34,197,94,0.15)',
                      padding: '4px 12px', borderRadius: 100,
                    }}>{loc.label}</span>
                  </div>
                  <p style={{
                    fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75,
                    marginBottom: 16,
                  }}>
                    {loc.description}
                  </p>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: 13, color: 'rgba(255,255,255,0.35)',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    {loc.timezone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 7 — CTA
        ═══════════════════════════════════════════════════════════ */}
        <section style={{
          padding: 'clamp(64px, 10vw, 100px) 0 clamp(80px, 12vw, 120px)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div className="cb-container">
            <div className="reveal" style={{
              textAlign: 'center',
              padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 64px)',
              background: 'linear-gradient(135deg, rgba(34,197,94,0.04) 0%, rgba(255,255,255,0.02) 50%, rgba(34,197,94,0.03) 100%)',
              border: '1px solid rgba(34,197,94,0.12)',
              borderRadius: 32,
              position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden="true" style={{
                position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
                width: 600, height: 600,
                background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 60%)',
                filter: 'blur(80px)', pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: '#22c55e',
                  marginBottom: 20,
                }}>Open Application</span>

                <h2 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  fontWeight: 700, letterSpacing: '-0.03em',
                  marginBottom: 20, lineHeight: 1.15,
                }}>
                  Don&apos;t See Your Role?<br />
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>Send Us Your Resume Anyway</span>
                </h2>

                <p style={{
                  fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75,
                  maxWidth: 540, margin: '0 auto 36px',
                }}>
                  We&apos;re always looking for exceptional engineers, designers, and
                  product thinkers. If you believe you&apos;d be a great fit at Codazz,
                  we want to hear from you. Send your resume and tell us what excites you
                  about building software.
                </p>

                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href="mailto:careers@codazz.com?subject=Open Application — Codazz Careers&body=Hi Codazz,%0D%0A%0D%0AI'd love to join your team. Please find my resume attached.%0D%0A%0D%0ABest regards"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 10,
                      height: 54, padding: '0 36px', borderRadius: 100,
                      background: 'linear-gradient(135deg, #22c55e, #4ade80)',
                      color: '#000', fontSize: 15, fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 0 30px rgba(34,197,94,0.2)',
                    }}
                  >
                    Send Your Resume
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    height: 54, padding: '0 36px', borderRadius: 100,
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#ffffff', fontSize: 15, fontWeight: 600,
                    textDecoration: 'none',
                  }}>
                    Contact Us
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                  </Link>
                </div>

                <p style={{
                  fontSize: 13, color: 'rgba(255,255,255,0.3)',
                  marginTop: 24,
                }}>
                  careers@codazz.com
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
