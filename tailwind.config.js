const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SUIT Variable', 'sans-serif'], // 기본 폰트로 SUIT Variable 지정
        suit: ['SUIT Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

