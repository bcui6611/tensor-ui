import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopNavModule } from '../shared/topnav/topnav.module';
import { SettingsComponent } from './settings.component';
import { NgbModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TagInputModule } from 'ng2-tag-input';
import { OrganizationSelectComponent } from '../shared/organizations-select.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsFormComponent } from './projects-form.component';
import { CredentialSelectComponent } from '../shared/credential-select.component';

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
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    TagInputModule,
  ],
  declarations: [
    ProjectsComponent,
    ProjectsFormComponent,
  ],
  exports: [
    TopNavModule,
  ],
  entryComponents: [
    OrganizationSelectComponent,
    CredentialSelectComponent
  ],
  providers: [],
})
export class ProjectsModule {
}
