import { AlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ButtonDirective } from './directives/button.directive';
import { FilterProductByPricePipe } from './pipes/filter-product-by-price.pipe';

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
