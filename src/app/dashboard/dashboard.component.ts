import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { TopNavComponent } from '../shared/topnav/topnav.component';
// import { SidebarComponent } from '../shared/sidebar/sidebar';

@Component({
    selector: 'dashboard-cmp',
    templateUrl: 'dashboard.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent{
    constructor(private router: Router){ }
}