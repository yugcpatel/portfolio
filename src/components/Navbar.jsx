import React, { useState, useEffect } from 'react';
import { List, X, Sparkle, ArrowRight, PhoneCall, WhatsappLogo } from '@phosphor-icons/react';
import { SITE_CONFIG } from '../config';

export default function Navbar({ onOpenCta }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { href: '#preview', label: 'Live demo' },
    { href: '#calculator', label: 'Revenue calculator' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#steps', label: 'How it works' },
    { href: '#faq', label: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'preview', 'calculator', 'benefits', 'steps', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollTo = (href) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Transparent Frosted Header in Hero */}
      <header className="fixed top-3 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Primary navigation"
          className="pointer-events-auto flex items-center justify-between gap-3 md:gap-8 px-4 py-2 bg-white/60 backdrop-blur-xl border border-white/80 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-4xl w-full md:w-auto transition-all duration-300 hover:bg-white/75 hover:border-slate-200"
        >
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#hero');
            }}
            className="flex items-center gap-2 group text-[#09090B] focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded-full"
          >
            <div className="w-8 h-8 rounded-full bg-[#0F172A] flex items-center justify-center text-white shadow-xs transition-transform duration-300 group-hover:scale-105 active:scale-95">
              <Sparkle weight="bold" className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="title-3 font-semibold tracking-tight text-[#09090B]">
                {SITE_CONFIG.brandName}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className={`title-4 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded px-1 ${
                    isActive
                      ? 'text-[#09090B] font-semibold'
                      : 'text-[#52525B] hover:text-[#09090B]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Quick Direct Actions on Desktop */}
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20${encodeURIComponent(SITE_CONFIG.founderName)}%2C%20I%20would%20like%20a%20free%20homepage%20preview%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <WhatsappLogo weight="fill" className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenCta}
              className="button-sm py-2 px-3 rounded-full bg-[#0F172A] text-white hover:bg-slate-800 transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none flex items-center gap-1.5 shadow-xs"
            >
              <span>Get free preview</span>
              <ArrowRight weight="bold" className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#09090B] hover:bg-slate-100 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none active:scale-95"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span
                  className={`absolute transform transition-transform transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? 'rotate-90 opacity-0 pointer-events-none' : 'rotate-0 opacity-100'
                  }`}
                >
                  <List weight="bold" className="w-5 h-5 text-[#09090B]" />
                </span>
                <span
                  className={`absolute transform transition-transform transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 pointer-events-none'
                  }`}
                >
                  <X weight="bold" className="w-5 h-5 text-[#09090B]" />
                </span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full Screen Menu Drawer */}
      <div
        className={`fixed inset-0 z-30 md:hidden bg-white/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col gap-6">
          <p className="caption-3 text-[#52525B] tracking-wider uppercase">Navigation</p>
          <div className="flex flex-col gap-4">
            {navLinks.map((link, idx) => {
              const delay = idx * 60;
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  style={{
                    transitionDelay: isOpen ? `${delay}ms` : '0ms',
                  }}
                  className={`title-1 text-left py-2 text-[#09090B] hover:text-blue-600 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          style={{
            transitionDelay: isOpen ? `${navLinks.length * 60}ms` : '0ms',
          }}
          className={`flex flex-col gap-4 p-4 rounded-2xl border border-slate-200/90 bg-white/70 backdrop-blur-md shadow-xs transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="caption-1 text-[#09090B] font-semibold">{SITE_CONFIG.founderName}</span>
            </div>
            <span className="caption-3 text-slate-500 font-mono">{SITE_CONFIG.city}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex-1 button-sm py-2 px-3 rounded-lg border border-slate-200 bg-white text-[#09090B] hover:bg-slate-50 text-center flex items-center justify-center gap-1.5"
            >
              <PhoneCall weight="bold" className="w-3.5 h-3.5 text-blue-600" />
              <span>Call now</span>
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20${encodeURIComponent(SITE_CONFIG.founderName)}%2C%20I%20would%20like%20a%20free%20homepage%20preview%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 button-sm py-2 px-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-center flex items-center justify-center gap-1.5"
            >
              <WhatsappLogo weight="fill" className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onOpenCta();
            }}
            className="w-full button-md py-2 px-3 rounded-lg bg-[#0F172A] text-white text-center hover:bg-slate-800 transition-colors duration-300"
          >
            Text me for your free homepage preview
          </button>
        </div>
      </div>
    </>
  );
}
