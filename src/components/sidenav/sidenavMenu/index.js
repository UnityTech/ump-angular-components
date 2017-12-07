import angular from 'angular';
import angularMaterial from 'angular-material';

import template from './sidenavMenu.html';
import './sidenavMenu.scss';

export const name = 'umpComponents.sidenavMenu';

export default angular
  .module(name, [
    angularMaterial,
  ])
  .component('umpSidenavMenu', {
    transclude: true,
    template,
  })
  .name;
