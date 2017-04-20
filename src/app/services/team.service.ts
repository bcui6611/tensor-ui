import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { AppConfig } from "../app.config";
import { Team } from "../models/team";

@Injectable()
export class TeamService {
  private headers: Headers;
  private teamUrl: string;

  constructor(private _http: Http, private config: AppConfig) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bear ' + this.getToken()
    });
    this.teamUrl = this.config.getConfig('host') + '/v1/projects/';
  }

  getAll(): Observable<Team[]> {
    return this._http
      .get(this.teamUrl, new RequestOptions({headers: this.headers}))
      .map(response => response.json().results as Team[]);
  }

  create(team: Team): Observable<Team> {
    return this._http
      .post(this.teamUrl, Team,
        new RequestOptions({headers: this.headers}))
      .map(response => response.json() as Team);
  }

  get(id: string): Observable<Team> {
    return this._http
      .get(this.teamUrl + id, new RequestOptions({headers: this.headers}))
      .map(response => response.json().result as Team)
  }

  update(team: Team): Observable<Team> {
    return this._http
      .put(this.teamUrl + team.id, team, new RequestOptions({headers: this.headers}))
      .map(response => response.json().result as Team);
  }

  delete(id: string) {
    return this._http
      .delete(this.teamUrl + id, new RequestOptions({headers: this.headers}))
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('_tensor_user')).token;
  }

}
