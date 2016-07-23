// Services

import { RouterHelper } from './services/routerHelper';
import { ModuleLoader }  from './services/moduleLoader';
import { EventBus } from './services/eventBus';

export * from './services/routerHelper';
export * from './services/moduleLoader';
export * from './services/eventBus';

export const CORE_SERVICES = [
  RouterHelper,
  ModuleLoader,
  EventBus
];

// Pipes
