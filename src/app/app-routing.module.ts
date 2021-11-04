import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: 'accueil', component:  HomeComponent},
  { path: 'boutique', component:  ShopComponent},
  { path: 'promotion', component:  PromotionComponent},
  { path: 'blog', component:  BlogComponent},
  { path: 'panier', component:  CartComponent},
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
