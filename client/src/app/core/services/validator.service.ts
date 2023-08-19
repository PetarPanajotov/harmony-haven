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
    destinationLocation: /^[A-Z][a-zA-Z]+,\s[A-Z][a-zA-Z\s]+$/,
    destinationImgURL: /(http(s?):)/,
    hotelName: /^[a-zA-Z\s]+$/,
    hotelLocation: /^[A-Z][a-zA-Z]+,\s[A-Z][a-zA-Z\s]+$/,
    hotelImgURL: /(http(s?):)/,
    hotelPrice: /^\d+(\.\d{1,2})?$/,
    hotelFreeRooms: /^(?:[1-9]\d{0,2}|1000)$/
  }
  constructor() { }
  
  patternValidator(pattern: RegExp, errorKey: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = (control.value).toString();
      
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
  //create hotel and edit validators
  customHotelNameValidator(): ValidatorFn {
    return this.patternValidator(this.validationPatterns.hotelName, 'customHotelName')
  };
  customHotelLocationValidator(): ValidatorFn {
    return this.patternValidator(this.validationPatterns.hotelLocation, 'customHotelLocation')
  };
  customHotelImgURLValidator(): ValidatorFn {
    return this.patternValidator(this.validationPatterns.hotelImgURL, 'customHotelImgURL')
  };
  customHotelPriceValidator(): ValidatorFn {
    return this.patternValidator(this.validationPatterns.hotelPrice, 'customHotelPrice');
  };
  customHotelFreeRoomsValidator(): ValidatorFn {
    return this.patternValidator(this.validationPatterns.hotelFreeRooms, 'customHotelFreeRooms')
  }
};
