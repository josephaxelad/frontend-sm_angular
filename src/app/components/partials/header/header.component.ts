import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMobileHeader = false;

  constructor() { }

  ngOnInit(): void {
  }

  isShowMobileHeader(){
    this.showMobileHeader = true
    console.log(this.showMobileHeader)
  }

}
