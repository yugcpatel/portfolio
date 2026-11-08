import React from 'react';
import { ArrowLeft, WarningCircle } from '@phosphor-icons/react';
import { SITE_CONFIG } from '../config';
import { QuantumNestMonogram } from './BrandingElements';

export default function NotFoundView({ onBackToHome }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
      {/* Brand Icon */}
      <div className="mb-6 shadow-sm rounded-2xl overflow-hidden">
        <QuantumNestMonogram className="w-12 h-12" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-slate-200 text-xs font-mono text-[#52525B] mb-6">
        <WarningCircle weight="bold" className="w-4 h-4 text-amber-500" />
        <span>Error 404 · Page not located</span>
      </div>

      <h1 className="heading-2 text-[#09090B] mb-4 max-w-[680px]">
        This page does not exist or has moved
      </h1>

      <p className="body-2 text-[#52525B] max-w-[480px] mb-8">
        We could not find the page you requested. You can return directly to the {SITE_CONFIG.brandName} homepage below.
      </p>

      <button
        type="button"
        onClick={onBackToHome}
        className="button-md py-2 px-3 rounded-xl bg-[#0F172A] text-white hover:bg-slate-800 transition-all duration-300 active:scale-[0.98] inline-flex items-center gap-2 shadow-sm"
      >
        <ArrowLeft weight="bold" className="w-4 h-4" />
        <span>Return to homepage</span>
      </button>

      <div className="mt-12 pt-6 border-t border-slate-200 text-xs font-mono text-[#52525B]">
        <span>Direct assistance: {SITE_CONFIG.phoneDisplay}</span>
      </div>
    </div>
  );
}

