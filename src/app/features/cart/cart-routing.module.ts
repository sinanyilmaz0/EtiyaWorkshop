import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: 'cart', component: CartPageComponent, canActivate: [AuthGuard] },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
