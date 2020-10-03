const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },
};
