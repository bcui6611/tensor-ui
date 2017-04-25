import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopNavModule } from '../shared/topnav/topnav.module';
import { JobTemplatesComponent } from './job-templates.component';

import { Ng2BreadcrumbModule, BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

@NgModule({
    imports: [
        TopNavModule,
        RouterModule,
        Ng2BreadcrumbModule
    ],
    declarations: [
        JobTemplatesComponent
    ],
    exports: [
        TopNavModule
    ],
    providers: [
        BreadcrumbService
    ]
})
export class JobTemplatesModule { }
