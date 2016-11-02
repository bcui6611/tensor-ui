import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "../services/auth.service";
import { NotificationsService, SimpleNotificationsComponent } from "angular2-notifications";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'login-cmp',
  templateUrl: './login.component.html',
  providers: [Auth, FormBuilder]
})

export class LoginComponent implements OnInit {
  options = {
    position: ['top', 'right'],
    timeOut: 0,
    lastOnBottom: true,
    clickToClose: true
  };

  error: boolean = false;

  loginForm: FormGroup;
  username: any;
  password: any;

  // TypeScript private modifiers
  constructor(private auth: Auth, private router: Router, private _notification: NotificationsService,
              private fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }

  ngOnInit(): void {
    console.log('hello `Login` component');

    if (localStorage.getItem('token') == 'test') {
      console.log(localStorage.getItem('token'))
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(form: any): void {
    this.auth.login(form.username, form.password)
      .then(data => {
        localStorage.setItem('token', 'test');
        console.log('success');
        this.router.navigate(['/dashboard']);
      }).catch(error => {
      this._notification.error('Sign In failed', 'Please check your username & password');
    });
  }
}
