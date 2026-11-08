import React from 'react';

/*
  ==============================================================================
  1. CUSTOM SVG MONOGRAM (UPGRADE 5)
  A custom geometric engineering mark for QuantumNest:
  Precision isometric nested geometry replacing generic stock icons.
  ==============================================================================
*/
export function QuantumNestMonogram({ className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="QuantumNest Monogram"
    >
      <rect width="36" height="36" rx="10" fill="#0F172A" />
      {/* Outer nested geometric frame */}
      <rect
        x="9"
        y="9"
        width="18"
        height="18"
        rx="4"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      {/* Diagonal quantum axis linking Q & N */}
      <path
        d="M13 23L23 13"
        stroke="#38BDF8"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Anchor nodes */}
      <circle cx="13" cy="23" r="1.8" fill="#FFFFFF" />
      <circle cx="23" cy="13" r="1.8" fill="#38BDF8" />
    </svg>
  );
}

/*
  ==============================================================================
  2. HAND-DRAWN SVG CALLOUT ARROWS (UPGRADE 2)
  Organic hand-sketched vector arrows with handwritten notes
  breaking up the rigid grid. Zero hyphens in visible text!
  ==============================================================================
*/
export function HandDrawnArrowLeft({ className = '' }) {
  return (
    <div className={`flex flex-col items-end pointer-events-none select-none ${className}`}>
      <div className="bg-[#0F172A] text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md -rotate-3 transform border border-slate-700/60 whitespace-nowrap">
        Books lessons in 2 taps
      </div>
      <svg
        width="90"
        height="55"
        viewBox="0 0 90 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-1"
      >
        {/* Hand drawn curved arrow path */}
        <path
          d="M18 12C36 12 62 18 78 44"
          stroke="#0F172A"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="3 0.5"
        />
        {/* Arrowhead */}
        <path
          d="M66 40L79 45L77 32"
          stroke="#0F172A"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function HandDrawnArrowRight({ className = '' }) {
  return (
    <div className={`flex flex-col items-start pointer-events-none select-none ${className}`}>
      <div className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md rotate-2 transform whitespace-nowrap">
        One hand thumb tap
      </div>
      <svg
        width="90"
        height="55"
        viewBox="0 0 90 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-1"
      >
        {/* Hand drawn curved upward arrow path */}
        <path
          d="M72 10C55 10 30 20 12 44"
          stroke="#2563EB"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="3 0.5"
        />
        {/* Arrowhead */}
        <path
          d="M24 40L11 45L13 32"
          stroke="#2563EB"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/*
  ==============================================================================
  3. HANDWRITTEN VECTOR SIGNATURE (UPGRADE 4)
  Authentic cursive signature trace of Yug Patel for the accountability card.
  ==============================================================================
*/
export function FounderSignature({ className = 'w-44 h-12' }) {
  return (
    <svg
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Handwritten signature of Yug Patel"
    >
      {/* Cursive Y */}
      <path
        d="M20 18C24 24 28 35 34 35C40 35 44 26 48 16M48 16C46 26 40 45 32 52C28 55 24 53 26 48C28 42 36 34 56 32"
        stroke="#0F172A"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* u-g */}
      <path
        d="M58 28C60 33 63 35 67 35C71 35 74 31 76 27M76 27V35M76 30C78 28 82 27 85 27C90 27 92 31 92 35C92 41 87 50 80 54C76 56 74 54 75 50C77 44 86 36 102 34"
        stroke="#0F172A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* P */}
      <path
        d="M116 14C118 24 116 38 114 46M116 16C122 14 135 15 137 22C138 28 131 32 120 33"
        stroke="#0F172A"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* a-t-e-l */}
      <path
        d="M136 31C134 28 137 26 141 26C146 26 148 30 148 35M148 29V35M153 20V35C153 37 156 37 159 36M150 25H158M163 32C164 28 168 27 172 27C176 27 176 31 174 35C171 36 166 36 164 34M178 14C179 22 179 32 181 35C182 36 185 36 188 35"
        stroke="#0F172A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Underline flourish */}
      <path
        d="M112 46C135 44 175 42 215 46"
        stroke="#2563EB"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/*
  ==============================================================================
  4. ENGINEERING DOT-GRID PATTERN (UPGRADE 5)
  Subtle technical blueprint dot grid background for the hero area.
  ==============================================================================
*/
export function EngineeringDotGrid() {
  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <div
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
        }}
        className="w-[900px] h-[600px] opacity-45"
      ></div>
    </div>
  );
}
