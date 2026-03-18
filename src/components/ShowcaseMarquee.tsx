'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const SHOWCASE_IMAGES = [
  '/portfolio/all-devices-black-1.png',
  '/portfolio/image-1888377.jpg',
  '/portfolio/1-4.png',
  '/portfolio/all-devices-black-2.png',
  '/portfolio/image-1877877.jpg',
  '/portfolio/Untitled-design-18.png',
  '/portfolio/all-devices-black-3.png',
  '/portfolio/3-1-1.png',
  '/portfolio/Untitled-design-21.png',
  '/portfolio/all-devices-black-4.png',
  '/portfolio/Group-26.jpg',
  '/portfolio/2-1.png',
];

const FADE_IN: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
};

export default function ShowcaseMarquee() {
  const duplicated = [...SHOWCASE_IMAGES, ...SHOWCASE_IMAGES];

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden flex flex-col items-center justify-center text-center section-padding'
      )}
      style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '40%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(1200px, 150vw)', height: 'min(800px, 100vw)',
          background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.03) 30%, transparent 60%)',
          filter: 'blur(80px)', pointerEvents: 'none',
        }}
      />

      {/* Text content */}
      <div style={{ position: 'relative', zIndex: 10 }} className="flex flex-col items-center px-4">
        {/* Tag */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_IN}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 18px', borderRadius: 100, marginBottom: 24,
            background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
            Our Work Speaks
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800,
            letterSpacing: '-0.04em', lineHeight: 1.05,
            color: '#ffffff', maxWidth: 800,
          }}
        >
          {['Products', 'That', 'Users'].map((word, i) => (
            <motion.span key={i} variants={FADE_IN} className="inline-block">
              {word}&nbsp;
            </motion.span>
          ))}
          <br />
          <motion.span variants={FADE_IN} className="inline-block" style={{ color: '#22c55e' }}>
            Actually Love.
          </motion.span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_IN}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: 24, maxWidth: 560, fontSize: 17,
            color: 'rgba(255,255,255,0.4)', lineHeight: 1.7,
          }}
        >
          200+ products shipped across fintech, healthcare, e-commerce, and SaaS — built to scale, designed to convert.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_IN}
          transition={{ delay: 0.5 }}
          style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              height: 52, padding: '0 32px', borderRadius: 100,
              background: 'linear-gradient(135deg, #22c55e, #4ade80)',
              color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Start Your Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link
            href="/portfolio"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 52, padding: '0 28px', borderRadius: 100,
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#ffffff', fontSize: 15, fontWeight: 600, textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>

      {/* Image Marquee */}
      <div
        style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}
        className="relative w-full overflow-hidden"
      >
        {/* Fade edges */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 200, height: '100%', background: 'linear-gradient(to right, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: '100%', background: 'linear-gradient(to left, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <motion.div
          className="flex gap-5"
          animate={{
            x: ['-50%', '0%'],
            transition: {
              ease: 'linear',
              duration: 50,
              repeat: Infinity,
            },
          }}
        >
          {duplicated.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0"
              style={{
                width: 'clamp(200px, 20vw, 280px)',
                height: 'clamp(260px, 26vw, 360px)',
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                transform: `rotate(${index % 2 === 0 ? -2 : 3}deg)`,
              }}
            >
              <img
                src={src}
                alt={`Project showcase ${(index % SHOWCASE_IMAGES.length) + 1}`}
                loading="lazy"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'brightness(0.8) saturate(0.9)',
                  transition: 'filter 0.4s ease',
                }}
                onMouseEnter={e => { (e.target as HTMLImageElement).style.filter = 'brightness(1) saturate(1)'; }}
                onMouseLeave={e => { (e.target as HTMLImageElement).style.filter = 'brightness(0.8) saturate(0.9)'; }}
              />
              {/* Subtle green overlay on bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                pointerEvents: 'none',
              }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
