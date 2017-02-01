import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavModule } from '../shared/topnav/topnav.module';
import { JobsComponent } from './jobs.component';
import { JobsHomeComponent } from './jobs-home/jobs-home.component';
import {  } from './jobs-table/';

import { BreadcrumbModule, BreadcrumbService } from '../shared/breadcrumb/breadcrumb.module'

@NgModule({
    imports: [
        TopNavModule,
        RouterModule,
        BreadcrumbModule
    ],
    declarations: [
        JobsComponent
    ],
    providers: [
        BreadcrumbService
    ]
})
export class JobsModule {}