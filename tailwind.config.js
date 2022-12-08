/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        tavsan: {
          primary: '#346eeb',
          secondary: '#919ff2',
          accent: '#aaffb7',
          neutral: '#1D232F',
          'base-100': '#E4E2E9',
          info: '#659FF1',
          success: '#2ED18D',
          warning: '#F4BC25',
          error: '#F17478',
        },
        tilki: {
          primary: '#d3574e',
          secondary: '#4b82c1',
          accent: '#2d91c6',
          neutral: '#26343B',
          'base-100': '#EFEEF6',
          info: '#54CAE8',
          success: '#30CFB2',
          warning: '#EC8D18',
          error: '#E36376',
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
}
