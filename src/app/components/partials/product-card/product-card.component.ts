import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() btnAcheter : boolean = true;
  @Input() badgeNew : boolean = false;
  @Input() product!: Product;
  prefUrlProductsImage = `${environment.prefUrlProductsImage}`;

  constructor(private _cartService : CartService) { }

  ngOnInit(): void {
  }

  /**
   * Ajoute un produit au panier
   * @param product
   */
   addProductToCart(product : Product): void{
    this._cartService.addProductToCart(product);

  }

}
