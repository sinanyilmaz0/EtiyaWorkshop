import { AlertComponent } from './components/alert/alert.component';
import { ButtonDirective } from './directives/button.directive';
import { CartService } from '../features/product/services/cart.service';
import { CommonModule } from '@angular/common';
import { FilterProductByPricePipe } from './pipes/filter-product-by-price.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent,
    LoadingSpinnerComponent,
    OverlayLoadingComponent,
    HighlightDirective,
    ButtonDirective,
    FilterProductByPricePipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    AlertComponent,
    NavbarComponent,
    LoadingSpinnerComponent,
    OverlayLoadingComponent,
    HighlightDirective,
    ButtonDirective,
    FilterProductByPricePipe,
  ]
})
export class SharedModule { }
