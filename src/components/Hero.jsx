import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  SteeringWheel,
  Wrench,
  ForkKnife,
  Heartbeat,
  Scissors,
  CalendarBlank,
  Clock,
  Check,
  DeviceMobile,
  Lightning,
  CurrencyDollar,
  Star,
  MapPin,
} from '@phosphor-icons/react';
import { SITE_CONFIG, BUSINESS_CATEGORIES } from '../config';
import {
  HandDrawnArrowLeft,
  HandDrawnArrowRight,
  EngineeringDotGrid,
} from './BrandingElements';

export default function Hero({ onPrimaryCtaClick }) {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const currentPreview = BUSINESS_CATEGORIES[selectedIndustry];

  const handleTabChange = (index) => {
    if (index === selectedIndustry) return;
    setIsLoading(true);
    setBookingConfirmed(false);
    setSelectedOption(0);
    setSelectedSlot(0);
    setTimeout(() => {
      setSelectedIndustry(index);
      setIsLoading(false);
    }, 200); // 200ms skeleton transition
  };

  const industryIcons = [
    <SteeringWheel key="wheel" weight="bold" className="w-4 h-4 text-blue-600" />,
    <Wrench key="wrench" weight="bold" className="w-4 h-4 text-amber-600" />,
    <ForkKnife key="fork" weight="bold" className="w-4 h-4 text-emerald-600" />,
    <Heartbeat key="heart" weight="bold" className="w-4 h-4 text-rose-600" />,
    <Scissors key="scissors" weight="bold" className="w-4 h-4 text-purple-600" />,
  ];

  return (
    <section id="hero" className="relative pt-20 pb-12 md:pt-28 md:pb-16 px-4 bg-white overflow-hidden">
      {/* Subtle Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-[280px] h-[280px] bg-indigo-50/40 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Proof Badge above H1 */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200/90 bg-white/80 backdrop-blur-md shadow-xs mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="caption-3 text-[#09090B]">
            Custom homepage preview ready in 48 hours before you pay a cent
          </span>
        </div>

        {/* H1 Heading with exact text gradient per Rule B5 */}
        <h1 className="heading-1 max-w-[680px] bg-gradient-to-r from-[#000000] to-[#666666] bg-clip-text text-transparent mb-5 tracking-tight">
          Websites for local businesses<br className="hidden sm:inline" /> that turn local searches into daily customers
        </h1>

        {/* Subheadline capped at 680px with intentional line breaks */}
        <p className="body-2 text-[#52525B] max-w-[680px] mb-6">
          Custom built for driving schools, automotive shops, restaurants, clinics, and salons.
          You see a working preview of your homepage on your phone before you pay a single dollar, and launch in 7 days.
        </p>

        {/* ONE Primary CTA button with exact 8px vertical and 12px horizontal padding */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <button
            type="button"
            onClick={onPrimaryCtaClick}
            className="button-md py-2 px-3 rounded-xl bg-[#0F172A] text-white hover:bg-slate-800 transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none shadow-[0_4px_14px_rgba(15,23,42,0.15)] flex items-center gap-2 group"
          >
            <span>Text me for your free homepage preview</span>
            <ArrowRight
              weight="bold"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Proof Signal under CTA in Geist Mono */}
        <div className="w-full max-w-[680px] py-2 px-3 rounded-xl border border-slate-200/90 bg-white/70 backdrop-blur-md shadow-xs mb-10">
          <p className="font-mono text-xs text-[#52525B] tracking-tight">
            99+ Google PageSpeed score · Loads under 0.8 seconds on mobile · Direct local developer support
          </p>
        </div>

        {/* Hero Visual Area: Clean Phone Showcase with Engineering Dot Grid */}
        <div id="preview" className="relative w-full max-w-4xl scroll-mt-24">
          {/* Engineering Dot Grid Background */}
          <EngineeringDotGrid />

          {/* Top category tabs with frosted glass finish */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 w-full no-scrollbar mb-6">
            {BUSINESS_CATEGORIES.map((item, index) => {
              const isSelected = selectedIndustry === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleTabChange(index)}
                  className={`flex items-center gap-2 py-2 px-3 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                    isSelected
                      ? 'bg-[#0F172A] text-white shadow-md'
                      : 'bg-white/75 backdrop-blur-md border border-slate-200/80 text-[#52525B] hover:text-[#09090B] hover:bg-white'
                  }`}
                >
                  {industryIcons[index]}
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Hand Drawn Callout Arrow Left */}
          <HandDrawnArrowLeft className="hidden xl:flex absolute top-1/3 -left-20 z-30" />

          {/* Hand Drawn Callout Arrow Right */}
          <HandDrawnArrowRight className="hidden xl:flex absolute bottom-8 -right-20 z-30" />

          {/* 3D Floating metric badge top right */}
          <div className="hidden lg:flex absolute -top-4 -right-4 z-20 items-center gap-3 p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_15px_35px_rgba(15,23,42,0.07)] animate-float-slow text-left select-none">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
              <Lightning weight="bold" className="w-5 h-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-semibold text-[#09090B]">99.4 Google score</p>
              <p className="caption-4 text-emerald-600">Loads in 0.6 seconds</p>
            </div>
          </div>

          {/* 3D Floating booking alert card top left */}
          <div className="hidden lg:flex absolute top-16 -left-6 z-20 items-center gap-3 p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_15px_35px_rgba(15,23,42,0.07)] animate-float-delayed text-left select-none">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
              <CheckCircle weight="bold" className="w-5 h-5" />
            </div>
            <div>
              <p className="caption-3 font-semibold text-[#09090B]">New booking captured</p>
              <p className="font-mono text-[11px] text-[#52525B]">ICBC road test · 2m ago</p>
            </div>
          </div>

          {/* Clean Phone Showcase (Reverted to clean non-iPhone style with smooth scroll border) */}
          <div className="w-full flex justify-center py-1">
            <div className="w-full max-w-md p-2 rounded-3xl bg-[#F1F5F9] border border-slate-200 shadow-xl transition-all duration-500 hover:border-slate-300">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden text-left shadow-xs">
                {/* Phone Top Status Bar */}
                <div className="bg-[#0F172A] text-white px-4 py-2 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>9:41</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                      Live mobile test
                    </span>
                  </div>
                </div>

                {/* Dynamic Content or Skeleton Loading State */}
                {isLoading ? (
                  <div className="p-4 space-y-4 animate-pulse">
                    <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                    <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                    <div className="space-y-2 pt-2">
                      <div className="h-10 bg-slate-200 rounded-xl"></div>
                      <div className="h-10 bg-slate-200 rounded-xl"></div>
                    </div>
                    <div className="h-10 bg-slate-200 rounded-xl mt-3"></div>
                  </div>
                ) : (
                  <div className="p-4 space-y-3.5">
                    {/* Header inside preview */}
                    <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="caption-3 text-blue-600 uppercase tracking-wider block mb-1">
                          {currentPreview.badge}
                        </span>
                        <h2 className="title-2 font-semibold text-[#09090B]">
                          {currentPreview.headline}
                        </h2>
                        <div className="flex items-center gap-1 text-[11px] text-[#52525B] mt-1">
                          <MapPin weight="bold" className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{currentPreview.location}</span>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold shrink-0">
                        {currentPreview.stat}
                      </span>
                    </div>

                    <p className="body-6 text-[#52525B]">
                      {currentPreview.description}
                    </p>

                    {/* Step 1: Select Service */}
                    <div>
                      <label className="caption-4 text-[#09090B] block mb-1.5 font-semibold">
                        1. Select package or service:
                      </label>
                      <div className="space-y-1.5">
                        {currentPreview.options.map((option, optIdx) => {
                          const isChosen = selectedOption === optIdx;
                          return (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() => {
                                setSelectedOption(optIdx);
                                setBookingConfirmed(false);
                              }}
                              className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all duration-200 text-xs ${
                                isChosen
                                  ? 'border-[#0F172A] bg-[#F8FAFC] shadow-xs'
                                  : 'border-slate-200 hover:border-slate-300 bg-white'
                              }`}
                            >
                              <div className="flex items-center gap-2 truncate pr-2">
                                <div
                                  className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                    isChosen ? 'border-[#0F172A] bg-[#0F172A]' : 'border-slate-300'
                                  }`}
                                >
                                  {isChosen && <Check weight="bold" className="w-2.5 h-2.5 text-white" />}
                                </div>
                                <span className="font-medium text-[#09090B] truncate text-xs">{option.label}</span>
                              </div>
                              <span className="font-mono font-semibold text-[#09090B] shrink-0 text-xs">
                                {option.price}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 2: Choose Slot */}
                    <div>
                      <label className="caption-4 text-[#09090B] block mb-1.5 font-semibold">
                        2. Pick your preferred time window:
                      </label>
                      <div className="grid grid-cols-1 gap-1">
                        {currentPreview.availableSlots.map((slot, slotIdx) => {
                          const isSlotChosen = selectedSlot === slotIdx;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => {
                                setSelectedSlot(slotIdx);
                                setBookingConfirmed(false);
                              }}
                              className={`py-1.5 px-3 rounded-lg border text-left flex items-center justify-between transition-all duration-200 text-xs ${
                                isSlotChosen
                                  ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-medium'
                                  : 'border-slate-200 bg-white text-[#52525B] hover:border-slate-300'
                              }`}
                            >
                              <span className="flex items-center gap-1.5">
                                <Clock weight="bold" className="w-3.5 h-3.5 text-slate-400" />
                                <span>{slot}</span>
                              </span>
                              {isSlotChosen && (
                                <CheckCircle weight="fill" className="w-3.5 h-3.5 text-blue-600" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action Button inside phone */}
                    <div className="pt-1">
                      {bookingConfirmed ? (
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between gap-2 shadow-xs">
                          <div className="flex items-center gap-2">
                            <CheckCircle weight="fill" className="w-5 h-5 text-emerald-600 shrink-0" />
                            <div>
                              <p className="font-semibold text-xs">Demo reservation confirmed</p>
                              <p className="text-[11px] text-emerald-700">
                                Instant SMS confirmation sent to customer phone.
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setBookingConfirmed(false)}
                            className="caption-4 text-emerald-800 hover:text-emerald-900 underline font-medium shrink-0"
                          >
                            Reset
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setBookingConfirmed(true)}
                          className="w-full button-sm py-2 px-3 rounded-xl bg-[#0F172A] text-white hover:bg-slate-800 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-1.5 shadow-sm text-xs"
                        >
                          <CalendarBlank weight="bold" className="w-4 h-4" />
                          <span>Lock in this reservation now</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
