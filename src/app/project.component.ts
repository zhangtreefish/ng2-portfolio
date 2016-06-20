import { Component } from '@angular/core';
// import { Project } from './project';
import { ProjectsComponent } from './projects.component';

@Component({
	selector: 'details',
	templateUrl: 'app/project.component.html',
})
export class ProjectComponent {
	project;
	constructor(projectsComponent: ProjectsComponent) {
		this.project = projectsComponent.getActiveProject();
	}
}
