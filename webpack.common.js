const path = require('path');
const glob = require('glob');

const eachComponentToEntrypoint = (entryPoint, filepath) => {
  const [, directoryName] = filepath.split('/').reverse();
  // eslint-disable-next-line import/no-extraneous-dependencies
  entryPoint[directoryName] = filepath;
  return entryPoint;
};

const mainFile = { index: path.resolve(__dirname, './src/index.js') };
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
};
