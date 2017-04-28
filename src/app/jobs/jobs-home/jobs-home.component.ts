import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'jobs-home-cmp',
  templateUrl: './jobs-home.component.html'
})
export class JobsHomeComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
  }

  public ngOnInit(): void {
    console.log('hello `Project` Component');
  }
}
