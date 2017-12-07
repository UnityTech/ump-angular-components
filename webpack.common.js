const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');

const eachComponentToEntrypoint = (entryPoint, filepath) => {
  const [, directoryName] = filepath.split('/').reverse();
  entryPoint[directoryName] = filepath;
  return entryPoint;
};

const mainFile = { index: path.resolve(__dirname, './index.js') };
const components = glob.sync('./src/components/*/index.js').reduce(eachComponentToEntrypoint, {});
const entry = Object.assign({}, components, mainFile);

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, './build'),
    umdNamedDefine: true,
    library: 'umpComponents',
    libraryTarget: 'umd',
  },
  externals: {
    angular: true,
    'angular-material': {
      commonjs: 'angular-material',
      commonjs2: 'angular-material',
      amd: 'angular-material',
    },
  },
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
        use: [{ loader: 'babel-loader', options: { cacheDirectory: false } }],
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
};
