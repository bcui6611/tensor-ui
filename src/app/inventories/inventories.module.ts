import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopNavModule } from '../shared/topnav/topnav.module';
import { InventoriesComponent } from './inventories.component';

import { BreadcrumbModule, BreadcrumbService } from '../shared/breadcrumb/breadcrumb.module'

@NgModule({
    imports: [
        TopNavModule,
        RouterModule,
        BreadcrumbModule
    ],
    declarations: [
        InventoriesComponent
    ],
    exports:[
        TopNavModule
    ],
    providers: [
        BreadcrumbService
    ]
})
export class InventoriesModule {}