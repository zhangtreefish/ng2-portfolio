import {Component, OnInit, OnDestroy } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProjectService} from './project.service';
import {ProjectComponent} from './project.component';
import {Project} from './project';
//import { AutoGrowDirective } from './auto-grow.directive';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: 'app/projects.component.html',
	styleUrls: ['app/projects.component.css'],
	providers: [ProjectService]
})
export class ProjectsComponent implements OnInit, OnDestroy{
	projects: Project[];
	private _sub: any;
	private _activeId: number;

	constructor(
		private _projectService: ProjectService,
		private _router: Router,
    	private _route: ActivatedRoute) {}

	ngOnInit() {
    this._sub = this._router
      	.routerState
      	.queryParams
    	.subscribe(params => {
        	this._activeId = +params['id'];
        	this._projectService.getProjects()
          	.then(projs => this.projects = projs);
      	});
    }

	ngOnDestroy() {
	this._sub.unsubscribe();
	}

	onClick(project: Project) {
		this._router.navigate(['/project', project.id]);
	}
}
