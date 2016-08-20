const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const hotMiddlewareScript = 'webpack-hot-middleware/client' +
  '?path=/__webpack_hmr' +
  '&timeout=20000' +
  '&reload=false';

module.exports = {
  devtool: 'eval',
  name: 'browser',
  entry: {
    app: [path.resolve(__dirname, '../app/client.jsx'), hotMiddlewareScript],
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: '[name].js',
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
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: [
          'transform-object-rest-spread',
          ['react-transform', {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module'],
            }],
          }],
        ],
      },
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
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.NoErrorsPlugin(),
  ],
};
