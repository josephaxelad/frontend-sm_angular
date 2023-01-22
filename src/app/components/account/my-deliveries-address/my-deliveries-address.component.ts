import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-deliveries-address',
  templateUrl: './my-deliveries-address.component.html',
  styleUrls: ['./my-deliveries-address.component.scss']
})
export class MyDeliveriesAddressComponent implements OnInit {

  display : string = "all" // all,edit,add
  addressToEditId! : string
  constructor() { }

  ngOnInit(): void {
  }

  updateDisplay(screen : string){
    this.display = screen
    console.log(this.display)
  }

  updateAddressToEditId(addressToEditId : string){
    this.addressToEditId = addressToEditId
  }
}
