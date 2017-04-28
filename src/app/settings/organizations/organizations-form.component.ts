import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'organizations-form',
  templateUrl: './organizations-form.component.html'
})
export class OrganizationsFormComponent implements OnInit {
  public ngOnInit(): void {
    console.log('hello `OrganizationEdit` component');
  }
}
