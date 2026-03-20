'use client';

import { useState } from 'react';

interface FAQAccordionProps {
  faqs: { q: string; a: string }[];
  heading?: string;
  cityName?: string;
}

export default function FAQAccordion({ faqs, heading, cityName }: FAQAccordionProps) {
  const [active, setActive] = useState<number | null>(null);

  const displayHeading = heading || (cityName ? `Frequently Asked Questions — ${cityName}` : 'Frequently Asked Questions');

  return (
    <section
      style={{
        padding: 'clamp(60px, 10vw, 120px) 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="cb-container">
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            color: 'rgba(255,255,255,0.25)',
            marginBottom: 20,
          }}
        >
          FAQ
        </div>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#ffffff',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            margin: '0 0 clamp(32px, 5vw, 56px) 0',
          }}
        >
          {displayHeading}
        </h2>

        <div style={{ maxWidth: 800 }}>
          {faqs.map((faq, i) => {
            const isOpen = active === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-acc-${i}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: 16,
                    fontFamily: 'inherit',
                    minHeight: 44,
                  }}
                  onMouseEnter={(e) => {
                    const span = e.currentTarget.querySelector('span') as HTMLElement;
                    if (span) span.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    const span = e.currentTarget.querySelector('span') as HTMLElement;
                    if (span) span.style.color = 'rgba(255,255,255,0.92)';
                  }}
                >
                  <span
                    style={{
                      fontSize: 'clamp(15px, 2.5vw, 17px)',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.92)',
                      lineHeight: 1.4,
                      letterSpacing: '-0.01em',
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.3s',
                      background: isOpen ? 'rgba(34,197,94,0.12)' : 'transparent',
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? '#22c55e' : 'rgba(255,255,255,0.3)'}
                      strokeWidth="2.5"
                      style={{
                        transition: 'transform 0.3s, stroke 0.3s',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>
                <div
                  id={`faq-acc-${i}`}
                  role="region"
                  style={{
                    maxHeight: isOpen ? 500 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.75,
                      paddingBottom: 20,
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
