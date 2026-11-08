import React, { useState, useRef, useEffect } from 'react';
import {
  CaretDown,
  Check,
  SteeringWheel,
  Wrench,
  ForkKnife,
  Heartbeat,
  Scissors,
} from '@phosphor-icons/react';

export const CATEGORY_ICONS = {
  'Driving school': <SteeringWheel weight="bold" className="w-4 h-4 text-blue-600" />,
  'Auto shop': <Wrench weight="bold" className="w-4 h-4 text-amber-600" />,
  'Restaurant': <ForkKnife weight="bold" className="w-4 h-4 text-emerald-600" />,
  'Clinic': <Heartbeat weight="bold" className="w-4 h-4 text-rose-600" />,
  'Salon': <Scissors weight="bold" className="w-4 h-4 text-purple-600" />,
};

export default function CustomCategorySelect({
  value,
  onChange,
  options = ['Driving school', 'Auto shop', 'Restaurant', 'Clinic', 'Salon'],
  label,
  id = 'custom-category-select',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full text-left" ref={containerRef}>
      {label && (
        <label
          htmlFor={id}
          className="caption-1 text-[#09090B] font-semibold block mb-2"
        >
          {label}
        </label>
      )}

      {/* Frosted Luxury Trigger Button */}
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-2 px-3 rounded-xl border border-slate-200/90 bg-white/70 backdrop-blur-md text-sm text-[#09090B] shadow-xs hover:bg-white/90 hover:border-slate-300 transition-all duration-300 flex items-center justify-between gap-2 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
      >
        <div className="flex items-center gap-2.5 truncate">
          <div className="w-7 h-7 rounded-lg bg-[#F8FAFC] border border-slate-200 flex items-center justify-center shrink-0">
            {CATEGORY_ICONS[value] || <SteeringWheel weight="bold" className="w-4 h-4 text-blue-600" />}
          </div>
          <span className="font-medium text-[#09090B] truncate">{value}</span>
        </div>
        <div
          className={`p-1 text-slate-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#09090B]' : 'rotate-0'
          }`}
        >
          <CaretDown weight="bold" className="w-4 h-4" />
        </div>
      </button>

      {/* Frosted Glass Dropdown Panel */}
      {isOpen && (
        <div
          role="listbox"
          tabIndex={-1}
          style={{
            animation: 'fadeInScale 200ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          className="absolute left-0 right-0 mt-1.5 p-1.5 rounded-2xl border border-slate-200/90 bg-white/85 backdrop-blur-xl shadow-xl z-40 space-y-1"
        >
          {options.map((option) => {
            const isSelected = value === option;
            const icon = CATEGORY_ICONS[option];
            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option)}
                className={`w-full py-2 px-3 rounded-xl text-left flex items-center justify-between transition-all duration-200 text-xs ${
                  isSelected
                    ? 'bg-[#0F172A] text-white shadow-xs font-semibold'
                    : 'text-[#09090B] hover:bg-slate-100/80 font-medium'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? 'bg-slate-800 text-white border border-slate-700'
                        : 'bg-[#F8FAFC] border border-slate-200'
                    }`}
                  >
                    {icon}
                  </div>
                  <span>{option}</span>
                </div>
                {isSelected && (
                  <Check weight="bold" className="w-3.5 h-3.5 text-white" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

