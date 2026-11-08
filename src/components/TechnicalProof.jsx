import React, { useState } from 'react';
import { Gauge, Lightning, CheckCircle, ShieldCheck, ArrowsLeftRight } from '@phosphor-icons/react';

/*
  ==============================================================================
  BEFORE & AFTER SLIDER COMPONENT (READY FOR FIRST CLIENT LAUNCH)
  Uncomment the component usage below when your first client site goes live!
  ==============================================================================
*/
export function BeforeAfterComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="title-3 font-semibold text-[#09090B]">Before and after mobile overhaul</h4>
          <p className="caption-2 text-[#52525B]">Drag slider to compare old website against QuantumNest rebuild</p>
        </div>
        <span className="font-mono text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
          Client case study
        </span>
      </div>

      <div
        className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border border-slate-200 select-none cursor-ew-resize bg-slate-100"
        onMouseMove={handleSliderMove}
        onTouchMove={(e) => {
          if (e.touches[0]) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
            setSliderPosition((x / rect.width) * 100);
          }
        }}
      >
        {/* "Before" Background (Left side view) */}
        <div className="absolute inset-0 bg-[#F1F5F9] p-6 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="font-mono text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
              Old website (3.8s load time)
            </span>
            <p className="title-4 text-slate-400 font-semibold">Clunky desktop design unreadable on phone</p>
            <p className="body-6 text-slate-400">Tiny unclickable buttons, missing SSL, zero mobile booking</p>
          </div>
          <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-red-700 text-xs font-mono">
            PageSpeed mobile score: 38 / 100
          </div>
        </div>

        {/* "After" Foreground clipped by slider (Right side view) */}
        <div
          className="absolute inset-0 bg-white p-6 flex flex-col justify-between overflow-hidden border-r-2 border-blue-600"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="space-y-2">
            <span className="font-mono text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
              QuantumNest rebuild (0.6s load time)
            </span>
            <p className="title-4 text-[#09090B] font-semibold">Clean mobile first layout tuned for one hand booking</p>
            <p className="body-6 text-[#52525B]">Instant SMS notifications, tap to call, verified Google listing</p>
          </div>
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-800 text-xs font-mono">
            PageSpeed mobile score: 99 / 100
          </div>
        </div>

        {/* Drag handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-blue-600 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-600 shadow-md flex items-center justify-center text-blue-600">
            <ArrowsLeftRight weight="bold" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TechnicalProof() {
  const [showComparison, setShowComparison] = useState(false);

  const benchmarks = [
    {
      metric: '99.4',
      label: 'Mobile performance score',
      source: 'Google Lighthouse audit standard',
      icon: <Gauge weight="bold" className="w-5 h-5 text-blue-600" />,
    },
    {
      metric: '0.6s',
      label: 'First contentful paint',
      source: 'Sub second interactive load on 4G',
      icon: <Lightning weight="bold" className="w-5 h-5 text-emerald-600" />,
    },
    {
      metric: '100%',
      label: 'Mobile responsive compliance',
      source: 'Zero overflow on 390px baseline screen',
      icon: <CheckCircle weight="bold" className="w-5 h-5 text-indigo-600" />,
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-10">
          <span className="caption-3 text-blue-600 uppercase tracking-wider block mb-2">
            Verifiable technical performance
          </span>
          <h2 className="heading-2 text-[#09090B] mb-3">
            Speed and code quality you can verify yourself
          </h2>
          <p className="body-2 text-[#52525B]">
            We do not use bloated builders. Every line of code is optimized so your customers never wait for a page to load.
          </p>
        </div>

        {/* Benchmarks Row in Geist Mono */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {benchmarks.map((b) => (
            <div
              key={b.label}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-4xl md:text-5xl font-semibold text-[#09090B] tracking-tight">
                  {b.metric}
                </span>
                <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200">
                  {b.icon}
                </div>
              </div>
              <div>
                <p className="title-3 font-semibold text-[#09090B] mb-1">
                  {b.label}
                </p>
                <p className="caption-2 text-[#52525B]">
                  {b.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Before & After Overhaul Slider Toggle */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className="caption-2 font-mono text-blue-600 hover:text-blue-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs inline-flex items-center gap-2 transition-colors"
          >
            <ArrowsLeftRight weight="bold" className="w-3.5 h-3.5" />
            <span>{showComparison ? 'Hide before and after demo' : 'Preview before and after overhaul slider'}</span>
          </button>
        </div>

        {showComparison && <BeforeAfterComparison />}
      </div>
    </section>
  );
}
