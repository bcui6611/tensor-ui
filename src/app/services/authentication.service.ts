import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { API_BASE } from '../base/config';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
// api url stored in config

@Injectable()
export class AuthenticationService {
    token: string;

    constructor(private http: Http, @Inject(API_BASE) private apiBase: string) {
        var currentUser = JSON.parse(localStorage.getItem('_tensor_user'));
        this.token = currentUser && currentUser.token;
    }

    login(username, password): Observable<boolean> {
        return this.http.post(this.apiBase + '/v1/authtoken', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                if (response.status == 200) {
                    // login successful if there's a jwt token in the response
                    let token = response.json() && response.json().token;
                    if (token) {
                        // set token property
                        this.token = token;

                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('_tensor_user', JSON.stringify({ username: username, token: token }));

                        // return true to indicate successful login
                        return true;
                    }
                }

                // return false to indicate failed login
                return false
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('_tensor_user');
    }
}
