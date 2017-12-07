import angular from 'angular';
import angularMaterial from 'angular-material';

import controller from './sidenavSection';
import template from './sidenavSection.html';
import './sidenavSection.scss';

export const name = 'umpComponents.sidenavSection';

export default angular
  .module(name, [
    angularMaterial,
  ])
  .component('umpSidenavSection', {
    controller,
    bindings: {
      item: '<',
    },
    template,
  })
  .name;
