module.exports = {
  presets: [
    ['solid'],
    ['poi/babel'],
    [
      '@babel/preset-env',
      {
        corejs: 3,
        loose: true,
        modules: false,
        useBuiltIns: 'usage',
        exclude: ['transform-regenerator', 'transform-async-to-generator']
      }
    ]
  ],
  plugins: [['transform-async-to-promises'], ['lodash']]
}
