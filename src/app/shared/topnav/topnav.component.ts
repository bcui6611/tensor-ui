import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'top-nav',
  templateUrl: './topnav.component.html',
  providers: [AuthenticationService]
})
export class TopNavComponent {

  public jtdropdown;
  public jdropdown;

  public navbar = {
    dropdown: false,
    jobDropdown: false
  };
  // TypeScript private modifiers
  constructor(private auth: AuthenticationService, private router: Router) {
  }

  public logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
