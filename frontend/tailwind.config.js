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
          primary: '#a991f7',
          secondary: '#fb4b29',
          accent: '#fc803e',
          'accent-content': '#000000',
          neutral: '#3d4451',
          'base-100': '#f0f2f5',
        },
        dark: {
          primary: '#a991f7',
          secondary: '#fb4b29',
          accent: '#ffd6ae',
          'accent-content': '#ffffff',
          neutral: '#3d4451',
          'base-100': '#1b212c',
        },
      },
    ],
  },
};
