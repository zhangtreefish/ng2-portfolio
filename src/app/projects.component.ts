import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProjectService} from './project.service';

@Component({
	selector: 'projects',
	template: '<h2>Projects</h2><ul><li *ngFor="#project of projects">{{project.title}}</li></ul>',
	providers: [ProjectService]
})
export class ProjectsComponent {
	projects;
	constructor(projectService: ProjectService){
		this.projects = projectService.getProjects();
	}
}
