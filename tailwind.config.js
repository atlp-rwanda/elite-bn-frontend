module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        test1: "url('/src/images/test1.jpg')",
      }),
      gridTemplateRows: {
        layout: 'auto auto 150px',
        mdScreen: 'auto auto 250px',
      },
      height: {
        100: '23rem',
      },
      width: {
        s: '165vh',
      },
      paddingTop: {
        n: '-5em',
      },
      borderRadius: {
        f: '100%',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#2D3BBD',
      secondary: '#FEFDFF',
      danger: '#e3342f',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
