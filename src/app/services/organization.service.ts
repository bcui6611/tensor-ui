import { Injectable, Inject } from "@angular/core";
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import { Organization } from "../models/organization";
import "rxjs/add/operator/toPromise";
import { API_BASE } from '../base/config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class OrganizationService {
  private organizationsUrl = '/organizations';
  private orgnaizationUrl = '/organizations';

  constructor(private http: Http, @Inject(API_BASE) private apiBase: string) { } 

  // Create an new organization
  // To update the password use updatePassword method
  addOrganization(org: Organization): Promise<Organization> {
    return this.http.get(this.organizationsUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  // Get Organization details
  getOrganizations(): Observable<Organization[]> {
    let header = new Headers({
      'Authorization': 'Bearer ' + this.getToken()
    });
    let options = new RequestOptions({ headers: header });

    return this.http
      .get(this.apiBase + '/v1/organizations/', options)
      .map(response => response.json().results as Organization[])
  }

  // Get details for the given organization ID
  getOrganization(orgizationID: string): Observable<Organization> {
    let url = this.apiBase + '/v1/org'

    let header = new Headers({
      'Authorization': 'Bear ' + this.getToken()
    });
    let options = new RequestOptions({ headers: header});

    return this.http
      .get(url, options)
      .map(response => response.json().result as Organization)
  }

  // Update organization password
  updatePassword(userId: number, pwd: string) {
    let url = this.organizationsUrl + '/' + userId + '/password';
    let body = JSON.stringify({ password: pwd });

    return this.http.post(url, body, {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }).toPromise().catch(this.handleError);
  }

  // Update existing org and password
  updateOrganization(org: Organization) {
    let url = this.organizationsUrl + '/' + org.id;

    return this.http.put(url, JSON.stringify({ org }), {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
      .toPromise()
      .catch(this.handleError);
  }

  // Delete existing organization
  deleteOrganization(userId: number) {
    let url = this.organizationsUrl + '/' + userId;

    return this.http.delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

  // Get token from the localStorage
  private getToken(): string {
    return JSON.parse(localStorage.getItem('_tensor_user')).token;
  }
}
