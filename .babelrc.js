module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false,
      targets: {
        browsers: ['> 1%']
      },
      useBuiltIns: 'usage'
    }]
  ]
}