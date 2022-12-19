import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './components/alert/alert.component';
import { ButtonDirective } from './directives/button.directive';
import { CommonModule } from '@angular/common';
import { FilterProductByPricePipe } from '../features/product/pipes/filter-product-by-price.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { SharedRoutingModule } from './shared-routing.module';
import { StoreModule } from '@ngrx/store';
import { sharedReducers } from './store/shared.reducers';

@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent,
    LoadingSpinnerComponent,
    OverlayLoadingComponent,
    HighlightDirective,
    ButtonDirective,
    FilterProductByPricePipe,
    LoginPageComponent,
    MainLayoutComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(sharedReducers),
   
  ],
  exports: [
    AlertComponent,
    NavbarComponent,
    LoadingSpinnerComponent,
    OverlayLoadingComponent,
    HighlightDirective,
    ButtonDirective,
    FilterProductByPricePipe,
    MainLayoutComponent,

  ]
})
export class SharedModule { }
