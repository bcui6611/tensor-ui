import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

import { ChartComponent } from './charts.component';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ChartComponent,
    NotificationComponent
  ],
})
export class DashboardModule { }
