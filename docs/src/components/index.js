import angular from 'angular';

import appComponent from './app';
import sidenavComponent from './sidenav';

export default angular
  .module('myApp.components', [
    appComponent,
    sidenavComponent,
  ])
  .name;
