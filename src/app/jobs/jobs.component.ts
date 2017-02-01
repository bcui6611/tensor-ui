import { Component } from '@angular/core';
import { BreadcrumbService } from "../shared/breadcrumb/breadcrumb.service";
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