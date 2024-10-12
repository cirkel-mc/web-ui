/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './lib/lite/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#e20074',
          20: '#c00062',
          30: '#9d0050',
          40: '#7c003f',
          50: '#5a002e',
        },
        secondary: {
          10: '#80eee1',
          20: '#33e4ce',
          30: '#00ddc2',
          40: '#02b19c',
          50: '#016f61',
        },
      },
      boxShadow: {
        input: '0px 1px 2px 0px rgba(0,0,0,0.12)'
      }
    },
  },
  plugins: [],
};
