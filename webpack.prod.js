const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');
const fileImports = require('./webpack/file-imports.js');

const production = {
  devtool: 'source-map',
};

module.exports = webpackMerge(common, fileImports, production);
