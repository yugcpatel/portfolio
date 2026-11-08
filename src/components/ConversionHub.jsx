import React, { useState } from 'react';
import {
  ChatTeardropText,
  WhatsappLogo,
  PhoneCall,
  CalendarCheck,
  ArrowRight,
  CheckCircle,
  WarningCircle,
  Clock,
  EnvelopeSimple,
  Sparkle,
} from '@phosphor-icons/react';
import { SITE_CONFIG } from '../config';
import CustomCategorySelect from './CustomCategorySelect';

export default function ConversionHub() {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('Driving school');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const validate = () => {
    const errs = {};
    if (!businessName.trim()) {
      errs.businessName = 'Please enter your business name.';
    }
    const cleanedPhone = phoneNumber.replace(/\D/g, '');
    if (!cleanedPhone) {
      errs.phoneNumber = 'Please enter a contact phone number.';
    } else if (cleanedPhone.length < 7) {
      errs.phoneNumber = 'Please enter a valid phone number with area code.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);

    const message = encodeURIComponent(
      `Hello ${SITE_CONFIG.founderName}, I would like a free custom homepage preview for my business.\n\nBusiness name: ${businessName}\nBusiness type: ${businessType}\nPhone: ${phoneNumber}\nCity: ${SITE_CONFIG.city}\n\nPlease text me the preview link when ready.`
    );

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `sms:${SITE_CONFIG.phoneRaw}?&body=${message}`;
    } else {
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`, '_blank');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <span className="caption-3 text-blue-600 uppercase tracking-wider block mb-2">
            Get your preview
          </span>
          <h2 className="heading-2 text-[#09090B] mb-4">
            Text me for your free homepage preview
          </h2>
          <p className="body-2 text-[#52525B]">
            See what your business looks like with a modern, fast mobile booking site. Delivered to your phone in 48 hours with zero obligation.
          </p>
        </div>

        {/* Outer Form Card (Nested radius: outer rounded-2xl with p-6 gives inner rounded-lg) */}
        <div className="p-6 md:p-10 rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-sm mb-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle weight="fill" className="w-8 h-8" />
              </div>
              <h3 className="title-1 font-semibold text-[#09090B]">
                Message drafted and ready
              </h3>
              <p className="body-3 text-[#52525B] max-w-md mx-auto">
                Your message app should open now. If it did not launch automatically, tap either button below to text or call {SITE_CONFIG.founderName} directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20${encodeURIComponent(SITE_CONFIG.founderName)}%2C%20I%20requested%20a%20free%20preview%20for%20${encodeURIComponent(
                    businessName || 'my business'
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-sm py-2 px-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <WhatsappLogo weight="fill" className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
                <a
                  href={`sms:${SITE_CONFIG.phoneRaw}`}
                  className="button-sm py-2 px-3 rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <ChatTeardropText weight="bold" className="w-4 h-4" />
                  <span>Send via standard text</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Business Name Field */}
                <div>
                  <label htmlFor="biz-name" className="caption-1 text-[#09090B] font-semibold block mb-2">
                    Your business name
                  </label>
                  <input
                    id="biz-name"
                    type="text"
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                      if (errors.businessName) setErrors({ ...errors, businessName: null });
                    }}
                    placeholder="e.g. Metro Vancouver Driving Academy"
                    className={`w-full py-2.5 px-3 rounded-xl border bg-white text-sm text-[#09090B] focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition-colors shadow-xs ${
                      errors.businessName ? 'border-red-400 bg-red-50/20' : 'border-slate-200/90'
                    }`}
                  />
                  {errors.businessName && (
                    <p className="caption-4 text-red-600 mt-1 flex items-center gap-1">
                      <WarningCircle weight="bold" className="w-3.5 h-3.5" />
                      <span>{errors.businessName}</span>
                    </p>
                  )}
                </div>

                {/* Custom Frosted Category Dropdown with Icons */}
                <div>
                  <CustomCategorySelect
                    id="contact-category"
                    label="Business category"
                    value={businessType}
                    onChange={(val) => setBusinessType(val)}
                  />
                </div>
              </div>

              {/* Contact Phone Field */}
              <div>
                <label htmlFor="biz-phone" className="caption-1 text-[#09090B] font-semibold block mb-2">
                  Your mobile phone number for the preview link
                </label>
                <input
                  id="biz-phone"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: null });
                  }}
                  placeholder="e.g. (604) 555 0192"
                  className={`w-full py-2.5 px-3 rounded-xl border bg-white text-sm text-[#09090B] focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none transition-colors shadow-xs ${
                    errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-slate-200/90'
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="caption-4 text-red-600 mt-1 flex items-center gap-1">
                    <WarningCircle weight="bold" className="w-3.5 h-3.5" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
                <p className="caption-5 text-[#52525B] mt-1">
                  We use your phone number strictly to send your private preview link. Zero sales spam.
                </p>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto button-md py-2 px-3 rounded-xl bg-[#0F172A] text-white hover:bg-slate-800 transition-all duration-300 active:scale-[0.98] inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Text me for your free homepage preview</span>
                  <ArrowRight weight="bold" className="w-4 h-4" />
                </button>
                <span className="caption-2 text-[#52525B]">
                  48 hour turnaround · No payment info required
                </span>
              </div>
            </form>
          )}
        </div>

        {/* Alternative Actions: Direct Call, WhatsApp, Email, & Calendar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Direct Tel Call */}
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300 flex items-center gap-3 group shadow-xs"
          >
            <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200 text-blue-600 group-hover:bg-blue-50 transition-colors">
              <PhoneCall weight="bold" className="w-5 h-5" />
            </div>
            <div className="truncate">
              <p className="title-4 font-semibold text-[#09090B]">Direct phone call</p>
              <p className="caption-2 text-[#52525B] truncate">{SITE_CONFIG.phoneDisplay}</p>
            </div>
          </a>

          {/* Direct WhatsApp Chat */}
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20${encodeURIComponent(SITE_CONFIG.founderName)}%2C%20I%20would%20like%20to%20discuss%20a%20website%20preview%20for%20my%20local%20business.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300 flex items-center gap-3 group shadow-xs"
          >
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
              <WhatsappLogo weight="fill" className="w-5 h-5" />
            </div>
            <div className="truncate">
              <p className="title-4 font-semibold text-[#09090B]">Chat on WhatsApp</p>
              <p className="caption-2 text-[#52525B] truncate">Quick response same day</p>
            </div>
          </a>

          {/* Direct Email */}
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Website%20preview%20inquiry%20for%20local%20business`}
            className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300 flex items-center gap-3 group shadow-xs"
          >
            <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200 text-indigo-600 group-hover:bg-indigo-50 transition-colors">
              <EnvelopeSimple weight="bold" className="w-5 h-5" />
            </div>
            <div className="truncate">
              <p className="title-4 font-semibold text-[#09090B]">Send an email</p>
              <p className="caption-2 text-[#52525B] truncate">{SITE_CONFIG.email}</p>
            </div>
          </a>
        </div>

        {/* Schedule Calendar Trigger */}
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowCalendar(!showCalendar)}
            className="w-full p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300 flex items-center justify-between group shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200 text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                <CalendarCheck weight="bold" className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="title-4 font-semibold text-[#09090B]">
                  {showCalendar ? 'Hide calendar scheduler' : 'Prefer video or in person? Book a 10 minute chat'}
                </p>
                <p className="caption-2 text-[#52525B]">Pick a day on the calendar for a video or phone review with {SITE_CONFIG.founderName}</p>
              </div>
            </div>
            <span className="caption-3 font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200 shrink-0">
              {showCalendar ? 'Close' : 'Select time'}
            </span>
          </button>
        </div>

        {/* Toggleable Calendar Embed Container */}
        {showCalendar && (
          <div className="mt-4 p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-sm transition-all duration-500">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Clock weight="bold" className="w-4 h-4 text-emerald-600" />
                <h4 className="title-3 font-semibold text-[#09090B]">
                  Schedule a 10 minute discovery consultation
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowCalendar(false)}
                className="caption-2 text-[#52525B] hover:text-[#09090B]"
              >
                Close calendar
              </button>
            </div>
            <div className="w-full bg-white rounded-xl border border-slate-200 p-6 text-center">
              <p className="body-4 text-[#09090B] mb-2 font-semibold">
                Calendar integration active for {SITE_CONFIG.founderName} ({SITE_CONFIG.city})
              </p>
              <p className="body-6 text-[#52525B] mb-4">
                Available Monday through Friday from 9:00 AM to 5:00 PM Pacific Time.
              </p>
              <a
                href={SITE_CONFIG.calendarEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-sm py-2 px-3 rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 inline-flex items-center gap-2 shadow-xs"
              >
                <CalendarCheck weight="bold" className="w-4 h-4" />
                <span>Open calendar booking in new window</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
