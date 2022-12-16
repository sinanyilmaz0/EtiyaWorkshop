import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/features/product/services/cart.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  cartText!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscribeToCartText();
  }
  
  subscribeToCartText() {
    this.cartService.getList().subscribe((response) => {
      this.cartText = response.length;
    });
  }

}
