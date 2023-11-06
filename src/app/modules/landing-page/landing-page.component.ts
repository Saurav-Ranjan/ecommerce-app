import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  ProductArr: any= [];

  constructor(private productService: ProductService, private router: Router , private CartService:CartService) {}

  ngOnInit(){
  this.getAllProducts();
  }


  // getAllProducts() {
  //   this.productService.getAllProducts().subscribe((res:any) => {
  //     if(res){
  //       this.ProductArr = res;
  //       console.log("ProductArr",this.ProductArr);
  //     }
  //     else{
  //       console.log("No Product Found");
  //     }
  //   });
  //   (error: any) => {
  //     console.error('Error loading products:', error);
  //   }
  // }


getAllProducts(){
  this.ProductArr = this.productService.getAllProducts();
}


  goToProductDetails(productId: string) {
    this.router.navigate(['/product-details', productId]);
  }

  addToCart(product: any) {
    this.CartService.addToCart(product);
    this.router.navigate(['/cart']);
  }

}
