import { NgModule } from '@angular/core';

import { TopNavModule } from '../../shared/topnav/topnav.module';
import { InventoriesHomeComponent } from './inventories-home.component';
import { InventoriesTableModule } from '../inventoriesTable/inventories-table.module';

@NgModule({
  imports: [
    TopNavModule,
    InventoriesTableModule
  ],
  declarations: [
    InventoriesHomeComponent
  ],
  exports: [
    InventoriesHomeComponent,
    TopNavModule
  ]
})
export class InventoriesHomeModule {
}
