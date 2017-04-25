import { Component } from '@angular/core';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { Router } from '@angular/router';

@Component({
  selector: 'jobs-cmp',
  templateUrl: './jobs.component.html'
})
export class JobsComponent {
  constructor(private breadcrumbService: BreadcrumbService, private router: Router) {
    console.log('hello form `Job Component` component');

    breadcrumbService.addFriendlyNameForRoute('/jobs', 'Jobs');
  }
}
