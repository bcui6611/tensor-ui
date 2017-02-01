import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopNavModule } from '../shared/topnav/topnav.module';
import { DashboardComponent  } from './dashboard.component';
import { DashboardHomeModule } from './components/dashboardHome/dashboard-home.module';
import { BreadcrumbModule, BreadcrumbService } from '../shared/breadcrumb/breadcrumb.module'

@NgModule({
    imports: [
        TopNavModule,
        RouterModule,
        DashboardHomeModule,
        BreadcrumbModule
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
        BreadcrumbService,
    ]
})
export class DashboardModule { }
