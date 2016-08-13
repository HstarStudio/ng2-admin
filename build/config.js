let path = require('path');

module.exports = {
  dev: {
    env: 'development',
    port: 7410,
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  },
  build: {
    env: 'production',
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false
  }
}