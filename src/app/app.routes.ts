import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { InventoriesTableComponent } from './inventories/inventoriesTable/inventories-table.component';
import { UsersComponent } from './settings/users/users.component';
import { OrganizationsComponent } from './settings/organizations/organizations.component';
import { AuthGuard } from './guards';
import { TeamsComponent } from './settings/teams/teams.component';
import { CredentialsComponent } from './settings/credentials/credentials.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsHomeComponent } from './projects/projects-home/projects-home.component';

import { JobTemplatesComponent } from './job-templates/job-templates.component';
import { JobTemplateHomeComponent } from './job-templates/job-templates-home/job-template-home.component';

import { JobsComponent } from './jobs/jobs.component';
import { JobsHomeComponent } from './jobs/jobs-home/jobs-home.component';
import { JobSummaryComponent } from './jobs/job-summary/job-summary.component';

import { InventoriesComponent } from './inventories/inventories.component';
import { CredentialsAddComponent } from './settings/credentials/credentials-add/credentials-add.component';

export const rootRouterConfig: Routes = [
  { path: '', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'inventories',
        component: InventoriesComponent,
        children: [
            { path: '', component: InventoriesTableComponent }
            // {path: 'inventory/:id', component: InventoriesEditComponent}
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            { path: 'users', component: UsersComponent },
            { path: 'users/add', component: UsersComponent, data: { addUser: true } },
            { path: 'teams', component: TeamsComponent },
            { path: 'teams/add', component: TeamsComponent, data: { addTeam: true } },
            { path: 'organizations', component: OrganizationsComponent },
            {
                path: 'organizations/add', component: OrganizationsComponent,
                data: { addOrganization: true }
            },
        ],
        canActivate: [AuthGuard]
    },
    { path: 'settings/credentials',
      component: CredentialsComponent,
      children: [
        { path: 'add', component: CredentialsAddComponent },
        { path: ':name', component: CredentialsAddComponent },
      ],
      canActivate: [AuthGuard]
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            { path: '', component: ProjectsHomeComponent },
            { path: 'add', component: ProjectsHomeComponent, data: { addProject: true } }
        ]
    },
    {
        path: 'job_templates',
        component: JobTemplatesComponent,
        children: [
            { path: '', component: JobTemplateHomeComponent },
            { path: 'add', component: JobTemplateHomeComponent, data: { addTemplate: true } }
        ]
    },
    {
        path: 'jobs',
        component: JobsComponent,
        children: [
            { path: '', component: JobsHomeComponent },
            { path: 'summary', component: JobSummaryComponent },
        ]
    },
];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const routing = RouterModule.forRoot(rootRouterConfig);
