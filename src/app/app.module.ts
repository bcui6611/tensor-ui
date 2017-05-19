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
import { SettingsModule } from './settings/settings.module';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';

import { DashboardModule } from './dashboard/dashboard.module';

import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/bundles/app.module';
import { AuthenticationService } from './services';
import { EventBusService } from './services/event-bus.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsModule,
    ProjectsModule,
    TopNavModule,
    HttpModule,
    NgbModule.forRoot(),
    SweetAlert2Module,
    DashboardModule,
    RouterModule.forRoot(rootRouterConfig),
    Ng2BreadcrumbModule.forRoot(),
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
  ],

  declarations: [
    AppComponent,
    LoginComponent,
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
    AuthenticationService,
    EventBusService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
