import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { OrganizationsComponent } from './settings/organizations/organizations.component';
import { AuthGuard } from './guards';
import { CredentialsComponent } from './settings/credentials.component';
import { CredentialsFormComponent } from './settings/credentials-form.component';
import { OrganizationsFormComponent } from './settings/organizations/organizations-form.component';

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
      {path: ':name', component: OrganizationsFormComponent},
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'settings/credentials',
    component: CredentialsComponent,
    children: [
      {path: 'add', component: CredentialsFormComponent},
      {path: ':name', component: CredentialsFormComponent},
    ],
    canActivate: [AuthGuard]
  },
];

export const appRoutingProviders: any[] = [
  AuthGuard
];

export const routing = RouterModule.forRoot(rootRouterConfig);
