import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardProductsListComponentComponent } from './components/dashboard-products-list-component/dashboard-products-list-component.component';
import { DashboardProductsPageComponent } from 'src/app/features/product/pages/dashboard-products-page/dashboard-products-page.component';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    DashboardProductsPageComponent,
    DashboardProductsListComponentComponent,
    ProductFormComponent,
    ProductFormPageComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
  ],
  exports: [
    ProductsComponent,
  ]
})
export class ProductModule { }
