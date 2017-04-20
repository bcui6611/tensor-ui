import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.component.html'
})
export class InputPasswordComponent {
  public passwordText: string;

  @Output() public password: EventEmitter<string> = new EventEmitter<string>();

  public showMessage = 'Show';
  public inputType = 'password';

  public toggleShowType() {
    if (this.showMessage === 'Show') {
      this.showMessage = 'Hide';
      this.inputType = 'text';
    } else {
      this.showMessage = 'Show';
      this.inputType = 'password';
    }
  }

  // Send string of the password field to container of this component
  public onTextChange(): void {
    this.password.emit(this.passwordText);
  }
}
