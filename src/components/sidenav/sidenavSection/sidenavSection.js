export default class SidenavSection {
  constructor($mdSidenav, $state, $window) {
    'ngInject';

    this.$mdSidenav = $mdSidenav;
    this.$state = $state;
    this.$window = $window;

    if (this.item.menu) {
      this.isOpen = this.isMenuItemActive(this.item.menu);
    }
  }

  closeSidenav() {
    this.$mdSidenav('sideNav').close();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  isActiveUrl(href) {
    return this.$window.location.href === href;
  }

  isActiveState(sref) {
    return this.$state.current.name === sref;
  }

  isMenuItemActive(items) {
    return items.some(({ sref, href }) => {
      if (href) {
        return this.isActiveUrl(href);
      }
      return this.isActiveState(sref);
    });
  }
}
