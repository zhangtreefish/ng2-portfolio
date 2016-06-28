import { provideRouter, RouterConfig } from '@angular/router';

import { ProjectsRoutes } from './projects/projects.routes';

const routes: RouterConfig = [
  ...ProjectsRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
