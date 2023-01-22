import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  faEdit=faEdit;
  cart : Cart = {cart : [],weight : 0,deliveryPrice : 0,qty : 0,price : 0};
  prefUrlProductsImage = `${environment.prefUrlProductsImage}`;
  constructor(private _cartService : CartService) { }

  ngOnInit(): void {
    /** Récupère le panier */
    this._cartService.cart$.subscribe(
      (cart : Cart)=>{
        this.cart = cart
      }
    )
  }

}
