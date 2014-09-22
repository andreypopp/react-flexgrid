var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './index'
  ],
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: '/build/'
  },
  resolve: {
    alias: {
      'react-flexgrid$': require.resolve('../lib/index')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'jsx-loader?harmony'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
