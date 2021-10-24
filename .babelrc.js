// @ts-check

/**
 * @type {import('@babel/core').TransformOptions}
 */
const babelConfig = {
  "presets": ["next/babel"],
  "plugins": ["babel-plugin-macros", ["styled-components", { "ssr": true }]]
}

module.exports = babelConfig
