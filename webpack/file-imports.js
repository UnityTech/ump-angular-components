const process = require('process');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isRelease = process.env.RELEASE;

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'eslint-loader' }],
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'ng-annotate-loader' }],
        enforce: 'post',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: !isRelease,
      allChunks: true,
    }),
  ],
};
