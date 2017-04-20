import { Component, EventEmitter, Output } from '@angular/core';
import { Credential } from '../../../../models/credential';

@Component({
  selector: 'aws',
  templateUrl: './aws.component.html'
})
export class AwsComponent {
  public credential = new Credential();
  @Output() public sourceControlCredentials: EventEmitter<Credential>
    = new EventEmitter<Credential>();

  public onPasswordNotify(message: string) {
    this.credential.password = message;
    this.sourceControlCredentials.emit(this.credential);
  }

  public onSTSTokenNotify(message: string) {
    this.credential.authorize_password = message;
    this.sourceControlCredentials.emit(this.credential);
  }

  public onTextChange(message: string) {
    this.credential.username = message;
    this.sourceControlCredentials.emit(this.credential);
  }
}
