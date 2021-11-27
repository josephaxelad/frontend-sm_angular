import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMobileHeader = false;
  cart : Cart = {cart : [],weight : 0,deliveryPrice : 0,qty : 0,price : 0};

  constructor(private _cartService : CartService) { }

  ngOnInit(): void {

    /** Récupère le panier */
    this._cartService.cart$.subscribe(
      (cart : Cart)=>{
        this.cart = cart
      }
    )

  }

  isShowMobileHeader(){
    this.showMobileHeader = true
  }

}
