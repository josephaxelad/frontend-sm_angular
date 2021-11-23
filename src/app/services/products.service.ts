import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products!: Product[];
  products$ = new BehaviorSubject<Product[]>([]);

  constructor(private _http : HttpClient) {
    this.getProducts()
   }

  /**
   * Récupères les produits
   */
   getProducts(){
    this._http.get(environment.api+'product/getAll').subscribe(
      (products : any) => {
        this.products = products ;
        this.emitProducts();
      },
      (error) => {
        console.log(error)
      }
    );
  }

  /**
   * émettre des catégories
   */
   emitProducts(){
    this.products$.next(this.products)
  }

}
