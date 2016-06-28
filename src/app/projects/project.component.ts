import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Project } from './project';
import { ProjectsComponent } from './projects.component';
import { Router, ActivatedRoute } from '@angular/router';
import {Project} from './project';
import {ProjectService} from './project.service';

@Component({
	templateUrl: 'app/project.component.html',
})
export class ProjectComponent implements OnInit, OnDestroy {
	project: Project;
	private _sub: any;

	constructor(
		private _projectService: ProjectService,
		private _router: Router,
    private _route: ActivatedRoute){}

  // 	constructor(r: ActivatedRoute) {
  //   //r.params is an observable
  //   this.id = r.params.map(r => r.id);
  // }
  ngOnInit() {
  		this._sub = this._route.params.subscribe(params => {
     		let id = +params['id'];
     		this._projectService.getProject(id).then(p => this.project = p);
   		});
   }

  ngOnDestroy() {
  		this._sub.unsubscribe();
	}

	goBack() {
		window.history.back();
	}

  gotoProjects() {
      let projectId = this.project ? this.project.id : null;
      this._router.navigate(
        ['/projects'], {queryParams: { id: projectId}
      });
  }
}
