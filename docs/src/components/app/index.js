import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

const nav = [
  {
    heading: 'Sidenav',
    components: [
      { sref: 'app.sidenav.organization', name: 'Organization level', sub: 'Basics & localization' },
    ],
  },
];

export default angular
  .module('myApp.components.app', [
    uiRouter,
  ])
  .component('abpApp', {
    template: '<ui-view/>',
  })
  .component('componentNavigation', {
    // eslint-disable-next-line
    controller: function () {
      this.items = nav;
    },
    template: `
      <div ui-sref="app" class="app-name">
        UMP Angular Components
      </div>
      <div ng-repeat="item in $ctrl.items" class="component-section">
        <div class="component-heading">
          {{ item.heading }}
        </div>
        <div ng-repeat="component in item.components"
        <a ui-sref="{{ component.sref }}" ui-sref-active="active" class="component-link">
          <div class="component-name">{{ component.name }}</div>
          <div class="component-subtext">{{ component.sub }}</div>
        </a>
      </div>
    `,
  })
  .name;
