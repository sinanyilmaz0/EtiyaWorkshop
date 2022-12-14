import { CartItem } from '../../models/cartItem';
import { CartService } from 'src/app/features/cart/service/cart.service';
import { Component } from '@angular/core';
import { GetListOptionsType } from 'src/app/shared/models/get-list-options';
import { MainLayoutComponent } from 'src/app/shared/components/main-layout/main-layout.component';
import { Products } from 'src/app/shared/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  products!: Products[];
  isLoading: number = 0;
  total: number = 0.0;

  constructor(
   // private cartService: CartService,
    private toastrService: ToastrService,
    private mainLayout: MainLayoutComponent,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //this.isLoading = this.isLoading + 2;
    //this.getCartList();
    this.subscribeToCartService();
  }

  // getCartList(options?: GetListOptionsType): void {
  //   this.isLoading = this.isLoading + 1;
  //   this.cartService.getList(options).subscribe({
  //     next: (response) => {
  //       this.products = response;
  //       if (this.isLoading > 0) this.isLoading = this.isLoading - 1;
  //     },
  //     error: () => {
  //       //this.errorAlertMessage = "Server Error. Couldn't get products list.";
  //       if (this.isLoading > 0) this.isLoading = this.isLoading - 1;
  //     },
  //     complete: () => {
  //       this.findTotal();
  //     },
  //   });
  // }

  findTotal(): void {
    this.total = 0;
    this.products.forEach((product) => {
      this.total = this.total + product.unitPrice;
    });
  }

  // deleteProductFromCard(id: number) {
  //   if (confirm('Are you sure you want to delete this product?') === false)
  //     return;

  //   this.cartService.delete(id).subscribe(() => {
  //     this.toastrService.success('Product deleted successfully');
  //     this.mainLayout.subscribeToCartText();
  //   });
    
  //   this.findTotal();
  //   this.getCartList();
  // }


  cartItems: CartItem[] = [];

  subscribeToCartService() {
    this.cartService.cartItems.subscribe((response) => {
      this.cartItems = response;
    });
  }
}
