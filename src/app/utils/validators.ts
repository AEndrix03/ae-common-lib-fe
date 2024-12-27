import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const emailValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) {
    return null;
  }
  const email = control.value as string;
  return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? null : {email: true};
};

export const matchValidator = (controlName: string, matchingControlName: string): ValidatorFn => {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);
    if (!control || !matchingControl) {
      return null;
    }
    return control.value === matchingControl.value ? null : {match: true};
  };
};
