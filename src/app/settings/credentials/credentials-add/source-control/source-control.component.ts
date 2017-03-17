import { Component, Output, EventEmitter } from '@angular/core';
import { CredentialsType } from '../../../../models/credentials-type';
@Component({
    selector: 'source-control',
    templateUrl: './source-control.component.html'
})
export class SourceControlComponent {
    credentialsType = new CredentialsType();
    @Output() sourceControlCredentials: EventEmitter<CredentialsType> = new EventEmitter<CredentialsType> ();
    onPasswordNotify(message: string) {
        this.credentialsType.password = message;
        this.sourceControlCredentials.emit(this.credentialsType);
    }
    onPassphaseNotify(message: string) {
        this.credentialsType.authorize_password = message;
        this.sourceControlCredentials.emit(this.credentialsType);
    }
}