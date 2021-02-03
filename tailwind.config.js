module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#2D3BBD',
        white: '#ffff',
      },
    },
    fontFamily: {
      mainFont: ['Poppins'],
    },
    pseudo: {
      // defaults to {'before': 'before', 'after': 'after'}
      before: 'before',
      after: 'after',
      'not-first': 'not(:first-child)',
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
