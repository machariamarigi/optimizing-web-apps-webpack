const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          // {
          //   loader: 't-loader',
          //   options: {
          //     label: 'after'
          //   }
          // },
          'babel-loader',
          // {
          //   loader: 't-loader',
          //   options: {
          //     label: 'before'
          //   }
          // }
        ]
      }
    ]
  },
  resolveLoader: {
    alias: {
      "t-loader": path.resolve(__dirname, 't-loader.js')
    }
  }
}