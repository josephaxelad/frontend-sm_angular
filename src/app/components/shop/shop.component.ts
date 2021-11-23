import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  prefUrlProductsImage = `${environment.prefUrlProductsImage}`;
  categories: Category[] = [];
  products : Product[] = [];
  products_ : Product[] = [];
  numberOfElementToShow : number = 9;
  numberOfElementShowed : number = this.numberOfElementToShow;
  isShowMoreProducts : boolean = true;
  categorySelected = null ;

  constructor(private _productsService : ProductsService,private _categoriesService : CategoriesService) { }

  ngOnInit(): void {
    this._categoriesService.getCategories();
    this._productsService.getProducts();

    /**Récuperer les catégories */
    this._categoriesService.categories$.subscribe(
      (categories : Category[])=>{
        this.categories = categories
        // console.log(categories)

        /**Récuperer les produits */
        this._productsService.products$.subscribe(
          (products : Product[])=>{

              this.products_ = products?.filter((product)=>!product.isHidden && product.isVisible)?.map(
                (product : Product)=> ({...product, categoryName : categories?.find((cat)=>cat._id == product.categoryId)?.name })
              )
              if (this.numberOfElementShowed<this.products_.length) {
                this.products = this.products_?.slice(0,this.numberOfElementShowed)
              }else{
                this.products = this.products_;
                this.isShowMoreProducts = false;
              }
              // console.log(products)
          }
        )
      }
    )



  }

  getProductByCategories(categoryName: any){
    this.categorySelected = categoryName;
    if (!categoryName) {
      this.products = this.products_?.slice(0,this.numberOfElementToShow)
    } else {
      this.products = this.products_.filter((product)=>product.categoryName == categoryName)
      this.isShowMoreProducts = false;
    }
  }

  showMoreProducts(){
    this.numberOfElementShowed += this.numberOfElementToShow
    if (this.numberOfElementShowed<this.products_.length) {
      this.products = this.products_?.slice(0,this.numberOfElementShowed)
    }else{
      this.products = this.products_;
      this.isShowMoreProducts = false;
    }



  }

}
