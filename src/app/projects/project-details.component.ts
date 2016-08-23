import { Component, Input } from '@angular/core';
//import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";

import { Project } from './project';
//import { ProjectService } from './project.service';

@Component({
  selector: 'project-details',
  templateUrl: 'project-details.component.html',
  //directives: [MATERIAL_DIRECTIVES]
})

export class ProjectDetailsComponent { //Implements OnInit
  @Input() 
  project: Project;

  CQs = 'Danielle Gunter Carole Lisette Uda'.split(' ');

  // onChange(newValue) {
  //   console.log(newValue);
  //   this.project.CQ = newValue;
  // }

}