import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProjectService} from './project.service';

@Component({
	selector: 'projects',
	template: '<h2>Projects</h2 >\
	<table class="table table-bordered table-hover">\
	<thead><tr>\
	<td class="col-md-1"> title </td><td class="col-md-2"> description </td></tr>\
	</thead>\
	<tbody class="table-striped"><tr *ngFor="#project of projects" >\
	<td class="col-md-1"> {{project.title }} </td>\
	<td class="col-md-2"> {{project.description }} </td></tr></tbody>\
	</table>',
	providers: [ProjectService]
})
export class ProjectsComponent {
	projects;
	constructor(projectService: ProjectService){
		this.projects = projectService.getProjects();
	}
}
