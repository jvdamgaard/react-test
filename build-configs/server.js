const path = require('path');

const PATHS = {
  app: './app/server.jsx',
  dist: path.join(__dirname, '../compiled'),
};

module.exports = {
  name: 'server-side rendering',
  entry: {
    'render-react': PATHS.app,
  },
  target: 'node',
  output: {
    path: PATHS.dist,
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
        plugins: ['transform-object-rest-spread'],
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
