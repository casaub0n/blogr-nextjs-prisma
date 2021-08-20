module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    layers: ['utilities'],
    content: [
      // Paths to your templates...
      './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'
    ],
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('tailwind-nord'),
  ],
}
