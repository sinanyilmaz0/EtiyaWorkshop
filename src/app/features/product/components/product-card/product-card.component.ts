import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CartService } from '../../services/cart.service';
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
    this.cartService.add(this.product).subscribe(() => {
      this.toastrService.success('Product added successfully');
      this.mainLayout.subscribeToCartText();
    });
    //this.onAddToCartClick.emit(this.product);
  }
}
