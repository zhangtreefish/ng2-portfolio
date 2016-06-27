import {Component, OnInit } from '@angular/core';
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
export class ProjectsComponent implements OnInit {
	projects: Project[];
	sub: any;
	private activeId: number;

	constructor(
		private projectService: ProjectService,
		private router: Router,
    	private route: ActivatedRoute) {}

	ngOnInit() {
    this.sub = this.router
      .routerState
      .queryParams
      .subscribe(params => {
        this.activeId = +params['id'];
        this.projectService.getProjects()
          .then(projects => this.projects = projects);
      });
    }

	onClick(project: Project) {
		this.router.navigate(['/project', project.id]);
	}
}
