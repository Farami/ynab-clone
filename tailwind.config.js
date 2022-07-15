/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          50: '#EEF5FB',
          100: '#D9EAF7',
          200: '#B3D4EF',
          300: '#8EBFE7',
          400: '#68A9DF',
          500: '#4495D7',
          600: '#2777B9',
          700: '#1E5A8B',
          800: '#143C5C',
          900: '#0A1E2E',
        },

        text: '#e5e5ea',
        border: '#2f2f34',

        background: {
          100: '#1b1b1d',
          500: '#232325',
          600: '#28282a',
          700: '#a8a8ac',
          900: '#8e8e93',
        },

        sidebarSelect: '#2c2c2e',
        sidebarHover: '#3a3a3c',

        positive: '#6d9f38',
        cautious: '#e0a41a',
        negative: '##ca481d',
      },
    },
  },
  plugins: [],
};
