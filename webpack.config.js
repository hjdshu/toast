const path = require('path');

module.exports = {
  // 入口，是一个对象
  entry: './toast.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  // 输出
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'toast',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}