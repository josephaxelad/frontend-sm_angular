import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPlus,faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-my-deleveries-address',
  templateUrl: './all-my-deleveries-address.component.html',
  styleUrls: ['./all-my-deleveries-address.component.scss']
})
export class AllMyDeleveriesAddressComponent implements OnInit {

  faPlus=faPlus;
  faTrash=faTrash;
  faPen=faPen;
  @Output() display = new EventEmitter<string>()
  @Output() addressToEditId = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  updateDisplay(screen : string){
    this.display.emit(screen)
  }

  updateAddressToEditId(id : string){
    this.addressToEditId.emit(id)
  }

}
