import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { AppConfig } from "../app.config";
import { Project } from "../models/project";

@Injectable()
export class ProjectService {
  private headers: Headers;
  private projectUrl: string;

  constructor(private _http: Http, private config: AppConfig) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bear ' + this.getToken()
    });
    this.projectUrl = this.config.getConfig('host') + '/v1/projects/';
  }

  getAll(): Observable<Project[]> {
    return this._http
      .get(this.projectUrl, new RequestOptions({headers: this.headers}))
      .map(response => response.json().results as Project[]);
  }

  create(project: Project): Observable<Project> {
    return this._http
      .post(this.projectUrl, Project,
        new RequestOptions({headers: this.headers}))
      .map(response => response.json() as Project);
  }

  get(id: string): Observable<Project> {
    return this._http
      .get(this.projectUrl + id, new RequestOptions({headers: this.headers}))
      .map(response => response.json().result as Project)
  }

  update(project: Project): Observable<Project> {
    return this._http
      .put(this.projectUrl + project.id, project, new RequestOptions({headers: this.headers}))
      .map(response => response.json().result as Project);
  }

  delete(id: string) {
    return this._http
      .delete(this.projectUrl + id, new RequestOptions({headers: this.headers}))
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('_tensor_user')).token;
  }

}
