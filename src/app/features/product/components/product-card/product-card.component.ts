import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CartService } from 'src/app/features/cart/service/cart.service';
import { MainLayoutComponent } from 'src/app/shared/components/main-layout/main-layout.component';
import { Products } from 'src/app/shared/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Products;
  @Output() onAddToCartClick = new EventEmitter<Products>();

  condition = false;
  showInput = false;
  show = false;

  constructor(
    private toastrService: ToastrService,
    private cartService: CartService,
    private mainLayout: MainLayoutComponent
  ) {}

  addToCartClick() {
    
    this.onAddToCartClick.emit(this.product);
  }
}
