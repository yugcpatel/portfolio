import React, { useEffect, useRef, useState } from 'react';

export default function TaglineReveal() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const text =
    'Most local business websites look like they were built ten years ago and lose customers on mobile every single day. Your customers judge your business in three seconds on their phone. We build fast custom websites that make your phone ring.';

  const words = text.split(' ');

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId = null;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger line is at 75% down the viewport
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.35;

      const current = rect.top;
      let calculatedProgress = 0;

      if (current <= end) {
        calculatedProgress = 1;
      } else if (current >= start) {
        calculatedProgress = 0;
      } else {
        calculatedProgress = (start - current) / (start - end);
      }

      setProgress(Math.min(1, Math.max(0, calculatedProgress)));
    };

    const onScrollThrottled = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScrollThrottled, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScrollThrottled);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  // How many words should be lit up based on progress
  const activeWordCount = prefersReducedMotion
    ? words.length
    : Math.floor(progress * (words.length + 2));

  return (
    <section className="py-16 md:py-24 px-4 bg-[#F8FAFC] border-y border-slate-200">
      <div ref={containerRef} className="max-w-[680px] mx-auto text-center">
        <span className="caption-3 text-blue-600 uppercase tracking-wider block mb-4">
          The local search reality
        </span>
        <p className="heading-3 text-[#09090B] leading-snug tracking-tight">
          {words.map((word, index) => {
            const isActive = index < activeWordCount;
            return (
              <span
                key={`${word}-${index}`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDuration: '500ms',
                }}
                className={`inline-block mr-1.5 transition-opacity duration-500 ${
                  isActive ? 'opacity-100 text-[#09090B]' : 'opacity-30 text-[#09090B]'
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}

