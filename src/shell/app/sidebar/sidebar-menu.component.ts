import { Component, OnInit, Input } from '@angular/core';

import {MenuModel} from './MenuModel.interface';

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

  constructor() { }

  ngOnInit() {

  }

}