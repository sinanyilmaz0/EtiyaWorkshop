import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';
import { CartService } from '../../services/cart.service';
import { Products } from 'src/app/shared/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!:Products;
  @Output() onAddToCartClick = new EventEmitter<Products>();

  condition = false;
  showInput = false
  show = false;
  
  constructor(private toastrService: ToastrService, private cartService: CartService, private appComponent: AppComponent){

  }

  addToCartClick() {
    this.cartService.add(this.product).subscribe((response) => {
      this.toastrService.success('Product added successfully');
      this.appComponent.subscribeToCartText();
    });
    //this.onAddToCartClick.emit(this.product);
  }
}
