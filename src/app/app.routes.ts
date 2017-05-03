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
];

export const appRoutingProviders: any[] = [
  AuthGuard
];

export const routing = RouterModule.forRoot(rootRouterConfig);
