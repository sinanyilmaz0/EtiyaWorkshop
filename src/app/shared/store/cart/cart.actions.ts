import { createAction, props } from '@ngrx/store';

import { CartItem } from 'src/app/features/cart/models/cartItem';

export const addItemToCart = createAction(
  '[Cart] Add Item To Cart',
  props<CartItem>()
);

export const removeItemFromCart = createAction(
  '[Cart] Remove Item From Cart',
  props<{ id: number }>()
);
