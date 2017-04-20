import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dash-home-cmp',
  templateUrl: './dashboard-home.component.html'
})
export class DashboardHomeComponent implements OnInit {
  public ngOnInit(): void {
    console.log('DashboardHomeComponent');
  }
}
