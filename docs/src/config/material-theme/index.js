import angular from 'angular';
import ngMaterial from 'angular-material';

import blue from './blue';

export default angular
  .module('myApp.config.materialTheme', [
    ngMaterial,
  ])
  .config(($mdThemingProvider) => {
    'ngInject';

    $mdThemingProvider.definePalette('unityBlue', blue);

    $mdThemingProvider.theme('default')
      .primaryPalette('unityBlue');
  })
  .name;
