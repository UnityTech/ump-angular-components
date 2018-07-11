import angular from 'angular';
import angularMaterial from 'angular-material';

import template from './sidenavBackButton.html';
import './sidenavBackButton.scss';

export const name = 'umpComponents.sidenavBackButton';

export default angular
  .module(name, [
    angularMaterial,
  ])
  .component('umpSidenavBackButton', {
    bindings: {
      onClick: '&',
      buttonText: '@',
    },
    template,
  })
  .name;
