import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavModule } from '../shared/topnav/topnav.module';
import { ProjectsComponent } from './projects.component';
import {  } from './projects-table';

import { Ng2BreadcrumbModule, BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

@NgModule({
    imports: [
        TopNavModule,
        RouterModule,
        Ng2BreadcrumbModule
    ],
    declarations: [
        ProjectsComponent
    ],
    providers: [
        BreadcrumbService
    ]
})
export class ProjectsModule { }
