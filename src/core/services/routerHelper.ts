import { Injectable } from '@angular/core';

import { UIRouter } from 'ui-router-ng2';

@Injectable()
export class RouterHelper {

  constructor(private uiRouter: UIRouter) {

  }

  go(state) {
    this.uiRouter.stateService.go(state);
  }
}