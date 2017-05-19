import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';
import { Project } from '../models/project.model';
import { ProjectResponse } from '../models/project-response.model';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class ProjectService {
  private headers: Headers;
  private projectUrl: string;

  constructor(private _http: Http, private config: AppConfig) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    this.projectUrl = this.config.getConfig('host') + '/v1/projects';
  }

  public getAll(p?: URLSearchParams): Observable<ProjectResponse> {
    return this._http
      .get(this.projectUrl, new RequestOptions({headers: this.headers, search: p}))
      .map((response) => response.json());
  }

  public create(project: Project): Observable<Project> {
    return this._http
      .post(this.projectUrl, project,
        new RequestOptions({headers: this.headers}))
      .map((res) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('Request has failed');
        } else {
          return res.json();
        }
      });
  }

  public get(id: string): Observable<Project> {
    return this._http
      .get(this.projectUrl + '/' + id, new RequestOptions({headers: this.headers}))
      .map((response) => response.json());
  }

  public update(project: Project): Observable<Project> {
    return this._http
      .put(this.projectUrl + '/' + project.id, project,
        new RequestOptions({headers: this.headers}))
      .map((res) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('Request has failed');
        } else {
          return res.json();
        }
      });
  }

  public delete(id: string) {
    return this._http
      .delete(this.projectUrl + '/' + id, new RequestOptions({headers: this.headers}));
  }

  public getToken(): string {
    return JSON.parse(localStorage.getItem('_tensor_user')).token;
  }

}
