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
          primary: '#e2e273',
          secondary: '#fccaa6',
          accent: '#02d810',
          neutral: '#252F37',
          'base-100': '#2C3263',
          info: '#429FE0',
          success: '#148F74',
          warning: '#D9B517',
          error: '#EC6983',
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
