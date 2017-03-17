import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { API_BASE } from '../base/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Credentials } from '../models/credentials';
import { Organization } from '../models/organization';

@Injectable()
export class CredentialsService {

    constructor(private _http: Http, @Inject(API_BASE) private apiBase: string) { }

    getCredentialsTableData(): Observable<Credentials[]> {
        let headers = new Headers({
            'Authorization': 'Bearer ' + this.getToken() 
        });
        let options = new RequestOptions({headers: headers});

        return this._http
            .get(this.apiBase + '/v1/credentials/', options)
            .map(response => response.json().results as Credentials[]);
    }

    addCredentials(credentials: Credentials): Observable<any> {
        let headers = new Headers({
            'Authorization': 'Bearer ' + this.getToken()
        });
        let options = new RequestOptions({headers: headers});

        return this._http
            .post(this.apiBase + '/v1/credentials', Credentials, options);
    }

    editCredentials(credentials: Credentials, credentialID: string) {
        let headers = new Headers({
            'Authorization': 'Bearer ' + this.getToken()
        });
        let options = new RequestOptions({headers: headers});

        return this._http
            .put(this.apiBase + '/v1/credentials' + credentialID, credentials);
    }

    // Delete credentials for given credential ID
    deleteCredentials(credentialID: string) {
        let header = new Headers({
            'Authorization': 'Bearer ' + this.getToken()
        });
        let option = new RequestOptions({headers: header});

        return this._http
            .delete(this.apiBase + '/v1/credentials/' + credentialID)
    }
    
    // Return the token that is stored in localStorage
    getToken(): string {
        return JSON.parse(localStorage.getItem('_tensor_user')).token;
    }

}