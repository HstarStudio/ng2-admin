import { Component, OnInit } from '@angular/core';

import {MenuModel} from './MenuModel.interface';
import {SidebarMenuComponent} from './sidebar-menu.component';

@Component({
  moduleId: module.id,
  selector: 'jh-sidebar',
  template: require('./sidebar.component.html'),
  directives: [SidebarMenuComponent]
})
export class SidebarComponent implements OnInit {
  private menuData: MenuModel[];
  constructor() { }

  ngOnInit() {
    this.menuData = [{
      text: 'Control Panel',
      icon: 'fa fa-dashboard',
      hasSub: true,
      subMenu: [
        { text: 'Home', icon: 'fa fa-circle-o', state: 'shell.home' },
        { text: 'Menu Config', icon: 'fa fa-circle-o', state: 'shell.home' }
      ]
    }, {
        text: 'Widgets',
        icon: 'fa fa-th',
        state: 'xx',
        tags: ['<small class="label pull-right bg-green">new</small>']
      }, {
        text: 'MailBox',
        icon: 'fa fa-envelope',
        tags: [
          '<small class="label pull-right bg-yellow">12</small>',
          '<small class="label pull-right bg-green">16</small>',
          '<small class="label pull-right bg-red">5</small>'
        ]
      }, {
        text: 'MultiLevel',
        icon: 'fa fa-share',
        hasSub: true,
        subMenu: [{
          text: 'Level One',
          icon: 'fa fa-circle-o',
          hasSub: true,
          subMenu: [{
            text: 'Level Two',
            icon: 'fa fa-circle-o',
            hasSub: true,
            subMenu: [{
              text: 'Level Three',
              icon: 'fa fa-circle-o'
            }]
          }]
        }]
      }];
  }

}