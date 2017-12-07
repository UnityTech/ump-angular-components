const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common');

const production = {
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
};

module.exports = webpackMerge(common, production);
