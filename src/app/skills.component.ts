import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {SkillService} from './skills.service';

@Component({
	selector: 'skills',
	template: '<h2>Skills</h2><ul><li *ngFor="#skill of skills">{{skill}}</li></ul>',
	providers: [SkillService]
})
export class SkillsComponent {
	skills;
	constructor(skillService: SkillService){
		this.skills = skillService.getSkills();
	}
}
