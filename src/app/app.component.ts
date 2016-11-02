import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';

@Component({
  selector   : 'app',
  styleUrls: ['../assets/scss/main.scss'],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  viewContainerRef:any = null;

  public constructor(viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = ViewContainerRef;
  }
}
