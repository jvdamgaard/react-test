const path = require('path');
const webpack = require('webpack');

const hotMiddlewareScript = 'webpack-hot-middleware/client' +
  '?path=/__webpack_hmr' +
  '&timeout=20000' +
  '&reload=true';

const PATHS = {
  app: './app/index.jsx',
  dist: path.join(__dirname, 'dist'),
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
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
