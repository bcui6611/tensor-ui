import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Organization} from "../models/organization";
import "rxjs/add/operator/toPromise";

@Injectable()
export class OrganizationService {
  private organizationsUrl = '/organizations';
  private orgnaizationUrl = '/organizations';

  constructor(private http: Http) {
  }

  getOrganizations(): Promise<Organization[]> {
    return this.http.get(this.organizationsUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  // Create an new organization
  // To update the password use updatePassword method
  addOrganization(org: Organization): Promise<Organization> {
    return this.http.get(this.organizationsUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getOrganization(): Promise<Organization> {
    return this.http.get(this.orgnaizationUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  // Update organization password
  updatePassword(userId: number, pwd: string) {
    let url = this.organizationsUrl + '/' + userId + '/password';
    let body = JSON.stringify({password: pwd});

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

    return this.http.put(url, JSON.stringify({org}), {
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
}
