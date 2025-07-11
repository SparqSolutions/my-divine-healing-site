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
        'divine-blue': 'var(--mardi-gras)',
        'divine-light-blue': 'var(--lilac)',
        'divine-beige': 'var(--lilac)',
        'divine-white': '#EBF8FF',
        'divine-gold': 'var(--mardi-gras)',
        'divine-navy': 'var(--mardi-gras)',
        'mardi-gras': 'var(--mardi-gras)',
        'lilac': 'var(--lilac)',
        'tiffany-blue': 'var(--tiffany-blue)',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}