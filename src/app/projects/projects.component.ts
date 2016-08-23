import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './project';
import { ProjectService } from './project.service';
import { ProjectDetailsComponent }  from './project-details.component';


import { Angular2DataTableModule } from 'angular2-data-table';

import {
  TableOptions,
  TableColumn,
  ColumnMode
} from 'angular2-data-table';


@Component({
 // moduleId: module.id, // cleans the urls below (remove the folder in url)
  selector: 'my-projects',
  templateUrl: 'projects.component.html',  
  directives: [ 
    ProjectDetailsComponent,
  ],
  providers: [ProjectService],
  styleUrls:  ['projects.component.css']
})

export class ProjectsComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;


  constructor(
    private projectService: ProjectService) { }

  getProjects() {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }

  ngOnInit() {
    this.getProjects();
  }

  onSelect(project: Project) { 
    console.log("selected" + project);
    this.selectedProject = project; 
  
}


}
