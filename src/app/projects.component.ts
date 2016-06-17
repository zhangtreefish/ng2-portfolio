import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProjectService} from './project.service';

@Component({
	selector: 'projects',
	templateUrl: 'app/projects.component.html',
	providers: [ProjectService]
})
export class ProjectsComponent {
	projects;
	constructor(projectService: ProjectService){
		this.projects = projectService.getProjects();
	}
}
