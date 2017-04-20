import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'teams-cmp',
  templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnInit {
  public isAdd: boolean;

  private routerSub: Subscription;
  private path: Subscription;

  constructor(private _route: ActivatedRoute,
              private router: Router) {
  }

  public ngOnInit(): void {
    console.log('hello `Teams` component');
    this.routerSub = this._route.params.subscribe((params) => {
      // TODO: route sub
      console.log('TODO: route sub');
    });
    this.path = this._route.data.subscribe((data) => {
      this.isAdd = data['addTeam'];
    });
  }
}
