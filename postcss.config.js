const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];

const postcssConfig = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {
      ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
    },
    'postcss-nested': {},
  }
};

module.exports = postcssConfig
