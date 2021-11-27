import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

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

  /**
   * Ajoute un produit au panier
   * @param product
   */
  addProductToCart(product : Product): void{
    this._cartService.addProductToCart(product);
  }

  /**
   * Retire un produit du panier
   * @param product
   */
  deleteFromCart(product : Product): void{
    this._cartService.deleteFromCart(product);
  }

  /**
   * Supprime un produit du panier
   * @param index
   */
  removeElementOfCart(index : number){
    this._cartService.removeElementOfCart(index);
  }

}
