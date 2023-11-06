import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[] = [];
  quantities: number[] = [1, 2, 3, 4, 5];



  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    console.log("abc")
  }
}
