let path = require('path');

let config = require('./config');
let root = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    'app-test': './src/modules/app-test/index.ts',
    'app': './src/bootstrap/main.ts',
    'core': ['./src/core/index.ts'],
    vendor: './src/bootstrap/vendor.ts'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.css', '.html']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader', include: root },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.styl$/, loader: 'raw-loader!stylus-loader' },
      { test: /\.css$/, loader: 'raw-loader' }
    ]
  }
};