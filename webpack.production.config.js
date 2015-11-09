var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './src/scripts/main'
    ],
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, "dist", "assets"),
    publicPath: "/assets/",
    filename: 'bundle.js',
    chunkFilename: "[chunkhash].js"
  },
  resolveLoader: {
    modulesDirectories: ['..', 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      // This has effect on the react lib size.
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.IgnorePlugin(/un~$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
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
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee' }
    ]
  }
};