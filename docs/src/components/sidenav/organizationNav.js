import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngTranslate from 'angular-translate';

import umpSidenav from 'libSrc/components/sidenav';
// import 'libSrc/components/sidenav/sidenavSection/sidenavSection.scss';

class OrganizationNav {
  constructor($mdSidenav) {
    'ngInject';

    this.$mdSidenav = $mdSidenav;
  }

  $onInit() {
    this.items = [{
      icon: 'language',
      text: 'organizationNav.foonbar',
      menu: [
        { text: 'organizationNav.foo', sref: 'app.organizationNav.foo' },
        { text: 'organizationNav.baz', sref: 'app.organizationNav.bar.baz' },
      ],
    }, {
      icon: 'apps',
      text: 'organizationNav.google',
      href: 'https://google.com',
    }];
  }

  openMenu() {
    this.$mdSidenav('sideNav').toggle();
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
      name: 'app.organizationNav',
      url: '/organization',
      component: 'organizationNav',
    }, {
      name: 'app.organizationNav.foo',
      url: '/foo',
    }, {
      name: 'app.organizationNav.bar',
      url: '/bar',
    }, {
      name: 'app.organizationNav.bar.baz',
      url: '/baz',
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
          baz: 'Baz',
          google: 'Google.com',
        },
      })
      .preferredLanguage('en');
  })
  .component('organizationNav', {
    controller: OrganizationNav,
    template: `
      <div class="preview-description">
        <p>Resize the window to see how the component behaves in lower screen resolutions.</p>

        <div hide-gt-xs>
          <a ng-click="$ctrl.openMenu();">Show menu</a>
        </div>
      </div>

      <ump-sidenav-menu>
        <ump-sidenav-section ng-repeat="item in $ctrl.items" item="item">
        </ump-sidenav-section>
      </ump-sidenav-menu>
    `,
  })
  .name;
