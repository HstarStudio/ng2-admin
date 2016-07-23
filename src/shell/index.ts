export { RootComponent } from './app/root/root.component';

import { LayoutComponent } from './app/layout/layout.component';
import { HomeComponent } from './app/home/home.component';

export let MODULE_STATES = [
  { name: 'shell', component: LayoutComponent, url: '' },
  { name: 'shell.home', component: HomeComponent, url: '/' }
];
