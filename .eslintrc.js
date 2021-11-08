// @ts-check

/**
 * @type {import('eslint').Rule.RuleModule}
 */
const eslintConfig = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: { es2021: true, browser: true, jest: true, node: true },
  // TODO:https://zenn.dev/yoshiko/articles/0994f518015c04#import%E3%81%AE%E8%87%AA%E5%8B%95%E6%95%B4%E5%88%97%EF%BC%88import%2Forder%EF%BC%89
  plugins: ["@typescript-eslint", "simple-import-sort", "eslint-plugin-unused-imports"],
  "ignorePatterns": ["!.eslintrc.js", "!.babelrc.js"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "next/core-web-vitals",
    "prettier"
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "no-restricted-syntax": ["error", { selector: "TSEnumDeclaration", message: "Don't declare enums" }],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  }
}

module.exports = eslintConfig
