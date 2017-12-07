import angular from 'angular';
import angularMaterial from 'angular-material';

import template from './sidenavDropdown.html';
import './sidenavDropdown.scss';

export const name = 'umpComponents.sidenavDropdown';

export default angular
  .module(name, [
    angularMaterial,
  ])
  .component('umpSidenavDropdown', {
    bindings: {
      projectList: '<',
      onSelect: '&',
      selectedProject: '<',
    },
    template,
  })
  .name;
