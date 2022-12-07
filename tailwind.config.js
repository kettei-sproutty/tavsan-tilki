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
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#346eeb',
          secondary: '#ce239d',
          accent: '#b282ed',
          neutral: '#161424',
          'base-100': '#343A46',
          info: '#62A6DA',
          success: '#1E8F71',
          warning: '#F5D047',
          error: '#F93976',
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
