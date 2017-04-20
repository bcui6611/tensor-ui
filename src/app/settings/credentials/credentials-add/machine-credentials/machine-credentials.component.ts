import { Component, EventEmitter, Output } from '@angular/core';
import { Credential } from '../../../../models/credential';

@Component({
  selector: 'machine-credentials',
  templateUrl: './machine-credentials.component.html'
})
export class MachineCredentialsComponent {
  public credentialsType = new Credential();
  @Output() public machineCredential: EventEmitter<Credential> = new EventEmitter<Credential>();
  public selectedPrivilege = 'none';

  public onChange() {
    console.log('chage');
  }

  public onTextChange(): void {
    this.machineCredential.emit(this.credentialsType);
  }

  // Following methods can be replaced with ngModel
  public onPasswordNotify(message: string) {
    this.credentialsType.password = message;
    this.machineCredential.emit(this.credentialsType);
  }

  public onPassphaseNotify(message: string) {
    this.credentialsType.authorize_password = message;
    this.machineCredential.emit(this.credentialsType);
  }

  public onVaultPasswordNotify(message: string) {
    this.credentialsType.vault_password = message;
    this.machineCredential.emit(this.credentialsType);
  }
}
