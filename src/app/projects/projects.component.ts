import {Component, OnInit, OnDestroy } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProjectService} from './project.service';
import {ProjectComponent} from './project.component';
import {Project} from './project';
//import { AutoGrowDirective } from './auto-grow.directive';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'projects',
	templateUrl: 'app/projects.component.html',
	styleUrls: ['app/projects.component.css'],
	providers: [ProjectService]
})
export class ProjectsComponent implements OnInit, OnDestroy{
	projects: Project[];
	sub: any;
	private activeId: number;

	constructor(
		private _projectService: ProjectService,
		private _router: Router,
    	private _route: ActivatedRoute) {}

	ngOnInit() {
    this.sub = this._route
    .params
    .subscribe(
    	params => {
        	this.activeId = +params['id'];
        	this._projectService.getProjects()
          	.then(projects => this.projects = projects);
      	});
    }

	ngOnDestroy() {
	this.sub.unsubscribe();
	}

	onClick(project: Project) {
		this._router.navigate(['/project', project.id]);
	}
}
