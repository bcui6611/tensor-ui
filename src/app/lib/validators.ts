import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
export class TensorValidators {

  /**
   * Check for valid name of an object list
   */
  public static validateObjectName(objects: any[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (Validators.required(control)) {
        return null;
      }

      return objects.findIndex((x) => x.name === control.value.name) > -1 ? null : {validateOrganization: {valid: false}};
    };
  }
}
