import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { AppConfig } from "../app.config";
import { AnsibleJob } from "../models/ansible-job.model";

@Injectable()
export class AnsibleJobService {
  private headers: Headers;
  private ansibleJobUrl: string;

  constructor(private _http: Http, private config: AppConfig) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    this.ansibleJobUrl = this.config.getConfig('host') + '/v1/ansible_jobs';
  }

  getAll(): Observable<AnsibleJob[]> {
    return this._http
      .get(this.ansibleJobUrl, new RequestOptions({headers: this.headers}))
      .map(response => response.json().results as AnsibleJob[]);
  }

  get(id: string): Observable<AnsibleJob> {
    return this._http
      .get(this.ansibleJobUrl + id, new RequestOptions({headers: this.headers}))
      .map(response => response.json().result as AnsibleJob)
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('_tensor_user')).token;
  }

}
