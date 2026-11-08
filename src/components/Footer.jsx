import React, { useState } from 'react';
import { X, ShieldCheck, FileText, ArrowLeft } from '@phosphor-icons/react';
import { SITE_CONFIG } from '../config';
import { QuantumNestMonogram } from './BrandingElements';

export default function Footer({ onToggle404 }) {
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

  return (
    <>
      <footer className="py-10 md:py-12 px-4 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-2.5">
              <QuantumNestMonogram className="w-7 h-7" />
              <span className="title-2 font-semibold text-[#09090B]">
                {SITE_CONFIG.brandName}
              </span>
            </div>
            <p className="caption-2 text-[#52525B]">
              Hand crafted websites and booking systems for local businesses in {SITE_CONFIG.city}.
            </p>
          </div>

          {/* Quick Legal and Test Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#52525B]">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="caption-1 text-[#52525B] hover:text-[#09090B] focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded px-1"
            >
              Privacy policy
            </button>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="caption-1 text-[#52525B] hover:text-[#09090B] focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded px-1"
            >
              Terms of service
            </button>
            {/* Custom 404 test button per B10 verification */}
            <button
              type="button"
              onClick={onToggle404}
              className="caption-3 font-mono text-blue-600 hover:text-blue-700 bg-white px-2 py-1 rounded-md border border-slate-200"
            >
              Preview custom 404
            </button>
          </div>

          {/* Direct Phone / Contact Badge */}
          <div className="flex flex-col items-center md:items-end text-xs text-[#52525B] font-mono gap-1">
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-[#09090B] transition-colors">
              Direct line: {SITE_CONFIG.phoneDisplay}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#09090B] transition-colors">
              {SITE_CONFIG.email}
            </a>
            <span>{SITE_CONFIG.city}</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-slate-200 text-center">
          <p className="caption-5 text-[#52525B]">
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {activeModal === 'privacy' && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
        >
          <div className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck weight="bold" className="w-5 h-5 text-blue-600" />
                <h3 id="privacy-title" className="title-2 font-semibold text-[#09090B]">
                  Privacy policy
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
                className="p-1 rounded-lg text-slate-400 hover:text-[#09090B] hover:bg-slate-100"
              >
                <X weight="bold" className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4 text-xs text-[#52525B] leading-relaxed">
              <p>
                Your privacy is paramount. At {SITE_CONFIG.brandName}, we collect only the necessary contact details (such as your phone number and business name) required to create and send your custom homepage preview.
              </p>
              <p>
                We do not sell, rent, or distribute your phone number or business information to third party lead brokers or marketing lists. Your contact information is used solely for direct communication regarding your website build.
              </p>
              <p>
                All website analytics tracking installed on client websites conforms to strict privacy best practices, prioritizing customer anonymity and secure data processing.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="button-sm py-2 px-3 rounded-lg bg-[#0F172A] text-white hover:bg-slate-800"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {activeModal === 'terms' && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="terms-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
        >
          <div className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <FileText weight="bold" className="w-5 h-5 text-blue-600" />
                <h3 id="terms-title" className="title-2 font-semibold text-[#09090B]">
                  Terms of service
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
                className="p-1 rounded-lg text-slate-400 hover:text-[#09090B] hover:bg-slate-100"
              >
                <X weight="bold" className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4 text-xs text-[#52525B] leading-relaxed">
              <p>
                Our 48 hour custom homepage preview is provided 100 percent free of charge and without any purchase obligation. You review the working preview on your mobile device before entering any formal project contract.
              </p>
              <p>
                Once you approve the design and commission the full site build, an exact flat project rate is agreed upon in writing. Turnaround is completed within 7 to 10 days upon receipt of required business details.
              </p>
              <p>
                Upon final invoice settlement, all custom code, written assets, and domain configurations belong completely to your business. You maintain full ownership without proprietary vendor lock.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="button-sm py-2 px-3 rounded-lg bg-[#0F172A] text-white hover:bg-slate-800"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

