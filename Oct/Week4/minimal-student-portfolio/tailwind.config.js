/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f8f8f5',
        ink: '#20211f',
        muted: '#70736d',
        line: '#e4e5de',
        lime: '#d6f36a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 14px 50px rgba(32,33,31,0.06)',
      },
    },
  },
  plugins: [],
}