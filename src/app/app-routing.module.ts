import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: 'accueil', component:  HomeComponent},
  { path: 'boutique', component:  ShopComponent},
  { path: 'promotion', component:  PromotionComponent},
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
