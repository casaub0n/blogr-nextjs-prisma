// ValidationError: Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = { fs: 'empty', module: 'empty'}
//     }

//     return config
//   },
// }
