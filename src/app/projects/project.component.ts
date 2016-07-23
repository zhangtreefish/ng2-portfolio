import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import {Project} from './project';
import {ProjectService} from './project.service';

@Component({
  moduleId: module.id,
	templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnInit, OnDestroy {
	@Input()
  project: Project;
	private _subscr: any;

	constructor(
		private _projectService: ProjectService,
		private _router: Router,
    private _route: ActivatedRoute){}

  ngOnInit() {
  		this._subscr = this._route.params.subscribe(params => {
     		let id = params['id'];
     		this._projectService.getProject(id).then(p => this.project = p);
   		});
   }

  ngOnDestroy() {
  		this._subscr.unsubscribe();
	}

	goBack() {
		window.history.back();
	}

  gotoProjects() {
      let projectId = this.project ? this.project.id : null;
      this._router.navigate(
        ['/projects'], {queryParams: { id: projectId}}
      );
  }
}
