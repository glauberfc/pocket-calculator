/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#dff9ff',
          400: '#1795d4',
          500: '#1482b8',
          600: '#196b98',
        },
        secondary: {
          400: '#dddddd',
          600: '#666666',
          800: '#333333',
          900: '#373D45',
        },
      },
    },
  },
  plugins: [],
}
