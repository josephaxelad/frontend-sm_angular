import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';
declare const initCarousel : any;



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prefUrlProductsImage = `${environment.prefUrlProductsImage}`;
  categories: Category[] = [];
  products: Product[] = [];

  constructor(private _productsService : ProductsService,private _categoriesService : CategoriesService) {
    this._productsService.getProducts()
  }

  ngOnInit(): void {


    /**Récuperer les catégories */
    this._categoriesService.categories$.subscribe(
      (categories : Category[])=>{
        this.categories = categories

        /**Récuperer les produits */
        this._productsService.products$.asObservable().subscribe(
          (products : Product[])=>{
            this.products = products?.filter((product)=>!product.isHidden && product.isVisible && product.inTrend)?.map(
              (product : Product)=> ({...product, categoryName : this.categories?.find((cat)=>cat._id == product.categoryId)?.name })
            ).reverse()
            setTimeout(() => {
              initCarousel();
            }, 0);
          },
          (error : any)=>{

          },
          ()=>{
          }
        )
      },
      (error : any)=>{},
      ()=>{

      }
    )

  }




}
