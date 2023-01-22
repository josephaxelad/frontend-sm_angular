import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { ProductCardComponent } from './components/partials/product-card/product-card.component';
import { SliderComponent } from './components/partials/slider/slider.component';
import { SliderHomeComponent } from './components/home/slider-home/slider-home.component';
import { ShopComponent } from './components/shop/shop.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { BlogComponent } from './components/blog/blog.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './components/partials/alert/alert.component';
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { PaymentProcedureComponent } from './components/payment-procedure/payment-procedure.component';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { ArchwizardModule } from 'angular-archwizard';
import { AccountComponent } from './components/account/account.component';
import { MyOrdersComponent } from './components/account/my-orders/my-orders.component';
import { EditMyPersonalsInfoComponent } from './components/account/edit-my-personals-info/edit-my-personals-info.component';
import { EditMyPasswordComponent } from './components/account/edit-my-password/edit-my-password.component';
import { LogoutComponent } from './components/account/logout/logout.component';
import { MyDeliveriesAddressComponent } from './components/account/my-deliveries-address/my-deliveries-address.component';
import { AllMyOrdersComponent } from './components/account/my-orders/all-my-orders/all-my-orders.component';
import { DetailsMyOrdersComponent } from './components/account/my-orders/details-my-orders/details-my-orders.component';
import { TrackingMyOrdersComponent } from './components/account/my-orders/tracking-my-orders/tracking-my-orders.component';
import { AddMyDeliveriesAddressComponent } from './components/account/my-deliveries-address/add-my-deliveries-address/add-my-deliveries-address.component';
import { EditMyDeliveriesAddressComponent } from './components/account/my-deliveries-address/edit-my-deliveries-address/edit-my-deliveries-address.component';
import { AllMyDeleveriesAddressComponent } from './components/account/my-deliveries-address/all-my-deleveries-address/all-my-deleveries-address.component';
import { DeliveriesComponent } from './components/payment-procedure/deliveries/deliveries.component';
import { AllDeliveriesComponent } from './components/payment-procedure/deliveries/all-deliveries/all-deliveries.component';
import { AddDeliveryComponent } from './components/payment-procedure/deliveries/add-delivery/add-delivery.component';
import { PaymentMethodComponent } from './components/payment-procedure/payment-method/payment-method.component';
import { PaymentComponent } from './components/payment-procedure/payment/payment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    SliderComponent,
    SliderHomeComponent,
    BlogComponent,
    ShopComponent,
    PromotionComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    AlertComponent,
    PaymentProcedureComponent,
    AccountComponent,
    MyOrdersComponent,
    EditMyPersonalsInfoComponent,
    EditMyPasswordComponent,
    LogoutComponent,
    MyDeliveriesAddressComponent,
    AllMyOrdersComponent,
    DetailsMyOrdersComponent,
    TrackingMyOrdersComponent,
    AddMyDeliveriesAddressComponent,
    EditMyDeliveriesAddressComponent,
    AllMyDeleveriesAddressComponent,
    DeliveriesComponent,
    AllDeliveriesComponent,
    AddDeliveryComponent,
    PaymentMethodComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgWizardModule.forRoot(ngWizardConfig),
    ArchwizardModule,
    FontAwesomeModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    // NgxIntlTelInputModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
