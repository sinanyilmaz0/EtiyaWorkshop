import { BehaviorSubject, Observable } from 'rxjs';
import {
  addItemToCart,
  removeItemFromCart,
} from 'src/app/shared/store/cart/cart.actions';

import { CartItem } from '../models/cartItem';
import { Injectable } from '@angular/core';
import { SharedState } from 'src/app/shared/store/shared.reducers';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemModel$: Observable<CartItem[]> = this.store.select(
    (state) => state.cart
  );

  cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  constructor(private store: Store<SharedState>) {}

  add(cartItem: CartItem) {
    let sameProduct = this.cartItems.value.find(
      (i) => i.product.id == cartItem.product.id
    );
    if (sameProduct) {
      sameProduct.quantity += cartItem.quantity;

      this.cartItems.next([
        ...this.cartItems.value.filter(
          (i) => i.product.id != cartItem.product.id
        ),
        sameProduct,
      ]);
      return;
    }

    cartItem.id = Math.floor(Math.random() * 9999999);
    this.cartItems.next([...this.cartItems.value, cartItem]);
  }

  remove(id: number) {
    this.cartItems.next(this.cartItems.value.filter((i) => i.id != id));
  }

  addState(cartItem: CartItem) {
    this.store.dispatch(addItemToCart(cartItem));
  }
  removeState(id: number) {
    this.store.dispatch(removeItemFromCart({ id }));
  }
}
