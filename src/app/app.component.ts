import { Component } from '@angular/core';
//import { ProjectsComponent } from './projects.component';
//import { SkillsComponent } from './skills.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectService } from './projects/project.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ProjectService],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'My portfolio!';
  color = 'rgb(0, 250, 115)';
  size = '300%';
}
