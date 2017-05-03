import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Organization } from '../models/organization';
import 'rxjs/add/operator/toPromise';
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';
import { OrganizationResponse } from '../models/OrganizationResponse';

@Injectable()
export class OrganizationService {
  private headers: Headers;
  private organizationsUrl: string;

  constructor(private _http: Http, private config: AppConfig) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken(),
    });
    this.organizationsUrl = this.config.getConfig('host') + '/v1/organizations';
  }

  // Get Organization details
  public getAll(p?: URLSearchParams): Observable<OrganizationResponse> {
    return this._http
      .get(this.organizationsUrl, new RequestOptions({headers: this.headers, search: p}))
      .map((response) => response.json());
  }

  // Create an new organization
  public create(organization: Organization): Observable<Organization> {
    return this._http
      .post(this.organizationsUrl, organization,
        new RequestOptions({headers: this.headers})).map((res) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('Request has failed');
        } else {
          return res.json() as Organization;
        }
      });
  }

  // Get details for the given organization ID
  public get(id: string): Observable<Organization> {
    return this._http
      .get(this.organizationsUrl + '/' + id, new RequestOptions({headers: this.headers}))
      .map((response) => response.json().result as Organization);
  }

  public getByName(name: string): Observable<Organization> {
    return this._http
      .get(this.organizationsUrl + '?name__eq=' + name, new RequestOptions({headers: this.headers}))
      .map((response) => response.json().data[0] as Organization);
  }

  // Update existing org and password
  public update(organization: Organization): Observable<Organization> {
    return this._http.put(this.organizationsUrl + '/' + organization.id,
      organization, new RequestOptions({headers: this.headers}))
      .map((res) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('Request has failed');
        } else {
          return res.json() as Organization;
        }
      });
  }

  // Delete existing organization
  public delete(id: string) {
    return this._http
      .delete(this.organizationsUrl + '/' + id, new RequestOptions({headers: this.headers}));
  }

  // Get token from the localStorage
  private getToken(): string {
    return JSON.parse(localStorage.getItem('_tensor_user')).token;
  }
}
