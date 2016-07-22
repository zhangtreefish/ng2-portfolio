import { provideRouter, RouterConfig } from '@angular/router';

import { ProjectsRoutes } from './projects/projects.routes';
import { SkillsRoutes } from './skills/skills.routes';
// import { SkillsComponent } from './skills/skills.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { ProjectComponent } from './projects/project.component';

export const routes: RouterConfig = [
  ...ProjectsRoutes,
  ...SkillsRoutes,
  // { path: 'skills',  component: SkillsComponent },
  // { path: 'projects',  component: ProjectsComponent },
  // { path: 'project/:id', component: ProjectComponent },
  { path: '', redirectTo: 'skills', terminal: true }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes, {enableTracing: true})
];
