/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FCE4EC',
        'soft-beige': '#FFF9F0',
        'rose-dust': '#D4A5A5',
      },
      fontFamily: {
        cursive: ['var(--font-dancing-script)'],
        serif: ['var(--font-playfair-display)'],
      },
    },
  },
  plugins: [],
}
