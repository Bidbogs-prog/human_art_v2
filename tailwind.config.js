const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        'button':'#262626',
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
      },
      fontFamily: {
        'Montserrat':['Montserrat', 'sans-serif'],
      },
      backgroundImage:{
        'advertisement': "url('/public/images/bg.svg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
