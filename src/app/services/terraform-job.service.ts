import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';
import { TerraformJob } from '../models/terraform-job';

@Injectable()
export class TerraformJobService {
  private headers: Headers;
  private terraformJobUrl: string;

  constructor(private _http: Http, private config: AppConfig) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    this.terraformJobUrl = this.config.getConfig('host') + '/v1/terraform_jobs';
  }

  public getAll(): Observable<TerraformJob[]> {
    return this._http
      .get(this.terraformJobUrl, new RequestOptions({headers: this.headers}))
      .map((response) => response.json().results as TerraformJob[]);
  }

  public get(id: string): Observable<TerraformJob> {
    return this._http
      .get(this.terraformJobUrl + id, new RequestOptions({headers: this.headers}))
      .map((response) => response.json().result as TerraformJob);
  }

  public getToken(): string {
    return JSON.parse(localStorage.getItem('_tensor_user')).token;
  }

}
