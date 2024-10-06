/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'cinzel': ['Cinzel Decorative', 'serif'],
      },
    },
  },
  plugins: [],
}