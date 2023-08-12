import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LandingPageComponent],
})
export class ModulesModule { }
