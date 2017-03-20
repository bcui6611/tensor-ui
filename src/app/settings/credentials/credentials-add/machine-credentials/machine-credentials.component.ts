import { Component, Output, EventEmitter } from '@angular/core';
import { Credential } from '../../../../models/credential';

@Component({
    selector: 'machine-credentials',
    templateUrl: './machine-credentials.component.html'
})
export class MachineCredentialsComponent {
    credentialsType = new Credential();
    selectedPrivilege = "none"
    @Output() machineCredential: EventEmitter<Credential> = new EventEmitter<Credential> ();

    onChange() {

    }

    onTextChange(): void {
        this.machineCredential.emit(this.credentialsType);
    }

    // Following methods can be replaced with ngModel
    onPasswordNotify(message: string) {
        this.credentialsType.password = message;
        this.machineCredential.emit(this.credentialsType);
    }
    onPassphaseNotify(message: string) {
        this.credentialsType.authorize_password = message;
        this.machineCredential.emit(this.credentialsType);
    }
    onVaultPasswordNotify(message: string) {
        this.credentialsType.vault_password = message
        this.machineCredential.emit(this.credentialsType);
    }
}
