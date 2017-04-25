import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true
    },
  ]
})
export class InputPasswordComponent implements ControlValueAccessor{
  // public passwordText: string;
  public showMessage = 'Show';
  public inputType = 'password';

  @Input('value') _value: string;

  @Output() public password: EventEmitter<string> = new EventEmitter<string>();

  public registerOnChange(fn) {
    this.onChange = fn;
  }

  public registerOnTouched(fn) {
    this.onTouched = fn;
  }

  public get value() {
    return this._value;
  }

  public writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  public set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

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
    this.password.emit(this._value);
  }

  private onChange: any = () => { };
  private onTouched: any = () => { };

}
