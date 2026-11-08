/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      colors: {
        base: '#FFFFFF',
        surface: {
          secondary: '#F8FAFC',
          interactive: '#F1F5F9',
        },
        primary: '#09090B',
        muted: '#52525B',
        action: {
          DEFAULT: '#0F172A',
          highlight: '#2563EB',
        }
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '500': '500ms',
        '300': '300ms',
        '700': '700ms',
      }
    },
  },
  plugins: [],
}

