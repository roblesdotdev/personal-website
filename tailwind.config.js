const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Merriweather', ...defaultTheme.fontFamily.serif],
        'sans': ['Fira Sans', ...defaultTheme.fontFamily.sans],
        /* TODO: ADD MONO FONT */
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
