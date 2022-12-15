import { Component, OnInit } from '@angular/core';

import { CartService } from './features/product/services/cart.service';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private loadingService: LoadingService, private cartService: CartService) {}

  isLoading: boolean = false;
  cartText!: number;
  isLoadingText!: string;
  ngOnInit(): void {
    this.subscribeToLoading();
    this.subscribeToLoadingText();
    this.subscribeToCartText();
  }

  subscribeToLoading() {
    this.loadingService.isLoadingSubject.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  subscribeToLoadingText(){
    this.loadingService.text.subscribe((isLoadingText)=>{
      this.isLoadingText = isLoadingText;
    })
  }

  subscribeToCartText(){
    this.cartService.getList().subscribe((response) => {
      this.cartText = response.length;
    });
  }
}
