import React from 'react';
import {
  DeviceMobile,
  RocketLaunch,
  ChatCircleDots,
  ShieldCheck,
  Check,
  X,
} from '@phosphor-icons/react';

export default function Benefits() {
  const outcomeCards = [
    {
      title: 'Built for thumbs on 390px screens',
      description:
        'Over 82 percent of local customers search on their phone while on the move. Every button, menu, and booking form is built for one hand tap action.',
      icon: <DeviceMobile weight="bold" className="w-5 h-5 text-blue-600" />,
      metric: '82% mobile traffic',
      deliverable: 'One hand tap booking on 390px screens',
    },
    {
      title: 'Live in 7 days without homework',
      description:
        'You do not need to write text or configure servers. Tell us about your business in a 15 minute chat and we handle copy, design, domain, and setup.',
      icon: <RocketLaunch weight="bold" className="w-5 h-5 text-emerald-600" />,
      metric: '7 day launch',
      deliverable: '15 minute chat and zero homework for you',
    },
    {
      title: 'Zero maintenance friction',
      description:
        'Need to change your shop hours, update prices, or add a seasonal special? Send one text message and it is updated for you the same day.',
      icon: <ChatCircleDots weight="bold" className="w-5 h-5 text-indigo-600" />,
      metric: 'Same day updates',
      deliverable: 'Send a quick text for instant edits',
    },
    {
      title: 'Pay only after you love the preview',
      description:
        'We build a custom working homepage preview for your business first. If you do not like how it looks on your phone, you walk away owing nothing.',
      icon: <ShieldCheck weight="bold" className="w-5 h-5 text-amber-600" />,
      metric: '0 dollars upfront',
      deliverable: 'Full preview on your phone before paying a cent',
    },
  ];

  return (
    <section id="benefits" className="py-12 md:py-16 px-4 bg-[#F8FAFC] border-t border-slate-200 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-10">
          <span className="caption-3 text-blue-600 uppercase tracking-wider block mb-2">
            Why local owners choose us
          </span>
          <h2 className="heading-2 text-[#09090B] mb-3">
            A website that works as hard as your front desk
          </h2>
          <p className="body-2 text-[#52525B]">
            Skip template builders and slow agencies. Get a custom coded site engineered to generate bookings while you focus on your business.
          </p>
        </div>

        {/* Compact Contrast Strip (Replaces bulky comparison block) */}
        <div className="mb-8 p-3 rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#52525B]">
            <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
              ✕
            </span>
            <span>Typical agencies: $4,000 to $8,000 quote · 3 month delay · complex homework</span>
          </div>
          <div className="flex items-center gap-2 text-[#09090B] font-semibold">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              ✓
            </span>
            <span>QuantumNest: Flat quotes starting under a thousand · 7 day launch · Free phone preview</span>
          </div>
        </div>

        {/* 4 Outcome Cards (Nested radius formula: outer rounded-2xl, p-6, inner rounded-lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomeCards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200 shadow-xs">
                    {card.icon}
                  </div>
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-[#0F172A] text-white">
                    {card.metric}
                  </span>
                </div>

                <h3 className="title-1 font-semibold text-[#09090B] mt-4 mb-2">
                  {card.title}
                </h3>

                <p className="body-3 text-[#52525B] leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Check weight="bold" className="w-2.5 h-2.5" />
                </span>
                <span className="caption-2 font-medium text-[#09090B]">
                  {card.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
