import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'job-template-home',
  templateUrl: './job-template-home.component.html'
})
export class JobTemplateHomeComponent implements OnInit {
  public isAdd: boolean;
  private path: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
  }

  public ngOnInit(): void {
    console.log('hello from `Job Template Home` component');

    this.path = this._route.data.subscribe((data) => {
      this.isAdd = data['addTemplate'];
    });
  }
}
