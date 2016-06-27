import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { ProjectsComponent }from './app/projects.component';
import { ProjectComponent }from './app/project.component';
import { provideRouter, RouterConfig } from '@angular/router';

// import {HTTP_PROVIDERS} from '@angular/http';
// import { XHRBackend } from '@angular/http';

// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }               from './in-memory-data.service';

// Extend Observable throughout the app
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

if (environment.production) {
  enableProdMode();
}

const ProjectsRoutes = [
  { path: '/projects',  component: ProjectsComponent },
  { path: '/poject/:id', component: ProjectComponent }
];
const routes: RouterConfig = [
  ...ProjectsRoutes
];
const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));

