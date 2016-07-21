import { enableProdMode, provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy, PlatformLocation } from '@angular/common';
import { BrowserPlatformLocation } from '@angular/platform-browser';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { UIROUTER_PROVIDERS, UIRouterConfig, UIROUTER_DIRECTIVES } from 'ui-router-ng2';

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
  provide(PLATFORM_DIRECTIVES, { useValue: UIROUTER_DIRECTIVES, multi: true }),
  disableDeprecatedForms(),
  provideForms()
])
  .then(x => {
    console.log('app started...');
  })
  .catch(error => console.log(error));
