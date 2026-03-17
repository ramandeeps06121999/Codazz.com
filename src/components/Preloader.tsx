'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: Props) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Logo appears
      tl.from(logoRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Counter + bar animate together
      const counter = { val: 0 };
      tl.to(counter, {
        val: 100,
        duration: 1.8,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(counter.val).toString().padStart(3, '0');
          }
          if (barRef.current) {
            barRef.current.style.width = counter.val + '%';
          }
        },
      }, '-=0.2');

      // Pause at 100 briefly
      tl.to({}, { duration: 0.3 });

      // Whole preloader slides up
      tl.to(preloaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: 'power4.inOut',
        onComplete,
      });

    }, preloaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader noise">
      {/* Orbs */}
      <div className="orb orb-violet absolute w-[600px] h-[600px] -top-40 -left-40 opacity-30" />
      <div className="orb orb-cyan absolute w-[400px] h-[400px] -bottom-20 -right-20 opacity-20" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <div ref={logoRef} className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect width="44" height="44" rx="12" fill="url(#pg)" />
              <path d="M12 22L22 12L32 22L22 32L12 22Z" fill="white" opacity="0.9" />
              <path d="M18 22L22 18L26 22L22 26L18 22Z" fill="url(#pg)" />
              <defs>
                <linearGradient id="pg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-2xl font-black tracking-tight text-white">CODAZZ</span>
          </div>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-medium">Engineering Digital Excellence</p>
        </div>

        {/* Counter */}
        <div ref={counterRef} className="text-[80px] font-black tabular-nums text-white leading-none tracking-tighter"
          style={{ fontVariantNumeric: 'tabular-nums' }}>
          000
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
        <div ref={barRef} className="preloader-bar" />
      </div>
    </div>
  );
}
