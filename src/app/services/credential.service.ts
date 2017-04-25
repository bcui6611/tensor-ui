import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';

import { Credential } from '../models/credential';

@Injectable()
export class CredentialService {
  private headers: Headers;
  private credentialUrl: string;

  constructor(private _http: Http, private config: AppConfig) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    this.credentialUrl = this.config.getConfig('host') + '/v1/credentials';
  }

  public getAll(): Observable<Credential[]> {
    return this._http
      .get(this.credentialUrl, new RequestOptions({headers: this.headers}))
      .map((response) => response.json().data as Credential[]);
  }

  public create(credentials: Credential): Observable<Credential> {
    return this._http
      .post(this.credentialUrl, Credential,
        new RequestOptions({headers: this.headers}))
      .map((response) => response.json() as Credential);
  }

  public get(id: string): Observable<Credential> {
    return this._http
      .get(this.credentialUrl + id, new RequestOptions({headers: this.headers}))
      .map((response) => response.json().data as Credential);
  }

  public getByName(name: string): Observable<Credential> {
    return this._http
      .get(this.credentialUrl + '?name__eq=' + name, new RequestOptions({headers: this.headers}))
      .map((response) => response.json().data[0] as Credential);
  }

  public update(credential: Credential): Observable<Credential> {
    return this._http
      .put(this.credentialUrl + credential.id, credential,
        new RequestOptions({headers: this.headers}))
      .map((response) => response.json().data as Credential);
  }

  public delete(id: string) {
    return this._http
      .delete(this.credentialUrl + id, new RequestOptions({headers: this.headers}));
  }

  public getToken(): string {
    return JSON.parse(localStorage.getItem('_tensor_user')).token;
  }

}
