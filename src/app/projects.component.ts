import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProjectService} from './project.service';
import {ProjectComponent} from './project.component';
import {Project} from './project';
// import { AutoGrowDirective } from './auto-grow.directive';

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
	setActiveProject(proj: Object) {
		this.activeProject = proj;
	};
	getActiveProject() {
		return this.activeProject;
	};
	onClick(project: Object) {
		this.activeProject = project;
		console.log(JSON.stringify(project));
	}
}
