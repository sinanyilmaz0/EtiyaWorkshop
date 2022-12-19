import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/features/cart/service/cart.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent{
  cartText!: number;

  constructor(private cartService: CartService) {}


}
