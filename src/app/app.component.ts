import { Component } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { SkillsComponent } from './skills.component';

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
}
