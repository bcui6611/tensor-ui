import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'team-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team-edit.component.html',
})
export class TeamEditComponent implements OnInit {
  public ngOnInit(): void {
    console.log('hello `TeamEdit` component');
  }
}
