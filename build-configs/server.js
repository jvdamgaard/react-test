const path = require('path');

const PATHS = {
  app: './server/middleware/serve-html.jsx',
  dist: path.join(__dirname, '../dist'),
};

module.exports = {
  name: 'server-side rendering',
  entry: {
    server: [PATHS.app],
  },
  target: 'node',
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'serve-html.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
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
