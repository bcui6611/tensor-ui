import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'credentials-cmp',
  templateUrl: './credentials.component.html',
})
export class CredentialsComponent implements OnInit {
  public isAdd: boolean;
  private routerSub: Subscription;
  private path: Subscription;

  constructor(private _route: ActivatedRoute,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.path = this._route.data.subscribe((data) => {
      this.isAdd = data['addCredentials'];
    });
  }
}
