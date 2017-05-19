import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  constructor() {
    console.log('hello form `Dashboard` component');
  }
}
