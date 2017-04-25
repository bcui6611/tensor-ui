import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'project-home-cmp',
  templateUrl: './projects-home.component.html'
})
export class ProjectsHomeComponent implements OnInit {
  public isAdd: boolean;
  private path: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
  }

  public ngOnInit(): void {
    console.log('hello `Project` Component');

    this.path = this._route.data.subscribe((data) => {
      this.isAdd = data['addProject'];
    });
  }
}
