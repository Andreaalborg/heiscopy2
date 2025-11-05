import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // IMEM Brand Colors
        'imem-blue': {
          light: '#AED6F1',
          DEFAULT: '#5DADE2',
          dark: '#2874A6',
        },
        'imem-accent': {
          DEFAULT: '#F39C12',
          hover: '#E67E22',
        },
        // Status Colors
        'imem-success': '#27AE60',
        'imem-warning': '#F39C12',
        'imem-error': '#E74C3C',
        // Neutral Colors
        'imem-gray': {
          50: '#F8F9FA',
          100: '#E5E7EB',
          200: '#D1D5DB',
          300: '#9CA3AF',
          400: '#6B7280',
          500: '#4B5563',
          600: '#374151',
          700: '#2C3E50',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Mobile sizes
        'h1-mobile': '2.25rem', // 36px
        'h2-mobile': '1.875rem', // 30px
        'h3-mobile': '1.5rem', // 24px
        'h4-mobile': '1.25rem', // 20px
        // Desktop sizes
        'h1-desktop': '3.75rem', // 60px
        'h2-desktop': '3rem', // 48px
        'h3-desktop': '2.25rem', // 36px
        'h4-desktop': '1.875rem', // 30px
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
