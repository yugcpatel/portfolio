import React, { useState } from 'react';
import {
  Calculator,
  Sliders,
  CheckSquare,
  Square,
  WhatsappLogo,
  ArrowRight,
  Clock,
  WarningCircle,
  CurrencyDollar,
  Users,
} from '@phosphor-icons/react';
import { SITE_CONFIG } from '../config';
import CustomCategorySelect from './CustomCategorySelect';

export default function InteractiveEstimator() {
  const [activeTab, setActiveTab] = useState('calculator'); // 'calculator' or 'scope'

  // Tab 1 state: Calculator
  const [businessType, setBusinessType] = useState('Driving school');
  const [monthlySearches, setMonthlySearches] = useState(1200);
  const [customerValue, setCustomerValue] = useState(250);

  // Tab 2 state: Scope builder
  const [selectedFeatures, setSelectedFeatures] = useState([
    'Mobile first custom website & Google Maps setup',
    'Online appointment or class booking system',
  ]);

  const featureOptions = [
    {
      id: 'base',
      title: 'Mobile first custom website & Google Maps setup',
      description: 'Hand coded responsive layout tuned for 390px screens and verified on Google Maps.',
      base: true,
    },
    {
      id: 'booking',
      title: 'Online appointment or class booking system',
      description: 'Customers pick service dates, slots, and pay or confirm in two taps on their phone.',
    },
    {
      id: 'catalog',
      title: 'Menu, service catalog, or pricing calculator',
      description: 'Interactive filters that let local clients calculate their service price instantly.',
    },
    {
      id: 'notifications',
      title: 'Automated WhatsApp or SMS lead notifications',
      description: 'Instant notification on your personal phone the moment a new booking arrives.',
    },
    {
      id: 'hosting',
      title: 'Domain, fast hosting, and zero headache updates',
      description: 'Enterprise grade global hosting, SSL security, and same day text message edits.',
    },
  ];

  const toggleFeature = (title) => {
    if (title === 'Mobile first custom website & Google Maps setup') return;
    if (selectedFeatures.includes(title)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== title));
    } else {
      setSelectedFeatures([...selectedFeatures, title]);
    }
  };

  // Calculations for Tab 1
  const lostCustomersCount = Math.max(1, Math.round(monthlySearches * 0.045));
  const lostDollars = lostCustomersCount * customerValue;

  // WhatsApp link generator for Tab 2
  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hi ${SITE_CONFIG.founderName}, I want a custom quote and free homepage preview for my ${businessType}.\n\nSelected features:\n${selectedFeatures
        .map((f) => `• ${f}`)
        .join('\n')}\n\nPlease let me know your availability.`
    );
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="calculator" className="py-12 md:py-16 px-4 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-8">
          <span className="caption-3 text-blue-600 uppercase tracking-wider block mb-2">
            Interactive estimate tools
          </span>
          <h2 className="heading-2 text-[#09090B] mb-4">
            See the math behind a fast mobile website
          </h2>
          <p className="body-2 text-[#52525B]">
            Calculate the local revenue you lose each month to competitors, or pick the exact features you want for your business.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="p-1 bg-[#F1F5F9] rounded-2xl border border-slate-200 inline-flex gap-1 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('calculator')}
              className={`button-sm py-2 px-3 rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none flex items-center gap-2 ${
                activeTab === 'calculator'
                  ? 'bg-white text-[#09090B] shadow-sm'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              <Calculator weight="bold" className="w-4 h-4" />
              <span>Lost local leads calculator</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('scope')}
              className={`button-sm py-2 px-3 rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none flex items-center gap-2 ${
                activeTab === 'scope'
                  ? 'bg-white text-[#09090B] shadow-sm'
                  : 'text-[#52525B] hover:text-[#09090B]'
              }`}
            >
              <Sliders weight="bold" className="w-4 h-4" />
              <span>Custom website scope builder</span>
            </button>
          </div>
        </div>

        {/* Outer Card (Nested radius: outer rounded-2xl with p-4 gives inner rounded-lg) */}
        <div className="p-4 md:p-8 rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-sm">
          {activeTab === 'calculator' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Controls with Custom Frosted Category Select */}
              <div className="space-y-6">
                <div>
                  <CustomCategorySelect
                    id="calc-category"
                    label="Select your business category:"
                    value={businessType}
                    onChange={(val) => setBusinessType(val)}
                  />
                </div>

                {/* Slider 1: Monthly searches */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="caption-1 text-[#09090B] font-semibold">
                      Monthly local Google searches in your area:
                    </span>
                    <span className="font-mono text-sm font-semibold text-[#09090B] bg-white px-2 py-0.5 rounded border border-slate-200">
                      {monthlySearches.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="5000"
                    step="100"
                    value={monthlySearches}
                    onChange={(e) => setMonthlySearches(Number(e.target.value))}
                    className="w-full accent-[#0F172A] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#52525B] mt-1 font-mono">
                    <span>200 searches</span>
                    <span>5,000 searches</span>
                  </div>
                </div>

                {/* Slider 2: Average value of one customer */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="caption-1 text-[#09090B] font-semibold">
                      Average value of one customer:
                    </span>
                    <span className="font-mono text-sm font-semibold text-[#09090B] bg-white px-2 py-0.5 rounded border border-slate-200">
                      ${customerValue}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="1200"
                    step="10"
                    value={customerValue}
                    onChange={(e) => setCustomerValue(Number(e.target.value))}
                    className="w-full accent-[#0F172A] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#52525B] mt-1 font-mono">
                    <span>$30</span>
                    <span>$1,200</span>
                  </div>
                </div>
              </div>

              {/* Right Results Box */}
              <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                  <WarningCircle weight="bold" className="w-4 h-4" />
                  <span>Estimated monthly customer loss</span>
                </div>

                <div>
                  <p className="caption-2 text-[#52525B] mb-1">
                    Customers walking to competitors:
                  </p>
                  <p className="font-mono text-3xl md:text-4xl font-semibold text-[#09090B]">
                    ~{lostCustomersCount} clients / month
                  </p>
                </div>

                <div>
                  <p className="caption-2 text-[#52525B] mb-1">
                    Estimated lost monthly revenue:
                  </p>
                  <p className="font-mono text-3xl md:text-4xl font-semibold text-red-600">
                    ${lostDollars.toLocaleString()} / month
                  </p>
                </div>

                <p className="body-6 text-[#52525B] pt-2 border-t border-slate-100">
                  When local residents in {SITE_CONFIG.city} search on their phone and encounter a slow or outdated website, they tap back to Google in three seconds. A clean, fast site captures those bookings immediately.
                </p>

                <a
                  href="#contact"
                  className="button-sm py-2 px-3 rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 transition-all duration-300 active:scale-[0.98] inline-flex items-center justify-center gap-2 w-full text-center shadow-xs"
                >
                  <span>Stop losing local customers today</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            /* Tab 2: Scope Builder */
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="title-2 font-semibold text-[#09090B]">
                    Build your custom website specification
                  </h3>
                  <p className="body-5 text-[#52525B]">
                    Select the capabilities you want included in your launch
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 font-mono text-xs shadow-xs">
                  <Clock weight="bold" className="w-4 h-4 text-blue-600" />
                  <span className="text-[#52525B]">Estimated turnaround:</span>
                  <span className="font-semibold text-[#09090B]">7 to 10 days</span>
                </div>
              </div>

              {/* Checklist items */}
              <div className="space-y-3">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.title);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.title)}
                      className={`w-full p-3 rounded-lg border text-left flex items-start gap-3 transition-all duration-300 ${
                        isChecked
                          ? 'border-blue-600 bg-white shadow-xs'
                          : 'border-slate-200 bg-[#F8FAFC] hover:bg-white'
                      }`}
                    >
                      <div className="mt-0.5 text-blue-600">
                        {isChecked ? (
                          <CheckSquare weight="fill" className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Square weight="bold" className="w-5 h-5 text-slate-300" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="title-4 font-semibold text-[#09090B]">
                            {feat.title}
                          </span>
                          {feat.base && (
                            <span className="font-mono text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                              Core standard
                            </span>
                          )}
                        </div>
                        <p className="body-6 text-[#52525B] mt-0.5">{feat.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Button: WhatsApp direct prefill */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="caption-2 text-[#52525B]">
                  No payment required to inspect your setup. Quotes are 100 percent free.
                </p>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sm py-2 px-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 active:scale-[0.98] inline-flex items-center gap-2 shrink-0 shadow-sm"
                >
                  <WhatsappLogo weight="fill" className="w-4 h-4" />
                  <span>Send this exact setup via WhatsApp for a custom quote and free preview</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
