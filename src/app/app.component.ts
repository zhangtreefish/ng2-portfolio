import { Component } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { SkillsComponent } from './skills.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [ProjectsComponent, SkillsComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'My portfolio!';
  color = 'rgb(0, 250, 115)';
  size = '300%';
}
