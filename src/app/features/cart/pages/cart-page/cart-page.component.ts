import { CartItem } from '../../models/cartItem';
import { CartService } from '../../service/cart.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cartItems: CartItem[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscribeToCartService();
  }

  subscribeToCartService() {
    this.cartService.cartItemModel$.subscribe((response) => {
      this.cartItems = response;
    });
  }

  removeItem(cartItem: CartItem) {
    if (cartItem.id) this.cartService.removeState(cartItem.id);
  }
}
