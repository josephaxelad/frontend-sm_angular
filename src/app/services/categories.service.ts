import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories!: Category[];
  categories$ = new BehaviorSubject<Category[]>([]);

  constructor(private _http : HttpClient) {
    this.getCategories();
  }

  /**
   * Récupères les catégories
   */
   getCategories(){
    this._http.get(environment.api+'category/getVeryAll').subscribe(
      (categories : any) => {
        this.categories = categories ;
        this.emitCategories();
      },
      (error) => {
        switch (error.status) {
          case 401:
            // this._authServices.logout()
            break;
        }
        console.log(error)
      }
    );
  }

  /**
   * émettre des catégories
   */
   emitCategories(){
    this.categories$.next(this.categories)
  }

}
