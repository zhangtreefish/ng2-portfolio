import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {SkillService} from './skills.service';

@Component({
	selector: 'skills',
	templateUrl: 'app/skills.component.html',
	providers: [SkillService]
})
export class SkillsComponent {
	skills;
	constructor(skillService: SkillService){
		this.skills = skillService.getSkills();
	}
}