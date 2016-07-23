import { Injectable } from '@angular/core';
import { UIRouter, UIRouterConfig } from 'ui-router-ng2';

import { ModuleLoader } from './../core';

// System module
import {MODULE_STATES as SHELL_MODULE_STATES} from './../shell';

@Injectable()
export class AppRouterConfig implements UIRouterConfig {

  constructor(private moduleLoader: ModuleLoader) {

  }

  private _getModuleName(stateName): string {
    if (!stateName) {
      return '';
    }
    let stateNameArr = stateName.split('.');
    let moduleName = stateNameArr.length > 1 ? stateNameArr[0] : '';
    return moduleName.replace(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
  }

  configure(uiRouter: UIRouter) {
    // 设置uiRouter
    this.moduleLoader.setRouter(uiRouter);
    // 注册Shell模块路由
    SHELL_MODULE_STATES.forEach(state => uiRouter.stateRegistry.register(state));

    uiRouter.urlRouterProvider.otherwise(x => {
      console.log('otherwise');
      return uiRouter.stateService.go('shell.home', null, null) && null;
    });

    uiRouter.stateProvider.invalidCallbacks = [($from$, $to$) => {
      return new Promise((resolve, reject) => {
        let toStateName = $to$.name();
        let moduleName = this._getModuleName(toStateName);
        if (!moduleName) {
          return;
        }
        this.moduleLoader.load(moduleName).then(_ => {
          let state = uiRouter.stateService.target(toStateName);
          resolve(state);
        });
      });
    }];

    uiRouter.urlRouterProvider.otherwise('/');
  }
}