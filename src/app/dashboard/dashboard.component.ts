import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { TopNavComponent } from '../shared/topnav/topnav.component';
import { BreadcrumbService } from "../shared/breadcrumb/breadcrumb.service";
// import { SidebarComponent } from '../shared/sidebar/sidebar';

@Component({
    selector: 'dashboard-cmp',
    templateUrl: 'dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [BreadcrumbService]
})
export class DashboardComponent{
      constructor(private breadcrumbService: BreadcrumbService, private router: Router) {
        console.log('hello form `Dashboard` component');

        breadcrumbService.addFriendlyNameForRoute('/dashboard', 'Dashboard');
    }
}