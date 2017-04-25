import { Component } from '@angular/core';

@Component({
  selector: 'network',
  templateUrl: './network.component.html'
})
export class NetworkComponent {
  public username = '';

  public onPasswordNotify(message: string) {
    console.log('hello');
  }
}
