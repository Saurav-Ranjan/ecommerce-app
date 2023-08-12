import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserLoginComponent} from '../app/Admin/user-login/user-login.component'
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'admin', component: UserLoginComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
