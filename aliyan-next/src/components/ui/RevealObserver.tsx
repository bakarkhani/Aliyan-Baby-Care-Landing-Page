'use client';

import { useEffect } from 'react';

export function RevealObserver() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          currentObserver.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    function updatePreference() {
      observer.disconnect();
      targets.forEach((element) => {
        if (reducedMotion.matches) {
          // Mark these as seen so toggling motion cannot replay visible content.
          element.classList.add('is-revealed');
        } else if (!element.classList.contains('is-revealed')) {
          observer.observe(element);
        }
      });
    }
    updatePreference();
    reducedMotion.addEventListener('change', updatePreference);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener('change', updatePreference);
    };
  }, []);

  return null;
}
