import { Injectable } from '@angular/core';
import {UIRouter, UIRouterConfig} from 'ui-router-ng2';

// System module
import {MODULE_STATES as SHELL_MODULE_STATES} from './../shell';

@Injectable()
export class AppRouterConfig implements UIRouterConfig {

  constructor() { }

  configure(uiRouter: UIRouter) {
    // 注册Shell模块路由
    SHELL_MODULE_STATES.forEach(state => uiRouter.stateRegistry.register(state));

    uiRouter.urlRouterProvider.otherwise(x => {
      console.log('otherwise');
      return uiRouter.stateService.go('shell.home', null, null) && null;
    });
  }
}