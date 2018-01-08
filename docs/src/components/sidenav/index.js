import angular from 'angular';

import organizationNav from './organizationNav';
import projectNav from './projectNav';

export default angular
  .module('myApp.components.sidenav', [
    organizationNav,
    projectNav,
  ])
  .name;
