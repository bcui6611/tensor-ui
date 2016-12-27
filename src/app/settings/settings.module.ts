import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopNavModule } from '../shared/topnav/topnav.module';
import { SettingsComponent } from './settings.component';

import { BreadcrumbModule, BreadcrumbService } from '../shared/breadcrumb/breadcrumb.module'

@NgModule({
    imports: [
        TopNavModule,
        RouterModule,
        BreadcrumbModule
    ],
    declarations: [
        SettingsComponent
    ],
    exports:[
        TopNavModule
    ],
    providers: [
        BreadcrumbService
    ]
})
export class SettingsModule {}