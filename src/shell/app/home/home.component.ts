import { Component, OnInit } from '@angular/core';

import {EventBus} from './../../../core';

@Component({
  moduleId: module.id,
  selector: 'jh-shell-home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  constructor(private eventBus: EventBus) {

  }

  ngOnInit() {
    let e1 = this.eventBus.on('abcde', (data) => {
      console.log('abc', '1', data);
    });
    let e2 = this.eventBus.on('abcde', (data) => {
      console.log('abc', '2', data);
    });
    this.eventBus.emit('abcde', 'hahhah');
    e1.unsubscribe();
    this.eventBus.emit('abcde', '第二轮');
  }
}