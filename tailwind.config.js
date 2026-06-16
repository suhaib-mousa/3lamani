/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#07111F',
          dark: '#020817',
          mid: '#0D1E35',
          light: '#122844',
        },
        orange: {
          DEFAULT: '#C96A1B',
          bright: '#E88A2E',
          dim: '#8A4E10',
        },
        gold: {
          DEFAULT: '#8A6A3B',
          light: '#B8924E',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          dim: '#D4CDB8',
          muted: '#A09880',
        },
      },
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-medium': 'floatMedium 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'pattern-drift': 'patternDrift 30s linear infinite',
        'haraka-float': 'harakaFloat 5s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(8px)' },
          '50%': { opacity: '1', filter: 'blur(4px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        patternDrift: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        harakaFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.4' },
          '33%': { transform: 'translateY(-6px) rotate(2deg)', opacity: '0.7' },
          '66%': { transform: 'translateY(4px) rotate(-1deg)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};
