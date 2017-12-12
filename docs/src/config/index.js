import angular from 'angular';

import stateConfig from './states';
import materialTheme from './material-theme';

export default angular
  .module('myApp.configs', [
    stateConfig,
    materialTheme,
  ])
  .name;
