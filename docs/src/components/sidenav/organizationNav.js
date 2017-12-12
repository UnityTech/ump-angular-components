import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngTranslate from 'angular-translate';

import umpSidenav from '@unity-ads/ump-angular-components/sidenav';

class OrganizationNav {
  constructor($window) {
    'ngInject';

    this.currentDomain = $window.location.host;
  }

  $onInit() {
    this.items = [{
      text: 'organizationNav.foonbar',
      menu: [
        { text: 'organizationNav.foo', sref: 'app.sidenav.organization.foo' },
        { text: 'organizationNav.bar', href: `https://${this.currentDomain}/sidenav/organization/bar` },
      ],
    }, {
      text: 'organizationNav.google',
      href: 'https://google.com',
    }];
  }
}

export default angular
  .module('myApp.components.sidenav.organizationNav', [
    uiRouter,
    ngTranslate,
    umpSidenav,
  ])
  .config(($stateProvider) => {
    'ngInject';

    const states = [{
      name: 'app.sidenav.organization',
      url: '/organization',
    }, {
      name: 'app.sidenav.organization.foo',
      url: '/foo',
    }, {
      name: 'app.sidenav.organization.bar',
      url: '/bar',
    }];

    states.forEach((state) => {
      $stateProvider.state(state.name, state);
    });
  })
  .config(($translateProvider) => {
    'ngInject';

    $translateProvider
      .translations('en', {
        organizationNav: {
          foonbar: 'Foo & Bar',
          foo: 'Foo',
          bar: 'Bar',
          google: 'Google.com',
        },
      })
      .preferredLanguage('en');
  })
  .component('organizationNav', {
    controller: OrganizationNav,
    template: `
      <ump-sidenav-menu>
        <ump-sidenav-section ng-repeat="item in $ctrl.items" item="item">
        </ump-sidenav-section>
      </ump-sidenav-menu>
    `,
  })
  .name;
