import angular from 'angular';
import angularMaterial from 'angular-material';

import sidenavBackButton from './sidenavBackButton';
import sidenavSection from './sidenavSection';
import sidenavDropdown from './sidenavDropdown';
import sidenavMenu from './sidenavMenu';

export const name = 'umpComponents.sidenav';

export default angular
  .module(name, [
    angularMaterial,
    sidenavBackButton,
    sidenavSection,
    sidenavDropdown,
    sidenavMenu,
  ])
  .name;
