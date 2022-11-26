module.exports = {
  /*
        a preset is a set of plugins used to support particular language features.
        The two presets Babel uses by default: es2015, react
    */
  presets: [
    //compiling ES2015+ syntax
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ],
  /*
        Babel's code transformations are enabled by applying plugins (or presets) to your configuration file.
    */
  plugins: ['@babel/plugin-transform-runtime']
};
