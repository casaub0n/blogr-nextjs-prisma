module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    layers: ['utilities'],
    root: ['<rootDir>'],
    content: [
      // Paths to your templates...
      './src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'
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
