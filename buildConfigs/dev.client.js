const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  debug: true,
  name: 'browser',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      path.resolve(__dirname, '../src/components/client.jsx'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../public/static/'),
    publicPath: '/static/',
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
        plugins: ['react-hot-loader/babel', 'transform-object-rest-spread'],
      },
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
      ],
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
  },
  plugins: [
    // new ExtractTextPlugin('styles.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
