const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const hotMiddlewareScript = 'webpack-hot-middleware/client' +
  '?path=/__webpack_hmr' +
  '&timeout=20000' +
  '&reload=true';

const PATHS = {
  app: path.resolve(__dirname, '../app/index.jsx'),
  dist: path.resolve(__dirname, '../dist'),
};

module.exports = {
  devtool: 'eval',
  entry: {
    app: [PATHS.app, hotMiddlewareScript],
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)/,
      loaders: ['eslint-loader'],
      exclude: /node_modules/,
    }],
    loaders: [{
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader'],
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'isomorphic-style-loader',
        'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]'
      ),
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
