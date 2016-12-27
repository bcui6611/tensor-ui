import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams.component';
import { TeamEditComponent } from './teamEdit/team-edit.component';
import { TeamPermissionsComponent } from './teamPermissions/team-permissions.component';
import { TeamsTableComponent } from './teamsTable/teams-table.component';
import { TeamUsersComponent } from './teamsUsers/team-users.component';

@NgModule({
    imports: [],
    declarations: [
        TeamsComponent,
        TeamEditComponent,
        TeamPermissionsComponent,
        TeamsTableComponent,
        TeamUsersComponent
    ],
    exports: [],
})
export class TeamsModule {}