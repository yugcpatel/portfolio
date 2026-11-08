import React, { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { SITE_CONFIG } from '../config';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How much does a custom website cost?',
      answer:
        'Simple high performance local business websites start around a few hundred dollars, while automated appointment booking engines, service calculators, and custom workflows scale depending on your feature scope. You receive an exact flat quote upfront before any work starts, with zero surprise invoices or hidden maintenance fees.',
    },
    {
      question: 'Do I really get to see a preview before paying anything?',
      answer:
        'Yes. We build a working, interactive preview of your homepage and send a private link directly to your phone within 48 hours. You can tap through buttons, show your team or family, and evaluate our build quality before parting with a single dollar. If you do not love it, you walk away owing nothing.',
    },
    {
      question: 'What if I already have an old website that looks outdated on phones?',
      answer:
        'We replace it seamlessly with zero downtime. We preserve your existing domain name, keep your email addresses working continuously, and transfer your best reviews, menus, and photos into a modern layout built for mobile devices.',
    },
    {
      question: 'How much of my time will this take? I am busy running my business.',
      answer:
        'Roughly 15 to 20 minutes in total. In a quick introductory chat, you tell us what services you provide and what bookings you want to win. We handle the copywriting, mobile layout, typography, speed optimization, and hosting setup. There is zero technical homework for you.',
    },
    {
      question: 'Who handles the domain name, hosting, and security?',
      answer:
        'We take care of the entire server architecture. Your site is deployed on enterprise level cloud infrastructure with automated SSL certificates, daily backups, and sub second load times. If you already own your domain name, we connect it for you in minutes.',
    },
    {
      question: 'What happens when I need to change prices, hours, or photos later on?',
      answer:
        'You never need to log into complex content management software. Send a quick text or email with your new hours or seasonal price updates, and we deploy the changes live the same day.',
    },
    {
      question: 'Can we meet in person at my shop or office?',
      answer:
        `Yes. If your business is located in the greater ${SITE_CONFIG.city} area, ${SITE_CONFIG.founderName} can visit your shop, clinic, or studio in person to review your operations and customer flow firsthand.`,
    },
    {
      question: 'How fast will my website show up on Google?',
      answer:
        'Your site is built with clean semantic HTML, local business schema markup, and rapid mobile load speeds that search engines favor. We submit your updated sitemap directly to Google Search Console and optimize your Google Business profile during launch week, which typically starts ranking within a few weeks.',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 px-4 bg-[#F8FAFC] border-t border-slate-200 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-8">
          <span className="caption-3 text-blue-600 uppercase tracking-wider block mb-2">
            Frequently asked questions
          </span>
          <h2 className="heading-2 text-[#09090B] mb-4">
            Clear answers to common questions
          </h2>
          <p className="body-2 text-[#52525B]">
            Everything you need to know about pricing, turnaround timelines, and our risk free preview guarantee.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                >
                  <span className="title-3 font-semibold text-[#09090B]">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full border border-slate-200 bg-[#F8FAFC] text-[#09090B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shrink-0 ${
                      isOpen ? 'rotate-180 bg-slate-200' : 'rotate-0'
                    }`}
                  >
                    <CaretDown weight="bold" className="w-4 h-4" />
                  </div>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  className="transition-all duration-500 overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 text-sm text-[#52525B] border-t border-slate-100">
                    <p className="body-5 text-[#52525B] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

