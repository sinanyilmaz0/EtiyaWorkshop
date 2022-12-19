import { addItemToCart, removeItemFromCart } from './cart.actions';
import { createReducer, on } from '@ngrx/store';

import { CartItem } from 'src/app/features/cart/models/cartItem';

const initialState: CartItem[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state: CartItem[], action: CartItem) => {

    console.log(state, action);

    let sameProduct = state.find((p) => p.product.id == action.product.id);
    if (sameProduct) {
      
      return [...state.filter((c) => c.id != sameProduct?.id), {...sameProduct, quantity: sameProduct.quantity + action.quantity}];
    }

    return [...state, {id: Math.floor(Math.random() * 9999999) ,...action}];
  }),
  on(removeItemFromCart, (state, action) => {
    return state.filter((i) => i.id != action.id);
  })
);
