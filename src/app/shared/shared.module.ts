import { NgModule } from '@angular/core';
import { NgTableSortingDirective } from './table/ngTable/ng-table-sorting.directive';
import { NgTableFilteringDirective } from './table/ngTable/ng-table-filtering.directive';
import { OrganizationSelectComponent } from './organizations-select.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    NgTableSortingDirective,
    NgTableFilteringDirective,
    OrganizationSelectComponent,
  ],
  exports: [
    NgTableFilteringDirective,
    NgTableSortingDirective,
    OrganizationSelectComponent,
  ],
  providers: [],
})
export class SharedModule {
}
