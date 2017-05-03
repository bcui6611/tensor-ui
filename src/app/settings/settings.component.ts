import { Component } from '@angular/core';

@Component({
  selector: 'settings-cmp',
  templateUrl: 'settings.component.html',
})

export class SettingsComponent {

  constructor() {
    console.log('hello form `settings` component');
  }
}
