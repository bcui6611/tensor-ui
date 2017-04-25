// Built-in modules
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TopNavModule } from './shared/topnav/topnav.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppConfig } from './app.config';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { appRoutingProviders, rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InventoriesHomeComponent } from './inventories/inventoriesHome/inventories-home.component';
import { UsersComponent } from './settings/users/users.component';

import { InventoriesTableModule } from './inventories/inventoriesTable/inventories-table.module';
import { SettingsModule } from './settings/settings.module';
import { JobsModule } from './jobs/jobs.module';
import { UserAddComponent } from './settings/users/usersAdd/user-add.component';
import { InventoriesTableComponent } from './settings/users/usersTable/users-table.component';
import { OrganizationsComponent } from './settings/organizations/organizations.component';
import { OrganizationsAddComponent } from './settings/organizations/organizationsAdd/organizations-add.component';
import { ChunkPipe } from 'angular-pipes';
import { TeamsComponent } from './settings/teams/teams.component';
import { TeamEditComponent } from './settings/teams/teamEdit/team-edit.component';
import { TeamsTableComponent } from './settings/teams/teamsTable/teams-table.component';
import { TeamUsersComponent } from './settings/teams/teamsUsers/team-users.component';
import { TeamPermissionsComponent } from './settings/teams/teamPermissions/team-permissions.component';
import { CredentialsComponent } from './settings/credentials/credentials.component';
import { CredentialsAddComponent } from './settings/credentials/credentials-add/credentials-add.component';
import { ProjectsAddComponent } from './projects/projects-add/projects-add.component';
import { ProjectsHomeComponent } from './projects/projects-home/projects-home.component';
import { ProjectsTableComponent } from './projects/projects-table/projects-table.component';
import { ProjectsModule } from './projects/projects.module';
import { GitComponent } from './projects/scm-types/git/git.component';
import { ManualComponent } from './projects/scm-types/manual/manual.component';
import { MarcurialComponent } from './projects/scm-types/marcurial/marcurial.component';
import { SubversionComponent } from './projects/scm-types/subversion/subversion.component';
import { JobTemplatesAddComponent } from './job-templates/job-templates-add/job-templates-add.component';
import { JobTemplateHomeComponent } from './job-templates/job-templates-home/job-template-home.component';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';

import { InputPasswordComponent } from './shared/input-password/input-password.component';

import { JobsHomeComponent } from './jobs/jobs-home/jobs-home.component';
import { JobsTableComponent } from './jobs/jobs-table/jobs-table.component';
import { JobSummaryComponent } from './jobs/job-summary/job-summary.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { InventoriesModule } from './inventories/inventories.module';
import { JobTemplatesModule } from './job-templates/job-templates.module';

import { MachineCredentialsComponent } from './settings/credentials/credentials-add/machine-credentials/machine-credentials.component';
import { NetworkComponent } from './settings/credentials/credentials-add/network/network.component';
import { SourceControlComponent } from './settings/credentials/credentials-add/source-control/source-control.component';
import { AwsComponent } from './settings/credentials/credentials-add/aws/aws.component';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/bundles/app.module';
import { AuthenticationService } from './services';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InventoriesTableModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,
    SettingsModule,
    ProjectsModule,
    TopNavModule,
    HttpModule,
    NgbModule.forRoot(),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      confirmButtonClass: 'btn btn-lg btn-primary',
      cancelButtonClass: 'btn btn-lg'
    }),
    JobsModule,
    DashboardModule,
    InventoriesModule,
    JobTemplatesModule,
    RouterModule.forRoot(rootRouterConfig),
    Ng2BreadcrumbModule.forRoot()
  ],

  declarations: [
    AppComponent,
    LoginComponent,
    InventoriesHomeComponent,
    InventoriesTableComponent,
    UsersComponent,
    UserAddComponent,
    OrganizationsComponent,
    OrganizationsAddComponent,
    ChunkPipe,
    TeamsComponent,
    TeamEditComponent,
    TeamsTableComponent,
    TeamUsersComponent,
    TeamPermissionsComponent,
    CredentialsComponent,
    CredentialsAddComponent,
    ProjectsAddComponent,
    ProjectsHomeComponent,
    ProjectsTableComponent,
    GitComponent,
    ManualComponent,
    MarcurialComponent,
    SubversionComponent,
    JobTemplatesAddComponent,
    JobTemplateHomeComponent,
    JobsHomeComponent,
    JobsTableComponent,
    JobSummaryComponent,
    MachineCredentialsComponent,
    InputPasswordComponent,
    NetworkComponent,
    SourceControlComponent,
    AwsComponent
  ],
  providers: [
    appRoutingProviders,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: AppConfig) => () => config.load(),
      deps: [AppConfig],
      multi: true
    },
    BreadcrumbService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
