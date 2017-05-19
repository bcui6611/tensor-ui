import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { OrganizationsComponent } from './settings/organizations/organizations.component';
import { AuthGuard } from './guards';
import { CredentialsComponent } from './settings/credentials.component';
import { CredentialsFormComponent } from './settings/credentials-form.component';
import { OrganizationsFormComponent } from './settings/organizations/organizations-form.component';
import { OrganizationProjectsComponent } from './settings/organizations/organization-projects.component';
import { OrganizationInventoriesComponent } from './settings/organizations/organization-inventories.component';
import { OrganizationTemplatesComponent } from './settings/organizations/organization-templates.component';
import { OrganizationTerraformTmplComponent } from './settings/organizations/organization-terraformtmpl.component';
import { OrganizationTeamsComponent } from './settings/organizations/organization-teams.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsFormComponent } from './projects/projects-form.component';

export const rootRouterConfig: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings/organizations',
    component: OrganizationsComponent,
    children: [
      {path: 'add', component: OrganizationsFormComponent},
      {path: ':id', component: OrganizationsFormComponent},
      {path: ':id/projects', component: OrganizationProjectsComponent},
      {path: ':id/inventories', component: OrganizationInventoriesComponent},
      {path: ':id/ansible_job_templates', component: OrganizationTemplatesComponent},
      {path: ':id/terraform_job_templates', component: OrganizationTerraformTmplComponent},
      {path: ':id/teams', component: OrganizationTeamsComponent},
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'settings/credentials',
    component: CredentialsComponent,
    children: [
      {path: 'add', component: CredentialsFormComponent},
      {path: ':id', component: CredentialsFormComponent},
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      {path: 'add', component: ProjectsFormComponent},
      {path: ':id', component: ProjectsFormComponent},
    ],
    canActivate: [AuthGuard]
  },
];

export const appRoutingProviders: any[] = [
  AuthGuard
];

export const routing = RouterModule.forRoot(rootRouterConfig);
