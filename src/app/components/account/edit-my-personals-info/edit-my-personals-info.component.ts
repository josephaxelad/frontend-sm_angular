import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { AlertsService } from 'src/app/services/alerts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-my-personals-info',
  templateUrl: './edit-my-personals-info.component.html',
  styleUrls: ['./edit-my-personals-info.component.scss']
})
export class EditMyPersonalsInfoComponent implements OnInit {

  editCustomerPersonalsInfoPasswordForm!: FormGroup;
  submitted: boolean = false;
  constructor(private _fb : FormBuilder,private _userService : UserService,private _alertsService : AlertsService) {
    this.editCustomerPersonalsInfoPasswordForm = this._fb.group({
      firstname : this._fb.control('',Validators.required),
      lastname : this._fb.control('',Validators.required),
      email : this._fb.control('',[Validators.required,Validators.email]),
      sex : this._fb.control('',Validators.required),
      birthday : this._fb.control(''),
      phone : this._fb.control('',Validators.required),
    })
  }

  ngOnInit(): void {
    this._userService.currentUser$.subscribe(
      (currentCustomer : Customer)=>{
        this.editCustomerPersonalsInfoPasswordForm.get('firstname')?.setValue(currentCustomer.firstname)
        this.editCustomerPersonalsInfoPasswordForm.get('lastname')?.setValue(currentCustomer.lastname)
        this.editCustomerPersonalsInfoPasswordForm.get('email')?.setValue(currentCustomer.email)
        this.editCustomerPersonalsInfoPasswordForm.get('sex')?.setValue(currentCustomer.sex)
        this.editCustomerPersonalsInfoPasswordForm.get('birthday')?.setValue(currentCustomer.birthday)
        this.editCustomerPersonalsInfoPasswordForm.get('phone')?.setValue(currentCustomer.phone)
      }
    )
  }

  modify(){

    this.submitted = true;

    if(this.editCustomerPersonalsInfoPasswordForm.valid){
      const firstname = this.editCustomerPersonalsInfoPasswordForm.get('firstname')?.value;
      const lastname = this.editCustomerPersonalsInfoPasswordForm.get('lastname')?.value;
      const email = this.editCustomerPersonalsInfoPasswordForm.get('email')?.value;
      const sex = this.editCustomerPersonalsInfoPasswordForm.get('sex')?.value;
      const birthday = this.editCustomerPersonalsInfoPasswordForm.get('birthday')?.value;
      const phone = this.editCustomerPersonalsInfoPasswordForm.get('phone')?.value;

      const customer : Customer = {
        firstname : firstname,
        lastname : lastname,
        email : email,
        sex : sex,
        birthday : birthday,
        phone : phone,
      }


      this._userService.modifyCustomerPersonalsInfo(customer)
      .then((message)=>{
        this.submitted = false;
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
