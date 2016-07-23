import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { UIRouter } from 'ui-router-ng2';

@Injectable()
export class ModuleLoader {

  private uiRouter: UIRouter;
  private loadedModules: Set<string>;

  constructor(private http: Http) {
    this.loadedModules = new Set<string>();
  }

  setRouter(uiRouter) {
    this.uiRouter = uiRouter;
  }

  load(moduleName): Promise<any> {
    if (this.loadedModules.has(moduleName)) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.http.get(`../dist/assets/js/${moduleName}.js`)
        .toPromise()
        .then(res => {
          let mod = eval(res.text());
          mod.MODULE_STATES.forEach(state => {
            this.uiRouter.stateRegistry.register(state);
          });
          this.loadedModules.add(moduleName);
          resolve();
        }).catch(err => reject(err));
    });
  }
}