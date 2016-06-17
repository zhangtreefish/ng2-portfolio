import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProjectService} from './project.service';

@Component({
	selector: 'projects',
	template: '<h2>Projects</h2 >\
	<table class="table table-hover">\
	<thead><tr>\
	<td>image </td><td> description </td><td> title </td></tr>\
	</thead>\
	<tbody ><tr *ngFor="#project of projects" >\
	<td></td>\
	<td> {{project.description }} </td>\
	<td> {{project.title }} </td></tr></tbody>\
	</table>',
	providers: [ProjectService]
})
export class ProjectsComponent {
	projects;
	constructor(projectService: ProjectService){
		this.projects = projectService.getProjects();
	}
}
