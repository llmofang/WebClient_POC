var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:8080",
    'webpack/hot/only-dev-server',
    './src/scripts/main'
  ],
  devtool: "eval",
  target: "web",
  debug: true,
  output: {
    path: path.join(__dirname, "dist", "assets"),
    publicPath: "/assets/",
    filename: 'bundle.js',
    chunkFilename: "[chunkhash].js"
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.cjsx', '.coffee']
  },
  module: {
    loaders: [

      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=image/svg+xml' },
    
      { test: /\.css$/, loaders: ['style', 'css']},
      { test: /\.cjsx$/, loaders: ['react-hot', 'coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee' }
    ]
  }
};