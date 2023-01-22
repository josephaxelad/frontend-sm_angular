import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  showMobileHeader = false;
  cart : Cart = {cart : [],weight : 0,deliveryPrice : 0,qty : 0,price : 0};
  public isAuth: boolean = false;
  private isAuthSub!: Subscription;
  currentUser! : User | undefined;

  constructor(private _cartService : CartService,private _authService : AuthService,private _router : Router,private _userService : UserService) { }

  ngOnInit(): void {
    this._userService.getCurrentCustomer()
    //Vérifier si un utilisateur est connecté
    this.isAuthSub = this._authService.isAuth$.subscribe(
      (isAuth) => {
        this.isAuth = isAuth;
      }
    );

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

  logout(){
    this.isAuth = false;
    this.currentUser=undefined;
    this._authService.logout()
  }

  ngOnDestroy() {
    this.isAuthSub.unsubscribe();
  }

}
