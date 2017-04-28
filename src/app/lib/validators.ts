import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
export class TensorValidators {

  /**
   * Check for valid organization selections
   */
  public static validateOrganization(organizations: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (Validators.required(control)) {
        return null;
      }
      let v: string = control.value;

      if (control.value instanceof Object) { // special case for organization typehead
        return organizations.indexOf(control.value.name) > -1 ? null : {validateOrganization: {valid: false}};
      }
      return organizations.indexOf(control.value) > -1 ? null : {validateOrganization: {valid: false}};
    };
  }
}
