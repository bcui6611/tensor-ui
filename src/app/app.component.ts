import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services';

@Component({
  selector: 'app',
  styleUrls: ['../assets/styles/main.scss'],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class AppComponent {
  constructor(private authService: AuthenticationService) {
    console.log('hello form `app` component');
  }

  public isActive() {
    return this.authService.isLoggedIn();
  }
}
