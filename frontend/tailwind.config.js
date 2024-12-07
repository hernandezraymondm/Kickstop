import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#FF8000',
          secondary: '#fa5d0b',
          accent: '#404040',
          'accent-content': '#000000',
          info: '#9dc142',
          neutral: '#3d4451',
          'base-100': '#E4E9EF',
        },
        dark: {
          primary: '#FF9A00',
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
