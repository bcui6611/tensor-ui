import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTableComponent } from '../../shared/table/ngTable/ng-table.component';
import { NgTableFilteringDirective } from '../../shared/table/ngTable/ng-table-filtering.directive';
import { NgTablePagingDirective } from '../../shared/table/ngTable/ng-table-paging.directive';
import { NgTableSortingDirective } from '../../shared/table/ngTable/ng-table-sorting.directive';

import { InventoriesTableComponent } from './inventories-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NgTableComponent,
    NgTableFilteringDirective,
    NgTablePagingDirective,
    NgTableSortingDirective,
    InventoriesTableComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NgTableComponent,
    NgTableFilteringDirective,
    NgTablePagingDirective,
    NgTableSortingDirective,
    InventoriesTableComponent
  ]
})
export class InventoriesTableModule {
}
