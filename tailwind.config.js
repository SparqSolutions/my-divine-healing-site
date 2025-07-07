/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'divine-blue': '#4A90E2',
        'divine-light-blue': '#E8F4FD',
        'divine-beige': '#F9F6F0',
        'divine-white': '#F8F6F0',
        'divine-gold': '#D4AF37',
        'divine-navy': '#2C3E50',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}