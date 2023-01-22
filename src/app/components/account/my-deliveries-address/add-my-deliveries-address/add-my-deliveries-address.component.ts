import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-add-my-deliveries-address',
  templateUrl: './add-my-deliveries-address.component.html',
  styleUrls: ['./add-my-deliveries-address.component.scss']
})
export class AddMyDeliveriesAddressComponent implements OnInit {

  faArrowLeft=faArrowLeft;
  @Output() display = new EventEmitter<string>()
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  addMyDeliveryAddressForm!: FormGroup;
  submitted: boolean = false;
  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.addMyDeliveryAddressForm = this._fb.group({
      address1 : this._fb.control('',Validators.required),
      address2 : this._fb.control(''),
      zip : this._fb.control('',Validators.required),
      phone : this._fb.control(undefined,Validators.required),
      idCountry : this._fb.control('',Validators.required),
      city : this._fb.control('',Validators.required),
    })
  }

  updateDisplay(screen : string){
    this.display.emit(screen)
  }

  addMyDeliveryAddress(){
    this.submitted = true;
    if(this.addMyDeliveryAddressForm.valid){
      const address1 = this.addMyDeliveryAddressForm.get('address1')?.value;
      const address2 = this.addMyDeliveryAddressForm.get('address2')?.value;
      const zip = this.addMyDeliveryAddressForm.get('zip')?.value;
      const phone = this.addMyDeliveryAddressForm.get('phone')?.value;
      const idCountry = this.addMyDeliveryAddressForm.get('idCountry')?.value;
      const city = this.addMyDeliveryAddressForm.get('city')?.value;

      const address = {
        address1:address1,
        address2:address2,
        zip:zip,
        phone:phone,
        idCountry:idCountry,
        city:city,
      }

      console.log(address)

      // this._userService.modifyPassword(oldPassword,newPassword)
      // .then((message)=>{
      //   this.submitted = false;
      //   this.addMyDeliveryAddressForm.reset()
      //   this._alertsService.success(message,
      //     {
      //       autoClose: true,
      //       keepAfterRouteChange: false,
      //     })
      // })
      // .catch((error)=>{
      //   this.submitted = false;
      //   this._alertsService.error(error.message,
      //     {
      //       autoClose: true,
      //       keepAfterRouteChange: false,
      //     })
      // })
    }
  }
}
