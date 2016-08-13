let path = require('path');

let express = require('express');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let historyApiFallback = require('connect-history-api-fallback');

let config = require('./config');
let webpackConfig = require('./webpack.dev.conf');
let port = process.env.PORT || config.dev.port;

let app = express();
let compiler = webpack(webpackConfig);

let devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

let hotMiddleware = webpackHotMiddleware(compiler);
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, done) => {
    hotMiddleware.publish({ action: 'reload' });
    done();
  });
});

app.use(historyApiFallback());
app.use(devMiddleware);
app.use(hotMiddleware);

let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

module.exports = app.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Listening at http://localhost:${port}\n`);
});