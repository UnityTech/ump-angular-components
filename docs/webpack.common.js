const path = require('path');
const process = require('process');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isRelease = process.env.RELEASE;

const paths = {
  appFile: path.resolve(__dirname, './src/app.js'),
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
};

module.exports = {
  resolve: {
    alias: {
      src: paths.src,
    },
  },
  entry: {
    app: paths.appFile,
  },
  output: {
    filename: '[name].[hash:8].js',
    publicPath: isRelease ? '/ump-angular-components' : '/',
    path: paths.dist,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
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
    // Injects script tags in your index.html
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
    }),

    // Extract styles to their own files
    new ExtractTextPlugin({
      filename: 'styles.[contenthash].css',
      disable: !isRelease,
      allChunks: true,
    }),
  ],
};
