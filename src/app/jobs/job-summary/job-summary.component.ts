import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'job-summary-cmp',
  templateUrl: './job-summary.component.html'
})
export class JobSummaryComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
  }

  public ngOnInit(): void {
    console.log('hello `Job Summary` Component');
  }
}
