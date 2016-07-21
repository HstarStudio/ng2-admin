'use strict';

let path = require('path');
let webpack = require('webpack');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  debug: true,
  entry: {
    'vendor': './src/bootstrap/vendor.ts',
    'core': './src/core/index.ts',
    'main': './src/bootstrap/main.ts'
  },
  output: {
    path: 'dist/assets/js',
    filename: '[name].js'
  },
  resolve: {
    root: [path.resolve(__dirname)],
    extensions: ['', '.ts', '.js', '.css', '.html']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: ['core', 'vendor']
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};