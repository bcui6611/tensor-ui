import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopNavModule } from '../shared/topnav/topnav.module';
import { SettingsComponent } from './settings.component';
import { NgbModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { CredentialsComponent } from './credentials.component';
import { CredentialsFormComponent } from './credentials-form.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationsFormComponent } from './organizations/organizations-form.component';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputPasswordComponent } from '../shared/input-password/input-password.component';
import { ChunkPipe } from 'angular-pipes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    TopNavModule,
    RouterModule,
    NgbTabsetModule,
    CommonModule,
    SweetAlert2Module,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    SettingsComponent,
    CredentialsComponent,
    CredentialsFormComponent,
    OrganizationsComponent,
    OrganizationsFormComponent,
    InputPasswordComponent,
    ChunkPipe
  ],
  exports: [
    TopNavModule,
  ],
  providers: [
  ],
})
export class SettingsModule {
}
