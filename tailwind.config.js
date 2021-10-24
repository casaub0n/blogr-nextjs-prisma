// @ts-check

/**
 * https://github.com/tailwindlabs/tailwindcss/discussions/1077
 */
const tailwindcssConfig = {
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
    require('@tailwindcss/forms')
  ],
}

module.exports = tailwindcssConfig
