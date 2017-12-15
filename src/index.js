import angular from 'angular';
import angularMaterial from 'angular-material';

import sidenav from './components/sidenav';

export default angular
  .module('umpComponents', [
    angularMaterial,
    sidenav,
  ])
  .name;
