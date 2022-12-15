/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Calibri', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        primary: {
          normal: 'rgb(15, 137, 153)',
          dark: 'rgb(21, 105, 116)',
        },
        forestgreen: {
          light: 'rgb(130, 173, 141)',
          normal: 'rgb(46, 118, 65)',
          dark: 'rgb(43, 92, 55)',
        },
      },
    },
  },
  plugins: [],
};
