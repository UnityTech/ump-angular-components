const path = require('path');
const process = require('process');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isRelease = process.env.RELEASE;

const publicPath = isRelease ? '/ump-angular-components' : '/';

const paths = {
  appFile: path.resolve(__dirname, './src/app.js'),
  libSrc: path.resolve(__dirname, '../src'),
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
};

module.exports = {
  resolve: {
    alias: {
      src: paths.src,
      libSrc: paths.libSrc,
    },
  },
  entry: {
    app: paths.appFile,
  },
  output: {
    filename: '[name].[hash:8].js',
    publicPath,
    path: paths.dist,
  },
  plugins: [
    // Injects script tags in your index.html
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
    }),
  ],
};
