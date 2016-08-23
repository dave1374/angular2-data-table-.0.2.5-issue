import { Project } from './project';
import { PROJECTS } from './mock-projects';

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {
  getProjects() {
    return Promise.resolve(PROJECTS);
  }


  getProject(id: number) {
    return this.getProjects()
               .then(projects => projects.find(project => project.id === id));
  }

}