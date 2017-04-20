import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopNavModule } from '../shared/topnav/topnav.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeModule } from './components/dashboardHome/dashboard-home.module';

import { Ng2BreadcrumbModule, BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

@NgModule({
    imports: [
        TopNavModule,
        RouterModule,
        DashboardHomeModule,
        Ng2BreadcrumbModule
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
        BreadcrumbService,
    ]
})
export class DashboardModule { }
