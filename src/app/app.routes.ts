import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/components/dashboardHome/dashboard-home.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsHomeComponent } from './settings/settingsHome/settings-home.component'

import { InventoriesHomeComponent } from './inventories/inventoriesHome/inventories-home.component';
import { InventoriesTableComponent } from './inventories/inventoriesTable/inventories-table.component';
import { UsersComponent } from './settings/users/users.component';
import { OrganizationsComponent } from './settings/organizations/organizations.component';
import {AuthGuard} from "./guards";
import { TeamsComponent } from './settings/teams/teams.component';

export const rootRouterConfig: Routes = [
    {path: '', component: LoginComponent},
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {path: '', component: DashboardHomeComponent},
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'inventories',
        component: InventoriesHomeComponent,
        children: [
            {path: '', component: InventoriesTableComponent}
            //{path: 'inventory/:id', component: InventoriesEditComponent}
        ],
        canActivate: [AuthGuard]
    },
    {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {path: '', component: SettingsHomeComponent},
      {path: 'users', component: UsersComponent},
      {path: 'users/add', component: UsersComponent, data: {addUser: true}},
      {path: 'teams', component: TeamsComponent},
      {path: 'organizations', component: OrganizationsComponent},
      //{path: 'organizations/add', component: OrganizationsComponent, data: {addOrganization: true}},
      //{path: 'credentials', component: CredentialsComponent},
    ],
    canActivate: [AuthGuard]
  },
];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const routing = RouterModule.forRoot(rootRouterConfig)
