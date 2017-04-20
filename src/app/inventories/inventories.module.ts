import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopNavModule } from '../shared/topnav/topnav.module';
import { InventoriesComponent } from './inventories.component';

import { BreadcrumbService, Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';

@NgModule({
  imports: [
    TopNavModule,
    RouterModule,
    Ng2BreadcrumbModule
  ],
  declarations: [
    InventoriesComponent
  ],
  exports: [
    TopNavModule
  ],
  providers: [
    BreadcrumbService
  ]
})
export class InventoriesModule {
}
