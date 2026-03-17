'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const follower = followerRef.current;
    if (!dot || !follower) return;

    let mouseX = 0, mouseY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.05, ease: 'none' });
      gsap.to(follower, { x: mouseX, y: mouseY, duration: 0.35, ease: 'power2.out' });
    };

    const onEnterLink = () => {
      gsap.to(dot, { scale: 0, duration: 0.2 });
      gsap.to(follower, { scale: 2.2, borderColor: 'rgba(124,58,237,0.8)', duration: 0.3, ease: 'power2.out' });
    };

    const onLeaveLink = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(follower, { scale: 1, borderColor: 'rgba(255,255,255,0.7)', duration: 0.3, ease: 'power2.out' });
    };

    const onEnterButton = () => {
      gsap.to(dot, { scale: 0, duration: 0.2 });
      gsap.to(follower, {
        scale: 3,
        background: 'rgba(124,58,237,0.15)',
        borderColor: 'rgba(124,58,237,0.6)',
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const onLeaveButton = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(follower, {
        scale: 1,
        background: 'transparent',
        borderColor: 'rgba(255,255,255,0.7)',
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    document.addEventListener('mousemove', onMove);

    // Attach to all interactive elements
    const attachListeners = () => {
      document.querySelectorAll('a').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
      document.querySelectorAll('button, [data-cursor="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnterButton);
        el.addEventListener('mouseleave', onLeaveButton);
      });
    };

    attachListeners();

    // Re-attach on DOM changes (for dynamic content)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
