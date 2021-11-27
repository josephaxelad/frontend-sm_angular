import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart';
import { CartLine } from '../models/cart-line';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { CategoriesService } from './categories.service';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = {cart : [],weight : 0,deliveryPrice : 0,qty : 0,price : 0} ;
  cart$ = new BehaviorSubject<Cart>({cart : [],weight : 0,deliveryPrice : 0,qty : 0,price : 0});
  products : Product[] = [];
  categories: Category[] = [];

  constructor(private _productsService : ProductsService,private _categoriesService : CategoriesService) {
    this._categoriesService.categories$.subscribe(
      (categories : Category[])=>{
        this._productsService.products$.subscribe(

          (products : Product[])=>{
            this.products = products?.filter((product)=>!product.isHidden && product.isVisible)?.map(
              (product : Product)=> ({...product, categoryName : categories?.find((cat)=>cat._id == product.categoryId)?.name })
            )
            this.initCart();
          },
          (error:any)=>{

          },
          ()=>{
            // this.initCart();
          }
        )
      }
    )



  }

  initCart(): void{
    this.cart.qty=0;
    this.cart.price=0;
    if (typeof(localStorage) !== 'undefined') {
      if (JSON.parse(localStorage.getItem('cart')!)) {
        const cart : CartLine[] = JSON.parse(localStorage.getItem('cart')!);
        this.cart.cart = cart.map(
          (cartLine)=>({
            qty : cartLine.qty,
            id : cartLine.id,
            product : this.products.find((product)=>product?._id == cartLine.id)!
          }));
        this.cart.cart.forEach((cartLine,index)=>{
          if (cartLine.qty>0) {// && cartLine.product
            const cartLineProductPrice = cartLine.product?.inPromotion ? cartLine.product.promotionPrice : cartLine.product?.price ;
            this.cart.qty += cartLine.qty;
            this.cart.price += (cartLine.qty*cartLineProductPrice!)
          } else {
            this.removeElementOfCart(index)
          }
        })
      } else {
        this.cart = {cart : [],weight : 0,deliveryPrice : 0,qty : 0,price : 0} ;
      }
    }
    this.emitCart();

  }

  updateCart(){
    this.cart.qty=0;
    this.cart.price=0;

    this.cart.cart.forEach(cartLine => {
      const cartLineProductPrice = cartLine.product?.inPromotion ? cartLine.product.promotionPrice : cartLine.product?.price ;
      this.cart.qty += cartLine.qty;
      this.cart.price += (cartLine.qty*cartLineProductPrice!)
    });

    if (typeof(localStorage) !== "undefined") {
      const cart = this.cart.cart.map((cartLine)=>({qty : cartLine.qty, id : cartLine.id}))
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  emitCart(){
    this.cart$.next(this.cart)
  }

  /**
   * Ajoute un produit au panier
   * @param product
   */
  addProductToCart(product : Product): void{
    const cartLine = this.cart.cart.find((cartLine : CartLine)=>product._id == cartLine.product?._id )
    if ( cartLine ) {
      cartLine.qty++;
    } else {
      this.cart.cart.push({qty : 1,id : product._id!,product : product});
    }

    this.updateCart();
    this.emitCart();
  }

  /**
   * Retire un produit du panier
   * @param product
   */
  deleteFromCart(product : Product): void{
    const cartLine = this.cart.cart.find((cartLine : CartLine)=>product._id == cartLine.product?._id );
    const cartLineIndex = this.cart.cart.findIndex((cartLine : CartLine)=>product._id == cartLine.product?._id);
    if ( cartLine ) {
      if (cartLine.qty>1) {
        cartLine.qty--;

        this.updateCart();
        this.emitCart();
      } else {
        this.removeElementOfCart(cartLineIndex)
      }
    }
  }

  /**
   * Supprime un produit du panier
   * @param index
   */
  removeElementOfCart(index : number){
    this.cart.cart.splice(index,1);

    this.updateCart();
    this.emitCart();
  }

}
