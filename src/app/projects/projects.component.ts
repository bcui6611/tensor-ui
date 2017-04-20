import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

@Component({
  selector: 'project-cmp',
  templateUrl: './projects.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [BreadcrumbService]
})
export class ProjectsComponent {
  constructor(private breadcrumbService: BreadcrumbService, private router: Router) {
    console.log('hello form `Projects` component');

    breadcrumbService.addFriendlyNameForRoute('/projects', 'Projects');
    breadcrumbService.addFriendlyNameForRoute('/projects/add', 'Create Project');
  }
}
