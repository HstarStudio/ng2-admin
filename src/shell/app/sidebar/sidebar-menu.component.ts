import { Component, OnInit, Input } from '@angular/core';

import { MenuModel } from './../../index.d';
import { RouterHelper } from './../../../core';

@Component({
  moduleId: module.id,
  selector: '[jh-sidebar-menu]',
  template: require('./sidebar-menu.component.html'),
  directives: [SidebarMenuComponent]
})
export class SidebarMenuComponent implements OnInit {

  private menuData: MenuModel[];

  @Input()
  private set menus(value) {
    this.menuData = value;
  }

  constructor(private routeHelper: RouterHelper) {

  }

  private go(menu): void {
    if (menu.state) {
      console.log('go to ', menu.state);
      this.routeHelper.go(menu.state);
    }
  }

  ngOnInit() {

  }

}