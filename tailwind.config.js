/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStroke: {
        '2px': '2px black',
        '6px': '6px black',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px black',
        },
        '.text-stroke-6': {
          '-webkit-text-stroke': '6px black',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

