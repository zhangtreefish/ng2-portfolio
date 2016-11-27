import { RouterConfig } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project.component';

export const ProjectsRoutes : RouterConfig = [
  { path: 'projects',  component: ProjectsComponent },
  { path: 'project/:id', component: ProjectComponent }
];

 // { path: '', redirectTo: 'projects', terminal: true },
