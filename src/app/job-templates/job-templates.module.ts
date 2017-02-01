import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopNavModule } from '../shared/topnav/topnav.module';
import { JobTemplatesComponent } from './job-templates.component';

import { BreadcrumbModule, BreadcrumbService } from '../shared/breadcrumb/breadcrumb.module'

@NgModule({
    imports: [
        TopNavModule,
        RouterModule,
        BreadcrumbModule
    ],
    declarations: [
        JobTemplatesComponent
    ],
    exports:[
        TopNavModule
    ],
    providers: [
        BreadcrumbService
    ]
})
export class JobTemplatesModule {}