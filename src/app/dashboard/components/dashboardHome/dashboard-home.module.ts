import { NgModule } from '@angular/core';
import { ChartComponent } from '../charts/charts.component';
import { NotificationModule } from '../notification/notification.module';
import { DashboardHomeComponent } from './dashboard-home.component';

@NgModule({
  imports: [
    NotificationModule
  ],
  declarations: [
    DashboardHomeComponent,
    ChartComponent
  ],
  exports: [
    DashboardHomeComponent,
    ChartComponent
  ]
})
export class DashboardHomeModule {
}
