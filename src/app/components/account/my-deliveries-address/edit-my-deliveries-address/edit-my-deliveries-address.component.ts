import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-my-deliveries-address',
  templateUrl: './edit-my-deliveries-address.component.html',
  styleUrls: ['./edit-my-deliveries-address.component.scss']
})
export class EditMyDeliveriesAddressComponent implements OnInit {

  faArrowLeft=faArrowLeft;
  @Output() display = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  updateDisplay(screen : string){
    this.display.emit(screen)
  }

}
