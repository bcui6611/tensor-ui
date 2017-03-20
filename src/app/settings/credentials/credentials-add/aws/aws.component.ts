import { Component, Output, EventEmitter } from '@angular/core';
import { Credential } from '../../../../models/credential';

@Component({
    selector: 'aws',
    templateUrl: './aws.component.html'
})
export class AwsComponent {
    credential = new Credential();
    @Output() sourceControlCredentials: EventEmitter<Credential> = new EventEmitter<Credential>();

    onPasswordNotify(message: string) {
        this.credential.password = message;
        this.sourceControlCredentials.emit(this.credential);
    }
    onSTSTokenNotify(message: string) {
        this.credential.authorize_password = message;
        this.sourceControlCredentials.emit(this.credential);
    }
}
