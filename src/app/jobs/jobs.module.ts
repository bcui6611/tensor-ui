import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavModule } from '../shared/topnav/topnav.module';
import { JobsComponent } from './jobs.component';

import { BreadcrumbService, Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';

@NgModule({
  imports: [
    TopNavModule,
    RouterModule,
    Ng2BreadcrumbModule
  ],
  declarations: [
    JobsComponent
  ],
  providers: [
    BreadcrumbService
  ]
})
export class JobsModule {
}
