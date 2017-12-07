import angular from 'angular';
import angularMaterial from 'angular-material';

import sidenav from './src/components/sidenav';

export default angular
  .module('umpComponents', [
    angularMaterial,
    sidenav,
  ])
  .name;
