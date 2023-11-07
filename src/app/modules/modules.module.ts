import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CartComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LandingPageComponent],
})
export class ModulesModule { }
