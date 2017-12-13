const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common');

const production = {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        // Which global variables NOT to mangle
        // Useful for packages that attach themselves on global window object
        // or expect another library to be available globally
        except: ['$super', '$', 'exports', 'require', 'angular'],
      },
    }),
  ],
};

module.exports = merge(common, production);
