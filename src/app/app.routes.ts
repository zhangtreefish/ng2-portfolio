import { provideRouter, RouterConfig } from '@angular/router';

import { ProjectsRoutes } from './projects/projects.routes';
import { SkillsRoutes } from './skills/skills.routes';
const routes: RouterConfig = [
  ...ProjectsRoutes,
  ...SkillsRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes, {enableTracing: true})
];
