const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

const development = {
  devtool: 'cheap-eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    public: 'localhost',
    contentBase: path.join(__dirname, 'dist'),
    port: 8888,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(common, development);
