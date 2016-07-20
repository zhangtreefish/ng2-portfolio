import { RouterConfig } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project.component';

export const ProjectsRoutes : RouterConfig = [
  // { path: '', redirectTo: 'projects', terminal: true },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'project/:id', component: ProjectComponent }
];