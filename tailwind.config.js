/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a855f7', // violet
        accent: '#22d3ee',  // cyan
        dark: '#0a0f1f',
        light: '#f8fafc'
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(168,85,247,0.25), 0 10px 30px -10px rgba(168,85,247,0.5)'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 700ms ease-out both',
        float: 'float 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
