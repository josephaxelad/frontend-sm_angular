import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-deliveries',
  templateUrl: './all-deliveries.component.html',
  styleUrls: ['./all-deliveries.component.scss']
})
export class AllDeliveriesComponent implements OnInit {

  isAuth : boolean = false
  isShowNewDeliveryAddress : boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  // const newDeliveryAddress = {
  //   'address' : address,
  //   'zip' : zip,
  //   'country' : country,
  //   'city' : city,
  //   'phone' : phone,
  //   'email' : email
  // };

  changeDeliveryAddress(e : any){
    if (e.target.value=='0') {
      this.isShowNewDeliveryAddress = true
    } else {
      this.isShowNewDeliveryAddress = false
    }
  }

}
