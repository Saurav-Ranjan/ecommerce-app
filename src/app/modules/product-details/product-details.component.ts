import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  product: any;
  productId: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productId = this.activeRoute.snapshot.paramMap.get('id');
   this.productService.getProductById(this.productId).subscribe((res:any) => {
    if (res ){
      this.product = res;
      console.log("product",this.product);
    }
  });

  }
}
