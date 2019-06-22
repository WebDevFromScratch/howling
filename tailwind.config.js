module.exports = {
  theme: {
    fontFamily: {
      // TODO: add better fallbacks setup
      'sans': ['Source Sans Pro', 'sans-serif'],
      'fira': ['Fira Sans', 'sans-serif'],
      'serif': ['Source Serif Pro', 'serif']
    },
    extend: {}
  },
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus']
  },
  plugins: []
}
