import angular from 'angular';

import organizationNav from './organizationNav';

export default angular
  .module('myApp.components.sidenav', [
    organizationNav,
  ])
  .name;
