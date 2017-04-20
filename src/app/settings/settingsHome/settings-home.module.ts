import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SettingsHomeComponent } from './settings-home.component';

@NgModule({
  imports: [RouterModule],
  declarations: [SettingsHomeComponent],
  exports: [SettingsHomeComponent]
})
export class SettingsHomeModule {
}
