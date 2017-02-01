//Built-in modules
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { TopNavModule } from "./shared/topnav/topnav.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { API_BASE } from "./base/config";
import { SimpleNotificationsModule } from "angular2-notifications";
import { rootRouterConfig, appRoutingProviders } from "./app.routes";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InventoriesHomeComponent } from "./inventories/inventoriesHome/inventories-home.component";
import { UsersComponent } from './settings/users/users.component'

import { DashboardHomeModule } from "./dashboard/components/dashboardHome/dashboard-home.module";
import { InventoriesTableModule } from './inventories/inventoriesTable/inventories-table.module';
import { SettingsModule } from './settings/settings.module';
import { JobsModule } from './jobs/jobs.module';
import { SettingsComponent } from './settings/settings.component';
import { SettingsHomeModule } from './settings/settingsHome/settings-home.module';
import { UserAddComponent } from './settings/users/usersAdd/user-add.component';
import { InventoriesTableComponent } from './settings/users/usersTable/users-table.component';
import { OrganizationsComponent } from './settings/organizations/organizations.component';
import { OrganizationsAddComponent } from './settings/organizations/organizationsAdd/organizations-add.component';
import { ChunkPipe } from './shared/chunk.pipe';
import { TeamsComponent } from './settings/teams/teams.component';
import { TeamEditComponent } from './settings/teams/teamEdit/team-edit.component';
import { TeamsTableComponent } from './settings/teams/teamsTable/teams-table.component';
import { TeamUsersComponent } from './settings/teams/teamsUsers/team-users.component';
import { TeamPermissionsComponent } from './settings/teams/teamPermissions/team-permissions.component';
import { CredentialsComponent } from './settings/credentials/credentials.component';
import { CredentialsTableComponent } from "./settings/credentials/credentials-table/credentials-table.component";
import { CredentialsAddComponent } from './settings/credentials/credentials-add/credentials-add.component';
import { ProjectsAddComponent } from './projects/projects-add/projects-add.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsHomeComponent } from './projects/projects-home/projects-home.component';
import { ProjectsTableComponent } from './projects/projects-table/projects-table.component'
import { ProjectsModule } from './projects/projects.module';
import { GitComponent } from './projects/scm-types/git/git.component';
import { ManualComponent } from './projects/scm-types/manual/manual.component';
import { MarcurialComponent } from './projects/scm-types/marcurial/marcurial.component';
import { SubversionComponent } from './projects/scm-types/subversion/subversion.component';

import { JobTemplatesComponent } from './job-templates/job-templates.component';
import { JobTemplatesAddComponent } from './job-templates/job-templates-add/job-templates-add.component';
import { JobTemplateHomeComponent } from './job-templates/job-templates-home/job-template-home.component';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';


import { JobsHomeComponent } from './jobs/jobs-home/jobs-home.component';
import { JobsTableComponent } from './jobs/jobs-table/jobs-table.component'
import { JobSummaryComponent } from './jobs/job-summary/job-summary.component'
import { DashboardModule } from './dashboard/dashboard.module';
import { InventoriesModule } from './inventories/inventories.module';
import { JobTemplatesModule } from './job-templates/job-templates.module';

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
        DashboardHomeModule,
        NgbModule.forRoot(),
        SettingsHomeModule, 
        SweetAlert2Module,
        JobsModule,
        DashboardModule,
        InventoriesModule,
        JobTemplatesModule,
        RouterModule.forRoot(rootRouterConfig)
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
        CredentialsTableComponent,
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
    ],
    providers: [appRoutingProviders, { provide: API_BASE, useValue: 'http://10.76.196.18:8010' }],
    bootstrap: [AppComponent]
})
export class AppModule {

}
