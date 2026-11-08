import React from 'react';
import { ChatTeardropText, DeviceMobile, Rocket } from '@phosphor-icons/react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Send a quick text or book a 10 minute chat',
      description:
        'Tell us your business name and what services you offer in person or over the phone.',
      icon: <ChatTeardropText weight="bold" className="w-6 h-6 text-blue-600" />,
      time: 'Day 1',
    },
    {
      step: '02',
      title: 'Test your free custom homepage preview in 48 hours',
      description:
        'Open the private link on your phone, show your family or business partners, and request any changes.',
      icon: <DeviceMobile weight="bold" className="w-6 h-6 text-indigo-600" />,
      time: 'Day 2',
    },
    {
      step: '03',
      title: 'Go live in 7 days',
      description:
        'Once you approve the design, we finish every page, connect your Google listing and domain, and launch.',
      icon: <Rocket weight="bold" className="w-6 h-6 text-emerald-600" />,
      time: 'Day 7',
    },
  ];

  return (
    <section id="steps" className="py-16 md:py-24 px-4 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <span className="caption-3 text-blue-600 uppercase tracking-wider block mb-2">
            Simple three step process
          </span>
          <h2 className="heading-2 text-[#09090B] mb-4">
            From first text to live launch in 7 days
          </h2>
          <p className="body-2 text-[#52525B]">
            Zero technical homework for you. We take care of design, code, server configuration, and mobile optimization.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-xs flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-semibold text-slate-400">
                    {item.step}
                  </span>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-slate-200 bg-white text-[#52525B]">
                    {item.time}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 w-fit mb-4">
                  {item.icon}
                </div>

                <h3 className="title-2 font-semibold text-[#09090B] mb-2">
                  {item.title}
                </h3>

                <p className="body-5 text-[#52525B]">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <span className="caption-4 text-slate-400">Step {idx + 1} of 3</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

