import { Component, ViewEncapsulation } from '@angular/core';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { Router } from '@angular/router';
import { AuthenticationService } from './services';

@Component({
  selector: 'app',
  styleUrls: ['../assets/styles/main.scss'],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private router: Router,
              private authService: AuthenticationService) {
    console.log('hello form `app` component');
  }

  public isActive() {
    return this.authService.isLoggedIn();
  }
}
