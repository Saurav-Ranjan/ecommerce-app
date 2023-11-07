import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserLoginComponent} from '../app/Admin/user-login/user-login.component'
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';
import { CartComponent } from './modules/cart/cart.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'admin', component: UserLoginComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
