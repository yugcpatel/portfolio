import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TaglineReveal from './components/TaglineReveal';
import InteractiveEstimator from './components/InteractiveEstimator';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import TechnicalProof from './components/TechnicalProof';
import DeveloperAccountability from './components/DeveloperAccountability';
import FaqSection from './components/FaqSection';
import ConversionHub from './components/ConversionHub';
import Footer from './components/Footer';
import NotFoundView from './components/NotFoundView';

import { SITE_CONFIG } from './config';
export { SITE_CONFIG };

// Section wrapper component that attaches IntersectionObserver for scroll reveals (Rule B7)
function RevealSection({ children, id, className = '' }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Reveal once, never replay on scroll up
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id={id}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDuration: '700ms',
      }}
      className={`transform transition-all ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [is404Active, setIs404Active] = useState(false);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If user toggles the custom branded 404 preview (Rule B10)
  if (is404Active) {
    return <NotFoundView onBackToHome={() => setIs404Active(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-[#09090B] font-sans selection:bg-[#F1F5F9] selection:text-[#09090B] overflow-x-hidden">
      {/* Keyboard Skip to content link per Rule B10 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:py-2 focus:px-3 focus:bg-[#0F172A] focus:text-white focus:rounded-lg focus:shadow-md focus-visible:outline-none"
      >
        Skip to content
      </a>

      {/* Floating Navigation Bar (Rule B7) */}
      <Navbar onOpenCta={scrollToContact} />

      {/* Main semantic wrapper */}
      <main id="main-content">
        {/* Section 1: Hero & Interactive Industry App Switcher (Above the Fold) */}
        <Hero onPrimaryCtaClick={scrollToContact} />

        {/* Section 2: Mandatory Word-by-Word Tagline Reveal (Rule B11) */}
        <TaglineReveal />

        {/* Section 3: Interactive "Lost Local Customers" & Scope Estimator */}
        <RevealSection id="section-estimator">
          <InteractiveEstimator />
        </RevealSection>

        {/* Section 4: Problem to Solution & 4 Outcome-Driven Benefits */}
        <RevealSection id="section-benefits">
          <Benefits />
        </RevealSection>

        {/* Section 5: How It Works (3 Simple Steps) */}
        <RevealSection id="section-steps">
          <HowItWorks />
        </RevealSection>

        {/* Section 6: Proof, Technical Benchmarks & Future Case Studies Slot */}
        <RevealSection id="section-proof">
          <TechnicalProof />
        </RevealSection>

        {/* Section 7: Direct Local Developer Accountability Card & Risk Reversal */}
        <RevealSection id="section-accountability">
          <DeveloperAccountability />
        </RevealSection>

        {/* Section 8: FAQ (8 High-Friction Local Business Questions) */}
        <RevealSection id="section-faq">
          <FaqSection />
        </RevealSection>

        {/* Section 9: Final Conversion Hub (Identical Primary CTA + Form + Calendar) */}
        <RevealSection id="section-contact">
          <ConversionHub />
        </RevealSection>
      </main>

      {/* Section 10: Ship Requirements & Footer (Rule B10) */}
      <Footer onToggle404={() => setIs404Active(true)} />
    </div>
  );
}

