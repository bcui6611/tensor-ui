import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'input-password',
    templateUrl: './input-password.component.html'
})
export class InputPassword {
    passwordText: string;

    @Output() password: EventEmitter<string> = new EventEmitter<string>()

    showMessage = 'Show';
    inputType = 'password';

    toggleShowType() {
        if (this.showMessage === 'Show') {
            this.showMessage = 'Hide'
            this.inputType = 'text'
        }
        else {
            this.showMessage = 'Show';
            this.inputType = 'password'
        }
    }

    // Send string of the password field to container of this component
    onTextChange(): void {
        this.password.emit(this.passwordText);
    }
}