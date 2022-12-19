import { CartItem } from 'src/app/features/cart/models/cartItem';
import { cartReducer } from './cart/cart.reducer';

export const sharedReducers = {
  cart: cartReducer,
};

export interface SharedState {
  cart: CartItem[];
}
