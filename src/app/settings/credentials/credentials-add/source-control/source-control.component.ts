import { Component, EventEmitter, Output } from '@angular/core';
import { Credential } from '../../../../models/credential';
@Component({
  selector: 'source-control',
  templateUrl: './source-control.component.html'
})
export class SourceControlComponent {
  public credential = new Credential();
  @Output() public sourceControlCredentials: EventEmitter<Credential>
    = new EventEmitter<Credential>();

  public onPasswordNotify(message: string) {
    this.credential.password = message;
    this.sourceControlCredentials.emit(this.credential);
  }

  public onPassphaseNotify(message: string) {
    this.credential.authorize_password = message;
    this.sourceControlCredentials.emit(this.credential);
  }

  public onTextChange(message: string) {
    this.credential.username = message;
    this.sourceControlCredentials.emit(this.credential);
  }
}
