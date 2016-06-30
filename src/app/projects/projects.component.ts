import {Component, OnInit, OnDestroy } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProjectService} from './project.service';
import {ProjectComponent} from './project.component';
import {Project} from './project';
//import { AutoGrowDirective } from './auto-grow.directive';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
	templateUrl: 'projects.component.html',
	styleUrls: ['projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy{
	frontEndProjects: Project[];
	fullStackProjects: Project[];
	private _sub: any;
	private selectedId: string;

	constructor(
		private _projectService: ProjectService,
		private _router: Router,
    	private _route: ActivatedRoute) {}

	ngOnInit() {
    this._sub = this._router
      	.routerState
      	.queryParams
    	.subscribe(params => {
           	this._projectService.getProjects().then(projects => {
				this.frontEndProjects = projects
					.filter(project => project.genre === 'front end');
				this.fullStackProjects = projects
					.filter(project => project.genre === 'full stack');
			})
      	});
    }

	ngOnDestroy() {
	this._sub.unsubscribe();
	}

	isSelected(project: Project) { return project.id === this.selectedId; }

	onClick(project: Project) {
		this._router.navigate(['/project', project.id]);
	}
}
