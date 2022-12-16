import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: 'cart', component: CartPageComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
