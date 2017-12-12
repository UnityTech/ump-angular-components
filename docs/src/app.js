import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngTranslate from 'angular-translate';

import appComponents from 'src/components/';
import appConfigs from 'src/config/';

import 'angular-material/angular-material.css';
import './app.scss';

export default angular
  .module('myApp', [
    uiRouter,
    ngAnimate,
    ngAria,
    ngMaterial,
    ngMessages,
    ngResource,
    ngSanitize,
    ngTranslate,

    appComponents,
    appConfigs,
  ]);
