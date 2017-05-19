import { NgModule } from '@angular/core';
import { NgTableSortingDirective } from './table/ngTable/ng-table-sorting.directive';
import { NgTableFilteringDirective } from './table/ngTable/ng-table-filtering.directive';
import { OrganizationSelectComponent } from './organizations-select.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputPasswordComponent } from './input-password/input-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CredentialSelectComponent } from './credential-select.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NgTableSortingDirective,
    NgTableFilteringDirective,
    OrganizationSelectComponent,
    InputPasswordComponent,
    CredentialSelectComponent
  ],
  exports: [
    NgTableFilteringDirective,
    NgTableSortingDirective,
    OrganizationSelectComponent,
    InputPasswordComponent,
    CredentialSelectComponent
  ],
  providers: [],
})
export class SharedModule {
}
