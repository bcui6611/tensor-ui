import { NgModule } from '@angular/core';
import { TopNavComponent } from './topnav.component';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [RouterModule, NgbCollapseModule],
  declarations: [TopNavComponent],
  exports: [TopNavComponent]
})
export class TopNavModule {
}
