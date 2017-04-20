import { Component } from '@angular/core';

@Component({
  selector: 'manual-cmp',
  templateUrl: './manual.component.html',
})
export class ManualComponent {
  public basePath = '/var/lib/tensor/projects';

  public isPlaybookAvailable(): boolean {
    return true;
  }
}
