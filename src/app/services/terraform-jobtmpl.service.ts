import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';
import { TerraformJobTmpl } from '../models/terraform-jobtmpl.model';
import { TerraformJobTmplResponse } from '../models/terraform-jobtmpl-response.model';

@Injectable()
export class TerraformJobTmplService {
  private headers: Headers;
  private jobTmplUrl: string;

  constructor(private _http: Http, private config: AppConfig) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    this.jobTmplUrl = this.config.getConfig('host') + '/v1/terraform_job_templates';
  }

  public getAll(p?: URLSearchParams): Observable<TerraformJobTmplResponse> {
    return this._http
      .get(this.jobTmplUrl, new RequestOptions({headers: this.headers, search: p}))
      .map((response) => response.json());
  }

  public create(tmpl: TerraformJobTmpl): Observable<TerraformJobTmpl> {
    return this._http
      .post(this.jobTmplUrl, TerraformJobTmpl,
        new RequestOptions({headers: this.headers}))
      .map((response) => response.json() as TerraformJobTmpl);
  }

  public get(id: string): Observable<TerraformJobTmpl> {
    return this._http
      .get(this.jobTmplUrl + id, new RequestOptions({headers: this.headers}))
      .map((response) => response.json().result as TerraformJobTmpl);
  }

  public update(tmpl: TerraformJobTmpl): Observable<TerraformJobTmpl> {
    return this._http
      .put(this.jobTmplUrl + tmpl.id, tmpl, new RequestOptions({headers: this.headers}))
      .map((response) => response.json().result as TerraformJobTmpl);
  }

  public delete(id: string) {
    return this._http
      .delete(this.jobTmplUrl + id, new RequestOptions({headers: this.headers}));
  }

  public getToken(): string {
    return JSON.parse(localStorage.getItem('_tensor_user')).token;
  }

}
