//Built-in modules
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {TopNavModule} from "./shared/topnav/topnav.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { API_BASE } from "./base/config";
import { SimpleNotificationsModule } from "angular2-notifications";
import { rootRouterConfig, appRoutingProviders } from "./app.routes";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InventoriesHomeComponent } from "./inventories/inventoriesHome/inventories-home.component";

import {DashboardHomeModule } from "./dashboard/components/dashboardHome/dashboard-home.module";
import {InventoriesTableModule } from './inventories/inventoriesTable/inventories-table.module';
import { SettingsModule } from './settings/settings.module';
import { SettingsComponent } from './settings/settings.component';
import { SettingsHomeModule } from './settings/settingsHome/settings-home.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        InventoriesTableModule,
        ReactiveFormsModule,
        SimpleNotificationsModule,
        SettingsModule,
        TopNavModule,
        HttpModule,
        DashboardHomeModule,
        NgbModule,
        SettingsHomeModule,
        RouterModule.forRoot(rootRouterConfig)
    ],

    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        InventoriesHomeComponent,
    ],
    providers: [appRoutingProviders, {provide: API_BASE, useValue: 'http://localhost:8010'}],
    bootstrap: [AppComponent]
})
export class AppModule {

}
