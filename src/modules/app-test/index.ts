import {LayoutComponent} from './app/layout/layout.component';
import {IndexComponent} from './app/index/index.component';

export let MODULE_STATES = [
  { name: 'appTest', component: LayoutComponent, url: '/app-test' },
  { name: 'appTest.index', component: IndexComponent, url: '/' }
];
