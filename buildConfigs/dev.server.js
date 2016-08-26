const path = require('path');
const webpack = require('webpack');

const commonSettings = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../.compiled'),
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: [
          'transform-object-rest-spread',
        ],
      },
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.css$/,
      loaders: [
        'isomorphic-style-loader',
        'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
      ],
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules'],
  },
};

module.exports = [
  Object.assign({}, commonSettings, {
    name: 'render-react',
    entry: {
      'render-react': path.resolve(__dirname, '../src/components/server.jsx'),
    },
  }),
  Object.assign({}, commonSettings, {
    name: 'routes',
    entry: {
      routes: path.resolve(__dirname, '../src/components/app/routes.jsx'),
    },
  }),
];
