const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

var config

config = require('./webpack.config');

new WebpackDevServer(webpack(config), {}).listen(8080, 'localhost', function (err, res) {
  if (err) {return console.log(err);}
  console.log('==> 🌎 Listening on port 8080');
})
