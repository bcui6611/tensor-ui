import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { API_BASE } from '../base/config';
import 'rxjs/add/operator/toPromise';
// api url stored in config

@Injectable()
export class Auth {
    token: string;

    constructor(private http: Http, @Inject(API_BASE) private apiBase: string) {
        this.token = localStorage.getItem('token');
    }

    login(username: String, password: String): Promise<any> {

        let url = this.apiBase + '/auth/login';
        let body = JSON.stringify({
            auth: username,
            password: password
        });

        return this.http.post(url, body, {
            headers: new Headers({ 'Content-Type': 'application/json','Accept': 'application/json' })
        }).toPromise()
          .catch(this.handleError);



        /* if (username === 'test' && password === 'test') {
         this.token = 'token';
         localStorage.setItem('token', this.token);
         return Observable.of('token');
         }

         return Observable.throw('authentication failure');*/
    }

    /* logout() {
     *
     * If we had a login api, we would have done something like this

     return this.http.get(this.config.serverUrl + '/auth/logout', {
     headers: new Headers({
     'x-security-token': this.token
     })
     })
     .map((res : any) => {
     this.token = undefined;
     localStorage.removeItem('token');
     });
     *

     this.token = undefined;
     localStorage.removeItem('token');

     return Observable.of(true);
     } */

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }

}
