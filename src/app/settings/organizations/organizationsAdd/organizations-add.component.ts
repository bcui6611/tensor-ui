import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'organizations-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './organizations-add.component.html'
})
export class OrganizationsAddComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `OrganizationAdd` component');
  }
}
