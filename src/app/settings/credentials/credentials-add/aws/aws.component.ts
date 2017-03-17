import { Component, Output, EventEmitter } from '@angular/core';
import { CredentialsType } from '../../../../models/credentials-type';

@Component({
    selector: 'aws',
    templateUrl: './aws.component.html'
})
export class AwsComponent {
    credentialsType = new CredentialsType();
    @Output() sourceControlCredentials: EventEmitter<CredentialsType> = new EventEmitter<CredentialsType>();
    
    onPasswordNotify(message: string) {
        this.credentialsType.password = message;
        this.sourceControlCredentials.emit(this.credentialsType);
    }
    onSTSTokenNotify(message: string) {
        this.credentialsType.authorize_password = message;
        this.sourceControlCredentials.emit(this.credentialsType);
    }
}