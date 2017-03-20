import { Component, Output, EventEmitter } from '@angular/core';
import { Credential } from '../../../../models/credential';
@Component({
    selector: 'source-control',
    templateUrl: './source-control.component.html'
})
export class SourceControlComponent {
    credential = new Credential();
    @Output() sourceControlCredentials: EventEmitter<Credential> = new EventEmitter<Credential> ();
    onPasswordNotify(message: string) {
        this.credential.password = message;
        this.sourceControlCredentials.emit(this.credential);
    }
    onPassphaseNotify(message: string) {
        this.credential.authorize_password = message;
        this.sourceControlCredentials.emit(this.credential);
    }
}
