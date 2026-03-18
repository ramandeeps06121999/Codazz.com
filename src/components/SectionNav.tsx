'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'industries', label: 'Industries' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionNav() {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 1.5);
      const scrollY = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActive(sections[i].id);
          return;
        }
      }
      setActive(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav className="hide-mobile" style={{
      position: 'fixed', left: 24, top: '50%', transform: 'translateY(-50%)',
      zIndex: 998, display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          style={{
            width: 8, height: 8, borderRadius: '50%',
            background: active === s.id ? '#22c55e' : 'rgba(255,255,255,0.2)',
            transition: 'all 0.2s',
            border: active === s.id ? '2px solid #22c55e' : '2px solid transparent',
            boxShadow: active === s.id ? '0 0 12px rgba(34,197,94,0.5)' : 'none',
          }}
          aria-label={`Go to ${s.label}`}
          title={s.label}
        />
      ))}
    </nav>
  );
}
