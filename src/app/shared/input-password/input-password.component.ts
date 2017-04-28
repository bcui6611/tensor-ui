import { Component, EventEmitter, forwardRef, Input, Output, Provider, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_PASSWORD_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputPasswordComponent),
  multi: true
};

@Component({
  selector: 'input-password',
  templateUrl: './input-password.component.html',
  providers: [INPUT_PASSWORD_CONTROL_VALUE_ACCESSOR],
  encapsulation: ViewEncapsulation.None,
})
export class InputPasswordComponent implements ControlValueAccessor {
  // public passwordText: string;
  public showMessage = 'Show';
  public inputType = 'password';

  @Output() public password: EventEmitter<string> = new EventEmitter<string>();
  @Input() public disabled: boolean;

  private _value: string;

  public registerOnChange(fn) {
    this.onChange = fn;
  }

  public registerOnTouched(fn) {
    this.onTouched = fn;
  }

  public get value() {
    return this._value;
  }

  @Input('value') public set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  public writeValue(value) {
    if (value) {
      this._value = value;
    }
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

  private onChange: any = () => {
    this.password.emit(this._value);
  }

  private onTouched: any = () => {
    console.log('on touched');
  }
}
