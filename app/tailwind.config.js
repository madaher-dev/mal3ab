module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mal3ab: {
          blue: '#323366',
          mustard: '#C1AB19',
          background: '#FFF1DE',
          green: {
            light: '#1A6A5F',
            dark: '#1A6A5F',
          },
        },
      },

      spacing: {
        112: '28rem',
      },

      fontFamily: {
        Plex: ['Plex'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
}
