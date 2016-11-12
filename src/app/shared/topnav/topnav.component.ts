import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services";

@Component({
    selector: 'top-nav',
    templateUrl: './topnav.component.html',
    providers: [AuthenticationService]
})
export class TopNavComponent {

// TypeScript private modifiers
    constructor(private auth: AuthenticationService, private router: Router) {
    }

    logout(): void {
        this.auth.logout()
        this.router.navigate(['/']);
    }
}