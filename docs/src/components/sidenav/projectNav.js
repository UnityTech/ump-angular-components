import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngTranslate from 'angular-translate';

import umpSidenav from 'libSrc/components/sidenav';

class ProjectNav {
  constructor($mdSidenav) {
    'ngInject';

    this.$mdSidenav = $mdSidenav;
  }

  $onInit() {
    this.items = [{
      icon: 'language',
      text: 'Overview',
      sref: 'app.projectNav.foo',
    }, {
      icon: 'apps',
      text: 'Statistics',
      sref: 'app.projectNav.bar',
    }];

    this.projects = [{
      id: 100, name: 'Project with a very long name that does not fit',
    }, {
      id: 101, name: 'Project B',
    }, {
      id: 102, name: 'Project C',
    }];

    // eslint-disable-next-line
    this.selectedProject = this.projects[2];
  }

  // eslint-disable-next-line
  onBackClick() {
    // eslint-disable-next-line
    console.log('Go back!');
  }

  // eslint-disable-next-line
  selectProject(project) {
    this.selectedProject = project;
  }

  openMenu() {
    this.$mdSidenav('sideNav').toggle();
  }
}

export default angular
  .module('myApp.components.sidenav.projectNav', [
    uiRouter,
    ngTranslate,
    umpSidenav,
  ])
  .config(($stateProvider) => {
    'ngInject';

    const states = [{
      name: 'app.projectNav',
      url: '/project',
      component: 'projectNav',
    }, {
      name: 'app.projectNav.foo',
      url: '/foo',
    }, {
      name: 'app.projectNav.bar',
      url: '/bar',
    }];

    states.forEach((state) => {
      $stateProvider.state(state.name, state);
    });
  })
  .component('projectNav', {
    controller: ProjectNav,
    template: `
      <div class="preview-description">
        <p>Resize the window to see how the component behaves in lower screen resolutions.</p>

        <div hide-gt-xs>
          <a ng-click="$ctrl.openMenu();">Show menu</a>
        </div>
      </div>

      <ump-sidenav-menu>
        <ump-sidenav-back-button
          button-text="All projects"
          on-click="$ctrl.onBackClick()">
        </ump-sidenav-back-button>

        <ump-sidenav-dropdown
          project-list="$ctrl.projects"
          selected-project="$ctrl.selectedProject"
          on-select="$ctrl.selectProject(project)">
        </ump-sidenav-dropdown>

        <ump-sidenav-section
          ng-repeat="item in $ctrl.items" item="item">
        </ump-sidenav-section>
      </ump-sidenav-menu>
    `,
  })
  .name;
