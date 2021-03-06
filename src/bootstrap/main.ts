import { enableProdMode, provide, NgModule } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy, PlatformLocation } from '@angular/common';
import { BrowserPlatformLocation, Title } from '@angular/platform-browser';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { UIROUTER_PROVIDERS, UIRouterConfig, UIROUTER_DIRECTIVES } from 'ui-router-ng2';

import { CORE_SERVICES } from './../core';
import { RootComponent } from './../shell';
import { AppRouterConfig } from './routes';

enableProdMode();

bootstrap(RootComponent, [
  provide(APP_BASE_HREF, { useValue: '/' }),
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(PlatformLocation, { useClass: BrowserPlatformLocation }),
  ...HTTP_PROVIDERS,
  ...UIROUTER_PROVIDERS,
  provide(UIRouterConfig, { useClass: AppRouterConfig }),
  provide(NgModule , { useValue: UIROUTER_DIRECTIVES, multi: true }),
  disableDeprecatedForms(),
  provideForms(),
  Title,
  ...CORE_SERVICES
])
  .then(x => {
    console.log('app started...');
  })
  .catch(error => console.log(error));
