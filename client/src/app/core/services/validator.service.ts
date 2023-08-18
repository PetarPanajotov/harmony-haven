import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  validationPatterns = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    firstName: /^[a-zA-Z]+$/,
    lastName: /^[a-zA-Z]+$/,
    destinationName: /^[a-zA-Z\s]+$/,
    destinationLocation: /^[a-zA-Z\s]+$/,
    destinationImgURL: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
  }
  constructor() { }
  
  patternValidator(pattern: RegExp, errorKey: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const valid = value && value.match(pattern)
      return valid ? null : { [errorKey]: true };
    };
  }
  matchPasswordValidator(passwordControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const repeatPassword = control.value;
      const password = control.parent?.get(passwordControlName)?.value

      if(password && repeatPassword !== password) {
        return { customRepeatPassword: true }
      };
      return null;
    };
  };
  //register validators
  customEmailValidator(): ValidatorFn {
    return this.patternValidator(this.validationPatterns.email, 'customEmail')
  };
  customFirstNameValidator(): ValidatorFn {
    return this.patternValidator(this.validationPatterns.firstName, 'customFirstName')
  };
  customLastNameValidator(): ValidatorFn {
    return this.patternValidator(this.validationPatterns.lastName, 'customLastName')
  }
  //create destination validators
  customDestinationNameValidator(): ValidatorFn {
    return this.patternValidator(this.validationPatterns.destinationName, 'customDestinationName')
  }
  customDestinationLocationValidator(): ValidatorFn {
    return this.patternValidator(this.validationPatterns.destinationLocation, 'customDestinationLocation')
  };
  customDestinationImgURLValidator(): ValidatorFn {
    return this.patternValidator(this.validationPatterns.destinationImgURL, 'customDestinationImgURL')
  };
};
