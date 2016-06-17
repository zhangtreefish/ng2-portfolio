import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProjectService} from './project.service';
import {ProjectComponent} from './project.component';

@Component({
	selector: 'projects',
	templateUrl: 'app/projects.component.html',
	providers: [ProjectService],
	directives: [ProjectComponent]
})
export class ProjectsComponent {
	projects;
	activeProject;
	constructor(projectService: ProjectService) {
		this.projects = projectService.getProjects();
		this.activeProject = this.projects[0];
	};
	setActiveProject(proj) {
		this.activeProject = proj;
	};
	getActiveProject() {
		return this.activeProject;
	};
}
