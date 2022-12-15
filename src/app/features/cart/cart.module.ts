import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
