'use client';
import { useRef, useEffect } from 'react';

const categories = [
  { label: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Flutter'] },
  { label: 'Mobile', techs: ['Swift', 'Kotlin', 'React Native', 'Expo'] },
  { label: 'Backend', techs: ['Node.js', 'Python', 'GraphQL', 'PostgreSQL', 'Redis'] },
  { label: 'AI / ML', techs: ['TensorFlow', 'OpenAI', 'LangChain', 'HuggingFace'] },
  { label: 'Cloud', techs: ['AWS', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'] },
  { label: 'Web3', techs: ['Solidity', 'Ethers.js', 'IPFS', 'Hardhat'] },
];

export default function TechStack() {
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
    <section ref={ref} id="tech-stack" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="cb-container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 80, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Technology Foundation</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              Built With the Tools<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>of Tomorrow.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.55)', maxWidth: 360, lineHeight: 1.7, margin: 0 }}>
            A curated stack of best-in-class technologies — chosen for reliability, performance, and scalability.
          </p>
        </div>

        <div className="reveal reveal-d1 tech-categories-grid">
          {categories.map((cat, ci) => (
            <div key={cat.label}
              style={{ padding: '32px 28px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 24, background: 'rgba(0,0,0,0.015)', transition: 'all 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; e.currentTarget.style.background = 'rgba(79,70,229,0.02)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; }}
            >
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 }}>{cat.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.techs.map(t => (
                  <span key={t}
                    style={{ padding: '7px 16px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.45)', transition: '0.25s', cursor: 'default' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.35)'; e.currentTarget.style.color = '#4F46E5'; e.currentTarget.style.background = 'rgba(79,70,229,0.06)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = 'rgba(0,0,0,0.45)'; e.currentTarget.style.background = 'transparent'; }}
                  >{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
