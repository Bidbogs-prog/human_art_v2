const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '1xs': '.60rem',
        '2xs': '.50rem',
      },
      colors: {
        fuchsia: colors.fuchsia,
        'button':'#262626',
        emerald: colors.emerald,
        'black' : '#000000',
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
      },
      fontFamily: {
        'Montserrat':['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
