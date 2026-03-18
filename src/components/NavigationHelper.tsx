'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Adds .navigated to <body> on client-side navigation so reveal animations
 * show content instantly (no fade-in delay) when switching pages.
 * On initial page load, reveals animate normally.
 */
export default function NavigationHelper() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip the very first render (initial page load)
    const isFirstLoad = !document.body.classList.contains('__hydrated');
    if (isFirstLoad) {
      document.body.classList.add('__hydrated');
      return;
    }

    // Client-side navigation: add .navigated, then remove after content paints
    document.body.classList.add('navigated');
    const timer = setTimeout(() => {
      document.body.classList.remove('navigated');
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
