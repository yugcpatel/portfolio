import React from 'react';
import { ChatTeardropText, DeviceMobile, Rocket, Check } from '@phosphor-icons/react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      time: 'Day 1',
      title: '15 minute phone or coffee chat',
      description: 'Tell us your business name and what services you want to win. No complicated intake questionnaires or homework.',
      deliverables: [
        'Quick 15 minute conversation',
        'Meet in Vancouver or Surrey or over phone',
        'We extract your service list and pricing',
      ],
      icon: <ChatTeardropText weight="bold" className="w-5 h-5 text-blue-600" />,
    },
    {
      step: '02',
      time: 'Day 2',
      title: 'Inspect your free preview in 48 hours',
      description: 'We code a working homepage preview and send a private link directly to your phone to test before spending anything.',
      deliverables: [
        'Test real one hand booking on your phone',
        'Review with family or business partners',
        'Request any design or copy tweaks',
      ],
      icon: <DeviceMobile weight="bold" className="w-5 h-5 text-indigo-600" />,
    },
    {
      step: '03',
      time: 'Day 7',
      title: 'Go live and take local bookings',
      description: 'Once you approve the build, we connect your custom domain name, optimize your Google Maps profile, and launch.',
      deliverables: [
        'Secure SSL and sub second cloud hosting',
        'Google Business and Maps listing linked',
        'Direct phone rings and instant SMS alerts',
      ],
      icon: <Rocket weight="bold" className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section id="steps" className="py-12 md:py-16 px-4 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-10">
          <span className="caption-3 text-blue-600 uppercase tracking-wider block mb-2">
            Simple three step process
          </span>
          <h2 className="heading-2 text-[#09090B] mb-3">
            From first text to live launch in 7 days
          </h2>
          <p className="body-2 text-[#52525B]">
            Zero technical homework for you. We take care of copy, mobile layout, domain connection, and speed optimization.
          </p>
        </div>

        {/* 3 Step Cards (Nested radius formula: outer rounded-2xl, p-6, inner rounded-lg) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:bg-white"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-mono text-xs font-semibold shadow-xs">
                      {item.step}
                    </span>
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-slate-200 bg-white text-[#52525B]">
                      {item.time}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
                    {item.icon}
                  </div>
                </div>

                <h3 className="title-1 font-semibold text-[#09090B] mb-2">
                  {item.title}
                </h3>

                <p className="body-6 text-[#52525B] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Concrete deliverables list */}
              <div className="pt-3 border-t border-slate-200/80 space-y-2">
                {item.deliverables.map((deliv) => (
                  <div key={deliv} className="flex items-start gap-2 text-xs text-[#09090B]">
                    <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                    <span className="caption-2 text-[#52525B]">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
