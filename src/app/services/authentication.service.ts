import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
  private token: string;

  constructor(private http: Http, private config: AppConfig) {
    let currentUser = JSON.parse(localStorage.getItem('_tensor_user'));
    this.token = currentUser && currentUser.token;
  }

  public login(username, password): Observable<boolean> {
    return this.http.post(this.config.getConfig('host') + '/v1/authtoken',
      JSON.stringify({username, password}))
      .map((response: Response) => {
        if (response.status === 200) {
          // login successful if there's a jwt token in the response
          let token = response.json() && response.json().token;
          if (token) {
            // set token property
            this.token = token;

            // store username and jwt token in local storage to keep user
            // logged in between page refreshes
            localStorage.setItem('_tensor_user',
              JSON.stringify({username, token}));

            // return true to indicate successful login
            return true;
          }
        }

        // return false to indicate failed login
        return false;
      });
  }

  public logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('_tensor_user');
  }
}
