// @ts-check

/**
 * @type {import('eslint').Rule.RuleModule}
 */
const eslintConfig = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  "ignorePatterns": ["!.eslintrc.js", "!.babelrc.js"],
  "extends": [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ]
}

module.exports = eslintConfig
