const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:3]',
        ],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
