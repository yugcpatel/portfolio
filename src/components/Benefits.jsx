import React from 'react';
import {
  DeviceMobile,
  RocketLaunch,
  ChatCircleDots,
  ShieldCheck,
  XCircle,
  CheckCircle,
} from '@phosphor-icons/react';

export default function Benefits() {
  const outcomeCards = [
    {
      title: 'Built for thumbs on 390px screens',
      description:
        'Over 82 percent of local customers search on their phone while on the move. Every button, menu, and booking form is built for one hand tap action.',
      icon: <DeviceMobile weight="bold" className="w-6 h-6 text-blue-600" />,
      badge: 'Mobile native',
    },
    {
      title: 'Live in 7 days without homework',
      description:
        'You do not need to write text or configure servers. Tell us about your business in a 15 minute chat and we handle copy, design, domain, and setup.',
      icon: <RocketLaunch weight="bold" className="w-6 h-6 text-emerald-600" />,
      badge: 'Rapid launch',
    },
    {
      title: 'Zero maintenance friction',
      description:
        'Need to change your shop hours, update prices, or add a seasonal special? Send one text message and it is updated for you the same day.',
      icon: <ChatCircleDots weight="bold" className="w-6 h-6 text-indigo-600" />,
      badge: 'Direct support',
    },
    {
      title: 'Pay only after you love the preview',
      description:
        'We build a custom working homepage preview for your business first. If you do not like how it looks on your phone, you walk away owing nothing.',
      icon: <ShieldCheck weight="bold" className="w-6 h-6 text-amber-600" />,
      badge: 'Zero risk',
    },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 px-4 bg-[#F8FAFC] border-t border-slate-200 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <span className="caption-3 text-blue-600 uppercase tracking-wider block mb-2">
            Why local owners choose us
          </span>
          <h2 className="heading-2 text-[#09090B] mb-4">
            A website that works as hard as your front desk
          </h2>
          <p className="body-2 text-[#52525B]">
            Skip template builders and slow agencies. Get a custom coded site engineered to generate bookings while you focus on your business.
          </p>
        </div>

        {/* Comparison Block: The Old Way vs The QuantumNest Way */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Old way */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <XCircle weight="fill" className="w-5 h-5 text-red-500" />
              <h3 className="title-2 font-semibold text-[#09090B]">The typical agency and DIY trap</h3>
            </div>
            <ul className="space-y-3 text-sm text-[#52525B]">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">✕</span>
                <span>DIY page builders take 40 hours of your weekends and look clunky on phones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">✕</span>
                <span>Large agencies quote $4,000 to $8,000 and take 3 months before anything is live</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">✕</span>
                <span>You are asked to write all your own paragraphs, take photos, and format menus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">✕</span>
                <span>Edits take weeks or require dealing with unfamiliar ticketing systems</span>
              </li>
            </ul>
          </div>

          {/* QuantumNest Way */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle weight="fill" className="w-5 h-5 text-emerald-600" />
              <h3 className="title-2 font-semibold text-[#09090B]">The QuantumNest local approach</h3>
            </div>
            <ul className="space-y-3 text-sm text-[#09090B]">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Inspect a custom coded homepage preview on your phone before spending a dollar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Launch in 7 days flat with flat pricing and zero surprise invoices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>We write your copy, build interactive booking, and link your Google profile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Send a text message whenever hours or prices change for same day updates</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Outcome Cards (Nested radius formula: outer rounded-2xl, p-6, inner rounded-lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomeCards.map((card, idx) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-slate-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-[#F8FAFC] border border-slate-200">
                    {card.icon}
                  </div>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-slate-200 bg-[#F8FAFC] text-[#52525B]">
                    {card.badge}
                  </span>
                </div>
                <h3 className="title-1 font-semibold text-[#09090B] mb-2">
                  {card.title}
                </h3>
                <p className="body-3 text-[#52525B]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

