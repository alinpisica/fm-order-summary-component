/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-pale': 'hsl(225, 100%, 94%)',
      'primary-bright': 'hsl(245, 75%, 52%)',
      'neutral-pale': 'hsl(225, 100%, 98%)',
      'neutral-desaturated': 'hsl(224, 23%, 55%)',
      'neutral-dark': 'hsl(223, 47%, 23%)'
    },
    fontFamily: {
      'red-hat': ['Red Hat Display', 'sans-serif']
    },
    fontWeight: {
      normal: 600,
      bold: 700,
      extrabold: 900
    }
  },
  plugins: [],
}
