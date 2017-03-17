import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services";
import { NotificationsService, SimpleNotificationsComponent } from "angular2-notifications";

@Component({
    selector: 'login-cmp',
    templateUrl: './login.component.html',
    providers: [AuthenticationService, NotificationsService]
})

export class LoginComponent implements OnInit {
    options = {
        position: ['top', 'right'],
        timeOut: 0,
        lastOnBottom: true,
        clickToClose: true
    };
    model: any = {};
    error: boolean = false;

    // TypeScript private modifiers
    constructor(private auth: AuthenticationService, private router: Router, private _notification: NotificationsService) {
    }

    ngOnInit(): void {
        console.log('hello `Login` component');

        if (localStorage.getItem('_tensor_user')) {
            console.log(localStorage.getItem('_tensor_user'))
            this.router.navigate(['/dashboard']);
        }
    }

    login(form: any): void {
        this.auth.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/dashboard']);
                } else {
                    // login failed
                    this._notification.error('Sign In failed', 'Please check your username & password');
                }
            }, err => {
                    this._notification.error('Sign In failed', 'Please check your username & password');                
            });
    }
}
