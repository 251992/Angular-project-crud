import { Directive } from '@angular/core';
import {Validator,NG_VALIDATORS, AbstractControl, ValidationErrors} from '@angular/forms'
@Directive({
  selector: '[appConfirmpassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: ConfirmpasswordDirective, multi: true}]
})
export class ConfirmpasswordDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
   let cpass=control.value
    let pass=control.parent?.controls?.password.value
  //  if(pass==cpass)
    //return null
   // else
    return {"passwordmatched":true}
  }

}
