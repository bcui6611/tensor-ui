import { NgModule } from '@angular/core';

import { TopNavModule } from '../shared/topnav/topnav.module';
import { DashboardComponent  } from './dashboard.component';
import { DashboardHomeModule } from './components/dashboardHome/dashboard-home.module';
@NgModule({
    imports: [
        TopNavModule,
        DashboardHomeModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        TopNavModule,
        DashboardComponent
    ]
})
export class DashboardModule { }
