import { Component, OnInit } from '@angular/core';

import {HeaderComponent} from './../header/header.component';
import {SidebarComponent} from './../sidebar/sidebar.component';

@Component({
  moduleId: module.id,
  selector: 'jh-root',
  styles: [require('./root.css')],
  template: require('./root.component.html'),
  directives: [HeaderComponent, SidebarComponent]
})
export class RootComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }
}