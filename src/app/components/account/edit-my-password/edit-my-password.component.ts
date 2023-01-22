import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/services/alerts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-my-password',
  templateUrl: './edit-my-password.component.html',
  styleUrls: ['./edit-my-password.component.scss']
})
export class EditMyPasswordComponent implements OnInit {

  editCustomerPasswordForm!: FormGroup;
  submitted: boolean = false;
  constructor(private _fb : FormBuilder,private _userService : UserService,private _alertsService : AlertsService) { }

  ngOnInit(): void {
    //
    this.editCustomerPasswordForm = this._fb.group({
      oldPassword : this._fb.control('',Validators.required),
      newPassword : this._fb.control('',Validators.required),
      reNewPassword : this._fb.control('',Validators.required),
    },{
      validator: MustMatch('newPassword', 'reNewPassword')
    })
  }

  modifyPassword(){

    this.submitted = true;

    if(this.editCustomerPasswordForm.valid){
      const oldPassword = this.editCustomerPasswordForm.get('oldPassword')?.value;
      const newPassword = this.editCustomerPasswordForm.get('newPassword')?.value;

      this._userService.modifyPassword(oldPassword,newPassword)
      .then((message)=>{
        this.submitted = false;
        this.editCustomerPasswordForm.reset()
        this._alertsService.success(message,
          {
            autoClose: true,
            keepAfterRouteChange: false,
          })
      })
      .catch((error)=>{
        this.submitted = false;
        this._alertsService.error(error.message,
          {
            autoClose: true,
            keepAfterRouteChange: false,
          })
      })
    }
  }

}

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
