import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ShopComponent } from './components/shop/shop.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { LoginComponent } from './components/user/login/login.component';
import { PaymentProcedureComponent } from './components/payment-procedure/payment-procedure.component';
import { AccountComponent } from './components/account/account.component';
import { DeliveriesComponent } from './components/payment-procedure/deliveries/deliveries.component';
import { AllDeliveriesComponent } from './components/payment-procedure/deliveries/all-deliveries/all-deliveries.component';
import { AddMyDeliveriesAddressComponent } from './components/account/my-deliveries-address/add-my-deliveries-address/add-my-deliveries-address.component';
import { AddDeliveryComponent } from './components/payment-procedure/deliveries/add-delivery/add-delivery.component';
import { PaymentMethodComponent } from './components/payment-procedure/payment-method/payment-method.component';
import { PaymentComponent } from './components/payment-procedure/payment/payment.component';

const routes: Routes = [
  { path: 'accueil', component:  HomeComponent},
  { path: 'boutique', component:  ShopComponent},
  { path: 'promotion', component:  PromotionComponent},
  { path: 'blog', component:  BlogComponent},
  { path: 'panier', component:  CartComponent},
  { path: 'paiement', component:  PaymentProcedureComponent,
  children: [
    // Adresses de livraisons
    { path : 'adresse-de-livraison', component: AllDeliveriesComponent},
    { path : 'adresse-de-livraison/ajouter', component: AddDeliveryComponent},
    // Méthode de livraisons
    { path : 'methode-de-paiement', component: PaymentMethodComponent},
    // finalisation
    { path : 'finalisation', component: PaymentComponent},
    //
    { path : '', component: AllDeliveriesComponent},
    { path: '', pathMatch: 'full', redirectTo: '' },
  ]
  },
  { path: 'compte', component:  AccountComponent  },
  { path: 'connexion', component:  LoginComponent},
  { path: 'inscription', component:  SignupComponent},
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
