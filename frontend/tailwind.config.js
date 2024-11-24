/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#bdc000',
          secondary: '#fb4b29',
          accent: '#404040',
          'accent-content': '#000000',
          info: '#9dc142',
          neutral: '#3d4451',
          'base-100': '#E4E9EF',
        },
        dark: {
          primary: '#fff248',
          secondary: '#fb4b29',
          accent: '#ffd6ae',
          'accent-content': '#ffffff',
          info: '#9dc142',
          neutral: '#3d4451',
          'base-100': '#1b212c',
        },
      },
    ],
  },
};
