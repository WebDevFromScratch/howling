module.exports = {
  theme: {
    fontFamily: {
      // TODO: add better fallbacks setup
      display: ['var(--font-family-display)', 'sans-serif'],
      body: ['var(--font-family-body)', 'sans-serif'],
      'body-secondary': ['var(--font-family-body-secondary)', 'serif'],
    },
    extend: {}
  },
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus']
  },
  plugins: []
}
