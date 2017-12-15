import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import states from './app';

export default angular
  .module('myApp.config.states', [
    uiRouter,
  ])
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    'ngInject';

    $locationProvider.html5Mode(false).hashPrefix('!');

    $urlRouterProvider.otherwise(states[0].url);

    states.forEach((state) => {
      $stateProvider.state(state.name, state);
    });
  })
  .name;
