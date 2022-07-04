const storybookMainConfig = {
  stories: ['../src/components/**/*.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    // 'storybook-addon-next-router'
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias["next/image"] = require.resolve("./NextImage.js");
    return config
  }
}

module.exports = storybookMainConfig
