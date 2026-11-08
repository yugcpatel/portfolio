import React from 'react';
import {
  User,
  MapPin,
  PhoneCall,
  ShieldCheck,
  CheckCircle,
  Handshake,
  WhatsappLogo,
  EnvelopeSimple,
} from '@phosphor-icons/react';
import { SITE_CONFIG } from '../config';
import { FounderSignature } from './BrandingElements';

export default function DeveloperAccountability() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Developer Accountability Card */}
        <div className="p-6 md:p-10 rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Developer Bio & Profile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#0F172A] border-2 border-slate-200 flex items-center justify-center text-white shadow-sm">
                <User weight="bold" className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="title-1 font-semibold text-[#09090B]">
                  {SITE_CONFIG.founderName}
                </h3>
                <p className="caption-1 text-[#52525B]">
                  Lead developer and founder at {SITE_CONFIG.brandName}
                </p>
              </div>

              {/* Handwritten Vector Signature (Upgrade 4) */}
              <div className="pt-1 pb-1">
                <FounderSignature className="w-44 h-12" />
                <p className="font-mono text-[11px] text-[#52525B] mt-0.5">
                  Direct cell: {SITE_CONFIG.phoneDisplay}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#09090B]">
                <MapPin weight="bold" className="w-3.5 h-3.5 text-blue-600" />
                <span>Based in {SITE_CONFIG.city}</span>
              </div>
            </div>

            {/* Middle & Right: Accountability Details */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <span className="caption-3 text-blue-600 uppercase tracking-wider block mb-2">
                  Local accountability
                </span>
                <h4 className="heading-4 text-[#09090B] mb-2">
                  No junior account managers. You talk directly with the engineer building your site.
                </h4>
                <p className="body-3 text-[#52525B]">
                  When you work with large design agencies, you get passed around to junior coordinators who do not code. With QuantumNest, you get my personal cell phone number. We can meet in person at your office, coffee shop in Vancouver or Surrey, or review your project over video.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <Handshake weight="bold" className="w-4 h-4 text-emerald-600" />
                    <span className="title-4 font-semibold text-[#09090B]">In person meetings</span>
                  </div>
                  <p className="caption-2 text-[#52525B]">
                    Available for on site visits across {SITE_CONFIG.city} to inspect your workflow.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <PhoneCall weight="bold" className="w-4 h-4 text-blue-600" />
                    <span className="title-4 font-semibold text-[#09090B]">Direct phone access</span>
                  </div>
                  <p className="caption-2 text-[#52525B]">
                    Call or text {SITE_CONFIG.phoneDisplay} anytime during business hours for quick updates.
                  </p>
                </div>
              </div>

              {/* Quick direct communication buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="button-sm py-2 px-3 rounded-lg border border-slate-200 bg-white text-[#09090B] hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <PhoneCall weight="bold" className="w-4 h-4 text-blue-600" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20${encodeURIComponent(SITE_CONFIG.founderName)}%2C%20I%20would%20like%20to%20chat%20about%20a%20website%20preview.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sm py-2 px-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <WhatsappLogo weight="fill" className="w-4 h-4" />
                  <span>WhatsApp Yug</span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="button-sm py-2 px-3 rounded-lg border border-slate-200 bg-white text-[#52525B] hover:text-[#09090B] hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <EnvelopeSimple weight="bold" className="w-4 h-4 text-indigo-600" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Reversal Banner */}
        <div className="p-6 md:p-8 rounded-2xl border border-blue-200 bg-blue-50/50 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-600 text-white shrink-0 mt-0.5 shadow-xs">
              <ShieldCheck weight="bold" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="title-1 font-semibold text-[#09090B] mb-1">
                100 percent risk free preview guarantee
              </h4>
              <p className="body-5 text-[#52525B]">
                See your custom homepage working on your phone before you pay a single dollar. If you are not completely thrilled, you owe nothing and we part as friends.
              </p>
            </div>
          </div>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="button-sm py-2 px-3 rounded-xl bg-[#0F172A] text-white hover:bg-slate-800 transition-all duration-300 active:scale-[0.98] inline-flex items-center gap-2 shrink-0 shadow-sm whitespace-nowrap"
          >
            <PhoneCall weight="bold" className="w-4 h-4" />
            <span>Call {SITE_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
