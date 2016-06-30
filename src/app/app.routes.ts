import { provideRouter, RouterConfig } from '@angular/router';

import { ProjectsRoutes } from './projects/projects.routes';
// import { ProjectsComponent } from './projects/projects.component';
const routes: RouterConfig = [
  ...ProjectsRoutes
];
// export const routes: RouterConfig = [
// 	{ path: 'projects', component: ProjectsComponent }
// 	];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes, {enableTracing: true})
];
