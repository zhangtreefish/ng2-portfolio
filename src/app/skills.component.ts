import { Component } from '@angular/core';

import {SkillService} from './skills.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'skills',
	templateUrl: 'app/skills.component.html',
	styleUrls: ['app/skills.component.css'],
	providers: [SkillService]
})
export class SkillsComponent {
	skills: String[];
	constructor(private skillService: SkillService){
		this.skills = skillService.getSkills();
	}
}
